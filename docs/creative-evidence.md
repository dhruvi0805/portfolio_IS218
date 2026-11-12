# Evidence and review

## Sources to check

- [Express security guidance](https://expressjs.com/en/advanced/best-practice-security.html) — planned check for server-side security choices.
- [SQLite foreign keys](https://www.sqlite.org/foreignkeys.html) — planned check for how saved records can reference their owners.
- [Supertest](https://github.com/forwardemail/supertest) — planned check for how to test authenticated HTTP workflows.

For each source you open, record the actual date checked and the specific evidence it supports. Label the resulting design inference as an interpretation. Keep the usability expectation about guided versus side-by-side comparison under assumptions until tested.

AI helped draft the concept comparison, stack, architecture, and test ideas. Verify the technical claims against the original documentation or test results before calling them observed.

## Verification

- **Planned:** Complete the account → comparison → saved decision → dashboard → account-update workflow.
- **Planned:** Sign out and back in, then verify the saved decision is still available.
- **Planned:** Reject invalid input and block one account from accessing another account’s records.
- **Planned:** Test equivalent inputs through both interaction flows and compare the persisted records.

Use **attempted** for a check you tried without confirming the outcome. Use **observed** only when you can record the result and link the evidence.

## Partner review

Status: awaiting a classmate walkthrough.

Ask the reviewer to open one original source, explain why the journal was chosen, and identify one assumption or confusing step. Ask them to record specific feedback in [GitHub Issues](https://github.com/dhruvi0805/portfolio_IS218/issues). Reply with your decision to implement, investigate, defer, or decline and your reasoning. Link accepted changes and verification, ask the reviewer to retry, and record the result before closing a resolved issue. Leave unfinished issues open with a next step. Participate as an owner and a reviewer.

## Related research

[Portfolio Plan career research](./comparison.md)
