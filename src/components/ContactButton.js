import React from "react"
import * as basicScroll from 'basicscroll'
import anime from 'animejs/lib/anime.es.js'

class ContactButton extends React.PureComponent {

    button = React.createRef()
    scrollConfig = {
        from: 'top-top',
        to: 'bottom-bottom',
        props: {
            '--inner-rot': {
                from: '0deg',
                to: '80deg',
            },
            '--outer-rot': {
                from: '0deg',
                to: '-60deg',
            }
        }
    }

    componentDidMount() {
        this.basicScroll = basicScroll.create({
            elem: document.body,
            direct: document.querySelector('.contact-me'),
            ...this.scrollConfig
        })

        this.basicScroll.start()

        setTimeout(this.basicScroll.calculate, 1000)
        document.body.addEventListener('calc-smiley', () => {
            setTimeout(this.basicScroll.calculate, 1000)
        })
    }

    onClick = () => {
        anime({
            targets: 'html, body',
            scrollTop: document.body.scrollHeight,
            duration: 1500,
            easing: 'easeInOutQuad'
        });
    }

    render() {
        return (
            <button className="contact-me" ref={this.button} onClick={this.onClick}>
                {/*<img src="/images/misc/contact-me.svg" alt="Contact Me" className="contact-me__text" width="123" height="123" />*/}
                <img src="/images/misc/smile.svg" alt="Contact Me" className="contact-me__smile contact-me__smile--static" width="150" height="150" />
                <img src="/images/misc/smile--hover.svg" alt="Contact Me" className="contact-me__smile contact-me__smile--hover" width="150" height="150" />
            </button>
        )
    }
}

export default ContactButton