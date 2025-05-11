import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import './App.css';

const App = () => {
  const [dados, setDados] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState(null);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await axios.get('https://api-node-dash-bitdoglab.vercel.app/dados');
        const dadosOrdenados = response.data.sort((a, b) => new Date(b.criado_em) - new Date(a.criado_em));
        const ultimoDado = dadosOrdenados[0];

        setDados(ultimoDado);
        setUltimaAtualizacao(new Date().toLocaleTimeString());

        const doisDiasAtras = new Date();
        doisDiasAtras.setDate(doisDiasAtras.getDate() - 2);

        const historicoFiltrado = dadosOrdenados
        .filter(item => new Date(item.criado_em) >= doisDiasAtras)
        .map(item => ({
          temperatura: item.temperatura,
          hora: new Date(item.criado_em).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }))
        .reverse();

        setHistorico(historicoFiltrado);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchDados();
    const interval = setInterval(fetchDados, 1000);
    return () => clearInterval(interval);
  }, []);

  const getButtonColor = (estado) => {
    return estado === 'pressionado' ? 'green' : 'red';
  };

  return (
    <div className="app">
    <nav className="navbar">
    <h2 className="navbar-title">Embarca</h2>
    </nav>

    <div className="app-container">
    <h1 className="titulo"></h1>

    <div className="cards-container">
    <div className={card card-temperatura ${dados ? (dados.temperatura > 30 ? 'quente' : dados.temperatura < 15 ? 'frio' : 'morno') : ''}}>
    <div className="card-header">
    <h5>Temperatura</h5>
    </div>
    <div className="card-body">
    {dados ? (
      <>
      <p><strong>🌡️ Temperatura:</strong> {dados.temperatura} °C</p>
      <div className={temperatura-indicador ${dados.temperatura > 30 ? 'quente' : dados.temperatura < 15 ? 'frio' : 'morno'}}></div>
      </>
    ) : (
      <div className="loading-spinner"></div>
    )}
    </div>
    </div>

    <div className="card-joystick-direcao">
    <div className="card-headerj"><h3>Rosa dos ventos</h3></div>
    <div className="card-body">
    {dados ? (
      <>
      <div className="joystick-valores">
      <div><strong>X:</strong> {dados.joystick?.x}</div>
      <div><strong>Y:</strong> {dados.joystick?.y}</div>
      </div>
      <div className="bussola-container">

      <h2 className="direcao-texto">🧭 {dados.joystick?.direcao || 'Desconhecido'}</h2>
      </div>
      </>
    ) : (
      <p>Carregando dados...</p>
    )}
    </div>
    </div>

    <div className="card-bt">
    <div className="card-headerbt">
    <h3>Botões</h3>
    </div>
    <div className="card-body">
    <hr />
    {dados ? (
      <>
      <p>
      <span
      className="botao"
      style={{ backgroundColor: getButtonColor(dados.botao1) }}
      >
      {dados.botao1 === 'pressionado' ? ' 🔘Botão 1 ON' : '🔘Botão 1 OFF'}
      </span>
      </p>
      <p>
      <span
      className="botao"
      style={{ backgroundColor: getButtonColor(dados.botao2) }}
      >
      {dados.botao2 === 'pressionado' ? '🔘 Botão 2 ON' : '🔘Botão 2 OFF'}
      </span>
      </p>
      </>
    ) : (
      <p>Carregando...</p>
    )}
    </div>
    </div>
    </div>



    </div>
    </div>
  );
};

export default App;
