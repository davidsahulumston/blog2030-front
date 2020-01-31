import { FETCH_BLOGS_IMAGES, USER_VOTE } from "./types";
import Axios from "axios";

const apiUrl = "http://localhost:8000/api/blogImages";

export const userVote = (blogId, body) => {
  return dispatch => {
    return Axios.put(`${apiUrl}/${blogId}/append/usersVotes`, body).then(response => {
      dispatch(createUserVote(response.data))
    }).catch(error => {
      throw(error);
    })
  }
}

export const createUserVote = (data) => {
  return {
    type: USER_VOTE,
    payload: {
      blogId: data._id,
      body: data.body
    }
  }
}

export const fetchBlogsImages = blogs => {
  return {
    type: FETCH_BLOGS_IMAGES,
    blogs
  };
};


export const fetchAllBlogsImages = () => {
  return async dispatch => {
    return await Axios.get(apiUrl).then(response => {
      dispatch(fetchBlogsImages(response.data))
    }).catch(error => {
        throw error;
      });
  };
};
