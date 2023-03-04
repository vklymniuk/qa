Pros/cons, when to split; microservices vs SOA, DDD in microservices, scaling


*** What is microservice?

How to decide what part of code to consider a microservice?

What are pros and cons of microservices?

**** When do you usually consider splitting monolitic app to microservices?

Describe approaches to handle cross cutting concerns in microservices?

What are typical microservice related patterns?

Describe patterns of decomposition of monolitic application


## Integration patterns

Enterpries integration patterns , Saga, Shared DB, Transactional outbox, Transactional log, Sidecar

*** provide several examples of integration patterns

What is Transactional Log and what tools usually uses it

**** what Transactional outbox pattern gives to application

Give an example of Sidecar pattern usage. how it is related to singe node pattern?

What is saga? What it is for?

What is shared DB, cons/pros of such approach

Compare orchestration vs choreography in saga implementation


## Communication models and protocols

Communication models: sync (request-response) vs async (event-driven)

Communication protocols: REST (HTTP1, HTTP/2), GraphQL, gRPC, 

Binary serialization protocols: protobuf, avro, Thrift, Message Pack

## communication modes

*** describe sync communication models? Pros and cons?

describe async communication model with pros and cons?

when do you choose sync over async and vice versa?

**** gRPC streams

## communication protocols:

*** describe what communication approach you would use for microservices and why? (rest vs grpc vs graphql) 

Is GraphQL useless in the HTTP/2 -HTTP/3 era?

**** Compare REST vs gRPC

## serialization protocols:

*** what are capabilities of protobuf, describe use cases

What is avro, what it's internal structure, where does it stores schema?

**** compare schema evolution options of protobuf/avro/thrift/message pack

Message queues/Streaming queues

Message Queue vs Streaming Queue. RabbitMQ, ActiveMQ, ZeroMQ, Kafka, 

Duplicates handling, ordering, error handling

*** What is stream? 

What is Pub/Sub pattern?

Pub/sub model vs Events stream model?

What is structured and unstructured streams? How to deal with each one?

What is message queue?

Message queue vs Streaming queue?

RabbitMQ exhange strategies?

Downsides of streaming queue in microservices? 

How to handle message ordering in both queue types?

What is dead letter pattern? When to use and how to process?

How to process duplicates? How they can happen?

What is consumer groups in Kafka? How they work?

What is topic in kafka? What is partion in Kafka?

**** How process stream data on consumer side? Example: time windows, aggregations

RabbitMQ architecture?

Kafka architecture

RabbitMQ vs ActiveMQ?

How to organize streams? stream per service? one stream for all services? stream per event type?

How to calculate amount of partitions in Kafka for proper setup?

## Akka Streaming

* Library Motivation

** Defining and running streams: Source, Sink, Flow, RunnableGraph, Backpressure, Streams materialization

Working with graphs: Fan-out (Broadcast, Balance, UnZip, etc), Fan-in (Merge, Zip, Concat

*** Relationship with Reactive Streams

*  What is Akka Streams and what are the use cases?

** How to define and run a stream? What are the main components of a stream?

What is stream materialization?

What are graphs? what are graphs main components? 

What is the difference between graphs and streams?

*** What is Operator Fusion and what are its consequences?

Can akka streams interoperate with RxJava or SpringReactor? 

(Interoperation with other Reactive Streams implementations)

## Service Discovery (SD)

* Service discovery (SD) in Microservices arch

** Client-side discovery

Server-side discovery

Service registry

Service Registration approaches

*** Eurika, Ribbon, Consul, Kubernetes Service Discovery

*** What is SD? What problem it solves?

What approaches do you know for SD?

How Client/Server-side discovery works, procs/cons, Compare them.

What role of service registry? 

Comapre service registrations Self- vs 3rd party?

How do you integrate SD into existing system, what to do, where to start?

**** Gossip vs Raft
K8S SD vs Eureka or Consul

## API Gateway/BFF (Backend for frontend)

Api Gateway Aggregations vs Aggregation Service pattern, cross cutting concerns: secutiry, throttling and so on. 

Frameworks: Kong, Nginx, Ocelot, Zuul, Ambassador, Spring Cloud Api Gateway


*** What is API gateway?

When to use API gateway in microservices architecture?

**** describe approaches to handle cross cutting concerns with API gateway? 

(service discovery, security, throttling, circuit breaker)

Describe API gw framework that you had experience with or know?

How api gateway can decrease complexity of microservices development?

What are downsides of API gateway Describe internal architecture of one of the existing


## Reliability

Circuit braker, retry strategy, throttling

*** What is service reablibility? 

What can go wrong?

What is retries? 

What potential issues retries can bring? 

How to deal with falbacks? 

What service can do to provide response to the user in case there is a fails in communication?

Which fallbacks options you know? ( Graceful Degradation, Cache, Functional redundancy, Stubbed data)

Timeouts configuration is important for communication? Why?

How properly implement retry strategy?

What is Circuit bracker pattern and how it works?

Should we impliment both Circual bracker and Retry strategy?

What is throttling pattern? How it helps to increase service reliability?


What common throttling strategies you know (Drop requests above value,

Prioritaze critical traffic, Drop uncommon clients, Limit concurent requests)

How to properly check service reliability and fault tolerance?

## Service Mesh

What is service mash? 

How it hepls: Advanced routing, Deployment strategies, Testing, local Envs., Tracing. 

Frameworks: Istio, linkerd, AWS Service Mash, Kong Service Mesh, Envoy

*** What is service mesh? 

What should be handled by service mesh? 

**** Which service mesh framework you know?

What is Istio?

What is LinkerD

Istio vs LinkerD

How service mesh can be integrated to the system? Which patterns are used?

How service mesh can help with releases?

How service mesh can help in testing?

Which trace frameworks are supported by Istio?

How to load balance gRPC? How service mesh can help?

How to configure Tracing in Istio?

What is mTLS?  How to configure mTLS in Istio?

How service mesh can help to organize local envs?

Can authorization be handled by service mesh?

Load balancing should be part of service mesh?


## Distributed Tracing/Logging/Monitoring

OpenTracing protocol, Zipkin, Jaeger, Aws X-Ray. ELK (EFK - filebeat instead logstash) 

Stack, Prometheus, Datadog, Grafana, custom metrics. What should be monitored? Alerts

*** what is OpenTracing/OpenTelemetry?

Describe approaches of logging in distributed systems

How to collect logs from application runs on top of Kubernetes

**** How to achieve observability in a distributed system?

What is Prometheus/Datadog? 

How these tools is differs? 

How they are collecting monitoring information?

Describes components of Prometheus stack to provide distributed Monitoring & Alerting

Jaeger configuration and practicies. 


## Testing in microservices

Chaos testing, Contract testing

*** what is contract testing?

when and why to introduce it?

**** what is chaos testing, why you should break your system intentionally?

When you should introduce chaos testing?

chaos testing implementation sttrategies and tooling


## Akka Cluster

**** What is akka cluster?

What is gossip?

Akka Cluster Singleton for what purposes do we use it? 

Akka Cluster states?

Describe a process to mark node unreachable in a cluster. Akka cluster sharding?

Gossip and CAP theorem what are we losing?


## Relational Databases
Candidate is able to use RDBMS effectively and in a safe manner

Scope:
* relational DB conepts
** SQL (DML, DDL, DCL), transactions, indexes
*** isolation levels, window functions

* Can please write simple query on two tables (joing two tables)? 

Which types of JOINs do you know?

What is the difference between JOIN and UNION?

Note: Try to ask about areas os SQL where candidate had some experience. 

E.g If never worked with union, but maybe had experience with aggregation, sorting, etc.

** What is data normalization and denormalization and pros and cons?
(Note: In case its difficult for candidate to answer ask about any  optimization techniques the candidate knows). 

What is aggregation function? How to filter results returned by the aggregation function?

What is transaction? 

Describe ACID transaction properties. (Note: This is pure theoretical question. 

If candidate does not know this abbreviation shift question to practical case.

E.g. ask how to add record to one table and increment record count in another table considering 
it will be executed in highly concurrent environment)

What are indexes? 

*** What are use cases for RDBMS database? 

(Note: In case candidate is confused try to rephrase question, e.g. when RDBMS may not be a good choice)

Which transaction isolation levels do you know? 

Describe which problems they solve.

What is Window functions and their purpose?

Describe indexes usecases and pros/cons?


# Practices, patterns and tools

GoF, DDD, CQRS, Event Sourcing.

** What are the benefit (usage) of design patterns for software engineers?

Enumerate design patterns groups/types according to GoF classification.

*** What is DDD, why is it usefull?

What is bounded context in DDD?

Enumerate and describe DDD building blocks.

What is CQRS?

What is Event Sourcing?

**** What are CQRS usecases and pros/cons?

Name Event Sourcing usecases and pros/cons.

How to handle external queries (queries to external systems/apis) in event sourcing?


Communication models and protocols

Communication protocols and models and applicable use cases 

Scope: 

Communication models, use cases, pros & cons and implementation (gRPC, GraphQL, REST)

Sharing contracts and schema evolution


Communication models:

Describe sync. communication models. Pros and cons.

Describe async. communication model with pros and cons.

When do you choose sync. over async. and vice versa? gRPC streams

Communication protocols:
Describe what communication approach you would use for microservices and why. (REST vs gRPC vs GraphQL))

Compare schema evolution options of gRPC  & REST & GraphQL

Serialization protocols:
What are the capabilities of protobuf? Describe use cases.


Message queues/Streaming queues

Message queue vs streaming queue, pub/sub vs events stream models, and specific queue implementation and architecture details 

Scope: 
Usecases for queues, message queue vs streaming queue, pub/sub vs events stream

DLQ, deduplication, ordering,

Concrete questions on at least one of Kafka, RabbitMQ:

Kafka (partitioning, message consuming)

RabbitMQ (exchange strategies, routing)

Pub/sub model vs Events stream model?

What is a message queue?

Message queue vs Streaming queue?

Downsides of a streaming queue in microservices? 

How to handle message ordering in both queue types?

What are structured and unstructured streams? How to deal with each one?

How to organize streams? 

Stream per service? one stream for all services?

stream per event type?

How process stream data on the consumer side? 

Example: time windows, aggregations

What is a dead letter pattern? 

When to use and how to process?

How to process duplicates?

How they can happen?

Kafka architecture
What are consumer groups in Kafka? 

How do they work?

What is a topic in Kafka? 

What is partition in Kafka?

How to calculate the number of partitions in Kafka for proper setup?

RabbitMQ architecture?

RabbitMQ exchange strategies?