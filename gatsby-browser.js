/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const transitionDelay = 1000
const navigationEvent = new Event('calc-smiley')

exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    if (location.action === 'PUSH') {
        window.setTimeout(
            () => {
                window.scrollTo(0, 0)
                document.body.dispatchEvent(navigationEvent)
            },
            transitionDelay
        )
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            () => {
                window.scrollTo(...(savedPosition || [0, 0]))
                document.body.dispatchEvent(navigationEvent)
            },
            transitionDelay
        )
    }

    return false
}