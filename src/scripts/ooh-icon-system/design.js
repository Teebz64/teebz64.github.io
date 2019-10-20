import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $stroke = $el.find('[ois-design-idx="1"]')

	const $leftBracket = $el.find('[ois-design-idx="2"]')
	const $rightBracket = $el.find('[ois-design-idx="3"]')

	const $leftMorphFrame0  = $el.find('[ois-morph-frame="0l"]')
	const $leftMorphFrame1  = $el.find('[ois-morph-frame="1l"]')
	const $leftMorphFrame2  = $el.find('[ois-morph-frame="2l"]')

	const leftMorphFrames  = [$leftMorphFrame0, $leftMorphFrame1, $leftMorphFrame2]

	const leftBracketTimeline = new TimelineMax({})
	const rightBracketTimeline = new TimelineMax({})

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(1)
	restingTl.yoyo(false)

	restingTl.fromTo($stroke, 3, {
		drawSVG: '0 0',
	}, {
		drawSVG: '190 210',
	})

	leftBracketTimeline.to($leftBracket, ois._BASE.restDuration/2, {
		morphSVG: leftMorphFrames[1],
	}).to($leftBracket, ois._BASE.restDuration/2, {
		morphSVG: leftMorphFrames[2],
	}).to($leftBracket, ois._BASE.restDuration/2, {
		delay: 1,
		morphSVG: leftMorphFrames[0],
	})

	restingTl.add(leftBracketTimeline, "-=2")

	return restingTl
}

export default {
	getRestingTl
}