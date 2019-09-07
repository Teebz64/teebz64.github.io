import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"

const scrollConfig = {
    from: '0px',
    to: '300px',
    timing: 'expoIn',
    direct: true,
    props: {
        '--masthead-opacity': {
            from: .99,
            to: 0
        },
        '--masthead-ty': {
            from: '0%',
            to: '20%'
        }
    }
}

const Masthead = () => (
    <ReactBasicScroll config={scrollConfig}>
        <header className="masthead">
            <div>
                <h1 className="masthead__headline">St<em>e</em>v<em>e</em>n D<em>a</em>n<em>a</em></h1>
            </div>
            <div className="masthead__bottom">
                <div className="masthead__pill">
                    <div>ポートフォリオ</div>
                    <div className="masthead__timespan">'18–'19</div>
                </div>
                <div className="masthead__text">
                    <div className="masthead__textline masthead__textline--large">Design & Development</div>
                    <div className="masthead__textline masthead__textline--medium">Selected Work</div>
                </div>
            </div>
        </header>
    </ReactBasicScroll>
)

export default Masthead