import React from "react";
import styled from "styled-components";


const InSpace = styled.div`
	margin: 0% auto;
	width: 100%;
	
`;

const SpaceCard = styled.div`
	width: 100%;
	align-items: center;
	color: #EEDB00;
	margin: 10% 0%;
	line-height:2.5rem;
    font-size: 2rem;
`;

    const PeopleCard = props =>{
        console.log(props);
        
        return(
            <InSpace>
            <SpaceCard>
                <h1>{props.data.name}</h1>
				<h3>Birth Year: {props.data.birth_year}</h3>
				<h3>Eye Color: {props.data.eye_color}</h3>
				<h3>Height: {props.data.height}</h3>
				<h4>This character was {props.data.films.length} film(s)</h4>
            </SpaceCard>
            </InSpace>
        );
    }


export default PeopleCard