import React, { useState } from "react";

function IdeasForm (props) {
    let [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        props.addIdeas(input)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setInput(e.target.value)}/>
            <button type="submit">Submit your idea!</button>
        </form>
    )
}

export default IdeasForm
