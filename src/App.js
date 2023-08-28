import logo from './logo.svg';
import './App.css';
import Environment from './Environment.js'

function App() {
  return (
    <div className="App">
        <svg id="background" width="100%" height="100%"></svg>
      <div id="rnbo-root">
      <div>
        <h1 id="patcher-title">Unnamed patcher</h1>
      </div>
          
      <div id="rnbo-console">
       
      </div>
      
          <div id="rnbo-parameter-sliders">
              <h2>Parameters</h2>
              <em id="no-param-label">No parameters</em>
          </div>
      </div>
      <Environment AudioModules={[]} CtlModules={[]} TrigModules={[]}/>
    </div>
  );
}

export default App;
