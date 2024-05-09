import { setMetalChoice } from "./TransientState.js"

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals") //dirty money
    const metals = await response.json() //launder money

    const handleChangeMetal = (e) => {
        if(e.target.name === "metal"){
            //send metal selection to transient state
           setMetalChoice(parseInt(e.target.value))
        }
    }
//listening for a change on the radio button
    document.addEventListener("change", handleChangeMetal)

    let metalHTML = ""

    // DRY - do not repeat yourself
    const divStringArray = await metals.map( //spending money
        singleMetal => {
            return `<div>
            <input type='radio' name='metal' value='${singleMetal.id}' /> ${singleMetal.metal}
            </div>
            `
        }
    )
    metalHTML += divStringArray.join("")

    return metalHTML

}