export type EventItems ={
    title: string,
    image: string,
    slug: string,
    location: string,
    date: string,
    time: string
}



export const events:EventItems[]  = [
  {
    title: "Tech Innovation Summit 2025",
    image: "/images/event1.png",
    slug: "tech-innovation-summit-2025",
    location: "Bangalore, India",
    date: "2025-02-15",
    time: "10:00 AM – 5:00 PM"
  },
  {
    title: "Digital Marketing Workshop",
    image: "/images/event2.png",
    slug: "digital-marketing-workshop",
    location: "Delhi, India",
    date: "2025-03-02",
    time: "11:00 AM – 3:00 PM"
  },
  {
    title: "Startup Pitch Night",
    image: "/images/event3.png",
    slug: "startup-pitch-night",
    location: "Mumbai, India",
    date: "2025-03-20",
    time: "6:00 PM – 9:00 PM"
  },
  {
    title: "AI & Machine Learning Conference",
    image: "/images/event4.png",
    slug: "ai-machine-learning-conference",
    location: "Hyderabad, India",
    date: "2025-04-10",
    time: "9:30 AM – 6:00 PM"
  },
  {
    title: "Web Development Bootcamp",
    image: "/images/event5.png",
    slug: "web-development-bootcamp",
    location: "Pune, India",
    date: "2025-04-25",
    time: "10:00 AM – 4:00 PM"
  }
];

export default events;
