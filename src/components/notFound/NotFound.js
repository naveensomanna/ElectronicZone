import React from 'react'
import styles from './NotFound.module.scss'
const NotFound = () => (
  <div className={styles.notFound}>
    <p className={styles.title}>No Results Found </p>
    <img
      src='https://ii1.pepperfry.com/images/clip_no_result_found_icn.png'
      alt='No Result Found'
    ></img>
  </div>
)
export default NotFound
