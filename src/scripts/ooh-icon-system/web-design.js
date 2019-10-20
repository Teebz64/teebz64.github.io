import * as ois from '../ooh-icon-system'

const intro = new TimelineMax({
	paused: true
})
const restingTl = new TimelineMax({
	paused: true
})

function getRestingTl($el) {
	const $polygon = $el.find('[ois-web-design-idx="1"]')
	const $morphFrame1 = $el.find('[ois-morph-frame="1"]')
	const $morphFrame2 = $el.find('[ois-morph-frame="2"]')
	const morphFrames = [$morphFrame1, $morphFrame2]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(true)

	restingTl.to($polygon, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		delay: 1,
		morphSVG: morphFrames[0],
		x: 5,
		y: 6
	}).to($polygon, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		delay: 1,
		morphSVG: morphFrames[1],
		x: 1,
		y: 2
	})

	return restingTl
}

export default {
	getRestingTl
}