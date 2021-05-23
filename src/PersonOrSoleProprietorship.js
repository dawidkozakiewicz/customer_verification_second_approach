import React, { useReducer, useEffect } from "react";
import HardVerification from './HardVerification'
import HardVerificationBusiness from './HardVerificationBusiness'

function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "#28E294", noButtonColor: "white" };
        case "no":
            return { ...state, answer: false, noButtonColor: "#D8524E", yesButtonColor: "white" };
        case "changecolor":
            return { ...state, backgroundColorColor: "transparent" }
    }
}

const PersonOrSoleProprietorship = () => {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "white", noButtonColor: "white", backgroundColorColor: "#676767" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }

    function changeColor() {
        dispatch({ type: "changecolor" })
    }

    useEffect(() => {
        setTimeout(() => {
            changeColor()
        }, 1000);

    }, [])

    return (
        <div>
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>CZY JEST TO OSOBA FIZYCZNA ALBO JEDNOSOSOBOWA DZIAŁALNOŚĆ GOSPODARCZA?</h3>

            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (

                <HardVerification />

            ) : (
                <HardVerificationBusiness />
            )}
        </div>
    )
}

export default PersonOrSoleProprietorship
