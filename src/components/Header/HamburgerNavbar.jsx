import { Component } from "react";

export default class HamburgerNavbar extends Component {
  render() {
    return (
      <svg
        className="transition"
        width="30"
        height="20"
        viewBox="0 0 30 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="menu">
          <path
            className="transition"
            id="Vector 16"
            d="M0 1H30"
            stroke="#21243D"
            strokeWidth="1.6"
          />
          <path
            id="Vector 17"
            className="transition"
            d="M0 10H30"
            stroke="#21243D"
            strokeWidth="1.6"
          />
          <path
            id="Vector 18"
            className="transition w-[1rem]"
            d="M0 19H30"
            stroke="#21243D"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    );
  }
}
