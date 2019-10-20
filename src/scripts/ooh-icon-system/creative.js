import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $shape = $el.find('[ois-creative-idx="1"]')
	const $paths = $el.find('[ois-creative-idx="2"]')

	const shapeTl = new TimelineMax()

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(true)

	shapeTl.to($shape, ois._BASE.restDuration/3, {
		ease: ois._BASE.ease,
		scale: .7,
		transformOrigin: '0% 60%',
	}).to($shape, ois._BASE.restDuration/3, {
		ease: ois._BASE.ease,
		scale: 1.22,
	})

	restingTl.add(shapeTl, 0)

	return restingTl
}

export default {
	getRestingTl
}