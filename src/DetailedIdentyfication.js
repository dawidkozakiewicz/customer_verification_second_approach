import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
        case "no":
            return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
    }
}

const DetailedIdentyfication = () => {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray", text: "" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }
    return (
        <div>

            <h3>MOŻESZ ZAŁATWIĆ SPRAWĘ KLIENTA PO PRZEPROWADZENIU IDENTYFIKACJI SZCZEGÓŁOWEJ.</h3>
            <h3>WYMAGANE 2 POPRAWNE ODPOWIEDZI Z DWÓCH RÓŻNYCH ZESTAWÓW A i B - PO JEDNEJ Z KAŻDEGO ZESTAWU. MOŻESZ ZADAĆ MAKSYMALNIE DWA PYTANIA.</h3>
            <h3>Zestaw A:</h3>
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
                <div>
                    <h3>IDENTYFIKACJA OGRANICZONA</h3>
                    <h3>Możesz zrealizować tylko następujące dyspozycje klienta:</h3>
                    <ul>
                        <li>wyjaśnienie płatności</li>
                        <li>wyjaśnienie problemów technicznych</li>
                        <li>wyłączenie usług premium</li>
                        <li>założenie blokad (premium, kradzież/zagubienie)</li>
                        <li>włączenie/wyłczenie usług promocyjnych</li>
                        <li>podanie informacji o wykorzystanych jednostkach</li>
                    </ul>
                </div>
            ) : (
                <div>
                    <h3>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>
                </div>
            )}

        </div>
    )
}

export default DetailedIdentyfication
