import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import { IoMdArrowBack } from "react-icons/io"
import Revealer from '../components/Revealer'
import Tracker from '../components/Tracker'
import Caption from '../components/Caption'

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

class Transcend extends React.PureComponent {
    state = { hasEntered: false }

    onEnter = () => {
        if (this.state.hasEntered) { return }
        this.setState({ hasEntered: true })
    }

    render() {
        return (
            <main className="transcend">
                <section className="section section--hero">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        01
                    </div>
                    <ReactBasicScroll config={scrollConfig}>
                        <header className="case-study__header masthead">
                            <h1 className="case-study__heading">Transcend</h1>
                            <div className="masthead__bottom">
                                <Link
                                    className="masthead__go-back masthead__pill"
                                    to='/'
                                >
                                    <IoMdArrowBack /> Go Back
                                </Link>
                            </div>
                        </header>
                    </ReactBasicScroll>
                    <ul className="callouts callouts--x-margin-bottom">
                        <Caption
                            heading="role"
                            text="Designer"
                        />
                        <Caption
                            heading="about"
                            text="Transcend is a wellness specialist and motivational speaker. My role in branding was to design a mark to reflect spiritual and mental wellness."
                        />
                    </ul>
                </section>
                <section className="section">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        02
                    </div>
                    <div>
                        <Tracker>
                            <Revealer
                                image='/images/transcend/logo--recolor.svg'
                                alt='Logo Recolor'
                                styleBlock='transcend'
                                modifier='first'
                            />
                        </Tracker>
                        <ul className="callouts callouts--caption cols-2 shift-1">
                            <Caption
                                heading="about"
                                text="Transcend is a wellness specialist and motivational speaker. My role in branding was to design a mark to reflect spiritual and mental wellness."
                            />
                        </ul>
                    </div>
                    <div>
                        <Tracker>
                            <Revealer
                                image='/images/transcend/pattern.svg'
                                alt='Pattern from Logo'
                                styleBlock='transcend'
                                modifier='second'
                            />
                        </Tracker>
                        <ul className="callouts callouts--caption cols-2 shift-2">
                            <Caption
                                heading="about"
                                text="Transcend is a wellness specialist and motivational speaker. My role in branding was to design a mark to reflect spiritual and mental wellness."
                            />
                        </ul>
                    </div>
                    <div>
                        <Tracker>
                            <Revealer
                                image='/images/transcend/alt-mark.svg'
                                alt='Alternate Mark'
                                styleBlock='transcend'
                                modifier='third'
                            />
                        </Tracker>
                        <ul className="callouts callouts--caption cols-2">
                            <Caption
                                heading="about"
                                text="Transcend is a wellness specialist and motivational speaker. My role in branding was to design a mark to reflect spiritual and mental wellness."
                            />
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default Transcend