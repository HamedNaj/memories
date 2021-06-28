import {AUTH} from "../constants/actionTypes";
import * as api from '../api/index'

export const signin = (formData, history) => async (dispatch) => {
  try {

    const {data} = await api.singIn(formData)
    dispatch({type:AUTH, data})
    history.push('/')
  } catch (e) {
    console.log(e)
  }
}
export const signup = (formData, history) => async (dispatch) => {
  try {
    console.log('actions : ', formData)
    const {data} = await api.singUp(formData)
    dispatch({type:AUTH, data})
    history.push('/')
  } catch (e) {
    console.log(e)

  }
}
