import * as ois from '../ooh-icon-system'
import TimelineMax from "../../vendor/gsap/TimelineMax"

function getRestingTl(el) {
	const restingTl = new TimelineMax({
		paused: true
	})

	// restingTl.delay = ois._BASE.restDelay;
	restingTl.repeat(-1);
	restingTl.repeatDelay(1);
	restingTl.yoyo(false);

	const movingSquareTl = new TimelineMax()
	const buttonFlashTl = new TimelineMax()

	const $rect1 = el.querySelector('[web-strategy-idx="1"]')
	const $rect2 = el.querySelector('[web-strategy-idx="2"]')
	const $btn = el.querySelector('[web-strategy-idx="3"]')

	const movingSquareKeyframes = [
		{
			x: 16.2,
			y: 7.2,
			w: 3,
			h: 3,
			opacity: 1,
			delay: 0
		},
		{
			x: 16.2,
			y: 7.2,
			w: 12.4,
			h: 3,
			opacity: 1,
			delay: 0
		},
		{
			x: 25.6,
			y: 7.2,
			w: 3,
			h: 3,
			opacity: 1,
			delay: 0
		},
		{
			x: 25.6,
			y: 7.2,
			w: 3,
			h: 9.6,
			opacity: 1,
			delay: 0
		},
		{
			x: 25.6,
			y: 16.8,
			w: 3,
			h: 0,
			opacity: 1,
			delay: 0
		},
		{
			x: 9.2,
			y: 19.3,
			w: 0,
			h: 3,
			opacity: 1,
			delay: 0
		},
		{
			x: 3.4,
			y: 19.3,
			w: 5.8,
			h: 3,
			opacity: 1,
			delay: 0
		},
		{
			x: 3.4,
			y: 19.3,
			w: 3,
			h: 3,
			opacity: 1,
			delay: 0
		},
		{
			x: 3.4,
			y: 19.3,
			w: 3,
			h: 7.9,
			opacity: 1,
			delay: 0,
			label: 'squareDest'
		},
		{
			x: 11,
			y: 20.3,
			w: 7.1,
			h: 10.1,
			opacity: 1,
			delay: 0
		},
		{
			x: 20.9,
			y: 20.3,
			w: 7.1,
			h: 10.1,
			opacity: 1,
			delay: .5
		},
		{
			x: 20.9,
			y: 23.3,
			w: 7.1,
			h: 10.1,
			opacity: 0,
			delay: 1.5,
		},
		{
			x: 16.6,
			y: 8.9,
			w: 4.6,
			h: 7.8,
			opacity: 0,
			delay: 0
		},
		{
			x: 16.6,
			y: 5.9,
			w: 4.6,
			h: 7.8,
			opacity: 1,
			delay: 0
		}
	]

	movingSquareKeyframes.forEach((frame, i) => {
		const { x, y, w, h, opacity, delay, label } = frame

		movingSquareTl.to($rect1, ois._BASE.restDuration/3, {
			ease: ois._BASE.ease,
			opacity: opacity,
			delay: delay,
			attr: {
				x: x,
				y: y,
				width: w,
				height: h,
			}
		})

		if (label) {
			movingSquareTl.add(label)
		}
	})

	buttonFlashTl.fromTo($btn, ois._BASE.restDuration * 3, {
		drawSVG: '20 20'
	}, {
		drawSVG: '400 500'
	}).to($btn, ois._BASE.restDuration / 2, {
		opacity: 0,
	}).to($btn, ois._BASE.restDuration / 3, {
		drawSVG: '50% 50%'
	})

	movingSquareTl.add(buttonFlashTl, 'squareDest')

	restingTl.add(movingSquareTl)

	return restingTl
}

export default {
	getRestingTl
}