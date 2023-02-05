import React from 'react'

function User(props) {
    const { data } = props
    return (
        <div>
            <h1>user data</h1>
            <h2>{data.name}</h2>
            <h3>{data.age}</h3>
        </div>
    )
}

export default User
