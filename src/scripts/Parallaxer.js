import * as basicScroll from 'basicscroll'
import WorkItemEnter from '../scripts/WorkItemEnter'
//import TextScrambler from '../scripts/TextScrambler'

export default class Parallaxer {

    buildMasthead = () => {
        this.masthead = basicScroll.create({
            elem: document.querySelector('.masthead'),
            from: '0px',
            to: '300px',
            timing: 'expoIn',
            props: {
                '--masthead-opacity': {
                    from: .99,
                    to: 0
                },
                '--masthead-ty': {
                    from: '0%',
                    to: '20%'
                }
            },
        })

        this.masthead.start()
    }

    buildIcosohedron = () => {
        this.icosohedron = basicScroll.create({
            elem: document.querySelector('.icosohedron__canvas'),
            from: '0px',
            to: '800px',
            props: {
                '--icosohedron-ty': {
                    from: '0px',
                    to: '200px'
                }
            },
        })

        this.icosohedron.start()
    }

    workItemEnter = (instance) => {
        const element = instance.getData().elem

        if (element.run) { return }

        const parent = element.closest('.work__main')
        const category = parent.querySelector('.work__category')

        new WorkItemEnter(parent)

        element.run = true
    }

    buildWorkItems = () => {
        document
            .querySelectorAll('.work__title')
            .forEach((elem, i) => {
                const count = i + 1

                const workItem = basicScroll.create({
                    elem,
                    from: 'top-bottom',
                    to: 'top-middle',
                    timing: 'expoOut',
                    inside: (instance) => this.workItemEnter(instance),
                    props: {
                        [`--title-opacity-${count}`]: {
                            from: 0,
                            to: .99
                        },
                        [`--title-ty-${count}`]: {
                            from: '-20px',
                            to: '0px'
                        },
                        [`--title-accent-scale-${count}`]: {
                            from: 0,
                            to: 1
                        },
                        [`--title-accent-ty-${count}`]: {
                            from: '20px',
                            to: '0px'
                        },
                    }
                })

                workItem.start()

                setTimeout(() => {
                    workItem.calculate()
                    workItem.update()
                }, 1000)
            })
    }

    buildWorkItemFigures = () => {
        document
            .querySelectorAll('.work__figure')
            .forEach((elem, i) => {
                const count = i + 1

                const workFigure = basicScroll.create({
                    elem,
                    from: 'top-bottom',
                    to: 'bottom-top',
                    timing: 'expoOut',
                    direct: true,
                    props: {
                        [`--thumbnail-ty`]: {
                            from: '150px',
                            to: '-150px'
                        },
                    }
                })

                workFigure.start()

                setTimeout(() => {
                    workFigure.calculate()
                    workFigure.update()
                }, 1000)
            })
    }

    constructor() {
        this.buildMasthead()
        this.buildIcosohedron()
        this.buildWorkItems()
        this.buildWorkItemFigures()
    }
}