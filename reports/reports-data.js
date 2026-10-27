/* ============================================================================
   HARWIN REPORT CATALOGUE: DATA FILE
   This is the only file you edit to add, change or remove reports.

   TO ADD A REPORT: copy this into the `reports` list, fill it in, save, refresh.

     {
       name: "What colleagues call it",
       area: "Sales",                 // one of AREAS below
       audience: "Who it's for, in a few words",
       what: "What it shows, one or two sentences.",
       refresh: "Daily at 08:00",     // how often it updates
       source: "IFS, SQL Server",     // where the numbers come from, in plain words
       how: "Emailed",                // Emailed | Web page | Repository | Dashboard | Excel on request
       link: "",                      // optional: internal URL. Leave empty if there isn't one.
       access: "Ask Nav",             // optional: how to get it if you don't already
       status: "Live",                // Live | Pilot | Coming soon
       since: "Issue #7, Nov 2026"    // optional: where it was first mentioned
     },

   Rules: keep the commas between entries, no customer names, no prices,
   no recipient names. Describe the report, not the people who get it.

   TO IMPORT THE SALES REPOSITORY REPORTS, paste this into Claude Code in the
   Harwin_Internal repo:

     "Read the RePos report catalogue in HI\apps\repos (the db\*.sql files and
      any catalogue table or config that lists the reports). For each of the
      catalogued reports, output one JavaScript object in exactly this shape:
      { name, area, audience, what, refresh, source, how: 'Repository',
        link: '', access: 'Log in to the Sales Repository', status: 'Live',
        since: 'Sales Repository' }
      Infer area and audience from the report's SQL and name. Keep 'what' to
      one plain-English sentence. Do not include customer names, prices or
      staff names anywhere. Output all objects as a single JS array literal
      I can paste into reports-data.js."
   ============================================================================ */

window.HARWIN_REPORTS = {

  updated: "1 November 2026",
  contact: "nsingh@harwin.com",

  areas: ["Sales", "Finance", "Operations", "Quality", "Engineering", "Everyone"],

  reports: [

    {
      name: "Sales Repository (report portal)",
      area: "Sales",
      audience: "Sales, customer service, finance, anyone who needs a standard sales report",
      what: "32 ready-made reports you run yourself and export to Excel or CSV: bookings, billings, open orders, customer and product views. Now a web page instead of Access, so several people can run reports at once.",
      refresh: "Live against the warehouse",
      source: "Data warehouse (fed from IFS and Salesforce)",
      how: "Web page",
      link: "",
      access: "Log in with your Harwin account. No access yet? Ask Nav.",
      status: "Live",
      since: "Issue #6, Oct 2026"
    },
    {
      name: "Daily bookings, billings and margin pack (QTD)",
      area: "Sales",
      audience: "Sales and finance leads",
      what: "Quarter-to-date bookings, billings and margin, with brand and category tabs. Builds at 07:00, passes four checks, sends at 08:00.",
      refresh: "Every working day at 08:00",
      source: "IFS via SQL Server",
      how: "Emailed",
      link: "",
      access: "Ask Nav to be added to the distribution",
      status: "Live",
      since: "Issue #7, Nov 2026"
    },
    {
      name: "Live bookings and billings dashboard",
      area: "Sales",
      audience: "Sales, operations, leadership",
      what: "Today's bookings, billings and open orders, refreshed every half hour from IFS.",
      refresh: "Every 30 minutes",
      source: "IFS",
      how: "Dashboard",
      link: "",
      access: "Internal network only. Ask Nav for the address.",
      status: "Live",
      since: "Issue #6, Oct 2026"
    },
    {
      name: "Per-site margin alerts",
      area: "Sales",
      audience: "Site sales and finance leads",
      what: "A short daily email flagging invoices whose margin falls outside the expected range for the site, so they can be checked the same day.",
      refresh: "Every working day",
      source: "IFS via SQL Server",
      how: "Emailed",
      link: "",
      access: "Ask Nav",
      status: "Live",
      since: ""
    },
    {
      name: "Distributor point-of-sale (POS) data",
      area: "Sales",
      audience: "Sales, marketing, finance",
      what: "Cleaned monthly sell-through data from our distributors, loaded into one consistent table for Power BI and the warehouse. Replaces the hand-built import.",
      refresh: "Monthly, after distributor files arrive",
      source: "Distributor POS files",
      how: "Dashboard",
      link: "",
      access: "Power BI, ask Nav",
      status: "Live",
      since: "Issue #6, Oct 2026"
    },
    {
      name: "Design Registration rejection reasons",
      area: "Engineering",
      audience: "Sales engineering, product management",
      what: "Why each Design Registration was rejected, gathered from five places in Salesforce and grouped into categories. Before this, the reason field was almost never filled in.",
      refresh: "Every working day",
      source: "Salesforce",
      how: "Repository",
      link: "",
      access: "Sales Repository, report 138",
      status: "Live",
      since: ""
    },
    {
      name: "Distributor margin (year to date)",
      area: "Finance",
      audience: "Finance and sales leadership",
      what: "Year-to-date margin by distributor, with brand and category tabs.",
      refresh: "Monthly, first working day",
      source: "IFS billings via SQL Server",
      how: "Emailed",
      link: "",
      access: "Ask Nav",
      status: "Live",
      since: ""
    },
    {
      name: "Company KPI dashboard",
      area: "Finance",
      audience: "Leadership and department heads",
      what: "Company KPI tiles (bookings, billings, book-to-bill, sell-through, NCRs and more) refreshed automatically instead of updated by hand in Excel.",
      refresh: "Every 30 minutes",
      source: "Data warehouse, IFS",
      how: "Dashboard",
      link: "",
      access: "Internal network only. Ask Nav for the address.",
      status: "Live",
      since: ""
    },
    {
      name: "Weekly demand plan and buy list",
      area: "Operations",
      audience: "Planning and purchasing",
      what: "Scores last week's forecast, builds a three-month forecast by part and a suggested buy list.",
      refresh: "Mondays",
      source: "POS, bookings and stock in the warehouse",
      how: "Excel on request",
      link: "",
      access: "Ask Nav",
      status: "Pilot",
      since: ""
    },
    {
      name: "Distributor stock cover",
      area: "Operations",
      audience: "Planning, sales operations",
      what: "Bought, held and sold stock cover by part and distributor, across 13 distributors. Used to be a workbook with no code behind it; now rebuilds itself when new stock data arrives.",
      refresh: "Monthly, when new stock files arrive",
      source: "Distributor stock files, POS, open orders",
      how: "Excel on request",
      link: "",
      access: "Ask Nav",
      status: "Live",
      since: ""
    },
    {
      name: "Manufacturing planning (BOM explosion)",
      area: "Operations",
      audience: "Production planning",
      what: "The full BOM explosion that planning works from. Runs in about five minutes instead of 24 hours, on BOM data refreshed from IFS every morning.",
      refresh: "Daily at 11:00, then every 30 minutes if needed",
      source: "IFS structure and routing",
      how: "Dashboard",
      link: "",
      access: "Through the planning tools, ask Nav",
      status: "Live",
      since: "Issue #6, Oct 2026"
    },
    {
      name: "Quality data to the supplier portal",
      area: "Quality",
      audience: "Quality and purchasing",
      what: "Receipts, inspections and supplier NCRs (with photos) loaded from IFS into the supplier portal database every morning and topped up every half hour.",
      refresh: "Daily at 07:00, then every 30 minutes",
      source: "IFS",
      how: "Web page",
      link: "",
      access: "Supplier portal",
      status: "Live",
      since: ""
    },
    {
      name: "Warehouse data dictionary",
      area: "Everyone",
      audience: "Anyone building a report or asking Harwin GPT a question",
      what: "Every table and column in the data warehouse with a plain-English description. 335 objects, nearly 5,000 columns, rebuilt daily.",
      refresh: "Daily",
      source: "Data warehouse",
      how: "Excel on request",
      link: "",
      access: "Ask Nav",
      status: "Live",
      since: "Issue #6, Oct 2026"
    },
    {
      name: "Harwin GPT (data assistant)",
      area: "Everyone",
      audience: "Pilot group first, then wider",
      what: "Ask a question about our data in plain English and get a checked answer. Tested every morning against 61 real questions; currently about 93% right.",
      refresh: "Live",
      source: "Data warehouse",
      how: "Web page",
      link: "",
      access: "Pilot group only for now. Ask Nav to be considered.",
      status: "Pilot",
      since: "Issue #7, Nov 2026"
    }
  ]
};
