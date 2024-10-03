import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeAbout from "../Layout/HomeAbout";
import HomeBest from "../Layout/HomeBest";
import HomeWho from "../Layout/HomeWho";

const Home = () => {
  return (
    <Layout>
      <HomeBanner/>
      <HomeWho/>
      <HomeAbout/>
      <HomeBest/>
    </Layout>
  );
};

export default Home;
