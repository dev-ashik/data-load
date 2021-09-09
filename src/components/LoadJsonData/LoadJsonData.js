import React, {useEffect, useState} from 'react';
import companies from '../Data/data.json';

const LoadJsonData = () => {
    const [clubs, setClubs] = useState([]);
    
  useEffect( () => {
    setClubs(companies);
  } , [])

    return (
        <div>
            {
                clubs.map((data) => <li>{data.name}</li>)
            }
        </div>
    );
};

export default LoadJsonData;