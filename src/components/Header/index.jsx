import Image from 'next/image'
import classes from "src/components/Header/Header.module.css"


export const Header = () => {
  return(
    <header className={classes.header}>
      <Image
        src="/logo2.png"
        alt="Kishiro Lab"
        width={300}
        height={72}
        priority
      />
    </header>
  )
}