import Icon from './class'
import CSSPlugin from 'gsap/CSSPlugin'
import DrawSVGPlugin from '../../vendor/gsap/plugins/DrawSVGPlugin'
import MorphSVGPlugin from '../../vendor/gsap/plugins/MorphSVGPlugin'
import TimelineMax from "../../vendor/gsap/TimelineMax";
import { Circ, Power1 } from 'gsap/all'

import ai from './ai'
import ar from './ar'
import web from './web'
import eyeCandy from './eye-candy'
import mediaBuying from './media-buying'
import copywriting from './copywriting'
import webDevelopment from './web-development'
import expertise from './expertise'
import experiential from './experiential'
import brandDevelopment from './brand-development'
import brandStrategy from './brand-strategy'
import webStrategy from './web-strategy'
import ux from './ux'

CSSPlugin.defaultSmoothingOrigin = true

export const _BASE = !TimlineMax
	? {
		ease: Circ.easeInOut,
		stagger: 0.08,
		duration: 0.35,
		jumpTime: "-=.75",
		restDuration: 1.5,
		restDelay: .5,
		restJumpTime: "-=.75",
		restJumpTimeFast: "-=1.25",
		restEase: Circ.easeInOut
	} : { }

function init() {
	if (!TimelineMax) { return }

	const webIcon                         = new Icon( document.body.querySelector('[data-ois="web"]'), 'web', web.getRestingTl)
	const webDevelopmentIcon              = new Icon( document.body.querySelector('[data-ois="web-development"]'), 'web-development', webDevelopment.getRestingTl)
	const uxIcon                          = new Icon( document.body.querySelector('[data-ois="ux"]'), 'ux', ux.getRestingTl)
	const experientialIcon                = new Icon( document.body.querySelector('[data-ois="experiential"]'), 'experiential', experiential.getRestingTl)
	const arIcon                          = new Icon( document.body.querySelector('[data-ois="ar"]'), 'ar', ar.getRestingTl)
	const brandStrategyIcon               = new Icon( document.body.querySelector('[data-ois="brand-strategy"]'), 'brand-strategy', brandStrategy.getRestingTl)
	const aiIcon                          = new Icon( document.body.querySelector('[data-ois="ai"]'), 'ai', ai.getRestingTl)
	const brandDevelopmentIcon            = new Icon( document.body.querySelector('[data-ois="brand-development"]'), 'brand-development', brandDevelopment.getRestingTl)
	const copywritingIcon                 = new Icon( document.body.querySelector('[data-ois="copywriting"]'), 'copywriting', copywriting.getRestingTl)
	const mediaBuyingIcon                 = new Icon( document.body.querySelector('[data-ois="media-buying"]'), 'media-buying', mediaBuying.getRestingTl)
	const eyeCandyIcon                    = new Icon( document.body.querySelector('[data-ois="eye-candy"]'), 'eye-candy', eyeCandy.getRestingTl)
	const expertiseIcon                   = new Icon( document.body.querySelector('[data-ois="expertise"]'), 'expertise', expertise.getRestingTl)
	const webStrategyIcon                 = new Icon( document.body.querySelector('[data-ois="web-strategy"]'), 'web-strategy', webStrategy.getRestingTl)
}

export default {
	init
}