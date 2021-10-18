import React from 'react'
import '../../styles/sidebar.css'
function HeaderAdmin() {
    return (
        <>
            <div className="sidebar">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </>
    )
}

export default HeaderAdmin
