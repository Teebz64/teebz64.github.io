import React from "react"
import * as basicScroll from 'basicscroll'

class ContactButton extends React.PureComponent {

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

        document.body.addEventListener('navigate', () => {
            setTimeout(this.basicScroll.calculate, 1000)
        })
    }

    render() {
        return (
            <div className="contact-me">
                <img src="/images/misc/contact-me.svg" alt="Contact Me" className="contact-me__text" width="123" height="123" />
                <img src="/images/misc/smile.svg" alt="Contact Me" className="contact-me__smile" width="123" height="123" />
            </div>
        )
    }
}

export default ContactButton