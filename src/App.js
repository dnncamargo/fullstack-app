import React, {useState} from 'react';
import './App.css';

function App() {

    const [returnedData, setReturnedData] = useState(['']);
    const [client, setClient] = useState({
        clientID: 0,
        firstname: '',
        lastname: '',
        cpfID: '',
        phone: '',
        state: ''
        })

    const setInput = (c) => {
        const {name, value} = c.target;
        console.log(value);
        // Filtragem de tipo: 'name' deve corresponder ao campo da tabela
        if (name === 'clientID') {
            setClient(prevState => ({
                ...prevState,
                [name] : parseInt(value)
                /** os campos type=nuber serão convertidos para número */
            }));
            return;
        }
        setClient(prevState => ({
            ...prevState,
            [name] : value
            /** os demais campos receberão o valor de string normalmente */
        }));
    }

    const fetchData = async() => {
        console.log(client);
        const newData = await fetch('/api', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: client.clientID
            }) 
        })
        .then(res => res.json());
        console.log(newData);
        setReturnedData(newData.result);
    }
    console.log(returnedData);
    return (
        <div className='App'>
            <input 
                type="number" 
                name="clientID" 
                placeholder="ID" 
                onChange={setInput}></input>
            <input 
                name="firstname" 
                placeholder="Nome" 
                onChange={setInput}></input>
            <input 
                name="lastname" 
                placeholder="Sobrenome" 
                onChange={setInput}></input>
            <input 
                name="cpfID" 
                placeholder="CPF" 
                onChange={setInput}></input>
            <input 
                name="phone" 
                placeholder="Telefone" 
                onChange={setInput}></input>
            <input 
                name="state" 
                placeholder="UF" 
                onChange={setInput}></input>
            <button onClick={ 
                () => fetchData() }>
                Salvar
            </button>
            <button onClick={ 
                () => fetchData() }>
                Buscar
            </button>
           
            <p>Cliend ID : {returnedData.clientID}</p>
            <p>First Name : {returnedData.firstname}</p>
            <p>Last Name : {returnedData.lastname}</p>
            <p>CPF : {returnedData.cpfid}</p>
            <p>Phone Number : {returnedData.phone}</p>
            <p>State : {returnedData.state}</p>
            {returnedData}
        </div>
    );
}

export default App;
