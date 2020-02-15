import React from 'react'
import { Card } from 'antd'
import styles from './CardItem.module.scss'
const { Meta } = Card

const CardItem = ({ title, price, handleClick, id }) => (
  <Card
    className={styles.item}
    hoverable
    onClick={() => handleClick(id)}
    cover={
      <img
        alt='camera'
        src='https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?cs=srgb&dl=aperture-black-blur-camera-274973.jpg&fm=jpg'
      />
    }
  >
    <Meta title={title} />
    <span className={styles.price}> Rs.{price}</span>
  </Card>
)
export default CardItem
