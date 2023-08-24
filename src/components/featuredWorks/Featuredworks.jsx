import { Component } from "react";
import FeaturedWorksProvider from "./FeaturedWorksProvider";

export default class Featuredworks extends Component {
  render() {
    const featuredWorksArray = [
      {
        image: "src\\assets\\Rectangle 30.png",
        title: "Designing Dashboard",
        year: "2020",
        subTitle: "Dashboard",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "src\\assets\\Rectangle 32.png",
        title: "Vibrant Portraits of 2020",
        year: "2018",
        subTitle: "Illustration",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        image: "src\\assets\\Rectangle 34.png",
        title: "36 Days of Malayalam type",
        year: "2018",
        subTitle: "Typography",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
    ];
    return (
      <div className="w-full flex flex-col pb-[6rem]  ">
        <div className="div flex flex-col items-center ">
          <div className="featuredworks-heading flex items-center justify-center sm:justify-start sm:w-[80%]">
            <span className="text-[1.125rem] text-[#21243D] font-[400] leading-[3.75rem] sm:text-[1.375rem] sm:justify-start">
              Featured works
            </span>
          </div>
        </div>

        <div className="mobile flex justify-center sm:hidden">
          <FeaturedWorksProvider
            image={featuredWorksArray[0].image}
            title={featuredWorksArray[0].title}
            year={featuredWorksArray[0].year}
            subTitle={featuredWorksArray[0].subTitle}
            description={featuredWorksArray[0].description}
          />
        </div>
        <div className="screen hidden sm:flex sm:flex-col gap-[3rem]">
          {featuredWorksArray.map((arr, index) => {
            return (
              <FeaturedWorksProvider
                key={index}
                image={arr.image}
                title={arr.title}
                year={arr.year}
                subTitle={arr.subTitle}
                description={arr.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
