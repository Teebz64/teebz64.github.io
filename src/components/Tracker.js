import React from "react"
import { ReactBasicScroll } from "react-basic-scroll"

class Tracker extends React.PureComponent {

    state = { hasEntered: false }

    scrollConfig = {
        from: 'bottom-bottom',
        to: 'top-middle',
        timing: 'expoOut',
        direct: true,
        inside: () => this.onEnter(),
    }

    onEnter = () => {
        if (this.state.hasEntered) { return }
        this.setState({ hasEntered: true })
    }

    render() {
        return (
            <ReactBasicScroll config={this.scrollConfig}>
                <div>
                    {React.cloneElement(
                        this.props.children,
                        { enter: this.state.hasEntered }
                    )}
                </div>
            </ReactBasicScroll>
        )
    }
}

export default Tracker