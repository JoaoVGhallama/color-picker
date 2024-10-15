'use client'
import './styles.css'

import { useState } from "react";
import {HexColorPicker} from "react-colorful"
import {theme as defaultTheme} from './assets/themes'
import {ThemeProvider, DefaultTheme} from 'styled-components'
import {darken, lighten} from 'polished'


export default function Home() {
  const [newColor, setNewColor] = useState('#aabbcc')
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme)

  const handleColorChange =() => {

    
    const lighterSecondary = lighten(0.3, newColor)
    const darkerBg= darken(0.3, newColor)
    
    setTheme((prevTheme) => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        primary: newColor, 
        secondary: lighterSecondary,
        background: darkerBg,
      }
    }))
  }
    
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="container">
      <div className="color_input">
        <ul className="input_ul">
          <li>
            <h2>HEX</h2>
            <input type="text" name="" id="" />
          </li>
          <li>
            <h2>RGB</h2>
            <input type="text" name="" id="" />
          </li>
          <li>
            <h2>HSL</h2>
            <input type="text" name="" id="" />
          </li>
          <li>
            <button onClick={handleColorChange}>Mudar</button>
            </li> 
        </ul>
      </div>
    <HexColorPicker color ={newColor} onChange={setNewColor}/>
    <div style={{color: theme.colors.primary}}>HELLO</div>
    <div style={{color: theme.colors.secondary}}>HELLO</div>
    </div>
    </ThemeProvider>
    </>
  );
}
