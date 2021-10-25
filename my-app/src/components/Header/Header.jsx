import React from 'react'

import './header.css'

export default function Header() {
    return (
        <div className="header">
            <h2 className="header__title">My Weather</h2>
            <input className="header__search"type="text" />
        </div>
    )
}
