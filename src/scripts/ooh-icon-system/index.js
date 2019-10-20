import Icon from './class'
import CSSPlugin from 'gsap/CSSPlugin'
import DrawSVGPlugin from '../../vendor/gsap/plugins/DrawSVGPlugin'
import MorphSVGPlugin from '../../vendor/gsap/plugins/MorphSVGPlugin'
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

export const _BASE = {
	ease: Circ.easeInOut,
	stagger: 0.08,
	duration: 0.35,
	jumpTime: "-=.75",
	restDuration: 1.5,
	restDelay: .5,
	restJumpTime: "-=.75",
	restJumpTimeFast: "-=1.25",
	restEase: Circ.easeInOut
}

function init() {
	const webIcon                         = new Icon( document.body.querySelector('[data-ois="web"]'), 'web', web.getRestingTl)
	// const brandingIcon                    = new Icon( document.body.querySelector('[data-ois="branding"]'), 'branding', branding.getRestingTl)
	// const marketingIcon                   = new Icon( document.body.querySelector('[data-ois="marketing"]'), 'marketing', marketing.getRestingTl)
	// const videoIcon                       = new Icon( document.body.querySelector('[data-ois="video"]'), 'video', video.getRestingTl)
	// const webDesignIcon                   = new Icon( document.body.querySelector('[data-ois="web-design"]'), 'web-design', webDesign.getRestingTl)
	const webDevelopmentIcon              = new Icon( document.body.querySelector('[data-ois="web-development"]'), 'web-development', webDevelopment.getRestingTl)
	const uxIcon                          = new Icon( document.body.querySelector('[data-ois="ux"]'), 'ux', ux.getRestingTl)
	// const mobileIcon                      = new Icon( document.body.querySelector('[data-ois="mobile"]'), 'mobile', mobile.getRestingTl)
	// const ecommerceIcon                   = new Icon( document.body.querySelector('[data-ois="ecommerce"]'), 'ecommerce', ecommerce.getRestingTl)
	// const contentManagementIcon           = new Icon( document.body.querySelector('[data-ois="content-management"]'), 'content-management', contentManagement.getRestingTl)
	const experientialIcon                = new Icon( document.body.querySelector('[data-ois="experiential"]'), 'experiential', experiential.getRestingTl)
	// const creativeIcon                    = new Icon( document.body.querySelector('[data-ois="creative"]'), 'creative', creative.getRestingTl)
	// const designIcon                      = new Icon( document.body.querySelector('[data-ois="design"]'), 'design', design.getRestingTl)
	// const brandMessagingIcon              = new Icon( document.body.querySelector('[data-ois="brand-messaging"]'), 'brand-messaging', brandMessaging.getRestingTl)
	// const photographyIcon                 = new Icon( document.body.querySelector('[data-ois="photography"]'), 'photography', photography.getRestingTl)
	// const vrIcon                          = new Icon( document.body.querySelector('[data-ois="vr"]'), 'vr', vr.getRestingTl)
	const arIcon                          = new Icon( document.body.querySelector('[data-ois="ar"]'), 'ar', ar.getRestingTl)
	// const marketingStrategyIcon           = new Icon( document.body.querySelector('[data-ois="marketing-strategy"]'), 'marketing-strategy', marketingStrategy.getRestingTl)
	const brandStrategyIcon               = new Icon( document.body.querySelector('[data-ois="brand-strategy"]'), 'brand-strategy', brandStrategy.getRestingTl)
	// const analyticsIcon                   = new Icon( document.body.querySelector('[data-ois="analytics"]'), 'analytics', analytics.getRestingTl)
	// const paidSearchIcon                  = new Icon( document.body.querySelector('[data-ois="paid-search"]'), 'paid-search', paidSearch.getRestingTl)
	const aiIcon                          = new Icon( document.body.querySelector('[data-ois="ai"]'), 'ai', ai.getRestingTl)
	const brandDevelopmentIcon            = new Icon( document.body.querySelector('[data-ois="brand-development"]'), 'brand-development', brandDevelopment.getRestingTl)
	// const digitalMarketingIcon            = new Icon( document.body.querySelector('[data-ois="digital-marketing"]'), 'digital-marketing', digitalMarketing.getRestingTl)
	// const contentMarketingSocialMediaIcon = new Icon( document.body.querySelector('[data-ois="content-marketing-social-media"]'), 'content-marketing-social-media', contentMarketingSocialMedia.getRestingTl)
	const copywritingIcon                 = new Icon( document.body.querySelector('[data-ois="copywriting"]'), 'copywriting', copywriting.getRestingTl)
	const mediaBuyingIcon                 = new Icon( document.body.querySelector('[data-ois="media-buying"]'), 'media-buying', mediaBuying.getRestingTl)
	// const advertisingIcon                 = new Icon( document.body.querySelector('[data-ois="advertising"]'), 'advertising', advertising.getRestingTl)
	// const campaignDevelopmentIcon         = new Icon( document.body.querySelector('[data-ois="campaign-development"]'), 'campaign-development', campaignDevelopment.getRestingTl)
	// const experienceDesignIcon            = new Icon( document.body.querySelector('[data-ois="experience-design"]'), 'experience-design', experienceDesign.getRestingTl)
	// const caseStudiesIcon                 = new Icon( document.body.querySelector('[data-ois="case-studies"]'), 'case-studies', caseStudies.getRestingTl)
	const eyeCandyIcon                    = new Icon( document.body.querySelector('[data-ois="eye-candy"]'), 'eye-candy', eyeCandy.getRestingTl)
	const expertiseIcon                   = new Icon( document.body.querySelector('[data-ois="expertise"]'), 'expertise', expertise.getRestingTl)
	const webStrategyIcon                 = new Icon( document.body.querySelector('[data-ois="web-strategy"]'), 'web-strategy', webStrategy.getRestingTl)
	// const workIcon                        =	new Icon( document.body.querySelector('[data-ois="work"]'), 'work', work.getRestingTl)
	// const pastIcon                        =	new Icon( document.body.querySelector('[data-ois="past"]'), 'past', past.getRestingTl)
	// const futureIcon                      =	new Icon( document.body.querySelector('[data-ois="future"]'), 'future', future.getRestingTl)
	// const whatnotIcon                     =	new Icon( document.body.querySelector('[data-ois="whatnot"]'), 'whatnot', whatnot.getRestingTl)
}

export default {
	init
}