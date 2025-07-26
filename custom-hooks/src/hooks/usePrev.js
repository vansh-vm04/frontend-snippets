import { useEffect, useRef } from "react";

export function usePrev(value){
    const ref = useRef();

    useEffect(()=>{
        ref.current = value;
    },[value])

    //it returns before useEffect runs
    return ref.current;
}