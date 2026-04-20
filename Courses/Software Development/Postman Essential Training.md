---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: postman-essential-training-21969591
url: "https://www.linkedin.com/learning/postman-essential-training-21969591"
duration_minutes: 105
duration: 1h 45m
level: Intermediate
updated: 3/28/2023
learners: 41099
skills:
  - Postman API
  - API Testing
  - Test Automation
exercise_files: true
github: "https://github.com/LinkedInLearning/postman-essential-training-4362153"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGu_qZOWzDKsQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679692293614?e=2147483647&amp;v=beta&amp;t=AQ9nvPCbqKAgtWx9hd5kZDNm1F-njRSqByG6_JUdQ94"
linkedin_topic: Software Development
learning_paths:
  - Getting Started with Software Testing
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/postman-api
  - skill/api-testing
  - skill/test-automation
status: not-started
created: 2026-04-20
---

![Postman Essential Training](https://media.licdn.com/dms/image/v2/C560DAQGu_qZOWzDKsQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679692293614?e=2147483647&amp;v=beta&amp;t=AQ9nvPCbqKAgtWx9hd5kZDNm1F-njRSqByG6_JUdQ94)

# Postman Essential Training

> Suggested prerequisites

A basic understanding of the command line
A basic understanding of HTTP requests

Projects

Add variables to the URL and body of a request.
Write your own status, header, and body assertions for a Postman request.
Write assertions for complicated JSON responses, including responses in arrays and in nested objects.

This course introduces the process of writing, running, an

> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591) | 1h 45m | Intermediate | 41K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Kristin Jackvony]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/postman-essential-training-4362153)

## Skills Covered

- Postman API
- API Testing
- Test Automation

## Table of Contents

### Introduction

#### Why automate your API tests?
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/why-automate-your-api-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/why-automate-your-api-tests?u=76281980&t=0)** - [Kristin] More software companies are using APIs than ever before, which means the risk is even greater for malicious users to exploit these APIs to access or change application data.
>
> **[0:12](https://www.linkedin.com/learning/postman-essential-training-21969591/why-automate-your-api-tests?u=76281980&t=12)** So, it's important to regularly test API functionality to make sure our requests to the server are behaving as we expect them to.
>
> **[0:21](https://www.linkedin.com/learning/postman-essential-training-21969591/why-automate-your-api-tests?u=76281980&t=21)** Postman is a free tool that lets us test the requests and responses of our APIs.
>
> **[0:28](https://www.linkedin.com/learning/postman-essential-training-21969591/why-automate-your-api-tests?u=76281980&t=28)** With Postman, it's easy to create and duplicate request, use JavaScript to assert on responses, organize your tests, and run your tests as an automated test suite.
>
> **[0:41](https://www.linkedin.com/learning/postman-essential-training-21969591/why-automate-your-api-tests?u=76281980&t=41)** Join me in this course and learn how to create reliable automation for any API you work with.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Tools:** postman (2)
> **CLI Commands:** make (1)
> **Code Keywords:** assert (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kristin] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course you should have some experience with running simple command line requests.
>
> **[0:07](https://www.linkedin.com/learning/postman-essential-training-21969591/what-you-should-know?u=76281980&t=7)** You should also have a general knowledge of what HTTP requests and APIs are and some knowledge of what node JS is.
>
> **[0:17](https://www.linkedin.com/learning/postman-essential-training-21969591/what-you-should-know?u=76281980&t=17)** If you need to brush up on any of these skills you can try taking these introductory courses, Learning REST APIs, Introducing Postman, and Learning Windows Terminal.

> [!info]- Semantic Content
>
> **Tools:** command line (1), postman (1), windows terminal (1)
> **Env Vars:** http (1), rest (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### Setting up your test environment
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=0)** - [Instructor] There are a few things you'll need in order to take this course.
>
> **[0:04](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=4)** First, you'll need to have Postman.
>
> **[0:07](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=7)** You can get the free version of Postman by going to [https://postman.com/downloads](https://postman.com/downloads).
>
> **[0:15](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=15)** Click on the download button that is appropriate for your operating system.
>
> **[0:20](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=20)** Next, you'll need to have Node installed.
>
> **[0:23](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=23)** You can do a quick check to see if you already have node installed by opening a command window and typing node --version.
>
> **[0:32](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=32)** If you get a version number such as 19.3.0 in response, you already have Node installed.
>
> **[0:40](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=40)** It's okay if your version number is different from mine.
>
> **[0:43](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=43)** If you don't have Node installed, you can get it by going here: [https://nodejs.org](https://nodejs.org).
>
> **[0:52](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=52)** Choose the LTS version and follow the installation instructions.
>
> **[0:57](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=57)** Once you have Node installed, you should have npm installed automatically.
>
> **[1:02](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=62)** You can check to see if it's installed by running this in a command window: npm --version.
>
> **[1:10](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=70)** If you get a version number in response, npm is installed.
>
> **[1:15](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=75)** It's okay if your version number is different from mine.
>
> **[1:18](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=78)** If it's not installed, you may have a very old version of Node.
>
> **[1:23](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=83)** Go to the Node installation page and update your version.
>
> **[1:27](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=87)** Now it's time to install Newman.
>
> **[1:29](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=89)** Newman is the command line runner that runs our Postman tests.
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=93)** Simply type in the command line npm install -g newman.
>
> **[1:41](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=101)** This will install Newman globally on your machine.
>
> **[1:45](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=105)** Note that all URLs mentioned in this course are linked in the exercise file named Postman Essential Training Course Links.
>
> **[1:53](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=113)** Once you have Postman, Node, npm, and Newman installed, you are all ready to take this course.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9), npm (5)
> **Tools:** postman (6), command line (2)
> **Prerequisites:** you'll need (3), install (3)
> **URLs:** [https://postman.com/downloads](https://postman.com/downloads) (1), [https://nodejs.org](https://nodejs.org) (1)
> **UI Navigation:** click on (1), go to (1)
> **Env Vars:** lts (1)
> **Versions:** 19.3.0 (1)
> **Exercise Files:** exercise file (1)


### 1. Getting Started with Postman

#### Creating collections and folders
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=0)** - [Instructor] Before we even write our first request it's worth taking the time to get organized.
>
> **[0:06](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=6)** Let's begin our work with Postman by creating a collection.
>
> **[0:10](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=10)** A collection is a series of saved Postman requests.
>
> **[0:14](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=14)** The requests in a collection can be grouped into folders to make it easy to keep things organized.
>
> **[0:21](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=21)** It's even possible to have nested folders.
>
> **[0:24](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=24)** So let's create a collection in Postman.
>
> **[0:28](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=28)** First, make sure that you have selected the Collections tab on the left side of the screen.
>
> **[0:34](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=34)** Now we'll click the plus button beside the Collections tab.
>
> **[0:38](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=38)** We are creating a new collection.
>
> **[0:40](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=40)** We're going to give our collection a name, Contact List, and click the Return key.
>
> **[0:47](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=47)** And now you can see that our new collection has been saved in the Collection list.
>
> **[0:52](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=52)** Now that we have a collection, let's add some folders.
>
> **[0:56](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=56)** We are going to create two folders, one for basic endpoint testing and one for negative testing.
>
> **[1:03](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=63)** First, we'll create our basic endpoint tests folder.
>
> **[1:07](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=67)** Click on the three dots next to the name of our collection.
>
> **[1:12](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=72)** And we're going to choose Add folder.
>
> **[1:17](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=77)** Give your folder a name.
>
> **[1:18](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=78)** We're going to name it Basic Endpoint Tests.
>
> **[1:23](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=83)** Click Return.
>
> **[1:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=85)** And you can see that our new folder has been added to our Contact List collection.
>
> **[1:31](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=91)** Now let's add our negative tests folder.
>
> **[1:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=95)** Click on the three dot menu next to the collection, and choose Add folder.
>
> **[1:42](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=102)** We'll give our folder a name.
>
> **[1:44](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=104)** We'll name it Negative Tests.
>
> **[1:48](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=108)** Click Return.
>
> **[1:50](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=110)** And you can see that we have now added the Negative Tests folder.
>
> **[1:55](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=115)** Now we have a collection and a pair of folders in which to save our tests.
>
> **[2:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=120)** Next, we'll take a look at the application we'll be testing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), return. (2)
> **Tools:** postman (3)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The contact list application
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=0)** - [Instructor] In order to learn how to create Postman requests and assertions, we'll be using an API, I created, called the Contact List API.
>
> **[0:09](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=9)** It allows users to add, edit, and delete contacts like they would in an address book.
>
> **[0:15](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=15)** This API also has a user interface, or UI, to go with it.
>
> **[0:21](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=21)** Let's take a look at that first.
>
> **[0:24](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=24)** Navigate to thinking-tester-contact-list.[herokuapp.com](https://herokuapp.com).
>
> **[0:30](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=30)** We are going to create an account which we will use for our API calls.
>
> **[0:35](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=35)** So let's start by clicking the Sign up button.
>
> **[0:39](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=39)** You'll add in your First Name, Last Name, Email address, and a Password.
>
> **[0:52](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=52)** Your name and email don't need to be real, but remember what they are along with the password.
>
> **[0:58](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=58)** Now we'll click the Submit button.
>
> **[1:01](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=61)** Notice that you are taken to the Contact List page.
>
> **[1:04](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=64)** From here you can add, edit, and delete contacts, but usually we won't be doing this through the UI.
>
> **[1:12](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=72)** We'll be doing this through the API.
>
> **[1:14](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=74)** As you go through the next few lessons, if you ever get confused about what you're seeing in the API, you can always log into the UI and check your work.
>
> **[1:24](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=84)** Before we leave the UI for the API, let's take the time to add a couple of contacts to our Contact List.
>
> **[1:31](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=91)** That way we'll have some contacts to see when we make our first get request.
>
> **[1:36](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=96)** So we'll click on the Add a New Contact button,
>
> **[1:44](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=104)** then click the Submit button, and you will see that your contact has been added to the Contact List.
>
> **[1:51](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=111)** Let's add one more contact.
>
> **[1:58](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=118)** So now you can see the two contacts that you have added.
>
> **[2:02](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=122)** You'll also see the two contacts you added when we learn how to do a get request.
>
> **[2:07](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=127)** But first, let's learn about how JSON Web Tokens work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), delete (2), interface (1)
> **Env Vars:** api (7), json (1)
> **UI Navigation:** navigate to (1), click on (1)
> **CLI Commands:** make (1)
> **URLs:** [herokuapp.com](https://herokuapp.com) (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### How JSON Web Tokens (JWTs) work
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=0)** - [Instructor] APIs allow us to make requests directly to a server or data store without having to go through a UI.
>
> **[0:07](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=7)** But software creators need to make sure that those APIs are secure.
>
> **[0:12](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=12)** You wouldn't want to have a stranger able to make an API call to access your bank account, for example.
>
> **[0:18](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=18)** The most common way to secure APIs is through a JWT, or JSON web token.
>
> **[0:23](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=23)** This token is generated through a POST request.
>
> **[0:27](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=27)** The username and password are sent to the application and if they're valid, a JWT is generated.
>
> **[0:34](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=34)** This JWT can then be used in all requests to interact with the application.
>
> **[0:39](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=39)** So, let's generate a JWT.
>
> **[0:43](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=43)** Let's open up our contact list collection to see our two folders, and we're going to click on the three-dot menu of the Basic Endpoint Tests folder.
>
> **[0:54](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=54)** Then, we're going to choose add request.
>
> **[0:58](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=58)** We're going to give our new request a name.
>
> **[1:00](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=60)** We're going to call it Login and click return.
>
> **[1:04](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=64)** And now, in the HTTP verb section, we are going to change the verb from GET to POST.
>
> **[1:13](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=73)** Now we'll put in the request URL.
>
> **[1:16](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=76)** Note how similar this URL is to the URL that we used to get to the website.
>
> **[1:23](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=83)** Now, let's click on the Body tab of the request.
>
> **[1:27](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=87)** We're going to click on the raw button and then, in the dropdown that begins with Text, we are going to choose JSON from the dropdown.
>
> **[1:37](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=97)** This is just configuring that we are sending JSON in our request.
>
> **[1:42](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=102)** If you're unfamiliar with what JSON format is, we'll be learning more about it in a later movie.
>
> **[1:47](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=107)** For right now, it's enough to just know that JSON format is made up of name-value pairs.
>
> **[1:54](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=114)** So, let's enter in our login object.
>
> **[1:58](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=118)** We start with a beginning curly brace and then we click return.
>
> **[2:03](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=123)** We can see that the ending curly brace has populated for us.
>
> **[2:07](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=127)** Now, we're going to put the word email in quote marks and then a colon.
>
> **[2:12](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=132)** And then, you're going to put in the email address that you used to create the account on the website.
>
> **[2:21](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=141)** Make sure you put a comma after the last quote mark, then click return.
>
> **[2:26](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=146)** And now, we will put password in quote marks, and then a colon, and then put in the password that you used to create your account on the website.
>
> **[2:38](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=158)** Okay, now that we have finished this, let's click the Send button which is the blue button on the right of the screen, and we should see our request run.
>
> **[2:48](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=168)** Yes, we see our request run and we get results in the bottom pane.
>
> **[2:53](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=173)** So now, let's copy the long token that we receive in the response, everything in between the two quote marks, because we will be using this in another request.
>
> **[3:06](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=186)** So, paste that token somewhere where you can save it and use it again.
>
> **[3:11](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=191)** Finally, let's save our Login request so that we can use it again when we need to.
>
> **[3:16](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=196)** Click the Save button which is up in the top right and the request is saved.
>
> **[3:24](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=204)** We can see it over here in our Basic Endpoint Tests folder on the left.
>
> **[3:30](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=210)** Now, we're ready to make secure API calls with our token.

> [!info]- Semantic Content
>
> **Env Vars:** json (5), jwt (4), url (3), api (2), post (2)
> **Code Keywords:** let (7), return. (3), this, (1), finally, (1)
> **CLI Commands:** make (5)
> **UI Navigation:** click on (3), dropdown (2)
> **API Endpoints:** post  (1), get  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Creating GET requests
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=0)** - [Instructor] Now that we have a token to authenticate our requests, let's start creating some basic endpoint requests.
>
> **[0:07](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=7)** The requests we'll be creating and saving here are not yet tests.
>
> **[0:11](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=11)** We'll be adding some assertions to our requests in a later module.
>
> **[0:15](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=15)** The API we're working with has five different endpoints.
>
> **[0:19](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=19)** Let's take a look at them.
>
> **[0:20](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=20)** We have a GET request which returns a list of all contacts.
>
> **[0:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=25)** We have a GET/{contactId} request which returns one specific contact.
>
> **[0:31](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=31)** We have a POST request which adds a new contact.
>
> **[0:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=35)** We have a PUT/{contactId} request, which updates a specific contact, and we have a DELETE/{contactId} request, which deletes a specific contact.
>
> **[0:46](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=46)** You can find the documentation for these five endpoints at this address.
>
> **[0:51](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=51)** Basic endpoint requests are formed correctly and result in a 200 level response.
>
> **[0:57](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=57)** And this movie will create a GET request and a GET contact request.
>
> **[1:02](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=62)** For our basic endpoint request folder.
>
> **[1:06](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=66)** Let's create a GET request.
>
> **[1:09](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=69)** So we will open up our collection and we'll find our Basic Endpoint Tests folder, We're going to click on the three dot menu next to that folder, and we're going to choose Add Request.
>
> **[1:23](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=83)** We're going to give our request a name.
>
> **[1:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=85)** Let's call it Get Contact List.
>
> **[1:31](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=91)** And we're going to check our HTTP verb.
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=93)** We want to make sure that it is set to GET and it is set to GET.
>
> **[1:38](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=98)** And now we're going to enter in the request URL.
>
> **[1:42](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=102)** Next we're going to click on the Authorization Tab which is underneath the GET verb.
>
> **[1:48](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=108)** And for the type of authorization we're going to choose Bearer Token.
>
> **[1:54](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=114)** So we can see that we have a field here on the right for a token.
>
> **[1:58](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=118)** And in this field we are going to post the jot that we created in the previous movie.
>
> **[2:05](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=125)** Note that your jot will be different from mine.
>
> **[2:08](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=128)** Now let's click the Save button here at the top right so that we can save the request.
>
> **[2:14](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=134)** And now let's click the Send button.
>
> **[2:16](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=136)** We should be getting two contacts in response from our contact list.
>
> **[2:22](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=142)** And let's scroll down and see what we get.
>
> **[2:24](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=144)** Here's one contact and here's the second contact.
>
> **[2:27](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=147)** So we got back the two contacts that we added.
>
> **[2:31](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=151)** Of course your contacts will look different from mine because you added your own contacts on the website.
>
> **[2:39](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=159)** Now that we have our GET request working, let's see if we can request a specific contact from the list.
>
> **[2:46](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=166)** We're going to create a new request in an easy way.
>
> **[2:49](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=169)** We're going to copy our existing request.
>
> **[2:53](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=173)** Let's go over to the GET Contact List request.
>
> **[2:56](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=176)** And on the three dot menu we're going to click Duplicate.
>
> **[3:02](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=182)** And this has made a copy of our request.
>
> **[3:05](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=185)** Now we're going to rename this new request and we're going to name it, Get Contact and click Return.
>
> **[3:14](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=194)** So let's take a look at our new Get Contact request.
>
> **[3:19](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=199)** We have the correct verb here.
>
> **[3:21](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=201)** It is a GET request, but we need to make a change to the URL, because the URL for this request is different.
>
> **[3:29](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=209)** To see how it's different, let's take a look at the documentation.
>
> **[3:33](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=213)** So here is our documentation for our Contact List API.
>
> **[3:38](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=218)** And we want to see what the URL should be for our Get Contact request.
>
> **[3:43](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=223)** So we're going to click on Get Contact over here in the left navigation pain.
>
> **[3:49](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=229)** And here we see an example of the Get Contact request.
>
> **[3:53](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=233)** We can see that the URL ends in contacts and then a slash, and then the contact ID.
>
> **[4:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=240)** So that's what we will need to be adding to our URL.
>
> **[4:05](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=245)** So we need to find a contact ID so that we can make this Get Contact request.
>
> **[4:11](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=251)** We can get that contact ID from the response we got when we got our contact list.
>
> **[4:16](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=256)** So let's return to our Get Contact List tab.
>
> **[4:20](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=260)** We can see that there's an ID here in the first contact we got back.
>
> **[4:26](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=266)** So let's copy that ID, and now we will go over to our Get Contact request and we will add a slash at the end of the URL, and then we will paste in our ID.
>
> **[4:39](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=279)** Your ID will of course be different from mine.
>
> **[4:42](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=282)** Let's save the request here with the Save button.
>
> **[4:47](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=287)** And now let's run our request with the Send button and see what we get back.
>
> **[4:53](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=293)** And we get our contact back.
>
> **[4:56](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=296)** This time we just get one contact back because we were asking for one specific contact by using their contact ID.
>
> **[5:05](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=305)** We now have two requests saved to our Basic Endpoint Tests folder, in addition to our login request.
>
> **[5:13](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=313)** You might want to take some time to try requesting your second contact in a GET request by replacing the contact ID in the URL with the ID of the second contact.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), module (1), delete (1), return. (1)
> **Env Vars:** url (8), api (2), post (1), put (1), delete (1)
> **API Endpoints:** get  (10), post  (1)
> **CLI Commands:** find (3), make (3)
> **UI Navigation:** click on (3), scroll down (1)
> **Code Identifiers:** contactid (3)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (1)

#### Creating POST requests
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=0)** - [Instructor] In the previous movie we saw how to retrieve contacts we created from the contact list API, but we created those contacts by using the UI.
>
> **[0:10](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=10)** Now we'll learn how to do a post to our API to create contacts that way.
>
> **[0:16](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=16)** Let's open up our contact list collection and then our basic endpoint tests folder.
>
> **[0:24](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=24)** We are going to create our post request by duplicating our get contact list request.
>
> **[0:30](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=30)** So click on the three dots next to the get contact list request, then choose duplicate and you can see now we have made a copy.
>
> **[0:40](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=40)** Let's rename by clicking on the three dots and choosing rename, and we will rename the request add contact, and click return.
>
> **[0:50](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=50)** Now we need to change the HTTP verb from get to post because when you are adding a new contact to the database it needs to be a post request.
>
> **[1:02](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=62)** The URL of the request is going to be the same as the URL for the get contact list.
>
> **[1:08](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=68)** So we don't need to make any changes there.
>
> **[1:10](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=70)** However, we do need to add something in the body of the request.
>
> **[1:15](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=75)** To see what we need to add, let's go to the documentation.
>
> **[1:20](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=80)** Here we are in the documentation.
>
> **[1:22](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=82)** You can see that the add contact request is first on the documentation, so that's easy to find.
>
> **[1:29](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=89)** And let's scroll down to the body of the request and let's click to view more.
>
> **[1:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=95)** So when we create a new contact we need to add in information like first name and last name.
>
> **[1:41](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=101)** And that gets sent in the body of the request.
>
> **[1:45](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=105)** So let's copy this entire body and we'll return to our post request.
>
> **[1:52](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=112)** We're going to click on the body tab underneath the URL and then we're going to choose raw.
>
> **[2:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=120)** And now let's click in the text field and we will paste in our contact that we're going to add.
>
> **[2:10](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=130)** Now you might notice something different right now.
>
> **[2:12](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=132)** You can see that the labels of all of the fields and the field values themselves are all in black text.
>
> **[2:20](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=140)** When we created a post request for a login, the labels and the values for our fields were in red and blue.
>
> **[2:30](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=150)** So what this means is that we have forgotten to change the content type to application JSON.
>
> **[2:38](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=158)** This is very important for our post requests.
>
> **[2:42](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=162)** So we'll click on that text and we'll choose JSON instead.
>
> **[2:46](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=166)** And now you can see that the values are the correct colors.
>
> **[2:52](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=172)** Let's save our request.
>
> **[2:55](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=175)** And now let's click send and see if our new contact has been added.
>
> **[3:02](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=182)** And in the response we get an echo of the contact we were adding along with a new ID for the contact.
>
> **[3:10](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=190)** And we also get in this status window here a 201 created response, which means that our new resource was created in the database.
>
> **[3:21](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=201)** Now let's do a get request to check to make sure that our new contact was added.
>
> **[3:27](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=207)** So we're going to copy the contact ID from our newly added contact, remembering that your contact ID will be different from mine.
>
> **[3:37](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=217)** And let's go over to the get contact request and we will replace that ID that we were using before with the ID of our new contact.
>
> **[3:49](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=229)** And let's send that and we'll see if our new contact is returned.
>
> **[3:54](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=234)** And our new contact was returned.
>
> **[3:57](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=237)** In the next lesson, we'll learn how to do two more requests: put requests and delete requests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), return. (1), delete (1)
> **Env Vars:** url (3), api (2), json (2), http (1)
> **UI Navigation:** click on (3), go to (1), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **Documentation:** the documentation (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Creating PUT and DELETE requests
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=0)** - [Instructor] Now that our get and post requests are working, let's look at setting up a put request and a delete request.
>
> **[0:08](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=8)** A put request updates the data for an existing contact.
>
> **[0:13](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=13)** Before we create a new put request let's create a new contact with our add contact request.
>
> **[0:19](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=19)** So let's open up the contact list collection and the basic endpoint tests folder.
>
> **[0:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=25)** And we will select the add contact request.
>
> **[0:29](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=29)** And now we will click the send button and we can see that our contact has been added.
>
> **[0:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=35)** So now let's do a get request to verify that our contact has really been added.
>
> **[0:41](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=41)** So let's copy the ID that we got in the response of the request.
>
> **[0:47](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=47)** And now let's go to our get contact request.
>
> **[0:52](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=52)** And we will replace the existing contact ID in this URL with the new ID that we just copied.
>
> **[1:01](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=61)** Let's save that request.
>
> **[1:03](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=63)** And now let's click send.
>
> **[1:06](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=66)** There's the contact that we added.
>
> **[1:09](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=69)** So now let's create the put request.
>
> **[1:13](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=73)** So we are going to copy the add contact request.
>
> **[1:17](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=77)** So we're going to click on the three dots.
>
> **[1:19](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=79)** Next to add contact.
>
> **[1:21](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=81)** We're going to choose duplicate.
>
> **[1:24](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=84)** We're going to give this request a new name.
>
> **[1:27](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=87)** So we'll click rename and we'll say Update contact, and then click return.
>
> **[1:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=95)** Now we will want to change the HTTP verb for this request because this is a put request, not a post request.
>
> **[1:43](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=103)** We are updating an existing contact and then in the URL at the end of contact we're going to put a slash and we're going to paste in that new contact ID for the contact that we just created.
>
> **[1:58](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=118)** Now let's go to the body of the request and we're going to make some changes so that we can see when we do an update that we've really made changes.
>
> **[2:07](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=127)** So we're going to change the first name and the last name.
>
> **[2:12](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=132)** We'll change the birth date.
>
> **[2:18](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=138)** You can change the other values if you want to, but in the interest of time, we're going to just make these updates.
>
> **[2:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=145)** So let's click save.
>
> **[2:27](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=147)** And now let's click the send button to update our contact.
>
> **[2:33](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=153)** And we can see in the response that our contact was updated.
>
> **[2:36](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=156)** We've got a new name and a new birthdate, and we can also see that we got a 200 Okay response.
>
> **[2:44](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=164)** So now let's do a get request again and verify that the contact we just updated was really saved to the database.
>
> **[2:52](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=172)** So click on the get contact request and then click the send button and we can see our changes right here.
>
> **[3:01](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=181)** Finally, let's create a delete request.
>
> **[3:04](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=184)** A delete request, as you would expect deletes a contact from the database.
>
> **[3:10](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=190)** So let's duplicate our get contact request.
>
> **[3:13](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=193)** So we will click on get contact on the three dots next to the name we'll choose Duplicate.
>
> **[3:20](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=200)** Now we'll rename that new request and we will say delete contact and click return.
>
> **[3:29](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=209)** And now let's change the HTTP verb because now we are deleting the contact and we can keep the ID here the same as it was before.
>
> **[3:41](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=221)** So let's save our request.
>
> **[3:44](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=224)** And now let's click send and we can see in the response that the contact was deleted and we got a 200 Okay.
>
> **[3:54](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=234)** Now let's run our get contact request one more time to see if the contact was really deleted and we could tell that it was deleted because we got a 404 not found in this status response.
>
> **[4:10](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=250)** We now have six saved requests.
>
> **[4:13](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=253)** In our basic endpoint tests folder, there's a login request and then there's one request for each endpoint type.
>
> **[4:20](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=260)** And each request should be successful but we don't want to test only successful conditions.
>
> **[4:26](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=266)** Next, we'll make some unsuccessful requests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), delete (4), return. (2), finally, (1), type. (1)
> **UI Navigation:** click on (3), go to (2), select the (1)
> **Env Vars:** url (2), http (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating negative requests: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=0)** - [Instructor] When requests result in a positive response, we get a 200 level response code because our requests were formed correctly.
>
> **[0:08](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=8)** But it's also important to be able to test what happens when a request is not formed correctly, to make sure that the API response appropriately.
>
> **[0:18](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=18)** Let's look at how to create requests that can be used to test five different negative scenarios.
>
> **[0:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=25)** A request is sent with a missing authentication token.
>
> **[0:30](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=30)** A record is not found.
>
> **[0:33](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=33)** A request is sent with missing required information.
>
> **[0:37](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=37)** A value is sent with too many characters.
>
> **[0:41](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=41)** A value is sent that is not in the correct format.
>
> **[0:45](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=45)** First, we'll begin with a security test.
>
> **[0:49](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=49)** We learned in the movie how JSON web tokens work that we need to pass in a token to make sure that the user has permission to use the API.
>
> **[0:59](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=59)** So let's make our first negative request one, where we make a request that is missing the authentication token.
>
> **[1:06](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=66)** We are going to be saving our requests in the Negative Tests folder.
>
> **[1:11](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=71)** So in the left pane, open up the Contact List collection, and then open up the Negative Tests folder.
>
> **[1:18](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=78)** Since we're going to be copying requests from the Basic Endpoint Tests folder, let's open that folder as well.
>
> **[1:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=85)** So we are going to duplicate the Get Contact List request.
>
> **[1:30](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=90)** So click on the three dots next to that request, and we'll choose Duplicate.
>
> **[1:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=95)** It's made a copy.
>
> **[1:36](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=96)** Let's drag that copy down into the Negative Tests folder.
>
> **[1:41](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=101)** Now let's rename that request.
>
> **[1:45](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=105)** We will call it Get Contact List Unauthorized and click Return.
>
> **[1:55](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=115)** So we still want it to be a GET request because we're trying to get the contact list, so we don't need to make any changes to the HTTP verb.
>
> **[2:05](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=125)** We also don't need to make any changes to the URL because this is the correct URL to get the contact list.
>
> **[2:12](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=132)** But we are going to make a change in the Auth tab.
>
> **[2:15](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=135)** So click on the Auth tab.
>
> **[2:18](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=138)** And we can see that we have our token here.
>
> **[2:21](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=141)** We're just going to go ahead and delete that token.
>
> **[2:24](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=144)** And let's click Save.
>
> **[2:26](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=146)** And let's see what happens when we send that request.
>
> **[2:31](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=151)** Okay, we can see that we get an error message that says, "Please Authenticate," and a 401 Unauthorized response.
>
> **[2:40](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=160)** We can generate a 401 response in any of our requests by simply removing the authentication token or using an invalid token.
>
> **[2:50](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=170)** Now let's create a request that will result in a Not Found response.
>
> **[2:55](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=175)** So we're going to duplicate the Get Contact request.
>
> **[2:59](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=179)** So click on that request, click on the three dots and choose Duplicate.
>
> **[3:05](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=185)** And then take that new request that copied request and put it in the Negative Tests folder.
>
> **[3:11](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=191)** And we'll click on the three dots and rename it.
>
> **[3:14](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=194)** We're going to say Get Contact - Not Found, and click Return.
>
> **[3:21](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=201)** So our HTTP verb is still going to be the same.
>
> **[3:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=205)** It's going to be GET because we're getting an individual contact.
>
> **[3:29](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=209)** But we need to make a change to the URL.
>
> **[3:32](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=212)** We're going to paste in a contact ID that doesn't exist in our system.
>
> **[3:38](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=218)** So let's just paste that in.
>
> **[3:43](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=223)** And now we will save.
>
> **[3:47](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=227)** And let's run the request and see what we get in response.
>
> **[3:52](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=232)** We get a 404 Not Found response.
>
> **[3:55](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=235)** So that means that the contact that we were looking for does not exist.
>
> **[4:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=240)** We could also generate a Not Found response by sending a PUT or DELETE request with a record that doesn't exist.
>
> **[4:08](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=248)** We'll cover the next three negative requests in the next movie.
>
> **[4:12](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=252)** To practice what you've learned so far, see if you can create another Unauthorized request, it should return a 401, and another Not Found request, it should return a 404.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), return. (2), delete (2), pass (1)
> **Env Vars:** url (3), api (2), http (2), json (1), put (1)
> **CLI Commands:** make (8)
> **UI Navigation:** click on (5)
> **API Endpoints:** get  (1), get
 (1), put  (1), delete  (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Creating negative requests: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=0)** - [Instructor] In the previous movie, we started learning about negative requests.
>
> **[0:04](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=4)** We learned how to create a request with a missing authentication token and how to create a request for a record that is not found.
>
> **[0:13](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=13)** Now we'll learn three more types of negative requests.
>
> **[0:17](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=17)** A request is sent with missing required information, a value is sent with too many characters, and a value is sent that is not in the correct format.
>
> **[0:29](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=29)** First, we'll create a post request that is missing a required field.
>
> **[0:34](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=34)** In our contact list API, both the first name and the last name are required fields.
>
> **[0:39](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=39)** So we want to make sure that when we do a post that's missing one of those fields, we get an appropriate error response.
>
> **[0:47](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=47)** So let's open up our contact list collection and our two folders.
>
> **[0:52](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=52)** We are going to duplicate the add contact request.
>
> **[0:56](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=56)** So click on that.
>
> **[0:58](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=58)** Click on the three dots, choose duplicate.
>
> **[1:01](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=61)** Let's take that add contact, copy and we will drag it into the negative tests.
>
> **[1:06](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=66)** Now let's rename it.
>
> **[1:09](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=69)** We'll name it, add contact missing required field, and click return.
>
> **[1:17](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=77)** Okay, now let's take a look at our request, so we can see that it's already set to post, which is what we want because we are adding a contact.
>
> **[1:26](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=86)** The URL is also correct.
>
> **[1:29](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=89)** We don't need to specify a contact ID because we're adding in a new contact, but we do need to make a change to the body of the request.
>
> **[1:38](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=98)** So let's see what happens if we change the first name so that it is just an empty string.
>
> **[1:46](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=106)** So you should see just the two quote marks with nothing in between.
>
> **[1:50](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=110)** So we'll save our request and now we will click send, and we see that we get a 400 bad request in response.
>
> **[2:01](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=121)** And we can also see the error message, first name is required.
>
> **[2:08](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=128)** We could also generate a missing required field response by doing a put request to update an existing contact.
>
> **[2:15](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=135)** Now let's create a post request with a field value that has too many characters.
>
> **[2:21](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=141)** In the contact list API, the first and last name fields can't have more than 20 characters.
>
> **[2:27](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=147)** So we'll do a request that has a last name field with 21 characters to see if we get the appropriate error response.
>
> **[2:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=155)** So once again, we are going to duplicate that add contact request.
>
> **[2:42](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=162)** Now we'll drag that new copy into the negative tests.
>
> **[2:47](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=167)** We will rename it, this time, we'll name it, add contact, last name too long, and click return.
>
> **[2:58](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=178)** Okay, once again, let's look at our request.
>
> **[3:01](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=181)** We have the correct http verb because this is an ad contact request.
>
> **[3:06](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=186)** We have the correct URL, but we want to make a change to the body.
>
> **[3:11](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=191)** So we're going to change the last name in the body to a name with 21 characters.
>
> **[3:22](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=202)** So we'll just paste that right in there.
>
> **[3:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=205)** And now let's save our request, and we will send our request, and we can see once again that we got a 400 bad request and we got an error.
>
> **[3:36](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=216)** It says, last name is longer than the maximum allowed length of 20.
>
> **[3:43](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=223)** Another way we could generate a maximum allowed length response would be by doing a put request to update an existing contact.
>
> **[3:52](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=232)** Finally, let's create a request that is sending a value that is in an incorrect format.
>
> **[3:58](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=238)** The value we add to the email field needs to be in a valid email format.
>
> **[4:03](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=243)** We'll run a request where the email is not in a valid format and see if we get an appropriate response.
>
> **[4:10](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=250)** This time, let's duplicate the update contact request.
>
> **[4:14](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=254)** So click on update contact and choose duplicate.
>
> **[4:18](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=258)** We're going to drag that down into our negative tests folder, and let's rename it.
>
> **[4:25](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=265)** We'll rename it, update contact, invalid email, and click return.
>
> **[4:33](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=273)** Now, when we are updating the contact, we need to make sure that we're updating a contact that actually exists.
>
> **[4:40](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=280)** The last time we worked with this contact ID, we deleted it.
>
> **[4:45](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=285)** So we need to create a new contact to update.
>
> **[4:48](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=288)** So let's go over to our ad contact request and our basic endpoint test folder, and let's run that quickly to create a new contact.
>
> **[4:57](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=297)** We will copy that contact ID.
>
> **[5:01](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=301)** We'll go back to update contact, and we will replace that contact ID with the one that we just copied.
>
> **[5:11](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=311)** So now we have a contact that would be valid to be updated.
>
> **[5:15](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=315)** So we already have our correct HTTP verb, put, because we're updating a contact.
>
> **[5:22](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=322)** And now our URL is correct because we're updating a contact that already exists.
>
> **[5:27](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=327)** So now let's go into the body of our request and we will make our email invalid.
>
> **[5:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=335)** So we've just deleted the .com, that will make the email invalid.
>
> **[5:39](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=339)** Let's click save and let's click send, and we can see that once again, we get a 400 bad request in response.
>
> **[5:49](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=349)** And we can also see that we get a message that tells us that the email is invalid.
>
> **[5:57](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=357)** We could generate a similar failure by sending in a bad email address with a post request.
>
> **[6:03](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=363)** We now have five different requests that will return a 400 level error.
>
> **[6:08](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=368)** To practice what you've learned, see if you can create some more post or put requests that will result in a 400 error.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), return. (3), finally, (1)
> **CLI Commands:** make (6)
> **Env Vars:** url (3), api (2), http (1)
> **UI Navigation:** click on (3)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Using environment variables
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=0)** - [Instructor] In the previous five movies, we created 11 different saved requests that we can use for testing our API.
>
> **[0:08](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=8)** But if we ever decide we want to change the name we're using to add a contact, we'll have to change it in every request where it's being used.
>
> **[0:16](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=16)** We can save a lot of time by using variables instead of hard-coded values.
>
> **[0:22](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=22)** In this video, we'll learn how to create an environment, which is a group of variables, and add variables to the environment.
>
> **[0:31](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=31)** So we are going to click on the environment's tab in the left section of the window and then we're going to click Create Environment.
>
> **[0:41](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=41)** We're going to give our new environment a name let's call it, contact list.
>
> **[0:46](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=46)** And then we will click return and we can see that our new environment has been saved.
>
> **[0:52](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=52)** Now let's take a look at the variable table.
>
> **[0:55](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=55)** We can see that there is a space for the name of the variable and then an initial value, and then the current value.
>
> **[1:04](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=64)** The initial value is what's saved in the environment file.
>
> **[1:08](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=68)** The current value is used when you want to temporarily change a variable.
>
> **[1:14](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=74)** Let's add in some new variables.
>
> **[1:16](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=76)** So first we will add in first name and we'll give an initial value of Amy, and then we will add in last name and give an initial value of Smith.
>
> **[1:31](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=91)** And then we'll click save.
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=93)** And you can see that the current value was also populated when we typed in Amy Smith.
>
> **[1:38](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=98)** And that's okay.
>
> **[1:40](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=100)** In order to use an environment, we need to select it.
>
> **[1:44](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=104)** So we click on the environment dropdown in the top right corner, and we choose contact list.
>
> **[1:51](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=111)** Now let's use our new variables.
>
> **[1:54](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=114)** We'll return to the collections tab and we will open up the contact list collection and the basic endpoint tests folder.
>
> **[2:03](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=123)** Let's go to the add contact request.
>
> **[2:07](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=127)** And in the body of the request, we'll replace the first name with two curly braces, and the first name variable.
>
> **[2:19](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=139)** And then we'll replace the last name with two curly braces and the last name variable.
>
> **[2:26](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=146)** Postman variables are case sensitive so be sure to use the same case sensitivity as you used when you created the variables.
>
> **[2:36](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=156)** When Postman sees the two curly braces it knows to use the variable value found in the environment.
>
> **[2:43](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=163)** Let's test it out.
>
> **[2:44](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=164)** So we will click save and then we'll send, and we can see that the new contact was added with the variables.
>
> **[2:55](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=175)** Let's see what happens when we change our variables.
>
> **[2:59](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=179)** So we're going to click on the eyeball button in the very top right corner.
>
> **[3:03](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=183)** This is also known as the environment quick look, and then we will click the edit and that will open up our variables.
>
> **[3:12](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=192)** We will change the current value of our first name to Carol and our last name to Jones.
>
> **[3:21](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=201)** And now let's save.
>
> **[3:23](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=203)** And then we will return to our ad contact request.
>
> **[3:27](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=207)** And let's click send.
>
> **[3:30](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=210)** And you can see that a new contact was added with the new variable values.
>
> **[3:35](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=215)** We now know how to add variable values to an environment, but what do we do when we don't know what the variable value is yet?
>
> **[3:43](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=223)** In the next movie we'll learn how to save data that was returned in a response as a variable.
>
> **[3:49](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=229)** This will be really helpful when we are working with contact IDs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9)
> **UI Navigation:** click on (3), dropdown (1), go to (1)
> **Definitions:** is a  (2), known as (1)
> **Tools:** postman (2)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Saving response data as a variable
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=0)** - [Instructor] In the previous movie, we learned how to create environment variables and use them in our requests.
>
> **[0:07](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=7)** But what if we don't know what the value of our variable is yet?
>
> **[0:11](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=11)** We can use JavaScript in the Tests section of our request to save a value that was returned from the request.
>
> **[0:19](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=19)** In this movie, we're going to learn how to save the contactId that's returned from our Add Contact request as a variable and then we will use that variable in subsequent requests.
>
> **[0:32](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=32)** We'll also learn how to save our authentication token.
>
> **[0:37](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=37)** So let's open up our contact list collection and our basic endpoint tests folder.
>
> **[0:43](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=43)** We are going to choose the Add Contact request.
>
> **[0:46](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=46)** And now, let's click on the Tests tab underneath the URL.
>
> **[0:51](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=51)** And you can see that when we click on the Tests tab, we get some code snippets that appear on the right side of the window.
>
> **[1:00](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=60)** These snippets can be used to create JavaScript commands.
>
> **[1:04](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=64)** They are really helpful for those of us who often forget code syntax.
>
> **[1:08](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=68)** We are looking for the snippet that is called set an environment variable.
>
> **[1:13](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=73)** Here it is, and we're going to click on it.
>
> **[1:16](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=76)** Notice that a code snippet has been added to the Tests window.
>
> **[1:20](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=80)** There are two values being passed into the pm environment set command.
>
> **[1:26](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=86)** The first is the variable key which is the name of the variable.
>
> **[1:30](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=90)** We are going to rename this to contactId.
>
> **[1:34](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=94)** Before we set the variable value, we need to parse the response data we're going to get as JSON.
>
> **[1:41](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=101)** So put your cursor at the beginning of line one and then click Return.
>
> **[1:46](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=106)** So we've added in a new line and now, we're going to type in var jsonData equals pm.response.json and then an open and closed parentheses and then a semicolon.
>
> **[2:06](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=126)** This is creating a new local variable called jsonData and it's going to take the postman response we get when we add a new contact, parse that data as JSON and save it to the jsonData variable.
>
> **[2:22](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=142)** Now that we've done that, we can refer to jsonData in the next line.
>
> **[2:27](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=147)** So we're going to replace variable value with jsonData._id.
>
> **[2:36](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=156)** Notice that this variable value does not have quote marks.
>
> **[2:41](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=161)** That is because we're referring to a specific value that is being parsed in the jsonData.
>
> **[2:49](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=169)** You may be wondering whether we can save this contactId variable to the environment when we haven't added it to our environment file.
>
> **[2:57](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=177)** Postman will add it for us.
>
> **[3:00](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=180)** So let's click Save, and then we will click Send and we can see that a new contact has been added and we can see that _id.
>
> **[3:11](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=191)** That's why we used the underscore here when we said jsonData._id.
>
> **[3:17](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=197)** Let's see if the contactId was actually saved to our environment file.
>
> **[3:22](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=202)** So we'll click on the eyeball button, also known as the environment quick look, and we can see we have a new contactId variable and the Id was saved as the current value.
>
> **[3:35](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=215)** Now we can use this variable in other requests.
>
> **[3:39](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=219)** So let's go to the Get Contact request and we'll replace this hard-coded contactId here with the two curly braces and contactId.
>
> **[3:54](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=234)** Notice that when we typed that in that the contactId turned orange.
>
> **[3:58](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=238)** This is because the variable has a value.
>
> **[4:02](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=242)** If I were to change the variable name to something that doesn't have a value, it will turn red.
>
> **[4:07](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=247)** So if, for example, I change the uppercase i to a lowercase i, you can see that now the variable is red because it's telling us that it doesn't have a value.
>
> **[4:19](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=259)** So let's click Back with a capital i.
>
> **[4:22](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=262)** Now we can see that our variable has a value again, so when we run this request, Postman will replace the variable in the URL with the value from the environment file.
>
> **[4:34](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=274)** So let's click Save and then we'll send our request and we can see that the new contact we added has been returned to us.
>
> **[4:44](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=284)** Now let's see how we can use a variable to save our authentication token.
>
> **[4:49](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=289)** Let's go back to our login request and we're going to go to the Tests tab again, and we're going to choose that set an environment variable snippet.
>
> **[5:02](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=302)** We're going to name our variable token.
>
> **[5:08](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=308)** Now we need to add in that jsonData parsing line.
>
> **[5:12](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=312)** So at the beginning of line one, put your cursor there, click Return, and then we'll type in var jsonData equals pm.response.json and then open and close parentheses,
>
> **[5:31](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=331)** and then semicolon.
>
> **[5:35](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=335)** And then, here, we will put in jsonData.token.
>
> **[5:43](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=343)** Let's save this and we'll run the request.
>
> **[5:50](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=350)** And if we look in the environment quick look, we can see that our token has been added for us.
>
> **[5:58](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=358)** So now, let's add that token to one of our requests.
>
> **[6:02](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=362)** Let's add it to the Get Contact List request.
>
> **[6:06](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=366)** So here in the Authorization tab, instead of having this token here, we're going to delete this token and we're going to use those two curly braces and type in token.
>
> **[6:18](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=378)** And then we'll save.
>
> **[6:19](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=379)** Let's run the request and see if it uses that variable token.
>
> **[6:24](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=384)** And it does.
>
> **[6:26](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=386)** Now we know how to add variables and use them in our requests.
>
> **[6:30](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=390)** You may want to go through all the requests in your collection and change them to use the token variable.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), var (2), return. (1), if, (1), return, (1)
> **Code Identifiers:** jsondata (10), contactid (8)
> **UI Navigation:** click on (4), go to (2)
> **Env Vars:** url (2), json (2)
> **Tools:** postman (3)
> **File Paths:** pm.response.json (2)
> **Cross-References:** in the next (1), go back to (1)
> **Definitions:** is called (1), known as (1)

#### Challenge: Add variables to a request
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=5)** - [Instructor] In the last two movies, we learned how to create variables either by typing them directly into the environment or by setting them through JavaScript.
>
> **[0:15](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=15)** We also learned how to use variables by putting them in the URL or the body of a request.
>
> **[0:22](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=22)** Now, let's test your skills with a two-part challenge.
>
> **[0:26](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=26)** For the first part of the challenge, look at the Basic Requests folder and see if you can find two requests that could use the {{contactId}} variable value in the URL.
>
> **[0:37](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=37)** We've already got this value in our Get Contact request.
>
> **[0:41](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=41)** Where else could it be used?
>
> **[0:43](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=43)** If you need a hint, take a look at the documentation.
>
> **[0:47](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=47)** For the second part of the challenge, look at the Add Contact request and think about what other values you might like to use as variables.
>
> **[0:56](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=56)** Add those variables to your environment file, and then put those variables in the body of the Add Contact request.
>
> **[1:03](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=63)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Env Vars:** url (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** contactid (1)
> **Cross-References:** in the last (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Add variables to a request
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=0)** - [Instructor] How did you do?
>
> **[0:06](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=6)** Were you able to think of some new places to add variables?
>
> **[0:10](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=10)** Let's take a look at the first part of the challenge.
>
> **[0:13](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=13)** I asked you to think of two requests in the basic requests folder where you could add the contact ID variable to the URL.
>
> **[0:22](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=22)** We already had that variable in the get contact request.
>
> **[0:26](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=26)** We can also add it to the update contact request and the delete contact request.
>
> **[0:33](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=33)** So let's take a look at the update contact request.
>
> **[0:37](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=37)** I've already added in the contact ID so we can click send and our contact will be updated.
>
> **[0:46](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=46)** Then let's take a look at the delete contact request.
>
> **[0:49](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=49)** I've already added the contact ID variable there and I can click and delete the contact.
>
> **[0:56](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=56)** Remember that if you run the delete contact request you will delete the contact with that saved ID.
>
> **[1:03](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=63)** So you'll need to add a new contact and use that new saved ID for other get and put requests.
>
> **[1:10](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=70)** For the second part of the challenge, I asked you to think about what other variables you could use in the add contact request.
>
> **[1:17](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=77)** There are lots of options here.
>
> **[1:19](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=79)** Here are all the possible variables.
>
> **[1:23](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=83)** So if we take a look at our environment variables by clicking on the environment quick look button and then clicking edit, we can see that I've added in all of the possible variables that we can use in our add contact request.
>
> **[1:39](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=99)** Then if we go to our add contact request you could also see that I added in those variable names to every field in the request and we can go ahead and send that request and we can see that the new contact has been created with those variable values.
>
> **[1:57](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=117)** Congratulations, in this chapter you learned how to create collections and folders how to create positive and negative requests how to create environments and how to add and use variables.
>
> **[2:11](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=131)** In the next chapter we'll learn how to turn our requests into actual tests.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5), let (3)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Easy Postman Assertions

#### Status type assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=0)** - [Instructor] Now it's time to turn our Postman requests into actual tests.
>
> **[0:04](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=4)** We'll do this by adding assertion scripts to our requests.
>
> **[0:09](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=9)** The first type of assertion we'll add is a status type assertion, which validates that the status code we receive as a response to a request is the one we are expecting.
>
> **[0:20](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=20)** Here are some typical status type assertions.
>
> **[0:23](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=23)** 200 means the request was completed as expected.
>
> **[0:28](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=28)** 201 means that a new resource was created, in our case that means a new contact was added to the database.
>
> **[0:36](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=36)** 401 means the user is not authenticated.
>
> **[0:40](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=40)** We saw that when we made a request without a token.
>
> **[0:44](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=44)** And 404 means that the resource was not found, in our case that means the contact was not found in the database.
>
> **[0:53](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=53)** Let's add a status type assertion to our get contact list request.
>
> **[0:58](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=58)** So we'll open up our collection and our basic endpoint tests folder.
>
> **[1:03](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=63)** Now let's click on get contact list and then we will click on the tests tab underneath the URL and we see those snippets appear in the right side of the screen.
>
> **[1:16](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=76)** We're going to scroll down through the snippets to find the one that says status code, code is 200.
>
> **[1:26](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=86)** There it is.
>
> **[1:27](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=87)** We'll click on it, and you can see that code has been added for us to our test window.
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=93)** This is JavaScript and it is using Chai syntax to assert.
>
> **[1:39](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=99)** We're going to click save, and now we'll click send, and we will see our test passed.
>
> **[1:48](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=108)** So our test said status code is 200, that's the name of the test.
>
> **[1:54](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=114)** And the response we are looking for is a 200 response.
>
> **[1:58](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=118)** And we can see in our test tab results that one of one test passed.
>
> **[2:03](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=123)** When we click on that, we can see a pass icon and here's the name of the test that passed.
>
> **[2:10](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=130)** Now let's add a status type assertion to a negative request.
>
> **[2:14](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=134)** So let's open up our negative tests folder, and we will find that get contact not found request.
>
> **[2:23](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=143)** And we'll click on the test tab, looks like it's already there.
>
> **[2:27](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=147)** And we're going to scroll down in the snippets again and look for that status code, code is 200.
>
> **[2:33](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=153)** And we've clicked on it so the test has been added to the window.
>
> **[2:37](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=157)** Now in this request, we are not expecting the status code to be 200.
>
> **[2:42](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=162)** We're expecting a 404, but to see what a failed test looks like, let's click the send button.
>
> **[2:50](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=170)** Okay, and we can see that zero of one test passed.
>
> **[2:54](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=174)** Let's click on that and we can see the fail icon and we can can see what the assertion error is.
>
> **[3:01](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=181)** We expected to have a response of status code 200 but we got 404 instead.
>
> **[3:08](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=188)** So that is actually what we were expecting.
>
> **[3:10](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=190)** We were actually expecting a 404 because this is a negative test.
>
> **[3:14](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=194)** So what we'll do is we'll change the test name to be status code is 404, and now we'll change the actual status code in the assertion to be 404.
>
> **[3:26](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=206)** Let's save, and we will send, and now we can see that our test passed.
>
> **[3:33](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=213)** Status type assertions are the simplest type of assertion.
>
> **[3:37](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=217)** You can use them for any type of status code.
>
> **[3:40](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=220)** In this movie, we added assertions to the requests that return 200 and 404 responses.
>
> **[3:47](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=227)** You could also assert on the 201 code that we get in response to a post request, adding a new contact, or on the 401 code that we get in response when we make a request without an authentication token.
>
> **[4:03](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=243)** In the next movie, we'll take a look at body type assertions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), assert (2), pass (1)
> **UI Navigation:** click on (6), scroll down (2)
> **Definitions:** is a  (3), means that (2)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### Body assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=0)** - [Instructor] The next assertion we'll learn about is the body assertion.
>
> **[0:04](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=4)** This assertion verifies that the body of the response contains the text that we were expecting.
>
> **[0:10](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=10)** Let's create an assertion for our get contact request.
>
> **[0:15](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=15)** So we'll open up our collection and our basic endpoint tests folder.
>
> **[0:19](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=19)** We're going to choose the get contact request.
>
> **[0:23](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=23)** Then we're going to go over and select the tests tab and then we'll see those snippets over on the right.
>
> **[0:30](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=30)** We're going to scroll down to find the snippet that says response body contains string, and there it is.
>
> **[0:38](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=38)** So we'll click on that and we can see that our assertion has been added to the tests window.
>
> **[0:44](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=44)** Now this section right here is the title of the test.
>
> **[0:48](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=48)** We're going to change this title to, "Correct contact is returned" and then we're going to change the string that we are expecting from string you want to search to the actual string we want to look for in our assertion.
>
> **[1:07](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=67)** How can we validate that we got the correct contact back?
>
> **[1:10](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=70)** In the real world, contacts generally each have their own email address.
>
> **[1:15](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=75)** So let's assert that the correct email address is returned.
>
> **[1:19](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=79)** So we'll type in the email address of our contact and we'll click save.
>
> **[1:26](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=86)** And now we'll click send.
>
> **[1:29](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=89)** And it looks like our test passed.
>
> **[1:32](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=92)** The correct contact was returned.
>
> **[1:34](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=94)** Helpful hint: if you aren't getting a contact back when you run your request you may be requesting a contact that you deleted.
>
> **[1:43](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=103)** Try doing a post to add a new contact.
>
> **[1:47](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=107)** Your new contact ID will be automatically saved to the environment and then you can run your get contact request successfully.
>
> **[1:56](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=116)** Now let's create an assertion for a negative request.
>
> **[1:59](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=119)** So let's open up our negative tests folder and let's find the add contact missing required field request.
>
> **[2:08](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=128)** We'll click on the tests tab and then in the snippets we're going to look for that response body contains string.
>
> **[2:16](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=136)** There it is.
>
> **[2:18](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=138)** We'll click it to add it to the test window.
>
> **[2:21](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=141)** We're going to rename our test.
>
> **[2:23](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=143)** We're going to call it missing first name error message is returned.
>
> **[2:32](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=152)** And now we're going to change the string you want to search to be the actual error message that we are expecting.
>
> **[2:39](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=159)** Now we will use a backslash in here to put in first name because that's how it gets returned in the response and then required.
>
> **[2:52](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=172)** So it should look like this.
>
> **[2:54](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=174)** So let's click save.
>
> **[2:56](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=176)** And now let's click send.
>
> **[2:59](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=179)** And we can see that our test passed because we were asserting on this first name is required message and we can see that here in the response.
>
> **[3:08](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=188)** Remember that Postman is case sensitive.
>
> **[3:12](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=192)** If your test failed, check the casing of your string.
>
> **[3:16](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=196)** When doing body assertions, you can match the entire body or just a portion of the body.
>
> **[3:22](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=202)** The snippet called response body contains string is the one we've been using because we are only asserting on a portion of the response.
>
> **[3:31](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=211)** If we want to assert on the entire response, we'd use the response body is equal to a string command instead of to include that assertion uses to have.
>
> **[3:44](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=224)** When should we assert on the whole body of the response and when just a portion?
>
> **[3:48](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=228)** It really depends on the request.
>
> **[3:50](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=230)** I often use portion assertions when I'm asserting on an error message.
>
> **[3:54](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=234)** Sometimes the format of an error message can change so I usually assert on a small portion of the error to make it less likely that changes to the error response will break my existing tests.
>
> **[4:06](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=246)** But if a response body is very short, just a few words, I'll usually assert on the whole body.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), assert (5), this. (1)
> **UI Navigation:** click on (2), select the (1), scroll down (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### Header and response time assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=0)** - [Instructor] The next two assertions we'll be adding to our requests can be helpful for security and performance testing.
>
> **[0:06](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=6)** First, we'll add an assertion that will check the header values in our response.
>
> **[0:11](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=11)** Response headers are information passed with an API response that includes additional information about the response, such as the format of the response or any security controls.
>
> **[0:24](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=24)** The assertion we'll be adding will verify that we are getting JSON back in the response and not some other content type.
>
> **[0:31](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=31)** So let's choose the Get Contact List request.
>
> **[0:35](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=35)** So we'll open up our Collection and our Basic Endpoint Tests folder, and then click on Get Contact List.
>
> **[0:43](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=43)** Now, let's run this request just to see what response headers look like.
>
> **[0:47](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=47)** So click the Send button.
>
> **[0:49](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=49)** And down in the Response pane, let's click on the Headers tab.
>
> **[0:53](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=53)** And we can see all of the different headers that come back with the response.
>
> **[0:58](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=58)** The one that we are looking at is our Content-Type header.
>
> **[1:01](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=61)** And we can see that that is set to application slash JSON car set UTF eight.
>
> **[1:07](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=67)** So we're going to assert that that is the content type we get back in the response.
>
> **[1:13](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=73)** Now you can see here in the test tab that we already have one test here.
>
> **[1:18](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=78)** When we add our snippet, we want to make sure that the snippet is added on a new line.
>
> **[1:22](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=82)** So to do that, click at the end of the existing test and click return.
>
> **[1:27](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=87)** So the cursor is on line four.
>
> **[1:30](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=90)** And now let's look for our snippet.
>
> **[1:32](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=92)** We are looking for the snippet called response headers content type header check.
>
> **[1:40](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=100)** And here it is.
>
> **[1:41](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=101)** So let's click on that and so we can see the test name is content type is present.
>
> **[1:47](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=107)** We're going to change this to read content type is application slash JSON.
>
> **[1:54](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=114)** And right now we are asserting that the response has a header that says content type but we also want to assert what the header is what the value of content type is.
>
> **[2:05](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=125)** So we're going to put a comma right here and we're going to add in this optional value application slash JSON semicolon car set equals UTF dash eight.
>
> **[2:21](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=141)** Okay, so now let's save and we will run our request and we'll see if our new test passes.
>
> **[2:29](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=149)** We can see that we get two passing tests, and if we click on that test results tab, we can see our two tests.
>
> **[2:35](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=155)** The status code is 200, and the content type is application JSON Header assertions are good for verifying that specific security headers have been added to the response of a request.
>
> **[2:48](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=168)** We don't have any specific security headers in this API so we won't be adding any of those assertions here.
>
> **[2:54](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=174)** But an example of a security header would be the X dash XSS header Which protects against cross-site scripting attacks.
>
> **[3:03](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=183)** Next, we'll add a response time assertion.
>
> **[3:06](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=186)** This assertion is helpful to make sure that responses are coming back within a reasonable time.
>
> **[3:12](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=192)** The response time is the time it takes for a request to reach the server and return a response because the response time assertion is so useful.
>
> **[3:22](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=202)** We're going to add it to all of our basic requests but instead of adding it to each individual request we're going to add it to the whole collection all at once.
>
> **[3:33](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=213)** So we're going to go to the contact list collection and click on the three dot menu and choose edit.
>
> **[3:40](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=220)** We'll see that the collection tab appears here in the center pane.
>
> **[3:44](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=224)** Now let's click on the test tab and we can see snippets just like we have on our regular requests.
>
> **[3:52](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=232)** We're going to be looking for the response time snippet.
>
> **[3:55](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=235)** So let's scroll down.
>
> **[3:58](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=238)** Here it is, response time is less than 200 milliseconds.
>
> **[4:02](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=242)** We'll click on that to add it to the test window.
>
> **[4:05](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=245)** Now we're going to make a change here.
>
> **[4:07](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=247)** I think that the response time coming back in less than 200 milliseconds is a little bit ambitious.
>
> **[4:13](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=253)** So we're going to change that to 3000 milliseconds instead, which is three seconds.
>
> **[4:19](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=259)** That should be very reasonable.
>
> **[4:21](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=261)** So now we'll change it right here too because this is the actual assertion right here.
>
> **[4:26](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=266)** And now we'll click save.
>
> **[4:28](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=268)** Where's the save icon?
>
> **[4:29](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=269)** Well, it's hiding behind this collection details paint here on the right.
>
> **[4:33](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=273)** So let's close that.
>
> **[4:34](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=274)** And now you can see the save button and we can click on that.
>
> **[4:38](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=278)** Now let's see the assertion in action.
>
> **[4:41](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=281)** So let's go to our add contact request and we will send the request and we can see that we had one test that passed.
>
> **[4:52](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=292)** Let's click on that.
>
> **[4:54](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=294)** And there it is.
>
> **[4:54](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=294)** Response time is less than 3000 milliseconds.
>
> **[4:58](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=298)** So now let's choose one of our negative tests.
>
> **[5:01](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=301)** How about add contact missing required field?
>
> **[5:05](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=305)** So let's click on that.
>
> **[5:07](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=307)** We've already got one test here.
>
> **[5:09](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=309)** Let's send the request and see what happens.
>
> **[5:13](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=313)** You can see that even though we only have one test attached to the request, we're actually getting two tests running.
>
> **[5:21](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=321)** When we click here, we can see that our response time request ran first.
>
> **[5:26](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=326)** That was our collection assertion and then our request assertion ran after that.
>
> **[5:33](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=333)** It's possible to add all types of assertions to the collection level.
>
> **[5:37](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=337)** It's also possible to add assertions to the folder level.
>
> **[5:40](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=340)** So if there was a specific type of assertion you wanted to run on every request in the basic endpoint test folder but not in the negative folder you could add it to the test section of the folder level.
>
> **[5:54](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=354)** What should you do when you are running a request that is coming back correctly but your test is failing?
>
> **[6:00](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=360)** In the next movie we'll learn how to use the Postman console to debug your tests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), assert (2), type. (1), return. (1)
> **UI Navigation:** click on (9), go to (2), scroll down (1)
> **Env Vars:** json (5), api (2), utf (2), xss (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (1), just like (1)
> **Cross-References:** in the next (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)

#### Debugging with the Postman console
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=0)** - [Guide] We are going to take a little break from learning about assertions in order to learn how to use the Postman Console.
>
> **[0:07](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=7)** Sometimes in our testing, we'll get test failures and it will be difficult to see why.
>
> **[0:13](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=13)** The Postman Console can be very helpful in debugging our test assertions.
>
> **[0:19](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=19)** I've added in a Status type assertion to my Add Contact request, but it's failing.
>
> **[0:26](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=26)** Let's see if you can figure out what's wrong.
>
> **[0:29](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=29)** So my test is going to assert that the status code that I get in response is a 201, which is an appropriate response for when a new contact is added to the database.
>
> **[0:40](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=40)** But if I send the request, we'll see that my test is failing.
>
> **[0:46](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=46)** So if I click on the Test tab, there's my passing test.
>
> **[0:50](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=50)** That's the one that is the response time is less than 3000 milliseconds.
>
> **[0:54](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=54)** But my second test failed.
>
> **[0:57](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=57)** It was expecting the response to be 201, but I got a 400 in response instead.
>
> **[1:04](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=64)** Let's see if we can figure out what's going on.
>
> **[1:07](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=67)** We're going to use the Postman Console to debug.
>
> **[1:10](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=70)** You can open the Postman Console.
>
> **[1:12](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=72)** Here in the very bottom of the screen, you'll see the Console button.
>
> **[1:18](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=78)** Click that, and the console will open.
>
> **[1:20](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=80)** So now, in the console, you can see all of the requests that have been made.
>
> **[1:25](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=85)** You can see the HTTP verb that was used, the URL that was used.
>
> **[1:30](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=90)** And if you open it up, you can see Request Headers, the Request Body, the Response Headers, and the Response Body.
>
> **[1:39](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=99)** So let's clear all of the logs that we have in here so far and we'll run the request again.
>
> **[1:47](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=107)** And now, we'll open it up, and we'll see if we can figure out what's going on.
>
> **[1:52](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=112)** So if we look in the response body, we can see that it's telling us that the first name is required.
>
> **[2:00](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=120)** Well, we have the first name, don't we?
>
> **[2:02](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=122)** We set a variable for firstName.
>
> **[2:04](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=124)** Well, let's look and see what's being sent in the Request Body.
>
> **[2:09](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=129)** The firstName's empty. What's going on there?
>
> **[2:12](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=132)** Well, let's take a look at our environment.
>
> **[2:15](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=135)** So let's go over to the eyeball button and we'll click there to open up our environment, and we can see our firstName has no value anymore.
>
> **[2:24](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=144)** It's empty.
>
> **[2:25](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=145)** So let's click on the Edit button, and we will add that firstName back in.
>
> **[2:34](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=154)** And we'll save.
>
> **[2:36](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=156)** Now, let's go back to our Add Contact request.
>
> **[2:39](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=159)** We'll click Send again.
>
> **[2:42](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=162)** And now, we can see that both of our tests are passing.
>
> **[2:46](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=166)** Whenever you have a situation where your requests aren't working as you expect them to or your assertions are failing, remember that the Postman Console is a great tool to help you debug.
>
> **[2:57](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=177)** Here are some things you can look for in the Postman Console.
>
> **[3:01](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=181)** Check that your HTTP verb is correct, check that the authentication token is being sent, check that the URL of the request is correct, and check that all variables have populated correctly in the request, and those variables could be in the URL or they could be in the body of the request.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), assert (1)
> **Tools:** postman (6)
> **Env Vars:** url (3), http (2)
> **Code Identifiers:** firstname (4)
> **UI Navigation:** click on (2), open the (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [guide] (1)

#### Challenge: Write assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980&t=5)** - [Instructor] In Chapter One, we learned how to create new requests in our collection, and in Chapter Two, we started learning how to add assertions to a request.
>
> **[0:15](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980&t=15)** Let's test your knowledge by having you add a request and an assertion on your own.
>
> **[0:21](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980&t=21)** Add a new POST request to the Negative Tests folder.
>
> **[0:25](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980&t=25)** This request should result in some type of validation error.
>
> **[0:30](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980&t=30)** Then add a Body-Type assertion to the request that will assert that the appropriate error message is returned.
>
> **[0:38](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980&t=38)** Have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), assert (1)
> **API Endpoints:** post  (1)
> **Env Vars:** post (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Write assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=0)** - [Instructor] How did you do?
>
> **[0:06](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=6)** Were you able to add a negative post request with a body type assertion?
>
> **[0:11](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=11)** Here's one way you could have done it.
>
> **[0:13](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=13)** You could create a post request with an invalid birthdate then you could add a body type assertion to the request that asserts that birthdate is invalid is part of the response body.
>
> **[0:26](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=26)** I've already created that invalid birthdate request in postman.
>
> **[0:31](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=31)** Let's take a look.
>
> **[0:33](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=33)** So you can see here with the birthdate that I've included February 29th, 1977 which is not a valid birthdate because there was no February 29th in 1977.
>
> **[0:46](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=46)** So then I added a test that asserts that the birthdate is invalid string is included in the response.
>
> **[0:57](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=57)** So let's run this test and see if it passes and it does.
>
> **[1:02](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=62)** Here are some other possible negative tests that you could have created.
>
> **[1:07](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=67)** A post request with an invalid email a post request with an invalid phone number a post request with a street name that is too long or a post request with an invalid postal code.
>
> **[1:22](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=82)** You could also add negative put requests to your folder.
>
> **[1:26](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=86)** Keep in mind though that your put request needs to use an existing contact, when we start to automate tests they'll run straight through from beginning to end and we are deleting the added contact at the end of the basic end point tests folder.
>
> **[1:43](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=103)** To test with negative put requests you'd need to create a new contact and save that contacts value as the contact ID.
>
> **[1:52](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=112)** So let's duplicate our add contact request and we will drag that new request into the negative tests folder at the very beginning.
>
> **[2:03](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=123)** Now let's rename it.
>
> **[2:05](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=125)** This is not going to be a negative test.
>
> **[2:08](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=128)** This is actually positive because we're adding a new contact.
>
> **[2:11](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=131)** The reason why we have it here is because it is a setup step.
>
> **[2:15](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=135)** So we will rename it to give it a setup step name.
>
> **[2:18](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=138)** So we will call it setup, add contact, and click return.
>
> **[2:25](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=145)** Okay, now, when we run this request we'll be adding a new contact and that new contacts ID will be saved and then we'll be able to run our negative tests such as this, put update contact invalid email request that we created before.
>
> **[2:44](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=164)** We'll need to make sure that we're using that contact ID variable.
>
> **[2:48](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=168)** So let's change that and save and now we can run that negative put request.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), return. (1), this, (1)
> **Prerequisites:** setup (3)
> **CLI Commands:** make (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Postman Assertions

#### JSON assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=0)** - [Instructor] In this video, we will learn how to write assertions for the JSON we receive as the response to a request.
>
> **[0:08](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=8)** JSON stands for JavaScript Object Notation.
>
> **[0:12](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=12)** API requests and responses are often in JSON format.
>
> **[0:17](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=17)** JSON assertions are really helpful because we can assert that the correct value for a specific field was returned.
>
> **[0:25](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=25)** We're going to be using environment variables in our assertion as well.
>
> **[0:30](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=30)** We're going to add another assertion to our Get Contact request.
>
> **[0:34](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=34)** So let's open our Basic Endpoint Tests folder and click on our Get Contact request.
>
> **[0:41](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=41)** We can see that we have one test here already.
>
> **[0:44](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=44)** This is a body-type assertion.
>
> **[0:47](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=47)** Now we're going to be adding in another test.
>
> **[0:50](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=50)** So put your cursor at the end of the line three, and we'll click Return.
>
> **[0:56](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=56)** And now we will find our snippet.
>
> **[0:58](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=58)** Our snippet is going to be called Response Body JSON Value Check.
>
> **[1:04](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=64)** There it is, let's click on that, and that's been added in.
>
> **[1:08](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=68)** Let's change the name of the test.
>
> **[1:11](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=71)** We're going to assert that the correct first name is returned.
>
> **[1:18](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=78)** Now let's take a look at the second line of this snippet.
>
> **[1:21](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=81)** Var jsonData = pm.response.json.
>
> **[1:26](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=86)** You may recognize this from when we learned how to save the contact ID as a variable.
>
> **[1:31](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=91)** This takes the body of the response and parses it into JSON format.
>
> **[1:36](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=96)** In our expect line, we are going to change this JSON data value to read jsonData.firstName, because that is the name of the field that we're going to assert on.
>
> **[1:50](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=110)** And then here we're going to expect it to equal the first name that we added with our contact, which in this case, is also located in our environment.
>
> **[2:03](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=123)** So we're going to say environment.firstname.
>
> **[2:09](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=129)** So with the full line of code, we are saying that we're expecting that the first name returned in our Get Contact response will match the first name variable in our environment, which is what we used to create our contact in our Add Contact request.
>
> **[2:25](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=145)** Okay, let's save this request and then we will send it, and let's check our tests.
>
> **[2:32](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=152)** We can see that our new test passed, correct first name is returned.
>
> **[2:37](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=157)** Now let's add a second assertion to the same request.
>
> **[2:42](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=162)** Let's copy the assertion we just added and we'll go to line eight and we'll paste it in.
>
> **[2:50](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=170)** And now let's make some changes.
>
> **[2:51](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=171)** This time we're going to assert on the correct last name.
>
> **[2:55](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=175)** So we'll change the name of our test, and then here we'll change jsonData.lastName to equal environment.lastName.
>
> **[3:09](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=189)** We'll save it again, and let's send, and we'll see that that test passed as well.
>
> **[3:16](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=196)** You may have noticed that we are repeating the JSON data variable assignment in our two tests.
>
> **[3:22](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=202)** It's here on line five and then it's here again on line nine.
>
> **[3:27](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=207)** It's a good idea to not repeat ourselves in our code, so let's pull this out of our tests.
>
> **[3:34](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=214)** We'll just copy this line and we'll put it here in line four.
>
> **[3:42](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=222)** And now we can remove it from line six and from line nine.
>
> **[3:51](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=231)** Let's save and run our request again, just to make sure our tests are all still passing, and they are.
>
> **[3:59](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=239)** The difference between a body assertion and a JSON assertion is that with a body assertion you are just looking for the value somewhere in the body.
>
> **[4:08](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=248)** With a JSON assertion, you are looking for a specific field value and validating that it's what you expected.
>
> **[4:16](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=256)** In the next movie, we'll learn how to assert on nested JSON, which is very helpful for complicated APIs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), assert (5), return. (1), var (1), case, (1)
> **Env Vars:** json (11), api (1)
> **Code Identifiers:** jsondata (3), lastname (2), firstname (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** stands for (1), is a  (1)
> **File Paths:** pm.response.json (1)
> **Cross-References:** in the next (1)

#### Nested JSON assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=0)** - [Instructor] Sometimes JSON responses are returned in nested format.
>
> **[0:05](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=5)** Nested JSON is JSON that has values nested inside another object.
>
> **[0:10](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=10)** As an example, here is an address object that has four different values inside, street, city, state, and postal code.
>
> **[0:22](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=22)** When we assert on JSON, we need to know how to reach these nested values via code.
>
> **[0:27](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=27)** Our contact list API doesn't have any nested objects, so we'll use a mock API called address to learn about nested JSON.
>
> **[0:37](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=37)** A mock API is one that doesn't communicate with a server.
>
> **[0:41](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=41)** The responses are hard coded in the form of examples.
>
> **[0:45](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=45)** You can download the mock API from this link in GitHub.
>
> **[0:50](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=50)** It's easiest to download the entire folder as a zip file.
>
> **[0:55](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=55)** If for some reason you aren't allowed to download zip files or JSON files to your computer, just copy the text found here in address.postman_collection.txt, paste it into a new file, and then change the .txt extension to .json.
>
> **[1:19](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=79)** To upload the JSON file to Postman, click on the import button at the top of the window, drag the file to the import window.
>
> **[1:29](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=89)** We're looking for the file called address.postman_collection.json.
>
> **[1:36](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=96)** And then click the Import button.
>
> **[1:40](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=100)** You now have a new collection called Address API.
>
> **[1:45](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=105)** Let's open up our collection.
>
> **[1:47](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=107)** There's only one request in our new collection called Get Address.
>
> **[1:52](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=112)** Let's click on it and run it.
>
> **[1:54](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=114)** We'll click send.
>
> **[1:56](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=116)** And we can see that we get an address in response, but right now the address has come back as HTML.
>
> **[2:03](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=123)** We want to look at this address as JSON.
>
> **[2:06](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=126)** So in this HTML dropdown we're going to choose JSON, and now it looks more familiar.
>
> **[2:12](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=132)** The name of each field is in red and the value of each field is in blue.
>
> **[2:18](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=138)** Let's take a look at the response.
>
> **[2:20](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=140)** Notice how the address field is actually populated by four additional fields, street, city, state, and postal code.
>
> **[2:30](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=150)** That's what we mean by nested JSON.
>
> **[2:33](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=153)** Those four fields are nested inside the address object.
>
> **[2:38](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=158)** When we are asserting on nested JSON responses our script needs to be a bit different.
>
> **[2:44](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=164)** Let's write a nested JSON assertion.
>
> **[2:47](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=167)** We're going to write an assertion to validate that we get the correct city in the response to our Get Address request.
>
> **[2:54](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=174)** So let's click on the Tests tab in our Request pane.
>
> **[2:59](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=179)** Then we'll go over to those snippets and we'll scroll down until we find response body JSON value check.
>
> **[3:06](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=186)** We'll click on that and now we can see that our test has been added.
>
> **[3:11](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=191)** Let's rename our test to Correct city is returned.
>
> **[3:19](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=199)** And now for the field value that we are expecting we're going to change this value to address.city.
>
> **[3:29](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=209)** This is because the address value comes first in the JSON data and then the city field is a nested name value within the location.
>
> **[3:39](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=219)** Now we're going to change the value that we're expecting to Belmont in quote marks and now we will click save and let's send our request.
>
> **[3:52](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=232)** And we can see that our test passed.
>
> **[3:55](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=235)** Let's go back to the body of the response and go back to the JSON.
>
> **[4:00](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=240)** Remember that whenever you're asserting on nested JSON you need to navigate there from the outside level in.
>
> **[4:07](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=247)** So if you wanted to assert on the street field, you'd reach that value by using JSON data .address.street.
>
> **[4:16](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=256)** You may want to add this assertion to the Get Address request for some extra practice.

> [!info]- Semantic Content
>
> **Env Vars:** json (17), api (5), html (2)
> **Code Keywords:** let (8), assert (2)
> **UI Navigation:** click on (4), dropdown (1), scroll down (1)
> **Exercise Files:** download the (2), zip file (1)
> **File Paths:** address.postman_collection.txt (1), address.postman_collection.json (1)
> **Code Identifiers:** postman_collection (2)
> **Cross-References:** go back to (2)
> **Tools:** github (1), postman (1)

#### Asserting on complicated JSON
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=0)** - [Instructor] The JSON format is really great for sharing information because it's so expandable.
>
> **[0:05](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=5)** JSON data is made up of these components, name-value pairs, objects, and arrays.
>
> **[0:14](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=14)** A name-value pair is just what it sounds like, a field name and a value for the field name, such as first name, Amy.
>
> **[0:22](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=22)** An object is a group of name-value pairs.
>
> **[0:27](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=27)** So here's a name of Fido and a type of dog.
>
> **[0:30](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=30)** So this must be a pet object.
>
> **[0:34](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=34)** An array is a group of objects.
>
> **[0:37](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=37)** So here's one pet, and another pet.
>
> **[0:41](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=41)** So this is a pet's array.
>
> **[0:43](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=43)** To make things more complicated, objects can contain other objects or arrays, and arrays can contain groups of objects or groups of other arrays.
>
> **[0:54](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=54)** So far, we've tested the contact list API which has no nesting, and the address API, which has just one level of nesting.
>
> **[1:03](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=63)** Now let's take a look at a more complicated API.
>
> **[1:07](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=67)** Our complicated mock API is called PetOwners, and you've probably already downloaded the file in the GitHub repository for this course.
>
> **[1:17](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=77)** If you have any trouble downloading the JSON file, which is right here, PetOwners.postman_collection.json, you can instead go to the text file, copy the text in the text file, save it as a new text file, and then change the .txt extension to .json.
>
> **[1:39](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=99)** To upload the JSON file to Postman, click on the Import button, then you can drag the file into the Import window, or if you want, you can navigate to the file via the file system.
>
> **[1:52](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=112)** Let's try that way.
>
> **[1:54](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=114)** We will click the Choose Files button, and we will find our PetOwners.postman_collection.json file.
>
> **[2:02](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=122)** We'll click Open, and then Import, and our collection has been imported.
>
> **[2:10](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=130)** Let's take a look at our new collection.
>
> **[2:13](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=133)** It has just two requests.
>
> **[2:15](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=135)** Get Pet Owners and Get Pet Owner.
>
> **[2:18](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=138)** Let's look at Get Pet Owner first.
>
> **[2:21](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=141)** We'll click on the request, and now we'll click the Send button, and let's take a look at the response.
>
> **[2:31](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=151)** This request is returning just one record, pet owner number one.
>
> **[2:36](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=156)** The pet owner is an object.
>
> **[2:39](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=159)** You can tell that it's an object because it's enclosed in curly brackets.
>
> **[2:43](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=163)** The pet owner has an ID and a name.
>
> **[2:48](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=168)** Then it has an object called pets.
>
> **[2:51](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=171)** The pet's object contains two arrays, a cat's array and a dog's array.
>
> **[2:58](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=178)** You can tell that these are arrays because they have straight brackets.
>
> **[3:03](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=183)** The cat's array contains two cat objects, and each cat object is made up of the name-value pairs of name, age, and breed.
>
> **[3:14](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=194)** So here's one cat object, and here's another cat object.
>
> **[3:20](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=200)** The dog's array contains one dog object, and that object is also made up of name, age, and breed.
>
> **[3:28](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=208)** Now that we understand the structure of the pet owner object, we can write an assertion for the JSON response.
>
> **[3:35](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=215)** Let's see if we can assert that the pet owner's second cat is a Siamese.
>
> **[3:41](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=221)** So let's expand our request window here a bit, and we'll click on the Tests tab.
>
> **[3:49](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=229)** So then we're going to choose the Response body JSON value check snippet.
>
> **[3:55](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=235)** There it is, so we'll click on it.
>
> **[3:58](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=238)** We will change the test name.
>
> **[4:00](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=240)** We're going to change it to Amy's second cat is a Siamese.
>
> **[4:09](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=249)** And now let's change the value that we are expecting to be Siamese.
>
> **[4:16](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=256)** Now we're going to replace the value after jsonData with the structure that we'll need to get to the appropriate value.
>
> **[4:26](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=266)** We're going to start with pets, because that's the object that contains the cats.
>
> **[4:32](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=272)** So we'll have jsonData.pets.
>
> **[4:36](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=276)** Next, we'll add a period, and then we will add cats because that's the array of cats.
>
> **[4:43](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=283)** We are looking for the second cat in the array, so we need to add a 1 in brackets next to cats.
>
> **[4:51](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=291)** It might seem unusual to add a 1 when we are looking for cat number two, but this is because objects in an array are numbered beginning with 0.
>
> **[5:01](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=301)** Finally, we need to add a period, and then add breed, because we are looking for the name-value pair that starts with the breed.
>
> **[5:10](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=310)** So let's click Save, and we'll send, and we can see that our test passed.
>
> **[5:18](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=318)** Now let's look at an even more complicated JSON response.
>
> **[5:23](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=323)** We're going to look at the Get Pet Owners request.
>
> **[5:26](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=326)** Let's run that request and take a look at that response.
>
> **[5:32](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=332)** We get an object in response, and that object contains an array of objects called owners.
>
> **[5:39](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=339)** Looking at the curly braces, one tab in from the owners, we can see that there are three pet owner objects, Amy, Bob, and Carol.
>
> **[5:50](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=350)** Each pet owner object has the same structure that Amy had when we just asked for her information in the previous request.
>
> **[5:59](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=359)** We can see that Amy has two cats and one dog.
>
> **[6:04](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=364)** Bob has two cats and no dogs.
>
> **[6:08](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=368)** Carol has one cat and three dogs.
>
> **[6:12](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=372)** How would we write an assertion for this complicated response?
>
> **[6:16](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=376)** Let's say that we wanted to assert that Carol's second dog is named Fred.
>
> **[6:21](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=381)** So let's open up our Request window, and choose the Tests tab, and we'll find the JSON data snippet.
>
> **[6:31](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=391)** Here it is.
>
> **[6:33](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=393)** Let's change our test name to be Carol's second dog is named Fred.
>
> **[6:43](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=403)** And now let's put Fred in as the value that we are expecting.
>
> **[6:48](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=408)** Now we just have to figure out how to find Fred.
>
> **[6:51](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=411)** Let's remove this value section.
>
> **[6:54](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=414)** We are going to start with owners, because that is the outermost array.
>
> **[7:00](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=420)** And because it is an array and Carol is the third pet owner, we need to add a 2 in brackets next to owners.
>
> **[7:11](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=431)** Next we're going to need to add .pets, because that is the next section moving from outer to inner.
>
> **[7:21](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=441)** Then we're going to add .dogs, because we are going to be looking at the dogs but we have an array of dogs and we need the second dog.
>
> **[7:32](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=452)** So we're going to add a bracket with a 1 in it to get to the second dog.
>
> **[7:39](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=459)** And then finally, we need to get to the name-value pair.
>
> **[7:42](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=462)** So we're going to put .name.
>
> **[7:46](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=466)** So the whole thing is jsonData.owners, 2, .pets.dogs, 1, .name.
>
> **[7:55](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=475)** Let's save, and let's see if we found that name-value pair correctly.
>
> **[8:01](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=481)** And we did, our test passed.
>
> **[8:04](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=484)** The key to asserting on complicated JSON is to work from outer to inner, and to distinguish between arrays and objects.
>
> **[8:13](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=493)** Selecting an array will always involve adding a number in brackets, even if there is only one item in the array.
>
> **[8:20](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=500)** That item will be 0.
>
> **[8:22](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=502)** Objects will never have bracketed numbers after them.
>
> **[8:26](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=506)** Now it's time for a JSON assertion challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), assert (2), finally, (2), import, (1)
> **CLI Commands:** cat (11), find (3), make (1)
> **Env Vars:** json (10), api (4)
> **Definitions:** is a  (5), is an  (2), is called (1)
> **UI Navigation:** click on (4), go to (1), navigate to (1)
> **Code Identifiers:** jsondata (3), postman_collection (2)
> **File Paths:** petowners.postman_collection.json (2)
> **Tools:** github (1), postman (1)

#### Challenge: Complicated assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=5)** - [Instructor] Now that you understand how to assert on complicated JSON, let's do an assertion challenge.
>
> **[0:12](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=12)** We'll use the same collection we used in the previous video, the pet owner's mock collection.
>
> **[0:18](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=18)** In the Get Pet Owners request, how would you assert that Bob's first cat is two years old?
>
> **[0:26](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=26)** One hint.
>
> **[0:28](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=28)** So far, we've been asserting on text fields.
>
> **[0:31](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=31)** Bob's cat's age is an integer.
>
> **[0:33](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=33)** So when you write your assertion, you don't need to put the number two in quotes.
>
> **[0:39](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=39)** Write the assertion in the Tests tab of the request and run the request to see if your test passes.
>
> **[0:46](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=46)** This exercise should take you less than five minutes.
>
> **[0:48](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=48)** So if you find it's taking you longer than that, go back and review the examples in the previous video.
>
> **[0:55](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=55)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (2), find (1)
> **Code Keywords:** assert (2), let (1)
> **Cross-References:** previous video (2)
> **Env Vars:** json (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Solution: Complicated assertions
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=0)** - [Instructor] How did you do?
>
> **[0:07](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=7)** Were you able to write the assertion that Bob's first cat is two years old?
>
> **[0:12](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=12)** Let's walk through the answer.
>
> **[0:14](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=14)** We start with the owners.
>
> **[0:16](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=16)** Bob is the second owner, so we will use owners[1].
>
> **[0:25](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=25)** Next, we add the pets object.
>
> **[0:29](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=29)** Then we add the cats array.
>
> **[0:32](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=32)** We are looking at Bob's first cat, so we need cats[0].
>
> **[0:38](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=38)** Then we add age.
>
> **[0:40](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=40)** We are expecting the age to be two, so we add to.eql[2].
>
> **[0:48](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=48)** When we run this request, the assertion passes.
>
> **[0:54](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=54)** You will definitely encounter complicated JSON when you're working with your own APIs.
>
> **[0:59](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=59)** Just remember these tips to navigate through complicated assertions.
>
> **[1:04](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=64)** Objects are in curly brackets.
>
> **[1:07](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=67)** Arrays are in square brackets.
>
> **[1:11](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=71)** Arrays will always need a bracketed number, even if there's only one item in the array.
>
> **[1:17](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=77)** Then the number will be zero.
>
> **[1:19](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=79)** Work from left to right using the indentations to determine the order of navigation.
>
> **[1:26](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=86)** Any time there's an indentation, you'll need a new dot in your navigation.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (2)
> **Code Keywords:** let (1)
> **Env Vars:** json (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Running Your Test Collections

#### Using the Collection Runner
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=0)** - [Instructor] Now that we have a collection with assertions we can start automating our tests instead of running them manually by clicking the send button.
>
> **[0:08](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=8)** The first type of automation we'll look at is the collection runner.
>
> **[0:12](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=12)** The Collection Runner is a part of Postman that will send in each request of your collection automatically.
>
> **[0:18](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=18)** It saves you from having to select a request, press send select the next request, press send, and so on.
>
> **[0:26](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=26)** It's a nice bridge between running our tests manually and running them through the command line.
>
> **[0:31](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=31)** I like to check my test collections with the collection runner before I try to run them in Newman.
>
> **[0:38](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=38)** Let's add one more request to our negative tests folder before we use the Collection runner.
>
> **[0:44](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=44)** This will be a cleanup request where we will delete the contact that we added in the setup.
>
> **[0:50](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=50)** So let's open our negative tests folder.
>
> **[0:53](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=53)** You can see that we added a contact as part of our setup here, but we never delete that contact.
>
> **[1:00](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=60)** It's a good idea to delete any resources that you create during your tests to help keep your database clean.
>
> **[1:08](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=68)** So let's open up our basic endpoint tests folder.
>
> **[1:12](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=72)** We're going to click on delete contact.
>
> **[1:15](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=75)** We're going to copy that duplicate and then we will pull that copied request down at to the very end of the negative tests folder.
>
> **[1:27](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=87)** Then let's rename that request.
>
> **[1:30](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=90)** We're going to call it cleanup, delete contact.
>
> **[1:34](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=94)** You might be wondering when we are deleting the contact if the contact ID that we are using to delete it is the correct one.
>
> **[1:43](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=103)** Well remember that when we create a contact here that contact ID gets saved and then we delete the contact with that contact ID that was saved.
>
> **[1:55](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=115)** When we add in our new contact in this setup step, that will be a new contact ID and when we delete our contact we are deleting that contact ID from the contact that we created in the setup step.
>
> **[2:11](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=131)** So now that we have added this delete contact request now we can run our entire collection.
>
> **[2:18](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=138)** So let's click on the contact list collection and then the three dot menu and then we will choose run collection.
>
> **[2:27](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=147)** Make sure that your environment is still set.
>
> **[2:31](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=151)** You should see contact list here in the upper right if you don't use the dropdown to select that environment because we will need those variables.
>
> **[2:41](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=161)** Then we click the run contact list button and we can see that all of our requests have run very, very quickly.
>
> **[2:52](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=172)** Let's take a look at our test results.
>
> **[2:55](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=175)** We can see that we've got a number of past tests, 24 and then zero failed tests.
>
> **[3:04](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=184)** And we can also see the name of all of the requests that we are making and the name of all of the tests that we are running for each request.
>
> **[3:15](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=195)** We can also see the response code that we got for each request how long the response took and the size of the response.
>
> **[3:24](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=204)** And we even have a run again button if we want to run our test again.
>
> **[3:29](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=209)** Let's see what a failing test looks like in the collection.
>
> **[3:33](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=213)** We're going to make a small change to one of our requests and then run the collection again.
>
> **[3:39](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=219)** So let's go to the get contact request.
>
> **[3:43](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=223)** And in our assertions, instead of using Environment first name as the value we are asserting on let's put in a different name.
>
> **[3:51](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=231)** We'll put in Mary because right now in our variables we have Carol.
>
> **[3:56](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=236)** So now we will be asserting that the new contact we created has the first name of Mary.
>
> **[4:01](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=241)** We know that it doesn't have that first name so the test should fail.
>
> **[4:05](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=245)** So let's click on save.
>
> **[4:08](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=248)** Let's go back to the collection runner and we will click run again.
>
> **[4:15](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=255)** Okay, and now we can see that we have a failed test.
>
> **[4:18](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=258)** If we click on that failed link, we will go directly to the failed test and we can see exactly what was wrong.
>
> **[4:26](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=266)** It expected Carol to deeply equal Mary, which of course it does not.
>
> **[4:31](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=271)** So now let's fix our test.
>
> **[4:34](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=274)** So we'll go back to the get contact request and we will change this again to have that environment first name variable.
>
> **[4:44](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=284)** We will save and let's go back to the collection runner and run the collection again.
>
> **[4:51](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=291)** And now we can see that all of our tests passed.
>
> **[4:55](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=295)** You don't need to run all of the tests in your collection if you don't want to.
>
> **[4:59](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=299)** You can also run the tests in just one folder.
>
> **[5:03](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=303)** So now let's just run all of the tests in the basic endpoint tests folder.
>
> **[5:09](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=309)** So we're going to click on the three dot menu and we're going to choose run folder.
>
> **[5:14](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=314)** And we get a new runner that shows just the requests in that one folder.
>
> **[5:20](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=320)** So let's run that so we can see now we had 12 tests that ran and passed.
>
> **[5:27](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=327)** It's also possible to exclude tests from a test run.
>
> **[5:32](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=332)** Let's try that.
>
> **[5:33](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=333)** We'll click on the three dot menu next to the basic endpoint tests folder.
>
> **[5:38](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=338)** We will choose run folder again.
>
> **[5:40](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=340)** And this time let's uncheck one of the requests.
>
> **[5:43](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=343)** We'll uncheck update contact.
>
> **[5:46](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=346)** And now we'll run the contact list folder and we can see that now we only had 11 tests run.
>
> **[5:55](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=355)** Keep in mind that when you are running your collections in the collection runner, they are going to run in order and the state of the data is going to change from one test to the next.
>
> **[6:06](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=366)** For example, if you skipped the add contact test when the get contact test is run the test will fail because the old contact ID was deleted in the last run.
>
> **[6:19](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=379)** Always think about what state your data is in before and after each test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), delete (9)
> **UI Navigation:** click on (5), select the (1), dropdown (1), go to (1)
> **Cross-References:** go back to (3), in the last (1)
> **Prerequisites:** setup (4)
> **CLI Commands:** make (2)
> **Tools:** postman (1), command line (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Exporting your collection
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=0)** - [Instructor] In the previous video, we learned how to run a collection with the Collection Runner, but we still had to push a button within the Postman application in order to see our collection run.
>
> **[0:12](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=12)** We want to be able to run our collection from the command line.
>
> **[0:16](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=16)** And in order to do that, we need to export our collection and environment.
>
> **[0:21](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=21)** We'll be exporting them as JSON files.
>
> **[0:25](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=25)** Fortunately, Postman makes it really easy to do this.
>
> **[0:30](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=30)** First, we'll export the collection.
>
> **[0:33](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=33)** So we will click on the three dot menu next to the Contact List collection.
>
> **[0:37](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=37)** We will choose Export.
>
> **[0:42](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=42)** Make sure that you've selected Collection version 2.1, Click the Export button.
>
> **[0:50](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=50)** And now let's give this collection file a name.
>
> **[0:54](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=54)** We're going to make it a little simpler than the one that they've chosen for us.
>
> **[0:59](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=59)** We're going to name it contactList.collection.json.
>
> **[1:05](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=65)** And we're going to save this collection to the desktop because that way it will be really easy for us to find.
>
> **[1:12](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=72)** So let's click Save.
>
> **[1:14](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=74)** And now our collection has been saved.
>
> **[1:20](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=80)** We can see it right here on the desktop.
>
> **[1:23](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=83)** Now we will export the environment.
>
> **[1:26](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=86)** We're going to click on the Environment tab.
>
> **[1:30](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=90)** Now, you would think that you would want to click the three dot menu next to the Contact List environment, but for some reason the export option is not there.
>
> **[1:39](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=99)** So what we're going to do is we're going to click on that environment so it will open up here in the main window.
>
> **[1:46](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=106)** And then we're going to go to the three dot menu at the top-right of the window.
>
> **[1:52](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=112)** And we will choose Export there.
>
> **[1:55](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=115)** We're going to give that environment a name.
>
> **[1:57](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=117)** We're going to call it contactList.environment.json.
>
> **[2:03](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=123)** And once again, we're going to save to the desktop.
>
> **[2:08](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=128)** And there it is on the desktop.
>
> **[2:12](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=132)** If everything went smoothly, you should now have two JSON files on your desktop.
>
> **[2:17](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=137)** One called contactList.collection.json and one called contactList.environment.json.
>
> **[2:27](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=147)** In the next video, we'll learn how to use these files to run Newman.

> [!info]- Semantic Content
>
> **File Paths:** contactlist.collection.json (2), contactlist.environment.json (2)
> **Code Keywords:** let (2), this. (1), export. (1)
> **Code Identifiers:** contactlist (4)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** postman (2), command line (1)
> **Env Vars:** json (2)
> **Cross-References:** previous video (1), in the next (1)

#### Running your collection with Newman
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=0)** - [Instructor] We are now ready to run our collection from the command line.
>
> **[0:04](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=4)** We'll be using Newman, which as you learned earlier is a tool created by Postman.
>
> **[0:09](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=9)** You should have already installed Newman as part of your work in the setup movie.
>
> **[0:14](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=14)** You can check to see if it's installed by opening a command window and typing Newman dash dash version and then clicking return.
>
> **[0:24](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=24)** If you get a version number in response you have Newman installed.
>
> **[0:28](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=28)** If you don't get a version in response go back to the first chapter, movie three setting up your test environment and follow the instructions to get Newman.
>
> **[0:39](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=39)** Running a collection in Newman is really easy.
>
> **[0:42](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=42)** First, we will change directories to the desktop by typing CD, desktop, and then return.
>
> **[0:50](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=50)** This is because we saved our files to the desktop.
>
> **[0:54](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=54)** Next, we will create our Newman command.
>
> **[0:57](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=57)** First we will type Newman Run, then the name of our collection, contact list dot collection dot JSON.
>
> **[1:11](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=71)** Then we'll use a dash and an E.
>
> **[1:14](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=74)** This tells Newman that we are about to give them the environment file.
>
> **[1:19](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=79)** Then we type in the name of our environment contact list dot environment dot JSON, and then we click return and we can see that our whole collection just ran.
>
> **[1:34](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=94)** Let's take a look at the output.
>
> **[1:37](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=97)** So starting up here, we see the name of our collection contact list.
>
> **[1:42](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=102)** Then we see the name of our first folder basic endpoint tests.
>
> **[1:47](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=107)** Then we see the name of our requests.
>
> **[1:50](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=110)** Log in, get contact list.
>
> **[1:53](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=113)** Add Contact.
>
> **[1:54](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=114)** We see the name of our assertions response time is less than 3000 milliseconds.
>
> **[2:00](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=120)** Status code is 200 and so on.
>
> **[2:03](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=123)** If we scroll down a little more, we'll see our next folder the negative tests folder, and if we scroll all the way down to the bottom, we will see a chart that shows how many iterations of the collection we ran which was just one, how many requests we ran, which was 14.
>
> **[2:24](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=144)** The number of test scripts that we ran, the number of assertions we ran, and we can see that we had no failed assertions.
>
> **[2:32](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=152)** In addition to the dash E command modifier there are other ways you can modify your Newman command.
>
> **[2:39](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=159)** You can see the other command options by running Newman run dash H.
>
> **[2:46](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=166)** This is like the help menu.
>
> **[2:48](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=168)** It shows you all of the different possible options that you could send in when you are running Newman.
>
> **[2:54](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=174)** You don't have to be in the same folder location as your collection and environment files if you don't want to be.
>
> **[3:01](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=181)** For example, if your files were in this folder location project Newman contact list, you could navigate to that location in the command line like this Newman Run and then Project Newman contact list, and then the name of the file, and then you have the dash E to put in the environment, and then projects Newman contact list.
>
> **[3:29](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=209)** That's your navigating to the correct folder and then the name of the environment file.
>
> **[3:36](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=216)** This is helpful if you want to set up Newman to run in your CICD environment.
>
> **[3:41](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=221)** We'll be talking more about this in our final chapter coming up next.

> [!info]- Semantic Content
>
> **Code Keywords:** return. (2), let (1)
> **Env Vars:** json (2), cicd (1)
> **Tools:** command line (2), postman (1)
> **Cross-References:** go back to (1), coming up (1)
> **Prerequisites:** setup (1), set up (1)
> **CLI Commands:** cd (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)


### Conclusion

#### Continuing with API testing
> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=0)** - [Instructor] Congratulations.
>
> **[0:02](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=2)** You've created a Postman Collection with assertions to test an API, learned how to run it with a Collection Runner, and learned how to run it from the command line with Newman.
>
> **[0:12](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=12)** What are some next steps you can take to learn more about Postman?
>
> **[0:17](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=17)** You can continue to use the Contact List API to practice writing different kinds of assertions.
>
> **[0:23](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=23)** You can use the Pet Owners mock API to practice navigating through JSON.
>
> **[0:28](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=28)** You can practice with other public APIs, such as the Swagger Petstore and the Poke API.
>
> **[0:36](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=36)** You can also start applying what you've learned about APIs at your own workplace by integrating your Postman tests into your workplace's CI/CD platform.
>
> **[0:46](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=46)** Here are some links to documentation for setting up Newman to run with the most common CI/CD tools, Jenkins, GitLab, Travis CI and Circle CI.
>
> **[0:59](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=59)** Postman also recently created a CLI tool, which offers more security when running automated tests.
>
> **[1:05](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=65)** You can read more about the tool here.
>
> **[1:08](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=68)** And if you enjoyed this course, you will probably enjoy my book, "The Complete Software Tester," which is available on Amazon.
>
> **[1:17](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=77)** This book has an entire section on API testing, as well as chapters on jots, response codes, how to organize your API tests, and how to decide which API tests to automate.
>
> **[1:30](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=90)** The links mentioned on all these slides can be found in the course links file in the GitHub repository for the course.
>
> **[1:36](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=96)** The name of the file is Postman Essential Training Course Links.
>
> **[1:41](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=101)** I hope that you've found API testing with Postman to be easy and fun.
>
> **[1:45](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=105)** With automated API testing, you can get valuable test results for your builds in seconds.
>
> **[1:51](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=111)** Thanks for watching.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), json (1), cli (1)
> **Tools:** postman (6), command line (1), gitlab (1), github (1)
> **CLI Commands:** cd (2)
> **Code Keywords:** continue (1), public (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Getting Started with Software Testing]]
← [[API Testing Foundations]] | **9 of 12** | [[International Software Testing Qualifications Board (ISTQB) 4.0+ Foundation Cert Prep]] →

## Appears In

- [[Getting Started with Software Testing]]

## Related Courses

_Courses sharing skills:_

- [[API Testing Foundations]] — API Testing
- [[Learning Selenium- Structure, Scale, Run, and Optimize Automated Tests]] — Test Automation
- [[Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing]] — Test Automation
- [[Playwright- Design Patterns]] — Test Automation
- [[Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios]] — Test Automation

---

[↑ Back to top](#)