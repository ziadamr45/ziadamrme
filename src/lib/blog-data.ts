export const blogPosts = [
  {
    slug: "building-modern-web-apps",
    title: { ar: "بناء تطبيقات ويب حديثة: رحلتي مع Next.js", en: "Building Modern Web Apps: My Journey with Next.js" },
    date: "2025-01-15",
    excerpt: {
      ar: "كيف بدأت مع Next.js ولماذا أصبح إطار العمل المفضل لدي لبناء تطبيقات ويب متكاملة وسريعة.",
      en: "How I got started with Next.js and why it became my go-to framework for building complete, fast web applications.",
    },
    content: {
      ar: `بدأت رحلتي مع Next.js منذ فترة، وكانت نقطة تحول كبيرة في مسيرتي كمطور ويب. قبل Next.js، كنت أواجه صعوبات في بناء تطبيقات ويب متكاملة بأداء عالي. Next.js وفّر لي الحل الأمثل مع ميزات مثل Server-Side Rendering وStatic Site Generation.

أهم ما يميز Next.js هو تجربة المطور الممتازة. نظام الملفات التلقائي للتوجيه، ودعم TypeScript المدمج، والتحسين التلقائي للصور وغيرها من الميزات جعلت عملية التطوير أكثر سلاسة وإنتاجية.

في هذا المقال، سأشارككم تجربتي مع Next.js وكيف ساعدني في بناء مشاريع مثل إسمع راديو والمخبر ومعركة الأسئلة وغيرها.`,
      en: `I started my journey with Next.js a while ago, and it was a major turning point in my career as a web developer. Before Next.js, I struggled to build complete, high-performance web applications. Next.js provided me with the ideal solution with features like Server-Side Rendering and Static Site Generation.

What makes Next.js stand out is the excellent developer experience. The file-based routing system, built-in TypeScript support, automatic image optimization, and other features made the development process smoother and more productive.

In this article, I'll share my experience with Next.js and how it helped me build projects like Esma3 Radio, Elmokhber, Battle of Questions, and more.`,
    },
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    slug: "real-time-apps-socketio",
    title: { ar: "تطبيقات الوقت الحقيقي باستخدام Socket.io", en: "Real-Time Apps with Socket.io" },
    date: "2025-02-10",
    excerpt: {
      ar: "دليل عملي لبناء تطبيقات تفاعلية في الوقت الحقيقي باستخدام Socket.io وNext.js مع أمثلة من مشاريع حقيقية.",
      en: "A practical guide to building real-time interactive applications using Socket.io and Next.js with examples from real projects.",
    },
    content: {
      ar: `التطبيقات التفاعلية في الوقت الحقيقي أصبحت ضرورة في عالم الويب الحديث. من ألعاب متعددة اللاعبين إلى تطبيقات الدردشة، Socket.io يوفر الأساس المثالي لبناء هذه التطبيقات.

في مشروع معركة الأسئلة، استخدمت Socket.io لإنشاء نظام غرف لعب تفاعلي يسمح للاعبين بالتنافس في الوقت الحقيقي. التحدي الأكبر كان إدارة حالة اللعبة عبر جميع العملاء المتصلين.

سنستعرض في هذا المقال كيفية إعداد Socket.io مع Next.js، وإدارة الغرف، والتعامل مع انقطاع الاتصال، وأفضل الممارسات لبناء تطبيقات وقت حقيقي قوية.`,
      en: `Real-time interactive applications have become essential in the modern web world. From multiplayer games to chat applications, Socket.io provides the ideal foundation for building these applications.

In the Battle of Questions project, I used Socket.io to create an interactive game room system that allows players to compete in real time. The biggest challenge was managing game state across all connected clients.

In this article, we'll explore how to set up Socket.io with Next.js, manage rooms, handle disconnections, and best practices for building robust real-time applications.`,
    },
    tags: ["Socket.io", "Real-Time", "Next.js"],
  },
  {
    slug: "secure-location-sharing",
    title: { ar: "مشاركة الموقع بأمان: التحديات والحلول", en: "Secure Location Sharing: Challenges and Solutions" },
    date: "2025-03-05",
    excerpt: {
      ar: "نظرة تقنية على التحديات الأمنية في تطبيقات مشاركة الموقع وكيف تعاملت معها في تطبيق طمني.",
      en: "A technical look at security challenges in location sharing apps and how I addressed them in the Tammeny app.",
    },
    content: {
      ar: `تطبيقات مشاركة الموقع الجغرافي تثير مخاوف أمنية مشروعة. في تطبيق طمني، كان الأمان هو الأولوية القصوى منذ البداية. من تشفير البيانات إلى التحكم في الصلاحيات، كل قرار تصميمي كان مدفوعًا باعتبارات أمنية.

أهم التحديات التي واجهتها كانت: حماية بيانات الموقع أثناء النقل، التحكم في من يمكنه رؤية الموقع، وتوفير آلية لإيقاف المشاركة فورًا. استخدمت أحدث معايير التشفير والمصادقة لضمان حماية مستخدمي التطبيق.

هذا المقال يغطي الرحلة التقنية كاملة من التصميم الأمني إلى التنفيذ.`,
      en: `Location sharing apps raise legitimate security concerns. In the Tammeny app, security was the highest priority from the start. From data encryption to access control, every design decision was driven by security considerations.

The most important challenges I faced were: protecting location data in transit, controlling who can see the location, and providing a mechanism to stop sharing immediately. I used the latest encryption and authentication standards to ensure the protection of app users.

This article covers the complete technical journey from security design to implementation.`,
    },
    tags: ["Security", "Privacy", "Web Development"],
  },
];
