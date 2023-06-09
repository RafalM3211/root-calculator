import {
    indexInput,
    radicantInput,
    multiplierOutput,
    indexOutput,
    radicantOutput,
    errorOutput
} from "./selectors";
import type { Root } from "./types";


export function getIndexAndRadicant(){
    const index=indexInput.valueAsNumber;
    const radicant=radicantInput.valueAsNumber;

    return {index, radicant}
}

export function shouldDrawRootSymbol(root: Root){
    return !(root.index===1 || Math.abs(root.radicant)===1 || root.radicant===0);
}

export function clearRootValues(){
    indexOutput.textContent="";
    radicantOutput.textContent="";
    multiplierOutput.innerHTML="";
}

export function writeError(exception: string){
    errorOutput.innerHTML=exception;
}

export function clearError(){
    errorOutput.innerHTML="";
}

export function limitInputLengh(input: HTMLInputElement, length: number){
    if(input.value.length>8){
        input.value=input.value.slice(0, -1);
    }
}