import './App.css';

function App() {
    return (
    <div className="App">
            <label  tabIndex={-2}></label>
            <h1 role='headre'>hello</h1>
            <button className='btn' onClick={submit}>click</button>
        </div>
    );
}

export default App;
