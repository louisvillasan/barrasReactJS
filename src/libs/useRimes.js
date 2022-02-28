import axios from 'axios';


const useRimes = () =>{

    const DATAMUSE_API  = 'https://api.datamuse.com/words?';
    const RIMAR_API     = 'https://rimar.io/r/rhyme.cgi?Word=';


    const getFromDatamuse = async (about, word)=>{
        return axios.get(`${DATAMUSE_API}${about}=${word}&v=es&max=52`)
        .then(response =>  
        (response.data.map(
            obj => {return obj.word}
            )
        ))
        .catch(error => {throw error})
    }

    const getFromRimar = async (word)=>{
        return axios.get(`${RIMAR_API}${word}&typeofrhyme=adv&lang=es`)
        .then(response => response.data)
        .then(bodyHtml => bodyHtml.match(/"word":"[a-zA-Z]+"/mg, ).slice(1,53).map((word)=>{
            return word.slice(8,-1)
        }))
    }

    return {getFromDatamuse, getFromRimar}    
}
export default useRimes;
