import * as ois from '../ooh-icon-system'
import TimelineMax from "../../vendor/gsap/TimelineMax"

function getRestingTl(el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})

	const $picFrame = el.querySelectorAll('[eye-candy-idx="1"]')
	const picFrameTl = new TimelineMax()

	const $eyeLid = el.querySelector('[eye-candy-idx="2"]')
	const eyeLidTl = new TimelineMax()
	const eyeLidStartY = $eyeLid.getAttribute('y')
	const eyeLidBlinkY = 9.2
	const numBlinks = 5

	const $pupil = el.querySelectorAll('[eye-candy-idx="4"]')
	const pupilTl = new TimelineMax()
	const pupilKeyframes = [
		{
			cx: 14.5,
			cy: 13
		},
		{
			cx: 17.5,
			cy: 14.4
		},
		{
			cx: 14.5,
			cy: 16.9
		},
		{
			cx: 17.5,
			cy: 16.9
		},
		{
			cx: 16,
			cy: 15.4
		},
	]

	const $eye = el.querySelectorAll('[eye-candy-idx="3"] circle')

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(true)

	for (var i = 0; i < numBlinks; i++) {
		let delay = 0
		let dur = (.75 * Math.random()) + .25

		if (i == 1) {
			delay = .6
		}

		if (i == 3) {
			delay = 1.5
		}

		eyeLidTl.to($eyeLid, dur, {
			delay: delay,
			ease: ois._BASE.ease,
			attr: {
				y: eyeLidBlinkY
			}
		})

		eyeLidTl.to($eyeLid, dur, {
			ease: ois._BASE.restEase,
			attr: {
				y: eyeLidStartY
			}
		})
	}

	restingTl.add(eyeLidTl, 0)

	pupilKeyframes.forEach((keyframe, index) => {
		const { cx, cy } = keyframe
		const dur = .5

		pupilTl.to($eye, dur, {
			ease: ois._BASE.ease,
			attr: { cx, cy }
		})
	})

	pupilTl.to($pupil, 1.25, {
		delay: .5,
		ease: ois._BASE.ease,
		attr: {
			r: 1.8
		}
	}).to($pupil, .5, {
		delay: .5,
		ease: ois._BASE.ease,
		attr: {
			r: .8
		}
	})

	restingTl.add(pupilTl, .5)

	//MAKE THIS BLINK

	return restingTl
}

export default {
	getRestingTl
}