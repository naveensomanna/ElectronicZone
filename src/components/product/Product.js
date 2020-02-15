import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'antd'
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
    <div
      style={{
        background: '#ececec',
        height: '100vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <div style={{ width: '60%', height: '70%' }}>
          <Button type='primary' size='large' onClick={() => history.goBack()}>
            Go Back
          </Button>
          <Card style={{ display: 'flex' }}>
            <div style={{ width: '300px', height: '300px' }}>
              <img
                alt='camera'
                src='https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?cs=srgb&dl=aperture-black-blur-camera-274973.jpg&fm=jpg'
                style={{ maxWidth: '100%' }}
              />
            </div>
            {selectedItem.map(item => {
              return (
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Product
