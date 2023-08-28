import logo from './logo.svg';
import './App.css';
import Environment from './Environment.js'
import styled from 'styled-components'
import React, {useState, useEffect} from 'react'

function App() {

  // useEffect(()=>{
    
  // }, [selModules])

  const addModule = () => {

  }

  class Module {
    constructor(name, url, type){
      this.name = name
      this.url = url
      this.type = type
      this.device = null
      this.id = null
    }
  }

  const modules = [
    new Module('FmOsc', 'export/FmOsc.export.json', 'audio'),
    new Module('Filter', 'export/Filter.export.json', 'audio'),
    new Module('Comb', 'export/Comb.export.json', 'audio'),

    new Module('Env', 'export/Env.export.json', 'ctl'),
    new Module('Lfo', 'export/Lfo.export.json', 'ctl'),
    new Module('Stepper', 'export/Stepper.export.json', 'ctl'),
    new Module('PresetStepper', 'export/PresetStepper.export.json', 'ctl'),

    new Module('Button', 'export/Button.export.json', 'trig'),
    new Module('Pulse', 'export/Pulse.export.json', 'trig'),
    new Module('RateStepper', 'export/RateStepper.export.json', 'trig'),
  ]

  const [moduleQuantities, setModuleQuantities] = useState(
    {
      'FmOsc': 0,
      'Filter': 0,
      'Comb': 0,

      'Env': 0,
      'Lfo': 0,
      'Stepper': 0,
      'PresetStepper': 0,

      'Button': 0,
      'Pulse': 0,
      'RateStepper': 0,

    }
  )
  const [selModules, setSelModules] = useState([])
  const [moduleMenuOn, setModuleMenuOn] = useState(true)


  const LoadEnvironment = () => {
    let selMods = []
    Object.keys(moduleQuantities).forEach((k)=>{
      for(let i=0; i<moduleQuantities[k]; i++){
        let module = modules.find((m)=>m.name==k)
        module.id = k+i
        console.log('adding module:', module)
        selMods.push(module)
      }
    })
    setSelModules()

    console.log('new environment', selMods)
    setModuleMenuOn(false)
  }

  const setQuantity = (m, e) => {
    let current = moduleQuantities
    current[m.name] = parseInt(e.target.value)
    console.log('new quant:', current)
    setModuleQuantities(current)
  }

  return (
    <div className="App">

      {moduleMenuOn && 
        <ModuleMenu>
          {modules.map((m)=>
          <ModuleMenuItem>
            {m.name}
            <input type="number" min={0} max={100} onChange={(e)=>{setQuantity(m, e)}}/>
          </ModuleMenuItem>
          )}
          <button onClick={LoadEnvironment}>go</button>
        </ModuleMenu>}
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
      {!moduleMenuOn && <Environment Modules={selModules}/>}
    </div>
  );
}

export default App;

const ModuleMenu = styled.span`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  outline: 1px solid black;
  width: 150px;
  padding: 25px;
`

const ModuleMenuItem = styled.span`
  display: flex;
  gap: 5px;
`
