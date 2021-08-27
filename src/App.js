import React from "react";
import crypto from 'crypto';

function App() {

  const [str, setStr] = React.useState('16');
  const [result, setResult] = React.useState('');
  const [resultLength, setResultLength] = React.useState(0);

  function handleChange(e) {
    if(e.target.value >= 0 && e.target.value <= 64)
    setStr(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = generatePass(+str);

    setResult(result);
    setResultLength(result.length);
  }

  function handleCopy(e) {
    if(result) {
      navigator.clipboard.writeText(result)
        .then(() => {
          const tmp = result;
          setResult('Copied!');
          setTimeout(() => {
            setResult(tmp);
          }, 500)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  function generatePass(str) {
    return crypto.randomBytes(str / 2).toString('hex');
  }

  return (
    <div className="app">
      <span style={{"--i": 0}}></span>
      <span style={{"--i": 1}}></span>
      <span style={{"--i": 2}}></span>
      <span style={{"--i": 3}}></span>
      <main className="content">
        <div className="glass">
          <h1 className="heading">Generate your password!</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input className="input" id="input" value={str} onChange={handleChange} placeholder="Number from 0 to 64" />
            <button className="submit-button" type="submit" disabled = { str ? false : true } >Generate Password</button>
          </form>
        </div>
        <div className="glass">
          <div className="result-wrapper">
            <p className="result">{result}</p>
            <button className="copy-button" onClick={handleCopy} disabled = { result ? false : true }>Copy</button>
          </div>
          <p className="result-length">Length: {resultLength}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
