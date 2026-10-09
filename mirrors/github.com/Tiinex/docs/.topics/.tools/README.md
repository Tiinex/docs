# Tiinex Tools

This directory contains reusable tool definitions.

A Tiinex tool is anything that helps an actor do bounded work. It may be physical, procedural, social, digital, runtime-based, or mixed. A tool definition describes what the tool is for, what it may do, what it must not silently claim, and what a later human or LLM should know before trusting its output.

## Base Contract

- [tiinex.tool.v1.md](tiinex.tool.v1.md) defines the base tool contract.

## Included Tool Definitions

- [lineage.navigation.v1.tool.md](lineage.navigation.v1.tool.md) defines a portable navigation tool for following Tiinex lineage without inventing missing continuity, relations, origins, preservation, or evidence.

## Relationship To Interfaces And Adapters

Tools are the broad family. Interfaces specialize tools for contact boundaries between contexts. Adapters specialize interfaces for boundary-crossing and translation into Tiinex-compatible artifacts or candidates.

```text
Tool
└─ Interface
   └─ Adapter
```

This keeps the model usable beyond software: a spade can be a tool, a map can be an interface, and a field notebook intake procedure can be an adapter.


## Relationship To Origins

Origins describe the source-side boundary being approached. Tools and interfaces do not prove origin claims by themselves; adapters may carry material from origins into Tiinex-compatible findings or candidates when their boundaries are explicit.