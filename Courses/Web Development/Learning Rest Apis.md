---
type: course
cssclasses:
  - lle-course
slug: learning-rest-apis
url: "https://www.linkedin.com/learning/learning-rest-apis"
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFxbgf-TpDrZA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669449061?e=2147483647&amp;v=beta&amp;t=uuA6mFx_aEONRH-juOhao5Q6BBEP3GZ91CIqvXpnNS4"
linkedin_topic: Web Development
learning_paths:
  - '[[Become a RESTful API Developer]]'
  - '[[Become a Full-Stack Web Developer]]'
prev_courses:
  - null
  - '[[NoSQL Essential Training]]'
next_courses:
  - '[[HTTP Essential Training]]'
  - '[[Devops Foundations]]'
path_nav: '[{"path":"Become a RESTful API Developer","position":1,"total":5,"prev":null,"next":"HTTP Essential Training"},{"path":"Become a Full-Stack Web Developer","position":11,"total":12,"prev":"NoSQL Essential Training","next":"Devops Foundations"}]'
path_count: 2
tags:
  - course
  - topic/software-development
  - topic/web-development
status: not-started
created: 2026-04-21
---

![Learning Rest Apis](https://media.licdn.com/dms/image/v2/C4E0DAQFxbgf-TpDrZA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669449061?e=2147483647&amp;v=beta&amp;t=uuA6mFx_aEONRH-juOhao5Q6BBEP3GZ91CIqvXpnNS4)

# Learning Rest Apis

> Learn the basics of REST APIs. In this course, discover what REST APIs are, why they matter, and how putting them to use can help you build faster, more efficient applications. Review how HTTP and REST APIs relate, explore the six constraints of REST, and learn about HTTP status messages. Learn how to get started with consuming REST APIs to incorporate them into data-driven applications.

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis)
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Morten Rand-Hendriksen]]

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=0)** - Open up your favorite social media app on your phone, read the latest news on your tablet, search for travel deals on your computer, or watch your favorite show through a streaming service.
>
> **[0:10](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=10)** What do all these things have in common?
>
> **[0:12](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=12)** They're pulling information from the internet using REST APIs.
>
> **[0:17](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=17)** So what does that mean?
>
> **[0:18](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=18)** That's what you'll learn in this course and here is a small preview.
>
> **[0:22](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=22)** Take your average web-based application, like a social media site.
>
> **[0:26](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=26)** When you open it in your computer, you see a header with a bunch of navigation options, some sidebars with information, and a stream.
>
> **[0:34](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=34)** That stream updates continuously as you scroll down, always showing you more content.
>
> **[0:39](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=39)** Now, here's how that works on the backend.
>
> **[0:42](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=42)** The website itself is just a framework of templates for the application.
>
> **[0:48](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=48)** It provides the physical header or the sidebars, the main content area, and the skeleton for posts to be displayed, but no actual content.
>
> **[0:56](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=56)** When you visit the site, this entire framework is downloaded and starts running in your browser and it sends automated requests to the representational state transfer application programming interface, or REST API, for that service.
>
> **[1:11](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=71)** Hey, can you give me the 50 latest posts from my stream?
>
> **[1:15](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=75)** The REST API responds by sending a data package with just the posts themselves, and the framework pulls the bits and pieces out and places them in the correct slots in the templates.
>
> **[1:27](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=87)** Scroll to the end of the list and another REST request is sent, received, and parsed.
>
> **[1:33](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=93)** Use your smartphone and the same REST request is sent, received, and parsed in an application dedicated to your particular operating system.
>
> **[1:41](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=101)** In a nutshell, REST APIs allow us to fully separate the presentation of content from the content itself, and allows you and me to build lightning fast applications that consume data rather than entire pages, which, in turn, makes for faster solutions that work everywhere and are ready for whatever we build in the future.
>
> **[2:02](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=122)** Knowing how these REST APIs work and how to work with them is the key to building powerful websites and web-based applications.
>
> **[2:10](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=130)** Sound exciting?
>
> **[2:11](https://www.linkedin.com/learning/learning-rest-apis/welcome?u=76281980&t=131)** I'm here to show you how to get it right, so let's get cracking.

> [!info]- Semantic Content
>
> **Env Vars:** rest (7), api (2)
> **Code Keywords:** interface (1), let (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - open (1)


### 1. REST API: Representational State Transfer Application Programming Interface

#### The RESTful librarian
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=0)** - To make sense of what a REST API is and how it works, imagine a library with books, a librarian, and people who want to borrow, add, update, or remove those books.
>
> **[0:11](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=11)** On one side, we have the clients.
>
> **[0:14](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=14)** This is the web application, or mobile app, or doorbell, or smartwatch, or whatever interfaces use access to data.
>
> **[0:21](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=21)** On the other side, we have the data store, typically a database, or database server, or some other type of server.
>
> **[0:28](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=28)** In the middle sits our librarian, the REST API, receiving, processing, and handling requests and responses.
>
> **[0:35](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=35)** Here's how our library works.
>
> **[0:38](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=38)** When the client submits a request, in this case to get a resource, the REST API receives that request, identifies the requested resource, figures out what data needs to be gathered, and in what format, creates a representation of the data matching the requested format, bundles it all up with the response header containing metadata, like the resource ID, and hyperlinks to available actions, the media formats this response has when the response was sent and other information, and sends it all back to the client.
>
> **[1:11](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=71)** The client receives the data and parses it into something meaningful on its end, while the REST API sits quietly waiting for the next request.
>
> **[1:20](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=80)** Next, the client, or rather its user wants to change something.
>
> **[1:24](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=84)** These changes are applied to the content received in the original response, and sent back as a put request using the original ID.
>
> **[1:33](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=93)** The REST API receives the request, recognizes this as a put request for an existing resource, notes the requested media format, identifies the requested resource, converts the requested data into a media format that works for the data store, makes the changes submitted, and returns the new representation of the resource along with a success message to notify the client everything went as expected.
>
> **[2:03](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=123)** In this example, we have one client sending requests to the REST API.
>
> **[2:08](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=128)** In most applications we'll have several, maybe hundreds, or thousands, or millions of clients making requests, so the librarian will be very busy.
>
> **[2:16](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=136)** But the actual flow is exactly the same.
>
> **[2:20](https://www.linkedin.com/learning/learning-rest-apis/the-restful-librarian?u=76281980&t=140)** The client makes the request, the REST API receives the request, gathers and parses the data, and returns that data and the response header to the client.

> [!info]- Semantic Content
>
> **Env Vars:** rest (7), api (7)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - to (1)

#### What is a REST API?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=0)** - REST and API are acronyms for Representational State Transfer and Application Programming Interface.
>
> **[0:09](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=9)** REST APIs are integral to web application development and are becoming mainstays of all web development.
>
> **[0:16](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=16)** Understanding what they are and how they work starts with understanding what these names, representational state transfer and application programming interface, actually mean.
>
> **[0:26](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=26)** According to MDN, Representational State Transfer or REST refers to a group of software architecture design constraints that bring about efficient, reliable, and scalable systems.
>
> **[0:37](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=37)** So REST isn't a specific technology, but rather a data architecture and design methodology that produces predictable and consistent outputs and behaviors by receiving a set of standard methods called verbs and returning standardized structured data, typically JSON or XML, called the resource.
>
> **[0:56](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=56)** Representational State Transfer is a literal description of what's happening.
>
> **[1:00](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=60)** We transition between representations of states and these representations are transformed back and forth between the application and the server.
>
> **[1:10](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=70)** To make sense of this, consider a typical website.
>
> **[1:13](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=73)** Each page comprises a single HTML document containing the content, any reference items like images, one or more style sheets describing how the document is presented in the browser, and some JavaScript manipulating the document or styles or both.
>
> **[1:29](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=89)** When the visitor navigates from one page to another, they send a URL, Universal Resource Locator, request to the server pointing at a web resource in the form of a specific HTML document.
>
> **[1:41](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=101)** The server responds by returning the document along with its adjoining files to the browser which replaces the previous content with all new content.
>
> **[1:50](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=110)** This works fine, but it's resource intensive.
>
> **[1:54](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=114)** Each new page requires a completed HTML document and the document has to be written by a developer or generated by a content management system before it's downloaded and rendered in the browser.
>
> **[2:06](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=126)** Now imagine instead of a website comprising individual documents generated and downloaded from the server, we have a web application.
>
> **[2:15](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=135)** An application downloaded to the browser that runs in the browser and is populated with data from the web.
>
> **[2:20](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=140)** In this application, each page is a view representing the current state.
>
> **[2:27](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=147)** When the visitor loads the site for the first time, all the components that make up the application are downloaded including an HTML framework, referenced items, one or more style sheets, and some JavaScript.
>
> **[2:40](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=160)** The application then sends a URI or Universal Resource Identifier request for a web resource representing the next state of the application to be transferred, and uses the resulting data to build the current view.
>
> **[2:55](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=175)** When the visitor navigates from one view to another, the application sends a new URI request for the web resource representing the next state of the application which is transferred and used to add, modify, replace, or delete the previous data.
>
> **[3:10](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=190)** The key is this representational state is transferred as a data object, not the entire new set of files.
>
> **[3:18](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=198)** And the application can update its data without rendering the whole new page.
>
> **[3:23](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=203)** This allows us to create so-called single page applications on the web and native apps for mobile devices and platforms that all use or consume the same REST resource.
>
> **[3:34](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=214)** To give a practical example, when you visit LinkedIn on your computer and your smartphone, you use two different applications to access the same data from the same REST resource.
>
> **[3:45](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=225)** All this back and forth is controlled through an application programming interface or API.
>
> **[3:51](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=231)** An API is a set of features and rules that exist inside a software program enabling interaction between the software and other items, such as other software or hardware.
>
> **[4:02](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=242)** In the context of REST APIs, the API is the collection of tools used to access and work with REST resources through your adverbs including get, pulls, put, and delete.
>
> **[4:14](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=254)** You can think of the REST resource as a librarian and the API as the language used to talk to them.
>
> **[4:20](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=260)** Hey Morton, please get me the 10 most recent articles on digital ethics.
>
> **[4:25](https://www.linkedin.com/learning/learning-rest-apis/what-is-a-rest-api?u=76281980&t=265)** Hey Morton, please put this document to the library under the Norwegian Folklore category, and please delete this document from the library as it's no longer relevant.

> [!info]- Semantic Content
>
> **Env Vars:** rest (9), api (5), html (4), uri (2), mdn (1)
> **Code Keywords:** interface (3), delete (3), this, (1)
> **Definitions:** is a  (3), refers to (1)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), such as (1)
> **Documentation:** mdn (1)
> **Best Practices:** the key is (1)
> **Speakers:** - rest (1)

#### Sidebar: URL vs. URI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=0)** - Short sidebar.
>
> **[0:01](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=1)** Moving through this course, you'll hear me use the acronyms URL and URI quite a lot and you may be wondering what the difference is.
>
> **[0:08](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=8)** So let me give you a brief explanation.
>
> **[0:11](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=11)** In the official definition, a URI or Universal Resource Identifier, is described as a "compact sequence of characters "that identifies an abstract or physical resource" that "provides a simple and extensible means "for identifying a resource."
>
> **[0:28](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=28)** The URI is the most generic method for naming and locating a web resource.
>
> **[0:33](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=33)** The official examples of URIs show you that any sequence of characters that identifies a resource is considered a URI.
>
> **[0:41](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=41)** The URL, or Universal Resource Locator, is a subset of the URI.
>
> **[0:47](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=47)** The URL not only identifies a resource, but also explains how to access that resource by providing an explicit method like HTTP or FTP.
>
> **[0:58](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=58)** In other words, all URLs are URIs, but not all URIs are URLs.
>
> **[1:05](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=65)** There's also another subset of URIs we rarely talk about, the URN, or Universal Resource Name.
>
> **[1:13](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=73)** The URN refers to both URIs under the URN scheme and to any other URI with the properties of a name.
>
> **[1:22](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=82)** The classic explanation of the difference between a URN and a URL is to say the URN is a unique name identifier, like the name of a person.
>
> **[1:31](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=91)** There are many people named Morten, but only one person name Morten Rand-Hendriksen.
>
> **[1:35](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=95)** Refer to me by my full name and anyone who knows me knows who you're talking about, even if I'm not there and they don't know where I am at the moment.
>
> **[1:43](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=103)** The URL provides my actual physical location.
>
> **[1:48](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=108)** So right now my URL is Earth, USA, California, Carpinteria, etc.
>
> **[1:54](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=114)** On the web, a URN can be either an explicit URN, like oasis:names:spcification:docbook, etc.
>
> **[2:03](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=123)** or it can be a resource name like [linkedin.com/learning/instructors/morten-rand-hendrikson](https://linkedin.com/learning/instructors/morten-rand-hendrikson).
>
> **[2:10](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=130)** Finally, a URN can also be a URL, but doesn't have to be.
>
> **[2:15](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=135)** So in conclusion, a URL might also be a URN and both are URIs.
>
> **[2:22](https://www.linkedin.com/learning/learning-rest-apis/sidebar-url-vs-uri?u=76281980&t=142)** When we talk about REST APIs, we typically use the generic term URI to refer to how we access resources because within our code, we can use either URLs or URNs or a combination and URIs cover all options.

> [!info]- Semantic Content
>
> **Env Vars:** urn (9), url (8), uri (7), http (1), ftp (1)
> **Definitions:** is a  (2), in other words (1), refers to (1)
> **Code Keywords:** let (1), abstract (1), finally, (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Speakers:** - short (1)

#### The six constraints of REST
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=0)** - [Instructor] Representational state transfer, or REST, refers to a group of software architecture design constraints that bring about efficient, reliable, and scalable systems.
>
> **[0:11](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=11)** There are six of these constraints and to understand REST, we need to know what they are and why they are there.
>
> **[0:17](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=17)** So let's break them down.
>
> **[0:19](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=19)** Constraint number one, client-server architecture.
>
> **[0:23](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=23)** This constraint ensures proper separation of concerns.
>
> **[0:26](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=26)** The client manages user interface concerns, while the server manages data storage concerns.
>
> **[0:33](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=33)** In return, we get a highly portable system where one REST service can serve many different clients and interfaces without knowing or caring what those interfaces look like or what they are doing.
>
> **[0:44](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=44)** In short, we have a complete separation between the content and its presentation and interaction.
>
> **[0:51](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=51)** Constraint number two, statelessness.
>
> **[0:54](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=54)** No client context or information, AKA state, can be stored on the server between requests.
>
> **[1:01](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=61)** The client is responsible for keeping track of its own session state and all requests sent from a client must be self-contained and complete.
>
> **[1:10](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=70)** If the client's session state is relevant, it must be sent along with a request and if the server needs to store that state, it must pass it on to a database or similar service for a specific time.
>
> **[1:21](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=81)** As an example, the server can be asked to pass on an authentication token for a set period of time to allow authenticated requests.
>
> **[1:30](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=90)** Constraint number three, cacheability.
>
> **[1:32](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=92)** Cacheing, as in storing responses for a set period of time, is an intricle part of web architecture and performance optimization.
>
> **[1:41](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=101)** All REST responses must be clearly marked as cacheable or non-cacheable to ensure cacheing works as expected on the client end.
>
> **[1:49](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=109)** This means cacheing responses that won't or are unlikely to change, cacheing rarely or periodically changed responses for reasonable periods of time, and blocking cacheing for constantly changing responses.
>
> **[2:01](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=121)** Constraint number four, layered system.
>
> **[2:04](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=124)** The system must be designed so the client can't know and doesn't care whether it's connected directly to the server or to an intermediary like a mirror or a CDN.
>
> **[2:15](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=135)** This ensures scalability and also helps with security.
>
> **[2:19](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=139)** Constraint number five, code on demand.
>
> **[2:22](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=142)** Servers are allowed to transfer executable code in the form of client side JavaScript and compiled components to the client to extend and customize functionality.
>
> **[2:32](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=152)** This is a less common use of rest.
>
> **[2:34](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=154)** And finally, constraint number six, uniform interface, which breaks down into four more constraints, so it's really not a single constraint but just four more constraints.
>
> **[2:45](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=165)** A uniform interface must use resource identification in requests.
>
> **[2:50](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=170)** In REST systems on the web, a URI is used to send a request and that URI will specify what resource it is looking for.
>
> **[2:58](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=178)** So a URI like authors/mortens/bio is requesting my bio as a resource.
>
> **[3:04](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=184)** The key here is the resource is the data sitting on the server.
>
> **[3:09](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=189)** What REST returns is a representation of that resource which can have a different format from the server resource.
>
> **[3:15](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=195)** So, while the resource data may be stored as a table in my SQL, the return representation may be JSON or XML or even HTML.
>
> **[3:25](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=205)** Next, a uniform interface must allow resource manipulation through representations.
>
> **[3:32](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=212)** This means once a client has a representation of a resource, it can also modify or delete that resource.
>
> **[3:38](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=218)** In other words, the client given the right level of access, can control what's stored on the server.
>
> **[3:45](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=225)** Third, a uniform interface must issue self-descriptive messages.
>
> **[3:50](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=230)** This goes for both sending and receiving REST data.
>
> **[3:53](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=233)** Each representation must describe its own data format.
>
> **[3:57](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=237)** So if you're receiving JSON, the response message will have its media type set to JSON.
>
> **[4:03](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=243)** Without this information, the data cannot be reliably parsed.
>
> **[4:07](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=247)** And fourth and finally, a uniform interface must use hypermedia as the engine of application state.
>
> **[4:14](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=254)** This is a complicated way of saying once the client has access to a REST resource, it should be able to discover all available resources and methods through the hyperlinks provided.
>
> **[4:25](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=265)** Request a page resource and along with the page contents, the return representation should include hyperlinks to all resources and methods available.
>
> **[4:34](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=274)** In other words, the REST service describes its own use with every returned resource.
>
> **[4:40](https://www.linkedin.com/learning/learning-rest-apis/the-six-constraints-of-rest?u=76281980&t=280)** If and only if a web-based API meets these six constraints, it can be considered a RESTful API.

> [!info]- Semantic Content
>
> **Env Vars:** rest (9), uri (3), json (3), api (2), aka (1)
> **Code Keywords:** interface (6), self (2), pass (2), finally, (2), let (1)
> **Definitions:** is a  (3), in other words (2), refers to (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### How REST relates to HTTP
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=0)** - Working with REST APIs, you'll most likely send your requests through HTTP.
>
> **[0:05](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=5)** Does that mean REST and HTTP are intrinsically linked?
>
> **[0:09](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=9)** No, but a large percentage of REST APIs are available through the web using the HTTP protocol.
>
> **[0:15](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=15)** So although not all REST APIs use the HTTP protocol, the RESTful ones do.
>
> **[0:21](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=21)** Let me explain.
>
> **[0:22](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=22)** HTTP, short for HyperText Transfer Protocol, is the protocol your web browser uses to access hypertext documents on the world wide web.
>
> **[0:32](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=32)** That world wide web lives on the internet alongside other services like SMTP for email, various instant messaging services, video streaming, and so on.
>
> **[0:43](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=43)** As you have learned, REST is a set of six software architecture design constraints that produce a specific type of service.
>
> **[0:50](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=50)** There's nothing in that definition of REST that stipulates that service must run on HTTP and therefore the web.
>
> **[0:58](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=58)** You could just as easily make a REST service running on FTP or SMTP or some other protocol.
>
> **[1:04](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=64)** REST and HTTP are not linked; they're just a convenient pairing.
>
> **[1:10](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=70)** When a REST service runs on the web over HTTP to give us access to a web resource, we call it a RESTful API.
>
> **[1:18](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=78)** The web platform is what makes it RESTful.
>
> **[1:21](https://www.linkedin.com/learning/learning-rest-apis/how-rest-relates-to-http?u=76281980&t=81)** In other words, if you send a request through HTTP to a REST service that meets the six constraints, that service is a RESTful API.

> [!info]- Semantic Content
>
> **Env Vars:** rest (10), http (9), smtp (2), api (2), ftp (1)
> **Definitions:** is a  (2), short for (1), in other words (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - working (1)

#### Who or what interacts with REST APIs?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=0)** - When explaining how REST APIs work, you'll often hear people refer to clients who consume the REST API.
>
> **[0:07](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=7)** The question is, who are these clients?
>
> **[0:09](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=9)** And what exactly are they consuming?
>
> **[0:12](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=12)** As you know by now, a client in this scenario is not the human interacting with the website or app, but rather, that website or app itself.
>
> **[0:20](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=20)** We are merely the operators of these REST clients, and the clients consume the REST API by creating and sending requests, and receiving and parsing responses.
>
> **[0:31](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=31)** The beauty of the REST API is that at its core, it does not care who the client is as long as the client follows the rules.
>
> **[0:39](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=39)** The REST API's job is to receive requests, process data, and send responses.
>
> **[0:46](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=46)** Where those requests come from, and where the responses go, is relatively irrelevant.
>
> **[0:52](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=52)** That means, if you have an open REST API, say for a regular WordPress site, anyone can access that REST API.
>
> **[0:59](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=59)** And once they're in, they can figure out how to access its methods and resources thanks to the REST constraints.
>
> **[1:06](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=66)** Once they have that information, they can then send valid requests to get access to the REST API resources.
>
> **[1:12](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=72)** And that's the whole point of having a REST API to begin with.
>
> **[1:15](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=75)** You provide an interface for your data to be quite literally consumed by whatever client comes knocking.
>
> **[1:22](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=82)** That's not to say all REST APIs are completely open, or that anyone can do anything they want with the data in the REST API.
>
> **[1:30](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=90)** Most REST APIs have strict limits on who can access what, which capabilities they are granted, and how many requests they can make in a set time period.
>
> **[1:40](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=100)** Social media sites are a great example of this.
>
> **[1:43](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=103)** Twitter, for example, has several open REST APIs for a client.
>
> **[1:47](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=107)** So an app to gain access to this API, the operator of that client, so the human being, must first authenticate themselves with a username and password.
>
> **[1:58](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=118)** This ensures Twitter knows who is using the REST API and can monitor their behavior.
>
> **[2:02](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=122)** Once access is granted, strict rate limits are imposed to ensure the client doesn't overuse the service.
>
> **[2:09](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=129)** If you've used a third party client for a social media tool you may have seen a warning like API limit reached, or similar.
>
> **[2:16](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=136)** Now you know what's happening on the backend.
>
> **[2:19](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=139)** The key takeaway here is you, the human, do not interact with the REST API directly.
>
> **[2:25](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=145)** Communication with the REST API is handled by the client, which can be anything, really.
>
> **[2:30](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=150)** A website, an app, even an internet of things device.
>
> **[2:34](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=154)** The REST API does not care.
>
> **[2:37](https://www.linkedin.com/learning/learning-rest-apis/who-or-what-interacts-with-rest-apis?u=76281980&t=157)** It just receives requests, processes data, and sends responses, and all that data is consumed by the REST client.

> [!info]- Semantic Content
>
> **Env Vars:** rest (20), api (15)
> **Code Keywords:** from, (1), interface (1), this. (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - when (1)

#### Tools to see REST API in action
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=0)** - [Instructor] All right, enough talk.
>
> **[0:01](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=1)** Let's take a look at a REST-API in action.
>
> **[0:04](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=4)** To do this, we first need a REST-API to interact with and here at the onset we'll use a public Sandbox REST-API.
>
> **[0:11](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=11)** There are several of these REST-APIs available for free on the web.
>
> **[0:14](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=14)** In this example, I'll be using the one you see here called REQ/RES.
>
> **[0:18](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=18)** You can find it at reqres.in.
>
> **[0:22](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=22)** Let's start by making a basic GET request to see the root of this REST-API.
>
> **[0:27](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=27)** Most of these public REST-APIs have extensive documentation on how to use them and REQ/RES is no exception.
>
> **[0:34](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=34)** If you scroll down on the front page of the service, you'll find a list of a bunch of different requests you can send and it also models the request responses, so you can see exactly what's going on.
>
> **[0:44](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=44)** Here we have a GET request for list users.
>
> **[0:47](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=47)** This is what the actual request looks like, it gets a 200 response, meaning everything works properly, and here's the data that's returned.
>
> **[0:54](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=54)** You can switch to single user and you can see the data changes.
>
> **[0:58](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=58)** You can go single user not found and here we get a different type of response message.
>
> **[1:02](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=62)** Their message is empty and so on.
>
> **[1:04](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=64)** What we want to do is send a similar request, but not inside the site.
>
> **[1:08](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=68)** We want to send it like a regular REST client.
>
> **[1:11](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=71)** Now, here's the thing.
>
> **[1:12](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=72)** Reqres.in is a RESTful API that uses the HTTP protocol for requests, so that means we can use any client that uses the HTTP protocol to send a request, and wouldn't you know it, our web browser is such a client.
>
> **[1:28](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=88)** So, we should be able to open a new tab and then type in a request and get a response right here in the browser.
>
> **[1:35](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=95)** Let's try to do that.
>
> **[1:36](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=96)** [Https://reqres.in/api/users](https://Https://reqres.in/api/users).
>
> **[1:44](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=104)** If you wonder where I got that command, it's the same command you see here at the top.
>
> **[1:48](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=108)** I just took away this question mark page equals two.
>
> **[1:52](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=112)** All right, run that in the browser and see what happens.
>
> **[1:56](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=116)** If everything works correctly, you should get a response like what you see here and what you see here is that this browser is not a great REST client.
>
> **[2:04](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=124)** At least not for us humans, that's because it doesn't really know what to do with the response other than to display the actual data within the response.
>
> **[2:13](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=133)** What we get here is more or less useless information.
>
> **[2:17](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=137)** We don't know anything about what was in the header of the response and the data is formatted as if it was regular text, so it's not parsed out properly and it's really hard to read.
>
> **[2:27](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=147)** To make the response from a REST-API readable, we need a REST client assigned for this purpose.
>
> **[2:32](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=152)** There's several such clients available, including Postman and Insomnia, and if you have a favorite code editor, there's a good chance there's a REST client extension or package for that editor as well.
>
> **[2:46](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=166)** If you're using Visual Studio Code like me, you can install a REST client fittingly named REST Client straight from the marketplace.
>
> **[2:54](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=174)** This is the REST client I'll be using throughout the rest of this course.
>
> **[2:57](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=177)** You can choose to use this REST client or any other REST client of your choice.
>
> **[3:02](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=182)** We are just using the client to create a human accessible interface between ourselves and the REST-API.
>
> **[3:09](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=189)** Any REST client will do the same thing, it just does it in a slightly different way with a slightly different user interfaces.
>
> **[3:16](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=196)** If you want Visual Studio Code for this, here's what you do.
>
> **[3:19](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=199)** First, boot up Visual Studio Code, then click on the extensions button.
>
> **[3:25](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=205)** From here, make a search for rest client and the first response should be the correct extension.
>
> **[3:32](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=212)** Once you find it, click install to install it into Visual Studio Code.
>
> **[3:37](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=217)** Once installed, we can use this new REST client immediately.
>
> **[3:40](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=220)** To do that, we'll first have to create a new project, so I'll go to the files explorer, open a folder, and here I've created a folder on my desktop called REST-APIs.
>
> **[3:50](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=230)** Then, we select this folder as our project folder, create a new file, call this file rest.http.
>
> **[3:57](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=237)** You can call it whatever you want, but that's what I'm going to call it.
>
> **[4:02](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=242)** Inside this file, we'll type out our request, so what we want in this case is to GET [https://reqres.in/api/users](https://reqres.in/api/users).
>
> **[4:18](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=258)** The REST client automatically recognizes this as a REST request and provides a link above it that we can click on.
>
> **[4:26](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=266)** To run the request, you either click on this link or hold down ctrl + alt + r on Windows or cmd + opt + r on MAC OS and when you do so, a new panel opens on the right-hand side with a response from the REST-API.
>
> **[4:40](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=280)** What you see here right away is this response looks quite different from what we got in the browser.
>
> **[4:45](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=285)** That's because this display contains the full REST response header with all the meta information about the response and it also formats the data and the header in a human readable way.
>
> **[4:56](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=296)** So, it's easy to see exactly what's going on in the response.
>
> **[4:59](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=299)** If I collapse this side panel here and pull this one out a bit, you can see here we have a fully structured header with all the information about our response, then we have fully structured data with nesting.
>
> **[5:11](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=311)** We can see that this is a JSON response, it has a bunch of properties and values, and we can gain access to all of them.
>
> **[5:19](https://www.linkedin.com/learning/learning-rest-apis/tools-to-see-rest-api-in-action?u=76281980&t=319)** In the next two chapters, we'll break down these REST requests and responses in detail to see exactly how all this works and how to work with it in real life.

> [!info]- Semantic Content
>
> **Env Vars:** rest (25), api (8), req (2), res (2), http (2)
> **Code Keywords:** let (3), this, (2), public (2), switch (1), interface (1)
> **Tools:** visual studio (4), postman (1), insomnia (1)
> **UI Navigation:** click on (3), scroll down (1), switch to (1), go to (1)
> **CLI Commands:** find (3), make (2)
> **API Endpoints:** get  (3), /api/users (2)
> **Prerequisites:** install (3)
> **URLs:** [https://reqres.in/api/users](https://reqres.in/api/users) (2)


### 2. Request

#### Anatomy of a REST request
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=0)** - In this chapter, we'll look at REST requests in detail, how they're put together, what the different pieces are, and how to use them.
>
> **[0:07](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=7)** To do this, we first need a robust and well-built REST API to interact with and WordPress provides such a REST API out of the box so for this chapter, I'll use a locally installed version of WordPress running under the domain [restful.dev](https://restful.dev) to demonstrate.
>
> **[0:22](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=22)** If you want to, you can follow along using any WordPress site, local or live, on the web or any other REST resource.
>
> **[0:29](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=29)** The principles taught here are universal to all REST APIs, which is the whole point of REST APIs.
>
> **[0:36](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=36)** Let's start with the anatomy of a REST request.
>
> **[0:39](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=39)** In its most basic form, a REST request has two parts, a method and a URI.
>
> **[0:46](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=46)** The method is one of the standard HTTP operators, get, post, put, patch, delete, options, and head, and the URI points to the resource we want it to interact it.
>
> **[0:57](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=57)** Whether all these listed methods work on the resource at the end of the provided URI depends on the configuration of the REST API and the authorized capabilities of the current user.
>
> **[1:07](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=67)** So if we want a list of the most recent posts on a WordPress site, we send a GET request to the resource URI for all posts, GET [site.com/wp-json/wp/v2/posts](https://site.com/wp-json/wp/v2/posts).
>
> **[1:23](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=83)** When we submit a request, we can also send along metadata in the request header.
>
> **[1:28](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=88)** This data should include the content type to comply with the self-descriptive messages constraints and can also contain a user agent string, accepted language string, authentication, cache control and more.
>
> **[1:42](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=102)** If we want to send information to the REST API to create a new entry or update an existing one, the request gets more complex because we have to send along the actual data.
>
> **[1:52](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=112)** Here, the data structure of the request needs to match the content type defined in the request.
>
> **[1:58](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=118)** So in this example, the content type is set to application/json, meaning the data has to be marked up as JSON as well.
>
> **[2:07](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=127)** To create a new post through the WordPress REST API, we send a POST request to the post's resource through the same URI as before.
>
> **[2:16](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=136)** Pass along authentication information to get access to that resource.
>
> **[2:20](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=140)** Declare the content type as application/json and then include the actual JSON data to be posted.
>
> **[2:27](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=147)** The good news is we don't normally have to type out these requests by hand and some of the metadata can be handled automatically.
>
> **[2:33](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=153)** In a normal application, we use scripts to handle the requests and responses, most commonly some form of JavaScript.
>
> **[2:40](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=160)** In plain old JavaScript, the GET request we just talked about will look like this.
>
> **[2:45](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=165)** Here, we open GET request to a specified URI and then capture the responses to be logged in the console.
>
> **[2:52](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=172)** Using jQuery AJAX, the POST request would look like this.
>
> **[2:56](https://www.linkedin.com/learning/learning-rest-apis/anatomy-of-a-rest-request?u=76281980&t=176)** Here, we do the same thing, define a URI, send a POST request to it, append some data and on success, capture the response to be logged in the console.

> [!info]- Semantic Content
>
> **Env Vars:** rest (11), uri (7), api (5), post (3), json (2)
> **API Endpoints:** get  (4), post  (3), /v2/posts (1)
> **Code Keywords:** this. (2), this, (1), let (1), delete (1), self (1)
> **URLs:** [restful.dev](https://restful.dev) (1), [site.com](https://site.com) (1)
> **Code Identifiers:** jquery (1)
> **Speakers:** - in (1)

#### Discovery
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=0)** - A key step in working with a REST API is discovery, figuring out what resources and methods are available and what you can do with them.
>
> **[0:09](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=9)** A good REST API has extensive standalone documentation, providing all this information in a human-readable format.
>
> **[0:16](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=16)** But even if no documentation is present, the REST API will describe itself, thanks to the Hypermedia As The Engine Of Application State constraint.
>
> **[0:27](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=27)** Using the get and options verbs, we can walk our way through the response of any REST API, to find its resources and methods.
>
> **[0:35](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=35)** For a simple REST API, the map might be a single level of resource URIs with get methods.
>
> **[0:41](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=41)** For a more complex REST API, like the WordPress REST API, there may be a complex tree of resources, each with their own methods that are documented within the response.
>
> **[0:52](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=52)** If I run an options request to the posts resource, which gives us access to the collection of all posts in a WordPress site, you'll see what I mean.
>
> **[1:00](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=60)** Here, we get a full breakdown of every available method and resource.
>
> **[1:06](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=66)** If I run an options request to the posts resource which gives us access to the collection of all posts within a WordPress site, you'll see what I mean.
>
> **[1:15](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=75)** Here, we get a full breakdown of every available resource and method.
>
> **[1:21](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=81)** Off the top, you'll see the posts resource has two core methods: get, which returns to us the most recent posts, and post, which we're going to use to create new posts.
>
> **[1:33](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=93)** Under each of these methods, we then have further arguments defined.
>
> **[1:37](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=97)** Scrolling down, you'll see here, for example, we have the per_page argument we can pass along with our request, that allows us to control how many pages we want returned.
>
> **[1:47](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=107)** The default is set to 10.
>
> **[1:49](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=109)** The description tells me, this is the setting for the maximum number of items to be returned in the results set, and the type of data we want to pass along is an integer.
>
> **[2:00](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=120)** Scrolling down, you'll see, for each of our arguments, we have required states, we have descriptions, we have types, and if there are default settings, we also have those defaults defined.
>
> **[2:10](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=130)** That means, if you came to this REST API knowing nothing about it, the response from this options request would give you all the information you needed to send advanced requests and get the information you wanted, directly from that REST API.
>
> **[2:25](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=145)** This discovery can be done by us humans, or it can be left to a computer to figure out.
>
> **[2:30](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=150)** In most cases, an application developer will use discovery along side experimentation, to find the resources and methods that help them accomplish their task in the most efficient manner, unless there is documentation available providing the best practice scenarios.
>
> **[2:44](https://www.linkedin.com/learning/learning-rest-apis/discovery?u=76281980&t=164)** Bottom line is, if you encounter a REST API and you don't have documentation for it, you can still figure out how it works by simply asking it.

> [!info]- Semantic Content
>
> **Env Vars:** rest (10), api (10)
> **CLI Commands:** find (2)
> **Code Keywords:** pass (2)
> **Code Identifiers:** per_page (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - a (1)

#### Resource
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=0)** - [Instructor] Let's dig a little deeper and look at what is meant by two key terms.
>
> **[0:04](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=4)** Resource and representation.
>
> **[0:06](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=6)** We'll start with resource.
>
> **[0:09](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=9)** The concept of REST was defined by Roy Fielding in a doctoral dissertation in 2000 called Architectural Styles and the Design of Network Based Software Architectures.
>
> **[0:20](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=20)** In this document, we find a pretty clear description of what a resource is.
>
> **[0:24](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=24)** He says, the key abstraction of information in REST is a resource.
>
> **[0:29](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=29)** Any information that can be named can be a resource: a document or image, a temporal service, like today's weather in Los Angeles, a collection of other resources, a non-virtual object like a person, and so on.
>
> **[0:43](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=43)** In other words, any concept that might be the target of an author's hypertext reference, must fit within the definition of a resource.
>
> **[0:52](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=52)** A resource is a conceptual mapping to a set of entities, not the entity that corresponds to the mapping at any particular point in time.
>
> **[1:01](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=61)** The key here is that last part.
>
> **[1:03](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=63)** Conceptual mapping.
>
> **[1:05](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=65)** Consider our librarian.
>
> **[1:08](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=68)** When you submit a request to the librarian, you specify a resource to retrieve.
>
> **[1:12](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=72)** This resource could be the red book in cubby number four.
>
> **[1:16](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=76)** The resource is that conceptual mapping.
>
> **[1:19](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=79)** Red book in cubby number four.
>
> **[1:22](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=82)** It is used to retrieve the contents of the red book and does not care what is in the red book.
>
> **[1:27](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=87)** If we swap out the red book for another red book, the resource points at that new red book and so on.
>
> **[1:35](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=95)** The interesting thing about resources is they can be collections, or singletons.
>
> **[1:40](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=100)** Red book in cubby number four is a singleton resource, meaning it points at a single item.
>
> **[1:46](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=106)** All red books is a collection resource, because it points at a collection of items, literally all red books.
>
> **[1:53](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=113)** Typically, the structure of a REST API makes it possible to narrow resource requests from collections, two singletons, by increased specificity in the URI route.
>
> **[2:03](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=123)** So, bookcase gives us every book in the case, and the case that holds them.
>
> **[2:09](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=129)** Bookcase/books gives us a collection of all books, bookcase/books/red gives us a collection of all red books in the bookcase, and bookcase/books/red/four gives us only red books in the bookcase in the cubby with the ID of four.
>
> **[2:26](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=146)** This brings us to representation.
>
> **[2:29](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=149)** According to Fielding's representation, REST components perform actions on a resource by using a representation to capture the current or intended state of that resource and transferring that representation between components.
>
> **[2:44](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=164)** In plain language, that means, rather than accessing the actual data of the resource, we access a representation, effectively a copy of that resource.
>
> **[2:54](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=174)** So, unlike a library where you actually check out the book itself, the REST server generates a unique representation or copy of that book for you when you request it, and can modify that representation to fit with your specifications.
>
> **[3:08](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=188)** This is why a REST resource can serve up the same data to multiple clients at the same time, and why a REST resource can serve up different variants of that data to different clients upon request.
>
> **[3:19](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=199)** The data may be stored as XML, but the representation of that data served to a client, can be JSON or HTML or any other format.
>
> **[3:28](https://www.linkedin.com/learning/learning-rest-apis/resource?u=76281980&t=208)** So, the resource is whatever data sits in the location we're pointing at, the representation is the literal representation of the data we get when we access that resource.

> [!info]- Semantic Content
>
> **Env Vars:** rest (7), api (1), uri (1), xml (1), json (1)
> **Definitions:** is a  (4), in other words (1)
> **Code Keywords:** let (1), case, (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Methods (Verbs)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=0)** - A REST resource enables access to data, but doesn't in itself do anything with that data.
>
> **[0:06](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=6)** To use a REST resource, we have to pass along instructions about what action we want to perform.
>
> **[0:11](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=11)** This is done using HTTP methods, also called verbs.
>
> **[0:16](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=16)** Anytime you use a web browser, you or rather the browser use HTTP methods to tell the server at the other end of the URL what type of request is being sent.
>
> **[0:28](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=28)** By far the most common of these methods is Get which literally means get what's at the end of this address and send it to me.
>
> **[0:37](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=37)** Anytime you visit a webpage or follow a link or click reload or forward or back or any other standard interaction in a browser, you are sending a get request over HTTP.
>
> **[0:48](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=48)** The same goes for REST APIs.
>
> **[0:50](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=50)** If you want to retrieve the data of a resource, you send a Get request.
>
> **[0:55](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=55)** This request will either return a 200 OK HTTP status along with the requested data or a 404 Not Found HTTP status if there's nothing at the other end of the resource or the resource is invalid.
>
> **[1:09](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=69)** Yes, that is the same 404 Not Found error you get in your browser when you follow a broken link because the entire web is at its very nature a giant RESTful application.
>
> **[1:22](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=82)** But I digress.
>
> **[1:23](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=83)** Get is used to get data from a resource.
>
> **[1:27](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=87)** To send data from the client to the server, we have three different methods to perform different types of actions.
>
> **[1:34](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=94)** Post, Put, and Patch.
>
> **[1:38](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=98)** Post is the most common of these methods and it's also the one used in regular non-REST scenarios like when you submit a form on a webpage.
>
> **[1:47](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=107)** Post is used to create new resources and often subordinate resources of resource collections.
>
> **[1:53](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=113)** If for example you have a collection of products and you want to add a new product, you send a post request along with the data for the new product in JSON format, and the REST API creates a new resource under the product's resource and gives it a new ID and resource URI.
>
> **[2:12](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=132)** A successful post request returns a 201 Created HTTP status along with a link to the new resource ID in the response header.
>
> **[2:22](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=142)** If you don't have authorization to perform this action, you'll get a 401 Unauthorized status, and if the resource already exists, the REST API returns a 409 Conflict HTTP status.
>
> **[2:34](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=154)** And if the request is sent to a resource that doesn't exist for some reason, a 404 Not Found HTTP status is returned.
>
> **[2:43](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=163)** Put is used to update data at an existing resource by replacing all of its contents with the contents of the new request.
>
> **[2:51](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=171)** Unlike posts which just contains the contents, a put request contains the ID of the resource and the new content to be added to that resource.
>
> **[3:01](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=181)** If the resource already exists, the existing content is replaced with the contents of the Put request.
>
> **[3:07](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=187)** If no resource exists, the REST server may allow a new resource to be created with the user defined ID.
>
> **[3:14](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=194)** A Put request sent to the singleton resource will return a 200 OK status on success, a 204 No Content status when no content is present at the server, or a 404 Not Found status if the ID is not found.
>
> **[3:29](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=209)** If a Put request is sent to a collection resource, a 405 Method Not Allowed status is returned since Put updates an existing singleton resource.
>
> **[3:40](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=220)** Patch is used to modify an existing resource.
>
> **[3:44](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=224)** Where Put updates the resource by replacing content, Patch can carry along instructions on how to modify the existing resource without necessarily replacing everything.
>
> **[3:55](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=235)** Patch returns the same status as Put.
>
> **[3:59](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=239)** Delete does exactly what it sounds like.
>
> **[4:02](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=242)** It deletes the specified resource.
>
> **[4:04](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=244)** Delete can only be used with singleton resources.
>
> **[4:07](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=247)** If you try to delete a collection resource, you'll get a 405 Method Not Allowed status because you should not be able to delete everything at once.
>
> **[4:16](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=256)** There are two more methods you are likely to use from time to time.
>
> **[4:20](https://www.linkedin.com/learning/learning-rest-apis/methods-verbs?u=76281980&t=260)** They are Options which returns a description of the communication options for the target resource and Head which returns just the head section of that response.

> [!info]- Semantic Content
>
> **Env Vars:** http (8), rest (7), api (2), url (1), json (1)
> **Code Keywords:** delete (4), pass (1)
> **Analogies:** for example (1)
> **Speakers:** - a (1)


### 3. Response

#### Response header
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=0)** - [Instructor] Any time you send a request to a REST API, the API returns some form of response to tell you what happened on its end.
>
> **[0:07](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=7)** This response comes in the form of a head section and whatever content the resource provided.
>
> **[0:14](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=14)** This head section is not normally seen by us humans, but instead used by the client to handle the return data.
>
> **[0:20](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=20)** Every response from a REST API will have a head section and the contents of that head section will vary depending on the type of method you used and what type of resource you requested.
>
> **[0:31](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=31)** To get just the head section of a response, we can send a head request to any resource.
>
> **[0:39](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=39)** A typical response will look something like what you see here.
>
> **[0:43](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=43)** Off the top, we learn what protocol was used, in this case HTTP 1.1 and we get the HTTP status message, in this case 200 OK, meaning the request went through as expected.
>
> **[0:55](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=55)** Head requests will only ever return either 200 OK if we hit a resource that actually exists, or 404 not found if the URI were using points at nothing.
>
> **[1:06](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=66)** Next we get meta data on the response, date and time of delivery, the content type, the type of server that delivered the content, transfer and coding, connection, caching data, the list goes on and on and on.
>
> **[1:19](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=79)** All of this information tells the client about the data it's receiving and the environment it received it from.
>
> **[1:24](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=84)** This information is then used to figure out how to parse the data and perform more actions.
>
> **[1:30](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=90)** As an example, at the very bottom, you'll see content type is defined as application JSON, and that means any data that comes along with this head will be formatted in JSON and we need to parse it as JSON.
>
> **[1:42](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=102)** You'll also see in some rest requests, you'll have content and coding gzip defined, meaning all the content that comes below is gzipped and we have to use gzip to unpack it.
>
> **[1:53](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=113)** Depending on the complexity of the REST API and the data set it manages, the response header will change.
>
> **[1:59](https://www.linkedin.com/learning/learning-rest-apis/response-header?u=76281980&t=119)** For our purposes, the most important part is the HTP status message right here at the very top.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), rest (3), json (3), http (2), uri (1)
> **Code Keywords:** type, (1), from. (1)
> **Versions:** 1.1 (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### HTTP status messages
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=0)** - [Instructor] The HTTP response status codes at the top of the REST response header gives the client an immediate notification about the status of the request-response pair.
>
> **[0:09](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=9)** The client can use these response codes to identify successes and failures and automatically respond with next steps.
>
> **[0:17](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=17)** Th HTTP response status codes are split into five main groupings.
>
> **[0:21](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=21)** 100 codes for information, 200 codes for success, 300 codes for redirection, 400 codes for client error, and 500 codes for server error.
>
> **[0:33](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=33)** Status codes of the 100 format are informational and rarely encountered.
>
> **[0:37](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=37)** They're used to inform the client of the status of the server, typically to wait for the server to finish, so something like, I got your request and I'm processing it, hold on.
>
> **[0:47](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=47)** Or to continue with the request.
>
> **[0:49](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=49)** I have an open connection for you, please send your request now, and stuff like that.
>
> **[0:54](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=54)** Generally, we don't really see 100 status codes much at all.
>
> **[0:59](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=59)** Status codes of the 200 format are success messages.
>
> **[1:02](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=62)** Here, you find common codes including 200 OK, which means the request was successful, 201 created which means the request was successful and a new resource was created, and 204 no content, meaning the server processed the request, but returned no content.
>
> **[1:19](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=79)** Status codes of the 300 format indicate redirection.
>
> **[1:23](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=83)** The client is provided with a new URL to follow to get to the resource.
>
> **[1:27](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=87)** These codes include 301 moved permanently, which tells the client, use this URI for all future requests.
>
> **[1:35](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=95)** 302 found, which technically means resource temporarily redirected to this other URI, but it's most often used to mean, the response to this resource is actually found at this other URI, which is the real job of 303 see other, and just to confuse things, there's also 307 for temporary redirect, and 308 for permanent redirect, because reasons.
>
> **[2:00](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=120)** The important thing here is, if you are handling redirects in your client, or you are generating redirect messages when you build your own REST APIs, you have to account for all these different variants and figure out which one of these response codes you want to use to make things clear.
>
> **[2:15](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=135)** Because unfortunately, the 300 response code set is quite confusing.
>
> **[2:21](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=141)** Status codes for the 400 format signal client errors.
>
> **[2:25](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=145)** Here, you'll find 400 bad request, meaning the request is malformed or too large, or similar.
>
> **[2:31](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=151)** 401 unauthorized meaning the client lacks proper authentication to access the resource.
>
> **[2:36](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=156)** 403 forbidden meaning the request is outright refused by the server, typically because the client is not logged in, or does not have the correct permissions.
>
> **[2:44](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=164)** The well-known 404 not found, which means the resource does not exist in the first place.
>
> **[2:50](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=170)** And 405 method not allowed, which kicks in if you try to use an HTTP verb like post on a resource that can only receive get requests.
>
> **[2:58](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=178)** There are also myriad of other client error messages you can get with the HTTP messaging, so I encourage you to go check out all of them once you're done watching this movie.
>
> **[3:09](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=189)** The last group, status codes of the 500 format signals server errors.
>
> **[3:14](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=194)** Here, we have 500 internal server error, meaning something went wrong of the server.
>
> **[3:18](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=198)** 502 bad gateway meaning the server acts as a literal gateway or proxy, and received an invalid response from whatever it's trying to connect to.
>
> **[3:27](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=207)** And the fairly common 503 service unavailable which is encountered when a server is overloaded or temporarily unavailable.
>
> **[3:36](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=216)** There are more HTTP status messages, but these are the ones you're most likely to encounter working with REST APIs.
>
> **[3:43](https://www.linkedin.com/learning/learning-rest-apis/http-status-messages?u=76281980&t=223)** Now that you're done watching this movie, I encourage you to go check out the full list of HTTP status codes at Wikipedia, that breaks down all the different codes, what they mean, and you'll also see that enormous list of 400 codes for all the different types of errors a client can generate.

> [!info]- Semantic Content
>
> **Env Vars:** http (6), rest (3), uri (3), url (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** continue (1)
> **Speakers:** - [instructor] (1)

#### REST and Authorization/Authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=0)** - The response you get from a REST API depends on the authorization level you have when you make the request.
>
> **[0:06](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=6)** Most REST APIs provide leveled access meaning all users can submit limited GET, HEAD, and OPTIONS requests.
>
> **[0:13](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=13)** Some users can submit POST requests and a rare few users can submit PUT, PATCH, and DELETE requests.
>
> **[0:21](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=21)** To get a quick view of this we can send two HEAD requests to the same resource.
>
> **[0:27](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=27)** First, an unauthenticated request.
>
> **[0:32](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=32)** For this unauthenticated request the allow header down here on line 10 says, Allow: GET, meaning anyone can send a GET request to this resource but nothing else.
>
> **[0:44](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=44)** Now let's see what happens if I add an authorization header to my requests.
>
> **[0:48](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=48)** To do so I'll go back to my request, type in Authorization: and then say this is basic authorization and provide my user name and my password.
>
> **[1:04](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=64)** Just before I continue, the local WordPress site I'm working with is set up with Basic authentication which is extremely insecure.
>
> **[1:11](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=71)** You can see I'm passing the username password in clear text.
>
> **[1:15](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=75)** This would never happen anywhere online.
>
> **[1:18](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=78)** When interacting with REST APIs in the real world including the WordPress REST API, you typically encounter more robust authorization protocols like Chase on web tokens and oh off two that are encrypted and require multiple levels of authorization.
>
> **[1:33](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=93)** This example uses basic authentication just for the simplicity of this particular course.
>
> **[1:38](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=98)** When I pass along an authentication header with a username and password to an account with full capabilities, the response on the right hand side here changes.
>
> **[1:48](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=108)** Most notably you'll notice on line 12 here, Allow now says GET, POST, PUT, PATCH, and DELETE effectively giving me full control over this resource.
>
> **[2:00](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=120)** There are also some additional headers here including Expires, Cache-Control, and Keep-Alive that tell the client, "Hey you are now authenticated and logged in, but you might get kicked out at some point. Then you have to log back in to get everything to work properly."
>
> **[2:14](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=134)** But that's not important.
>
> **[2:15](https://www.linkedin.com/learning/learning-rest-apis/rest-and-authorization-authentication?u=76281980&t=135)** What matters here is you can see clearly when you authorize yourself into a REST API the response from the REST API may change significantly and what you can do with the REST API will also change.

> [!info]- Semantic Content
>
> **Env Vars:** rest (7), api (5), head (2), post (2), put (2)
> **Code Keywords:** delete (2), else. (1), let (1), continue (1), require (1)
> **API Endpoints:** options  (1), post  (1), delete  (1), head  (1), get  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)


### 4. Request/Response Pairs

#### Request/response pairs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=0)** - [Instructor] All this theory is well and good; but to really get REST APIs, you have to see one in action.
>
> **[0:05](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=5)** So in this chapter, I want to dig into the standard request response pairs to show you how different types of requests are made, what the responses look like and, most importantly, what they do.
>
> **[0:17](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=17)** For these examples, I'll use my locally-hosted WordPress site and the authorization header from the previous chapter.
>
> **[0:23](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=23)** Remember, requests and responses will vary based on the configuration of the REST API you work with; but the overall structure and behavior will always be roughly the same.
>
> **[0:34](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=34)** So while what you see here will not match what you'll see interacting with other REST APIs, the principles taught are the same.
>
> **[0:41](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=41)** The first step in working with a REST API is discovery.
>
> **[0:45](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=45)** For this, we'll use an options request.
>
> **[0:48](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=48)** In the WordPress REST API, the posts resource is the resource collection for all the available posts on the site; so let's start there.
>
> **[0:57](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=57)** I'll pass a request for options and then the posts resource.
>
> **[1:03](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=63)** This gives us a detailed breakdown of all the methods and arguments available for this resource, but doesn't give us any of the actual data.
>
> **[1:10](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=70)** Based on this response, I see I can send GET and POST requests to this resource.
>
> **[1:16](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=76)** Digging a little deeper, we see that each of these methods have a long list of arguments we can use to make more detailed resource requests.
>
> **[1:24](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=84)** For example, down under the GET method we have per page; and the description says: maximum number of items to be returned in result set.
>
> **[1:33](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=93)** This argument can be used to augment how many posts are returned.
>
> **[1:37](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=97)** So, by default, we get maximum 10 posts; but we can change this number to something else.
>
> **[1:42](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=102)** I know from testing that the maximum number here is 100; but if you just want one post or you want 15 posts or whatever, you pass per page as part of the argument.
>
> **[1:52](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=112)** We'll do that a little later on.
>
> **[1:54](https://www.linkedin.com/learning/learning-rest-apis/request-response-pairs?u=76281980&t=114)** For now, all that matters is options gives us, literally, all the options we have for this particular resource.

> [!info]- Semantic Content
>
> **Env Vars:** rest (5), api (3), post (1)
> **Code Keywords:** pass (2), this, (1), let (1), default, (1), else. (1)
> **API Endpoints:** get  (2), post  (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous chapter (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### GET
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=0)** - [Instructor] To get the data from a resource, we send a get request and that means if we want the data from the posts resource, or the last 10 posts in this blog, we'll send a get request to the resource.
>
> **[0:14](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=14)** Just like with options, we don't need to send an authorization header here, but we might as well since we have it, we get all our options.
>
> **[0:22](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=22)** When I send this request, the rest API returns to me a list of the 10 most recent posts on the site.
>
> **[0:28](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=28)** Each of these posts is structured as a nested JSON object.
>
> **[0:32](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=32)** So here you can see the first one is post with "id":4, this is the publishing date, and the modified date, then we have the URL slug, we have the current status of the post, the type of post, the link to the post, this is the regular human readable link to the post, then we have the title, the content and so on.
>
> **[0:50](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=50)** And as we scroll down, you see that this post is complete.
>
> **[0:54](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=54)** That's because in the case of Word Press we get the full data for each of the posts even in the posts resource.
>
> **[1:00](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=60)** So if there's a lot of long posts on this Word Press site, this data set will be quite extensive.
>
> **[1:06](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=66)** Now let's say I don't want 10 posts, I just want one post.
>
> **[1:10](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=70)** Well, we address that in the previous movie.
>
> **[1:12](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=72)** You remember I said, the posts resource has a long list of arguments for both get and posts?
>
> **[1:18](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=78)** Well, we can use those arguments and the way we do that is by stringing them on as a URL quarry.
>
> **[1:24](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=84)** So after the posts resource, I'll say question mark and then per page, equal, and then one so I only get one post.
>
> **[1:34](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=94)** Then I can resend my request.
>
> **[1:37](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=97)** And scroll down and now you'll see we only have this first post here, "id": 4.
>
> **[1:41](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=101)** If I scroll down to the end of the post, you'll notice after the post content, there are no more items.
>
> **[1:47](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=107)** If I want two, I just go and change that value to two, resend the request, and now you'll see we're currently at the end of post four and now we've added some extra information.
>
> **[1:58](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=118)** So here's "id":1 for the second post on the list.
>
> **[2:02](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=122)** But that's not all, thanks to the hyper-media ask the engine of application state constrained, each of these post objects carries with it its own resource link as well as the public link.
>
> **[2:13](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=133)** So once we have a post object on a list like this we can use that post object to find a link directly to the post itself.
>
> **[2:21](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=141)** At the top of each of the post objects, we'll find id and a little further down you have the link property.
>
> **[2:27](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=147)** Now this is the human readable link, but if I scroll to the bottom of this post object after all the content, down here there is a links property and under the links property we have self and href and this is the resource link to this particular resource.
>
> **[2:45](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=165)** And in the very next line we also have a link to the collection.
>
> **[2:48](https://www.linkedin.com/learning/learning-rest-apis/get?u=76281980&t=168)** So here we see [restful.dev/wp-json/wp/v2/posts](https://restful.dev/wp-json/wp/v2/posts) and then posts/4, that means if we want just this single post, all we have to do is copy out that link, paste it into our get request, run the request, and now we are looking at the singleton resource for the post with id of four.

> [!info]- Semantic Content
>
> **Env Vars:** url (2), api (1), json (1)
> **Code Keywords:** let (1), public (1), self (1)
> **UI Navigation:** scroll down (3)
> **CLI Commands:** find (2)
> **URLs:** [restful.dev](https://restful.dev) (1)
> **API Endpoints:** /v2/posts (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### POST
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=0)** - Given the necessary authorization, a REST API can be used to create new resources.
>
> **[0:04](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=4)** And in the case of WordPress, that means we can use the REST API to create new posts.
>
> **[0:09](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=9)** This is typically done by sending a POST request to a resource collection, like the posts collection inside of WordPress.
>
> **[0:16](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=16)** To create a new post via the REST API, I want to send a POST request to this posts resource up here, so the first thing I'll do is set up a POST request.
>
> **[0:28](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=28)** Then I need to add an authorization header to show I actually have the ability to use the POST method.
>
> **[0:34](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=34)** I'm sending data along with my POST request, so that means I need to find what type of data this is.
>
> **[0:40](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=40)** I do that with a Content-Type header, and here I want to set up application and JSON because this will be JSON data.
>
> **[0:47](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=47)** And then finally, I need to encode the actual data for the post in JSON so that gets sent along.
>
> **[0:54](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=54)** It looks like this.
>
> **[0:56](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=56)** For WordPress, I only really need three things: I need a title,
>
> **[1:08](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=68)** some content,
>
> **[1:21](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=81)** and finally, a status.
>
> **[1:25](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=85)** Now technically I don't need the status, but if I don't set a status the post will automatically be filed in draft.
>
> **[1:30](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=90)** If I want this post to be public right away, I need to set the status to publish.
>
> **[1:36](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=96)** And then if I want to I can also add the author ID.
>
> **[1:39](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=99)** This is so we know who created the post.
>
> **[1:41](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=101)** If you don't add an author ID then the post will automatically get attributed to the main owner of the site.
>
> **[1:47](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=107)** So I'll say author, and here I'm just going to give it ID one because that's the only author registered on the site.
>
> **[1:55](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=115)** Now just to show you I'm not cheating, this is the WordPress site we're working with.
>
> **[1:59](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=119)** As you can see, currently there are three posts available.
>
> **[2:02](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=122)** I can reload this page to show you again.
>
> **[2:05](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=125)** The Case for WordPress Telemetry, Hello world! And something else.
>
> **[2:09](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=129)** Now I'll send this request.
>
> **[2:14](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=134)** Over on the right-hand side here we get a 201 created status, meaning a new post was created.
>
> **[2:20](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=140)** Go back to the WordPress site and reload it.
>
> **[2:22](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=142)** Here you see that new post has been created.
>
> **[2:24](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=144)** A post created via the REST API.
>
> **[2:26](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=146)** And if I go down into the data here, you'll see the entire dataset for this post is now available to us, and this is important.
>
> **[2:34](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=154)** Anytime you send a POST request to a REST API, it'll return the entire resource back to you once it's created.
>
> **[2:42](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=162)** That way, the client can then use that resource immediately for error checking to make sure everything worked properly, and also just to populate the client itself, so the user of the client can see that post once it's created.
>
> **[2:54](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=174)** Now remember that Hypermedia as the Engine of Application State constraint I keep bringing up?
>
> **[2:59](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=179)** Well, now we can take full advantage of it.
>
> **[3:02](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=182)** This return data from our post contains all the information about the post.
>
> **[3:06](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=186)** So if I scroll up and down I'll eventually find the entry that provides the resource link to this post.
>
> **[3:12](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=192)** However, because I just created a new resource using a POST request, the header of the response also contains the direct link to that resource.
>
> **[3:21](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=201)** So right here we have a location header that provides a link to the resource, here you can see restful dev wp json wp v2 post and 15.
>
> **[3:31](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=211)** Now I can go directly to that post by following the location header, and I'll paste it up here.
>
> **[3:38](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=218)** Then change my request to a GET request, and I'll just comment out the stuff down here for now.
>
> **[3:47](https://www.linkedin.com/learning/learning-rest-apis/post?u=76281980&t=227)** Send a GET request, and here on the right-hand side we no have the singleton resource for this post just created through the REST API.

> [!info]- Semantic Content
>
> **Env Vars:** post (7), rest (6), api (6), json (3)
> **API Endpoints:** post  (7), get  (2)
> **Code Keywords:** finally, (2), this. (1), public (1), else. (1)
> **CLI Commands:** find (2), make (1)
> **Prerequisites:** set up (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - given (1)

#### PUT/PATCH
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=0)** - [Narrator] Now that I've created a new resource through the REST API, I want to make a change to it.
>
> **[0:04](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=4)** I want to change the title, cause I don't think the title fits exactly.
>
> **[0:08](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=8)** Depending on how the REST API is set up, we could either use POST or PUT or PATCH to make this change because in some REST APIs, POST, PUT, or PATCH are exactly the same and in some REST APIs they are quite different.
>
> **[0:23](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=23)** Now, the only way I can really figure out which tool to use is by going and asking the REST API itself.
>
> **[0:30](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=30)** Over here on the left hand side we already have a GET request for the singleton resource 15.
>
> **[0:35](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=35)** And to find out what I can do with this resource, I'll now again send an OPTIONS request.
>
> **[0:44](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=44)** This will give me a full breakdown.
>
> **[0:45](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=45)** And here you see we can send a GET, POST, PUT, PATCH, and DELETE requests.
>
> **[0:50](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=50)** So I'll make a search and say PUT and when I go to the second entry you'll see that here in the Wordpress REST API the POST, PUT, and PATCH methods are actually treated as the same.
>
> **[1:02](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=62)** So they all have the same exact functionality.
>
> **[1:05](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=65)** That means inside the scope of Wordpress REST API, to change an existing resource we can actually use either POST, PUT, or PATCH, it makes no difference.
>
> **[1:14](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=74)** In other REST APIs, it will be different.
>
> **[1:16](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=76)** This is just a choice of the designers of the Wordpress REST API.
>
> **[1:21](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=81)** Alright, so let's send a PUT request to the REST API.
>
> **[1:25](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=85)** Here's how that would work.
>
> **[1:28](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=88)** First, I'll just close the status window so we can see the code.
>
> **[1:31](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=91)** Then, I'll change my request to a PUT request.
>
> **[1:34](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=94)** The PUT request will look very much like the POST requests, so here again we have the Authorization header and the Content-Type.
>
> **[1:41](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=101)** And then instead of adding all the information, I'm now only going to add the information I actually want to change.
>
> **[1:48](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=108)** So I'll un-comment this section here and then say I only want to change the title so I'll take the rest of these entries out.
>
> **[1:56](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=116)** And the new title should be The New REST API Post Title!
>
> **[2:09](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=129)** Again, to show you I'm not cheating, this is what we see inside Wordpress right now.
>
> **[2:14](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=134)** A post created via the REST API!
>
> **[2:17](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=137)** Then I send this request.
>
> **[2:19](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=139)** Over here on the right hand side it tells me 200 OK and if I scroll down, you'll see the title here is now set to The New REST API Post Title!
>
> **[2:29](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=149)** And if I go to my browser and reload, the post is now called The New REST API Post Title!
>
> **[2:35](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=155)** Now, this is the same post and you can see it clearly up here because the slug has not been changed.
>
> **[2:40](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=160)** The slug is still a-post-created-via-the-rest-api.
>
> **[2:43](https://www.linkedin.com/learning/learning-rest-apis/put-patch?u=76281980&t=163)** But the PUT request worked as expected and as a result I have successfully changed the title.

> [!info]- Semantic Content
>
> **Env Vars:** rest (14), api (11), put (10), post (6), patch (5)
> **API Endpoints:** put  (4), patch  (3), post  (2), put
 (2), get  (1)
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** delete (1), let (1), type. (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### DELETE
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=0)** - [Instructor] At this point you've seen how to discover all the functionality of a REST API using options, how to get resource collections and singleton resources using get, how to create resources using post, and how to modify resources using put and patch.
>
> **[0:14](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=14)** And that brings us to the inevitable conclusion: How to remove resources?
>
> **[0:19](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=19)** If I want to remove a resource, I cans send a delete request to it.
>
> **[0:23](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=23)** This delete request must be sent to the singleton resource URI to be successful, and here again, I need the proper authorization header, otherwise I won't be able to delete anything.
>
> **[0:34](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=34)** The request itself is really simple, just delete, then the URI to the resource, singleton resource in this case, and an authorization header.
>
> **[0:42](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=42)** Now, before I run this request, consider this: I'm sending a delete request to a REST API telling to delete the resource.
>
> **[0:51](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=51)** What do you think happens?
>
> **[0:53](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=53)** Let me show you.
>
> **[0:54](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=54)** Over here, on the live WordPress site, you can see this is the post I want to delete.
>
> **[0:59](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=59)** It's currently sitting under published.
>
> **[1:02](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=62)** Now when I pass this delete request, over on the right hand side we get a 200 OK, telling as that the request was successful, but when I scroll down, we find the entire post.
>
> **[1:13](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=73)** And if I look closely you'll see, the post wasn't actually deleted.
>
> **[1:18](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=78)** Instead, its status was changed from published to trash.
>
> **[1:23](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=83)** And this corresponds with how WordPress itself works.
>
> **[1:26](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=86)** If you click on trash for a WordPress post, it doesn't actually get deleted from the database.
>
> **[1:31](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=91)** Instead, it gets moved to the trash bin.
>
> **[1:33](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=93)** So if I reload this view you'll see the post is gone from the published list, and it's appeared under the trash list.
>
> **[1:39](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=99)** Same post, just sitting in a different location.
>
> **[1:42](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=102)** And in reality, all that's changed internally in the database is this status change down here.
>
> **[1:48](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=108)** This is something you'll often see with the REST APIs.
>
> **[1:51](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=111)** The REST API tries to mimic the behavior of the application you gain access to.
>
> **[1:55](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=115)** So if WordPress puts deleted post in trash, then the REST API will also put deleted post in trash.
>
> **[2:03](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=123)** Which brings up the obvious question: What if you want to actually delete this entry completely.
>
> **[2:09](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=129)** Get it out of the database, who no longer exist.
>
> **[2:12](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=132)** And to do that, we need to ask the REST API, hey, how do I delete a post?
>
> **[2:16](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=136)** So, I'll close down the window, and then I'll send in options requests to the singleton resource.
>
> **[2:30](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=150)** Now we can take a look at what methods are available for us in the singleton resource, and here you see, we have get, post, put, patch, and delete.
>
> **[2:38](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=158)** Now, I've already seen that delete out of the box does not what I want it to do, so I'll do a search for delete, and see what it says about this method.
>
> **[2:49](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=169)** Down here we have the delete method, and it says first ID is required, so we actually delete an object and not something else.
>
> **[2:56](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=176)** And then directly below it says there's an argument called force that defaults to false, and if we set it to true, it allows it to control whether to bypass trash, and force deletion, which is exactly what we want.
>
> **[3:10](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=190)** So, knowing what we now know, we're able to delete this entry permanently.
>
> **[3:15](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=195)** So I'll change the request to delete again, and I'll go to the end, and create a URL query that targets force, and sets force to true.
>
> **[3:27](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=207)** Send the request again.
>
> **[3:32](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=212)** We get a 200 OK at the top here, scrolling down you'll see here we have the post objects, that's while we can back it up, in case we want to resurrect it later.
>
> **[3:41](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=221)** And if I go over to the WordPress site now and reload, we'll see under trash there's nothing, and under published there are only three posts.
>
> **[3:48](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=228)** That means we have successfully deleted both the post, and the resource.
>
> **[3:53](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=233)** To prove it, I can now make a get request to the singleton resource at ID 15, and when I send this request I should get 404 not found, and down here it tells me, invalid post ID, meaning the post, and the resource is gone.
>
> **[4:10](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=250)** What you've seen in this chapter is, once you have a firm grasp of what the http verbs do and how to use them, interacting with the REST API is a relatively straight forward process.
>
> **[4:20](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=260)** And if you're ever unsure about what you can and cannot do on a specific resource, just send an options request, and the REST API will tell you.
>
> **[4:28](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=268)** All of this is because the six constrains of REST ensure consistency, self-descriptive requests and responses, and data portability.
>
> **[4:36](https://www.linkedin.com/learning/learning-rest-apis/delete?u=76281980&t=276)** All right at your fingertips.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (17), case, (1), this: (1), let (1), pass (1)
> **Env Vars:** rest (9), api (7), uri (2), url (1)
> **UI Navigation:** scroll down (1), click on (1), go to (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-rest-apis/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-rest-apis/next-steps?u=76281980&t=0)** - [Morten] By watching this course you now have a foundational understanding of what REST APIs are and how they function.
>
> **[0:06](https://www.linkedin.com/learning/learning-rest-apis/next-steps?u=76281980&t=6)** Now it's time to put that knowledge to work interacting with existing REST APIs and building your own.
>
> **[0:11](https://www.linkedin.com/learning/learning-rest-apis/next-steps?u=76281980&t=11)** And we have a long list of courses for you to get started.
>
> **[0:14](https://www.linkedin.com/learning/learning-rest-apis/next-steps?u=76281980&t=14)** Just search for REST and your favorite programming language or application to continue your journey of learning and start using REST APIs today.
>
> **[0:23](https://www.linkedin.com/learning/learning-rest-apis/next-steps?u=76281980&t=23)** I love hearing from you about how you use what you've learned in my courses and I'm interested to hear how you're using REST APIs in your applications.
>
> **[0:31](https://www.linkedin.com/learning/learning-rest-apis/next-steps?u=76281980&t=31)** You can follow me on LinkedIn and hit me up on Twitter @mor10 'cause that's my name where I talk about the web and the internet and how they shape us.
>
> **[0:39](https://www.linkedin.com/learning/learning-rest-apis/next-steps?u=76281980&t=39)** Send me your questions, ideas, or random thoughts and I'll do my best to answer.
>
> **[0:44](https://www.linkedin.com/learning/learning-rest-apis/next-steps?u=76281980&t=44)** Now all that's left for me to say is (speaks in foreign language) go build some amazing things with REST APIs and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Env Vars:** rest (6)
> **Code Keywords:** function (1), continue (1)
> **CLI Commands:** go build (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [morten] (1)


## Path Context

### In [[Become a RESTful API Developer]]
**1 of 5** | [[HTTP Essential Training]] →

### In [[Become a Full-Stack Web Developer]]
← [[NoSQL Essential Training]] | **11 of 12** | [[Devops Foundations]] →

## Appears In

- [[Become a RESTful API Developer]]
- [[Become a Full-Stack Web Developer]]

---

[↑ Back to top](#)