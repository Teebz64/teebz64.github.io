import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"
import { Link } from "gatsby"
import { IoMdArrowBack } from "react-icons/io"
import Revealer from '../components/Revealer'
import Tracker from '../components/Tracker'
import Caption from '../components/Caption'
import GoBackButton from '../components/GoBackButton'

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

    sealConfig = {
        from: 'top-bottom',
        to: 'bottom-top',
        timing: 'expoIn',
        direct: true,
        props: {
            '--seal-ty': {
                from: '20%',
                to: '-20%'
            }
        }
    }

    onEnter = () => {
        if (this.state.hasEntered) { return }
        this.setState({ hasEntered: true })
    }

    render() {
        return (
            <main className="transcend">
                <GoBackButton />
                <section className="section section--hero">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        01
                    </div>
                    <ReactBasicScroll config={scrollConfig}>
                        <header className="case-study__header masthead">
                            <h1 className="case-study__heading">Transcend</h1>
                            <div className="masthead__bottom">
                                <div className="masthead__pill">
                                    Design • Branding
                                </div>
                            </div>
                        </header>
                    </ReactBasicScroll>
                    <ul className="callouts callouts--x-margin-bottom callouts--inline">
                        <Caption
                            heading="about"
                            text="Transcend is a meditation specialist and motivational speaker. My goal in branding was to design a mark to reflect spiritual and mental wellness."
                        />
                        <Caption
                            heading="role"
                            text="Designer"
                        />
                    </ul>
                </section>
                <section className="section">
                    <div className="section__indicator section__indicator--x-margin-bottom">
                        02
                    </div>
                    <div className="case-study__row">
                        <Tracker>
                            <Revealer
                                image='/images/transcend/logo--recolor.svg'
                                alt='Logo Recolor'
                                styleBlock='transcend'
                                modifier='first'
                            />
                        </Tracker>
                        <ul className="callouts callouts--caption callouts--inline">
                            <Caption
                                heading="Lotus Mark"
                                text={`The lotus flower is memetic for the wellness industry and near instantly communicates its meaning. Many of my marks rely on geometric interlocking symmetry–in this case the interwoven petals aim to communicate unity and wholeness.`}
                            />
                            <Caption
                                heading="Text Mark"
                                text={`I'm obsessed with the rotundly serifed and trendy cooper-black-like fonts. Recoletta has a natural vibe, ideal for a spiritual-but-still-business aesthetic.`}
                            />
                        </ul>
                    </div>
                    <div className="case-study__row">
                        <Tracker>
                            <Revealer
                                image='/images/transcend/pattern.svg'
                                alt='Pattern from Logo'
                                styleBlock='transcend'
                                modifier='second'
                            />
                        </Tracker>
                        <ul className="callouts callouts--caption">
                            <Caption
                                heading="Lotus Pattern"
                                text="The rotational symmetry of the logomark lends itself to reptition; creating a pattern reminiscent of eastern textiles."
                                shift="2"
                            />
                        </ul>
                        <ReactBasicScroll config={this.sealConfig}>
                            <img src="/images/transcend/seal.svg" alt="Alternate Brand Mark" className="transcend__floating-seal"/>
                        </ReactBasicScroll>
                    </div>
                    <div className="case-study__row">
                        <Tracker>
                            <Revealer
                                image='/images/transcend/alt-mark.svg'
                                alt='Alternate Mark'
                                styleBlock='transcend'
                                modifier='third'
                            />
                        </Tracker>
                        <ul className="callouts callouts--caption">
                            <Caption
                                heading="Unused Mark"
                                text="This is my favorite mark that came from this branding exercise, but ultimately, it was not selected."
                            />
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default Transcend