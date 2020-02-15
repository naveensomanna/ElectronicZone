import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'antd'
import styles from './Product.module.scss'
const Product = () => {
  const [selectedItem, setSelectedItem] = useState([])
  const productsList = useSelector(state => state.products.products)
  const { id } = useParams()
  let history = useHistory()
  useEffect(() => {
    const selected = productsList.filter(product => product.id === id)
    setSelectedItem(selected)
  }, [])
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.itemContainer}>
        <div className={styles.cardContainer}>
          <Button type='primary' size='large' onClick={() => history.goBack()}>
            Go Back
          </Button>
          <Card className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <img
                alt='camera'
                src='https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?cs=srgb&dl=aperture-black-blur-camera-274973.jpg&fm=jpg'
                className={styles.image}
              />
            </div>
            <div className={styles.details}>
              {selectedItem.map(item => {
                return (
                  <>
                    <h1>{item.name}</h1>
                    <span className={styles.price}>Price Rs.{item.price}</span>
                    <p className={styles.description}>{item.description}</p>
                  </>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Product
