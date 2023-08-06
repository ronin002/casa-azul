import React from 'react'
import styles from './Dia.module.css'

import img01 from '../images/1.png';

function Dia({dia}) {


    //var b =JSON.stringify(dia.dia);

    var b =dia.dia;
    var projects = [];

    projects =  dia.Projetos;
    console.log("DIA=>" + JSON.stringify(dia.Projetos));
    console.log("project=>" + projects);

    //var cor = project.color;
    //console.log("cor=>" + cor);
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
         {
            projects.map((item,index) =>
            { 
                return (
                <div className={styles.time} style={{ backgroundColor: item.color }}>{item.cliente}</div>
                )
            }
            )
         }
        
    </div>
  )
}

export default Dia