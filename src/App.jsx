import { Component } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
export default class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/works" element={<Intro />} />
            <Route path="/blog" element={<Intro />} />
            <Route path="/contact" element={<Intro />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}
