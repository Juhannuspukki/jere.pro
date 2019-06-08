import React from 'react'


const data = {
  working: [
    {
      title: "Intopalo Oy",
      description: "I learned web development, built the original Neuro Event Labs website and participated in " +
        "various meetings concerning marketing and leadership in a self-managing organization.",
      workingPeriod: [
        {date: new Date("2017-05-22")},
        {date: new Date("2017-08-21")},
      ]
    },
    {
      title: "Neuro Event Labs Oy",
      description: "I worked as a part-time software developer during the winter and full-time during the summer. My " +
        "responsibilities included taking care of the company website, a static site generated with Hugo. I also " +
        "performed code review (Angular) and worked on my Bachelor's thesis (UI design).",
      workingPeriod: [
        {date: new Date("2017-11-29")},
        {date: new Date("2018-09-30")},
      ]
    },
    {
      title: "Anders Innovations Oy",
      description: "My current job is related to UX research, UI drawings and frontend development.",
      workingPeriod: [
        {date: new Date("2019-03-27")},
        {date: Date.now()},
      ]
    }
  ],
  education: [
    {
      title: "University",
      description: "Studies focus on biomedical engineering with and software engineering. " +
        "Bachelor's thesis is about UI design in medical context. Current status: 187 ECTS credits.",
      workingPeriod: [
        {date: new Date("2015-09-01")},
        {date: Date.now()},
      ]
    },
    {
      title: "High School",
      description: "I attended Säkylän Seudun Lukio and took eight matriculation exams.",
      workingPeriod: [
        {date: new Date("2012-09-01")},
        {date: new Date("2015-05-01")},
      ]
    }
  ]
};

export default data
