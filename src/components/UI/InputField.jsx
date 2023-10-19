import React from 'react'

const InputField = (props) => {
    return (<>
        <input id={props.id} className="border-0 border-b-2 text-sm p-2" type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
    </>
    )
}

export default InputField