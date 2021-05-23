import React, { useReducer, useEffect } from "react";


import OwnerOfTheNumberConfirmed from './OwnerOfTheNumberConfirmed'

function reducer(state, action) {
  switch (action.type) {
    case "yes":
      return { ...state, answer: true, yesButtonColor: "#28E294", noButtonColor: "white" };
    case "no":
      return { ...state, answer: false, noButtonColor: "#D8524E", yesButtonColor: "white" };

  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "white", noButtonColor: "white" });

  function confirm(e) {
    dispatch({ type: "yes" });

  }

  function deny(e) {
    dispatch({ type: "no" });
  }

  function handleReset() {
    window.location.reload()
  }


  return (

    <div className="App">
      <div className="reset resetColor" onClick={handleReset}>RESET</div>
      <h2>1. W czym mogę pomóc?</h2>
      <h2>2. Jakiego numeru dotyczy sprawa?</h2>
      <h2>3. Na kogo zarejestrowany jest numer? Czy klient wie?</h2>
      <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
      <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
      <p>{state.answer}</p>
      {state.answer === null ? (
        <></>
      ) : state.answer === true ? (
        <div>
          <OwnerOfTheNumberConfirmed />

        </div>
      ) : (
        <div>
          <h3 style={{ border: "1px solid white", padding: "5px", borderRadius: "15px" }}>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>
        </div>
      )}
    </div>


  );
}


