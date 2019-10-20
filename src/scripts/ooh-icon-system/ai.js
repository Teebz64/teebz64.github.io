import * as ois from '../ooh-icon-system'
import { TweenMax } from "gsap/all"
import TimelineMax from "../../vendor/gsap/TimelineMax"
import MorphSVGPlugin from '../../vendor/gsap/plugins/MorphSVGPlugin'

function getRestingTl(el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const neuronTimelines = []
	const $bolt = el.querySelector('[ois-ai-idx="7"]')
	const boltTl = new TimelineMax()

	const $neuron1 = el.querySelector('[ois-ai-idx="1"]')
	const $neuron2 = el.querySelector('[ois-ai-idx="2"]')
	const $neuron3 = el.querySelector('[ois-ai-idx="3"]')
	const $neuron4 = el.querySelector('[ois-ai-idx="4"]')
	const $neuron5 = el.querySelector('[ois-ai-idx="5"]')
	const $neuron6 = el.querySelector('[ois-ai-idx="6"]')
	const neurons = [
		$neuron1,
		$neuron2,
		$neuron3,
		$neuron4,
		$neuron5,
		$neuron6,
	]

	const $motionPath1 = MorphSVGPlugin.pathDataToBezier(el.querySelector('[ois-ai-motionpath="1"]'), { align:$neuron1 })
	const $motionPath2 = MorphSVGPlugin.pathDataToBezier(el.querySelector('[ois-ai-motionpath="2"]'), { align:$neuron2 })
	const $motionPath3 = MorphSVGPlugin.pathDataToBezier(el.querySelector('[ois-ai-motionpath="3"]'), { align:$neuron3 })
	const $motionPath4 = MorphSVGPlugin.pathDataToBezier(el.querySelector('[ois-ai-motionpath="4"]'), { align:$neuron4 })
	const $motionPath5 = MorphSVGPlugin.pathDataToBezier(el.querySelector('[ois-ai-motionpath="5"]'), { align:$neuron5 })
	const $motionPath6 = MorphSVGPlugin.pathDataToBezier(el.querySelector('[ois-ai-motionpath="6"]'), { align:$neuron6 })
	const motionPaths = [
		$motionPath1,
		$motionPath2,
		$motionPath3,
		$motionPath4,
		$motionPath5,
		$motionPath6,
	]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(1)
	restingTl.yoyo(false)

	let stagger = .25

	neurons.forEach((neuron, i) => {

		TweenMax.set(neuron, {
			xPercent: -50,
			yPercent: -50,
			opacity: 0,
		})

		let timeline = new TimelineMax()

		timeline.to(neuron, 0, {
			xPercent: -50,
			yPercent: -50,
			opacity: 0,
		}).to(neuron, 3, {
			ease: ois._BASE.ease,
			bezier: {
				values: motionPaths[i],
				type: "cubic"
			},
			opacity: 1,
		}).to(neuron, .3, {
			transformOrigin: "50% 50%",
			scale: 2,
			opacity: 0,
		})

		restingTl.add(timeline, stagger * i)
	})

	boltTl.to($bolt, .5, {
		ease: ois._BASE.ease,
		transformOrigin: "50% 50%",
		scale: 1.2
	}).to($bolt, .5, {
		ease: ois._BASE.ease,
		scale: 1,
	})

	restingTl.add(boltTl, '-=1')

	return restingTl
}

export default {
	getRestingTl
}