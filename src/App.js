import React from "react";

function App() {

  const [str, setStr] = React.useState('');
  const [result, setResult] = React.useState('');

  function handleChange(e) {
    setStr(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setResult(generatePass(str));
  }

  function generatePass(str) {
    let array = str.split('');

    for (let i = array.length-1; i > 0; i--) {
      if(i % 2 === 0) {
        let t = array[i-1]; array[i-1] = array[i]; array[i] = t
      }
    }
    return array.map((l) => l.charCodeAt(0).toString(16)).filter((l, i) => (i + 1) % 2 === 0).join('');
  }


  return (
    <div className="app">
      <h1 className="heading">Generate your password!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" id="input" value={str} onChange={handleChange} placeholder="Input Stroke" />
        <p className="str">Length: {str.length}</p>
        <button className="submit-button" type="submit">Generate Password</button>
      </form>
      <p className="result">{result}</p>
      <p className="result">Length: {result.length}</p>
    </div>
  );
}

export default App;
