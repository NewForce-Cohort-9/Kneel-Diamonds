import { setStyleChoice } from "./TransientState.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles") //dirty money
    const styles = await response.json() //launder money

    let styleHTML = ""

    const handleChangeStyle = (e) => {
        if(e.target.name === "style"){
            //send size selection to transient state
           setStyleChoice(parseInt(e.target.value))
        }
    }
//listening for a change on the radio button
    document.addEventListener("change", handleChangeStyle)

    // DRY - do not repeat yourself
    const divStringArray = await styles.map( //spending money
        singleStyle => {
            return `<div>
            <input type='radio' name='style' value='${singleStyle.id}' /> ${singleStyle.style}
            </div>
            `
        }
    )
    styleHTML += divStringArray.join("")

    return styleHTML

}