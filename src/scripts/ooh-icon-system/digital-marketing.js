import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $triangle = $el.find('[ois-digital-marketing-idx="1"]')
	const $soundwaves = $el.find('[ois-digital-marketing-idx="2"]')

	const soundwavesTl = new TimelineMax()

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(ois._BASE.restDelay * 2)
	restingTl.yoyo(false)

	restingTl.fromTo($triangle, ois._BASE.restDuration, {
		transformOrign: '0% 0%',
		ease: Elastic.easeIn.config(1, 0.8),
		scale: 1,
		opacity: 1,
		x: "0%",
	}, {
		transformOrigin: '95% 10%',
		ease: Elastic.easeIn.config(1, 0.8),
		scale: -1,
		opacity: 1,
	}).addLabel('crest').to($triangle, ois._BASE.restDuration, {
		ease: Elastic.easeIn.config(1, 0.8),
		scale: 1,
		opacity: 1,
		x: "0%",
	})

	soundwavesTl.fromTo($soundwaves, ois._BASE.restDuration, {
		transformOrign: '0% 0%',
		ease: Elastic.easeIn.config(1.5, 0.4),
		scale: 1,
		opacity: 1,
		x: "0%",
	}, {
		delay: .1,
		transformOrigin: '-85% 125%',
		ease: Elastic.easeIn.config(1.5, 0.4),
		scale: .5,
		opacity: 0,
		x: "-15%",
	}).addLabel('crest').to($soundwaves, ois._BASE.restDuration, {
		ease: Elastic.easeIn.config(1.5, 0.4),
		scale: 1,
		opacity: 1,
		x: "0%",
	})

	restingTl.add(soundwavesTl, 'crest')

	return restingTl
}

export default {
	getRestingTl
}