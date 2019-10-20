import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const fragStart = '[case-studies-frag-start]'

	const debrisPairs = [
		{
			startFrame: '[case-studies-idx="1a"]',
			endFrame: '[case-studies-idx="1b"]',
			timeline: new TimelineMax()
		},
		{
			startFrame: '[case-studies-idx="2a"]',
			endFrame: '[case-studies-idx="2b"]',
			timeline: new TimelineMax()
		},
		{
			startFrame: '[case-studies-idx="3a"]',
			endFrame: '[case-studies-idx="3b"]',
			timeline: new TimelineMax()
		},
		{
			startFrame: '[case-studies-idx="4a"]',
			endFrame: '[case-studies-idx="4b"]',
			timeline: new TimelineMax()
		},
	]

	const barGraph = {
		el: '[case-studies-idx="5"]',
		timeline: new TimelineMax()
	}

	const barGraphSupporting = {
		el: '[case-studies-idx="6"]',
		timeline: new TimelineMax()
	}

	const fragsInTl = new TimelineMax()
	const exitTl = new TimelineMax()

	debrisPairs.forEach((obj, index) => {
		const { startFrame, endFrame, timeline } = obj

		MorphSVGPlugin.convertToPath(startFrame)
		MorphSVGPlugin.convertToPath(endFrame)
	})

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(.5)
	restingTl.yoyo(false)

	fragsInTl.to(fragStart, ois._BASE.restDuration * .25, {
		ease: ois._BASE.ease,
		drawSVG: '0% 100%',
		opacity: 1,
	}, '-=.75')

	restingTl.add(fragsInTl, 0)

	barGraphSupporting.timeline.staggerTo(barGraphSupporting.el, ois._BASE.restDuration * .25, {
		ease: ois._BASE.ease,
		drawSVG: '100%'
	}, .5)

	restingTl.add(barGraphSupporting.timeline, .25)

	barGraph.timeline.to(barGraph.el, ois._BASE.restDuration * .75, {
		ease: ois._BASE.ease,
		drawSVG: '100%'
	})

	restingTl.add(barGraph.timeline, 1.625)

	debrisPairs.forEach((obj, index) => {
		let { startFrame, endFrame, timeline } = obj

		barGraph.timeline.add(timeline, .625)

		timeline.to(startFrame, ois._BASE.restDuration/8, {
			ease: ois._BASE.ease,
			morphSVG: {
				shape: endFrame
			},
			stroke: '#EC2379'
		})

		exitTl.to(startFrame, ois._BASE.restDuration/8, {
			ease: ois._BASE.ease,
			opacity: 0
		})

	})

	exitTl.to(barGraphSupporting.el, ois._BASE.restDuration * .75, {
		ease: ois._BASE.ease,
		drawSVG: '100% 100%'
	})

	exitTl.to(barGraph.el, ois._BASE.restDuration * .75, {
		ease: ois._BASE.ease,
		drawSVG: '100% 100%'
	}, '-=.5')

	restingTl.add(exitTl, 3.25)

	return restingTl
}

export default {
	getRestingTl
}