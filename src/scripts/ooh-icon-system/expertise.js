import * as ois from '../ooh-icon-system'
import TimelineMax from "../../vendor/gsap/TimelineMax"

function getRestingTl(el) {
	const restingTl = new TimelineMax({
		paused: true
	});
	const $polygon = document.querySelector('[expertise-idx="1"]')
	const $glintLines = document.querySelectorAll('[expertise-idx="2"]')
	const morphFrames = [
		document.querySelector('[expertise-morph-frame="1"]'),
		document.querySelector('[expertise-morph-frame="2"]'),
		document.querySelector('[expertise-morph-frame="3"]'),
		document.querySelector('[expertise-morph-frame="4"]'),
		document.querySelector('[expertise-morph-frame="5"]'),
		document.querySelector('[expertise-morph-frame="6"]'),
		document.querySelector('[expertise-morph-frame="7"]'),
		document.querySelector('[expertise-morph-frame="8"]'),
		//document.querySelector('[expertise-morph-frame="9"]'),
	]

	restingTl.delay = ois._BASE.restDelay;
	restingTl.repeat(-1);
	restingTl.repeatDelay(2);
	restingTl.yoyo(false);

	for (var i = 0; i < morphFrames.length; i++) {
		const segmentFlashTl = new TimelineMax();

		segmentFlashTl.to(morphFrames[i], .5, {
			ease: ois._BASE.ease,
			opacity: 1,
		}).to(morphFrames[i], .8, {
			ease: ois._BASE.ease,
			opacity: 0,
		})

		restingTl.add(segmentFlashTl, i * .075)
	}

	const glintLinesTl = new TimelineMax()

	glintLinesTl.to($glintLines, .25, {
		ease: ois._BASE.ease,
		drawSVG: '0% 50%'
	}).to($glintLines, .25, {
		ease: ois._BASE.ease,
		delay: .25,
		drawSVG: '50% 100%'
	}).to($glintLines, .25, {
		ease: ois._BASE.ease,
		drawSVG: '0% 100%'
	})

	restingTl.add(glintLinesTl, '-=1.25')

	return restingTl
}

export default {
	getRestingTl
}