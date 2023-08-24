import { Component } from "react";
import { Link } from "react-router-dom";

export default class ScreenHeader extends Component {
  render() {
    return (
      <div className="flex items-center justify-end">
        <div className="div flex items-center justify-evenly gap-[1.25rem] py-[1rem] px-[2.5rem] text-[1.25rem] font-[500]">
          <span className="hover:underline cursor-pointer">
            <Link to={"/"}>Home</Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to={"/works"}> Works</Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to={"/blog"}>Blog</Link>
          </span>
          <span className="hover:underline cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
          </span>
        </div>
      </div>
    );
  }
}
