import React, {useState, useEffect} from 'react';
import PeopleCard from './PeopleCard';
import Axios from 'axios';
import styled from 'styled-components';


const SpaceBox = styled.div`
	height: 80vh;
	margin: 25px auto;
	overflow: auto;
	background-color: rgba(0,0,0,0.50);
    align-items:center;
    justify-content:space-between;
    padding-bottom:20px;
`;

const Display = () => {

	const [characters, setCharacters] = useState([]);

	useEffect(() => {
        Axios
            .get('https://swapi.co/api/people/')
            .then(res => {
                setCharacters(res.data.results);			
            })
            .catch(err => console.log('No space tacoes for you', err))
        }, [])

	return (
		<SpaceBox>
			{characters.map((data, i) => (
	            <PeopleCard data={data} key={i}/>
	        ))}
	    </SpaceBox>
	)

}

export default Display 