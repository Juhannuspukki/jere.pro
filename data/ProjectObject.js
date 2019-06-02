import UiDesign from '../svg/projects/uidesign.svg'
import Backend from '../svg/projects/backend.svg'
import Frontend from '../svg/projects/frontend.svg'
import Embedded from '../svg/projects/embedded.svg'
import React from 'react'


const data =
  {
    projects:
      [
        {
          title: "UI/UX design",
          link: "design",
          skills: [
            [80,65, "Affinity", '../static/graphsymbols/affinity.svg'],
            [90,80, "Sketch", '../static/graphsymbols/sketch.svg'],
            [50,65, "AutoCad", '../static/graphsymbols/autocad.svg'],
            [20,10, "SolidWorks", '../static/graphsymbols/solidworks.svg'],
          ],
          description: "User interface (UI) design is the art of designing computer systems that do not cause " +
            "excessive frustration to the user. User experience (UX) research is the skill of figuring out which " +
            "UI elements cause frustration and how. It generally involves interviews, questionnaires and observation " +
            "of users in their natural habitat.",
          image: <UiDesign className={"vectorLink"}/>,
          projectList:
            [
              {
                name: "jere.pro",
                link: "dotpro-design",
                external: "https://jere.pro",
                github: "https://github.com/Juhannuspukki/jere.pro",
                description: "Before starting my own website project, I used Affinity Designer to draw UI sketches. " +
                  "It turned out to be a good decision, since arranging components on a website is a lot easier in " +
                  "Affinity than HTML."
              },
              {
                name: "Bachelor's thesis",
                link: "bsc",
                external: "https://dspace.cc.tut.fi/dpub/handle/123456789/27191",
                github: "unavailable",
                description: "During my time at Neuro Event Labs Oy I had the opportunity to design their fleet " +
                "management system. The design process is documented on my Bachelor's thesis. I was able to produce a " +
                "clear and aesthetically pleasing UI using the existing design language."
              },
              {
                name: "avaruuskerho.fi",
                link: "avaruuskerho-design",
                external: "https://avaruuskerho.fi",
                github: "https://github.com/castortut/castor-web",
                description: "Before writing the actual code on avaruuskerho.fi I drew mockups, experimented with " +
                "different designs and ran them through the board. I was able to come up with a rather spacey design," +
                "don't you think?"
              }
            ]
        },
        {
          title: "Frontend",
          link: "frontend",
          skills: [
            [95,70, "React.js", '../static/graphsymbols/react.svg'],
            [95, 55, "Next.js", '../static/graphsymbols/nextjs.svg'],
            [80,95, "CSS", '../static/graphsymbols/css3.svg'],
            [60, 60, "JavaScript", '../static/graphsymbols/javascript.svg'],
            [95, 95, "HTML5", '../static/graphsymbols/html.svg'],
            [95,80, "Sass", '../static/graphsymbols/sass.svg'],
            [70,30, "Webpack", '../static/graphsymbols/webpack.svg'],
            [20,10, "Angular", '../static/graphsymbols/angular.svg'],
            [90,0, "Vue.js", '../static/graphsymbols/vuejs.svg'],
          ],
          description: "Frontend development is the art of programming user interfaces designed by a UI designer. " +
          "Unlike backend, frontend is a piece of software that runs on the end user's device. For example, this " +
          "website runs entirely on your web browser making it a frontend web app.",
          image: <Frontend className={"vectorLink"}/>,
          projectList:
            [
              {
                name: "jere.pro",
                link: "dotpro",
                external: "https://jere.pro",
                github: "https://github.com/Juhannuspukki/jere.pro",
                description: "I decided that I need a website of my own. It took way too long to decide what technologies " +
                "to use but I finally decided to try Next.js that has received a lot of praise recently. " +
                "The result is a very fast PWA."
              },
              {
                name: "pollex.club",
                link: "pollex",
                external: "https://pollex.club",
                github: "https://github.com/Juhannuspukki/pollex-web",
                description: "Pollex.club was the first website I created after neuroeventlabs.com. Its design is " +
                "slightly dated, but it runs on the same victor-hugo generator as all of my newer static site projects. " +
                "During this project I also learned to use AWS, for it was originally hosted there."
              },
              {
                name: "neuroeventlabs.com",
                link: "nel",
                external: "https://neuroeventlabs.com",
                github: "unavailable",
                description: "Neuro Event Labs is a Finnish startup developing a video monitoring system for epilepsy " +
                "patients. During my time with them, one of my main duties was taking care of the company's public " +
                "website. I have now made three different versions of the website."
              },
              {
                name: "tamperedebatesociety.fi",
                link: "tds",
                external: "https://tamperedebatesociety.fi",
                github: "https://github.com/Juhannuspukki/tampere-debate-society-web",
                description: "I have been part of the debate society for a few years now. Eventually, there were talks " +
                "about making a new website. The debate society had previously had at least 3, all of which were abandoned. " +
                "First, there was talk about Wordpress but I managed to convince them to trust my static site solution " +
                "instead. Due to the lack of UI designers, I also designed the site myself. All of us are very pleased " +
                "with the result. As a bonus, I installed the Netlify CMS to allow non-coders to update the site as well."
              },
              {
                name: "course-o-meter.com",
                link: "course-o-meter",
                external: "https://course-o-meter.com",
                github: "https://github.com/Juhannuspukki/project-daydream",
                description: "After a particularly annoying university course I created the Course-o-Meter, a project " +
                "that compares university courses against each other. A must-have tool for planning your studies! " +
                "The app is a static React.js export that is hosted on Netlify."
              },
              {
                name: "avaruuskerho.fi",
                link: "avaruuskerho",
                external: "https://avaruuskerho.fi",
                github: "https://github.com/castortut/castor-web",
                description: "I serve on the board of Tampereen teekkarien avaruusteknillinen kerho Castor ry in 2019. " +
                "During that time, it was my duty to create a new website for the club. It is a static site based on the " +
                "Netlify victor-hugo project and also features the Netlify CMS to allow easy content editing."
              },
              {
                name: "muistola.fi",
                link: "muistola",
                external: "https://muistola.fi",
                github: "https://github.com/Juhannuspukki/muistola-web",
                description: "Muistola is a small company in Teisko, Tampere focusing on new (or old?) ways of caring " +
                "for the elderly. I had the opportunity to work with them in 2018. I coded their website entirely by " +
                "myself according to the UI plans I received. I also became a .fi domain dealer in the process."
              }
            ]
        },
        {
          title: "Backend",
          link: "backend",
          skills: [
            [70,90, "Python", '../static/graphsymbols/python.svg'],
            [95,30, "Docker", '../static/graphsymbols/docker.svg'],
            [95,15, "Swift", '../static/graphsymbols/swift.svg'],
            [0,0, "Java", '../static/graphsymbols/java.svg'],
            [70,40, "PostgreSQL", '../static/graphsymbols/postgresql.svg'],
            [75,25, "Node.js", '../static/graphsymbols/nodejs.svg'],
            [90,0, "GraphQL", '../static/graphsymbols/graphql.svg'],

          ],
          description: "Backend servers are used to store data and perform complex operations for it. A backend can " +
          "be thought as a black box with stuff going in, to which operations are performed and as a result " +
          "stuff comes out. Backend code is what determines what exactly is allowed to go in and what operations are " +
          "performed on it. Average user never accesses backends directly, since they only deal with machine " +
          "language. Instead, users use a frontend which communicates with the backend.",
          image: <Backend className={"vectorLink"}/>,
          projectList:
            [
              {
                name: "@LogosTheBot on Telegram",
                link: "logos",
                external: "http://t.me/logosthebot",
                github: "https://github.com/Juhannuspukki/LogosTheBot",
                description: "Logos was my first software project. After learning Python for the very first time I " +
                "figured that I had to do something to keep up the knowledge. I started the development of a bot. " +
                "During all these years I have added several features to the bot, such as wayfinding services," +
                "nysse-locator services, a minesweeper game, information about the school's menus, weather forecasts and " +
                "so on and so forth."
              },
              {
                name: "@CourseRobot on Telegram",
                link: "courserobot",
                external: "http://t.me/courserobot",
                github: "https://github.com/Juhannuspukki/project-daydream-telegram",
                description: "CourseRobot is Python-made Telegram bot that brings the functionality of Course-O-Meter " +
                  "directly to Telegram."
              },
            ]
        },
        {
          title: "Embedded",
          link: "embedded",
          skills: [
            [40,70, "C", '../static/graphsymbols/c.svg'],
            [10,50, "C++", '../static/graphsymbols/c++.svg'],
          ],
          description: "Embedded systems are devices that combine both hardware and software. Probably the most " +
          "famous example of this are Arduino boards.",
          image: <Embedded className={"vectorLink"}/>,
          projectList:
            [
              {
                name: "4D QR code",
                link: "qr",
                external: "unavailable",
                github: "https://github.com/Juhannuspukki/led-matrix",
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
                github: "https://github.com/Juhannuspukki/arduino-fft",
                description: "I used a Teensy 3.2 board (almost like an Arduino, but not quite) to make a device that " +
                "uses FFT to analyze music. The resulting information is then used to control a RGB LED in real time."
              },
            ]
        }
      ]
  }

export default data
