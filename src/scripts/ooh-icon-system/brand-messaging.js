import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $bubble1 = $el.find('[ois-brand-messaging-idx="1"]')
	const $bubble2 = $el.find('[ois-brand-messaging-idx="2"]')
	const $path1 = $el.find('[ois-brand-messaging-idx="3"]')
	const $path2 = $el.find('[ois-brand-messaging-idx="4"]')
	const timeline1 = new TimelineMax()
	const timeline2 = new TimelineMax()

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(false)

	restingTl.to($bubble1, ois._BASE.restDuration/3, {
		transformOrigin: "50% 50%",
		opacity: 1,
		ease: ois._BASE.ease,
		scale: 1
	}).to($path1, 0, {
		ease: ois._BASE.ease,
		delay: 1,
		drawSVG: '100% 100%',
	}).to($path1, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		drawSVG: '0% 100%',
	}).fromTo($bubble2, ois._BASE.restDuration/3, {
		ease: ois._BASE.ease,
		transformOrigin: "50% 50%",
		scale: 0
	}, {
		ease: ois._BASE.ease,
		scale: 1
	}, 'firstBubblePop').to($path2, 0, {
		ease: ois._BASE.ease,
		drawSVG: '100% 100%',
	}).to($path2, ois._BASE.restDuration/2, {
		ease: ois._BASE.ease,
		delay: 1.5,
		drawSVG: '0% 100%',
	}).to($bubble1, ois._BASE.restDuration/2, {
		opacity: 1,
		ease: ois._BASE.ease,
		scale: 1,
	}, 'secondBubblePop')

	timeline1.to($bubble1, 1, {
		ease: ois._BASE.ease,
		scale: 0,
		opacity: 0,
	}).to($path1, 1, {
		ease: ois._BASE.ease,
		drawSVG: '0% 0%'
	}, "-=1")

	timeline2.to($bubble2, 1, {
		ease: ois._BASE.ease,
		scale: 0,
		opacity: 0,
	}, "+=.15").to($path2, 1, {
		ease: ois._BASE.ease,
		drawSVG: '0% 0%'
	}, "-=1")

	restingTl.add(timeline1, 'firstBubblePop')
	restingTl.add(timeline2, 'secondBubblePop')

	return restingTl
}

export default {
	getRestingTl
}