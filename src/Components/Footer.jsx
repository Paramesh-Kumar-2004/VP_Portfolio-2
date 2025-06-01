import React from 'react'


function Footer() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "14px",
                cursor: "pointer"
            }}
        >
            <h3>Github</h3>
            <h3>LinkedIn</h3>
            <h3>Portfolio</h3>
        </div>
    )
}

export default Footer