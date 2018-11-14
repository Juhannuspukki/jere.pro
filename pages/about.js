import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Telegram from '../svg/about/tg.svg'
import GitHub from '../svg/about/git.svg'
import LinkedIn from '../svg/about/in.svg'
import Me from '../static/img/me.jpeg'

const Index = () => (
  <div>
    <NavBar/>
    <div className={"about"}>
      <div className={"container"}>
        <img className={"parsta"} src={Me}/>
        <h1>Jere Laine</h1>
        <a className={"phone"} href={"tel:+358458664303"}>+358 45 866 4303</a>
        <div className={"linkLogoContainer"}>
          <a className={"link"} href={"https://t.me/juhannuspukki"} target="_blank"><Telegram className={"linkLogo"}/></a>
          <a className={"link"} href={"https://www.linkedin.com/in/jjlaine/"} target="_blank"><LinkedIn className={"linkLogo"}/></a>
          <a className={"link"} href={"https://github.com/Juhannuspukki"} target="_blank"><GitHub className={"linkLogo"}/></a>
        </div>
        <p>
            I’m a 22-year-old Apple fanboy from Hervanta. Introverted, but I believe I have become more ambiverted
            over the years. I have quite many hobbies, including aquariums, debating, cooking, motion graphics,
            still graphics, coding apps in Swift, bots in Python and websites in, well, many languages. I occasionally
            try some embedded project as well. I like coding because it allows me to create anything I can imagine
            and boy, I can imagine a lot! Also, nothing beats the feeling you get when you try something new, overcome
            a difficult challenge for the first time and learn something in the process… except an apache helicopter.
            An apache helicopter is armed with machine guns and missiles; it’s an absolute death machine!
          </p>
      </div>
    </div>
    <Footer/>
  </div>
)

export default Index
