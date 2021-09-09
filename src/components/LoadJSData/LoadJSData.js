import React, {useEffect, useState} from 'react';
import {fakeData} from '../Data/data';

const LoadJSData = () => {
    const [clubs, setClubs] = useState([]);

    useEffect( () => {
        setClubs(fakeData);
    }, [])
    return (
        <div>
            <ul>
                {
                    clubs.map((data) => <li>{data.name}</li>)
                }
            </ul>
        </div>
    );
};

export default LoadJSData;