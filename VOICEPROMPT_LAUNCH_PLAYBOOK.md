# VoicePrompt Launch Playbook

This document distills the launch lessons from Peter Steinberger's OpenClaw story into an actionable plan for `VoicePrompt for Agents`.

`VoicePrompt for Agents` is not open source. This playbook uses OpenClaw as a launch-pattern reference only, not as a product-model reference.

## Goal

Launch `VoicePrompt for Agents` on the VS Code Marketplace in a way that:

- feels instantly useful, not theoretical
- is memorable and opinionated, not generic
- avoids preventable naming, security, and impersonation mistakes
- gives early users a good first run instead of a confusing one
- creates a small but real wave of advocacy from people who actually use it
- supports a proprietary product with clear trust boundaries and official support

## Core Launch Thesis

OpenClaw did not win because it was the most polished thing on day one. It won because it made a future feel real fast.

For VoicePrompt, the equivalent is:

- make people feel the prompt-typing bottleneck immediately
- show that spoken prompts into `Codex`, `Copilot`, and terminal loops are faster than typing
- make the product feel like it came from real agent workflows, not from generic speech-to-text software

If people "get it" in one minute, the launch works. If they need a long explanation, the launch is weak.

## What Made OpenClaw's Launch Work

### 1. It made an obvious unmet need feel real

Peter kept returning to a simple instinct: "why doesn't this exist?" The launch worked because the product solved a problem people already had but had not seen solved in a satisfying way.

VoicePrompt should do the same:

- focus on the pain of typing every prompt, correction, and follow-up
- show the product inside the exact surfaces where people already work
- avoid drifting into "voice AI" as a broad category

The wedge is not "transcription". The wedge is "faster agent loops in VS Code."

### 2. The product was experiential

OpenClaw clicked when people could actually use it. The magic was not the architecture diagram. It was the felt experience of talking to an agent through tools they already used.

VoicePrompt launch material should therefore prioritize:

- a short demo video
- one or two obvious workflows
- concrete before/after examples
- installation instructions that lead to first use quickly

Do not lead with internals. Lead with the moment where someone talks and work continues.

### 3. It had personality

OpenClaw was weird, playful, and unmistakable. That made it easy to remember and easy to share.

VoicePrompt does not need lobster-level theatrics, but it should still have a stance:

- terminal-first and chat-first
- practical, not gimmicky
- built by someone who actually uses voice in agent workflows
- honest about current limits

The launch should sound like a strong opinion, not a committee summary.

### 4. It felt built in public

People saw the project evolving, saw others trying it, and saw the creator using it for real work. That gave the launch credibility and momentum.

For VoicePrompt, the equivalent is:

- show real usage clips
- show actual routing into `Codex`, `Copilot`, or terminal approval flows
- make the docs and landing page reflect lived workflow details
- collect a few real user quotes or observations before the big push

This does not require open-source development. It requires visible proof that the product is real and used in real workflows.

### 5. It was easy to describe

OpenClaw had a one-line story people could repeat.

VoicePrompt needs the same:

`VoicePrompt for Agents is the fastest way to get spoken prompts into Codex, Copilot, and terminal workflows in VS Code.`

Everything in the launch should reinforce that sentence.

## What Went Wrong In OpenClaw's Launch

These are the parts to avoid repeating.

### 1. Naming and renaming were chaotic

The name change created avoidable pain because handles, domains, package names, and account renames were not locked down atomically.

For VoicePrompt, before any major launch push:

- confirm final product name
- confirm VS Code publisher name
- confirm extension identifier
- confirm GitHub repo naming
- confirm website route and canonical product title
- reserve all relevant handles and fallback handles
- reserve obvious typo or spoof variants where practical
- prepare redirects before public naming changes

Do not announce a rename until the full asset set is controlled.

### 2. Impersonation and malware clones appeared fast

Once attention hit, bad actors copied names, pages, and packages.

For VoicePrompt, prepare:

- canonical website URL
- canonical Marketplace URL
- canonical GitHub repo URL
- canonical publisher name
- a short "official links" section in docs and launch posts
- a plan for reporting impersonation quickly

If people have to guess which link is real, the launch is already leaking trust.

### 3. Security discussion outpaced onboarding quality

OpenClaw attracted users who did not understand the risk profile. That increased noise, confusion, and pressure.

For VoicePrompt, be explicit about:

- what runs locally
- when audio leaves the machine
- what backends are supported
- what permissions or dependencies are needed
- what is stable today
- what is still rough

This is especially important because "voice" and "AI" both trigger trust concerns.

### 4. Growth outpaced support capacity

A successful launch can still fail the week after if the creator becomes the bottleneck.

Before launch, prepare:

- a concise setup guide
- a troubleshooting guide
- a known limitations section
- a basic FAQ
- a support/contact path
- a minimal response policy for support channels and reviews

The goal is not perfect support. The goal is not having to answer the same question 200 times by hand.

## What VoicePrompt Needs Before Launch

This is the staging checklist.

### Positioning

- finalize the one-line pitch
- finalize the homepage headline and subhead
- decide the primary workflow story: `Codex`, `Copilot`, terminal, or approval flow
- decide what not to claim
- decide the honest trust stance: local-first where possible, backend choice stays with the user, VS Code workflow focus first

### Marketplace Assets

- polished extension `README.md`
- clear `CHANGELOG.md`
- support/contact path
- final icon PNG
- final screenshots or GIFs
- short demo video
- accurate `package.json` fields: `name`, `displayName`, `publisher`, `description`, `version`, `engines.vscode`, `categories`, `keywords`, `icon`, `repository`, `homepage`, `bugs`
- any terms, privacy, or product-policy links needed for a closed-source product

### First-Run Experience

- installation path tested from a clean machine
- first-run instructions tested by someone who is not the author
- default settings produce a successful first demo
- empty/error states are readable
- fallback behavior is clear when local recording is unavailable
- audio capture path is documented per OS

### Trust and Safety

- document what is local vs remote
- document supported backends
- document data flow plainly
- document failure modes plainly
- document supported operating systems and caveats
- document that this is for developer workflows, not generic dictation

### Launch Operations

- final product name locked
- Marketplace publisher locked
- repo and website naming locked
- landing page live
- official links list prepared
- launch post drafted
- short announcement thread drafted
- response macros drafted for common questions
- monitoring plan for impersonation, broken links, and setup failures
- review-response plan for Marketplace feedback
- explicit support ownership after launch

## How To Make This The "Successful" Version Of The OpenClaw Launch

The successful version is not "go as viral as OpenClaw." The successful version is:

- get the upside of a sharp launch
- skip the preventable chaos
- preserve a clear proprietary product stance without sounding evasive or vague

That means:

### 1. Keep the wedge narrow

OpenClaw worked because it was concrete. VoicePrompt should stay concrete too.

Do not launch as:

- the future of voice computing
- a general AI productivity layer
- universal speech infrastructure

Launch as:

- the fastest voice input workflow for agent-driven coding in VS Code

### 2. Make the first demo undeniable

The launch asset should show one clean loop:

1. user speaks
2. transcript appears in the right surface
3. agent or terminal workflow continues immediately

If possible, show:

- one `Codex` example
- one terminal example
- one correction/follow-up example

### 3. Be honest about limits early

OpenClaw benefited from honesty even when things were rough. VoicePrompt should do the same, but more deliberately.

State clearly:

- what works well today
- what requires setup
- what is experimental
- what environments are best supported
- what users should expect from support and updates

Honesty increases trust and lowers support drag.

### 4. Prepare for attention before asking for it

Do not wait for launch day to think about:

- naming collisions
- fake links
- support overload
- docs gaps
- users who do not understand the setup
- privacy questions
- "is this local?" questions
- "is this open source?" questions

The launch is not just the announcement. It is the system around the announcement.

### 5. Give people language to repeat

People need a clean sentence to tell others what this is.

Recommended message hierarchy:

- Primary: spoken prompts directly into `Codex`, `Copilot`, and terminal workflows
- Secondary: less typing, less context switching, faster loop continuation
- Trust: local capture first when available, backend choice stays with the user
- Limit: optimized for VS Code developer workflows, not every voice use case

### 6. Make the project feel lived-in

OpenClaw felt real because Peter was clearly using it himself.

VoicePrompt should show:

- the actual hotkeys
- the panel
- the routing targets
- real capture/review/send behavior
- practical workflow details like terminal approvals and draft replacement

The more specific the workflow texture, the more credible the product.

For a closed-source product, this matters even more. Users cannot inspect the internals, so they need more operational proof and clearer trust language.

### 7. Treat trust as a product surface

Because VoicePrompt is closed source, trust cannot rest on inspectability. It has to rest on clarity.

That means:

- state plainly what audio and transcripts do
- state what is processed locally and what is remote
- state what backend choices the user has
- state where settings live
- state what data is or is not retained
- state how users get help if something breaks

The trust page, Marketplace README, and landing page need to agree with each other.

## Recommended Launch Sequence

### Stage 1: Preflight

- finish Marketplace metadata
- finish README and trust docs
- verify naming and official links
- verify clean install on supported OSes
- record final demo

### Stage 2: Quiet validation

- let a small number of real developers install it
- watch where they get stuck
- tighten onboarding, copy, and defaults
- collect one or two usable quotes
- collect the top trust questions and answer them in docs before broader launch

### Stage 3: Public launch

- publish Marketplace listing
- publish landing page
- publish short launch post with official links
- lead with demo, not architecture
- stay present for setup issues during the first wave

### Stage 4: Stabilization

- fix onboarding friction first
- fix trust confusion second
- add docs before adding broad new scope
- collect repeated objections and fold them into FAQ
- respond to early Marketplace reviews quickly and concretely

## Messaging To Avoid

- "AI-powered voice productivity for everyone"
- "Revolutionary speech interface"
- "Seamless end-to-end voice platform"
- anything that sounds like generic dictation software
- anything that implies risk-free or perfect behavior

## Messaging To Use

- "Talk to the agent, not the input box."
- "Voice input built for Codex, Copilot, and terminal loops."
- "The point is not voice for its own sake. The point is removing the prompt-typing bottleneck."
- "Local capture first when available. Backend choice stays yours."
- "Built for real VS Code workflows, with clear limits."

## Immediate Next Actions

1. Replace the current placeholder project `README.md` with actual VoicePrompt site and launch documentation.
2. Create or import the real extension Marketplace `README.md` into the extension repo and align it with this positioning for a closed-source product.
3. Make an official links block for website, Marketplace listing, support path, and publisher.
4. Write a trust page or trust section that explains local capture, fallback behavior, backend choice, and support expectations plainly.
5. Add privacy/support/policy links where needed so the Marketplace listing does not feel opaque.
6. Record a short demo that proves the core workflow in under a minute.
7. Run a clean install test on each supported OS before broad launch outreach.

## Working Rule

If a launch asset does not make the product feel faster, more trustworthy, or more real, cut it.
