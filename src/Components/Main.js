import React, { useContext } from 'react'
import '../Styles/Main.css'
import a from "../Assets/woombat.png"
import Context from '../GlobalState/context';

const Main = () => {

    const { state, actions } = useContext(Context)

    return (
        <div class="welcome-container">
            <img style={{ alignSelf: "center" }} width={50} src={a} alt=":D" />
            <h2 class="title">Bienvenido a Woombat Frontend Team</h2>
            <h4 class="subtitle">¡Buena suerte en este proyecto!</h4>
        </div>
    )
}

export default Main;