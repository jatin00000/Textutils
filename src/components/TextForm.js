import React, { useState } from "react";

export default function TextForm(props) {
    const [Text, setText] = useState("");

    // Creating a arrow click function
    const handleUpClick = () => {
        //to change always create a new variable and then update
        var a = Text.toUpperCase();
        setText(a);
        // This is way of using the function passed through props
        props.showalert("Converted to UpperCase", "success");
    };
    const handleloClick = () => {
        //to change always create a new variable and then update
        var a = Text.toLowerCase();
        setText(a);
        props.showalert("Converted to LowerCase", "success");
    };
    const handleClearClick = () => {
        //to change always create a new variable and then update
        setText("");
        props.showalert("Text Cleared", "success");
    };

    const handleExtraSpaces = () => {
        let newtext = Text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Removed Extra Space.", "success");
    };
    //receive through event
    const handleOnChange = (event) => {
        //update value through setText function by event.target.value
        setText(event.target.value);
    };
    return (
        <>
            <div className="container" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>
                <h2>{props.heading}</h2>
                <div className="my-3">
                    {/* Here my-3 adds */}

                    {/* setting value to be displayed by textarea to be text */}
                    <textarea
                        className="form-control"
                        value={Text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.Mode === 'dark' ? 'grey' : 'white', color: props.Mode === 'dark' ? 'white' : '#042743' }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                    {/* to allow input invoke function through 'onChange' */}
                    {/* Provoke this function on click */}
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                {/* mx-2 means margin of 2px in x-axis */}
                <button className="btn btn-primary mx-2" onClick={handleloClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container my-3" style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                {/* Words can be calculated by splitting Text variable with space and taking its length */}
                <p>
                    {Text.split(" ").length} words and {Text.length} characters
                </p>
                <p>{Text.split(" ").length * 0.008} Minutes to read</p>
            </div>
        </>
    );
}
