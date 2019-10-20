import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $circle = $el.find('[ois-paid-search-idx="1"]')
	const $motionPath = MorphSVGPlugin.pathDataToBezier($el.find('[ois-motion-path="1"]'), { align:$circle })

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(true)

	restingTl.set($circle, {
		xPercent: -50,
		yPercent: -50,
	}).to($circle, 3, {
		bezier: {
			values: $motionPath,
			type: "cubic"
		},
	})

	return restingTl
}

export default {
	getRestingTl
}