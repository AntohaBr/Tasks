import React, {ChangeEvent, useState} from "react";
import {successAPI} from "./RequestAPI";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from "./Request.module.css"

export const Request = () => {
    const [success, setSuccess] = useState<boolean>(false)
    const [response, setResponse] = useState<string>(" ")

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setSuccess(event.currentTarget.checked)
    }

    const onClickHandler = () => {
        successAPI(success)
            .then((res) => {
                if (!res.ok) throw Error(res.statusText)
                return res.json()
            })
            .then((res) => {
                setResponse(res.errorText)
            })
            .catch((error) => {
                setResponse(error.message)
            })
    }

    return (
        <div className={style.block}>
            <input type="text" value={response}/>
            <div>
                <input type="checkbox" onChange={onChangeHandler}/>
                <SuperButton onClick={onClickHandler}>Post</SuperButton>
            </div>
        </div>
    )
}
