import React from 'react'

import UiDesign from '../svg/projects/uidesign.svg'
import Backend from '../svg/projects/backend.svg'
import Frontend from '../svg/projects/frontend.svg'
import Embedded from '../svg/projects/embedded.svg'

import Affinity from '../svg/graphsymbols/affinity.svg'
import Sketch from '../svg/graphsymbols/sketch.svg'
import AutoCad from '../svg/graphsymbols/autocad.svg'
import SolidWorks from '../svg/graphsymbols/solidworks.svg'
import Hotjar from '../svg/graphsymbols/hotjar.svg'

import Reactjs from '../svg/graphsymbols/react.svg'
import Nextjs from '../svg/graphsymbols/nextjs.svg'
import HTML5 from '../svg/graphsymbols/html.svg'
import JavaScript from '../svg/graphsymbols/javascript.svg'
import Css3 from '../svg/graphsymbols/css3.svg'
import Sass from '../svg/graphsymbols/sass.svg'
import Webpack from '../svg/graphsymbols/webpack.svg'
import Angular from '../svg/graphsymbols/angular.svg'
import Vuejs from '../svg/graphsymbols/vuejs.svg'

import Python from '../svg/graphsymbols/python.svg'
import Docker from '../svg/graphsymbols/docker.svg'
import Swift from '../svg/graphsymbols/swift.svg'
import Java from '../svg/graphsymbols/java.svg'
import PostgreSQL from '../svg/graphsymbols/postgresql.svg'
import Nodejs from '../svg/graphsymbols/nodejs.svg'
import GraphQL from '../svg/graphsymbols/graphql.svg'
import Php from '../svg/graphsymbols/php.svg'
import AWS from '../svg/graphsymbols/aws.svg'

import C from '../svg/graphsymbols/c.svg'
import CPlusPlus from '../svg/graphsymbols/c++.svg'

const data =
  {
    projects:
      [
        {
          title: "UI/UX design",
          link: "design",
          skills: [
            [80,65, "Affinity", <Affinity/>],
            [90,80, "Sketch", <Sketch/>],
            [50,65, "AutoCad", <AutoCad/>],
            [20,10, "SolidWorks", <SolidWorks/>],
            [80,50, "Hotjar", <Hotjar/>],
          ],
          description: "User interface (UI) design is the art of designing computer systems that do not cause " +
            "excessive frustration to the user. User experience (UX) research is the skill of figuring out which " +
            "UI elements cause frustration and how. It generally involves interviews, questionnaires and observation " +
            "of users in their natural habitat. I currently study human-technology interaction in Tampere " +
            "University of Technology.",
          image: <UiDesign className={"vectorLink"}/>,
          projectList:
            [
              {
                name: "jere.pro",
                link: "dotpro-design",
                external: "https://jere.pro",
                techStack: [{icon: <Affinity/>, text: "Affinity"}, {icon: <Sketch/>, text: "Sketch"}],
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
                techStack: [{icon: <Affinity/>, text: "Affinity"}],
                description: "During my time at Neuro Event Labs Oy I had the opportunity to design their fleet " +
                "management system. The design process is documented on my Bachelor's thesis. I was able to produce a " +
                "clear and aesthetically pleasing UI using the existing design language."
              },
              {
                name: "avaruuskerho.fi",
                link: "avaruuskerho-design",
                external: "https://avaruuskerho.fi",
                github: "https://github.com/castortut/castor-web",
                techStack: [{icon: <Affinity/>, text: "Affinity"}],
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
            [95,70, "React.js", <Reactjs/>],
            [95, 55, "Next.js", <Nextjs/>],
            [80,95, "CSS", <Css3/>],
            [60, 60, "JavaScript", <JavaScript/>],
            [95, 95, "HTML5", <HTML5/>],
            [95,80, "Sass", <Sass/>],
            [40,30, "Webpack", <Webpack/>],
            [20,10, "Angular", <Angular/>],
            [90,0, "Vue.js", <Vuejs/>],
          ],
          description: "Frontend development is the art of programming user interfaces designed by a UI designer. " +
          "Unlike backend, frontend is a piece of software that runs on the end user's device. For example, this " +
          "website runs entirely on your web browser making it a frontend web app. I consider myself to be a " +
          "frontend developer first and foremost, and I have undertaken many frontend projects.",
          image: <Frontend className={"vectorLink"}/>,
          projectList:
            [
              {
                name: "jere.pro",
                link: "dotpro",
                external: "https://jere.pro",
                github: "https://github.com/Juhannuspukki/jere.pro",
                techStack: [{icon: <Nextjs/>, text: "Next.js"}, {icon: <Sass/>, text: "Sass"}, {icon: <HTML5/>, text: "HTML"}],
                description: "I decided that I need a website of my own. It took way too long to decide what technologies " +
                "to use but I finally decided to try Next.js that has received a lot of praise recently. " +
                "The result is the very fast SPA you see before you. Behold!"
              },
              {
                name: "pollex.club",
                link: "pollex",
                external: "https://pollex.club",
                github: "https://github.com/Juhannuspukki/pollex-web",
                techStack: [{icon: <Sass/>, text: "Sass"}, {icon: <HTML5/>, text: "HTML"}, {icon: <Nodejs/>, text: "Node.js"}, {icon: <AWS/>, text: "AWS"}],
                description: "Pollex.club was the first website I created after neuroeventlabs.com. Its design is " +
                "slightly dated, but it runs on the same victor-hugo generator as all of my newer static site projects. " +
                "During this project I also learned to use AWS, for it was originally hosted there."
              },
              {
                name: "koodarinpalkka.fi",
                link: "koodarinpalkka",
                external: "https://koodarinpalkka.fi",
                github: "unavailable",
                techStack: [{icon: <Reactjs/>, text: "React"}, {icon: <Sass/>, text: "Sass"}, {icon: <HTML5/>, text: "HTML"}],
                description: "In early 2019 Sysart contacted me. They wanted to increase their salary transparency and " +
                  "I designed and implemented a React application that lets anyone to see what they would earn at " +
                  "Sysart. Try it!"
              },
              {
                name: "neuroeventlabs.com",
                link: "nel",
                external: "https://neuroeventlabs.com",
                github: "unavailable",
                techStack: [{icon: <Sass/>, text: "Sass"}, {icon: <Css3/>, text: "CSS"}, {icon: <HTML5/>, text: "HTML"}, {icon: <Nodejs/>, text: "Node.js"}],
                description: "Neuro Event Labs is a Finnish startup developing a video monitoring system for epilepsy " +
                "patients. During my time with them, one of my main duties was taking care of the company's public " +
                "website. I have now made three different versions of the website. The latest revision was also one of my" +
                  "first projects using Sass instead of plain CSS."
              },
              {
                name: "tamperedebatesociety.fi",
                link: "tds",
                external: "https://tamperedebatesociety.fi",
                github: "https://github.com/Juhannuspukki/tampere-debate-society-web",
                techStack: [{icon: <Sass/>, text: "Sass"}, {icon: <HTML5/>, text: "HTML"}, {icon: <Nodejs/>, text: "Node.js"}],
                description: "I have been part of the debate society for three years now. Eventually, there were talks " +
                "about making a new website. The debate society had previously had at least three, all of which were abandoned. " +
                "First, there was talk about WordPress but I managed to convince them to trust my static site solution " +
                "instead. Due to the lack of UI designers, I also designed the site myself. All of us are very pleased " +
                "with the result. As a bonus, I installed the Netlify CMS to allow non-coders to update the site as well."
              },
              {
                name: "course-o-meter.com",
                link: "course-o-meter",
                external: "https://course-o-meter.com",
                github: "https://github.com/Juhannuspukki/project-daydream",
                techStack: [{icon: <Reactjs/>, text: "React"}, {icon: <Sass/>, text: "Sass"}, {icon: <HTML5/>, text: "HTML"}, {icon: <Python/>, text: "Python"}],
                description: "29th of October, 2018. After taking a course which had mandatory lectures that lasted for 20 minutes " +
                  "instead of the scheduled two hours, a lecturer who barely spoke English and very poor communication from the " +
                  "course personnel I started going through the course feedback in the university's systems. On the scale of zero " +
                  "to five students had given this course a 3. As a matter of fact about 94% of courses seemed to have a grade " +
                  "between 3 and 4.5. I reinvented the scale."
              },
              {
                name: "avaruuskerho.fi",
                link: "avaruuskerho",
                external: "https://avaruuskerho.fi",
                github: "https://github.com/castortut/castor-web",
                techStack: [{icon: <Sass/>, text: "Sass"}, {icon: <HTML5/>, text: "HTML"}, {icon: <Nodejs/>, text: "Node.js"}],
                description: "I serve on the board of Tampereen teekkarien avaruusteknillinen kerho Castor ry in 2019. " +
                  "During that time, it was my duty to create a new website for the club. It is a static site based on the " +
                  "Netlify victor-hugo project and also features the Netlify CMS to allow easy content editing."
              },
              {
                name: "muistola.fi",
                link: "muistola",
                external: "https://muistola.fi",
                github: "https://github.com/Juhannuspukki/muistola-web",
                techStack: [{icon: <Sass/>, text: "Sass"}, {icon: <HTML5/>, text: "HTML"}, {icon: <Nodejs/>, text: "Node.js"}],
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
            [70,90, "Python", <Python/>],
            [95,30, "Docker", <Docker/>],
            [95,15, "Swift", <Swift/>],
            [0,0, "Java", <Java/>],
            [10,0, "Php", <Php/>],
            [70,40, "PostgreSQL", <PostgreSQL/>],
            [75,25, "Node.js", <Nodejs/>],
            [80,0, "GraphQL", <GraphQL/>],
            [40,25, "AWS", <AWS/>],
          ],
          description: "Backend servers are used to store content and perform complex operations for it. A backend can " +
            "be thought as a black box with stuff going in, to which operations are performed and as a result " +
            "stuff comes out. Backend code is what determines what exactly is allowed to go in and what operations are " +
            "performed on it. Average user never accesses backends directly, since they only deal with machine " +
            "language. Instead, users use a frontend which communicates with the backend. I have developed several Python " +
            "backends for Telegram bots.",
          image: <Backend className={"vectorLink"}/>,
          projectList:
            [
              {
                name: "@LogosTheBot on Telegram",
                link: "logos",
                external: "http://t.me/logosthebot",
                github: "https://github.com/Juhannuspukki/LogosTheBot",
                techStack: [{icon: <Python/>, text: "Python"}],
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
                techStack: [{icon: <Python/>, text: "Python"}, {icon: <Docker/>, text: "Docker"}],
                description: "CourseRobot is Python-made Telegram bot that brings the functionality of Course-O-Meter " +
                  "directly to Telegram. It is also my first project using Docker. The app is an inline bot, so " +
                  "it can be accessed from any chat."
              },
            ]
        },
        {
          title: "Embedded",
          link: "embedded",
          skills: [
            [40,70, "C", <C/>],
            [10,50, "C++", <CPlusPlus/>],
          ],
          description: "Embedded systems are devices that combine both hardware and software. Probably the most " +
            "famous example of this are Arduino boards. Playing with Arduino's is fun, but my interests have steered me " +
            "towards higher-level languages.",
          image: <Embedded className={"vectorLink"}/>,
          projectList:
            [
              {
                name: "4D QR code",
                link: "qr",
                external: "unavailable",
                github: "https://github.com/Juhannuspukki/led-matrix",
                techStack: [{icon: <C/>, text: "C"}],
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
                techStack: [{icon: <C/>, text: "C"}, {icon: <CPlusPlus/>, text: "C++"}],
                description: "I used a Teensy 3.2 board (almost like an Arduino, but not quite) to make a device that " +
                  "uses FFT to analyze music. The resulting information is then used to control a RGB LED in real time. " +
                  "Yeah, I know the video doesn't look like much without the audio track. Sorry."
              },
            ]
        }
      ]
  };

export default data
