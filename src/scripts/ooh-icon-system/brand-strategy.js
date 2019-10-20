import * as ois from '../ooh-icon-system'
import TimelineMax from "../../vendor/gsap/TimelineMax"

function getRestingTl(el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $grid = el.querySelectorAll('[ois-brand-strategy-idx="1"]')
	const $stroke = el.querySelectorAll('[ois-brand-strategy-idx="2"]')
	const $rect = el.querySelectorAll('[ois-brand-strategy-idx="3"]')

	const gridtl = new TimelineMax()
	const stroketl = new TimelineMax()
	const recttl = new TimelineMax()

	const keyframes = [
		{
			x: 12.7,
			y: 6.9,
			width: 13,
			height: 22.3,
		},
		{
			x: 18.8,
			y: 7.5,
			width: 5.8,
			height: 5.5,
		},
		{
			x: 7.5,
			y: 18.9,
			width: 5.8,
			height: 5.8,
		}
	]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(false)

	gridtl.to($grid, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		opacity: .1
	}).to($grid, ois._BASE.restDuration, {
		delay: 3,
		ease: ois._BASE.ease,
		opacity: 1
	})

	stroketl.to($stroke, ois._BASE.restDuration, {
		drawSVG: '50 100',
	}).to($stroke, ois._BASE.restDuration, {
		drawSVG: '200 200',
	}).set($stroke, {
		drawSVG: '0%'
	}).to($stroke, ois._BASE.restDuration, {
		drawSVG: '100%',
	})

	recttl.to($rect, ois._BASE.restDuration/2, {
		opacity: 1,
		delay: ois._BASE.restDuration/2,
		ease: ois._BASE.ease,
		attr: {
			x: keyframes[1].x,
			y: keyframes[1].y,
			width: keyframes[1].width,
			height: keyframes[1].height,
		}
	}).to($rect, ois._BASE.restDuration/2, {
		delay: ois._BASE.restDuration/2,
		ease: ois._BASE.ease,
		attr: {
			x: keyframes[2].x,
			y: keyframes[2].y,
			width: keyframes[2].width,
			height: keyframes[2].height,
		}
	}).to($rect, ois._BASE.restDuration/2, {
		delay: ois._BASE.restDuration/2,
		ease: ois._BASE.ease,
		attr: {
			x: keyframes[0].x,
			y: keyframes[0].y,
			width: keyframes[0].width,
			height: keyframes[0].height,
		}
	})

	restingTl.add(gridtl, 0)
	restingTl.add(stroketl, .75)
	restingTl.add(recttl, 1)

	return restingTl
}

export default {
	getRestingTl
}