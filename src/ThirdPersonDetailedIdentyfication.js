import React, { useReducer, useEffect } from "react";
import AdditionalIdentyfication from "./AdditionalIdentyfication";

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

const ThirdPersonDetailedIdentyfication = () => {
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

            <h3 style={{ backgroundColor: state.backgroundColorColor }}>MOŻESZ ZAŁATWIĆ SPRAWĘ KLIENTA PO PRZEPROWADZENIU IDENTYFIKACJI SZCZEGÓŁOWEJ.</h3>
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>WYMAGANE 2 POPRAWNE ODPOWIEDZI Z DWÓCH RÓŻNYCH ZESTAWÓW A i B - PO JEDNEJ Z KAŻDEGO ZESTAWU. MOŻESZ ZADAĆ MAKSYMALNIE DWA PYTANIA.</h3>
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>Zestaw A:</h3>
            <ul>
                <li>informacja dotycząca abonamentu</li>
                <li>usługi</li>
                <li>płatności</li>
                <li>saldo konta</li>
                <li>wysokość ostatniej faktury</li>
                <li>cykl billingowy</li>
                <li>kontaktowy/obsługowy adres email</li>
                <li>nr karty sim</li>
            </ul>
            <h3>Zestaw B:</h3>
            <ul>
                <li>data urodzenia</li>
                <li>adres zameldowania</li>
                <li>adres korespondencyjny</li>
                <li>seria i numer dowodu osobistego</li>
            </ul>
            <h3>CZY KLIENT ODPOWIEDZIAŁ POPRAWNIE?</h3>
            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <AdditionalIdentyfication />
            ) : (
                <div>
                    <h3 style={{ border: "1px solid white", padding: "5px", borderRadius: "15px" }}>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>
                </div>
            )}

        </div>
    )
}

export default ThirdPersonDetailedIdentyfication
