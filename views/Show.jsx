import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.captain.name}</strong> {props.captain.readyToEat ? 'is ready to eat' : 'is NOT ready to eat'}</p>
            <p>Its color is <span style={{ color: props.captain.color }}>{props.captain.color}</span></p>


            <a href={`/captains/${props.captain.name}/edit`}>Edit</a>
            
            <br /><br />


            <form action={`/captains/${props.captain.name}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>

            <br />

            

            <a href="/captains">Back</a>
        </div>
    )
}

export default Show;