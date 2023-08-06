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
    let project1 = new Projeto("2023-08-07", "2023-08-15", "Waleska", "Equipe Thaigo","#abff47");
    let project2 = new Projeto("2023-08-13", "2023-08-20", "Josenilda", "Equipe 03","#008def");
    let project3 = new Projeto("2023-08-13", "2023-08-31", " Guedes", "Equipe 04","#a98def");

    let projects = [];
    //project("2023-08-01", "2023-08-10", "Edson", "Equipe João");
    projects.push(project);
    projects.push(project1);
    projects.push(project2);
    projects.push(project3);

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
        

        let listProject = [];


        for(let j = 0; j < projects.length; j++){

          let proj = projects[j];

          if (dat >= proj.startDate && dat<= proj.endDate){
         
            listProject.push(proj);
            bHasProject = true;
          }
        }

      
        let diaCal = new DiaCalendar(dat);

        if (bHasProject)
          diaCal.Projetos= listProject;
        else
          diaCal.Projetos = [];

        elements.push(diaCal); 

        
        

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

