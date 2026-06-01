Ahaaa, då blir frågan mycket mer intressant. 😄

Om vi utgår från att:

```text id="event1"
tiinex.continuation.v1
```

är parent-schema för alla specialiseringar, så skulle jag nog göra `tiinex.event.v1` väldigt snålt.

För ett event känns som något av det mest fundamentala man kan ha:

> Något inträffade.

Inte:

> Någon tyckte något.

Inte:

> Någon beslutade något.

Inte:

> Någon vill göra något.

Bara:

> Något hände.

Jag skulle därför förvänta mig något i stil med:

```markdown
# Event

## Summary

Preserves a time-bound occurrence that happened or is claimed to have happened.

An event records that something occurred.
Interpretation, evidence, decisions, and reductions may attach later.

## Event

### What Happened

Short human-readable description.

### Event Time

When the event occurred.

### Event Scope

What was affected.

### Event Status

- observed
- reported
- inferred
- disputed

### Event References

Optional references to evidence or sources.

## Notes

An event does not need to prove itself.

Evidence may support an event later.
Feedback may challenge it later.
Decisions may depend on it later.
```

---

Och då blir asteroidexemplet:

```text id="event2"
Event:
  Asteroid impact

Event Time:
  ~66 million years ago

Status:
  inferred

Scope:
  Earth
```

Sen kan du ha:

```text id="event3"
Evidence
  -> crater

Evidence
  -> iridium layer

Reduction
  -> asteroid impact likely caused extinction

Decision
  -> build planetary defense
```

som egna continuations efteråt.

---

Det som känns elegant är att event då blir den mest neutrala noden i hela systemet.

```text id="event4"
Topic
  groups things

Task
  wants things

Decision
  chooses things

Reduction
  simplifies things

Event
  just happened
```

😄

Så ja, jag skulle absolut låta:

```text id="event5"
tiinex.event.v1
```

ärva från:

```text id="event6"
tiinex.continuation.v1
```

och hålla det nästan provocerande minimalt.

För ju mindre ett event försöker tolka verkligheten, desto mer användbart blir det som grund för resten av lineagen.
