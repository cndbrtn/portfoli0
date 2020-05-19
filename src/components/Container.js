import React, { useState } from 'react';
import { ContWrapper, GrnBtn } from '../style'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export const Container = () => {
    const [clicked, setClicked] = useState({
        click: ''
    });

    const handleClick = ({ target }) => {
        // console.log('event target', e.target.value)
        setClicked({
            click: target.value
        })
    }

    console.log('state', clicked)
    const { click } = clicked
    
    if (click === 'about') {
        return (
            <ContWrapper>
                <div>
                    <h1>ACCESSING DATABASE: CND BRTN</h1>
                </div>
                <div>
                    <GrnBtn value="about" onClick={handleClick}>ABOUT</GrnBtn>
                    <GrnBtn value="portfolio" onClick={handleClick}>PORTFOLIO</GrnBtn>
                    <GrnBtn value="contact" onClick={handleClick}>CONTACT</GrnBtn>
                </div>
                <About />
            </ContWrapper>
        )
    } else if (click === 'portfolio') {
        return (
            <ContWrapper>
            <div>
                <h1>ACCESSING DATABASE: PORTFOLIO</h1>
            </div>
            <div>
                <GrnBtn value="about" onClick={handleClick}>ABOUT</GrnBtn>
                <GrnBtn value="portfolio" onClick={handleClick}>PORTFOLIO</GrnBtn>
                <GrnBtn value="contact" onClick={handleClick}>CONTACT</GrnBtn>
            </div>
            <Portfolio />
            </ContWrapper>
        )
    } else if (click === 'contact') { 
        return (
            <ContWrapper>
                <div>
                    <h1>ACCESSING DATABASE: CONTACT</h1>
                </div>
                <div>
                    <GrnBtn value="about" onClick={handleClick}>ABOUT</GrnBtn>
                    <GrnBtn value="portfolio" onClick={handleClick}>PORTFOLIO</GrnBtn>
                    <GrnBtn value="contact" onClick={handleClick}>CONTACT</GrnBtn>
                </div>
                <Contact />
            </ContWrapper>
        )
    } else {
        return (
            <ContWrapper>
                <div>
                    <h1>ACCESS DATABASE:</h1>
                </div>
                <div>
                    <GrnBtn value="about" onClick={handleClick}>ABOUT</GrnBtn>
                    <GrnBtn value="portfolio" onClick={handleClick}>PORTFOLIO</GrnBtn>
                    <GrnBtn value="contact" onClick={handleClick}>CONTACT</GrnBtn>
                </div>
            </ContWrapper>
        )
    }
    
}