---
type: course
cssclasses:
  - lle-course
slug: programming-foundations-apis-and-web-services-27993033
url: "https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033"
duration_minutes: 115
duration: 1h 55m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEySR8TanAB1g/learning-public-crop_675_1200/B56ZbF5W7kH0Ac-/0/1747076870149?e=2147483647&amp;v=beta&amp;t=RxzDL_McOSZ7kdAXOIRL7v-STg9oJgWbk26zPKM391A"
linkedin_topic: Software Development
learning_paths:
  - '[Become a Programmer- Foundations](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Programmer-%20Foundations.md)'
prev_courses:
  - '[Programming Foundations- Memory, Pointers, and Garbage Collection](Programming%20Foundations-%20Memory%2C%20Pointers%2C%20and%20Garbage%20Collection.md)'
next_courses:
  - '[Programming Foundations- Secure Coding (2018)](Programming%20Foundations-%20Secure%20Coding%20(2018).md)'
path_nav: '[{"path":"Become a Programmer- Foundations","position":9,"total":12,"prev":"Programming Foundations- Memory, Pointers, and Garbage Collection","next":"Programming Foundations- Secure Coding (2018)"}]'
path_count: 1
tags:
  - course
  - topic/software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations-%20APIs%20and%20Web%20Services.md)

![Programming Foundations: APIs and Web Services](https://media.licdn.com/dms/image/v2/D560DAQEySR8TanAB1g/learning-public-crop_675_1200/B56ZbF5W7kH0Ac-/0/1747076870149?e=2147483647&amp;v=beta&amp;t=RxzDL_McOSZ7kdAXOIRL7v-STg9oJgWbk26zPKM391A)

# Programming Foundations: APIs and Web Services

> In this course, Kesha Williams—a distinguished tech leader and innovator—guides you through the dynamic world of APIs. Learn to design, build, secure, test, and optimize APIs using RESTful, GraphQL, and AI-powered frameworks. Discover best practices in API security, including authentication and authorization techniques to protect sensitive data. Dive into advanced topics like pagination, filtering

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033) | 1h 55m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to APIs and web services](#introduction-to-apis-and-web-services)
- [**1. Exploring APIs and Web Services**](#1-exploring-apis-and-web-services) (4 videos)
  - [Defining APIs](#defining-apis)
  - [Understanding web services](#understanding-web-services)
  - [Challenge: Calling a public API](#challenge-calling-a-public-api)
  - [Solution: Calling a public API](#solution-calling-a-public-api)
- [**2. Implementing RESTful APIs**](#2-implementing-restful-apis) (5 videos)
  - [Applying REST principles](#applying-rest-principles)
  - [Building RESTful APIs with Python](#building-restful-apis-with-python)
  - [Exploring advanced API concepts](#exploring-advanced-api-concepts)
  - [Challenge: Develop a simple RESTful API](#challenge-develop-a-simple-restful-api)
  - [Solution: Develop a simple RESTful API](#solution-develop-a-simple-restful-api)
- [**3. Implementing GraphQL**](#3-implementing-graphql) (4 videos)
  - [Exploring GraphQL benefits](#exploring-graphql-benefits)
  - [Creating with GraphQL](#creating-with-graphql)
  - [Challenge: Build a GraphQL server](#challenge-build-a-graphql-server)
  - [Solution: Build a GraphQL server](#solution-build-a-graphql-server)
- [**4.  Integrating Generative AI APIs**](#4-integrating-generative-ai-apis) (4 videos)
  - [Exploring the OpenAI APIs](#exploring-the-openai-apis)
  - [Utilizing the OpenAI API](#utilizing-the-openai-api)
  - [Challenge: Integrate the OpenAI API](#challenge-integrate-the-openai-api)
  - [Solution: Integrate the OpenAI API](#solution-integrate-the-openai-api)
- [**5. Ensuring API Security and Best Practices**](#5-ensuring-api-security-and-best-practices) (6 videos)
  - [Securing APIs](#securing-apis)
  - [Challenge: Secure an API](#challenge-secure-an-api)
  - [Solution: Secure an API](#solution-secure-an-api)
  - [Documenting and testing APIs](#documenting-and-testing-apis)
  - [Challenge: Document an API](#challenge-document-an-api)
  - [Solution: Document an API](#solution-document-an-api)
- [**6. Anticipating Future Trends in APIs and Web Services**](#6-anticipating-future-trends-in-apis-and-web-services) (2 videos)
  - [Embracing emerging technologies](#embracing-emerging-technologies)
  - [Navigating the evolving API ecosystem](#navigating-the-evolving-api-ecosystem)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your programming foundations: APIs and web services journey](#your-programming-foundations-apis-and-web-services-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to APIs and web services](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/introduction-to-apis-and-web-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/introduction-to-apis-and-web-services?u=76281980&t=0)** - APIs are the glue that connect the digital world. They power your favorite apps, automate business processes, and make AI more intelligent. But do you really know how they work? Do you know how to build, secure and optimize them? I'm Kesha Williams and I've spent years building applications and helping teams architect scalable solutions. In this course, you'll learn to design, build, and secure APIs. We'll cover restful and [GraphQL](../../Skills/Web%20Development/GraphQL.md) APIs, dive into AI-powered APIs, and explore the future of [API Development](../../Skills/Software%20Development/API%20Development.md) with serverless and AI-driven [API Management](../../Skills/Web%20Development/API%20Management.md). By the end of this course, you won't just understand APIs. You'll use them like a pro. So what are you waiting for? Let's start building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1), [API Development](../../Skills/Software%20Development/API%20Development.md) (1), [API Management](../../Skills/Web%20Development/API%20Management.md) (1)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **Speakers:** - apis (1)


### 1. Exploring APIs and Web Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining APIs](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/defining-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/defining-apis?u=76281980&t=0)** - Imagine walking into your favorite coffee shop. You don't go behind the counter to make your own latte, right? Instead, you walk up to the barista, place your order, and like magic, your drink appears. In this scenario, you are the client, the barista is the application programming interface, or API in short, and the coffee machine is the system making your drink. You don't need to know how the coffee is brewed, you just place the order and get your result. Welcome to the world of APIs, the baristas of the digital world, taking your requests and delivering what you need without revealing the complex processes behind the scenes. So, what exactly is an API? Well, think of it as a set of rules that allows different software applications to talk to each other. APIs define what you can do without requiring you to know how it's done behind the scenes. For example, when you open a weather app, the app uses an API to [Fetch](../../Skills/Web%20Development/Fetch.md) weather data from a remote server. You get the forecast without worrying about how that data was gathered or processed. Now, why are APIs important? APIs are the backbone of modern [Software Development](../../Topics/Software%20Development.md). They enable apps to connect, promote efficiency, and support innovation.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/defining-apis?u=76281980&t=94)** Imagine building an app from scratch without APIs. You'd have to code everything yourself, from weather forecast to payment gateways. That's like having to grow your own coffee beans just to enjoy a cup of coffee. Let's talk about the different types of APIs. First, we have open APIs, also known as public APIs. They are available for anyone to use. Think of them like a public park. Anyone can enter and enjoy the facilities. An example would be the xAPI which lets developers access posts and user data. Next, there are partner APIs which are shared with specific partners. Imagine an exclusive VIP lounge at an airport. Only people with special access can enter. For example, the Airbnb API is available only to selected partners, allowing them to integrate with Airbnb's platform for booking and listing management. Then we have internal APIs, also called private APIs. These are used within an organization to streamline internal operations. Think of them like a key to your house. Only authorized people can use it. Finally, there are composite APIs which combine multiple APIs into a single request.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/defining-apis?u=76281980&t=189)** It's like ordering a combo meal. You get a burger, fries, and a drink all at once rather than ordering them separately. APIs are everywhere. When you share a YouTube video on [Facebook](../../Glossary/Service/Facebook.md), an API connects the two platforms. When you book a flight on a travel app, APIs gather data from different airlines. And when you ask your smart assistant for the weather, APIs fetch that information. Now that you understand what APIs are, you might wonder how they compare to web services. Are they the same thing? Do they work together? In the next lesson we'll clear up the confusion and dive into how web services fit into the world of APIs. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1)
> **Analogies:** imagine (3), for example (2), think of it as (1), it's like (1)
> **Env Vars:** api (5), vip (1)
> **Definitions:** is an  (1), known as (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** xapi (1)
> **Cross-References:** in the next (1)
> **Speakers:** - imagine (1)

#### [Understanding web services](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/understanding-web-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/understanding-web-services?u=76281980&t=0)** - We've explored the world of APIs, the baristas of the digital world, who take your requests and serve up exactly what you need. But where do web services fit into all of this? Are they the same thing? Do they work together? Let's say you're ordering a pizza online. The API is like the order form you fill out, you select your toppings, crust and size, but how does your order actually get from that form to the kitchen and then from the kitchen to your doorstep? That's where web services come in. Web services are like the delivery drivers and kitchen operations behind the scenes. They ensure your request is processed, prepared and delivered to you. So what exactly is a web service? A web service is a software system designed to support interoperable communication between machines over a network. Simply, it allows different applications to talk to each other over the internet. Think of it as the postal service for the digital world, taking information from one place and delivering it to another. Now, how are web services different from APIs? Well, here's the key. All web services are APIs, but not all APIs are web services.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/understanding-web-services?u=76281980&t=94)** Imagine APIs as all types of vehicles, cars, bikes, trucks, boats. They all help you get from point A to point B. Among them, web services are like delivery trucks, specifically designed to carry goods from one place to another. They are a specific type of API designed to handle requests and responses over the web. There are different types of web services, just like there are different kinds of delivery methods. SOAP, Simple Object Access Protocol, is like a traditional postal service. It has strict rules about how packages, or data, are wrapped and labeled. SOAP is highly structured, which makes it reliable, but also a bit heavy for modern applications. [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), [Representational State Transfer](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md), is more like a food delivery service. It's faster, more flexible and designed to get information where it needs to go, quickly and efficiently. In fact, many modern APIs are restful web services, meaning they follow REST principles while operating over the web. [GraphQL](../../Skills/Web%20Development/GraphQL.md), while not technically a web service in the traditional sense, is like ordering exactly what you want from a custom menu without any extras.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/understanding-web-services?u=76281980&t=189)** It allows clients to request only the data they need, making it super efficient. APIs are the interfaces that allow software to communicate, while web services are a type of API that specifically enables communications over the web. APIs define what you can request and web services handle how those requests are processed and delivered over a network. In the next lesson, we'll roll up our sleeves and make our first API call to see all this in action. Get ready to code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Representational state transfer](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Env Vars:** api (4), soap (2), rest (2)
> **Analogies:** think of it as (1), imagine (1), just like (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - we (1)

#### [Challenge: Calling a public API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-calling-a-public-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-calling-a-public-api?u=76281980&t=0)** - Welcome to your first hands-on challenge. We've talked about APIs and web services, and now it's time to roll up your sleeves and put that knowledge into practice. In this challenge, you will create a simple [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script that calls a public API and displays the data in your console. Don't worry if this sounds complex. I'll guide you step by step. Throughout this course, we'll use [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md), a cloud-hosted development environment. To access Codespaces, simply navigate to our Courses GitHub repository. Upon arrival, you'll be greeted with a README file containing essential information and various exercise files. Get familiarized by simply clicking on the file name associated with a given lesson. If you are on the main page of our GitHub repo, there are two ways to access Codespaces. Look for this code button on the right. If you're on this local tab, make sure to click on the Codespaces tab. From here, you can either start a new Codespace on the main branch, or resume work in an existing one. For this challenge, start by choosing a public API. We'll use NASA's public API, Asteroids Near Earth Object Web Service.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-calling-a-public-api?u=76281980&t=95)** It provides information on near-Earth objects, also known as asteroids. This API gives you access to [Real-Time](../../Skills/Database%20Management/Real-Time.md) data on the asteroids traveling through space. I like this API because it is free to use. Not every public API is free. Most times, you'll have to pay a subscription fee to access data. Then head over to [https://api.nasa.gov](https://api.nasa.gov), sign up for a developer account, and generate your API key. This key is your personal access pass to the asteroid data. Next, let's explore the API. You can retrieve a list of asteroids based on their closest approach date to Earth. Notice here that there are three query parameters: start date, end date, and API key. You can also look up the location of a specific asteroid or browse all the data across all the dates. For the challenge, we'll just retrieve asteroids by date. And here's a tip for you. Explore the Python requests library, which allows Python to make HTTP requests to call an API. Now, are you ready to write your Python code to call the API? Let's see if there are any dangerous asteroids heading this way. Good luck and have fun.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-calling-a-public-api?u=76281980&t=187)** I can't wait to show you how I solved this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** api (11), readme (1), nasa (1), http (1)
> **CLI Commands:** python (4), make (2)
> **Tools:** github (3)
> **UI Navigation:** navigate to (1), click on (1)
> **Exercise Files:** exercise files (1), github repo (1)
> **URLs:** [https://api.nasa.gov](https://api.nasa.gov) (1)
> **Definitions:** known as (1)

#### [Solution: Calling a public API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-calling-a-public-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-calling-a-public-api?u=76281980&t=0)** - How did you do with this challenge? Let me show you how I solved it. For this challenge, I use NASA's API to determine if dangerous asteroids are heading toward Earth. I generated an API key and you'll need to do the same. Make sure to keep your API key private. For simple testing, you can use the default key provided by NASA called Demo_Key. Now let's write some [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code. Open your favorite editor, I'm using Visual Studio Code, and create a new file called asteroids_api.py. Let me walk you through the basic structure of my script. Here on lines 1 through 3, I'm importing the necessary libraries, requests, datetime, and [JSON](../../Skills/Web%20Development/JSON.md). Let's scroll down. For this exercise, we are using the api.[nasa.gov](https://nasa.gov) API. On line 9 I'm using a DEMO_KEY. You can replace this with your own API key. On line 10, I'm showing you the base URL for the NASA API. And the next few sections I have helper functions. This function here, starting on line 13, stringToJSON basically takes in the message and the count and converts that to JSON for readability.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-calling-a-public-api?u=76281980&t=99)** Let's scroll down. Here on line 19, I'm defining the get_asteroid_count function, and there are several things that happen here. So on line 20, I'm getting today's date using that datetime package. Here on line 21, I'm setting up the parameters that I'm going to pass to the API. You'll notice start_date, end_date, and api_key. On line 23, I'm using the request library to actually call the API. Using the get function, I'm passing in the base URL and the parameters that I set up. On line 24, I'm getting the response from that API in JSON format, and I'm assigning it to this api_data variable. And then on line 25, I return the api_data in string format. Let's scroll down to the main portion of the code. Here on line 27, I am including the entire code block in a try catch. So that will catch any errors that occur from the API and print those out to the screen. Here on line 28, I'm getting today's date using the datetime. I'm setting up the parameters. On line 32, I'm constructing the request
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-calling-a-public-api?u=76281980&t=194)** and the API call. And on line 35, here I'm assigning a default message, "No asteroids headed toward Earth." And I do that just as a placeholder waiting for the real response to come back from the API. On line 47, I am creating a for loop that loops through the response, the API data, and it's looking for specific keys in that API response. So if there's a key that says "is_potentially_hazardous_asteroid" and that key value is true, I'm updating the default message to say that yes, dangerous asteroids are headed toward Earth and you need to take cover. If that key value is not true, then I'm updating my placeholder message to say, "Asteroids headed toward Earth but none of them pose any danger." Let's scroll down. Here on line 44, I am loading the message and here I'm actually calling that get_asteroid_count function. And remember that returns the response from the API and we convert that to a string and then we load it to this JSON object, which we then print out on the screen here on line 45. On line 46, this is the closing portion
>
> **[4:49](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-calling-a-public-api?u=76281980&t=289)** of our try except block. So if there is an error response that comes back from the API, on line 47, I print the error and then on line 48, I print a basic message that says the NASA API is currently down. We'll need to try our request again later. Okay, so that's our code. Let's execute our code for today's date to see if there are any asteroids headed toward Earth. So this button actually runs and executes the code. And here I am printing the response and notice there are actually three asteroids headed toward Earth per NASA, but none of them pose any danger, so we are safe for now. If you execute this code and you run into an error that says module not found error, no module name to request, all you need to do is install this request library using the basic PIP command. There you have it. That's how I solve this challenge. Up next, let's explore the principles of the [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) architecture and its benefits of statelessness, [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), and performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** api (17), nasa (5), json (3), url (2), demo_key (1)
> **Code Identifiers:** get_asteroid_count (2), api_data (2), asteroids_api (1), stringtojson (1), start_date (1)
> **UI Navigation:** scroll down (4)
> **CLI Commands:** make (1), python (1), pip (1)
> **Prerequisites:** you'll need (1), set up (1), install (1)
> **File Paths:** asteroids_api.py (1)
> **URLs:** [nasa.gov](https://nasa.gov) (1)


### 2. Implementing RESTful APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Applying REST principles](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/applying-rest-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/applying-rest-principles?u=76281980&t=0)** - If you've ever wondered how your favorite apps seamlessly fetched data, like pulling the latest [Instagram](../../Glossary/Service/Instagram.md) photos or streaming a playlist, there's a good chance [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is behind the scenes making it all happen. So what exactly is REST? REST stands for [representational state transfer](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). Sounds fancy, right? But don't worry, it's simpler than it sounds. REST is just an architectural style that describes how systems communicate. Imagine you're ordering food from your favorite food truck. You place an order step aside, and when your number is called, you pick up your meal. Each order is independent from the others. The food truck doesn't need to remember your name, preferences, or your last order. This is the essence of REST. Every request is like a new order, completely independent from the others. This concept is known as statelessness. Now let's cover the five key principles of the REST architecture. Number one, client server architecture. Think of this like a restaurant. The client is you, the customer, and the server is the kitchen. The client makes requests and the server responds with the data or the food. Number two, statelessness. Each request from a client to the server must contain all the information needed to understand and process it. The server doesn't remember previous interactions.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/applying-rest-principles?u=76281980&t=95)** This improves reliability and makes it easier to scale. Number three, cacheability, responses from the server can be cached to improve performance. Imagine if the food truck prepped popular items in advance to serve orders faster. Number four, uniform interface. This is like having a universal menu at every restaurant. Your favorite fast food restaurant having the same menu across its chain is an example of this. No matter where you go, the way you order is the same. In REST this means standard methods like get, post, put, and delete are used. Number five, layered system, requests can pass through multiple layers like load balancers or security layers without the client needing to know. It's like your food order going through a cashier than the kitchen and maybe even a delivery driver. You don't care as long as you get your food. Now that we know the principles, let's talk about why REST is so popular. Statelessness. Since servers don't have to keep track of user sessions, they can handle requests more efficiently. This makes it easy to scale applications. [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), REST's stateless nature and layered architecture allows services to handle large volumes of requests even as user demand grows.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/applying-rest-principles?u=76281980&t=190)** Performance, thanks to caching, REST APIs can deliver faster responses, reducing server load and improving [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). I was around when REST was invented. I had to deal with SOAP simple object access protocol to integrate APIs at that time, and it was complex. REST simplifies how systems communicate. In the next video, we'll put these principles into practice as we build our first REST full API using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (13), [Instagram](../../Glossary/Service/Instagram.md) (1), [Representational state transfer](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** rest (13), soap (1), api (1)
> **Definitions:** stands for (1), is called (1), known as (1), is an  (1)
> **Analogies:** imagine (2), it's like (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Speakers:** - if (1)

#### [Building RESTful APIs with Python](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/building-restful-apis-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/building-restful-apis-with-python?u=76281980&t=0)** - Think about a vending machine. You press a button, and out pops a snack. No need to see the inner mechanics. That's exactly how a RESTful API works. You send a request, and it delivers data without revealing the complex processes happening behind the scenes. In this video, we build our own vending machine for data, an API that serves up information on demand using Flask, a lightweight web framework for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Flask makes it easy to build web applications and APIs. You learned about the [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) principles that ensure APIs remain scalable, maintainable, and easy to integrate with other systems. By structuring APIs around resources, you can create predictable endpoints that allow clients to interact with data using standard HTTP methods, like get, post, put, and delete. Flask is a framework that allows developers to create APIs with just a few lines of code. The core idea behind a Flask base API is defining routes, which act as different entry points for accessing data. For example, an API for managing books might have a books endpoint that returns a list of books, while books ID retrieves details about a specific book. Flask makes it easy to define these routes
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/building-restful-apis-with-python?u=76281980&t=95)** and return [JSON](../../Skills/Web%20Development/JSON.md) responses, the standard format for APIs. Once we define our endpoints, the next step is handling requests and responses. A well-structured API should provide meaningful responses, including appropriate status codes. For example, when a client successfully retrieves data, the API should return a 200 Okay status. If a requested resource does not exist, the API should respond with a 404 Not Found error. Using proper response codes enhances API usability and helps developers troubleshoot issues when integrating with other systems. To review other response codes, check out the provided handout. So, now let's go to Postman and test our API. After defining our API endpoints, the next step is testing them to ensure they work correctly. One of the best tools for [API Testing](../../Skills/Software%20Development/API%20Testing.md) is Postman. It's an application for sending requests to APIs and inspecting responses. Let's walk through a quick demo of testing our API in Postman. Here I've navigated to Postman. I've opened a new tab to input a get request. Here is our URL. This is the URL to the [GitHub](../../Skills/Software%20Development/GitHub.md) repo. Yours will be different. On the end of our API, we are including the request,
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/building-restful-apis-with-python?u=76281980&t=192)** so it's random-book. This is set up as a get request. To execute this API, click on send, and it's successful and you see a random book here in JSON format as the response returned. The next step is trying to delete a book. Let's go to the delete tab. Notice the base URL is the same. Now we are using the delete-book path and we're passing in the ID of the book that we want to delete. Also, notice the method here is the delete method. Click send, and if the deletion is successful, you will see a success message here at the bottom. Now let's try to enter a path that does not exist. That's this third tab here. Notice the base URL is the same. On the end, I've just put random letters, and let's click send. Notice we see this 404 Not Found demonstrating proper error handling. Using Postman helps developers quickly verify API responses and debug any issues before integrating the API into an application. It also allows us to simulate how different clients, like web apps, mobile apps,
>
> **[4:46](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/building-restful-apis-with-python?u=76281980&t=286)** or [IoT](../../Glossary/Concept/IoT.md) devices, would interact with the API. After developing the API, it's essential to test it further for robustness and usability. Testing tools like Postman, command-line utilities such as cURL, or automated testing frameworks can ensure that the API behaves as expected. In the next video, we will explore advanced REST concepts such as pagination, filtering, and authentication. These will enhance the functionality and security of your API. Get ready to take your [API Development](../../Skills/Software%20Development/API%20Development.md) skills to the next level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [API Testing](../../Skills/Software%20Development/API%20Testing.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** api (21), url (4), rest (2), json (2), http (1)
> **Tools:** postman (6), github (1)
> **Analogies:** for example (2), such as (2)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** python (1), curl (1)
> **Code Identifiers:** curl (1)
> **Cross-References:** in the next (1)

#### [Exploring advanced API concepts](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-advanced-api-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-advanced-api-concepts?u=76281980&t=0)** - Did you know that in the real world, APIs often deal with large datasets, multiple users, and security concerns? We need to go beyond the basics to make APIs more efficient and scalable. Let's start with the challenge of handling large datasets. Imagine you're scrolling through an online store with thousands of [products](../../Skills/Software%20Development/Microsoft%20Products.md). You don't load all of them at once. Instead, you see a limited number of items per page. This is called pagination, and it's a key technique for keeping APIs efficient. Without pagination, an API could return huge amounts of data, slowing down response times and overloading both the server and the client. Instead, we break results into smaller pages and allow clients to request data in chunks. A common approach to pagination is using limit and offset parameters. Limit defines how many results to return per request. Offset defines where to start retrieving results. This request retrieves 10 books, starting from the 20th record. Clients can adjust these values to navigate through data efficiently. Now, let's talk about filtering. Let's say you're searching for books at an online bookstore. Maybe you want to find only [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)-related books or books published after 2020.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-advanced-api-concepts?u=76281980&t=94)** Filtering allows you to request only specific data instead of retrieving everything. In [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs, filtering is often done using query parameters. For example, this request returns only books written by Robert C. Martin. Similarly, multiple filters can be combined. This fetches books that match both criteria. Sorting is another useful feature that improves usability. Continuing with our book example, let's say you're browsing a book list. You might want to sort it by title, author, or publication date. Sorting is usually done using a sort query parameter. For example, this request sorts books alphabetically by title. Now that we've covered efficiency, let's focus on security, a critical aspect of API design. Authentication and authorization ensure that only the right users can access your API. Here's the difference: authentication verifies who you are, such as logging in with a username and password, authorization verifies what you're allowed to do. You can access system logs, but you can't access the financial information. Common authentication methods include API Keys. API keys are like passwords for accessing your API. When a client makes a request, they attach an API key
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-advanced-api-concepts?u=76281980&t=190)** to prove that they are authorized to access the API. Token-based authentication. While API keys are static and can be leaked, [Tokens](../../Skills/Web%20Development/Tokens.md) provide a more secure way to authenticate users dynamically. The most commonly used token format today is [JSON](../../Skills/Web%20Development/JSON.md) Web Token, JWT. This token is included in the API request. OAuth. OAuth is an industry-standard protocol used when a user needs to grant permission for an application to access their data without sharing passwords. If you've ever used login with [Google](../../Glossary/Service/Google.md), you've used OAuth. For example, an API that requires authentication might need an API key like this. All the techniques we've discussed help reduce server load and improve performance. Next, we'll put these concepts into practice by building an advanced API that includes authentication and structured data access. Get ready to level up your API skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** api (14), json (1), jwt (1)
> **Analogies:** for example (3), imagine (1), such as (1)
> **CLI Commands:** make (1), find (1), python (1)
> **Definitions:** is called (1), is an  (1)
> **Speakers:** - did (1)

#### [Challenge: Develop a simple RESTful API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-develop-a-simple-restful-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-develop-a-simple-restful-api?u=76281980&t=0)** - All right, it's time to put your skills to the test in your next hands-on challenge. In this challenge, you'll develop a Flask-based API that handles a to-do list. This API should allow users to create a to-do item, retrieve all to-do items or a single item, update an existing to-do item, and delete a to-do item. You'll also implement basic error handling to ensure the API responds correctly when an item is not found or a request is invalid. First, set up your Flask environment. Don't forget to install the necessary libraries. Next, define the to-do list data structure using dictionaries. Then implement the CRUD create, read, update, delete operations. Next, implement error handling. Finally, test your API in Postman or cURL. Good luck, and have fun. I can't wait to show you how I solve this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), crud (1)
> **Prerequisites:** set up (1), install (1)
> **CLI Commands:** curl (1)
> **Code Identifiers:** curl (1)
> **Tools:** postman (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Develop a simple RESTful API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-develop-a-simple-restful-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-develop-a-simple-restful-api?u=76281980&t=0)** - How did you like that challenge? Let me show you how to solve it. First, I imported the necessary packages, here on line one I'm importing flask, jsonify, and request. Scroll down, here lines six through 11. I defined an in-memory to-do list using dictionaries. In the real world, you'd want to connect to a database. Let's scroll down lines 13 through 20, I have created two helper functions. This one is called find to do and all it does is find a to do item by the ID. Here on line 19, get to-dos. This is a helper function that returns all of the to-dos. Let's scroll down. Next I implemented the crud, create, read, update, delete operations. For example, this function on line 24 is called get to-do, it returns a specific to-do item. This function here on line 32, create to-dos. It takes in a new to-do that you send in and I'll show you how to do that in [JSON](../../Skills/Web%20Development/JSON.md) format and it creates that new to-do and adds it to our dictionary.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-develop-a-simple-restful-api?u=76281980&t=97)** The next function here on line 47 is update a to-do, you send in the update, the to-do ID, and this will update an existing to-do item. I do want to point out here on line 50, if you try to update a to-do that does not exist, I will return a 404 error and this is just an example of proper error handling and you'll want to make sure you do that throughout your code. Let's scroll down here to line 60. This is the function to delete a to-do item. You pass in that ID and it will delete it. Again here on line 64, I've added that error handling. Now let's actually test this API in Postman, I've already executed my development server and you see this message at the very bottom that says it's running. For this API because it's running in [GitHub](../../Skills/Software%20Development/GitHub.md) code spaces, you'll want to make sure that you make the API public when you execute it, and to retrieve that public URL, simply go to the ports tab and you'll see this column called forwarded address. You can copy it using this icon here. You take that URL and then you put it into Postman to test. So let's navigate to Postman. First, let's test the to-do list.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-develop-a-simple-restful-api?u=76281980&t=193)** I've created this request, notice here it is a get request. This is the URL for the GitHub code spaces. I made that public and so I copied that URL, I pasted it here. Yours will be different, and then we add the path of to-dos. Now this path will retrieve all of the to-do items. Let's click send, and we see our output here in the very bottom, there are four to-dos. The first is to learn flask. That's very important to-do. The second is build a [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API. That's what this course is all about. The next is test the API and your last to-do item is to watch another course from me. The second test that we're going to send in, let's get a specific to-do and we'll do that again, this is the base URL from our GitHub repo. We are passing in to-dos for the path and then let's get the second to-do item and click send. And now notice down here in our response it returns ID number two, the status is false, the ID is two, and this is the build a rest API task. Now let's test one more path for our API and it's the update path.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-develop-a-simple-restful-api?u=76281980&t=287)** Notice here, now instead of using get for the method, we are using put, that is how you update. Again, I have that base URL. I'm passing in to-dos and I want to update to-do item number two. For this, if you go back and remember the status is false, let's update the status to true, saying that we've completed this to-do item. This is the JSON body that we're sending in. Make sure you pass in the done value is true. The ID of the to-do that you want to update, which is 2, and the task build a rest API. Let's click send and notice at the very bottom we have a success message saying the to-do item was updated, but was it really updated? Let's go back to this get tab. Remember before the value was false, let's click send and there you have it. We've updated this to-do item to true. There you have it. That's how you can solve this challenge. Next up, we'll explore [GraphQL](../../Skills/Web%20Development/GraphQL.md) and you'll be impressed by its flexibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2), [GraphQL](../../Skills/Web%20Development/GraphQL.md) (1)
> **Env Vars:** api (8), url (6), json (2)
> **CLI Commands:** make (4), find (2)
> **Tools:** postman (3), github (3)
> **UI Navigation:** scroll down (4), go to (1), navigate to (1)
> **Definitions:** is called (2), is a  (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** github repo (1)


### 3. Implementing GraphQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring GraphQL benefits](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-graphql-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-graphql-benefits?u=76281980&t=0)** - Ordering food at a restaurant can be frustrating when you're stuck with a preset meal. Maybe you just want a burger with extra pickles, no onions, and a side of sweet potato fries, but instead, you're forced to take a combo meal with items you don't need. Traditional [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) APIs work the same way. Clients request data from fixed endpoints and often receive more or less than what you actually need. [GraphQL](../../Skills/Web%20Development/GraphQL.md) changes the game by allowing clients to request exactly the data they want, no more, no less. REST has been the standard for API communication for years, offering structured endpoints like users or [products](../../Skills/Software%20Development/Microsoft%20Products.md) to retrieve data. However, its limitations start to show as applications become more complex. Clients often overfetch or underfetch data. A mobile app, for instance, might only need a user's name and email. A REST request, however, gets an entire profile, including unnecessary details like address and social security number. On the other hand, if a client needs both user details and order history, the app might have to make multiple REST calls, slowing down performance and increasing network traffic. GraphQL solves this by letting clients query exactly what they need in a single request. Instead of multiple endpoints, GraphQL has one entry point
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-graphql-benefits?u=76281980&t=97)** where you specify your data requirements in a query. Think of it like a buffet, where you pick exactly what you want instead of being served a pre-selected meal. This approach makes applications faster, more efficient, and more flexible in data retrieval. Another major advantage of GraphQL is its ability to [Fetch](../../Skills/Web%20Development/Fetch.md) related data in a single request. With REST, getting a user's details and their order history might require separate API calls. But with GraphQL, you can structure a query that retrieves both at once, reducing network latency and improving performance, especially for mobile apps and slow network environments. GraphQL also adapts well to evolving APIs. With REST, adding new fields or restructuring data often means creating new versions of endpoints, version one users, version two users, and so on. In contrast, GraphQL allows incremental changes without breaking existing clients. Since clients specify the fields they want, they won't be affected when new fields are introduced, making API evolution smoother. So does this mean GraphQL is always better than REST? Not necessarily. GraphQL's flexibility comes with challenges in performance, security, and caching.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-graphql-benefits?u=76281980&t=192)** Complex queries can lead to server overload if not managed properly. This makes implementing query complexity analysis and rate limiting critical to prevent abuse. Security is another concern since GraphQL exposes a single query interface, making field-level permission controls essential to restrict unauthorized access. Caching in GraphQL is also trickier than in REST, where responses are predictable. GraphQL queries are dynamic, requiring query-level caching or persisted queries to optimize performance. In the next video, we'll dive into how to set up a GraphQL API in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). You'll see firsthand how to write queries and define schemas to unlock GraphQL's full potential. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (14), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (8), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** rest (8), api (4)
> **CLI Commands:** make (1), python (1)
> **Analogies:** for instance (1), think of it like (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - ordering (1)

#### [Creating with GraphQL](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/creating-with-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/creating-with-graphql?u=76281980&t=0)** - APIs have traditionally followed a rigid structure with [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). [GraphQL](../../Skills/Web%20Development/GraphQL.md) flips the script by giving clients the power to define exactly what data they need. Let's move beyond theory, and set up a GraphQL server using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and Graphene, the most popular GraphQL framework for Python. Graphene simplifies GraphQL implementation in Python by providing tools to define schemas, queries, and mutations. Let's say you're building a GraphQL API for managing books. The first step is defining a book type, and that's shown here on lines 12 through 14. This type represents the data structure that clients can query. There is a title for our book and an author, and this means when a client sends in a request for data, they'll receive results formatted as this book object type. Next, let's define the queries. A query in GraphQL is like asking for information. Let's look at this query class here on lines 27 and 28. There are two fields, first book and books. book returns a single book, and books returns a list of books. Each field, book and books, each field has a resolver method, so you see resolve_book on line 30.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/creating-with-graphql?u=76281980&t=96)** It maps to this book field on line 27, and resolve_books on line 37 maps to books on line 28. These methods do the actual data lookup. Let's scroll down to our mutations. A mutation is used to change data, so think about creating, updating, and deleting as opposed to just querying. This mutation here shown on line 45 adds a new book. On lines 46 through 48, we have the arguments in our class. This defines the fields the mutation requires, in this case, title and author when you're creating a new book. Notice that both fields are strings, and they are both required, meaning the client must provide them. Here on line 50, success, and 51, book, these are the output fields, so what you'll get back from the mutation. Here on line 53, we have this mutate method. This implements the logic of the mutation, which simply adds the book passed in to our in-memory database and then returns the result here of the mutation. And scroll down. This code here defines the root mutation class in GraphQL, and this is for the GraphQL schema
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/creating-with-graphql?u=76281980&t=193)** that uses Graphene. This simply allows Graphene to auto-generate the schema for you here on line 75 from your Python classes. And let's scroll down. Line 78 through the end of the code, this is the main section of the code where we are executing our queries and our mutations using GraphQL. Line 79 through 86, this shows a query, and it's a query for all books. And notice, we want to get back a title and an author. In this case, if we only had title on line 83, and we didn't have the author, the result would only be title coming back from the query. That just shows the flexibility of GraphQL. We run that query. We assign it to this result_all variable, and then we print the value out to the screen. Here on line 91, we have a mutation that allows us to add a new book. Notice we are adding the title "Dune" and the author Frank Herbert. On line 104, we're printing out the results of that book mutation. And then here on line 106, this is another query to retrieve the new book that was added. So let's execute this code and take a look at what happens. Let's expand this window. Now let's look at the output.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/creating-with-graphql?u=76281980&t=287)** We had the initial books query, and that is printing out everything in our in-memory database. There are currently two books. One is from George Orwell. The second one is from F. Scott Fitzgerald. The second row here, that's where we added a new book using that mutation to add a book. And we are adding "Dune" from Frank Herbert. And this last statement here, that is the output where we are printing all of our books again just to confirm that our new book was added. So if we look through this list at the very end, we've used the mutation to add our new book. You can easily turn this into an API using the Flask framework. GraphQL offers ultimate flexibility. Now it's time to get hands-on with your next challenge to build a GraphQL server in Python. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (12), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** python (5)
> **Code Identifiers:** resolve_book (1), resolve_books (1), result_all (1)
> **Env Vars:** api (2), rest (1)
> **UI Navigation:** scroll down (3)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - apis (1)

#### [Challenge: Build a GraphQL server](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-build-a-graphql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-build-a-graphql-server?u=76281980&t=0)** (bright electronic music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-build-a-graphql-server?u=76281980&t=6)** - Okay, are you ready for your next hands-on challenge? You'll see the flexibility of [GraphQL](../../Skills/Web%20Development/GraphQL.md) firsthand. In this challenge, you'll build a GraphQL server that supports queries and mutations for managing a to-do list. This is similar to chapter 2's challenge to develop a simple RESTful API. First, you'll install Graphene, then you'll implement queries to [Fetch](../../Skills/Web%20Development/Fetch.md) all to-do items, and a specific to-do item. After this, you'll define the mutations to add, update, and delete to-do items. Next, run the server with GraphQL integration. Here's a tip. Add the GraphQL endpoint to your app.py file. Finally, test your API via the GraphQL interface. Good luck, and have fun. I can't wait to show you how I solve this challenge in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (5), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Env Vars:** api (2)
> **File Paths:** app.py (1)
> **Analogies:** similar to (1)
> **Prerequisites:** install (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Build a GraphQL server](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-build-a-graphql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-build-a-graphql-server?u=76281980&t=0)** (bright upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-build-a-graphql-server?u=76281980&t=6)** - How did you do? Now let me show you how I solve this challenge. First, you'll install the requirements using this PIP command, $ pip install -r requirements.text. I have already executed this command, so I'm not going to run it again. Now, let's take a look at the code. Here on lines four through nine, I'm using a list of dictionaries to hold the task. So, there are actually four tasks. The first is to learn Graphene. The second is to build a [GraphQL](../../Skills/Web%20Development/GraphQL.md) API. The third is to test that API. And the fourth and final, is to watch another course from me in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. You notice that each task has a title, and it also has a completed boolean flag, which is either true or false. Now, let's scroll down. In GraphQL, we define our data as types. Here on lines 14 through 16, we have a task type. It has two fields, a title, and completed. And Graphene maps each field to a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) attribute. Let's scroll down. Next, there is this query task. That's for retrieving data. There are two fields in this query. The first, on line 28, is task that returns a single task,
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-build-a-graphql-server?u=76281980&t=103)** which takes in a title as an argument. And in the real world, this could easily be an ID instead of a title. The second is task, this returns a list of tasks. Scroll down. Next we have our resolver methods. The first resolver method, resolve_task, here on line 31, it looks through our task data for the first matching title, and then it returns it as a task object. The second resolver method here on line 38, resolve_task, returns every task in our list. Think of resolvers as the function body behind each GraphQL field. They determine how we [Fetch](../../Skills/Web%20Development/Fetch.md) or filter data. Next step, we have mutations, these let us change our data. The first mutation is shown here on line 49, to add a task, that simply creates a new task. There's this arguments in a class that defines the fields the mutation requires. In this case, it's just one field shown here on line 51, and it's the title. Next on lines 53 and 54, success and task, are the output fields that the mutation will return. Here on line 56, we have this mutate method,
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-build-a-graphql-server?u=76281980&t=197)** which implements the logic of the mutation, which adds the new task to the in-memory database and returns the mutation result. Our next mutation here on line 63 is one that allows us to update an existing task, it's called UpdateTask. It takes in the original title to actually find the task. It also takes in the new title and the completed flag. Here on line 69 through 70, we have success and task, and these are the output fields that the mutation will return. On line 72, this mutate function loops through all of our task data looking for that matching task in order to apply the update. If it finds a matching task, it will return the success value as true, but if it loops and it can't find a match, then it's going to return success as false. Here on line 91, we have this mutation to delete a task, and it does, guess what? Deletes a task. Here on line 93, you have to pass in the title. So, the title that you want removed, you provide that. And here on lines 95 and 96, you have two output fields, success and deleted_task.
>
> **[4:55](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-build-a-graphql-server?u=76281980&t=295)** This mutate method implements the logic for the mutation. If it finds a matching task, it will actually remove it from our task data, and then return it as a deleted task. If it cannot find it, then it returns the success value as false. Let's scroll down. Here on line 113, this is the root mutation class. This essentially groups all of our mutations together into a single GraphQL route. So, the add_task, update_task, and delete_task. Finally, here on line 121, we build the schema by providing both our query class and our mutation class. And Graphene does this behind the scenes for you. Next, starting here on line 124, this is the main section of our code where we pull everything together. First, here on line 126, we are sending in a query. And in that query, we want back the title and the completed status. We assign the results here on line 134 to result_all. And then on line 135, simply print that value to the screen. Next, we start with our mutation to add a new task here on line 138.
>
> **[6:30](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-build-a-graphql-server?u=76281980&t=390)** The new task that we're adding is to buy groceries. It's something I often forget to do. On line 149, the response is stored in the result_mutation, and then we print that value out to the screen on line 150 here. The next task, is to update a task. So, here on line 157, that new task that was just added to buy groceries, we are updating it to "Buy groceries and snacks". Which is really important, you can't live without snacks. And then here on line 166, taking that value, storing it in the result_update, and then printing that value here on line 167. The next mutation, is to delete a task. Notice here on line 173, we have to pass in the title of the task that we want to delete. In this case, we'll delete "Test the API". Here on line 128, the results of that mutation is stored in result_delete, and then we print it out on the screen. And this last row here, line 186, this is where we are just querying all of our task just to see what our final task list is. And then let's execute the code, click the Run button. Let's expand this, and look at our output.
>
> **[8:06](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-build-a-graphql-server?u=76281980&t=486)** In our output, we are printing the initial task list. And yes, I see the four 'Learn Graphene', 'Build a GraphQL API', 'Test the API', and 'Watch another course from me'. And here, remember, our next step was to add a new task. That was the task to 'Buy groceries'. And then next, we update that new task that we just added to say 'Buy groceries and snacks'. And then we delete a task from our list, which is the 'Test API'. And one thing I do want to point out, you'll notice that for each mutation, the success value is true. So, for adding a task, it comes back true. That means it was successful. For updating the task, it was true. For deleting this task, 'Test the API', it came back as true. If there are issues or errors, the success value, and we talked about that, would show as false. And then this is the final output, which is all of the tasks in our list. So, 'Learn Graphene', 'Build a GraphQL API', 'Watch another course from me', and then at the very end, 'Buy groceries and snacks'. And notice the one that we deleted, 'Test the API', is no longer there. So, we have the final state of our task list
>
> **[9:41](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-build-a-graphql-server?u=76281980&t=581)** after all of the crud, create, read, update, delete operations. There you have it, that's how I solve this challenge. Don't worry if your implementation doesn't match mine exactly. There's more than one way to solve the same problem. Up next, let's dive into integrating [Gen AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) into your systems through simple API calls.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (6), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Gen ai](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Env Vars:** api (10), pip (1)
> **Code Identifiers:** resolve_task (2), deleted_task (1), add_task (1), update_task (1), delete_task (1)
> **CLI Commands:** find (3), pip (2), python (1)
> **UI Navigation:** scroll down (4)
> **Prerequisites:** install (2)
> **Cross-References:** we talked about (1)
> **Speakers:** - how (1)


### 4.  Integrating Generative AI APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring the OpenAI APIs](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-the-openai-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-the-openai-apis?u=76281980&t=0)** - Did you know you can integrate AI and superhuman intelligence into your applications via a simple API call? Well, you can. Whether you want to generate human-like text, create images from descriptions, or even convert speech into text, OpenAI's APIs make it possible with just a few lines of code. OpenAI is a leading AI research organization known for developing [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). Instead of requiring developers to build and train AI models from scratch, OpenAI offers API access to advanced AI models, simplifying the integration of AI capabilities into applications. Whether you're developing a chat bot, a voice assistant, or an AI powered image generator, OpenAI's APIs provide the necessary tools. Let's cover a few of these that are available at the time of this course. One of the most widely used OpenAI APIs is the Chat Completions API, which enables developers to build AI-driven conversational agents and text generation tools using models like [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) or GPT-4o mini. This API can answer questions, generate content, summarize text, and even assist with code writing and debugging. Businesses utilize it to enhance [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md),
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-the-openai-apis?u=76281980&t=95)** automate documentation, and assist with creative writing tasks. OpenAI provides the images API for AI powered image generation, which utilizes models like [DALL-E](../../Skills/Software%20Development/DALL-E.md) to create images from text descriptions. Users can generate high quality images tailored to their needs by providing a textural description. The API also includes features like inpainting, allowing users to edit existing images by modifying specific areas with AI generated content. To create vector representations of texts for tasks like similarity search, OpenAI offers embeddings API. This API transforms texts into numerical vectors that capture semantic meaning enabling applications such as recommendation systems, [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md), and clustering. For converting text into human-like speech, the audio API converts text to speech. This API generates natural sounding voice recordings from text inputs, which can be used to narrate a written blog post, produce spoken audio in multiple languages, or give real time audio output using streaming. Conversely, the audio API also does speech-to-text, powered by the Whisper model, transcribes and translates spoken language into text. It's used to create subtitles for videos,
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-the-openai-apis?u=76281980&t=192)** transcribe interviews, and enable voice-based interactions in applications. Supporting multiple languages and handling noisy audio environments, it's a great tool for content creators and applications focused on accessibility. With all these resources available to you, ensuring the safety and appropriateness of user-generated content is crucial. The Moderations API helps analyze and filter content by detecting harmful or sensitive material, assisting platforms in maintaining community guidelines, and creating a safer environment for users. For developers looking to tailor models to specific task or domains, OpenAI offers [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) capabilities. This allows customization of their models with your own data, enhancing performance on specialized applications such as customer-specific chatbots or industry specific content generation. To handle multiple requests efficiently, the Batch API enables the processing of asynchronous jobs, allowing developers to submit a batch of tasks and retrieve results once processing is complete. This is particularly useful for applications requiring large scale [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). These APIs transform [Software Development](../../Topics/Software%20Development.md) by reducing the time required to implement complex AI-powered features.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/exploring-the-openai-apis?u=76281980&t=287)** With an API key and a few requests, you can integrate AI without extensive expertise in machine learning or significant computing resources. Now that you understand the capabilities of OpenAI's APIs, let's move from theory to practice. In the next video, we'll explore integrating OpenAI's Chat Completions, images, and audio APIs into a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (2), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) (1), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (1), [Semantic Search](../../Skills/Data%20Science/Semantic%20Search.md) (1)
> **Env Vars:** api (14), gpt (2), dall (1)
> **CLI Commands:** make (1), python (1)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - did (1)

#### [Utilizing the OpenAI API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/utilizing-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/utilizing-the-openai-api?u=76281980&t=0)** - Imagine you're building a futuristic app, one that not only chats with users, but also generates images on demand and describes that image using text-to-speech. What if I told you that you could do all of this with just a few API calls? Well, you can. In this video, we're going to integrate OpenAI's Chat Completions API, Images API, and Audio API into a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) application. I'll show you how to generate text responses, create AI-powered images, and turn text into lifelike spoken audio. To access the OpenAI's APIs, you'll need to create an API key. An API key is a unique identifier used to authenticate requests to an API. It acts like a password, granting access to the APIs while helping track usage and enforce rate limits. Make sure to keep your API keys private to prevent unauthorized use, as exposed keys can lead to unintended charges or [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md). The api_key client option must be set either by passing api_key to the client, or by setting the OPENAI_API_KEY environment variable. And that's a great lead in to discuss the API costs. These APIs aren't free to use, so make sure you know how much they cost. Now let's see how to call these APIs.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/utilizing-the-openai-api?u=76281980&t=98)** Once you install the OpenAI SDK, you're ready to make your first API call. Let's say you want to chat with an AI-powered assistant that provides helpful responses. Let's look at the code in chat.py. The first line, I'm importing OpenAI. On line 4, you'll want to replace this with your actual API key, and I'll do that now using my API key. Let's scroll back over. On line 6, I'm creating an OpenAI client, passing in my OPENAI_API_KEY. Here, I'm creating a chat completions. Now this is the code that makes a call to the chat completions API, sending in the prompt and additional parameters. Let's look at those parameters now. On line 9, I'm selecting the [gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md)-mini large language model. Lines 10 through 16, I'm passing in the messages. The first is the system role, telling the LLM that it is a helpful assistant. I'm passing in this content here. The prompt: I'm asking it to describe [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning in three sentences. Let's execute this code. While this is running, it's sending the prompt to the LLM. And the output at the bottom:
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/utilizing-the-openai-api?u=76281980&t=191)** "LinkedIn Learning is an online educational platform "that offers a vast library of video courses "covering a wide range of topics." This description is spot on. How about generating images from text prompts for creative brainstorming? Let's navigate to image.py and look at that file. Here again, on line 4, you'll need to replace this with your actual API key. On line 6, here again, I'm creating the OpenAI client. Lines 8 through 14, we are using the Images API. This allows developers to generate images from text descriptions using OpenAI's [DALL-E](../../Skills/Software%20Development/DALL-E.md) models. There are several parameters. First, the model, and in this case we are using dall-e-3. The second parameter is the prompt. This contains the user's description of the desired image. Here, I'm passing, "in a beach in the caribbean." On line 11, it's the size. This sets the resolution of the image, in this case 1024x1024. The next parameter is the quality of the image. In this case, standard means a basic image, and the last parameter is n. This generates a certain number of images.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/utilizing-the-openai-api?u=76281980&t=287)** In this case, I only want one image. Let's execute this code. I will give it a few seconds to process behind the scenes. In the response, you'll see a URL that you will need to copy and paste into a new browser tab. Let's give this a few minutes, and here it is. You will copy this URL, open it in a new browser tab, and here we are, this beautiful image of the beach. This is so lovely. How about translating text to lifelike spoken audio? Let's navigate to the audio.py file. Again here on line 4, replace this with your API key. Scroll down. On line 6, I am creating an OpenAI client. On line 8, I am providing the name of the file. In this case speech.mp3. Lines 10 through 15 sends a request to the Audio API. There are several parameters. The first parameter here on line 11 is the voice. This allows you to select a specific AI-generated voice. OpenAI provides multiple voices, like alloy. That's the one I'm using here, echo, fable.
>
> **[6:22](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/utilizing-the-openai-api?u=76281980&t=382)** You'll just have to play around with them to find one that you like the best. The next parameter is the input parameter. This is the text that will be converted into speech. Our example is, "Today is a wonderful day "to learn something new on LinkedIn Learning." The third parameter is the model parameter. This specifies the text-to-speech model being used. In our case, tts-1. And now let's execute this code. And it saved the file in this speech.mp3. Let's click on that and listen to it. Now it's your turn to develop a Python application that utilizes the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md). Let's go to your challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (2), [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1), [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1)
> **Env Vars:** api (18), openai_api_key (2), llm (2), url (2), sdk (1)
> **CLI Commands:** make (3), python (2), find (1)
> **UI Navigation:** navigate to (2), scroll down (1), click on (1), go to (1)
> **Definitions:** is a  (3), is an  (1)
> **File Paths:** chat.py (1), image.py (1), audio.py (1)
> **Prerequisites:** you'll need (2), install (1)
> **Code Identifiers:** api_key (2)

#### [Challenge: Integrate the OpenAI API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-integrate-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-integrate-the-openai-api?u=76281980&t=0)** - Are you ready for your next hands-on challenge? This is a fun one. Imagine you're developing a creative writing assistant that helps people generate unique short stories with AI-generated visuals and audio narration. First, set up your environment and generate an [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) key. Before making API calls, you must install the OpenAI [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library and set up authentication. Then your code should accept a story prompt from the user. Next, use the Chat Completions API to generate a short story. Then use the Images API to create an image related to the story. Finally, use the Audio API to generate an audio narration of the story. Good luck, and have fun. I can't wait to show you how I approach this challenge in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (5)
> **Prerequisites:** set up (2), install (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - are (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Integrate the OpenAI API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-integrate-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-integrate-the-openai-api?u=76281980&t=0)** - [Instructor] What a fun challenge. OpenAI makes developing a creative writing assistant easy. Let me show you how I approach this. This challenge has three parts. Writing the storyline, generating an image that matches that story, and bringing the story to life through audio narration. Here on line five, I've added my [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) key. You'll need to do the same. On line seven, I'm creating the OpenAI client passing in my API key. The first function generates the story based on the prompt. On line nine, we'll pass in the storyline to this generate story function. On line 11, it's calling the chat completions API. I'm passing in the model that I want to use. In this case, [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) mini. On lines 13 through 21, I'm passing in the messages. In this case, I'm passing in a system role and the role for the LLM is you are a content creator known for writing engaging stories in five sentences or less. On line 19, I'm passing in the user role and the storyline that will pass in as a prompt.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-integrate-the-openai-api?u=76281980&t=97)** It returns the response from the completions API lines 25 through 28. Basic error handling. If any errors occur, it will print those errors to the screen. The second function generates an image based on the prompt. Here on line 32, I'm calling the images API and I'm passing in several parameters. On line 33, I'm passing in the [DALL-E](../../Skills/Software%20Development/DALL-E.md) three model that I want to use to generate the image. I also pass in the storyline as the prompt. Here on line 44, I pass in the image size 1024 by 1024. I pass in the quality of the image, in this case, standard. And on line 37, I pass in the number of images that I want to generate. In this case, just one image. Line 40 returns the URL to the image generated. The third function here adds the audio narration, text to speech passing in the story. On line 44, I'm setting the file output path and we'll call it story.mp3. On line 46, I'm calling the audio API, passing in on line 47 the voice that I want to use, alloy. On line 48, passing in the story that I wanted to read.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-integrate-the-openai-api?u=76281980&t=195)** And then the text to speech model, in this case, TTS version one that I want to use. On line 53, I'm printing out the audio file and where it can be found. This main section here brings it all together by orchestrating the function calls. On line 56, I'm setting a user prompt so the user can enter a story prompt and we will continue to collect the prompts until the user types the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) exit. If the user does not type the word exit, the first step is to call the generate story function using the user prompt that's passed in. Print out the story here on line 63. We will generate an image based on that user prompt and print out the URL on line 64, and then on line 65, we call text to speech, passing in the story. Let's execute this code. Input here is the story prompt, and I will just copy and paste the sample prompt that I have here. A dog running through a park. I'll click enter, sending that in, and notice here it is printing out the response.
>
> **[4:51](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-integrate-the-openai-api?u=76281980&t=291)** It's introducing Max, a scruffy terrier with boundless energy. I'm liking this story already. It's also generating the image. Here is the URL to the image. You can copy and paste that into your web browser. And notice here it was converting the text of that story to audio, and it's storing it in story.mp3. I'm definitely enjoying this story. You get the idea. The audio will continue to narrate the story, and let's close this out by typing exit to end the execution of our program. Next, let's discuss strategies for securing your API and keeping your data safe in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1), [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [DALL-E](../../Skills/Software%20Development/DALL-E.md) (1)
> **Env Vars:** api (7), url (3), gpt (1), llm (1), dall (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Ensuring API Security and Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing APIs](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/securing-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/securing-apis?u=76281980&t=0)** - APIs power modern applications, connecting services and enabling seamless data exchange, but with great connectivity comes great responsibility. How do we ensure that only authorized users access our APIs? How do we prevent data breaches and API abuse? Let's explore essential security mechanisms for protecting APIs, including authentication and authorization techniques. APIs often handle sensitive data from user credentials to financial transactions. If left unprotected, they become prime targets for attacks, like unauthorized access, data leaks, and Denial of Service attacks. Securing an API is just as important as building one. Attackers can exploit vulnerabilities, steal data, or even take down services without proper security measures. To protect an API, we need authentication and authorization mechanisms. While the two terms are often used interchangeably, they serve different purposes. Authentication verifies who is accessing the API, authorization determines what the authenticated user is allowed to do. Let's explore some common security techniques used for authenticating and authorizing APIs. Starting with API keys. API keys act like passwords for API access. They are unique identifiers passed in a request header,
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/securing-apis?u=76281980&t=97)** or as a query parameter to verify the calling client. The API checks if the incoming request includes the correct API key in the header. If the key is missing or incorrect, access is denied. A pro to using API keys is that they're easy to implement and manage. The downside, however, is they can be stolen if exposed in public repositories, or client-side code. As a reminder, never hard-code API keys in public code bases. Next up is token-based authentication. Unlike API keys, token-based authentication involves time-limited access [Tokens](../../Skills/Web%20Development/Tokens.md) that expire after a certain period. [JSON](../../Skills/Web%20Development/JSON.md) Web Tokens are a common approach that ensures secure and stateless authentication. The API generates a signed JWT containing user information and an expiration time. The client includes this token in API requests, and the server verifies it before granting access. Tokens are more secure than API keys because they support expiration and revocation, however, they require extra processing to validate tokens. Lastly, let's discuss OAuth. OAuth is an industry standard framework that allows users to grant API access to third-party applications
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/securing-apis?u=76281980&t=189)** without sharing their credentials. [Google](../../Glossary/Service/Google.md) Login and [GitHub](../../Skills/Software%20Development/GitHub.md) Authentication, for instance, use OAuth to authorize users. With OAuth; one, users log in via a third-party provider, like Google or [Facebook](../../Glossary/Service/Facebook.md), two, the provider issues an OAuth token, three, the client app uses this token to access protected APIs on behalf of the user. OAuth is widely used in scenarios where multiple services must interact securely without exposing sensitive credentials. Beyond authentication and authorization, here are a few best practices for securing APIs. Use HTTPS. Always encrypt API traffic using TLS/SSL to prevent data interception. Rate limiting and throttling. Prevent abuse by limiting the number of requests per user. Input validation and sanitization. Protect against [SQL](../../Skills/Data%20Science/SQL.md) injection and cross-site scripting. Logging and monitoring. Track API usage and detect suspicious activity. Now that you understand how to protect APIs, let's put these security principles into practice. In the next video, we'll walk through a hands-on challenge where you'll implement API security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (4), [Google](../../Glossary/Service/Google.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1)
> **Env Vars:** api (19), json (1), jwt (1), https (1), tls (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Best Practices:** the key is (1)
> **Speakers:** - apis (1)

#### [Challenge: Secure an API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-secure-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-secure-an-api?u=76281980&t=0)** - Welcome to your next hands-on challenge. There are two for this chapter. Let's get into the first challenge now, where you'll secure the RESTful to-do list API you developed in chapter two by adding API key authentication. Let's put security into practice and strengthen our API. Right now, it's publicly accessible, meaning anyone can access sensitive information. To prevent unauthorized users from fetching data, you'll add API key authentication, so only trusted clients can make requests. First, add API key authentication to the API. Next, reject unauthorized requests with a 403 forbidden response. Lastly, verify the API key from the request headers. Good luck and have fun, and I'll show you how I solve this challenge in the following video.

> [!info]- Semantic Content
>
> **Env Vars:** api (7)
> **CLI Commands:** make (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Secure an API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-secure-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-secure-an-api?u=76281980&t=0)** - Let me show you how I solved this challenge. The previous todo API was unprotected. Right now, it simply returns todo data without authentication. Anyone can access todos without restrictions. I fixed that by requiring an API key. Here, on line six, the first step is to define the API key. In a real app, you would not hard-code your API key, but it's fine to do it here for testing. So now we have our API key. It is mysecureapikey123. You can generate any random alphanumeric string. Scroll down to line 17. I've added this new function, check_api_key. The first line here on line 18, it's specifically looking for the X-API-Key in the request header. If that key is not found or it does not equal the API_KEY, remember that API_KEY is shown up here, mysecureapikey123. If it does not match that API key, line 20 shows we're going to return an error. It's unauthorized and the status code will be 403 and that's it. That's all we needed to do to protect the API.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-secure-an-api?u=76281980&t=96)** Now, users must send in the correct API key in that X-API-Key header. Unauthorized users will see this 403 Forbidden response and only valid API_KEY holders can access the data. The next step is to test this in Postman. I've already executed this code, so my development server is running. Click on the Ports tab. I made the API public. You can get that URL by going to this Forwarded Address tab and clicking on the URL. Now let's navigate to Postman. Here we are in Postman. I'm sending in a GET request. This first part here is the URL that I copied and this is the path, the todos path. The next step is to click on this Authorization tab. This is where you're going to add the API key. Under Auth Type, make sure you select API Key. The name of the key, we pull this directly from the code. It's the X-API-Key. The value, we pull that also from the code, mysecureapikey123, and we add it to the header. Now let's test this out to see if it works. Click Send and yes, as expected, we get all of the data back
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-secure-an-api?u=76281980&t=191)** in our todos list. Now let's test what happens if we send in an incorrect API key. At the end, I'll just add a few random strings. I'll click Send, and now notice, the response is 403 Forbidden and the user sees that they are unauthorized because they have an invalid API key. There you have it. That's how I solved it. Up next, I'll show you how to document and test APIs for usability and reliability, using tools like Swagger, OpenAI Specification, and Postman.

> [!info]- Semantic Content
>
> **Env Vars:** api (16), api_key (3), url (3)
> **Tools:** postman (4)
> **UI Navigation:** click on (2), scroll down (1), navigate to (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** check_api_key (1)
> **API Endpoints:** get  (1)
> **Documentation:** specification (1)
> **Speakers:** - let (1)

#### [Documenting and testing APIs](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/documenting-and-testing-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/documenting-and-testing-apis?u=76281980&t=0)** - APIs are contracts that enable seamless communication between systems. But imagine trying to use an API without documentation. It's like trying to assemble furniture without instructions. In this video, we'll explore how to document APIs effectively using the OpenAPI Specification, historically known as Swagger, and test them for reliability with Postman. An API without proper documentation is difficult to use, leading to developer frustration, integration delays, and potential [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md). Well-documented APIs provide clear instructions on what endpoints are available, what data the API expects and returns, how authentication works, and common error responses and handling. OpenAPI Specification is a widely-used API documentation standard. It allows developers to describe an API's structure in a machine-readable format, which tools like Swagger UI can use to generate interactive documentation. I've documented a simple customer API with the OpenAPI Specification in openapi.[JSON](../../Skills/Web%20Development/JSON.md). This file defines the API [Metadata](../../Skills/Web%20Development/Metadata.md), title, description, version, the customer's endpoint, and its response in OpenAPI format. The Swagger UI provides an interactive interface
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/documenting-and-testing-apis?u=76281980&t=96)** for testing APIs. To view your documentation in Swagger, one, install Swagger UI. Two, run a local server and open [http://localhost:5000/docs](http://localhost:5000/docs) in your web browser. Try making live API calls directly from the interface. Testing APIs is just as important. Before deploying an API, you must ensure it works correctly, responds as expected, and handles edge cases properly. Postman is a powerful [API Testing](../../Skills/Software%20Development/API%20Testing.md) tool that lets you send API requests and check responses, automate testing and scripts, simulate authentication methods, like API keys and JWT. You can also automate testing using Postman. It allows you to write test scripts to validate API responses. It also ensures your API completes successfully with a 200 response, and the response contains valid customer data. Here are some key points to ensure usability and readability of your documentation. Keep things updated. API changes should be reflected in OpenAPI docs. Use consistent naming. Endpoint names and responses should follow clear conventions. Include example requests. Provide sample payloads and expected outputs.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/documenting-and-testing-apis?u=76281980&t=192)** And test error handling. Ensure that API responds correctly to invalid or unauthorized requests. Now that you've learned how to document and test APIs, let's put this knowledge into action. In the next video, we'll walk through a hands-on challenge where you'll create API documentation and test it for usability and reliability using tools like OpenAPI Specification and Postman.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [API Testing](../../Skills/Software%20Development/API%20Testing.md) (1)
> **Env Vars:** api (17), jwt (1)
> **Documentation:** specification (4)
> **Tools:** postman (4)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** imagine (1), it's like (1)
> **File Paths:** openapi.json (1)
> **URLs:** [http://localhost:5000/docs](http://localhost:5000/docs) (1)

#### [Challenge: Document an API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-document-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/challenge-document-an-api?u=76281980&t=0)** - Welcome to your second hands-on challenge. In this challenge, you'll document a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) API using the OpenAPI specification and validate it by testing the endpoints in Postman. By the end of this challenge, you'll have clear, structured API documentation and a reliable way to test your endpoints. First, document the secure Todo API using the Open API specification. Next, make the documentation accessible via the Swagger UI. Finally, test the API's endpoints in Postman. Good luck, and have fun. I can't wait to show you how I solved this challenge in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (5)
> **Documentation:** specification (2), the documentation (1)
> **CLI Commands:** python (1), make (1)
> **Tools:** postman (2)
> **Cross-References:** in the next (1)
> **Speakers:** - welcome (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Document an API](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-document-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-document-an-api?u=76281980&t=0)** - How was the challenge? Let me show you how I solved it. First, I define the API documentation in the OpenAPI Specification by creating the static openapi.[JSON](../../Skills/Web%20Development/JSON.md) file. This documentation describes the title for the API, it's called To-Do List API. It provides a description, "An API, for managing a simple to-do list." It also provides the initial version, which is 1.0. Let's scroll down, and it also goes here on line 14 to describe the different paths. For example, there's the todos endpoint. And notice here on line 20, it requires an API key authentication. Continue to scroll down, on line 30, it shows the response codes, 200 for success. Scroll down, on line 54, it shows 403 for unauthorized access. The next step is to make the documentation accessible by integrating the Swagger UI into the API code. Let's navigate to our todo_api.py file, and you'll notice at the top I'm importing this flask_swagger_ui on line 2.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-document-an-api?u=76281980&t=94)** Scroll down. You'll need to configure Swagger. Lines 7 and lines 8 show the necessary configuration. Line 7 is the URL for accessing the Swagger UI. Make a note of /docs, we'll need to remember that for later. And here, this shows the path to the OpenAPI specification JSON file. And that's the file that we just looked at under the static folder. Scroll down, here on lines 10 and 11, additional configuration. We're setting up the swagger_ui_blueprint variable by calling the get_swagger_ui_blueprint function, passing in the configuration, the SWAGGER_URL that we defined here on line 7 and the API_URL that we defined here on line 8. Another step in the configuration here is on line 11, setting the app and calling this register_blueprint function, passing in the swagger_ui_blueprint that has our configuration values and the url_prefix for the SWAGGER_URL. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this code you are familiar with. To proceed running the API and accessing the Swagger UI, simply click on this Run button. I've already done that,
>
> **[3:06](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-document-an-api?u=76281980&t=186)** so you'll notice here that my development server is running. When you run it for the first time, if you run into an error that says no module named flask_swagger_ui, just use PIP to install that module. The API is currently running. If you click on the PORTS tab, you'll notice that, one, the API is set to public visibility. You'll get that option the very first time you run it. You can select Make Public, and then this here under Forwarded Address shows you the URL that you'll need to access for the Swagger UI. Simply click on Open in Browser. You'll initially see this Not Found error. That's to be expected. On the end of the URL, remember I told you to make a note of /docs? That is the path you need to access the Swagger UI. We click Enter. You now see the Swagger UI, and this is an interactive API documentation that allows you to test the API directly from your browser. This works well when you're running your code locally. And you can expand this default path, which is the GET method and the todos path, and click on Try it out
>
> **[4:40](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/solution-document-an-api?u=76281980&t=280)** and remember to enter your API key before you start testing. Our API's running, you can also test it from Postman. Let's navigate there now. Here we are in Postman. Notice here we're using the base URL for our [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). We're adding the path of todos on the end. Under the Authorization tab, I'm entering an API Key as the Auth Type. The Key is the X-API-Key. The Value, which we've hardcoded in our code, mysecureapikey123. We add it to the Header and we click Send. And this shows the response. So you can test the API from Postman. You can also test it from the Swagger UI. There you have it, that's how I solved this challenge. Great job solving all the challenges throughout the course. I encourage you to explore developing, securing, and testing your APIs and use the tools you've learned so far. In the next chapter, let's talk about some future trends in APIs and web services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (1)
> **Env Vars:** api (16), url (4), swagger_url (2), json (1), api_url (1)
> **UI Navigation:** scroll down (5), click on (4), navigate to (1)
> **Code Identifiers:** flask_swagger_ui (2), swagger_ui_blueprint (2), todo_api (1), get_swagger_ui_blueprint (1), register_blueprint (1)
> **CLI Commands:** make (4), pip (1)
> **Tools:** postman (3), github (1)
> **Prerequisites:** you'll need (2), configure (1), install (1)
> **Documentation:** specification (2), the documentation (1)


### 6. Anticipating Future Trends in APIs and Web Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Embracing emerging technologies](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/embracing-emerging-technologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/embracing-emerging-technologies?u=76281980&t=0)** - What if I told you that your API could run without servers, scale infinitely, and even defend itself against cyber threats all without you lifting a finger? Sounds like science fiction, right? But it's happening right now. In this video, we'll explore how innovations are shaping the future of [API Development](../../Skills/Software%20Development/API%20Development.md), and why you will want to start using them today. The way we build and manage APIs is constantly changing. Traditional API hosting required provisioning and managing servers, worrying about scaling, and handling security configurations manually. But today, cloud-based innovations and AI-driven automation are transforming how we think about APIs. Two of the most impactful advancements are: serverless architectures that support APIs that scale dynamically without dedicated infrastructure, and AI-driven [API Management](../../Skills/Web%20Development/API%20Management.md) that supports smart, automated solutions that enhance security, performance, and efficiency. Let's start with serverless architectures. Serverless architecture allows developers to build and deploy APIs without managing underlying servers. Instead, cloud providers handle everything, scaling, provisioning, and maintenance, so you can focus on writing code.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/embracing-emerging-technologies?u=76281980&t=97)** How does it work? When a request comes in, the cloud provider automatically allocates resources, executes the API function, and scales it as needed. When there's no traffic, the service scales down to zero reducing costs. An example is a serverless API on [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), AWS, that eliminates the need for a dedicated server by deploying API functions using AWS Lambda, which automatically scales based on demand. Instead of hosting a Flask app on a traditional server, you can configure API gateway to expose your Lambda function as a fully-managed, scalable API. Now, let's talk about AI-driven API management that automates performance monitoring, security enforcement, and traffic optimization. As APIs become more complex, manual management isn't scalable. AI-driven API management transforms API management through threat detection and security. AI models can analyze API traffic in real time to detect suspicious behavior, preventing security threats before they occur. Smart load balancing. AI can predict traffic patterns, and dynamically adjust [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) to balance API loads efficiently.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/embracing-emerging-technologies?u=76281980&t=190)** And automated documentation. AI tools can generate API documentation by analyzing API usage, making it easier for developers to integrate services. An example of this is [Google](../../Glossary/Service/Google.md) Apigee using AI to help API management, security, and more. Looking ahead, the API landscape will continue to evolve, bringing new advancements that enhance performance, security, and user interaction. One key trend is edge computing for APIs which enables APIs to run closer to users, reducing latency, and improving response times. This shift is particularly valuable for [Real-Time](../../Skills/Database%20Management/Real-Time.md) applications like [IoT](../../Glossary/Concept/IoT.md) and AI-driven services. Another important development is zero-trust security which strengthens authentication and access controls to ensure that APIs remain secure against evolving threats. By implementing stricter identity verification and authorization mechanisms, organizations can protect sensitive data, and prevent unauthorized access. Additionally, conversational APIs are becoming more prevalent, leveraging AI to generate natural language responses, making interactions with APIs feel
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/embracing-emerging-technologies?u=76281980&t=283)** more human-like and intuitive. As these technologies continue to advance, developers must remain adaptable, experiment with new approaches, and embrace innovation to stay ahead in the ever-changing world of APIs. In the next video, we'll explore how trends like API-first development and the rise of low-code/no-code platforms are transforming the API ecosystem. Are traditional development workflows becoming obsolete? Let's dive in now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [API Management](../../Skills/Web%20Development/API%20Management.md) (5), [API Development](../../Skills/Software%20Development/API%20Development.md) (1), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** api (20), aws (2), iot (1)
> **CLI Commands:** aws (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - what (1)

#### [Navigating the evolving API ecosystem](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/navigating-the-evolving-api-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/navigating-the-evolving-api-ecosystem?u=76281980&t=0)** - Did you know how we build and interact with APIs is changing fast? Instead of writing APIs after an application is built, companies are now designing them first. And with the rise of low-code and no-code platforms, even non-developers can create and manage APIs. So what does this mean for developers, businesses, and the future of software? Let's answer that question and discuss what you need to do to stay ahead. Traditionally, APIs were designed after applications were built. Developers would create a product and then add APIs as an integration layer. However, this approach often led to inconsistencies, tight coupling, and a lack of [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). With API-first development, APIs are treated as the foundation of an application, not an afterthought. This approach prioritizes designing APIs before building the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the system, ensuring they are well structured, reusable, and easy to integrate. API-first development offers several key benefits that enhance both the development process and the overall usability of APIs. One major advantage is a better developer experience. Well-documented APIs provide clear guidelines, making it easier for developers to integrate them into applications without confusion or trial and error.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/navigating-the-evolving-api-ecosystem?u=76281980&t=97)** Additionally, this approach enables faster development cycles by allowing teams to work in parallel. Instead of waiting for the backend to be fully built, frontend and backend, developers can develop against predefined API specifications, significantly accelerating project timelines. Another critical benefit is scalability and reusability. API-first design encourages modular architecture, where APIs can be reused across multiple applications, making building and maintaining a scalable [Microservices](../../Skills/Software%20Development/Microservices.md) ecosystem easier. For example, rather than manually writing API documentation after development, an API-first approach leverages open API specification to design the API before writing any code. This ensures that both frontend and backend teams have a shared understanding of how the API will function, leading to a more seamless and efficient development process. Not long ago, building an API required writing code from scratch. Now, low-code and no-code platforms are changing the game. These tools enable businesses and developers to design, build, and deploy APIs with minimal coding, accelerating development timelines, and lowering the barrier to entry. Many tools also now offer automated API generation
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/navigating-the-evolving-api-ecosystem?u=76281980&t=191)** where APIs are automatically created based on existing [Databases](../../Skills/Software%20Development/Databases.md) or data models, further streamlining the process. So what does this mean for you? It means adapting your skills and workflows as [API Development](../../Skills/Software%20Development/API%20Development.md) evolves to stay competitive in this rapidly changing landscape. API-first design, low-code automation, enhanced security measures, and AI-assisted development are reshaping the traditional methods of designing and deploying APIs. Keeping up with these advancements is essential for building your scalable, secure, and efficient APIs. Up next, we'll highlight key takeaways from the course and discuss the next steps you can take to deepen your API expertise. Let's bring everything together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [API Development](../../Skills/Software%20Development/API%20Development.md) (1)
> **Env Vars:** api (14)
> **Documentation:** specification (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - did (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your programming foundations: APIs and web services journey](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/your-programming-foundations-apis-and-web-services-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/your-programming-foundations-apis-and-web-services-journey?u=76281980&t=0)** - And just like that, you've made it to the end of the course. Whether you're here to strengthen your API skills or start building from scratch, you now have the foundation to create, secure, and optimize APIs that power modern applications. So what's next? The best way to solidify what you've learned is to put it into practice. Try building your own API, experiment with authentication and security, or explore API first design tools like OpenAPI and Postman. To continue your learning journey, check out my other courses on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, such as [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md): machine learning, [Building a Project with the ChatGPT API](../Artificial%20Intelligence%20(AI)/Building%20a%20Project%20with%20the%20ChatGPT%20API.md), or creating GPTs with Actions. And let's stay connected. I'd love to hear about what you build. You can connect with me on LinkedIn and drop a question in the course Q&A. Keep learning, keep experimenting, and most importantly, have fun. Thanks for joining me on this journey. I'm Kesha Williams, and I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Env Vars:** api (4)
> **Analogies:** just like (1), such as (1)
> **Tools:** postman (1)
> **Speakers:** - and (1)


## Instructor

- [Kesha Williams](../../Instructors/Artificial%20Intelligence%20(AI)/Kesha%20Williams.md)

## Path Context

### In [Become a Programmer- Foundations](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Programmer-%20Foundations.md)
← [Programming Foundations- Memory, Pointers, and Garbage Collection](Programming%20Foundations-%20Memory%2C%20Pointers%2C%20and%20Garbage%20Collection.md) | **9 of 12** | [Programming Foundations- Secure Coding (2018)](Programming%20Foundations-%20Secure%20Coding%20(2018).md) →

## Appears In

- [Become a Programmer- Foundations](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20Programmer-%20Foundations.md)

---

[↑ Back to top](#)