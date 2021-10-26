import React from 'react'

import './PageNotFound.css'

export default function PageNotFound() {
    return (
        <div className="pageNotFound">
            <img className="pageNotFound__img"src="./images/404.png" alt="404 page" />
            <p className="pageNotFound__text">Could not be found</p>
            <p className="pageNotFound__text">Please enter a different location.</p>
        </div>
    )
}
