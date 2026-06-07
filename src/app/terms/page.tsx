import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شروط الاستخدام | Terms of Service",
  description:
    "شروط استخدام موقع زياد عمرو — القواعد والسياسات التي تحكم استخدامك للموقع. Terms of service for Ziad Amr's website.",
  alternates: {
    canonical: "https://ziadamrme.vercel.app/terms",
  },
};

export default function TermsPage() {
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
        name: "Terms of Service",
        alternateName: "شروط الاستخدام",
        item: "https://ziadamrme.vercel.app/terms",
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
            شروط الاستخدام / Terms of Service
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
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">١. قبول الشروط</h3>
                  <p>عند استخدامك لموقع زياد عمرو الشخصي (ziadamrme.vercel.app)، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا لم توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع. يحتفظ المالك بالحق في تعديل هذه الشروط في أي وقت، وسيتم إخطارك بالتغيارات الجوهرية عبر إشعار على الموقع.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٢. استخدام الموقع</h3>
                  <p className="mb-2">يُسمح لك باستخدام هذا الموقع للأغراض المشروعة فقط، بما في ذلك:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li>تصفح المحتوى والمقالات والمشاريع</li>
                    <li>استخدام نموذج الاتصال للتواصل مع مالك الموقع</li>
                    <li>الوصول إلى الخدمات والموارد المقدمة</li>
                  </ul>
                  <p className="mt-2">يُحظر عليك:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li>استخدام الموقع لأي غرض غير قانوني</li>
                    <li>محاولة الوصول غير المصرح به إلى أنظمة الموقع</li>
                    <li>نسخ أو إعادة نشر المحتوى دون إذن مسبق</li>
                    <li>استخدام أدوات آلية لاستخراج البيانات من الموقع</li>
                    <li>نشر فيروسات أو برامج ضارة</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٣. الملكية الفكرية</h3>
                  <p>جميع المحتوى على هذا الموقع — بما في ذلك النصوص والصور والأكواد والتصاميم والشعارات — هو ملك لمالك الموقع أو مرخص له. لا يجوز لك نسخ أو توزيع أو تعديل أو إنشاء أعمال مشتقة من أي محتوى على هذا الموقع دون إذن كتابي مسبق، باستثناء ما يسمح به القانون المعمول به (الاستخدام العادل).</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٤. المشاريع مفتوحة المصدر</h3>
                  <p>بعض المشاريع المعروضة على هذا الموقع متاحة كبرامج مفتوحة المصدر على GitHub. تخضع هذه المشاريع لشروط الترخيص الخاصة بها (مثل رخصة MIT). يرجى مراجعة شروط الترخيص الخاصة بكل مشروع قبل استخدامه.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٥. الإعلانات</h3>
                  <p>قد يعرض الموقع إعلانات من خلال Google AdSense. لا يتحكم مالك الموقع بالكامل في محتوى الإعلانات المعروضة، ويحق لجوجل عرض إعلانات بناءً على اهتمامات المستخدم. يمكنك التحكم في تفضيلات الإعلانات من خلال إعدادات حساب Google الخاص بك.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٦. إخلاء المسؤولية</h3>
                  <p>يُقدم الموقع المحتوى &quot;كما هو&quot; دون ضمانات من أي نوع، سواء صريحة أو ضمنية. لا يضمن المالك دقة المحتوى أو اكتماله أو حداثته. استخدامك للموقع يكون على مسؤوليتك الخاصة. لا يتحمل المالك أي مسؤولية عن الأضرار المباشرة أو غير المباشرة الناتجة عن استخدام الموقع.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٧. الروابط الخارجية</h3>
                  <p>قد يحتوي الموقع على روابط إلى مواقع خارجية. لا يتحمل المالك مسؤولية محتوى أو سياسات خصوصية هذه المواقع. ننصحك بقراءة شروط الاستخدام وسياسات الخصوصية الخاصة بأي موقع تزوره.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٨. القانون الحاكم</h3>
                  <p>تخضع شروط الاستخدام هذه وتفسر وفقًا لقوانين جمهورية مصر العربية. في حالة نشوء أي نزاع، فإنك توافق على اختصاص المحاكم المصرية.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">٩. الاتصال بنا</h3>
                  <p>لأي استفسارات بخصوص شروط الاستخدام هذه، تواصل معنا عبر:</p>
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
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">1. Acceptance of Terms</h3>
                  <p>By using Ziad Amr&apos;s personal website (ziadamrme.vercel.app), you agree to be bound by these Terms of Service. If you do not agree to any of these terms, please do not use the website. The owner reserves the right to modify these terms at any time, and you will be notified of material changes via a notice on the website.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">2. Use of the Website</h3>
                  <p className="mb-2">You may use this website for lawful purposes only, including:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li>Browsing content, articles, and projects</li>
                    <li>Using the contact form to communicate with the website owner</li>
                    <li>Accessing provided services and resources</li>
                  </ul>
                  <p className="mt-2">You are prohibited from:</p>
                  <ul className="list-disc ps-6 space-y-1">
                    <li>Using the website for any illegal purpose</li>
                    <li>Attempting to gain unauthorized access to the website&apos;s systems</li>
                    <li>Copying or republishing content without prior permission</li>
                    <li>Using automated tools to scrape data from the website</li>
                    <li>Distributing viruses or malicious software</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">3. Intellectual Property</h3>
                  <p>All content on this website — including text, images, code, designs, and logos — is owned by or licensed to the website owner. You may not copy, distribute, modify, or create derivative works from any content on this website without prior written permission, except as permitted by applicable law (fair use).</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">4. Open Source Projects</h3>
                  <p>Some projects showcased on this website are available as open-source software on GitHub. These projects are subject to their own license terms (such as the MIT License). Please review each project&apos;s license terms before using them.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">5. Advertisements</h3>
                  <p>The website may display advertisements through Google AdSense. The website owner does not have full control over the content of displayed ads, and Google may serve ads based on user interests. You can manage your ad preferences through your Google account settings.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">6. Disclaimer</h3>
                  <p>The website provides content &quot;as is&quot; without warranties of any kind, either express or implied. The owner does not guarantee the accuracy, completeness, or currency of the content. Your use of the website is at your own risk. The owner shall not be liable for any direct or indirect damages arising from the use of the website.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">7. External Links</h3>
                  <p>The website may contain links to external websites. The owner is not responsible for the content or privacy policies of these websites. We advise you to read the terms of use and privacy policies of any website you visit.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">8. Governing Law</h3>
                  <p>These Terms of Service shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt. In the event of any dispute, you agree to the jurisdiction of the Egyptian courts.</p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">9. Contact Us</h3>
                  <p>For any inquiries regarding these Terms of Service, contact us at:</p>
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
