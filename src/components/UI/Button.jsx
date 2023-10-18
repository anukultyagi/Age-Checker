import React from "react"
const Button = (props) => {
    return (<>
        <button className=" bg-gray-700 text-white font-semibold p-1 px-3 rounded" type="submit" >{props.buttonTitle}</button>
    </>)
}

export default Button