import React from 'react'


const data = {
  work: [
    {
      title: "Connector",
      yPosition: "0",
      xPosition: "left",
    },
    {
      title: "Connector",
      yPosition: "60",
      xPosition: "left",
    },
    {
      title: "Connector",
      yPosition: "70",
      xPosition: "right",
    },
    {
      title: "Mepu Oy",
      description: "My responsibilities included putting together dryer cells and inventorying the warehouse.",
      yPosition: "80",
      xPosition: "right",
      timeFrame: [
        {date: new Date("2017-07-1")},
        {date: new Date("2017-07-15")},
      ]
    },
    {
      title: "Intopalo Oy",
      description: "I learned web development, built the original Neuro Event Labs website and participated in " +
        "various meetings concerning marketing and leadership in a self-managing organization.",
      yPosition: "150",
      xPosition: "right",
      timeFrame: [
        {date: new Date("2017-05-22")},
        {date: new Date("2017-08-21")},
      ]
    },
    {
      title: "Neuro Event Labs Oy",
      description: "I worked as a part-time software developer during the winter and full-time during the summer. My " +
        "responsibilities included taking care of the company website, a static site generated with Hugo. I also " +
        "performed code review (Angular) and worked on my Bachelor's thesis (UI design).",
      yPosition: "250",
      xPosition: "right",
      timeFrame: [
        {date: new Date("2017-11-29")},
        {date: new Date("2018-09-30")},
      ]
    },
    {
      title: "Anders Innovations Oy",
      description: "My current job is related to UX research, UI drawings and frontend development.",
      yPosition: "300",
      xPosition: "right",
      timeFrame: [
        {date: new Date("2019-03-27")},
        {date: Date.now()},
      ]
    }
  ],
  education: [
    {
      title: "Connector",
      yPosition: "0",
      xPosition: "left",
    },
    {
      title: "High School",
      description: "I attended Säkylän Seudun Lukio and took eight matriculation exams.",
      yPosition: "120",
      xPosition: "left",
      timeFrame: [
        {date: new Date("2012-09-01")},
        {date: new Date("2015-05-01")},
      ]
    },
    {
      title: "Tampere University",
      description: "Studies focus on biomedical engineering with and software engineering. " +
        "Bachelor's thesis is about UI design in medical context. Current status: 187 ECTS credits.",
      yPosition: "190",
      xPosition: "left",
      timeFrame: [
        {date: new Date("2015-09-01")},
        {date: Date.now()},
      ]
    },
  ],
  private: [
    {
      title: "Connector",
      yPosition: "190",
      xPosition: "right",
    },
    {
      title: "Connector",
      yPosition: "230",
      xPosition: "right",
    },
    {
      title: "Connector",
      yPosition: "240",
      xPosition: "left",
    },
    {
      title: "Entrepreneur",
      description: "I registered to OP-kevytyrittäjä. If you think I can help your business, do not hesitate to " +
        "contact me!",
      yPosition: "250",
      xPosition: "left",
      timeFrame: [
        {date: new Date("2017-11-15")},
        {date: Date.now()},
      ]
    },
  ]
};

export default data
