// Import de dependencias
import React from 'react'
import ReactDOM from 'react-dom'
import Context from './GlobalState/context'
import useGlobalState from './GlobalState/useGlobalState'


//Import de Componentes y estilos
import Main from './Components/Main'
import './Styles/Index.css'


const Index = () => {
    const store = useGlobalState();
    return (
        <Context.Provider value={store}>
            <Main />
        </Context.Provider>
    )
};


ReactDOM.render(<Index />, document.getElementById("root"))