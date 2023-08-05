import React from 'react'
import styles from './Dia.module.css'

import img01 from '../images/1.png';

function DiaSemana({dia}) {

  return (
    <div className={styles.panelBody}>
         <span className={styles.progressNumber}>{dia}</span>
    </div>
  )
}

export default DiaSemana