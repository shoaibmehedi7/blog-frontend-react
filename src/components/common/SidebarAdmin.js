import React from 'react'
import '../../styles/sidebar.css'
function HeaderAdmin() {
    return (
        <>
            <div class="sidebar">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </>
    )
}

export default HeaderAdmin
