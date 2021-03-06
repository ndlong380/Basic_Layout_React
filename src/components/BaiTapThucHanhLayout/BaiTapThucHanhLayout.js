import React, { Component } from "react";
import BaiTapContent from "./BaiTapContent";
import BaiTapFooter from "./BaiTapFooter";
import BaiTapHeader from "./BaiTapHeader";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <BaiTapHeader />
        <BaiTapContent/>
        <BaiTapFooter/>
      </div>
    );
  }
}
