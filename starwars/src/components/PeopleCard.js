import React from "react";
import styled from "styled-components";

    const PeopleCard = props =>{
        console.log(props);
        
        return(
            <div>
            <div>
                <h1>{props.data.name}</h1>
				<h3>Birth Year: {props.data.birth_year}</h3>
				<h3>Eye Color: {props.data.eye_color}</h3>
				<h3>Height: {props.data.height}</h3>
				<h3>Mass: {props.data.mass} units</h3>
				<h4>This character was {props.data.films.length} film(s)</h4>
            </div>
            </div>
        );
    }


export default PeopleCard