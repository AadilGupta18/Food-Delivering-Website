import React, { useContext, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Category2 from "../../components/Category2/Category2";
import { StoreContext } from "../../context/StoreContext";

const Home = () => {
  const { category, category2, setCategory, setCategory2 } =
    useContext(StoreContext);
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
