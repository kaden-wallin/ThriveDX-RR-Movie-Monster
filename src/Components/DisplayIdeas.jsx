import React, { useState } from "react"

function DisplayIdeas(props) {
    let crazyIdeas = props.ideas.map((idea, index) => <li key={index}>{idea}</li>)

    return (
        <div>
            <ul>
                {crazyIdeas}
            </ul>
        </div>
    )
}

export default DisplayIdeas