import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $rect = MorphSVGPlugin.convertToPath($el.find('[ois-experience-design-idx="1"]'))

	const $morphFrame0 = MorphSVGPlugin.convertToPath($el.find('[ois-morph-frame="0"]'))
	const $morphFrame1 = MorphSVGPlugin.convertToPath($el.find('[ois-morph-frame="1"]'))
	const $morphFrame2 = MorphSVGPlugin.convertToPath($el.find('[ois-morph-frame="2"]'))
	const $morphFrame3 = MorphSVGPlugin.convertToPath($el.find('[ois-morph-frame="3"]'))
	const morphFrames = [$morphFrame1, $morphFrame3, $morphFrame2, $morphFrame0]
	const scaleValues = [.5, 1, .8, 1]
	const labels = ['pause1', 'pause2', 'pause3']

	const $path1 = $el.find('[ois-experience-design-idx="2"]')
	const $path2 = $el.find('[ois-experience-design-idx="3"]')
	const $path3 = $el.find('[ois-experience-design-idx="4"]')
	const $path4 = $el.find('[ois-experience-design-idx="5"]')
	const $path5 = $el.find('[ois-experience-design-idx="6"]')
	const $path6 = $el.find('[ois-experience-design-idx="7"]')
	const $path7 = $el.find('[ois-experience-design-idx="8"]')

	const $morphPath1 = $el.find('[ois-morph-path="2"]')
	const $morphPath2 = $el.find('[ois-morph-path="3"]')
	const $morphPath3 = $el.find('[ois-morph-path="4"]')
	const $morphPath4 = $el.find('[ois-morph-path="5"]')
	const $morphPath5 = $el.find('[ois-morph-path="6"]')
	const $morphPath6 = $el.find('[ois-morph-path="7"]')
	const $morphPath7 = $el.find('[ois-morph-path="8"]')

	const pathMorphFrames = [
		{
			from: MorphSVGPlugin.convertToPath($path1),
			to: MorphSVGPlugin.convertToPath($morphPath1),
			timelines: [new TimelineMax(), new TimelineMax()],
		},
		{
			from: MorphSVGPlugin.convertToPath($path2),
			to: MorphSVGPlugin.convertToPath($morphPath2),
			timelines: [new TimelineMax(), new TimelineMax()],
		},
		{
			from: MorphSVGPlugin.convertToPath($path3),
			to: MorphSVGPlugin.convertToPath($morphPath3),
			timelines: [new TimelineMax(), new TimelineMax()],
		},
		{
			from: MorphSVGPlugin.convertToPath($path4),
			to: MorphSVGPlugin.convertToPath($morphPath4),
			timelines: [new TimelineMax(), new TimelineMax()],
		},
		{
			from: MorphSVGPlugin.convertToPath($path5),
			to: MorphSVGPlugin.convertToPath($morphPath5),
			timelines: [new TimelineMax(), new TimelineMax()],
		},
		{
			from: MorphSVGPlugin.convertToPath($path6),
			to: MorphSVGPlugin.convertToPath($morphPath6),
			timelines: [new TimelineMax(), new TimelineMax()],
		},
		{
			from: MorphSVGPlugin.convertToPath($path7),
			to: MorphSVGPlugin.convertToPath($morphPath7),
			timelines: [new TimelineMax(), new TimelineMax()],
		},
	]

	const morphTl = new TimelineMax()

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(true)

	morphFrames.forEach((frame, index) => {
		if (index == 0) {
			morphTl.to($rect, 0, {
				clearProps: 'stroke-dashoffset, stroke-dasharray, transform',
			})
		}
		morphTl.to($rect, ois._BASE.restDuration, {
			ease: ois._BASE.ease,
			delay: ois._BASE.restDelay,
			svgOrigin: '16 15.7',
			rotation: 180 * (index - 1),
			morphSVG: frame,
			scale: scaleValues[index]
		}).addLabel(labels[index])
	})

	pathMorphFrames.forEach((frame, index) => {
		frame.timelines[0].to([frame.from, frame.to], 0, {
			clearProps: 'stroke-dashoffset, stroke-dasharray, transform',
		})

		frame.timelines[0].to(frame.from, ois._BASE.restDuration/2, {
			ease: ois._BASE.ease,
			morphSVG: frame.to
		})

		frame.timelines[1].to(frame.from, ois._BASE.restDuration/2, {
			ease: ois._BASE.ease,
			morphSVG: frame.from
		})

		morphTl.add(frame.timelines[0], labels[0])
		morphTl.add(frame.timelines[1], labels[2])
	})

	restingTl.add(morphTl, 0)

	return restingTl
}

export default {
	getRestingTl
}