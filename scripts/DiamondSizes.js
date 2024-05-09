import { setSizeChoice } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes") //dirty money
    const sizes = await response.json() //launder money

    const handleChangeSize = (e) => {
        if(e.target.name === "size"){
            //send size selection to transient state
           setSizeChoice(parseInt(e.target.value))
        }
    }
//listening for a change on the radio button
    document.addEventListener("change", handleChangeSize)

    let sizeHTML = ""

    // DRY - do not repeat yourself
    const divStringArray = await sizes.map( //spending money
        singleSize => {
            return `<div>
            <input type='radio' name='size' value='${singleSize.id}' /> ${singleSize.carets}
            </div>
            `
        }
    )
    sizeHTML += divStringArray.join("")

    return sizeHTML

}