import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.captains.map((captain, index) => 
                    <li key={index}>
                        <a href={`/captains/${index}`}><strong>{captain.name}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/captains/new">Add...</a>
        </div>
    )
}

export default Index