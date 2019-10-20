import * as ois from '../ooh-icon-system';
import TimelineMax from "../../vendor/gsap/TimelineMax";

function getRestingTl(el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $circle = el.querySelector('[ois-copywriting-idx="1"]')
	const $path1 = el.querySelector('[ois-copywriting-idx="2"]')
	const $path2 = el.querySelector('[ois-copywriting-idx="3"]')
	const $path3 = el.querySelector('[ois-copywriting-idx="4"]')
	const paths = [$path1, $path2, $path3]
	const labels = ['draw1', 'draw2', 'draw3']

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(0)
	restingTl.yoyo(false)

	const keyframes = [
		{
			cx: 20.2,
			cy: 19.4,
			r: 1.4,
		},
		{
			cx: 8.8,
			cy: 17.3,
			r: 1.4,
			label: labels[0],
		},
		{
			cx: 13.6,
			cy: 12.5,
			r: 1.4,
		},
		{
			cx: 10.9,
			cy: 19.5,
			r: 1.4,
			label: labels[1],
		},
		{
			cx: 15.9,
			cy: 14.6,
			r: 1.4,
		},
		{
			cx: 13,
			cy: 21.6,
			r: 1.4,
			label: labels[2],
		},
		{
			cx: 18,
			cy: 16.7,
			r: 1.4,
		},
		{
			cx: 20.2,
			cy: 19.4,
			r: 4.7,
		},
	]

	keyframes.forEach((frame, index) => {
		const { cx, cy, r, delay, label } = frame

		restingTl.to($circle, ois._BASE.restDuration/2, {
			delay: delay || 0,
			ease: ois._BASE.ease,
			attr: {
				cx,
				cy,
				r
			}
		})

		if (label) {
			restingTl.add(label)
		}
	})

	paths.forEach((path, index) => {
		const timeline = new TimelineMax()
		const delay = 4 - index

		timeline.to(path, ois._BASE.restDuration/2, {
			ease: ois._BASE.ease,
			drawSVG: '0% 100%',
		}).to(path, ois._BASE.restDuration, {
			ease: ois._BASE.ease,
			delay: ois._BASE.restDuration * delay,
			drawSVG: '100% 100%'
		})

		restingTl.add(timeline, labels[index])
	})

	return restingTl
}

export default {
	getRestingTl
}