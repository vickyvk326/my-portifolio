import { Component } from "react";
import Intro from "./Intro";
import Recentposts from "./recentposts/Recentposts";
import Featuredworks from "./featuredWorks/Featuredworks";

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <Intro /> <Recentposts /> <Featuredworks />
      </div>
    );
  }
}
