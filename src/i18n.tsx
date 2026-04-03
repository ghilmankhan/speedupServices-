import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'ar';

const LANGUAGE_STORAGE_KEY = 'language';
const MIDDLE_EAST_REGIONS = ['sa', 'ae', 'qa', 'kw', 'bh', 'om', 'jo', 'eg', 'iq', 'lb', 'ps', 'sy', 'ye'];

const detectDefaultLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage === 'en' || savedLanguage === 'ar') {
    return savedLanguage;
  }

  const browserLocales = [
    window.navigator.language,
    ...(window.navigator.languages || []),
    Intl.DateTimeFormat().resolvedOptions().locale,
  ]
    .filter(Boolean)
    .map(locale => locale.toLowerCase());

  const hasArabicPreference = browserLocales.some(locale => locale.startsWith('ar'));
  const hasMiddleEastRegion = browserLocales.some(locale =>
    MIDDLE_EAST_REGIONS.some(region => locale.includes(`-${region}`) || locale.includes(`_${region}`)),
  );

  return hasArabicPreference || hasMiddleEastRegion ? 'ar' : 'en';
};

export const translations = {
  en: {
    navbar: {
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Industries', href: '#industries' },
        { name: 'Get Quotation', href: '#quote' },
      ],
      language: { en: 'EN', ar: 'AR' },
      callLabel: 'Call +91 8108102609',
    },
    hero: {
      tagline: 'Built for Speed. Designed for Success.',
      titlePrefix: 'Integrated Facility Management &',
      titleHighlight: 'Manpower Solutions',
      subtitle: 'We Don’t Just Support Business—We Speed It Up.',
      primaryCta: 'Get a Quotation',
    },
    about: {
      title: 'About Speedup Services',
      paragraphs: [
        'Speedup Services is a Saudi-based integrated solutions provider committed to delivering excellence across multiple business sectors. We specialize in marketing, creative, and digital services, combined with reliable logistics, efficient facility management, and professional manpower supply—offering our clients a complete, end-to-end service experience.',
        'Driven by speed, quality, and innovation, we partner with businesses to enhance their brand presence, streamline operations, and achieve sustainable growth. Our multidisciplinary approach allows us to understand diverse industry needs and provide tailored solutions that add real value.',
        'At Speedup Services, we believe in building long-term relationships through trust, performance, and a deep commitment to supporting the Kingdom’s evolving business landscape.',
      ],
      imageAlt: 'Speedup Services Team',
    },
    visionMission: {
      visionLabel: 'OUR VISION',
      visionText:
        'To become the region’s most agile and trusted partner for integrated business solutions—empowering organizations to move faster, operate smarter, and grow stronger.',
      missionLabel: 'OUR MISSION',
      missionText:
        'At Speedup Services, we accelerate business success by delivering seamless, end-to-end solutions across marketing, creative, and digital services, supported by reliable logistics, efficient facility management, and skilled manpower. We are committed to speed, quality, and innovation—helping our clients stay ahead in a rapidly evolving world.',
      tagline: 'Built for Speed. Designed for Success.',
    },
    trustedPartners: {
      title: 'Trusted by leading Saudi organizations',
      subtitle: 'Proven experience in corporate operations and supply chain',
      description: 'Our partners rely on Speedup Services for consistent quality, rapid deployment and measurable operational results.',
      companies: [
        {
          id: 'ghg',
          name: { en: 'Gulf Horizon Group', ar: 'مجموعة جلف هورايزن' },
          label: { en: 'Facility Management', ar: 'إدارة المرافق' },
          variant: 'circle',
        },
        {
          id: 'rbs',
          name: { en: 'Riyadh Business Solutions', ar: 'رياض بيزنس سوليوشنز' },
          label: { en: 'Digital & Consulting', ar: 'الاستشارات الرقمية' },
          variant: 'square',
        },
        {
          id: 'spl',
          name: { en: 'Saudi Prime Logistics', ar: 'سعودي برايم لوجستكس' },
          label: { en: 'Supply Chain & Logistics', ar: 'سلسلة التوريد واللوجستيات' },
          variant: 'triangle',
        },
        {
          id: 'anf',
          name: { en: 'Al Noor Facilities', ar: 'النور للمرافق' },
          label: { en: 'Integrated Facility Services', ar: 'خدمات مرافق متكاملة' },
          variant: 'hex',
        },
        {
          id: 'vem',
          name: { en: 'Vision Edge Media', ar: 'فيجن إيدج ميديا' },
          label: { en: 'Media & Branding', ar: 'الإعلام والهوية' },
          variant: 'line',
        },
        {
          id: 'afp',
          name: { en: 'Apex Financial Partners', ar: 'ابسكس للخدمات المالية' },
          label: { en: 'Financial Advisory', ar: 'الإرشاد المالي' },
          variant: 'grid',
        },
      ],
    },
    clientReviews: {
      title: 'Client Testimonials',
      subtitle: 'Trusted by Businesses. Backed by Results.',
      description: 'Long-term partnerships built through trust, speed, quality, and measurable outcomes.',
      reviews: [
        {
          id: 'review-01',
          companyName: { en: 'Gulf Horizon Group', ar: 'مجموعة جلف هورايزن' },
          testimonial: { en: 'Speedup Services helped us standardize facility onboarding across 15 sites in six months, reducing operational incidents by 40%. Their response time was unmatched and everything was delivered on schedule.', ar: 'قدمت سبيد أب سيرفيسز حلاً موحداً لإدخال المرافق في 15 موقعًا خلال 6 أشهر، مما خفّض الحوادث التشغيلية 40% ورفع معدل الامتثال. التنفيذ كان دقيقاً وفي الموعد.' },
          clientName: { en: 'Noura Al-Mansour', ar: 'نورة المنصور' },
          clientTitle: { en: 'Head of Operations, Gulf Horizon Group', ar: 'رئيسة العمليات، مجموعة جلف هورايزن' },
        },
        {
          id: 'review-02',
          companyName: { en: 'Riyadh Business Solutions', ar: 'رياض بيزنس سوليوشنز' },
          testimonial: { en: 'Our workforce needs were volatile, but Speedup Services provided rapid qualified staffing for seven major projects. Project execution became smoother and customer satisfaction jumped by 18%.', ar: 'كان تمديد القوى العاملة لدينا متقلباً، لكن سبيد أب سيرفيسز وفّرت كوادر مؤهلة بسرعة لسبعة مشاريع استراتيجية. التنفيذ كان أكثر سلاسة وارتفع رضا العملاء 18%.' },
          clientName: { en: 'Fahd Al-Harbi', ar: 'فهد الحربي' },
          clientTitle: { en: 'Director of HR, Riyadh Business Solutions', ar: 'مدير الموارد البشرية، رياض بيزنس سوليوشنز' },
        },
        {
          id: 'review-03',
          companyName: { en: 'Saudi Prime Logistics', ar: 'سعودي برايم لوجستكس' },
          testimonial: { en: 'With a 22% improvement in inbound logistics efficiency, Speedup Services transformed our last-mile operations. Their team is both agile and reliable.', ar: 'حققنا تحسناً 22% في كفاءة اللوجستيات الواردة مع سبيد أب سيرفيسز. أصبحت عمليات الميل الأخير أكثر موثوقية وثباتاً.' },
          clientName: { en: 'Layla Al-Qahtani', ar: 'ليلى القحطاني' },
          clientTitle: { en: 'Supply Chain Director, Saudi Prime Logistics', ar: 'مديرة سلسلة التوريد، سعودي برايم لوجستكس' },
        },
        {
          id: 'review-04',
          companyName: { en: 'Al Noor Facilities', ar: 'النور للمرافق' },
          testimonial: { en: 'A true partnership: proactive facility audits, preventive maintenance excellence, and fast issue resolution. Our asset uptime is now over 99.1%.', ar: 'شراكة استراتيجية حقيقية: مراجعات استباقية للمرافق، صيانة وقائية متميزة، وحل فوري للقضايا. معدل تشغيل الأصول أكثر من 99.1%.' },
          clientName: { en: 'Sultan Al-Farhan', ar: 'سلطان الفرحان' },
          clientTitle: { en: 'General Manager, Al Noor Facilities', ar: 'المدير العام، النور للمرافق' },
        },
        {
          id: 'review-05',
          companyName: { en: 'Vision Edge Media', ar: 'فيجن إيدج ميديا' },
          testimonial: { en: 'Creative campaigns and fast-turn design deliverables made us stand out during Ramadan. We saw 37% higher engagement and a 21% increase in leads.', ar: 'التسليم الإبداعي السريع خلال رمضان معناها 37% تفاعل إضافي و21% نمو في العملاء المحتملين، ضمن تجربة احترافية.' },
          clientName: { en: 'Dima Al-Saadi', ar: 'ديمة السعدي' },
          clientTitle: { en: 'Marketing Head, Vision Edge Media', ar: 'رئيسة التسويق، فيجن إيدج ميديا' },
        },
        {
          id: 'review-06',
          companyName: { en: 'Apex Financial Partners', ar: 'ابسكس للخدمات المالية' },
          testimonial: { en: 'Financial process setup from Speedup Services reduced cycle time by 25% and significantly improved claim reconciliation across sister companies.', ar: 'انخفض زمن الدورة المالية 25% عبر أطر سبيد أب سيرفيسز، مع مصالحة شفافة وسلسة بين الشركات الشقيقة.' },
          clientName: { en: 'Mohammed Al-Bader', ar: 'محمد البدر' },
          clientTitle: { en: 'Finance Director, Apex Financial Partners', ar: 'المدير المالي، ابسكس للخدمات المالية' },
        },
      ],
    },
    serviceDetails: {
      badge: 'Service Details',
      openGallery: 'Open Gallery',
      previewComingSoon: 'Preview coming soon',
      mediaStatus: 'Media Status',
      mediaAvailable: 'Media is available for this service and the gallery can be expanded easily from the data object.',
      mediaUnavailable: 'No final media is attached yet. Add images or videos later inside the service folders and the gallery will render immediately.',
      serviceDetailLabel: 'Service Details',
    },
    common: {
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      contactUs: 'Contact Us',
      call: 'Call',
      callNow: 'Call Now',
      navigationOpenGallery: 'Open Gallery',
    },
    services: {
      badge: 'OUR SERVICES',
      title: 'Explore Our Services',
      description: 'Discover integrated facility, manpower, and marketing solutions through our interactive showcase.',
      tabs: {
        facility: 'Facility Management',
        manpower: 'Manpower Supply',
        marketing: 'Marketing Services',
      },
      tags: {
        facility: 'Facility',
        softServices: 'Soft Services',
        hardServices: 'Hard Services',
        manpower: 'Manpower',
        field: 'Field',
        operations: 'Operations',
        logistics: 'Logistics',
        technical: 'Technical',
        admin: 'Admin',
        marketing: 'Marketing',
        print: 'Print',
        brandAssets: 'Brand Assets',
        packaging: 'Packaging',
      },
      cards: {
        commercialCleaning: {
          title: 'Commercial Cleaning',
          subtitle: 'Office, mall & building cleaning',
        },
        landscaping: {
          title: 'Landscaping',
          subtitle: 'Landscaping & gardening services',
        },
        pestControl: {
          title: 'Pest Control',
          subtitle: 'Safe and compliant pest control',
        },
        hvacMaintenance: {
          title: 'HVAC Maintenance',
          subtitle: 'Cooling and ventilation systems',
        },
        electricalMaintenance: {
          title: 'Electrical Maintenance',
          subtitle: 'Power and safety inspections',
        },
        plumbingServices: {
          title: 'Plumbing Services',
          subtitle: 'Pipeline and fixture support',
        },
        housekeepingServices: {
          title: 'Housekeeping Services',
          subtitle: 'Daily professional upkeep',
        },
        skilledTechnicians: {
          title: 'Skilled Technicians',
          subtitle: 'Certified manpower deployment',
        },
        constructionWorkers: {
          title: 'Construction Workers',
          subtitle: 'On-site execution teams',
        },
        housekeepingStaff: {
          title: 'Housekeeping Staff',
          subtitle: 'Reliable operational support',
        },
        warehouseLogisticsStaff: {
          title: 'Warehouse & Logistics Staff',
          subtitle: 'Inventory and dispatch handling',
        },
        machineOperators: {
          title: 'Machine Operators',
          subtitle: 'Industrial equipment specialists',
        },
        officeAssistants: {
          title: 'Office Assistants',
          subtitle: 'Administrative workforce support',
        },
        helpersLoaders: {
          title: 'Helpers & Loaders',
          subtitle: 'Flexible labor for daily needs',
        },
        posm: {
          title: 'POSM',
          subtitle: 'Point of sale branding materials',
        },
        businessCards: {
          title: 'Business Cards',
          subtitle: 'Professional identity collateral',
        },
        flyersBooklets: {
          title: 'Flyers & Booklets',
          subtitle: 'Campaign print communication',
        },
        prKits: {
          title: 'PR Kits',
          subtitle: 'Branded launch and outreach kits',
        },
        tissueBoxes: {
          title: 'Tissue Boxes',
          subtitle: 'Custom printed packaging',
        },
        promoBoxes: {
          title: 'Promo Boxes',
          subtitle: 'Promotional presentation boxes',
        },
        paperCups: {
          title: 'Paper Cups',
          subtitle: 'Branded beverage touchpoints',
        },
      },
    },
    industries: {
      title: 'Industries We Serve',
      description: 'Our expertise spans across diverse sectors, providing specialized solutions for every industry.',
      items: [
        'Corporate Offices',
        'Industrial & Manufacturing Units',
        'Construction Projects',
        'Warehouses & Logistics',
        'Hospitals & Clinics',
        'Educational Institutions',
        'Residential & Commercial Complexes',
        'Retail & Hospitality',
      ],
    },
    whyChooseUs: {
      title: 'Why Choose Speedup Services?',
      description:
        'We are committed to delivering excellence through our core values of reliability, quality, and compliance. Our client-centric approach ensures your operations run smoothly.',
      reasons: [
        'Professional & Experienced Team',
        'Quick Mobilization & Deployment',
        'Compliance with Saudi Labor Law',
        'Quality Control & Supervision',
        'Competitive & Transparent Pricing',
        '24/7 Operational Support',
        'Replacement Guarantee',
      ],
    },
    compliance: {
      title: 'Compliance & Safety',
      description:
        'Speedup Services operates with the highest standards of legal and safety compliance in Saudi Arabia.',
      items: [
        {
          title: 'Labor Law Compliance',
          desc: 'Operating in full accordance with the regulations of the Kingdom of Saudi Arabia.',
        },
        {
          title: 'GOSI Registration',
          desc: 'Full registration and compliance with the General Organization for Social Insurance.',
        },
        {
          title: 'Health & Safety Standards',
          desc: 'Prioritizing workplace safety and employee welfare through rigorous standards.',
        },
        {
          title: 'Proper Documentation & Contracts',
          desc: 'Ensuring all legal requirements and contractual obligations are met with transparency.',
        },
      ],
    },
    quoteForm: {
      title: 'Wanna Get A Quotation?',
      description:
        'Have a question or need a quotation? Our team is here to assist you and will get back to you shortly.',
      labels: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone Number',
        message: 'Message',
        services: 'Select Services',
      },
      placeholders: {
        firstName: 'Enter your first name',
        lastName: 'Enter your last name',
        email: 'Enter your email address',
        phone: 'Enter your phone number',
        message: 'Tell us about your requirements (minimum 10 characters)',
      },
      serviceOptions: [
        { value: 'Facility Management', label: 'Facility Management' },
        { value: 'Manpower Supply', label: 'Manpower Supply' },
        { value: 'Marketing Services', label: 'Marketing Services' },
        { value: 'Soft Services', label: 'Soft Services' },
        { value: 'Hard Services', label: 'Hard Services' },
        { value: 'Housekeeping Services', label: 'Housekeeping Services' },
        { value: 'Office & Commercial Cleaning', label: 'Office & Commercial Cleaning' },
        { value: 'Industrial Cleaning', label: 'Industrial Cleaning' },
        { value: 'Waste Management', label: 'Waste Management' },
        { value: 'Landscaping & Gardening', label: 'Landscaping & Gardening' },
        { value: 'Pest Control Coordination', label: 'Pest Control Coordination' },
        { value: 'Pantry & Office Support Services', label: 'Pantry & Office Support Services' },
        { value: 'Electrical Maintenance', label: 'Electrical Maintenance' },
        { value: 'HVAC Installation & Maintenance', label: 'HVAC Installation & Maintenance' },
        { value: 'Plumbing Services', label: 'Plumbing Services' },
        { value: 'Carpentry & Civil Maintenance', label: 'Carpentry & Civil Maintenance' },
        { value: 'Building & Infrastructure Maintenance', label: 'Building & Infrastructure Maintenance' },
        { value: 'Equipment Maintenance', label: 'Equipment Maintenance' },
        { value: 'Skilled Technicians', label: 'Skilled Technicians' },
        { value: 'Construction Workers', label: 'Construction Workers' },
        { value: 'Warehouse & Logistics Staff', label: 'Warehouse & Logistics Staff' },
        { value: 'Office Assistants', label: 'Office Assistants' },
        { value: 'Helpers & Loaders', label: 'Helpers & Loaders' },
        { value: 'Machine Operators', label: 'Machine Operators' },
        { value: 'Facility Supervisors', label: 'Facility Supervisors' },
        { value: 'Administrative Support Staff', label: 'Administrative Support Staff' },
        { value: 'Soft POSM', label: 'Soft POSM' },
        { value: 'Hard POSM', label: 'Hard POSM' },
      ],
      buttons: {
        send: 'Send Message',
        sending: 'Sending...',
        sent: 'Message Sent',
      },
      messages: {
        success: '✓ Thank you! Your quotation request has been sent successfully.',
        genericError: 'Failed to submit. Please try again later.',
        networkError: 'An error occurred while submitting. Please check your connection and try again.',
      },
      validation: {
        firstNameRequired: 'First name is required.',
        firstNameMin: 'First name must be at least 2 characters.',
        lastNameRequired: 'Last name is required.',
        lastNameMin: 'Last name must be at least 2 characters.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Please enter a valid email address.',
        phoneRequired: 'Phone number is required.',
        phoneInvalid: 'Phone number must contain at least 7 digits.',
        messageRequired: 'Message is required.',
        messageMin: 'Message must be at least 10 characters.',
        servicesRequired: 'Please select at least one service.',
      },
      cardTagline: 'Built for Speed. Designed for Success.',
      cardSubtagline: 'We Don’t Just Support Business—We Speed It Up.',
      imageAlt: 'Contact form',
    },
    footer: {
      brandTitle: 'Speedup Services',
      brandSubtitle: 'Integrated Facility Management & Manpower Solutions',
      country: 'Kingdom of Saudi Arabia',
      quickLinksTitle: 'Quick Links',
      quickLinks: [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Industries', href: '#industries' },
      ],
      contactTitle: 'Contact Us',
      contact: {
        general: 'General: info@speedupservices.com',
        careers: 'Careers: hr@speedupservices.com',
        call: 'Call us: +91 81081 02609',
        address: 'Address: Kingdom of Saudi Arabia',
      },
      followTitle: 'Follow Us',
      copyright: '© 2026 Speedup Services. All rights reserved.',
    },
  },
  ar: {
    navbar: {
      links: [
        { name: 'الرئيسية', href: '#home' },
        { name: 'من نحن', href: '#about' },
        { name: 'الخدمات', href: '#services' },
        { name: 'القطاعات', href: '#industries' },
        { name: 'اطلب عرض سعر', href: '#quote' },
      ],
      language: { en: 'EN', ar: 'AR' },
      callLabel: 'اتصل على +91 8108102609',
    },
    hero: {
      tagline: 'مصممون للسرعة. ومبنيون للنجاح.',
      titlePrefix: 'حلول متكاملة لإدارة المرافق',
      titleHighlight: 'وتوفير القوى العاملة',
      subtitle: 'نحن لا ندعم الأعمال فقط، بل نسرّع نموها.',
      primaryCta: 'اطلب عرض سعر',
    },
    about: {
      title: 'عن سبيد أب سيرفيسز',
      paragraphs: [
        'سبيد أب سيرفيسز هي شركة حلول متكاملة مقرها المملكة العربية السعودية، تلتزم بتقديم التميز عبر قطاعات أعمال متعددة. نحن متخصصون في خدمات التسويق والإبداع والخدمات الرقمية، إلى جانب الخدمات اللوجستية الموثوقة وإدارة المرافق الفعالة وتوفير القوى العاملة الاحترافية، لنقدم لعملائنا تجربة خدمة متكاملة من البداية إلى النهاية.',
        'بدافع السرعة والجودة والابتكار، نتعاون مع الشركات لتعزيز حضور علاماتها التجارية وتبسيط عملياتها وتحقيق نمو مستدام. يتيح لنا نهجنا متعدد التخصصات فهم احتياجات مختلف القطاعات وتقديم حلول مخصصة تضيف قيمة حقيقية.',
        'في سبيد أب سيرفيسز، نؤمن ببناء علاقات طويلة الأمد تقوم على الثقة والأداء والالتزام العميق بدعم المشهد التجاري المتطور في المملكة.',
      ],
      imageAlt: 'فريق سبيد أب سيرفيسز',
    },
    visionMission: {
      visionLabel: 'رؤيتنا',
      visionText:
        'أن نصبح الشريك الأكثر مرونة وثقة في المنطقة للحلول المتكاملة للأعمال، بما يمكّن المؤسسات من التحرك بسرعة أكبر والعمل بذكاء أكبر والنمو بقوة أكبر.',
      missionLabel: 'رسالتنا',
      missionText:
        'في سبيد أب سيرفيسز، نسرّع نجاح الأعمال من خلال تقديم حلول سلسة ومتكاملة من البداية إلى النهاية في مجالات التسويق والإبداع والخدمات الرقمية، مدعومة بخدمات لوجستية موثوقة وإدارة مرافق فعالة وقوى عاملة ماهرة. نحن ملتزمون بالسرعة والجودة والابتكار، لمساعدة عملائنا على البقاء في الصدارة في عالم سريع التطور.',
      tagline: 'مصممون للسرعة. ومبنيون للنجاح.',
    },
    trustedPartners: {
      title: 'تحظى بثقة مؤسسات سعودية رائدة',
      subtitle: 'خبرة مثبَتة في العمليات المؤسسية وسلسلة الإمداد',
      description: 'يعتمد شركاؤنا على سرعة خدمات سبيد أب وجودتها العالية ونتائجها التشغيلية الملموسة.',
      companies: [
        {
          id: 'ghg',
          name: { en: 'Gulf Horizon Group', ar: 'مجموعة جلف هورايزن' },
          label: { en: 'Facility Management', ar: 'إدارة المرافق' },
          variant: 'circle',
        },
        {
          id: 'rbs',
          name: { en: 'Riyadh Business Solutions', ar: 'رياض بيزنس سوليوشنز' },
          label: { en: 'Digital & Consulting', ar: 'الاستشارات الرقمية' },
          variant: 'square',
        },
        {
          id: 'spl',
          name: { en: 'Saudi Prime Logistics', ar: 'سعودي برايم لوجستكس' },
          label: { en: 'Supply Chain & Logistics', ar: 'سلسلة التوريد واللوجستيات' },
          variant: 'triangle',
        },
        {
          id: 'anf',
          name: { en: 'Al Noor Facilities', ar: 'النور للمرافق' },
          label: { en: 'Integrated Facility Services', ar: 'خدمات مرافق متكاملة' },
          variant: 'hex',
        },
        {
          id: 'vem',
          name: { en: 'Vision Edge Media', ar: 'فيجن إيدج ميديا' },
          label: { en: 'Media & Branding', ar: 'الإعلام والهوية' },
          variant: 'line',
        },
        {
          id: 'afp',
          name: { en: 'Apex Financial Partners', ar: 'ابسكس للخدمات المالية' },
          label: { en: 'Financial Advisory', ar: 'الإرشاد المالي' },
          variant: 'grid',
        },
      ],
    },
    clientReviews: {
      title: 'آراء العملاء',
      subtitle: 'موثوق من الشركات. ومدعوم بالنتائج.',
      description: 'شراكات طويلة الأمد مبنية على الثقة والسرعة والجودة والنتائج القابلة للقياس.',
      reviews: [
        {
          id: 'review-01',
          companyName: { en: 'Gulf Horizon Group', ar: 'مجموعة جلف هورايزن' },
          testimonial: { en: 'Speedup Services helped us standardize facility onboarding across 15 sites in six months, reducing operational incidents by 40%. Their response time was unmatched and everything was delivered on schedule.', ar: 'ساعدتنا سبيد أب سيرفيسز في توحيد عمليات التكليف في 15 موقعًا خلال ستة أشهر، مما خفض الحوادث التشغيلية بنسبة 40%. كان وقت استجابتهم لا مثيل له وتم تسليم كل شيء حسب الجدول.' },
          clientName: { en: 'Noura Al-Mansour', ar: 'نورة المنصور' },
          clientTitle: { en: 'Head of Operations, Gulf Horizon Group', ar: 'رئيسة العمليات، مجموعة جلف هورايزن' },
        },
        {
          id: 'review-02',
          companyName: { en: 'Riyadh Business Solutions', ar: 'رياض بيزنس سوليوشنز' },
          testimonial: { en: 'Our workforce needs were volatile, but Speedup Services provided rapid qualified staffing for seven major projects. Project execution became smoother and customer satisfaction jumped by 18%.', ar: 'كانت احتياجات القوى العاملة لدينا متقلبة، لكن سبيد أب سيرفيسز وفرت طاقماً مؤهلاً بسرعة لسبعة مشاريع رئيسية. أصبح تنفيذ المشاريع أكثر سلاسة وارتفعت رضا العملاء بنسبة 18%.' },
          clientName: { en: 'Fahd Al-Harbi', ar: 'فهد الحربي' },
          clientTitle: { en: 'Director of HR, Riyadh Business Solutions', ar: 'مدير الموارد البشرية، رياض بيزنس سوليوشنز' },
        },
        {
          id: 'review-03',
          companyName: { en: 'Saudi Prime Logistics', ar: 'سعودي برايم لوجستكس' },
          testimonial: { en: 'With a 22% improvement in inbound logistics efficiency, Speedup Services transformed our last-mile operations. Their team is both agile and reliable.', ar: 'مع تحسن بنسبة 22% في كفاءة اللوجستيات الواردة، حولت سبيد أب سيرفيسز عمليات الميل الأخير لدينا. فريقهم مرن وموثوق.' },
          clientName: { en: 'Layla Al-Qahtani', ar: 'ليلى القحطاني' },
          clientTitle: { en: 'Supply Chain Director, Saudi Prime Logistics', ar: 'مديرة سلسلة التوريد، سعودي برايم لوجستكس' },
        },
        {
          id: 'review-04',
          companyName: { en: 'Al Noor Facilities', ar: 'النور للمرافق' },
          testimonial: { en: 'A true partnership: proactive facility audits, preventive maintenance excellence, and fast issue resolution. Our asset uptime is now over 99.1%.', ar: 'شراكة حقيقية: تدقيقات مبدئية للمرافق، صيانة وقائية ممتازة، وسرعة حل القضايا. أصبح وقت عمل الأصول لدينا أكثر من 99.1%.' },
          clientName: { en: 'Sultan Al-Farhan', ar: 'سلطان الفرحان' },
          clientTitle: { en: 'General Manager, Al Noor Facilities', ar: 'المدير العام، النور للمرافق' },
        },
        {
          id: 'review-05',
          companyName: { en: 'Vision Edge Media', ar: 'فيجن إيدج ميديا' },
          testimonial: { en: 'Creative campaigns and fast-turn design deliverables made us stand out during Ramadan. We saw 37% higher engagement and a 21% increase in leads.', ar: 'الحملات الإبداعية وتسليمات التصميم السريعة جعلتنا نبرز خلال رمضان. شهدنا تفاعلاً أعلى بنسبة 37% وزادت الطلبات بنسبة 21%.' },
          clientName: { en: 'Dima Al-Saadi', ar: 'ديمة السعدي' },
          clientTitle: { en: 'Marketing Head, Vision Edge Media', ar: 'رئيسة التسويق، فيجن إيدج ميديا' },
        },
        {
          id: 'review-06',
          companyName: { en: 'Apex Financial Partners', ar: 'ابسكس للخدمات المالية' },
          testimonial: { en: 'Financial process setup from Speedup Services reduced cycle time by 25% and significantly improved claim reconciliation across sister companies.', ar: 'خفض إعداد العمليات المالية من سبيد أب سيرفيسز زمن الدورة بنسبة 25% وحسّن بشكل كبير مصالحة المطالبات عبر الشركات الشقيقة.' },
          clientName: { en: 'Mohammed Al-Bader', ar: 'محمد البدر' },
          clientTitle: { en: 'Finance Director, Apex Financial Partners', ar: 'مدير المالية، ابسكس للخدمات المالية' },
        },
      ],
    },
    serviceDetails: {
      badge: 'تفاصيل الخدمة',
      openGallery: 'فتح المعرض',
      previewComingSoon: 'المعاينة قريباً',
      mediaStatus: 'حالة الوسائط',
      mediaAvailable: 'تتوفر وسائط مرتبطة بهذه الخدمة ويمكن توسيع المعرض بسهولة من خلال كائن البيانات.',
      mediaUnavailable: 'لا توجد وسائط نهائية حتى الآن. أضف الصور أو الفيديوهات لاحقاً داخل مجلدات الخدمات وسيظهر المعرض مباشرة.',
      serviceDetailLabel: 'تفاصيل الخدمة',
    },
    common: {
      close: 'إغلاق',
      previous: 'السابق',
      next: 'التالي',
      contactUs: 'تواصل معنا',
      call: 'اتصل',
      callNow: 'اتصل الآن',
      navigationOpenGallery: 'فتح المعرض',
    },
    services: {
      badge: 'خدماتنا',
      title: 'استكشف خدماتنا',
      description: 'اكتشف حلولنا المتكاملة في إدارة المرافق وتوفير القوى العاملة والخدمات التسويقية من خلال عرض تفاعلي.',
      tabs: {
        facility: 'إدارة المرافق',
        manpower: 'توفير القوى العاملة',
        marketing: 'الخدمات التسويقية',
      },
      tags: {
        facility: 'المرافق',
        softServices: 'الخدمات الناعمة',
        hardServices: 'الخدمات الصلبة',
        manpower: 'القوى العاملة',
        field: 'الميداني',
        operations: 'العمليات',
        logistics: 'اللوجستيات',
        technical: 'الفني',
        admin: 'الإداري',
        marketing: 'التسويق',
        print: 'المطبوعات',
        brandAssets: 'الأصول الدعائية',
        packaging: 'التغليف',
      },
      cards: {
        commercialCleaning: {
          title: 'التنظيف التجاري',
          subtitle: 'تنظيف المكاتب والمجمعات والمباني',
        },
        landscaping: {
          title: 'تنسيق الحدائق',
          subtitle: 'خدمات تنسيق الحدائق والبستنة',
        },
        pestControl: {
          title: 'مكافحة الآفات',
          subtitle: 'مكافحة آفات آمنة ومتوافقة',
        },
        hvacMaintenance: {
          title: 'صيانة التكييف والتهوية',
          subtitle: 'أنظمة التبريد والتهوية',
        },
        electricalMaintenance: {
          title: 'الصيانة الكهربائية',
          subtitle: 'فحوصات الطاقة والسلامة',
        },
        plumbingServices: {
          title: 'خدمات السباكة',
          subtitle: 'دعم الأنابيب والتجهيزات',
        },
        housekeepingServices: {
          title: 'خدمات التدبير والنظافة',
          subtitle: 'عناية يومية احترافية',
        },
        skilledTechnicians: {
          title: 'فنيون مهرة',
          subtitle: 'توفير كوادر فنية معتمدة',
        },
        constructionWorkers: {
          title: 'عمال إنشاءات',
          subtitle: 'فرق تنفيذ ميدانية',
        },
        housekeepingStaff: {
          title: 'طاقم التدبير والنظافة',
          subtitle: 'دعم تشغيلي موثوق',
        },
        warehouseLogisticsStaff: {
          title: 'كوادر المستودعات واللوجستيات',
          subtitle: 'إدارة المخزون والشحن',
        },
        machineOperators: {
          title: 'مشغلو الآلات',
          subtitle: 'متخصصو المعدات الصناعية',
        },
        officeAssistants: {
          title: 'مساعدو المكاتب',
          subtitle: 'دعم إداري للقوى العاملة',
        },
        helpersLoaders: {
          title: 'مساعدون وعمال تحميل',
          subtitle: 'عمالة مرنة للاحتياجات اليومية',
        },
        posm: {
          title: 'مواد نقاط البيع',
          subtitle: 'مواد دعائية لعلامات نقاط البيع',
        },
        businessCards: {
          title: 'بطاقات الأعمال',
          subtitle: 'مواد تعريف احترافية',
        },
        flyersBooklets: {
          title: 'المنشورات والكتيبات',
          subtitle: 'مطبوعات للتواصل في الحملات',
        },
        prKits: {
          title: 'حقائب العلاقات العامة',
          subtitle: 'حقائب إطلاق وتواصل تحمل الهوية',
        },
        tissueBoxes: {
          title: 'علب المناديل',
          subtitle: 'تغليف مطبوع مخصص',
        },
        promoBoxes: {
          title: 'الصناديق الترويجية',
          subtitle: 'صناديق عرض ترويجية',
        },
        paperCups: {
          title: 'الأكواب الورقية',
          subtitle: 'نقاط تواصل مطبوعة للمشروبات',
        },
      },
    },
    industries: {
      title: 'القطاعات التي نخدمها',
      description: 'تمتد خبراتنا عبر قطاعات متنوعة، مع تقديم حلول متخصصة لكل صناعة.',
      items: [
        'المكاتب الإدارية',
        'المنشآت الصناعية والتصنيعية',
        'مشاريع الإنشاءات',
        'المستودعات والخدمات اللوجستية',
        'المستشفيات والعيادات',
        'المؤسسات التعليمية',
        'المجمعات السكنية والتجارية',
        'التجزئة والضيافة',
      ],
    },
    whyChooseUs: {
      title: 'لماذا تختار سبيد أب سيرفيسز؟',
      description:
        'نلتزم بتقديم التميز من خلال قيمنا الأساسية في الاعتمادية والجودة والامتثال. يضمن نهجنا المرتكز على العميل سير عملياتك بسلاسة.',
      reasons: [
        'فريق محترف وذو خبرة',
        'تجهيز وانتشار سريع',
        'الامتثال لقانون العمل السعودي',
        'مراقبة الجودة والإشراف',
        'أسعار تنافسية وشفافة',
        'دعم تشغيلي على مدار الساعة',
        'ضمان الاستبدال',
      ],
    },
    compliance: {
      title: 'الامتثال والسلامة',
      description: 'تعمل سبيد أب سيرفيسز بأعلى معايير الامتثال القانوني والسلامة في المملكة العربية السعودية.',
      items: [
        {
          title: 'الامتثال لأنظمة العمل',
          desc: 'العمل وفقًا كاملاً لأنظمة ولوائح المملكة العربية السعودية.',
        },
        {
          title: 'تسجيل التأمينات الاجتماعية',
          desc: 'تسجيل كامل وامتثال تام لمتطلبات المؤسسة العامة للتأمينات الاجتماعية.',
        },
        {
          title: 'معايير الصحة والسلامة',
          desc: 'إعطاء الأولوية لسلامة بيئة العمل ورفاه الموظفين من خلال معايير صارمة.',
        },
        {
          title: 'توثيق وعقود سليمة',
          desc: 'ضمان استيفاء جميع المتطلبات القانونية والالتزامات التعاقدية بشفافية.',
        },
      ],
    },
    quoteForm: {
      title: 'هل ترغب في الحصول على عرض سعر؟',
      description: 'هل لديك سؤال أو تحتاج إلى عرض سعر؟ فريقنا هنا لمساعدتك وسيتواصل معك في أقرب وقت.',
      labels: {
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'الرسالة',
        services: 'اختر الخدمات',
      },
      placeholders: {
        firstName: 'أدخل اسمك الأول',
        lastName: 'أدخل اسم العائلة',
        email: 'أدخل بريدك الإلكتروني',
        phone: 'أدخل رقم هاتفك',
        message: 'أخبرنا بمتطلباتك (10 أحرف على الأقل)',
      },
      serviceOptions: [
        { value: 'Facility Management', label: 'إدارة المرافق' },
        { value: 'Manpower Supply', label: 'توفير القوى العاملة' },
        { value: 'Marketing Services', label: 'الخدمات التسويقية' },
        { value: 'Soft Services', label: 'الخدمات الناعمة' },
        { value: 'Hard Services', label: 'الخدمات الصلبة' },
        { value: 'Housekeeping Services', label: 'خدمات التدبير والنظافة' },
        { value: 'Office & Commercial Cleaning', label: 'تنظيف المكاتب والمنشآت التجارية' },
        { value: 'Industrial Cleaning', label: 'التنظيف الصناعي' },
        { value: 'Waste Management', label: 'إدارة النفايات' },
        { value: 'Landscaping & Gardening', label: 'تنسيق الحدائق والبستنة' },
        { value: 'Pest Control Coordination', label: 'تنسيق مكافحة الآفات' },
        { value: 'Pantry & Office Support Services', label: 'خدمات البوفيه والدعم المكتبي' },
        { value: 'Electrical Maintenance', label: 'الصيانة الكهربائية' },
        { value: 'HVAC Installation & Maintenance', label: 'تركيب وصيانة التكييف والتهوية' },
        { value: 'Plumbing Services', label: 'خدمات السباكة' },
        { value: 'Carpentry & Civil Maintenance', label: 'النجارة والصيانة المدنية' },
        { value: 'Building & Infrastructure Maintenance', label: 'صيانة المباني والبنية التحتية' },
        { value: 'Equipment Maintenance', label: 'صيانة المعدات' },
        { value: 'Skilled Technicians', label: 'فنيون مهرة' },
        { value: 'Construction Workers', label: 'عمال إنشاءات' },
        { value: 'Warehouse & Logistics Staff', label: 'كوادر المستودعات واللوجستيات' },
        { value: 'Office Assistants', label: 'مساعدو المكاتب' },
        { value: 'Helpers & Loaders', label: 'مساعدون وعمال تحميل' },
        { value: 'Machine Operators', label: 'مشغلو الآلات' },
        { value: 'Facility Supervisors', label: 'مشرفو المرافق' },
        { value: 'Administrative Support Staff', label: 'كوادر الدعم الإداري' },
        { value: 'Soft POSM', label: 'مواد نقاط البيع الناعمة' },
        { value: 'Hard POSM', label: 'مواد نقاط البيع الصلبة' },
      ],
      buttons: {
        send: 'إرسال الرسالة',
        sending: 'جارٍ الإرسال...',
        sent: 'تم الإرسال',
      },
      messages: {
        success: '✓ شكرًا لك! تم إرسال طلب عرض السعر بنجاح.',
        genericError: 'تعذر الإرسال. يرجى المحاولة مرة أخرى لاحقًا.',
        networkError: 'حدث خطأ أثناء الإرسال. يرجى التحقق من الاتصال والمحاولة مجددًا.',
      },
      validation: {
        firstNameRequired: 'الاسم الأول مطلوب.',
        firstNameMin: 'يجب أن يتكون الاسم الأول من حرفين على الأقل.',
        lastNameRequired: 'اسم العائلة مطلوب.',
        lastNameMin: 'يجب أن يتكون اسم العائلة من حرفين على الأقل.',
        emailRequired: 'البريد الإلكتروني مطلوب.',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صالح.',
        phoneRequired: 'رقم الهاتف مطلوب.',
        phoneInvalid: 'يجب أن يحتوي رقم الهاتف على 7 أرقام على الأقل.',
        messageRequired: 'الرسالة مطلوبة.',
        messageMin: 'يجب أن تتكون الرسالة من 10 أحرف على الأقل.',
        servicesRequired: 'يرجى اختيار خدمة واحدة على الأقل.',
      },
      cardTagline: 'مصممون للسرعة. ومبنيون للنجاح.',
      cardSubtagline: 'نحن لا ندعم الأعمال فقط، بل نسرّع نموها.',
      imageAlt: 'نموذج التواصل',
    },
    footer: {
      brandTitle: 'سبيد أب سيرفيسز',
      brandSubtitle: 'حلول متكاملة لإدارة المرافق وتوفير القوى العاملة',
      country: 'المملكة العربية السعودية',
      quickLinksTitle: 'روابط سريعة',
      quickLinks: [
        { label: 'الرئيسية', href: '#home' },
        { label: 'من نحن', href: '#about' },
        { label: 'الخدمات', href: '#services' },
        { label: 'القطاعات', href: '#industries' },
      ],
      contactTitle: 'تواصل معنا',
      contact: {
        general: 'عام: info@speedupservices.com',
        careers: 'الوظائف: hr@speedupservices.com',
        call: 'اتصل بنا: +91 81081 02609',
        address: 'العنوان: المملكة العربية السعودية',
      },
      followTitle: 'تابعنا',
      copyright: '© 2026 سبيد أب سيرفيسز. جميع الحقوق محفوظة.',
    },
  },
};

type TranslationSchema = typeof translations.en;

interface LanguageContextValue {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => detectDefaultLanguage());

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isArabic: language === 'ar',
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.');
  }

  return context;
}
