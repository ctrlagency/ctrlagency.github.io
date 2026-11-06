/* ==========================================================================
   CTRL Agency: site script (no libraries)
   1. CONFIG: contact details + form endpoint      [REPLACE]
   2. PORTFOLIO: websites + social accounts (add new work here)
   3. REELS: AI videos (Instagram reel ids)
   4. Arabic translations
   5. Helpers
   6. Rendering (marquee, carousel, feeds, reels, case-study modal)
   7. Language toggle (EN / AR + RTL)
   8. Hero: typed headline + halftone dots
   9. Service panels, process wheel, AI word wheel
   10. Nav, scroll reveal, counters, key presses
   11. Contact form (Formspree)
   ========================================================================== */
'use strict';

/* ---------- 1. CONFIG ---------- */
const CONFIG = {
  // [REPLACE] Create a form at https://formspree.io and paste its endpoint here.
  // Until then the form validates and shows the success message without sending anything.
  formspree: 'https://formspree.io/f/YOUR_FORM_ID',
  whatsapp: '20XXXXXXXXXX',            // [REPLACE] digits only, country code first (Egypt = 20)
  email: 'hello@your-domain.com',      // [REPLACE]
  instagram: 'https://www.instagram.com/ctrlmarketing.agency',
};

/* ---------- 2. PORTFOLIO ----------
   One array for all client work. To add a project, copy an entry and edit it.
   type: 'website' → "Websites by CTRL" carousel (and the client marquee)
   type: 'social'  → "Feeds by CTRL"; group 'scratch' (built from scratch) or 'content' (content partner)
   Text fields take { en, ar }. If ar is missing, English is shown.
   cover: the photo on the carousel capsule (portrait works best); focus is a CSS object-position like '50% 30%'.
   screenshots: real site screenshots for the phone/laptop mockups, or '' to show a [REPLACE] placeholder. */
const PORTFOLIO = [
  {
    type: 'website',
    id: 'amira-quzamel',
    name: 'Amira Quzamel',
    url: 'https://amiraquzamel.com',
    cover: { src: 'images/covers/amira-quzamel.webp', focus: '50% 22%' }, // carousel image; focus = which part stays in view
    screenshots: { desktop: 'images/sites/aq-desktop.webp', mobile: 'images/sites/aq-mobile.webp' },
    industry: { en: 'Haute couture & bridal fashion house · Egypt', ar: 'دار أزياء راقية وفساتين زفاف · مصر' },
    summary: {
      en: 'A digital maison for an Egyptian couture house: bridal, a couture archive, a prêt-à-porter shop and online appointments.',
      ar: 'دار أزياء رقمية لعلامة كوتور مصرية: فساتين الزفاف، أرشيف الكوتور، متجر الأزياء الجاهزة وحجز المواعيد أونلاين.',
    },
    built: {
      en: [
        'Brand story page for the "Maison de Couture"',
        'Bridal: wedding & occasions',
        'Couture collection archive, 2017–2025',
        'Prêt-à-porter shop in EGP: Bayt El-Beik, Bent El-Beik and Ramadan collections',
        'Media section for press & celebrity looks',
        'Bilingual EN/AR storytelling',
        'Full-screen fashion video',
        'Multi-country region selector',
        'Online appointment booking',
      ],
      ar: [
        'صفحة قصة العلامة لـ "Maison de Couture"',
        'قسم الزفاف: الأعراس والمناسبات',
        'أرشيف مجموعات الكوتور 2017–2025',
        'متجر الأزياء الجاهزة بالجنيه المصري: مجموعات بيت البيك وبنت البيك ورمضان',
        'قسم إعلامي للصحافة وإطلالات المشاهير',
        'سرد قصصي بالعربية والإنجليزية',
        'فيديو أزياء بملء الشاشة',
        'اختيار الدولة والمنطقة',
        'حجز المواعيد أونلاين',
      ],
    },
    tags: ['Shopify', 'Luxury Fashion', 'Bridal', 'Appointment Booking'],
  },
  {
    type: 'website',
    id: 'good-design',
    name: 'Good Design',
    url: 'https://gooddesigneg.com',
    cover: { src: 'images/covers/good-design.webp', focus: '50% 55%' }, // carousel image; focus = which part stays in view
    screenshots: { desktop: 'images/sites/gd-desktop.webp', mobile: 'images/sites/gd-mobile.webp' },
    industry: { en: 'Architecture, interior design, construction & furnishing · Egypt', ar: 'عمارة وتصميم داخلي وإنشاءات وتأثيث · مصر' },
    summary: {
      en: 'A full-service design & build studio, online: services, project galleries and a free-consultation funnel.',
      ar: 'استوديو تصميم وتنفيذ متكامل أونلاين: الخدمات ومعارض المشاريع ومسار لحجز استشارة مجانية.',
    },
    built: {
      en: [
        'Service pages: architecture, construction, kitchens, wardrobes, bath units',
        'Residential & commercial project galleries',
        'Interior design mood board',
        'Online shop for wooden wall art',
        'Customer reviews',
        '"Book Your Free Consultation" flow',
      ],
      ar: [
        'صفحات الخدمات: العمارة، الإنشاءات، المطابخ، الدواليب، وحدات الحمام',
        'معارض المشاريع السكنية والتجارية',
        'لوحة إلهام للتصميم الداخلي',
        'متجر أونلاين للوحات الجدارية الخشبية',
        'آراء العملاء',
        'مسار "احجز استشارتك المجانية"',
      ],
    },
    tags: ['Shopify', 'Web Design', 'E-commerce', 'Lead Generation'],
  },
  {
    type: 'website',
    id: 'multi-craft',
    name: 'Multi Craft',
    url: 'https://www.multicraft.design',
    cover: { src: 'images/covers/multi-craft.webp', focus: '50% 42%' }, // carousel image; focus = which part stays in view
    screenshots: { desktop: 'images/sites/mc-desktop.webp', mobile: 'images/sites/mc-mobile.webp' },
    industry: { en: 'Luxury & bespoke furniture · Maadi, Cairo', ar: 'أثاث فاخر ومصمم حسب الطلب · المعادي، القاهرة' },
    summary: {
      en: 'A bilingual luxury furniture store with two paths: ready to ship, or made for your space.',
      ar: 'متجر أثاث فاخر بلغتين وبمسارين: جاهز للشحن، أو مصنوع خصيصًا لمساحتك.',
    },
    built: {
      en: [
        'Bilingual EN/AR store',
        'Collections: dining, living, bedrooms, bath units, lighting, accessories',
        '"Ready to ship" vs. "Made for your space" pre-order paths',
        'Sale pricing & wishlist',
        'Portfolio page',
        'WhatsApp consultation & appointment booking',
      ],
      ar: [
        'متجر بالعربية والإنجليزية',
        'مجموعات: السفرة، المعيشة، غرف النوم، وحدات الحمام، الإضاءة، الإكسسوارات',
        'مساران: "جاهز للشحن" و"مصنوع لمساحتك" بالطلب المسبق',
        'أسعار التخفيضات وقائمة الأمنيات',
        'صفحة أعمال',
        'استشارة عبر واتساب وحجز مواعيد',
      ],
    },
    tags: ['Shopify', 'Bilingual', 'E-commerce', 'Custom Orders'],
  },
  {
    type: 'website',
    id: 'yk-scent',
    name: 'YK Scent',
    url: 'https://ykscent.com',
    cover: { src: 'images/covers/yk-scent.webp', focus: '50% 68%' }, // carousel image; focus = which part stays in view
    screenshots: { desktop: 'images/sites/yk-desktop.webp', mobile: 'images/sites/yk-mobile.webp' },
    industry: { en: 'Luxury home fragrance: reed diffusers, home sprays & gift sets', ar: 'عطور منزلية فاخرة: فواحات بالأعواد، معطرات منزلية وأطقم هدايا' },
    summary: {
      en: 'A gifting-first fragrance store built to convert: best sellers, gift sets and corporate orders.',
      ar: 'متجر عطور محوره الهدايا ومبني للبيع: الأكثر مبيعًا، أطقم الهدايا وطلبات الشركات.',
    },
    built: {
      en: [
        'Best sellers & gift sets',
        'Corporate gifting page',
        'Offers & budget collection',
        'Reviews & Instagram feed',
        'Newsletter & WhatsApp button',
        'SEO-optimized meta tags',
      ],
      ar: [
        'الأكثر مبيعًا وأطقم الهدايا',
        'صفحة هدايا الشركات',
        'العروض ومجموعة الأسعار الاقتصادية',
        'آراء العملاء وخلاصة إنستجرام',
        'النشرة البريدية وزر واتساب',
        'وسوم ميتا محسّنة لمحركات البحث',
      ],
    },
    tags: ['Shopify', 'E-commerce', 'Gifting', 'SEO'],
  },
  {
    type: 'website',
    id: 'mb-leather',
    name: 'M&B Handmade Leather',
    url: 'https://mbleather.com',
    cover: { src: 'images/covers/mb-leather.webp', focus: '50% 55%' }, // carousel image; focus = which part stays in view
    screenshots: { desktop: 'images/sites/mb-desktop.webp', mobile: 'images/sites/mb-mobile.webp' },
    industry: { en: 'Handmade genuine leather goods with Egyptian-inspired designs', ar: 'منتجات جلد طبيعي مصنوعة يدويًا بتصاميم مستوحاة من مصر' },
    summary: {
      en: "A bilingual leather store with women's, men's and travel collections, plus made-to-order pieces.",
      ar: 'متجر جلود بلغتين بمجموعات للنساء والرجال والسفر، بالإضافة إلى قطع حسب الطلب.',
    },
    built: {
      en: [
        'Bilingual EN/AR store',
        "Women's & men's collections: handbags, crossbody bags, wallets, belts, sandals",
        'Backpacks, laptop & travel bags, passport covers',
        '"Customized Purchase" made-to-order collection',
        'Sale pricing, best sellers & new arrivals',
        'Instagram feed & newsletter',
      ],
      ar: [
        'متجر بالعربية والإنجليزية',
        'مجموعات النساء والرجال: حقائب يد، حقائب كروس، محافظ، أحزمة، صنادل',
        'حقائب ظهر، حقائب لابتوب وسفر، أغطية جوازات السفر',
        'مجموعة "طلب مخصص" حسب الطلب',
        'تخفيضات، الأكثر مبيعًا، وصل حديثًا',
        'خلاصة إنستجرام والنشرة البريدية',
      ],
    },
    tags: ['Shopify', 'Bilingual', 'E-commerce', 'Made-to-Order'],
  },

  /* ---- Social accounts ----
     screenshot: a full phone screenshot of the profile (e.g. 'images/feeds/coffeebay.webp'), or '' for a placeholder.
     siteId: links the account to its website case study. */
  {
    type: 'social', group: 'scratch', id: 'yk-scent-ig', siteId: 'yk-scent',
    handle: '@yk.scent', url: 'https://www.instagram.com/yk.scent/',
    screenshot: 'images/feeds/yk-scent.webp',
    industry: { en: 'Luxury home fragrance', ar: 'عطور منزلية فاخرة' },
    did: ['Brand identity', 'Shopify store', 'Content', 'Feed design', 'Reels'],
  },
  {
    type: 'social', group: 'scratch', id: 'multi-craft-ig', siteId: 'multi-craft',
    handle: '@multi_craft.design', url: 'https://www.instagram.com/multi_craft.design/',
    screenshot: 'images/feeds/multi-craft.webp',
    industry: { en: 'Luxury & bespoke furniture', ar: 'أثاث فاخر ومصمم حسب الطلب' },
    did: ['Brand identity', 'Shopify store', 'Content', 'Feed design', 'Reels'],
  },
  {
    type: 'social', group: 'content', id: 'move',
    handle: '@move_eg', url: 'https://www.instagram.com/move_eg/',
    screenshot: 'images/feeds/move.webp',
    industry: { en: 'Orthopedic & mobility products, powered by Orthomedics', ar: 'منتجات العظام والحركة من Orthomedics' },
    did: ['Content', 'Reels', 'Captions'],
  },
  {
    type: 'social', group: 'content', id: 'coffee-bay',
    handle: '@coffeebay.eg', url: 'https://www.instagram.com/coffeebay.eg/',
    screenshot: 'images/feeds/coffeebay.webp',
    industry: { en: 'Coffee shop · North Coast & Cairo', ar: 'مقهى · الساحل الشمالي والقاهرة' },
    did: ['Content', 'Feed design', 'Reels'],
  },
  {
    type: 'social', group: 'content', id: 'hour-ain',
    handle: '@hour_ain_official', url: 'https://www.instagram.com/hour_ain_official/',
    screenshot: 'images/feeds/hour-ain.webp',
    industry: { en: 'Beauty & skincare center', ar: 'مركز تجميل وعناية بالبشرة' },
    did: ['Content', 'Feed design', 'Reels'],
  },
  {
    type: 'social', group: 'content', id: 'malvern',
    handle: '@malvern.development', url: 'https://www.instagram.com/malvern.development/',
    screenshot: 'images/feeds/malvern.webp',
    industry: { en: 'Real estate development', ar: 'تطوير عقاري' },
    did: ['Content', 'Feed design'],
  },
  {
    type: 'social', group: 'content', id: 'orion',
    handle: '@orion.interiors_', url: 'https://www.instagram.com/orion.interiors_/',
    screenshot: 'images/feeds/orion.webp',
    industry: { en: 'Interior design · design, build, delivery', ar: 'تصميم داخلي · تصميم وتنفيذ وتسليم' },
    did: ['Content', 'Feed design'],
  },
];

/* ---------- 3. REELS: AI videos (files in video/; id = the Instagram reel, for reference) ---------- */
const REELS = [
  { id: 'Da8nFy2Rcul', client: '@multi_craft.design', video: 'video/reel-1.mp4' },
  { id: 'DcWdBDUic7_', client: '@yk.scent', video: 'video/reel-2.mp4' },
  { id: 'DadYQsjs9B-', client: '@yk.scent', video: 'video/reel-3.mp4' },
  { id: 'malvern-ai', client: '@malvern.development', video: 'video/reel-4.mp4' },
];

/* ---------- 3a. CLIPS: reels CTRL shot and edited (files in video/work/, stills in images/reels/) ---------- */
const CLIPS = [
  { id: 'yk-gifting', client: '@yk.scent', title: { en: 'Corporate gifting', ar: 'هدايا الشركات' }, video: 'video/work/yk-gifting.mp4', poster: 'images/reels/yk-gifting.webp' },
  { id: 'multicraft-furniture', client: '@multi_craft.design', title: { en: 'Bespoke furniture', ar: 'أثاث حسب الطلب' }, video: 'video/work/multicraft-furniture.mp4', poster: 'images/reels/multicraft-furniture.webp' },
  { id: 'malvern-parkwoods', client: '@malvern.development', title: { en: 'Parkwoods, a destination', ar: 'باركوودز' }, video: 'video/work/malvern-parkwoods.mp4', poster: 'images/reels/malvern-parkwoods.webp' },
  { id: 'lektara-collection', client: 'Lektara', title: { en: 'Summer collection', ar: 'كولكشن الصيف' }, video: 'video/work/lektara-collection.mp4', poster: 'images/reels/lektara-collection.webp' },
  { id: 'bianca-day-by-day', client: 'Landmark Developments', title: { en: 'Bianca, day by day', ar: 'بيانكا يومًا بيوم' }, video: 'video/work/bianca-day-by-day.mp4', poster: 'images/reels/bianca-day-by-day.webp' },
  { id: 'amira-website', client: 'Amira Quzamel', title: { en: 'Website launch', ar: 'إطلاق الموقع' }, video: 'video/work/amira-website.mp4', poster: 'images/reels/amira-website.webp' },
  { id: 'multicraft-handmade', client: '@multi_craft.design', title: { en: 'Made by hand', ar: 'صناعة يدوية' }, video: 'video/work/multicraft-handmade.mp4', poster: 'images/reels/multicraft-handmade.webp' },
  { id: 'landmark-projects', client: 'Landmark Developments', title: { en: 'Built to inspire', ar: 'مبني ليُلهم' }, video: 'video/work/landmark-projects.mp4', poster: 'images/reels/landmark-projects.webp' },
];

/* ---------- 3b. BRANDS: brand books CTRL designed ----------
   pages: number of slides in images/brands/<id>/01.webp, 02.webp…  (slide decks)
   boards: long single-page boards that scroll top to bottom
   siteId: links to that brand's website case study
   rebrand: the brand's old logo (before) vs CTRL's new identity (after); brands without it were built from scratch */
const BRANDS = [
  { id: 'yamour', name: 'Yamour Kollection', boards: 2, siteId: 'yk-scent',
    industry: { en: 'Home fragrance · the brand behind YK Scent', ar: 'عطور منزلية · العلامة وراء YK Scent' } },
  { id: 'lektara', name: 'Lektara', pages: 11,
    rebrand: { before: 'images/brands/lektara-before.webp', after: 'images/brands/lektara/01.webp' },
    industry: { en: 'Modest fashion · "Spread your wings"', ar: 'أزياء محتشمة' } },
  { id: 'maisa', name: 'Maisa Bosila', pages: 10,
    industry: { en: 'Fashion house', ar: 'دار أزياء' } },
  { id: 'stylivo', name: 'Stylivo', pages: 12,
    rebrand: { before: 'images/brands/stylivo-before.webp', after: 'images/brands/stylivo/01.webp' },
    industry: { en: "Women's fashion · Egypt", ar: 'أزياء نسائية · مصر' } },
  { id: 'aurora', name: 'Aurora', boards: 2,
    industry: { en: 'Fashion · "A universe of style"', ar: 'أزياء' } },
];

/* ---------- 4. Arabic translations ----------
   English lives in index.html (data-i18n). This object only holds Arabic. */
const AR = {
  'a11y.skip': 'انتقل إلى المحتوى',
  'nav.work': 'أعمالنا', 'nav.social': 'السوشيال', 'nav.services': 'خدماتنا', 'nav.process': 'طريقتنا', 'nav.contact': 'تواصل',
  'nav.talk': 'لنتحدث', 'nav.branding': 'الهوية',
  'clips.kicker': 'ريلز', 'clips.title': 'ريلز من CTRL', 'clips.lead': 'صوّرناها وعدّلناها ونشرناها لعملائنا. اسحب بينها، واضغط على أي واحدة لتشاهدها بالصوت.', 'nav.reels': 'ريلز',
  'brands.kicker': 'هوية', 'brands.title': 'هويات من CTRL', 'brands.lead': 'الشعار والألوان والخطوط والتغليف. علامات بنيناها من الصفر، وعلامات أعدنا تصميم هويتها.',
  'brands.rebrand': 'إعادة هوية', 'brands.scratch': 'من الصفر',
  'rb.kicker': 'قبل ← بعد', 'rb.title': 'إعادة الهوية', 'rb.lead': 'اسحب الخط لترى الشعار القديم مقابل الهوية التي صممناها.', 'rb.before': 'قبل', 'rb.after': 'بعد', 'rb.open': 'دليل الهوية',
  'hero.eyebrow': 'وكالة تسويق للعلامات التجارية · القاهرة، مصر',
  'hero.title': 'اضغط CTRL وتحكّم في علامتك.',
  'hero.sub': 'نبني متاجر شوبيفاي وحضورًا قويًا على السوشيال ميديا لعلامات المنزل ونمط الحياة والأزياء.',
  'hero.cta1': 'شاهد أعمالنا', 'hero.cta2': 'ابدأ مشروعك',
  'work.kicker': 'بناء', 'work.title': 'مواقع من CTRL',
  'work.lead': 'متاجر شوبيفاي مبنية للبيع، لعلامات المنزل ونمط الحياة والأزياء.',
  'card.visit': 'زيارة الموقع', 'card.case': 'دراسة الحالة', 'card.site': 'الموقع من CTRL',
  'car.prev': 'الموقع السابق', 'car.next': 'الموقع التالي',
  'ai.title': 'صُنع بـ', 'work.hint': 'مرّر',
  'ai.lead': 'ريلز بجودة الحملات الإعلانية، مصنوعة بالذكاء الاصطناعي: بلا استوديو ولا أيام تصوير، وكلها بروح علامتك.',
  'reel.sound': 'تشغيل الصوت',
  'social.kicker': 'نشر', 'social.title': 'حسابات من CTRL',
  'social.lead': 'حسابات إنستجرام نخطط لها ونصممها وننمّيها كل شهر.',
  'social.view': 'عرض الحساب',
  'social.g1': 'بنيناها من الصفر', 'social.g1d': 'الهوية، متجر شوبيفاي، المحتوى والفيد: بنينا كل شيء.',
  'social.g2': 'شركاء المحتوى', 'social.g2d': 'علامات نصنع لها المحتوى الآن.',
  'services.kicker': 'خدمات', 'services.title': 'ما نتحكم فيه',
  'svc1.t': 'تصميم وتطوير متاجر شوبيفاي', 'svc1.d': 'متاجر شوبيفاي مخصصة، من تصميم الواجهة حتى الدفع، بمظهر فاخر ومبنية للبيع.', 'svc1.s': 'شوبيفاي', 'svc1.w': 'متاجر',
  'svc2.t': 'إدارة السوشيال ميديا وتصميم الفيد', 'svc2.d': 'خطط محتوى شهرية، تصميم الفيد، كتابة الكابشن وإدارة التفاعل.', 'svc2.s': 'سوشيال', 'svc2.w': 'فيد',
  'svc3.t': 'صناعة المحتوى وفيديو الذكاء الاصطناعي', 'svc3.d': 'تصوير المنتجات، الريلز، وفيديوهات بالذكاء الاصطناعي توقف التمرير.', 'svc3.s': 'محتوى وذكاء اصطناعي', 'svc3.w': 'ريلز',
  'svc4.t': 'استراتيجية وهوية العلامة', 'svc4.d': 'تموضع ونبرة وهوية بصرية تجعل علامتك لا تُنسى.', 'svc4.s': 'الهوية', 'svc4.w': 'هوية',
  'svc5.t': 'الإعلانات الممولة (ميتا / تيك توك / جوجل)', 'svc5.d': 'حملات نخطط لها ونطلقها ونحسّنها لتحقيق المبيعات، لا الإعجابات فقط.', 'svc5.s': 'إعلانات', 'svc5.w': 'إعلانات',
  'svc6.t': 'تحسين محركات البحث والمتجر', 'svc6.d': 'تحسين السرعة والظهور في البحث ومعدل التحويل ليصبح زوارك عملاء.', 'svc6.s': 'SEO', 'svc6.w': 'SEO',
  'process.kicker': 'خطوات', 'process.title': 'طريقة عملنا',
  'p1.k': 'اكتشف', 'p1.d': 'نتعرّف على علامتك وجمهورك ومنافسيك وأهدافك.',
  'p2.k': 'خطّط', 'p2.d': 'خريطة طريق واضحة: هيكل الموقع، تقويم المحتوى، والحملات.',
  'p3.k': 'ابتكر', 'p3.d': 'نصمم ونبني ونصوّر ونكتب، وكل شيء بروح علامتك.',
  'p4.k': 'انمُ', 'p4.d': 'نطلق ونقيس ونحسّن، ثم ندفع نحو المزيد.',
  'stats.s1': 'متاجر شوبيفاي أطلقناها', 'stats.s2': 'حسابات سوشيال نديرها', 'stats.s3': 'مجالات عملنا بها', 'stats.s4': 'مواقع بالعربية والإنجليزية',
  'cta.title': 'جاهز تتحكم؟', 'cta.sub': 'أخبرنا عن علامتك، وسنرد خلال 24 ساعة.', 'cta.btn': 'ابدأ مشروعك',
  'contact.kicker': 'تواصل', 'contact.title': 'لنتحدث',
  'contact.lead': 'متجر شوبيفاي، سوشيال ميديا، أو الاثنان؟ أرسل لنا التفاصيل وسنعود إليك بخطة.',
  'contact.wa': 'راسلنا على واتساب',
  'f.name': 'الاسم *', 'f.email': 'البريد الإلكتروني *', 'f.phone': 'الهاتف / واتساب', 'f.brand': 'اسم العلامة',
  'f.ig': 'حساب إنستجرام', 'f.service': 'الخدمة المطلوبة *', 'f.budget': 'الميزانية', 'f.message': 'أخبرنا عن مشروعك *',
  'f.choose': 'اختر', 'f.notsure': 'لست متأكدًا بعد', 'f.send': 'إرسال',
  'b1': 'أقل من 25,000 جنيه', 'b2': 'من 25,000 إلى 50,000 جنيه', 'b3': 'من 50,000 إلى 100,000 جنيه', 'b4': 'أكثر من 100,000 جنيه',
  'f.ok.t': 'تم الإرسال.', 'f.ok.d': 'شكرًا لك! سنتواصل معك خلال 24 ساعة.',
  'err.required': 'هذا الحقل مطلوب.', 'err.email': 'أدخل بريدًا إلكترونيًا صحيحًا.', 'err.phone': 'أدخل رقم هاتف صحيحًا.',
  'err.send': 'تعذّر الإرسال. حاول مرة أخرى أو راسلنا على واتساب.', 'f.sending': 'جارٍ الإرسال…',
  'footer.reach': 'تواصل معنا', 'footer.links': 'روابط سريعة', 'footer.services': 'الخدمات', 'footer.follow': 'تابعنا',
  'modal.built': 'ما بنيناه', 'modal.about': 'المشروع', 'modal.close': 'إغلاق',
  'lang.switch': 'Switch to English',
  'zoom.open': 'تكبير الفيد',
  // social "what we did" tags
  'Brand identity': 'الهوية', 'Shopify store': 'متجر شوبيفاي', 'Feed design': 'تصميم الفيد', 'Content': 'المحتوى',
  'Captions': 'الكابشن', 'Reels': 'ريلز', 'Ads': 'إعلانات',
};

/* English strings used only by JS (not in the HTML) */
const EN_EXTRA = {
  'brands.rebrand': 'Rebrand', 'brands.scratch': 'From scratch',
  'rb.before': 'Before', 'rb.after': 'After', 'rb.open': 'Brand book',
  'hero.title': 'Take CTRL of your brand.',
  'card.visit': 'Visit live site', 'card.case': 'View case study', 'card.site': 'Website by CTRL',
  'car.prev': 'Previous website', 'car.next': 'Next website',
  'reel.sound': 'Sound on',
  'social.view': 'View account',
  'err.required': 'This field is required.', 'err.email': 'Please enter a valid email.', 'err.phone': 'Please enter a valid phone number.',
  'err.send': 'Something went wrong. Please try again or message us on WhatsApp.', 'f.sending': 'Sending…',
  'modal.built': 'What we built', 'modal.about': 'The project', 'modal.close': 'Close',
  'lang.switch': 'Switch to Arabic',
  'zoom.open': 'Zoom in on the feed',
};

/* ---------- 5. Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const pad = (n) => String(n).padStart(2, '0');

let lang = 'en';
const EN = {}; // filled from the HTML on first load

/** Translate a UI key for the current language */
const t = (key) => (lang === 'ar' && AR[key]) || EN[key] || EN_EXTRA[key] || key;
/** Pick the current language from a { en, ar } field */
const L = (field) => (field && typeof field === 'object' && !Array.isArray(field) ? field[lang] || field.en : field);

const websites = () => PORTFOLIO.filter((p) => p.type === 'website');
const socials = (group) => PORTFOLIO.filter((p) => p.type === 'social' && p.group === group);

function storage(key, value) {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch (e) { return null; }
}

/* ---------- 6. Rendering ---------- */
const LOGO = '<svg class="marquee__sep" aria-hidden="true"><use href="#logo-key"/></svg>';

const placeholder = (name, label) =>
  `<div class="ph"><span class="ph__name">${esc(name)}</span><span class="ph__tag">${label}</span></div>`;

function screen(p, kind) {
  const src = p.screenshots && p.screenshots[kind];
  return src
    ? `<img src="${esc(src)}" alt="${esc(p.name)} website on ${kind === 'mobile' ? 'a phone' : 'a laptop'}" loading="lazy" decoding="async">`
    : placeholder(p.name, '[REPLACE WITH SCREENSHOT]');
}

/** Capsule image: the project's cover photo (falls back to the desktop screenshot) */
function capImage(p) {
  const src = (p.cover && p.cover.src) || (p.screenshots && p.screenshots.desktop);
  if (!src) return placeholder(p.name, '[REPLACE WITH COVER]');
  const focus = (p.cover && p.cover.focus) || '50% 0%';
  return `<img src="${esc(src)}" alt="${esc(p.name)}" style="object-position:${esc(focus)}" decoding="async">`;
}

const phone = (inner) => `<div class="phone"><div class="phone__screen">${inner}</div></div>`;

function devices(p) {
  return `<div class="devices">
    <div class="laptop"><div class="laptop__screen">${screen(p, 'desktop')}</div><div class="laptop__base"></div></div>
    ${phone(screen(p, 'mobile'))}
  </div>`;
}

const tagList = (tags) => `<ul class="tags">${tags.map((tag) => `<li>${esc(t(tag))}</li>`).join('')}</ul>`;
const visitLink = (p) =>
  `<a class="key key--yellow" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(t('card.visit'))} <span aria-hidden="true">↗</span></a>`;

function renderMarquee() {
  const names = websites().map((p) => `<span class="marquee__item">${esc(p.name)}</span>${LOGO}`).join('');
  // two identical groups so the loop is seamless; the second is hidden from screen readers
  $('#marquee').innerHTML = `<div class="marquee__group">${names}</div><div class="marquee__group" aria-hidden="true">${names}</div>`;
}

/* --- Work carousel: scroll-driven capsules (reference 2) ---
   The section is pinned while you scroll through it. Scrolling slides the capsules
   across; the one reaching the centre stretches open. Swipe, drag, click and the
   arrow keys all scroll the page to the right spot, so everything stays in sync. */
const workEl = $('#work');
const carousel = $('#carousel');
const track = $('#carousel-track');
let active = 0;   // capsule in the centre (whole number)
let pos = 0;      // current position, eased towards target
let target = 0;   // position the scroll asks for
let size = { wa: 600, wi: 120, gap: 16, h: 300, W: 1000 };
let carouselRaf = 0;

function renderCarousel() {
  track.innerHTML = websites().map((p, i) => `
    <button class="cap" type="button" data-i="${i}" aria-label="${esc(p.name)}">
      <span class="cap__num">00-${i + 1}</span>
      <span class="cap__media">${capImage(p)}</span>
    </button>`).join('');
  measureCarousel();
  drawCarousel();
  renderProject(false);
}

/** Capsule sizes for this screen: wide pills on laptops, tall ones on phones */
function measureCarousel() {
  const W = carousel.clientWidth;
  const vh = window.innerHeight;
  if (W < 700) {
    const wa = Math.min(W * 0.62, (vh * 0.46) / 1.6);
    size = { wa, wi: wa * 0.34, gap: 10, h: wa * 1.6, W };
  } else {
    const h = Math.min(W * 0.28, vh * 0.44);
    size = { wa: Math.min(h * 1.9, W * 0.7), wi: h * 0.42, gap: 16, h, W };
  }
  track.style.setProperty('--cap-h', `${size.h}px`);
}

const smooth = (x) => x * x * (3 - 2 * x);

/** Draw every capsule for the current (fractional) position */
function drawCarousel() {
  const caps = $$('.cap', track);
  let x = 0;
  const centres = [];
  caps.forEach((cap, i) => {
    const e = smooth(clamp(1 - Math.abs(i - pos), 0, 1)); // 1 = in the centre
    const w = size.wi + (size.wa - size.wi) * e;
    cap.style.width = `${w}px`;
    cap.style.setProperty('--e', e.toFixed(3));
    centres.push(x + w / 2);
    x += w + size.gap;
  });
  const lo = Math.floor(pos), hi = Math.min(lo + 1, caps.length - 1), f = pos - lo;
  const centre = centres[lo] + (centres[hi] - centres[lo]) * f;
  track.style.transform = `translate3d(${size.W / 2 - centre}px, 0, 0)`;
  const bar = $('#work-bar');
  if (bar) bar.style.transform = `scaleX(${(pos + 1) / caps.length})`;

  const now = Math.round(pos);
  if (now !== active) {
    active = now;
    caps.forEach((c, k) => c.setAttribute('aria-current', String(k === active)));
    renderProject(true);
  }
}

function tickCarousel() {
  pos += (target - pos) * (reduceMotion ? 1 : 0.14);
  if (Math.abs(target - pos) < 0.0005) pos = target;
  drawCarousel();
  carouselRaf = pos === target ? 0 : requestAnimationFrame(tickCarousel);
}
function kickCarousel() {
  if (carouselRaf) return;
  const id = requestAnimationFrame(tickCarousel);
  carouselRaf = id;
  // if animation frames are paused (background tab, power saving), jump straight there
  setTimeout(() => { if (carouselRaf === id) { cancelAnimationFrame(id); carouselRaf = 0; pos = target; drawCarousel(); } }, 150);
}

/** Scroll distance inside the pinned section */
const workRange = () => workEl.offsetHeight - window.innerHeight;

function readWorkScroll() {
  const r = workEl.getBoundingClientRect();
  const progress = clamp(-r.top / workRange(), 0, 1);
  target = progress * (websites().length - 1);
  kickCarousel();
}

/** Scroll the page so capsule i sits in the centre */
function goTo(i) {
  const n = websites().length;
  i = clamp(i, 0, n - 1);
  const top = workEl.getBoundingClientRect().top + window.scrollY + (workRange() * i) / (n - 1);
  window.scrollTo({ top: Math.round(top), behavior: reduceMotion ? 'auto' : 'smooth' });
}

window.addEventListener('scroll', readWorkScroll, { passive: true });

// Rest on a website once scrolling stops (only inside the pinned stretch)
let snapTimer = 0;
let touching = false;
window.addEventListener('scroll', () => {
  clearTimeout(snapTimer);
  snapTimer = setTimeout(() => {
    const r = workEl.getBoundingClientRect();
    if (touching || r.top > 1 || r.bottom < window.innerHeight - 1) return;
    if (Math.abs(target - Math.round(target)) > 0.02) goTo(Math.round(target));
  }, 160);
}, { passive: true });
window.addEventListener('touchstart', () => { touching = true; }, { passive: true });
window.addEventListener('touchend', () => { touching = false; }, { passive: true });

function renderProject(animate) {
  const p = websites()[active];
  const box = $('#project-info');
  $('#car-count').textContent = `${pad(active + 1)} / ${pad(websites().length)}`;
  const draw = () => {
    box.innerHTML = `
      <p class="project__industry">${esc(L(p.industry))}</p>
      <h3 class="project__name">${esc(p.name)}</h3>
      <div class="project__actions">
        <button class="key key--sm" type="button" data-open="${esc(p.id)}">${esc(t('card.case'))}</button>
        <a class="key key--sm key--yellow" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(t('card.visit'))} <span aria-hidden="true">↗</span></a>
      </div>`;
    box.classList.remove('is-swapping');
  };
  if (!animate || reduceMotion) { draw(); return; }
  box.classList.add('is-swapping');
  clearTimeout(renderProject.t);
  renderProject.t = setTimeout(draw, 200);
}

carousel.addEventListener('keydown', (e) => {
  const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
  if (d) { e.preventDefault(); goTo(active + d); }
});

// Click: a side capsule slides to the centre, the centre one opens its case study
let dragged = false;
track.addEventListener('click', (e) => {
  const cap = e.target.closest('.cap');
  if (!cap || dragged) return;
  const i = Number(cap.dataset.i);
  i === active ? openCase(websites()[i].id) : goTo(i);
});

// Sideways swipe / drag moves one website at a time
(() => {
  let x0 = null, y0 = 0, dx = 0;
  carousel.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    x0 = e.clientX; y0 = e.clientY; dx = 0; dragged = false;
  });
  window.addEventListener('pointermove', (e) => {
    if (x0 === null) return;
    dx = e.clientX - x0;
    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - y0)) dragged = true;
  });
  window.addEventListener('pointerup', () => {
    if (x0 !== null && dragged && Math.abs(dx) > 40) goTo(active + (dx < 0 ? 1 : -1));
    x0 = null;
    setTimeout(() => { dragged = false; }, 0);
  });
  carousel.addEventListener('dragstart', (e) => e.preventDefault());
})();

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { measureCarousel(); readWorkScroll(); drawCarousel(); }, 120);
});

/* --- Branding: index list; the cover floats after the cursor, click opens the brand book --- */
function renderBrands() {
  $('#brands-list').innerHTML = BRANDS.map((b, i) => `
    <li class="reveal">
      <button class="brand-row" type="button" data-brand="${esc(b.id)}">
        <span class="mono brand-row__num">00-${i + 1}</span>
        <span class="brand-row__name">${esc(b.name)}</span>
        <span class="brand-row__meta"><b class="mono brand-tag${b.rebrand ? ' brand-tag--re' : ''}">${esc(t(b.rebrand ? 'brands.rebrand' : 'brands.scratch'))}</b>${esc(L(b.industry))}</span>
        <span class="brand-row__thumb"><img src="images/brands/${esc(b.id)}-cover.webp" alt="" loading="lazy" decoding="async"></span>
        <span class="brand-row__go" aria-hidden="true">↗</span>
      </button>
    </li>`).join('');
  renderRebrands();
}

/* --- Rebrands: drag the divider to compare the old logo with CTRL's new identity --- */
function renderRebrands() {
  $('#rebrands-list').innerHTML = BRANDS.filter((b) => b.rebrand).map((b) => `
    <li class="rebrand reveal">
      <div class="compare" style="--pos:50%">
        <img class="compare__img" src="${esc(b.rebrand.after)}" alt="${esc(b.name)} after CTRL's rebrand" loading="lazy" decoding="async">
        <div class="compare__before"><img class="compare__img" src="${esc(b.rebrand.before)}" alt="${esc(b.name)} logo before the rebrand" loading="lazy" decoding="async"></div>
        <span class="mono compare__label compare__label--before">${esc(t('rb.before'))}</span>
        <span class="mono compare__label compare__label--after">${esc(t('rb.after'))}</span>
        <input class="compare__range" type="range" min="0" max="100" value="50" aria-label="${esc(b.name)}: ${esc(t('rb.before'))} / ${esc(t('rb.after'))}">
        <span class="compare__handle" aria-hidden="true"><i>◀ ▶</i></span>
      </div>
      <div class="rebrand__foot">
        <h3 class="rebrand__name">${esc(b.name)}</h3>
        <button class="key key--sm" type="button" data-brand="${esc(b.id)}">${esc(t('rb.open'))} ↗</button>
      </div>
    </li>`).join('');
}

(() => {
  const wrap = $('#rebrands-list');
  wrap.addEventListener('input', (e) => {
    if (!e.target.matches('.compare__range')) return;
    e.target.closest('.compare').style.setProperty('--pos', `${e.target.value}%`); // RTL: the range runs right-to-left, so does --pos
  });
  wrap.addEventListener('click', (e) => {
    const b = e.target.closest('[data-brand]');
    if (b) openBook(b.dataset.brand);
  });
})();

(() => {
  const list = $('#brands-list');
  const float = $('#brands-float');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  let x = 0, y = 0, fx = 0, fy = 0, raf = 0, shown = '';
  const tick = () => {
    const vx = x - fx;
    fx += vx * 0.16; fy += (y - fy) * 0.16;
    float.style.transform = `translate3d(${fx}px, ${fy}px, 0) translate(-50%, -50%) rotate(${clamp(vx * 0.08, -8, 8)}deg)`;
    raf = float.classList.contains('is-on') || Math.abs(vx) > 0.5 ? requestAnimationFrame(tick) : 0;
  };
  list.addEventListener('pointermove', (e) => {
    if (!fine.matches || reduceMotion) return;
    x = e.clientX; y = e.clientY;
    const row = e.target.closest('.brand-row');
    if (row && row.dataset.brand !== shown) {
      shown = row.dataset.brand;
      float.innerHTML = `<img src="images/brands/${shown}-cover.webp" alt="">`;
      if (!float.classList.contains('is-on')) { fx = x; fy = y; }
    }
    float.classList.toggle('is-on', !!row);
    list.classList.toggle('is-hovering', !!row);
    if (!raf) raf = requestAnimationFrame(tick);
  });
  list.addEventListener('pointerleave', () => { float.classList.remove('is-on'); list.classList.remove('is-hovering'); shown = ''; });
  list.addEventListener('click', (e) => {
    const row = e.target.closest('.brand-row');
    if (row) openBook(row.dataset.brand);
  });
})();

/* --- Reels strip: drag sideways; the reel nearest the centre grows and plays --- */
const strip = $('#strip');
let stripActive = -1;

function renderClips() {
  strip.innerHTML = `<div class="strip__pad" aria-hidden="true"></div>` + CLIPS.map((c, i) => `
    <button class="clip" type="button" data-clip="${i}" aria-label="${esc(c.client)}: ${esc(L(c.title))}">
      <img class="clip__poster" src="${esc(c.poster)}" alt="" decoding="async">
      <video class="clip__video" muted loop playsinline preload="none" data-src="${esc(c.video)}"></video>
      <span class="clip__tag mono" dir="ltr">${esc(c.client)}</span>
    </button>`).join('') + `<div class="strip__pad" aria-hidden="true"></div>`;
  stripActive = -1;
  requestAnimationFrame(updateStrip);
}

function updateStrip() {
  const box = strip.getBoundingClientRect();
  const mid = box.left + box.width / 2;
  let best = 0, bestD = Infinity;
  const clips = $$('.clip', strip);
  clips.forEach((el, i) => {
    const r = el.getBoundingClientRect();
    const d = (r.left + r.width / 2 - mid) / box.width;      // -0.5 … 0.5 across the screen
    const k = clamp(1 - Math.abs(d) * 2.2, 0, 1);              // 1 in the centre
    el.style.setProperty('--k', k.toFixed(3));
    el.style.setProperty('--d', d.toFixed(3));
    if (Math.abs(d) < bestD) { bestD = Math.abs(d); best = i; }
  });
  if (best !== stripActive) {
    stripActive = best;
    clips.forEach((el, i) => {
      const v = $('video', el);
      el.classList.toggle('is-active', i === best);
      if (i === best && !reduceMotion) {
        if (!v.src) v.src = v.dataset.src;
        v.play().then(() => el.classList.add('is-playing')).catch(() => {});
      } else { v.pause(); el.classList.remove('is-playing'); }
    });
    const c = CLIPS[best];
    if (c) $('#strip-caption').innerHTML = `<span class="mono">${pad(best + 1)} / ${pad(CLIPS.length)}</span> <b>${esc(L(c.title))}</b> <span dir="ltr">${esc(c.client)}</span>`;
  }
}

let stripTick = false;
strip.addEventListener('scroll', () => {
  if (stripTick) return;
  stripTick = true;
  requestAnimationFrame(() => { updateStrip(); stripTick = false; });
}, { passive: true });
window.addEventListener('resize', () => updateStrip());

function centreClip(i) {
  const el = $$('.clip', strip)[i];
  if (!el) return;
  const target = el.offsetLeft + el.offsetWidth / 2 - strip.clientWidth / 2;
  strip.scrollTo({ left: target, behavior: reduceMotion ? 'auto' : 'smooth' });
}

// mouse drag to scroll (touch scrolls natively)
(() => {
  let down = false, x0 = 0, s0 = 0, moved = false;
  strip.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    down = true; moved = false; x0 = e.clientX; s0 = strip.scrollLeft;
    strip.classList.add('is-dragging');
  });
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - x0;
    if (Math.abs(dx) > 5) moved = true;
    strip.scrollLeft = s0 - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!down) return;
    down = false;
    strip.classList.remove('is-dragging');
    if (moved) centreClip(stripActive);
  });
  strip.addEventListener('click', (e) => {
    if (moved) { moved = false; e.preventDefault(); return; }
    const el = e.target.closest('.clip');
    if (!el) return;
    const i = Number(el.dataset.clip);
    i === stripActive ? openPlayer(i) : centreClip(i);
  });
  strip.addEventListener('dragstart', (e) => e.preventDefault());
})();

strip.addEventListener('keydown', (e) => {
  const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
  if (d) { e.preventDefault(); centreClip(clamp(stripActive + d * (lang === 'ar' ? -1 : 1), 0, CLIPS.length - 1)); }
  if (e.key === 'Enter') openPlayer(stripActive);
});

// pause the strip when it's off screen
new IntersectionObserver(([en]) => {
  const v = $('.clip.is-active video', strip);
  if (!v) return;
  if (en.isIntersecting && !reduceMotion) v.play().catch(() => {}); else v.pause();
}).observe(strip);

/* full-screen player with sound */
const player = $('#player');
const playerVideo = $('#player-video');
function openPlayer(i) {
  const c = CLIPS[i];
  if (!c) return;
  $$('.clip video', strip).forEach((v) => v.pause());
  playerVideo.src = c.video;
  playerVideo.poster = c.poster;
  playerVideo.muted = false;
  player.showModal();
  document.body.classList.add('is-locked');
  playerVideo.play().catch(() => {});
}
player.addEventListener('click', (e) => { if (e.target === player || e.target.closest('[data-close]')) player.close(); });
player.addEventListener('close', () => {
  playerVideo.pause();
  playerVideo.removeAttribute('src');
  playerVideo.load();
  document.body.classList.remove('is-locked');
  stripActive = -1; updateStrip();
});

/* --- Brand book viewer: swipe through slides, or scroll down a long board --- */
const book = $('#book');
const bookTrack = $('#book-track');
let bookBrand = null;

function openBook(id) {
  const b = BRANDS.find((x) => x.id === id);
  if (!b) return;
  bookBrand = b;
  const pad2 = (n) => String(n).padStart(2, '0');
  const imgs = b.pages
    ? Array.from({ length: b.pages }, (_, i) => `images/brands/${b.id}/${pad2(i + 1)}.webp`)
    : Array.from({ length: b.boards }, (_, i) => `images/brands/${b.id}/board-${i + 1}.webp`);
  bookTrack.classList.toggle('book__track--board', !b.pages);
  bookTrack.innerHTML = imgs.map((src, i) =>
    `<figure class="book__slide"><img src="${src}" alt="${esc(b.name)} brand book, ${b.pages ? `page ${i + 1}` : `board ${i + 1}`}" ${i > 1 ? 'loading="lazy"' : ''} decoding="async"></figure>`).join('');
  $('#book-title').textContent = b.name;
  $('.book__keys').hidden = !b.pages;
  book.showModal();
  document.body.classList.add('is-locked');
  bookTrack.scrollTo({ left: 0, top: 0 });
  updateBookCount();
  bookTrack.focus({ preventScroll: true });
}

function updateBookCount() {
  if (!bookBrand) return;
  if (!bookBrand.pages) { $('#book-count').textContent = `${L(bookBrand.industry)}`; return; }
  const i = Math.round(bookTrack.scrollLeft / Math.max(1, bookTrack.clientWidth) * (lang === 'ar' ? -1 : 1));
  $('#book-count').textContent = `${pad(Math.abs(i) + 1)} / ${pad(bookBrand.pages)}`;
}

function stepBook(d) {
  const dir = lang === 'ar' ? -1 : 1;
  bookTrack.scrollBy({ left: d * dir * bookTrack.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
}

bookTrack.addEventListener('scroll', updateBookCount, { passive: true });
$('#book-prev').addEventListener('click', () => stepBook(-1));
$('#book-next').addEventListener('click', () => stepBook(1));
book.addEventListener('keydown', (e) => {
  if (!bookBrand || !bookBrand.pages) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); stepBook(lang === 'ar' ? -1 : 1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); stepBook(lang === 'ar' ? 1 : -1); }
});
book.addEventListener('click', (e) => { if (e.target.closest('[data-close]') || e.target === book) book.close(); });
book.addEventListener('close', () => { document.body.classList.remove('is-locked'); bookBrand = null; });

/* --- Social feeds --- */
function fakeProfile(s) {
  const tiles = Array.from({ length: 9 }, (_, i) => `<span class="ig__tile" style="--l:${(i * 7) % 16}"></span>`).join('');
  return `<div class="ig">
    <div class="ig__head">${esc(s.handle.replace('@', ''))}</div>
    <div class="ig__profile" aria-hidden="true"><span class="ig__avatar"></span>
      <span><b>—</b>posts</span><span><b>—</b>followers</span><span><b>—</b>following</span></div>
    <div class="ig__bio" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="ig__highlights" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
    <div class="ig__grid">${tiles}<span class="ph__tag">[REPLACE WITH FEED SCREENSHOT]</span></div>
  </div>`;
}

function feedCard(s) {
  const shot = s.screenshot
    ? `<img src="${esc(s.screenshot)}" alt="Instagram feed of ${esc(s.handle)}" loading="lazy" decoding="async">`
    : fakeProfile(s);
  return `
    <article class="feed reveal">
      <button class="feed__zoom" type="button" data-zoom="${esc(s.id)}" aria-label="${esc(t('zoom.open'))}: ${esc(s.handle)}">${phone(shot)}</button>
      <div class="feed__info">
        <p class="feed__handle">${esc(s.handle)}</p>
        <p class="feed__industry">${esc(L(s.industry))}</p>
        ${tagList(s.did)}
        <div class="feed__actions">
          <a class="key key--sm" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(t('social.view'))} ↗</a>
          ${s.siteId ? `<button class="key key--sm key--light" type="button" data-open="${esc(s.siteId)}">${esc(t('card.site'))}</button>` : ''}
        </div>
      </div>
    </article>`;
}

function renderFeeds() {
  $('#feeds-scratch').innerHTML = socials('scratch').map(feedCard).join('');
  $('#feeds-content').innerHTML = socials('content').map(feedCard).join('');
}

/* --- Feed zoom: the tapped phone pops out and grows to full height --- */
const zoom = $('#feed-zoom');
const zoomList = () => [...socials('scratch'), ...socials('content')];
let zoomIndex = 0;

function fillZoom() {
  const list = zoomList();
  const s = list[zoomIndex];
  const shot = s.screenshot
    ? `<img src="${esc(s.screenshot)}" alt="Instagram feed of ${esc(s.handle)}" decoding="async">`
    : fakeProfile(s);
  $('#zoom-phone').innerHTML = phone(shot);
  $('#zoom-info').innerHTML = `
    <p class="feed__handle">${esc(s.handle)}</p>
    <p class="feed__industry">${esc(L(s.industry))}</p>
    ${tagList(s.did)}
    <div class="feed__actions">
      <a class="key key--yellow key--sm" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(t('social.view'))} ↗</a>
      ${s.siteId ? `<button class="key key--sm key--light" type="button" data-open="${esc(s.siteId)}">${esc(t('card.site'))}</button>` : ''}
    </div>`;
  $('#zoom-count').textContent = `${pad(zoomIndex + 1)} / ${pad(list.length)}`;
}

function openZoom(id, fromEl) {
  zoomIndex = Math.max(0, zoomList().findIndex((s) => s.id === id));
  fillZoom();
  zoom.showModal();
  document.body.classList.add('is-locked');
  if (reduceMotion || !fromEl) return;
  // grow out of the phone that was tapped
  const big = $('#zoom-phone .phone');
  const a = fromEl.getBoundingClientRect();
  const b = big.getBoundingClientRect();
  const dx = a.left + a.width / 2 - (b.left + b.width / 2);
  const dy = a.top + a.height / 2 - (b.top + b.height / 2);
  big.animate(
    [{ transform: `translate(${dx}px, ${dy}px) scale(${a.width / b.width})` }, { transform: 'none' }],
    { duration: 550, easing: 'cubic-bezier(.2, .8, .2, 1)' },
  );
  $('#zoom-info').animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 400, delay: 250, fill: 'backwards' });
}

function stepZoom(d) {
  const n = zoomList().length;
  zoomIndex = (zoomIndex + d + n) % n;
  fillZoom();
  if (!reduceMotion) $('#zoom-phone .phone').animate([{ opacity: 0, transform: `translateX(${d * 30}px)` }, { opacity: 1, transform: 'none' }], { duration: 350, easing: 'ease-out' });
}

$('#social').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-zoom]');
  if (btn) openZoom(btn.dataset.zoom, $('.phone', btn));
});
$('#zoom-prev').addEventListener('click', () => stepZoom(-1));
$('#zoom-next').addEventListener('click', () => stepZoom(1));
zoom.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') stepZoom(lang === 'ar' ? -1 : 1);
  if (e.key === 'ArrowLeft') stepZoom(lang === 'ar' ? 1 : -1);
});
zoom.addEventListener('click', (e) => {
  // click outside the phone and the info closes it
  if (e.target.closest('[data-close]') || !e.target.closest('.zoom__phone .phone, .zoom__info, .zoom__keys')) zoom.close();
  else if (e.target.closest('[data-open]')) zoom.close();
});
zoom.addEventListener('close', () => document.body.classList.remove('is-locked'));

/* --- AI reels: the real videos, silent and looping while on screen --- */
function renderReels() {
  $('#reels').innerHTML = REELS.map((r, i) => `
    <article class="reel reveal">
      <video class="reel__video" src="${esc(r.video)}" muted loop playsinline preload="metadata" aria-label="AI video for ${esc(r.client)}"></video>
      <div class="reel__shade" aria-hidden="true"></div>
      <div class="reel__top mono"><span>Reel ${pad(i + 1)}</span><span dir="ltr">${esc(r.client)}</span></div>
      <button class="reel__sound" type="button" aria-pressed="false" aria-label="${esc(t('reel.sound'))}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path class="on" d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/><path class="off" d="m16 9 6 6m0-6-6 6"/></svg>
      </button>
    </article>`).join('');
  $$('.reel__video').forEach((v) => reelObserver.observe(v));
}

// play only while on screen
const reelObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target: v, isIntersecting }) => {
    if (isIntersecting && !reduceMotion) v.play().catch(() => {});
    else v.pause();
  });
}, { threshold: 0.35 });

// one video with sound at a time
$('#reels').addEventListener('click', (e) => {
  const btn = e.target.closest('.reel__sound');
  if (!btn) return;
  const v = $('video', btn.closest('.reel'));
  const turnOn = v.muted;
  $$('.reel').forEach((card) => {
    $('video', card).muted = true;
    $('.reel__sound', card).setAttribute('aria-pressed', 'false');
  });
  if (turnOn) { v.muted = false; v.play().catch(() => {}); btn.setAttribute('aria-pressed', 'true'); }
});

/* --- Case-study modal --- */
const modal = $('#case-modal');
let lastFocus = null;

function openCase(id) {
  if (!fillCase(id)) return;
  lastFocus = document.activeElement;
  modal.dataset.id = id;
  modal.showModal();
  document.body.classList.add('is-locked');
  modal.scrollTop = 0;
}

/** Write a project's case study into the modal; returns false if the id is unknown */
function fillCase(id) {
  const p = websites().find((x) => x.id === id);
  if (!p) return false;
  $('#case-body').innerHTML = `
    <article class="case">
      <header class="case__head">
        <p class="project__industry">${esc(L(p.industry))}</p>
        <h2 class="case__title" id="case-title">${esc(p.name)}</h2>
      </header>
      <div class="case__cover"><img src="${esc(p.cover.src)}" alt="${esc(p.name)}" style="object-position:${esc(p.cover.focus)}"></div>
      <div class="case__grid">
        <div class="case__side">
          <div><h3>${esc(t('modal.about'))}</h3><p class="project__summary">${esc(L(p.summary))}</p></div>
          ${tagList(p.tags)}
          <div>${visitLink(p)}</div>
        </div>
        <div>
          <h3>${esc(t('modal.built'))}</h3>
          <ul class="case__list">${L(p.built).map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
        </div>
      </div>
    </article>`;
  return true;
}

modal.addEventListener('close', () => {
  document.body.classList.remove('is-locked');
  delete modal.dataset.id;
  if (lastFocus) lastFocus.focus();
});
modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.closest('[data-close]')) modal.close(); // backdrop or close key
});

// Any [data-open] button outside the carousel opens that case study
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-open]');
  if (btn) openCase(btn.dataset.open);
});

function renderAll() {
  renderMarquee();
  renderCarousel();
  renderFeeds();
  renderReels();
  renderBrands();
  renderClips();
  observeReveals();
  if (modal.open && modal.dataset.id) fillCase(modal.dataset.id); // re-translate an open case study
  if (zoom.open) fillZoom();
}

/* ---------- 7. Language toggle ---------- */
function applyLang(next) {
  lang = next;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $('[data-lang-label]').textContent = lang === 'ar' ? 'EN' : 'AR';
  $('#lang-toggle').setAttribute('aria-label', t('lang.switch'));
  $('#hero-title').setAttribute('aria-label', t('hero.title'));
  $('.modal__close').setAttribute('aria-label', t('modal.close'));

  renderAll();
  typeHeadline();
  updateProcess();
  readWorkScroll();
  fitReach();
  storage('ctrl-lang', lang);
}

$('#lang-toggle').addEventListener('click', () => applyLang(lang === 'en' ? 'ar' : 'en'));

/* ---------- 8. Hero ---------- */
let typingTimer = null;

/** Type the headline letter by letter; "CTRL" is drawn as a key */
function typeHeadline() {
  clearTimeout(typingTimer);
  const el = $('#hero-typed');
  const full = t('hero.title');
  const at = full.indexOf('CTRL');

  const draw = (n) => {
    if (at < 0) { el.textContent = full.slice(0, n); return; }
    const before = esc(full.slice(0, Math.min(n, at)));
    const key = n > at ? `<span class="hl">${esc(full.slice(at, Math.min(n, at + 4)))}</span>` : '';
    const after = n > at + 4 ? esc(full.slice(at + 4, n)) : '';
    el.innerHTML = before + key + after;
  };

  if (reduceMotion) { draw(full.length); return; }
  let n = 0;
  const step = () => {
    draw(++n);
    if (n < full.length) typingTimer = setTimeout(step, full[n - 1] === ' ' ? 120 : 55 + Math.random() * 50);
  };
  draw(0);
  typingTimer = setTimeout(step, 450);
}

/* Halftone dots (the "Butter" reference): bigger towards the edges, a slow wave,
   and they swell around the pointer. Paused while the hero is off screen. */
(() => {
  const canvas = $('#hero-dots');
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;
  let W = 0, H = 0, dpr = 1, raf = 0, visible = true;
  const pointer = { x: -9999, y: -9999 };

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth; H = hero.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const frame = (time) => {
    const narrow = W < 700;
    const s = narrow ? 14 : 21;           // grid spacing
    const t0 = time / 1000;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0A0A0A';
    ctx.beginPath();
    for (let y = s / 2; y < H; y += s) {
      for (let x = s / 2; x < W; x += s) {
        const nx = (x - W * 0.5) / (W * 0.5);
        const ny = (y - H * 0.48) / (H * 0.5);
        // on narrow screens the dots gather at the top and bottom, away from the text
        const d = narrow ? Math.abs(ny) * 1.05 + Math.abs(nx) * 0.15 : Math.sqrt(nx * nx * 0.9 + ny * ny * 1.1);
        let f = (d - 0.8) / 0.45 + 0.2 * Math.sin(t0 * 1.1 + x * 0.011 + y * 0.007);
        if (y < 96) f -= (1 - y / 96) * 1.6; // keep the nav strip clear
        const pd = Math.hypot(x - pointer.x, y - pointer.y);
        if (pd < 170) f += (1 - pd / 170) * 0.9;
        const r = clamp(f, 0, 1) * s * 0.56;
        if (r > 0.4) { ctx.moveTo(x + r, y); ctx.arc(x, y, r, 0, Math.PI * 2); }
      }
    }
    ctx.fill();
    if (!reduceMotion && visible) raf = requestAnimationFrame(frame);
  };

  const start = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); };
  resize();
  start();
  window.addEventListener('resize', () => { resize(); start(); });
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top;
    if (reduceMotion) start();
  });
  hero.addEventListener('pointerleave', () => { pointer.x = pointer.y = -9999; });
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); }).observe(hero);
})();

/* ---------- 9. Service panels, process wheel, AI word wheel ---------- */
const panels = $$('.panel');
function openPanel(panel) {
  panels.forEach((p) => {
    const on = p === panel;
    p.classList.toggle('is-open', on);
    $('.panel__head', p).setAttribute('aria-expanded', String(on));
  });
}
// Hover opens a panel only after the pointer rests on it, and not while the last one is still
// sliding open. Opening moves the other panels, so an instant hover would keep re-triggering.
const canHover = window.matchMedia('(hover: hover) and (min-width: 861px)');
let hoverTimer = 0;
let panelBusyUntil = 0;
function openPanelSoon(p) {
  clearTimeout(hoverTimer);
  if (p.classList.contains('is-open')) return;
  const wait = Math.max(220, panelBusyUntil - Date.now());
  hoverTimer = setTimeout(() => { openPanel(p); panelBusyUntil = Date.now() + 750; }, wait);
}
panels.forEach((p) => {
  $('.panel__head', p).addEventListener('click', () => { clearTimeout(hoverTimer); openPanel(p); panelBusyUntil = Date.now() + 750; });
  p.addEventListener('mouseenter', () => { if (canHover.matches) openPanelSoon(p); });
  p.addEventListener('mouseleave', () => clearTimeout(hoverTimer));
});

// Process: words roll past as you scroll through the section
const processEl = $('#process');
const processWords = $$('#process-words li');
const processDesc = $$('.process__desc p');
if (!reduceMotion) processEl.classList.add('process--live');

function updateProcess() {
  if (!processEl.classList.contains('process--live')) return;
  const r = processEl.getBoundingClientRect();
  const progress = clamp(-r.top / (r.height - window.innerHeight), 0, 0.999);
  const idx = Math.floor(progress * processWords.length);
  processWords.forEach((li, i) => { li.style.setProperty('--o', i - idx); li.classList.toggle('is-active', i === idx); });
  processDesc.forEach((p, i) => p.classList.toggle('is-active', i === idx));
}
let processTick = false;
window.addEventListener('scroll', () => {
  if (processTick) return;
  processTick = true;
  requestAnimationFrame(() => { updateProcess(); processTick = false; });
}, { passive: true });

/* Footer "REACH OUT....": shrink the type until the whole line fits its width */
function fitReach() {
  const el = $('.footer__reach');
  el.style.fontSize = '';
  const ratio = el.clientWidth / el.scrollWidth;
  if (ratio < 1) el.style.fontSize = `${parseFloat(getComputedStyle(el).fontSize) * ratio * 0.98}px`;
}
window.addEventListener('resize', fitReach);
if ('ResizeObserver' in window) new ResizeObserver(() => fitReach()).observe($('.footer'));
if (document.fonts) document.fonts.ready.then(fitReach);

/* ---------- 10. Nav, reveal, counters, key presses ---------- */
const nav = $('#nav');
const burger = $('#burger');

const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > window.innerHeight * 0.75);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('is-locked', open);
}
burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
$('#nav-links').addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('is-open')) setMenu(false); });

// Highlight the nav link of the section on screen
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    $$('.nav__links a:not(.key)').forEach((a) => {
      if (a.getAttribute('href') === `#${entry.target.id}`) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });
['work', 'branding', 'clips', 'social', 'services', 'process', 'contact'].forEach((id) => sectionObserver.observe(document.getElementById(id)));

// Scroll reveal (staggered within each group)
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  : null;

function observeReveals() {
  $$('.reveal:not(.is-in)').forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    el.style.setProperty('--d', `${Math.min(siblings.indexOf(el), 5) * 0.08}s`);
    revealObserver ? revealObserver.observe(el) : el.classList.add('is-in');
  });
}

// Animated counters
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const end = Number(el.dataset.count);
    const start = performance.now();
    const dur = reduceMotion ? 0 : 1400;
    const tick = (now) => {
      const k = dur ? Math.min((now - start) / dur, 1) : 1;
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countObserver.unobserve(el);
  });
}, { threshold: 0.6 });
$$('[data-count]').forEach((el) => countObserver.observe(el));

// Key-caps press down on Enter/Space too (mouse/touch use :active)
document.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList?.contains('key')) e.target.classList.add('is-pressed'); });
document.addEventListener('keyup', (e) => { if (e.target.classList?.contains('key')) e.target.classList.remove('is-pressed'); });
document.addEventListener('touchstart', () => {}, { passive: true }); // enables :active on iOS

// Contact links from CONFIG
$$('[data-contact="whatsapp"]').forEach((a) => { a.href = `https://wa.me/${CONFIG.whatsapp}`; });
$$('[data-contact="email"]').forEach((a) => { a.href = `mailto:${CONFIG.email}`; });
$$('[data-contact-text="email"]').forEach((el) => { el.textContent = CONFIG.email; });
$$('[data-contact="instagram"]').forEach((a) => { a.href = CONFIG.instagram; });

/* ---------- 11. Contact form ---------- */
const form = $('#contact-form');
const statusEl = $('#form-status');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;

function validateField(input) {
  const v = input.value.trim();
  let msg = '';
  if (input.required && !v) msg = t('err.required');
  else if (input.type === 'email' && v && !EMAIL_RE.test(v)) msg = t('err.email');
  else if (input.type === 'tel' && v && !PHONE_RE.test(v)) msg = t('err.phone');
  const field = input.closest('.field');
  field.classList.toggle('is-invalid', !!msg);
  input.setAttribute('aria-invalid', String(!!msg));
  const err = $('.field__error', field);
  if (err) err.textContent = msg;
  return !msg;
}

// Validate a field when the visitor leaves it, and re-check as they fix it
form.addEventListener('focusout', (e) => { if (e.target.matches('input, select, textarea')) validateField(e.target); });
form.addEventListener('input', (e) => { if (e.target.closest('.is-invalid')) validateField(e.target); });

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputs = $$('input, select, textarea', form);
  const results = inputs.map(validateField);
  if (results.includes(false)) { inputs[results.indexOf(false)].focus(); return; }

  form.classList.add('is-sending');
  statusEl.textContent = t('f.sending');
  try {
    if (CONFIG.formspree.includes('YOUR_FORM_ID')) {
      // Demo mode until the Formspree endpoint is set
      await new Promise((r) => setTimeout(r, 700));
      console.info('[CTRL] Form is in demo mode. Set CONFIG.formspree in script.js to receive messages.');
    } else {
      const res = await fetch(CONFIG.formspree, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
    }
    form.reset();
    statusEl.textContent = '';
    const ok = $('#form-success');
    ok.hidden = false;
    ok.focus();
  } catch (err) {
    console.error(err);
    statusEl.textContent = t('err.send');
  } finally {
    form.classList.remove('is-sending');
  }
});

/* ---------- Init ---------- */
$$('[data-i18n]').forEach((el) => { EN[el.dataset.i18n] ??= el.textContent; });
Object.entries(EN_EXTRA).forEach(([k, v]) => { EN[k] ??= v; }); // HTML wins where both exist
applyLang(storage('ctrl-lang') === 'ar' ? 'ar' : 'en');
