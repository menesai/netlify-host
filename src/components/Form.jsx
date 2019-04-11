import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Form = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [data, setData] = useState({hits: []})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
    }

    useEffect(() => {
        axios.get('https://www.balldontlie.io/api/v1/teams')
        .then(result => {
            console.log(result)
            setData(result.data.data)
        })
        console.log(data)
      }, []);



return (
    <div>
        <h1>you clicked {count} times </h1>
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={() => setCount(count - 1)}> Substract</button>
        <button onClick={() => setCount(0)}>Reset</button>

        <form  onSubmit={handleSubmit}>
        <input
        placeholder='name'
        onChange={(e) => setName(e.target.value)}
        />
        <input type='submit' value='Submit'/>

        </form>
        {name}
    </div>
)
}

export default Form;