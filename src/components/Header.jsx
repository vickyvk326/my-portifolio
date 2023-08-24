import { Component } from "react";

import MobileHeader from "./Header/MobileHeader";
import ScreenHeader from "./ScreenHeader";
export default class Header extends Component {
  render() {
    return (
      <div className=" sm:h-[10vh] z-10 ">
        <div className="div flex items-center justify-end sm:hidden">
          <MobileHeader />
        </div>
        <div className="div hidden sm:block">
          <ScreenHeader />
        </div>
      </div>
    );
  }
}
