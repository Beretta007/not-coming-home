# AGENTS.md (repo root) — Not Coming Home, itsnotcominghome.com
# Purpose: repo-wide guardrails so Codex ships fast without breaking the core experience.

## North star
# Why: this project has one sacred artifact (the 1966 clock). Everything else is downstream.
- Ship improvements fast without breaking the core experience.
- The 1966 clock is a core artifact. Do not change its epoch, logic, formatting, or placement unless a task explicitly asks for it.
- Preserve existing URLs and SEO share previews.

## Non-negotiables
# Why: broken URLs break trust and SEO. Visual drift breaks brand consistency. Secrets in git are permanent mistakes.
- Do not break existing routes, redirects, or canonical URLs.
- Do not change brand typography, layout system, or visual identity unless explicitly requested.
- Never commit secrets. Use .env.example for new environment variables.
- UI and layout changes are allowed only when the task explicitly requests a redesign, and the task must specify scope and acceptance criteria.

## Security invariants (do not violate)
- Never add or commit secrets (API keys, tokens, credentials) to the repo or client-side JS.
- Avoid new third-party scripts and dependencies unless explicitly requested and reviewed.
- Do not rely on obscurity. Assume attackers can read all client code and replay network requests.
- If adding any serverless/API functionality, enforce authorization server-side and add basic rate limiting.
- Treat all user-provided input as hostile and validate/sanitize accordingly.
- Prefer security headers and add/strengthen CSP when embedding external content grows.

## Working rules
# Why: small diffs are reviewable diffs. Clear plans prevent accidental refactors.
- Before coding, write a short plan (5 to 10 bullets).
- Only pause for approval if the plan includes: new dependencies, route changes, clock changes, or more than 10 files touched.
- If ambiguous, ask clarifying questions. If minor, state assumptions and proceed.
- Prefer small, high-confidence diffs over broad refactors.
- After changes: list edge cases, suggest tests, and provide exact local verification steps.

## Frontend rules
# Why: this is a shareable meme brand. Social previews and performance matter.
- Maintain clock behavior and avoid re-render jitter or time drift.
- Keep pages fast. Avoid unnecessary client-side work.
- Keep Open Graph metadata correct for sharing.

## Backend rules
# Why: if and when backend exists, stability and contracts matter more than cleverness.
- If backend code exists or is added: validate inputs at boundaries, keep errors consistent, avoid breaking API contracts.

## Output format
# Why: consistent summaries make review fast and reduce mistakes.
- What changed
- Files changed
- How to verify locally
- Edge cases + suggested tests