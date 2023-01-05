import { Annie_Use_Your_Telescope, Aref_Ruqaa } from "@next/font/google";
import { useCallback, useState } from "react";
import classes from "src/components/Code/Code.module.css"

export const Code = (props) => {
  const [text, setText] = useState("");

  const arrayToText = useCallback((array) => {
    let newtext = ""
    array.map((el) => {
      if(typeof el === "string"){
        newtext += el;
      } else {
        newtext += "\n"
      }
    })
    return newtext;
  },[text])

  const handleClick = useCallback(() => {
    let copy = "";
    if(Array.isArray(props.children)){
      copy = arrayToText(props.children);
    } else {
      copy = props.children;
    }
    setText(copy);
    console.log(Array.isArray(copy));
    copyTextToClipboard(copy);
  }, [text])

  const copyTextToClipboard = useCallback((text) => {
    if(navigator.clipboard) {
      return navigator.clipboard.writeText(text)
      .then(function() {
        console.log("success!");
      }, function(err){
        console.error("Error",err);
      });
    }
  }, [text])

  return(
    <div className={classes.code}>
    <span className={classes.title}>
      {props.title}
    </span>
    <button onClick={handleClick}>click me</button>
    <pre><code>
    
      {props.children}
    </code></pre>
    </div>
  )
}
