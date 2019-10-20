import * as ois from '../ooh-icon-system'

function getRestingTl($el) {
	const restingTl = new TimelineMax({
		paused: true
	})

	restingTl.delay = ois._BASE.restDelay;
	restingTl.repeat(-1);
	restingTl.repeatDelay(2);
	restingTl.yoyo(false);

	const $pulse1 = $el.find('[past-idx="1"]');
	const $pulse2 = $el.find('[past-idx="2"]');
	const $pulse3 = $el.find('[past-idx="3"]');

	const pulses = [
		$pulse1,
		$pulse2,
		$pulse3
	]

	const $motionPath1 = MorphSVGPlugin.pathDataToBezier($el.find('[past-motionpath="1"]'), { align:$pulse1 });
	const $motionPath2 = MorphSVGPlugin.pathDataToBezier($el.find('[past-motionpath="2"]'), { align:$pulse2 });
	const $motionPath3 = MorphSVGPlugin.pathDataToBezier($el.find('[past-motionpath="3"]'), { align:$pulse3 });

	const motionPaths = [
		$motionPath1,
		$motionPath2,
		$motionPath3,
	]

	const $paths = $('[past-idx="4"]')
	const $core = $('[past-idx="5"]')
	const $polygon = $('[past-idx="6"]')

	const heatingCoilTl = new TimelineMax()
	const coreTl = new TimelineMax()
	const polygonTl = new TimelineMax()

	pulses.forEach((pulse, i) => {

		TweenMax.set(pulse, {
			xPercent: -50,
			yPercent: -50,
			transformOrigin: '50% 50%',
			opacity: 0,
		})

		const timeline = new TimelineMax()

		for (var j = 20; j > 8; j--) {
			timeline.set(pulse, {
				opacity: .9,
				scale: 1
			})
			timeline.to(pulse, (j * .1) * .4, {
				ease: ois._BASE.ease,
				bezier: {
					values: motionPaths[i],
					type: "cubic"
				},
				opacity: 1,
				scale: 0
			})
		}

		timeline.to(pulse, .2, {
			ease: ois._BASE.ease,
			opacity: 0
		})

		restingTl.add(timeline, 0)
	})

	heatingCoilTl.to($paths, 4.2, {
		stroke: '#EC2379'
	}).to($paths, 1.2, {
		delay: 2,
		ease: ois._BASE.ease,
		stroke: '#402545'
	})

	coreTl.fromTo($core, 7.2, {
		transformOrigin: '50% 50%'
	}, {
		ease: Power1.easeIn,
		scale: 40,
		opacity: .85
	}).to($core, .4, {
		ease: ois._BASE.ease,
		scale: 1,
		opacity: 0
	});

	polygonTl.fromTo($polygon, 7.2, {
		svgOrigin: '15.9 15.3'
	}, {
		ease: Power1.easeIn,
		scale: .4,
	}).to($polygon, .4, {
		ease: ois._BASE.ease,
		scale: 1,
	});

	restingTl.add(coreTl, 0)
	restingTl.add(heatingCoilTl, 0)
	restingTl.add(polygonTl, 0)
	return restingTl
}

export default {
	getRestingTl
}