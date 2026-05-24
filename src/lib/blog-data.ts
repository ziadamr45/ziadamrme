export const blogPosts = [
  {
    slug: "building-modern-web-apps",
    title: { ar: "بناء تطبيقات ويب حديثة: رحلتي مع Next.js", en: "Building Modern Web Apps: My Journey with Next.js" },
    date: "2026-05-23",
    excerpt: {
      ar: "كيف بدأت مع Next.js ولماذا أصبح إطار العمل المفضل لدي لبناء تطبيقات ويب متكاملة وسريعة.",
      en: "How I got started with Next.js and why it became my go-to framework for building complete, fast web applications.",
    },
    content: {
      ar: `بدأت رحلتي مع Next.js منذ فترة، وكانت نقطة تحول كبيرة في مسيرتي كمطور ويب. قبل Next.js، كنت أواجه صعوبات حقيقية في بناء تطبيقات ويب متكاملة بأداء عالي. كنت أستخدم React لوحده، وكل مرة أحتاج أعمل Server-Side Rendering أو SEO محترم، كنت أضطر أعيد اختراع العجلة. Next.js وفّر لي الحل الأمثل مع ميزات مثل Server-Side Rendering وStatic Site Generation من أول يوم.

أهم ما يميز Next.js هو تجربة المطور الممتازة. نظام الملفات التلقائي للتوجيه (File-based Routing) غيّر طريقة تعاملي مع المشروع بالكامل. بدل ما أكتب إعدادات Routing معقدة، كل صفحة في مجلد app تتحول تلقائيًا لمسار. هذا وفّر عليّ وقت كثير وجعل هيكل المشروع واضح ومنظم. كذلك دعم TypeScript المدمج والتحسين التلقائي للصور من خلال مكون Image كلها ميزات جعلت عملية التطوير أكثر سلاسة وإنتاجية.

في مشروع إسمع راديو، كان Next.js هو الخيار الأمثل لعدة أسباب. التطبيق يحتاج SEO قوي عشان محطات الراديو تظهر في نتائج البحث، وNext.js بـ Server-Side Rendering وفّر ده بشكل تلقائي. كمان كنا محتاجين سرعة تحميل عالية لأن المستخدم بيدخل يسمع راديو مش يستنى صفحة تحمّل. مع Next.js قدرنا نحقق أداء ممتاز في Lighthouse وأوقات تحميل سريعة.

أما في مشروع المخبر، فكان التحدي مختلف. التطبيق يعتمد على مكالمات صوتية حية عبر LiveKit، وكنت محتاج إدارة حالة معقدة بين اللاعبين. Next.js ساعدني إنني أفصل بين الصفحات الثابتة (مثل الصفحة الرئيسية وقواعد اللعبة) والصفحات الديناميكية (غرفة اللعب) بشكل واضح. Server Components وفّرت أداء أفضل لأن الأجزاء الثابتة من الصفحة بتتحمل مرة واحدة.

مشروع معركة الأسئلة كان تطبيق آخر أثبت فيه Next.js قوته. التطبيق يعتمد على Socket.io للاتصال في الوقت الحقيقي، وكنت محتاج API Routes للتعامل مع الأحداث. Next.js بـ API Routes المتكاملة جعلني أقدر أبني الـ backend والـ frontend في مكان واحد بدون الحاجة لسيرفر منفصل. ده وفّر وقت كبير في التطوير وجعل النشر أسهل.

من أهم الدروس اللي تعلمتها: استخدم Server Components للبيانات الثابتة وClient Components للتفاعل فقط. في البداية كنت بخلي كل حاجة Client Component، وبعدين اكتشفت إن ده بيأثر على الأداء وحجم الـ JavaScript المُحمّل. كمان تعلمت إن Image Optimization في Next.js مش مجرد ميزة لطيفة، دي ضرورة عشان الأداء على الموبايل.

نصيحتي لأي حد بيبدأ مع Next.js: ابدأ بالمشروع الصغير وافهم الأساسيات كويس قبل ما تتحول للمشاريع الكبيرة. اتعلم الفرق بين Server Components وClient Components، وافهم إزاي data fetching يختلف عن React العادي. واستفيد من App Router الجديد لأنه بيوفر مرونة أكبر بكثير من Pages Router القديم.

في النهاية، Next.js مش مجرد إطار عمل، ده رفيق رحلة المطور. كل مشروع بنيته بيه كان تجربة تعلم جديدة. من إسمع راديو لمعركة الأسئلة لطمني، كل تطبيق علمني حاجة جديدة عن Next.js وعن تطوير الويب بشكل عام. لو لسه ما جربتهوش، أنصحك تبدأ النهاردة — هتلاقي نفسك بتبني تطبيقات أفضل وأسرع.`,
      en: `I started my journey with Next.js a while ago, and it was a major turning point in my career as a web developer. Before Next.js, I struggled with real difficulties building complete, high-performance web applications. I was using React alone, and every time I needed Server-Side Rendering or proper SEO, I had to reinvent the wheel. Next.js provided me with the ideal solution with features like Server-Side Rendering and Static Site Generation from day one.

What makes Next.js stand out is the excellent developer experience. The file-based routing system completely changed how I approach projects. Instead of writing complex routing configurations, every page in the app folder automatically becomes a route. This saved me significant time and made the project structure clear and organized. The built-in TypeScript support and automatic image optimization through the Image component are features that made development smoother and more productive.

In the Esma3 Radio project, Next.js was the optimal choice for several reasons. The app needs strong SEO so radio stations appear in search results, and Next.js with Server-Side Rendering provided this automatically. We also needed fast loading because users come to listen to radio, not to wait for a page to load. With Next.js, we achieved excellent Lighthouse scores and fast loading times.

In the Elmokhber project, the challenge was different. The app relies on live voice calls via LiveKit, and I needed to manage complex state between players. Next.js helped me clearly separate static pages (like the homepage and game rules) from dynamic pages (the game room). Server Components provided better performance because static parts of the page load only once.

The Battle of Questions project was another application where Next.js proved its strength. The app relies on Socket.io for real-time communication, and I needed API Routes to handle events. Next.js with integrated API Routes let me build the backend and frontend in one place without needing a separate server. This saved significant development time and made deployment easier.

One of the most important lessons I learned: use Server Components for static data and Client Components only for interactivity. Initially, I made everything a Client Component, then discovered this affects performance and the loaded JavaScript bundle size. I also learned that Image Optimization in Next.js isn't just a nice feature — it's essential for mobile performance.

My advice for anyone starting with Next.js: begin with a small project and understand the fundamentals well before moving to large projects. Learn the difference between Server Components and Client Components, and understand how data fetching differs from regular React. Take advantage of the new App Router because it offers much more flexibility than the older Pages Router.

Ultimately, Next.js isn't just a framework — it's a developer's journey companion. Every project I built with it was a new learning experience. From Esma3 Radio to Battle of Questions to Tammeny, each app taught me something new about Next.js and web development in general. If you haven't tried it yet, I recommend starting today — you'll find yourself building better, faster applications.`,
    },
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    slug: "real-time-apps-socketio",
    title: { ar: "تطبيقات الوقت الحقيقي باستخدام Socket.io", en: "Real-Time Apps with Socket.io" },
    date: "2026-05-23",
    excerpt: {
      ar: "دليل عملي لبناء تطبيقات تفاعلية في الوقت الحقيقي باستخدام Socket.io وNext.js مع أمثلة من مشاريع حقيقية.",
      en: "A practical guide to building real-time interactive applications using Socket.io and Next.js with examples from real projects.",
    },
    content: {
      ar: `التطبيقات التفاعلية في الوقت الحقيقي أصبحت ضرورة في عالم الويب الحديث. من ألعاب متعددة اللاعبين إلى تطبيقات الدردشة وأنظمة الإشعارات، Socket.io يوفر الأساس المثالي لبناء هذه التطبيقات. في هذا المقال، هشارك تجربتي العملية مع Socket.io وكيف استخدمته في مشاريع حقيقية.

في مشروع معركة الأسئلة، استخدمت Socket.io لإنشاء نظام غرف لعب تفاعلي يسمح للاعبين بالتنافس في الوقت الحقيقي. التحدي الأكبر كان إدارة حالة اللعبة عبر جميع العملاء المتصلين. كل حاجة في اللعبة لازم تتزامن: الأسئلة، الإجابات، النقاط، المؤقت. لو أي حاجة اتأخرت حتى ثانية واحدة، اللعبة هتبقى ظالمة للاعب اللي استنى أكتر.

تصميم معمارية Socket.io مع Next.js كان التحدي الأول. Next.js بيعمل Server-Side Rendering، وSocket.io محتاج اتصال مستمر. الحل كان إني أعمل Custom Server أو أستخدم API Route كمكان لإنشاء Socket.io Server. في معركة الأسئلة، استخدمت نمط مختلط: Next.js للواجهات وSocket.io Server منفصل يعمل على بورت تاني. الاتصال بين الاتنين بيتم عبر الأحداث (Events).

أهم نمط تصميمي تعلمته هو "Server as Source of Truth". في البداية كنت بخلي كل عميل (Client) يدير حالة اللعبة لوحده، وده أدى لمشاكل كتير في التزامن. بعد كده غيّرت النهج وخليت السيرفر هو المصدر الوحيد للحقيقة. كل إجراء بيتعمل على العميل بيتعمل Validate على السيرفر الأول، وبعدين السيرفر بيبث التحديث لكل العملاء. ده ضمن إن كل اللاعبين شايفين نفس الحاجة في نفس الوقت.

إدارة الغرف (Rooms) في Socket.io كانت ميزة أساسية. كل غرفة لعب ليها Room خاص، ولو لاعب انضم، بينضم للـ Room ده. لما سؤال بيتعرض، السيرفر بيبعته لكل اللي في الـ Room بس، مش لكل الناس على السيرفر. كمان لما لاعب بيسحب إجابته، السيرفر بيعمل Validate وبيحدث النقاط ويبثها لكل اللاعبين في الغرفة.

مشكلة انقطاع الاتصال كانت من أكتر المشاكل اللي واجهتها. في لعبة زي معركة الأسئلة، لو لاعب فقد الاتصال في نص الجولة، لازم نتعامل مع الموقف ده بذكاء. الحل اللي استخدمته كان: لما اللاعب بيفقد الاتصال، السيرفر بيحتفظ بمكانه لمدة 30 ثانية. لو رجع، بيستكمل من حيث ما وقف. لو مارجعش، السيرفر بيطلعه من الغرفة وبيوزع نقاطه على خصومه.

تحدي تاني كان الأداء تحت الضغط. لما بيكون في كذا غرفة شغالة في نفس الوقت، والكل بيضغط إجابات في نفس اللحظة، السيرفر بيحتاج يعالج أحداث كتير جدًا في وقت قصير. استخدمت Redis Adapter عشان أقدر أوسع النظام (Scale) على أكتر من سيرفر لو احتجت، وكمان استخدمت Rate Limiting عشان أمنع أي عميل من إغراق السيرفر بالأحداث.

من النصائح المهمة اللي أقدر أديها: استخدم Socket.io Rooms دايمًا عشان تفصل بين مجموعات المستخدمين. اعمل Validation على السيرفر لكل حاجة، متثقش في البيانات اللي جاية من العميل. واختبر أداء التطبيق تحت ضغط عالي قبل ما تنشره.

في النهاية، Socket.io أداة قوية جدًا بس محتاجة تصميم كويس من الأول. مش بس إنك تعمل emit وon، لازم تفكر في المعمارية والتزامن والأمان. تجربتي في معركة الأسئلة علمتني إن التطبيقات الوقت حقيقي محتاجة تخطيط أكتر من التطبيقات العادية، بس النتيجة بتكون تجربة مستخدم مذهلة مش هتقدر تحققها بأي طريقة تانية.`,
      en: `Real-time interactive applications have become essential in the modern web world. From multiplayer games to chat applications and notification systems, Socket.io provides the ideal foundation for building these applications. In this article, I'll share my practical experience with Socket.io and how I used it in real projects.

In the Battle of Questions project, I used Socket.io to create an interactive game room system that allows players to compete in real time. The biggest challenge was managing game state across all connected clients. Everything in the game needs to be synchronized: questions, answers, scores, and the timer. If anything is delayed even by a single second, the game becomes unfair to the player who waited longer.

Designing the architecture of Socket.io with Next.js was the first challenge. Next.js does Server-Side Rendering, and Socket.io needs a persistent connection. The solution was to create a Custom Server or use an API Route as the place to set up the Socket.io Server. In Battle of Questions, I used a hybrid pattern: Next.js for the frontend and a separate Socket.io Server running on a different port. Communication between them happens through events.

The most important design pattern I learned is "Server as Source of Truth." Initially, I let each client manage its own game state, which led to many synchronization problems. After that, I changed the approach and made the server the sole source of truth. Every action on the client gets validated on the server first, then the server broadcasts the update to all clients. This ensured all players see the same thing at the same time.

Room management in Socket.io was an essential feature. Each game room has its own Room, and when a player joins, they join that Room. When a question is displayed, the server sends it only to everyone in that Room, not to everyone on the server. Also, when a player submits an answer, the server validates it, updates the score, and broadcasts it to all players in the room.

The disconnection problem was one of the biggest challenges I faced. In a game like Battle of Questions, if a player loses connection mid-round, we need to handle that situation intelligently. The solution I used: when a player loses connection, the server keeps their spot for 30 seconds. If they return, they continue from where they left off. If they don't return, the server removes them from the room and distributes their points to opponents.

Another challenge was performance under pressure. When multiple rooms are active simultaneously, and everyone is submitting answers at the same instant, the server needs to process many events in a very short time. I used the Redis Adapter to scale the system across multiple servers if needed, and Rate Limiting to prevent any client from flooding the server with events.

Key advice I can give: always use Socket.io Rooms to separate groups of users. Validate everything on the server — never trust data coming from the client. And test your application's performance under high load before deploying.

Ultimately, Socket.io is a very powerful tool but requires good design from the start. It's not just about emit and on — you need to think about architecture, synchronization, and security. My experience with Battle of Questions taught me that real-time applications require more planning than regular apps, but the result is an amazing user experience that you simply can't achieve any other way.`,
    },
    tags: ["Socket.io", "Real-Time", "Next.js"],
  },
  {
    slug: "secure-location-sharing",
    title: { ar: "مشاركة الموقع بأمان: التحديات والحلول", en: "Secure Location Sharing: Challenges and Solutions" },
    date: "2026-05-23",
    excerpt: {
      ar: "نظرة تقنية على التحديات الأمنية في تطبيقات مشاركة الموقع وكيف تعاملت معها في تطبيق طمني.",
      en: "A technical look at security challenges in location sharing apps and how I addressed them in the Tammeny app.",
    },
    content: {
      ar: `تطبيقات مشاركة الموقع الجغرافي تثير مخاوف أمنية مشروعة، وده أمر طبيعي ومتوقع. الموقع الجغرافي من أكثر البيانات حساسية لأنه بيحدد مكان وجودك الفعلي، ولو وقع في إيدين غلط ممكن يسبب مشاكل جدية. في تطبيق طمني، كان الأمان هو الأولوية القصوى منذ البداية. من تشفير البيانات إلى التحكم في الصلاحيات، كل قرار تصميمي كان مدفوعًا باعتبارات أمنية.

أول حاجة فكرت فيها كانت: إزاي أحمي بيانات الموقع أثناء النقل؟ الإجابة كانت واضحة — تشفير HTTPS إجباري لكل الاتصالات. بس ده مش كافي. حتى لو الاتصال مشفر، لو السيرفر بيخزن الموقع كنص عادي (plaintext)، أي حد يوصل لقاعدة البيانات هيعرف مكانك. عشان كده استخدمت تشفير إضافي على مستوى التطبيق. الموقع بيتشفّر قبل ما يتخزن في قاعدة البيانات، ومفتاح التشفير محفوظ في مكان آمن منفصل عن قاعدة البيانات.

التحدي التاني كان: مين يقدر يشوف الموقع؟ في طمني، المستخدم هو اللي بيحدد مين يشوف موقعه. كل مشاركة ليها صلاحيات واضحة: إما شخص معين عبر رابط مؤقت، أو أفراد العائلة في الحلقة العائلية. النظام بيتأكد إن كل طلب عرض موقع بيتعمل Validate — مفيش طريقة تقدر تتخطى الصلاحيات وتشوف موقع حد مش شاركه معاك.

روابط المشاركة المؤقتة كانت فكرة أساسية. المستخدم بيختار المدة: 15 دقيقة، ساعة، 3 ساعات، أو يوم كامل. بعد انتهاء المدة، الرابط بيتعطل تلقائيًا ومش بيقدر حد يوصل للموقع تاني. التطبيق بيستخدم توكنات مشفرة (JWT) ليها تاريخ انتهاء صلاحية. حتى لو حد حاول يستخدم الرابط بعد انتهاء الصلاحية، السيرفر هيرفضه فورًا.

إيقاف المشاركة الفوري كان مطلب أساسي. المستخدم لازم يقدر يوقف مشاركة موقعه في أي لحظة بضغطة واحدة. لما المستخدم بيدوس على "إيقاف المشاركة"، التطبيق بيحذف التوكن النشط وبيبث حدث لكل المتابعين إن الموقع مش متاح بعد كده. العملية دي بتتم في أقل من ثانية.

تحدي تاني واجهته كان استهلاك البطارية. التتبع المستمر للموقع بيستنزف البطارية بسرعة. الحل كان إني أعمل نظام ذكي بيغير تردد التحديث حسب حالة البطارية. لو البطارية فوق 50٪، التحديث بيكون كل 10 ثواني. لو تحت 50٪، بيكون كل 30 ثانية. لو تحت 20٪، بيكون كل دقيقة. كمان استخدمت Significant Location Change بدل Standard Location لما التطبيق يكون في الخلفية.

من أهم الدروس اللي تعلمتها في مشروع طمني: الأمان مش ميزة بتضيفها في الآخر، ده جزء أساسي من التصميم من الأول. لو بدأت تبني التطبيق وبعدين فكرت في الأمان، هتضطر تعيد كتابة أجزاء كبيرة. كمان تعلمت إن تجربة المستخدم والأمان مش متناقضين — ممكن تعمل تطبيق آمن وسهل الاستخدام في نفس الوقت لو فكرت في الاتنين من البداية.

نصيحة أخيرة: اختبر نظام الأمان بتاعك بنفسك. حاول تتخطى الحماية، حاول تستخدم الرابط بعد انتهاء الصلاحية، حاول توصل لموقع حد مش شاركه معاك. الاختبار الذاتي ده هيكشف ثغرات ماكنتش متوقعها. في طمني، كل ثغرة اكتشفتها بالاختبار الذاتي أصلحتها قبل ما التطبيق ينشر.`,
      en: `Location sharing apps raise legitimate security concerns, and that's completely natural and expected. Geographic location is one of the most sensitive types of data because it reveals your actual physical presence, and if it falls into the wrong hands, it can cause serious problems. In the Tammeny app, security was the highest priority from the very start. From data encryption to access control, every design decision was driven by security considerations.

The first thing I thought about was: how do I protect location data in transit? The answer was clear — mandatory HTTPS encryption for all connections. But that's not enough. Even if the connection is encrypted, if the server stores location as plaintext, anyone who accesses the database will know your location. That's why I used additional application-level encryption. Location gets encrypted before being stored in the database, and the encryption key is kept in a secure location separate from the database.

The second challenge was: who can see the location? In Tammeny, the user determines who can see their location. Every share has clear permissions: either a specific person via a temporary link, or family members in the family circle. The system ensures every location view request is validated — there's no way to bypass permissions and see someone's location who hasn't shared it with you.

Temporary sharing links were a core concept. The user chooses the duration: 15 minutes, 1 hour, 3 hours, or a full day. After the duration expires, the link automatically deactivates and no one can access the location anymore. The app uses encrypted tokens (JWT) with expiration dates. Even if someone tries to use the link after expiration, the server rejects it immediately.

Instant sharing stop was a fundamental requirement. The user must be able to stop sharing their location at any moment with a single tap. When the user presses "Stop Sharing," the app deletes the active token and broadcasts an event to all followers that the location is no longer available. This entire process completes in under a second.

Another challenge I faced was battery consumption. Continuous location tracking drains the battery quickly. The solution was to implement a smart system that changes the update frequency based on battery status. If the battery is above 50%, updates happen every 10 seconds. Below 50%, every 30 seconds. Below 20%, every minute. I also used Significant Location Change instead of Standard Location when the app is in the background.

One of the most important lessons I learned in the Tammeny project: security isn't a feature you add at the end — it's an integral part of the design from the start. If you start building the app and then think about security, you'll have to rewrite large portions. I also learned that user experience and security aren't contradictory — you can build a secure and user-friendly app at the same time if you think about both from the beginning.

A final piece of advice: test your security system yourself. Try to bypass the protection, try to use a link after expiration, try to access someone's location who hasn't shared it with you. This self-testing will reveal vulnerabilities you didn't expect. In Tammeny, every vulnerability I discovered through self-testing, I fixed before the app was published.`,
    },
    tags: ["Security", "Privacy", "Web Development"],
  },
  {
    slug: "building-arabic-web-apps",
    title: { ar: "من المخبر لطمني: رحلة بناء تطبيقات ويب عربية", en: "From Elmokhber to Tammeny: Building Arabic Web Apps" },
    date: "2026-05-23",
    excerpt: {
      ar: "مناقشة معمقة عن التحديات والمكافآت في بناء تطبيقات ويب مخصصة للمستخدمين العرب، تصميم RTL، الخطوط العربية، الاعتبارات الثقافية.",
      en: "Deep discussion about the challenges and rewards of building web applications specifically for Arabic-speaking users, RTL design, Arabic typography, and cultural considerations.",
    },
    content: {
      ar: `بناء تطبيقات ويب للمستخدمين العرب رحلة فريدة مش بتشبه بناء تطبيقات بالإنجليزي. من أول ما بدأت أعمل إسمع راديو، وانا بمر بتحديات ماكنتش متوقعها. في المقال ده هشارك الخبرات اللي اكتسبتها من بناء أكتر من تطبيق عربي، وإزاي التعامل مع اللغة العربية في الويب بيفرّق تمامًا عن أي لغة تانية.

أول وأكبر تحدي هو دعم RTL (Right-to-Left). العربية بتتكتب من اليمين للشمال، وده بيأثر على كل حاجة في الصفحة: التخطيط، الترتيب، الأيقونات، الاتجاهات. في البداية كنت بعكس كل حاجة يدويًا — الـ margin-left تبقى margin-right والـ padding كمان. ده كان مرهق ومصدر أخطاء كتير. بعدين اكتشفت إن Tailwind CSS بيدعم RTL بشكل ممتاز من خلال الأدوات rtl: وltr:. بس المشكلة الأكبر كانت في المكونات اللي بتتغير اتجاهها: السلايدر، الـ dropdown، الـ tooltip — كل دول محتاجين اهتمام خاص.

الخطوط العربية تحدي لوحده. معظم الخطوط المتاحة على الويب مصممة للاتيني (Latin) ومش بتاخد في الاعتبار خصائص الخط العربي. الخط العربي بيحتاج مساحة أفقية أكبر، والحروف بتتصل ببعض بطريقة مختلفة حسب موقعها في الكلمة. جربت خطوط كتير ولقيت إن خطوط زي Cairo وTajawal وNoto Kufi Arabic بتقدم تجربة قراءة أفضل بكثير. بس لاحظت إن تحميل الخطوط العربية بيأثر على سرعة الصفحة، عشان ملفات الخطوط العربية أكبر من الاتينية.

الاعتبارات الثقافية مش أقل أهمية. في إسمع راديو، إضافة قسم القرآن الكريم كانت مطلب أساسي من المستخدمين العرب. بس إضافة القسم ده محتاجة احترام واهتمام: اتجاه النص، نوع الخط، الألوان المستخدمة، طريقة عرض الآيات. كل حاجة لازم تكون محترمة ومناسبة. في تطبيق المخبر، أسماء الأدوار والشخصيات كانت بالعربي ومصممة تناسب الثقافة العربية.

Localization مقابل Internationalization فرق مهم. في طمني، عملت ثنائي اللغة (عربي/إنجليزي) من الأول، وده كان القرار الصح. بس مجرد الترجمة مش كافي — التصميم نفسه لازم يتكيف. مثلاً، في العربية الجمل أطول بـ 20-30٪ عن الإنجليزية، وده بيأثر على المساحات والأزرار والبطاقات. كمان التواريخ والأرقام بتختلف: في مصر بنستخدم الأرقام العربية (١٢٣) وفي بلاد تانية بتستخدم الأرقام الغربية (123).

واجهة المستخدم العربية ليها احتياجات خاصة. المستخدم العربي بيحب الألوان الدافئة والتصاميم الغنية، بعكس الميل للبساطة الشديدة في التصميم الغربي. في إيه الكلام، استخدمت ألوان دافئة وتصميم نابض بالحياة عشان يناسب طبيعة الترندات المصرية. كمان المستخدم العربي بيحتاج أيقونات واضحة ومفهومة لأن شريحة كبيرة من المستخدمين مش مرتاحة مع الرموز المجردة.

من أكثر الأخطاء الشائعة اللي شفتها في التطبيقات العربية: إهمال اتجاه النص في حقول الإدخال لما بيكتب المستخدم بالإنجليزي جملة عربية. كمان مشكلة إظهار الأرقام بنفس التنسيق في كل مكان. في تطبيقاتي، استخدمت مكتبة لتحويل الأرقام تلقائيًا حسب اللغة المختارة.

نصيحتي لأي حد عايز يبني تطبيق عربي: ابدأ بالتصميم RTL من الأول — متستناش لآخر المشروع. اختار خطوط عربية من أول يوم واختبرها على شاشات مختلفة. واعمل اختبارات مع مستخدمين عرب حقيقيين عشان تفهم احتياجاتهم. التصميم للعرب مش مجرد ترجمة — ده تفكير مختلف من الأول.`,
      en: `Building web applications for Arabic-speaking users is a unique journey that doesn't resemble building English-language apps. From the moment I started working on Esma3 Radio, I encountered challenges I hadn't expected. In this article, I'll share the insights I gained from building multiple Arabic apps, and how dealing with Arabic on the web is fundamentally different from any other language.

The first and biggest challenge is RTL (Right-to-Left) support. Arabic is written from right to left, and this affects everything on the page: layout, ordering, icons, and directions. Initially, I was manually reversing everything — margin-left becomes margin-right, and padding too. This was exhausting and a source of many bugs. Then I discovered that Tailwind CSS supports RTL excellently through the rtl: and ltr: utilities. But the bigger problem was with components that change direction: sliders, dropdowns, tooltips — all of these need special attention.

Arabic typography is a challenge on its own. Most web-available fonts are designed for Latin scripts and don't account for Arabic script characteristics. Arabic script needs more horizontal space, and letters connect differently depending on their position in the word. I tried many fonts and found that fonts like Cairo, Tajawal, and Noto Kufi Arabic provide a much better reading experience. But I noticed that loading Arabic fonts affects page speed because Arabic font files are larger than Latin ones.

Cultural considerations are no less important. In Esma3 Radio, adding a Quran section was a fundamental request from Arab users. But adding this section requires respect and attention: text direction, font type, colors used, and how verses are displayed. Everything must be respectful and appropriate. In the Elmokhber app, role names and characters were in Arabic and designed to fit Arab culture.

Localization versus Internationalization is an important distinction. In Tammeny, I made it bilingual (Arabic/English) from the start, and that was the right decision. But mere translation isn't enough — the design itself must adapt. For example, Arabic sentences are 20-30% longer than English ones, which affects spacing, buttons, and cards. Dates and numbers also differ: in Egypt, we use Arabic numerals (١٢٣) while other countries use Western numerals (123).

Arabic user interfaces have special needs. Arab users tend to prefer warm colors and rich designs, unlike the tendency toward extreme minimalism in Western design. In Eah ElKalam, I used warm colors and a vibrant design to suit the nature of Egyptian trends. Arab users also need clear and understandable icons because a large segment of users isn't comfortable with abstract symbols.

One of the most common mistakes I've seen in Arabic apps: neglecting text direction in input fields when the user writes English within an Arabic sentence. Also, the problem of displaying numbers in the same format everywhere. In my apps, I used a library to automatically convert numbers based on the selected language.

My advice for anyone wanting to build an Arabic app: start with RTL design from the beginning — don't wait until the end of the project. Choose Arabic fonts from day one and test them on different screens. And conduct tests with real Arab users to understand their needs. Designing for Arabic isn't just translation — it's a different way of thinking from the start.`,
    },
    tags: ["Arabic", "Web Development", "UI/UX"],
  },
  {
    slug: "web-security-lessons",
    title: { ar: "الأمان في تطبيقات الويب: دروس تعلمتها", en: "Web App Security: Lessons I Learned" },
    date: "2026-05-23",
    excerpt: {
      ar: "غوص عميق في ممارسات أمان الويب التي تعلمتها من بناء تطبيقات حقيقية — منع XSS، حماية CSRF، أنماط المصادقة الآمنة، وأكثر.",
      en: "Deep dive into web security practices learned from building real applications — XSS prevention, CSRF protection, secure authentication patterns, and more.",
    },
    content: {
      ar: `الأمان في تطبيقات الويب مش رفاهية — ده ضرورة. وأنا ببني تطبيقات زي طمني وإسمع راديو ونظام الإقبال، اكتشفت إن الثغرات الأمنية مش نظرية، دي حقيقية وممكن تحصل لأي حد. في المقال ده هشارك الدروس اللي تعلمتها بالطريقة الصعبة عشان ماتتعلمهاش بنفس الطريقة.

أول درس كان عن XSS (Cross-Site Scripting). في مشروع بسيط كنت بعمله، كنت بعرض تعليقات المستخدمين بدون ما أعالج النص (sanitize). يوم اكتشفت إن شخص قدر يحط كود JavaScript في التعليق وشغّله على أجهزة المستخدمين التانيين. من يومها وأنا بستخدم DOMPurify لتنظيف أي HTML بتأتي من المستخدم قبل ما أعرضه. كمان React بطبيعته بيحمي من XSS لأنه بيهرب (escape) النصوص تلقائيًا، بس لما بتستخدم dangerouslySetInnerHTML بتفقد الحماية دي.

الدرس التاني كان عن CSRF (Cross-Site Request Forgery). تخيل إنك داخل في طمني ومشارك موقعك، وفجأة تفتح موقع تاني خبيث يبعت طلب لطمني باسمك بدون ماتعرف. الحل كان استخدام CSRF Tokens — كل نموذج بيحتوي على توكن سري يتأكد منه السيرفر. في نظام الإقبال، كل نموذج تسجيل بيحتوي على CSRF Token عشان نتأكد إن الطلب جاي من الموقع نفسه مش من مكان تاني.

أكبر غلطة عملتها كانت مع متغيرات البيئة (.env). في واحد من مشاريعي الأولى، كنت حاطط مفتاح API في الكود نفسه مش في ملف .env. وبالصدفة رفعت الكود على GitHub بالخطأ. خلال ساعات، لقى حد استخدم المفتاح وعمل آلاف الطلبات على حسابي. من يومها وأنا بستخدم .env.local للبيانات الحساسة وبأتأكد إن .gitignore بيستثني الملفات دي. كمان استخدمت Vercel Environment Variables للنشر عشان المفاتيح متكونش في الكود أصلًا.

المصادقة الآمنة في نظام الإقبال كانت تجربة تعليمية مهمة. استخدمت OTP عبر البريد الإلكتروني بدل كلمات السر التقليدية. السبب: كلمات السر ممكن تتخمن ويكون ليها قاموس، بس OTP ليه صلاحية محدودة وبيتغير كل مرة. كمان استخدمت Rate Limiting على إرسال OTP عشان أمنع الـ brute force. كل عنوان IP مش يقدر يطلب أكتر من 5 OTP في الساعة.

Rate Limiting عمومًا درس مهم. في إسمع راديو، لاحظت إن في bots بتحاول تجلب آلاف المحطات في ثواني. أضفت Rate Limiting على كل API Endpoint وده حماي من الـ DDoS ومن الاستخدام المفرط للموارد. استخدمت نمط Sliding Window Rate Limiting اللي بيسمح بـ 100 طلب كل 15 دقيقة لكل مستخدم.

التحقق من المدخلات (Input Validation) مش رفاهية — ده خط الدفاع الأول. في كل تطبيقاتي، بتحقق من كل حاجة بتأتي من المستخدم: النوع، الطول، التنسيق. استخدمت Zod للتحقق من النماذج في Next.js وده وفّر عليّ كتابة Validation يدوي. في نظام الإقبال، بيانات الطالب لازم تتطابق مع أنماط محددة: الإيميل لازم يكون صحيح، الرقم المصري لازم يبدأ بـ 01 ويتكون من 11 رقم.

نصيحة أخيرة ومهمة: الأمان عملية مستمرة مش خطوة واحدة. كل ما تكتشف ثغرة جديدة، أصلحها ووثّقها. اعمل Security Audit دوري لكودك. واستخدم أدوات زي npm audit عشان تكتشف الثغرات في المكتبات اللي بتستخدمها. الثغرات الأمنية مش عيب فيك كمطور — العيب إنك تتجاهلها.`,
      en: `Security in web applications isn't a luxury — it's a necessity. While building apps like Tammeny, Esma3 Radio, and Eleqbal Form, I discovered that security vulnerabilities aren't theoretical; they're real and can happen to anyone. In this article, I'll share the lessons I learned the hard way so you don't have to learn them the same way.

The first lesson was about XSS (Cross-Site Scripting). In a simple project I was working on, I was displaying user comments without sanitizing the text. One day I discovered someone had inserted JavaScript code into a comment and executed it on other users' devices. Since that day, I've used DOMPurify to sanitize any HTML coming from users before displaying it. React naturally protects against XSS because it escapes text automatically, but when you use dangerouslySetInnerHTML, you lose that protection.

The second lesson was about CSRF (Cross-Site Request Forgery). Imagine you're logged into Tammeny and sharing your location, and suddenly you open a malicious website that sends a request to Tammeny under your name without you knowing. The solution was using CSRF Tokens — every form contains a secret token that the server verifies. In Eleqbal Form, every registration form includes a CSRF Token to ensure the request comes from the site itself, not from elsewhere.

The biggest mistake I made was with environment variables (.env). In one of my early projects, I put an API key directly in the code instead of in a .env file. By accident, I pushed the code to GitHub. Within hours, someone found the key and made thousands of requests on my account. Since then, I use .env.local for sensitive data and make sure .gitignore excludes these files. I also use Vercel Environment Variables for deployment so keys are never in the code at all.

Secure authentication in Eleqbal Form was an important learning experience. I used OTP via email instead of traditional passwords. The reason: passwords can be guessed and have dictionary attacks, but OTP has limited validity and changes every time. I also used Rate Limiting on OTP sending to prevent brute force attacks. Each IP address can't request more than 5 OTPs per hour.

Rate Limiting in general is an important lesson. In Esma3 Radio, I noticed bots trying to fetch thousands of stations in seconds. I added Rate Limiting on every API Endpoint, which protected against DDoS and excessive resource usage. I used a Sliding Window Rate Limiting pattern allowing 100 requests per 15 minutes per user.

Input Validation isn't a luxury — it's the first line of defense. In all my applications, I validate everything coming from the user: type, length, format. I used Zod for form validation in Next.js, which saved me from writing manual validation. In Eleqbal Form, student data must match specific patterns: email must be valid, Egyptian phone number must start with 01 and be 11 digits long.

A final important piece of advice: security is an ongoing process, not a one-time step. Every time you discover a new vulnerability, fix it and document it. Do periodic security audits of your code. Use tools like npm audit to discover vulnerabilities in the libraries you use. Security vulnerabilities aren't a flaw in you as a developer — the flaw is ignoring them.`,
    },
    tags: ["Security", "Web Development", "Best Practices"],
  },
  {
    slug: "tailwind-css-journey",
    title: { ar: "Tailwind CSS: لماذا أصبح أسلوبي المفضل", en: "Tailwind CSS: Why It Became My Go-To Style" },
    date: "2026-05-23",
    excerpt: {
      ar: "مقارنة تفصيلية بين Tailwind وCSS التقليدي، وإزاي الأسلوب العملي (Utility-First) غيّر طريقة عملي، مع أمثلة حقيقية من مشاريعي.",
      en: "Detailed comparison of Tailwind vs traditional CSS, how utility-first methodology changed my workflow, with real examples from my projects.",
    },
    content: {
      ar: `لما بدأت أتعلم CSS، كنت كتبت كل حاجة بالطريقة التقليدية: أسماء كلاسات معبرة، ملفات CSS منفصلة، وكل كلاس ليه خصائص محددة. كنت حاسس إن ده الطريقة الصح والأكثر تنظيمًا. بس مع كبر المشاريع، لقيت نفسي بتكتب CSS أكتر من الكود نفسه.Tailwind CSS غيّر الطريقة دي تمامًا، وفي المقال ده هقولك إزاي وليه.

أول حاجة لاحظتها مع Tailwind كانت السرعة. بدل ما أفتح ملف CSS وأكتب كلاس جديد وأروح أضيفه في HTML، بقيت أكتب كل حاجة في مكان واحد. في إسمع راديو، الصفحة الرئيسية كانت محتاجة تصميم معقد: بطاقات محطات، مشغل صوت، قسم قرآن. بالـ CSS التقليدي كان هاخد يومين بس في التنسيق. مع Tailwind خلصت في نص يوم.

المقارنة بين Tailwind وCSS التقليدي مش مجرد مسألة تفضيل شخصي. في CSS التقليدي، كل مرة بتكتب كلاس جديد بيزيد حجم الملف، وبتحصل تكرار كتير. في Tailwind، الأدوات (Utilities) بتتُعاد استخدامها في كل مكان، والـ PurgeCSS بيحذف اللي مش مستخدم. النتيجة: ملف CSS أصغر بكثير. في مشروع المخبر، ملف CSS النهائي كان أقل من 10KB مقارنة بـ 50KB بالطريقة التقليدية.

التخصيص (Customization) في Tailwind كان نقطة تحول. ملف tailwind.config بيخليك تتحكم في كل حاجة: الألوان، المسافات، الخطوط، نقاط التوقف. في تطبيق طمني، عرفت أضيف لون براند خاص (أخضر للأمان) وأستخدمه في كل مكان بسهولة. لو حبيت أغيره، بغيره في مكان واحد بس. ده مستحيل تقريبًا بالـ CSS التقليدي من غير preprocessors زي SASS.

التصميم المتجاوب (Responsive Design) مع Tailwind تجربة مختلفة تمامًا. بدل ما أكتب media queries منفصلة، بكتب البادئة مباشرة: sm:, md:, lg:, xl:. في إسمع راديو، بطاقات المحطات بتظهر عمودين على الموبايل وتلاتة على التابلت وأربعة على الكمبيوتر. الكود ده بيكون واضح ومقروء في مكان واحد: grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4.

الوضع الداكن (Dark Mode) مع Tailwire بسيط جدًا. بادئة dark: قبل أي أداة بتخليها تتنفذ في الوضع الداكن بس. في تطبيق الطقس، الوضع الداكن كان مطلب أساسي عشان التطبيق بيستخدمه الناس في أوقات مختلفة من اليوم. كل اللي عملته إني أضفت dark: قبل الألوان والخلفيات وخلصت. بالـ CSS التقليدي، كنت محتاج أكتب media query منفصلة لكل عنصر.

أكبر نقد بيتقال عن Tailwind هو إن HTML بيكون مليان كلاسات وبيبقى صعب القراءة. وده صحيح في البداية. بس مع الوقت بتتعلم تنظم الكلاسات: الأول الأساسيات (display, position)، بعدين الأبعاد (width, height, padding)، بعدين الألوان والحدود، وفي الآخر التفاعلات (hover, focus). كمان استخراج المكونات (Component Extraction) بيحل المشكلة دي — لما عنصر بيتكرر، بتعمله مكون منفصل.

مثال حقيقي من معركة الأسئلة: كرت السؤال كان بيتكرر في كل جولة. بدل ما أكتب الكلاسات كل مرة، عملت مكون QuestionCard واستخدمته في كل مكان. الكلاسات الطويلة بقت في مكان واحد بس، والاستخدام بقي نظيف ومقروء.

نصيحتي: لو لسه ما جربت Tailwind، ابدأ بمشروع صغير. هتزعل في الأول من شكل الكود، بس بعد أسبوع هتلاقي نفسك أسرع بكتير. واستخدم VS Code Extension بتاع Tailwind عشان الـ autocomplete — ده بيغيّر حياتك. وأهم حاجة: اتعلم تنظيم الكلاسات عشان الكود يفضل مقروء.`,
      en: `When I started learning CSS, I wrote everything the traditional way: expressive class names, separate CSS files, and each class had specific properties. I felt this was the correct and most organized approach. But as projects grew, I found myself writing more CSS than actual code. Tailwind CSS completely changed that approach, and in this article, I'll tell you how and why.

The first thing I noticed with Tailwind was speed. Instead of opening a CSS file, writing a new class, and then going to add it in the HTML, I now write everything in one place. In Esma3 Radio, the homepage needed a complex design: station cards, audio player, Quran section. With traditional CSS, styling alone would have taken two days. With Tailwind, I finished in half a day.

The comparison between Tailwind and traditional CSS isn't just a matter of personal preference. In traditional CSS, every new class increases the file size, and there's a lot of repetition. In Tailwind, utilities are reused everywhere, and PurgeCSS removes unused ones. The result: a much smaller CSS file. In the Elmokhber project, the final CSS file was under 10KB compared to 50KB with the traditional approach.

Customization in Tailwind was a turning point. The tailwind.config file lets you control everything: colors, spacing, fonts, breakpoints. In the Tammeny app, I added a special brand color (green for security) and used it everywhere easily. If I wanted to change it, I change it in one place only. This is virtually impossible with traditional CSS without preprocessors like SASS.

Responsive Design with Tailwind is a completely different experience. Instead of writing separate media queries, I write prefixes directly: sm:, md:, lg:, xl:. In Esma3 Radio, station cards show 2 columns on mobile, 3 on tablet, and 4 on desktop. The code is clear and readable in one place: grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4.

Dark Mode with Tailwind is extremely simple. The dark: prefix before any utility makes it apply only in dark mode. In the Weather App, dark mode was essential since people use it at different times of day. All I did was add dark: before colors and backgrounds, and it was done. With traditional CSS, I would have needed separate media queries for each element.

The biggest criticism of Tailwind is that HTML becomes full of classes and hard to read. This is true initially. But over time, you learn to organize classes: first basics (display, position), then dimensions (width, height, padding), then colors and borders, and finally interactions (hover, focus). Component extraction also solves this problem — when an element repeats, you make it a separate component.

A real example from Battle of Questions: the question card repeated every round. Instead of writing classes every time, I made a QuestionCard component and used it everywhere. The long classes ended up in one place only, and usage became clean and readable.

My advice: if you haven't tried Tailwind yet, start with a small project. You'll be frustrated at first by how the code looks, but after a week you'll find yourself much faster. Use the Tailwind VS Code Extension for autocomplete — it's life-changing. And most importantly, learn to organize your classes so the code stays readable.`,
    },
    tags: ["CSS", "Tailwind", "Frontend"],
  },
  {
    slug: "database-journey",
    title: { ar: "نظام قواعد البيانات: من SQLite لـ PostgreSQL", en: "Database Systems: From SQLite to PostgreSQL" },
    date: "2026-05-23",
    excerpt: {
      ar: "رحلة تطور اختيارات قواعد البيانات عبر المشاريع، وليه PostgreSQL هو الخيار الأفضل للتطبيقات الإنتاجية، وفوائد وعيوب Prisma ORM.",
      en: "Evolution of database choices across projects, why PostgreSQL is the best choice for production apps, and the pros and cons of Prisma ORM.",
    },
    content: {
      ar: `قاعدة البيانات هي قلب أي تطبيق ويب. واختيار قاعدة البيانات الصح قرار بياثر على كل حاجة في المشروع: الأداء، الأمان، قابلية التوسع، وحتى سرعة التطوير. في المقال ده هشارك رحلتي مع قواعد البيانات من SQLite لـ PostgreSQL، وإزاي Prisma غيّر طريقة تعاملي مع البيانات.

بدأت بـ SQLite في أول مشاريعي. SQLite ممتاز للمشاريع الصغيرة والنماذج الأولية — مفيش سيرفر لازم تشغله، الملف بتاع قاعدة البيانات بيتحط في المشروع نفسه، وكل حاجة شغالة فورًا. في مشروع بسيط زي نظام الإقبال في البداية، SQLite كان كافي. بس لما المشروع كبر ولما عدد المستخدمين زاد، ظهرت مشاكل: SQLite مش بيقدر يتعامل مع اتصالات متزامنة كتير، ومفيش Features متقدمة زي Full-Text Search أو JSONB.

الانتقال لـ PostgreSQL كان نقطة تحول. في إسمع راديو، كان محتاجين قاعدة بيانات تتعامل مع آلاف المحطات ومئات المستخدمين في نفس الوقت. PostgreSQL وفّر ده وأكتر. دعم JSONB خلاه سهل أخزن بيانات المحطات المتغيرة بدون ما أعمل Schema معقد. كمان Full-Text Search الأصلي ساعدني أعمل بحث سريع في أسماء المحطات بدون مكتبات خارجية.

Prisma ORM كان الحلقة اللي ربطت كل حاجة. بدل ما أكتب SQL يدوي واتعامل مع الاتصالات والـ Migrations، Prisma وفّرلي Schema واضح ومقروء، TypeScript types تلقائية، وMigration system بيدير التغييرات في قاعدة البيانات. في طمني، الـ Schema كان بسيط وواضح: موديل User، موديل LocationShare، موديل FamilyCircle. كل علاقة معرّفة بوضوح في ملف schema.prisma.

من أكبر فوائد Prisma: الـ Type Safety. لما بتكتب كود بتاعك، كل حاجة ليها نوع واضح. لو حبيت تعمل Query على المستخدمين، Prisma بيرجعلك Type دقيق فيه كل الحقول اللي في الموديل. ده بيمنع أخطاء كتير جدًا وبيخلي الـ autocomplete يشتغل بشكل ممتاز. في معركة الأسئلة، الـ Types ساعدتني أتعامل مع بيانات اللاعبين والجولات بدون أي خطأ في وقت التشغيل.

بس Prisma مش كامل. من أكتر الحاجات اللي بتزعلني: الـ N+1 Query Problem. لما بتعمل query على موديل ليه علاقات، أحيانًا Prisma بيعمل query لكل سجل على حدة بدل ما يعمل JOIN واحد. الحل هو تستخدم include بذكاء أو تفعّل_previewFeatures = "relationJoinMode" عشان تجبر Prisma يستخدم JOINs. كمان Prisma مش بيقدر يعمل بعض الـ Queries المعقدة اللي SQL بيعملها بسهولة، زي Window Functions أو CTEs. في الحالات دي، بتضطر تستخدم $queryRaw وتكتب SQL يدوي.

تصميم الـ Schema فن بحد ذاته. من أهم الأنماط اللي تعلمتها: استخدم علاقات كتيرة لكثير (Many-to-Many) عبر جداول وسيطة بدل ما تحاول تختصرها. في إسمع راديو، العلاقة بين المحطات والمستخدمين (المفضلات) كانت Many-to-Many، وعملت جدول وسيط Favorite فيه تواريخ وبيانات إضافية. كمان تعلمت إن الـ Indexes مش رفاهية — كل حقل بتدور عليه كتير لازم يكون عليه Index. بعد ما أضفت Index على اسم المحطة، البحث بقي أسرع بـ 10 مرات.

استراتيجية الـ Migration مع Prisma كانت نقطة قوة. كل تغيير في الـ Schema بيعمل Migration جديد فيه التغييرات بس، مش قاعدة البيانات كلها. ده بيخلي التراجع عن التغييرات سهل وبيحفظ تاريخ التعديلات. بس لازم تكون حذر: Migration اللي اتعمل ميرجعش بسهولة لو فيه بيانات موجودة. عشان كده دايماً بعمل Backup قبل أي Migration كبير.

نصيحتي للي بيبدأ: ابدأ بـ SQLite عشان السرعة في التطوير، بس خطط للانتقال لـ PostgreSQL من الأول. استخدم Prisma عشان الـ Type Safety والـ Migrations، بس اتعلم SQL كويس عشان تعرف تعمل Queries معقدة لو احتجت. ودايمًا اختبر أداء قاعدة البيانات مع بيانات حقيقية مش بيانات تجريبية صغيرة.`,
      en: `The database is the heart of any web application. And choosing the right database is a decision that affects everything in the project: performance, security, scalability, and even development speed. In this article, I'll share my journey with databases from SQLite to PostgreSQL, and how Prisma changed the way I handle data.

I started with SQLite in my first projects. SQLite is excellent for small projects and prototypes — there's no server to run, the database file sits in the project itself, and everything works instantly. In a simple project like Eleqbal Form initially, SQLite was sufficient. But as the project grew and user numbers increased, problems emerged: SQLite can't handle many concurrent connections, and lacks advanced features like Full-Text Search or JSONB.

Moving to PostgreSQL was a turning point. In Esma3 Radio, we needed a database that could handle thousands of stations and hundreds of users simultaneously. PostgreSQL provided that and more. JSONB support made it easy to store variable station data without a complex schema. Native Full-Text Search helped me implement fast searching across station names without external libraries.

Prisma ORM was the link that tied everything together. Instead of writing SQL manually and dealing with connections and migrations, Prisma provided a clear, readable schema, automatic TypeScript types, and a migration system that manages database changes. In Tammeny, the schema was simple and clear: User model, LocationShare model, FamilyCircle model. Every relationship is clearly defined in the schema.prisma file.

One of Prisma's biggest benefits: Type Safety. When writing your code, everything has a clear type. If you want to query users, Prisma returns an exact type with all the fields in the model. This prevents many runtime errors and makes autocomplete work perfectly. In Battle of Questions, the Types helped me handle player and round data without any runtime errors.

But Prisma isn't perfect. One of the most frustrating things: the N+1 Query Problem. When querying a model with relationships, sometimes Prisma makes a separate query for each record instead of a single JOIN. The solution is to use include wisely or enable _previewFeatures = "relationJoinMode" to force Prisma to use JOINs. Also, Prisma can't do some complex queries that SQL handles easily, like Window Functions or CTEs. In those cases, you have to use $queryRaw and write SQL manually.

Schema design is an art in itself. One of the most important patterns I learned: use Many-to-Many relationships through intermediate tables instead of trying to shortcut them. In Esma3 Radio, the relationship between stations and users (favorites) was Many-to-Many, and I created an intermediate Favorite table with dates and additional data. I also learned that Indexes aren't a luxury — every field you search frequently should have an Index. After adding an Index on station name, search became 10 times faster.

The Migration strategy with Prisma was a strong point. Every schema change creates a new migration with only the changes, not the entire database. This makes rolling back changes easy and preserves modification history. But be careful: migrations that have been applied aren't easily reversible if data exists. That's why I always make a backup before any major migration.

My advice for beginners: start with SQLite for development speed, but plan the transition to PostgreSQL from the beginning. Use Prisma for Type Safety and Migrations, but learn SQL well so you can write complex queries when needed. And always test database performance with real data, not small test datasets.`,
    },
    tags: ["Database", "PostgreSQL", "Prisma"],
  },
  {
    slug: "pwa-journey",
    title: { ar: "تطبيقات الويب التقدمية: من المتصفح لشاشة الهاتف", en: "Progressive Web Apps: From Browser to Home Screen" },
    date: "2026-05-24",
    excerpt: {
      ar: "كيف حوّلت تطبيقات الويب بتاعتي لتطبيقات قابلة للتثبيت على الهاتف — تجربتي العملية مع PWA في إسمع راديو وتطبيق الطقس.",
      en: "How I turned my web apps into installable phone applications — my practical experience with PWA in Esma3 Radio and Weather App.",
    },
    content: {
      ar: `التطبيقات التقدمية للويب (PWA) غيرت نظرتي لإزاي تطبيق الويب يقدر يوصل للمستخدم. قبل ما أتعامل مع PWA، كنت شايف إن تطبيقات الويب محدودة مقارنة بتطبيقات الموبايل الأصلية — مفيش وصول أوفلاين، مفيش إشعارات، ومفيش أيقونة على شاشة الهاتف. بس مع PWA، قدرت أقرب الفجوة دي بشكل كبير. في المقال ده هشارك تجربتي العملية مع PWA في إسمع راديو وتطبيق الطقس.

أول حاجة عملتها كانت في إسمع راديو. التطبيق ده بيتستخدم أساسًا على الموبايل — الناس بتسمع راديو وهي راكبة أو في الجيم أو بتمشي. فكان منطقي إني أخليه يشتغل كتطبيق قابل للتثبيت. بدأت بملف manifest.json اللي بيوفر للمتصفح كل المعلومات اللي محتاجها: اسم التطبيق، الأيقونات بأحجام مختلفة، لون الثيم، واتجاه الشاشة. لما المستخدم بيدخل الموقع أول مرة، المتصفح بيقترح عليه يثبت التطبيق على شاشة الهاتف. نسبة التثبيت كانت حوالي 30٪ من المستخدمين — رقم محترم قوي.

الـ Service Worker كان العنصر الأساسي. ده سكريبت بيشتغل في الخلفية وبيتحكم في كل طلبات الشبكة. في إسمع راديو، استخدمت استراتيجية Cache First لملفات الـ CSS والـ JavaScript والخطوط — يعني أول مرة بيتحملوا من الإنترنت وبعدين يتخزنوا في الـ Cache وكل مرة تانية بيتخدموا من هناك. ده خلى التطبيق يفتح بشكل فوري بعد أول زيارة. أما بيانات المحطات فاستخدمت Network First — يعني بيحاول يجيبها من الإنترنت الأول، ولو ماقدرش، بيرجع للـ Cache.

دعم الأوفلاين في إسمع راديو كان تحدي خاص. لما المستخدم بيكون أوفلاين، مش هيسمع راديو حي طبعًا، بس قدرت أعرض له رسالة واضحة "أنت مش متصل بالإنترنت" مع المحطات اللي اتحملت قبل كده كمرجع. كمان قدرت أخلي أيقونة التطبيق وشاشة البداية تظهر حتى لو مفيش إنترنت — ده بيخلي المستخدم يحس إن التطبيق حقيقي مش مجرد موقع.

في تطبيق الطقس، التحدي كان مختلف. بيانات الطقس بتتغير كل ساعة تقريبًا، فاستراتيجية Caching لازم تكون ذكية. استخدمت Stale-While-Revalidate — يعني أعرض البيانات القديمة من الـ Cache فورًا، وفي نفس الوقت بطلب البيانات الجديدة من الإنترنت. لما البيانات الجديدة توصل، بأحدث الشاشة. ده بيدي إحساس بالسرعة لأن المستخدم بيشوف حاجة فورًا، وفي نفس الوقت البيانات بتكون أحدث ما يمكن.

أكبر مشكلة واجهتها كانت تحديث الـ Service Worker نفسه. لما بنزّع نسخة جديدة من التطبيق، الـ Service Worker القديم بيستمر يشتغل حتى المستخدم يقفل كل التبويبات ويفتح التطبيق تاني. ده معناه إن المستخدم ممكن يفضل يشوف النسخة القديمة لأيام! الحل كان إني أستخدم skipWaiting وclientsClaim عشان الـ Service Worker الجديد يشتغل فورًا. بس ده بيجيب مشكلة تانية — لو كان في طلب جاري شغال، ممكن يتقاطع مع الـ Cache الجديد. عشان كده بعرض رسالة "تحديث متاح — اضغط هنا للتحديث" بدل ما أجبر المستخدم على التحديث.

تجربة التثبيت (Install Prompt) كانت نقطة مهمة. المتصفح بيقترح التثبيت تلقائيًا بس ده بيحصل في وقت مش مثالي أحيانًا. استخدمت الحدث beforeinstallprompt عشان أتدخل وأعرض رسالة تثبيت مخصصة في الوقت المناسب — مثلاً بعد ما المستخدم يسمع راديو لمدة 5 دقائق، أعرض له "ثبّت إسمع راديو على هاتفك للوصول السريع". الرسالة المخصصة دي زادت نسبة التثبيت بنسبة 40٪ مقارنة بالاقتراح الافتراضي من المتصفح.

الفروق بين PWA والتطبيقات الأصلية لسه موجودة — مفيش وصول كامل لكل APIs بتاعة النظام، والأداء مش زي التطبيق الأصلي بالضبط. بس للمستخدم العربي اللي أغلب استخدامه على الموبايل، PWA بتوفر تجربة ممتازة بدون ما يحتاج يحمل تطبيق من المتجر. في إسمع راديو، 60٪ من الاستخدام بيكون من الموبايل، وPWA خلت التجربة أقرب كتير لتطبيق أصلي.

نصيحتي لأي حد عايز يضيف PWA لتطبيقه: ابدأ بالأساسيات — manifest.json وService Worker بسيط يخزن الملفات الثابتة. بعدين ضيف استراتيجيات Caching متقدمة تدريجيًا. متحاولش تعمل كل حاجة مرة واحدة. واختبر على أجهزة حقيقية — المحاكي مش بيمثل تجربة المستخدم الحقيقي. كمان اهتم بتجربة التثبيت — الرسالة المخصصة بتفرق جدًا.`,
      en: `Progressive Web Apps (PWA) changed my perspective on how a web app can reach users. Before working with PWA, I saw web apps as limited compared to native mobile apps — no offline access, no notifications, no home screen icon. But with PWA, I was able to significantly close that gap. In this article, I'll share my practical experience with PWA in Esma3 Radio and Weather App.

The first thing I did was in Esma3 Radio. This app is primarily used on mobile — people listen to radio while commuting, at the gym, or walking. So it made sense to make it work as an installable app. I started with a manifest.json file that provides the browser with all the information it needs: app name, icons in various sizes, theme color, and screen orientation. When a user visits the site for the first time, the browser suggests installing the app on their home screen. The install rate was around 30% of users — a pretty solid number.

The Service Worker was the fundamental element. This is a script that runs in the background and controls all network requests. In Esma3 Radio, I used a Cache First strategy for CSS, JavaScript, and font files — meaning they're fetched from the internet the first time, then stored in the cache and served from there every subsequent time. This made the app load almost instantly after the first visit. For station data, I used Network First — it tries to fetch from the internet first, and if that fails, it falls back to the cache.

Offline support in Esma3 Radio was a unique challenge. When the user is offline, they obviously can't listen to live radio, but I was able to display a clear "You're not connected to the internet" message along with previously loaded stations as reference. I also made sure the app icon and splash screen appear even without internet — this makes the user feel it's a real app, not just a website.

In the Weather App, the challenge was different. Weather data changes roughly every hour, so the caching strategy needs to be smart. I used Stale-While-Revalidate — I display the old data from the cache immediately, while simultaneously requesting fresh data from the internet. When the new data arrives, I update the screen. This gives a sense of speed because the user sees something instantly, while the data is as fresh as possible.

The biggest problem I faced was updating the Service Worker itself. When I deploy a new version of the app, the old Service Worker continues running until the user closes all tabs and reopens the app. This means a user might see the old version for days! The solution was to use skipWaiting and clientsClaim so the new Service Worker takes effect immediately. But this introduces another problem — if there's an ongoing request, it might conflict with the new cache. That's why I show an "Update available — click here to update" message instead of forcing the update on users.

The install prompt experience was a key point. The browser suggests installation automatically, but this sometimes happens at a non-ideal time. I used the beforeinstallprompt event to intervene and show a custom install message at the right moment — for example, after a user has been listening to radio for 5 minutes, I show "Install Esma3 Radio on your phone for quick access." This custom message increased the install rate by 40% compared to the browser's default prompt.

The differences between PWA and native apps still exist — no full access to all system APIs, and performance isn't exactly like a native app. But for Arabic users whose usage is predominantly mobile, PWA provides an excellent experience without needing to download an app from the store. In Esma3 Radio, 60% of usage is from mobile, and PWA made the experience much closer to a native app.

My advice for anyone wanting to add PWA to their app: start with the basics — manifest.json and a simple Service Worker that caches static files. Then gradually add advanced caching strategies. Don't try to do everything at once. And test on real devices — the emulator doesn't represent the real user experience. Also, pay attention to the install experience — a custom prompt makes a real difference.`,
    },
    tags: ["PWA", "Web Development", "Mobile"],
  },
  {
    slug: "web-push-notifications",
    title: { ar: "إشعارات الويب: تواصل مع مستخدميك في أي وقت", en: "Web Push Notifications: Reaching Users Anytime" },
    date: "2026-05-24",
    excerpt: {
      ar: "رحلتي في بناء نظام إشعارات ويب متكامل — من مفاتيح VAPID لتجربة المستخدم، مع أمثلة من لوحة الإشعارات وإسمع راديو.",
      en: "My journey building a complete web push notification system — from VAPID keys to user experience, with examples from Notifications dashboard and Esma3 Radio.",
    },
    content: {
      ar: `الإشعارات من أقوى الطرق اللي تقدر توصل بيها لمستخدميك. بس برضه من أكتر الحاجات اللي ممكن تزعجهم لو اتعاملت معاها غلط. بنيت لوحة الإشعارات كمشروع متكامل، وأضفت إشعارات ويب لإسمع راديو، واتعلمت دروس كتير عن Web Push API وتجربة المستخدم. في المقال ده هشارك الرحلة دي من أول مفاتيح VAPID لحد الإشعارات اللي بتوصل فعلاً.

أول خطوة كانت فهم إزاي Web Push بيشتغل. النظام بيحتاج تلاتة أطراف: التطبيق بتاعك (الـ Client)، الـ Push Service (الوسيط اللي بيوصّل الإشعار)، والـ Service Worker (اللي بيستقبل الإشعار وبيعرضه). لما المستخدم بيوافق على الإشعارات، التطبيق بيتواصل مع الـ Push Service وبيعمل Subscription — ده بيرجع كائن فيه Endpoint وKeys. الكائن ده بتبعته لسيرفرك عشان تستخدمه بعد كده تبعت إشعارات.

مفاتيح VAPID كانت من أكتر الحاجات اللي اتعبني في البداية. VAPID (Voluntary Application Server Identification) هي طريقة المصادقة اللي بتأكد للـ Push Service إنك أنت المرسل الحقيقي. لازم تولّد زوج مفاتيح — المفتاح العام اللي بتسجله في الـ Push Service والمفتاح الخاص اللي بتحفظه على السيرفر. لو المفتاح الخاص اتسرب، أي حد يقدر يبعت إشعارات باسمك. في لوحة الإشعارات، حفظت المفتاح الخاص في Environment Variables وعملت Rotation كل فترة.

إدارة الـ Subscriptions كانت تحدي لوحده. كل مستخدم ليه Subscription مختلف، وده معناه إنك محتاج تخزن كل الـ Subscriptions في قاعدة البيانات. بس المشكلة إن الـ Subscriptions ممكن تنتهي — المتصفح بيحدث الـ Endpoint أحيانًا، أو المستخدم بيلغي الصلاحية، أو بيمسح الـ Service Worker. عشان كده عملت نظام تنظيف بيمسح الـ Subscriptions الغير صالحة كل يوم. لما ببعت إشعار ويرجع خطأ 410 (Gone)، بحذف الـ Subscription ده من قاعدة البيانات.

في لوحة الإشعارات، بنيت واجهة إدارية كاملة تسمح بإرسال إشعارات مخصصة. الأدمن يقدر يختار الفئة المستهدفة (كل المستخدمين، مستخدمين محددين، أو اللي اشتروا منتج معين)، يكتب العنوان والمحتوى، ويحدد وقت الإرسال. كمان أضفت جدولة (Scheduling) — يعني تقدر تكتب الإشعار دلوقتي وتحدد يتبعت بكرة الساعة 10 الصبح. النظام بيستخدم Cron Jobs عشان يفحص الإشعارات المجدولة كل دقيقة ويبعت اللي وقتها وصل.

في إسمع راديو، استخدمت الإشعارات بطريقة مختلفة. بدل ما أبعت إشعارات تسويقية، ببعت إشعارات ليها قيمة حقيقية: لما محطة جديدة بتتضاف، لما فيه عرض خاص على اشتراك، أو لما في تحديث مهم. الخدمة بتاعتنا بتسمح للمستخدم يختار إيه نوع إشعارات عايزه — محطات جديدة بس، أو تحديثات فقط، أو كل حاجة. التخصيص ده زود نسبة التفاعل مع الإشعارات بشكل ملحوظ.

أكبر تحدي كان إقناع المستخدمين يوافقوا على الإشعارات. نسبة الموافقة على الإشعارات على الويب أقل بكتير من التطبيقات الأصلية — حوالي 10-15٪ بس. عشان أزوّد النسبة دي، استخدمت استراتيجية "الطلب المتأخر" — مابطلبش صلاحية الإشعارات أول ما المستخدم يدخل الموقع. بدل كده، باستنى لحد ما المستخدم يعمل حاجة تظهر اهتمامه، وبعدين أطلب الصلاحية. مثلاً في إسمع راديو، بعد ما المستخدم يسمع راديو 3 مرات، بعرض له رسالة "عايز تتوصلك إشعارات لما محطات جديدة تتضاف؟". النسبة زادت لـ 35٪ بالاستراتيجية دي.

إشعار التعب (Notification Fatigue) مشكلة حقيقية. لو بعت إشعارات كتير، المستخدم هيلغي الصلاحية أو هيحظر الموقع. عملت قاعدة: مابعتش أكتر من إشعارين في اليوم للمستخدم الواحد. كمان بختار الأوقات المناسبة — مابعتش إشعارات في وسط الليل! استخدمت التوقيت المحلي للمستخدم عشان أضمن إن الإشعار بيوصل في وقت مناسب. في لوحة الإشعارات، أضفت تحليلات بسيطة: عدد الإشعارات المرسلة، نسبة الضغط عليها (Click Rate)، وعدد المستخدمين اللي لغوا الاشتراك. البيانات دي بتساعدني أحسن الإشعارات بمرور الوقت.

الفرق بين Web Push والإشعارات داخل التطبيق (In-App) مهم. Web Push بتوصل للمستخدم حتى لو الموقع مقفول — ده قوتها الأساسية. بس الإشعارات داخل التطبيق أوضح وأسهل في التفاعل. في مشاريعي، باستخدم الاتنين مع بعض: Web Push للأحداث المهمة اللي محتاج اهتمام فوري، وإشعارات داخل التطبيق للتحديثات العادية اللي المستخدم يشوفها لما يفتح التطبيق.

نصيحتي: لو هتضيف إشعارات ويب، فكر في تجربة المستخدم الأول. متطلبش الصلاحية من أول زيارة — ده بيخوف الناس. اختار الأوقات الصح للإرسال، وقلل عدد الإشعارات لأقصى حد ممكن. كلم إشعار لازم يكون ليه قيمة حقيقية للمستخدم. ودايمًا استخدم لوحة تحكم تتابع بيها أداء الإشعارات — الـ Click Rate والـ Unsubscribe Rate هم أفضل مؤشراتك.`,
      en: `Notifications are one of the most powerful ways to reach your users. But they're also one of the easiest ways to annoy them if handled poorly. I built the Notifications dashboard as a complete project, and added web push to Esma3 Radio, learning many lessons about the Web Push API and user experience along the way. In this article, I'll share the journey from VAPID keys to notifications that actually get through.

The first step was understanding how Web Push works. The system needs three parties: your application (the Client), the Push Service (the intermediary that delivers the notification), and the Service Worker (which receives and displays the notification). When a user agrees to notifications, the app communicates with the Push Service and creates a Subscription — this returns an object containing an Endpoint and Keys. You send this object to your server so you can use it later to send notifications.

VAPID keys were one of the things that gave me the most trouble initially. VAPID (Voluntary Application Server Identification) is the authentication method that assures the Push Service you're the legitimate sender. You need to generate a key pair — the public key you register with the Push Service, and the private key you keep on the server. If the private key leaks, anyone can send notifications in your name. In the Notifications dashboard, I stored the private key in Environment Variables and rotated it periodically.

Managing Subscriptions was a challenge on its own. Each user has a different Subscription, which means you need to store all Subscriptions in the database. But the problem is that Subscriptions can expire — the browser sometimes updates the Endpoint, the user might revoke permission, or delete the Service Worker. That's why I built a cleanup system that removes invalid Subscriptions daily. When I send a notification and get a 410 (Gone) error, I delete that Subscription from the database.

In the Notifications dashboard, I built a complete admin interface that allows sending customized notifications. The admin can choose the target audience (all users, specific users, or those who purchased a particular product), write the title and content, and set the sending time. I also added scheduling — you can write a notification now and set it to be sent tomorrow at 10 AM. The system uses Cron Jobs to check scheduled notifications every minute and send those whose time has arrived.

In Esma3 Radio, I used notifications differently. Instead of sending marketing notifications, I send notifications with real value: when a new station is added, when there's a special subscription offer, or when there's an important update. Our service allows the user to choose what type of notifications they want — new stations only, updates only, or everything. This customization noticeably increased notification engagement rates.

The biggest challenge was convincing users to agree to notifications. The web notification opt-in rate is much lower than native apps — only about 10-15%. To increase this, I used a "delayed ask" strategy — I don't request notification permission as soon as the user visits the site. Instead, I wait until the user does something that shows interest, then ask for permission. For example, in Esma3 Radio, after a user listens to radio 3 times, I show a message "Would you like to receive notifications when new stations are added?" The rate increased to 35% with this strategy.

Notification fatigue is a real problem. If you send too many notifications, the user will revoke permission or block the site. I made a rule: no more than 2 notifications per day per user. I also choose appropriate times — I don't send notifications in the middle of the night! I use the user's local time zone to ensure the notification arrives at a suitable time. In the Notifications dashboard, I added simple analytics: number of notifications sent, click rate, and number of users who unsubscribed. This data helps me improve notifications over time.

The difference between Web Push and in-app notifications is important. Web Push reaches the user even when the site is closed — that's its core strength. But in-app notifications are clearer and easier to interact with. In my projects, I use both together: Web Push for important events that need immediate attention, and in-app notifications for regular updates the user sees when they open the app.

My advice: if you're adding web notifications, think about the user's first experience. Don't ask for permission on the first visit — it scares people. Choose the right times to send, and minimize the number of notifications as much as possible. Every notification must provide real value to the user. And always use a dashboard to monitor notification performance — Click Rate and Unsubscribe Rate are your best indicators.`,
    },
    tags: ["Notifications", "Web Push", "Web Development"],
  },
  {
    slug: "building-news-aggregator",
    title: { ar: "بناء مجمع أخبار: التحديات التقنية والحلول", en: "Building a News Aggregator: Technical Challenges and Solutions" },
    date: "2026-05-24",
    excerpt: {
      ar: "ما وراء الكواليس في بناء بوابة الحدث — التعامل مع أخبار API متعددة، التخزين المؤقت، خوارزميات الترند، والتلخيص الذكي.",
      en: "Behind the scenes of building Bawabet Elhadas — working with multiple news APIs, caching, trending algorithms, and AI summarization.",
    },
    content: {
      ar: `بناء مجمع أخبار زي بوابة الحدث كان من أكتر المشاريع اللي علمتني حاجات جديدة. المشروع ده مش مجرد موقع بيعرض أخبار — ده نظام متكامل بيجيب أخبار من مصادر كتير، بيخزنها، بيصنفها، بيعملها تلخيص بالذكاء الاصطناعي، وبيعرف يعرض أكتر الأخبار ترندًا لكل مستخدم. في المقال ده هشرح التحديات التقنية اللي واجهتها والحلول اللي استخدمتها.

أول تحدي كان التعامل مع أكتر من مصدر أخبار API. استخدمت GNews وNewsData كمصادر أساسية. كل API ليها شكل بيانات مختلف (Schema)، وحدود استخدام مختلفة (Rate Limits)، وأسعار مختلفة. عشان أتعامل مع التنوع ده، عملت طبقة تجريد (Abstraction Layer) بتحوّل بيانات كل API لصيغة موحدة. يعني مهما كان المصدر، البيانات بتدخل بنفس الشكل في النظام. ده وفر عليّ إني أضيف مصادر جديدة بسهولة بعد كده من غير ما أغير الكود الأساسي.

إدارة حصص الـ API (API Quota Management) كانت مشكلة حقيقية. GNews بيسمح بـ 100 طلب يومي على الباقة المجانية، وNewsData بيسمح بـ 200. لو استهلكت الحصة من واحد، لازم أتحول للتاني تلقائيًا. عملت نظام توجيه (Routing System) بيتابع استهلاك كل API ويحول الطلبات للمصدر المتاح. كمان عملت Caching ذكي — الأخبار مش بتتغير كل ثانية، فهعمل طلب كل 30 دقيقة وأخزن النتائج. ده قلل استهلاك الـ API بنسبة 90٪.

التخزين المؤقت في PostgreSQL مع Prisma كان عمود النظام. كل خبر بيتخزن في قاعدة البيانات مع البيانات الأساسية: العنوان، الوصف، المصدر، الرابط، الصورة، تاريخ النشر، والتصنيف. استخدمت UUID كـ Primary Key وضفت Indexes على تاريخ النشر والتصنيف عشان البحث يكون سريع. كمان أضفت حقل فريد (Unique) على رابط الخبر عشان أمنع التكرار — أحيانًا نفس الخبر بيجي من أكتر من مصدر.

التلخيص بالذكاء الاصطناعي كان من أمتع الأجزاء. استخدمت OpenRouter للوصول لنماذج لغة مختلفة بسعر معقول. لما خبر جديد بيدخل النظام، ببعته للـ API مع Prompt مخصص: "لخص الخبر ده في 3 جمل بالعربي بطريقة واضحة وموجزة". التلخيص بيخلي المستخدم يقرأ الأخبار بسرعة بدون ما يحتاج يفتح كل مقال. بس واجهت مشكلة — التلخيص بيأخذ وقت (حوالي 3-5 ثواني لكل خبر)، فخليته غير متزامن (Asynchronous) — الخبر بيتخزن أولاً وبعدين التلخيص بيضاف لما يخلص.

خوارزمية الترند (Trending Score) كانت التحدي الذكي. إزاي أحدد إيه الأخبار الأهم؟ عملت خوارزمية بتحسب Score بناءً على عدة عوامل: حداثة الخبر (أخبار آخر ساعة أعلى من أخبار من 3 ساعات)، عدد المصادر اللي نشرت نفس الخبر (لو 3 مصادر نشرت نفس الموضوع ده يعني مهم)، وعدد القراء (كل ما أكثر الناس تقرأه كل ما يرتفع). المعادلة بسيطة بس فعالة: Trending Score = Freshness × 0.4 + Source Count × 0.3 + Read Count × 0.3.

التخصيص بناءً على تاريخ القراءة كان ميزة متقدمة. لما المستخدم بيسجل دخول (عبر NextAuth)، النظام بيتابع إيه التصنيفات اللي بيتابعها أكتر — سياسة، رياضة، تكنولوجيا، إلخ. وبعدين بيعرض له الأخبار في التصنيفات المفضلة أولاً. كمان بيتابع إيه المصادر اللي بيفضلها، فأخبار من المصادر دي بتظهر أعلى. التخصيص ده بيخلي كل مستخدم يشوف واجهة مختلفة مخصصة لاهتماماته.

تحديث الأخبار في الوقت الحقيقي بدون WebSocket كان تحدي. ماكنتش عايز أضيف تعقيد WebSocket عشان الأخبار مش محتاجة تحديث كل ثانية. بدل كده استخدمت فحص دوري (Polling) من جهة العميل — كل دقيقة العميل بيسأل السيرفر "في أخبار جديدة؟". السيرفر بيرجع آخر ID للخبر، ولو اختلف عن اللي عند العميل، يجيب الأخبار الجديدة. من جهة السيرفر، استخدمت Cron Jobs بتشغل كل 15 دقيقة وتجلب أخبار جديدة من كل المصادر.

نصيحتي لأي حد عايز يبني مجمع أخبار: ابدأ بمصدر واحد بس وافهم البيانات كويس قبل ما تضيف مصادر تانية. الـ Caching مش رفاهية — ده ضرورة عشان ماتستهلكش حصتك في أول ساعة. والتلخيص بالذكاء الاصطناعي بيضيف قيمة كبيرة بس خليه Asynchronous عشان ميبطّش النظام. وأهم حاجة: اختبر مع مستخدمين حقيقيين عشان تفهم إيه الأخبار اللي بتهمهم وإيه اللي مش بيفرق معاهم.`,
      en: `Building a news aggregator like Bawabet Elhadas was one of the projects that taught me the most new things. This project isn't just a website that displays news — it's a complete system that fetches news from multiple sources, stores it, categorizes it, summarizes it with AI, and knows how to display the most trending news for each user. In this article, I'll explain the technical challenges I faced and the solutions I used.

The first challenge was dealing with more than one news API source. I used GNews and NewsData as primary sources. Each API has a different data schema, different rate limits, and different pricing. To handle this diversity, I created an Abstraction Layer that transforms data from each API into a unified format. This means regardless of the source, data enters the system in the same shape. This saved me from having to change core code when adding new sources later.

API Quota Management was a real problem. GNews allows 100 daily requests on the free tier, and NewsData allows 200. If I exhaust one quota, I need to automatically switch to the other. I built a Routing System that tracks each API's consumption and routes requests to the available source. I also implemented smart caching — news doesn't change every second, so I make requests every 30 minutes and store the results. This reduced API consumption by 90%.

Caching in PostgreSQL with Prisma was the backbone of the system. Each article is stored in the database with core data: title, description, source, link, image, publish date, and category. I used UUID as the Primary Key and added Indexes on publish date and category for fast searching. I also added a Unique constraint on the article link to prevent duplication — sometimes the same article comes from multiple sources.

AI summarization was one of the most enjoyable parts. I used OpenRouter to access different language models at a reasonable price. When a new article enters the system, I send it to the API with a custom prompt: "Summarize this article in 3 sentences in Arabic in a clear and concise way." The summarization lets users read news quickly without needing to open each article. But I encountered a problem — summarization takes time (about 3-5 seconds per article), so I made it asynchronous — the article gets stored first and the summary is added when it's ready.

The Trending Score algorithm was the clever challenge. How do I determine which news is most important? I created an algorithm that calculates a score based on several factors: article freshness (news from the last hour ranks higher than 3-hour-old news), the number of sources that published the same story (if 3 sources published the same topic it's probably important), and reader count (the more people read it, the higher it ranks). The formula is simple but effective: Trending Score = Freshness × 0.4 + Source Count × 0.3 + Read Count × 0.3.

Personalization based on reading history was an advanced feature. When a user logs in (via NextAuth), the system tracks which categories they follow most — politics, sports, technology, etc. Then it shows news in their preferred categories first. It also tracks which sources they prefer, so articles from those sources appear higher. This personalization means each user sees a different interface tailored to their interests.

Updating news in real-time without WebSocket was a challenge. I didn't want to add WebSocket complexity because news doesn't need to update every second. Instead, I used client-side polling — every minute the client asks the server "any new news?" The server returns the latest article ID, and if it differs from what the client has, it fetches the new articles. On the server side, I used Cron Jobs that run every 15 minutes to fetch fresh news from all sources.

My advice for anyone building a news aggregator: start with just one source and understand the data well before adding others. Caching isn't a luxury — it's essential to avoid burning through your quota in the first hour. AI summarization adds huge value but keep it asynchronous so it doesn't slow down the system. And most importantly: test with real users to understand what news matters to them and what doesn't make a difference.`,
    },
    tags: ["API", "Web Development", "News"],
  },
  {
    slug: "building-developer-portfolio",
    title: { ar: "بناء موقع شخصي يمثلك كمطور: دروس من رحلتي", en: "Building a Developer Portfolio That Represents You: Lessons from My Journey" },
    date: "2026-05-24",
    excerpt: {
      ar: "إزاي بنيت الموقع الشخصي اللي بيمثلني كمطور — من التصميم لقاعدة البيانات للمدونة الثنائية اللغة، وكل الدروس اللي تعلمتها.",
      en: "How I built the personal website that represents me as a developer — from design to database to bilingual blog, and all the lessons I learned.",
    },
    content: {
      ar: `الموقع الشخصي بتاعك كمطور هو بطاقتك الرقمية — أول حاجة حد يشوفها لما يبحث عنك أو حد يرشحك لفرصة. لما بدأت أبني ziadamr.me، كان هدفي أعمل مكان يجمع كل مشاريعي الـ 14، يعرض مهاراتي، ويكون فيه مدونة ثنائية اللغة بتشارك خبراتي. في المقال ده هشرح إزاي بنيت الموقع ده والدرس اللي تعلمتها في كل خطوة.

أول قرار كان اختيار التقنيات. استخدمت Next.js طبعًا — ده إطار العمل اللي بستخدمه في كل مشاريعي، وكنت عارفه كويس. بس الموقع الشخصي مختلف شوية — محتاج SEO ممتاز عشان يظهر في جوجل لما حد يبحث عن اسمك، محتاج سرعة تحميل عالية عشان الانطباع الأول، ومحتاج يكون متجاوب على كل الأجهزة. Next.js بـ Server-Side Rendering وStatic Generation وفّر كل ده. استخدمت App Router عشان أستفيد من أحدث الميزات.

تصميم قاعدة البيانات كان خطوة مهمة. استخدمت PostgreSQL مع Prisma كالعادة. الـ Schema كان فيه تلاتة موديلات أساسية: BlogPost للمدونة، Project للمشاريع، وUser للإدارة. موديل BlogPost كان أكتر موديل معقد — فيه حقول للعربي والإنجليزي (title_ar، title_en، content_ar، content_en)، slug فريد، تاريخ النشر، والتاجات. الفصل بين المحتوى العربي والإنجليزي في حقول مختلفة بدل ما أعمل جدول ترجمة منفصل خلى الـ Queries أبسط وأسرع.

نظام المدونة الثنائية اللغة كان تحدي ممتع. كل مقال لازم يكون متاح بالعربي والإنجليزي بنفس الـ Slug. المستخدم بيقدر يبدل بين اللغات بضغطة واحدة. التصميم نفسه بيتكيف — لما تختار العربي، كل حاجة بتتحول لـ RTL: القوائم، النصوص، الأزرار. استخدمت dir="rtl" وdir="ltr" دايناميكيًا حسب اللغة المختارة. كمان الخطوط بتتغير — Cairo للعربي وInter للإنجليزي — عشان كل لغة تكون مقروءة بشكل أمثل.

عرض المشاريع كان من أمتع الأجزاء. كل مشروع من الـ 14 مشروع ليهم بطاقة فيها: الاسم، الوصف المختصر، التقنيات المستخدمة، رابط الديمو الحي، ورابط الكود على GitHub. استخدمت تصنيفات (Filters) عشان الزائر يقدر يفلتر حسب التقنية — مثلاً يختار Next.js ويشوف كل المشاريع اللي اتعملت بيه. البطاقات نفسها اتعملت بـ CSS Grid المتجاوب اللي بيغير عدد الأعمدة حسب حجم الشاشة. كمان أضفت Animation بسيط لما الماوس بيمر على البطاقة — حاجة خفيفة بتخلي التجربة حية.

الوضع الداكن (Dark Mode) كان مطلب أساسي. معظم المطورين بيستخدموا الوضع الداكن، وموقع بيتمثلني لازم يكون فيه. استخدمت next-themes عشان أدير الثيمات بسهولة. التحدي كان إن كل لون في التصميم لازم يكون ليه نسختين — فاتحة وداكنة. عملت نظام ألوان متكامل في tailwind.config فيه primary, secondary, accent, background, surface, وكلهم ليه نسخة dark. النتيجة كانت تصميم متناسق في الوضعين.

SEO كان أولوية من الأول. كل صفحة ليها title وdescription مخصصين بالعربي والإنجليزي. استخدمت next/metadata عشان أضيف Open Graph tags — ده بيخلي الروابط لما تتهاوت في سوشيال ميديا تظهر ببطاقة حلوة فيها عنوان ووصف وصورة. كمان عملت sitemap.xml وrobots.txt تلقائيًا عبر Next.js. وأضفت Schema.org markup للمقالات عشان جوجل يفهم المحتوى أحسن. النتيجة: الموقع بيظهر في أول نتائج البحث لما حد يبحث عن اسمي.

الدومين الخاص خطوة مش هتبخل عليها. داشاري ziadamr.me كان استثمار بسيط بس قيمته كبيرة. الدومين الخاص بيك بيدي انطباع احترافي، بيخلي الناس تفتكر عنوان موقعك، وبيخلي الإيميل بتاعك يبقى professional@ziadamr.me بدل ما يكون gmail. كمان استضافة Vercel كانت مثالية — مجانية للمواقع الشخصية، نشر تلقائي من GitHub، وSSL مجاني. كل مرة بدوس push على main، الموقع بيتحدث تلقائيًا.

الحاجة اللي بتميز بورتفوليو عن التانيين هي المشاريع الحقيقية. مفيش حاجة بتأثر أكتر من إنك تعرض مشاريع اتعملت فعلاً واستخدمها ناس حقيقية. مواقع Tutorial وTodo App مش بتأثر. بس إسمع راديو اللي عليه مستخدمين حقيقيين، وطمني اللي بيحمي خصوصية ناس، ومعركة الأسئلة اللي الناس بتلعبها — دول اللي بيخلو الزائر يحترمك كمطور. عشان كده البورتفوليو بتاعي بيربط كل الـ 14 مشروع مع بعض، وكل واحد فيهم ليه رابط ديمو حي مش مجرد صورة.

نصيحتي لأي مطور لسه ماعملش بورتفوليو: ابدأ النهاردة مش بكرة. حتى لو الموقع بسيط في الأول، وجوده على الإنترنت أهم من عدم وجوده. واعمل تحديثات مستمرة — كل مشروع جديد ضيفه، كل حاجة بتتعلمها اكتب عنها. البورتفوليو مش مشروع بتخلصه، ده كائن حي بيكبر معاك. وأهم حاجة: خليه أنت — مش نسخة من بورتفوليو حد تاني. الشخصية والأسلوب الخاص بيك هم اللي هيميزوك.`,
      en: `Your personal website as a developer is your digital business card — the first thing someone sees when they look you up or when someone recommends you for an opportunity. When I started building ziadamr.me, my goal was to create a space that brings together all 14 of my projects, showcases my skills, and includes a bilingual blog where I share my experiences. In this article, I'll explain how I built this website and the lessons I learned at each step.

The first decision was choosing the tech stack. I used Next.js of course — it's the framework I use in all my projects, and I know it well. But a personal website is a bit different — it needs excellent SEO so it appears in Google when someone searches your name, fast loading for a great first impression, and responsiveness across all devices. Next.js with Server-Side Rendering and Static Generation provided all of this. I used the App Router to take advantage of the latest features.

Database design was an important step. I used PostgreSQL with Prisma as usual. The Schema had three core models: BlogPost for the blog, Project for the portfolio, and User for administration. The BlogPost model was the most complex — it has fields for Arabic and English (title_ar, title_en, content_ar, content_en), a unique slug, publish date, and tags. Separating Arabic and English content in different fields rather than a separate translation table made queries simpler and faster.

The bilingual blog system was an enjoyable challenge. Every article needs to be available in Arabic and English with the same slug. Users can switch between languages with a single click. The design itself adapts — when you choose Arabic, everything switches to RTL: menus, text, buttons. I used dir="rtl" and dir="ltr" dynamically based on the selected language. Fonts also change — Cairo for Arabic and Inter for English — so each language is optimally readable.

The project showcase was one of the most fun parts. Each of the 14 projects has a card with: name, brief description, technologies used, live demo link, and GitHub code link. I used filters so visitors can filter by technology — for example, selecting Next.js to see all projects built with it. The cards themselves use responsive CSS Grid that changes the number of columns based on screen size. I also added a subtle animation on card hover — something light that makes the experience feel alive.

Dark Mode was essential. Most developers use dark mode, and a website that represents me needs to have it. I used next-themes to manage themes easily. The challenge was that every color in the design needs two versions — light and dark. I created a complete color system in tailwind.config with primary, secondary, accent, background, surface, and all have a dark variant. The result was a cohesive design in both modes.

SEO was a priority from the start. Every page has custom title and description in both Arabic and English. I used next/metadata to add Open Graph tags — this makes links show a nice card with title, description, and image when shared on social media. I also built automatic sitemap.xml and robots.txt through Next.js. And I added Schema.org markup for articles so Google understands the content better. The result: the site appears in the top search results when someone searches my name.

Having your own domain is a step you shouldn't skip. The ziadamr.me domain was a simple investment with huge value. A personal domain gives a professional impression, makes your website address memorable, and lets your email be professional@ziadamr.me instead of gmail. Vercel hosting was also ideal — free for personal sites, automatic deployment from GitHub, and free SSL. Every time I push to main, the site updates automatically.

What sets a portfolio apart from others is real projects. Nothing makes an impact more than showcasing projects that were actually built and used by real people. Tutorial sites and Todo Apps don't impress. But Esma3 Radio with real users, Tammeny protecting people's privacy, and Battle of Questions that people actually play — those are what make a visitor respect you as a developer. That's why my portfolio connects all 14 projects together, each with a live demo link, not just a screenshot.

My advice for any developer who hasn't built a portfolio yet: start today, not tomorrow. Even if the site is simple at first, having it online is more important than not having it. And keep updating — add every new project, write about everything you learn. A portfolio isn't a project you finish, it's a living thing that grows with you. And most importantly: make it yours — not a copy of someone else's portfolio. Your personality and style are what will set you apart.`,
    },
    tags: ["Portfolio", "Web Development", "Career"],
  },
];
