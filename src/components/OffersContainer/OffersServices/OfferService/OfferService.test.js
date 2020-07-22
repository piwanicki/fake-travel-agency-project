import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferService from "./OfferService";
import React from "react";
import {Link} from "react-router-dom";

configure({adapter: new Adapter()});

describe(`<OfferService />`, () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <OfferService header="headerTest" details="detailsTest" />
    );
  });

  it("should render offer service image and description", () => {
    wrapper.setProps({header: "headerTest", details: "detailsTest"});
    expect(wrapper.find(<h3></h3>));
    expect(wrapper.find(<Link></Link>));
  });

  it("should render image", () => {
    wrapper.setProps({header: "headerTest", details: "detailsTest"});
    expect(wrapper.find(<img />));
  });

  it("should render <p>", () => {
    wrapper.setProps({header: "headerTest", details: "detailsTest"});
    expect(wrapper.contains(<p></p>));
  });
});
