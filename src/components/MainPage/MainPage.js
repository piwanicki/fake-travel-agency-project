import React from "react";
import SearchPanel from "../SearchPanel/SearchPanel";
import OffersContainer from "../OffersContainer/OffersContainer";
import Offers from "../OffersContainer/Offers";
import OffersServices from "../OffersContainer/OffersServices/OffersServices";
import Underline from "../../UI/Underline/Underline";
import SummerOffers from "../OffersContainer/SummerOffers/SummerOffers";
import InspirationOffers from "../InspirationSection/InspirationOffers/InspirationOffers";
import NewsContainer from "../NewsSection/NewsContainer/NewsContainer";
import GuideDescription from "../GuideDescription/GuideDescription";

const MainPage = props => {
  return (
    <>
      <SearchPanel />
      <OffersContainer offers={Offers} />
      <Underline />
      <OffersServices />
      <Underline />
      <SummerOffers />
      <Underline />
      <InspirationOffers />
      <NewsContainer />
      <GuideDescription />
    </>
  );
};

export default MainPage;
