import "tailwindcss/tailwind.css";

const dummyStat1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const dummyStat2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export const nodeData = {
  id: "0",
  label: "Car Manufacturing Project",
  positionH: { x: 0, y: 0 },
  positionV: { x: 0, y: 0 },
  className: "rounded-xl border-4 border-slate-600 bg-green-400 text-white",
  info: "Detailed breakdown of the car manufacturing project phases",
  children: [
    {
      id: "1",
      label: "Market Research",
      positionH: { x: -800, y: 200 },
      positionV: { x: 300, y: -1000 },
      className: "rounded-xl border-4 border-slate-600 bg-red-400",
      info: "Conduct market analysis to identify consumer needs, preferences, and market trends. Gather data on competitors and target demographics.",
      children: [
        {
          id: "1-1",
          label: "External Research",
          positionH: { x: -1100, y: 400 },
          positionV: { x: 600, y: -1600 },
          className: "rounded-xl border-4 border-slate-600 bg-red-300",
          info: "Collaborate with external research agencies and consult industry experts to gather market insights and trends.",
          children: [
            {
              id: "1-1-stats",
              label: "External Research Stats",
              positionH: { x: -1400, y: 600 },
              positionV: { x: 900, y: -1900 },
              className: "rounded-xl border-4 border-slate-600 bg-red-200 w-72",
              info: "Dummy Statistics",
              stat: dummyStat1,
            },
          ],
        },
        {
          id: "1-2",
          label: "Internal Research",
          positionH: { x: -900, y: 400 },
          positionV: { x: 600, y: -1200 },
          className: "rounded-xl border-4 border-slate-600 bg-red-300 z-0",
          info: "Analyze internal data, customer feedback, and sales reports to understand market demand and customer preferences.",
          children: [
            {
              id: "1-2-stats",
              label: "Internal Research Stats",
              positionH: { x: -1100, y: 600 },
              positionV: { x: 900, y: -1500 },
              className: "rounded-xl border-4 border-slate-600 bg-red-200 w-72",
              info: "Dummy Statistics",
              stat: dummyStat2,
            },
          ],
        },
      ],
    },
    {
      id: "2",
      label: "Planning",
      positionH: { x: -400, y: 200 },
      positionV: { x: 300, y: -500 },
      className: "rounded-xl border-4 border-slate-600 bg-orange-400",
      info: "Develop a comprehensive plan outlining project objectives, timelines, resource allocation, and budgeting. Define product specifications and feature requirements.",
      children: [
        {
          id: "2-1",
          label: "Product Requirements Document",
          positionH: { x: -600, y: 400 },
          positionV: { x: 600, y: -900 },
          className: "rounded-xl border-4 border-slate-600 bg-orange-300",
          info: "Document detailed product specifications, including features, functionalities, and technical requirements.",
          children: [
            {
              id: "2-1-stats",
              label: "PRD Stats",
              positionH: { x: -800, y: 600 },
              positionV: { x: 900, y: -1100 },
              className:
                "rounded-xl border-4 border-slate-600 bg-orange-200 w-72",
              info: "Dummy Statistics",
              stat: dummyStat2,
            },
          ],
        },
        {
          id: "2-2",
          label: "Technical Specifications",
          positionH: { x: -400, y: 400 },
          positionV: { x: 600, y: -500 },
          className: "rounded-xl border-4 border-slate-600 bg-orange-300",
          info: "Define technical specifications for the vehicle's components, systems, and interfaces.",
          children: [
            {
              id: "2-2-stats",
              label: "Technical Specifications Stats",
              positionH: { x: -500, y: 600 },
              positionV: { x: 900, y: -700 },
              className:
                "rounded-xl border-4 border-slate-600 bg-orange-200 w-72",
              info: "Dummy Statistics",
              stat: dummyStat2,
            },
          ],
        },
      ],
    },
    {
      id: "3",
      label: "Designing",
      positionH: { x: 0, y: 200 },
      positionV: { x: 300, y: 0 },
      className: "rounded-xl border-4 border-slate-600 bg-yellow-400",
      info: "Create detailed designs and prototypes of the vehicle's exterior, interior, and mechanical systems. Incorporate feedback from stakeholders and conduct feasibility studies.",
      children: [
        {
          id: "3-1",
          label: "Hardware Design",
          positionH: { x: -100, y: 400 },
          positionV: { x: 600, y: -200 },
          className: "rounded-xl border-4 border-slate-600 bg-yellow-200",
          info: "Develop blueprints and specifications for the vehicle's physical components, such as chassis, body panels, and engine.",
          children: [
            {
              id: "3-1-stats",
              label: "Hardware Design Stats",
              positionH: { x: -200, y: 600 },
              positionV: { x: 900, y: -300 },
              className:
                "rounded-xl border-4 border-slate-600 bg-yellow-100 w-72",
              info: "Dummy Statistics",
              stat: dummyStat2,
            },
          ],
        },
        {
          id: "3-2",
          label: "Software Design",
          positionH: { x: 100, y: 400 },
          positionV: { x: 600, y: 200 },
          className: "rounded-xl border-4 border-slate-600 bg-yellow-200",
          info: "Design software systems and interfaces for vehicle control, infotainment, and communication.",
          children: [
            {
              id: "3-2-stats",
              label: "Software Design Stats",
              positionH: { x: 100, y: 600 },
              positionV: { x: 900, y: 100 },
              className:
                "rounded-xl border-4 border-slate-600 bg-yellow-100 w-72",
              info: "Dummy Statistics",
              stat: dummyStat1,
            },
          ],
        },
      ],
    },
    {
      id: "4",
      label: "Manufacturing",
      positionH: { x: 400, y: 200 },
      positionV: { x: 300, y: 500 },
      className: "rounded-xl border-4 border-slate-600 bg-sky-400",
      info: "Set up production facilities, source raw materials and components, and manufacture vehicle parts according to design specifications. Implement quality control measures and assembly processes.",
      children: [
        {
          id: "4-1",
          label: "Material Procurement",
          positionH: { x: 400, y: 400 },
          positionV: { x: 600, y: 500 },
          className: "rounded-xl border-4 border-slate-600 bg-sky-300",
          info: "Source and purchase raw materials, components, and parts required for vehicle manufacturing.",
          children: [
            {
              id: "4-1-stats",
              label: "Material Procurement Stats",
              positionH: { x: 400, y: 600 },
              positionV: { x: 900, y: 500 },
              className: "rounded-xl border-4 border-slate-600 bg-sky-200 w-72",
              info: "Dummy Statistics",
              stat: dummyStat2,
            },
          ],
        },
        {
          id: "4-2",
          label: "Production Assembly",
          positionH: { x: 600, y: 400 },
          positionV: { x: 600, y: 900 },
          className: "rounded-xl border-4 border-slate-600 bg-sky-300",
          info: "Assemble vehicle parts and components into finished vehicles on the production line.",
          children: [
            {
              id: "4-2-stats",
              label: "Production Assembly Stats",
              positionH: { x: 700, y: 600 },
              positionV: { x: 900, y: 900 },
              className: "rounded-xl border-4 border-slate-600 bg-sky-200 w-72",
              info: "Dummy Statistics",
              stat: dummyStat2,
            },
          ],
        },
      ],
    },
    {
      id: "5",
      label: "Sales/Marketing",
      positionH: { x: 800, y: 200 },
      positionV: { x: 300, y: 1000 },
      className: "rounded-xl border-4 border-slate-600 bg-purple-400 w-40",
      info: "Develop marketing strategies, launch advertising campaigns, and establish sales channels to promote and sell the vehicle to target customers. Provide after-sales support and services.",
      children: [
        {
          id: "5-1",
          label: "Online Marketing",
          positionH: { x: 1100, y: 400 },
          positionV: { x: 600, y: 1200 },
          className: "rounded-xl border-4 border-slate-600 bg-purple-300",
          info: "Utilize digital platforms, social media, and e-commerce channels to reach and engage with customers.",
          children: [
            {
              id: "5-1-stats",
              label: "Online Marketing Stats",
              positionH: { x: 1300, y: 600 },
              positionV: { x: 900, y: 1300 },
              className:
                "rounded-xl border-4 border-slate-600 bg-purple-200 w-72",
              info: "Dummy Statistics",
              stat: dummyStat2,
            },
          ],
        },
        {
          id: "5-2",
          label: "Dealership Network",
          positionH: { x: 900, y: 400 },
          positionV: { x: 600, y: 1600 },
          className: "rounded-xl border-4 border-slate-600 bg-purple-300",
          info: "Establish partnerships with dealerships and distributors to showcase, sell, and service vehicles in local and global markets.",
          children: [
            {
              id: "5-2-stats",
              label: "Dealership Network Stats",
              positionH: { x: 1000, y: 600 },
              positionV: { x: 900, y: 1700 },
              className:
                "rounded-xl border-4 border-slate-600 bg-purple-200 w-72",
              info: "Dummy Statistics",
              stat: dummyStat2,
            },
          ],
        },
      ],
    },
  ],
};
