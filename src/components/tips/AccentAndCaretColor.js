import React from 'react'

const AccentAndCaretColor = () => {
    return (
        <>
            <h1>Accent and Caret color</h1>
            <section id="accent-and-caret-color">
                <div className="checkbox-radio">
                    <input type="checkbox" id="checkbox" />
                    <input type="radio" name="radio" id="radio" />
                </div>
                <div className="slider">
                    <input type="range" min="0" max="100" value="40" />
                </div>
                <div className="slider">
                    <input type="range" min="0" max="100" value="60" />
                </div>
                <input type="text" className="text-box" placeholder="Enter Text" spellCheck="false" />
            </section>
        </>
    )
}

export default AccentAndCaretColor;