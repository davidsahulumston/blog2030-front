
import React, { Component } from 'react'
import PrincipalImage from '../../../components/Vote/ThemeMonth/PrincipalImage/PrincipalImage'
import ThemeMonthCards from '../../../components/Vote/ThemeMonth/ThemeMonthCards/ThemeMonthCards'

export default class ThemeMonth extends Component {
    constructor(data) {
        super()
        this.state = {
            data: data.data
        }
    }
    render() {
        // console.log(this.state);
        return (
            <div>
                <PrincipalImage/>
                <ThemeMonthCards blog={this.state}/>
            </div>
        )
    }
}
