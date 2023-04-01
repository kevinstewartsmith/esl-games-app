import { Grid } from '@mui/material/';
import '../index.css'
import { useState, useEffect } from 'react'  
import { margin } from '@mui/system';
import { alphabet, generate } from '../exports/OverlayExports';


export default function Overlay(props) {
    generate()
    //The Answer to the puzzle
    let answer = "I be chilling.";
    //The answer split into a character array
    const charSplit = answer.split("");
    const [lives, setLives] = useState(3);
    const [gameOver, setGameOver] = useState(false)
    const [gameWon, setGameWon] = useState(false)
    const [unrevealedArr, setUnrevealedArray] = useState(createArray(charSplit,false))
    const checkArray = createArray(charSplit,true)
    const [wrong, setWrong] = useState(false)
   
    function createArray(array, revealed) {
        const newArray = array.map((c, i) => {
            if (c === " ") {
              return "   "
            } else if (c === ".") {
                return "."
            } else if (c === ",") {
                return ","
            } else  {
                return revealed ?  (" " + c + " "):  " _ "
            }
        })
        return newArray
    }
    function letterClicked(event){
        const letter = event.target.innerText
        checkLetter(letter);
    } 

     
    function checkLetter(letter) {
        const lowerCaseLetter = letter.toLowerCase() 
        console.log(lowerCaseLetter);
        if (charSplit.includes(letter) || charSplit.includes(lowerCaseLetter)) {     
            const newUnrevArray = unrevealedArr.map((c, i) => {
                if (charSplit[i] === letter ) { return " " + letter + " "} 
                else if (charSplit[i] === lowerCaseLetter) { return " " + lowerCaseLetter + " "}
                else { return c }
            })
            setUnrevealedArray(newUnrevArray)         
        } else { loseALife() }
    }

    function loseALife() { 
        triggerLoseBalloon()
        setLives(lives - 1)
        //console.log("Lives: " + lives)
        setWrong(true)
       
        
    }

    useEffect(() => {
        if (lives === 0) { setGameOver(!gameOver) }
        JSON.stringify(unrevealedArr) === JSON.stringify(checkArray) ? setGameWon(!gameWon) : null 
        
    }, [lives, unrevealedArr])

     //If lives decrease, set wrong to true but set it back to false after 1 second
    useEffect(() => {
        if (wrong) {
            setTimeout(() => {

                setWrong(false)

            }, 1000);
        }
    }, [wrong])

    function loadAlphabet() {
        //const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        
        let letters = []
        for (const letter in alphabet) {
            letters.push(
            <Grid 
                key={letter} 
                value={letter} 
                item xs={0.46}
            >
                <h1 className='letter' key={letter} value={letter} onClick={letterClicked} style={{marginTop: 1}}>{alphabet[letter]}</h1>
            </Grid>)
        }
        return letters
    }

    //Trigger loeBallon() in Main.jsx
    function triggerLoseBalloon() {
        props.loseBalloon()
    }



    return (
        <div>
            
            <div style={{position: 'fixed', top:0, right: 0, height: "5%", width:"5%"}}><h1 className='lives'>{lives}</h1></div>
            <div style={{ position: 'absolute', top: "0vh", left: 0, width: '100%', height: '100%' }}>
                <h1 className='puzzle'>{unrevealedArr}</h1>
                
            </div>
            { gameOver ? 
            <div style={{position: 'fixed', top: "30vh", left: "10%", right: "10%", height: "80%"}}>
                <h1 className='game-over'>GAME OVER.</h1>
            </div> 
            : null }
            { gameWon ?
            <div style={{position: 'fixed', top: "6vh", left: "10%", right: "10%", height: "80%"}}>
                <h1 className='game-won'>YOU WIN!</h1>
            </div> 
            : null }
            {wrong ? 
            <div style={{position: 'fixed', top: "30vh", left: "10%", right: "10%", height: "80%"}}>
                <h1 className='wrong'>WRONG!</h1>
            </div> : null}
            <div style={{ position: 'absolute', top: "80vh", left: "10%", width: '80%', height: '100%' }}>
                <Grid container>
                    <Grid item xs={4} ><h1 className='guess'>Guess Letter</h1></Grid>
                    <Grid item xs={4}><h1 className='guess'> Guess Word</h1></Grid>
                    <Grid item xs={4}><h1 className='guess'>Guess All</h1></Grid>
                </Grid>
                <Grid container spacing={0}>
                    { loadAlphabet() }
                </Grid>
            </div>
       </div>
    )
}