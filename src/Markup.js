import React,{useState} from "react";
import "./Style.css"

import ReactMarkdown from "react-markdown"


const Markup =()=>{

    const [markupState, setMarkup] = useState("Markdown");
    

    
    return(
        <div className="markdown_container">
            <textarea value={markupState}
            onChange={(e)=>setMarkup(e.target.value)}>   
            </textarea>

            <ReactMarkdown source={markupState} className="markdown_preview"/>
        </div>


    )


}
export default Markup;
