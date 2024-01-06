import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// const renderReact1 = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// );

const renderReact2 = React.createElement(
  'a',
  {href: 'https://google.com' , target : '_blank'},
  'Click here to Visit Google',
  'h1',
  "Hello World!"
)


ReactDOM.createRoot(document.getElementById('root')).render(
    renderReact2 
)
