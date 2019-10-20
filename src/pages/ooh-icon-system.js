import React from "react"
import CaseStudyLayout from '../layouts/case-study'
import Caption from '../components/Caption'
import oohIconSystem from '../scripts/ooh-icon-system'

import WebIcon from '../components/ooh-icon-system/web.svg'
import MediaBuyingIcon from '../components/ooh-icon-system/media-buying.svg'
import CopywritingIcon from '../components/ooh-icon-system/copywriting.svg'
import EyecandyIcon from '../components/ooh-icon-system/eye-candy.svg'
import WebDevelopmentIcon from '../components/ooh-icon-system/web-development.svg'
import AiIcon from '../components/ooh-icon-system/ai.svg'
import ExpertiseIcon from '../components/ooh-icon-system/expertise.svg'
import ExperientialIcon from '../components/ooh-icon-system/experiential.svg'
import BrandDevelopmentIcon from '../components/ooh-icon-system/brand-development.svg'
//import DigitalStrategyIcon from '../components/ooh-icon-system/digital-strategy.svg'
import WebStrategyIcon from '../components/ooh-icon-system/web-strategy.svg'
import ArIcon from '../components/ooh-icon-system/ar.svg'
import UxIcon from '../components/ooh-icon-system/ux.svg'

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