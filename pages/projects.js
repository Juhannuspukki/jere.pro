import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Project from '../components/Project'
import UiDesign from '../svg/projects/uidesign.svg'
import Backend from '../svg/projects/backend.svg'
import Frontend from '../svg/projects/frontend.svg'
import Embedded from '../svg/projects/embedded.svg'


const Index = (props) => (
  <div className={"test"}>
    <NavBar/>
    <div className={"container projectContainer"}>
      {props.projects.map((project) => (
              <Project key={project.title} title={project.title} projectList={project.projectList}>
                {project.image}
              </Project>
      ))}
    </div>
    <Footer/>
  </div>
)

Index.getInitialProps = async function() {
  const data =
    [
      {
        title: "UI/UX design",
        image: <UiDesign className={"vectorLink"}/>,
        projectList:
          [
            {
              name: "jere.pro",
              link: "dotpro",
              external: "https://jere.pro",
              description: "I decided that I need a website of my own. It took years to decide what technologies to use " +
              "but I finally decided to try Next.js that has received a lot of praise recently. I also invested heavily " +
              "on adaptive design, making sure the site looks great on all devices."
            },
            {
              name: "Bachelor's thesis",
              link: "bsc",
              external: "unavailable",
              description: "During my time at Neuro Event Labs Oy I had the opportunity to design their fleet " +
              "management system. The design process is documented on my Bachelor's thesis. I was able to produce a " +
              "clear and aesthetically pleasing UI using the existing design language."
            }
          ]
        },
      {
        title: "Frontend",
        image: <Frontend className={"vectorLink"}/>,
        projectList:
          [
            {
              name: "neuroeventlabs.com",
              link: "nel",
              external: "https://neuroeventlabs.com",
              description: "Neuro Event Labs is a Finnish startup developing a video monitoring system for epilepsy " +
              "patients. During my time with them, one of my main duties was taking care of the company's public " +
              "website. I have now made three different versions of the website."
            },
            {
              name: "tamperedebatesociety.fi",
              link: "tds",
              external: "https://tamperedebatesociety.fi",
              description: "I have been part of the debate society for a few years now. Eventually, there were talks " +
              "about making a new website. The debate society had previously had at least 3, all of which were abandoned. " +
              "First, there was talk about Wordpress but I managed to convince them to trust my static site solution " +
              "instead. Due to the lack of UI designers, I also designed the site myself. All of us are very pleased " +
              "with the result. As a bonus, I installed the Netlify CMS to allow non-coders to update the site as well."
            },
            {
              name: "muistola.fi",
              link: "muistola",
              external: "https://muistola.fi",
              description: "Muistola is a small company in Teisko, Tampere focusing on new (or old?) ways of caring " +
              "for the elderly. I had the opportunity to work with them in 2018. I coded their website entirely by " +
              "myself according to the UI plans I received. I also became a .fi domain dealer in the process."
            }
          ]
      },
      {
        title: "Backend",
        image: <Backend className={"vectorLink"}/>,
        projectList:
          [
            {
              name: "@LogosTheBot on Telegram",
              link: "logos",
              external: "http://t.me/logosthebot",
              description: "Logos was my first software project. After learning Python for the very first time I " +
              "figured that I had to do something to keep up the knowledge. I started the development of a bot. " +
              "During all these years I have added several features to the bot, such as wayfinding services," +
              "nysse-locator services, a minesweeper game, information about the school's menus, weather forecasts and " +
              "so on and so forth."
            },
          ]
      },
      {
        title: "Embedded",
        image: <Embedded className={"vectorLink"}/>,
        projectList:
          [
            {
              name: "4D QR code",
              link: "qr",
              external: "unavailable",
              description: "I have not listed many school projects here because in the end everyone has to complete them. " +
              "However, this is one succeeded exceptionally well. The assignment was to design a product from a bunch" +
              "of LEDs controlled by a microcontroller. I came up with the idea of a quick-read code (2-dimensional barcode) " +
              "This particular code changes every few milliseconds. Modern smartphone cameras capture up to 960 " +
              "frames per second. Hence the name: 2 spatial dimensions and the fourth (temporal) dimension."
            },
            {
              name: "FFT controlled LED",
              link: "led",
              external: "unavailable",
              description: "I used a Teensy 3.2 board (almost like an Arduino, but not quite) to make a device that " +
              "uses FFT to analyze music. The resulting information is then used to control a RGB LED in real time."
            },
          ]
      }
    ]

  return {
    projects: data
  }
}


export default Index
