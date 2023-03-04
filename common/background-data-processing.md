Capable to organize a reliable data 
processing using one of the frameworks (Celery, Dask or similar)?

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