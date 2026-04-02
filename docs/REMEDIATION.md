# Remediation Plan

## Target
Raise audit score from 14/25 to at least 22/25.

## Required Actions

1. Sprint Completion
- Define current sprint number/name and task list in state tracking.
- Record completion status for each task with file-level evidence.
- Update `.claude/AGENT_STATE.md` so current sprint is explicitly tracked.

2. Test Coverage
- Keep existing pytest integrity checks passing.
- Add E2E/browser checks for primary navigation and key user flows.
- Add coverage measurement and report >=80% for audited code paths.

3. Correctness
- Replace fixed viewport width with responsive mobile-safe viewport.
- Validate layout behavior at common breakpoints.

4. Code Quality
- Add a lightweight quality gate:
  - HTML/CSS/JS linting or equivalent static checks.
  - Pre-merge validation command(s) documented and enforced in CI.
- Keep HOW/process docs synchronized with implementation updates.

5. Audit Evidence Hygiene
- Ensure every future sprint task in state references concrete file-level evidence.

## Exit Criteria
- Sprint is clearly defined and closed.
- Automated checks are present and documented.
- Responsive behavior verified.
- Next audit scores at least 22/25.
