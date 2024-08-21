import React from 'react';
import './App.css';
import Header1 from './components/Header1/Header1';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { addPost } from './components/redux/state';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header1 />
            <Navbar />
            <div className='app-wrapper-content'>
            <Routes>
                <Route path="/dialogs" 
                   render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path="/profile" 
                   render={() => <Profile state={props.state.profilePage}addPost={addPost}/>}/>
            </Routes>
            </div>
        </div>
    );
}

export default App;
