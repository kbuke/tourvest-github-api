import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormGroup } from "../../../Components/FormGroup";
import { useNavigate } from "react-router";
import { useFetch } from "../../../Hooks/useFetch";

import "./GitUserForm.css"


export function GitUserForm({
    setRepos,
    isLoading, setIsLoading,
    error, setError
}){
    const [userName, setUserName] = useState("")

    const {
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm()

    const navigate = useNavigate()

    const submitUserName = (formData) => {
        setUserName(formData.gitUserName)
    }

    useFetch(
        userName ? `users/${userName}/repos`: null,
        {
            setData: setRepos,
            setIsLoading,
            setError,
            onSuccess: () => navigate(`/repos/${userName}`)
        }
    )

    const handleinputChange = (e) => {
        if (error) setError(null)
    }

    return(
        <form
            className={`search-user-form ${error? "form-error" : ""}`}
            onSubmit={handleSubmit(submitUserName)}
        >
            <FormGroup
                errorMessage={errors?.gitUserName?.message}
            >
                <input 
                    className={`search-user-input ${error? "input-error" : ""}`}
                    placeholder="Please enter username"
                    type="text"
                    {...register("gitUserName", {
                        // Ensure that a value is given
                        required: {value : true, message: "Please enter a value."},
                        // Ensure the input is not just white-space
                        validate: value => value.trim() !== "" || "Please enter a proper value.",
                        onChange: handleinputChange,
                    })}
                />
            </FormGroup>

            {error?
                <p>
                    {error}
                </p>
                :
                null
            }

            {error ?
                null
                :
                isLoading?
                <div
                    className="loader"
                >  
                </div>
                :
                <button
                    className="search-user-button"
                >
                    Take-Off
                </button>
            }

        </form>
    )
}