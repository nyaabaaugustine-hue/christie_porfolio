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
  {
    id: 2,
    title: "Nature\u2019s Majesty: Reflections from Canmore, Banff, and Lake Louise",
    excerpt: "Recently, I had the privilege of spending time in Canmore, Banff, and Lake Louise with my daughter and nephew. What was intended as a family outing became much more than a sightseeing trip. It became a profound reminder of the beauty of creation and the greatness of God.",
    category: "Personal Growth",
    date: "June 20, 2026",
    readTime: "5 min read",
    featured: true,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781992319/1781976650074_smvcst.jpg",
    images: [
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781992319/1781976726143_i9inys.jpg",
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781992318/1781976779682_nffyfc.jpg",
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781992317/1781976819174_y9p8cj.jpg",
      "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1781992316/1781976875740_muzkjp.jpg"
    ],
    content: [
      "Recently, I had the privilege of spending time in Canmore, Banff, and Lake Louise with my daughter and nephew. What was intended as a family outing became much more than a sightseeing trip. It became a profound reminder of the beauty of creation and the greatness of God.",
      "As we journeyed through the Canadian Rockies, I found myself continually in awe. The towering mountains stood like ancient monuments, their peaks reaching toward the heavens. The crystal-clear lakes reflected the surrounding landscape with such perfection that it often felt like looking into a painting rather than reality. Everywhere we turned, there was another breathtaking view that left us speechless.",
      "Standing atop Sulphur Mountain and gazing across the endless mountain ranges, I was reminded of how small we are in comparison to the vastness of God\u2019s creation. Human beings have accomplished remarkable things, yet no architect, engineer, or artist can truly replicate the grandeur of these landscapes. Nature displays a level of beauty, complexity, and power that points to a Creator far greater than ourselves.",
      "Lake Louise was particularly unforgettable. Its turquoise waters, framed by majestic mountains and glaciers, created a scene of remarkable serenity. In a world filled with noise, deadlines, and constant distractions, moments like these invite us to pause and appreciate the simple gift of being alive.",
      "What made the trip even more special was sharing it with my daughter and nephew. Watching them marvel at the scenery, take photographs, laugh, and explore reminded me that some of life\u2019s most valuable experiences are not material possessions but shared memories. Long after the trip is over, these moments will remain with us.",
      "Travel often broadens our perspective, but this journey did something deeper. It strengthened my appreciation for nature, renewed my sense of gratitude, and reinforced my faith. Every mountain, lake, forest, and valley seemed to tell the same story: that creation is magnificent, purposeful, and worthy of our stewardship and respect.",
      "As we left Banff and made our way home, I carried more than photographs and souvenirs. I carried a renewed sense of wonder. In a world that often moves too fast, nature has a way of slowing us down and reminding us of what truly matters.",
      "Canmore, Banff, and Lake Louise are undoubtedly among the most beautiful places I have ever visited. But beyond their scenic beauty, they offered a powerful lesson: when we take time to observe the wonders around us, we gain a deeper appreciation for life, for family, and for the greatness of God.",
      "For that, I am truly grateful."
    ]
  }
];
