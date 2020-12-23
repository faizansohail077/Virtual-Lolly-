import { gql, useMutation } from "@apollo/client";
import React, { useRef, useState } from "react";
import Header from "../component/Header";
import Lolly from "../component/Lolly";

const GETDATA = gql`
{
    hello    
}
`
const createLollyMutation = gql`
mutation createLolly($recipientName:String!,$senderName:String!,$flavourTop:String!,$flavourMiddle:String!,$flavourBottom:String!,$message:String!){
    createLolly(recipientName:$recipientName,senderName:$senderName,flavourTop:$flavourTop,flavourMiddle:$flavourMiddle,flavourBottom:$flavourBottom,message:$message){
      lollyPath
      senderName
      recipientName
      message
    }
    }
`


export default function CreateNew() {
    const [flavourTop, setFlavourTop] = useState("#d52358")
    const [flavourMiddle, setFlavourMiddle] = useState("#deaa43")
    const [flavourBottom, setFlavourBottom] = useState("#e95946")
    const recipientNameRef = useRef()
    const messageRef = useRef()
    const senderRef = useRef()

    const [createLolly] = useMutation(createLollyMutation)
    const submit = async () => {
        console.log('clicked')
        console.log('color1', flavourTop)
        console.log('sender', senderRef.current.value)

        const result = await createLolly({
            variables: {
                recipientName: recipientNameRef.current.value,
                message: messageRef.current.value,
                senderName: senderRef.current.value,
                flavourTop: flavourTop,
                flavourMiddle: flavourMiddle,
                flavourBottom: flavourBottom
            }
        })
        console.log('results', result)
    }
    return (
        <div className="container">


            <Header />
            <div className="lollyForm">
                <div>
                    <Lolly
                        fillLollyTop={flavourTop}
                        fillLollyMiddle={flavourMiddle}
                        fillLollyBottom={flavourBottom}
                    />
                </div>
                <div className="lollyFlavor">
                    <label htmlFor="flavorTop" className="colorPickerLabel">
                        <input
                            type="color"
                            value={flavourTop}
                            className="colorPicker"
                            id="flavorTop"
                            name="flavorTop"
                            onChange={(e) => setFlavourTop(e.target.value)}
                        />
                    </label>
                    <label htmlFor="flavorTop" className="colorPickerLabel">
                        <input
                            type="color"
                            value={flavourMiddle}
                            className="colorPicker"
                            id="flavorTop"
                            name="flavorTop"
                            onChange={(e) => setFlavourMiddle(e.target.value)}
                        />
                    </label>
                    <label htmlFor="flavorTop" className="colorPickerLabel">
                        <input
                            type="color"
                            value={flavourBottom}
                            className="colorPicker"
                            id="flavorTop"
                            name="flavorTop"
                            onChange={(e) => setFlavourBottom(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <div className="lollyFrom">
                        <label htmlFor="recipientName">To</label>
                        <input type="text" name="recipientName" id="recipientName" ref={recipientNameRef} />
                        <label htmlFor="recipientName">Message</label>
                        <textarea rows="15" columns="30" ref={messageRef} />
                        <label htmlFor="recipientName">From</label>
                        <input type="text" ref={senderRef} name="senderName" id="recipientName" />
                    </div>
                    <input onClick={submit} type="button" value="click me" />
                </div>
            </div>
        </div>
    );
}

