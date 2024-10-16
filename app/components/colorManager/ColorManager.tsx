'use client'

import { useState } from 'react';
import ColorPicker from '../colorPicker/colorPicker';
import ColorPreview from '../colorPreview/colorPreview';

export function ColorManager() {
    const [selectedColor, setSelectedColor] = useState('#aabbcc');

    const handleColorChange = (newColor : any) => {
        setSelectedColor(newColor);
    };

    return (
        <div style={{display: 'flex',gap: '1rem'}}>
            <ColorPicker onColorChange={handleColorChange} />
            <ColorPreview colors={selectedColor} />
        </div>
    );
}

export default ColorManager;