import React from 'react'
import { Card } from 'antd'
import styles from './CardItem.module.scss'
const { Meta } = Card

const CardItem = ({ title, price }) => (
  <Card
    className={styles.item}
    hoverable
    cover={
      <img
        alt='example'
        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
      />
    }
  >
    <Meta title={title} />
    <span className={styles.price}>price:</span>
    <span> {price}</span>
  </Card>
)
export default CardItem
