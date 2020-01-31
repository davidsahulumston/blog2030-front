import React from "react";
import Carrousel from "../../components/Home/Carrousel/Carrousel";
import PopularBlogs from "../../components/Home/PopularBlogs/PopularBlogs";
import PreviousBlogs from "../../components/Home/PreviousBlogs/PreviousBlogs";
import ModelsCard from "../../components/Home/Model2030/Model2030";
import ContactUs from "../../components/Home/ContactUs/ContactUs";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carrousel />
        <PopularBlogs />
        <PreviousBlogs />
        <ModelsCard />
        <ContactUs />
      </React.Fragment>
    );
  }
}

export default Home;
