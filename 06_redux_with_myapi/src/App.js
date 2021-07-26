import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Router, Switch, Route, Link } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Profile from './components/Profile'
import BoardUser from './components/BoardUser'
import BoardModerator from './components/BoardModerator'
import BoardAdmin from './components/BoardAdmin'

import { logout } from './redux/actions/auth'
import { clearMessage } from './redux/actions/message'

import { history } from './helpers/history'

const App = () => {
    const [showModBoard, setShowModBoard] = useState(false)
    const [showAdminBoard, setShowAdminBoard] = useState(false)

    const { user: currentUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); //clear message when changing location
        })
    }, [dispatch])

    useEffect(() => {
        if(currentUser){
            setShowModBoard(currentUser.roles.includes('ROLE_MODERATOR'))
            setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'))
        }
    }, [currentUser])

    const logOut = () => {
        dispatch(logout())
    }

    return (
        <Router history={history}>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark" >
                    <Link to={'/'} className='navbar-brand'>
                        unifmo
                    </Link>
                    <div className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link to={'/home'} className='nav-link'>
                                Home
                            </Link>
                        </li>

                        {showModBoard && (
                            <li className='nav-item'>
                                <Link to={'/mod'} className='nav-link'>
                                    มอเดอเรเตอร์ บอร์ด
                                </Link>
                            </li>
                        )}

                        {showAdminBoard && (
                            <li className='nav-item'>
                                <Link to={'/admin'} className='nav-link'>
                                    แอดมิน บอร์ด
                                </Link>
                            </li>
                        )}

                        {currentUser && (
                            <li className='nav-item'>
                                <Link to={'/user'} className='nav-link'>
                                User
                                </Link>
                            </li>
                        )}

                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    Hello_{currentUser.username} 
                                </Link>
                            </li>
                            <li className={'nav-item'}>
                                <a href='/login' className='nav-link' onClick={logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ):(
                        <div>
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className={'nav-item'}>
                                <a href='/register' className='nav-link'>
                                    Sign Up
                                </a>
                            </li>
                        </div> 
                    )}
                </nav>

                <div>
                    <Switch className="container mt-3">
                        <Route exact path={['/', '/home']} component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='register' component={Register} />
                        <Route exact path='/profile' component={Profile} />
                        <Route path='/user' component={BoardUser} />
                        <Route path='/mod' component={BoardModerator} />
                        <Route path='/admin' component={BoardAdmin} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;
