import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Category2 from "../../components/Category2/Category2";

const Home = () => {
  const [category, setCategory] = new useState("All");
  const [category2, setCategory2] = new useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Category2 category2={category2} setCategory2={setCategory2} />
      <FoodDisplay category={category} category2={category2} />
      <AppDownload />
    </div>
  );
};

export default Home;
