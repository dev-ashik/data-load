import React, {useEffect, useState} from 'react';

const FetchDataLoad = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const url1 = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url1)
        .then(res => res.json())
        .then(data => setData(data))
        // .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>Fetch data</h2>
            <ul>
            {
                data.map(d => <li>{d.title}</li>)
            }
            </ul>
        </div>
    );
};

export default FetchDataLoad;