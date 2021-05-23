import React, { useReducer, useEffect } from "react";
import PersonOrSoleProprietorship from './PersonOrSoleProprietorship'
import QuestionAboutCase from './QuestionAboutCase'
import ThirdPersonCalls from './ThirdPersonCalls'


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


export default function OwnerOfTheNumberConfirmed() {
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
            <h3 style={{ backgroundColor: state.backgroundColorColor }}>CZY SPRAWA DOTYCZY NUMERU ZREJESTROWNEGO NA TĘ SAMĄ OSOBĘ, CO NUMER Z KTÓREGO DZWONI KLIENT?</h3>

            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <>
                    <PersonOrSoleProprietorship />
                </>
            ) : (
                <>
                    <ThirdPersonCalls />
                </>
            )}
        </div>

    );
}
