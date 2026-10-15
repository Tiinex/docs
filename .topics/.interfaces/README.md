# Tiinex Interfaces

This directory contains reusable interface definitions.

A Tiinex interface is a tool-shaped boundary where contexts meet. It may be physical, procedural, social, digital, runtime-based, or mixed. The base interface contract exists so Tiinex can describe contact points and handoffs without reducing everything to software UI or APIs.

## Base Contract

- [tiinex.interface.v1.md](tiinex.interface.v1.md) defines the base interface contract.

## Relationship To Tools And Adapters

```text
Tool
└─ Interface
   └─ Adapter
```

A tool helps an actor do work. An interface is the contact boundary where contexts meet. An adapter is an interface that carries material, meaning, signal, or state across a source boundary into Tiinex-compatible artifacts or candidates.


## Relationship To Origins

Origins describe the source-side boundary being approached. Tools and interfaces do not prove origin claims by themselves; adapters may carry material from origins into Tiinex-compatible findings or candidates when their boundaries are explicit.