#React

    PT:
    🗨 - Exemplos fáceis para praticar Function e Arrow Function;
    🗨 - Noções básicas de exportação e importação;
    🗨 - Diferentes exemplos de componentes:
        📌 Componente normal;
        📌 Componente com condição;
        📌 Componente com filhos;
        📌 Componente com parâmetros;
        📌 Componente com repetição;
    🗨 - Algumas mais dicas para deixar seu código mais curto.

    EN:
    🗨 - Easy Examples to practices Functions and Arrow Functions;
    🗨 - Basic Smattering of Export and Import;
    🗨 - Different examples of components:
        📌 Normal Component;
        📌 Component with Condition;
        📌 Component with Children;
        📌 Component with params;
        📌 Component with repetition;
    🗨 - Some tips to be your code more short.

#Tipos de Componentes / Types of Components

- Completa:
```jsx
import React from 'react'

function Primeiro() {
	return
		<>
			<h1>Example</h1>
			<h2>Example</h2>
		</>
}

export default Primeiro
```

- Example 2:
*"Exportando e criando a function".*

```jsx
import React from 'react'

export default function Primeiro() {
	return
		<>
			<h1>Example</h1>
			<h2>Example</h2>
		</>
}
```

- Example 2 (Arrow Function):
*"Instanciamos em uma constante e retornamos ela. Obs.: Devemos importar in { }"*

```jsx
import React from 'react'

const Primeiro = () => {
	return (
		<>
			<h1>Example</h1>
			<h2>Example</h2>
		</>
  )
}

export {Primeiro}
```

- Example 2 (Arrow Function):
*"Exportamos a constante no mesmo momento que a criamos. Obs.: Devemos importar in { }"*

```jsx
import React from 'react'

export const Primeiro = () => {
	return (
		<>
			<h1>Example</h1>
			<h2>Example</h2>
		</>
  )
}
```

- Example 3 (Arrow Function):
*"Exportamos uma Arrow Function não nomeada, e a nomeamos na importação."*
"*Irá apresentar alertas que está maneira não é segura. Recomendando que nomeie antes de importar."*

```jsx
import React from 'react'

export default () => {
	return (
		<>
			<h1>Example</h1>
			<h2>Example</h2>
		</>
  )
}
```

- Example 4 (Arrow Function):
*"Exportamos uma Arrow Function não nomeada, e a nomeamos na importação."*
"*Irá apresentar alertas que está maneira não é segura. Recomendando que nomeie antes de importar."*

```jsx
import React from 'react'

export default () =>
		<>
			<h1>Example</h1>
			<h2>Example</h2>
		</>
```
#Formas de retornar / Form of return

```jsx
import React from 'react'

function Primeiro() {
	return
		<>
			<h1>Example</h1>
			<h2>Example</h2>
		</>
}

export default Primeiro
```

#Fonts
    https://youtu.be/XQxitgyZ_S4