import React from 'react'

export default function Name(props) {
    if (props.name != "") {
        return (
            <div>{"名前 : " + props.name}</div>
        )
    } else {
        <div></div>
    }
}
