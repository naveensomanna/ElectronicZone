import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from '../card/CardItem'
import Sidebar from '../sidebar/Sidebar'
import { products } from '../actions'
import styles from './Home.module.scss'
import Header from '../header/Header'
const Home = () => {
  const [searchText, setSearchText] = useState('')
  const [productslists, setProductsLists] = useState([])

  const productsList = useSelector(state => state.products)
  const dispatch = useDispatch()
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
      Object.values(productsList.products).filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    setProductsLists(filterdData)
  }, [searchText])

  const handleFiltered = idList => {
    const data =
      productsList &&
      Object.values(productsList.products).filter(selectedIds =>
        idList.includes(selectedIds.id)
      )

    setProductsLists(data)
  }
  return (
    <>
      <Header handleChange={handleSearchChange} />
      <div className={styles.container}>
        <aside className={styles.sideBar}>
          <Sidebar handleFiltered={handleFiltered} />
        </aside>
        <div className={styles.lists}>
          {productslists.map(item => (
            <CardItem key={item.id} title={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Home
