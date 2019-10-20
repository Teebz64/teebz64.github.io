import TimelineMax from "../../vendor/gsap/TimelineMax"
// import TweenMax from "../../vendor/gsap/TweenMax"

export default class Icon {

	constructor(svgEl, name, getRestingTl) {

		if (svgEl) {
			this.svgEl     = svgEl
			this.name      = name
			this.introTl   = new TimelineMax({ paused: true })
			this.restingTl = getRestingTl(this.svgEl)
			this.outroTl   = new TimelineMax({ paused: true })
			this.dur       = 0.35
			//this.ease      = Circ.easeInOut
			this.stagger   = 0.08
			this.jumpTime  = "-=0.35"
			this.playing   = false
			this.primed    = true

			this.inventoryChildElements()
			this.populateIntroTl()
			this.populateOutroTl()

			setTimeout(() => {
				this.intro()
			}, 1000)
		}
	}

	intro = () => {
		const {
			introTl,
			restingTl
		} = this

		//this.$el.css('opacity', 1)

		restingTl.seek(0)
		introTl.play(0)
	};

	togglePlaying = () => {
		const { introTl, restingTl } = this

		if (introTl.progress() != 1) {
			introTl.paused(!introTl.paused())

			this.playing = !introTl.paused()
		}

		if (restingTl.progress() != 0 && introTl.progress() == 1) {
			restingTl.paused(!restingTl.paused())

			this.playing = !restingTl.paused()
		}
	};

	unpause = () => {
		const {
			introTl,
			restingTl
		} = this

		if (introTl.progress() != 1) {
			introTl.paused(false)
		}

		if (restingTl.progress() != 0 && introTl.progress() == 1) {
			restingTl.paused(false)
		}

		this.playing = true
	};

	pause = () => {
		const {
			introTl,
			restingTl
		} = this

		if (introTl.progress() != 1) {
			introTl.paused(true)
		}

		if (restingTl.progress() != 0 && introTl.progress() == 1) {
			restingTl.paused(true)
		}

		this.playing = false
	};

	outro = () => {
		const {
			introTl,
			restingTl,
			outroTl,
		} = this

		introTl.pause().kill()
		restingTl.pause().kill()
		// TweenMax.delayedCall(.2, () => {
		// 	outroTl.play(0)
		// })
	};

	inventoryChildElements = () => {
		this.drawnItems = [...this.svgEl
			.querySelectorAll('circle, path, line, rect, polyline, polygon')]
			.filter((el) => !el.hasAttribute('ois-no-draw'))

		this.scaledItems = this.svgEl
			.querySelectorAll('[ois-scale-in]')

		this.unscaledItems = this.svgEl
			.querySelectorAll('[ois-no-scale]')

		this.opacityInItems = this.svgEl
			.querySelectorAll('[ois-opacity-in]')

		this.undrawnItems = this.svgEl
			.querySelectorAll('[ois-undraw]')
	};

	populateIntroTl = () => {
		const {
			introTl,
			restingTl,
			drawnItems,
			scaledItems,
			opacityInItems,
			dur,
			ease,
			stagger,
			jumpTime
		} = this

		introTl.staggerFromTo(drawnItems, dur, {
			drawSVG: '30% 30%',
			ease: ease,
		}, {
			drawSVG: '0% 100%',
		}, stagger)

		introTl.staggerFromTo(scaledItems, dur, {
			transformOrigin: "50% 50%",
			scale: 0,
			opacity: 0,
		}, {
			scale: 1,
			opacity: 1
		}, stagger, jumpTime)

		introTl.staggerFromTo(opacityInItems, dur, {
			opacity: 0,
		}, {
			opacity: 1
		}, stagger, jumpTime)

		introTl.eventCallback('onComplete', function(){
			restingTl.play(0)
		})
	};

	populateOutroTl = () => {
		const {
			restingTl,
			outroTl,
			drawnItems,
			scaledItems,
			unscaledItems,
			opacityInItems,
			undrawnItems,
			dur,
			ease,
			jumpTime
		} = this

		outroTl.to(drawnItems, dur, {
			drawSVG: '0%'
		}).to(scaledItems, dur, {
			scale: 0,
			transformOrigin: '50% 50%'
		}, jumpTime).to(unscaledItems, dur, {
			opacity: 0
		}, jumpTime).to(opacityInItems, dur, {
			opacity: 0
		}, jumpTime).to(undrawnItems, dur, {
			drawSVG: '0%'
		}, jumpTime)
	};
}














