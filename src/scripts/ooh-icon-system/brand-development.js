import * as ois from '../ooh-icon-system'
import TimelineMax from "../../vendor/gsap/TimelineMax"

function getRestingTl(el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const labels = ['nocking', 'pulling', 'shooting', 'reset']
	const $arrowShaft = el.querySelector('[ois-brand-development-idx="1"]')
	const $arrowHead = el.querySelector('[ois-brand-development-idx="2"]')
	const $arrowGroup = el.querySelector('[ois-brand-development-idx="3"]')
	const $b = el.querySelector('[ois-brand-development-idx="4"]')
	const $path = el.querySelector('[ois-brand-development-idx="5"]')

	const $morphFrame1 = el.querySelector('[ois-morph-frames="1"]')
	const $morphFrame2 = el.querySelector('[ois-morph-frames="2"]')
	const $morphFrame3 = el.querySelector('[ois-morph-frames="3"]')
	const morphFrames  = [$morphFrame1, $morphFrame2, $morphFrame3]

	const arrowNock = new TimelineMax()
	const arrowPull = new TimelineMax()
	const arrowShoot = new TimelineMax()
	const arrowReset = new TimelineMax()

	const bNock = new TimelineMax()
	const bPull = new TimelineMax()
	const bShoot = new TimelineMax()
	const bReset = new TimelineMax()

	const pathNock = new TimelineMax()
	const pathPull = new TimelineMax()
	const pathShoot = new TimelineMax()
	const pathReset = new TimelineMax()

	const arrowTimelines = [arrowNock, arrowPull, arrowShoot, arrowReset]
	const bTimelines = [bNock, bPull, bShoot, bReset]
	const pathTimelines = [pathNock, pathPull, pathShoot, pathReset]
	const stageTimes = [0, 1.75, 2.75, 3.5]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(false)

	arrowNock.to($arrowGroup, ois._BASE.restDuration, {
		ease: ois._BASE.ease,
		x: 17,
	}).to($arrowShaft, ois._BASE.restDuration, {
		attr: {
			x1: -4.6
		},
	}, '-=' + ois._BASE.restDuration/1.15)

	arrowPull.to($arrowGroup, ois._BASE.restDuration/2, {
		x: 13
	})

	arrowShoot.to($arrowGroup, ois._BASE.restDuration/2, {
		x: 50
	}).to($arrowHead, 0, {
		drawSVG: '0%'
	})

	arrowReset.to($arrowGroup, .001, {
		x: -20
	}).to($arrowGroup, .2, {
		x: 0
	}).to($arrowShaft, .2, {
		attr: {
			x1: 6.4
		}
	}).to($arrowHead, ois._BASE.restDuration/2, {
		drawSVG: '100%'
	})

	bNock.to($b, ois._BASE.restDuration/3, {
		morphSVG: {
			shape: morphFrames[1],
			shapeIndex: 6
		}
	})

	bPull.to($b, ois._BASE.restDuration/3, {
		morphSVG: morphFrames[0]
	})

	bShoot.to($b, ois._BASE.restDuration/10, {
		morphSVG: morphFrames[1]
	})

	bReset.to($b, ois._BASE.restDuration/3, {
		morphSVG: morphFrames[2]
	})

	pathNock.fromTo($path, ois._BASE.restDuration/2, {
		drawSVG: '0% 100%'
	}, {
		drawSVG: '100% 100%'
	})

	pathReset.fromTo($path, ois._BASE.restDuration/2, {
		drawSVG: '0% 0%'
	}, {
		drawSVG: '0% 100%'
	})

	for (var i = 0; i < labels.length; i++) {
		//sets labels at 0s, 2s, 4s
		restingTl.addLabel(labels[i], stageTimes[i])
	}

	for (var i = 0; i < arrowTimelines.length; i++) {
		restingTl.add(pathTimelines[i], labels[i])
		restingTl.add(bTimelines[i], labels[i])
		restingTl.add(arrowTimelines[i], labels[i])
	}

	return restingTl
}

export default {
	getRestingTl
}