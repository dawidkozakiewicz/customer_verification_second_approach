import React, { useReducer, useEffect } from "react";

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

const AdditionalIdentyfication = () => {
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
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>ROZMAWIASZ Z OSOBĄ TRZECIĄ</h3>
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>PRZEPROWADŹ IDENTYFIKACJĘ DODATKOWĄ</h3>
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>WYMAGANA JEDNA POPRAWNA ODPOWIEDŹ NA PYTANIA Z ZESTAWU</h3>
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>MOŻESZ ZADAĆ MAKSYMALNIE 3 PYTANIA:</h3>
            <ul>
                <li>dane dotyczące abonamentu, usługi, płatności</li>
                <li>saldo konta</li>
                <li>wysokość ostatniej faktury</li>
                <li>numer karty sim</li>
            </ul>
            <h3>Czy klient odpowiedział poprawnie?</h3>

            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <div style={{ border: "1px solid white", padding: "5px", borderRadius: "15px" }}>
                    <h3>IDENTYFIKACJA KLIENTA OGRANICZONA</h3>
                    <h3>MOŻESZ ZREALIZOWAC TYLKO NASTĘPUJĄCE DYSPOZYCJE KLIENTA:</h3>
                    <ul>
                        <li>wyjaśnienie płatności</li>
                        <li>wyjaśnienie problemów technicznych</li>
                        <li>wyłączenie usług premium</li>
                        <li>założenie blokad (premium, kradzież/zagubienie)</li>
                        <li>włączenie/wyłączenie usług promocyjnych</li>
                        <li>podanie informacji o wykorzystanych jedniostach</li>
                    </ul>
                </div>

            ) : (
                <>
                    <h3 style={{ border: "1px solid white", padding: "5px", borderRadius: "15px" }}>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>
                </>
            )}
        </div>
    )
}

export default AdditionalIdentyfication
