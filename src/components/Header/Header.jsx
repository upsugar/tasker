import React from "react";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.title}>
            <h2 className={"mt-5 text-center text-secondary"}>Welcome to Tasker</h2>
        </div>
    );
}

export default Header