import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $hand        = $el.find('[ois-content-marketing-social-media-idx="1"]')
	const $handGroup   = $el.find('[ois-content-marketing-social-media-idx="2"]')
	const $flashes     = $el.find('[ois-content-marketing-social-media-idx="3"]')
	const $morphFrame1 = $el.find('[ois-morph-frame="1"]')
	const $morphFrame2 = $el.find('[ois-morph-frame="2"]')
	const morphFrames  = [$morphFrame1, $morphFrame2]
	const morphDelays  = [0, 2.5, 0]
	const morphLabels  = ['pause1', 'pause2']
	const morphTl      = new TimelineMax()
	const rotationTl   = new TimelineMax()
	const flashTlIn    = new TimelineMax()
	const flashTlOut   = new TimelineMax()

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(false)

	morphFrames.forEach((morphFrame, i) => {
		morphTl.to($hand, ois._BASE.duration, {
			delay: morphDelays[i],
			ease: ois._BASE.ease,
			morphSVG: morphFrame
		})

		morphTl.addLabel(morphLabels[i], '-=0.5')
	})

	rotationTl.to($handGroup, ois._BASE.duration/2, {
		ease: ois._BASE.ease,
		svgOrigin: "22.8 14",
		rotation: 10,
	}).to($handGroup, ois._BASE.duration, {
		ease: ois._BASE.ease,
		rotation: 0
	})

	flashTlOut.staggerFromTo($flashes, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		transformOrigin: "0% 0%",
		scale: 1
	}, {
		transformOrigin: "50% 50%",
		scale: 0
	}, .2)

	flashTlIn.staggerFromTo($flashes, ois._BASE.restDuration, {
		transformOrigin: "50% 50%",
		scale: 0
	}, {
		transformOrigin: "50% 50%",
		ease: ois._BASE.ease,
		scale: 1
	}, .2)

	morphTl.add(flashTlOut, morphLabels[1])
	morphTl.add(flashTlIn, morphLabels[0])
	morphTl.add(rotationTl, morphLabels[0])
	restingTl.add(morphTl, 0)

	return restingTl
}

export default {
	getRestingTl
}