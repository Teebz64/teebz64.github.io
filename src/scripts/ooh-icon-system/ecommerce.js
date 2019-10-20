import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const intro = new TimelineMax({
		paused: true
	})
	const restingTl = new TimelineMax({
		paused: true
	})
	const $path1 = $el.find('[ois-ecommerce-idx="1"]')
	const $path2 = $el.find('[ois-ecommerce-idx="2"]')
	const $path3 = $el.find('[ois-ecommerce-idx="3"]')
	const $path4 = $el.find('[ois-ecommerce-idx="4"]')
	const $path5 = $el.find('[ois-ecommerce-idx="5"]')
	const $path6 = $el.find('[ois-ecommerce-idx="6"]')
	const $path7 = $el.find('[ois-ecommerce-idx="7"]')
	const $path8 = $el.find('[ois-ecommerce-idx="8"]')
	const $path9 = $el.find('[ois-ecommerce-idx="9"]')
	const $path10 = $el.find('[ois-ecommerce-idx="10"]')
	const $path11 = $el.find('[ois-ecommerce-idx="11"]')
	const $path12 = $el.find('[ois-ecommerce-idx="12"]')
	const $path13 = $el.find('[ois-ecommerce-idx="13"]')

	const objs = [
		{
			label: 'doot1',
			timeline: new TimelineMax(),
			group: [
				{
					el: $path1,
					from: {
						x1: 10.3,
						y1: 18.5,
						x2: 8.7,
						y2: 17.4,
					},
					to: {
						x1: 10.6,
						y1: 18,
						x2: 9,
						y2: 16.8,
					},
				},
				{
					el: $path2,
					from: {
						x1: 9.5,
						y1: 18,
						x2: 11.7,
						y2: 14.6,
					},
					to: {
						x1: 9.8,
						y1: 17.5,
						x2: 11.7,
						y2: 14.6,
					},
				},
			],
		},
		{
			label: 'doot2',
			timeline: new TimelineMax(),
			group: [
				{
					el: $path3,
					from: {
						x1: 13.7,
						y1: 8.3,
						x2: 11.7,
						y2: 2.3,
					},
					to: {
						x1: 13.7,
						y1: 8.3,
						x2: 12.1,
						y2: 3.4,
					},
				},
				{
					el: $path4,
					from: {
						x1: 11.9,
						y1: 5.9,
						x2: 13.7,
						y2: 5.3,
					},
					to: {
						x1: 11.9,
						y1: 5.9,
						x2: 13.7,
						y2: 5.3,
					},
				},
			],
		},
		{
			label: 'doot3',
			timeline: new TimelineMax(),
			group: [
				{
					el: $path5,
					from: {
						x1: 20.3,
						y1: 0.9,
						x2: 19.1,
						y2: 11,
					},
					to: {
						x1: 20.1,
						y1: 2.2,
						x2: 19.1,
						y2: 11,
					},
				},
				{
					el: $path6,
					from: {
						x1: 19.3,
						y1: 0.8,
						x2: 21.2,
						y2: 1,
					},
					to: {
						x1: 19.1,
						y1: 2.2,
						x2: 21.1,
						y2: 2.3,
					},
				},
				{
					el: $path7,
					from: {
						x1: 18.5,
						y1: 8.1,
						x2: 20.4,
						y2: 8.4,
					},
					to: {
						x1: 18.5,
						y1: 8.1,
						x2: 20.4,
						y2: 8.4,
					},
				},
			],
		},
		{
			label: 'doot4',
			timeline: new TimelineMax(),
			group: [
				{
					el: $path8,
					from: {
						x1: 26.7,
						y1: 3.5,
						x2: 20.1,
						y2: 12.1,
					},
					to: {
						x1: 25.6,
						y1: 4.9,
						x2: 20.1,
						y2: 12.1,
					},
				},
				{
					el: $path9,
					from: {
						x1: 26,
						y1: 2.9,
						x2: 27.5,
						y2: 4.1,
					},
					to: {
						x1: 24.9,
						y1: 4.3,
						x2: 26.4,
						y2: 5.5,
					},
				},
				{
					el: $path10,
					from: {
						x1: 21,
						y1: 9.3,
						x2: 22.5,
						y2: 10.4,
					},
					to: {
						x1: 21,
						y1: 9.3,
						x2: 22.5,
						y2: 10.4,
					},
				},
			],
		},
		{
			label: 'doot5',
			timeline: new TimelineMax(),
			group: [
				{
					el: $path11,
					from: {
						x1: 28.1,
						y1: 7.3,
						x2: 29.3,
						y2: 8.8,
					},
					to: {
						x1: 26.9,
						y1: 8.2,
						x2: 28.1,
						y2: 9.8,
					},
				},
				{
					el: $path12,
					from: {
						x1: 28.7,
						y1: 8.1,
						x2: 21.8,
						y2: 14,
					},
					to: {
						x1: 27.5,
						y1: 9.1,
						x2: 21.8,
						y2: 14,
					},
				},
				{
					el: $path13,
					from: {
						x1: 23.3,
						y1: 11.4,
						x2: 24.5,
						y2: 12.9,
					},
					to: {
						x1: 23.3,
						y1: 11.4,
						x2: 24.5,
						y2: 12.9,
					},
				},
			],
		}
	]

	restingTl.delay = ois._BASE.restDelay
	restingTl.repeat(-1)
	restingTl.repeatDelay(2)
	restingTl.yoyo(false)

	objs.forEach((obj, i) => {
		const stagger = .2
		obj.timeline.repeatDelay(1)

		obj.group.forEach((group, j) => {
			const subTimeline = new TimelineMax()

			subTimeline.to(group.el, ois._BASE.restDuration/3, {
				ease: ois._BASE.ease,
				attr: {
					x1: group.to.x1,
					y1: group.to.y1,
					x2: group.to.x2,
					y2: group.to.y2
				}
			}).to(group.el, ois._BASE.restDuration/3, {
				ease: ois._BASE.ease,
				attr: {
					x1: group.from.x1,
					y1: group.from.y1,
					x2: group.from.x2,
					y2: group.from.y2
				}
			})

			obj.timeline.add(subTimeline, 0)
		})

		restingTl.add(obj.timeline, i * stagger)
	})

	return restingTl
}

export default {
	getRestingTl
}