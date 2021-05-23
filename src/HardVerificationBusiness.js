import React, { useReducer, useEffect } from "react";
import QuestionAboutCase from './QuestionAboutCase'

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

const HardVerificationBusiness = () => {
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
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>W TAKIM RAZIE BĘDĄ TO WSZELKIE POZOSTAŁE FORMY PRAWNE (SPÓŁKI Z O.O., FUNDACJE, INSTYTUCJA PUBLICZNE ETC.)</h3>
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>PRZEPROWADŹ WERYFIKACJĘ TWARDĄ. CZY KLIENT PODAŁ PRAWIDŁOWE DANE? HASŁO ABONENCIE, KOD PUK?</h3>

            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <div>
                    <h3 style={{ border: "1px solid white", padding: "5px", borderRadius: "15px" }}>IDENTYFIKACJA KLIENTA POZYTYWNA. Możesz realizować wszystkie dyspozycje klienta, poza tymi, które wymagają pisma klienta.</h3>
                </div>
            ) : (
                <QuestionAboutCase />
            )}
        </div>
    )
}

export default HardVerificationBusiness