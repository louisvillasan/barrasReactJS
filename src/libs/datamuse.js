const fetchData = require('./fetchData.js');



// Spells Like example https://api.datamuse.com/words?sp=sabor&v=es&max=40
// Related to example https://api.datamuse.com/words?ml=comida&v=es
// Sounds like example https://api.datamuse.com/words?sl=navegante&v=es

const getDatamuse = async (word, param, max) => {
  try {
    const url_api = 'https://api.datamuse.com/words?';
    const data = await fetchData(`${url_api}${param}=${word}&v=es&max=${max}`);
    return data.slice(0,40)
  } catch (err) {
    console.error(err);
  }
}


module.exports = {getDatamuse}