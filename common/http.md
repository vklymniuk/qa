00 HTTP Internals


* HTTP: request, response, methods, headers, status codes, cookies


*** HTTP1 vs HTTP2

HTTP stands for hypertext transfer protocol & it is used in client-server communication. By using HTTP  user sends the request to the server & the server sends the response to the user. There are several stages of development of HTTP but we will focus mainly on HTTP/1.1 which was created in 1997 & the new one is HTTP/2 which was created in 2015.

———————————————————————————————————————————————————————————————————————————————————————
						HTTP.1.1								|		HTTP/2
———————————————————————————————————————————————————————————————————————————————————————
Uses works on the textual format.								|		It works on the binary protocol
———————————————————————————————————————————————————————————————————————————————————————
There is head of line blocking that blocks							|		It allows multiplexing so one TCP  connection 
all the requests behind it until it doesn’t get its all resources.		|		is required for multiple requests.
———————————————————————————————————————————————————————————————————————————————————————
It uses requests resource Inlining for use getting multiple pages		|		It uses PUSH frame by server that collects all multiple pages
———————————————————————————————————————————————————————————————————————————————————————
It compresses data by itself.									|		It uses HPACK for data compression.
———————————————————————————————————————————————————————————————————————————————————————

* Describe what happens when you open webpage in a browser? 

For better understanding,  let’s assume the situation when you make a request to the server for the geeks for geeks.html page & server responds to you as a resource geeks for geeks.html page. before sending the request and the response there is a TCP connection established between client  & server.again you make a request to the server for image .jpg & the server gives a response as an image img.jpg. the connection was not lost here after the first request because we add a keep-alive header which is the part of the request so there is an open connection between the server & client. There is a persistent connection which means several requests & responses are merged in a single connection. These are the drawbacks that lead to the creation of HTTP/2: The first problem is HTTP/1.1 transfer all the requests & responses in the plain text message form. The second one is head of line blocking in which TCP connection is blocked all other requests until the response does not receive all the information related to the header file is repeated in every request

HTTP/2:HTTP/2 was developed over the SPDY protocol. HTTP/2 works on the binary framing layer instead of textual that converts all the messages 
In binary format. It works on fully multiplexed that is one TCP connection is used for multiple  requests HTTP/2 uses HPACK which is used to split data from header. It compresses the header. The server sends all the other files like CSS & JS without the request of the client using the PUSH frame.


What is request/response structure?

HTTP messages are how data is exchanged between a server and a client. There are two types of messages: requests sent by the client to trigger an action on the server, and responses, the answer from the server. 

HTTP messages are composed of textual information encoded in ASCII, and span over multiple lines. In HTTP/1..1, and earlier versions of the protocol, these messages were openly sent across the connection. In HTTP/2, the once human-readable messages is now divided up into HTTP frames, providing optimisation and performance improvements.


—————————————————————————
HTTP/1.x message																		
																		
PUT 						/create_page HTTP/1.1							
Host:						localost:8000
Connection: 					keep-alive
Upgrade-Insecure-Requests: 	1
Content-Type: 				text/html
Content-Length: 				345
—————————————————————————


—————————————————————————
				HTTP/2 stream 
			(composed of frames)
—————————————————————————
				Frame
			 Type=HEADERS
—————————————————————————
				Frame
			Type=CONTINUATION
—————————————————————————
				Frame
			Type=CONTINUATION
—————————————————————————
				Frame
			Type=DATA
—————————————————————————
				Frame
			Type=DATA
—————————————————————————
				Frame
			Type=DATA

The HTTP/2 binary framing mechanism has been designed to not require any alteration of the APIs or config files applied:
It is broadly transparent to the user.


HTTP requests, and responses, share similar structure and are composed of:
	0.	A start-line describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.
	0.	An optional set of HTTP headers specifying the request, or describing the body included in the message.
	0.	A blank line indicating all meta-information for the request has been sent.
	0.	An optional body containing data associated with the request (like content of an HTML form), pr the document associated with a response. The presence of the body and its size specified by the start-line and HTTP headers.

The start-line and HTTP headers of the HTTP message are collectively known as the head of the requests, where as its payload is known as the body.


HTTP Requests

‘Start line’

HTTP requests are messages sent by the client to initiate an action on the server.
Their start-line contain three elements:

	0.	An `HTTP method`, a verb (like `GET`, `PUT` or `POST`) or a noun (like `HEAD` or `OPTIONS`), that describes the action to be performed.  For example, `GET` indicates that a resource should be fetched or `POST` means that data is pushed to the server (creating or modifying a resource, or generating a temporary document to send back).
	0.	The request target, usually a URL, or the absolute path of the protocol, port, and domain are usually characterised be the request context. The
	format of this request target varies between different HTTP methods. It ca be:
	- An absolute path, ultimately followed by a ‘?’ and query string. This is the most common form, known as the origin form, and is used with 
		GET, POST, HEAD, and OPTIONS methods.
	•	POST / HTTP/1.1
	•	GET /background.png HTTP/1.0
	•	HEAD /test.html?query=alibaba HTTP/1.1
	•	OPTIONS /anypage.html HTTP/1.0 
	- A complete URL, known as the absolute form, is mostly used with GET when connected to a proxy. GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1
	- The authority component of a URL, consisting of the domain name and optionally the port (prefixed by a ':'), is called the authority form. It is only used with CONNECT when setting up an HTTP tunnel. CONNECT developer.mozilla.org:80 HTTP/1.1
	- The asterisk form, a simple asterisk ('*') is used with OPTIONS, representing the server as a whole. OPTIONS * HTTP/1.1 

	0.	The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.


‘Headers’

‘HTTP headers’ from a request follow the same basic structure of an HTTP header: a case-insensitive string followed by a colon (“:”) and a value whose
Structure depends upon the header. The whole header, including the value, consists of one single line, which can be long.

Many different headers can appear in requests. They can be divided in several groups:
	⁃	`General headers`, like `Via`, apply to the message as a whole.
	⁃	`Request headers`, like  `User-Agent` or `Accept`, modify the request by specifying it further (like Accept-Language), by giving context (like Referer), or by conditionally restricting it (like If-None).
	⁃	`Representation headers` like `Content-Type` that describe the original format of the message data and any encoding applied (only present if the message has a body).

Body 

The final part of the request is its body. Not all requests have one:  requests
Fetching resources like `GET`, `HEAD`, `DELETE`, or `OPTIONS`, usually don’t need one.
Some requests send data to the server in order to update it: as often the case with `POST` requests  (containing HTML form data).

Bodies can be broadly divided into two categories:

	⁃	Single-resource bodies, consisting of one single file, defined by the two headers: `Content-Type` and `Content-Length`.

	⁃	Multiple-resource bodies, consisting of a multipart body, each containing a different bit of information. This is typically associated with HTML Forms.


RESPONSE


Status line
	The start line of an HTTP response, called the status line, contains the following information:
		1. The protocol version, usually `HTTP/1.1`
		2. A status code, indicating success or failure of the request. Common status codes are 200, 404, 302
		3. A status text. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

A typical status line looks like: `HTTP/1.1 404 Not Found`.

Headers

`HTTP headers` for responses follow the same structure as any other header: a case-insensitive string followed by a colon (“:”) and a value whose 
structure depends upon the type of the header. The whole header, including its value, presents as a single line.

Many different headers can appear in response. These can be divided into several groups:
	- `General headers`, like `Via`, apply to the whole message.
	- `Response headers`, like `Vary` and `Accept-Ranges`, give additional information about the server which doesn’t fit in the status line.
	- `Representation headers` like `Content-Type` that describe the original format of the message data and any encoding applied (only present if the message has a body).



Body 

The last part of a response os the body. Not all responses have one:
responses with a status code that sufficiently answers the request without
The need for corresponding payload (like 201 `Created` or 204 `No Contents) usually don’t.

Bodies can be broadly divided into three categories:
	- Single-resource bodies, consisting of a single file of known length,
	   defined by the two headers: `Content-Type` and `Content-Length`.
	- Single-resource bodies, consisting of a single file of unknown length,
	   encoded by chunks with `Transfer-Encoding` set to `chunked`.
	- `Multiple-resource bodies`, consisting of a multipart body, each containing
	    a different section of information. These are relatively rare.


HTTP/2 Frames

HTTP/1.x messages have a few drawbacks for performance:
	- Headers, unlike bodies, are uncompressed.
	- Headers are often very similar from one message to the next one, yet still repeated across connections.
	- No multiplexing ca be done. Several connections need opening on the same server: and warm TCP connections are more efficient than cold ones.

HTTP/2 introduces an extra step: it divides HTTP/1.x messages into frames which are embedded in a stream. 
Data and header frames are separated, which allows header compression. 
Several streams can be combined together, a process called multiplexing, allowing , more efficient use of underlying TCP connections.

HTTP frames are now transparent to Web developers. This is an additional step in HTTP/2, between HTTP/1.1 messages and the underlying
transport protocol. No changes are needed in the APIs used by Web developers to utilise HTTP frames; when available in both the browser
And the server, HTTP/2 is switched on and used.

Conclusion

HTTP messages are the key in using HTTP; their structure is simple, and they are highly extensible.
The HTTP/2 framing mechanism adds a new intermediate layer between the HTTP1.x syntax and the underlying transport protocol, 
without fundamentally modifying it: building upon proven mechanism. 

HTTP/1.x message


Which HTTP method will be used?
Do you know any other HTTP methods?


Which groups of status codes do you know?
	⁃	100 group: Items in progress
	⁃	200 group: Successful responses.
	⁃	300 group: Redirects, which tell the browser to look someplace else.
	⁃	400 group: Browser errors, also called client errors.
	⁃	500 group: Server errors.

 **  What (usually) happens in case of unexpected server error?
	⁃	Server stop execution of program end code sends the response with error details to requested side

Explain the authentication flow using cookies.

***Key differences between HTTP1.1 and HTTP2?

HTTP1.1 = single message with blocking requests pull that can stack and binary lightweight frames of data 