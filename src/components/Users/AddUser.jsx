import React, { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge, "lol")

    }

    const usernameChangeHandler = (event) => {
        // console.log(event.target.value)
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (
        <>
            <div className="container w-auto md:w-1/2 mx-auto card p-4 mt-5">
                <form onSubmit={addUserHandler} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="font-bold">Username</label>
                        <InputField
                            id="username"
                            type="text"
                            placeholder="Enter Username"
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="age" className="font-bold">Age (years)</label>
                        <InputField
                            id="age"
                            type="number"
                            placeholder="Enter Age"
                            value={enteredAge}
                            onChange={ageChangeHandler}
                        />
                    </div>
                    <div className="">
                        <Button buttonTitle="Add User" ></Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddUser