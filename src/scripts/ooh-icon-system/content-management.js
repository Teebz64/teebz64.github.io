import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $rect = $el.find('[ois-content-management-idx="1"]')
	const $path = $el.find('[ois-content-management-idx="2"]')

	const $morphFrame0 = $el.find('[ois-morph-frame="0"]')
	const $morphFrame1 = $el.find('[ois-morph-frame="1"]')
	const $morphFrame2 = $el.find('[ois-morph-frame="2"]')
	const morphFrames = [$morphFrame0, $morphFrame1, $morphFrame2]

	const morphTl = new TimelineMax()
	const rectTl = new TimelineMax()

	const rectKeyframes = [
		{
			x: 7.1,
			y: 12.6,
			width: 8.9,
			height: 8.4,
		},
		{
			x: 4.3,
			y: 12.6,
			width: 24.2,
			height: 17.1,
		},
		{
			x: 4.3,
			y: 3.5,
			width: 24.2,
			height: 9.1,
		},
	]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(false)

	rectKeyframes.forEach((frame, index) => {
		const { x, y, width, height, delay } = frame

		rectTl.to($rect, ois._BASE.restDuration, {
			delay: delay || 0,
			ease: ois._BASE.ease,
			attr: {
				x,
				y,
				width,
				height
			}
		})
	})

	morphTl.to($path, ois._BASE.restDelay, {
		delay: 1,
		ease: ois._BASE.ease,
		morphSVG: morphFrames[1],
	}).to($path, ois._BASE.restDelay, {
		ease: ois._BASE.ease,
		morphSVG: morphFrames[2],
	}).to($path, ois._BASE.restDelay, {
		delay: 1,
		ease: ois._BASE.ease,
		morphSVG: morphFrames[0],
	})

	restingTl.add(rectTl, 0)
	restingTl.add(morphTl, 0)

	return restingTl
}

export default {
	getRestingTl
}