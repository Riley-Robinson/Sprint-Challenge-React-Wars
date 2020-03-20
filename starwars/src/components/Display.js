import React, {useState, useEffect} from 'react';
import PeopleCard from './PeopleCard';
import Axios from 'axios';
import styled from 'styled-components';





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
		<div>
			{characters.map((data, i) => (
	            <PeopleCard data={data} key={i}/>
	        ))}
	    </div>
	)

}

export default Display 