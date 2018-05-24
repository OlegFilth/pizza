import axios from 'axios';

async function getResult(query) {
    const key = 'df42131b1a7529b8156569a49caa6ad8';
    const response = await axios(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(res.data.);
}

getResult('pizza');


