import * as React from "react";
import Layout from "./UI/Layout/Layout";
import {BrowserRouter} from "react-router-dom";

interface IProps {
  // props here
}

const App: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
};

export default App;
