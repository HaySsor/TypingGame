import React, { useState, useEffect } from "react";

function App() {
  const STARTING_TIME = 5 

	const [word, setWord] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [startGame , setStartGame] = useState(false)
  const [countW , setCountW] = useState(0)



	useEffect(() => {
    console.log(startGame)
    
      if (startGame && timeRemaining > 0) {
        setTimeout(() => {
          setTimeRemaining(prev => prev - 1);
        }, 1000);
        console.log(timeRemaining);
      } else if (timeRemaining === 0){
          setStartGame(false)
          hendleEndGame(word)
      }
    
	}, [timeRemaining,startGame]);


	function updateTextArea(e) {
		setWord(e.target.value);
	}

	function countWord(text) {
		const wordArr = text.trim().split(" ");
		const filterWords = wordArr.filter(word => word !== "").length;

		setCountW(filterWords)
	}

  function hendleStartGame(){
    setWord('')
    setTimeRemaining(STARTING_TIME)
    setStartGame(true)
  }

  function hendleEndGame(text){
    setStartGame(false)
    countWord(text)
  }

	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea value={word} onChange={updateTextArea} disabled={!startGame}/>
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={hendleStartGame} disabled={startGame}>Start Game</button>

			<h2>Word count:{countW}</h2>
		</div>
	);
}

export default App;
