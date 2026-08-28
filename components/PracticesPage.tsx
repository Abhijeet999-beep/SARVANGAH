
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface Practice {
  id: number;
  sanskrit: string;
  title: string;
  category: string;
  description: string;
  source: string;
  verse?: string;
  transliteration?: string;
  translation?: string;
  explanation: string[];
  example: string;
  beginner: string;
  reflection: string;
  caution?: string;
}

const practices: Practice[] = [
  {
    id: 1,
    sanskrit: "यज्ञ • Yajña",
    title: "Sacred Offering",
    category: "VEDIC • YAJÑA",
    description:
      "The discipline of offering, sacrifice and conscious participation in sacred order.",
    source: "Ṛgveda / Yajurveda ritual traditions; Bhagavad Gītā 4.28",
    verse:
      "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे ।\nस्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः ॥",
    transliteration:
      "dravyayajñās tapoyajñā yoga-yajñās tathāpare /\nsvādhyāya-jñāna-yajñāś ca yatayaḥ saṃśita-vratāḥ",
    translation:
      "Others perform sacrifice through material offerings, austerity, yoga, and through study and knowledge, practicing firm vows.",
    explanation: [
      "Yajña is one of the central ideas of Vedic religious life. It refers to sacrifice and offering, but its meaning is larger than simply placing something into a fire.",
      "Vedic yajñas have specific ritual structures, mantras, materials, priests and purposes. They should therefore not be reduced to one generic ceremony.",
      "The Bhagavad Gītā later expands the idea of yajña into a philosophical framework in which disciplined action, study, austerity and knowledge can also become forms of offering.",
      "The underlying movement is from possession toward offering. Instead of asking only what life can give us, yajña asks what we can consciously give.",
    ],
    example:
      "Before beginning an important task, consciously dedicate the work to something greater than personal recognition. The action remains yours, but the attitude changes from possession to offering.",
    beginner:
      "Study the meaning of yajña before attempting formal ritual. Learn the particular tradition, procedure and mantras associated with the ritual you want to understand.",
    reflection:
      "What would change if I treated my important actions as offerings rather than possessions?",
    caution:
      "Formal Vedic fire rituals should be learned from appropriate traditional instruction rather than improvised.",
  },

  {
    id: 2,
    sanskrit: "अग्निहोत्र • Agnihotra",
    title: "Offering Into Sacred Fire",
    category: "VEDIC • AGNI",
    description:
      "A traditional fire offering belonging to the Vedic ritual system.",
    source: "Yajurvedic and Vedic ritual traditions",
    explanation: [
      "Agnihotra is a traditional fire offering associated with the Vedic ritual system. It belongs to a specific ritual context and should not be confused with every modern fire ceremony.",
      "Agni has a central position in Vedic thought. Fire functions simultaneously as physical fire, divine presence and a medium through which offerings are ritually conveyed.",
      "The practice illustrates the Vedic connection between sacred speech, offering, time and ritual order.",
    ],
    example:
      "Rather than immediately performing Agnihotra independently, begin by observing an authentic traditional performance and studying its timing, offerings, mantras and meaning.",
    beginner:
      "Start with textual and traditional study. Learn the ritual from an appropriate teacher before performing it yourself.",
    reflection:
      "Why does fire occupy such an important place in Vedic ritual?",
    caution:
      "Fire rituals involve both ritual and physical-safety considerations.",
  },

  {
    id: 3,
    sanskrit: "होम • Homa",
    title: "Fire Offering",
    category: "RITUAL • AGNI",
    description:
      "Offerings made into consecrated fire within Hindu ritual traditions.",
    source: "Vedic, Smārta and Āgamic ritual traditions",
    explanation: [
      "Homa is a broad term for ritual offerings made into fire. Different traditions prescribe different materials, mantras, deities and procedures.",
      "The fire transforms the physical offering while the mantra establishes the ritual context.",
      "The practice can also be contemplated symbolically: something that belongs to us is deliberately relinquished into a sacred process.",
    ],
    example:
      "During a traditional homa, observe how every offering is connected with a particular mantra rather than viewing the fire as merely decorative.",
    beginner:
      "Learn one specific homa tradition rather than combining unrelated procedures from different sources.",
    reflection:
      "What does conscious offering mean when I am attached to what I possess?",
  },

  {
    id: 4,
    sanskrit: "स्वाध्याय • Svādhyāya",
    title: "Sacred Study & Self-Study",
    category: "YOGA • KNOWLEDGE",
    description:
      "Disciplined study, recitation and examination of oneself through sacred knowledge.",
    source: "Yoga Sūtras 2.32; Bhagavad Gītā 4.28",
    verse:
      "स्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः ॥",
    transliteration:
      "svādhyāya-jñāna-yajñāś ca yatayaḥ saṃśita-vratāḥ",
    translation:
      "They perform sacrifice through study and knowledge, practicing firm vows.",
    explanation: [
      "Svādhyāya is more than reading inspirational material. It involves disciplined engagement with sacred knowledge.",
      "The practice can involve studying scripture, reciting traditional passages and examining how teachings relate to one's own conduct.",
      "A serious student should distinguish what the text actually says from later interpretation and personal opinion.",
    ],
    example:
      "Read one passage from the Bhagavad Gītā carefully. Read the surrounding verses, identify important Sanskrit terms and write down what the passage demands from your own behavior.",
    beginner:
      "Study for 15 minutes a day. Keep three notes: what the text says, what you understand, and what you still do not understand.",
    reflection:
      "Am I studying to understand the teaching or simply to collect quotations?",
  },

  {
    id: 5,
    sanskrit: "सन्ध्या • Sandhyā",
    title: "Junction-Time Practice",
    category: "VEDIC • DAILY DISCIPLINE",
    description:
      "Prayer and remembrance associated with transitional times of the day.",
    source: "Vedic and Smārta daily-observance traditions",
    explanation: [
      "Sandhyā refers to transitional periods, especially the junctions around sunrise and sunset. Later tradition developed specific religious observances around these times.",
      "The deeper principle is rhythm. Instead of allowing the day to become one continuous stream of activity, transitions become moments of recollection.",
      "Traditional Sandhyā procedures can involve purification, mantra, water offerings and Gāyatrī-related recitation.",
    ],
    example:
      "At sunrise, spend several quiet minutes remembering your intention for the day before beginning work.",
    beginner:
      "Begin with a five-minute sunrise or sunset pause. Learn the formal Sandhyā procedure separately if you wish to undertake it.",
    reflection:
      "Can I turn ordinary transitions into moments of awareness?",
  },

  {
    id: 6,
    sanskrit: "गायत्री-उपासना • Gāyatrī-Upāsanā",
    title: "Contemplation of the Gāyatrī",
    category: "VEDIC • MANTRA",
    description:
      "Contemplative engagement with the Gāyatrī mantra of the Ṛgveda.",
    source: "Ṛgveda 3.62.10",
    verse:
      "तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥",
    transliteration:
      "tat savitur vareṇyaṃ bhargo devasya dhīmahi /\ndhiyo yo naḥ pracodayāt",
    translation:
      "We contemplate the radiant splendor of Savitṛ; may that divine radiance inspire and guide our understanding.",
    explanation: [
      "The Gāyatrī is one of the best-known mantras of the Vedic corpus. Its central movement is contemplation of Savitṛ's divine radiance and a prayer for illumination of understanding.",
      "The mantra belongs specifically to Ṛgveda 3.62.10 and should therefore not be presented as a generic modern meditation quotation.",
      "Later traditions developed extensive practices around the mantra, particularly within Sandhyā observance.",
    ],
    example:
      "Study the Sanskrit words and contemplate the prayer for illumination of understanding rather than treating the mantra merely as a sound that guarantees a particular worldly result.",
    beginner:
      "Begin with pronunciation, meaning and textual context. Follow your tradition's requirements for formal mantra practice.",
    reflection:
      "What does it mean to ask for illumination of understanding?",
    caution:
      "Formal Gāyatrī practice can have initiation and lineage-specific requirements.",
  },

  {
    id: 7,
    sanskrit: "अग्नि-उपासना • Agni-Upāsanā",
    title: "Contemplation of Agni",
    category: "VEDIC • AGNI",
    description:
      "Contemplative engagement with Agni as a central Vedic deity and symbol.",
    source: "Ṛgveda — Agni hymns",
    explanation: [
      "Agni is one of the most prominent divine figures in the Vedic hymns.",
      "Vedic Agni should not simply be reduced to the modern idea of 'energy.' Agni belongs to a specific theological and ritual world.",
      "Contemplating fire can nevertheless invite reflection on transformation, illumination and offering.",
    ],
    example:
      "During a traditional fire ceremony, observe the flame and reflect on how offerings are transformed.",
    beginner:
      "Read selected Agni hymns before creating any personal fire practice.",
    reflection:
      "What does transformation mean in the symbolism of fire?",
  },

  {
    id: 8,
    sanskrit: "ब्रह्मयज्ञ • Brahma-Yajña",
    title: "Offering Through Sacred Learning",
    category: "VEDIC • STUDY",
    description:
      "Traditional engagement with sacred learning and Vedic recitation.",
    source: "Taittirīya Āraṇyaka and Vedic ritual traditions",
    explanation: [
      "Brahma-yajña is associated with sacred study and transmission. Vedic knowledge was preserved through disciplined oral traditions.",
      "Learning therefore becomes a responsibility toward the knowledge received from previous generations.",
      "Modern study can draw inspiration from this principle while recognizing that casual reading is not identical to traditional Vedic recitation.",
    ],
    example:
      "Choose one Sanskrit passage and study its source, pronunciation, translation and traditional interpretation.",
    beginner:
      "Study one passage deeply rather than collecting dozens of quotations.",
    reflection:
      "What responsibility comes with receiving preserved knowledge?",
  },

  {
    id: 9,
    sanskrit: "पितृयज्ञ • Pitṛ-Yajña",
    title: "Ancestor Reverence",
    category: "VEDIC • PITṚ",
    description:
      "Traditional remembrance and offerings associated with ancestors.",
    source: "Vedic and Smṛta ancestor traditions",
    explanation: [
      "Pitṛ-yajña reflects the idea that an individual exists within networks of inheritance and obligation.",
      "Ancestor practices express remembrance, gratitude and continuity.",
      "Formal śrāddha and related practices have specific procedures and should be learned within their tradition.",
    ],
    example:
      "Participate in your family's traditional ancestor observance under appropriate guidance.",
    beginner:
      "Learn your family's authentic practice rather than constructing a ritual from unrelated internet sources.",
    reflection:
      "What have I inherited from previous generations?",
  },

  {
    id: 10,
    sanskrit: "अतिथि-सेवा • Atithi-Sevā",
    title: "Honoring the Guest",
    category: "DHARMA • UPANIṢAD",
    description:
      "Practicing hospitality, respect and care toward guests.",
    source: "Taittirīya Upaniṣad 1.11",
    verse:
      "मातृदेवो भव । पितृदेवो भव ।\nआचार्यदेवो भव । अतिथिदेवो भव ॥",
    translation:
      "Regard your mother as divine; your father as divine; your teacher as divine; your guest as divine.",
    explanation: [
      "Hospitality becomes a spiritual discipline when another person's presence is treated as worthy of respect rather than as an inconvenience.",
      "The teaching belongs to the ethical instruction of the Taittirīya Upaniṣad.",
      "The practice can be applied to ordinary life through attention, generosity and respect.",
    ],
    example:
      "When someone visits, put away distractions, offer appropriate hospitality and listen to them without constantly checking your phone.",
    beginner:
      "Practice undistracted hospitality once a week.",
    reflection:
      "Do I value people for who they are or primarily for what they can provide?",
  },

  {
    id: 11,
    sanskrit: "वेद-स्वाध्याय • Veda-Svādhyāya",
    title: "Disciplined Vedic Study",
    category: "VEDIC • KNOWLEDGE",
    description:
      "Systematic study and preservation of Vedic textual knowledge.",
    source: "Vedic śākhā and recitation traditions",
    explanation: [
      "Vedic learning historically depends upon disciplined oral transmission.",
      "Different śākhās preserve different textual traditions, pronunciations and recitation systems.",
      "A modern student should therefore identify the recension, edition and tradition being studied.",
    ],
    example:
      "Take one Vedic hymn and learn its deity, meter, Sanskrit text, translation and textual location.",
    beginner:
      "Start with one short passage and learn it carefully.",
    reflection:
      "What changes when scripture is approached as a living oral tradition?",
  },

  {
    id: 12,
    sanskrit: "ऋत-चिन्तन • Ṛta-Cintana",
    title: "Contemplation of Cosmic Order",
    category: "VEDIC • PHILOSOPHY",
    description:
      "Reflection upon ṛta, order, truth and harmonious existence.",
    source: "Ṛgvedic hymns concerning ṛta",
    explanation: [
      "Ṛta is a major Vedic concept associated with order, truth and regularity.",
      "It should not simply be translated as 'good vibes' or a generic cosmic law.",
      "Contemplating ṛta can encourage reflection upon whether one's actions contribute to harmony or disorder.",
    ],
    example:
      "Before making a major decision, ask not only whether it benefits you but also what effect it has on your relationships and responsibilities.",
    beginner:
      "Study several Vedic passages where ṛta appears and compare their contexts.",
    reflection:
      "How does my behavior affect the order around me?",
  },

  {
    id: 13,
    sanskrit: "मन्त्र-पाठ • Mantra-Pāṭha",
    title: "Sacred Recitation",
    category: "VEDIC • MANTRA",
    description:
      "Disciplined recitation of sacred Sanskrit passages.",
    source: "Vedic oral-recitation traditions",
    explanation: [
      "Vedic recitation is a highly developed oral preservation system.",
      "Sound, pronunciation, meter and accent can be important aspects of Vedic recitation.",
      "For this reason, Vedic mantras should not casually be modified or reconstructed from unreliable sources.",
    ],
    example:
      "Listen to an authentic recitation while following the Sanskrit text and observing pronunciation and rhythm.",
    beginner:
      "Learn one short passage correctly before attempting many.",
    reflection:
      "How does sacred sound change when understood as a living oral tradition?",
  },

  {
    id: 14,
    sanskrit: "दीप-दर्शन • Dīpa-Darśana",
    title: "Contemplation Through Light",
    category: "RITUAL • DEVOTION",
    description:
      "Using sacred light within worship and contemplative practice.",
    source: "Later Hindu pūjā and Āgamic traditions",
    explanation: [
      "Lamps and ārati occupy an important place in later Hindu worship.",
      "Light can symbolize illumination and the removal of darkness.",
      "This should not be confused with the formal Vedic fire sacrifices.",
    ],
    example:
      "During ārati, observe the lamp with attention and understand its place within the complete ritual.",
    beginner:
      "Learn the meaning of the particular ārati tradition you practice.",
    reflection:
      "What does light represent in my relationship with knowledge?",
  },

  {
    id: 15,
    sanskrit: "प्रार्थना • Prārthanā",
    title: "Conscious Prayer",
    category: "DEVOTION • PRAYER",
    description:
      "Directing speech, intention and attention toward the Divine.",
    source: "Vedic hymns and later Hindu devotional traditions",
    explanation: [
      "Prayer appears in many forms throughout Hindu traditions: praise, gratitude, petition, surrender and remembrance.",
      "A mature prayer practice does not necessarily consist only of asking for personal outcomes.",
      "Prayer can also cultivate gratitude, humility, discernment and willingness to act responsibly.",
    ],
    example:
      "Begin the day with a short prayer expressing gratitude and asking for clarity in fulfilling your responsibilities.",
    beginner:
      "Write a short personal prayer alongside one traditional prayer from your chosen tradition.",
    reflection:
      "What do I ask from the Divine, and what am I willing to offer?",
  },

  {
    id: 16,
    sanskrit: "अहिंसा • Ahiṃsā",
    title: "Non-Harming",
    category: "YOGA • ETHICS",
    description:
      "Cultivating restraint from unnecessary harm in thought, speech and action.",
    source: "Yoga Sūtra 2.30; Dharma traditions",
    explanation: [
      "Ahiṃsā is the first of Patañjali's five yamas.",
      "It is not simply avoiding physical violence. Ethical traditions examine speech, intention and conduct as well.",
      "The practice begins with observing where unnecessary harm enters ordinary behavior.",
    ],
    example:
      "Notice when irritation makes you speak more harshly than necessary. Pause before responding.",
    beginner:
      "Choose one recurring situation where you tend to react aggressively and practice a deliberate pause.",
    reflection:
      "Where does unnecessary harm enter my everyday behavior?",
  },

  {
    id: 17,
    sanskrit: "सत्य • Satya",
    title: "Truthfulness",
    category: "YOGA • ETHICS",
    description:
      "Cultivating truthfulness in speech, intention and conduct.",
    source: "Yoga Sūtra 2.30",
    explanation: [
      "Satya is traditionally listed as the second yama.",
      "Truthfulness is more demanding than simply avoiding obvious lies. It invites examination of exaggeration, manipulation, concealment and self-deception.",
      "The practice requires discernment because truthful speech should not become an excuse for unnecessary cruelty.",
    ],
    example:
      "When describing an achievement, remove exaggeration and describe what actually happened.",
    beginner:
      "For one week, observe exaggeration and unnecessary embellishment in your speech.",
    reflection:
      "Where do I alter reality to protect my image?",
  },

  {
    id: 18,
    sanskrit: "अस्तेय • Asteya",
    title: "Non-Stealing",
    category: "YOGA • ETHICS",
    description:
      "Refraining from taking what has not been freely given.",
    source: "Yoga Sūtra 2.30",
    explanation: [
      "Asteya literally concerns non-stealing.",
      "Its broader ethical application can include respect for another person's property, time, work and intellectual contribution.",
      "The practice becomes especially relevant when subtle forms of entitlement are examined.",
    ],
    example:
      "Give proper credit when using another person's idea rather than presenting it as your own.",
    beginner:
      "Notice places where you assume access to another person's time or resources without permission.",
    reflection:
      "What do I feel entitled to receive without having earned or been given it?",
  },

  {
    id: 19,
    sanskrit: "ब्रह्मचर्य • Brahmacarya",
    title: "Disciplined Conduct",
    category: "YOGA • ETHICS",
    description:
      "Cultivating disciplined and conscious use of one's energies and relationships.",
    source: "Yoga Sūtra 2.30; broader dharmic traditions",
    explanation: [
      "Brahmacarya has received different interpretations across Hindu traditions and contexts.",
      "In some contexts it refers to celibacy; in others it is interpreted more broadly as disciplined conduct and regulation of sensual life.",
      "Sarvāṅga therefore presents the term without pretending that every school gives it exactly the same meaning.",
    ],
    example:
      "Observe whether entertainment, attraction or sensory stimulation is controlling your attention more than you consciously choose.",
    beginner:
      "Identify one habit that repeatedly consumes your attention and establish a reasonable boundary.",
    reflection:
      "Am I directing my attention consciously or being directed by every impulse?",
  },

  {
    id: 20,
    sanskrit: "अपरिग्रह • Aparigraha",
    title: "Non-Grasping",
    category: "YOGA • ETHICS",
    description:
      "Reducing unnecessary accumulation and possessiveness.",
    source: "Yoga Sūtra 2.30",
    explanation: [
      "Aparigraha is traditionally associated with non-grasping or non-hoarding.",
      "The practice concerns the psychological relationship with possessions, status and accumulation.",
      "The question is not whether owning things is inherently wrong, but whether possession has become a source of psychological dependence.",
    ],
    example:
      "Before buying something unnecessary, wait 48 hours and examine whether the desire remains.",
    beginner:
      "Choose one category of possessions and stop unnecessary accumulation for a month.",
    reflection:
      "What do I believe I need in order to feel secure?",
  },

  {
    id: 21,
    sanskrit: "शौच • Śauca",
    title: "Purity & Cleanliness",
    category: "YOGA • NIYAMA",
    description:
      "Cultivating cleanliness and clarity of body, environment and inner life.",
    source: "Yoga Sūtra 2.32",
    explanation: [
      "Śauca is listed among the niyamas.",
      "The practice can be approached through physical cleanliness as well as examination of the influences entering one's mind.",
      "The traditional concept should not be reduced to obsession with external purity.",
    ],
    example:
      "Keep your practice space clean and observe whether the information you consume leaves the mind clearer or more agitated.",
    beginner:
      "Create one clean, distraction-free space for study or meditation.",
    reflection:
      "What environments make my mind clearer?",
  },

  {
    id: 22,
    sanskrit: "सन्तोष • Santoṣa",
    title: "Contentment",
    category: "YOGA • NIYAMA",
    description:
      "Cultivating contentment rather than allowing endless dissatisfaction to dominate life.",
    source: "Yoga Sūtra 2.32",
    explanation: [
      "Santoṣa is one of Patañjali's niyamas.",
      "Contentment does not necessarily mean abandoning ambition. It concerns freedom from the belief that happiness must always wait for the next achievement.",
      "A person can work toward improvement while remaining capable of appreciating what is already present.",
    ],
    example:
      "At the end of the day, identify three things that were sufficient or meaningful rather than focusing only on what went wrong.",
    beginner:
      "Practice daily gratitude without turning it into forced positivity.",
    reflection:
      "What condition am I constantly waiting for before allowing myself to be content?",
  },

  {
    id: 23,
    sanskrit: "तपस् • Tapas",
    title: "Disciplined Effort",
    category: "YOGA • DISCIPLINE",
    description:
      "Developing steadiness through deliberate and meaningful discipline.",
    source: "Yoga Sūtra 2.32; Bhagavad Gītā 17.14–17",
    explanation: [
      "Tapas is associated with disciplined effort and austerity.",
      "It should not be confused with suffering for its own sake.",
      "The useful question is whether a discipline produces steadiness, clarity and self-mastery rather than vanity or self-harm.",
    ],
    example:
      "Maintain a reasonable daily study or meditation commitment even on days when motivation is low.",
    beginner:
      "Choose one sustainable discipline and keep it for thirty days.",
    reflection:
      "Can I remain committed when temporary motivation disappears?",
    caution:
      "Extreme fasting, sleep deprivation or self-injury should not be romanticized as tapas.",
  },

  {
    id: 24,
    sanskrit: "ईश्वरप्रणिधान • Īśvara-Praṇidhāna",
    title: "Dedication to Īśvara",
    category: "YOGA • SURRENDER",
    description:
      "Dedicating one's practice and actions toward Īśvara.",
    source: "Yoga Sūtras 2.32, 2.45",
    explanation: [
      "Īśvara-praṇidhāna is one of the five niyamas in Patañjali's Yoga.",
      "It is associated with dedication, surrender or offering oneself to Īśvara.",
      "This does not require passivity. One can act with full effort while releasing excessive attachment to controlling the final outcome.",
    ],
    example:
      "Before studying, consciously dedicate the effort to the Divine and then perform the work seriously.",
    beginner:
      "Begin each major activity with a short moment of dedication.",
    reflection:
      "Can I give my best effort without demanding complete control over the result?",
  },

  {
    id: 25,
    sanskrit: "क्षमा • Kṣamā",
    title: "Forgiveness",
    category: "DHARMA • CHARACTER",
    description:
      "Cultivating the capacity to release destructive resentment while retaining discernment.",
    source: "Dharma and Purāṇic ethical traditions",
    explanation: [
      "Forgiveness is repeatedly valued in Hindu ethical literature.",
      "Forgiving does not necessarily mean declaring harmful behavior acceptable or removing appropriate boundaries.",
      "The practice concerns reducing the internal grip of resentment while learning from what occurred.",
    ],
    example:
      "Write down what happened, what you learned and what boundary you need going forward instead of repeatedly replaying the event.",
    beginner:
      "Begin with minor resentments rather than forcing yourself to forgive severe harm immediately.",
    reflection:
      "What am I continuing to carry that no longer helps me act wisely?",
  },

  {
    id: 26,
    sanskrit: "दया • Dayā",
    title: "Compassion",
    category: "DHARMA • BHAKTI",
    description:
      "Developing sensitivity toward the suffering and welfare of other beings.",
    source: "Bhāgavata and broader dharmic traditions",
    explanation: [
      "Dayā is repeatedly valued across Hindu ethical and devotional literature.",
      "Compassion becomes a spiritual practice when it changes behavior rather than remaining an emotion.",
      "It should be combined with discernment: helping someone does not always mean giving them whatever they ask for.",
    ],
    example:
      "Notice someone struggling and offer practical help appropriate to the situation rather than only expressing sympathy.",
    beginner:
      "Perform one small act of useful kindness each day without expecting recognition.",
    reflection:
      "Does my compassion lead to action?",
  },

  {
    id: 27,
    sanskrit: "दम • Dama",
    title: "Sense Restraint",
    category: "UPANIṢAD • YOGA",
    description:
      "Cultivating conscious regulation of the senses.",
    source: "Upaniṣadic and Vedāntic traditions",
    explanation: [
      "Dama is associated with restraint or regulation of the senses.",
      "The goal is not hatred of the senses but freedom from being automatically controlled by every sensory impulse.",
      "This becomes especially relevant in an environment designed to maximize attention capture.",
    ],
    example:
      "Eat one meal without screens and observe the difference between tasting consciously and consuming automatically.",
    beginner:
      "Choose one sensory habit and introduce a small period of restraint.",
    reflection:
      "Who is directing my attention—the mind or the next stimulus?",
  },

  {
    id: 28,
    sanskrit: "शम • Śama",
    title: "Calming the Mind",
    category: "UPANIṢAD • VEDĀNTA",
    description:
      "Cultivating mental quietness and steadiness.",
    source: "Upaniṣadic and Vedāntic traditions",
    explanation: [
      "Śama is traditionally associated with calming or restraining the mind.",
      "It is not suppression of thought. Rather, it concerns reducing compulsive mental agitation.",
      "The practitioner learns to observe thoughts without automatically following each one.",
    ],
    example:
      "Sit for five minutes without entertainment and observe the mind's repeated attempts to find stimulation.",
    beginner:
      "Practice short periods of quiet each day.",
    reflection:
      "What happens when I stop feeding every thought with attention?",
  },

  {
    id: 29,
    sanskrit: "विवेक • Viveka",
    title: "Discernment",
    category: "JÑĀNA • VEDĀNTA",
    description:
      "Developing the ability to distinguish what is lasting, appropriate and true from what is temporary or misleading.",
    source: "Upaniṣadic and Vedāntic traditions",
    explanation: [
      "Viveka is central to many Indian philosophical traditions.",
      "Spiritual maturity requires discrimination between experience and interpretation, desire and necessity, appearance and deeper understanding.",
      "Without discernment, even spiritual enthusiasm can become confusion.",
    ],
    example:
      "When a strong intuition arises, ask whether it may actually be fear, desire, memory or evidence before treating it as truth.",
    beginner:
      "Before making an emotionally charged decision, write down facts, interpretations and assumptions separately.",
    reflection:
      "How often do I confuse what I feel with what I know?",
  },

  {
    id: 30,
    sanskrit: "वैराग्य • Vairāgya",
    title: "Dispassion",
    category: "YOGA • JÑĀNA",
    description:
      "Reducing compulsive attachment to experiences and outcomes.",
    source: "Yoga Sūtra 1.12–1.16",
    explanation: [
      "Vairāgya is traditionally associated with freedom from attachment.",
      "It does not necessarily mean emotional coldness or withdrawal from life.",
      "A person can care deeply while becoming less psychologically dependent upon getting exactly what they want.",
    ],
    example:
      "Work seriously toward an achievement while reminding yourself that your identity is larger than the result.",
    beginner:
      "Practice noticing one desire without immediately acting upon it.",
    reflection:
      "Can I care deeply without becoming completely dependent on the outcome?",
  },

];

export default function PracticesPage() {
  const [openPractice, setOpenPractice] = useState<number | null>(1);

  return (
    <main className="min-h-screen bg-[#f7f1e5] text-[#30261f]">
      {/* HERO */}
      <section className="mx-auto max-w-[1100px] px-6 pb-20 pt-28 text-center md:pb-24 md:pt-36">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#a77827]">
          SĀDHANĀ • ŚĀSTRA • SELF-REALIZATION
        </p>

        <h1 className="mt-6 font-serif text-[clamp(48px,7vw,88px)] font-normal leading-[0.95] tracking-[-0.045em]">
          Spiritual Practices
        </h1>

        <div className="my-7 flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-[#b78a3c]/40" />
          <span className="text-[18px] text-[#b78a3c]">✦</span>
          <span className="h-px w-14 bg-[#b78a3c]/40" />
        </div>

        <h2 className="font-serif text-[25px] leading-tight md:text-[35px]">
          One hundred doors into sādhanā
        </h2>

        <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-[1.85] text-[#66584c]">
          Explore Yoga, Bhakti, Jñāna, Dharma and Vedic traditions through
          Sanskrit terminology, textual context, practical examples and
          contemplative reflection.
        </p>
      </section>

      {/* NOTE */}
      <section className="border-y border-[#3e3025]/10 bg-[#efe6d4]">
        <div className="mx-auto max-w-[1000px] px-6 py-12 md:px-10 md:py-16">
          <p className="text-[9px] uppercase tracking-[0.32em] text-[#a77827]">
            A note on sources
          </p>

          <h2 className="mt-4 font-serif text-[30px] leading-tight md:text-[38px]">
            Many traditions. One library.
          </h2>

          <p className="mt-5 text-[15px] leading-[1.9] text-[#66584c]">
            Sarvāṅga does not call every practice “Vedic.” Vedic Saṃhitās,
            Brāhmaṇas, Āraṇyakas, Upaniṣads, Yoga texts, Bhagavad Gītā,
            Purāṇas and later devotional traditions have different textual
            histories and philosophical contexts.
          </p>

          <p className="mt-4 text-[15px] leading-[1.9] text-[#66584c]">
            Where a practice is a modern synthesis, it is identified as such
            rather than being falsely attributed to an ancient scripture.
          </p>
        </div>
      </section>

      {/* LIBRARY */}
      <section className="mx-auto max-w-[1150px] px-6 py-20 md:px-10 md:py-24">
        <div className="mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.32em] text-[#a77827]">
                100 Practices
              </p>

          <h2 className="mt-4 font-serif text-[39px] leading-tight md:text-[50px]">
            Enter Sādhanā
          </h2>

              <p className="mt-4 max-w-[700px] text-[14px] leading-[1.8] text-[#756557]">
                Open any practice to explore its meaning, traditional context,
                Sanskrit, examples and reflection.
              </p>
            </div>

            <div className="shrink-0 border border-[#3e3025]/10 px-5 py-3 text-center">
              <p className="text-[8px] uppercase tracking-[0.28em] text-[#9b8977]">
                Complete Library
              </p>
              <p className="mt-1 font-serif text-[25px] text-[#a77827]">
                {practices.length}
              </p>
              <p className="text-[8px] uppercase tracking-[0.2em] text-[#9b8977]">
                Practices
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3e3025]/15">
          {practices.map((practice) => {
            const isOpen = openPractice === practice.id;

            return (
              <article
                key={practice.id}
                className="border-b border-[#3e3025]/15"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenPractice(isOpen ? null : practice.id)
                  }
                  className="flex w-full items-center gap-5 py-7 text-left md:gap-8"
                >
                  <span className="w-8 shrink-0 text-[10px] tracking-[0.2em] text-[#a77827]">
                    {String(practice.id).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-[8px] uppercase tracking-[0.28em] text-[#9b8977]">
                      {practice.category}
                    </p>

                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-serif text-[27px] font-normal md:text-[35px]">
                        {practice.sanskrit}
                      </h3>

                      <span className="text-[14px] text-[#6b5b4d] md:text-[16px]">
                        — {practice.title}
                      </span>
                    </div>

                    {!isOpen && (
                      <p className="mt-2 max-w-[720px] text-[13px] leading-[1.7] text-[#8a7968]">
                        {practice.description}
                      </p>
                    )}
                  </div>

                  <ChevronDown
                    size={19}
                    strokeWidth={1.4}
                    className={`shrink-0 text-[#9b7128] transition-transform duration-500 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-12 pl-12 md:pl-16">
                      {/* INTRO */}
                      <p className="max-w-[900px] text-[16px] leading-[1.9] text-[#4f4339]">
                        {practice.description}
                      </p>

                      {/* SOURCE */}
                      <div className="mt-8 border-l-2 border-[#b58a3a] pl-5">
                        <p className="text-[8px] uppercase tracking-[0.3em] text-[#a77827]">
                          Textual context
                        </p>

                        <p className="mt-2 text-[14px] leading-[1.7] text-[#5e5044]">
                          {practice.source}
                        </p>
                      </div>

                      {/* VERSE */}
                      {practice.verse && (
                        <div className="mt-9 border border-[#3e3025]/10 bg-[#efe6d4]/60 p-6 md:p-8">
                          <p className="text-[8px] uppercase tracking-[0.3em] text-[#a77827]">
                            Sanskrit
                          </p>

                          <p className="mt-5 whitespace-pre-line text-center font-serif text-[21px] leading-[2] text-[#3d3028] md:text-[25px]">
                            {practice.verse}
                          </p>

                          {practice.transliteration && (
                            <p className="mt-5 text-center text-[12px] italic leading-[1.8] text-[#806f60]">
                              {practice.transliteration}
                            </p>
                          )}

                          {practice.translation && (
                            <>
                              <div className="mx-auto mt-6 h-px max-w-[100px] bg-[#b78a3c]/30" />

                              <p className="mx-auto mt-5 max-w-[700px] text-center font-serif text-[16px] leading-[1.8] text-[#5e5044]">
                                {practice.translation}
                              </p>
                            </>
                          )}
                        </div>
                      )}

                      {/* EXPLANATION */}
                      <div className="mt-10 max-w-[900px]">
                        <h4 className="font-serif text-[27px]">
                          Understanding the practice
                        </h4>

                        <div className="mt-5 space-y-5">
                          {practice.explanation.map(
                            (paragraph, index) => (
                              <p
                                key={index}
                                className="text-[14px] leading-[1.9] text-[#66584c]"
                              >
                                {paragraph}
                              </p>
                            )
                          )}
                        </div>
                      </div>

                      {/* EXAMPLE / BEGINNER */}
                      <div className="mt-10 grid gap-5 md:grid-cols-2">
                        <div className="border border-[#3e3025]/10 bg-[#efe6d4]/60 p-6">
                          <p className="text-[8px] uppercase tracking-[0.3em] text-[#a77827]">
                            Example
                          </p>

                          <p className="mt-4 text-[13px] leading-[1.85] text-[#625448]">
                            {practice.example}
                          </p>
                        </div>

                        <div className="border border-[#3e3025]/10 bg-[#efe6d4]/60 p-6">
                          <p className="text-[8px] uppercase tracking-[0.3em] text-[#a77827]">
                            Begin gradually
                          </p>

                          <p className="mt-4 text-[13px] leading-[1.85] text-[#625448]">
                            {practice.beginner}
                          </p>
                        </div>
                      </div>

                      {/* CAUTION */}
                      {practice.caution && (
                        <div className="mt-5 border border-[#8b6b42]/20 bg-[#f1e8d8] p-6">
                          <p className="text-[8px] uppercase tracking-[0.3em] text-[#946d2d]">
                            Context & caution
                          </p>

                          <p className="mt-3 text-[13px] leading-[1.8] text-[#67584a]">
                            {practice.caution}
                          </p>
                        </div>
                      )}

                      {/* REFLECTION */}
                      <div className="mt-8 flex gap-4 border-t border-[#3e3025]/10 pt-7">
                        <span className="mt-1 text-[#a77827]">◇</span>

                        <div>
                          <p className="text-[8px] uppercase tracking-[0.3em] text-[#a77827]">
                            Reflection
                          </p>

                          <p className="mt-2 font-serif text-[18px] italic leading-[1.55] text-[#493c32]">
                            {practice.reflection}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#302821] text-[#f5ecdd]">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-24">
          <BookOpen
            size={24}
            strokeWidth={1.2}
            className="mx-auto text-[#c49a55]"
          />

          <h2 className="mt-6 font-serif text-[38px] leading-tight md:text-[52px]">
            Practice. Question. Experience. Transform.
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[14px] leading-[1.9] text-[#c9bcae]">
            Spiritual practice is not about collecting techniques. It is about
            allowing knowledge to become lived understanding.
          </p>

          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-3 border border-[#c49a55] px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-[#e2c68f] transition hover:bg-[#c49a55] hover:text-[#302821]"
          >
            Return to Sarvāṅga
            <ArrowUpRight size={14} strokeWidth={1.4} />
          </Link>
        </div>
      </section>
    </main>
  );
}