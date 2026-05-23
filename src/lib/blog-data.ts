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
];
