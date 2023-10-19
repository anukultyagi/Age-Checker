import React from 'react'

function UsersList(props) {
    return (
        <>
            <div className='container w-auto md:w-1/2 mx-auto card p-4 mt-5'>
                <ul>
                    {props.users.map((user) => {
                        return <li>{user.name} ({user.age}) years old</li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default UsersList