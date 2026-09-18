# Tiinex Lineage Policy

Version: 1.0
Intended canonical filename: `LINEAGE_POLICY.md`

This policy describes the intended consent and integrity boundary for Tiinex lineage material.
It is meant to be discoverable by Tiinex viewers and compatible with open software licensing.

This is not a replacement for the repository `LICENSE`. Software source code, build tooling,
and explicitly Apache-2.0 material remain governed by the repository license unless a file clearly says otherwise.

## 1. Scope

Tiinex lineage material includes traces, workspaces, handoffs, issue/discussion bodies, attachments,
provenance records, continuity edges, validation notes, and other artifacts that preserve human context.

A repository may contain both:

- software and tooling under `LICENSE`; and
- lineage material whose integrity and consent boundary is described by this policy.

When a file is ambiguous, treat it as lineage material until its owner or origin clarifies otherwise.

## 2. Root Respect

The root rule is simple:

> Preserve the root, parent, origin, provenance, uncertainty, and interpretation limits of the lineage.

Do not strip a lineage artifact down into raw claims, traits, labels, scores, or decontextualized data points.
Do not present provisional artifacts as final, canonical, approved, or representative beyond their stated boundary.

## 3. Golden Rule

Use Tiinex lineage only in ways you would accept if the lineage described you, your collaborators,
your unfinished reasoning, your uncertainty, and your work in progress.

A use is aligned with this policy when it:

- preserves parent and origin;
- keeps source boundaries visible;
- cites or links back when quoting, reviewing, continuing, or remixing;
- keeps uncertainty and interpretation limits attached;
- avoids manipulation, exploitation, targeting, or deceptive framing;
- avoids uses that would cause de-evolution of shared human context, trust, or agency.

## 4. Allowed Uses

Unless a more specific policy applies, the following uses are welcome:

- human reading, learning, review, and critique;
- user-directed LLM or tool assistance for reading, translation, summarization, debugging, validation, or continuation;
- traversal by Tiinex-compatible viewers and lineage tools;
- linking, citation, and short contextual quoting;
- preservation, archival, indexing, hosting, caching, and transport required to keep the material accessible;
- forks, adaptations, and commercial work that preserve root, parent, origin, attribution, and the Golden Rule;
- building products, research, workflows, tools, or businesses inspired by Tiinex ideas, as long as lineage context is not extracted or weaponized against people.

## 5. Disallowed Uses

The following uses are outside the intended consent boundary:

- removing or falsifying parent, origin, source, authorship, timestamps, or interpretation limits;
- using lineage material to manipulate, exploit, rank, score, target, shame, coerce, or profile a person;
- bulk extraction that converts lineage into a decontextualized dataset while discarding provenance;
- using lineage in a way that intentionally undermines human agency, dignity, consent, or shared trust;
- claiming Tiinex endorsement, validation, or finality where the lineage does not say so.

## 6. LLM and Automated Traversal

LLMs and automated tools may help a human read, traverse, translate, debug, validate, or continue lineage
when the use is directed by that human and preserves context.

Do not treat this policy as a ban on LLM understanding. The goal is not to stop learning or interpretation.
The goal is to prevent context collapse, extractive reuse, and uses that violate the Golden Rule.

If a system stores, aggregates, trains on, profiles from, fingerprints from, or commercially extracts lineage material,
it must preserve consent, provenance, and the applicable specific policy. If it cannot do that, it should not use the material.

## 7. Commercialization

Commercial use of Tiinex software, ideas, workflows, or lineage-compatible tools is allowed when the repository license
and this lineage policy are respected.

Commercial use is not allowed when it depends on misleading lineage, stripping context, profiling people,
targeting people, or turning bounded human context into an extractive dataset.

## 8. Specific Policies Override This One

A more specific `LINEAGE_POLICY.md` closer to a lineage subtree, repository, workspace, or artifact may add stricter consent boundaries.
For example, personal or social lineage may require explicit revocable consent for uses that this general policy would otherwise allow.

When policies conflict, use the more specific and more protective policy for the affected lineage material.

## 9. NOTICE Relationship

Repository `NOTICE` files may point to this policy, but a `NOTICE` file does not modify the software license.
This policy is a consent and integrity boundary for lineage material, not a stealth change to Apache-2.0 software rights.

## 10. Short Form

Tiinex lineage is shared for human-first continuity. Read, traverse, learn, fork, build, and commercialize responsibly.
Preserve root, parent, origin, provenance, and limits. Follow the Golden Rule. Do not collapse lineage into extractive data or use it against people.
