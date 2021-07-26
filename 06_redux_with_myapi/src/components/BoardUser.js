import React, { useState, useEffect } from "react";

import UserService from '../services/user.service'

const BoardUser=()=>{
    const [content, setContent] = useState('')

    useEffect(() => {
        UserService.getUserContent().then(
            (response) => {
                setContent(response.data)
            },
            (error) => {
                const _content = 
                (error.response && error.response.data &&
                    error.response.data.message) ||
                    error.message || error.toString()
                
                setContent(_content)
            }
        )
    }, [])

    return (
        <div >
            {content}
        </div>
    )
}

export default BoardUser;