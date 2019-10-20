import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const restingTl = new TimelineMax({
		paused: true
	})

	const shakeEase = Elastic.easeInOut.config(1, 0.4)

	const shakeInTls = [
		new TimelineMax(),
		new TimelineMax(),
		new TimelineMax()
	]

	const accentTriangle = {
		el: $('[future-idx="1"]'),
		shakeTl: new TimelineMax(),
		shrinkR: -24,
		scale: .8,
		shakeX: 5,
		shakeY: 5
	}

	const focusTriangle = {
		el: $('[future-idx="2"]'),
		shakeTl: new TimelineMax(),
		shrinkR: -18,
		scale: .8,
		shakeX: -1,
		shakeY: -1
	}

	const base = {
		el: $('[future-idx="3"]'),
		shakeTl: new TimelineMax(),
		shrinkR: 0,
		scale: .7,
		shakeX: -1,
		shakeY: -2,
	}

	const hellYeah = {
		el: $('[future-idx="4"]').find('path'),
		inTl: new TimelineMax(),
		outTl: new TimelineMax(),
	}

	const nahFool = {
		el: $('[future-idx="5"]').find('path'),
		inTl: new TimelineMax(),
		outTl: new TimelineMax(),
	}

	const ballObjs = [
		base, accentTriangle, focusTriangle
	]

	const fortunes = [
		hellYeah, nahFool
	]

	for (var i = 0; i < ballObjs.length; i++) {
		for (var j = 0; j < shakeInTls.length; j++) {
			const { shakeTl, el, shrinkR, scale, shakeX, shakeY } = ballObjs[i]
			const timeline = new TimelineMax()

			timeline.set(el, {
				svgOrigin: '16 16'
			}).to(el, .4, {
				ease: ois._BASE.ease,
				scale: scale,
				rotation: shrinkR,
			}).to(el, 1, {
				ease: shakeEase,
				x: shakeX,
				y: shakeY,
			}).to(el, .5, {
				ease: shakeEase,
				x: 0,
				y: 0,
				rotation: 0
			}).to(el, 1, {
				ease: ois._BASE.ease,
				scale: 1,
			})

			shakeInTls[j].add(timeline, 0)
		}
	}

	for (var i = 0; i < fortunes.length; i++) {
		const { el, inTl, outTl } = fortunes[i]

		inTl.staggerTo(el, .2, {
			opacity: 1,
			y: 0,
		}, .05)

		outTl.staggerTo(el, .1, {
			opacity: 0,
			y: -2,
			x: -2
		}, .025)
	}

	restingTl.add(hellYeah.inTl, 0)
	restingTl.add(shakeInTls[0], '+=.5')
	restingTl.add(hellYeah.outTl, '-=1.25')
	restingTl.add(nahFool.inTl, '-=1.25')
	restingTl.add(shakeInTls[2], '+=.5')
	restingTl.add(nahFool.outTl, '-=1.25')

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(.5)
	restingTl.yoyo(false)

	return restingTl
}

export default {
	getRestingTl
}