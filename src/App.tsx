import './css/index.css';
import Buttons from "./components/buttons.tsx";
import Inputs from "./components/inputs.tsx";

function App() {
  return (
    <div className="App">
        <Inputs name='tarefa' placeholder='Digite a Tarefa' type='text' />
        <Inputs name='tarefa' placeholder='Digite a Tarefa' type='text' />
        <Inputs name='tarefa' placeholder='Digite a Tarefa' type='text' />
        <Inputs name='tarefa' placeholder='Digite a Tarefa' type='text' />
        <Buttons name='Teste' />  
        <Buttons name='Teste' />  
        <Buttons name='Teste' />  
        <Buttons name='Teste' />  

        <h1>Teste JOel Nova Atulização!!</h1>
      </div>
  );
}

export default App;