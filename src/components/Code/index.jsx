import classes from "src/components/Code/Code.module.css"

export const Code = (props) => {
  return(
    <div className={classes.code}>
    <span className={classes.title}>
      {props.title}
    </span>
    <pre><code>
      {props.children}
    </code></pre>
    </div>
  )
}