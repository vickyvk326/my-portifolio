import { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div className="sm:h-[90vh] pb-[4rem] flex flex-col items-center justify-center gap-[1rem] sm:flex-row-reverse sm:gap-[1rem] sm:pt-[8rem] sm:pb-[4.4rem]">
        <div className="overflow-hidden  flex items justify-center w-[10.67869rem] h-[10.67869rem] sm:justify-start sm:w-[15.1875rem] sm:h-[15.1875rem] p-[.5rem] bg-[#FF6464] rounded-[50%] sm:p-[.65rem]">
          <img
            src="src\assets\profile-pic.jpeg"
            alt=""
            className="overflow-hidden  rounded-[50%] scale-105 z-0  "
          />
        </div>
        <div className="Intro-left flex flex-col justify-center items-center gap-[1rem] sm:justify-start sm:items-start sm:flex-shrink">
          <div className="short-intro w-[19.5rem] flex justify-center sm:justify-start sm:w-[31.61rem] ">
            <span className=" text-center text-[#21243D] text-[2rem] font-[700] leading-[2.5rem] sm:text-left sm:text-[2.75rem] sm:leading-[3.75rem]">
              Hi, I am Vignesh R, React front-end developer
            </span>
          </div>
          <div className="long-intro w-[20.5rem]">
            <span className="text-[1rem] font-[400] text-[#21243D]">
              Learning and playing with React-js. It is fun and progressive
              learning.
            </span>
          </div>
          <div className="button rounded-[0.125rem] bg-[#FF6464]  flex items-center justify-center h-[2.9375rem] w-[13rem]">
            <button className="flex items-center justify-center h-[1.3125rem] w-[10.4375rem] bg-[#FF6464] text-[1.25rem] font-[500] text-[white]">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    );
  }
}
