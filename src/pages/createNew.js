import React, { useRef, useState } from "react";
import Header from "../component/Header";
import Lolly from "../component/Lolly";

export default function CreateNew() {
    const [color1,setColor1] = useState("#d52358")
    const [color2,setColor2] = useState("#deaa43")
    const [color3,setColor3] = useState("#e95946")
    const nameRef = useRef()
    const messageRef = useRef()
    const senderRef = useRef()
    const submit =()=>{
        console.log('clicked')
        console.log('color1',color1)
        console.log('color2',color2)
        console.log('color3',color3)
        console.log('nameref',nameRef.current.value)
        console.log('message',messageRef.current.value)
        console.log('sender',senderRef.current.value)
    }
    return (
        <div className="container">
            <Header />
            <div className="lollyForm">
                <div>
                    <Lolly
                        fillLollyTop={color1}
                        fillLollyMiddle={color2}
                        fillLollyBottom={color3}
                    />
                </div>
                <div className="lollyFlavor">
                    <label htmlFor="flavorTop" className="colorPickerLabel">
                        <input
                            type="color"
                            value={color1}
                            className="colorPicker"
                            id="flavorTop"
                            name="flavorTop"
                            onChange={(e)=>setColor1(e.target.value)}
                        />
                    </label>
                    <label htmlFor="flavorTop" className="colorPickerLabel">
                        <input
                            type="color"
                            value={color2}
                            className="colorPicker"
                            id="flavorTop"
                            name="flavorTop"
                            onChange={(e)=>setColor2(e.target.value)}
                        />
                    </label>
                    <label htmlFor="flavorTop" className="colorPickerLabel">
                        <input
                            type="color"
                            value={color3}
                            className="colorPicker"
                            id="flavorTop"
                            name="flavorTop"
                            onChange={(e)=>setColor3(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <div className="lollyFrom">
                        <label htmlFor="recipientName">To</label>
                        <input type="text" name="recipientName" id="recipientName" ref={nameRef} />
                        <label htmlFor="recipientName">Message</label>
                        <textarea rows="15" columns="30" ref={messageRef}></textarea>
                        <label htmlFor="recipientName">From</label>
                        <input type="text" ref={senderRef} name="recipientName" id="recipientName" />
                    </div>
                    <input onClick={submit} type="button" value="click me" />
                </div>
            </div>
        </div>
    );
}

