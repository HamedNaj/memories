import * as api from '../api'
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_By_SEARCH,
  LIKE_POST,
  UPDATE,
  START_LOADING,
  STOP_LOADING,
  FETCH_POST,
  COMMENT_POST
} from "../constants/actionTypes";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const {data} = await api.fetchPosts(page)
    dispatch({type: FETCH_ALL, payload: data})
    dispatch({type: STOP_LOADING})
  } catch (e) {
    console.log(e.message)
  }
}
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const {data} = await api.fetchPost(id)
    dispatch({type: FETCH_POST, payload: data})
    dispatch({type: STOP_LOADING})
  } catch (e) {
    console.log(e.message)
  }
}
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const {data: {data}} = await api.fetchPostsBySearch(searchQuery)
    dispatch({type: FETCH_By_SEARCH, payload: data})
    dispatch({type: STOP_LOADING})
  } catch (e) {
    console.log(e.message)
  }
}
export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const {data} = await api.createPost(post)
    dispatch({type: CREATE, payload: data})
    dispatch({type: STOP_LOADING})
    history.push(`/posts/${data._id}`)
  } catch (e) {
    console.log(e.message)
  }
}
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id, post)
    dispatch({type: UPDATE, payload: data})
  } catch (e) {
    console.log(e.message)
  }
}
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({type: DELETE, payload: id})
  } catch (e) {
    console.log(e.message)
  }
}
export const likePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.likePost(id)
    dispatch({type: LIKE_POST, payload: data})
  } catch (e) {
    console.log(e.message)
  }
}
export const commentPost = (value, id) => async (dispatch) => {
  try {
    const {data} = await api.commentPost(value, id)
    dispatch({type: COMMENT_POST, payload: data})
    return data.comments
  } catch (e) {
    console.log(e.message)
  }
}

