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

    // getComponents = () => []

    render() {
        return (
            <CaseStudyLayout
                slug='ooh-icon-system'
                heading='Oohology'
                subheading='Icon System'
                tags={['Development', 'Animation']}
            >
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