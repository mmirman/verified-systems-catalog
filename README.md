# Verified Systems Components in Lean and Coq

An evidence-first catalog of systems components whose correctness claims are machine-checked by **Lean** or **Coq/Rocq**. The published site is generated from [`data/components.json`](data/components.json); the Wikipedia-compatible draft is in [`wikipedia/Draft_Verified_systems_components_in_Lean_and_Coq.wiki`](wikipedia/Draft_Verified_systems_components_in_Lean_and_Coq.wiki).

## Inclusion standard

An entry must identify a concrete system component or executable implementation, a Lean/Coq proof artifact, the exact proposition or refinement relation proved, and the trusted boundary. “Written in Lean,” testing, model checking, a paper-only proof, or use of another prover is insufficient. Frameworks are included only when a verified example component is named. Claims are paraphrases of the linked proof/documentation, never a claim that the whole deployed stack is bug-free.

## Fields

- **Specification**: the mathematical contract actually discharged.
- **Artifact**: the implementation to which the theorem applies.
- **Assumptions / TCB**: axioms, extraction/compiler/runtime, hardware or environment models that are not established by the theorem.
- **Not proved**: common over-readings explicitly ruled out.
- **Evidence**: source/proof repository and paper or official documentation.

## Contributing

Add or correct entries in `data/components.json`. Every material statement needs a stable primary source and, where possible, a theorem/module name. Do not infer end-to-end correctness from a verified model. Run `node scripts/validate.mjs` before submitting.

## License

Site code and original catalog prose: CC0-1.0. Linked projects retain their own licenses. The Wikipedia draft is offered under CC BY-SA 4.0 and GFDL-compatible terms.
