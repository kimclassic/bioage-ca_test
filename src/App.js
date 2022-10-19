// App.js
import React from 'react';
//import { mainWrapper } from 'App.css';
import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <h1>Hello Style!</h1>
      <h1 className={styles.main_wrapper}>CSS 적용</h1>
      <p className={styles.red}>This text will be red</p>
      <p className={styles.bigBlue}>This text will be blue</p>
    </div>
  );
};

export default App;