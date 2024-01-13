import React from "react";
import './css/First.css';

let day = "sunday"; 
let print = "";
let cssStyle = {};
let img = '';

if (day.toLowerCase() === "sunday") {
    print = "Today is Sunday... Going to cinema.";
    cssStyle.color = 'green';
    img = 'img/cinema.jpeg';
} else {
    print = "Today is office";
    cssStyle.color = 'red';
    img = 'img/office.jpg';
}

const First = () => {
    return (
        <>
            <img src={img} alt={img} height={'400px'} width={'400px'} />
            <h1 style={cssStyle}>{print}</h1>
        </>
    )
}

export default First;




