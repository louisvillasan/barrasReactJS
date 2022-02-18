import React, {useState} from 'react';
import Getresources from '../components/GetResources';
import Header from '../components/header';
import Maininput from '../components/MainInput';

const Home = () => {

    const [text, setText] = useState('');
    const [howManyLines, setHowManyLines] = useState(0);


    const handleText = (e) =>{
        const newText = e.target.value;
        const isThereLines = newText.match(/\n/g);
        if (isThereLines){
            setHowManyLines(isThereLines.length);
        }
        setText(newText);
    }
    return (
        <>
            <Header/>
            <div>
                <h1>Home</h1>
            </div>
            <Maininput 
                handleText={handleText} 
                howManyLines={howManyLines} 
            />

            <Getresources/>
        </>
    );
}

export default Home;
