import * as actionTypes from './actionTypes'

const initialState = {
  products: [],
  brands: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.PRODUCTS_SUCCESS:
      // const productslist = action.payload.reduce(
      //   (accumulator, item) => ((accumulator[item.id] = item), accumulator),
      //   {}
      // )
      return {
        ...state,
        products: [...action.payload]
      }
    case actionTypes.BRANDS_SUCCESS:
      return {
        ...state,
        brands: [...action.payload]
      }
  }
  return state
}
