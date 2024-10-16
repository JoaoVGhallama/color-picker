import './styles.css';

interface ColorPreviewProps {
    colors: {
        primary: string,
        secondary: string,
        background: string
    }
}

export function ColorPreview({ colors }: ColorPreviewProps) {
    const colorItems = [
        { name: "Cor primária", color: colors.primary },
        { name: "Cor secundária", color: colors.secondary },
        { name: "Background", color: colors.background },
    ];

    return (
        <div className="color-preview-container">
            <ul className="color-list">
                {colorItems.map((item, index) => (
                    <li key={index} className="color-item">
                        <div className="color-square" style={{background: item.color}}></div>
                        <div className="color-info">
                            <h1 className="color-name">{item.name}</h1>
                            <p className="color-hex"><span>HEX</span>{item.color}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ColorPreview;
