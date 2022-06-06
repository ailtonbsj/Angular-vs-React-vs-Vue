import React, { useState } from "react";

function Home(props) {
    let [legend, setLegend] = useState('Im in React')

    function resetLegend() {
        console.log('Event of click in React');
        setLegend('Im in React')
    }

    return (
        <section>
            <h1>{ props.msg }</h1>
            <h2>{ legend }</h2>
            <input type="text" value={legend} readOnly />
            <button onClick={resetLegend}>Reset legend</button><br /><br />

            <input type="text" value={legend} onChange={e => setLegend(e.target.value)} />
        </section>
    )
}

export default Home;