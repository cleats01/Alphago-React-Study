import React, { useState } from 'react';

const App = () => {
  /* 함수 작성 */
  const [result, setResult] = useState('');

  const handleNumber = (e) => {
    if (result.length === 0 && e.target.value === '0') {
      alert('올바른 숫자를 입력해주세요');
    } else {
      if (result.slice(-3) >= 100 && result.slice(-3) <= 999) {
        alert('4자리 이하로 입력하세요');
      } else {
        setResult(result + e.target.value);
      }
    }
  };

  const handleAllClear = (e) => {
    setResult('');
  };

  const handleOperator = (e) => {
    if (isNaN(result.slice(-1))) {
      alert('다음 숫자를 입력하세요');
    } else {
      if (e.target.value === '=') {
        console.log(result);
        setResult(String(Math.floor(window.eval(result))));
      } else {
        setResult(result + e.target.value);
      }
    }
  };

  return (
    <div id='app'>
      <div className='calculator'>
        <h1 id='total'>{result === '' ? '0' : result}</h1>
        <div className='digits flex' onClick={handleNumber}>
          <button value={'9'} className='digit'>
            9
          </button>
          <button value={'8'} className='digit'>
            8
          </button>
          <button value={'7'} className='digit'>
            7
          </button>
          <button value={'6'} className='digit'>
            6
          </button>
          <button value={'5'} className='digit'>
            5
          </button>
          <button value={'4'} className='digit'>
            4
          </button>
          <button value={'3'} className='digit'>
            3
          </button>
          <button value={'2'} className='digit'>
            2
          </button>
          <button value={'1'} className='digit'>
            1
          </button>
          <button value={'0'} className='digit'>
            0
          </button>
        </div>
        <div className='modifiers subgrid'>
          <button value={'AC'} className='modifier' onClick={handleAllClear}>
            AC
          </button>
        </div>
        <div className='operations subgrid' onClick={handleOperator}>
          <button value={'/'} className='operation'>
            /
          </button>
          <button value={'*'} className='operation'>
            x
          </button>
          <button value={'-'} className='operation'>
            -
          </button>
          <button value={'+'} className='operation'>
            +
          </button>
          <button value={'='} className='operation'>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
