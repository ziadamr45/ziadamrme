import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Privacy Policy",
  description:
    "سياسة الخصوصية لموقع زياد عمرو — كيف نجمع ونستخدم ونحمي بياناتك. Privacy policy for Ziad Amr's website.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        alternateName: "الرئيسية",
        item: "https://ziadamrme.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        alternateName: "سياسة الخصوصية",
        item: "https://ziadamrme.vercel.app/privacy-policy",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="relative min-h-screen flex flex-col items-center bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden">
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            سياسة الخصوصية / Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-8">
            آخر تحديث / Last updated: يونيو ٢٠٢٦ / June 2026
          </p>

          <div className="space-y-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {/* Arabic Section */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                بالعربية
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">١. مقدمة</h3>
                  <p>مرحبًا بك في موقع زياد عمرو الشخصي (ziadamrme.vercel.app). نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع البيانات واستخدامها وحمايتها عند زيارتك لموقعنا. باستخدامك لهذا الموقع، فإنك توافق على الممارسات الموصوفة في هذه السياسة.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٢. البيانات التي نجمعها</h3>
                  <p className="mb-2">نجمع أنواعًا مختلفة من البيانات لتقديم وتحسين خدماتنا:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li><strong>بيانات الاستخدام:</strong> نجمع معلومات حول كيفية تفاعلك مع الموقع، بما في ذلك الصفحات التي تزورها، والوقت الذي تقضيه على كل صفحة، والروابط التي تنقر عليها.</li>
                    <li><strong>بيانات الجهاز:</strong> نجمع معلومات عن جهازك مثل نوع المتصفح، ونظام التشغيل، ودقة الشاشة، وعنوان IP.</li>
                    <li><strong>بيانات الموقع الجغرافي:</strong> قد نستخدم عنوان IP لتحديد بلدك تقريبًا لتقديم المحتوى باللغة المناسبة.</li>
                    <li><strong>الكوكيز وتقنيات التتبع:</strong> نستخدم ملفات تعريف الارتباط (الكوكيز) لتخزين تفضيلاتك مثل اللغة والوضع (ليلي/نهاري).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٣. الإعلانات و Google AdSense</h3>
                  <p className="mb-2">نستخدم Google AdSense لعرض الإعلانات على موقعنا. قد تستخدم Google و شركاؤها ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة لموقعنا أو مواقع أخرى. استخدام Google لملفات تعريف الارتباط الإعلانية يمكّنها وشركاءها من عرض إعلانات بناءً على زيارتك لموقعنا و/أو مواقع أخرى على الإنترنت.</p>
                  <p className="mb-2">يمكنك تعطيل الإعلانات المخصصة من خلال زيارة <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">إعدادات إعلانات Google</a>. بدلاً من ذلك، يمكنك تعطيل ملفات تعريف الارتباط الخاصة بالجهات الخارجية عبر <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">Network Advertising Initiative</a>.</p>
                  <p>Google تستخدم ملفات تعريف الارتباط لخدمة الإعلانات بناءً على زيارات المستخدمين لموقعنا. يمكنك رفض استخدام ملفات تعريف الارتباط الإعلانية من خلال زيارة <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">إعدادات إعلانات Google</a>.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٤. كيف نستخدم بياناتك</h3>
                  <ul className="list-disc ps-6 space-y-1">
                    <li>تقديم المحتوى باللغة المفضلة لك</li>
                    <li>تحسين تجربة المستخدم وأداء الموقع</li>
                    <li>عرض إعلانات ذات صلة من خلال Google AdSense</li>
                    <li>الرد على رسائلك من خلال نموذج الاتصال</li>
                    <li>تحليل أنماط الاستخدام لتحسين المحتوى</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٥. حماية البيانات</h3>
                  <p>نتخذ إجراءات أمنية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفشاء أو الإتلاف. نستخدم بروتوكول HTTPS لتشفير جميع الاتصالات بين متصفحك وخوادمنا.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٦. حقوقك</h3>
                  <p className="mb-2">لديك الحق في:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li>الوصول إلى بياناتك الشخصية التي نحتفظ بها</li>
                    <li>طلب تصحيح أو حذف بياناتك</li>
                    <li>رفض معالجة بياناتك لأغراض التسويق</li>
                    <li>تعطيل ملفات تعريف الارتباط في إعدادات المتصفح</li>
                    <li>الاعتراض على الإعلانات المخصصة</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٧. ملفات تعريف الارتباط (الكوكيز)</h3>
                  <p className="mb-2">نستخدم الأنواع التالية من ملفات تعريف الارتباط:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li><strong>كوكيز أساسية:</strong> ضرورية لتشغيل الموقع (تخزين اللغة والوضع المفضل).</li>
                    <li><strong>كوكيز إعلانية:</strong> يستخدمها Google AdSense لعرض إعلانات ذات صلة.</li>
                    <li><strong>كوكيز تحليلية:</strong> تساعدنا في فهم كيفية استخدام الموقع.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٨. الاتصال بنا</h3>
                  <p>إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر:</p>
                  <ul className="list-disc ps-6 space-y-1 mt-2">
                    <li>البريد الإلكتروني: <a href="mailto:ziad90216@gmail.com" className="text-orange-600 dark:text-orange-400 hover:underline">ziad90216@gmail.com</a></li>
                    <li>نموذج الاتصال: <a href="https://ziadamrme.vercel.app/#contact" className="text-orange-600 dark:text-orange-400 hover:underline">ziadamrme.vercel.app/#contact</a></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* English Section */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                In English
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">1. Introduction</h3>
                  <p>Welcome to Ziad Amr&apos;s personal website (ziadamrme.vercel.app). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our site. By using this website, you consent to the practices described in this policy.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">2. Data We Collect</h3>
                  <p className="mb-2">We collect different types of data to provide and improve our services:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li><strong>Usage Data:</strong> We collect information about how you interact with the site, including pages visited, time spent on each page, and links clicked.</li>
                    <li><strong>Device Data:</strong> We collect information about your device such as browser type, operating system, screen resolution, and IP address.</li>
                    <li><strong>Geolocation Data:</strong> We may use your IP address to approximately determine your country to serve content in the appropriate language.</li>
                    <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to store your preferences such as language and theme (dark/light mode).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">3. Advertising and Google AdSense</h3>
                  <p className="mb-2">We use Google AdSense to display advertisements on our website. Google and its partners may use cookies to serve ads based on your prior visits to our website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.</p>
                  <p className="mb-2">You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">Google Ads Settings</a>. Alternatively, you can opt out of third-party cookies by visiting the <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">Network Advertising Initiative</a>.</p>
                  <p>Google uses cookies to serve ads based on users&apos; visits to our site. You can decline the use of advertising cookies by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">Google Ads Settings</a>.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">4. How We Use Your Data</h3>
                  <ul className="list-disc ps-6 space-y-1">
                    <li>Providing content in your preferred language</li>
                    <li>Improving user experience and site performance</li>
                    <li>Displaying relevant advertisements through Google AdSense</li>
                    <li>Responding to your messages through the contact form</li>
                    <li>Analyzing usage patterns to improve content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">5. Data Protection</h3>
                  <p>We take appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. We use HTTPS protocol to encrypt all communications between your browser and our servers.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">6. Your Rights</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li>Access your personal data held by us</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Object to processing of your data for marketing purposes</li>
                    <li>Disable cookies in your browser settings</li>
                    <li>Opt out of personalized advertising</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">7. Cookies</h3>
                  <p className="mb-2">We use the following types of cookies:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li><strong>Essential Cookies:</strong> Required for site operation (storing language and theme preferences).</li>
                    <li><strong>Advertising Cookies:</strong> Used by Google AdSense to display relevant ads.</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how the site is being used.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">8. Contact Us</h3>
                  <p>If you have any questions about this privacy policy, you can contact us at:</p>
                  <ul className="list-disc ps-6 space-y-1 mt-2">
                    <li>Email: <a href="mailto:ziad90216@gmail.com" className="text-orange-600 dark:text-orange-400 hover:underline">ziad90216@gmail.com</a></li>
                    <li>Contact form: <a href="https://ziadamrme.vercel.app/#contact" className="text-orange-600 dark:text-orange-400 hover:underline">ziadamrme.vercel.app/#contact</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
