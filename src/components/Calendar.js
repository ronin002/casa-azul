import React from 'react';
import moment from 'moment';
import styles from './Calendar.module.css'
import Grid from '@mui/material/Grid';
import {useState, useEffect } from 'react';

import Dia from './Dia'
import DiaSemana from './DiaSemana';
import { Projeto } from '../Models/Projeto';
import { DiaCalendar } from '../Models/DiaCalendar';

const Calendar = () => {

  const WeekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const [monthDays,setMonthDays] = useState([]);
  const [projetos,setProjetos] = useState([{}]);


  useEffect(()=>{
   
    
    let endOfMonth = moment().daysInMonth(); 
  
    let elements = [];
    let month = moment().month() + 1;
    if (month <10) month = "0" + month;


    let year = moment().year();


    let monthStart = moment(month + '01').day();
    

    let ProjetDates = ["2023-08-01","2023-08-10"]


    let project = new Projeto("2023-08-01", "2023-08-10", "Edson", "Equipe João","#ff0047");

    let projects = [];
    //project("2023-08-01", "2023-08-10", "Edson", "Equipe João");
    projects.push(project);

    setProjetos(projects);

    for(let i =0; i <= monthStart; i++){
       let diaCal = new DiaCalendar("","");
       elements.push(diaCal);
    }

    for(let i =1; i <= endOfMonth; i++){
      
        let bHasProject = false;
        let diaP = i;
        if (diaP <10) diaP = "0"+i;
        let dat = year + "-" + month + "-" + diaP;
        console.log("DATA:" + dat);
        for(let j = 0; j < projects.length; j++){

          let proj = projects[j];

          if (dat >= proj.startDate && dat<= proj.endDate){
            let diaCal = new DiaCalendar(proj,dat);
            elements.push(diaCal);   
            bHasProject = true;
            break;
          }
        }
        
        if (!bHasProject){
          let diaCal = new DiaCalendar("",dat);
          elements.push(diaCal);
        } 
        
        

    }


    

    setMonthDays(elements);
    
  },[]);

  
 

  return (
     <div>
        <div className={styles.container}>
          {WeekDays.map((item)=> (
            <div className={styles.containerCalendarWeekDays}><DiaSemana dia={item}/>
            </div>
          ))}
          {monthDays.map((item)=>(
            <div className={styles.containerCalendar} id={item}><Dia dia={item}/></div>
          ))}
        </div>
    </div>
              


  );

}

export default Calendar;

