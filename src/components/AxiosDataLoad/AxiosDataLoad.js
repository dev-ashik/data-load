import axios from 'axios';
import React, {useEffect, useState} from 'react';

const AxiosDataLoad = () => {
    const [axiosData, setAxiosData] = useState([]);
    useEffect(()=>{
        // first install axios
        const url = 'https://jsonplaceholder.typicode.com/posts';
        axios (url)
        // .then(data => console.log(data.data)) 
        .then(allData => setAxiosData(allData.data)) 
    },[])
    return (
        <div>
            <ul>
                {
                    axiosData.map(d => <li>{d.title}</li>)
                }
            </ul>
        </div>
    );
};

export default AxiosDataLoad;