import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const restingTl = new TimelineMax({
		paused: true
	})

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(.1)
	restingTl.yoyo(true)

	const rotTime = ois._BASE.restDuration/3
	const thrusts = 10
	const antennaStrobes = 2

	const headRotTl = new TimelineMax()
	const flyingRotTl = new TimelineMax()
	const thrusterOpacityTl = new TimelineMax()
	const thrusterMorphTl = new TimelineMax()
	const antennaStrobeTl = new TimelineMax()

	const $robot = $('[whatnot-idx="1"]')
	const $thruster = $('[whatnot-idx="2"]')
	const $head = $('[whatnot-idx="3"]')
	const $antennaFlash = $('[whatnot-idx="4"]')

	const thrusterFrames = [
		$('[whatnot-morph-frames="1"]'),
		$('[whatnot-morph-frames="2"]'),
		$('[whatnot-morph-frames="3"]'),
		$('[whatnot-morph-frames="4"]'),
		$('[whatnot-morph-frames="5"]'),
		$('[whatnot-morph-frames="3"]'),
		$('[whatnot-morph-frames="1"]'),
		$('[whatnot-morph-frames="2"]'),
		$('[whatnot-morph-frames="4"]'),
		$('[whatnot-morph-frames="1"]')
	]

	flyingRotTl.set($robot, {
		transformOrigin: '50% 50%'
	}).to($robot, rotTime, {
		rotation: -6,
	}).to($robot, rotTime, {
		rotation: 6,
	})

	headRotTl.set($head, {
		transformOrigin: '50% 50%'
	}).to($head, rotTime, {
		rotation: 8,
	}).to($head, rotTime, {
		rotation: -8,
	}).to($head, rotTime, {
		delay: .25,
		rotation: -3
	})

	for (var i = 0; i < thrusts; i++) {
		let scale = .95

		if (i % 2 == 0) {
			scale = 1.1
		}

		thrusterOpacityTl.fromTo($thruster, .1, {
			transformOrigin: '50% 50%',
			opacity: .25
		}, {
			ease: ois._BASE.ease,
			opacity: 1,
			scale: scale
		})
	}

	thrusterOpacityTl.to($thruster, .1, {
		opacity: .25
	})

	thrusterFrames.forEach((frame, i) => {
		thrusterMorphTl.to($thruster, .1, {
			morphSVG: frame
		})
	})

	antennaStrobeTl.set($antennaFlash, {
		transformOrigin: '50% 20%'
	})

	for (var i = 0; i < antennaStrobes; i++) {

		let scale = .95

		antennaStrobeTl.to($antennaFlash, .2, {
			ease: ois._BASE.ease,
			scale: .3,
			opacity: .8
		}).to($antennaFlash, .2, {
			ease: ois._BASE.ease,
			scale: .5,
			opacity: 0
		})
	}

	restingTl.add(flyingRotTl, 0)
	restingTl.add(headRotTl, .4)
	restingTl.add(antennaStrobeTl, '+=0')
	restingTl.add(thrusterOpacityTl, 0)
	restingTl.add(thrusterMorphTl, 0)

	return restingTl
}

export default {
	getRestingTl
}