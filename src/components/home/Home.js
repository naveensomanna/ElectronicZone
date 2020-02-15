import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import CardItem from '../card/CardItem'
import { products } from '../actions'
import styles from './Home.module.scss'
import NotFound from '../notFound/NotFound'
const Home = () => {
  const [searchText, setSearchText] = useState('')
  const [productslists, setProductsLists] = useState([])
  const dispatch = useDispatch()
  const productsList = useSelector(state => state.products)

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/banshilaldangi/ecommerce/products'
    )
      .then(response => response.json())
      .then(result => {
        dispatch(products(result))
        setProductsLists(result)
      })
  }, [])
  const handleSearchChange = event => {
    setSearchText(event.target.value)
  }
  useEffect(() => {
    const filterdData =
      productsList &&
      productsList.products.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    setProductsLists(filterdData)
  }, [searchText])

  const handleFiltered = idList => {
    let brandData,
      categoryData,
      totalFiltered = []
    if (idList.length) {
      const brands = idList.filter(item => item.type === 'brand')
      const categories = idList.filter(item => item.type === 'category')

      brandData =
        productsList &&
        productsList.products.filter(product =>
          brands.some(list => list.id === product.brand_id)
        )
      console.log(brandData)
      categoryData =
        productsList &&
        productsList.products.filter(product =>
          categories.some(categry => categry.id === product.category_id)
        )
      totalFiltered = [...brandData, ...categoryData]
      const updatedFilted = totalFiltered.reduce(
        (acc, cur) => Object.assign(acc, { [cur.id]: cur }),
        {}
      )
      setProductsLists(Object.values(updatedFilted))
    } else {
      setProductsLists(productsList && productsList.products)
    }
  }
  let history = useHistory()
  const handleClick = id => {
    history.push(`/product/${id}`)
  }
  return (
    <div className={styles.container}>
      <Header handleChange={handleSearchChange} />
      <section className={styles.wrapper}>
        <aside className={styles.sideBar}>
          <Sidebar handleFiltered={handleFiltered} />
        </aside>

        <div className={styles.lists}>
          {productslists.length > 0 ? (
            productslists.map(item => (
              <CardItem
                key={item.id}
                title={item.name}
                price={item.price}
                id={item.id}
                handleClick={handleClick}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      </section>
    </div>
  )
}
export default Home
