import React, { useState, useEffect } from 'react';

function App() {
  const Random = global.MissionUtils.Random;
  // function answerMaker () { //메서드가 있었네 ;;
  //   let ans = [];
  //   while(ans.length<3) {
  //     const candi = Random.pickNumberInRange(1, 9);
  //     if (ans.includes(candi)) {
  //       continue;
  //     } else {
  //       ans.push(candi);
  //     }
  //   }
  //   return ans.join("");
  // }

  // input태그의 value 속성에 player 상태를 넣어주세요.
  const [player, setPlayer] = useState('');
  const [answer, setAnswer] = useState('');
  const [results, setResults] = useState([]);
  useEffect(()=>{ setAnswer(Random.pickUniqueNumbersInRange(1,9,3).join("")) },[]);
  /* 코드 작성 구역 */
  const handleInputChange = (e) => {
    const set = [...new Set(e.split(""))];
    if (set.length < e.length) alert("중복ㄴㄴ");
    else if (e.length > 3) alert("3자리만 입력");
    else if (isNaN(Number(e))) alert("문자 ㄴㄴ");
    else setPlayer(e);
  }

  const handleButtonClick = (player) => {
    let strikes = 0;
    let balls = 0;
    let result = '';
    for (let i = 0; i < 3; i++) {
      if (player[i]===answer[i]) strikes++;
      else if (answer.split("").includes(player[i])) balls++;
    }
    if (strikes===0 && balls===0) result = '낫싱';
    else if (strikes===3) result = '승리';
    else if (strikes===0) result = `${balls}볼`;
    else if (balls===0) result = `${strikes}스트라이크`;
    else result = `${balls}볼 ${strikes}스트라이크`;
    setResults([...results, result]);
    setPlayer('');
  }

  const restart = () => {
    if (window.confirm("진짜 재시작?")) {
      window.location.reload();
    }
  }

  return (
    <div id="app">
    <h1>⚾ 숫자 야구 게임</h1>
    <p>
      <strong>1~9까지의 수</strong>를 중복없이
      <strong>3개</strong> 입력해주세요. <br />
      올바른 예) 139 <br />
      틀린 예) 122
    </p>
    {/* input과 button에 핸들러를 만들어서 넣어주세요. */}
    <form>
      <input type="text" id="user-input" value={player} onChange={(e) => {handleInputChange(e.target.value)}}/>
      {/* 클릭시 새로고침 방지를 위해 type="button" 추가*/}
      <button type="button" id="submit" onClick={() => {handleButtonClick(player)}}>확인</button>
    </form>
    <h3>📄 결과</h3>
    <div id="result">{results.map((result,idx)=> <div key={idx}>{result}</div>)}</div>
    <button id="game-restart-button" onClick={()=>{restart()}}>재시작</button>
  </div>
  );
}

export default App;