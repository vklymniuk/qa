## Architecture & design

### Non-functional requirements
What NFR is, and how to implement them in the solution.
The candidate should be able to explain the basic concepts of NFR and approaches for the integration of these concepts into a solution.

Scope:
Difference between functional & non-functional requirements, the impact of NFR on a project
How to cover and test(Stress, Load, Performance)

### What is NFR? What impact do they have on system design?
Ask to describe what type of NFR candidate knows.

What is performance testing?

What are common best practices and pitfalls when doing performance tests?

What kind of problems Performance / Load / Stress testing can help identify & solve?


### Modern patterns
Design patterns for building maintainable and scalable applications, and can explain their pros/cons and use cases.

### Scope:
DDD - bounded context, ambiguous language, domain experts, use cases, cons, and pros.

CQRS - read/write layer & communication, use cases, cons and pros.

Event Sourcing -  event store, snapshots, event processing, use cases, cons and pros.


### What is DDD and why is it useful?
What is a bounded context in DDD?
Enumerate and describe DDD building blocks.

### What is CQRS?
What are CQRS use cases and pros/cons?

### What is Event Sourcing?
Name Event Sourcing use cases and pros/cons.
How to handle external queries (queries to external systems/APIs) in event sourcing?


Databases
Selecting a proper DB technology for the application 
based on functional/non-functional requirements

Scope:
OLTP vs OLAP scenarios 
Relational vs non-relational databases: usecases, pros/cons.

Key-value, document-oriented, columnar, time series, graph database: use cases, scalability 
(how to scale particular solution horizontally, how it handles concurrent read/writes)

What is the difference between OLTP and OLAP applications? 

Why they can require different types of DBs?


Describe the use cases for relational and non-relational DBs.

List types of non-relational DBs. What are the use cases for each type?

Explain how to horizontally scale the non-relational DB of your choice. Describe how it handles concurrent reads/writes. 
