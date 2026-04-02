import { ServiceCategoryData, ServiceTabId } from './types';

const placeholder = {
  en: 'Media-ready placeholder for future images and videos.',
  ar: 'حالة جاهزة لإضافة الصور ومقاطع الفيديو مستقبلاً.',
};

export const serviceTabOrder: ServiceTabId[] = [
  'marketing',
  'creative',
  'digital',
  'logistics',
  'facility',
  'manpower',
  'financial',
];

export const servicesData: Record<ServiceTabId, ServiceCategoryData> = {
  marketing: {
    id: 'marketing',
    label: { en: 'Marketing Services', ar: 'الخدمات التسويقية' },
    eyebrow: { en: 'Retail Visibility', ar: 'الحضور داخل المتاجر' },
    intro: {
      en: 'From retail theatre to launch collateral, we design and deliver tangible brand moments that move products faster.',
      ar: 'من الحضور داخل المتاجر إلى مواد الإطلاق، نصمم وننفذ لحظات بصرية ملموسة تعزز حضور العلامة وتسهم في تسريع المبيعات.',
    },
    layout: 'split',
    groups: [
      {
        id: 'soft-posm',
        title: { en: 'Soft POSM', ar: 'مواد نقاط البيع الناعمة' },
        description: {
          en: 'Printed, lightweight and campaign-ready touchpoints.',
          ar: 'حلول مطبوعة وخفيفة وجاهزة للحملات التسويقية.',
        },
        columns: 2,
        items: [
          { id: 'wobbler', title: { en: 'Wobbler', ar: 'ووبلر' }, description: { en: 'Shelf-attached promotional swing tags for attention and conversion.', ar: 'عناصر دعائية متحركة تُثبت على الرفوف لجذب الانتباه وتحفيز الشراء.' }, mediaType: 'placeholder' },
          { id: 'booklet', title: { en: 'Booklet', ar: 'كتيب' }, description: { en: 'Compact printed brand guides and product explainers.', ar: 'كتيبات مطبوعة مدمجة لشرح العلامة والمنتج بشكل أنيق.' }, mediaType: 'placeholder' },
          { id: 'flyer', title: { en: 'Flyer', ar: 'منشور دعائي' }, description: { en: 'Quick-distribution campaign flyers for launches and activations.', ar: 'منشورات سريعة التوزيع للحملات والإطلاقات والأنشطة الترويجية.' }, mediaType: 'placeholder' },
          { id: 'neck-tags', title: { en: 'Neck Tags', ar: 'بطاقات تعليق' }, description: { en: 'Bottle and pack-neck tags for high-visibility promotions.', ar: 'بطاقات تعليق للعبوات والزجاجات تمنح المنتج حضوراً ترويجياً بارزاً.' }, mediaType: 'placeholder' },
          { id: 'pr-kits', title: { en: 'PR Kits', ar: 'حقائب علاقات عامة' }, description: { en: 'Curated launch kits for press, influencers and trade stakeholders.', ar: 'حقائب إطلاق مخصصة للإعلام والمؤثرين والشركاء التجاريين.' }, mediaType: 'image', gallery: [{ type: 'image', src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80', alt: { en: 'Premium PR kit packaging', ar: 'تغليف حقائب علاقات عامة راقٍ' } }] },
          { id: 'promo-boxes', title: { en: 'Promo Boxes', ar: 'صناديق ترويجية' }, description: { en: 'Premium presentation boxes for gifting, launches and offers.', ar: 'صناديق عرض راقية للهدايا والإطلاقات والعروض الترويجية.' }, mediaType: 'placeholder' },
          { id: 'outer-cartons', title: { en: 'Outer Cartons', ar: 'كرتون خارجي' }, description: { en: 'Branded outer cartons that improve logistics and shelf readiness.', ar: 'كرتون خارجي يحمل هوية العلامة ويجمع بين الجاهزية اللوجستية والمظهر الاحترافي.' }, mediaType: 'placeholder' },
          { id: 'business-cards', title: { en: 'Business Cards', ar: 'بطاقات أعمال' }, description: { en: 'Premium corporate cards tailored for sales, executive and brand teams.', ar: 'بطاقات أعمال احترافية لفرق المبيعات والإدارة والتمثيل المؤسسي.' }, mediaType: 'placeholder' },
          { id: 'paper-cup', title: { en: 'Paper Cup', ar: 'أكواب ورقية' }, description: { en: 'Branded beverage cups for events, offices and sampling activations.', ar: 'أكواب ورقية مطبوعة للفعاليات والمكاتب وحملات التذوق.' }, mediaType: 'placeholder' },
          { id: 'tissue-box', title: { en: 'Tissue Box', ar: 'علب مناديل' }, description: { en: 'Elegant branded tissue packaging for hospitality and client-facing spaces.', ar: 'علب مناديل مطبوعة بأسلوب راقٍ للضيافة والمساحات المخصصة للعملاء.' }, mediaType: 'placeholder' },
          { id: 'paper-based-items', title: { en: 'All Paper Based Items', ar: 'جميع المنتجات الورقية' }, description: { en: 'A complete paper-based production line for retail, events and corporate needs.', ar: 'حلول ورقية متكاملة لاحتياجات المتاجر والفعاليات والاستخدامات المؤسسية.' }, mediaType: 'placeholder' },
        ],
      },
      {
        id: 'hard-posm',
        title: { en: 'Hard POSM', ar: 'مواد نقاط البيع الصلبة' },
        description: {
          en: 'Built structures that command space and improve conversion.',
          ar: 'هياكل عرض متينة تمنح العلامة حضوراً قوياً داخل نقطة البيع.',
        },
        columns: 2,
        items: [
          { id: 'fsus', title: { en: 'FSUs', ar: 'وحدات عرض أرضية' }, description: { en: 'Free-standing display units engineered for retail impact.', ar: 'وحدات عرض أرضية مستقلة مصممة لزيادة التأثير داخل المتجر.' }, mediaType: 'placeholder' },
          { id: 'display-booth', title: { en: 'Display Booth', ar: 'منصة عرض' }, description: { en: 'Modular branded booths for activations, exhibitions and launches.', ar: 'منصات عرض مرنة للفعاليات والمعارض والإطلاقات الترويجية.' }, mediaType: 'image', gallery: [{ type: 'image', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80', alt: { en: 'Branded display booth', ar: 'منصة عرض تحمل هوية العلامة' } }] },
          { id: 'catman-solutions', title: { en: 'Catman Solutions', ar: 'حلول إدارة الفئات' }, description: { en: 'Category-management structures that improve navigation and sell-through.', ar: 'حلول عرض تساعد في تنظيم الفئات وتحسين تجربة التسوق وزيادة البيع.' }, mediaType: 'placeholder' },
          { id: 'category-dressup', title: { en: 'Category Dressup', ar: 'تجهيز الفئة' }, description: { en: 'Visual merchandising packages for complete category transformation.', ar: 'حلول مظهر بصري متكاملة لتحسين حضور الفئة بالكامل داخل المتجر.' }, mediaType: 'placeholder' },
          { id: 'gondola-end', title: { en: 'Gondola End', ar: 'نهاية الجندولا' }, description: { en: 'High-traffic end-cap executions for hero products and campaigns.', ar: 'تنفيذات عرض على نهايات الرفوف المزدحمة لمنتجات وحملات رئيسية.' }, mediaType: 'placeholder' },
          { id: 'counter-top', title: { en: 'Counter Top', ar: 'وحدة سطح كاونتر' }, description: { en: 'Compact countertop displays for checkout and close-contact selling.', ar: 'وحدات عرض صغيرة فوق الكاونتر لتعزيز المبيعات اللحظية عند نقطة الدفع.' }, mediaType: 'placeholder' },
          { id: 'glorifier', title: { en: 'Glorifier', ar: 'قاعدة إبراز المنتج' }, description: { en: 'Premium product glorifiers designed for hero-pack storytelling.', ar: 'قواعد عرض راقية لإبراز المنتج الرئيسي وإيصال قصته بشكل بصري جذاب.' }, mediaType: 'placeholder' },
          { id: 'shelf-tray', title: { en: 'Shelf Tray', ar: 'صينية رف' }, description: { en: 'Shelf-ready trays that keep products aligned and brand-visible.', ar: 'صواني رفوف جاهزة للعرض تحافظ على ترتيب المنتج وإظهار الهوية.' }, mediaType: 'placeholder' },
          { id: 'divider', title: { en: 'Divider', ar: 'فاصل رف' }, description: { en: 'Shelf dividers that improve organization, visibility and premium presentation.', ar: 'فواصل رفوف تعزز التنظيم والظهور وتمنح العرض مظهراً احترافياً.' }, mediaType: 'placeholder' },
        ],
      },
    ],
  },
  creative: {
    id: 'creative',
    label: { en: 'Creative Services', ar: 'الخدمات الإبداعية' },
    eyebrow: { en: 'Brand Craft', ar: 'صياغة الهوية' },
    intro: {
      en: 'Creative assets built for modern Saudi brands, combining strategic clarity with polished execution across print, activation and spatial branding.',
      ar: 'أصول إبداعية مصممة للعلامات السعودية الحديثة، تجمع بين وضوح الاستراتيجية وجودة التنفيذ عبر المطبوعات والفعاليات والهوية المكانية.',
    },
    layout: 'balanced',
    groups: [
      {
        id: 'brand-identity',
        title: { en: 'Brand Identity & Design', ar: 'الهوية والتصميم' },
        description: {
          en: 'Foundational visuals that align every touchpoint.',
          ar: 'أساس بصري يوحّد حضور العلامة عبر جميع نقاط التواصل.',
        },
        columns: 1,
        items: [
          { id: 'brand-guidelines', title: { en: 'Brand Guidelines', ar: 'دليل الهوية' }, description: { en: 'Comprehensive standards for logos, typography, color and brand behavior.', ar: 'معايير متكاملة للشعار والخطوط والألوان وسلوك العلامة.' }, mediaType: 'placeholder' },
          { id: 'visual-identity-refresh', title: { en: 'Visual Identity Refresh', ar: 'تحديث الهوية البصرية' }, description: { en: 'Strategic refinements that modernize the brand without losing recognition.', ar: 'تحسينات استراتيجية تحدّث الهوية دون فقدان التعرّف عليها.' }, mediaType: 'placeholder' },
          { id: 'corporate-decks', title: { en: 'Corporate Decks', ar: 'عروض تقديمية مؤسسية' }, description: { en: 'Executive-level presentation decks for proposals, tenders and investor meetings.', ar: 'عروض تنفيذية احترافية للمقترحات والمناقصات والاجتماعات الاستثمارية.' }, mediaType: 'placeholder' },
          { id: 'sales-kits', title: { en: 'Sales Kits', ar: 'حقائب مبيعات' }, description: { en: 'Well-structured collateral kits that equip sales teams to win faster.', ar: 'حزم تعريفية عملية تمكّن فرق المبيعات من الإقناع والإغلاق بشكل أسرع.' }, mediaType: 'placeholder' },
          { id: 'packaging-design', title: { en: 'Packaging Design', ar: 'تصميم التغليف' }, description: { en: 'Packaging systems that balance shelf presence, compliance and usability.', ar: 'أنظمة تغليف تجمع بين الحضور على الرف والامتثال وسهولة الاستخدام.' }, mediaType: 'placeholder' },
          { id: 'environmental-branding', title: { en: 'Environmental Branding', ar: 'الهوية البيئية للمساحات' }, description: { en: 'Spatial branding for offices, showrooms and client reception spaces.', ar: 'تصميم هوية بصرية للمكاتب وصالات العرض ومساحات استقبال العملاء.' }, mediaType: 'placeholder' },
        ],
      },
      {
        id: 'campaign-production',
        title: { en: 'Campaign Production', ar: 'إنتاج الحملات' },
        description: {
          en: 'Campaign-ready design assets built for launch and rollout.',
          ar: 'أصول تصميمية جاهزة للإطلاق والتنفيذ عبر القنوات المختلفة.',
        },
        columns: 1,
        items: [
          { id: 'campaign-key-visuals', title: { en: 'Campaign Key Visuals', ar: 'الصور الرئيسية للحملات' }, description: { en: 'Hero visuals that unify launch campaigns across channels.', ar: 'مرئيات رئيسية توحد الحملة عبر مختلف القنوات.' }, mediaType: 'placeholder' },
          { id: 'event-branding', title: { en: 'Event Branding', ar: 'هوية الفعاليات' }, description: { en: 'Elegant event identity systems for launches, exhibitions and business forums.', ar: 'أنظمة هوية متكاملة للفعاليات والإطلاقات والمعارض والمنتديات.' }, mediaType: 'placeholder' },
          { id: 'signage-systems', title: { en: 'Signage Systems', ar: 'أنظمة اللوحات الإرشادية' }, description: { en: 'Directional and branded signage that improves flow and perception.', ar: 'لوحات توجيهية وهوية مكانية تحسن الحركة والانطباع العام.' }, mediaType: 'placeholder' },
          { id: 'activation-collateral', title: { en: 'Activation Collateral', ar: 'مواد التفعيل' }, description: { en: 'Sampling, event and launch collateral designed for real-world engagement.', ar: 'مواد ترويجية للفعاليات والتجارب الميدانية مصممة للتفاعل الفعلي.' }, mediaType: 'placeholder' },
          { id: 'premium-gifting', title: { en: 'Premium Gifting Concepts', ar: 'مفاهيم هدايا راقية' }, description: { en: 'Business gifting concepts crafted for executive and client experiences.', ar: 'مفاهيم هدايا مميزة لخلق تجارب راقية للعملاء والإدارة التنفيذية.' }, mediaType: 'placeholder' },
          { id: 'motion-storyboards', title: { en: 'Motion Storyboards', ar: 'لوحات قصص للحركة' }, description: { en: 'Storyboard systems that prepare campaigns for video and digital production.', ar: 'لوحات قصص بصرية تهيئ الحملات للإنتاج المرئي والرقمي.' }, mediaType: 'placeholder' },
        ],
      },
    ],
  },
  digital: {
    id: 'digital',
    label: { en: 'Digital Services', ar: 'الخدمات الرقمية' },
    eyebrow: { en: 'Growth Systems', ar: 'أنظمة النمو' },
    intro: {
      en: 'Digital services designed to elevate discoverability, strengthen trust and create measurable growth for ambitious operating businesses.',
      ar: 'خدمات رقمية مصممة لزيادة الظهور وتعزيز الثقة وصنع نمو قابل للقياس للشركات الطموحة.',
    },
    layout: 'balanced',
    groups: [
      {
        id: 'performance-presence',
        title: { en: 'Performance & Presence', ar: 'الحضور والأداء' },
        description: {
          en: 'Digital visibility that supports conversion and reputation.',
          ar: 'حضور رقمي يعزز التحويل ويرفع صورة العلامة.',
        },
        columns: 1,
        items: [
          { id: 'website-experience', title: { en: 'Website Experience Design', ar: 'تصميم تجربة المواقع' }, description: { en: 'Conversion-focused website design for corporate and service brands.', ar: 'تصميم مواقع موجهة للتحويل للعلامات المؤسسية والخدمية.' }, mediaType: 'placeholder' },
          { id: 'seo-optimization', title: { en: 'SEO Optimization', ar: 'تهيئة محركات البحث' }, description: { en: 'Search optimization for Arabic and English visibility across Saudi markets.', ar: 'تحسين الظهور بالعربية والإنجليزية عبر الأسواق السعودية.' }, mediaType: 'placeholder' },
          { id: 'social-content', title: { en: 'Social Content Systems', ar: 'أنظمة محتوى التواصل' }, description: { en: 'Structured monthly content systems for social consistency and authority.', ar: 'أنظمة محتوى شهرية منظمة تمنح القنوات الاجتماعية اتساقاً ومصداقية.' }, mediaType: 'placeholder' },
          { id: 'paid-media', title: { en: 'Paid Media Management', ar: 'إدارة الإعلانات المدفوعة' }, description: { en: 'Campaign planning and optimization for qualified lead generation.', ar: 'تخطيط وتحسين الحملات المدفوعة لتوليد طلبات مؤهلة.' }, mediaType: 'placeholder' },
          { id: 'reputation-monitoring', title: { en: 'Reputation Monitoring', ar: 'متابعة السمعة الرقمية' }, description: { en: 'Review and reputation management for public-facing service businesses.', ar: 'إدارة التقييمات والسمعة للأنشطة الخدمية ذات الواجهة العامة.' }, mediaType: 'placeholder' },
          { id: 'analytics-dashboards', title: { en: 'Analytics Dashboards', ar: 'لوحات تحليلات' }, description: { en: 'Executive dashboards that connect channel performance with business outcomes.', ar: 'لوحات تنفيذية تربط أداء القنوات بالنتائج التجارية الفعلية.' }, mediaType: 'placeholder' },
        ],
      },
      {
        id: 'commerce-automation',
        title: { en: 'Commerce & Automation', ar: 'التجارة والأتمتة' },
        description: {
          en: 'Smart systems that streamline follow-up, lead handling and service delivery.',
          ar: 'أنظمة ذكية لتبسيط المتابعة وإدارة الطلبات وتسليم الخدمات.',
        },
        columns: 1,
        items: [
          { id: 'landing-pages', title: { en: 'Campaign Landing Pages', ar: 'صفحات هبوط للحملات' }, description: { en: 'Focused pages built to increase lead quality and campaign efficiency.', ar: 'صفحات مخصصة ترفع جودة الطلبات وكفاءة الحملة.' }, mediaType: 'placeholder' },
          { id: 'crm-setup', title: { en: 'CRM Workflow Setup', ar: 'تهيئة سير عمل CRM' }, description: { en: 'Sales and service workflows configured for fast lead follow-up.', ar: 'تهيئة مسارات العمل البيعية والخدمية لمتابعة أسرع وأكثر انضباطاً.' }, mediaType: 'placeholder' },
          { id: 'email-automation', title: { en: 'Email Automation', ar: 'أتمتة البريد الإلكتروني' }, description: { en: 'Nurture journeys and response sequences for inbound enquiries.', ar: 'مسارات متابعة ورسائل تلقائية للاستفسارات الواردة.' }, mediaType: 'placeholder' },
          { id: 'whatsapp-flows', title: { en: 'WhatsApp Business Flows', ar: 'تدفقات واتساب للأعمال' }, description: { en: 'Structured WhatsApp journeys for enquiries, scheduling and updates.', ar: 'مسارات واتساب منظمة للاستفسارات والحجوزات والتحديثات.' }, mediaType: 'placeholder' },
          { id: 'ecommerce-enablement', title: { en: 'E-Commerce Enablement', ar: 'تمكين التجارة الإلكترونية' }, description: { en: 'Product listing, catalog structuring and conversion support for digital retail.', ar: 'تهيئة القوائم والكتالوجات ودعم التحويل للتجارة الرقمية.' }, mediaType: 'placeholder' },
          { id: 'marketing-automation', title: { en: 'Marketing Automation', ar: 'أتمتة التسويق' }, description: { en: 'Automated flows that reduce manual effort and improve response time.', ar: 'أتمتة تسويقية تقلل الجهد اليدوي وتحسن سرعة الاستجابة.' }, mediaType: 'placeholder' },
        ],
      },
    ],
  },
  logistics: {
    id: 'logistics',
    label: { en: 'Logistics', ar: 'الخدمات اللوجستية' },
    eyebrow: { en: 'Reliable Movement', ar: 'حركة موثوقة' },
    intro: {
      en: 'Operational logistics built for reliability, visibility and scalable execution across Saudi distribution networks.',
      ar: 'حلول لوجستية تشغيلية مبنية على الاعتمادية والوضوح وقابلية التوسع عبر شبكات التوزيع في المملكة.',
    },
    layout: 'compact',
    groups: [
      {
        id: 'transportation',
        title: { en: 'Transportation', ar: 'النقل' },
        description: {
          en: 'Flexible transport coverage across key operational routes.',
          ar: 'تغطية نقل مرنة عبر المسارات التشغيلية الرئيسية.',
        },
        columns: 1,
        items: [
          { id: 'primary-transportation', title: { en: 'Primary Transportation', ar: 'النقل الأولي' }, description: { en: 'Bulk movement between factories, ports, warehouses and regional hubs.', ar: 'نقل كميات كبيرة بين المصانع والموانئ والمستودعات والمراكز الإقليمية.' }, mediaType: 'placeholder' },
          { id: 'secondary-transportation', title: { en: 'Secondary Transportation', ar: 'النقل الثانوي' }, description: { en: 'Last-mile and retail-ready distribution from warehouse to market.', ar: 'توزيع من المستودع إلى نقاط البيع والأسواق بشكل جاهز للتنفيذ.' }, mediaType: 'placeholder' },
          { id: 'adhoc-transportation', title: { en: 'Adhoc Transportation', ar: 'النقل الطارئ' }, description: { en: 'Responsive, on-demand transport support for urgent commercial needs.', ar: 'دعم نقل سريع عند الطلب للاحتياجات التجارية العاجلة.' }, mediaType: 'placeholder' },
        ],
      },
      {
        id: 'warehousing',
        title: { en: 'Warehousing', ar: 'التخزين' },
        description: {
          en: 'Storage environments matched to product sensitivity and compliance.',
          ar: 'بيئات تخزين ملائمة لحساسية المنتج ومتطلبات الامتثال.',
        },
        columns: 1,
        items: [
          { id: 'ambient-warehousing', title: { en: 'Ambient', ar: 'مخازن اعتيادية' }, description: { en: 'Standard warehousing for general inventory with controlled handling processes.', ar: 'تخزين اعتيادي للمخزون العام مع عمليات مناولة منضبطة.' }, mediaType: 'placeholder' },
          { id: 'cold-chain', title: { en: 'Cold Chain', ar: 'سلسلة تبريد' }, description: { en: 'Temperature-controlled storage and handling for sensitive product categories.', ar: 'تخزين ومناولة بدرجات حرارة مضبوطة للمنتجات الحساسة.' }, mediaType: 'image', gallery: [{ type: 'image', src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', alt: { en: 'Cold chain warehouse', ar: 'مستودع سلسلة تبريد' } }] },
        ],
      },
    ],
  },
  facility: {
    id: 'facility',
    label: { en: 'Facility Management', ar: 'إدارة المرافق' },
    eyebrow: { en: 'Operational Excellence', ar: 'التميز التشغيلي' },
    intro: {
      en: 'End-to-end facility services that keep commercial spaces compliant, efficient and client-ready every day.',
      ar: 'خدمات متكاملة لإدارة المرافق تحافظ على جاهزية المساحات التجارية وامتثالها وكفاءتها التشغيلية يومياً.',
    },
    layout: 'split',
    groups: [
      {
        id: 'soft-services',
        title: { en: 'Soft Services', ar: 'الخدمات الناعمة' },
        description: {
          en: 'Daily services that shape the client and employee experience.',
          ar: 'خدمات يومية تؤثر مباشرة في تجربة العميل والموظف.',
        },
        columns: 2,
        items: [
          { id: 'housekeeping-services', title: { en: 'Housekeeping Services', ar: 'خدمات التدبير والنظافة' }, description: { en: 'Routine upkeep and site presentation aligned with brand standards.', ar: 'أعمال نظافة وعناية يومية تحافظ على جودة الموقع وانطباعه.' }, mediaType: 'placeholder' },
          { id: 'office-commercial-cleaning', title: { en: 'Office & Commercial Cleaning', ar: 'تنظيف المكاتب والمنشآت التجارية' }, description: { en: 'Scheduled cleaning programs for offices, retail and commercial premises.', ar: 'برامج تنظيف مجدولة للمكاتب والمتاجر والمنشآت التجارية.' }, mediaType: 'placeholder' },
          { id: 'industrial-cleaning', title: { en: 'Industrial Cleaning', ar: 'التنظيف الصناعي' }, description: { en: 'Operational cleaning for production, warehouse and industrial zones.', ar: 'تنظيف تشغيلي لمناطق الإنتاج والمستودعات والمواقع الصناعية.' }, mediaType: 'placeholder' },
          { id: 'waste-management', title: { en: 'Waste Management', ar: 'إدارة النفايات' }, description: { en: 'Disciplined waste handling processes to support hygiene and compliance.', ar: 'عمليات منظمة لإدارة النفايات بما يدعم النظافة والامتثال.' }, mediaType: 'placeholder' },
          { id: 'landscaping-gardening', title: { en: 'Landscaping & Gardening', ar: 'تنسيق الحدائق والبستنة' }, description: { en: 'Landscape upkeep that improves curb appeal and asset perception.', ar: 'عناية بالمساحات الخضراء تعزز جاذبية الموقع وقيمته البصرية.' }, mediaType: 'placeholder' },
          { id: 'pest-control', title: { en: 'Pest Control Coordination', ar: 'تنسيق مكافحة الآفات' }, description: { en: 'Coordinated pest prevention programs with compliant site controls.', ar: 'برامج وقاية ومتابعة لمكافحة الآفات وفق ضوابط متوافقة.' }, mediaType: 'placeholder' },
          { id: 'pantry-office-support', title: { en: 'Pantry & Office Support Services', ar: 'خدمات البوفيه والدعم المكتبي' }, description: { en: 'Front-of-house support and pantry services for smooth daily operations.', ar: 'دعم مكتبي وخدمات ضيافة يومية تضمن سلاسة التشغيل.' }, mediaType: 'placeholder' },
        ],
      },
      {
        id: 'hard-services',
        title: { en: 'Hard Services', ar: 'الخدمات الصلبة' },
        description: {
          en: 'Technical maintenance that protects uptime and asset lifespan.',
          ar: 'خدمات فنية تحفظ استمرارية التشغيل وتطيل عمر الأصول.',
        },
        columns: 2,
        items: [
          { id: 'electrical-maintenance', title: { en: 'Electrical Maintenance', ar: 'الصيانة الكهربائية' }, description: { en: 'Electrical upkeep, inspection and corrective support for building systems.', ar: 'صيانة وفحص ودعم تصحيحي للأنظمة الكهربائية في المباني.' }, mediaType: 'placeholder' },
          { id: 'hvac-installation', title: { en: 'HVAC Installation & Maintenance', ar: 'تركيب وصيانة التكييف والتهوية' }, description: { en: 'Installation and maintenance for cooling, ventilation and climate control systems.', ar: 'تركيب وصيانة أنظمة التكييف والتهوية والتحكم المناخي.' }, mediaType: 'placeholder' },
          { id: 'plumbing-services', title: { en: 'Plumbing Services', ar: 'خدمات السباكة' }, description: { en: 'Water systems maintenance, fittings replacement and network repairs.', ar: 'صيانة شبكات المياه واستبدال القطع والإصلاحات التشغيلية.' }, mediaType: 'placeholder' },
          { id: 'carpentry-civil', title: { en: 'Carpentry & Civil Maintenance', ar: 'النجارة والصيانة المدنية' }, description: { en: 'Fit-out corrections, joinery and civil repair work for occupied sites.', ar: 'أعمال نجارة وصيانة مدنية وإصلاحات ملائمة للمواقع التشغيلية.' }, mediaType: 'placeholder' },
          { id: 'building-infrastructure', title: { en: 'Building & Infrastructure Maintenance', ar: 'صيانة المباني والبنية التحتية' }, description: { en: 'Integrated support for common assets, structural elements and utilities.', ar: 'دعم متكامل للأصول المشتركة والعناصر الإنشائية والمرافق.' }, mediaType: 'placeholder' },
          { id: 'equipment-maintenance', title: { en: 'Equipment Maintenance', ar: 'صيانة المعدات' }, description: { en: 'Preventive and corrective upkeep for operational equipment and tools.', ar: 'صيانة وقائية وتصحيحية للمعدات والأدوات التشغيلية.' }, mediaType: 'placeholder' },
        ],
      },
    ],
  },
  manpower: {
    id: 'manpower',
    label: { en: 'Manpower Supply', ar: 'توفير القوى العاملة' },
    eyebrow: { en: 'Fast Deployment', ar: 'انتشار سريع' },
    intro: {
      en: 'Reliable workforce deployment for support, operations and technical functions, aligned with business continuity and Saudi compliance expectations.',
      ar: 'توفير موثوق للقوى العاملة للوظائف التشغيلية والمساندة والفنية، بما يتماشى مع استمرارية الأعمال ومتطلبات الامتثال في المملكة.',
    },
    layout: 'wide',
    groups: [
      {
        id: 'skilled-general-labor',
        title: { en: 'Skilled & General Labor', ar: 'العمالة المهرة والعامة' },
        description: {
          en: 'Flexible deployment pools built for daily operations and project peaks.',
          ar: 'كوادر مرنة قابلة للانتشار لدعم التشغيل اليومي وفترات الذروة.',
        },
        columns: 2,
        items: [
          { id: 'housekeeping-staff', title: { en: 'Housekeeping Staff', ar: 'طاقم التدبير والنظافة' }, description: { en: placeholder.en, ar: placeholder.ar }, mediaType: 'placeholder' },
          { id: 'construction-workers', title: { en: 'Construction Workers', ar: 'عمال إنشاءات' }, description: { en: placeholder.en, ar: placeholder.ar }, mediaType: 'placeholder' },
          { id: 'office-assistants', title: { en: 'Office Assistants', ar: 'مساعدو المكاتب' }, description: { en: placeholder.en, ar: placeholder.ar }, mediaType: 'placeholder' },
          { id: 'machine-operators', title: { en: 'Machine Operators', ar: 'مشغلو الآلات' }, description: { en: placeholder.en, ar: placeholder.ar }, mediaType: 'placeholder' },
          { id: 'administrative-support', title: { en: 'Administrative Support Staff', ar: 'كوادر الدعم الإداري' }, description: { en: placeholder.en, ar: placeholder.ar }, mediaType: 'placeholder' },
          { id: 'skilled-technicians', title: { en: 'Skilled Technicians', ar: 'فنيون مهرة' }, description: { en: placeholder.en, ar: placeholder.ar }, mediaType: 'placeholder' },
          { id: 'warehouse-logistics', title: { en: 'Warehouse & Logistics Staff', ar: 'كوادر المستودعات واللوجستيات' }, description: { en: placeholder.en, ar: placeholder.ar }, mediaType: 'placeholder' },
          { id: 'helpers-loaders', title: { en: 'Helpers & Loaders', ar: 'مساعدون وعمال تحميل' }, description: { en: placeholder.en, ar: placeholder.ar }, mediaType: 'placeholder' },
          { id: 'facility-supervisors', title: { en: 'Facility Supervisors', ar: 'مشرفو المرافق' }, description: { en: placeholder.en, ar: placeholder.ar }, mediaType: 'placeholder' },
        ],
      },
    ],
  },
  financial: {
    id: 'financial',
    label: { en: 'Financial Services', ar: 'الخدمات المالية' },
    eyebrow: { en: 'Business Control', ar: 'التحكم المالي' },
    intro: {
      en: 'Financial support services that help growing businesses stay compliant, visible and decision-ready as operations expand.',
      ar: 'خدمات مالية مساندة تساعد الشركات المتنامية على الحفاظ على الامتثال والوضوح والجاهزية لاتخاذ القرار مع توسع العمليات.',
    },
    layout: 'balanced',
    groups: [
      {
        id: 'accounting-advisory',
        title: { en: 'Accounting & Advisory', ar: 'المحاسبة والاستشارات' },
        description: {
          en: 'Core finance support for disciplined decision-making.',
          ar: 'دعم مالي أساسي لاتخاذ قرارات أكثر انضباطاً ووضوحاً.',
        },
        columns: 1,
        items: [
          { id: 'bookkeeping', title: { en: 'Bookkeeping', ar: 'مسك الدفاتر' }, description: { en: 'Daily transaction recording and monthly financial hygiene support.', ar: 'تسجيل المعاملات اليومية ودعم الانضباط المالي الشهري.' }, mediaType: 'placeholder' },
          { id: 'management-reporting', title: { en: 'Management Reporting', ar: 'تقارير إدارية' }, description: { en: 'Executive-friendly reporting for performance review and decision visibility.', ar: 'تقارير تنفيذية سهلة الفهم لمراجعة الأداء واتخاذ القرار.' }, mediaType: 'placeholder' },
          { id: 'cash-flow-planning', title: { en: 'Cash Flow Planning', ar: 'تخطيط التدفق النقدي' }, description: { en: 'Scenario-based cash planning for growing operational businesses.', ar: 'تخطيط نقدي قائم على السيناريوهات للشركات التشغيلية المتنامية.' }, mediaType: 'placeholder' },
          { id: 'budgeting-forecasting', title: { en: 'Budgeting & Forecasting', ar: 'الميزانيات والتوقعات' }, description: { en: 'Budget and forecast systems that support strategic confidence.', ar: 'أنظمة ميزانيات وتوقعات تدعم الثقة في التخطيط الاستراتيجي.' }, mediaType: 'placeholder' },
          { id: 'vat-support', title: { en: 'VAT Support', ar: 'دعم ضريبة القيمة المضافة' }, description: { en: 'Structured support for VAT readiness, filing coordination and documentation.', ar: 'دعم منظم للجاهزية الضريبية والتنسيق والتوثيق المتعلق بضريبة القيمة المضافة.' }, mediaType: 'placeholder' },
          { id: 'finance-process-setup', title: { en: 'Finance Process Setup', ar: 'تهيئة العمليات المالية' }, description: { en: 'Internal finance workflows designed for scale, control and audit readiness.', ar: 'تهيئة العمليات المالية الداخلية بما يدعم التوسع والرقابة والجاهزية للمراجعة.' }, mediaType: 'placeholder' },
        ],
      },
      {
        id: 'commercial-controls',
        title: { en: 'Commercial Controls', ar: 'الضبط التجاري' },
        description: {
          en: 'Control frameworks that strengthen operational margins.',
          ar: 'أطر رقابية تعزز الكفاءة وتحمي الربحية التشغيلية.',
        },
        columns: 1,
        items: [
          { id: 'cost-control', title: { en: 'Cost Control Reviews', ar: 'مراجعات ضبط التكاليف' }, description: { en: 'Cost structure reviews that reveal savings and margin opportunities.', ar: 'مراجعات لتكاليف التشغيل تكشف فرص التوفير وتحسين الهوامش.' }, mediaType: 'placeholder' },
          { id: 'procurement-controls', title: { en: 'Procurement Controls', ar: 'ضوابط المشتريات' }, description: { en: 'Approval and procurement frameworks that reduce leakage and delay.', ar: 'أطر اعتماد ومشتريات تحد من الهدر والتأخير.' }, mediaType: 'placeholder' },
          { id: 'vendor-reconciliation', title: { en: 'Vendor Reconciliation', ar: 'مطابقة الموردين' }, description: { en: 'Reconciliation support for supplier balances, settlements and controls.', ar: 'دعم لمطابقة أرصدة الموردين والتسويات وتعزيز الرقابة.' }, mediaType: 'placeholder' },
          { id: 'project-profitability', title: { en: 'Project Profitability Tracking', ar: 'متابعة ربحية المشاريع' }, description: { en: 'Project-level financial tracking for service delivery and margin health.', ar: 'متابعة مالية على مستوى المشروع لتحسين تنفيذ الخدمة وربحية العقود.' }, mediaType: 'placeholder' },
          { id: 'contract-billing', title: { en: 'Contract Billing Support', ar: 'دعم فوترة العقود' }, description: { en: 'Structured invoicing and billing cycles tailored to contract operations.', ar: 'تنظيم الفوترة والدورات المالية بما يتلاءم مع العقود التشغيلية.' }, mediaType: 'placeholder' },
          { id: 'audit-readiness', title: { en: 'Audit Readiness', ar: 'الجاهزية للمراجعة' }, description: { en: 'Documentation and control readiness for external review and governance.', ar: 'جاهزية توثيقية ورقابية للمراجعات الخارجية والحوكمة.' }, mediaType: 'placeholder' },
        ],
      },
    ],
  },
};
