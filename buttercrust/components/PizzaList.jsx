import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}> THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Blanditiis dolorum aliquid, saepe hic doloremque architecto odio 
            ratione repudiandae, sequi vero aut nemo ex libero quasi! Soluta quos in odit dolore
             deleniti, architecto, reiciendis aperiam laborum commodi tenetur natus at magni.
        </p>

        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  )
}
export default PizzaList
