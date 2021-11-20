import React from "react";
import ArtworkGrid from "../components/Homepage/ArtworkGrid";
import DemoVideo from "../components/Homepage/DemoVideo";
import HomeSection from "../components/Homepage/HomeSection";
import NewsLetter from "../components/Homepage/NewsLetter";
import SubscribeCards from "../components/Homepage/SubscribeCards";
import ViewAppBanner from "../components/Homepage/ViewAppBanner";
import { FiRefreshCw } from "react-icons/fi";

const Home = () => {
  React.useEffect(() => {
    document.title = "Artistify Community Platform - For leading artists. "
  }, [])
  return (
    <div className="z-0 min-h-screen bg-darkBlack">
      <HomeSection />
      <div className="px-4 mb-2">
        <button className="flex items-center justify-center py-2 border-b-2 border-lightblue text-gray-200 text-lg">
          Community <FiRefreshCw className="text-lightblue font-bold ml-2.5" />
        </button>
      </div>
      <ArtworkGrid />
      <DemoVideo />
      <SubscribeCards />
      <ViewAppBanner />
      <NewsLetter />
    </div>
  );
};

export default Home;
