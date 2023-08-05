import React from 'react'
import styles from './Dia.module.css'

import img01 from '../images/1.png';

function Dia({dia}) {


    //var b =JSON.stringify(dia.dia);

    var b =dia.dia;
    var project = dia.Projeto;
    console.log("DIA=>" + JSON.stringify(dia.Projeto));
    console.log("project=>" + project);

    var cor = project.color;
    console.log("cor=>" + cor);
    let dataString = [];

    if (b){

        dataString =  b.split("-");

    }
    else{
        dataString[0] = '';
        dataString[1] = '';
        dataString[2] = '';
    }

  return (
    <div className={styles.panelBody}>
         <span className={styles.progressNumber}>{dataString[2]}</span>
         <div className={styles.time} style={{ backgroundColor: cor }}>{project.cliente}</div>
    </div>
  )
}

export default Dia