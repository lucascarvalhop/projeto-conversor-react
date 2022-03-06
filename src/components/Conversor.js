import React from 'react';
import styles from './Conversor.module.css';

const Conversor = ({ moedaA, moedaB }) => {
  const [moedaAValor, setMoedaAValor] = React.useState('');
  const [moedaBValor, setMoedaBValor] = React.useState(0);

  function handleChange(event) {
    setMoedaAValor(event.target.value);
  }

  async function converter() {
    const de_para = `${moedaA}_${moedaB}`;
    const url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=a8646bf223773e62b7e8`;
    const response = await fetch(url);
    const json = await response.json();
    const cotacao = await json[de_para];
    const resultadoConversao = (moedaAValor * cotacao).toFixed(2);
    setMoedaBValor(resultadoConversao);
  }

  return (
    <div className={styles.conversor}>
      <h2>
        {moedaA} para {moedaB}
      </h2>
      <input type="text" onChange={handleChange} />
      <input type="button" value="Converter" onClick={converter} />
      <h2>{`${moedaB} ${moedaBValor}`}</h2>
    </div>
  );
};

export default Conversor;
