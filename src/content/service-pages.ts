import type { ServicePageContent } from "@/content/service-page-types";

/**
 * Long-form content for the eight service pages. See service-page-types.ts for
 * the content rule: method and scope only, never a claimed result.
 */

const seo: ServicePageContent = {
  slug: "seo",
  category: "Organic growth infrastructure",
  headline: "Organic search is infrastructure, not a campaign.",
  positioning:
    "Search compounds when the technical foundation, the content and the authority behind it are built as one system rather than three separate projects.",
  metaTitle: "SEO & Organic Growth",
  metaDescription:
    "Technical SEO, intent-led keyword and content strategy, internal linking and authority building — built as one compounding organic growth system by AIOS Labs.",
  serviceType: "Search engine optimisation",
  problem: {
    eyebrow: "The problem",
    heading: "Most SEO stalls because it is run as a content exercise.",
    body: [
      "Pages get published, rankings twitch, and nothing compounds. The technical foundation is never audited, the keyword set reflects what is easy to write rather than what buyers actually search, and internal linking is left to whatever the CMS does by default.",
      "The pages that do rank are often not the pages that sell. Traffic arrives on a blog post written for volume, finds nothing to do next, and leaves. The channel then gets written off as slow, when what it actually was is unstructured.",
    ],
  },
  approach: {
    eyebrow: "Our approach",
    heading: "Foundation first, then intent, then authority.",
    body: [
      "Every engagement starts with what crawlers and buyers can actually reach — indexation, site architecture, rendering, page speed, and the shape of the internal link graph. A content plan sitting on a broken foundation is wasted budget.",
      "The keyword set is then built around commercial intent rather than search volume. We map queries to the stage of the decision they represent, and decide what to publish, what to rewrite, and what to consolidate or retire.",
      "Authority is earned deliberately: work worth citing and relationships worth having. We do not buy links, because the short-term movement is not worth the risk to the domain you have to keep.",
    ],
  },
  deliverablesHeading: "What the work covers",
  deliverables: [
    { index: "01", title: "Technical SEO", description: "Crawl, index and render audits, site architecture, Core Web Vitals and structured data — with the fixes, not just the findings." },
    { index: "02", title: "Keyword & intent strategy", description: "A keyword set organised by buying intent and mapped to the page meant to win it." },
    { index: "03", title: "Content strategy", description: "What to publish, what to rewrite, what to consolidate, and the brief behind each decision." },
    { index: "04", title: "On-page optimisation", description: "Titles, headings, copy and schema aligned to the query a page is built to answer." },
    { index: "05", title: "Internal linking", description: "A deliberate link structure that moves authority toward the pages that carry revenue." },
    { index: "06", title: "Authority building", description: "Digital PR and earned links, selected for relevance rather than counted by volume." },
    { index: "07", title: "Local SEO", description: "Location pages, Google Business Profile and local signals where geography changes the buying decision." },
    { index: "08", title: "Measurement", description: "Search Console and analytics wired together so rankings, traffic and pipeline can be read in one view." },
  ],
  processHeading: "How an engagement runs",
  process: [
    { index: "01", title: "Audit", description: "A technical, content and authority baseline of where the site actually stands." },
    { index: "02", title: "Map", description: "Queries to intent, intent to pages, pages to the commercial outcome each one serves." },
    { index: "03", title: "Fix", description: "Foundation work first — crawlability, architecture, speed, indexation." },
    { index: "04", title: "Publish", description: "New pages, rewrites and consolidation shipped on a predictable cadence." },
    { index: "05", title: "Compound", description: "Earned links, refreshes, and expansion into the clusters that are working." },
  ],
  related: ["conversion-optimization", "performance-marketing", "social-media"],
  faqs: [
    {
      question: "How long does SEO take to work?",
      answer:
        "It depends on the site's current authority, how competitive the target queries are, and how much technical debt is in the way. What we commit to is the sequence and the visibility: indexation, impressions and ranking movement on target queries are reported long before revenue moves, so progress is observable rather than assumed.",
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer:
        "No — and we would treat any agency that does with suspicion. Results are ranked by an algorithm nobody outside Google controls, against competitors who are also investing. We commit to the work and to reporting honestly on what it produces.",
    },
    {
      question: "Can SEO run alongside paid search?",
      answer:
        "It usually works better that way. Paid search shows which queries convert long before organic ranks for them, and organic reduces what you spend renting queries you could own. We plan both against one set of numbers rather than letting the channels compete for credit.",
    },
    {
      question: "Do you write the content, or do we?",
      answer:
        "Either, and we agree which before the engagement starts. Some teams hold the subject expertise and want briefs to write against; others want the whole thing produced. Both work — what does not work is leaving it undecided.",
    },
    {
      question: "We already have an agency's work in place. Does it get thrown out?",
      answer:
        "It gets audited before anything changes, and some of it is usually worth keeping. Where we recommend consolidating or retiring pages you will get the reasoning and the expected trade-off first, because removing pages that rank is a real risk and should be a decision, not a surprise.",
    },
    {
      question: "How is the work reported?",
      answer:
        "Monthly, against the queries and pages we agreed to target, with the technical and content work completed shown in the same view. A list of rankings is not a report.",
    },
  ],
};

const performanceMarketing: ServicePageContent = {
  slug: "performance-marketing",
  category: "Paid acquisition, measured",
  headline: "Paid media is an experiment system, not a spend line.",
  positioning:
    "Campaigns, creative, landing pages and tracking managed as one loop, so every rupee spent teaches you something you can act on.",
  metaTitle: "Performance Marketing",
  metaDescription:
    "Paid acquisition run as a measurement system — campaign strategy, audience research, creative testing, landing page alignment and conversion tracking by AIOS Labs.",
  serviceType: "Performance marketing",
  problem: {
    eyebrow: "The problem",
    heading: "Most paid accounts are optimised toward the wrong number.",
    body: [
      "Platform dashboards report the conversions they can see and take credit generously. Optimise to that and you scale whatever is easiest to attribute, which is rarely what is actually profitable.",
      "The second failure is structural. Creative is produced in bursts rather than tested in a system, landing pages are inherited from whoever built the site, and tracking is assumed to be correct until someone finally checks it. By then months of decisions rest on numbers that were never true.",
    ],
  },
  approach: {
    eyebrow: "Our approach",
    heading: "Fix the measurement, then buy the media.",
    body: [
      "We start with tracking, because every other decision depends on it: what counts as a conversion, how it is captured, how the platform's reported numbers reconcile with what actually landed in the business. Accounts frequently look different once that is honest.",
      "Campaign structure is then built so results are readable — enough separation to learn from, not so much that nothing gathers data. Audience and creative are treated as the real variables, with a testing cadence rather than a launch.",
      "Landing pages are part of the buy, not somebody else's problem. A click paid for and then sent to a page that argues a different case is the most expensive kind of waste.",
    ],
  },
  deliverablesHeading: "What the work covers",
  deliverables: [
    { index: "01", title: "Campaign strategy", description: "Channel mix, account structure and the thesis each campaign exists to test." },
    { index: "02", title: "Audience research", description: "Who is actually buying, what they are weighing, and where they can be reached economically." },
    { index: "03", title: "Creative testing", description: "A running programme of angles, formats and hooks — structured so results mean something." },
    { index: "04", title: "Landing page alignment", description: "The page a paid click lands on, argued and built to match the promise that earned the click." },
    { index: "05", title: "Budget allocation", description: "Spend moved toward what compounds, with the reasoning shown rather than asserted." },
    { index: "06", title: "Conversion tracking", description: "Events, server-side capture where it matters, and reconciliation against your own records." },
    { index: "07", title: "Optimisation", description: "A weekly loop of read, decide, change — and a written record of why." },
  ],
  processHeading: "How an engagement runs",
  process: [
    { index: "01", title: "Diagnose", description: "Account, tracking and unit economics before any spend changes hands." },
    { index: "02", title: "Instrument", description: "Conversion capture rebuilt so the numbers can be trusted." },
    { index: "03", title: "Structure", description: "Campaigns rebuilt for readability and control." },
    { index: "04", title: "Test", description: "Audience and creative run as experiments on a cadence." },
    { index: "05", title: "Scale", description: "Budget follows what proves out; what does not is cut without ceremony." },
  ],
  related: ["google-ads", "meta-ads", "conversion-optimization"],
  faqs: [
    {
      question: "What ROAS or CAC can we expect?",
      answer:
        "We will not quote one before seeing your margins, your current account and your sales cycle — a number invented to win a pitch is worth nothing to either of us. After the diagnostic we will tell you what the account currently produces, what we think is achievable and what would have to be true for that to happen.",
    },
    {
      question: "What budget does this need?",
      answer:
        "Enough for the platform to exit the learning phase and for creative tests to reach a readable result — below that you are paying for noise. The threshold depends on your conversion value and cycle length, and we would rather tell you the channel is not ready than take a retainer against a budget that cannot learn.",
    },
    {
      question: "Do you build the creative?",
      answer:
        "We build the testing programme and the briefs, and we can produce the creative or work with your team or existing partners. What we insist on is that creative enters as a structured test rather than as a batch of assets with no hypothesis attached.",
    },
    {
      question: "Who owns the ad accounts?",
      answer:
        "You do. We work inside your accounts, your pixels and your billing. If the engagement ends, the account history, the audiences and the learning stay with you — none of it is held hostage.",
    },
    {
      question: "How quickly will we see results?",
      answer:
        "Tracking problems usually surface in the first weeks, and they are often the largest single improvement available. Meaningful optimisation follows the data: campaigns need volume before a decision is anything more than a guess, and we will say so rather than manufacture early wins.",
    },
    {
      question: "How does this differ from your Google Ads and Meta Ads services?",
      answer:
        "Those are single-platform engagements for teams who need depth in one channel. Performance Marketing runs the portfolio — deciding where the next rupee goes across channels, and holding all of them to the same definition of a conversion.",
    },
  ],
};

const googleAds: ServicePageContent = {
  slug: "google-ads",
  category: "Search and intent",
  headline: "Demand you do not have to create.",
  positioning:
    "Search advertising built around what people are already trying to buy — the right queries, the right page, and tracking that proves which is which.",
  metaTitle: "Google Ads Management",
  metaDescription:
    "Google Ads managed around commercial intent — search campaign structure, keyword and negative strategy, ad copy, landing page alignment and conversion tracking by AIOS Labs.",
  serviceType: "Google Ads management",
  problem: {
    eyebrow: "The problem",
    heading: "Search budgets leak long before anyone notices.",
    body: [
      "Broad match and automated targeting will find you traffic. Much of it answers a question adjacent to yours — research, comparison, job seekers, competitors' brand names — and it bills at the same rate as demand that was ready to buy.",
      "The other leak is downstream. Ads promise something specific, the landing page presents something general, and the difference is paid for on every click. Neither problem appears in a dashboard that reports clicks and impressions as achievements.",
    ],
  },
  approach: {
    eyebrow: "Our approach",
    heading: "Buy intent, not traffic.",
    body: [
      "Keyword strategy starts from the commercial question a query implies, not from a volume export. Queries that indicate someone is ready to act are treated differently from queries that indicate someone is still reading, and the negative list is treated as a first-class asset rather than an afterthought.",
      "Ad copy is written to qualify as much as to attract. An ad that is honest about price, scope or fit costs you clicks you did not want.",
      "Then the landing page has to finish the argument the ad started. Where it does not, we say so — sending more paid traffic to a page that cannot convert is the most expensive way to discover it is broken.",
    ],
  },
  deliverablesHeading: "What the work covers",
  deliverables: [
    { index: "01", title: "Search campaigns", description: "Account and campaign structure built so performance is readable and controllable." },
    { index: "02", title: "Intent targeting", description: "Match types, audiences and bidding aligned to how ready a searcher actually is." },
    { index: "03", title: "Keyword & negative strategy", description: "The queries worth buying, and an actively maintained list of the ones that are not." },
    { index: "04", title: "Ad copy", description: "Copy written to attract the right click and discourage the wrong one." },
    { index: "05", title: "Landing page alignment", description: "The destination reviewed and rebuilt against the promise the ad makes." },
    { index: "06", title: "Conversion tracking", description: "Conversion actions and values defined so the platform optimises toward the outcome you care about." },
    { index: "07", title: "Campaign optimisation", description: "Search term review, bid and budget decisions, and testing on a set cadence." },
  ],
  processHeading: "How an engagement runs",
  process: [
    { index: "01", title: "Audit", description: "Account structure, search terms, wasted spend and tracking integrity." },
    { index: "02", title: "Define", description: "What counts as a conversion, and what it is worth." },
    { index: "03", title: "Rebuild", description: "Campaigns, keywords, negatives and copy restructured around intent." },
    { index: "04", title: "Align", description: "Landing pages matched to the queries paying for them." },
    { index: "05", title: "Optimise", description: "A standing review of search terms, bids, budget and creative." },
  ],
  related: ["performance-marketing", "conversion-optimization", "lead-generation"],
  faqs: [
    {
      question: "Should we use Performance Max?",
      answer:
        "Sometimes, and rarely as the whole account. It can find volume that manual structures miss, but it also blends channels and reports less than you need to make decisions. We use it where the data supports it, alongside structures that stay legible.",
    },
    {
      question: "Our cost per click keeps rising. Is that fixable?",
      answer:
        "Partly. Auction prices are set by competitors and are not something anyone can argue down. What is controllable is what you bid on, how relevant the ad and page are, and how much you spend on queries that were never going to convert. That is usually where the real cost sits.",
    },
    {
      question: "Do we need a separate landing page for ads?",
      answer:
        "Often, though not always. If your existing page already answers the exact query and makes the next step obvious, use it. If it is a general page being asked to serve five different intents, a dedicated page will usually pay for itself.",
    },
    {
      question: "How is this different from Performance Marketing?",
      answer:
        "This is a single-platform engagement focused on Google's inventory. Performance Marketing is the portfolio decision across channels. Teams who want depth in search alone start here; teams allocating across Google, Meta and elsewhere are better served by the broader engagement.",
    },
    {
      question: "Can you work with our existing account?",
      answer:
        "Yes, and we prefer to. Account history has value — conversion data, audience signals, what has already been tested. We audit it first and are explicit about what we would keep, restructure or pause, and why.",
    },
  ],
};

const metaAds: ServicePageContent = {
  slug: "meta-ads",
  category: "Creative-led acquisition",
  headline: "On Meta, the creative is the targeting.",
  positioning:
    "Facebook and Instagram campaigns built around a running creative programme, a structure that can learn, and tracking that survives the platform's blind spots.",
  metaTitle: "Meta Ads Management",
  metaDescription:
    "Facebook and Instagram advertising run as a creative testing system — audience strategy, campaign structure, retargeting, lead and conversion campaigns, and tracking by AIOS Labs.",
  serviceType: "Meta advertising management",
  problem: {
    eyebrow: "The problem",
    heading: "Accounts fatigue because creative is produced, not tested.",
    body: [
      "A campaign works, then decays. The instinct is to change audiences, budgets and placements, but the audience did not change — the people seeing it simply saw it too many times, and there is no next angle ready because creative was treated as a delivery, not a pipeline.",
      "Underneath that sits a measurement problem. Meta reports conversions it modelled as well as ones it observed, and iOS changes widened the gap. Accounts optimised against unexamined platform numbers drift steadily away from what the business actually booked.",
    ],
  },
  approach: {
    eyebrow: "Our approach",
    heading: "A creative pipeline, and numbers you can reconcile.",
    body: [
      "Creative runs as a standing programme: a set of angles worth testing, formats to express them, and a cadence that keeps a next thing ready before the current thing decays. Winners are iterated deliberately rather than duplicated and hoped over.",
      "Campaign structure is built to consolidate signal instead of fragmenting it across near-identical audiences. Broad targeting with strong creative usually beats narrow targeting with weak creative, and we will say when that is the case.",
      "Tracking is instrumented for the way Meta actually reports — server-side capture where it earns its keep, and reconciliation against your own records so budget decisions rest on something firmer than the platform marking its own homework.",
    ],
  },
  deliverablesHeading: "What the work covers",
  deliverables: [
    { index: "01", title: "Audience strategy", description: "Prospecting, retargeting and exclusion logic that consolidates signal rather than splitting it." },
    { index: "02", title: "Campaign structure", description: "An account built so results are attributable and budgets can move with confidence." },
    { index: "03", title: "Creative testing", description: "A standing programme of angles, hooks and formats with a hypothesis behind each." },
    { index: "04", title: "Creative iteration", description: "Winners developed into variants and successors before fatigue sets in." },
    { index: "05", title: "Retargeting", description: "Sequenced follow-up for people who engaged but did not act, without pursuing them indefinitely." },
    { index: "06", title: "Lead campaigns", description: "Instant forms and lead flows built for qualification, not raw volume." },
    { index: "07", title: "Conversion campaigns", description: "Purchase and action campaigns aligned to the events that matter downstream." },
    { index: "08", title: "Tracking", description: "Pixel and Conversions API set up and reconciled against your own records." },
  ],
  processHeading: "How an engagement runs",
  process: [
    { index: "01", title: "Audit", description: "Account, creative history, tracking integrity and what fatigue is actually costing." },
    { index: "02", title: "Instrument", description: "Pixel, Conversions API and event definitions rebuilt and verified." },
    { index: "03", title: "Restructure", description: "Campaigns consolidated so learning accumulates instead of scattering." },
    { index: "04", title: "Produce", description: "A creative pipeline stood up, with a testing calendar." },
    { index: "05", title: "Iterate", description: "Read, develop the winners, retire the rest, keep the queue full." },
  ],
  related: ["performance-marketing", "lead-generation", "social-media"],
  faqs: [
    {
      question: "How much creative does this need?",
      answer:
        "More than most teams expect, and the volume is set by spend and audience size rather than by preference. The higher the spend against a given audience, the faster it sees everything you have. We will size the pipeline against your actual budget rather than a generic number.",
    },
    {
      question: "Meta reports more conversions than our own numbers show. Which is right?",
      answer:
        "Yours, for deciding what the business earned. Meta includes modelled conversions and attributes generously within its own window. The point of reconciliation is not to catch the platform out — it is to know the ratio, so you can read platform numbers day to day without being misled by them.",
    },
    {
      question: "Do lead ads produce low-quality leads?",
      answer:
        "They can, because instant forms remove friction for everyone including people with no intent. Qualification has to be designed back in — through the form, the creative that sets expectations, and what happens in the minutes after submission. Handled that way the format works; treated as a volume tap it does not.",
    },
    {
      question: "Can you work with our in-house creative team?",
      answer:
        "Yes. A common arrangement is that we own the testing strategy and briefs while your team produces, since they hold the brand. What matters is that the queue keeps moving and each asset enters with a hypothesis attached.",
    },
    {
      question: "Is Meta still worth it for B2B?",
      answer:
        "It depends on whether your buyer is identifiable there and what a lead is worth to you. It is rarely the first channel we would recommend for a narrow enterprise ICP, and often a strong one for high-volume or founder-led B2B. We would rather tell you it is a poor fit than sell you a retainer on it.",
    },
  ],
};

const leadGeneration: ServicePageContent = {
  slug: "lead-generation",
  category: "Pipeline, made predictable",
  headline: "A pipeline you can forecast, not a list you can buy.",
  positioning:
    "Defining who is worth talking to, reaching them deliberately, and qualifying hard enough that your sales time goes to people who can actually buy.",
  metaTitle: "Lead Generation",
  metaDescription:
    "Predictable pipeline built on ICP definition, lead research, outreach, qualification, capture and CRM alignment — B2B and considered-purchase B2C, from AIOS Labs.",
  serviceType: "Lead generation",
  problem: {
    eyebrow: "The problem",
    heading: "Most lead problems are qualification problems.",
    body: [
      "Teams ask for more leads when the real cost is the ones they already have. Sales time is spent on people who were never going to buy, follow-up drifts, and the pipeline number in the CRM stops meaning anything.",
      "Bought lists and volume campaigns make this worse. They fill the top of the funnel with contacts who match a job title and nothing else, and the resulting conversion rate then gets blamed on the sales team.",
    ],
  },
  approach: {
    eyebrow: "Our approach",
    heading: "Define who is worth reaching before reaching anyone.",
    body: [
      "The work starts with an ICP built from evidence rather than aspiration: who actually closed, who renewed, who was profitable to serve, and which of those are reachable at reasonable cost. That definition then constrains everything downstream.",
      "Research and outreach are built around a reason to make contact — a change, a signal, a problem you can name specifically. Volume without a reason is what makes outreach feel like spam and perform like it.",
      "Qualification is designed in, not bolted on. What gets captured, what disqualifies, what routes to sales immediately and what belongs in nurture are decided before the first campaign runs, so the number in the CRM stays honest.",
    ],
  },
  deliverablesHeading: "What the work covers",
  deliverables: [
    { index: "01", title: "ICP definition", description: "The profile worth pursuing, built from who actually closed and stayed rather than who you hoped for." },
    { index: "02", title: "Lead research", description: "Sourcing and enrichment against that profile, with the signals that make a contact timely." },
    { index: "03", title: "Prospecting", description: "Target lists built and maintained, not bought once and worked to exhaustion." },
    { index: "04", title: "Cold outreach", description: "Sequenced email and channel outreach with a specific reason for contact." },
    { index: "05", title: "Qualification", description: "The criteria and the questions that separate a real opportunity from a polite reply." },
    { index: "06", title: "Lead capture", description: "Forms, flows and landing pages built to capture what qualification actually needs." },
    { index: "07", title: "CRM & process alignment", description: "Stages, routing and handoffs set up so nothing sits waiting for someone to remember it." },
    { index: "08", title: "Reporting", description: "Pipeline reported by stage and source, so you can see where it stalls." },
  ],
  processHeading: "How an engagement runs",
  process: [
    { index: "01", title: "Define", description: "ICP, qualification criteria and what a lead is actually worth." },
    { index: "02", title: "Build", description: "Lists, sequences, capture points and CRM structure." },
    { index: "03", title: "Reach", description: "Outreach and campaigns live, with a reason behind each contact." },
    { index: "04", title: "Qualify", description: "Filtering and routing so sales time follows the best opportunities." },
    { index: "05", title: "Refine", description: "Feed closed-won and closed-lost back into the profile and the messaging." },
  ],
  related: ["performance-marketing", "marketing-automation", "conversion-optimization"],
  faqs: [
    {
      question: "How many leads will we get each month?",
      answer:
        "We will not put a number on it before understanding your market size, price point and cycle. A guaranteed volume is easy to hit and easy to hit badly — the way to do it is to loosen qualification, which moves the problem to your sales team. We commit to the process and report on qualified pipeline, not raw counts.",
    },
    {
      question: "Is this B2B only?",
      answer:
        "No. It fits any considered purchase where a human conversation moves the decision — B2B services and software most obviously, but also high-value B2C such as property, education, healthcare and finance. It is a poor fit for low-value impulse purchases, where paid acquisition and CRO do more.",
    },
    {
      question: "Do you do cold email, and is it compliant?",
      answer:
        "Yes, within the rules of the market being contacted. That means honest sender identity, a real opt-out, relevant targeting and volumes that do not damage your sending domain. We will not run anything that puts your primary domain's deliverability at risk.",
    },
    {
      question: "Do you need access to our CRM?",
      answer:
        "For the routing and reporting work, yes — pipeline that is not in your system is not pipeline. If you do not have one yet, we will help you pick something proportionate rather than sell you a platform migration you do not need.",
    },
    {
      question: "Who follows up with the leads?",
      answer:
        "Your team closes; we make sure the right things reach them in a state worth acting on, and that nothing goes cold in the gap. Where follow-up is failing for capacity reasons rather than lead-quality reasons, that is usually an automation problem and we will say so.",
    },
  ],
};

const socialMedia: ServicePageContent = {
  slug: "social-media",
  category: "Attention and trust",
  headline: "Attention is the cheapest thing you will ever earn — and the hardest to keep.",
  positioning:
    "Organic social run as a demand asset: a defined point of view, a content system that can sustain it, and analysis that shows what is actually landing.",
  metaTitle: "Social Media",
  metaDescription:
    "Organic social built as a demand asset — content strategy, planning, community engagement, brand consistency and performance analysis from AIOS Labs.",
  serviceType: "Social media management",
  problem: {
    eyebrow: "The problem",
    heading: "Most brand social is production without a position.",
    body: [
      "A calendar gets filled, posts go out, engagement is reported, and none of it changes whether anyone chooses you. The output is real; the position it argues is not.",
      "It usually fails for a specific reason: nobody decided what the brand actually claims, who it is arguing against, or what a reader should believe afterwards. Without that, a content calendar becomes a scheduling exercise and the results read accordingly.",
    ],
  },
  approach: {
    eyebrow: "Our approach",
    heading: "Decide the position, then build the system that can sustain it.",
    body: [
      "We start with the argument: what this brand knows that its market does not yet agree with, and which audience is worth convincing. That is the difference between content with a reason to exist and content that fills a slot.",
      "The system comes next — formats, pillars and a cadence your team can genuinely sustain. An ambitious plan that collapses in month two is worse than a modest one that runs for a year, and we would rather agree to the second.",
      "Engagement is treated as part of the work rather than a courtesy. Replies, conversations and the accounts you choose to be visible around shape reach as much as what you publish.",
    ],
  },
  deliverablesHeading: "What the work covers",
  deliverables: [
    { index: "01", title: "Content strategy", description: "The position, the pillars and the audience each is meant to reach." },
    { index: "02", title: "Content planning", description: "A calendar built around formats and a cadence your team can actually hold." },
    { index: "03", title: "Organic social", description: "Production and publishing across the channels where your buyers actually are." },
    { index: "04", title: "Audience engagement", description: "Conversation, replies and community — visibility earned rather than only broadcast." },
    { index: "05", title: "Brand consistency", description: "Voice, visual language and message discipline held across channels and over time." },
    { index: "06", title: "Performance analysis", description: "What landed, what did not, and what that says about the position — beyond a follower count." },
  ],
  processHeading: "How an engagement runs",
  process: [
    { index: "01", title: "Position", description: "The argument the brand is making, and to whom." },
    { index: "02", title: "Plan", description: "Pillars, formats and a cadence that can be sustained." },
    { index: "03", title: "Produce", description: "Content shipped consistently rather than in bursts." },
    { index: "04", title: "Engage", description: "Conversation and community, not only publishing." },
    { index: "05", title: "Read", description: "Analysis that informs the next quarter's position, not just the next post." },
  ],
  related: ["meta-ads", "seo", "performance-marketing"],
  faqs: [
    {
      question: "How do you measure organic social when it does not attribute cleanly?",
      answer:
        "Honestly — which means not pretending a last-click model can see it. We track what the channel can evidence (reach into the right audience, engagement quality, share of conversation, branded search and direct traffic movement) and we are clear about which parts are directional rather than causal.",
    },
    {
      question: "Which platforms should we be on?",
      answer:
        "Fewer than you are probably on now. The right answer follows your buyer and the format your team can sustain, and being genuinely good on one channel beats being present on five. We will recommend leaving a platform if it is not earning its keep.",
    },
    {
      question: "Do you handle content production or only strategy?",
      answer:
        "Both, and the split is agreed up front. Some brands hold the expertise and only need direction and a system; others want production run end to end. What does not work is a strategy handed over with no capacity to execute it.",
    },
    {
      question: "How long before organic social does anything?",
      answer:
        "Longer than paid and shorter than SEO, but the honest answer is that it depends on whether you have something to say. Brands with a genuine point of view build an audience meaningfully faster than brands still deciding what they think.",
    },
    {
      question: "Is this just Instagram posts?",
      answer:
        "No. Instagram may be part of it if that is where your buyers are, but the work is the position, the system and the analysis behind it. If you need someone to fill a grid to a template, we are not the right fit.",
    },
  ],
};

const conversionOptimization: ServicePageContent = {
  slug: "conversion-optimization",
  category: "Earning more from what you have",
  headline: "The cheapest growth is the traffic already arriving.",
  positioning:
    "Finding where intent is lost between the click and the conversion, and testing changes properly enough to know which ones worked.",
  metaTitle: "Conversion Rate Optimization",
  metaDescription:
    "Conversion optimization grounded in evidence — landing page and funnel analysis, UX friction, messaging, CTA testing and a disciplined experiment method from AIOS Labs.",
  serviceType: "Conversion rate optimisation",
  problem: {
    eyebrow: "The problem",
    heading: "Acquisition gets the budget; the leak gets the blame.",
    body: [
      "When numbers are short, the reflex is to buy more traffic. But if the page loses most of the intent that reaches it, more traffic buys more of the same loss at a higher price.",
      "The other failure is method. Changes get made in batches, results are read a week later, and the team convinces itself something worked. Without enough traffic behind a test and a decision rule set in advance, that is not evidence — it is a story told after the fact.",
    ],
  },
  approach: {
    eyebrow: "Our approach",
    heading: "Find the friction, then test properly enough to believe the answer.",
    body: [
      "Analysis comes before opinion. Funnel data shows where people leave; session behaviour and form analytics show what they were struggling with; the page itself usually shows a message that does not match what brought them there.",
      "Hypotheses are prioritised by expected impact and the traffic available to prove them. Small sites cannot run the same programme as high-volume ones, and pretending otherwise produces confident conclusions from noise.",
      "Tests are designed before they run: what changes, what we expect, what would disprove it, how long it runs. We report what the data supports, including when a test we believed in did nothing.",
    ],
  },
  deliverablesHeading: "What the work covers",
  deliverables: [
    { index: "01", title: "Landing page analysis", description: "A page-level read of message match, clarity and the first objection a visitor hits." },
    { index: "02", title: "Funnel analysis", description: "Where intent is lost between arrival and conversion, quantified by step." },
    { index: "03", title: "UX friction", description: "The forms, flows and interactions that quietly cost you completions." },
    { index: "04", title: "Messaging", description: "The argument a page makes, tested against what the visitor actually came to resolve." },
    { index: "05", title: "CTA optimisation", description: "What the next step is, how it is framed, and what it commits someone to." },
    { index: "06", title: "A/B testing", description: "Experiments designed and powered properly, with decision rules set before they run." },
    { index: "07", title: "Conversion tracking", description: "Instrumentation that measures the actions worth optimising toward." },
  ],
  processHeading: "How an engagement runs",
  process: [
    { index: "01", title: "Measure", description: "Instrumentation checked and the funnel quantified before anything is changed." },
    { index: "02", title: "Diagnose", description: "Where intent is lost, and the most plausible reasons why." },
    { index: "03", title: "Prioritise", description: "Hypotheses ranked by expected impact against the traffic available to prove them." },
    { index: "04", title: "Test", description: "Experiments run to a pre-agreed rule rather than stopped when they look good." },
    { index: "05", title: "Implement", description: "Winners shipped properly; losers documented so they are not retried by accident." },
  ],
  related: ["performance-marketing", "seo", "google-ads"],
  faqs: [
    {
      question: "How much of a lift can we expect?",
      answer:
        "We will not quote one. Anyone who does before seeing your funnel is quoting an average from other people's businesses. What we will tell you after the diagnostic is where the loss currently is, how large it is, and which of it we think is addressable.",
    },
    {
      question: "Do we have enough traffic for A/B testing?",
      answer:
        "Possibly not, and that is worth knowing early. Below a certain volume, split testing produces confident-looking results that are mostly noise. For lower-traffic sites we work through qualitative analysis, sequential changes and best-practice fixes instead, and we will tell you which regime you are in.",
    },
    {
      question: "Will you redesign our site?",
      answer:
        "Rarely, and never as an opening move. A full redesign changes everything at once, which means when the numbers move nobody knows what caused it. We would rather find and fix the specific points where intent is being lost.",
    },
    {
      question: "Who implements the changes?",
      answer:
        "Either your team or ours, depending on your stack and appetite. What matters is that winning tests actually ship — an experiment programme that produces findings nobody implements is an expensive research project.",
    },
    {
      question: "How does this relate to our paid campaigns?",
      answer:
        "Directly. Improving the page raises the return on every campaign pointing at it, which is why we usually recommend running CRO alongside paid rather than after it. The same conversion tracking serves both.",
    },
  ],
};

const marketingAutomation: ServicePageContent = {
  slug: "marketing-automation",
  category: "Marketing operations",
  headline: "The follow-up should not depend on anyone remembering.",
  positioning:
    "Routing, follow-up, integrations and reporting built as systems, so the work that has to happen every time happens every time.",
  metaTitle: "Marketing Automation",
  metaDescription:
    "Marketing operations built as systems — lead routing, CRM workflows, follow-up sequences, integrations and reporting automation from AIOS Labs.",
  serviceType: "Marketing automation",
  problem: {
    eyebrow: "The problem",
    heading: "Growth usually breaks at the handoffs.",
    body: [
      "A lead arrives and waits because nobody was notified. A record exists in three systems in three states. A monthly report takes two days to assemble and is out of date by the time anyone reads it.",
      "None of this looks like a marketing problem, so it rarely gets budget. It is simply absorbed as effort — until the volume rises and the manual work that held it together stops scaling.",
    ],
  },
  approach: {
    eyebrow: "Our approach",
    heading: "Map the process first. Automate only what should exist.",
    body: [
      "We map what actually happens today, including the informal steps people perform without noticing. Automating a broken process just makes it fail faster and more consistently.",
      "Then we remove what should not exist, simplify what should, and automate what remains. The goal is fewer moving parts, not more integrations — most stacks are already carrying tools that overlap and nobody has decided between them.",
      "Everything built gets documented and handed over. A system only your agency understands is a dependency you did not intend to buy.",
    ],
  },
  deliverablesHeading: "What the work covers",
  deliverables: [
    { index: "01", title: "Lead routing", description: "Assignment, escalation and alerting so nothing waits on somebody noticing." },
    { index: "02", title: "CRM workflows", description: "Stages, fields and rules that reflect how your team actually sells." },
    { index: "03", title: "Follow-up automation", description: "Sequenced follow-up that runs on time, with clear rules for when a human takes over." },
    { index: "04", title: "Marketing workflows", description: "Recurring campaign, list and lifecycle operations turned into repeatable processes." },
    { index: "05", title: "Integrations", description: "Systems connected so a record is created once and stays consistent." },
    { index: "06", title: "Reporting automation", description: "Dashboards that assemble themselves, so reporting stops costing days." },
    { index: "07", title: "Documentation & handover", description: "Written, owned by you, and legible to whoever inherits it." },
  ],
  processHeading: "How an engagement runs",
  process: [
    { index: "01", title: "Map", description: "The real process, including the manual steps nobody documented." },
    { index: "02", title: "Simplify", description: "Remove and consolidate before automating anything." },
    { index: "03", title: "Build", description: "Workflows, routing and integrations implemented in your stack." },
    { index: "04", title: "Verify", description: "Tested against real cases, including the ones that usually break." },
    { index: "05", title: "Hand over", description: "Documented and transferred, so the system is yours to run." },
  ],
  related: ["lead-generation", "conversion-optimization", "performance-marketing"],
  faqs: [
    {
      question: "Which platforms do you work with?",
      answer:
        "We work in the stack you already have wherever that is reasonable, since migrations are expensive and rarely the actual problem. Where a tool genuinely cannot do the job we will say so and explain the trade-off, but replacing your CRM is a last resort rather than an opening recommendation.",
    },
    {
      question: "Is this AI-powered?",
      answer:
        "Only where it earns its place, and we will tell you exactly where. Most of the value in marketing operations comes from well-designed rules, clean data and removing steps that should not exist. We would rather build something you can reason about than attach a label to it.",
    },
    {
      question: "Will this replace people on our team?",
      answer:
        "That is not the aim and it is rarely the outcome. What changes is what those people spend the day doing — chasing records, rebuilding reports and re-keying data is not the work you hired them for.",
    },
    {
      question: "What happens if we stop working with you?",
      answer:
        "You keep everything: it is built in your systems, under your accounts, and documented well enough for someone else to maintain. If a system only we can operate, we have built it wrong.",
    },
    {
      question: "Do we need this if we are still small?",
      answer:
        "Often not yet, and we will say so. Below a certain volume manual handling is faster and more flexible than any workflow. The right time is when the same task starts repeating often enough that people forget it, or when a lead has been lost because nobody was told.",
    },
  ],
};

export const servicePages: readonly ServicePageContent[] = [
  seo,
  performanceMarketing,
  googleAds,
  metaAds,
  leadGeneration,
  socialMedia,
  conversionOptimization,
  marketingAutomation,
];

export function getServicePage(slug: string): ServicePageContent | undefined {
  return servicePages.find((page) => page.slug === slug);
}
