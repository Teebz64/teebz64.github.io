import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $polygon1 = $el.find('[ois-advertising-idx="1"]')
	const $polygon2 = $el.find('[ois-advertising-idx="2"]')

	const poly1Tl = new TimelineMax()
	const poly2Tl = new TimelineMax()

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(1)
	restingTl.yoyo(true)

	poly1Tl.to($polygon1, ois._BASE.restDuration, {
		svgOrigin: '8.5 16.8',
		ease: ois._BASE.ease,
		rotation: -30,
		scale: 1.4,
	}).to($polygon1, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		rotation: 30,
		scale: 1.3,
	})

	poly2Tl.to($polygon2, ois._BASE.restDuration, {
		delay: .5,
		svgOrigin: '22.4 16.8',
		ease: ois._BASE.ease,
		rotation: 30,
		scale: 1.4,
	}).to($polygon2, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		rotation: -30,
		scale: 1.3,
	})

	restingTl.add(poly1Tl, 0)
	restingTl.add(poly2Tl, 0)

	return restingTl
}

export default {
	getRestingTl
}
