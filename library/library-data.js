/* ============================================================================
   HARWIN AI LIBRARY: DATA FILE
   This is the only file you edit to add, change or remove entries.

   TO ADD A PROMPT: copy the template below into the `prompts` list, fill it in,
   save the file and refresh the page.

     {
       title: "Short name of the prompt",
       department: "Sales & Marketing",        // must match one in DEPARTMENTS, or "Everyone"
       type: "Prompt",                         // always "Prompt" (agent recipes are not published here)
       tool: "Any approved tool",              // e.g. "ChatGPT", "Claude", "Copilot", "Cowork"
       purpose: "One line on what it is for.",
       prompt: `The prompt text, with [PLACEHOLDERS] in square brackets.`,
       why: "Optional: why it works.",
       setup: ["Optional step 1", "Optional step 2"],
       saves: "Optional: time saved",
       note: "Optional: a caution shown in amber",
       source: "Issue #7, Nov 2026"
     },

   TO ADD A USE CASE: copy this into the `useCases` list.

     {
       title: "Short name",
       department: "Operations / Supply Chain",
       status: "Live",                          // "Live", "In use" or "Coming soon"
       tool: "Automation",
       summary: "What it does, in two or three sentences.",
       before: "Optional: how long it took before",
       after: "Optional: how long it takes now",
       prompt: `Optional: the prompt behind it`,
       source: "Issue #7, Nov 2026"
     },

   Rules: keep the commas between entries, use backticks ( ` ) around prompt text,
   and never include customer names, pricing or personal details.
   ============================================================================ */

window.HARWIN_LIBRARY = {

  updated: "1 November 2026",
  contact: "nsingh@harwin.com",

  departments: [
    "Everyone",
    "Sales & Marketing",
    "Engineering / R&D",
    "Finance / Accounts",
    "Operations / Supply Chain",
    "HR / People",
    "Data & Analytics",
    "Quality / Compliance",
    "Customer Service"
  ],

  /* ------------------------------------------------------------------------
     PROMPTS
     ------------------------------------------------------------------------ */
  prompts: [

    {
      title: "The Universal Summariser",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Paste in any long text and get a clean, structured summary in seconds.",
      prompt: `You are a professional summariser. I'm going to paste a long document below. Please:

1. Give me a 2-sentence summary of the main point
2. List the 5 most important takeaways as bullet points
3. Flag anything that requires action from me

Here is the document:
[PASTE YOUR TEXT HERE]`,
      why: "It gives the AI a role so it knows what standard to aim for, and numbers the requests so you get structured output instead of a wall of text.",
      source: "Issue #1"
    },

    {
      title: "Ask for the decisions, not just a summary",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A summary that pulls out deadlines and flags what needs your decision.",
      prompt: `Summarise this [DOCUMENT TYPE] in 5 bullet points for a [YOUR ROLE] at an electronic connector manufacturer. Then list any dates or deadlines it mentions, and flag anything that needs a decision from me.`,
      why: "A plain summary is useful. One that pulls out deadlines and decisions is far more useful.",
      source: "Issue #6, Oct 2026"
    },

    {
      title: "Summarise a meeting",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Paste the transcript or notes, then use this.",
      prompt: `Pull out the decisions made, the actions with owners and deadlines, and the open questions for the next meeting. Keep it to one page.`,
      why: "Three explicit asks plus a length cap. No waffle, no missed actions.",
      source: "Issue #4, Jul 2026"
    },

    {
      title: "Make this email shorter",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Paste your draft, then use this.",
      prompt: `Cut this to half the length. Keep the tone polite but direct. Don't drop any of the specific facts, dates or numbers.`,
      why: "It names what to keep, not just what to cut.",
      source: "Issue #4, Jul 2026"
    },

    {
      title: "Explain it like I'm a smart non-specialist",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Paste the clause, standard or regulation, then use this.",
      prompt: `Explain this to me like I'm a smart non-lawyer. What does it actually require us to do, in plain English? What's the risk if we ignore it?`,
      why: "It asks for action and risk, not just a paraphrase.",
      note: "Still verify with legal for anything that matters.",
      source: "Issue #4, Jul 2026"
    },

    {
      title: "Pressure-test my plan",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Describe your plan, then use this.",
      prompt: `Argue for this plan in three lines. Now argue against it in three lines. What's the strongest objection a sceptical colleague would raise? What am I missing?`,
      why: "It forces a balanced view before you commit.",
      source: "Issue #4, Jul 2026"
    },

    {
      title: "Turn messy notes into a report",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Paste your scrappy notes, then use this.",
      prompt: `Turn this into a one-page update with: 1) what we did, 2) what we found, 3) what we recommend, 4) what we need from the reader. Keep the same facts — don't invent anything.`,
      why: "Structure plus a \"don't invent\" guardrail in one prompt.",
      source: "Issue #4, Jul 2026"
    },

    {
      title: "Compare two options",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Paste both options, then use this.",
      prompt: `Compare these two. Three points for each: what's stronger, what's weaker, what would tip the decision. End with a recommendation and the one fact that would change it.`,
      why: "It forces a recommendation, not a fence-sit.",
      source: "Issue #4, Jul 2026"
    },

    {
      title: "Find the holes",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Paste a spec, proposal or brief, then use this.",
      prompt: `Read this as if you're the person who has to deliver it. What questions would you ask before starting? What's unclear, missing, or could be interpreted two ways?`,
      why: "It catches gaps before they cost you a week.",
      source: "Issue #4, Jul 2026"
    },

    {
      title: "Source-check before you act",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Use after any AI answer that matters.",
      prompt: `Where did this come from? Quote the exact passage. If you don't have a source, say so — don't guess.`,
      why: "The single best defence against AI making things up.",
      source: "Issue #4, Jul 2026"
    },

    {
      title: "Pre-call research",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Five minutes before a supplier or customer call, get a briefing.",
      prompt: `Brief me on [COMPANY NAME]'s recent news, financial position, and what their competitors are doing.`,
      why: "Read the briefing, walk in prepared. No scheduling needed.",
      source: "Issue #3, Jun 2026"
    },

    {
      title: "Agent kill switch",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A line to add to every agent prompt so schedules don't fail silently.",
      prompt: `If you receive output >5MB, hit an error condition, or process more than 50 items in a run — stop and notify [YOUR NAME].`,
      why: "Otherwise schedules fail silently for weeks.",
      source: "Issue #3, Jun 2026"
    },

    {
      title: "Competitor research with Agent mode",
      department: "Sales & Marketing",
      type: "Prompt",
      tool: "ChatGPT",
      purpose: "Have ChatGPT Agent visit competitor sites and build a comparison table.",
      prompt: `Use Agent to visit the websites of [COMPETITOR 1], [COMPETITOR 2], and [COMPETITOR 3]. Find their [PRODUCT TYPE e.g. 2mm-pitch board-to-board connectors] and create a comparison table covering: pin count options, current rating, operating temperature range, mating cycles, and pricing if publicly listed.`,
      setup: [
        "In any ChatGPT conversation, look for the Agent option in the model picker.",
        "Select it, then describe what you want done as if you were briefing a colleague.",
        "Be specific about the websites to visit and the information to collect."
      ],
      source: "Issue #1"
    },

    {
      title: "Follow-Up Email After a Meeting or Trade Show",
      department: "Sales & Marketing",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A warm, short follow-up to a prospect you met.",
      prompt: `Act as a professional sales representative for Harwin, a UK-based manufacturer of high-reliability connectors and PCB hardware. Write a friendly follow-up email to a potential customer I met at [TRADE SHOW OR MEETING NAME]. They were interested in our [PRODUCT FAMILY e.g. Gecko, Datamate, Kona] connectors for their [APPLICATION e.g. defence avionics, medical devices, satellite systems]. Keep it under 150 words, professional but warm, and include a clear call to action to book a 15-minute call.`,
      why: "Giving your company name, product names and the customer's industry means the email sounds like it came from someone at Harwin, not a generic template.",
      source: "Issue #1"
    },

    {
      title: "Competitor Product Comparison Table",
      department: "Sales & Marketing",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A structured side-by-side comparison from public specs.",
      prompt: `You are a market research analyst for a precision connector company. Create a comparison table with these columns: Feature, Harwin [PRODUCT FAMILY e.g. Gecko], and [COMPETITOR PRODUCT]. Include rows for: contact density, operating temperature range, vibration resistance, weight, and typical application. Use publicly available specification data only. Add a row at the bottom for "Key differentiator" summarising each product's main advantage.`,
      why: "Asking for a specific table format with named columns and rows gives you structured, comparable data instead of a wall of text.",
      note: "Check every figure against the datasheets before using it.",
      source: "Issue #1"
    },

    {
      title: "LinkedIn Post About a Product Launch",
      department: "Sales & Marketing",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A short, engagement-ready launch post.",
      prompt: `Write a short LinkedIn post (under 100 words) announcing that Harwin has launched [NEW PRODUCT OR UPDATE]. The tone should be professional but enthusiastic. Mention the key benefit for [TARGET MARKET e.g. aerospace engineers, defence OEMs, medical device designers]. End with a question to encourage engagement. Include 3-4 relevant hashtags.`,
      why: "A word limit stops the AI rambling. Asking it to end with a question gives you engagement-ready content.",
      source: "Issue #1"
    },

    {
      title: "Design Review Checklist",
      department: "Engineering / R&D",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A printable checklist for a design review.",
      prompt: `You are an experienced electronics hardware engineer. Create a design review checklist for a [TYPE OF PRODUCT e.g. 2mm-pitch PCB connector, cable assembly] intended for [APPLICATION e.g. space-grade, military ground vehicle, medical implant]. Include sections for: mechanical fit, electrical performance, environmental testing, material compliance, and manufacturability. Format as a numbered checklist I can print out.`,
      why: "The role makes the AI draw on technical knowledge rather than giving a generic list.",
      source: "Issue #1"
    },

    {
      title: "Explain a Specification in Plain English",
      department: "Engineering / R&D",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Bridge Engineering and Sales: make a spec understandable.",
      prompt: `Explain the following technical specification in plain English that a non-engineer (e.g. a sales representative or product manager) could understand. Use an everyday analogy if possible. Keep it to 3-4 sentences.

[PASTE THE SPECIFICATION TEXT HERE]`,
      why: "Telling the AI who the audience is controls the level of detail.",
      note: "Customer specifications stay out of all AI tools unless IT has approved it.",
      source: "Issue #1"
    },

    {
      title: "Failure Mode Brainstorm",
      department: "Engineering / R&D",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Ten failure modes with mitigations, ready for an FMEA worksheet.",
      prompt: `Act as a reliability engineer. I'm designing a [CONNECTOR TYPE] for use in [ENVIRONMENT e.g. high-vibration aerospace, extreme temperature space]. List 10 potential failure modes I should consider, organised by category (mechanical, electrical, environmental, material). For each, suggest one mitigation approach. Format as a table with columns: Category, Failure Mode, Mitigation.`,
      why: "A specific table format with named columns means the output goes straight into an FMEA worksheet.",
      source: "Issue #1"
    },

    {
      title: "Budget Variance Narrative",
      department: "Finance / Accounts",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A short board-pack paragraph explaining a variance.",
      prompt: `You are a management accountant. Write a short paragraph (4-5 sentences) explaining the following budget variance for a board pack:

Budget: £[AMOUNT]
Actual: £[AMOUNT]
Variance: £[AMOUNT] ([PERCENTAGE]%)
Main reason: [BRIEF REASON e.g. raw material price increase, FX movement, unplanned overtime]

Keep the tone factual, professional, and jargon-free.`,
      why: "Providing specific data points upfront means the AI writes the narrative around your actual numbers instead of guessing.",
      source: "Issue #1"
    },

    {
      title: "Polite Invoice Chase Email",
      department: "Finance / Accounts",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A polite but firm chaser for an overdue invoice.",
      prompt: `Write a polite but firm email chasing an overdue invoice. Details:
- Invoice number: [NUMBER]
- Amount: £[AMOUNT]
- Due date: [DATE]
- Customer: [COMPANY NAME]
Keep it under 100 words. Maintain a positive business relationship tone. Include the next step if payment isn't received within 7 days.`,
      why: "Feeding details as bullet points is one of the easiest ways to give the AI structured information.",
      note: "Keep the placeholders in the prompt and fill in the real customer details yourself afterwards.",
      source: "Issue #1"
    },

    {
      title: "Explain a Financial Term Simply",
      department: "Finance / Accounts",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A plain explanation for a colleague outside finance.",
      prompt: `Explain [FINANCIAL TERM e.g. EBITDA, working capital, gross margin] in 2-3 sentences as if you're explaining it to a colleague who doesn't work in finance. Use a simple real-world analogy if possible.`,
      why: "As simple as prompts get: a direct question with a clear constraint. A good first prompt to try.",
      source: "Issue #1"
    },

    {
      title: "Supplier Delay Notification",
      department: "Operations / Supply Chain",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A firm, professional email about a late delivery.",
      prompt: `Act as a procurement professional at Harwin, a precision electronics manufacturer. Write a professional email to [SUPPLIER NAME] about a late delivery. Our PO [PO NUMBER] was due on [DATE] and we need the parts for [REASON e.g. a customer order shipping on 10 April]. Request an updated delivery date and ask them to confirm by [DEADLINE]. Tone: firm but maintaining the business relationship.`,
      why: "Specifying the tone is one of the most powerful levers in any prompt.",
      source: "Issue #1"
    },

    {
      title: "Process Improvement Brainstorm",
      department: "Operations / Supply Chain",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Five improvements, rated by effort and impact.",
      prompt: `You are a lean manufacturing consultant. Suggest 5 practical improvements for the following process at an electronics connector manufacturing facility:

[DESCRIBE YOUR CURRENT PROCESS IN 2-3 SENTENCES]

For each suggestion, rate the effort as Low/Medium/High and estimate the potential impact as Low/Medium/High. Format as a table with columns: Suggestion, Effort, Impact.`,
      why: "An effort and impact rating turns a brainstorm into a prioritised action list you can take straight to your manager.",
      source: "Issue #1"
    },

    {
      title: "Monthly Production Summary",
      department: "Operations / Supply Chain",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Turn production notes into a stand-up-ready summary.",
      prompt: `I'm going to paste my production notes from this month. Please organise them into a clean summary with these sections: Completed, In Progress, Delays/Issues, Actions for Next Month. Use bullet points and keep it concise enough for a Monday morning stand-up.

[PASTE YOUR NOTES HERE]`,
      why: "Defining section headings upfront means the AI organises messy notes into a presentation-ready format.",
      source: "Issue #1"
    },

    {
      title: "Job Description First Draft",
      department: "HR / People",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A structured first draft of a job description.",
      prompt: `Act as an HR professional at Harwin, a UK-based electronics manufacturer with around 300 employees. Write a job description for a [JOB TITLE] in the [DEPARTMENT] team. Include: a short company intro (2 sentences), key responsibilities (5-6 bullet points), essential requirements, desirable skills, and what we offer. Use welcoming, inclusive language throughout.`,
      why: "Listing the exact sections you want acts like a template.",
      source: "Issue #1"
    },

    {
      title: "Interview Questions Generator",
      department: "HR / People",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Eight interview questions with notes on good answers.",
      prompt: `Create 8 interview questions for a [JOB TITLE] role at a precision electronics manufacturer. Include a mix of: 3 competency-based questions, 3 technical/role-specific questions, and 2 culture-fit questions. For each question, add a brief note on what a good answer looks like.`,
      why: "Asking for a mix with specific numbers (3 + 3 + 2) ensures variety.",
      source: "Issue #1"
    },

    {
      title: "Simplify a Policy Document",
      department: "HR / People",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Rewrite a policy section in plain, friendly English.",
      prompt: `Rewrite the following company policy section in plain, friendly English that any employee could understand. Keep the meaning exactly the same but remove legal jargon. Add a "Key Takeaway" line at the end summarising it in one sentence.

[PASTE POLICY TEXT HERE]`,
      why: "\"Keep the meaning exactly the same\" tells the AI to simplify the language without changing what the policy says.",
      source: "Issue #1"
    },

    {
      title: "Excel Formula Explainer",
      department: "Data & Analytics",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Understand a complex formula step by step.",
      prompt: `Explain what this Excel formula does in plain English, step by step. Assume I know the basics of Excel but not advanced functions. Then suggest a simpler alternative if one exists:

[PASTE YOUR FORMULA HERE]`,
      why: "The simplest prompts often deliver the most value.",
      source: "Issue #1"
    },

    {
      title: "SQL Query from Plain English",
      department: "Data & Analytics",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A commented SQL Server query from a plain description.",
      prompt: `You are a SQL Server database analyst. I have a table called [TABLE NAME] with these columns: [LIST YOUR COLUMNS e.g. order_id, customer_name, order_date, product_code, quantity, total_value].

Write a SQL query that [DESCRIBE WHAT YOU NEED e.g. "shows total sales by customer for the last 90 days, sorted highest to lowest"]. Add comments explaining each part of the query so I can learn from it.`,
      why: "Listing your actual column names means the query can be run straight away. The comments turn it into a learning tool.",
      note: "Share column names only, never the data itself.",
      source: "Issue #1"
    },

    {
      title: "Dashboard Description for Stakeholders",
      department: "Data & Analytics",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A short description to sit at the top of a dashboard.",
      prompt: `I've built a Power BI dashboard that shows [DESCRIBE WHAT IT SHOWS e.g. monthly bookings and billings by region]. Write a short description (3-4 sentences) I can put at the top of the dashboard explaining: what it shows, who it's for, and how often it updates. Write for a business audience, not a technical one.`,
      why: "Specifying the audience controls the language level.",
      source: "Issue #1"
    },

    {
      title: "Non-Conformance Report Summary",
      department: "Quality / Compliance",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A concise NCR summary in your QMS format.",
      prompt: `Act as a quality engineer at an electronics connector manufacturer. Write a concise non-conformance report summary using these details:

- NCR Number: [NUMBER]
- Product: [PART NUMBER AND DESCRIPTION]
- Issue found: [DESCRIBE THE DEFECT e.g. plating thickness below minimum specification]
- Quantity affected: [NUMBER] out of [BATCH SIZE]
- Stage detected: [e.g. incoming inspection, in-process, final test]

Include sections for: Description, Root Cause (preliminary), Containment Action, and Recommended Corrective Action. Keep it factual and under 200 words.`,
      why: "Structured data as bullet points plus named sections means the output matches your quality management system format.",
      source: "Issue #1"
    },

    {
      title: "Audit Preparation Questions",
      department: "Quality / Compliance",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Ten likely auditor questions, with the evidence to have ready.",
      prompt: `You are an AS9100D/EN9100 auditor. Generate a list of 10 questions an external auditor is likely to ask during an audit of the [DEPARTMENT/PROCESS e.g. production floor, goods-in inspection, document control] at an aerospace connector manufacturer. For each question, suggest a one-line answer or evidence I should have ready. Format as a numbered list.`,
      why: "Asking the AI to play the auditor gives you questions from the other side of the table.",
      source: "Issue #1"
    },

    {
      title: "Process Document Simplifier",
      department: "Quality / Compliance",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Rewrite a process so a new starter could follow it.",
      prompt: `I'm going to paste a process document. Please rewrite it in simpler language so a new starter could follow it. Keep all the steps but make the instructions clearer. Use numbered steps. Flag any steps that seem ambiguous with a "⚠️ Clarification needed" note.

[PASTE YOUR PROCESS DOCUMENT HERE]`,
      why: "\"Flag any steps that seem ambiguous\" turns the AI into a document reviewer as well as a rewriter.",
      source: "Issue #1"
    },

    {
      title: "Customer Complaint Response",
      department: "Customer Service",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A professional, empathetic reply in four parts.",
      prompt: `Act as a customer service representative at Harwin, a precision connector manufacturer. A customer has contacted us because [DESCRIBE ISSUE e.g. their order arrived late, they received the wrong part, items were damaged in transit]. Write a professional, empathetic response that:
1. Acknowledges the problem
2. Apologises sincerely
3. Explains what we're doing to fix it
4. Gives a clear next step with a timeline
Keep it under 120 words. Tone: empathetic and solution-focused.`,
      why: "The four-part numbered structure follows best-practice complaint handling.",
      source: "Issue #1"
    },

    {
      title: "FAQ Answer Drafter",
      department: "Customer Service",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "A clear, friendly FAQ answer you complete from the datasheets.",
      prompt: `Write a clear, friendly FAQ answer for the question: "[CUSTOMER QUESTION e.g. What is the lead time for custom Datamate connectors?]". Keep it under 80 words. End with a call to action like "Contact our sales team for a detailed quote at sales@harwin.com." Important: do NOT make up specific technical numbers — write the structure and I'll fill in the data from our datasheets.`,
      why: "\"Do NOT make up specific technical numbers\" is a safety guardrail. Always verify technical details.",
      source: "Issue #1"
    },

    {
      title: "Escalation Summary for Management",
      department: "Customer Service",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Turn an email chain into a short escalation note.",
      prompt: `I need to escalate a customer issue to my manager. Summarise the following email chain into a brief escalation note (5-6 sentences). Include: who the customer is, what the issue is, what we've done so far, and what decision is needed from management.

[PASTE EMAIL CHAIN HERE]`,
      why: "\"What decision is needed from management\" forces the summary to be action-oriented.",
      note: "Redact customer names and personal details before pasting an email chain.",
      source: "Issue #1"
    },

    {
      title: "Assumptions first, then write",
      department: "Everyone",
      type: "Prompt",
      tool: "Any approved tool",
      purpose: "Stop the AI running off in the wrong direction. It lists its assumptions and waits for you before writing anything.",
      prompt: `I need a [DOCUMENT TYPE] for [AUDIENCE] at an electronic connector manufacturer. Rules: do not invent figures or names. If you need something I haven't given you, write [NEEDED] in its place. Before you write anything, list the assumptions you are making in 3 to 5 bullet points, then stop and wait for me to confirm.`,
      why: "Vague instructions are where AI goes wrong (see the OpenAI agents story in Issue #7). Spelling out what it must not do, and checking its assumptions before the work is done, catches the wrong turn early.",
      source: "Issue #7, Nov 2026"
    }
  ],

  /* ------------------------------------------------------------------------
     USE CASES
     ------------------------------------------------------------------------ */
  useCases: [
    {
      title: "Sales Repository on the web",
      department: "Sales & Marketing",
      status: "Live",
      tool: "Automation",
      summary: "The 32 ready-made Sales Repository reports used to run inside Access, and if two colleagues hit the same report at once everyone waited. It is now a web page: open it in your browser, pick a report, export to Excel.",
      before: "23 seconds per report; 2.5 minutes each with three people at once",
      after: "1 second; 2 seconds each with three people",
      source: "Issue #7, Nov 2026 (Report Rescue)"
    },
    {
      title: "Daily bookings and billings email",
      department: "Finance / Accounts",
      status: "Live",
      tool: "Automation",
      summary: "The quarter-to-date bookings, billings and margin pack builds itself at 07:00 and goes to 28 people at 08:00. Four checks run first: source tables are fresh, row counts match, report totals agree with the database, and the file opened properly. If anything does not add up, the pack is rebuilt and checked again before it goes out.",
      before: "Built and sent by hand",
      after: "Built at 07:00, checked, sent at 08:00",
      source: "Issue #7, Nov 2026 (Report Rescue)"
    },
    {
      title: "Manufacturing planning",
      department: "Operations / Supply Chain",
      status: "Live",
      tool: "Automation",
      summary: "What used to take a full day to pull together now runs in about five minutes, so planners spend their time acting on the plan, not building it.",
      before: "24 hours",
      after: "5 minutes",
      source: "Issue #6, Oct 2026 (Report Rescue)"
    },
    {
      title: "Distributor sales reports",
      department: "Sales & Marketing",
      status: "Live",
      tool: "Automation",
      summary: "Point-of-sale reports from distributors like Avnet, TTI and DigiKey arrive in different formats every period. Instead of being handled by hand, they now flow through an automated pipeline into one consistent dataset, ready for reporting without the copy-paste.",
      before: "Handled by hand",
      after: "Hands-free",
      source: "Issue #6, Oct 2026 (Report Rescue)"
    },
    {
      title: "Trade show follow-up emails",
      department: "Sales & Marketing",
      status: "In use",
      tool: "ChatGPT",
      summary: "A member of the Sales team came back from Embedded World with 40+ business cards to follow up. They tweaked the product name and application for each contact and had all 40 emails drafted in under an hour. The emails still needed a personal touch and a quick review, but the AI handled about 80% of the heavy lifting.",
      before: "The best part of a day",
      after: "Under an hour",
      prompt: `Act as a Harwin sales representative. Write a short follow-up email to an engineer I met at Embedded World who was interested in Gecko connectors for a UAV project. Keep it under 100 words, mention our high-vibration testing data, and suggest a 15-minute call this week.`,
      source: "Issue #1"
    },
    {
      title: "Live Python in spreadsheets",
      department: "Data & Analytics",
      status: "In use",
      tool: "AI in Excel",
      summary: "A colleague has been using AI to write Python live inside Excel: describing what they want in plain English and watching the AI produce working code right there in the spreadsheet. No development background needed.",
      source: "Issue #2, May 2026"
    },
    {
      title: "Data assistant",
      department: "Data & Analytics",
      status: "Coming soon",
      tool: "Data assistant",
      summary: "An assistant that answers questions about our data in plain English. It already knows what every report and field at Harwin means, so you can ask the way you'd ask a colleague.",
      source: "Issue #6, Oct 2026"
    }
  ]
};
