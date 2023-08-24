import { Component } from "react";

export default class FeaturedWorksProvider extends Component {
  render() {
    const { image, title, year, subTitle, description } = this.props;
    return (
      <div className="flex flex-col items-center justify-center sm:justify-start w-full ">
        <div className=" flex flex-col text-[#21243D] w-[23.4375rem] items-center justify-center sm:w-full sm:justify-start ">
          <div className="featuredWorks-container w-full flex flex-col gap-[1.5rem] items-center justify-center sm:flex-row sm:w-[80%] sm:justify-start border border-t-0 border-l-0 border-r-0 pb-[2rem]">
            <div className="image-container w-[21.187rem] h-[14.375rem] flex items-center justify-center sm:justify-start sm:w-[15.375rem] sm:h-[11.25rem] ">
              <img
                src={image}
                loading="lazy loading"
                className=" rounded-[0.38rem]  w-[21.187rem] h-[14.375rem] sm:w-[15.375rem] sm:h-[11.25rem]"
              />
            </div>
            <div className="container flex flex-col gap-[1rem] w-[21.187rem] sm:flex-1">
              <div className="title-container  flex flex-col  w-auto">
                <span className=" text-[1.5rem] leading-[1.875rem] font-[700] sm:text-[1.875rem] ">
                  {title}
                </span>
              </div>
              <div className="details w-auto flex gap-[1.5rem] items-center justify-start ">
                <div className="div w-[3.875rem] h-[1.5625rem] bg-[#142850] rounded-[1rem] flex items-center justify-center">
                  <span className="  w-[2.375rem] h-[1.5625rem]  bg-[#142850] text-white text-[1rem] font-[900] sm:text-[1.125rem]">
                    {year}
                  </span>
                </div>
                <span className="text-[#8695A4] sm:text-[1.125rem]">
                  {subTitle}
                </span>
              </div>
              <div className="description">
                <span className="text-[1rem]">{description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
