import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $rect = $el.find('[ois-campaign-development-idx="1"]')

	const keyframes = [
		{
			x: 9.6,
			y: 12.4,
			width: 13,
			height: 1.9,
		},
		{
			x: 19.5,
			y: 12.4,
			width: 9.5,
			height: 1.9,
		},
		{
			x: 19.5,
			y: 24.3,
			width: 9.5,
			height: 1.9,
		},
		{
			delay: 1,
			x: 3.3,
			y: 24.3,
			width: 25.7,
			height: 1.9,
		},
		{
			x: 3.3,
			y: 24.3,
			width: 3,
			height: 1.9,
		},
		{
			x: 3.3,
			y: 7.6,
			width: 3,
			height: 18.6,
		},
		{
			x: 3.3,
			y: 7.6,
			width: 3,
			height: 6,
		},
		{
			x: 3.3,
			y: 7.6,
			width: 18.2,
			height: 6,
		},
		{
			delay: 1,
			x: 9.6,
			y: 12.4,
			width: 13,
			height: 12,
		},
	]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(false)

	keyframes.forEach((frame, index) => {
		const { x, y, width, height, delay, label } = frame

		restingTl.to($rect, ois._BASE.restDuration/3, {
			delay: delay || 0,
			ease: ois._BASE.ease,
			attr: {
				x,
				y,
				width,
				height
			}
		})

		if (label) {
			restingTl.add(label)
		}
	})

	return restingTl
}

export default {
	getRestingTl
}