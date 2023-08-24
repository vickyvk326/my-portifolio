import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/works" element={<h1>works</h1>} />
          <Route path="/blog" element={<h1>blog</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
