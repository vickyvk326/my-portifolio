import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center gap-[1.5rem] py-[3.38rem]">
        <div className="social-icons w-[80%] flex  justify-evenly sm:w-[40%]">
          <img src="src\assets\fb.png" alt="" />
          <img src="src\assets\insta.png" alt="" />
          <img src="src\assets\Group.png" alt="" />
          <img src="src\assets\Linkedin.png" alt="" />
        </div>
        <div className="copywright sm:w-[80%] flex items-center justify-center">
          <span>Copyright ©2020 All rights reserved </span>
        </div>
      </div>
    );
  }
}
