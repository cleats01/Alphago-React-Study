/* 아래의 주석은 지우시면 안됩니다. */
/* global MissionUtils */

import React from 'react';
import { useState } from 'react';

/* API 호출 상수 */
const Random = MissionUtils.Random;

function App() {
  /* 코드 작성 구역 */
  const [cars,setCars] = useState([]);
  const [laps,setLaps] = useState(0);
  const [winner, setWinner] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value.split(",");
    console.log(input)
    setCars(input);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].length > 5) {
        alert("자동차 이름을 5자 이하로 입력하세요");
        break;
      }
      else if (cars[i].length === 0) {
        alert("자동차 이름을 입력해주세요");
        break;
      }
    }
  }

  const handleLapInput = (e) => {
    setLaps(e.target.value);
  }

  const handleStartButton = (e) => {
    e.preventDefault();
    const moved = new Array(cars.length).fill(0);
    for (let i = 0; i < laps; i++) {
      moved.forEach((e,i)=>{
        if (Random.pickNumberInRange(0,9) >= 4) moved[i]++;
      })
      
    }

    const win = Math.max(...moved);
    const winnerArr = [];
    moved.forEach((e,i)=>{
      if (e===win) winnerArr.push(i);
    });
    winnerArr.forEach((e,i)=>{
      winnerArr[i] = cars[e];
    });
    setWinner(winnerArr.join(","));
  }
    
  return (
    <div id="app">
    <h1>🏎️ 자동차 경주 게임</h1>
    <p>
      자동차 이름을 <strong>5자 이하로</strong> 콤마로 구분하여 입력해주세요.
      <br />
      올바른 예) east,west,south,north <br />
    </p>
    <form>
      <input type="text" onChange={(e)=>{handleInputChange(e)}} />
      <button onClick={(e)=>{handleButtonClick(e)}}>확인</button>
    </form>
    <h4>시도할 횟수를 입력해주세요.</h4>
    <form>
      <input type="number" onChange={(e)=>{handleLapInput(e)}}/>
      <button onClick={(e)=>{handleStartButton(e)}}>확인</button>
    </form>
    <h4>📄 실행 결과</h4>
    <p>{winner}</p>
  </div>
  );
}

export default App;