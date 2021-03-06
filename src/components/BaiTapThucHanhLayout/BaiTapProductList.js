import React, { Component } from 'react'
import BaiTapProduct from './BaiTapProduct'

export default class BaiTapProductList extends Component {
    render() {
        return (
            <div className="row text-center">
                <BaiTapProduct/>
                <BaiTapProduct/>
                <BaiTapProduct/>
                <BaiTapProduct/>
            </div>
        )
    }
}
