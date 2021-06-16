import * as api from '../api'
import {CREATE,DELETE,FETCH_ALL,LIKE_POST,UPDATE} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts()
    dispatch({type: 'FETCH_ALL', payload: data})
  } catch (e) {
    console.log(e.message)
  }
}
export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post)
    dispatch({type: CREATE, payload: data})
  } catch (e) {
    console.log(e.message)
  }
}
export const updatePost = (id,post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id,post)
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