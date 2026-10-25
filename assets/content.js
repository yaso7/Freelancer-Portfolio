/* ------------------------------------------------------------------
   SITE CONFIG — replace these placeholders with your real details.
   Every page reads from here, so one edit updates the whole site.
------------------------------------------------------------------- */
window.SITE = {
  name: "Sam Rivera",
  first: "Sam",
  email: "hello@samrivera.studio",
  city: "Lisbon, Portugal",
  hours: "Mon – Thu · 9:00 – 15:00 WET",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
  year: new Date().getFullYear()
};

/* ------------------------------------------------------------------
   PERSONAS — one content object per answer to "What are you here for?"
   Same keys in every object; the templates in app.js never change.
   Testimonials are SAMPLE copy: replace them with real client words.
------------------------------------------------------------------- */
window.PERSONAS = {
  translator: {
    id: "translator",
    pick: { n: "1", label: "Translator", blurb: "You need words carried into another language, intact." },
    accent: "#8FAE9D",
    nav: { home: "Home", about: "About", services: "Services", work: "Work", contact: "Contact" },
    tagline: "Translation rooted in context, crafted to sound native.",
    badge: "TRANSLATION · LOCALIZATION · SUBTITLES · ",
    home: {
      eyebrow: "Translator & localization specialist",
      h1: "Translation that keeps the meaning, and the music.",
      lead: "Careful English ⇄ Arabic ⇄ French translation for brands, publishers and people whose words matter.",
      cta: "See the services",
      stripTitle: "Working language pairs",
      strip: ["EN → AR", "AR → EN", "FR → EN", "EN → FR", "AR → FR", "Subtitles · SRT"],
      empathy: {
        eyebrow: "If your last translation read like a translation…",
        h2: "It's time for words that feel at home.",
        paras: [
          "Word-for-word gets you grammar. It rarely gets you trust.",
          "I research your audience, your terminology and your tone before a single sentence moves across languages.",
          "The result reads as if it was written there first: on your website, in your contracts, in your captions."
        ],
        cta: "See the services"
      },
      band: {
        quote: "“It finally sounds like us in Arabic.”",
        body: "Our previous localization was accurate but stiff. Sam rebuilt our product copy around how our customers actually talk, and support tickets about confusing wording dropped within a month.",
        who: "Sample testimonial · Head of product, fintech app"
      },
      featuredTitle: "Featured work",
      featured: [
        { name: "Atlas Travel", tag: "Website localization" },
        { name: "Harbor Press", tag: "Literary translation" },
        { name: "Nour Health", tag: "Medical leaflets" }
      ],
      servicesTitle: "How we can work together",
      services: ["Document translation", "Website localization", "Subtitling", "Certified translation", "Transcreation", "Proofreading", "Remote interpreting", "Glossary building", "Marketing localization"],
      meet: {
        h: "Hi, I'm Sam, your partner for every language crossing.",
        sub: "Based in " + "Lisbon. Working with clients worldwide.",
        body: "I treat every translation as a writing project: terminology research, a style sheet for your voice, and a native-ear review before delivery.",
        cta: "More about Sam"
      },
      quotes: [
        { q: "“Deadlines met, nuance kept.”", body: "Three hundred pages of technical documentation, delivered early, with a glossary our team still uses.", who: "Sample testimonial · Engineering manager" },
        { q: "“The subtitles were invisible, in the best way.”", body: "Audiences laughed at the right moments in both languages. That's the whole job, and Sam nailed it.", who: "Sample testimonial · Documentary producer" },
        { q: "“Our contracts finally match.”", body: "Sam caught two clauses that had drifted between versions. That review alone paid for the project.", who: "Sample testimonial · Legal counsel" }
      ],
      final: { h: "Ready to be understood in every language?", body: "Send your file or brief and get a quote within one business day.", cta: "Request a quote" }
    },
    about: {
      eyebrow: "About",
      h1: "Meaning, carried with care.",
      lead: "A small translation studio where every sentence is researched, reviewed and read aloud before it reaches you.",
      place: { eyebrow: "Whether you're launching abroad or translating something personal…", h2: "You're in the right place.", body: "Good translation is invisible. Readers simply understand you, trust you, and act. That's what we work toward on every project." },
      story: { h: "Hey, I'm Sam.", paras: ["I grew up switching languages between the kitchen table and the classroom, and I've been translating professionally for over ten years.", "I've worked with publishers, NGOs, startups and law firms, and I still read every final draft out loud."] },
      inspired: ["Dictionaries", "Street signs", "Long novels", "Strong coffee"],
      values: [
        { t: "Accuracy", d: "Terminology is researched and logged, never guessed. You get the glossary too." },
        { t: "Confidentiality", d: "Files stay private, NDAs are standard, and nothing goes into public machine-translation tools." },
        { t: "Voice", d: "Your brand should sound like itself in every language, not like a dictionary." }
      ],
      promise: { eyebrow: "My promise to you", h: "You'll get more than words in another language.", body: "You'll get a text your new readers trust, plus the notes and glossary to keep it consistent.", cta: "Contact Sam" }
    },
    services: {
      eyebrow: "Services",
      h1: "A translation partnership tailored to you and your readers.",
      lead: "From a single certified document to full website localization, priced per word with no surprises.",
      cta: "Start a project",
      pain: { eyebrow: "The right words can open a new market.", h2: "But what if your translation is holding you back?", lead: "Maybe you've been…", list: ["Getting feedback that your copy “sounds machine-translated”", "Paying twice: once to translate, once to fix it", "Losing sign-ups on pages your new audience can't quite follow", "Juggling inconsistent terms across documents and teams"], close: "It's time for a different approach." },
      stat: { h: "Your translator for the long haul.", body: "Most of my clients come back for their next launch, because consistency across projects is where translation quality compounds." },
      details: { eyebrow: "The details", h: "Website & document translation", sub: "For brands ready to speak to a new audience", paras: ["We start with a short call about your readers, your goals and any existing materials.", "You receive translated files in your original format, a terminology glossary, and a review round included."], includes: ["Kick-off call and audience brief", "Terminology research and glossary", "Translation by a native-level linguist", "Independent proofread", "One revision round", "Files returned in original format"] },
      process: [
        { t: "Warm welcome", d: "Share your files. I reply within one business day with a quote, timeline and any questions." },
        { t: "Research & glossary", d: "I study your field, your competitors' language and your tone, then lock key terms with you." },
        { t: "Translate & review", d: "Translation, a read-aloud pass, an independent proofread, and delivery in your format." }
      ],
      final: { h: "It's time to be read the way you meant.", body: "Tell me about the project below and I'll send a quote within a day." }
    },
    work: {
      eyebrow: "The translation portfolio",
      h1: "Researched. Translated. Read aloud.",
      lead: "A few recent projects across publishing, product and public health.",
      projects: [
        { tag: "Travel platform · EN → AR", name: "Atlas Travel", quote: "“Bookings from our Gulf audience grew once the site read naturally. Sam's glossary keeps every new page consistent.”" },
        { tag: "Independent publisher · FR → EN", name: "Harbor Press", quote: "“A novel's rhythm survived the crossing. Reviewers called the translation ‘effortless’.”" },
        { tag: "Health NGO · EN → AR / FR", name: "Nour Health", quote: "“Clear, kind, medically precise leaflets. Clinic staff stopped having to explain them.”" },
        { tag: "Film festival · AR → EN", name: "Open Frame", quote: "“Twelve films subtitled on a tight schedule, timed to the frame.”" }
      ]
    },
    contact: {
      eyebrow: "Contact",
      h1: "Your message, in every language, begins here.",
      lead: "Send a brief or a file and I'll reply within one business day.",
      formTitle: "Ready for a translation that reads like an original?",
      select: { label: "What do you need?", options: ["Document translation", "Website localization", "Subtitles", "Certified translation", "Something else"] },
      faq: [
        { q: "How do you price projects?", a: "Per source word for most documents, with a minimum fee for small jobs. Subtitles are priced per runtime minute." },
        { q: "How fast can you deliver?", a: "Around 2,000 words per working day including review. Rush delivery is available when the schedule allows." },
        { q: "Do you use machine translation?", a: "Not for client work. Everything is translated and reviewed by people, and your files never go into public tools." },
        { q: "Can you provide certified translations?", a: "Yes, for official documents. Tell me which country and authority will receive it so the format matches." },
        { q: "What file formats do you accept?", a: "Word, PDF, InDesign exports, spreadsheets, SRT/VTT subtitles and most website export formats." }
      ]
    },
    optin: { eyebrow: "Free guide", h: "7 checks before you publish a translated page", body: "A one-page checklist to catch the mistakes that make readers lose trust.", cta: "Get the checklist" }
  },

  creator: {
    id: "creator",
    pick: { n: "2", label: "Content creator", blurb: "You want stories, videos and posts people actually finish." },
    accent: "#E58A73",
    nav: { home: "Home", about: "About", services: "Services", work: "Work", contact: "Contact" },
    tagline: "Content rooted in story, crafted for the scroll.",
    badge: "STORIES · VIDEO · NEWSLETTERS · ",
    home: {
      eyebrow: "Content creator & storyteller",
      h1: "Stories people stop scrolling for.",
      lead: "Short-form video, newsletters and brand collaborations that sound human and keep audiences around.",
      cta: "See the services",
      stripTitle: "Where the stories live",
      strip: ["YouTube", "Instagram", "TikTok", "LinkedIn", "Podcasts", "Newsletters"],
      empathy: {
        eyebrow: "If you've been posting every day and hearing nothing back…",
        h2: "It's time to make fewer, better things.",
        paras: [
          "Algorithms change every month. A good story still works.",
          "I find the one idea your audience cares about and shape it for each platform, from hook to caption.",
          "You get content people save, share and reply to, without burning out to make it."
        ],
        cta: "See the services"
      },
      band: {
        quote: "“Our first video to pass a million views.”",
        body: "Sam turned a dry product update into a 40-second story about one customer. The comments were full of people tagging friends, and sign-ups doubled that week.",
        who: "Sample testimonial · Marketing lead, outdoor brand"
      },
      featuredTitle: "Featured work",
      featured: [
        { name: "Field Notes", tag: "Video series" },
        { name: "The Sunday Letter", tag: "Newsletter" },
        { name: "Kiln & Co.", tag: "Brand collaboration" }
      ],
      servicesTitle: "How we can work together",
      services: ["Short-form video", "Scriptwriting", "Brand collaborations", "UGC packages", "Newsletter writing", "Photography", "Community management", "Content strategy", "Video editing"],
      meet: {
        h: "Hey, I'm Sam, your partner for all things story.",
        sub: "Based in Lisbon. Creating with brands worldwide.",
        body: "I plan, shoot, write and edit, so one person carries your story from first idea to final caption.",
        cta: "More about Sam"
      },
      quotes: [
        { q: "“Our newsletter finally gets replies.”", body: "Open rates went up, but the replies are what changed things. People write back like they know us.", who: "Sample testimonial · Founder, coffee roaster" },
        { q: "“Sam gets the hook in the first second.”", body: "Every script came with three hook options and a reason for each. We learned more than we expected.", who: "Sample testimonial · Social media manager" },
        { q: "“Easy to work with, fast to deliver.”", body: "Briefs in on Monday, drafts on Wednesday, posted by Friday. It never felt rushed.", who: "Sample testimonial · Studio owner" }
      ],
      final: { h: "Ready to make something people share?", body: "Book a free 20-minute call to talk ideas.", cta: "Book a call" }
    },
    about: {
      eyebrow: "About",
      h1: "Stories made human.",
      lead: "A one-person content studio for brands that would rather be remembered than be loud.",
      place: { eyebrow: "Whether you're starting a channel or reviving a quiet one…", h2: "You're in the right place.", body: "Growth doesn't come from posting harder. It comes from saying something your audience wants to hear again." },
      story: { h: "Hey, I'm Sam.", paras: ["I started with a cheap camera and a blog nobody read, and learned what makes people stay by watching what made them leave.", "Today I make content for independent brands, creators and small teams who want a voice that's theirs."] },
      inspired: ["Film photography", "Good hooks", "Long walks", "Group chats"],
      values: [
        { t: "Honesty", d: "No fake urgency, no bait. Real stories build audiences that stick around." },
        { t: "Craft", d: "Every frame, cut and caption has a job. If it doesn't, it goes." },
        { t: "Sustainability", d: "A content rhythm you can keep up for a year, not a sprint that burns out in a month." }
      ],
      promise: { eyebrow: "My promise to you", h: "You'll walk away with a voice, not only posts.", body: "You'll know what your audience responds to and have a library of content that keeps working.", cta: "Contact Sam" }
    },
    services: {
      eyebrow: "Services",
      h1: "A content partnership tailored to you and your audience.",
      lead: "From one launch video to a monthly content plan, built around what your people actually watch and read.",
      cta: "Start collaborating",
      pain: { eyebrow: "The right story can change your whole year.", h2: "But what if your content is keeping you stuck?", lead: "Maybe you've been…", list: ["Posting daily and watching reach drop anyway", "Copying trends that don't fit your brand", "Spending whole weekends filming and editing", "Getting views but no sales, sign-ups or replies"], close: "It's time for a different approach." },
      stat: { h: "Your creative partner for the long haul.", body: "Most collaborations start with one video and become a monthly plan, because a consistent voice is what audiences return to." },
      details: { eyebrow: "The details", h: "Monthly content & storytelling", sub: "For brands ready to be remembered", paras: ["We start with a 90-minute strategy session to find your story pillars and audience.", "Each month you get a planned, shot, written and edited set of content ready to post."], includes: ["Strategy session and content pillars", "Monthly content calendar", "8 short-form videos with captions", "2 newsletter issues", "Thumbnail and cover designs", "Monthly performance notes"] },
      process: [
        { t: "Warm welcome", d: "A free call to see if we're a fit, followed by a proposal and timeline." },
        { t: "Story & strategy", d: "We find your pillars, study your audience and plan the first month together." },
        { t: "Create & publish", d: "I shoot, write and edit. You review once, then it goes live." }
      ],
      final: { h: "It's time to make content you're proud to post.", body: "Tell me about your brand below and I'll get back to you within two business days." }
    },
    work: {
      eyebrow: "The content portfolio",
      h1: "Rooted in story. Made to be shared.",
      lead: "Selected projects for brands that wanted to sound like people again.",
      projects: [
        { tag: "Outdoor brand · Video series", name: "Field Notes", quote: "“Twelve episodes, one customer each. The series became our best-performing campaign.”" },
        { tag: "Coffee roaster · Newsletter", name: "The Sunday Letter", quote: "“A newsletter people forward to friends. List growth came almost entirely from referrals.”" },
        { tag: "Ceramics studio · Collaboration", name: "Kiln & Co.", quote: "“The behind-the-scenes reel sold out our spring collection in a weekend.”" },
        { tag: "Local bakery · Social", name: "Crumb", quote: "“Warm, funny, and very us. Our regulars started recognising themselves in the posts.”" }
      ]
    },
    contact: {
      eyebrow: "Contact",
      h1: "Your next story begins here.",
      lead: "Tell me about your brand and the audience you want to reach.",
      formTitle: "Ready for content your audience looks forward to?",
      select: { label: "What are you looking for?", options: ["One-off video", "Monthly content", "Newsletter", "Brand collaboration", "Something else"] },
      faq: [
        { q: "Do you appear on camera?", a: "Only if you want me to. Most brand work features your team, your customers or your product." },
        { q: "How far ahead should I book?", a: "Two to four weeks for one-off projects. Monthly plans start at the beginning of each month." },
        { q: "Who owns the content?", a: "You do, once the final invoice is paid. I keep the right to show it in my portfolio unless we agree otherwise." },
        { q: "Can you work with my existing team?", a: "Yes. I often write and plan while an in-house team handles posting and replies." },
        { q: "Do you guarantee views?", a: "No one honestly can. I do guarantee a clear strategy, consistent quality and monthly notes on what's working." }
      ]
    },
    optin: { eyebrow: "Free mini-course", h: "10 hooks that keep people watching", body: "Short lessons with examples you can adapt for your next post.", cta: "Get the hooks" }
  },

  teacher: {
    id: "teacher",
    pick: { n: "3", label: "English teacher", blurb: "You want to speak, write or test in English with confidence." },
    accent: "#C9A548",
    nav: { home: "Home", about: "About", services: "Lessons", work: "Results", contact: "Contact" },
    tagline: "English lessons rooted in real conversation.",
    badge: "SPEAKING · WRITING · IELTS · TOEFL · ",
    home: {
      eyebrow: "English teacher & exam coach",
      h1: "English that finally feels like yours.",
      lead: "One-to-one and small-group lessons for exams, careers and everyday confidence, online from anywhere.",
      cta: "See the lessons",
      stripTitle: "Courses & exam preparation",
      strip: ["IELTS", "TOEFL", "Cambridge C1", "Business English", "Conversation", "Teens"],
      empathy: {
        eyebrow: "If you understand everything but freeze when you speak…",
        h2: "It's time to practise the way you'll use it.",
        paras: [
          "Grammar drills help on paper. Conversations happen in real time.",
          "We build lessons around your goals: the interview, the exam, the meeting, the trip.",
          "You'll leave each lesson with phrases you can use tomorrow and feedback you can act on."
        ],
        cta: "See the lessons"
      },
      band: {
        quote: "“I went from band 6 to 7.5 in ten weeks.”",
        body: "Sam showed me exactly where I was losing marks in speaking and writing. The mock tests felt harder than the real exam, so on the day I was calm.",
        who: "Sample testimonial · IELTS student, nursing applicant"
      },
      featuredTitle: "Student results",
      featured: [
        { name: "IELTS 7.5", tag: "Ten-week exam plan" },
        { name: "Job offer", tag: "Interview coaching" },
        { name: "B1 → C1", tag: "Conversation course" }
      ],
      servicesTitle: "How we can learn together",
      services: ["1:1 lessons", "IELTS preparation", "Business English", "Conversation club", "Pronunciation", "Writing feedback", "Kids & teens", "Group courses", "Placement test"],
      meet: {
        h: "Hi, I'm Sam, your English teacher and coach.",
        sub: "Based in Lisbon. Teaching students online worldwide.",
        body: "CELTA-qualified with years of classroom and online teaching. Lessons are patient, structured and built around how you learn best.",
        cta: "More about Sam"
      },
      quotes: [
        { q: "“I finally speak in meetings.”", body: "We practised the exact situations I was nervous about. After a month I was presenting to clients.", who: "Sample testimonial · Product designer" },
        { q: "“Clear feedback every single time.”", body: "My essays came back with notes I could actually understand, and a model paragraph to compare.", who: "Sample testimonial · University applicant" },
        { q: "“My son looks forward to lessons.”", body: "Games, stories and real progress. His school grades went up and so did his confidence.", who: "Sample testimonial · Parent of a teen student" }
      ],
      final: { h: "Ready to speak with confidence?", body: "Book a free 20-minute placement call to find your level.", cta: "Book a trial lesson" }
    },
    about: {
      eyebrow: "About",
      h1: "Learning made human.",
      lead: "A small online school where every lesson starts from your goals, not from a textbook chapter.",
      place: { eyebrow: "Whether you're preparing for an exam or for a new life abroad…", h2: "You're in the right place.", body: "Fluency isn't about perfect grammar. It's about being understood and enjoying the conversation." },
      story: { h: "Hey, I'm Sam.", paras: ["I've taught English in classrooms, companies and kitchens, to beginners and to doctors preparing for licensing exams.", "I learned two languages as an adult, so I remember exactly how it feels to search for a word mid-sentence."] },
      inspired: ["Podcasts", "Idioms", "Board games", "Travel stories"],
      values: [
        { t: "Patience", d: "Mistakes are how we find what to practise next. No judgment, ever." },
        { t: "Structure", d: "Every lesson has a goal, and every month has a plan you can see." },
        { t: "Real use", d: "We practise the English you need for your life, job or exam." }
      ],
      promise: { eyebrow: "My promise to you", h: "You'll leave with more than grammar.", body: "You'll have a plan, measurable progress and the confidence to use English when it counts.", cta: "Contact Sam" }
    },
    services: {
      eyebrow: "Lessons",
      h1: "English lessons tailored to you and your goals.",
      lead: "One-to-one, small groups and intensive exam plans, all online with recordings and notes after each class.",
      cta: "Book a trial",
      pain: { eyebrow: "The right practice can change everything.", h2: "But what if your study plan is keeping you stuck?", lead: "Maybe you've been…", list: ["Understanding films but freezing in conversation", "Re-taking the same exam without knowing what went wrong", "Studying from apps that never correct your speaking", "Avoiding meetings or calls because of your English"], close: "It's time for a different approach." },
      stat: { h: "Your teacher for the whole journey.", body: "Many students start with exam prep and stay for business English, because the progress keeps going." },
      details: { eyebrow: "The details", h: "Exam preparation & 1:1 coaching", sub: "For learners ready to reach the next level", paras: ["We start with a placement call and a short diagnostic test.", "You get a personal plan, weekly lessons, homework with feedback and a full mock exam every month."], includes: ["Placement call and level test", "Personal study plan", "Weekly 60-minute lessons", "Written feedback on homework", "Monthly mock exam", "Lesson notes and recordings"] },
      process: [
        { t: "Placement call", d: "A free 20-minute chat to hear your goals and find your current level." },
        { t: "Your study plan", d: "A clear plan with lesson focus, homework and milestones for each month." },
        { t: "Lessons & feedback", d: "Weekly lessons, written feedback and regular mock tests to track progress." }
      ],
      final: { h: "It's time to use your English with confidence.", body: "Tell me about your goals below and I'll suggest the right course." }
    },
    work: {
      eyebrow: "Student results",
      h1: "Real goals. Real progress.",
      lead: "A few stories from students who reached what they came for.",
      projects: [
        { tag: "Nursing applicant · IELTS", name: "Band 6 → 7.5", quote: "“Ten weeks of focused prep. The mock exams made the real one feel easy.”" },
        { tag: "Software engineer · Interview", name: "Job offer abroad", quote: "“We rehearsed every question type. I got the offer after the second round.”" },
        { tag: "Retired teacher · Conversation", name: "B1 → C1", quote: "“A year of weekly chats. I now volunteer as a guide for English-speaking tourists.”" },
        { tag: "Teen student · School", name: "Top of the class", quote: "“Grades up two levels, and more importantly, enjoying English again.”" }
      ]
    },
    contact: {
      eyebrow: "Contact",
      h1: "Your next conversation begins here.",
      lead: "Tell me your goal and I'll suggest a plan and a trial time.",
      formTitle: "Ready for lessons that move you forward?",
      select: { label: "What's your goal?", options: ["Exam preparation", "Business English", "Conversation", "Lessons for my child", "Something else"] },
      faq: [
        { q: "How long is a lesson?", a: "60 minutes for adults, 45 minutes for kids and teens. Intensive plans can include two lessons a week." },
        { q: "Do I need any materials?", a: "No. I share notes, worksheets and recordings after each lesson. A laptop and headphones are enough." },
        { q: "Can I cancel or reschedule?", a: "Yes, free of charge with 24 hours' notice." },
        { q: "Which exams do you prepare for?", a: "IELTS (Academic and General), TOEFL iBT, Cambridge B2 First and C1 Advanced." },
        { q: "Do you teach complete beginners?", a: "Yes. We'll go slowly and use your first language for support at the start if that helps." }
      ]
    },
    optin: { eyebrow: "Free lesson pack", h: "50 phrases for meetings and interviews", body: "Ready-to-use expressions with audio, so you know how they sound.", cta: "Get the pack" }
  },

  you: {
    id: "you",
    pick: { n: "4", label: "You 🙂", blurb: "No agenda. You just wanted to see what I'm up to." },
    accent: "#B7A4D9",
    nav: { home: "Home", about: "About me", services: "Ask me", work: "Things I made", contact: "Say hi" },
    tagline: "Mostly words, coffee and good company.",
    badge: "HELLO · FRIEND · HELLO · FRIEND · ",
    home: {
      eyebrow: "Oh, hey",
      h1: "It's you. Pull up a chair.",
      lead: "This is the personal corner of my site: what I'm reading, making and thinking about lately.",
      cta: "See what I'm up to",
      stripTitle: "Currently into",
      strip: ["Slow mornings", "Poetry in translation", "Film cameras", "Long walks", "Board games", "Good tea"],
      empathy: {
        eyebrow: "If you scrolled here instead of messaging me…",
        h2: "Hi. I'm glad you did.",
        paras: [
          "Work pages are tidy. This one's a little more like my desk.",
          "Here you'll find small projects, things I'd recommend, and ways to reach me that aren't email.",
          "Stay as long as you like."
        ],
        cta: "Ask me anything"
      },
      band: {
        quote: "“You always send the best recommendations.”",
        body: "A note from a friend after I sent them three books, a playlist and a café on the other side of town. All three landed.",
        who: "Sample note · A very patient friend"
      },
      featuredTitle: "Things I made",
      featured: [
        { name: "A tiny zine", tag: "Printed, 24 copies" },
        { name: "Bilingual poems", tag: "Side project" },
        { name: "Sunday playlist", tag: "Updated weekly" }
      ],
      servicesTitle: "Ask me about",
      services: ["Books to read next", "Language tips", "Travel plans", "Fixing your CV", "Recipes", "Playlists", "Camera gear", "Quiet cafés", "Starting a side project"],
      meet: {
        h: "Hi, I'm Sam. Thanks for stopping by.",
        sub: "Living in Lisbon. Always up for a walk.",
        body: "When I'm not working I'm usually reading, cooking something too ambitious, or taking photos of doors.",
        cta: "More about me"
      },
      quotes: [
        { q: "“Your soup is still the best.”", body: "Sample note from a dinner guest who has since asked for the recipe four times.", who: "Sample note · Neighbour" },
        { q: "“Thanks for the CV help.”", body: "Sample note: one coffee, one rewrite, one new job.", who: "Sample note · Old classmate" },
        { q: "“That book wrecked me, in a good way.”", body: "Sample note after a recommendation that went a little too well.", who: "Sample note · Book club" }
      ],
      final: { h: "Want to catch up?", body: "Send a message, suggest a café, or tell me what you're reading.", cta: "Say hi" }
    },
    about: {
      eyebrow: "About me",
      h1: "The person behind the work.",
      lead: "A few true things, no résumé required.",
      place: { eyebrow: "Whether we've met or you're just curious…", h2: "Hello, properly.", body: "This page is for the people who want to know me a bit beyond the job title." },
      story: { h: "A little about me.", paras: ["I grew up between languages and never stopped collecting words I can't translate.", "I like early mornings, late dinners, and people who ask good questions."] },
      inspired: ["Green tea", "Good stories", "Gentle movement", "All things home"],
      values: [
        { t: "Curiosity", d: "I'd rather ask one more question than assume." },
        { t: "Kindness", d: "Small favours, remembered birthdays, the second cup of tea." },
        { t: "Making things", d: "A zine, a meal, a playlist. Making is how I think." }
      ],
      promise: { eyebrow: "An open invitation", h: "My door, and inbox, are open.", body: "If something here made you think of me, tell me about it.", cta: "Say hi" }
    },
    services: {
      eyebrow: "Ask me",
      h1: "Things I'm happy to help with, as a friend.",
      lead: "No invoices here. Just ask.",
      cta: "Ask something",
      pain: { eyebrow: "Small help can make a big day better.", h2: "Stuck on something small?", lead: "Maybe you've been…", list: ["Looking for your next book and finding nothing", "Rewriting a cover letter for the fifth time", "Planning a trip and drowning in tabs", "Wanting to start a project but not knowing where"], close: "Send it my way." },
      stat: { h: "Your friend for the long haul.", body: "Recommendations come with follow-up questions. I want to know if you liked it." },
      details: { eyebrow: "How it works", h: "Ask me anything", sub: "Within reason, and with snacks", paras: ["Send a message with what you're stuck on.", "I'll reply with ideas, a list, or an invitation to talk it through over coffee."], includes: ["Book and film recommendations", "A second pair of eyes on writing", "Travel itineraries", "Language questions", "Recipes that forgive mistakes", "Encouragement on demand"] },
      process: [
        { t: "Message me", d: "Any channel works. Tell me what you're thinking about." },
        { t: "Coffee or call", d: "Some things are faster to talk through. I'll suggest a time." },
        { t: "Follow-up", d: "I'll check in later to hear how it went." }
      ],
      final: { h: "Something on your mind?", body: "Use the form below. It goes straight to me." }
    },
    work: {
      eyebrow: "Things I made",
      h1: "Small projects, made for fun.",
      lead: "Not for clients. Just for me, and now for you.",
      projects: [
        { tag: "Print · 2025", name: "A tiny zine", quote: "“Twenty-four photocopied copies about the doors of my neighbourhood. All given away.”" },
        { tag: "Writing · Ongoing", name: "Bilingual poems", quote: "“Short poems written in two languages at once, side by side.”" },
        { tag: "Music · Weekly", name: "Sunday playlist", quote: "“Twelve songs for slow mornings, refreshed every week.”" },
        { tag: "Kitchen · Forever", name: "The soup recipe", quote: "“Finally written down after many requests. Feeds six, freezes well.”" }
      ]
    },
    contact: {
      eyebrow: "Say hi",
      h1: "Tell me what's new with you.",
      lead: "Messages from friends always get read first.",
      formTitle: "Let's catch up.",
      select: { label: "What's it about?", options: ["Just saying hi", "A recommendation", "Coffee soon?", "Help with something", "Something else"] },
      faq: [
        { q: "Are you free this weekend?", a: "Probably. Ask me and find out." },
        { q: "What should I read next?", a: "Tell me the last book you loved and I'll send three ideas back." },
        { q: "Best café in town?", a: "Depends if you want quiet or good pastries. I have a list for both." },
        { q: "Can I borrow a book?", a: "Yes, if you promise to tell me what you thought." },
        { q: "How do you take your tea?", a: "Green, no sugar, in a mug that's a little too big." }
      ]
    },
    optin: { eyebrow: "Occasional letter", h: "A short note, a few times a year", body: "What I'm reading, cooking and making. No marketing.", cta: "Sign me up" }
  }
};
