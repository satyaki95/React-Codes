import React from "react"


function Wellcome2 () {
    return <h1>Satyaki</h1>;
}

// or

function Wellcome () {
    return React.createElement("h1", {}, "Satyaki");
}

function Todo1 () {
    return <div>
        <p>TODO title</p>
        <p>Todo Para</p>
    </div>
}

// or

function Todo2 () {
    return React.createElement("div", {},
     React.createElement("p", {}, "todo Title"),
     React.createElement("p", {}, "todo Dec")
     );
}



export default function Abc() {
    return (
        <div>
            <Todo2 />
        </div>
    )
}