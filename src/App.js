import React from "react";
import crypto from 'crypto';

function App() {

  const [str, setStr] = React.useState(16);
  const [result, setResult] = React.useState('');
  const [resultLength, setResultLength] = React.useState(0);

  function handleChange(e) {
    if(e.target.value >= 0 && e.target.value <= 32)
    setStr(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = generatePass(+str);

    setResult(result);
    setResultLength(result.length);
  }

  function handleCopy(e) {
    navigator.clipboard.writeText(result)
      .then(() => {
        const tmp = result;
        setResult('Скопировано!');
        setTimeout(() => {
          setResult(tmp);
        }, 500)
      })
      .catch(err => {
        console.log(err);
      });
  }

  function generatePass(str) {
    return crypto.randomBytes(str).toString('hex');
  }


  return (
    <div className="app">
      <h1 className="heading">Generate your password!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" id="input" value={str} onChange={handleChange} placeholder="Nubmer from 0 to 32" />
        <button className="submit-button" type="submit">Generate Password</button>
      </form>
      <div className="result-wrapper">
        <p className="result">{result}</p>
        <button className="copy-button" onClick={handleCopy}>Copy</button>
      </div>
      <p className="result-length">Length: {resultLength}</p>
    </div>
  );
}

export default App;
