"use client";

import { useApp } from "@/components/providers";
import { Navigation } from "@/components/navigation";

const content = {
  ar: {
    title: "شروط الاستخدام",
    lastUpdated: "آخر تحديث: يونيو ٢٠٢٦",
    sections: [
      {
        title: "١. قبول الشروط",
        body: "عند استخدامك لموقع زياد عمرو الشخصي (ziadamrme.vercel.app)، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا لم توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع. يحتفظ المالك بالحق في تعديل هذه الشروط في أي وقت، وسيتم إخطارك بالتغييرات الجوهرية عبر إشعار على الموقع.",
      },
      {
        title: "٢. استخدام الموقع",
        body: "يُسمح لك باستخدام هذا الموقع للأغراض المشروعة فقط، بما في ذلك:",
        allowedList: [
          "تصفح المحتوى والمقالات والمشاريع",
          "استخدام نموذج الاتصال للتواصل مع مالك الموقع",
          "الوصول إلى الخدمات والموارد المقدمة",
        ],
        prohibitedTitle: "يُحظر عليك:",
        prohibitedList: [
          "استخدام الموقع لأي غرض غير قانوني",
          "محاولة الوصول غير المصرح به إلى أنظمة الموقع",
          "نسخ أو إعادة نشر المحتوى دون إذن مسبق",
          "استخدام أدوات آلية لاستخراج البيانات من الموقع",
          "نشر فيروسات أو برامج ضارة",
        ],
      },
      {
        title: "٣. الملكية الفكرية",
        body: "جميع المحتوى على هذا الموقع — بما في ذلك النصوص والصور والأكواد والتصاميم والشعارات — هو ملك لمالك الموقع أو مرخص له. لا يجوز لك نسخ أو توزيع أو تعديل أو إنشاء أعمال مشتقة من أي محتوى على هذا الموقع دون إذن كتابي مسبق، باستثناء ما يسمح به القانون المعمول به (الاستخدام العادل).",
      },
      {
        title: "٤. المشاريع مفتوحة المصدر",
        body: "بعض المشاريع المعروضة على هذا الموقع متاحة كبرامج مفتوحة المصدر على GitHub. تخضع هذه المشاريع لشروط الترخيص الخاصة بها (مثل رخصة MIT). يرجى مراجعة شروط الترخيص الخاصة بكل مشروع قبل استخدامه.",
      },
      {
        title: "٥. الإعلانات",
        body: "قد يعرض الموقع إعلانات من خلال Google AdSense. لا يتحكم مالك الموقع بالكامل في محتوى الإعلانات المعروضة، ويحق لجوجل عرض إعلانات بناءً على اهتمامات المستخدم. يمكنك التحكم في تفضيلات الإعلانات من خلال إعدادات حساب Google الخاص بك.",
      },
      {
        title: "٦. إخلاء المسؤولية",
        body: "يُقدم الموقع المحتوى \"كما هو\" دون ضمانات من أي نوع، سواء صريحة أو ضمنية. لا يضمن المالك دقة المحتوى أو اكتماله أو حداثته. استخدامك للموقع يكون على مسؤوليتك الخاصة. لا يتحمل المالك أي مسؤولية عن الأضرار المباشرة أو غير المباشرة الناتجة عن استخدام الموقع.",
      },
      {
        title: "٧. الروابط الخارجية",
        body: "قد يحتوي الموقع على روابط إلى مواقع خارجية. لا يتحمل المالك مسؤولية محتوى أو سياسات خصوصية هذه المواقع. ننصحك بقراءة شروط الاستخدام وسياسات الخصوصية الخاصة بأي موقع تزوره.",
      },
      {
        title: "٨. القانون الحاكم",
        body: "تخضع شروط الاستخدام هذه وتفسر وفقًا لقوانين جمهورية مصر العربية. في حالة نشوء أي نزاع، فإنك توافق على اختصاص المحاكم المصرية.",
      },
      {
        title: "٩. الاتصال بنا",
        body: "لأي استفسارات بخصوص شروط الاستخدام هذه، تواصل معنا عبر:",
        list: [
          'البريد الإلكتروني: <a href="mailto:ziad90216@gmail.com" class="text-orange-600 dark:text-orange-400 hover:underline">ziad90216@gmail.com</a>',
          'نموذج الاتصال: <a href="https://ziadamrme.vercel.app/#contact" class="text-orange-600 dark:text-orange-400 hover:underline">ziadamrme.vercel.app/#contact</a>',
        ],
      },
    ],
  },
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated: June 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        body: "By using Ziad Amr's personal website (ziadamrme.vercel.app), you agree to be bound by these Terms of Service. If you do not agree to any of these terms, please do not use the website. The owner reserves the right to modify these terms at any time, and you will be notified of material changes via a notice on the website.",
      },
      {
        title: "2. Use of the Website",
        body: "You may use this website for lawful purposes only, including:",
        allowedList: [
          "Browsing content, articles, and projects",
          "Using the contact form to communicate with the website owner",
          "Accessing provided services and resources",
        ],
        prohibitedTitle: "You are prohibited from:",
        prohibitedList: [
          "Using the website for any illegal purpose",
          "Attempting to gain unauthorized access to the website's systems",
          "Copying or republishing content without prior permission",
          "Using automated tools to scrape data from the website",
          "Distributing viruses or malicious software",
        ],
      },
      {
        title: "3. Intellectual Property",
        body: "All content on this website — including text, images, code, designs, and logos — is owned by or licensed to the website owner. You may not copy, distribute, modify, or create derivative works from any content on this website without prior written permission, except as permitted by applicable law (fair use).",
      },
      {
        title: "4. Open Source Projects",
        body: "Some projects showcased on this website are available as open-source software on GitHub. These projects are subject to their own license terms (such as the MIT License). Please review each project's license terms before using them.",
      },
      {
        title: "5. Advertisements",
        body: "The website may display advertisements through Google AdSense. The website owner does not have full control over the content of displayed ads, and Google may serve ads based on user interests. You can manage your ad preferences through your Google account settings.",
      },
      {
        title: "6. Disclaimer",
        body: 'The website provides content "as is" without warranties of any kind, either express or implied. The owner does not guarantee the accuracy, completeness, or currency of the content. Your use of the website is at your own risk. The owner shall not be liable for any direct or indirect damages arising from the use of the website.',
      },
      {
        title: "7. External Links",
        body: "The website may contain links to external websites. The owner is not responsible for the content or privacy policies of these websites. We advise you to read the terms of use and privacy policies of any website you visit.",
      },
      {
        title: "8. Governing Law",
        body: "These Terms of Service shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt. In the event of any dispute, you agree to the jurisdiction of the Egyptian courts.",
      },
      {
        title: "9. Contact Us",
        body: "For any inquiries regarding these Terms of Service, contact us at:",
        list: [
          'Email: <a href="mailto:ziad90216@gmail.com" class="text-orange-600 dark:text-orange-400 hover:underline">ziad90216@gmail.com</a>',
          'Contact form: <a href="https://ziadamrme.vercel.app/#contact" class="text-orange-600 dark:text-orange-400 hover:underline">ziadamrme.vercel.app/#contact</a>',
        ],
      },
    ],
  },
};

export default function TermsPage() {
  const { language } = useApp();
  const c = content[language];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: language === "ar" ? "الرئيسية" : "Home",
        item: "https://ziadamrme.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: language === "ar" ? "شروط الاستخدام" : "Terms of Service",
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
        <Navigation />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {c.title}
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-8">
            {c.lastUpdated}
          </p>

          <div className="space-y-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {c.sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">{section.title}</h3>
                {section.body && <p className="mb-2" dangerouslySetInnerHTML={{ __html: section.body }} />}
                {section.allowedList && (
                  <ul className="list-disc ps-6 space-y-1">
                    {section.allowedList.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.prohibitedTitle && (
                  <p className="mt-2 font-medium text-slate-700 dark:text-slate-300">{section.prohibitedTitle}</p>
                )}
                {section.prohibitedList && (
                  <ul className="list-disc ps-6 space-y-1">
                    {section.prohibitedList.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.list && (
                  <ul className="list-disc ps-6 space-y-1 mt-2">
                    {section.list.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
