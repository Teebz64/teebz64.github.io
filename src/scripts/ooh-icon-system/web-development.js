import * as ois from '../ooh-icon-system';
import TimelineMax from "../../vendor/gsap/TimelineMax";

const intro = new TimelineMax({
	paused: true
})
const restingTl = new TimelineMax({
	paused: true
})

function getRestingTl(el) {
	const $rect = el.querySelector('[ois-web-development-idx="4"]')
	const $textGroup1 = el.querySelector('[ois-web-development-idx="5"]')
	const $textGroup2 = el.querySelector('[ois-web-development-idx="6"]')
	const shapeTl = new TimelineMax()
	const text1Tl = new TimelineMax()
	const text2Tl = new TimelineMax()

	const keyframes = [
		{
			x: 5.6,
			y: 8.3,
			width: 21,
 			height: 2,
		},
		{
			x: 5.6,
			y: 15.3,
			width: 21,
			height: 2,
		},
		{
			label: 'pause1',
			x: 13.8,
			y: 15.3,
			width: 8.2,
			height: 2,
		},
		{
			delay: 2,
			x: 5.6,
			y: 15.3,
			width: 21,
			height: 2,
		},
		{
			x: 5.6,
			y: 11.4,
			width: 21,
			height: 2,
		},
		{
			label: 'pause2',
			x: 14,
			y: 11.4,
			width: 10.5,
			height: 2,
		},
		{
			delay: 2,
			x: 5.6,
			y: 11,
			width: 16.4,
			height: 12.4,
		},
	]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(ois._BASE.restDelay)
	restingTl.yoyo(true)

	keyframes.forEach((frame, index) => {
		const { x, y, width, height, delay, label } = frame

		shapeTl.to($rect, ois._BASE.restDuration, {
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
			shapeTl.add(label)
		}
	})

	text1Tl.to($textGroup1, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		opacity: 0,
	}).to($textGroup1, ois._BASE.restDuration, {
		delay: .25,
		ease: ois._BASE.ease,
		opacity: 1,
	})

	text2Tl.to($textGroup2, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		opacity: 0,
	}).to($textGroup2, ois._BASE.restDuration, {
		delay: .25,
		ease: ois._BASE.ease,
		opacity: 1,
	})

	shapeTl.add(text1Tl, 'pause1')
	shapeTl.add(text2Tl, 'pause2')

	restingTl.add(shapeTl, 0)

	return restingTl
}

export default {
	getRestingTl
}