import classes from 'src/components/Content/Content.module.css'

export const Content = (props) => {
  return(
    <div className={classes.content}>
    <main>
      {props.children}
    </main>
      <div className={classes.sidebar}>
        ここはサイドバー
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet ea, vitae minus architecto asperiores reprehenderit! Facere, accusantium illum fuga atque doloremque excepturi rem molestiae magni aspernatur, assumenda deleniti? Impedit?
        Nisi iste soluta reprehenderit laboriosam iure doloribus minima suscipit? Expedita numquam quod nulla, fugit corporis vitae sequi facere doloremque, nesciunt rerum possimus iure? Iste nostrum mollitia accusamus, sit quisquam explicabo.
        Accusantium blanditiis minima facilis nisi perspiciatis, nihil alias sapiente modi explicabo eligendi repudiandae eum cumque eaque similique quo iure distinctio ullam ipsa autem? Alias molestias illo deleniti nesciunt qui aperiam.
      </div>
    </div>
  )
}