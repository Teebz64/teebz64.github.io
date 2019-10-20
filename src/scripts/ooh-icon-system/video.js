import * as ois from '../ooh-icon-system'

const name = 'video'
const intro = new TimelineMax({
	paused: true
})
const restingTl = new TimelineMax({
	paused: true
})

function getRestingTl($el) {
	const $flash1 = $el.find('[ois-video-idx="1"]')
	const $flash2 = $el.find('[ois-video-idx="2"]')
	const $flash3 = $el.find('[ois-video-idx="3"]')
	const $corners = $el.find('[ois-video-idx="4"]')

	const ease = Back.easeInOut.config(2)

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(ois._BASE.restDelay)
	restingTl.yoyo(true)

	restingTl.to($flash1, ois._BASE.restDuration, {
		transformOrigin: '50% 50%',
		ease: ois._BASE.ease,
		scale: 0
	}).to($flash2, ois._BASE.restDuration, {
		transformOrigin: '50% 50%',
		ease: ois._BASE.ease,
		scale: 0
	}, ois._BASE.restJumpTimeFast
	).to($flash3, ois._BASE.restDuration, {
		transformOrigin: '50% 50%',
		ease: ois._BASE.ease,
		delay: ois._BASE.delay,
		scale: 0
	}, ois._BASE.restJumpTimeFast
	).to($flash1, ois._BASE.restDuration, {
		ease: ease,
		scale: 1
	}).to($flash2, ois._BASE.restDuration, {
		ease: ease,
		scale: 1
	}, ois._BASE.restJumpTimeFast
	).to($flash3, ois._BASE.restDuration, {
		ease: ease,
		scale: 1
	}, ois._BASE.restJumpTimeFast
	).to($corners, .2, {
		ease: ease,
		scale: 1.05,
		transformOrigin: '50% 50%',
		yoyo: true,
	})

	return restingTl
}

export default {
	getRestingTl
}