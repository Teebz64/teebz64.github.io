import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $circle1 = $el.find('[ois-analytics-idx="1"]')
	const $circle2 = $el.find('[ois-analytics-idx="2"]')

	const coords = [
		{
			cx: 5.7,
			cy: 19.9
		},
		{
			cx: 12.5,
			cy: 12.9
		},
		{
			cx: 19.4,
			cy: 16.5
		},
		{
			cx: 26.2,
			cy: 5.3
		},
	]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(ois._BASE.restDelay)
	restingTl.yoyo(true)

	restingTl.to($circle1, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		attr: {
			cx: coords[0].cx,
			cy: coords[0].cy,
			r: 2.7
		}
	}).to($circle2, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		attr: {
			cx: coords[1].cx,
			cy: coords[1].cy,
			r: 1.6
		}
	}, ois._BASE.restJumpTime
	).to($circle1, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		delay: ois._BASE.delay,
		attr: {
			cx: coords[2].cx,
			cy: coords[2].cy,
			r: 2.7
		}
	}, ois._BASE.restJumpTime
	).to($circle2, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		attr: {
			cx: coords[3].cx,
			cy: coords[3].cy,
			r: 1.6
		}
	}, ois._BASE.restJumpTime)

	return restingTl
}

export default {
	getRestingTl
}