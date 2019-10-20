import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const restingTl = new TimelineMax({
		paused: true
	})

	const canvasTl = new TimelineMax()
	const artTl = new TimelineMax()

	MorphSVGPlugin.convertToPath($('[data-ois="' + name + '"]').find('rect, polygon, circle'));

	const canvasMorphFrames = [
		'[work-morph-frame="1"]',
		'[work-morph-frame="2"]',
		'[work-morph-frame="3"]',
	]

	const artMorphFrames = [
		'[work-morph-frame="4"]',
		'[work-morph-frame="5"]',
		'[work-morph-frame="6"]'
	]

	const $canvas = $('[work-idx="1"]')
	const $art = $('[work-idx="2"]')

	restingTl.delay = ois._BASE.restDelay;
	restingTl.repeat(-1);
	restingTl.repeatDelay(2);
	restingTl.yoyo(true);

	canvasMorphFrames.forEach((frame, i) => {
		canvasTl.fromTo($canvas, ois._BASE.restDuration/3, {
			svgOrigin: '15.2 13.15',
		},{
			delay: 1,
			rotation: 180 * i,
			morphSVG: frame
		})
	})

	artMorphFrames.forEach((frame, i) => {
		artTl.fromTo($art, ois._BASE.restDuration/3, {
			svgOrigin: '15.2 13.15',
		}, {
			delay: 1,
			rotation: -180 * i,
			morphSVG: frame
		})
	})

	restingTl.add(artTl, 0)
	restingTl.add(canvasTl, 0)

	return restingTl
}

export default {
	getRestingTl
}