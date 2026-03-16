---
name: professional-commits
description: Use this skill whenever the user mentions commits, commit messages, conventional commits, git history cleanup, split commits, or asks to "write a commit". Apply it aggressively by default so the agent always returns polished, copy-ready commit plans and messages.
---

# Professional Commits Skill

Use this skill to produce high-quality, Conventional Commit-compliant commit messages and a safe commit workflow from either:
- a `git diff`,
- a changed file list,
- or a natural-language summary of changes.

## 1) Conventional Commits Reference

### Commit format

```text
<type>[optional scope][!]: <subject>

[optional body]

[optional footer(s)]
```

### Allowed types (with intent)

- `feat`: new user-facing or API-facing functionality
- `fix`: bug fix
- `refactor`: code restructuring without behavior change
- `perf`: performance improvement
- `docs`: documentation-only changes
- `test`: tests added/updated
- `build`: build system or dependency/build pipeline changes
- `ci`: CI/CD workflow changes
- `chore`: maintenance tasks not affecting src behavior
- `style`: formatting/whitespace/style-only changes
- `revert`: reverts a previous commit

### Scope guide

Use scope to localize impact. Prefer one concise noun.

Good scope examples in this repo style:
- `auth`, `users`, `products`, `categories`, `role`
- `shared`, `logger`, `middlewares`, `validation`
- `infrastructure`, `database`, `persistence`, `security`, `token`
- `tests`, `scripts`, `docker`, `deps`

Rules:
- Keep scope lowercase and short.
- Use no scope when changes are truly cross-cutting and no single area dominates.
- Avoid fake scopes like `misc`, `update`, `stuff`.

## 2) Subject / Body / Footer Rules

### Subject line rules

- Use imperative mood: "add", "fix", "refactor".
- Start lowercase after `type(scope):`.
- No trailing period.
- Keep concise and specific.
- Target <= 72 characters.

### Body rules

Add a body when context is needed. Wrap lines at ~72 characters.

Body should explain:
- what changed,
- why it changed,
- notable side effects, migrations, or trade-offs.

Prefer bullet points for multi-part changes.

### Footer rules

Use footers for metadata and breaking changes, e.g.:
- `BREAKING CHANGE: ...`
- `Closes #123`
- `Refs #456`

## 3) Breaking Changes

When a commit introduces a breaking API/contract change:

1. Add `!` after type or scope:
   - `feat!: drop legacy token format`
   - `feat(auth)!: require OAuth state validation`
2. Add a `BREAKING CHANGE:` footer explaining:
   - what broke,
   - who is affected,
   - how to migrate.

Example:

```text
feat(auth)!: replace session cookie with JWT bearer token

Move authentication to stateless JWT bearer tokens for API requests.

BREAKING CHANGE: endpoints no longer accept session cookies.
Clients must send Authorization: Bearer <token>.
```

## 4) Atomicity Rules (Split vs Keep Together)

Keep in one commit when:
- all changes implement one cohesive intent,
- tests/docs are directly tied to that same intent.

Split into multiple commits when:
- there are unrelated concerns (e.g., `feat` + wide `refactor`),
- mechanical renames/formatting obscure logic changes,
- dependency/build/CI changes are separable,
- migrations or breaking changes need isolated review.

Recommended split order:
1. `refactor`/mechanical prep (no behavior change)
2. functional change (`feat`/`fix`)
3. tests
4. docs/chore follow-ups

## 5) Commit-Creation Workflow (Agent Procedure)

When given a diff or changed file list, follow this process:

1. Classify each changed file by intent (`feat`, `fix`, `refactor`, etc.).
2. Group files into atomic commit sets.
3. Propose split count (or single commit) with a one-line rationale.
4. Draft commit message(s) using Conventional Commits.
5. Validate style:
   - imperative mood,
   - <=72-char subject,
   - proper body/footer,
   - breaking syntax/footer if needed.
6. Output ready-to-copy code blocks.

If uncertain, prefer fewer commits unless separation clearly improves reviewability.

## 6) Output Format (Mandatory)

### Single-commit output

```text
Commit 1
<type>(<scope>): <subject <= 72>

- bullet explaining key change
- bullet explaining why
- bullet on tests/docs if relevant
```

### Multi-commit output

```text
Commit 1
<message>

Commit 2
<message>

Commit 3
<message>
```

Requirements:
- Number commits (`Commit 1`, `Commit 2`, ...).
- Use one fenced code block per commit for copy/paste reliability.
- Do not include extra prose inside the code block except the commit content.

## 7) Anti-Patterns to Avoid

- Vague subjects: `update stuff`, `fix things`
- Oversized mixed commits hiding unrelated changes
- Missing breaking-change footer when behavior/contracts changed
- Non-imperative subjects: `added`, `fixes`, `changing`
- Overlong subject lines (>72 chars)
- Noise-only scopes or inconsistent type usage

## 8) Git Command Playbook

### Stage selectively

```bash
git add <file>
git add -p
```

### Commit

```bash
git commit -m "type(scope): subject"
```

For body/footer:

```bash
git commit
```

### Amend last commit

```bash
git commit --amend
# or message-only
git commit --amend -m "type(scope): new subject"
```

### Split / clean history with interactive rebase

```bash
git rebase -i HEAD~<n>
```

Useful actions in rebase todo:
- `pick`: keep commit as-is
- `reword`: change message only
- `edit`: stop to amend/split
- `squash` / `fixup`: merge commits

### Split a commit during rebase edit

```bash
git reset HEAD^
git add -p
git commit -m "first atomic commit"
git add -p
git commit -m "second atomic commit"
git rebase --continue
```

## 9) Quality Bar (Final Self-Check)

Before returning commit messages, verify:
- type and scope match actual intent,
- subject is imperative and <=72 chars,
- commits are atomic and review-friendly,
- breaking changes use `!` + `BREAKING CHANGE:` footer,
- output is copy-ready with numbered commit blocks.
