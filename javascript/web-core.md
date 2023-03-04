## HTTP Internals

Scope:
* HTTP: request, response, methods, headers, status codes, cookies
*** HTTP1 vs HTTP2


* Describe what happens when you open webpage in a browser? 

What is request/response structure?

Which HTTP method will be used?

Do you know any other HTTP methods?

Which groups of status codes do you know?

**  What (usually) happens in case of unexpected server error? Explain the authentication flow using cookies.

*** Key differences between HTTP1.1 and HTTP2?


### Web APIs


Note: gRPC & GraphQL  to be evaluated only if the candidate has experience with

Principles, technics, and tools behind Web API design and documentation.

Scope:
** REST, OpenAPI
** gRPC (if you have relevant experience)
*** GraphQL (if you have relevant experience)
*** API Gateway


* 
What is REST?
Describe REST API  principles.

** 
What is the difference between POST, PUT and PATCH methods semantic in RESTful APIs?

Which approaches to REST API versioning do you know? Can you compare them? 

Which approaches to REST API pagination do you know? Can you compare them? 

How do you document REST API?

Which types of gRPC service method do you know? (e.g. unary RPC, server streaming, client streaming, bidirectional streaming). 

How do you evolve gRPC API in a backward/forward compatible way?

What is gRPC deadline?

How do you modify data with GraphQL? 

*** What is the purpose of API gateway?   
What is the purpose of hypermedia in REST? What is HATEOAS?
Compare REST with gRPC and GraphQL. Pros/cons and when to use them?


## Security

Data protecting, and knows how to mitigate OWASP top 10 volunerabilities 

Scope:
** injection, OWASP top 10 and main vulnerabilities
*** XSS, GSRF



** What is OWASP top 10 and what vulnerabilities you know?

** For any vulnerability how to prevent?

*** What is XSS and how to prevent it?

*** What is CSRF & when it is applicable?

## Web

Web frameworks (FastAPI, Django, Flask, etc)

Scope:
* MVC model, routing, serialization/de-serialization
** Request lifecycle, middleware, error handling
*** Documenting API


* 
Explain the MVC model. Does the framework of your choisce follows/encourge it?
How the request is routed to the appropriate view/handler?
How to deserialize and validate form/json data that came with the request before processing them?
How to serialize data into json for response?

**
What is the request lifecycle? Could you describe various stages of the request lifecycle?
What is middleware and its purpose? How can you can your own middleware?

***
In case of RESTful API how would you document it using OpenAPI standard? 
Is there a way to make sure you API follows contract described with OpenAPI sepcification?


## Background data processing

Is capable to organize a reliable data processing using 
one of the frameworks  (Celery, Dask or similar)?

Scope:
* Pros/cons, storing/obtaining results, errors handling
** Pipelines, scheduling and triggers
*** Scalability and monitoring


* When to use background data processing and when not? 

How to trigger background job and obtain its result (e.g. in Celery)?

** What are the benefits of chaining several tasks/jobs into a pipeline? How to do this in your framework?
Is it possible to schedule periodic task/pipeline in your framework? How?

*** How to scale your data processing cluster horizontally (e.g. multiple distribiuted celery workers for a single task)?
What functionality/tooling does your framwork provides for monitoring?