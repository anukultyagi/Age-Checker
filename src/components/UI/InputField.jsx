import React from 'react'

function InputField(props) {
    return (
        <input id={props.id} className="border-0 border-b-2 text-sm p-2" type={props.type} placeholder={props.placeholder} />
    )
}

export default InputField