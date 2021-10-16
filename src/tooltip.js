const opts = {
	delay: 500,
	center: true,
	offsetX: 0,
	offsetY: 20
}

const tooltips = []

function getTransitionDuration(computedStyle) {
	const i = computedStyle
		.getPropertyValue('transition-property')
		.split(', ')
		.findIndex(p => p == 'opacity')
	if (i != -1)
		return Number(
			computedStyle.getPropertyValue('transition-duration').split('s, ')[i]
		)
	return 0
}

class Tooltip {
	constructor(text) {
		Object.assign(this, opts)
		this.el = document.createElement('div')
		this.el.textContent = text
		this.el.className = 'tooltip'
		Object.assign(this.el.style, {
			position: 'fixed',
			opacity: 0
		})
		this.state = 'hidden'
		this.id = tooltips.length

		tooltips.push(this)
	}

	handleEvent(e) {
		switch (e.type) {
			case 'pointermove':
				this.position(e.clientX, e.clientY)
				break
			case 'pointerover': {
				const conflicting = tooltips.find(
					t => ['will-hide', 'hiding'].includes(t.state) && t.id != this.id
				)
				if (conflicting) {
					if (conflicting.state == 'will-hide') {
						clearTimeout(conflicting.timeout)
						conflicting.hide(true)
					}
					this.show(true)
				} else this.show()
				break
			}
			case 'pointerout':
				this.hide()
				break
			case 'transitionend':
				if (this.state == 'showing') this.state = 'visible'
				else if (this.state == 'hiding') this.unmount()
				break
		}
	}

	show(skipDelay) {
		if (this.state == 'hidden') {
			document.documentElement.append(this.el)

			this.computedStyle = window.getComputedStyle(this.el)

			// set width and height to prevent wrapping
			this.el.style.width = this.computedStyle.getPropertyValue('width')
			this.el.style.height = this.computedStyle.getPropertyValue('height')

			this.transitionDuration = getTransitionDuration(this.computedStyle)

			this.timeout = setTimeout(
				() => {
					this.el.style.opacity = 1
					if (this.transitionDuration) this.state = 'showing'
					else this.state = 'visible'
				},
				skipDelay ? 0 : this.delay
			)

			document.addEventListener('pointermove', this)
			this.el.addEventListener('transitionend', this)
			this.state = 'will-show'
		} else if (this.state == 'hiding') {
			this.el.style.opacity = 1
			this.state = 'showing'
		} else if (this.state == 'will-hide') {
			clearTimeout(this.timeout)
			this.state = 'visible'
		}
	}

	hide(skipDelay) {
		if (this.state == 'visible' || skipDelay) {
			this.timeout = setTimeout(
				() => {
					this.el.style.opacity = 0
					if (this.transitionDuration) this.state = 'hiding'
					else this.unmount()
				},
				skipDelay ? 0 : this.delay
			)
			this.state = 'will-hide'
		} else if (this.state == 'showing') {
			this.el.style.opacity = 0
			this.state = 'hiding'
		} else if (this.state == 'will-show') {
			clearTimeout(this.timeout)
			this.unmount()
		}
	}

	unmount() {
		this.el.remove()
		this.el.removeEventListener('transitionend', this)
		document.removeEventListener('pointermove', this)
		this.state = 'hidden'
	}

	position(x, y) {
		this.el.style.top = y + this.offsetY + 'px'
		this.el.style.left =
			x + this.offsetX - (this.center ? this.el.offsetWidth * 0.5 : 0) + 'px'
	}
}

export default {
	mounted(el, binding) {
		el.tooltip = new Tooltip(binding.value)

		el.addEventListener('pointerover', el.tooltip)
		el.addEventListener('pointerout', el.tooltip)
	},
	beforeUnmount(el) {
		el.removeEventListener('pointerover', el.tooltip)
		el.removeEventListener('pointerout', el.tooltip)
	},
	install(app, options = {}) {
		Object.assign(opts, options)
		app.directive('tooltip', this)
	}
}
