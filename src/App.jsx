import React from 'react';
import './components/card/suggestions.css'
import { Suggestions, Cards, Mask, Links, Roadmap } from './components/card/suggestions'

const App = () => {
    return(
        <div className="container flex">
            <div className='board'>
                <Mask/>
                <Links/>
                <Roadmap/>
            </div>

            <div className='res'>
                <Suggestions/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    )
}

export {App}