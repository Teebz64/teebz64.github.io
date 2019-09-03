import React from "react"

import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"

const getTransitionStyles = {
    entering: {
//      position: 'absolute',
        width: '100%',
        opacity: 0,
    },
    entered: {
        opacity: 1,
    },
    exited: {
        opacity: 0,
    },
}

class PageTransition extends React.PureComponent {
    render() {
        const { children, location } = this.props

        return (
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: 2000,
                        exit: 2000,
                    }}
                    onExit={node => {
                        node.style.position = 'fixed'
                        node.style.top = `${-1 * window.scrollY}px`
                        console.log(node.style.position, `${-1 * window.scrollY}px`)
                    }}
                    unmountOnExit={true}
                >
                    {status => (
                        <div
                            // style={{
                            //     ...getTransitionStyles[status],
                            // }}
                        >
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        )
  }
}
export default PageTransition