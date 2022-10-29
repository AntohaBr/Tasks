import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.container}>
            <img src={props.avatar} alt="avatar" className={style.avatar}/>
            <div className={style.angle}/>
            <div className={style.content}>
                <div className={style.name}>{props.name} </div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;