import React from 'react'

const Header = () => {
    return (
        <header className='row block center'>
            <div>
                <a href='#/'>
                    <h1>02_Practice_Cart</h1>
                </a>
            </div>
            <div>
                <a href='#/cart'>Cart</a> <a href='#/signin'>SignIn</a>
            </div>
        </header>
    )
}

export default Header
