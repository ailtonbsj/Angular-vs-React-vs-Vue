import React from "react";

function Home(props) {
    let legend = 'Im in React'
    return (
        <section>
            <h1>{ props.msg }</h1>
            <h2>{ legend }</h2>
            <input type="text" value={legend} readOnly />
        </section>
    )
}

export default Home;