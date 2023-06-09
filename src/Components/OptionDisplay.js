import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "./redux/slices/displayCountrySlice";

const OptionDisplay = () => {
    const dispatch = useDispatch()
    const currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)
    return <div className="stack">{currentPotentials.map((e, index) => {
        return <h2 key={e.name.official} className="country-option" onClick={() => {dispatch(setDisplayCountry(currentPotentials[index]))}}>{e.name.common}</h2>
    })}</div>;
};

export default OptionDisplay;
