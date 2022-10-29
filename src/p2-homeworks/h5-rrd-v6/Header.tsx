import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={'/'} className={s.link} >PreJunior</NavLink>
            <NavLink to={'/junior'} className={s.link} >Junior</NavLink>
            <NavLink to={'/juniorPlus'} className={s.link} >JuniorPlus</NavLink>
            <div className={s.menu}/>
        </div>
    )
}

export default Header
