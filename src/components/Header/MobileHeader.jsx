import { Component } from "react";
import HamburgerNavbar from "./HamburgerNavbar";
import ExpandedNavbar from "./ExpandedNavbar";

export default class MobileHeader extends Component {
  state = {
    navBarOpen: false,
  };
  handleToggleNavbar = () => {
    this.setState({ navBarOpen: !this.state.navBarOpen });
    console.log(this.state.navBarOpen);
  };
  render() {
    const handleToggleNavbar = this.handleToggleNavbar;
    return (
      <div className=" pt-[1.25rem] pr-[1.125rem] pb-[ 0.75rem] pl-[20.4375rem] flex-row flex-reverse">
        <button
          onClick={handleToggleNavbar}
          className=" transition flex items-start justify-start"
        >
          {!this.state.navBarOpen ? <HamburgerNavbar /> : <ExpandedNavbar />}
        </button>
        {this.state.navBarOpen && (
          <div className="navBar font-[500] text-center text-[1.25rem] z-10 rounded-[1rem]  transition-all flex flex-col w-full gap-[1rem] bg-slate-200 left-0 top-15 absolute  px-[2rem] py-[1rem]">
            <span className="cursor-pointer ">Home</span>
            <span className="cursor-pointer">Works</span>
            <span className="cursor-pointer">Blog</span>
            <span className="cursor-pointer">Contact</span>
          </div>
        )}
      </div>
    );
  }
}
