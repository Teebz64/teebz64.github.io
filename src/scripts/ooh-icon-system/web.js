import * as ois from '../ooh-icon-system'
import TimelineMax from "../../vendor/gsap/TimelineMax"

function getRestingTl(el) {
	const restingTl = new TimelineMax({ paused: true })
	const square = el.querySelectorAll('[ois-web-idx="1"]')

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(ois._BASE.restDelay)
	restingTl.yoyo(true)

	let coords = [
		{
			x: 19.7,
			y: 9,
			width: 6.4,
			height: 4.2
		},
		{
			x: 6.6,
			y: 15,
			width: 6.9,
			height: 12.5
		},
		{
			x: 8.4,
			y: 22.3,
			width: 3.4,
			height: 3.4
		},
	]

	restingTl.to(square, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		attr: {
			x: coords[0].x,
			y: coords[0].y,
			width: coords[0].width,
			height: coords[0].height,
		}
	}).to(square, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		attr: {
			x: coords[1].x,
			y: coords[1].y,
			width: coords[1].width,
			height: coords[1].height,
		}
	}).to(square, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		attr: {
			x: coords[2].x,
			y: coords[2].y,
			width: coords[2].width,
			height: coords[2].height,
		}
	})

	return restingTl
}

export default {
	getRestingTl
}