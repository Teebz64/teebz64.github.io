import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $circles = $el.find('[ois-vr-idx="1"]')

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(0)
	restingTl.yoyo(true)

	restingTl.set($circles, {
		transformOrigin: '50% 50%',
	}).staggerFromTo($circles, ois._BASE.restDuration * 1.5, {
		ease: ois._BASE.ease,
		scale: 1,
	}, {
		delay: 1,
		ease: Elastic.easeOut.config(1.5, 0.3),
		scale: 0,
	}, -0.2)

	return restingTl
}

export default {
	getRestingTl
}