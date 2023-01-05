import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Bread } from 'src/components/BreadCrumb'
import { Content } from 'src/components/Content'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Code } from 'src/components/Code'
import { Toggle } from 'src/components/Toggle'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Python Study1</title>
      </Head>     
      <Header/>
      <Bread/>
      <Content>
        <h1>python study1</h1>
        <h2>正規表現</h2>
        <p>
          次の標準ライブラリをインポートすることで正規表現を使える。
        </p>      
        <Code title={"インポート"}>
        import re
        </Code>
        <p>
          変数に格納後、出力してみる。<br />
          quotation３つで囲むことで、改行しても大丈夫。
        </p>
        <Code title={"コンテンツ"}>
              content = """<br /> 
              name: kishiro<br /> 
              address: kishirolab@gmail.com<br /> 
              address: kishirolab2@gmail.com<br /> 
              url: https://japanese-rooster.com/<br /> 
              """<br /> 
              print(content)<br />
              # output<br />
              name: kishiro<br />
              address: kishirolab@gmail.com<br />
              address: kishirolab2@gmail.com<br />
              url: https://japanese-rooster.com/
        </Code>
        <Toggle title={"click me"}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, voluptates numquam voluptate necessitatibus quaerat voluptatum blanditiis quis magnam harum quam, hic aspernatur expedita repudiandae est ipsum deserunt cumque eveniet dolore!
          Corrupti maxime deleniti quae, dolores dolorem ad minus eaque eos at earum temporibus cum fugiat, molestiae optio rem aspernatur quia veniam! Nihil sit sunt dignissimos error optio provident at quas.
          <Code title={"コンテンツ"}>
              content = """<br /> 
              name: kishiro<br /> 
              address: kishirolab@gmail.com<br /> 
              address: kishirolab2@gmail.com<br /> 
              url: https://japanese-rooster.com/<br /> 
              """<br /> 
              print(content)<br />
              # output<br />
              name: kishiro<br />
              address: kishirolab@gmail.com<br />
              address: kishirolab2@gmail.com<br />
              url: https://japanese-rooster.com/
        </Code>
          Ipsa repudiandae quisquam cupiditate fuga, tenetur qui nulla unde totam hic quasi at expedita excepturi cum rem quam. Quis labore sequi voluptatem provident, obcaecati praesentium laborum beatae facilis. Facere, tempore.</p>
        </Toggle>
          
        <Toggle title="こんにちは！">
        <p>
          Pariatur impedit id rem illo, aperiam suscipit soluta incidunt optio, saepe quod iusto ratione, est minima placeat. Velit, laudantium. Aut qui facilis sequi animi iste laboriosam eius id quae eaque.
          Quaerat laborum fugit obcaecati delectus minus deserunt praesentium rem voluptas aspernatur nobis velit dolorum ab ipsa possimus esse a tempore, magni veritatis quos sed animi. Tenetur soluta ad enim cum.
          Consectetur cum similique culpa molestiae sunt magnam impedit enim, vel, mollitia maiores esse expedita? Animi eius optio et eos labore, nam iste quidem maiores rerum fugiat accusamus dolorem, assumenda cum!
          Voluptates natus quisquam eligendi delectus est atque magnam eos repudiandae. Nam, facere sint. Ipsa soluta expedita, maxime quod accusantium, doloribus nulla voluptates vero magnam, facilis aliquid atque illo voluptate vel!
          Animi iusto odio doloribus earum facere non sed assumenda eveniet sapiente, sit illo id ullam? Mollitia nulla quas optio, exercitationem fuga ad dolorum, a modi, laudantium velit voluptatum sit aliquid!
        </p>

        </Toggle>
        
      </Content>
      <Footer/>
      
    </>
  )
}