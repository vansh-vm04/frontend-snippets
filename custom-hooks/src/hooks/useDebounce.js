import { useRef } from "react";

export function useDebounce(task){
    const current = useRef();

    const fn = ()=>{
        clearTimeout(current.current);
    current.current = setTimeout(task,500);
    }

    return fn;
}