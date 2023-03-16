import React from 'react'

function New() {
    return ( 
        <div>
            <h1>New Captain</h1>
            <form action="/logs" method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="title" id="nme" name="name" /><br /><br />

                <label htmlFor="clr">Color:</label><br />
                <input type="entry" id="clr" name="color" /><br /><br />

                <label htmlFor="rdy">Ready To Eat:</label>
                <input type="shipIsBroken" id="rdy" name="readyToEat" /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default New;