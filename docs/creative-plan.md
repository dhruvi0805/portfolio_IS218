# Creative Project Plan

**Research question.** Does a side-by-side comparison or a guided sequence help IS 218 students make and explain a practice decision?

**Audience.** An IS 218 student deciding which skill to practice next. A classmate reviewing this research should be able to open a source, explain the concept choice, and identify an assumption.

## Concepts compared

- **Practice decision journal.** Compare two practice activities against one goal, save a choice and rationale, and revisit the decision from a private dashboard.
- **Career skill quest.** Complete one branching scenario, save the result and feedback, and revisit attempts from a private dashboard.

I chose the journal because it supports a complete useful workflow with fewer authored branches to design and test. I assume students can name a practice goal before comparing activities. The quest is an alternative if scenario feedback proves more useful for explaining tradeoffs.

## Finished experience

A student can create an account and sign in, compare two activities, save a choice and rationale, revisit it from a private dashboard, and update their account details.

## Five stories

1. Create an account and sign in to return to my work.
2. Compare two practice activities against my goal to explain my choice.
3. Save my choice and rationale to revisit it later.
4. View my saved decisions in my private dashboard after signing back in.
5. Update my account details to keep my profile current.

## Stack and architecture

Proposed stack: TypeScript, Express, server-rendered templates, SQLite, and Vitest with Supertest.

    Browser forms → Express routes → decision service → SQLite
                          ↓
               server-side session and authorization

Validate inputs on the server, hash passwords, protect session cookies and state-changing forms, and scope record reads and account updates to the signed-in account. Persist decisions with a user identifier. Verify the security and persistence choices against primary sources before implementation.

## Experiment

Compare a side-by-side form with a guided sequence. Keep the inputs, decision rules, and saved-record format consistent through one shared decision service. Ask whether a student can explain their choice after using each version. Test whether equivalent inputs produce equivalent saved records. Either layout may work better.

See [Evidence and review](./creative-evidence.md) for sources, planned checks, and peer feedback.
