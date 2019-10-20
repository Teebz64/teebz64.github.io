import * as ois from '../ooh-icon-system'
import TimelineMax from "../../vendor/gsap/TimelineMax"

function getRestingTl(el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $supportBuildings = el.querySelector('[ois-ar-idx="1"]')
	const $rect = el.querySelector('[ois-ar-idx="2"]')
	const $mainBuilding = el.querySelector('[ois-ar-idx="3"]')

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(ois._BASE.restDelay)
	restingTl.yoyo(true)

	restingTl.to($supportBuildings, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		opacity: .1,
	}).to($rect, ois._BASE.restDuration, {
		opacity: 1,
		ease: ois._BASE.ease,
		attr: {
			x: $mainBuilding.getAttribute('x'),
			y: $mainBuilding.getAttribute('y'),
			width: $mainBuilding.getAttribute('width'),
			height: $mainBuilding.getAttribute('height'),
		},
	}, '-=.5')

	return restingTl
}

export default {
	getRestingTl
}