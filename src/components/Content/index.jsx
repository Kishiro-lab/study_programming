import classes from 'src/components/Content/Content.module.css'

export const Content = (props) => {
  return(
    <div className={classes.content}>
    <main>
      {props.children}
    </main>
      <div className={classes.sidebar}>
        <p>プロフィールなど</p>
        <p>目次</p>
      </div>
    </div>
  )
}