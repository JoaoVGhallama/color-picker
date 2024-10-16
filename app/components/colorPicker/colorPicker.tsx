'use client'

import { useState } from "react";
import { HexColorPicker } from "react-colorful"
import { theme as defaultTheme } from '../../assets/themes'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { darken, lighten } from 'polished'

// Importando os Styled Components
import { Container, ColorInput, InputUl, ButtonTheme } from './styles'

export function ColorPicker({ onColorChange }: { onColorChange: (colors: {
  primary: string,
  secondary: string,
  background: string
}) => void }) {
  const [newColor, setNewColor] = useState('#aabbcc')
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme)

  const handleColorChange = () => {
    const lighterSecondary = lighten(0.2, newColor)
    const darkerBg = darken(0.1, newColor)
    
    const updatedColors = {
      primary: newColor,
      secondary: lighterSecondary,
      background: darkerBg,
    }
    
    setTheme((prevTheme) => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        ...updatedColors
      }
    }))
    onColorChange(updatedColors);
  }
    
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ColorInput>
          <InputUl>
            <li>
              <h2>HEX</h2>
              <input type="text" value={newColor} onChange={(e) => setNewColor(e.target.value)}/>
            </li>
            <li>
              <ButtonTheme onClick={handleColorChange}>Aplicar tema</ButtonTheme>
            </li> 
          </InputUl>
        </ColorInput>
        <HexColorPicker color={newColor} onChange={setNewColor}/>
      </Container>
    </ThemeProvider>
  );
}

export default ColorPicker;
