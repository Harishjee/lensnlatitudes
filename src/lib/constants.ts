export const SITE = {
  name: "Lens N Latitudes",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lensnlatitudes.com",
  description:
    "Award-winning wildlife photography safaris led by Salil Nair. India, Africa & worldwide expeditions. Expert photography guidance, luxury stays, unforgettable wildlife encounters.",
};

export const CONTACT = {
  email: "lensnlatitudes@gmail.com",
  emailSalil: "salil@lensandlatitudes.com",
  phone: "+91-9930123699",
  phone2: "+91-9444033699",
  address: "3rd floor, 115, above union bank, Arcot Road, Alwarthirunagar, Chennai 600087",
  whatsapp: "https://wa.me/919930123699",
  instagram: "https://www.instagram.com/lensnlatitudes/",
  youtube: "https://www.youtube.com/channel/UCYuLxoEjjepb6nBw9EG1W8g",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Salil", href: "/who-is-behind-the-lens" },
  { label: "Awards", href: "/awards" },
  { label: "Who's Behind the Lens", href: "/who-is-behind-the-lens" },
  { label: "Track Me", href: "/track-me" },
] as const;

export const NAV_DROPDOWNS = [
  {
    label: "Capabilities",
    items: [
      { label: "Signature Shoots", href: "/signature-shoots" },
      { label: "Abstracts Unleashed", href: "/abstracts-unleashed" },
      { label: "Out of the Office", href: "/out-of-the-office" },
      { label: "Beyond the Classrooms", href: "/beyond-the-classrooms" },
    ],
  },
  {
    label: "Explore Latitudes",
    items: [
      { label: "Explore Latitudes", href: "/explore-latitudes" },
      { label: "Jungles of India", href: "/explore-jungles-of-india" },
      { label: "African Continent", href: "/explore-the-african-continent" },
      { label: "Rest of the World", href: "/explore-the-rest-of-the-world" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Upcoming Safaris",
    cta: true,
    items: [
      { label: "Upcoming Safaris", href: "/upcoming-safaris" },
      { label: "Story Behind the Photo", href: "/story-behind-the-photo" },
      { label: "Own It", href: "/own-it" },
    ],
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Who's Behind the Lens", href: "/who-is-behind-the-lens" },
  { label: "Awards", href: "/awards" },
  { label: "Own It", href: "/own-it" },
  { label: "Track Me", href: "/track-me" },
  { label: "Upcoming Safaris", href: "/upcoming-safaris" },
  { label: "Contact Us", href: "/contact" },
];

export const TESTIMONIALS = [
  /* ── TADOBA – August 2024 ── */
  {
    name: "Guest",
    location: "",
    text: "This trip had everything we could have asked for Salil Nair - Thanks for the coordination and arrangements, it was super comfortable and for making our first safari a memorable one. Thanks @Pavithra Venkatagopalan for having us over and making sure we were having fun. @Aparna you guys are fabulous and hopefully we have more reasons to catch up often. And yes cheers to all the 'Gundappa' rockstars, who woke up early without complaining and for keeping the trip lively.",
    safari: "Tadoba – August 2024",
  },
  {
    name: "Aparna",
    location: "",
    text: "Good morning from the concrete jungle - thank you all for coming with me I couldn't have asked for a better \"herd\" to hang out with. Salil you were fabulous as per usual, very nice meeting the S's - pls stay in touch! As for the rest we will meet on Fridays (if you will have me) any other day. I had a great time and hope you guys did too. The tigers were incidentals :)",
    safari: "Tadoba – August 2024",
  },
  /* ── KANHA & PENCH – October 2025 ── */
  {
    name: "Rani",
    location: "",
    text: "Had fantastic safaris. And I'm glad that I didn't miss the night Safari. Thanks Salil for making that happen inspire of me giving my request at the last minute. Thanks to you Salil and everyone who made this safari happen. Thanks to all of you for making it a great trip.",
    safari: "Kanha & Pench – October 2025",
  },
  {
    name: "Sunita",
    location: "",
    text: "Hello hello. We have such amazing writers and poets in this group!! I'm just going to simply say that I had an amazing safari! Great sightings and seeing different animals and birds was really interesting. Never noticed so many birds before thanks to Lakshmi and Salil's little booklet 🦉🦚 So happy to meet some old friends again and to make new ones. Thank you to Salil and to everyone who worked so hard to make this safari happen….",
    safari: "Kanha & Pench – October 2025",
  },
  {
    name: "Gita Ganesh",
    location: "",
    text: "Woke up with a smile remembering the last three mornings. The moon, gentle breeze, the lush forest, above all hope that today we are going to see that beautiful animal… tiger. Salil, thank you for organising a brilliant safari. Enjoyed every moment. Bunty, if you remember, I said yes, the next moment you asked if I wanted to go. Yes, Balu, we made some new friends. Once again thank you and look forward to seeing you all again.",
    safari: "Kanha & Pench – October 2025",
  },
  {
    name: "Rain Bunty",
    location: "",
    text: "Thank you Salil for all the planning and the execution. We had a marvellous trip and I think luck beamed bright on us. The way we saw the sight of a lifetime, a tiger with its kill, eating it as well as tender moments with its cub... when the most feared huntress became a gentle mother... amazing sight.\n\nThe weather was with us and the luck held out till we made our flights home. So many thanks to the powers that be.\n\nTo my co travellers. You guys made this journey a memorable one. Such easy company and so much laughter... That's what travel is about.\n\nThank you for your company and for the wonderful memories made.",
    safari: "Kanha & Pench – October 2025",
  },
  {
    name: "Balaji Ganesh",
    location: "",
    text: "Hi guys what a whirlwind tour enjoyed it and am seeing a beginning of a great friendship.\n\nThank you Salil and of course, Bunty what a weird lot of lovable friends. No wonder we are so incompatibly compatible. Love you guys we will soon meet in the club for a lovely evening and will talk about this trip and mainly about the following:\n\nHow the aloo bonda was yum. How the samosa was yum. Of course, we saw the tiger bloody even she was eating 🙄. And thanks for putting up with the bluntest of the jokes.\n\nWe have spotted the Tiger, Sambar, Rasam, Monkey 🐒, Bluegai (Nilgai), Gaur and of course also travelled with a PANDA. Enjoy guys.",
    safari: "Kanha & Pench – October 2025",
  },
  /* ── MASAI MARA – January 2026 ── */
  {
    name: "Janani",
    location: "Chennai",
    text: "Salil ji Tussi awesome ho! It was such an amazing trip and you made it all so effortless! Thank you for being so patient and kind. We had an unforgettable time and so glad we had you and Monu man with us!",
    safari: "Masai Mara – January 2026",
  },
  {
    name: "Balasubramanium",
    location: "Chennai",
    text: "Salil, you are an amazing teacher and affectionate friend. I must say you tamed the Lion in our group and encouraged the Lioness to come out with gay and gaiety.",
    safari: "Masai Mara – January 2026",
  },
  {
    name: "Aruna",
    location: "Chennai",
    text: "Thanks, Salil. No words to say. Enjoyed lot. See you all Masai Mara group in my home. ❤️🙏",
    safari: "Masai Mara – January 2026",
  },
  {
    name: "Bala",
    location: "Chennai",
    text: "This is a experience we will all cherish, it was so wonderful to meet you dear Salil. Thank you for sharing your knowledge so freely with us. We must meet soon for sure. Stay blessed.",
    safari: "Masai Mara – January 2026",
  },
  {
    name: "Monalisa",
    location: "Bangalore",
    text: "What a joy it was to share this safari trip with such wonderful souls! Thank you all for the laughter, learning, and unforgettable moments. 😊🥰",
    safari: "Masai Mara – January 2026",
  },
  {
    name: "Suresh",
    location: "MD, Esha Homes",
    text: "Thank you guys for the wonderful time. I enjoyed every bit of the tour including 4×4 travel. Thanks, Salil for opening a new world for me including creating interest in photography.",
    safari: "Masai Mara – March 2026",
  },
  {
    name: "Rama Suresh",
    location: "",
    text: "Unforgettable trip it has been Salil…..thanks for taking care of us so well and letting us experience wildlife through your eyes…..",
    safari: "Masai Mara – March 2026",
  },
  {
    name: "Anant Varma",
    location: "",
    text: "A special thanks to Salil uncle for being the most passionate and full of energy person I'd ever want to go with for a trip like this.",
    safari: "Kanha & Pench – June 2026",
  },
  {
    name: "Jaykumar",
    location: "",
    text: "Thank you Salil for all the insights on animal behaviour and patterns. Your meticulous planning and impeccable implementation made life easier for us.",
    safari: "Kanha & Pench – June 2026",
  },
  {
    name: "Surya Balasubramanium",
    location: "",
    text: "Loved the sightings, more so the actual jungle so verdant and vast... telling us more and more we are insignificant in front of prakriti. Thank you Salil ji for this wonderful planning and execution.",
    safari: "Kanha & Pench – June 2026",
  },
  {
    name: "Rucha Babar",
    location: "",
    text: "Thank you Salil uncle for sharing your love for wildlife, your amazing insights, and capturing moments that we can always look back on. Had such a lovely time with all of you.",
    safari: "Kanha & Pench – June 2026",
  },
  {
    name: "Rani",
    location: "",
    text: "Had fantastic safaris. And I'm glad that I didn't miss the night Safari. Thanks Salil for making that happen. Thanks to all of you for making it a great trip.",
    safari: "Kanha & Pench – October 2025",
  },
  {
    name: "Sunita",
    location: "",
    text: "I had an amazing safari! Great sightings and seeing different animals and birds was really interesting. So happy to meet some old friends again and to make new ones.",
    safari: "Kanha & Pench – October 2025",
  },
  {
    name: "Gita Ganesh",
    location: "",
    text: "Salil, thank you for organising a brilliant safari. Enjoyed every moment. Look forward to seeing you all again.",
    safari: "Kanha & Pench – October 2025",
  },
  {
    name: "Rain Bunty",
    location: "",
    text: "Thank you Salil for all the planning and the execution. We had a marvellous trip. The way we saw the sight of a lifetime, a tiger with its kill — amazing sight.",
    safari: "Kanha & Pench – October 2025",
  },
  {
    name: "Guest",
    location: "",
    text: "This trip had everything we could have asked for Salil Nair - Thanks for the coordination and arrangements, it was super comfortable and for making our first safari a memorable one.",
    safari: "Tadoba – August 2024",
  },
  {
    name: "Aparna",
    location: "",
    text: "Thank you all for coming with me. Salil you were fabulous as per usual. I had a great time and hope you guys did too. The tigers were incidentals :)",
    safari: "Tadoba – August 2024",
  },
];

export const CAPABILITIES = [
  {
    title: "Signature Shoots",
    tagline: "Not Just Captured. Crafted to Stand Apart",
    href: "/signature-shoots",
    image: "/images/capabilities-signature-shoots.jpg",
  },
  {
    title: "Abstracts Unleashed",
    tagline: "Minimal in Form. Monumental in Feeling.",
    href: "/abstracts-unleashed",
    image: "/images/capabilities-abstracts.jpg",
  },
  {
    title: "Out of the Office",
    tagline: "From deadlines to treelines — the perfect escape.",
    href: "/out-of-the-office",
    image: "/images/capabilities-out-of-office.jpg",
  },
  {
    title: "Beyond the Classrooms",
    tagline: "Where the jungle teaches what walls cannot.",
    href: "/beyond-the-classrooms",
    image: "/images/capabilities-beyond-classrooms.jpg",
  },
];
