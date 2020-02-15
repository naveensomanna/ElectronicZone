import React, { useEffect, useState } from 'react'
import { Card, Checkbox } from 'antd'
import styles from './Sidebar.module.scss'
const Sidebar = ({ handleFiltered }) => {
  const [brands, setBrands] = useState([])
  const [categories, setcategories] = useState([])

  const [selectedIds, setIds] = useState([])
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/banshilaldangi/ecommerce/brands')
      .then(response => response.json())
      .then(result => {
        setBrands(result)
      })

    fetch(
      'https://my-json-server.typicode.com/banshilaldangi/ecommerce/categories'
    )
      .then(response => response.json())
      .then(result => {
        setcategories(result)
      })
  }, [])
  function onChange (event, selectedList, type) {
    if (event.target.checked) {
      setIds([...selectedIds, { type, id: selectedList.id }])
    } else {
      const uncheck = selectedIds.filter(
        selected => selected.id !== selectedList.id
      )
      setIds(uncheck)
    }
  }
  useEffect(() => {
    handleFiltered(selectedIds)
  }, [selectedIds])
  return (
    <Card title='Apply Filter' bordered={false} className={styles.cardWrapper}>
      <p className={styles.title}>Brands</p>
      <div className={styles.checklist}>
        {brands.map(brand => (
          <Checkbox
            key={brand.id}
            onChange={event => onChange(event, brand, 'brand')}
          >
            {brand.name}
          </Checkbox>
        ))}
      </div>
      <p className={styles.title}>Categories</p>
      <div className={styles.checklist}>
        {categories.map(category => (
          <Checkbox
            key={category.id}
            onChange={event => onChange(event, category, 'category')}
          >
            {category.name}
          </Checkbox>
        ))}
      </div>
    </Card>
  )
}
export default Sidebar
