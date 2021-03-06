import React, { Component } from 'react'
import BaiTapCarousel from "./BaiTapCarousel"
import BaiTapProductList from './BaiTapProductList'

export default class BaiTapContent extends Component {
    render() {
        return (
            <div className="container">
                <BaiTapCarousel/>
                <BaiTapProductList/>
            </div>
        )
    }
}
