import React from 'react'

import {Card, Conteudo, Footer} from "./styles";

export default props =>
  <Card>
    <Conteudo>
      {props.children}
    </Conteudo>
    <Footer>
      {props.titulo}
    </Footer>
  </Card>