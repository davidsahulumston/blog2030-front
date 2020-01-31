import React, { Component, Fragment } from 'react'
import ImageIdeas from '../../../components/Vote/TecIdeas/ImageIdeas/ImageIdeas'
import CardsIdeasTec from '../../../components/Vote/TecIdeas/CardsIdeasTec/CardsIdeasTec'

export default class TecIdeas extends Component {
    render() {
        return (
            <Fragment>
                <ImageIdeas/>
                <CardsIdeasTec/>
            </Fragment>
        )
    }
}
