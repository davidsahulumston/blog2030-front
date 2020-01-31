import React from "react";
import "./App.css";
import Home from "./views/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Vote from "./views/Vote/Vote";
import Description from "./views/Description/Description";
import MyIdeasCards from "./components/MyIdeas/MyIdeasCards/MyIdeasCards";
import Modelo2030 from "./views/Modelo2030/Modelo2030";
import UploadIdea from "./views/UploadIdea/UploadIdea";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vote" component={Vote} />
          <Route exact path="/description/:blogId" component={Description} />
          <Route exact path="/myIdeas" component={MyIdeasCards} />
          <Route exact path="/model2030" component={Modelo2030} />
          <Route exact path="/uploadIdea" component={UploadIdea} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
