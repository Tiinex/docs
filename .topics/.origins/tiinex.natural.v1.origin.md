# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/5986f0e5d48273f135e8fe4ef33dda20cea052f4/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.origin.v1](https://github.com/Tiinex/docs/blob/0067d2972413d1de33ad34810a4913210a17b51b/.topics/.schemas/tiinex.origin.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.v1.origin.md](tiinex.v1.origin.md)
  - Origin:
    - [relative](tiinex.v1.origin.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/0067d2972413d1de33ad34810a4913210a17b51b/.topics/.origins/tiinex.v1.origin.md)
- Current
  - Current Schema: [tiinex.natural.origin.v1](https://github.com/Tiinex/docs/blob/0067d2972413d1de33ad34810a4913210a17b51b/.topics/.schemas/tiinex.natural.origin.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Base natural origin contract for places, ecosystems, field sites, physical contexts, environmental conditions, samples, traces, and observations.

---

# Tiinex Natural Origin Base Contract

- Status: draft origin definition

## Natural Origin Identity

- Name: Tiinex natural origin base contract
- Version: 1
- Origin Family: base natural origin contract
- Canonical Identifier: tiinex.natural.v1.origin
- Base Origin: tiinex.v1.origin
- Natural Origin Medium: natural, physical, environmental, and field-world
- Natural Origin Scope: reusable boundary for natural and physical source-side contexts
- Related Origin: tiinex.digital.v1.origin

## Natural Boundary

- In Scope: places, ecosystems, habitats, field sites, weather contexts, water, soil, geology, organisms, traces, samples, physical objects, environmental conditions, and other natural or physical contexts.
- Out Of Scope: proof of condition, species certainty, environmental truth, access permission, sample custody, evidence, validation, or preservation unless separately established.
- Boundary Type: natural, physical, spatial, temporal, ecological, sample-based, or mixed boundary.
- Boundary Stability: may be changing, seasonal, mobile, living, weather-dependent, disturbed, human-defined, or uncertain.
- Disturbance Boundary: do not treat definition as permission to disturb, collect, sample, publish, enter, or generalize.

## Observation And Material Boundary

- Possible Observation Or Material: direct observation, trace, photo, scan, sensor reading, field note, sample, local report, environmental condition, or instrument signal.
- Observation Or Material Status: observed, sampled, photographed, recorded, reported, preserved, partial, contaminated, stale, unavailable, inferred, or unknown.
- Does Not Prove: population truth, species certainty, safety, ownership, stewardship, permission, full environmental state, or evidence by itself.
- Capture Conditions: concrete observations should state time, place, method, uncertainty, and preservation state when relevant.

## Access Safety And Stewardship Boundary

- Access Modes: non-disturbing observation, permitted field visit, camera, sensor, sample, map, local report, lab context, or digital record of a natural context.
- Safety Boundary: unsafe access, hazardous conditions, wildlife risk, biosecurity risk, or environmental risk must remain explicit.
- Stewardship Boundary: respect property, conservation, community, cultural, local, indigenous, animal welfare, and non-disturbance limits when relevant.
- User Action Requirements: permission, intrusive access, sampling, collection, publication, preservation, or destructive action.

## Change And Loss

- Change Modes: weather, season, migration, growth, decay, erosion, disturbance, human activity, habitat change, instrument drift, or sample degradation.
- Loss Modes: missed observation, degraded sample, lost context, sensor failure, contamination, access change, or changed conditions.
- Staleness Risk: depends on place, organism, condition, weather, season, and observation window.

## Use With Tools Interfaces And Adapters

- Tool Use: field notebook, map, spade, camera, sensor, sample kit, lab instrument, viewer, checklist, or LLM review helper.
- Interface Use: field visit, observation point, sample boundary, camera view, sensor placement, lab bench, map, or local report.
- Adapter Use: carry observations, records, samples, or signals into Tiinex-compatible findings or candidates while preserving uncertainty.
- Preservation Boundary: encounter, observation, photo, sensor reading, cache, or field note is not durable preservation unless explicitly preserved.
- Digital Adapter Use: digital records of nature should also declare digital-origin and digital-adapter boundaries.

## Failure And Ambiguity Handling

- Failure Modes: unsafe access, partial observation, misidentification, disturbance, contamination, sensor failure, weather drift, missing context, or restricted site.
- Ambiguity Modes: similar species, old traces, indirect reports, changing conditions, biased sampling, incomplete view, or uncertain location.
- Safe Representation: show uncertainty, gap, and limits rather than inventing missing natural state.
- Missing Stewardship Context: unknown permission or stewardship should remain unknown, not assumed open.

## Portability Notes

- Portable Contract: reusable by field workflows, citizen science, lab notes, environmental review, natural history observations, research logs, archives, LLM helpers, and apps.
- Implementation Freedom: implementations may vary if they preserve place, access, observation, sample, preservation, safety, and interpretation boundaries.
- Human Readability: required; a person should understand what natural boundary is being approached and what is not claimed.
- Machine Readability: structured fields should remain stable enough for viewers, adapters, and validators.
- Explorer Notes: the terrain is not the map, one trace is not the ecosystem, and one sensor log is not the whole river.

## Related Origins

- [tiinex.v1.origin.md](tiinex.v1.origin.md)
- [tiinex.digital.v1.origin.md](tiinex.digital.v1.origin.md)

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.v1.origin.md](https://github.com/Tiinex/docs/blob/0067d2972413d1de33ad34810a4913210a17b51b/.topics/.origins/tiinex.v1.origin.md)
  - Value: Mt-fjkfwRIGumdnLru9PkqK03zvSth4dXCWBdlvZYMc

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: fU59dfrh7RlYMlcN4oiRrwoIf4cEvhhKqGqJcjYB2tg