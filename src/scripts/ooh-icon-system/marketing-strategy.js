import * as ois from '../ooh-icon-system'

const name = 'marketing-strategy';
const intro = new TimelineMax({
	paused: true
});
const restingTl = new TimelineMax({
	paused: true
});

function getRestingTl() {
	const $el = $('[data-ois="' + name + '"]');
	const $shape = $el.find('[ois-marketing-strategy-idx="1"]');

	restingTl.delay = ois._BASE.restDelay;
	restingTl.repeat(-1);
	restingTl.repeatDelay(2);
	restingTl.yoyo(true);

	restingTl.to($shape, ois._BASE.restDuration/3, {
		ease: ois._BASE.ease,
		scale: .7,
		transformOrigin: '100% 60%',
	}).to($shape, ois._BASE.restDuration/3, {
		ease: ois._BASE.ease,
		scale: 1.22,
	});

	return restingTl
}

export default {
	getRestingTl
}