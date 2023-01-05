import { useCallback, useState } from "react";
import classes from "src/components/Toggle/Toggle.module.css"

export const Toggle = (props) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow)
  }, [])

  return(
    <div className={classes.toggle}>
      <div className={classes.title} onClick={handleClick}>{isShow ? " ▼ " : " ▲ "}{props.title}</div>
      {isShow ? <div className={classes.content}>{props.children}</div> : ""}
    </div>
  )
}