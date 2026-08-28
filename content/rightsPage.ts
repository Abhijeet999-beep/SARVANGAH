export interface RightsItem {
  title: string;
  description: string;
}

export interface TeamMemberRights {
  roleTitle: string; // e.g. "Founder", "Co-Founder"
  name: string;
  roleDescription: string;
  focusAreas: string[];
  authorizationLabel: string;
}

export interface RightsPageContent {
  meta: {
    title: string;
    description: string;
    effectiveDate: string;
    copyrightNotice: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    effectiveDate: string;
    copyrightNotice: string;
  };
  ownership: {
    title: string;
    eyebrow: string;
    paragraphs: string[];
    scopePoints: RightsItem[];
  };
  protectedMaterials: {
    title: string;
    eyebrow: string;
    description: string;
    categories: RightsItem[];
  };
  unauthorizedUse: {
    title: string;
    eyebrow: string;
    description: string;
    restrictions: RightsItem[];
    exceptionsNotice: string;
  };
  enforcement: {
    title: string;
    eyebrow: string;
    statement: string;
    paragraphs: string[];
  };
  foundingTeam: {
    title: string;
    eyebrow: string;
    description: string;
    members: TeamMemberRights[];
    signatureNotice: string;
  };
  brandIdentity: {
    title: string;
    eyebrow: string;
    description: string;
    guidelines: RightsItem[];
  };
  thirdPartyMaterials: {
    title: string;
    eyebrow: string;
    description: string;
    disclaimers: RightsItem[];
  };
  permissionsAndContact: {
    title: string;
    eyebrow: string;
    description: string;
    inquiryProcess: RightsItem[];
    contactNote: string;
  };
  copyrightSection: {
    title: string;
    eyebrow: string;
    formalNotice: string;
    legalDisclaimer: string;
  };
}

export const rightsPageContent: RightsPageContent = {
  meta: {
    title: "Rights & Ownership | Sarvāṅgaḥ",
    description:
      "Official copyright notice, intellectual property information, brand guidelines, and ownership attribution for Sarvāṅgaḥ.",
    effectiveDate: "6 December 2025",
    copyrightNotice: "© 2025 Sarvāṅgaḥ. All rights reserved.",
  },

  hero: {
    eyebrow: "SARVĀṄGAḤ • LEGAL & INTELLECTUAL PROPERTY NOTICE",
    title: "Rights & Ownership",
    description:
      "A clear public ownership and intellectual property notice establishing original authorship, copyright reservation, and attribution across all Sarvāṅgaḥ materials.",
    effectiveDate: "Effective Date: 6 December 2025",
    copyrightNotice: "© 2025 Sarvāṅgaḥ. All rights reserved.",
  },

  ownership: {
    eyebrow: "ORIGINAL AUTHORSHIP & PLATFORM CUSTODIANSHIP",
    title: "Ownership",
    paragraphs: [
      "The Sarvāṅgaḥ platform, including its digital architecture, original written teachings, visual identity, and curated educational experiences, is created, authored, and maintained by the founding team and contributors identified on this page.",
      "Sarvāṅgaḥ was founded to offer an authentic, reflective sanctuary for consciousness, philosophy, meditation, and inner inquiry. All original philosophical writings, conceptual frameworks, guided practices, aesthetic compositions, and digital layouts published under the Sarvāṅgaḥ name represent the original creative and intellectual work of its creators.",
      "We distinguish between original proprietary materials developed for Sarvāṅgaḥ and third-party open-source components or standard libraries utilized in the technical infrastructure. Proprietary rights are asserted solely over original works created by or explicitly assigned to Sarvāṅgaḥ.",
    ],
    scopePoints: [
      {
        title: "Platform Custodianship",
        description:
          "The website and its continuing direction are stewarded by founder Shloke Thakur and co-founder Abhijeet Singh.",
      },
      {
        title: "Creative Integrity",
        description:
          "All original compositions, spiritual essays, practice outlines, and editorial texts remain under the direct intellectual custodianship of Sarvāṅgaḥ.",
      },
      {
        title: "Delineated Scope",
        description:
          "Rights asserted herein apply strictly to original works and do not extend to open-source software dependencies or third-party intellectual property.",
      },
    ],
  },

  protectedMaterials: {
    eyebrow: "CATEGORIES OF PROTECTED CONTENT",
    title: "Protected Materials",
    description:
      "The following categories of original work published on this website and associated channels are protected under applicable copyright and intellectual property standards:",
    categories: [
      {
        title: "Original Written Content & Teachings",
        description:
          "Essays, articles, reflections on Shiva Tattva, Sadhana guidance, Tantric philosophy commentary, and spiritual editorial text written for Sarvāṅgaḥ.",
      },
      {
        title: "Website Design & Visual Layouts",
        description:
          "The bespoke aesthetic composition, typography hierarchy, ivory and gold color harmonies, UI flow, and responsive page design systems.",
      },
      {
        title: "Branding & Visual Identity",
        description:
          "The Sarvāṅgaḥ name, Devanagari representation (सर्वाङ्गः), brand marks, stylized iconographies, emblems, and associated identity elements.",
      },
      {
        title: "Original Software Code & Architecture",
        description:
          "Custom Next.js components, page compositions, state management routines, styling integration, and proprietary platform workflows.",
      },
      {
        title: "Curated Practice Frameworks",
        description:
          "Structured meditation pathways, daily sadhana frameworks, contemplative exercises, and intuitive inquiry structures developed for practitioners.",
      },
      {
        title: "Original Graphics & Digital Assets",
        description:
          "Custom visual assets, decorative ornaments, geometric motifs, and multimedia assets produced specifically for the Sarvāṅgaḥ platform.",
      },
    ],
  },

  unauthorizedUse: {
    eyebrow: "USAGE TERMS & RESTRICTIONS",
    title: "Unauthorized Use",
    description:
      "To preserve the integrity, authenticity, and spiritual context of Sarvāṅgaḥ, unauthorized use of original materials is strictly prohibited. Except where explicit prior written authorization has been granted, visitors and third parties may not:",
    restrictions: [
      {
        title: "Substantial Reproduction or Mirroring",
        description:
          "Copying, scraping, mirroring, or republishing substantial portions of website text, structure, or content onto another domain or medium.",
      },
      {
        title: "Commercial Exploitation",
        description:
          "Selling, licensing, sublicensing, charging for access, or monetizing any original Sarvāṅgaḥ writings, practices, or curriculum without written agreement.",
      },
      {
        title: "Misleading Brand Representation",
        description:
          "Using the Sarvāṅgaḥ name, Devanagari typography, or visual identity in any manner that creates confusion or implies unapproved affiliation or endorsement.",
      },
      {
        title: "False Attribution or Plagiarism",
        description:
          "Presenting Sarvāṅgaḥ written teachings, philosophical formulations, or proprietary layouts as one's own original creation.",
      },
      {
        title: "Derivative Distribution as Original Work",
        description:
          "Distributing altered, paraphrased, or modified versions of Sarvāṅgaḥ materials under a claim of original authority or altered spiritual lineage.",
      },
      {
        title: "Unauthorized AI Scraping & Training",
        description:
          "Mass extraction of original contemplative texts and proprietary writings for commercial model ingestion without explicit written consent.",
      },
    ],
    exceptionsNotice:
      "Statutory exceptions, fair use, fair dealing, personal non-commercial study, academic citation, brief quotations with prominent attribution and backlinks, and other legally protected uses apply in accordance with applicable laws in the relevant jurisdiction.",
  },

  enforcement: {
    eyebrow: "LEGAL REMEDIES & ENFORCEMENT",
    title: "Enforcement",
    statement:
      "Where we believe our intellectual property rights have been infringed, we reserve the right to take appropriate action available under applicable law, including requesting removal of unauthorized material and pursuing legal remedies where appropriate.",
    paragraphs: [
      "Our approach to intellectual property protection is guided by mutual respect and clarity. We aim to address inadvertent unauthorized usage through polite, direct communication whenever feasible.",
      "However, in instances of willful misappropriation, commercial piracy, brand counterfeiting, or persistent copyright infringement, Sarvāṅgaḥ reserves the full scope of administrative and legal remedies provided under relevant national and international intellectual property frameworks.",
      "Actions may include formal takedown requests (such as DMCA notices and search-engine de-indexing requests), cease-and-desist notifications, and legal claims for damages or injunctive relief where necessary to safeguard our community and authentic teachings.",
    ],
  },

  foundingTeam: {
    eyebrow: "FOUNDING LEADERSHIP & ATTRIBUTION",
    title: "Founding Team",
    description:
      "The vision, philosophy, and original direction of Sarvāṅgaḥ are established and authorized by its founders:",
    members: [
      {
        roleTitle: "Founder",
        name: "Shloke Thakur",
        roleDescription:
          "Conception, spiritual philosophy, Shiva Tattva frameworks, curriculum design, and instructional guidance.",
        focusAreas: [
          "Spiritual Philosophy & Instruction",
          "Shiva Tattva & Tantra Studies",
          "Curriculum & Pedagogical Direction",
          "Platform Vision & Core Teachings",
        ],
        authorizationLabel: "Authorized by Founder",
      },
      {
        roleTitle: "Co-Founder",
        name: "Abhijeet Singh",
        roleDescription:
          "Energy awareness, intuitive healing philosophy, community space architecture, and technical platform co-direction.",
        focusAreas: [
          "Energy & Intuitive Healing Practices",
          "Contemplative Space Architecture",
          "Platform Engineering & UX Direction",
          "Community Standards & Operations",
        ],
        authorizationLabel: "Authorized by Co-Founder",
      },
    ],
    signatureNotice:
      "The electronic acknowledgements below represent official public authorial affirmation by the founding leadership.",
  },

  brandIdentity: {
    eyebrow: "TRADEMARK & IDENTITY GUIDELINES",
    title: "Brand & Identity",
    description:
      "The Sarvāṅgaḥ brand represents a dedicated spiritual space and must be treated with care and authenticity:",
    guidelines: [
      {
        title: "Name & Script",
        description:
          "The name 'Sarvāṅgaḥ' and its Sanskrit Devanagari representation 'सर्वाङ्गः' identify this specific project and its original works.",
      },
      {
        title: "Sacred Symbols & Motifs",
        description:
          "While sacred symbols such as 'ॐ' belong to universal Sanatana Dharma heritage, their specific typographic, graphical, and compositional arrangements within the Sarvāṅgaḥ identity are unique to this platform.",
      },
      {
        title: "No False Affiliation",
        description:
          "Third parties may not use Sarvāṅgaḥ branding, logos, or color schemes in a manner that falsely suggests sponsorship, co-branding, or official endorsement.",
      },
      {
        title: "Editorial Reference",
        description:
          "Factual, nominative references to Sarvāṅgaḥ for educational discussion, review, or indexation are permitted when accompanied by clear attribution.",
      },
    ],
  },

  thirdPartyMaterials: {
    eyebrow: "ACKNOWLEDGEMENT OF EXTERNAL ASSETS",
    title: "Third-Party Materials",
    description:
      "Sarvāṅgaḥ respects the intellectual property rights of all creators and open-source contributors. Certain underlying tools, dependencies, and external assets remain the property of their respective owners:",
    disclaimers: [
      {
        title: "Open-Source Software & Frameworks",
        description:
          "This web platform utilizes open-source frameworks and libraries including Next.js (MIT License), React (MIT License), Tailwind CSS (MIT License), Lucide Icons (ISC License), and related developer tooling. These dependencies remain subject to their respective licenses.",
      },
      {
        title: "Typography & Web Fonts",
        description:
          "Font families utilized on the website, including Google Geist and standard system font stacks, are distributed under the SIL Open Font License or their respective font licenses.",
      },
      {
        title: "External Cloud & Authentication Services",
        description:
          "Authentication infrastructure provided by Clerk and cloud hosting platforms operate under their respective terms of service and proprietary marks.",
      },
      {
        title: "Cultural & Traditional Texts",
        description:
          "Classical Sanskrit mantras, ancient scriptural verses from the Upanishads, Agamas, and Vedic literature are timeless heritage of Sanatana Dharma and in the public domain. Original translations, contemporary commentaries, and curated compilations published on Sarvāṅgaḥ remain protected by copyright.",
      },
    ],
  },

  permissionsAndContact: {
    eyebrow: "LICENSING & PERMISSIONS INQUIRIES",
    title: "Permissions & Contact",
    description:
      "We welcome respectful inquiries regarding educational use, licensing, quotations, translations, or collaborative partnerships.",
    inquiryProcess: [
      {
        title: "Permissions Requests",
        description:
          "If you wish to republish, translate, or incorporate Sarvāṅgaḥ original content into books, courses, or digital publications, please submit a written permission request detailing the proposed scope, medium, and distribution.",
      },
      {
        title: "Attribution Standards",
        description:
          "Approved quotations must include the author's name, the title of the work, clear citation of 'Sarvāṅgaḥ', and a direct hyperlink to the original source page on sarvangah.org.",
      },
      {
        title: "Infringement Notifications",
        description:
          "If you believe any content on our website inadvertently infringes upon your copyright or intellectual property rights, please notify us with relevant evidence so we may investigate promptly.",
      },
    ],
    contactNote:
      "All formal permissions, intellectual property notices, and rights-related inquiries should be directed through our official project channels or designated community contact touchpoints.",
  },

  copyrightSection: {
    eyebrow: "FORMAL RESERVATION OF RIGHTS",
    title: "Copyright Notice",
    formalNotice:
      "© 2026 Sarvāṅgaḥ. All rights reserved. No part of this publication or digital experience may be reproduced, stored in a retrieval system, or transmitted in any form or by any means—electronic, mechanical, photocopying, recording, or otherwise—without prior written permission from the copyright holders, except as permitted by applicable statutory law.",
    legalDisclaimer:
      "This document serves as an official public declaration of intellectual property ownership and copyright reservation for Sarvāṅgaḥ. It is published for informational clarity and does not constitute formal legal counsel. For specific legal questions, please consult qualified legal professionals.",
  },
};
