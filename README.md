# 📡 Projeto de Monitoramento IoT

Este projeto visa implementar uma solução completa de monitoramento utilizando a Internet das Coisas (IoT). Ele abrange desde a coleta de dados em dispositivos embarcados até a visualização em tempo real através de um painel web interativo.

---

## 🧩 Estrutura do Projeto

- **`api/`**: Contém a API desenvolvida em Node.js responsável por gerenciar a comunicação entre os dispositivos IoT e o banco de dados.
- **`dashboard/`**: Aplicação web que fornece uma interface gráfica para visualização e análise dos dados coletados.
- **`final_monitoring/`**: Código-fonte para os dispositivos embarcados, responsável pela coleta de dados de sensores e envio para a API.

---

## 🚀 Tecnologias Utilizadas

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Dispositivos IoT**: Linguagem C, CMake
- **Outros**: WebSockets para comunicação em tempo real

---

## ⚙️ Como Executar

### ✅ Pré-requisitos

- Node.js instalado
- Ambiente de desenvolvimento para C/C++ (para compilar o código dos dispositivos)
- Navegador web moderno

### 📦 Clonar o repositório

```bash
git clone https://github.com/DanielOliveiraC/iot_monitoring_project.git
cd iot_monitoring_project
```

### 🔧 Instalar dependências da API

```bash
cd api
npm install
```

### ▶️ Iniciar a API

```bash
npm start
```

### 🌐 Acessar o dashboard

Abra o arquivo `dashboard/index.html` no seu navegador para visualizar o painel de monitoramento.

### 🔌 Carregar código nos dispositivos

Compile e carregue o código localizado em `final_monitoring/` nos dispositivos embarcados, conforme as instruções específicas do seu hardware (ex: Raspberry Pi Pico, ESP32, etc.).

---

## 📊 Funcionalidades

- ✅ Coleta de dados de sensores em tempo real
- ✅ Armazenamento eficiente dos dados coletados
- ✅ Visualização gráfica via dashboards interativos
- ✅ Alertas e notificações com base em limites definidos

---

## 🎥 Demonstração

[Link para o vídeo demonstrativo no YouTube]()

