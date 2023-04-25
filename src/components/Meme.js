import React from 'react';
import memesData from "../memesData"

export default function Meme() {

    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [memeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray=memeImages.data.memes
        const randomNumber=Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : memesArray[randomNumber].url
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                  />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                  />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}