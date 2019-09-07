import ScrambleText from 'scramble-text'

export default class TextScambler {
    constructor(element) {
        this.element = element
        this.scrambleText = new ScrambleText(this.element, {
            //timeOffset: 100,
            chars: [
                'ポ', 'ー', 'ト', 'フ', 'ォ', '_', 'リ', 'オ'
            ]
        }).stop()

        this.bindEvents()
    }

    play = () => {
        this.onHover()
    }

    bindEvents = () => {
        this.element.addEventListener(
            'mouseover',
            this.onHover
        )
    }

    onHover = () => {
        this.scrambleText.play()
        setTimeout(() => {

            this.scrambleText.stop()

            setTimeout(() => {
                this.scrambleText.play()
                this.scrambleText.start()
            }, 200)

        }, 150)
    }
}