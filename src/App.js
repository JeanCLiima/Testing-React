import "./App.css"
import React from 'react'

import Card from "./Components/layout/card"
import Primeiro from "./Components/Primeiro"
import ComParametros from "./Components/ComParametros"
import ComFilhos from "./Components/ComFilhos"
import Repeticao from "./Components/Repeticao"
import Condicional from "./Components/Condicional"
import CondicionalComIf from "./Components/CondicionalComIf"

export default (props) => (
  <div className="App">
    <Card titulo = "#06 - Condicional v2">
      <CondicionalComIf numero ={11}/>
    </Card>
    <Card titulo = "#05 - Condicional v1">
      <Condicional numero ={10}/>
    </Card>
    <Card titulo = "#04 - Repetição">
      <Repeticao/>
    </Card>
    <Card titulo = "#03 - Componente com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo = "#02 - Componente com Parametro">
      <ComParametros titulo="Esse é o Título" subtitulo="Esse é o subtítulo"/>
    </Card>
    <Card titulo = "#01 - Primeiro Componente">
      <Primeiro/>
    </Card>
  </div>
)