import React from "react"
import CaseStudyLayout from '../layouts/case-study'
import oohIconSystem from '../scripts/ooh-icon-system'

import WebIcon from '../components/ooh-icon-system/web'
import MediaBuyingIcon from '../components/ooh-icon-system/media-buying'
import CopywritingIcon from '../components/ooh-icon-system/copywriting'
import EyecandyIcon from '../components/ooh-icon-system/eye-candy'
import WebDevelopmentIcon from '../components/ooh-icon-system/web-development'
import AiIcon from '../components/ooh-icon-system/ai'
import ExpertiseIcon from '../components/ooh-icon-system/expertise'
import ExperientialIcon from '../components/ooh-icon-system/experiential'
import BrandDevelopmentIcon from '../components/ooh-icon-system/brand-development'
//import DigitalStrategyIcon from '../components/ooh-icon-system/digital-strategy'
import WebStrategyIcon from '../components/ooh-icon-system/web-strategy'
import ArIcon from '../components/ooh-icon-system/ar'
import UxIcon from '../components/ooh-icon-system/ux'

class OohIconSystem extends React.PureComponent {

    componentDidMount() {
        oohIconSystem.init()
    }

    getComponents = () => [
        <WebIcon />,
        <EyecandyIcon />,
        <CopywritingIcon />,
        <WebDevelopmentIcon />,
        <MediaBuyingIcon />,
        <AiIcon />,
        <ExpertiseIcon />,
        <ExperientialIcon />,
        <BrandDevelopmentIcon />,
        <WebStrategyIcon />,
        <ArIcon />,
        <UxIcon />
    ]

    render() {
        return (
            <CaseStudyLayout
                slug='ooh-icon-system'
                heading='Oohology'
                subheading='Icon System'
                tags={['Development', 'Animation']}
            >
                <div className="deck deck--inner">
                    <h3 className="deck__heading deck__heading--inner">An in-depth study of svg animation</h3>
                    <p className="deck__text deck__text--inner">I learned almost everything I know about svg DOM manipulation from this project. It was an exhaustive study in GSAP's TweenMax and TimelineMax for .svg animation in browser.</p>
                </div>
                <div className="case-study__row">
                    <ul className="ois-list">
                        { this.getComponents().map((item, i) => <li key={i}>{item}</li>) }
                    </ul>
                </div>
            </CaseStudyLayout>
        )
    }
}

export default OohIconSystem