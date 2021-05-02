import './index.css'
import React from 'react'  //Necessário pois estamos usando JSX (Mistura de HTML com JS)
import ReactDom from 'react-dom' //Necessário somente aqui para renderizar.

import App from "./App"

ReactDom.render(
  <App></App>,
  document.getElementById('root')
)