---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-hacking-web-servers-and-web-applications
url: "https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications"
duration_minutes: 99
duration: 1h 39m
level: Intermediate
updated: 6/23/2023
learners: 80639
skills:
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFv6qt-MMoFmw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568052588573?e=2147483647&amp;v=beta&amp;t=WtM-JLV-4U0194Rmv_jIlyryoaMxM7y4l-KXCmmF9bI"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Evading IDS, Firewalls, and Honeypots]]'
next_courses:
  - '[[Ethical Hacking- Wireless Networks]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":13,"total":19,"prev":"Ethical Hacking- Evading IDS, Firewalls, and Honeypots","next":"Ethical Hacking- Wireless Networks"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Hacking%20Web%20Servers%20and%20Web%20Applications.md)

![Ethical Hacking: Hacking Web Servers and Web Applications](https://media.licdn.com/dms/image/v2/C560DAQFv6qt-MMoFmw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568052588573?e=2147483647&amp;v=beta&amp;t=WtM-JLV-4U0194Rmv_jIlyryoaMxM7y4l-KXCmmF9bI)

# Ethical Hacking: Hacking Web Servers and Web Applications

> Websites and web applications are—by their very nature—accessible remotely, which puts them at high risk of cyberattacks. Knowing how to detect and prevent web attacks is a critical skill for developers and information security professionals alike. In this course, find out about existing and emerging web protocols and how to test your sites and applications for weaknesses. Cybersecurity expert Mal

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications) | 1h 39m | Intermediate | 81K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Testing to make sure your website is safe](#testing-to-make-sure-your-website-is-safe)
  - [What you should know](#what-you-should-know)
  - [Disclaimer](#disclaimer)
- [**1. Introduction to Web Servers**](#1-introduction-to-web-servers) (9 videos)
  - [Elements of web-based applications](#elements-of-web-based-applications)
  - [Introduction to web servers](#introduction-to-web-servers)
  - [Dissecting the HTTP/HTTPS protocol](#dissecting-the-httphttps-protocol)
  - [Moving on to WebSockets](#moving-on-to-websockets)
  - [Looking at the Google QUIC protocol](#looking-at-the-google-quic-protocol)
  - [Understanding cookies](#understanding-cookies)
  - [Introducing HTML](#introducing-html)
  - [Visiting OWASP](#visiting-owasp)
  - [Web access APIs](#web-access-apis)
- [**2. Getting Ready to Test**](#2-getting-ready-to-test) (6 videos)
  - [Introducing the Zero Bank](#introducing-the-zero-bank)
  - [Installing the WebGoat Server](#installing-the-webgoat-server)
  - [Introducing Burp Suite](#introducing-burp-suite)
  - [Scanning with ZAP](#scanning-with-zap)
  - [Proxying with ZAP](#proxying-with-zap)
  - [Introducing WebScarab](#introducing-webscarab)
- [**3. Running Basic Web Application Tests**](#3-running-basic-web-application-tests) (4 videos)
  - [Fingerprinting web servers](#fingerprinting-web-servers)
  - [Looking for credentials in HTML code](#looking-for-credentials-in-html-code)
  - [Using Cookie Jars](#using-cookie-jars)
  - [Hijacking sessions with cookies](#hijacking-sessions-with-cookies)
- [**4. Advanced Web Application Tests**](#4-advanced-web-application-tests) (6 videos)
  - [Manipulating URL parameters](#manipulating-url-parameters)
  - [Testing for SQL injections](#testing-for-sql-injections)
  - [Cross-site scripting](#cross-site-scripting)
  - [Injecting commands through the URL](#injecting-commands-through-the-url)
  - [Testing with Uniscan](#testing-with-uniscan)
  - [Using the modsecurity WAF](#using-the-modsecurity-waf)
- [**5. Practicing Your Skills**](#5-practicing-your-skills) (3 videos)
  - [Practicing with online banking websites](#practicing-with-online-banking-websites)
  - [Hacking the cheese](#hacking-the-cheese)
  - [Training in the Web Security Dojo](#training-in-the-web-security-dojo)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing to make sure your website is safe](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-to-make-sure-your-website-is-safe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-to-make-sure-your-website-is-safe?u=76281980&t=0)** - [Malcolm] The web is an essential service providing easy access to information anywhere, anytime. Businesses communicate with their customers through the web, governments communicate with citizens through the web, and we all use the web for [[E-Commerce]] services, such as online [[Banking]] and shopping. Web services are accessible remotely, and this puts them at high risk of cyber attack. I'm Malcolm Shore and I've spent a career helping governments and businesses protect their systems against cyber attacks. In this [[LinkedIn]] Learning course, I'll start by explaining web protocols and the basics of [[Web Design]]. And I'll look at the [[OWASP]] top 10 web vulnerabilities. I'll demonstrate some of the popular tools available to do web testing, including [[Burp Suite]], ZAP and WebScarab. And I'll show you how to use these to scan websites and run as web proxies. I'll also look at some websites, where you can practice your web testing. When you finish this course, you'll have a great understanding of how to test for website weaknesses. Now, let's get started learning about hacking [[Web Servers]] and web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1), [[Banking]] (1), [[LinkedIn]] (1), [[Web Design]] (1), [[OWASP]] (1)
> **Env Vars:** owasp (1), zap (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [malcolm] (1)

#### [What you should know](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course, and during this course, I'll be using a virtualized environment called VirtualBox. I'll also be using a number of tools, many of which are in the [[Kali Linux]] system. If you're not familiar with Kali and virtualization, you should watch my Introduction to Kali Linux course which will guide you through installing and using this testing environment. I'll be assuming that you understand the basics of networking, are familiar with [[Windows]] and [[Linux]], and have a working knowledge of how websites work. It would also be useful to be able to script [[HTML]] and [[PHP]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (2), [[Windows]] (1), [[Linux]] (1), [[HTML]] (1), [[PHP]] (1)
> **Env Vars:** html (1), php (1)
> **CLI Commands:** php (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/disclaimer?u=76281980&t=0)** - [Instructor] This is one of a series of [[Ethical Hacking]] courses, and in addition to [[Kali Linux]] it uses some third-party testing software. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these site might not be compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous, because the tools have similar signatures to malware and may raise antivirus alerts when you visit them. The testing tools we demonstrate are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants and may raise antivirus alerts when you try to download them. Again we can't provide assurance that the software hasn't been compromised when you download it. And so as for any other software from the Internet, you need to exercise due diligence and take personal responsibility for anything you load into your system. The testing is mostly carried out inside a virtual environment to contain any unplanned effects of testing tools. And in the unlikely event that you do download malware this will also help contain any impact from live malware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Kali Linux]] (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Web Servers

[↑ Back to Table of Contents](#table-of-contents)

#### [Elements of web-based applications](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/elements-of-web-based-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/elements-of-web-based-applications?u=76281980&t=0)** - [Instructor] A web application is built using [[HTML]] and script code running on a web server that offers an HTTP or HTTPS protocol access, the more recent WS and WSS web socket protocols, or the experimental QUIC protocol. It will likely use a back-end database server or some form of flat file for content. The user will connect to the application from a browser which my be running on a desktop, a laptop, or a mobile device. The web application may want to authenticate the user and to do that use some form of back-end authentication system such as LDAP. It's good practice not to expose a web application server directly to the Internet, and so a web proxy will be placed between the user and the web application. The proxy server takes user requests and sends them to the web application and takes web application responses and returns them to the user. A web proxy is designed to be secure and is a much safer Internet-facing system than a full web server. There are two types of proxy server, a forward proxy and a reverse proxy. A forward proxy acts as a means of enabling an Internet user to connect through the corporate perimeter out to an external Internet server. And enables the proxy to monitor for data loss as well as blacklisting dangerous Internet sites. A reverse proxy acts as a means of controlling external Internet users connecting in through the corporate perimeter to an internal web server, and allows incoming traffic to be monitored for malicious content such as [[SQL]] injection, or support load sharing to an internal website farm.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/elements-of-web-based-applications?u=76281980&t=95)** Early web applications tended to be mainly written on the server side with [[Forms]] being used to request data. Nowadays much of the code is client-side, often supported with client-side data stores. There are many tools to choose from in order to develop web applications. The Mozilla Developer Network suggests using the Ember tools and what's known as a model-view-controller, or MVC architecture. This is one in which the application is split into three parts, the model, the view, and the controller. The model defines the data structure, and uses back-end systems such as SQLite. The view is the user interface implemented perhaps with HTML, CSS, and [[JavaScript]]. And the controller, the business logic, built perhaps with HTML and JavaScript. The Ember framework is used to create the three components and to integrate the libraries needed to support the generated web application. It also creates a standard directory structure to support the source code for the application, the built application to be distributed, and a public directory for fonts and images. AngularJS is another framework that can be used with similar characteristics to Ember.js. And [[Microsoft]] offers [ASP.NET](https://ASP.NET) MVC. A simple deployment approach is to have three components on one platform linked to a database on a separate platform. An alternative would be to have the view component on its own server. The model and the controller are on a second platform supported with a database server on a third platform. As a tester you'll likely come across
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/elements-of-web-based-applications?u=76281980&t=187)** both deployment approaches. Sometimes a fourth component or layer is used. This is the service layer, and it's used to manage the interaction of the web application and other services and to exchange data using messages. SOAP and [[Representational State Transfer (REST)|REST]] are two protocols often used at the service layer. REST is the [[Representational State Transfer (REST)|representational state transfer]] protocol, and has a limited set of operations which apply to resources represented and addressable by URIs, HTTP addresses. REST is suited to services that can be accessed by unknown users and is implemented using JavaScript Object Notation, [[JSON]], or similar message formats through HTTP GET and PUT calls. SOAP is the Simple Object Access Protocol and is much better suited to implementing procedural interactions such as the interface between layers of an application. SOAP isn't restricted to HTTP and provides basic messaging commonly using RPC to exchange calls and responses over networks using XML formatted messages. While MVC typically enforces a standardized folder structure specific to the framework, the folder structures for simple web applications are more ad hoc. However they'll often be four common folders. An images folder is used to hold all images for the application and any images the C use has data within the application such as profile pictures which were uploaded. A styles folder for CSS files. A classes folder for all classes used in the application. These classes group together like functions. An includes folder for those files which are included in the application source
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/elements-of-web-based-applications?u=76281980&t=281)** such as constant definitions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (3), [[Representational State Transfer (REST)|Rest]] (3), [[SQL]] (1), [[Forms]] (1)
> **Env Vars:** http (4), html (3), mvc (3), soap (3), rest (3)
> **Analogies:** such as (6)
> **API Endpoints:** get  (1), put  (1)
> **Definitions:** is a  (1), known as (1)
> **File Paths:** ember.js (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Exercise Files:** source code (1)

#### [Introduction to web servers](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introduction-to-web-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introduction-to-web-servers?u=76281980&t=2)** - [Instructor] A web application is run on a web server, which consists of a standard operating system platform and web server software. There are three common [[Web Servers]] we'll come across: the Internet Information Server, or IIS, which comes as an optional part of every [[Windows Server]], the Apache web server, which runs on [[Linux]] but can also be run on [[Windows]], and the NGINX web server, which also runs on Linux and can be run on Windows. In addition to websites and applications, we'll also come across web-based endpoints called application program interfaces, or APIs. These are often used as online functions, which may take input and can return output, rather than full applications. Web servers provide a web root location and an initial startup webpage. In the case of IIS, the web root is in the folder c:\inetpub\wwwroot. For Apache and NGINX running on Linux, the standard location is /var/www/[[HTML]]. The standard startup page for any web server is called index.html, and this is often where startup actions take place, the homepage is displayed, and so on. If a web application is written
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introduction-to-web-servers?u=76281980&t=95)** in a scripting language of some kind, then it will often have its own startup page with that language extension. For instance, an application written in the [[PHP]] web scripting language will expect an initial file in the web root folder called index.php. A web server will listen on port 80 for plain HTTP traffic and port 443 for secure HTTPS traffic. However, these are the normal ports, but these can be changed by configuring the web server. The location and the contents of the configuration files are specific to the web server, and we'll often find websites and web applications on different ports such as 8080, 8088, and 8443. IIS uses an XML file for storing its configuration. The two main configuration files are located in the folder c:\Windows\System32\Inetsrv\Config and our ApplicationHost.config, which stores the settings for websites and applications, and Administration.config, which stores the settings for IIS management. NGINX uses a YAML form of configuration file, and it has two main files created upon installation,
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introduction-to-web-servers?u=76281980&t=189)** /etc/nginx sites/enabled/default stores the website settings, and /etc/nginx/nginx.conf is the management configuration. For Apache, the websites are shown in /etc/apache2 sites/enabled/000-default.conf. The management configuration file is at /etc/apache2/apache2.conf. Some Apache servers may also have what are called htaccess files which are located in individual directories and are used to configure specific websites or parts of websites. Web servers may have additional functionality, such as acting as a forward proxy for internal users to access external websites via an internal address or as reverse proxies to enable external users to access an internal website via an external address. They may provide multiple named websites on the same IP address or load balancing across multiple servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (3), [[Linux]] (3), [[Windows]] (3), [[HTML]] (2), [[PHP]] (2)
> **CLI Commands:** nginx (6), apache (4), php (2), find (1)
> **Env Vars:** iis (4), nginx (3), php (1), http (1), https (1)
> **File Paths:** index.html (1), index.php (1), applicationhost.config (1), administration.config (1)
> **Analogies:** such as (2), for instance (1)
> **Ports:** port 80 (1), port 443 (1)
> **Definitions:** is called (1)
> **Prerequisites:** configure (1)

#### [Dissecting the HTTP/HTTPS protocol](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/dissecting-the-http-https-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/dissecting-the-http-https-protocol?u=76281980&t=0)** - [Narrator] The effectiveness of a web application tester is determined by his or her knowledge of the protocols used by the application being tested. And the key protocol to learn about is HTTP. HTTP is a stateless client server protocol. In other words, each HTTP message sent stands on its own and has no implicit knowledge of any previous message. We're pretty familiar with using the software application called the browser to access web applications, but HTTP messages can also be send programmatically, and from appliance firmware. In fact, HTTP can even be hand-constructed and sent across a telnet connection. Assuming we're using a browser, we'll put in an address known as a URL, a universal resource locator, which can be looked up in a directory, typically a domain name server, to find the internet address of the web server. The URL will either start with http:// or https://. By default, an http:// URL will establish a TCP connection on port 80. And https will establish one on port 443. We can override this by placing a colon and then a port number after the main URL. It's not unusual to see a web server set up on a different port. The web browser will then create an HTTP message and send it to the web server. The web server will then reply with an HTTP response message. Let's take a look at a typical HTTP exchange using [[Wireshark]]. I recorded a browsing session in the Hackme Casino using Wireshark, it's open,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/dissecting-the-http-https-protocol?u=76281980&t=94)** and we can see at line 91, the start of the three-way handshake for the connection to port 3,000, on 10.0.2.10. With a randomly assigned browser source port of 54472. I right click and select follow TCP string to get to tracing this session. The first packet we see, is an HTTP GET request. It starts with the line GET / HTTP/1.1. This instructs the server to send back the default startup page in the root directory of the web server. GET is one of eight standard request commands or methods defined in HTTP. The GET command allows a user to download a web resource from the server. This will often be a webpage specified by a filename. Emitting the filename will cause the default first page to be returned. The HEAD request is used in the same way as a GET, but will then load just the header or [[Metadata]]. This is commonly done to check the last modified date of the page, to check against the local cache and copy. The POST command allows a user to upload items to the server. This is commonly used to send form data to the server, and is the key message that's of interest to pen testers. The TRACE command requests a diagnostic trace of the actions taken by the server. The OPTIONS command asks the server to return the list of request methods it supports. The CONNECT command causes the proxy to connect to another host. This is often used to make an SSL connection through the proxy. The protocol also allows for the PUT command
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/dissecting-the-http-https-protocol?u=76281980&t=186)** to send data to the server to be stored, and the DELETE command to delete the data. These are often not used in production systems, for security reasons. Back to Wireshark, and the next line indicates the host name of the web server, and is a repeat of what we entered into the browser. Host: 10.0.2.10:3000. Following this, we see the user agent which has been used to send the GET request. In our case, this is a Mozilla Gecko Firefox browser running on [[Linux]]. The browser then indicates what it connects after the response. The format of the message, the language, and the encoding options. The final line says connection keep alive. This enables the connection to be able to be kept open for multiple request response pairs. But at a content level, it's still stateless unless we have a way of maintaining state, usually a cookie. Keep alive is the default in HTTP 1.1, but in this case, it's being explicitly stated. The web server returns an HTTP response, which starts with the line HTTP/1.1 200 OK. There are six common status codes. 200 indicates that the request was processed without any problems. 400 is a bad request. 401 is unauthorized. 403 means access is forbidden. And 404, an unknown page. 500 is an internal server error. The next line indicates no caching in being used. This is an optional feature for a web server, which can be used to improve performance.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/dissecting-the-http-https-protocol?u=76281980&t=280)** As for the request, the response includes a connection line, which indicates that the connection should be kept alive, allowing another request to be sent by the user. The content type is shown as text/[[HTML]], which indicates that readable html data follows. The server line provides information on the server's configuration. In this case, telling us that the HTTP server is built using WEBrick and Ruby, and showing their versions. The next line in the header is content length, and indicates the length of the following html code. We then, have a line starting with set cookie, which provides the session ID. This is being used to provide session information for the web application. By using the cookie, I'll maintain authenticated access into the web application throughout the session. Following this is a series of requests and responses, which access the various resources from the server. The stylesheets, images, scripts, and so on. In this, we can see a request header line for the referer. Referer login is used to allow websites and [[Web Servers]] to identify where people are visiting them from for marketing or statistical purposes. Using the referer field can be a [[Privacy]] issue, and most web browsers will emit this, particularly those using HTTPS. We can see the user login request. And we can see that the credentials are being sent in plain text. This might be a problem 'cause it will enable anyone intercepting the traffic to login to our account. We can see below this, a GET request
>
> **[6:16](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/dissecting-the-http-https-protocol?u=76281980&t=376)** to obtain our jumbo picture. Given we don't have one loaded, we see the server returns an error code 404, to indicate the resource does not exist. While websites often just use a few, there are a lot of header fields that have been defined in the HTTP standard. The web page shown here is an excellent quick reference for all the HTTP header fields that you might come across during testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[HTML]] (3), [[Metadata]] (1), [[Linux]] (1), [[Web Servers]] (1)
> **Env Vars:** http (17), url (4), tcp (2), head (1), post (1)
> **API Endpoints:** get  (6), head  (1), post  (1), options  (1), put  (1)
> **Definitions:** is a  (5), is an  (4), in other words (1), known as (1)
> **Versions:** 1.1 (3), 10.0.2 (2)
> **Ports:** port 80 (1), port 443 (1), port 3 (1), :3000 (1)
> **CLI Commands:** find (1), make (1), ruby (1)
> **Tools:** firefox (1)

#### [Moving on to WebSockets](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/moving-on-to-websockets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/moving-on-to-websockets?u=76281980&t=0)** - [Instructor] With the release of [[HTML]] 5, more sophisticated state management capabilities are available to the web developer. [[WebSocket|WebSockets]] provide the ability to setup a full duplex communications channel between the client and the server. This required a handshake over HTTP or HTTPS. To upgrade the protocol to WS or WSS, and a WebSockets server to manage the protocol. Firstly the client initiates the connection by sending an HTTPS web socket handshake request, and the server responds with a status code of 101 switching protocols. It then switches to WebSockets, and both the web browser and the web server communicate using the WebSockets API, according to RFC 6455, the WebSockets protocol. WebsocketD is an easy to use WebSockets server written by Joe Walnize, which will run on [[Ubuntu]]. We can get the ZIP file of this server from his [[GitHub]] page, unpack it, and it'll be ready for use. I've already loaded it on my Ubuntu system. While WebsocketD provides the ability to maintain state, it doesn't actually do anything. Hence we need to compliment it with some processing capability. The WebSockets server comes with a development console to ensure the protocol is working, and I've prepared a script as a backend program for the console. This is a simple bash script which counts to ten, and echoes the count to its output channel, in this case the web socket. Okay, let's start the server. I'll start it on port 8008, although any port that's not in use would be fine.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/moving-on-to-websockets?u=76281980&t=96)** I'll now use Chrome from my [[Windows]] 7 system to connect to the Web Socket server. I do that by connecting to HTTP on the web socket port 8088. Chrome has built in support for web sockets, so we don't need anything extra on the browser. Okay, we can see the URL is now WS. The bash script is communicating its count, and we have a running Web Socket server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WebSocket|Websockets]] (7), [[Ubuntu]] (2), [[HTML]] (1), [[GitHub]] (1), [[Windows]] (1)
> **Env Vars:** http (2), https (2), html (1), wss (1), api (1)
> **Tools:** bash (2), github (1)
> **Ports:** port 8008 (1), port 8088 (1)
> **Definitions:** is an  (1), is a  (1)
> **Documentation:** rfc (1)
> **Exercise Files:** zip file (1)
> **Prerequisites:** setup (1)

#### [Looking at the Google QUIC protocol](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/looking-at-the-google-quic-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/looking-at-the-google-quic-protocol?u=76281980&t=0)** - The Quick UDP Internet Connection was introduced in 2014 by [[Google]] to provide reliable HTTP stream transport, and is being standardized by the IATF. It effectively replaces the traditional TCP/TLS Secure Web Communications. Google now includes QUIC, and its Chrome and [[Android]] [[Microsoft Products|products]] and the patchy service support is progressing. QUIC is with the IATF for standardization. QUIC is a new UDP-based protocol that is low latency and incurs less congestion then TCP while retaining security equivalent to TCP/TLS. It's incorporated encryption on both HTTP and HTTPS. As UDP is not session oriented, QUIC introduces a connection identifier, or CID, to provide session knowledge, and adds packet sequence numbers to allow correctly sequenced message reconstruction. Establishing a QUIC session is extremely fast when compared to TCP/TLS. TCP starts with a three-way handshake to establish the connection. TLS then requires a further seven or eight packets to stand up the security. Compare QUIC, which establishes a secure session in just two packets. Google has implemented QUIC for transporting client-side data from Chrome. Let's see how we manage QUIC settings in Chrome. We can see the experimental flags by typing "about flags" in the URL bar. We can see that there are a lot of experimental features enabled, and if we scroll down, we come to the experimental QUIC protocol flag which is set to default,
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/looking-at-the-google-quic-protocol?u=76281980&t=93)** which means QUIC is used when connecting to Google. We can also check the current state of QUIC. We see QUIC is enabled, and we can see its configuration settings. We have a table at the bottom, which shows the currently active sessions with their connection UUID. We can see more detail by clicking on the hyperlink View Live Sessions. We can select one of these, and the details are shown in the right hand panel. If for some reason QUIC is blocked, then Chrome will fall back to using a standard TCP connection. Let's check out the QUIC packet structures. I've captures a session which includes QUIC traffic interspersed with standard HTTP TLS traffic. I'm at the first packet, and we can see in the middle panel the CID, and also the sequence number, which is one, as well as the QUIC version number , which is 35. If I move down the list of packets to the next one from the client, with the same CID, we can see its packet number of two. When I expand the flags, we can see on this packet that the connection ID is eight bytes. This is not a reset, and there is no version number, and the sequence length is one byte. Note that [[Wireshark]] is showing all packets as having an encrypted payload. However we can see plain text in the first packet. Wireshark doesn't break down the encrypted payload. But let's take a look at the unwire format. The frame consists of an eight bit flag, a 64 bit connection ID, a 32 bit version number, and an eight bit sequence ID. This is followed by the payload.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/looking-at-the-google-quic-protocol?u=76281980&t=187)** Being the first packet of the two packet handshake, the client's hello message, the payload isn't encrypted. This packet contains information for the server, sent as a list of information elements, and an offset to their value further down the packet. The first entry is CHLO. This is the message type of Client Hello, followed by the value 0 times 1B, to indicate there's 27 elements. The Element Index then follows. We can see element SNI, which is a Server Name Indicator, VER, which is the Version, UAID, the User Agent ID, and others. If we go further down the packet, we can see the corresponding values for these elements. We can see the Version, QO35, the Server Name Indicator of www.[google.com](https://google.com).au, and the User Agent String, starting with Chrome.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (5), [[Wireshark]] (2), [[Android]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** quic (16), tcp (6), tls (5), udp (3), http (3)
> **Definitions:** is a  (2)
> **URLs:** [google.com](https://google.com) (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** note that (1)
> **Speakers:** - the (1)

#### [Understanding cookies](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/understanding-cookies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/understanding-cookies?u=76281980&t=0)** - [Instructor] Cookies were introduced to the web in order to support persistent connections and also to support the ability to maintain user preferences across sessions. A cookie is a small piece of text stored in an SQLite file on a users computer by the browser. Let's have a look at where Chrome stores its cookies on a [[Windows]] system. Digging a little ways down into the user directory, we can see the file cookies. Let's have a look at that with an SQLite client. If you don't have an SQLite client loaded, you can get the DB Browser for SQLite from the URL shown. This is a simple download and Windows install. I'll use this to navigate to the cookie file and open it. We have just two tables and four indexes. I can expand the cookie table and we see the information held. The host key, a name, a value, an encrypted value, an expiry date, and some flags. I'll switch to display data and we can see our cookies listed. And there's a lot of them. Common uses for cookies are authentication, storing of site preferences, shopping cart items, and service session identification. Each time the browser interacts with a web server, it passes cookie information for that domain, the host key, to the web server. Sometimes a session ID cookie will be sent often called session, session ID, or starting with ses. And this is a single value which tells the server the session that the user is engaged in. This means instead of passing all the session data from the user to the server every message, it can be stored server-side. This, however, is the capability exploited in a session hijack. Here we can see a [[PHP]] routine which sets a cookie.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/understanding-cookies?u=76281980&t=95)** It initializes the session and generates a random session ID which it stores. It stores additional fields in the session array for user and password. And then writes the session file to the server and the cookie to the browser. Here we have PHP code to recover the session. All the browser needs to do is to pass the session ID and the cookie called web testing course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[PHP]] (2)
> **Env Vars:** php (2), url (1)
> **Definitions:** is a  (3)
> **CLI Commands:** php (2)
> **UI Navigation:** navigate to (1), switch to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Introducing HTML](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-html?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-html?u=76281980&t=0)** - [Instructor] The Hypertext Markup Language, [[HTML]], is the basic building block of a website. HTML 5 is the latest version, and it's come a long way from the language that started the World Wide Web. Nevertheless, it's important to understand the basics. A web page is a text file written in HTML which in its basic form is quite simple. Let's build a webpage. The page starts with a declaration that the page is indeed HTML. And it's just always written as doctype html. After that the basic components of a webpage is an element of the form bracket element bracket, contents, and then bracket slash element bracket. With element specific information in between the start and end markers. The start marker may additionally have attributes in between the open and close brackets. The topmost element is always called HTML, and this can have a parameter to identify the language. A simple web page might consist of a heading with the title and then a body. Let's put them in. Let's add some content to our first webpage. Within the body of the document we can have headings and paragraphs. We can use six levels of headings named H1 to H6. Paragraphs are named P. We might like to have our webpage reference another webpage. Perhaps www.[owasp.com](https://owasp.com). We can do this by using a hyperlink, or href, in an element called a. Okay, I've saved that in a document called page1.html. If I double click on it, it'll open in a browser. We have our webpage. And if we hover over the hyperlink, we can see the URL that we coded. We can do much more to enhance the look of a webpage by styling.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-html?u=76281980&t=93)** Let's make our first heading red. Okay, we've entered the attribute color:red to the h1 element. Web designers have gone much further with the way in which web pages are styled in order to ensure consistent application of styles. We can use a style element for this. This adds a new section in the header of the page, and defines styles for each webpage item and allocates the body, the header, and the paragraph. We now have a defined style for the page. Of course we may want to apply a style across a whole website. And so we can hold the style in its own file external to the HTML file and include it using a link statement. The full external styling approach is known as [[Cascading Style Sheets (CSS)|cascading style sheets]]. It would be useful to become skilled in reading HTML, if not writing it, and taking a couple of Lynda courses is a good way to learn. There are plenty, in particular James Williamson's Essential HTML and HTML 5 Structure, Syntax, and Semantics courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (11), [[OWASP]] (1), [[Cascading Style Sheets (CSS)|Cascading style sheets]] (1)
> **Env Vars:** html (9), url (1)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **File Paths:** page1.html (1)
> **CLI Commands:** make (1)
> **URLs:** [owasp.com](https://owasp.com) (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Visiting OWASP](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/visiting-owasp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/visiting-owasp?u=76281980&t=0)** - [Instructor] An important source of information for web testers is the Open [[Web Application Security]] Project, or [[OWASP]]. The links at the top right of the blue bar shows what OWASP offers, including the Zed Attack Proxy, web application developer guides, and web application testing guides. One of the key informational documents provided by OWASP is the annual OWASP Top 10 attacks on [[Web Servers]]. OWASP creates value by maintaining a blog and mailing lists, running projects, and supporting local OWASP chapters. At the bottom of the main page, there's an events calendar. There's a list of link at the left, which provides access to information about what OWASP is doing. Of particular interest is the projects link. This provides details of all OWASP projects. And if we click on the project inventory tab, we can browse through all the lab, incubator, and low activity current projects. For example, if we scroll down to the incubator, we can see there's a project called OWASP Droid. And if we click on that, we get details of the project, which is to develop an [[Android]]-based web testing tool. Note that the [[GitHub]] repository for the project is provided at the top right. In the reference section, one link that is particularly useful when starting out is the attacks link. This provides a full list of the different types of web attack. If I scroll down, we can see [[SQL]] injection is listed. And if we click on that,
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/visiting-owasp?u=76281980&t=92)** then we get a page describing the attack and giving examples. Another related link is vulnerabilities, which provides the full set of vulnerabilities related to web applications. For instance, if we scroll down, we can see use of hard-coded password. And we can click on this to get more details. This page describes the vulnerability and also provides a severity level and likelihood of exploitation. This is useful as an independent reference for reporting, when vulnerabilities are detected as a result of web testing. The OWASP repository is worth perusing at some length, to really understand the many ways in which attackers can exploit websites. Let's take a look at the materials OWASP provides for testers. At the top right, we can see links to the ZAP Proxy, a great testing tool that's included in Kali. There's cheat sheets, and at the bottom, we can see the web application security testing cheat sheets. This provides an extensive set of steps for testing. And for many, we can click to get specific guidance on the tests. The top 10 is a popular reference for providing the priority for web testing. This document is produced periodically and describes the 10 most popular [[Forms]] of web attack at the time of development. The quick download at the top right will get the latest web top 10 document. I've got the document open and positioned at the top 10 summary page. We can see that injection is the top risk,
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/visiting-owasp?u=76281980&t=186)** followed by broken authentication and session management, and down to invalidated redirects and forwards. The body of the document provides details of the attack together with the approach to testing, an example of the attack, and some mitigations. The OWTF is the OWASP Web Testing Framework, which is a tool to automate the more routine parts of web testing and is a good option for deploying continuous, integrated testing for an enterprise. OWTF is also useful for ensuring security tests are aligned with the common web security standards. We'll look at this later in the course. The other major document is the OWASP Testing Guide. This can be downloaded for free at the link shown. The testing guide details the approach to web testing and provides test cases for use and development projects with full testing details. While design for development testing, these may also prove useful in [[Penetration Testing]] and production web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (13), [[Web Application Security]] (2), [[Web Servers]] (1), [[Android]] (1), [[GitHub]] (1)
> **Env Vars:** owasp (13), owtf (2), sql (1), zap (1)
> **UI Navigation:** click on (4), scroll down (3)
> **Definitions:** is a  (3)
> **Analogies:** for example (1), for instance (1)
> **Cross-References:** later in (1)
> **Tools:** github (1)
> **Warnings:** note that (1)

#### [Web access APIs](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/web-access-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/web-access-apis?u=76281980&t=1)** - [Instructor] Many organizations now deploy web-based micro services to get or send information across the web. These work by accessing a webpage with URL parameters. One of the tools for building such services is CherryPy. We'll be using another library, which we can use for one-time password multifactor authentication, called PyOTP. Multifactor authentication is an important means of defeating unauthorized access to our web applications. Let's see how we can build an API on [[Hydra]] using CherryPy. Firstly, we install the CherryPy and PyOTP frameworks using pip. I already have them installed, but let's run the commands anyway. Pip three, install CherryPy.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/web-access-apis?u=76281980&t=62)** And pip three install PyOTP.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/web-access-apis?u=76281980&t=74)** Okay, we can now build our API. I've used the PyOTP demonstrator, so let's check it out. Nano OTP.Py. We import the libraries and then define an API called check within the OTP class. We've just defined one API endpoint, but we could define more within the class if we wished. We expect a URL parameter called token. Editor, please highlight the line def check self token and we check its value against that that we get from the demonstration account. If it checks out, we'll return an HTTP status of 200 and the message authenticated. If not, we return status 401 and an access denied message. Finally, we set up the service on port 8081 and start it. Let's set this running and then check it out.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/web-access-apis?u=76281980&t=151)** [[Python (Programming Language)|Python]] three OTP.Py.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/web-access-apis?u=76281980&t=160)** I've got [[Microsoft]] Authenticator running on my mobile phone and I've scanned the QR code to install the demonstration account. Let's try out our endpoint, [http://192.168.1.51:8081/check](http://192.168.1.51:8081/check),
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/web-access-apis?u=76281980&t=187)** with a token equals and my authenticator's telling me the token is 076872.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/web-access-apis?u=76281980&t=206)** I've used the correct one-time code and we get an authenticated message. We know there's code behind the endpoint and we'll need to test this, as we do with any other web application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hydra]] (1), [[Python (Programming Language)|Python]] (1), [[Microsoft]] (1)
> **Env Vars:** api (4), otp (3), url (2), http (1)
> **Prerequisites:** install (4), set up (1)
> **CLI Commands:** pip (3), python (1)
> **File Paths:** otp.py (2)
> **Ports:** port 8081 (1), :8081 (1)
> **URLs:** [http://192.168.1.51:8081/check](http://192.168.1.51:8081/check) (1)
> **Versions:** 192.168.1 (1)


### 2. Getting Ready to Test

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing the Zero Bank](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-the-zero-bank?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-the-zero-bank?u=76281980&t=0)** - [Instructor] When learning how to do web testing it's useful to have a target website to use. While Metasploitable does provide a website, this doesn't always have the functionality required. A better solution to use for more real world testing is the HP Fortify Zero online [[Banking]] web server. We can see the main screen with the log in button at the top right. Zero Bank has a number of deliberate security flaws, and we'll use this further in the web testing course. However, for this course we're just interested in using a standard website. To get in, we just use the username and the password. Now we're in. We can see we have an account available. And we can check activity, transfer funds, pay bills, look at our money map, and get statements. Okay. I'll log out now. And we'll come back to this site as we start testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1)
> **Speakers:** - [instructor] (1)

#### [Installing the WebGoat Server](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/installing-the-webgoat-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/installing-the-webgoat-server?u=76281980&t=0)** - [Instructor] Another very useful website for learning how to do web testing is the [[OWASP]] WebGoat. This is another website which has been deliberately created with vulnerabilities so that we can practice our web testing. We can download this directly, or you may prefer to use the WebGoat server within the web security dojo that we'll look at later in this course. I've created a directory for this, and I'll download it. This downloads as a jar file, and I've saved this in my WebGoat directory. I'll rename it to WebGoat.jar for simplicity. Let's go run it. This will load up the embedded Tomcat server and start WebGoat. We're now running on port 8080. I'll now point my browser at the WebGoat URL. Here we have the WebGoat login page, and we can see the two default accounts that come with it. Let's look in as guest. We're now in WebGoat, and we have the how to work with WebGoat page displayed. On the left are a series of pages we can load. The first three of which explain more about WebGoat, and the remainder which provide lessons on how to use WebGoat to test for a particular issue. We'll use these WebGoat lessons throughout this course as we learn how to test web applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1)
> **Env Vars:** owasp (1), url (1)
> **CLI Commands:** go run (1)
> **Ports:** port 8080 (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Introducing Burp Suite](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-burp-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-burp-suite?u=76281980&t=0)** - [Instructor] The [[Burp Suite]] Community Edition comes as one of the tools pre-built into Kali. I'll select it from the menu on the left and set up a temporary project, and we're ready to start. The free edition only allows temporary projects. The license is required if we want to store projects on disk, which is usually required when doing a full customer website test. However, the temporary project will be fine for our testing. Burp Suite creates a new project and opens the main screen. The Burp Suite menu is at the top left and offers five main menu items of Burp, Intruder, Repeater, Window, and Help. Below the menu are the Burp activity tabs. These allow the various types of Burp activity to be run. Let's select Scanner, and we get a description of Burp Suite. The second tab is Issue Definitions, which provides a list of issues that Burp Suite can detect and describes what they are and the remediation needed if they're detected. The first tab is Target, which has two of its own tabs called Site and Scope. The Site tab shows the conscription of the website, and the Scope is used to set the target or targets for testing. I liked the Zero Bank web address, [http://zero.webappsecurity.com](http://zero.webappsecurity.com)/.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-burp-suite?u=76281980&t=98)** I'll select the proxy tab, and we can see that intercept is on. This will intercept anything coming through Burp Suite and stop it for us to inspect. I'll turn this off for the moment, and we'll let traffic flow through. I'll go to the Options tab, and we can see that we have a listener on port 8080. I'll set up Firefox for proxy operation with Burp Suite. I'll select the Options button at the top right, select Preferences, Advanced, Network, Settings.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-burp-suite?u=76281980&t=142)** And I'll select Manual proxy configuration, and we'll make sure we're at 127.0.0.1 port 8080.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-burp-suite?u=76281980&t=155)** I can now go to the Zero Bank site. Okay, we're at the bank, and I'll log on now using our test credentials of username, password. I can see in the Target and Site map tab that the traffic to and from the bank has been captured. In the left hand list, is zero.[webappsecurity.com](https://webappsecurity.com), the bank site. If I right-click on this, I have an option to spider the site. Let's do that. The spider now pops up a window asking for credentials to be entered to enable authenticated access. I'll enter username and password and submit the form. If I click on the arrow to the left of the site URL in the site map panel, I can see the structure of the site. I can expand the lower level structures until I get to a page with no subpages. In the right hand panel, I can click on an http message. And the request and response packets are shown in the bottom panel. By default, these are shown in raw form. I can use the tabs to see them in hexadecimal or at the right as a webpage rendered. I'll leave exploration of Burp Suite for now. We'll see more of this tool as we use it to test our websites throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Burp Suite]] (8)
> **UI Navigation:** select the (2), go to (2), click on (2), right-click (1)
> **URLs:** [http://zero.webappsecurity.com](http://zero.webappsecurity.com) (1), [webappsecurity.com](https://webappsecurity.com) (1)
> **Ports:** port 8080 (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Versions:** 127.0.0 (1)

#### [Scanning with ZAP](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/scanning-with-zap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/scanning-with-zap?u=76281980&t=0)** - [Instructor] [[Burp Suite]] is a great tool for professionals. But to be able to run vulnerability tests requires the licensed version. Fortunately, Kali comes preloaded with the [[OWASP]] tool Zed Attack Proxy, or ZAP, which can do vulnerability scanning. Let's start it and see how we do a website scan looking for vulnerabilities. We start ZAP from the Application menu, Web Application Analysis. I'll accept the default of no persistence and we're at the main screen. Running a scan is simple with ZAP. We can click on the automated scan box in the right hand panel and enter our URL to be tested. I'll test the Metasploitable server which I have on 10.nort.2.23 and I'll start the attack. Let's click on the sites icon on the left and open the website folder. We can see the pages being scanned. ZAP is spidering the site in preparation to doing its main vulnerability scan. This also does some basic checks as it goes. If we click on alerts, we can see there's a lot of alerts being raised. We can open an alert category, and we can see the alert details in the right hand pane and the associated request and response packets on the top right. If we double-click the page, we get the full alert details. Let's leave ZAP to finish spidering.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/scanning-with-zap?u=76281980&t=95)** ZAP is still running and we can see that we've now started the vulnerability scan proper. If we check the alerts again, we can see that some path traversal alerts have been identified. If I expand path traversal, and click on the top one we can see in the right hand pane the get request for a page which is the operating system file/etcetera/password. And in the the response tab if we scroll down we can see the content of /etcetera/password. We can reproduce this with the same URL request and we can get the content of /etcetera/password. Automated scanning using a tool such as ZAP, provides the start point for us to run targeted tests against the website to verify that the vulnerability can be exploited. Running web scans to completion takes time. We're only at 1% so far. So we'll leave it here. However, you might want to run this yourself to compare its performance in checking vulnerabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Burp Suite]] (1), [[OWASP]] (1)
> **Env Vars:** zap (7), url (2), owasp (1)
> **UI Navigation:** click on (4), open the (1), double-click (1), scroll down (1)
> **Versions:** 2.23 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Proxying with ZAP](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/proxying-with-zap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/proxying-with-zap?u=76281980&t=0)** - [Instructor] Zed Attack Proxy is another web proxy tool which comes as part of Kali. Let's take a look at it. I select Applications, Web Application Analysis, [[OWASP]] ZAP. I'll accept the default of no persistence, and we get to the main ZAP page. Let's check Tools, Options, and Local Proxies. We can see that ZAP is set up to proxy on port 8080. I'll set up Firefox to run through a proxy by selecting Options at the top right, preferences, advanced, network settings. And I'll select manual proxy configuration. This needs to be set to 127.0.0.1 port 8080. And I'll connect through to the Zero Bank and I'll sign in as username and password.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/proxying-with-zap?u=76281980&t=68)** And I'll confirm the security exception. Back in ZAP we can click on Sites, and we can see the Zero Bank site that was accessed. And we have conversations in the bottom panel. I'll scroll to the post request for account login, and I'll click the Request tab, and we can see the plain text credentials in the lower part of that message. Let's get ready to do a transfer. I'll just click on Transfer Funds and I'll get ZAP to hold all requests from it to inspect, and if I want to, to change. To do this, I'll press the green circle in the top menu bar which is set break on all requests and responses. And I'll enter $1,000 for the transfer, and press Continue.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/proxying-with-zap?u=76281980&t=133)** I'll scroll down to the mass packet, and I can see now there's another tab called Break. I'm going to click on this. I can see the $1,000 transfer in the Break panel. I've just added this to 999, and press Play to send the packet on. And if I check the post, message, we can see that we posted $999. Okay, we hijacked the session, and we changed the request message to transfer a different amount than the original transaction specified. Intercepting proxies are a great way to test whether the web application is vulnerable to a man in the middle attack on messages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1)
> **Env Vars:** zap (5), owasp (1)
> **UI Navigation:** click on (3), scroll down (1)
> **Ports:** port 8080 (2)
> **Prerequisites:** set up (2)
> **Versions:** 127.0.0 (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### [Introducing WebScarab](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-webscarab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-webscarab?u=76281980&t=0)** - [Narrator] WebScarab is a [[Java]] based web application and web server assessment tool. It can operate as a web spider, crawling a website or a web proxy tool, intercepting http and https request and response messages. And providing the ability to make changes to them. It's a little bit dated and has been superseded by Zed Attack Proxy. And there's also a next generation tool available, WebScarab NG. Nevertheless, the original WebScarab is still an active Kali tool which provides a comprehensive set of features, so it's worth taking a look at it. WebScarab is in the applications, web application analysis menu. I'll select it. Before starting any work with WebScarab, we'll need to set up Iceweasel to proxy through WebScarab. We can do that through the options at the top right, preferences, advanced, network settings, and then change the selection to manual proxy on 127.0.0.1 through Port 8008.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-webscarab?u=76281980&t=74)** Okay, now any web browsing or application use that we do will pass through WebScarab. I'll just go to visit the Zero online web testing [[Banking]] site, so that we can send a few packets through WebScarab.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-webscarab?u=76281980&t=96)** Okay, we'll come back to look at Zero Bank later in the course. The summary tab provides two panels, the top is a preview of the website, and the bottom the requests and responses have been collected. The requests at the bottom have been analyzed and session cookies identified. Pages which have possible injection or cross-site scripting, and pages which have hidden fields and scripts. This provides an initial focus for deeper analysis of the web application. If we double-click on a message, a new window pops up with two panes. The request is shown in the top pane and is corresponding response in the bottom pane. Note that there's a dropdown box at the top, from which we can select other message pairs to look at. We don't need to go back to the main screen. There's also buttons for previous, next and define button, which will allow a search within the packet. The request message in the top panel can be viewed in raw form or WebScarab can show it an analyzed form by selecting the parsed tab. The response message in the panel at the bottom can also be viewed in raw and parsed form. Depending on contents, the parsed form will also offer one or more additional tabs, such as [[HTML]], xml, hex, and text. Let's close this window and go back to the main screen tab. Let's take a look at some of the other tabs. The messages tab just lists messages from WebScarab. The proxy tab has four tabs, listeners, manual edit, shell beans and miscellaneous.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-webscarab?u=76281980&t=193)** We can see on listeners that we're running with a proxy address of 127.0.0.1 on Port 8008, which is why we set Iceweasel to proxy through this address. The manual edit tab allows us to check the intercept flag at the bottom, to stop messages. When we do this, WebScarab will pop up the request response box, and allow the request to be inspected, and changed if required and then sent on. Bean shell can be enabled to allow programmatic modification of request or response messages. And miscellaneous has a number of configuration flags that can be set to determine the behavior of the proxy. The manual request tab provides the ability to edit a collected request or manually craft a new request to be sent to the web server, allowing direct server interaction from WebScarab. The spider tab provides the ability to crawl through the target website looking for new URLs. By clicking [[Fetch]] recursively, all linked websites will also be spidered.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-webscarab?u=76281980&t=264)** Extensions is used to search for files that have been left on the target site, with the specified extensions such as .zip, .tar.gz, et cetera. I can add a couple more extensions, PDF and Doc, and save them.
>
> **[4:44](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/introducing-webscarab?u=76281980&t=284)** The XXS/CRLF tab provides an automatic flag of messages which may be susceptible to cross-site scripting. We can see there's two being flagged. And we can investigate further at the summary page. The remaining tabs are used for more advanced testing. I'll leave the WebScarab introduction here, but it's one of the tools that you can use as you progress through this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Banking]] (1), [[HTML]] (1), [[Fetch]] (1)
> **Env Vars:** pdf (1), xxs (1), crlf (1)
> **Cross-References:** go back to (2), later in (1)
> **UI Navigation:** go to (1), double-click (1), dropdown (1)
> **CLI Commands:** make (1), tar (1)
> **Ports:** port 8008 (2)
> **Versions:** 127.0.0 (2)
> **Definitions:** is a  (2)


### 3. Running Basic Web Application Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [Fingerprinting web servers](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/fingerprinting-web-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/fingerprinting-web-servers?u=76281980&t=0)** - [Narrator] Fingerprinting is an important first step in testing a web application. As the environment in which it operates, is as important as the application itself, in terms of potential application risk. While some service provide banners, others have their banners removed or modified. Being able to determine the type of server from its characteristics is important when reading the banner proves futile. There are a number of tools available for fingerprinting a web server. One of them is HTTPRecon, which can be run online. Let's run it against the zero bank web server. Okay, the analysis is finished and we have a report with four sections. The first is a match list which provides a ranking of possible web server options, with a confidence level. The best matching result is for our server to be an Apache 1.3.37, with 100% confidence. Net-square provide a useful tool for fingerprinting [[Web Servers]], called httprint. This can be downloaded from the site shown. It comes down as a zip archive and the executable program is in the Win32 sub directory, called httprint GUI. I've already downloaded it, so let's go try it. I'll firstly go to options and I'll turn off ICMP enable and SSL detection. Just under host, I'll enter the address zero.[webappsecurity.com](https://webappsecurity.com) and Port 80
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/fingerprinting-web-servers?u=76281980&t=97)** to point to the test [[Banking]] website. I'll change the output to be zero.[[HTML]]. I'll now press the play button at the bottom to check the fingerprint. This is now run and it's extracted the banner to show an ApacheCoyote1.1 server. Running Apache1.3 with a 61% level of confidence. We can load the report into our browser. And we see the same report as a webpage. I can click add new to add another site to scan. Let's add www.[scanme.com](https://scanme.com). And again, Port 80. This scans both targets and for ScanMe returns an extracted banner, showing it's an NGINX 10 point, 1.10.3 server, and is deduced that it's most likely running tiny turbo thttpd. The report has a 47% level of confidence. One of the preloaded tools in Kali that can be used to quickly check a website is WhatWeb. Let's run it against the zero-bank. This quickly detects that the website is an Apache Coyote1.1 server, running jQuery 1.8.2. Fingerprinting isn't an exact art, but it's important to understand
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/fingerprinting-web-servers?u=76281980&t=190)** exactly what you're testing and any information you can find can be useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (1), [[Banking]] (1), [[HTML]] (1)
> **CLI Commands:** apache (2), nginx (1), find (1)
> **Env Vars:** gui (1), icmp (1), ssl (1), nginx (1)
> **Versions:** 1.3.37 (1), 1.10.3 (1), 1.8.2 (1)
> **Definitions:** is an  (2), is a  (1)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (1), [scanme.com](https://scanme.com) (1)
> **Ports:** port 80 (2)
> **File Paths:** zero.html (1)

#### [Looking for credentials in HTML code](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/looking-for-credentials-in-html-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/looking-for-credentials-in-html-code?u=76281980&t=0)** - [Instructor] WebGoat provides a simple lesson in finding exposed data in the source [[HTML]] code for a webpage. I'll start up WebGoat and connect to it on port 8080.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/looking-for-credentials-in-html-code?u=76281980&t=40)** From the main WebGoat page, we can select the seventh menu item on the left Code Quality. And then select discover clues in the HTML.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/looking-for-credentials-in-html-code?u=76281980&t=55)** Okay, let's take a look at this. We can right-click on the login button and select inspect element. This'll bring up a panel at the bottom with a login code. We can see we're on the line which will submit our fields. Let's scroll upwards. Okay, here we can see a couple of comments which provide the admin credentials. The user ID of admin, and password of adminpw, together with a comment that these can be used to regenerate the database. Let's close the inspection pane and use these values.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/looking-for-credentials-in-html-code?u=76281980&t=97)** And we've successfully completed the lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** html (2)
> **UI Navigation:** select the (1), right-click (1)
> **Ports:** port 8080 (1)
> **Speakers:** - [instructor] (1)

#### [Using Cookie Jars](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-cookie-jars-14034517?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-cookie-jars-14034517?u=76281980&t=0)** - [Instructor] [[Burp Suite]] is a web proxy which can monitor traffic to and from a website, and it comes as standard with Kali. One of the features of Burp Suite is that it maintains a cookie jar, which stores web cookies. Let's start at Burp Suite by selecting it from the quick access menu on the left. Okay, we've started Burp Suite up. I'll need to switch interception off 'cause we don't want to stop messages. I'll go to Proxy, switch interception off. I also need to tell Burp Suite which website I'm going to look at by selecting Target, Scope, and I'll add the URL [http://zero.webappsecurity.com](http://zero.webappsecurity.com).
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-cookie-jars-14034517?u=76281980&t=60)** Okay, now I need to go to the website. I'll start at Firefox and I need to select Preferences, Advanced, Settings, and make sure we click Manual Proxy,
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-cookie-jars-14034517?u=76281980&t=87)** set for 127.0.0.1, port 8080.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-cookie-jars-14034517?u=76281980&t=97)** I'll now start browsing the Zero Bank,
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-cookie-jars-14034517?u=76281980&t=105)** and here we see the Zero Bank main screen. I login as username with the password, password, and we're into our bank account. Let's go browse.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-cookie-jars-14034517?u=76281980&t=127)** We can now look in Burp Suite and select the main tab, Project Options, and then the Sessions tab and open the cookie jar. He would see we've collected one cookie called jSESSIONID. If we select Edit, then we see the full cookie and can edit its contents.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-cookie-jars-14034517?u=76281980&t=160)** Burp Suite is just one way to see what cookies we collect and what information they hold.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Burp Suite]] (7)
> **UI Navigation:** go to (2), select the (1), open the (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** jsessionid (1)
> **URLs:** [http://zero.webappsecurity.com](http://zero.webappsecurity.com) (1)
> **Ports:** port 8080 (1)
> **Env Vars:** url (1)
> **Versions:** 127.0.0 (1)

#### [Hijacking sessions with cookies](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hijacking-sessions-with-cookies-14032789?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hijacking-sessions-with-cookies-14032789?u=76281980&t=0)** - [Presenter] To hijack a web session, we can use a combination of [[Wireshark]] and Tampermonkey. I've got Wireshark installed on my virtual box [[Windows 10]] system. We need to set my virtual machine into promiscuous mode by selecting machine, settings, network advanced and changing promiscuous mode to allow for VMs. Let's install the browser extension called Tampermonkey into Chrome. I'm at the Tampermonkey site and I'll select the stable version. Chrome will ask if I want to add it to Chrome and I do. It downloads and automatically installs. Now I've got Tampermonkey installed, I need to install a cookie injection script. We can use the Greasemonkey cookie injector script shown hearing gets hub. I'll select and copy it. I'll open the Tampermonkey icon on the top right.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hijacking-sessions-with-cookies-14032789?u=76281980&t=70)** And create a new script. And I'll replace the template with the cookie injection script and save it. We can see the cookie injection script is now active. I've started Wireshark in my Window system and I'll type into the display filter field http.cookie
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hijacking-sessions-with-cookies-14032789?u=76281980&t=101)** and I'll activate that and start recording. As the victim, I'm using Firefox in Kali and I'll log into the Zero Online Bank with username and password.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hijacking-sessions-with-cookies-14032789?u=76281980&t=126)** Okay, I've got my account summary and I can do some [[Banking]]. Perhaps I'll transfer $100 to my credit card. Transfer funds to credit card, $100 part payment
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hijacking-sessions-with-cookies-14032789?u=76281980&t=150)** and submit. Okay, I'm the bad guy again. And I'll stop Wireshark recording. Let's check the first HTTP packet and check the cookie.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hijacking-sessions-with-cookies-14032789?u=76281980&t=172)** We can see we have a J session cookie and I'll copy that as principal text. I'll now go to the Online Bank site using Chrome, zero.[webappsecurity.com](https://webappsecurity.com)
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hijacking-sessions-with-cookies-14032789?u=76281980&t=198)** and we get the front page. Okay, I'll press Halt + C and I'll paste the cookie and press Ok
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hijacking-sessions-with-cookies-14032789?u=76281980&t=212)** and then I'll refresh. We can say we've been logged in there's now a username in the top right part of the screen. I can now click on Online Banking, Account Summary and I'm in my account. We've got full access to the account even though we haven't entered any credentials we've successfully hijacked in HTTP session through intercepting and reusing cookies. The moral to this story is be careful what you do on a public [[Wi-Fi|wifi]] network, cafes, hotels and other hotspots may well be one step away from a hijack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), [[Banking]] (2), [[Windows 10]] (1), [[Wi-Fi|Wifi]] (1)
> **UI Navigation:** select the (1), open the (1), go to (1), click on (1)
> **Env Vars:** http (2)
> **Prerequisites:** install (2)
> **URLs:** [webappsecurity.com](https://webappsecurity.com) (1)
> **Tools:** firefox (1)
> **Exercise Files:** template (1)
> **Warnings:** be careful (1)


### 4. Advanced Web Application Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [Manipulating URL parameters](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/manipulating-url-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/manipulating-url-parameters?u=76281980&t=0)** - [Narrator] Dynamic websites will often move between pages using parameters after the URL. In the simplest form, the web address is followed by a query string, which starts with a question mark and then typically has a variable and it's query value. The question mark is a separator, and the website may simply pass the remainder of the line to a program or function to be evaluated. I've got a [[PHP]]-based webpage, set upon Metasploitable, called URLACC.[[HTML]]. It's in the folder /var/www and we'll use this to test URL manipulation. (keys clicking) Here we see an HTML document, which as a form for entry of an account number. The action taken on submission is to link to the server PHP script, URLTest2.php, with the account number as a parameter. (keys clicking) The PHP file reads the value and checks for the appropriate name, address, and balance detail. Of course, in a real program, this would be a data-based lookup, but this will do for now. Let's run this, I'll browse there from IceWeasel. (keys clicking) Okay I can enter the account number. That's fine, we say our name and details. However, we can see the URL and know that the web server can be accessed directly from the URL line.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/manipulating-url-parameters?u=76281980&t=94)** Let's modify the URL query value to be 115122 and resubmit. Okay, we've just brought up someone else's details by manipulating the URL query string. While this is a simple test, the same issue does occur in production systems all too frequently. URL strings should be tested for potential disclosure of sensitive information. Sometimes file names are passed as URL strings and this offers the tester the opportunity to test for path traversal vulnerability. I've got an HTML webpage set upon Metasploitable called URLnotes.html. It's in the folder, vas/www and we'll use this to test URL manipulation. (keys clicking) Here we see an HTML document which has a form for entry of an account number. The action taken on submission is to link to the server PHP script URLtest3.php, with the account number as a parameter. (keys clicking) The PHP file reads the query string, opens the file with that name, and displays the contents of the file. Let's run this, I'll browse there from IceWeasel. (keys clicking) Okay, I'll enter the account number. And this is fine, we see the notes from the file. Unless the program applies input [[Data Validation]],
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/manipulating-url-parameters?u=76281980&t=189)** and prohibits entry of the special characters such as dot and slash, we can take advantage of this, and do a path traversal. What that means is we can use prefixes to access not the account notes file the application expects us to access, but any file on the server. For instance, we might decide to access the password file, wherever it is. This may take some trial and error, but it can be an effective attack. Let's run the application again and enter ../etcetera/password as the file name. (keys clicking) Okay, we get no such file. Let's traverse one level further up the directory tree.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/manipulating-url-parameters?u=76281980&t=238)** And there we have the password file dumped out. This technique is very powerful and as a tester, it's important to check any URL file reference to make sure this kind of attack has been mitigated by input data validation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (7), [[HTML]] (5), [[Data Validation]] (2)
> **Env Vars:** url (10), php (5), html (3), urlacc (1)
> **CLI Commands:** php (7), make (1)
> **Non-Speech:** (keys clicking) (7)
> **File Paths:** urlacc.html (1), urltest2.php (1), urlnotes.html (1), urltest3.php (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - [narrator] (1)

#### [Testing for SQL injections](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-for-sql-injections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-for-sql-injections?u=76281980&t=0)** - Some web applications request data in their [[Forms]] and use this to populate a search query for a backend [[SQL]] database. This opens up the opportunity for malicious data to be entered. If the web application doesn't check for this, it may be exposed to what is known as an SQL injection. By crafting packets in a special way, an attacker can obtain a great deal of information from the database. WebGoat has a series of SQL injection lessons. Let's take a look at a couple of them.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-for-sql-injections?u=76281980&t=42)** Okay, that's loaded. So I'll use Iceweasel to connect.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-for-sql-injections?u=76281980&t=59)** And our login is guest. Okay, on the left halfway down, we can see the exercises for injection flaws. I'll click on that. This expands to provide a dozen or so injection exercises. Let's pick the blind string SQL injection. This exercise presents a form which we can use to check account numbers. I'll click on go. The message continues to indicate the account number is valid. Let's change that to 100. The message changes to "invalid account number." We can speculate that the query being generated in the server is of the form "select from database "where account equals 100." Let's assume that and make the query, "account equals 100 or one equals one." And, of course, one always equals one, so this should always be true. And sure enough the message changes to "account is valid." We've just completed an SQL injection to force authentication. Let's now look at the string SQL injection.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-for-sql-injections?u=76281980&t=137)** This provides a form to enter our name. I'll enter Smith and press go. Okay, we've got the listing of our two credit cards. This is what we expect. I'll now run that again, but again I'll inject something which forces an always true answer. In this case, WebGoat shows us what the query will be, and this suggests that we might be able to force a full database dump by injecting an always true clause. The way to do this is to close off the original query with an apostrophe, and insert our always true clause without the last apostrophe which will be added from the original query. So we need to make our name "quote" or "quote x quote equals quote x". Let's try that.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-for-sql-injections?u=76281980&t=193)** Okay, we've just dumped the whole database and achieved a full blown data breach. We can achieve the same result by entering "quote" or "one equals one" semi-colon, dash, dash, where the double dash forces the [[Representational State Transfer (REST)|rest]] of the line, in this case, the original trailing apostrophe, to be commented out. WebGoat provides further exercises in SQL injection which you might wish to follow up with to hone your skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Forms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** sql (7)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Speakers:** - some (1)

#### [Cross-site scripting](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/cross-site-scripting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/cross-site-scripting?u=76281980&t=0)** - [Instructor] I've scripted up a webpage on metasploitable called xssblog.[[HTML]]. It's in the folder /var/www, and we'll use this to demonstrate how cross site scripting works.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/cross-site-scripting?u=76281980&t=18)** Here we see an HTML document which has a form which will take a blog entry. The action taken on submission is to post to the server [[PHP]] script xssblog.php, and the blog text will be automatically appended as a parameter. The PHP script opens a file called xssblog.txt, and writes the blog entry into it. I've also created a script called xssread.php to read it back and display it. This opens the xss blog file and reads the blog, and is followed by some HTML code to display it on the screen. Okay, let's run this.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/cross-site-scripting?u=76281980&t=76)** That's been written, and I can now read it back. Okay, we get our blog entry. So far so good, always expected. Let's post another blog entry, this time including some script. I'll do this by including the string, script alert
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/cross-site-scripting?u=76281980&t=103)** your computer is infected. Okay, I'll submit that. That's been written, and I can now read it back. And we get the script executed and an alert pops up. This might have been a hyperlink to a malicious website, a number for a fraudulent call center, or the script might just automatically send the user to a compromised website. The only constraint on what can be done through cross site scripting is imagination. Cross site scripting isn't a problem for the web application, but it's an attack which exploits poor coding in the web application in order to send scripts from the attacker into the server and then across to an unsuspecting victim. It's a problem, a big one, for the downstream victim.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[HTML]] (3)
> **File Paths:** xssblog.html (1), xssblog.php (1), xssblog.txt (1), xssread.php (1)
> **CLI Commands:** php (4)
> **Env Vars:** html (2), php (2)
> **Speakers:** - [instructor] (1)

#### [Injecting commands through the URL](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/injecting-commands-through-the-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/injecting-commands-through-the-url?u=76281980&t=0)** - [Instructor] I scripted up a [[PHP]]-based webpage on Metasploitable called commandget.php. It's in the folder "/var/www". And we'll use this to demonstrate how we can inject arbitrary operating system commands into a Web server. The purpose of the PHP script is to do an nslookup of the host and display the results. The script starts with an [[HTML]] header and webpage heading followed by a PHP script to do the lookup. Note the isset command which ensures that, if no host has been specified on the URL, the script just continues to display a form for the names of a lookup. Okay, let's run this. I'll browse to the Metasploitable page from Iceweasel.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/injecting-commands-through-the-url?u=76281980&t=53)** Okay, I'll submit the query with the default selection and we get the results for Amazon. I'll run it again and select [[Google]]. We can see, on the URL, the host name inserted. I'll add a semicolon to the end of the line and then append the ls command and I'll send the URL to the server. We've got back the lookup for Google followed rather entirely by the listing of the root directory for the Web server scripts. Let's be a bit tidier. I'll include a string of commands, including line breaks, to make this a more readable attack. While I'm at it, I might just dump the contents of the password file as well.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/injecting-commands-through-the-url?u=76281980&t=110)** And, here, we see an easier-to-read extraction of information from the system. We've injected a string of commands, gained a directory listing and the contents of the password file. A powerful tool for the attacker, and one of significant concern for the [[Microsoft Defender|defender]], is the Generic Web Exploitation Engine, GWEE. This will exploit a site with special code to deliver a shell. The TAR.GZ file can be downloaded from here and includes a [[Windows]] binary. This is generally recognized as malware and removed by antivirus programs. I have it loaded in my Windows 7 system and exempt from removal. GWEE contains its own shell and so we can just point it at the target and let it go. I'll use the G option for an attack using get, the L option to have GWEE use its own shell to accept the reverse connection, and I'll use a null-terminated host query.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/injecting-commands-through-the-url?u=76281980&t=180)** Okay, GWEE's operating, and I'll press Return. We now have a shell on the target. I'll just run a few commands. I can see the directory listing and I can change directory. I can list files such as the password file. And I can list processes. We can list all the available commands in GWEE with "help".
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/injecting-commands-through-the-url?u=76281980&t=216)** Command injection is a powerful technique, especially if we can pop a shell. For those Web applications that don't sanitize their input, this can lead fairly quickly to a major security breach and likely not detected. Checking the URL and prohibiting unwanted character sets is a good start, and Web developers should be familiar with, and rigorous in applying, [[OWASP]] guidance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (4), [[Google]] (2), [[Windows]] (2), [[HTML]] (1), [[Microsoft Defender|Defender]] (1)
> **Env Vars:** gwee (5), url (4), php (3), html (1), tar (1)
> **CLI Commands:** php (4), ls (1), make (1), tar (1)
> **Definitions:** is a  (2)
> **File Paths:** commandget.php (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Testing with Uniscan](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-with-uniscan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-with-uniscan?u=76281980&t=0)** - Another tool we can use for testing is Uniscan. Which comes preloaded in Kali. It's relatively simple to use. To run Uniscan, we simply point it a web server using the minus u switch. Ill test the zero bank with a quick check of what type of server it is. Its detected the web application is running on an Apache Coyote 1.1 web server. If we run this again with the additional switches minus q,w,e,d,s, we'll get a more extensive report of folders, files and some standard tests. Uniscan starts by numerating the site and providing some basic information as it goes. We can see that it's found the folders admin, docs and arrows. And some standard pages and files. Uniscan is loaded based on the website in numeration, a number of testing plug-ins. These include a plug-in for identifying source code and one to extract email addresses. We can see that we found some source code files and emails. The external host detector plug-in lists all references to external websites. Uniscan then loads plug-ins for dynamic tests and runs them, but finds nothing. It then loads plug-ins for static tests and runs them and again finds nothing. Let's check the report. This pretty much what we saw on the command line.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-with-uniscan?u=76281980&t=98)** Let's now run a scan against a more exploitable server. As expected, Uniscan starts the enumeration. This will take a while, so let's let it run, and we'll come back when it's finished. Okay, we've been running a while and we're still going. We can see the crawler has enumerated over 11 thousand URLs. And it's found a possible back door in the doc folder, all of this might be a false positive. It's found some folders where source code for the website exists. And a lot of email addresses. It's found a number of upload [[Forms]]. These are useful to know as they're ways into the websites. The external websites plug-in has identified the external URL references. And the [[PHP]] info plug-in has identified locations where information about the PHP site is disclosed. And we can see some of that information. And there's a bunch of files in the doc folder which are accessible but aren't used by the website. After it's doing its basic enumeration, Uniscan then has loaded the relevant plug-ins and starts it's vulnerability scan with dynamic tests. Uniscan enumerates the twiki identifying missing backup files and some renamed ones. There' a series of what it thinks might be potential [[SQL]] injection attacks. Let's look at one. This hasn't given us much but let's look at the original page.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/testing-with-uniscan?u=76281980&t=190)** There's a log in form, so let's try an SQL injection. Okay, so we have actually achieved an SQL injection. But it looks like the file is missing. More interestingly, Uniscan has found some local file inclusion exploits. Lets have a look at a one. Uniscan has identified the (mumbles) count of the website folder. And use direct file references to get an operating system file listed on the page. An attack known as local file inclusion. Getting access to system files is of course a key result for an ethical hacker. We leave this here. But you can run this yourself to see how many net exploit vulnerabilities Uniscan finds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[PHP]] (2), [[Forms]] (1)
> **Env Vars:** sql (3), php (2), url (1)
> **CLI Commands:** php (2), apache (1)
> **Exercise Files:** source code (2)
> **Versions:** 1.1 (1)
> **Tools:** command line (1)
> **Definitions:** known as (1)
> **Speakers:** - another (1)

#### [Using the modsecurity WAF](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=1)** - [Instructor] ModSecurity is an open source web application firewall which can be integrated with the Apache web server to provide protection against many [[Forms]] of web attack. It works by inspecting incoming requests for suspicious content, and if a detection rule is triggered, blocking it. We'll not run through the installation of ModSecurity and its integration with Apache, but it's a fairly simple task to do. I've installed it in the Apache web service in [[Hydra]], so let's go take a look at it in action. Let's browse to Hydra on HTTP 192.168.1.51,
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=45)** slash, and we'll go to our root homepage, index.[[HTML]].
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=59)** Okay, we can see the standard Apache default webpage as we'd expect. Now let's add a parameter onto the URL. And we'll add ?code=1.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=98)** This returns the same page ignoring the parameter. Now let's use what might be an attack parameter.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=111)** And we'll use exec=/bin/bash.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=122)** Now we're forbidden to access the site. Let's take a look at the Apache logs that have been generated.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=154)** We're now logged into Hydra and can check the logs by entering sudo cat /var/log/apache2/error.log.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=184)** Here we see a number of log entries. Editor, please highlight the line with warning. Starting with a warning that the request is for an IP address rather than a website name. This is followed by a number of error logs, including one which indicates a potential remote command execution. Editor, please highlight the line with remote command execution.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=214)** ModSecurity has done its job and protected us against a potential attack.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=229)** Let's now try to access the page with what might be an [[SQL]] injection. And we'll put in blah quote or 1=1.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=251)** Okay, that failed once again.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/using-the-modsecurity-waf?u=76281980&t=264)** Okay, back in Hydra, let's check the logs again. Here we can see there's a number of error logs that have been generated which have detected the SQL injection attempt. Editor, please highlight the line with SQL injection attack detected. A WAF is an important countermeasure that we can use to protect against web attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hydra]] (4), [[SQL]] (3), [[Forms]] (1), [[HTML]] (1)
> **CLI Commands:** apache (5), sudo (1), cat (1)
> **Env Vars:** sql (3), http (1), url (1), waf (1)
> **Definitions:** is an  (2)
> **Warnings:** warning (2)
> **File Paths:** index.html (1)
> **Versions:** 192.168.1 (1)
> **Tools:** bash (1)


### 5. Practicing Your Skills

[↑ Back to Table of Contents](#table-of-contents)

#### [Practicing with online banking websites](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/practicing-with-online-banking-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/practicing-with-online-banking-websites?u=76281980&t=0)** - [Instructor] It's useful to have access to websites in order to practice your web testing skills. So in this section we'll take an initial tour around some websites which are designed for practicing web application testing. R00tsec provides a lost of such websites and downloads, and you can use these to extend your training by practicing and honing your skills. Let's have a look at some of them. The first way offers an online website called Crack Me Bank investments, which provides the [[Banking]] environment experience for application testing. It has no exercise hints or solutions. This is an insecure banking web application, which you have to figure out for yourself. However, let's take a look, and we'll make a start. We're at the main banking site, but we need to login. Let's select the Not a Member option at the last but one option in the list at the left. This asks us to enter our personal details. I'll do that. I'll press go now to submit them. Okay, we can now login. I'll select the login link, and enter my new login.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/practicing-with-online-banking-websites?u=76281980&t=72)** And we're in. The menu on the left provides an extensive set of functions for online banking, and there's lots to practice on. HP provides an online banking site for web testers to use called Zero Bank, and also offers as part of that, the trial use of their Web Inspect tool. There isn't a registration or signup option, but we can login using the username of username and the password of password. I'll sign in using the link at the top right.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/practicing-with-online-banking-websites?u=76281980&t=108)** Okay we're in, and we can see we have two savings accounts, an investment account, two credit accounts, and a loan account. The website has rich functionality, and is fairly advanced. It's a good site to practice on once you have a few wins under your belt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (5)
> **UI Navigation:** select the (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Hacking the cheese](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hacking-the-cheese?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hacking-the-cheese?u=76281980&t=0)** - [Instructor] [[Google]] provides an online site for users to test, the Gruyere social media site. The first thing we need to do is to agree to the terms and conditions, then we can start. Okay, we're now at the home page and we can start testing. We can see some existing user accounts that have posted snippets, Cheddar Mac and Brie. However, we need to create a user ID for ourselves before we can do that. Let's sign up using the link at the top right. I'll enter thing1 for the username and thing1 for the password. I'm at my home page and I can now proceed to update my profile, upload snippets, and so on. You can experiment with the functionality of this application as you practice your testing. Let's sign out and sign up as another user. This time before we do anything, let's hover over the user ID field and right click. Browsers now have an inspection capability. And we can see the code that is going to be sent. As we scroll through it, we can see a hidden field which says name="is_author". It's fair to assume that there are other values to this field and we might want to experiment to see what works. I'll hover over the field and right click and select edit the attribute. Let's take a bit of a stab and try "is_admin".
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hacking-the-cheese?u=76281980&t=91)** Okay, I'll now register as thing2.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/hacking-the-cheese?u=76281980&t=100)** That worked, the account's been created again. Now we can see a new option at the top, manage this server. We've just given ourselves administrative privileges. There's lots more to experiment with, so you'll have a lot of fun practicing with this site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Code Identifiers:** is_author (1), is_admin (1)
> **Speakers:** - [instructor] (1)

#### [Training in the Web Security Dojo](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/training-in-the-web-security-dojo-14032791?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/training-in-the-web-security-dojo-14032791?u=76281980&t=0)** - [Instructor] The Source Forge team have produced an excellent virtual box VM, designed to provide a complete web testing environment with both tools and targets. The virtual box appliance can be downloaded from the Source Forge site shown. I've downloaded and installed this, so let's take a look. Here we have the Web Security Dojo startup screen, at the top left, we have menu, Firefox, and terminal icons. Let's take a look at the menu. We can see the menu includes standard items such as web browser, mail, settings, and accessories. The documentation item provides [[OWASP]] documentation and also documentation on the down vulnerable web application, dojo and help me desk websites. The targets menu item provides the links to the target websites available in the dojo with links to start and stop them. Tools directory provides a list of tools within the dojo such as burp suites and webscarab, which we've covered. And some new ones you might like to try out. Let's check out the dam vulnerable web app. To do this, We select the menu targets main target list and at the top click on DVWA. And we enter the username, admin and the password password
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/training-in-the-web-security-dojo-14032791?u=76281980&t=94)** and login. The first thing we need to do is set up and reset the database. We can do that by pressing create reset database. And we get feedback showing us that the database has been created tables were created and the set up was successful. The next thing we need to do is check the security level of the website, using the menu item, DVWA security. And here we can see the security level set to low and that PHPIDS is currently disabled. That's what we want. So we find. Okay! let's check out command injection. The challenge asked for an IP address. Let's put in 198.11.132.23 and submit. And this takes a couple of seconds and we get our ping response. We can speculate that the web application has issued a ping command and upended our IP address to the end. We know that when we want to run multiple commands we can use double ampersand to put them on the same line. Okay, let's try that. We put 198.11.132.23 and double ampersand LS. And we'll submit that.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/training-in-the-web-security-dojo-14032791?u=76281980&t=188)** We get back the ping output. And we also get a file listing from the DVWA server. Let's put a line break in to make it more readable 198 dot 11 and we'll put in echo BR and DVWAs. We get the same output with a line inserted between the ping and the file listing. We can also dump the password file using the same attack. In this case, instead of our less, we'll say cat slash etc. Slash password. And we get the password file dump downs. We have command execution on the web application host. DVWA incorporates all of the owasp top 10 vulnerabilities and is a good training site. All way to practice and develop your web testing skills. The web security dojo has plenty of tools and targets for you to practice the skills you've learned in this course for web application testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2)
> **Env Vars:** dvwa (4), phpids (1)
> **CLI Commands:** find (1), ls (1), make (1), cat (1)
> **Versions:** 198.11.132 (2)
> **Tools:** firefox (1), terminal (1)
> **UI Navigation:** select the (1), click on (1)
> **Analogies:** such as (2)
> **Prerequisites:** set up (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-hacking-web-servers-and-web-applications/next-steps?u=76281980&t=0)** - [Malcolm Shore] I'd really like to thank you for joining me for this course. I hope you enjoyed learning how to test websites and web services. During the course I showed you some websites that you can use to continue practicing your web testing, and I'd recommend that you do that. There's always something new in cyber security. And if you're interested in learning more, then check out the full cyber security [[Ethical Hacking]] segment at the library where new [[Security Testing]] courses are added regularly. You'll find courses on using [[Kali Linux]], information gathering, viruses, and worms, social engineering, denial of service, wireless testing and much more. I'd like to invite you to go to my [[LinkedIn]] Learning author page where you can find some additional courses on cyber security. If you want to get hands on with some of the common tools, then do take a look at cyber security for IT professionals, and the introduction to Kali Linux. If you want to know how to test mobile devices, then check out the mobile devices course. And if you'd like to learn about security for the cloud, then cyber security for [[Cloud Computing]] is for you. You might also want to see what my colleague in the cyber security ethical hacking series, Lisa Bock, has for you on her homepage. Thanks again for joining me on this course, and I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (2), [[Kali Linux]] (2), [[Security Testing]] (1), [[LinkedIn]] (1), [[Cloud Computing]] (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm (1)


## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Evading IDS, Firewalls, and Honeypots]] | **13 of 19** | [[Ethical Hacking- Wireless Networks]] →

## Appears In

- [[Become an Ethical Hacker]]

## Related Courses

_Courses sharing skills:_

- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Stealth Penetration Testing with Advanced Enumeration]] — Ethical Hacking
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Ethical Hacking
- [[Ethical Hacking- SQL Injection]] — Ethical Hacking
- [[Ethical Hacking- Cloud Computing]] — Ethical Hacking

---

[↑ Back to top](#)