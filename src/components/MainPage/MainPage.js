import React from "react";
import SearchPanel from "../SearchPanel/SearchPanel";
import RecommendedOffersContainer from "../OffersContainer/RecommendedOffersContainer";
import Offers from "../OffersContainer/Offers";
import OffersServices from "../OffersContainer/OffersServices/OffersServices";
import SummerOffers from "../OffersContainer/SummerOffers/SummerOffers";
import InspirationOffers from "../InspirationSection/InspirationOffers/InspirationOffers";
import NewsContainer from "../NewsSection/NewsContainer/NewsContainer";
import Wrapper from "../../UI/Layout/Wrapper/Wrapper";

const MainPage = (props) => {
  return (
    <>
      <SearchPanel />
      <Wrapper>
        <RecommendedOffersContainer offers={Offers} />
        <OffersServices />
        <SummerOffers />
        <InspirationOffers />
        <NewsContainer />
      </Wrapper>
    </>
  );
};

export default MainPage;
