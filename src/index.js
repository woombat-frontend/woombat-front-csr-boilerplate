// Import de dependencias
import React from 'react'
import ReactDOM from 'react-dom'
import Context from './GlobalState/context'
import useGlobalState from './GlobalState/useGlobalState'
import { Route, Link, BrowserRouter } from 'react-router-dom'


//Import de Componentes y estilos
import Main from './Components/Main'
import './Styles/Index.css'


const Index = () => {
    const store = useGlobalState();
    return (
        <Context.Provider value={store}>
          <BrowserRouter>
            <div>
              <Route path="/" component={Main} />
            </div>
          </BrowserRouter>
        </Context.Provider>
    )
};


ReactDOM.render(<Index />, document.getElementById("root"))
