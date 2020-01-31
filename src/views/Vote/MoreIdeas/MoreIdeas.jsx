import React, { Component, Fragment } from "react";
import ImageMoreIdeas from "../../../components/Vote/MoreIdeas/ImageMoreIdeas/ImageMoreIdeas";
import MoreIdeasCards from "../../../components/Vote/MoreIdeas/MoreIdeasCards/MoreIdeasCards";

export default class MoreIdeas extends Component {
  constructor(data) {
    super()
    this.state = {
      data: data.data
    } 
  }

  render() {
    return (
      <Fragment>
        <ImageMoreIdeas />
        <MoreIdeasCards blogIdea={this.state}/>
      </Fragment>
    );
  }
}
