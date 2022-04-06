import React, {useContext} from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';
import {CityContext} from "./index";
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";

const Rechart = observer(() => {
    const {city} = useContext(CityContext)
    const data = []
    let i = 0;
    for (let date of city.date) {
        data.push({
            maxTemp: city.maxTemp[i],
            minTemp: city.minTemp[i],
            wind: city.wind[i],
            humidity: city.humidity[i],
            date: date,
            text: city.text[i],
        })
        i++
    }

    if (city.maxTemp.length === 0) {
        return (
            <Container className="d-flex justify-content-center">
                No data yet
            </Container>
        )
    }
     return (
            <Container className="d-flex justify-content-center">
       <ResponsiveContainer width='90%' height={450} className="d-flex">
           <LineChart data={data}>
               <XAxis dataKey='date' axisLine={false} tickLine={false}/>
               <YAxis dataKey={city.target} axisLine={false} tickLine={false}/>
               <Tooltip/>
               <Line type="monotone" dataKey='maxTemp' stroke="#8370D8"/>
               <Line dataKey='text'/>
               <Line type="monotone" dataKey='minTemp' stroke="#1B0773"/>
               <Line type="monotone" dataKey='wind' stroke="#76767A"/>
               <Line type="monotone" dataKey='humidity' stroke="#09B4FE"/>
               <CartesianGrid opacity={0.5} vertical={false}/>
           </LineChart>
       </ResponsiveContainer>
            </Container>
             );
});

export default Rechart;