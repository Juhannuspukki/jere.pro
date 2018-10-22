import Header from '../components/Header'

const Index = () => (
  <div>
    <Header />
    <div className={"about"}>
      <div className={"container"}>
        <img className={"parsta"} src={"/static/img/hero.jpeg"}/>
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
  </div>
)

export default Index
