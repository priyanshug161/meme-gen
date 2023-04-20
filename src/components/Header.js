import trolllogo from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trolllogo} 
                className="header--image"
                alt="imagelol"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project</h4>
        </header>
    )
}