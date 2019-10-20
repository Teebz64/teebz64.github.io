import * as ois from '../ooh-icon-system'
import TimelineMax from "../../vendor/gsap/TimelineMax"

function getRestingTl(el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const cleanup = new TimelineMax({
		paused: true
	})
	const prime = new TimelineMax({
		paused: true
	})
	const $rect1   = el.querySelector('[ois-ux-idx="1"]')
	const $rect2   = el.querySelector('[ois-ux-idx="2"]')
	const $stroke1 = el.querySelector('[ois-ux-idx="3"]')
	const $stroke2 = el.querySelector('[ois-ux-idx="4"]')
	const rect1tl  = new TimelineMax()
	const rect2tl  = new TimelineMax()
	
	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(ois._BASE.restDelay)
	restingTl.yoyo(false)

	const keyframes = [
		{
			delay: 0,
			x: 1,
			y: 4.3,
			width: 7.3,
			height: 11.8,
			opacity: 1,
		},
		{
			delay: 1,
			x: 3.2,
			y: 2.4,
			width: 3,
			height: 3,
			opacity: 1,
		},
		{
			delay: 0,
			x: 15.5,
			y: 2.4,
			width: 3,
			height: 3,
			opacity: 1,
		},
		{
			delay: 0,
			x: 15.5,
			y: 14.3,
			width: 3,
			height: 3,
			opacity: 1,
		},
		{
			delay: 0,
			x: 12.1,
			y: 8.2,
			width: 9.8,
			height: 15.5,
			opacity: 1,
		},
		{
			delay: 1,
			x: 15.5,
			y: 14.3,
			width: 3,
			height: 3,
			opacity: 1,
		},
		{
			delay: 0,
			x: 15.5,
			y: 25.2,
			width: 3,
			height: 3,
			opacity: 1,
		},
		{
			delay: 0,
			x: 26.7,
			y: 25.2,
			width: 3,
			height: 3,
			opacity: 1,
		},
		{
			delay: 0,
			x: 22.4,
			y: 15.9,
			width: 7.3,
			height: 11.8,
			opacity: 1,
		},
		{
			delay: 1,
			x: 22.4,
			y: 10,
			width: 7.3,
			height: 11.8,
			opacity: 0,
		},
		{
			delay: 0,
			x: 1,
			y: 10.2,
			width: 7.3,
			height: 11.8,
			opacity: 0,
		},
	]

	const rect1Keyframes = [
		keyframes[1],
		keyframes[2],
		keyframes[3],
		keyframes[4],
		keyframes[5],
		keyframes[6],
		keyframes[7],
		keyframes[8],
		keyframes[9],
		keyframes[10],
		keyframes[0],
	]

	const rect2Keyframes = [
		keyframes[9],
		keyframes[10],
		keyframes[0],
		keyframes[1],
		keyframes[2],
		keyframes[3],
		keyframes[4],
		keyframes[5],
		keyframes[6],
		keyframes[7],
		keyframes[8],
	]

	rect1Keyframes.forEach((frame, index) => {
		const { x, y, width, height, delay, opacity } = frame

		rect1tl.to($rect1, ois._BASE.restDuration/3, {
			delay: delay || 0,
			opacity: opacity,
			ease: ois._BASE.ease,
			attr: {
				x,
				y,
				width,
				height
			}
		})
	})

	rect2Keyframes.forEach((frame, index) => {
		const { x, y, width, height, delay, opacity } = frame

		rect2tl.to($rect2, ois._BASE.restDuration/3, {
			delay: delay || 0,
			opacity: opacity,
			ease: ois._BASE.ease,
			attr: {
				x,
				y,
				width,
				height
			}
		})
	})

	restingTl.add(rect1tl, 0)
	restingTl.add(rect2tl, 0)

	return restingTl
}

export default {
	getRestingTl
}