import React from 'react'
import {Navigate, Route, Routes} from "react-router";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/Junior_plus";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/juniorPlus'
}

function Pages() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH. JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
