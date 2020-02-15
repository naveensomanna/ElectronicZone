import * as actionTypes from './actionTypes'
export const products = payload => ({
  type: actionTypes.PRODUCTS_SUCCESS,
  payload
})
export const brands = payload => ({
  type: actionTypes.BRANDS_SUCCESS,
  payload
})
