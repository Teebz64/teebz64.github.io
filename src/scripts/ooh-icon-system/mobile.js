import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $polygon = $el.find('[ois-mobile-idx="1"]')
	const $circle = $el.find('[ois-mobile-idx="2"]')

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(false)

	restingTl.fromTo($polygon, ois._BASE.restDuration, {
		svgOrigin: '16.5 11.5',
		rotation: 0,
	}, {
		rotation: 720,
	}).to($polygon, ois._BASE.restDuration/2, {
		scale: 0,
	}).to($circle, ois._BASE.restDuration/3, {
		ease: Back.easeIn.config(2),
		transformOrigin: '50% 50%',
		drawSVG: 0,
		scale: .3,
	}, "-=0.5").set($circle, {
		scale: 1,
	}).to($circle, ois._BASE.restDuration/2, {
		delay: 1,
		drawSVG: '100%',
	}).to($polygon, ois._BASE.restDuration/2, {
		scale: 1
	}, "-=.25")

	return restingTl
}

export default {
	getRestingTl
}