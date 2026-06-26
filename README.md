# Childcare Planner

Childcare Planner is a personal React project for planning childcare one month in advance as a full-time working parent.

The app is intended to help coordinate work days, London office days, partner rota shifts, family availability, school terms, school holidays, and school activities in one simple planning view.

Live app: https://dr3amcoder.github.io/Childcare_Planner/

## Problem Statement

Planning childcare manually can become difficult because the information comes from several places:

- A Monday to Friday full-time work schedule
- A target of 10 London office days per month
- A partner's yearly rota pattern
- A partner's weekly shift-time schedule copied from rota screenshots using phone OCR
- Mum's availability
- A child's UK school calendar, including school days, half terms, summer holidays, and activities

The goal is to reduce the planning effort by turning messy rota text into structured data, then using that data alongside the yearly rota pattern to help identify which days are covered, risky, or need action.

## Rota Data Sources

The project needs to handle two related rota sources:

### Yearly Rota

The yearly rota is the planned rota pattern for the year. It shows whether partner is:

- Off
- Working an early shift
- Working a late shift
- On scheduled days off

This is the baseline rota pattern. It does not include later changes such as annual leave, lieu days for bank holidays, or other exceptions.

### Weekly Rota

The weekly rota gives the exact start and end time for each shift in a specific week.

This usually comes from text copied from rota screenshots using phone OCR. It still follows the yearly rota for which days are working days and which days are days off, but adds the exact shift times needed for childcare planning.

## Learning Goal

This project is being built as a learning project, not just as a finished app.

The development approach is:

- Build one small working slice at a time
- Keep the code simple and readable
- Practise React and JavaScript fundamentals
- Extract business logic into pure functions where possible
- Add tests for important logic
- Avoid adding a backend, database, or integrations before they are genuinely needed

## Current Tech Stack

- React
- JavaScript
- Vite
- Node.js and npm
- ESLint
- Local React state
- Local JSON-style data

Planned later:

- Vitest for unit testing
- Express only if a backend becomes useful
- CSV export
- GitHub Pages for free static deployment

Not planned yet:

- Database
- User accounts
- Google Calendar integration
- Storing real personal data in the repo

## First MVP

The first MVP focuses on converting rota text copied from phone OCR into a table that can be reviewed.

The first feature is:

**Paste Rota Text -> Parsed Shift Table**

Example input:

```text
Mon 3 Feb OFF
Tue 4 Feb 07:00-15:00
Wed 5 Feb 12:00-20:00
Thu 6 Feb OFF
Fri 7 Feb 09:00-17:00
```

Expected structured output:

```js
[
  {
    day: "Mon",
    dateText: "3 Feb",
    status: "off",
    startTime: null,
    endTime: null,
    rawText: "Mon 3 Feb OFF",
  },
  {
    day: "Tue",
    dateText: "4 Feb",
    status: "working",
    startTime: "07:00",
    endTime: "15:00",
    rawText: "Tue 4 Feb 07:00-15:00",
  },
]
```

## Planned Features

### Phase 1: Simple React UI

- Page title
- Textarea for pasted rota text
- Parse button
- Parsed rota table

### Phase 2: Pure Parsing Function

- Extract rota parsing into `parseRotaText(text)`
- Keep parsing logic separate from React UI
- Make the parser easier to test and reuse

### Phase 3: Unit Tests

- Add tests for `parseRotaText`
- Cover working days, off days, blank lines, and OCR mistakes where practical

### Phase 4: Editable Review Table

- Allow parsed rows to be corrected manually
- Support editing incorrect OCR output before generating plans

### Phase 5: Monthly Childcare Plan Generator

Create a function such as:

```js
generateMonthlyPlan({
  year,
  month,
  partnerRota,
  schoolHolidays,
  mumUnavailableDays,
})
```

This should produce a planning row for each day of the month.

### Phase 6: London Office Day Recommendations

- Recommend possible office days where childcare cover is strongest
- Work towards the target of 10 London office days per month

### Phase 7: CSV Export

- Export the monthly plan to CSV
- Make it easy to review or print outside the app

## Business Rules to Support Later

- If partner is off, they may be able to help with the school run
- If partner is working, exact shift time matters
- If partner finishes before school pick-up, they may be able to pick up
- If partner starts after school drop-off, they may be able to do drop-off
- Avoid asking mum for childcare on Tuesdays
- Avoid asking mum for childcare on Wednesdays
- School holidays need full-day childcare planning
- School activities should be highlighted
- London office days should be recommended on days where childcare cover is strongest
- The monthly target is 10 London office days

Future plan statuses may include:

- Covered
- Risky
- Needs action
- Holiday planning needed
- Office day recommended

## Security and Privacy

This app may deal with sensitive personal information, so privacy matters.

Important rules:

- Do not commit real rota data, school data, names, addresses, phone numbers, or personal schedules.
- Use fake example data in the repository.
- Treat anything committed to GitHub as potentially visible to others.
- Treat anything included in a frontend build as public, because browser JavaScript can be inspected.
- Do not store secrets in the app, including API keys, tokens, passwords, or private calendar URLs.
- Do not put personal data in `.env` files for GitHub Pages deployment.
- Keep local-only personal test data out of Git using ignored files where needed.

GitHub Pages can be a good free deployment option because this project currently works as a static frontend app. However, GitHub Pages does not provide private server-side storage or secret handling. If this app is deployed to GitHub Pages, it should only include the app code and safe sample data.

If the app later needs to store real personal information, safer options should be considered before deployment, such as:

- Keeping the app local-only
- Using browser-only local storage carefully
- Adding authentication
- Adding a backend with proper access control
- Keeping the GitHub repository private

## GitHub Pages Deployment Plan

The project is configured to deploy to GitHub Pages as a static Vite app.

Before enabling deployment:

- Confirm the repository does not contain real personal data
- Confirm the app does not bundle real rota or school data
- Confirm no secrets are present in the code or build output
- Confirm Vite `base` is set to `/Childcare_Planner/`
- Confirm GitHub Pages is using GitHub Actions as the deployment source

After pushing to GitHub:

1. Open the GitHub repository.
2. Go to **Settings**.
3. Go to **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main`, or manually run the **Deploy to GitHub Pages** workflow from the **Actions** tab.

Expected live URL:

```text
https://dr3amcoder.github.io/Childcare_Planner/
```

## Development Commands

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build the production app:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Engineering Principles

This project should stay:

- Simple
- Readable
- Well-named
- Easy to test
- Focused on the smallest useful feature

Helpful principles:

- KISS: keep the first version simple
- DRY: avoid duplication once a pattern becomes clear
- SRP: keep each function or component focused on one job
- Pure functions: keep business logic separate from UI where possible

## Personal Project Notes

This project is intended to be built with manual effort and understanding. AI assistance should be used as a coach and pair-programming mentor, not as a replacement for learning.

The priority is to understand the code, build confidence, and create a useful tool step by step.
