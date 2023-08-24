import { Component } from "react";

export default class Recentposts extends Component {
  render() {
    return (
      <div className="bg-[#EDF7FA]  flex flex-col items-center text-[#21243D] ">
        <div className="recentpost-heading flex items-center justify-center sm:justify-between sm:w-[80%]">
          <span className="text-[1.125rem] font-[400] leading-[3.75] sm:text-[1.375rem]">
            Recent posts
          </span>
          <span className="hidden sm:flex text-[#00A8CC] cursor-pointer">
            view all
          </span>
        </div>
        <div className="recentposts-container pb-[3rem] w-[94.4%] flex flex-col gap-[1rem] sm:w-[80%] sm:grid sm:grid-cols-2  ">
          <div className="recent-post1 py-[1rem] gap-[1rem]  rounded-[0.25rem] bg-[white] flex flex-col items-center justify-start sm:flex-wrap">
            <div className="post-title  flex flex-col w-[20.4375rem]">
              <span className="text-[1.375rem] font-[700] sm:text-[1.625rem]">
                Making a design system from scratch
              </span>
            </div>
            <div className="details flex w-[20.4375rem] gap-[2rem] sm:text-[1.125rem]">
              <span>12 Feb 2020</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="21"
                  viewBox="0 0 2 21"
                  fill="none"
                >
                  <path d="M1 0V21" stroke="black" />
                </svg>
              </span>
              <span>Design, Pattern</span>
            </div>
            <div className="description w-[19.625rem] h-[7.3125rem] ">
              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
          </div>
          <div className="recent-post2 py-[1rem] gap-[1rem]  rounded-[0.25rem] bg-[white] flex flex-col items-center justify-start sm:flex-wrap">
            <div className="post-title  flex flex-col w-[20.4375rem]">
              <span className="text-[1.375rem] font-[700] sm:text-[1.625rem]">
                Making a design system from scratch
              </span>
            </div>
            <div className="details flex w-[20.4375rem] gap-[2rem] sm:text-[1.125rem]">
              <span className="">12 Feb 2020</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="21"
                  viewBox="0 0 2 21"
                  fill="none"
                >
                  <path d="M1 0V21" stroke="black" />
                </svg>
              </span>
              <span>Design, Pattern</span>
            </div>
            <div className="description w-[19.625rem] h-[7.3125rem]">
              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
