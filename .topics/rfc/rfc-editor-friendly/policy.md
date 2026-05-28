# Local Policy

This file is optional.

It exists only when the topic needs local steering that should sit above
the process layer.

This is not where generic LLM safety policy should be duplicated.

Use this file for topic-local priorities, boundaries, or anti-drift
constraints that are not already obvious from lineage alone.

Recommended scope:

- what the topic is trying to protect
- what should not drift
- which local sources or anchors weigh most
- what kind of mutation or reframing should be treated cautiously

Recommended non-scope:

- generic model safety rules
- full operational step-by-step behavior
- large reference catalogs

Precedence:

1. lineage remains the primary continuity source
2. `policy.md`, if present, constrains how the topic should be read or advanced
3. `process.md` should operationalize within that frame

If this file is absent, that means no local policy has been expressed
here yet. It does not mean that all constraints disappear.