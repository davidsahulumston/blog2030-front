import React, { Component, Fragment } from "react";
import MainDescription from "../../components/Description/MainDescription/MainDescription";
import { Container, Grid } from "@material-ui/core";
import "./Description.css";
import SideBarDescription from "../../components/Description/SideBarDescription/SideBarDescription";
import Comments from "../../components/Description/Comments/Comments";
import Axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class Description extends Component {
state = {
  data: null
}

async componentDidMount(){
  const {data} = await Axios.get(`http://localhost:8000/api/blogImages/${this.props.match.params.blogId}`);
  this.setState(data);
}

render() {
  if(!this.state.data) { 
    return <CircularProgress />; 
  }
    return (
      <Fragment>
        <Container fixed className="containerDescription">
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <MainDescription blog = {this.state.data}/>
              <Comments/>
            </Grid>
            <Grid item xs={3}>
              <SideBarDescription blog={this.state.data} />
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
