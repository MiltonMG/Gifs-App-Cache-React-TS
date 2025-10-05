import { useState } from "react";

export const useCounter = ( initialValue:number = 10 ) => {
    //state
    const [counter, setCounter] = useState(initialValue);

    //functions
    const handleAdd = () =>{
        setCounter(counter + 1);
    };
    const handleSubtract = () =>{
        setCounter( (prevState) => prevState - 1);
    };
    const handleReset = () =>{
        setCounter(initialValue);
    };

    return {
        //Values
        counter,
        //Methods
        handleAdd, 
        handleSubtract,
        handleReset
    }
}
