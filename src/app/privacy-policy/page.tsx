"use client";

import Link from "next/link";
import { useApp } from "@/components/providers";

const content = {
  ar: {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: يونيو ٢٠٢٦",
    sections: [
      {
        title: "١. مقدمة",
        body: "مرحبًا بك في موقع زياد عمرو الشخصي (ziadamrme.vercel.app). نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع البيانات واستخدامها وحمايتها عند زيارتك لموقعنا. باستخدامك لهذا الموقع، فإنك توافق على الممارسات الموصوفة في هذه السياسة.",
      },
      {
        title: "٢. البيانات التي نجمعها",
        body: "نجمع أنواعًا مختلفة من البيانات لتقديم وتحسين خدماتنا:",
        list: [
          "بيانات الاستخدام: نجمع معلومات حول كيفية تفاعلك مع الموقع، بما في ذلك الصفحات التي تزورها، والوقت الذي تقضيه على كل صفحة، والروابط التي تنقر عليها.",
          "بيانات الجهاز: نجمع معلومات عن جهازك مثل نوع المتصفح، ونظام التشغيل، ودقة الشاشة، وعنوان IP.",
          "بيانات الموقع الجغرافي: قد نستخدم عنوان IP لتحديد بلدك تقريبًا لتقديم المحتوى باللغة المناسبة.",
          "الكوكيز وتقنيات التتبع: نستخدم ملفات تعريف الارتباط (الكوكيز) لتخزين تفضيلاتك مثل اللغة والوضع (ليلي/نهاري).",
        ],
      },
      {
        title: "٣. الإعلانات و Google AdSense",
        body: "نستخدم Google AdSense لعرض الإعلانات على موقعنا. قد تستخدم Google و شركاؤها ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة لموقعنا أو مواقع أخرى. استخدام Google لملفات تعريف الارتباط الإعلانية يمكّنها وشركاءها من عرض إعلانات بناءً على زيارتك لموقعنا و/أو مواقع أخرى على الإنترنت.",
        body2: 'يمكنك تعطيل الإعلانات المخصصة من خلال زيارة <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" class="text-orange-600 dark:text-orange-400 hover:underline">إعدادات إعلانات Google</a>. بدلاً من ذلك، يمكنك تعطيل ملفات تعريف الارتباط الخاصة بالجهات الخارجية عبر <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" class="text-orange-600 dark:text-orange-400 hover:underline">Network Advertising Initiative</a>.',
        body3: 'Google تستخدم ملفات تعريف الارتباط لخدمة الإعلانات بناءً على زيارات المستخدمين لموقعنا. يمكنك رفض استخدام ملفات تعريف الارتباط الإعلانية من خلال زيارة <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" class="text-orange-600 dark:text-orange-400 hover:underline">إعدادات إعلانات Google</a>.',
      },
      {
        title: "٤. كيف نستخدم بياناتك",
        list: [
          "تقديم المحتوى باللغة المفضلة لك",
          "تحسين تجربة المستخدم وأداء الموقع",
          "عرض إعلانات ذات صلة من خلال Google AdSense",
          "الرد على رسائلك من خلال نموذج الاتصال",
          "تحليل أنماط الاستخدام لتحسين المحتوى",
        ],
      },
      {
        title: "٥. حماية البيانات",
        body: "نتخذ إجراءات أمنية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفشاء أو الإتلاف. نستخدم بروتوكول HTTPS لتشفير جميع الاتصالات بين متصفحك وخوادمنا.",
      },
      {
        title: "٦. حقوقك",
        body: "لديك الحق في:",
        list: [
          "الوصول إلى بياناتك الشخصية التي نحتفظ بها",
          "طلب تصحيح أو حذف بياناتك",
          "رفض معالجة بياناتك لأغراض التسويق",
          "تعطيل ملفات تعريف الارتباط في إعدادات المتصفح",
          "الاعتراض على الإعلانات المخصصة",
        ],
      },
      {
        title: "٧. ملفات تعريف الارتباط (الكوكيز)",
        body: "نستخدم الأنواع التالية من ملفات تعريف الارتباط:",
        list: [
          "كوكيز أساسية: ضرورية لتشغيل الموقع (تخزين اللغة والوضع المفضل).",
          "كوكيز إعلانية: يستخدمها Google AdSense لعرض إعلانات ذات صلة.",
          "كوكيز تحليلية: تساعدنا في فهم كيفية استخدام الموقع.",
        ],
      },
      {
        title: "٨. الاتصال بنا",
        body: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر:",
        list: [
          'البريد الإلكتروني: <a href="mailto:ziad90216@gmail.com" class="text-orange-600 dark:text-orange-400 hover:underline">ziad90216@gmail.com</a>',
          'نموذج الاتصال: <a href="https://ziadamrme.vercel.app/#contact" class="text-orange-600 dark:text-orange-400 hover:underline">ziadamrme.vercel.app/#contact</a>',
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: June 2026",
    sections: [
      {
        title: "1. Introduction",
        body: "Welcome to Ziad Amr's personal website (ziadamrme.vercel.app). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our site. By using this website, you consent to the practices described in this policy.",
      },
      {
        title: "2. Data We Collect",
        body: "We collect different types of data to provide and improve our services:",
        list: [
          "Usage Data: We collect information about how you interact with the site, including pages visited, time spent on each page, and links clicked.",
          "Device Data: We collect information about your device such as browser type, operating system, screen resolution, and IP address.",
          "Geolocation Data: We may use your IP address to approximately determine your country to serve content in the appropriate language.",
          "Cookies and Tracking Technologies: We use cookies to store your preferences such as language and theme (dark/light mode).",
        ],
      },
      {
        title: "3. Advertising and Google AdSense",
        body: "We use Google AdSense to display advertisements on our website. Google and its partners may use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.",
        body2: 'You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" class="text-orange-600 dark:text-orange-400 hover:underline">Google Ads Settings</a>. Alternatively, you can opt out of third-party cookies by visiting the <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" class="text-orange-600 dark:text-orange-400 hover:underline">Network Advertising Initiative</a>.',
        body3: 'Google uses cookies to serve ads based on users\' visits to our site. You can decline the use of advertising cookies by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" class="text-orange-600 dark:text-orange-400 hover:underline">Google Ads Settings</a>.',
      },
      {
        title: "4. How We Use Your Data",
        list: [
          "Providing content in your preferred language",
          "Improving user experience and site performance",
          "Displaying relevant advertisements through Google AdSense",
          "Responding to your messages through the contact form",
          "Analyzing usage patterns to improve content",
        ],
      },
      {
        title: "5. Data Protection",
        body: "We take appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. We use HTTPS protocol to encrypt all communications between your browser and our servers.",
      },
      {
        title: "6. Your Rights",
        body: "You have the right to:",
        list: [
          "Access your personal data held by us",
          "Request correction or deletion of your data",
          "Object to processing of your data for marketing purposes",
          "Disable cookies in your browser settings",
          "Opt out of personalized advertising",
        ],
      },
      {
        title: "7. Cookies",
        body: "We use the following types of cookies:",
        list: [
          "Essential Cookies: Required for site operation (storing language and theme preferences).",
          "Advertising Cookies: Used by Google AdSense to display relevant ads.",
          "Analytics Cookies: Help us understand how the site is being used.",
        ],
      },
      {
        title: "8. Contact Us",
        body: "If you have any questions about this privacy policy, you can contact us at:",
        list: [
          'Email: <a href="mailto:ziad90216@gmail.com" class="text-orange-600 dark:text-orange-400 hover:underline">ziad90216@gmail.com</a>',
          'Contact form: <a href="https://ziadamrme.vercel.app/#contact" class="text-orange-600 dark:text-orange-400 hover:underline">ziadamrme.vercel.app/#contact</a>',
        ],
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
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
        name: language === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
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
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors mb-6 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === "ar" ? "M19 12H5m0 0l7 7m-7-7l7-7" : "M5 12h14m0 0l-7-7m7 7l-7 7"} /></svg>
            {language === "ar" ? "العودة للرئيسية" : "Back to Home"}
          </Link>
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
                {section.body2 && <p className="mb-2" dangerouslySetInnerHTML={{ __html: section.body2 }} />}
                {section.body3 && <p dangerouslySetInnerHTML={{ __html: section.body3 }} />}
                {section.list && (
                  <ul className="list-disc ps-6 space-y-1">
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
