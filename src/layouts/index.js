import React from "react"
import ContactButton from '../components/ContactButton'
import Grid from '../components/Grid'
import Loader from '../components/Loader'
import TransitionGrid from '../components/TransitionGrid'
import Icosohedron from '../components/Icosohedron'
import PageTransition from '../components/PageTransition'
import Footer from '../components/Footer'
import "../scss/index.scss"

export default function Layout({children, location}) {
    return (
        <React.Fragment>
            {/* <Grid /> */}
            <ContactButton />
            <Icosohedron />
            <PageTransition location={location}>
                <div className="container container--v-padding">
                    {children}
                </div>
                <Footer />
            </PageTransition>
            <TransitionGrid />
        </React.Fragment>
    )
}