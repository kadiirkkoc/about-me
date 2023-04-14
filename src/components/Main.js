import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Main() {
    return (
        <>
            <div className="main-container">
                <div className="buttons">
                    <button className="btn btn-1">
                        <a href="kadiirkkoc@gmail.com">Email</a>
                    </button>

                    <button className="btn btn-2">
                        <a href="https://www.linkedin.com/in/kadir-koc-63a0a1257/">Linkedin</a>
                    </button>
                </div>

                <div className="explain">
                    <span className="about ">
                        <h1>About</h1>
                        <p>
                            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                        </p>
                    </span>
                    <span className="interests">
                        <h1>Interests</h1>
                        <p>
                            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                        </p>
                    </span>
                </div>
            </div>


        </>
    )
}