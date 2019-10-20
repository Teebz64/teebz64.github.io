import * as ois from '../ooh-icon-system';
import TimelineMax from "../../vendor/gsap/TimelineMax";

function getRestingTl(el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $leftRect = el.querySelectorAll('[ois-media-buying-idx="1"]')
	const $rightRect = el.querySelectorAll('[ois-media-buying-idx="2"]')
	const $leftLines1 = el.querySelectorAll('[ois-media-buying-group="1"] line')
	const $leftLines2 = el.querySelectorAll('[ois-media-buying-group="2"] line')
	const $rightLines1 = el.querySelectorAll('[ois-media-buying-group="3"] line')
	const $rightLines2 = el.querySelectorAll('[ois-media-buying-group="4"] line')

	const swapInLeft = new TimelineMax()
	const swapInRight = new TimelineMax()

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(true)

	swapInLeft.staggerTo($leftLines1, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		drawSVG: '0%'
	}, .1).to($leftRect, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		attr: {
			width: 11.9,
			height: 3
		}
	}).staggerTo($leftLines2, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		drawSVG: '100%'
	}, .1)

	swapInRight.staggerTo($rightLines1, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		drawSVG: '0%'
	}, .1).to($rightRect, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		attr: {
			x: 22.9,
			y: 13.8,
			width: 5.5,
			height: 3.5
		}
	}).staggerTo($rightLines2, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		drawSVG: '100%'
	}, .1)

	restingTl.add(swapInLeft, 0)
	restingTl.add(swapInRight, 0)

	return restingTl
}

export default {
	getRestingTl
}