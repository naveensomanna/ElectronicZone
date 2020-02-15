import React from 'react'
import { Input } from 'antd'
import styles from './Header.module.scss'
const { Search } = Input

const Header = ({ handleChange }) => {
  return (
    <header className={styles.headerWrapper}>
      <h2 className={styles.title}>Electronic Zone</h2>
      <Search
        placeholder='Search'
        onChange={event => handleChange(event)}
        className={styles.search}
      />
      <div>
        <span>Login</span>
        <span>SignUp</span>
      </div>
    </header>
  )
}
export default Header
