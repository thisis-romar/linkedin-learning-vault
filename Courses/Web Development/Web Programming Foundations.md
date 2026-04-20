---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: web-programming-foundations
url: "https://www.linkedin.com/learning/web-programming-foundations"
duration_minutes: 117
duration: 1h 57m
level: Beginner
updated: 12/11/2024
learners: 400716
skills:
  - Front-End Development
  - Programming Foundations
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHsspzzrmnv6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567117745019?e=2147483647&amp;v=beta&amp;t=-GW3_82shsL5imuhcywAXOPcfylFrzpxqc7A57zDR-g"
linkedin_topic: Web Development
learning_paths:
  - Explore a Career in Front-End Web Development
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/front-end-development
  - skill/programming-foundations
status: not-started
created: 2026-04-19
---

![Web Programming Foundations](https://media.licdn.com/dms/image/v2/C4E0DAQHsspzzrmnv6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567117745019?e=2147483647&amp;v=beta&amp;t=-GW3_82shsL5imuhcywAXOPcfylFrzpxqc7A57zDR-g)

# Web Programming Foundations

> View Morten's LinkedIn NewsletterTo be an effective web programmer, you have to understand what happens when you enter a URL or click on a link. Under every webpage lies the markup—JavaScript, HTML, and CSS—and the hierarchy that controls display—the Document Object Model (DOM). Then there is the server that hosts the files, the browser that renders them, the metadata, and the mobile experience to

> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations) | 1h 57m | Beginner | 401K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Morten Rand-Hendriksen]]

## Skills Covered

- Front-End Development
- Programming Foundations

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=0)** - If you're like me, you spend part of your day touching or clicking on links and typing URLs in the address bar of your favorite browser.
>
> **[0:08](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=8)** Many of our daily interactions with information, businesses, and services now happen over the World Wide Web, and the majority of them happen in a good old web browser on a computer or mobile device, which begs an important question.
>
> **[0:21](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=21)** What exactly happens when you type a URL in that address bar or click on a link to a webpage?
>
> **[0:26](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=26)** And how are these websites and applications put together in the first place?
>
> **[0:31](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=31)** Knowing how the internet works and how to work with it, all the way the from the code editor to the mobile browser and beyond, is essential to anyone wanting to publish their ideas on the web.
>
> **[0:42](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=42)** The best place to start is with something you already know, the browser.
>
> **[0:47](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=47)** So, what happens when you type a URL in an address bar or click on a link?
>
> **[0:52](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=52)** Well, the URL functions as an address to a server.
>
> **[0:56](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=56)** That server holds a document written in a markup language the browser can understand.
>
> **[1:02](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=62)** That document in turn links to other files on the server and on the web, including images and videos, a style sheet describing what the content should look like, and maybe some JavaScript to add interactivity.
>
> **[1:14](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=74)** Those files were created by web designers and developers in accordance with strict rules of web standards, content hierarchy, and accessibility to make them easy to parse for servers and browsers and easy to read and understand for humans.
>
> **[1:28](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=88)** When you type that URL and press enter or click that link, a request is sent to the server to get that document and all its related files.
>
> **[1:38](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=98)** The browser receives everything and displays the document and its referenced images and videos in accordance with the style sheet and with the interactivity described in JavaScript.
>
> **[1:48](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=108)** What you have now is a local copy of the web document running in your browser.
>
> **[1:54](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=114)** Unplug the web, and the page persists.
>
> **[1:57](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=117)** Reconnect the web, click on a link, and the whole process starts over.
>
> **[2:02](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=122)** That was the high-level version.
>
> **[2:04](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=124)** Now it's time to dig in and really understand all the pieces that make up the web we all know and love.
>
> **[2:09](https://www.linkedin.com/learning/web-programming-foundations/welcome?u=76281980&t=129)** Let's get cracking.

> [!info]- Semantic Content
>
> **Env Vars:** url (4)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - if (1)


### 1. Deconstructing the Web

#### From URL to website
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=0)** - Let's start at the very beginning.
>
> **[0:02](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=2)** You open your web browser, type in a URL in the address bar and hit Return.
>
> **[0:07](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=7)** What happens?
>
> **[0:08](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=8)** With any luck, the website loads in the browser and you can read, view or listen to the content you were looking for.
>
> **[0:14](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=14)** But what really happens?
>
> **[0:16](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=16)** Let's start with that address bar and what you put in it.
>
> **[0:20](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=20)** Whether you type out a web address yourself or click on a bookmark or follow a link, the address bar is filled with a URL, or Universal Resource Locator.
>
> **[0:30](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=30)** This URL is quite literally a locator following a universal standard that points at a specific resource somewhere on the web, and that resource is the document you're trying to access and all it's associated assets, and that somewhere is a server connected to the internet somewhere in the world whose IP address is mapped to the domain you used in a DNS, or Domain Name Server.
>
> **[0:57](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=57)** Here's how all of that works.
>
> **[1:00](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=60)** A URL is entered in the address bar.
>
> **[1:03](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=63)** When the user hits Return or touches the button on their phone or something else, the browser sends a get request to this URL, which asks the server on the other side to send back all the data it has.
>
> **[1:16](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=76)** The URL is sent to a domain name server, known more commonly as DNS.
>
> **[1:23](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=83)** The DNS figures out which IP address the domain is pointing at, and passes the request to the server on that IP address.
>
> **[1:32](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=92)** The server retrieves all the data, aka the resource, and sends it back to the browser.
>
> **[1:38](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=98)** The resource received by the browser is in all likelihood an HTML, or Hypertext Markup Language document.
>
> **[1:46](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=106)** HTML is the universal document language for the worldwide web.
>
> **[1:50](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=110)** This HTML document contains all the contents of the page as well as references to media items like images, audio and video.
>
> **[1:58](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=118)** It also contains links to cascading style sheets, or CSS, containing instructions on how the content should be displayed in the browser, and possibly JavaScript, small programs that run in the browser.
>
> **[2:11](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=131)** Finally, the browser puts the HTML and CSS and JavaScript together and paints the view you see in the viewport, the space inside the browser where the web is displayed.
>
> **[2:22](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=142)** All of this back and forth and putting together happens really fast, usually in a few seconds or less, and most of it is automated and largely out of our control.
>
> **[2:31](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=151)** Front-end web development is focused on how to make the stuff that ends up in the browser.
>
> **[2:37](https://www.linkedin.com/learning/web-programming-foundations/from-url-to-website?u=76281980&t=157)** Knowing how it gets there helps explain some of the things we do when we build the creations that live on the web.

> [!info]- Semantic Content
>
> **Env Vars:** url (6), html (4), dns (3), css (2)
> **Code Keywords:** let (2), return. (1), for. (1), else, (1), finally, (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### The web, in a browser
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=0)** - So let's catch up to where we are.
>
> **[0:02](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=2)** At this point, we've sent a get request to a server, which has retrieved the contents of the site and sent them back to our browser.
>
> **[0:09](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=9)** Once the website appears in the browser, we can start interacting with it.
>
> **[0:13](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=13)** On the surface, we can look at the contents, read the text, view the images and videos, listen to audio, and interact with interactive elements.
>
> **[0:22](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=22)** Look a little bit deeper, and what we find is a carefully-structured document displayed as a collection of boxes with different properties.
>
> **[0:30](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=30)** There's a header section containing the site title, logo, and a navigation menu, there's the main section containing an article which in turn contains a heading or collection of paragraphs and an image, there's a sidebar section with some advertising, and there's a footer section with company information.
>
> **[0:47](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=47)** There's a visual structure to all this content, but that's just being styled in the browser.
>
> **[0:52](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=52)** Turn off the CSS, and we see the true, underlying structure of the document.
>
> **[0:57](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=57)** Remember, every webpage and every website is a document, and a properly structured document is readable and accessible, even without all the fancy colors and fonts and layouts, which kind of is the whole point of the web.
>
> **[1:12](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=72)** Serve up the content in a uniform format, and let people decide how to access that content.
>
> **[1:18](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=78)** We'll talk more about that later.
>
> **[1:19](https://www.linkedin.com/learning/web-programming-foundations/the-web-in-a-browser?u=76281980&t=79)** For now, just remember this: the web browser is an advanced viewer for web documents, nothing more, nothing less.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this: (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Env Vars:** css (1)
> **Speakers:** - so (1)

#### The structure of a web document visualized
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=0)** - [Instructor] Remember, what you see in your browser is a carefully structured document displayed as a collection of boxes with different properties.
>
> **[0:08](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=8)** This is important, so I wanted to explain it in a bit more detail.
>
> **[0:12](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=12)** When looking at the contents in the browser, it's not immediately obvious that everything is a box within a box within a box.
>
> **[0:19](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=19)** But, with a tiny bit of code we can visualize every box.
>
> **[0:24](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=24)** This nesting of elements serves two purposes.
>
> **[0:29](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=29)** On the code end, it allows the author to create a highly-structured document with clear relationships between different elements.
>
> **[0:36](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=36)** Think a header that holds the site title, logo, and a navigation section, which in turn holds each of the navigation items.
>
> **[0:45](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=45)** This allows servers, browsers, and other applications to figure out how the content is structured without needing to understand the content itself.
>
> **[0:53](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=53)** On the display end, nesting allows for style inheritance.
>
> **[0:58](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=58)** If you apply a style property, say font family to an element, all elements nested inside or descendant of that element will inherit the same font family property.
>
> **[1:10](https://www.linkedin.com/learning/web-programming-foundations/the-structure-of-a-web-document-visualized?u=76281980&t=70)** Using the property of style inheritance, you can position elements relative to their parent elements, create flexible boxes and grid layouts, create interactions that impact parent, child or sibling elements, and control every detail of every piece of content in the document.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### The node tree: How the browser sees a web document
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980&t=0)** - Any time a browser is asked to display an HTML document, it creates a document object model or DOM, which is a structural representation of the elements in the document and their relationships.
>
> **[0:12](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980&t=12)** This document object model can be visualized as a DOM tree, where each element is a leaf or node, and the connections are branches.
>
> **[0:21](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980&t=21)** When you add new elements to an HTML document, you are effectively adding a node to this DOM tree.
>
> **[0:27](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980&t=27)** When you target elements using CS or Javascript, you ask the browser to follow the branches all the way from the root to the node or nodes in question.
>
> **[0:36](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980&t=36)** This is called either walking or traversing or navigating the DOM.
>
> **[0:41](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980&t=41)** When I develop, design, and work with web documents, I often find it useful to visualize or actually draw out the dom tree or part of the tree to understand relationships and inheritants between different elements.
>
> **[0:54](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980&t=54)** This also encourages me to reduce complexity and avoid unnecessary nesting.
>
> **[0:59](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980&t=59)** This way, I'm able to keep accessibility and logical structure front and center.
>
> **[1:05](https://www.linkedin.com/learning/web-programming-foundations/the-node-tree-how-the-browser-sees-a-web-document?u=76281980&t=65)** Remembering that every element is a box, and that every box is a node on the tree connected to its parents, siblings, and descendants via branches is key to understanding how the browser sees the Web and how you can give the browser sufficient information to do what you want.

> [!info]- Semantic Content
>
> **Env Vars:** dom (4), html (2)
> **CLI Commands:** node (4), find (1)
> **Definitions:** is a  (4), is called (1)
> **Speakers:** - any (1)

#### HTML: The source code of the web
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=0)** - At the core of all of elements and boxes and nodes and trees is the web document itself written in Hypertext Markup Language, or HTML.
>
> **[0:11](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=11)** HTML was created to allow humans to write highly-structured documents which could be interpreted consistently and universally by any rendering engine supporting the language.
>
> **[0:22](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=22)** HTML is a declarative markup language, meaning it describes the contents of a document.
>
> **[0:29](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=29)** For example, this is a first-level heading, this is a paragraph, this is a link, this is an emphasized text, this is an blockquote, this is an image, etc.
>
> **[0:38](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=38)** However, HTML does not provide instructions about the control flow or processing or interactions with that content.
>
> **[0:46](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=46)** This allows the reader, commonly known as a client, so a web browser or some other application, to decide how to handle the different types of content which makes HTML incredibly versatile and accessible.
>
> **[1:00](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=60)** The DOM tree is the browser representation of every HTML element and their relationships with other elements.
>
> **[1:07](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=67)** Looking at the actual HTML code, we can see these relationships in the markup structure.
>
> **[1:13](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=73)** Each HTML element has an opening and closing element tag that may contain attributes and other information.
>
> **[1:20](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=80)** The contents between the opening and closing tags, including other opening and closing tags become part of the DOM tree node.
>
> **[1:28](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=88)** Let's take a look at a navigation menu.
>
> **[1:31](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=91)** In this menu, we have a nav element with a class main navigation, and this element contains an unordered list with six list items, each containing a link.
>
> **[1:42](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=102)** The HTML structure in this example is human-readable and clearly shows the relationship between the different elements through nesting.
>
> **[1:50](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=110)** I say human-readable because a computer would understand the relationships even if we removed all the line breaks and spaces and made all this one line of code, but that would make the document unreadable for us humans.
>
> **[2:04](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=124)** Based on the HTML nesting, we can draw out the DOM tree for this nav node and make a rough sketch of the boxes and nesting that are created when the DOM tree is painted in the browser.
>
> **[2:16](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=136)** Talking to web designers and developers will often find they make these drawings either in their heads or on paper in a design application to visualize these relationships before the code reaches the browser.
>
> **[2:28](https://www.linkedin.com/learning/web-programming-foundations/html-the-source-code-of-the-web?u=76281980&t=148)** And eventually, it becomes second nature to break down everything you see in a browser as a logical grouping of boxes, which represent nodes on a DOM tree, which represent tags in an HTML document, which means we've come full circle from what we see in the browser to how that content was written and all the way back again.

> [!info]- Semantic Content
>
> **Env Vars:** html (11), dom (5)
> **Definitions:** is a  (4), is an  (3), known as (1)
> **CLI Commands:** make (3), node (2), find (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Speakers:** - at (1)

#### The web document is a document with superpowers
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=0)** - I've shown you how what is displayed in the browser's view port is actually a rendering of an HTML document downloaded from a server somewhere in the world.
>
> **[0:09](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=9)** This is an important realization, not just because it shows you how the web works at a fundamental level, but also because it reminds us of what the web is for.
>
> **[0:19](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=19)** The web was created to allow everyone to share information through documents over the internet.
>
> **[0:25](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=25)** All the other stuff, making a document look pretty and have cool interactive features and so on, is secondary.
>
> **[0:32](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=32)** What matters is the document itself.
>
> **[0:35](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=35)** And what makes the web so special and so successful that large portions of the people alive today across the world carry a web browser in their pocket, is that that document has superpowers.
>
> **[0:49](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=49)** Consider a handwritten or printed document.
>
> **[0:52](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=52)** I can write stuff on it and then pass it to someone else, and they can read that information.
>
> **[0:58](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=58)** That's cool, but it's also limited by the physicality of the document itself.
>
> **[1:03](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=63)** Its information can only be accessed by those who can physically hold the document.
>
> **[1:09](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=69)** To get around this, I could make the document into a shareable file, like a PDF, and put it on the internet.
>
> **[1:15](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=75)** But then, people would have to download it, open it in the right application, and look at it in the way it was originally formatted on their screen.
>
> **[1:24](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=84)** HTML is fundamentally different.
>
> **[1:27](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=87)** It gives a document superpowers.
>
> **[1:30](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=90)** If I mark up my document in HTML and put it on the web, I grant everyone with an internet connection the ability to access that content in the document in any way they want.
>
> **[1:42](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=102)** If they want to view it with the styling and interactivity I designed, they can open it in a regular web browser.
>
> **[1:48](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=108)** If they want to access just the content, they can use a text only browser or a text-to-speech browser.
>
> **[1:55](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=115)** If they want to add their own styling and interactivity, they can do so in their own browser without affecting the original document, since they are working on their own local copy, and if they want to add something to the information, they can publish their own HTML document and provide a link back to mine.
>
> **[2:13](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=133)** The web was built to make information accessible, shareable, and linkable.
>
> **[2:19](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=139)** With HTML, any web document can link to contents within itself, to other contents on the same domain, or to any content anywhere on the web.
>
> **[2:30](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=150)** That is why it's called the World Wide Web.
>
> **[2:34](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=154)** It's quite literally a web of links tying information from all over the world together, and making it all accessible through a web browser to date, and to other means we have yet to come up with in the future.
>
> **[2:47](https://www.linkedin.com/learning/web-programming-foundations/the-web-document-is-a-document-with-superpowers?u=76281980&t=167)** And the best thing, the superpower of HTML belongs to everyone.

> [!info]- Semantic Content
>
> **Env Vars:** html (6), pdf (1)
> **Code Keywords:** for. (1), pass (1), else, (1), this, (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Speakers:** - i (1)


### 2. The Duality of Web Programming

#### The dual purpose of web code
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=0)** - When writing for the web, you're writing for two audiences, the human being accessing the content and the technology used to access that content, in most cases a web browser.
>
> **[0:11](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=11)** The key to writing accessible, understandable, and usable content is to write content for people and then mark it up so it can also be parsed properly by computers.
>
> **[0:22](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=22)** Humans are, for the most part, pretty decent communicators.
>
> **[0:26](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=26)** And when we write content, the structuring of that content comes almost naturally given the proper training.
>
> **[0:32](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=32)** Start with a heading, then write a paragraph and another paragraph, and add an image with a caption and maybe another paragraph followed by a subheading, and so on.
>
> **[0:41](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=41)** The challenge comes when we have to explicitly state what each of these things are so they can be marked up and declaratively codified for computers.
>
> **[0:50](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=50)** The goal is to write code that satisfies our end goal, conveying the contents to the persons accessing it in the best way possible.
>
> **[0:59](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=59)** To do so, we have to identify the nature, properties, purpose, and relationships of each element of content so they can be marked up as such.
>
> **[1:08](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=68)** The first heading is the main heading, so it should have heading level one.
>
> **[1:12](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=72)** The first paragraph is the intro paragraph and should signal this in some way for a viewer without changing the markup.
>
> **[1:19](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=79)** We can do that by adding a drop-cap through CSS.
>
> **[1:22](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=82)** The image has a caption so it should be wrapped in a figure element and the caption as a figcaption element.
>
> **[1:29](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=89)** The next heading is a subheading and should, therefore, have heading level two, and so on.
>
> **[1:35](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=95)** To reiterate, you have two goals, communicate with a human consumer and communicate with a machine.
>
> **[1:41](https://www.linkedin.com/learning/web-programming-foundations/the-dual-purpose-of-web-code?u=76281980&t=101)** To do this, you must effectively write the content, identify the nature, property, purpose, and relationships of each element of that content and mark everything up accordingly.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Env Vars:** css (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### Content and structure
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=0)** - [Instructor] Let's assume for a moment all web documents start with meaningful content written for humans.
>
> **[0:05](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=5)** To carry that meaning to other humans through the web, we need to mark up these documents so the browser understands the structure of that content.
>
> **[0:13](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=13)** HTML is a declarative, semantic, markup language, meaning we can use it to communicate meaning to whatever client application opens the document.
>
> **[0:22](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=22)** Let's look at an example.
>
> **[0:24](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=24)** In a standard web document, we'll typically find a header, a main section with an article, possibly some side-bars, and a footer.
>
> **[0:32](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=32)** Each of these main blocks have their own semantic HTML elements, and you can see them here.
>
> **[0:37](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=37)** We have a header, then a main section, within the main section an article, and finally a footer.
>
> **[0:45](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=45)** By adding a beginning element tag, like header, before the content of a section and a corresponding end element tag, like end header, at the end, we tell the browser, "consider this section "of content and everything that appears inside it, "the content of the header of this document, "and handle it appropriately."
>
> **[1:05](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=65)** The browser will then check with the supplied style sheets, JavaScript files, and any default behaviors before rendering out this content and painting it in the browser.
>
> **[1:15](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=75)** This semantic structure you see here is present throughout the entire HTML document.
>
> **[1:21](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=81)** Every part of the document is marked up with a tag describing its function, headings, paragraphs, emphasized and strongly emphasized texts, block quotes and citation, addresses, ordered and unordered lists, links, buttons, the list goes on.
>
> **[1:35](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=95)** For each of these elements, the browser generates a corresponding node and places it on the node tree of the document object model.
>
> **[1:42](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=102)** Once that tree is populated, a user can instruct the client to fetch any of these elements either through direct interaction or through code.
>
> **[1:51](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=111)** Let's say, for example, you want to navigate the browser to a specific section or area within the document.
>
> **[1:56](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=116)** You can see that in the example right here.
>
> **[1:58](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=118)** At the very top of the body element, we have a link that points to #content and says skip to content.
>
> **[2:06](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=126)** This is an accessibility feature that is required for all web pages to be accessible.
>
> **[2:11](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=131)** And all that happens is when you navigate to this link and click on it, you should skip directly down to the main content of this particular document.
>
> **[2:19](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=139)** We're targeting the ID called content, and that means the browser will go through the entire node tree until it finds an element that has this ID, content.
>
> **[2:29](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=149)** It happens to be this one, the main, with the ID content.
>
> **[2:32](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=152)** And when you click on this link, the browser will automatically navigate down to the main with the main content.
>
> **[2:39](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=159)** What we're doing here is simply telling the browser, "hey, go find whatever element has this particular ID, "and bring it to the top of your view port."
>
> **[2:48](https://www.linkedin.com/learning/web-programming-foundations/content-and-structure?u=76281980&t=168)** Semantic HTML is the key to bridging the gap between content and structure, and, used correctly, it makes the content more accessible for everyone, both humans and computers.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), find (2)
> **Code Keywords:** let (3), function (1)
> **Env Vars:** html (4)
> **UI Navigation:** click on (2), navigate to (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Metadata and purpose
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=0)** - [Instructor] In addition to the standard content and markup, all web documents contain metadata that further describes the document and it's contents.
>
> **[0:08](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=8)** Some of this metadata provides a literal description of the document and what it contains.
>
> **[0:13](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=13)** This data is typically found in the head section of the document.
>
> **[0:17](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=17)** Other metadata describes sections, elements and contents within the documents, adds structure to the data, and in some cases, describes the behavior of these sections, elements and contents.
>
> **[0:28](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=28)** This includes schema, microformat, ARIA and other tools.
>
> **[0:32](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=32)** All of these tools are designed to do the same thing.
>
> **[0:35](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=35)** To assist humans in finding and accessing the content they are looking for, and to assist clients, search engines and other tools in cleaning meaningful data about the document and it's content, again, to assist human users.
>
> **[0:48](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=48)** In the head section of a standard HTML document you'll find things like the human language the content is written in, the character set used, the text direction if the language is right to left, the title of the document to be displayed in the browser tab, associated style sheets and JavaScript references and other information.
>
> **[1:06](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=66)** All this information is provided to the browser or whatever client accesses the document, but it's not displayed to the human because it's meta information.
>
> **[1:15](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=75)** At element-level, you can find schema or microformats describing the purpose and structure of specific pieces of data.
>
> **[1:23](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=83)** As an example, if the document describes a product, there may be schema or microformats applied to different elements to identify them as the product name, the product description, the product image, the product price, et cetera.
>
> **[1:36](https://www.linkedin.com/learning/web-programming-foundations/metadata-and-purpose?u=76281980&t=96)** And if the document includes advanced interactivity, like panels that expand and collapse or areas where more content is loaded when a user clicks on a button or scrolls past, you'll find ARIA, or Accessible Rich Internet Application attributes, that help text-to-speech browsers and screen readers read out what's happening on the screen so people who consume the web without seeing it are made aware of what's going on.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Env Vars:** aria (2), html (1)
> **Code Keywords:** for, (1)
> **Speakers:** - [instructor] (1)

#### Accessibility
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=0)** - I want to talk about a really important concept in web programming, accessibility.
>
> **[0:06](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=6)** Accessibility is one of the core concepts of the web, yet in the 30-some years since the first web page was published, web accessibility has largely taken a back seat to more attractive issues, like how to make things look pretty, or how to add fancy interactions.
>
> **[0:21](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=21)** All that is finally changing thanks to the tireless work of the web accessibility community.
>
> **[0:27](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=27)** And it is our job to make sure everything on the web, published from here on forwards, is accessible to everyone.
>
> **[0:36](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=36)** At the core of web accessibility is a simple principle.
>
> **[0:39](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=39)** Content should be accessible regardless of what tool the visitor uses to access it.
>
> **[0:46](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=46)** They should be able to get the same content, whether they use a standard visual browser or a text to speech browser.
>
> **[0:52](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=52)** They should be able to interact with links and buttons, and other elements, whether they use a finger or a mouse, or a keyboard, or any other input device.
>
> **[1:01](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=61)** This is important, not just because everyone should have access to all contents posted on the web, but also because we don't know how people will be accessing that content in the future, and making it accessible today, means making it accessible for future devices, applications, and modalities.
>
> **[1:20](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=80)** The good news is web accessibility is neither complicated nor expensive, if it's built in from the start.
>
> **[1:27](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=87)** Semantic standards-compliant HTML is accessible by default.
>
> **[1:32](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=92)** Accessibility issues are introduced when we start trying to make a simple web document look and act fancy.
>
> **[1:38](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=98)** That can be a challenge, and it can also be an opportunity.
>
> **[1:42](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=102)** Let's you and me make an agreement right here.
>
> **[1:45](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=105)** All the things we build for the web from here on out will be accessible.
>
> **[1:51](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=111)** That's all.
>
> **[1:53](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=113)** How do we do that?
>
> **[1:54](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=114)** Here's the plan.
>
> **[1:55](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=115)** First, make it accessible, then make it fancy, and finally, make sure whatever you did to make it fancy doesn't break accessibility.
>
> **[2:05](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=125)** Here's what that can look like in the day-to-day process.
>
> **[2:08](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=128)** First, always start with Semantic standards-compliant HTML.
>
> **[2:14](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=134)** That gives you an accessible base to work from.
>
> **[2:18](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=138)** Second, as you add styling to the content, run accessibility checks for keyboard navigation, course pointers, color contrast, cognitive load, screen readers, et cetera.
>
> **[2:30](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=150)** Third, if an accessibility issue arises, fix it before moving the project forward to avoid it becoming a legacy issue.
>
> **[2:38](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=158)** Fourth, bring in accessibility consultants and testers to audit the final product before launch.
>
> **[2:44](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=164)** Fifth, make accessibility part of the maintenance and iteration plan for the project.
>
> **[2:52](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=172)** The web was created to make content accessible to everyone.
>
> **[2:56](https://www.linkedin.com/learning/web-programming-foundations/accessibility?u=76281980&t=176)** It is our job as the people who build the web to ensure all content is available to all visitors in a format they can use.

> [!info]- Semantic Content
>
> **CLI Commands:** make (10)
> **Code Keywords:** default. (1), let (1), finally, (1), from. (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)


### 3. Which Came First: The Browser or the Editor?

#### The web browser of today and of tomorrow
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=0)** - So far, I've talked about websites and web code and how it all fits together.
>
> **[0:06](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=6)** Now it's time to shift gears and look at the tools we use to make all this work.
>
> **[0:10](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=10)** In this chapter we'll look at the three tools that web designers and developers use everyday to build experiences on the web and beyond.
>
> **[0:18](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=18)** The web browser, the code editor and browser developer tools.
>
> **[0:23](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=23)** Let's start with the browser.
>
> **[0:25](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=25)** Earlier in the course, I described the web browser as an application for reading and viewing web documents, more specifically the purpose of the web browser is to make it easy for humans to access and navigate between web documents.
>
> **[0:40](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=40)** It downloads HTML and other markup and code files and outputs styled and formatted content for us humans to access.
>
> **[0:48](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=48)** The inherent challenge of the browser is that it is an interpreter and only recently have we gotten to a point that most browsers interpret the same code in more or less the same way.
>
> **[1:00](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=60)** Every browser has its idiosyncrasies and opinions about how the web should work and all browsers and constantly competing for market dominance so they add new features and try to introduce new standards all the time.
>
> **[1:13](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=73)** For web designers and developers, this means it's not enough to test your code in one browser, it has to be tested in as many browsers and browser versions as possible.
>
> **[1:25](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=85)** In most cases, that means having multiple browsers on your development computer.
>
> **[1:29](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=89)** In some cases, it means using online tools like BrowserStack to run automated tests across large numbers of browsers and in rare cases, it means setting up so-called device labs containing tens or even hundreds of devices to test the code on.
>
> **[1:45](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=105)** There is no one true browser.
>
> **[1:48](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=108)** There is a spectrum of browsers and your code has to work on all of them.
>
> **[1:54](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=114)** Now when I say browser, the first image that pops into your head is probably a regular old browser on your computer.
>
> **[2:01](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=121)** This is the original desktop browser.
>
> **[2:04](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=124)** In addition to the desktop browser, we have mobile browser, in-app browser, text only browsers, text-to-speech browsers, console browsers, smart TV browsers, fridge browsers, et cetera.
>
> **[2:16](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=136)** Pretty soon, the rising popularity of podcasts and audiobooks will result in smartphones offering some form of voice or gesture controlled text-to-speech experience that strips contents out of websites to be consumed by the user so some sort of enhanced, voice-control audio browser type thing and that's just what we have right now.
>
> **[2:39](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=159)** In the near future, we'll also have some form of VR or AR or MR browser but I don't think that's how we'll be consuming web content with these technologies.
>
> **[2:50](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=170)** More likely, they'll pull content from the web and provide whole new ways for us to consume and interact with that content which renders the idea of the browser as we now know it, obsolete.
>
> **[3:03](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=183)** Beyond that is anyone's guess.
>
> **[3:05](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=185)** Nobody considered the possibility of people surfing the world wide web on their phones 15 years ago and we have no idea of what kinds of technologies will revolutionize the way people consume web content in the future.
>
> **[3:18](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=198)** The only thing that we know for sure is the browser of today will not be how we access web content tomorrow.
>
> **[3:26](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=206)** Our job is to figure out how to build solutions for today that are ready for what tomorrow brings.
>
> **[3:32](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=212)** Here's how to start.
>
> **[3:35](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=215)** As I've explained, a browser is a tool for humans to access and browse web content, nothing more, nothing less.
>
> **[3:44](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=224)** Our job is to make sure everything we build is accessible and works in all browsers, both the ones we use ourselves and the ones others use.
>
> **[3:55](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=235)** To get there, we follow accessibility and web standards, employ progressive enhancements to provide a great experience for everyone and an enhanced experience for those on modern platforms and make sure our content delivery is not dependent on current browser features.
>
> **[4:13](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=253)** To meet that last requirement, more and more services now provide their content through a restful API, meaning the content is fully separated from the presentation and can be requested by any website or app, or any tool to be presented in the way preferred by the user.
>
> **[4:31](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=271)** Think of how you can access the same tweets through the Twitter website or any number of apps or webpage's widgets and you get the idea.
>
> **[4:41](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=281)** Here's the key take away, even though the content we publish on the web today should work in old browsers, it should not be built for those browsers.
>
> **[4:51](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=291)** Instead, the content should be separated from its presentation and browser-specific solutions like CSS and JavaScript should be added on as one option for accessing that content.
>
> **[5:03](https://www.linkedin.com/learning/web-programming-foundations/the-web-browser-of-today-and-of-tomorrow?u=76281980&t=303)** That's the way to build solutions for today and for the future.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Env Vars:** html (1), api (1), css (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** let (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - so (1)

#### What is a code editor?
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=0)** - All that code parsed by the browser and presented to the visitor as content has to be written somewhere and that somewhere is the code editor.
>
> **[0:08](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=8)** Well, technically you can write code for the web in any application that allows you to write and save plain text files, but a code editor is a tool specifically designed for editing code, so it's the best tool for the job.
>
> **[0:23](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=23)** There are a myriad of code editors and types of code editors, all customized to fit a specific work situation, coding language, or practice, but they all have one crucial thing in common.
>
> **[0:36](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=36)** They are used to write or develop the code that powers the web and since that code, HTML, CSS, JavaScript, and so on, is open and uncompiled, it doesn't matter which code editor you use and you can open the same files and work with them in any code editor at any time.
>
> **[0:56](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=56)** In other words, for the most part, code editor preference is exactly that, a preference.
>
> **[1:02](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=62)** Some people like one code editor over another, some code editors provide better support for specific languages or coding practices than others, and in the end, they all produce the same output.
>
> **[1:15](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=75)** While code editors vary tremendously on appearance and functionality, they have some key traits in common that help you write better code.
>
> **[1:24](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=84)** First off, pretty much all code editors now have syntax highlighting.
>
> **[1:29](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=89)** This means as long as the editor knows what coding language you are writing, it'll highlight the different components within the code to make it easier to see what's going on.
>
> **[1:38](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=98)** This highlighting varies between editors and between languages, and that doesn't really matter.
>
> **[1:43](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=103)** The point of syntax highlighting is to make sure the developer can see, at a glance, what a certain string of code is doing and whether it's doing the right thing.
>
> **[1:53](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=113)** In an HTML document, tag attributes and their values are colored differently from plain text contents and comments.
>
> **[2:00](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=120)** In CSS files, classes and IDs have distinct color codes and properties and values do, too.
>
> **[2:07](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=127)** In JavaScript files, variables, functions, objects, and methods all have their own distinct colors and if you don't like these colors, you can usually change the color theme or customize it to your particular liking.
>
> **[2:21](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=141)** Secondly, most code editors provide code hinting.
>
> **[2:25](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=145)** Start typing something and the editor will provide you with a list of similar available options, making your process quicker and less error-prone.
>
> **[2:33](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=153)** Depending on the language you're using, different editors will have different types of hinting support and you can often download extensions or packages to add new language support.
>
> **[2:44](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=164)** Thirdly, most code editors provide project management, allowing you to define a folder as a project and work within it.
>
> **[2:51](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=171)** This includes project navigation to access all project files, project-wide debugging, and more.
>
> **[2:58](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=178)** There are, of course, many more features in code editors, some universal and some unique to a language or to an editor, but that falls well outside the scope of this course.
>
> **[3:08](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=188)** Suffice it to say, code editors are built to edit code and have the tools you need to make that process as simple and straightforward as possible, which begs an obvious question.
>
> **[3:19](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=199)** How do you preview the code you're writing in the code editor?
>
> **[3:23](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=203)** The answer is actually almost too obvious, but to get there, I have to give you a tiny history lesson.
>
> **[3:30](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=210)** Once upon a time, so, like 10 years ago, WYSIWYG, or What You See Is What You Get, editors were all the rage.
>
> **[3:39](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=219)** The idea of the WYSIWYG editor was, you could write your code and see its results all in the same application, usually in two panels next to one another.
>
> **[3:49](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=229)** This idea is great, but in practice, it was suboptimal because the editor struggled and usually failed to accurately emulate real browsers.
>
> **[4:00](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=240)** As a result, you'd build something that looked great in the editor and then discover it looked broken in the browser.
>
> **[4:08](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=248)** Add to that the idiosyncrasies of different browsers and you end up confused about where the error is, in your code, in the WYSIWYG editor, or in one of the browsers.
>
> **[4:19](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=259)** The days of the WYSIWYG editor are largely behind us now and web developers have settled for a simpler and more obvious solution.
>
> **[4:26](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=266)** They just use a real browser as their preview.
>
> **[4:29](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=269)** Develop some code, then run it in a real browser, or two, or five to make sure everything worked correctly, then develop some more code and do the same thing.
>
> **[4:38](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=278)** This process can be streamlined by syncing the editor to the browser or running a background process that updates the browser any time a code file is changed.
>
> **[4:48](https://www.linkedin.com/learning/web-programming-foundations/what-is-a-code-editor?u=76281980&t=288)** The result is, you can develop your code in one editor and view the results immediately in the real environment where the code will run, which, when you think of it, makes so much sense, it's weird we didn't always do it that way.

> [!info]- Semantic Content
>
> **Env Vars:** wysiwyg (4), html (2), css (2)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), in other words (1)
> **UI Navigation:** open the (1)
> **Speakers:** - all (1)

#### Developer tools
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=0)** - [Instructor] The last tool in the standard web developer tool belt, is the browser developer tools.
>
> **[0:05](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=5)** These are tools built into every browser that let you see what's going on behind the scenes, and even manipulate what code the browser is working with to figure out how things work, and how to make them work better.
>
> **[0:15](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=15)** Historically, developer tools were an add-on to most browsers, but today they are a standard feature; open any browser, and you can right click on any element in a web document to inspect its markup, what styles apply to it, and even run JavaScript code in the console.
>
> **[0:31](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=31)** This gives you, as a web developer, full insight into what's happening when you tell the browser to open a document, and it's an essential tool, both when you develop new documents and write new code, and when you're debugging existing documents to figure out what's going on, and how to make it work properly.
>
> **[0:48](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=48)** Developer tools are best understood using a practical example.
>
> **[0:51](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=51)** Here, I've opened a standard site in Firefox, and from here I can now scroll through and find an element I want to change.
>
> **[0:58](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=58)** Let's say I want to change this button, here.
>
> **[1:00](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=60)** Right now it has this thick, white outline and when I hover over it, the color changes to match that outline.
>
> **[1:07](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=67)** I want to experiment and see if I can make it bigger or smaller, or maybe change some of the color surround.
>
> **[1:12](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=72)** To open the developer tools, I find it easiest to just right click on the element in question, or an adjacent element, then select "inspect element", and I'm taken directly to that particular element in the browser developer tools.
>
> **[1:26](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=86)** Here you can see the developer tools in Firefox open as a new bar on the bottom half of the screen, by default.
>
> **[1:34](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=94)** And you can change the position of these developer tools using toggles over here to add the position next to the display, or even dock it out as a separate panel, if you want to.
>
> **[1:44](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=104)** Inside the developer tools, I have an inspector that gives me a full breakdown of the current DOM, and you can see, when I move my mouse over the different elements here, I am selecting the different DOM nodes inside the current DOM.
>
> **[1:57](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=117)** So this is the code that's actually running in the browser.
>
> **[2:00](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=120)** From here I now have complete control over the html, so if I want to change the text from "Book Now!"
>
> **[2:05](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=125)** to "ha-ha", or something else, I can do that and it happens automatically.
>
> **[2:11](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=131)** Now, if I reload the page, it just jumps back to "Book Now!" because I'm just changing that one instance inside the browser.
>
> **[2:19](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=139)** If I want to change the appearance of this button, I can use the same tools to inspect the CSS rules that are currently being applied to that element.
>
> **[2:27](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=147)** You'll see, as I change the focus here to different DOM nodes, the rules on the right hand side change, because the rules that are applied to different elements are different.
>
> **[2:37](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=157)** In my example, I want to change the appearance of the button itself, and when I click on the "Book Now!" DOM node, I can see it's an anchor, and the anchor sits inside a div, with a class CTA.
>
> **[2:50](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=170)** Over in the rules section, I see that anchor has several different rules applied to it, here there is a specific rule for CTA class, and the anchor inside, and then there's another one further down, for CTA and anchor inside.
>
> **[3:03](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=183)** In this case, that's because we have a media query that tests how wide the screen is and changes the font size, and border width depending on the screen width.
>
> **[3:12](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=192)** So, if I want to change the size of the text inside, all I need to do is click on the size number for font size under this rule, and use the arrow keys up and down.
>
> **[3:26](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=206)** This gives me an immediate preview of exactly what that would look like.
>
> **[3:30](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=210)** I can also punch in random numbers, I can say 12 pixels, or I can say 4 mms, or I can say 50 percent, or anything else, and all the stuff I'm putting into the browser tools automatically take effect in the browser.
>
> **[3:46](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=226)** If I ever want to reset things, just reload, and we're back where we were.
>
> **[3:50](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=230)** I can also change any other property I want, if I want to change the color, you can see here, the current text color is this slightly beige white color.
>
> **[4:00](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=240)** From here I can either click on the color code to punch in another HEX color, or RGB color, or HSLA color, or anything else, or I can click on this color patch, and this opens a color selector where I can start selecting other colors and seeing what they would look like.
>
> **[4:17](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=257)** I can do the same with the border, and here you see, in the main rule, I have the border width defined, it is set to solid, and it also has that beigey-white color.
>
> **[4:26](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=266)** However, further up I have a separate rule for wider screens, so if I want to change the border width I need to do it in the separate rule.
>
> **[4:34](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=274)** Again, click on the value inside the property, and I can increase or decrease the width, and if I want to change any other property I do it down here.
>
> **[4:43](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=283)** So here we have the solid statement, I want to make that, maybe, dashed.
>
> **[4:49](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=289)** And then I get dashed instead.
>
> **[4:52](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=292)** As you see, here, knowing how to use the browser developer tools to navigate the DOM, inspect styles, troubleshoot JavaScript in the console, and monitor everything from network traffic to performance, to accessibility, is an essential part of our programming.
>
> **[5:06](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=306)** And with the move towards design in the browser, these tools are improving and expanding to make the job of building things for the web easier and easier.
>
> **[5:15](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=315)** In the end, even if you sync your code editor to the browser, you'll still find yourself working in the browser developer tools all the time because, in addition to the DOM navigator, the rules panel, you also have things like computed box models and layouts if you use CSS grid.
>
> **[5:32](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=332)** You have a debugger for JavaScript, you have performance audits, and memory audits, and network audits, and storage, and accessibility tools, and everything else.
>
> **[5:40](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=340)** You can even preview any one of your sites in mobile mode, and select different types of mobile devices, and the different types of mobile networks, so you can see exactly how everything works.
>
> **[5:51](https://www.linkedin.com/learning/web-programming-foundations/developer-tools?u=76281980&t=351)** Browser tools are an essential part of web development.

> [!info]- Semantic Content
>
> **Env Vars:** dom (7), cta (3), css (2), hex (1), rgb (1)
> **CLI Commands:** make (5), find (3), node (1)
> **Code Keywords:** else, (3), let (2), default. (1), class, (1), case, (1)
> **UI Navigation:** click on (6), open the (1)
> **Tools:** firefox (2)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


### 4. The Parts That Make up the Web

#### HTML
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=0)** - At it's core, the web runs on three main programming and markup languages.
>
> **[0:05](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=5)** HTML for content, CSS for style and JavaScript for interactivity.
>
> **[0:11](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=11)** In this chapter, we'll look at each of these in detail to figure out what they are, how they work, and how they work together.
>
> **[0:17](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=17)** Starting with HTML.
>
> **[0:20](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=20)** HTML is the core markup language for the web.
>
> **[0:24](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=24)** The document you see in the browser is an HTML document, either written by hand or generated on the fly by a server or an application running in the browser.
>
> **[0:34](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=34)** Traditionally, web documents were static, meaning every page you visited on the web was a handwritten HTML document, and if you built a site with 10 or 100 pages and wanted to update the header or main menu, you'd have to make that update independently in each of the individual documents.
>
> **[0:53](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=53)** That's when I started building stuff on the web, and trust me when I say it was not great.
>
> **[0:59](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=59)** Thankfully, we've moved on from the days of static web documents to dynamic web applications powered by content management systems or custom template-based solutions.
>
> **[1:09](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=69)** Whereas static HTML documents were written entirely by hand, modern CMS or template-based solutions render the final HTML documents either on the server before they are sent to the browser or in the browser itself.
>
> **[1:24](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=84)** In either case, the developer creates templates outlining the HTML structure, and the server or browser combines these templates with data from a database or other source to create the final document.
>
> **[1:37](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=97)** In other words, there's no longer a unique document for each page.
>
> **[1:42](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=102)** There's only the idea of that document realized in the visitor's browser.
>
> **[1:47](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=107)** The result of all of this is a change in a single template file can apply to all or any subset of the documents accessible through the site, and a change in the database can do the same.
>
> **[2:00](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=120)** All that said, in the end, HTML is still what you see in the browser.
>
> **[2:04](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=124)** The final markup document presented to the user.
>
> **[2:08](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=128)** What's changed over the years is who writes that final HTML?
>
> **[2:12](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=132)** In some cases, that is a human with a code editor.
>
> **[2:16](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=136)** In some cases, that human only writes the templates and lets a server-side application generate the final document, and in more modern iterations, the human writes instructions to a JavaScript framework creating a so-called single paged application which runs in the browser, combining data from a server with automatically generated templates to render the final HTML.
>
> **[2:40](https://www.linkedin.com/learning/web-programming-foundations/html?u=76281980&t=160)** The web is still HTML, but how that HTML is created is changing and will continue to change.

> [!info]- Semantic Content
>
> **Env Vars:** html (13), css (1), cms (1)
> **Code Keywords:** static (3), case, (1), continue (1)
> **Exercise Files:** template (3)
> **Definitions:** is an  (1), in other words (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - at (1)

#### CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=0)** - [Tutor] CCS or Cascading Style Sheets is the presentational markup used to give the browser instructions about the appearance of HTML elements.
>
> **[0:08](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=8)** CSS was introduced to create a clear separation between the content, HTML markup and its presentation, CSS rules, this was in response to an early trend of using tables and frames and layers to force layouts on a vertical document by building presentational elements right into the HTML, thereby mixing the content with things that were not meaningful and also messing up the content in the process.
>
> **[0:33](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=33)** The switch from table, frames and layer spaced layouts to pure CSS layouts meant people could choose how they wanted to access HTML documents, either with the styles the designer and developer has applied or without.
>
> **[0:48](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=48)** A text to speech browser, for example, will largely ignore CSS, since visual presentation does not translate into audio.
>
> **[0:54](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=54)** Out of the box, the browser has a set of predefined CSS rules it applies to all HTML elements, this is why when you open a standard, unstyled HTML document in a browser, headings are big and bold, emphasized text is italicized, strongly emphasized text is bold, links are blue with an underline and every element has its own unique visual appearance.
>
> **[1:17](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=77)** When you supply your own CSS, either inline in the HTML document or as an external reference style sheet, your new CSS rules override what the browser provides, so if you want links to be green, instead of blue, just target the a element with a new rule and set the color property to green.
>
> **[1:36](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=96)** CSS works on a cascade, meaning style rules and properties are applied literally from the top down, we start with a default browser styles and then styles are applied starting at the top of the document and moving down, in other words, style rules further down in a CSS file have more weight than the rules higher up.
>
> **[1:57](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=117)** CSS also works by inheritance, if an element is given a style property and it has a descendant, so a sub element or sub DOM node, that descendant inherits the style property, unless another rule overrides it, so if I set the font-family and color properties for the body element, the topmost element in the visual part of the DOM tree, those properties apply to all content within that document, I can then create a new rule after the body rule and set the font-family for the paragraph element to serif and only the font-family of paragraphs are affected, the text inside those paragraphs will remain green, because we're still inheriting the green color from the body element, this is how CSS adds a presentational layer to web documents,
>
> **[2:45](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=165)** starting from the default browser styles and targeting first the most general element and then moving in to the most specific ones, we create rules to describe their appearance.
>
> **[2:55](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=175)** The trick is to figure out how to make as few rules and property declarations as possible to create the most impact.
>
> **[3:02](https://www.linkedin.com/learning/web-programming-foundations/css?u=76281980&t=182)** In CSS, as in everything else that has to do with code, smaller and simpler is always better.

> [!info]- Semantic Content
>
> **Env Vars:** css (12), html (7), dom (2), ccs (1)
> **CLI Commands:** node (1), make (1)
> **Code Keywords:** switch (1), override (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [tutor] (1)

#### JavaScript
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=0)** - [Instructor] JavaScript is the third markup language used to make up the front end of a web document.
>
> **[0:06](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=6)** For simplicity, I like to call JavaScript the interactive layer that sits on top of HTML and CSS.
>
> **[0:12](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=12)** JavaScript is a scripting language that runs in the browser and interacts with the HTML markup and CSS rules to change what you see and what you can do.
>
> **[0:21](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=21)** What sets JavaScript apart from other web programming languages like PHP and Ruby is it executes in the browser rather than on the server.
>
> **[0:29](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=29)** In other words, the interactivity happens locally on whatever device is accessing the document, and in many cases it can run even if the internet and the connection to the web server is cut.
>
> **[0:41](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=41)** Traditionally, JavaScript loads into the browser to add interactive behaviors and make changes to DOM nodes within the browser instance.
>
> **[0:49](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=49)** This could be anything from a simple sliding animation or hide-show behavior, to something much more complex, like loading all new content into the document or changing the entire view.
>
> **[1:00](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=60)** In recent years, JavaScript has migrated from the browser to other environments, meaning you can now create server-side JavaScript applications and populate sites almost entirely using JavaScript.
>
> **[1:12](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=72)** When you visit a site like [linkedin.com](https://linkedin.com), you're seeing a basic HTML and CSS document generated and managed almost entirely using JavaScript that loads content, adds interactivity, and makes the site feel less like a web document than an interactive application.
>
> **[1:28](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=88)** Practically speaking, JavaScript is a scripting language that allows you to write small programs that run in the browser and change the HTML and CSS of the current document.
>
> **[1:38](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=98)** It interacts with the DOM by targeting and manipulating DOM nodes and reacts to events that take place in the browser instance.
>
> **[1:47](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=107)** Here's how JavaScript works in the grand scheme of things.
>
> **[1:50](https://www.linkedin.com/learning/web-programming-foundations/javascript?u=76281980&t=110)** When you point your browser at an address with an HTML document, the browser first pulls down the HTML document and indexes all its contents, then downloads any CSS and JavaScript documents referenced, first runs the JavaScript to see if any of the HTML markup has changed, then applies the CSS to make everything look the way it's supposed to, and finally, leaves the JavaScript running in case an interaction or event triggers further further scripts.

> [!info]- Semantic Content
>
> **Env Vars:** html (7), css (6), dom (3), php (1)
> **CLI Commands:** make (3), php (1), ruby (1)
> **Definitions:** is a  (2), in other words (1)
> **Code Keywords:** finally, (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Speakers:** - [instructor] (1)

#### The Document Object Model (DOM)
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=0)** - [Instructor] Any time we're talking about the content that's being rendered in the browser, we are talking about the DOM, the Document Object Model.
>
> **[0:07](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=7)** The DOM is the browser's model for the document displayed.
>
> **[0:11](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=11)** In HTML, every piece of content is wrapped in a beginning and an end tag, creating an HTML element.
>
> **[0:19](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=19)** Each of these elements is a DOM object, typically referred to as a node.
>
> **[0:24](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=24)** And the browser handles each of them as an independent object.
>
> **[0:28](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=28)** That's why when you target something with a CSS rule, say, all anchor tags within a document, that rule is applied to each item independently.
>
> **[0:37](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=37)** When you write a CSS rule targeting the element a, what you're saying is find me every a node and apply the following style property settings to it.
>
> **[0:47](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=47)** When a document is loaded in the browser, a Document Object Model is created for just this document instance.
>
> **[0:53](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=53)** The browser now creates a node tree, modeling the relationships between the different HTML elements or nodes.
>
> **[1:00](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=60)** In a standard HTML document, you'll have an HTML object containing two objects, head and body.
>
> **[1:07](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=67)** Head holds all the invisible objects, like title, link, meta, script, et cetera, while body holds all the visible objects in the viewport.
>
> **[1:17](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=77)** These objects or nodes in turn live in strict hierarchical relationships depending on how they are nested in the HTML.
>
> **[1:24](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=84)** So, for example, a link in my menu is a node nested inside an li node nested inside a ul node nested inside a nav node nested inside a header node nested inside the body node nested inside the html node nested inside the Document Object nested inside the window object.
>
> **[1:42](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=102)** You get the idea.
>
> **[1:43](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=103)** Using the browser developer tools, you can see the code version of the DOM.
>
> **[1:47](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=107)** Here you can select any node within the DOM and see what styles are applied to that node.
>
> **[1:53](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=113)** Remember earlier when we talked about the dual purpose of web code?
>
> **[1:56](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=116)** Well, here in the browser with the developer tools open, it is on full display.
>
> **[2:02](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=122)** The browser creates the DOM based on the semantic markup in the HTML document.
>
> **[2:07](https://www.linkedin.com/learning/web-programming-foundations/the-document-object-model-dom?u=76281980&t=127)** We can then use CSS rules and JavaScript to apply presentational elements and behaviors to elements and content in the document by targeting these nodes in the DOM.

> [!info]- Semantic Content
>
> **Env Vars:** dom (7), html (7), css (3)
> **CLI Commands:** node (12), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Events
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=0)** - [Instructor] Any time something happens in a browser, an event is triggered, and JavaScript can use these events to trigger further behaviors.
>
> **[0:08](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=8)** Now everything that happens in the browser is registered as an event.
>
> **[0:12](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=12)** Open the browser, that's an event.
>
> **[0:14](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=14)** Enter a URL in the address bar and hit enter, that's an event.
>
> **[0:17](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=17)** Click a link, that's an event.
>
> **[0:19](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=19)** Move your mouse, that's an event.
>
> **[0:21](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=21)** Whenever you interact with the browser in any way, you fire an event and the browser reacts to that event with pre-configured responses.
>
> **[0:29](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=29)** Using JavaScript, we can write our own scripts to respond to these events as well.
>
> **[0:34](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=34)** The formula for binding JavaScript functionality around events is called event handling and typically takes this form.
>
> **[0:41](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=41)** First, identify the DOM node the interactive behavior will be attached to.
>
> **[0:46](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=46)** For example, a call to action button.
>
> **[0:49](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=49)** Second, identify the event you want to detect, like a click or a hover or something else, and bind that event to the DOM node.
>
> **[0:57](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=57)** And third, create a function that is triggered when the event fires.
>
> **[1:02](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=62)** A slider moves to the left or right revealing new content or something else.
>
> **[1:06](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=66)** In our basic rundown of the parts that make up the web, the event is the last link in a chain.
>
> **[1:12](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=72)** To recap, the HTML markup describes the document and identifies each unique object within that document using semantic tags.
>
> **[1:20](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=80)** These tags are turned into nodes on the DOM tree.
>
> **[1:24](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=84)** JavaScript targets these nodes to change them and apply interactivity to them.
>
> **[1:29](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=89)** CSS rules target these nodes and apply presentational styling to them.
>
> **[1:34](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=94)** And finally, events are triggered when the user, or in some cases, the browser or the document instance, performs some sort of behavior at which point the HTML, CSS, and DOM tree may get changed.
>
> **[1:47](https://www.linkedin.com/learning/web-programming-foundations/events?u=76281980&t=107)** Each role is clearly defined and has its own markup language and the interplay between the different roles create the experience we commonly refer to as browsing the web.

> [!info]- Semantic Content
>
> **Env Vars:** dom (4), html (2), css (2), url (1)
> **Code Keywords:** else, (1), function (1), else. (1), finally, (1)
> **CLI Commands:** node (2), make (1)
> **UI Navigation:** open the (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Putting it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=0)** - [Instructor] To put all this together, you need two things, a code editor like Visual Studio Code, and a modern browser like Firefox, running at the same time, often side by side, and often with the browser developer tools open.
>
> **[0:13](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=13)** As you develop your project, you work on the code in both applications, sometimes writing code in the code editor, other times either interacting with the live site in the browser, or manipulating and editing the code directly in the browser developer tools.
>
> **[0:28](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=28)** The out-of-the-box way of doing this is to open up the editor to the project folder, and run the files natively from your computer in the browser.
>
> **[0:37](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=37)** However, this process has some significant limitations.
>
> **[0:40](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=40)** On the surface, you have to manually reload the browser every time you make a change in the editor, and that can be really annoying.
>
> **[0:48](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=48)** But more importantly, running an HTML document from your computer like this, directly in your browser, is not the same as running an HTML document from a web server.
>
> **[0:58](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=58)** You miss a bunch of the web functionality, and many features will not work.
>
> **[1:03](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=63)** To accurate replicate the web environment on your computer, you need to run a local web server.
>
> **[1:09](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=69)** There are several ways of doing this, including setting up a virtual machine, or a full web server on a computer, using tools like Vagrant or WampServer or MAMP, or similar.
>
> **[1:18](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=78)** But these are large, complex applications meant for large, complex sites that require set up and configuration.
>
> **[1:26](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=86)** If all you want to do is quickly spin up a couple of HTML documents with some CSS and JavaScript, there are simpler ways of getting the real experience in your browser.
>
> **[1:35](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=95)** Most modern code editors, including Visual Studio Code, which is what I'm using in this course, and Atom, has extensions for live servers.
>
> **[1:44](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=104)** These extensions add functionality to the code editors, to spin up a small, local server environment that syncs to the code editor and the browser.
>
> **[1:54](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=114)** In Visual Studio Code, you can use the extension Live Server, which adds a button to the bottom of your editing environment that says Go Live, and when you click on that button, a web server is spun up, and your browser is synced to the current live environment that's also synced to the editor.
>
> **[2:13](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=133)** This Live Server environment will now behave exactly as a live server somewhere else on the web, replicating the experience of publishing the site to the web.
>
> **[2:23](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=143)** But there's more.
>
> **[2:24](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=144)** Now, anytime you make an edit to a file in the code editor, the server updates and the browser reloads the site on the fly.
>
> **[2:32](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=152)** So if I go into my editor here and change this title, A Hotel on the Moon?!? that you see right here, and change it to Your Sanctuary in Space, and then save, the server updates and forces the browser to immediately reload, and you can see the effect of the code edit immediately in your browser.
>
> **[2:55](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=175)** Effectively, what we have here is true what you see is what you get editing, in the native environment of the browser.
>
> **[3:02](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=182)** If you want to supercharge this process, you can also set up the command line tool Browsersync, which allows you to not only sync the code you write in an editor to a browser on your computer, but also access the same code from any other computer or device on your network, using their browsers.
>
> **[3:19](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=199)** Effectively, this means writing code once and testing it everywhere on your entire network.
>
> **[3:25](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=205)** This is especially useful when you do cross browser and cross device testing, and when you want to test responsive design and interaction.
>
> **[3:32](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=212)** What's cool about using Browsersync is, once you sync the website across a multitude of different devices, if you interact with one device, you can see those interactions take place across all the other devices as well, because you are effectively working on the same site across all devices at the same time.
>
> **[3:49](https://www.linkedin.com/learning/web-programming-foundations/putting-it-all-together?u=76281980&t=229)** This makes for great cross browser user testing, and it makes for a better and more streamlined development process.

> [!info]- Semantic Content
>
> **Tools:** visual studio (3), firefox (1), atom (1), command line (1)
> **Env Vars:** html (3), mamp (1), css (1)
> **Code Keywords:** this, (2), require (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980&t=0)** - [Instructor] My goal for this course was to give you an in-depths look at how the web works and how to work with it.
>
> **[0:05](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980&t=5)** By watching this course, you now have an understanding of web programming fundamentals and you know how all the main pieces fit together.
>
> **[0:12](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980&t=12)** This knowledge becomes the foundation on which you build your web programming practice and we have all the courses to get you going.
>
> **[0:19](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980&t=19)** With HTML, CSS, and [[JavaScript Essential Training]] and advanced courses on content management systems, like WordPress, server and front-end scripting, restful APIs, JavaScript frameworks and more, all paths are open to you, as you build your skills and learn now to make new functional, accessible, creative and inspiring content and experiences for the web.
>
> **[0:41](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980&t=41)** I love hearing from you about how you use what you've learned in my courses and I'm excited to hear about your journey as you dive into web development.
>
> **[0:48](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980&t=48)** You can find me on Twitter at Morten because that's my name, where I talk about web design and the internet, and politics, and music and dancing.
>
> **[0:55](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980&t=55)** And you can follow me on LinkedIn and read my articles on LinkedIn Pulse.
>
> **[1:00](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980&t=60)** I'm always up for a chat about the internet and how we use it, so don't hesitate to reach out.
>
> **[1:05](https://www.linkedin.com/learning/web-programming-foundations/next-steps?u=76281980&t=65)** Now all that's left for me to say is (speaking foreign language), go build great things for the web and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1), go build (1)
> **Env Vars:** html (1), css (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Explore a Career in Front-End Web Development]]
← [[Search Techniques for Web Developers]] | **6 of 11** | [[Simplifying Web Development with Accessibility Best Practices]] →

## Appears In

- [[Explore a Career in Front-End Web Development]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — Front-End Development
- [[Complete Guide to C Programming Foundations]] — Programming Foundations
- [[Programming Foundations- Web Security]] — Programming Foundations
- [[Complete Guide To C Plus Plus Programming Foundations]] — Programming Foundations
- [[Succeeding in Web Development- Full Stack and Front End]] — Front-End Development

---

[↑ Back to top](#)