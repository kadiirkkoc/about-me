import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'


export default function Main() {
    return (
        <>
            <div className="main-container">
                <FontAwesomeIcon icon={light("envelope")} />
            </div>


        </>
    )
}