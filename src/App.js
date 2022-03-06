import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="USD" />
      </div>
      <div className="linha">
        <Conversor moedaA="ARS" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="ARS" />
      </div>
      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="EUR" />
      </div>
    </div>
  );
}

export default App;
