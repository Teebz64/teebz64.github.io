import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $circle   = $el.find('[ois-photography-idx="1"]')
	const $path     = $el.find('[ois-photography-idx="2"]')
	const $button   = $el.find('[ois-photography-idx="3"]')
	const $lens     = $el.find('[ois-photography-idx="4"]')
	const $sparkles = $el.find('[ois-photography-idx="5"]')

	const apertureTl = new TimelineMax()
	const lensTl = new TimelineMax()
	const sparkleTl = new TimelineMax()

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(false)

	apertureTl.to($button, ois._BASE.restDuration/3, {
		ease: ois._BASE.ease,
		attr: {
			y: 19.4,
			height: .8,
		}
	}).addLabel('click').to($button, ois._BASE.restDuration/3, {
		attr: {
			y: 18.8,
			height: 1.4,
		}
	}).to($path, ois._BASE.restDuration, {
		transformOrigin: '50% 50%',
		ease: ois._BASE.ease,
		drawSVG: "0% 100%",
		opacity: 0,
		rotation: 360,
		scale: .9
	}).addLabel('flash').to($circle, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		attr: {
			r: 15
		},
		opacity: 0
	}, '-=.75')

	lensTl.to($lens, ois._BASE.restDuration/3, {
		transformOrigin: '50% 50%',
		ease: ois._BASE.ease,
		scale: .9
	}).to($lens, ois._BASE.restDuration/3, {
		ease: ois._BASE.ease,
		scale: 1
	})

	sparkleTl.staggerTo($sparkles, ois._BASE.restDuration/3, {
		opacity: 1,
		scale: 1
	}, .25).staggerTo($sparkles, ois._BASE.restDuration/3, {
		delay: .5,
		opacity: 0,
		scale: 1
	}, .25)

	apertureTl.add(sparkleTl, 'flash')
	apertureTl.add(lensTl, 'click')
	restingTl.add(apertureTl, 0)

	return restingTl
}

export default {
	getRestingTl
}