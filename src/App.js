import React, {useState} from 'react';
import './App.css';

function App() {

    const [returnedData, setReturnedData] = useState(['heeey theeerre']);

    const getData = async(url) => {
        const newData = await fetch(url, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json());
        console.log(newData);
        setReturnedData(newData.result);
    }

    return (
        <div className='App'>
            <button onClick={ 
                () => getData('/quit') }>
                Click me
            </button>
            {returnedData}
            {/*  returnedData sendo exibido */}
        </div>
    )
}

export default App;
