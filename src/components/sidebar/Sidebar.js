import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Checkbox } from 'antd'
import { brands } from '../actions'
import styles from './Sidebar.module.scss'
const Sidebar = ({ handleFiltered }) => {
  const [brands, setBrands] = useState([])
  const [selectedIds, setIds] = useState([])
  //   const brands = useDispatch()
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/banshilaldangi/ecommerce/brands')
      .then(response => response.json())
      .then(result => {
        // dispatch(brands(result))
        setBrands(result)
      })
  }, [])
  function onChange (event, brand) {
    if (event.target.checked) {
      setIds([...selectedIds, brand.id])
    } else {
      const uncheck = selectedIds.filter(ids => ids !== brand.id)
      setIds(uncheck)
    }
  }
  useEffect(() => {
    handleFiltered(selectedIds)
  }, [selectedIds])
  return (
    <Card title='Apply Filter' bordered={false} className={styles.cardWrapper}>
      <p>Brands</p>
      {brands.map(brand => (
        <Checkbox key={brand.id} onChange={event => onChange(event, brand)}>
          {brand.name}
        </Checkbox>
      ))}
    </Card>
  )
}
export default Sidebar
