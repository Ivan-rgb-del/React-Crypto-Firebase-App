import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  );
};

export default Home;