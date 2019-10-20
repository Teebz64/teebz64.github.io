import * as ois from '../ooh-icon-system'
import TimelineMax from "../../vendor/gsap/TimelineMax"

function getRestingTl(el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $polygon = el.querySelector('[data-experiential-idx="1"]')
	const $morphFrame0 = el.querySelector('[ois-morph-frame="0"]')
	const $morphFrame1 = el.querySelector('[ois-morph-frame="1"]')
	const $morphFrame2 = el.querySelector('[ois-morph-frame="2"]')
	const morphFrames = [$morphFrame0, $morphFrame1, $morphFrame2]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(true)

	restingTl.to($polygon, ois._BASE.restDuration, {
		transformOrigin: '50% 50%',
		ease: ois._BASE.ease,
		scale: 2.2,
	}).to($polygon, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		scale: 1.4,
		rotation: 360,
	}).to($polygon, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		morphSVG: morphFrames[1],
		scale: 1,
		rotation: 0,
	})

	return restingTl
}

export default {
	getRestingTl
}