import { Component } from "react";

export default class ExpandedNavbar extends Component {
  render() {
    return (
      <div className=" flex items-start justify-start">
        <div className="navButton flex items-start justify-start">
          <svg
            className=" transition"
            width="30"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="menu">
              <path
                className="rotate-45 origin-top-left transition w-[1rem]"
                id="Vector 16"
                d="M0 1H30"
                stroke="#21243D"
                strokeWidth="1.6"
              />
              <path
                className="-rotate-45 origin-bottom-left transition w-[1rem]"
                id="Vector 18"
                d="M0 19H30"
                stroke="#21243D"
                strokeWidth="1.6"
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
