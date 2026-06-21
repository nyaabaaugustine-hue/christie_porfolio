export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  images?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Fear of the Unknown Has Crippled Many Dreams",
    excerpt: "The inner journey\u2014overcoming hesitation and doubt.",
    category: "Entrepreneurship",
    date: "June 20, 2026",
    readTime: "4 min read",
    featured: true,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781991906/1765796132846_z7v45k.jpg",
    content: [
      "I woke up this morning with a simple but striking thought:\nThe fear of the unknown has crippled more dreams than failure ever did.",
      "So many people are sitting on powerful ideas, clear visions, and burning desires, but they never take the first step. Not because they can\u2019t, but because they are afraid of what they don\u2019t know.",
      "They stay in jobs that drain them, because at least the salary comes every month.",
      "They remain in relationships that no longer serve them, because at least they\u2019re not alone.",
      "\u201cThey hold on to titles, positions, and routines that look \u2018safe,\u2019 even when their souls whisper, you were meant for more.\u201d",
      "But here\u2019s the truth: nothing new ever feels safe.",
      "Growth never happens in the comfort zone. \u201cEvery bold step \u2014 whether to start a business, change careers, relocate, or walk away from what\u2019s familiar \u2014 comes wrapped in uncertainty.\u201d",
      "If you\u2019re waiting for fear to disappear before you move, you\u2019ll wait forever. Courage isn\u2019t the absence of fear; it\u2019s deciding that something else matters more, your purpose, your peace, your potential.",
      "\u201cThe unknown is not your enemy \u2014 it is simply the part of your story you haven\u2019t written yet.\u201d",
      "So today, I challenge you:\nTake the step.\nMake the call.\nStart the dream.\nWalk away if you must.\nBecause the moment you move, clarity begins to unfold.\nBe bold enough to find out what\u2019s on the other side of your fear.\nYou might just find yourself, and the life you were always meant to live.",
      "\u201cBut dealing with fear is only the beginning. The real breakthrough comes when we align who we are with where we want to go. And that\u2019s where the conversation about ambition and organizational culture begins.\u201d"
    ]
  },

];
