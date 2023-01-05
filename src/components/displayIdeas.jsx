import React from "react"

function DisplayIdeas(props) {
    return (
        <ul>
            {props.ideas.map((idea, i)=> <li key={i}>{idea}</li>)}
        </ul>
    )
}

export default DisplayIdeas