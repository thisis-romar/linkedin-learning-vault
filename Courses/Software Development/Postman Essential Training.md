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
  - '[[Getting Started with Software Testing]]'
prev_courses:
  - '[[API Testing Foundations]]'
next_courses:
  - '[[International Software Testing Qualifications Board (ISTQB) 4.0+ Foundation Cert Prep]]'
path_nav: '[{"path":"Getting Started with Software Testing","position":9,"total":12,"prev":"API Testing Foundations","next":"International Software Testing Qualifications Board (ISTQB) 4.0+ Foundation Cert Prep"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/postman-api
  - skill/api-testing
  - skill/test-automation
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Postman%20Essential%20Training.md)

![Postman Essential Training](https://media.licdn.com/dms/image/v2/C560DAQGu_qZOWzDKsQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1679692293614?e=2147483647&amp;v=beta&amp;t=AQ9nvPCbqKAgtWx9hd5kZDNm1F-njRSqByG6_JUdQ94)

# Postman Essential Training

> Suggested prerequisites A basic understanding of the command line A basic understanding of HTTP requests Projects Add variables to the URL and body of a request. Write your own status, header, and body assertions for a Postman request. Write assertions for complicated JSON responses, including responses in arrays and in nested objects. This course introduces the process of writing, running, and au

> [LinkedIn Learning](https://www.linkedin.com/learning/postman-essential-training-21969591) | 1h 45m | Intermediate | 41K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Why automate your API tests?](#why-automate-your-api-tests)
  - [What you should know](#what-you-should-know)
  - [Setting up your test environment](#setting-up-your-test-environment)
- [**1. Getting Started with Postman**](#1-getting-started-with-postman) (12 videos)
  - [Creating collections and folders](#creating-collections-and-folders)
  - [The contact list application](#the-contact-list-application)
  - [How JSON Web Tokens (JWTs) work](#how-json-web-tokens-jwts-work)
  - [Creating GET requests](#creating-get-requests)
  - [Creating POST requests](#creating-post-requests)
  - [Creating PUT and DELETE requests](#creating-put-and-delete-requests)
  - [Creating negative requests: Part 1](#creating-negative-requests-part-1)
  - [Creating negative requests: Part 2](#creating-negative-requests-part-2)
  - [Using environment variables](#using-environment-variables)
  - [Saving response data as a variable](#saving-response-data-as-a-variable)
  - [Challenge: Add variables to a request](#challenge-add-variables-to-a-request)
  - [Solution: Add variables to a request](#solution-add-variables-to-a-request)
- [**2. Easy Postman Assertions**](#2-easy-postman-assertions) (6 videos)
  - [Status type assertions](#status-type-assertions)
  - [Body assertions](#body-assertions)
  - [Header and response time assertions](#header-and-response-time-assertions)
  - [Debugging with the Postman console](#debugging-with-the-postman-console)
  - [Challenge: Write assertions](#challenge-write-assertions)
  - [Solution: Write assertions](#solution-write-assertions)
- [**3. Advanced Postman Assertions**](#3-advanced-postman-assertions) (5 videos)
  - [JSON assertions](#json-assertions)
  - [Nested JSON assertions](#nested-json-assertions)
  - [Asserting on complicated JSON](#asserting-on-complicated-json)
  - [Challenge: Complicated assertions](#challenge-complicated-assertions)
  - [Solution: Complicated assertions](#solution-complicated-assertions)
- [**4. Running Your Test Collections**](#4-running-your-test-collections) (3 videos)
  - [Using the Collection Runner](#using-the-collection-runner)
  - [Exporting your collection](#exporting-your-collection)
  - [Running your collection with Newman](#running-your-collection-with-newman)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing with API testing](#continuing-with-api-testing)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why automate your API tests?](https://www.linkedin.com/learning/postman-essential-training-21969591/why-automate-your-api-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/why-automate-your-api-tests?u=76281980&t=0)** - [Kristin] More software companies are using APIs than ever before, which means the risk is even greater for malicious users to exploit these APIs to access or change application data. So, it's important to regularly test API functionality to make sure our requests to the server are behaving as we expect them to. Postman is a free tool that lets us test the requests and responses of our APIs. With Postman, it's easy to create and duplicate request, use [[JavaScript]] to assert on responses, organize your tests, and run your tests as an automated test suite. Join me in this course and learn how to create reliable automation for any API you work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Env Vars:** api (2)
> **Tools:** postman (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kristin] (1)

#### [What you should know](https://www.linkedin.com/learning/postman-essential-training-21969591/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course you should have some experience with running simple command line requests. You should also have a general knowledge of what HTTP requests and APIs are and some knowledge of what node JS is. If you need to brush up on any of these skills you can try taking these introductory courses, Learning [[Representational State Transfer (REST)|REST]] APIs, Introducing Postman, and Learning [[Windows]] Terminal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Windows]] (1)
> **Tools:** command line (1), postman (1), windows terminal (1)
> **Env Vars:** http (1), rest (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [Setting up your test environment](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=0)** - [Instructor] There are a few things you'll need in order to take this course. First, you'll need to have Postman. You can get the free version of Postman by going to [https://postman.com/downloads](https://postman.com/downloads). Click on the download button that is appropriate for your operating system. Next, you'll need to have Node installed. You can do a quick check to see if you already have node installed by opening a command window and typing node --version. If you get a version number such as 19.3.0 in response, you already have Node installed. It's okay if your version number is different from mine. If you don't have Node installed, you can get it by going here: [https://nodejs.org](https://nodejs.org). Choose the LTS version and follow the installation instructions. Once you have Node installed, you should have [[npm]] installed automatically. You can check to see if it's installed by running this in a command window: npm --version. If you get a version number in response, npm is installed. It's okay if your version number is different from mine. If it's not installed, you may have a very old version of Node. Go to the Node installation page and update your version. Now it's time to install Newman. Newman is the command line runner that runs our Postman tests.
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/setting-up-your-test-environment?u=76281980&t=93)** Simply type in the command line npm install -g newman. This will install Newman globally on your machine. Note that all URLs mentioned in this course are linked in the exercise file named Postman Essential Training Course Links. Once you have Postman, Node, npm, and Newman installed, you are all ready to take this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (5)
> **CLI Commands:** node (9), npm (5)
> **Tools:** postman (6), command line (2)
> **Prerequisites:** you'll need (3), install (3)
> **URLs:** [https://postman.com/downloads](https://postman.com/downloads) (1), [https://nodejs.org](https://nodejs.org) (1)
> **UI Navigation:** click on (1), go to (1)
> **Env Vars:** lts (1)
> **Versions:** 19.3.0 (1)


### 1. Getting Started with Postman

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating collections and folders](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=0)** - [Instructor] Before we even write our first request it's worth taking the time to get organized. Let's begin our work with Postman by creating a collection. A collection is a series of saved Postman requests. The requests in a collection can be grouped into folders to make it easy to keep things organized. It's even possible to have nested folders. So let's create a collection in Postman. First, make sure that you have selected the Collections tab on the left side of the screen. Now we'll click the plus button beside the Collections tab. We are creating a new collection. We're going to give our collection a name, Contact List, and click the Return key. And now you can see that our new collection has been saved in the Collection list. Now that we have a collection, let's add some folders. We are going to create two folders, one for basic endpoint testing and one for negative testing. First, we'll create our basic endpoint tests folder. Click on the three dots next to the name of our collection. And we're going to choose Add folder. Give your folder a name. We're going to name it Basic Endpoint Tests. Click Return. And you can see that our new folder has been added to our Contact List collection. Now let's add our negative tests folder.
>
> **[1:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-collections-and-folders?u=76281980&t=95)** Click on the three dot menu next to the collection, and choose Add folder. We'll give our folder a name. We'll name it Negative Tests. Click Return. And you can see that we have now added the Negative Tests folder. Now we have a collection and a pair of folders in which to save our tests. Next, we'll take a look at the application we'll be testing.

> [!info]- Semantic Content
>
> **Tools:** postman (3)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The contact list application](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=0)** - [Instructor] In order to learn how to create Postman requests and assertions, we'll be using an API, I created, called the Contact List API. It allows users to add, edit, and delete contacts like they would in an address book. This API also has a user interface, or UI, to go with it. Let's take a look at that first. Navigate to thinking-tester-contact-list.[herokuapp.com](https://herokuapp.com). We are going to create an account which we will use for our API calls. So let's start by clicking the Sign up button. You'll add in your First Name, Last Name, Email address, and a Password. Your name and email don't need to be real, but remember what they are along with the password. Now we'll click the Submit button. Notice that you are taken to the Contact List page. From here you can add, edit, and delete contacts, but usually we won't be doing this through the UI. We'll be doing this through the API. As you go through the next few lessons, if you ever get confused about what you're seeing in the API, you can always log into the UI and check your work. Before we leave the UI for the API, let's take the time to add a couple of contacts to our Contact List. That way we'll have some contacts to see
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=93)** when we make our first get request. So we'll click on the Add a New Contact button,
>
> **[1:44](https://www.linkedin.com/learning/postman-essential-training-21969591/the-contact-list-application?u=76281980&t=104)** then click the Submit button, and you will see that your contact has been added to the Contact List. Let's add one more contact. So now you can see the two contacts that you have added. You'll also see the two contacts you added when we learn how to do a get request. But first, let's learn about how [[JSON]] Web [[Tokens]] work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Tokens]] (1)
> **Env Vars:** api (7), json (1)
> **UI Navigation:** navigate to (1), click on (1)
> **CLI Commands:** make (1)
> **URLs:** [herokuapp.com](https://herokuapp.com) (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### [How JSON Web Tokens (JWTs) work](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=0)** - [Instructor] APIs allow us to make requests directly to a server or data store without having to go through a UI. But software creators need to make sure that those APIs are secure. You wouldn't want to have a stranger able to make an API call to access your bank account, for example. The most common way to secure APIs is through a JWT, or [[JSON]] web token. This token is generated through a POST request. The username and password are sent to the application and if they're valid, a JWT is generated. This JWT can then be used in all requests to interact with the application. So, let's generate a JWT. Let's open up our contact list collection to see our two folders, and we're going to click on the three-dot menu of the Basic Endpoint Tests folder. Then, we're going to choose add request. We're going to give our new request a name. We're going to call it Login and click return. And now, in the HTTP verb section, we are going to change the verb from GET to POST. Now we'll put in the request URL. Note how similar this URL is to the URL that we used to get to the website. Now, let's click on the Body tab of the request. We're going to click on the raw button and then, in the dropdown that begins with Text,
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=93)** we are going to choose JSON from the dropdown. This is just configuring that we are sending JSON in our request. If you're unfamiliar with what JSON format is, we'll be learning more about it in a later movie. For right now, it's enough to just know that JSON format is made up of name-value pairs. So, let's enter in our login object. We start with a beginning curly brace and then we click return. We can see that the ending curly brace has populated for us. Now, we're going to put the [[Microsoft Word|word]] email in quote marks and then a colon. And then, you're going to put in the email address that you used to create the account on the website. Make sure you put a comma after the last quote mark, then click return. And now, we will put password in quote marks, and then a colon, and then put in the password that you used to create your account on the website. Okay, now that we have finished this, let's click the Send button which is the blue button on the right of the screen, and we should see our request run. Yes, we see our request run and we get results in the bottom pane. So now, let's copy the long token that we receive in the response, everything in between the two quote marks, because we will be using this in another request. So, paste that token somewhere
>
> **[3:08](https://www.linkedin.com/learning/postman-essential-training-21969591/how-json-web-tokens-jwts-work?u=76281980&t=188)** where you can save it and use it again. Finally, let's save our Login request so that we can use it again when we need to. Click the Save button which is up in the top right and the request is saved. We can see it over here in our Basic Endpoint Tests folder on the left. Now, we're ready to make secure API calls with our token.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[Microsoft Word|Word]] (1)
> **Env Vars:** json (5), jwt (4), url (3), api (2), post (2)
> **CLI Commands:** make (5)
> **UI Navigation:** click on (3), dropdown (2)
> **API Endpoints:** post  (1), get  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Creating GET requests](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=0)** - [Instructor] Now that we have a token to authenticate our requests, let's start creating some basic endpoint requests. The requests we'll be creating and saving here are not yet tests. We'll be adding some assertions to our requests in a later module. The API we're working with has five different endpoints. Let's take a look at them. We have a GET request which returns a list of all contacts. We have a GET/{contactId} request which returns one specific contact. We have a POST request which adds a new contact. We have a PUT/{contactId} request, which updates a specific contact, and we have a DELETE/{contactId} request, which deletes a specific contact. You can find the documentation for these five endpoints at this address. Basic endpoint requests are formed correctly and result in a 200 level response. And this movie will create a GET request and a GET contact request. For our basic endpoint request folder. Let's create a GET request. So we will open up our collection and we'll find our Basic Endpoint Tests folder, We're going to click on the three dot menu next to that folder, and we're going to choose Add Request. We're going to give our request a name. Let's call it Get Contact List. And we're going to check our HTTP verb.
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=93)** We want to make sure that it is set to GET and it is set to GET. And now we're going to enter in the request URL. Next we're going to click on the Authorization Tab which is underneath the GET verb. And for the type of authorization we're going to choose Bearer Token. So we can see that we have a field here on the right for a token. And in this field we are going to post the jot that we created in the previous movie. Note that your jot will be different from mine. Now let's click the Save button here at the top right so that we can save the request. And now let's click the Send button. We should be getting two contacts in response from our contact list. And let's scroll down and see what we get. Here's one contact and here's the second contact. So we got back the two contacts that we added. Of course your contacts will look different from mine because you added your own contacts on the website. Now that we have our GET request working, let's see if we can request a specific contact from the list. We're going to create a new request in an easy way. We're going to copy our existing request. Let's go over to the GET Contact List request. And on the three dot menu we're going to click Duplicate. And this has made a copy of our request. Now we're going to rename this new request
>
> **[3:09](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=189)** and we're going to name it, Get Contact and click Return. So let's take a look at our new Get Contact request. We have the correct verb here. It is a GET request, but we need to make a change to the URL, because the URL for this request is different. To see how it's different, let's take a look at the documentation. So here is our documentation for our Contact List API. And we want to see what the URL should be for our Get Contact request. So we're going to click on Get Contact over here in the left navigation pain. And here we see an example of the Get Contact request. We can see that the URL ends in contacts and then a slash, and then the contact ID. So that's what we will need to be adding to our URL. So we need to find a contact ID so that we can make this Get Contact request. We can get that contact ID from the response we got when we got our contact list. So let's return to our Get Contact List tab. We can see that there's an ID here in the first contact we got back. So let's copy that ID, and now we will go over to our Get Contact request and we will add a slash at the end of the URL, and then we will paste in our ID. Your ID will of course be different from mine. Let's save the request here with the Save button.
>
> **[4:47](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-get-requests?u=76281980&t=287)** And now let's run our request with the Send button and see what we get back. And we get our contact back. This time we just get one contact back because we were asking for one specific contact by using their contact ID. We now have two requests saved to our Basic Endpoint Tests folder, in addition to our login request. You might want to take some time to try requesting your second contact in a GET request by replacing the contact ID in the URL with the ID of the second contact.

> [!info]- Semantic Content
>
> **Env Vars:** url (8), api (2), post (1), put (1), delete (1)
> **API Endpoints:** get  (10), post  (1)
> **CLI Commands:** find (3), make (3)
> **UI Navigation:** click on (3), scroll down (1)
> **Code Identifiers:** contactid (3)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### [Creating POST requests](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=0)** - [Instructor] In the previous movie we saw how to retrieve contacts we created from the contact list API, but we created those contacts by using the UI. Now we'll learn how to do a post to our API to create contacts that way. Let's open up our contact list collection and then our basic endpoint tests folder. We are going to create our post request by duplicating our get contact list request. So click on the three dots next to the get contact list request, then choose duplicate and you can see now we have made a copy. Let's rename by clicking on the three dots and choosing rename, and we will rename the request add contact, and click return. Now we need to change the HTTP verb from get to post because when you are adding a new contact to the database it needs to be a post request. The URL of the request is going to be the same as the URL for the get contact list. So we don't need to make any changes there. However, we do need to add something in the body of the request. To see what we need to add, let's go to the documentation. Here we are in the documentation. You can see that the add contact request is first on the documentation, so that's easy to find. And let's scroll down to the body of the request and let's click to view more.
>
> **[1:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=95)** So when we create a new contact we need to add in information like first name and last name. And that gets sent in the body of the request. So let's copy this entire body and we'll return to our post request. We're going to click on the body tab underneath the URL and then we're going to choose raw. And now let's click in the text field and we will paste in our contact that we're going to add. Now you might notice something different right now. You can see that the labels of all of the fields and the field values themselves are all in black text. When we created a post request for a login, the labels and the values for our fields were in red and blue. So what this means is that we have forgotten to change the content type to application [[JSON]]. This is very important for our post requests. So we'll click on that text and we'll choose JSON instead. And now you can see that the values are the correct colors. Let's save our request. And now let's click send and see if our new contact has been added. And in the response we get an echo of the contact we were adding
>
> **[3:07](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-post-requests?u=76281980&t=187)** along with a new ID for the contact. And we also get in this status window here a 201 created response, which means that our new resource was created in the database. Now let's do a get request to check to make sure that our new contact was added. So we're going to copy the contact ID from our newly added contact, remembering that your contact ID will be different from mine. And let's go over to the get contact request and we will replace that ID that we were using before with the ID of our new contact. And let's send that and we'll see if our new contact is returned. And our new contact was returned. In the next lesson, we'll learn how to do two more requests: put requests and delete requests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Env Vars:** url (3), api (2), json (2), http (1)
> **UI Navigation:** click on (3), go to (1), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **Documentation:** the documentation (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Creating PUT and DELETE requests](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=0)** - [Instructor] Now that our get and post requests are working, let's look at setting up a put request and a delete request. A put request updates the data for an existing contact. Before we create a new put request let's create a new contact with our add contact request. So let's open up the contact list collection and the basic endpoint tests folder. And we will select the add contact request. And now we will click the send button and we can see that our contact has been added. So now let's do a get request to verify that our contact has really been added. So let's copy the ID that we got in the response of the request. And now let's go to our get contact request. And we will replace the existing contact ID in this URL with the new ID that we just copied. Let's save that request. And now let's click send. There's the contact that we added. So now let's create the put request. So we are going to copy the add contact request. So we're going to click on the three dots. Next to add contact. We're going to choose duplicate. We're going to give this request a new name. So we'll click rename and we'll say Update contact, and then click return. Now we will want to change the HTTP verb for this request
>
> **[1:39](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=99)** because this is a put request, not a post request. We are updating an existing contact and then in the URL at the end of contact we're going to put a slash and we're going to paste in that new contact ID for the contact that we just created. Now let's go to the body of the request and we're going to make some changes so that we can see when we do an update that we've really made changes. So we're going to change the first name and the last name. We'll change the birth date. You can change the other values if you want to, but in the interest of time, we're going to just make these updates. So let's click save. And now let's click the send button to update our contact. And we can see in the response that our contact was updated. We've got a new name and a new birthdate, and we can also see that we got a 200 Okay response. So now let's do a get request again and verify that the contact we just updated was really saved to the database. So click on the get contact request and then click the send button and we can see our changes right here. Finally, let's create a delete request. A delete request, as you would expect deletes a contact from the database. So let's duplicate our get contact request.
>
> **[3:13](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-put-and-delete-requests?u=76281980&t=193)** So we will click on get contact on the three dots next to the name we'll choose Duplicate. Now we'll rename that new request and we will say delete contact and click return. And now let's change the HTTP verb because now we are deleting the contact and we can keep the ID here the same as it was before. So let's save our request. And now let's click send and we can see in the response that the contact was deleted and we got a 200 Okay. Now let's run our get contact request one more time to see if the contact was really deleted and we could tell that it was deleted because we got a 404 not found in this status response. We now have six saved requests. In our basic endpoint tests folder, there's a login request and then there's one request for each endpoint type. And each request should be successful but we don't want to test only successful conditions. Next, we'll make some unsuccessful requests.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (2), select the (1)
> **Env Vars:** url (2), http (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating negative requests: Part 1](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=0)** - [Instructor] When requests result in a positive response, we get a 200 level response code because our requests were formed correctly. But it's also important to be able to test what happens when a request is not formed correctly, to make sure that the API response appropriately. Let's look at how to create requests that can be used to test five different negative scenarios. A request is sent with a missing authentication token. A record is not found. A request is sent with missing required information. A value is sent with too many characters. A value is sent that is not in the correct format. First, we'll begin with a security test. We learned in the movie how [[JSON]] web [[Tokens]] work that we need to pass in a token to make sure that the user has permission to use the API. So let's make our first negative request one, where we make a request that is missing the authentication token. We are going to be saving our requests in the Negative Tests folder. So in the left pane, open up the Contact List collection, and then open up the Negative Tests folder. Since we're going to be copying requests from the Basic Endpoint Tests folder, let's open that folder as well. So we are going to duplicate the Get Contact List request. So click on the three dots next to that request, and we'll choose Duplicate.
>
> **[1:35](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=95)** It's made a copy. Let's drag that copy down into the Negative Tests folder. Now let's rename that request. We will call it Get Contact List Unauthorized and click Return. So we still want it to be a GET request because we're trying to get the contact list, so we don't need to make any changes to the HTTP verb. We also don't need to make any changes to the URL because this is the correct URL to get the contact list. But we are going to make a change in the Auth tab. So click on the Auth tab. And we can see that we have our token here. We're just going to go ahead and delete that token. And let's click Save. And let's see what happens when we send that request. Okay, we can see that we get an error message that says, "Please Authenticate," and a 401 Unauthorized response. We can generate a 401 response in any of our requests by simply removing the authentication token or using an invalid token. Now let's create a request that will result in a Not Found response. So we're going to duplicate the Get Contact request. So click on that request, click on the three dots and choose Duplicate. And then take that new request that copied request and put it in the Negative Tests folder.
>
> **[3:11](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-1?u=76281980&t=191)** And we'll click on the three dots and rename it. We're going to say Get Contact - Not Found, and click Return. So our HTTP verb is still going to be the same. It's going to be GET because we're getting an individual contact. But we need to make a change to the URL. We're going to paste in a contact ID that doesn't exist in our system. So let's just paste that in. And now we will save. And let's run the request and see what we get in response. We get a 404 Not Found response. So that means that the contact that we were looking for does not exist. We could also generate a Not Found response by sending a PUT or DELETE request with a record that doesn't exist. We'll cover the next three negative requests in the next movie. To practice what you've learned so far, see if you can create another Unauthorized request, it should return a 401, and another Not Found request, it should return a 404.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Tokens]] (1)
> **Env Vars:** url (3), api (2), http (2), json (1), put (1)
> **CLI Commands:** make (8)
> **UI Navigation:** click on (5)
> **API Endpoints:** get  (1), get
 (1), put  (1), delete  (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Creating negative requests: Part 2](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=0)** - [Instructor] In the previous movie, we started learning about negative requests. We learned how to create a request with a missing authentication token and how to create a request for a record that is not found. Now we'll learn three more types of negative requests. A request is sent with missing required information, a value is sent with too many characters, and a value is sent that is not in the correct format. First, we'll create a post request that is missing a required field. In our contact list API, both the first name and the last name are required fields. So we want to make sure that when we do a post that's missing one of those fields, we get an appropriate error response. So let's open up our contact list collection and our two folders. We are going to duplicate the add contact request. So click on that. Click on the three dots, choose duplicate. Let's take that add contact, copy and we will drag it into the negative tests. Now let's rename it. We'll name it, add contact missing required field, and click return. Okay, now let's take a look at our request, so we can see that it's already set to post, which is what we want because we are adding a contact. The URL is also correct. We don't need to specify a contact ID because we're adding in a new contact,
>
> **[1:34](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=94)** but we do need to make a change to the body of the request. So let's see what happens if we change the first name so that it is just an empty string. So you should see just the two quote marks with nothing in between. So we'll save our request and now we will click send, and we see that we get a 400 bad request in response. And we can also see the error message, first name is required. We could also generate a missing required field response by doing a put request to update an existing contact. Now let's create a post request with a field value that has too many characters. In the contact list API, the first and last name fields can't have more than 20 characters. So we'll do a request that has a last name field with 21 characters to see if we get the appropriate error response. So once again, we are going to duplicate that add contact request. Now we'll drag that new copy into the negative tests. We will rename it, this time, we'll name it, add contact, last name too long, and click return. Okay, once again, let's look at our request. We have the correct http verb because this is an ad contact request. We have the correct URL,
>
> **[3:09](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=189)** but we want to make a change to the body. So we're going to change the last name in the body to a name with 21 characters.
>
> **[3:22](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=202)** So we'll just paste that right in there. And now let's save our request, and we will send our request, and we can see once again that we got a 400 bad request and we got an error. It says, last name is longer than the maximum allowed length of 20. Another way we could generate a maximum allowed length response would be by doing a put request to update an existing contact. Finally, let's create a request that is sending a value that is in an incorrect format. The value we add to the email field needs to be in a valid email format. We'll run a request where the email is not in a valid format and see if we get an appropriate response. This time, let's duplicate the update contact request. So click on update contact and choose duplicate. We're going to drag that down into our negative tests folder, and let's rename it. We'll rename it, update contact, invalid email, and click return. Now, when we are updating the contact, we need to make sure that we're updating a contact that actually exists. The last time we worked with this contact ID, we deleted it. So we need to create a new contact to update. So let's go over to our ad contact request and our basic endpoint test folder, and let's run that quickly to create a new contact.
>
> **[4:57](https://www.linkedin.com/learning/postman-essential-training-21969591/creating-negative-requests-part-2?u=76281980&t=297)** We will copy that contact ID. We'll go back to update contact, and we will replace that contact ID with the one that we just copied. So now we have a contact that would be valid to be updated. So we already have our correct HTTP verb, put, because we're updating a contact. And now our URL is correct because we're updating a contact that already exists. So now let's go into the body of our request and we will make our email invalid. So we've just deleted the .com, that will make the email invalid. Let's click save and let's click send, and we can see that once again, we get a 400 bad request in response. And we can also see that we get a message that tells us that the email is invalid. We could generate a similar failure by sending in a bad email address with a post request. We now have five different requests that will return a 400 level error. To practice what you've learned, see if you can create some more post or put requests that will result in a 400 error.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Env Vars:** url (3), api (2), http (1)
> **UI Navigation:** click on (3)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using environment variables](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=0)** - [Instructor] In the previous five movies, we created 11 different saved requests that we can use for testing our API. But if we ever decide we want to change the name we're using to add a contact, we'll have to change it in every request where it's being used. We can save a lot of time by using variables instead of hard-coded values. In this video, we'll learn how to create an environment, which is a group of variables, and add variables to the environment. So we are going to click on the environment's tab in the left section of the window and then we're going to click Create Environment. We're going to give our new environment a name let's call it, contact list. And then we will click return and we can see that our new environment has been saved. Now let's take a look at the variable table. We can see that there is a space for the name of the variable and then an initial value, and then the current value. The initial value is what's saved in the environment file. The current value is used when you want to temporarily change a variable. Let's add in some new variables. So first we will add in first name and we'll give an initial value of Amy, and then we will add in last name and give an initial value of Smith. And then we'll click save.
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=93)** And you can see that the current value was also populated when we typed in Amy Smith. And that's okay. In order to use an environment, we need to select it. So we click on the environment dropdown in the top right corner, and we choose contact list. Now let's use our new variables. We'll return to the collections tab and we will open up the contact list collection and the basic endpoint tests folder. Let's go to the add contact request. And in the body of the request, we'll replace the first name with two curly braces, and the first name variable. And then we'll replace the last name with two curly braces and the last name variable. Postman variables are case sensitive so be sure to use the same case sensitivity as you used when you created the variables. When Postman sees the two curly braces it knows to use the variable value found in the environment. Let's test it out. So we will click save and then we'll send, and we can see that the new contact was added with the variables. Let's see what happens when we change our variables. So we're going to click on the eyeball button in the very top right corner. This is also known as the environment quick look, and then we will click the edit
>
> **[3:10](https://www.linkedin.com/learning/postman-essential-training-21969591/using-environment-variables?u=76281980&t=190)** and that will open up our variables. We will change the current value of our first name to Carol and our last name to Jones. And now let's save. And then we will return to our ad contact request. And let's click send. And you can see that a new contact was added with the new variable values. We now know how to add variable values to an environment, but what do we do when we don't know what the variable value is yet? In the next movie we'll learn how to save data that was returned in a response as a variable. This will be really helpful when we are working with contact IDs.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), dropdown (1), go to (1)
> **Definitions:** is a  (2), known as (1)
> **Tools:** postman (2)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Saving response data as a variable](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=0)** - [Instructor] In the previous movie, we learned how to create environment variables and use them in our requests. But what if we don't know what the value of our variable is yet? We can use [[JavaScript]] in the Tests section of our request to save a value that was returned from the request. In this movie, we're going to learn how to save the contactId that's returned from our Add Contact request as a variable and then we will use that variable in subsequent requests. We'll also learn how to save our authentication token. So let's open up our contact list collection and our basic endpoint tests folder. We are going to choose the Add Contact request. And now, let's click on the Tests tab underneath the URL. And you can see that when we click on the Tests tab, we get some code snippets that appear on the right side of the window. These snippets can be used to create JavaScript commands. They are really helpful for those of us who often forget code syntax. We are looking for the snippet that is called set an environment variable. Here it is, and we're going to click on it. Notice that a code snippet has been added to the Tests window. There are two values being passed into the pm environment set command. The first is the variable key which is the name of the variable. We are going to rename this to contactId.
>
> **[1:34](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=94)** Before we set the variable value, we need to parse the response data we're going to get as [[JSON]]. So put your [[Cursor]] at the beginning of line one and then click Return. So we've added in a new line and now, we're going to type in var jsonData equals pm.response.json and then an open and closed parentheses and then a semicolon. This is creating a new local variable called jsonData and it's going to take the postman response we get when we add a new contact, parse that data as JSON and save it to the jsonData variable. Now that we've done that, we can refer to jsonData in the next line. So we're going to replace variable value with jsonData._id. Notice that this variable value does not have quote marks. That is because we're referring to a specific value that is being parsed in the jsonData. You may be wondering whether we can save this contactId variable to the environment when we haven't added it to our environment file. Postman will add it for us. So let's click Save, and then we will click Send and we can see that a new contact has been added
>
> **[3:08](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=188)** and we can see that _id. That's why we used the underscore here when we said jsonData._id. Let's see if the contactId was actually saved to our environment file. So we'll click on the eyeball button, also known as the environment quick look, and we can see we have a new contactId variable and the Id was saved as the current value. Now we can use this variable in other requests. So let's go to the Get Contact request and we'll replace this hard-coded contactId here with the two curly braces and contactId. Notice that when we typed that in that the contactId turned orange. This is because the variable has a value. If I were to change the variable name to something that doesn't have a value, it will turn red. So if, for example, I change the uppercase i to a lowercase i, you can see that now the variable is red because it's telling us that it doesn't have a value. So let's click Back with a capital i. Now we can see that our variable has a value again, so when we run this request, Postman will replace the variable in the URL with the value from the environment file. So let's click Save and then we'll send our request and we can see that the new contact we added
>
> **[4:41](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=281)** has been returned to us. Now let's see how we can use a variable to save our authentication token. Let's go back to our login request and we're going to go to the Tests tab again, and we're going to choose that set an environment variable snippet. We're going to name our variable token. Now we need to add in that jsonData parsing line. So at the beginning of line one, put your cursor there, click Return, and then we'll type in var jsonData equals pm.response.json and then open and close parentheses,
>
> **[5:31](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=331)** and then semicolon. And then, here, we will put in jsonData.token.
>
> **[5:43](https://www.linkedin.com/learning/postman-essential-training-21969591/saving-response-data-as-a-variable?u=76281980&t=343)** Let's save this and we'll run the request. And if we look in the environment quick look, we can see that our token has been added for us. So now, let's add that token to one of our requests. Let's add it to the Get Contact List request. So here in the Authorization tab, instead of having this token here, we're going to delete this token and we're going to use those two curly braces and type in token. And then we'll save. Let's run the request and see if it uses that variable token. And it does. Now we know how to add variables and use them in our requests. You may want to go through all the requests in your collection and change them to use the token variable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[JavaScript]] (2)
> **Code Identifiers:** jsondata (10), contactid (8)
> **UI Navigation:** click on (4), go to (2)
> **Env Vars:** url (2), json (2)
> **Tools:** postman (3)
> **File Paths:** pm.response.json (2)
> **Cross-References:** in the next (1), go back to (1)
> **Definitions:** is called (1), known as (1)

#### [Challenge: Add variables to a request](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-add-variables-to-a-request?u=76281980&t=5)** - [Instructor] In the last two movies, we learned how to create variables either by typing them directly into the environment or by setting them through [[JavaScript]]. We also learned how to use variables by putting them in the URL or the body of a request. Now, let's test your skills with a two-part challenge. For the first part of the challenge, look at the Basic Requests folder and see if you can find two requests that could use the {{contactId}} variable value in the URL. We've already got this value in our Get Contact request. Where else could it be used? If you need a hint, take a look at the documentation. For the second part of the challenge, look at the Add Contact request and think about what other values you might like to use as variables. Add those variables to your environment file, and then put those variables in the body of the Add Contact request. Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **Env Vars:** url (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** contactid (1)
> **Cross-References:** in the last (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Add variables to a request](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=0)** - [Instructor] How did you do? Were you able to think of some new places to add variables? Let's take a look at the first part of the challenge. I asked you to think of two requests in the basic requests folder where you could add the contact ID variable to the URL. We already had that variable in the get contact request. We can also add it to the update contact request and the delete contact request. So let's take a look at the update contact request. I've already added in the contact ID so we can click send and our contact will be updated. Then let's take a look at the delete contact request. I've already added the contact ID variable there and I can click and delete the contact. Remember that if you run the delete contact request you will delete the contact with that saved ID. So you'll need to add a new contact and use that new saved ID for other get and put requests. For the second part of the challenge, I asked you to think about what other variables you could use in the add contact request. There are lots of options here. Here are all the possible variables. So if we take a look at our environment variables by clicking on the environment quick look button and then clicking edit, we can see that I've added in all of the possible variables that we can use
>
> **[1:36](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-add-variables-to-a-request?u=76281980&t=96)** in our add contact request. Then if we go to our add contact request you could also see that I added in those variable names to every field in the request and we can go ahead and send that request and we can see that the new contact has been created with those variable values. Congratulations, in this chapter you learned how to create collections and folders how to create positive and negative requests how to create environments and how to add and use variables. In the next chapter we'll learn how to turn our requests into actual tests.

> [!info]- Semantic Content
>
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Easy Postman Assertions

[↑ Back to Table of Contents](#table-of-contents)

#### [Status type assertions](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=0)** - [Instructor] Now it's time to turn our Postman requests into actual tests. We'll do this by adding assertion scripts to our requests. The first type of assertion we'll add is a status type assertion, which validates that the status code we receive as a response to a request is the one we are expecting. Here are some typical status type assertions. 200 means the request was completed as expected. 201 means that a new resource was created, in our case that means a new contact was added to the database. 401 means the user is not authenticated. We saw that when we made a request without a token. And 404 means that the resource was not found, in our case that means the contact was not found in the database. Let's add a status type assertion to our get contact list request. So we'll open up our collection and our basic endpoint tests folder. Now let's click on get contact list and then we will click on the tests tab underneath the URL and we see those snippets appear in the right side of the screen. We're going to scroll down through the snippets to find the one that says status code, code is 200. There it is. We'll click on it, and you can see that code has been added for us to our test window.
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=93)** This is [[JavaScript]] and it is using Chai syntax to assert. We're going to click save, and now we'll click send, and we will see our test passed. So our test said status code is 200, that's the name of the test. And the response we are looking for is a 200 response. And we can see in our test tab results that one of one test passed. When we click on that, we can see a pass icon and here's the name of the test that passed. Now let's add a status type assertion to a negative request. So let's open up our negative tests folder, and we will find that get contact not found request. And we'll click on the test tab, looks like it's already there. And we're going to scroll down in the snippets again and look for that status code, code is 200. And we've clicked on it so the test has been added to the window. Now in this request, we are not expecting the status code to be 200. We're expecting a 404, but to see what a failed test looks like, let's click the send button. Okay, and we can see that zero of one test passed. Let's click on that and we can see the fail icon and we can can see what the assertion error is. We expected to have a response of status code 200 but we got 404 instead.
>
> **[3:08](https://www.linkedin.com/learning/postman-essential-training-21969591/status-type-assertions?u=76281980&t=188)** So that is actually what we were expecting. We were actually expecting a 404 because this is a negative test. So what we'll do is we'll change the test name to be status code is 404, and now we'll change the actual status code in the assertion to be 404. Let's save, and we will send, and now we can see that our test passed. Status type assertions are the simplest type of assertion. You can use them for any type of status code. In this movie, we added assertions to the requests that return 200 and 404 responses. You could also assert on the 201 code that we get in response to a post request, adding a new contact, or on the 401 code that we get in response when we make a request without an authentication token. In the next movie, we'll take a look at body type assertions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **UI Navigation:** click on (6), scroll down (2)
> **Definitions:** is a  (3), means that (2)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### [Body assertions](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=0)** - [Instructor] The next assertion we'll learn about is the body assertion. This assertion verifies that the body of the response contains the text that we were expecting. Let's create an assertion for our get contact request. So we'll open up our collection and our basic endpoint tests folder. We're going to choose the get contact request. Then we're going to go over and select the tests tab and then we'll see those snippets over on the right. We're going to scroll down to find the snippet that says response body contains string, and there it is. So we'll click on that and we can see that our assertion has been added to the tests window. Now this section right here is the title of the test. We're going to change this title to, "Correct contact is returned" and then we're going to change the string that we are expecting from string you want to search to the actual string we want to look for in our assertion. How can we validate that we got the correct contact back? In the real world, contacts generally each have their own email address. So let's assert that the correct email address is returned. So we'll type in the email address of our contact and we'll click save. And now we'll click send. And it looks like our test passed. The correct contact was returned.
>
> **[1:34](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=94)** Helpful hint: if you aren't getting a contact back when you run your request you may be requesting a contact that you deleted. Try doing a post to add a new contact. Your new contact ID will be automatically saved to the environment and then you can run your get contact request successfully. Now let's create an assertion for a negative request. So let's open up our negative tests folder and let's find the add contact missing required field request. We'll click on the tests tab and then in the snippets we're going to look for that response body contains string. There it is. We'll click it to add it to the test window. We're going to rename our test. We're going to call it missing first name error message is returned. And now we're going to change the string you want to search to be the actual error message that we are expecting. Now we will use a backslash in here to put in first name because that's how it gets returned in the response and then required. So it should look like this. So let's click save. And now let's click send. And we can see that our test passed because we were asserting on this first name is required message and we can see that here in the response.
>
> **[3:08](https://www.linkedin.com/learning/postman-essential-training-21969591/body-assertions?u=76281980&t=188)** Remember that Postman is case sensitive. If your test failed, check the casing of your string. When doing body assertions, you can match the entire body or just a portion of the body. The snippet called response body contains string is the one we've been using because we are only asserting on a portion of the response. If we want to assert on the entire response, we'd use the response body is equal to a string command instead of to include that assertion uses to have. When should we assert on the whole body of the response and when just a portion? It really depends on the request. I often use portion assertions when I'm asserting on an error message. Sometimes the format of an error message can change so I usually assert on a small portion of the error to make it less likely that changes to the error response will break my existing tests. But if a response body is very short, just a few words, I'll usually assert on the whole body.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), select the (1), scroll down (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** postman (1)
> **Speakers:** - [instructor] (1)

#### [Header and response time assertions](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=0)** - [Instructor] The next two assertions we'll be adding to our requests can be helpful for security and performance testing. First, we'll add an assertion that will check the header values in our response. Response headers are information passed with an API response that includes additional information about the response, such as the format of the response or any security controls. The assertion we'll be adding will verify that we are getting [[JSON]] back in the response and not some other content type. So let's choose the Get Contact List request. So we'll open up our Collection and our Basic Endpoint Tests folder, and then click on Get Contact List. Now, let's run this request just to see what response headers look like. So click the Send button. And down in the Response pane, let's click on the Headers tab. And we can see all of the different headers that come back with the response. The one that we are looking at is our Content-Type header. And we can see that that is set to application slash JSON car set UTF eight. So we're going to assert that that is the content type we get back in the response. Now you can see here in the test tab that we already have one test here. When we add our snippet, we want to make sure that the snippet is added on a new line. So to do that, click at the end of the existing test and click return. So the [[Cursor]] is on line four. And now let's look for our snippet.
>
> **[1:32](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=92)** We are looking for the snippet called response headers content type header check. And here it is. So let's click on that and so we can see the test name is content type is present. We're going to change this to read content type is application slash JSON. And right now we are asserting that the response has a header that says content type but we also want to assert what the header is what the value of content type is. So we're going to put a comma right here and we're going to add in this optional value application slash JSON semicolon car set equals UTF dash eight.
>
> **[2:21](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=141)** Okay, so now let's save and we will run our request and we'll see if our new test passes. We can see that we get two passing tests, and if we click on that test results tab, we can see our two tests. The status code is 200, and the content type is application JSON Header assertions are good for verifying that specific security headers have been added to the response of a request. We don't have any specific security headers in this API so we won't be adding any of those assertions here. But an example of a security header would be the X dash XSS header Which protects against cross-site scripting attacks. Next, we'll add a response time assertion. This assertion is helpful to make sure that responses are coming back within a reasonable time. The response time is the time it takes for a request to reach the server and return a response because the response time assertion is so useful. We're going to add it to all of our basic requests but instead of adding it to each individual request we're going to add it to the whole collection all at once. So we're going to go to the contact list collection and click on the three dot menu and choose edit. We'll see that the collection tab appears here in the center pane. Now let's click on the test tab and we can see snippets just like we have on our regular requests. We're going to be looking for the response time snippet.
>
> **[3:55](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=235)** So let's scroll down. Here it is, response time is less than 200 milliseconds. We'll click on that to add it to the test window. Now we're going to make a change here. I think that the response time coming back in less than 200 milliseconds is a little bit ambitious. So we're going to change that to 3000 milliseconds instead, which is three seconds. That should be very reasonable. So now we'll change it right here too because this is the actual assertion right here. And now we'll click save. Where's the save icon? Well, it's hiding behind this collection details paint here on the right. So let's close that. And now you can see the save button and we can click on that. Now let's see the assertion in action. So let's go to our add contact request and we will send the request and we can see that we had one test that passed. Let's click on that. And there it is. Response time is less than 3000 milliseconds. So now let's choose one of our negative tests. How about add contact missing required field? So let's click on that. We've already got one test here. Let's send the request and see what happens. You can see that even though we only have one test attached to the request, we're actually getting two tests running. When we click here, we can see that our response time request ran first. That was our collection assertion
>
> **[5:28](https://www.linkedin.com/learning/postman-essential-training-21969591/header-and-response-time-assertions?u=76281980&t=328)** and then our request assertion ran after that. It's possible to add all types of assertions to the collection level. It's also possible to add assertions to the folder level. So if there was a specific type of assertion you wanted to run on every request in the basic endpoint test folder but not in the negative folder you could add it to the test section of the folder level. What should you do when you are running a request that is coming back correctly but your test is failing? In the next movie we'll learn how to use the Postman console to debug your tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5)
> **UI Navigation:** click on (9), go to (2), scroll down (1)
> **Env Vars:** json (5), api (2), utf (2), xss (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (1), just like (1)
> **Cross-References:** in the next (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)

#### [Debugging with the Postman console](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=0)** - [Guide] We are going to take a little break from learning about assertions in order to learn how to use the Postman Console. Sometimes in our testing, we'll get test failures and it will be difficult to see why. The Postman Console can be very helpful in debugging our test assertions. I've added in a Status type assertion to my Add Contact request, but it's failing. Let's see if you can figure out what's wrong. So my test is going to assert that the status code that I get in response is a 201, which is an appropriate response for when a new contact is added to the database. But if I send the request, we'll see that my test is failing. So if I click on the Test tab, there's my passing test. That's the one that is the response time is less than 3000 milliseconds. But my second test failed. It was expecting the response to be 201, but I got a 400 in response instead. Let's see if we can figure out what's going on. We're going to use the Postman Console to debug. You can open the Postman Console. Here in the very bottom of the screen, you'll see the Console button. Click that, and the console will open. So now, in the console, you can see all of the requests that have been made. You can see the HTTP verb that was used, the URL that was used. And if you open it up, you can see Request Headers,
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=93)** the Request Body, the Response Headers, and the Response Body. So let's clear all of the logs that we have in here so far and we'll run the request again. And now, we'll open it up, and we'll see if we can figure out what's going on. So if we look in the response body, we can see that it's telling us that the first name is required. Well, we have the first name, don't we? We set a variable for firstName. Well, let's look and see what's being sent in the Request Body. The firstName's empty. What's going on there? Well, let's take a look at our environment. So let's go over to the eyeball button and we'll click there to open up our environment, and we can see our firstName has no value anymore. It's empty. So let's click on the Edit button, and we will add that firstName back in. And we'll save. Now, let's go back to our Add Contact request. We'll click Send again. And now, we can see that both of our tests are passing. Whenever you have a situation where your requests aren't working as you expect them to or your assertions are failing, remember that the Postman Console is a great tool to help you debug. Here are some things you can look for in the Postman Console. Check that your HTTP verb is correct, check that the authentication token is being sent,
>
> **[3:09](https://www.linkedin.com/learning/postman-essential-training-21969591/debugging-with-the-postman-console?u=76281980&t=189)** check that the URL of the request is correct, and check that all variables have populated correctly in the request, and those variables could be in the URL or they could be in the body of the request.

> [!info]- Semantic Content
>
> **Tools:** postman (6)
> **Env Vars:** url (3), http (2)
> **Code Identifiers:** firstname (4)
> **UI Navigation:** click on (2), open the (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [guide] (1)

#### [Challenge: Write assertions](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-write-assertions?u=76281980&t=5)** - [Instructor] In Chapter One, we learned how to create new requests in our collection, and in Chapter Two, we started learning how to add assertions to a request. Let's test your knowledge by having you add a request and an assertion on your own. Add a new POST request to the Negative Tests folder. This request should result in some type of validation error. Then add a Body-Type assertion to the request that will assert that the appropriate error message is returned. Have fun.

> [!info]- Semantic Content
>
> **API Endpoints:** post  (1)
> **Env Vars:** post (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Write assertions](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=0)** - [Instructor] How did you do? Were you able to add a negative post request with a body type assertion? Here's one way you could have done it. You could create a post request with an invalid birthdate then you could add a body type assertion to the request that asserts that birthdate is invalid is part of the response body. I've already created that invalid birthdate request in postman. Let's take a look. So you can see here with the birthdate that I've included February 29th, 1977 which is not a valid birthdate because there was no February 29th in 1977. So then I added a test that asserts that the birthdate is invalid string is included in the response. So let's run this test and see if it passes and it does. Here are some other possible negative tests that you could have created. A post request with an invalid email a post request with an invalid phone number a post request with a street name that is too long or a post request with an invalid postal code. You could also add negative put requests to your folder. Keep in mind though that your put request needs to use an existing contact, when we start to automate tests they'll run straight through from beginning to end
>
> **[1:37](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-write-assertions?u=76281980&t=97)** and we are deleting the added contact at the end of the basic end point tests folder. To test with negative put requests you'd need to create a new contact and save that contacts value as the contact ID. So let's duplicate our add contact request and we will drag that new request into the negative tests folder at the very beginning. Now let's rename it. This is not going to be a negative test. This is actually positive because we're adding a new contact. The reason why we have it here is because it is a setup step. So we will rename it to give it a setup step name. So we will call it setup, add contact, and click return. Okay, now, when we run this request we'll be adding a new contact and that new contacts ID will be saved and then we'll be able to run our negative tests such as this, put update contact invalid email request that we created before. We'll need to make sure that we're using that contact ID variable. So let's change that and save and now we can run that negative put request.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (3)
> **CLI Commands:** make (1)
> **Tools:** postman (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Advanced Postman Assertions

[↑ Back to Table of Contents](#table-of-contents)

#### [JSON assertions](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=0)** - [Instructor] In this video, we will learn how to write assertions for the [[JSON]] we receive as the response to a request. JSON stands for [[JavaScript]] Object Notation. API requests and responses are often in JSON format. JSON assertions are really helpful because we can assert that the correct value for a specific field was returned. We're going to be using environment variables in our assertion as well. We're going to add another assertion to our Get Contact request. So let's open our Basic Endpoint Tests folder and click on our Get Contact request. We can see that we have one test here already. This is a body-type assertion. Now we're going to be adding in another test. So put your [[Cursor]] at the end of the line three, and we'll click Return. And now we will find our snippet. Our snippet is going to be called Response Body JSON Value Check. There it is, let's click on that, and that's been added in. Let's change the name of the test. We're going to assert that the correct first name is returned. Now let's take a look at the second line of this snippet. Var jsonData = pm.response.json. You may recognize this from when we learned how to save the contact ID as a variable. This takes the body of the response
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=93)** and parses it into JSON format. In our expect line, we are going to change this JSON data value to read jsonData.firstName, because that is the name of the field that we're going to assert on. And then here we're going to expect it to equal the first name that we added with our contact, which in this case, is also located in our environment. So we're going to say environment.firstname. So with the full line of code, we are saying that we're expecting that the first name returned in our Get Contact response will match the first name variable in our environment, which is what we used to create our contact in our Add Contact request. Okay, let's save this request and then we will send it, and let's check our tests. We can see that our new test passed, correct first name is returned. Now let's add a second assertion to the same request. Let's copy the assertion we just added and we'll go to line eight and we'll paste it in. And now let's make some changes. This time we're going to assert on the correct last name. So we'll change the name of our test, and then here we'll change jsonData.lastName to equal environment.lastName. We'll save it again, and let's send,
>
> **[3:13](https://www.linkedin.com/learning/postman-essential-training-21969591/json-assertions?u=76281980&t=193)** and we'll see that that test passed as well. You may have noticed that we are repeating the JSON data variable assignment in our two tests. It's here on line five and then it's here again on line nine. It's a good idea to not repeat ourselves in our code, so let's pull this out of our tests. We'll just copy this line and we'll put it here in line four. And now we can remove it from line six and from line nine. Let's save and run our request again, just to make sure our tests are all still passing, and they are. The difference between a body assertion and a JSON assertion is that with a body assertion you are just looking for the value somewhere in the body. With a JSON assertion, you are looking for a specific field value and validating that it's what you expected. In the next movie, we'll learn how to assert on nested JSON, which is very helpful for complicated APIs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (12), [[JavaScript]] (1)
> **Env Vars:** json (11), api (1)
> **Code Identifiers:** jsondata (3), lastname (2), firstname (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** stands for (1), is a  (1)
> **File Paths:** pm.response.json (1)
> **Cross-References:** in the next (1)

#### [Nested JSON assertions](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=0)** - [Instructor] Sometimes [[JSON]] responses are returned in nested format. Nested JSON is JSON that has values nested inside another object. As an example, here is an address object that has four different values inside, street, city, state, and postal code. When we assert on JSON, we need to know how to reach these nested values via code. Our contact list API doesn't have any nested objects, so we'll use a mock API called address to learn about nested JSON. A mock API is one that doesn't communicate with a server. The responses are hard coded in the form of examples. You can download the mock API from this link in [[GitHub]]. It's easiest to download the entire folder as a zip file. If for some reason you aren't allowed to download zip files or JSON files to your computer, just copy the text found here in address.postman_collection.txt, paste it into a new file, and then change the .txt extension to .json. To upload the JSON file to Postman, click on the import button at the top of the window, drag the file to the import window. We're looking for the file called address.postman_collection.json.
>
> **[1:36](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=96)** And then click the Import button. You now have a new collection called Address API. Let's open up our collection. There's only one request in our new collection called Get Address. Let's click on it and run it. We'll click send. And we can see that we get an address in response, but right now the address has come back as [[HTML]]. We want to look at this address as JSON. So in this HTML dropdown we're going to choose JSON, and now it looks more familiar. The name of each field is in red and the value of each field is in blue. Let's take a look at the response. Notice how the address field is actually populated by four additional fields, street, city, state, and postal code. That's what we mean by nested JSON. Those four fields are nested inside the address object. When we are asserting on nested JSON responses our script needs to be a bit different. Let's write a nested JSON assertion. We're going to write an assertion to validate that we get the correct city in the response to our Get Address request. So let's click on the Tests tab in our Request pane. Then we'll go over to those snippets and we'll scroll down until we find response body JSON value check. We'll click on that
>
> **[3:08](https://www.linkedin.com/learning/postman-essential-training-21969591/nested-json-assertions?u=76281980&t=188)** and now we can see that our test has been added. Let's rename our test to Correct city is returned. And now for the field value that we are expecting we're going to change this value to address.city. This is because the address value comes first in the JSON data and then the city field is a nested name value within the location. Now we're going to change the value that we're expecting to Belmont in quote marks and now we will click save and let's send our request. And we can see that our test passed. Let's go back to the body of the response and go back to the JSON. Remember that whenever you're asserting on nested JSON you need to navigate there from the outside level in. So if you wanted to assert on the street field, you'd reach that value by using JSON data .address.street. You may want to add this assertion to the Get Address request for some extra practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (19), [[HTML]] (2), [[GitHub]] (1)
> **Env Vars:** json (17), api (5), html (2)
> **UI Navigation:** click on (4), dropdown (1), scroll down (1)
> **Exercise Files:** download the (2), zip file (1)
> **File Paths:** address.postman_collection.txt (1), address.postman_collection.json (1)
> **Code Identifiers:** postman_collection (2)
> **Cross-References:** go back to (2)
> **Tools:** github (1), postman (1)

#### [Asserting on complicated JSON](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=0)** - [Instructor] The [[JSON]] format is really great for sharing information because it's so expandable. JSON data is made up of these components, name-value pairs, objects, and arrays. A name-value pair is just what it sounds like, a field name and a value for the field name, such as first name, Amy. An object is a group of name-value pairs. So here's a name of Fido and a type of dog. So this must be a pet object. An array is a group of objects. So here's one pet, and another pet. So this is a pet's array. To make things more complicated, objects can contain other objects or arrays, and arrays can contain groups of objects or groups of other arrays. So far, we've tested the contact list API which has no nesting, and the address API, which has just one level of nesting. Now let's take a look at a more complicated API. Our complicated mock API is called PetOwners, and you've probably already downloaded the file in the [[GitHub]] repository for this course. If you have any trouble downloading the JSON file, which is right here, PetOwners.postman_collection.json, you can instead go to the text file, copy the text in the text file, save it as a new text file, and then change the .txt extension to .json.
>
> **[1:39](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=99)** To upload the JSON file to Postman, click on the Import button, then you can drag the file into the Import window, or if you want, you can navigate to the file via the file system. Let's try that way. We will click the Choose Files button, and we will find our PetOwners.postman_collection.json file. We'll click Open, and then Import, and our collection has been imported. Let's take a look at our new collection. It has just two requests. Get Pet Owners and Get Pet Owner. Let's look at Get Pet Owner first. We'll click on the request, and now we'll click the Send button, and let's take a look at the response. This request is returning just one record, pet owner number one. The pet owner is an object. You can tell that it's an object because it's enclosed in curly brackets. The pet owner has an ID and a name. Then it has an object called pets. The pet's object contains two arrays, a cat's array and a dog's array. You can tell that these are arrays because they have straight brackets. The cat's array contains two cat objects, and each cat object is made up of the name-value pairs of name, age, and breed.
>
> **[3:14](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=194)** So here's one cat object, and here's another cat object. The dog's array contains one dog object, and that object is also made up of name, age, and breed. Now that we understand the structure of the pet owner object, we can write an assertion for the JSON response. Let's see if we can assert that the pet owner's second cat is a Siamese. So let's expand our request window here a bit, and we'll click on the Tests tab. So then we're going to choose the Response body JSON value check snippet. There it is, so we'll click on it. We will change the test name. We're going to change it to Amy's second cat is a Siamese.
>
> **[4:09](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=249)** And now let's change the value that we are expecting to be Siamese. Now we're going to replace the value after jsonData with the structure that we'll need to get to the appropriate value. We're going to start with pets, because that's the object that contains the cats. So we'll have jsonData.pets. Next, we'll add a period, and then we will add cats because that's the array of cats. We are looking for the second cat in the array, so we need to add a 1 in brackets next to cats. It might seem unusual to add a 1 when we are looking for cat number two, but this is because objects in an array are numbered beginning with 0. Finally, we need to add a period, and then add breed, because we are looking for the name-value pair that starts with the breed. So let's click Save, and we'll send, and we can see that our test passed. Now let's look at an even more complicated JSON response. We're going to look at the Get Pet Owners request. Let's run that request and take a look at that response. We get an object in response, and that object contains an array of objects called owners. Looking at the curly braces, one tab in from the owners,
>
> **[5:43](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=343)** we can see that there are three pet owner objects, Amy, Bob, and Carol. Each pet owner object has the same structure that Amy had when we just asked for her information in the previous request. We can see that Amy has two cats and one dog. Bob has two cats and no dogs. Carol has one cat and three dogs. How would we write an assertion for this complicated response? Let's say that we wanted to assert that Carol's second dog is named Fred. So let's open up our Request window, and choose the Tests tab, and we'll find the JSON data snippet. Here it is. Let's change our test name to be Carol's second dog is named Fred. And now let's put Fred in as the value that we are expecting. Now we just have to figure out how to find Fred. Let's remove this value section. We are going to start with owners, because that is the outermost array. And because it is an array and Carol is the third pet owner, we need to add a 2 in brackets next to owners. Next we're going to need to add .pets, because that is the next section moving from outer to inner.
>
> **[7:21](https://www.linkedin.com/learning/postman-essential-training-21969591/asserting-on-complicated-json?u=76281980&t=441)** Then we're going to add .dogs, because we are going to be looking at the dogs but we have an array of dogs and we need the second dog. So we're going to add a bracket with a 1 in it to get to the second dog. And then finally, we need to get to the name-value pair. So we're going to put .name. So the whole thing is jsonData.owners, 2, .pets.dogs, 1, .name. Let's save, and let's see if we found that name-value pair correctly. And we did, our test passed. The key to asserting on complicated JSON is to work from outer to inner, and to distinguish between arrays and objects. Selecting an array will always involve adding a number in brackets, even if there is only one item in the array. That item will be 0. Objects will never have bracketed numbers after them. Now it's time for a JSON assertion challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (13), [[GitHub]] (1)
> **CLI Commands:** cat (11), find (3), make (1)
> **Env Vars:** json (10), api (4)
> **Definitions:** is a  (5), is an  (2), is called (1)
> **UI Navigation:** click on (4), go to (1), navigate to (1)
> **Code Identifiers:** jsondata (3), postman_collection (2)
> **File Paths:** petowners.postman_collection.json (2)
> **Tools:** github (1), postman (1)

#### [Challenge: Complicated assertions](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/postman-essential-training-21969591/challenge-complicated-assertions?u=76281980&t=5)** - [Instructor] Now that you understand how to assert on complicated [[JSON]], let's do an assertion challenge. We'll use the same collection we used in the previous video, the pet owner's mock collection. In the Get Pet Owners request, how would you assert that Bob's first cat is two years old? One hint. So far, we've been asserting on text fields. Bob's cat's age is an integer. So when you write your assertion, you don't need to put the number two in quotes. Write the assertion in the Tests tab of the request and run the request to see if your test passes. This exercise should take you less than five minutes. So if you find it's taking you longer than that, go back and review the examples in the previous video. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **CLI Commands:** cat (2), find (1)
> **Cross-References:** previous video (2)
> **Env Vars:** json (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Solution: Complicated assertions](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=0)** - [Instructor] How did you do? Were you able to write the assertion that Bob's first cat is two years old? Let's walk through the answer. We start with the owners. Bob is the second owner, so we will use owners[1].
>
> **[0:25](https://www.linkedin.com/learning/postman-essential-training-21969591/solution-complicated-assertions?u=76281980&t=25)** Next, we add the pets object. Then we add the cats array. We are looking at Bob's first cat, so we need cats[0]. Then we add age. We are expecting the age to be two, so we add to.eql[2]. When we run this request, the assertion passes. You will definitely encounter complicated [[JSON]] when you're working with your own APIs. Just remember these tips to navigate through complicated assertions. Objects are in curly brackets. Arrays are in square brackets. Arrays will always need a bracketed number, even if there's only one item in the array. Then the number will be zero. Work from left to right using the indentations to determine the order of navigation. Any time there's an indentation, you'll need a new dot in your navigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **CLI Commands:** cat (2)
> **Env Vars:** json (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Running Your Test Collections

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the Collection Runner](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=0)** - [Instructor] Now that we have a collection with assertions we can start automating our tests instead of running them manually by clicking the send button. The first type of automation we'll look at is the collection runner. The Collection Runner is a part of Postman that will send in each request of your collection automatically. It saves you from having to select a request, press send select the next request, press send, and so on. It's a nice bridge between running our tests manually and running them through the command line. I like to check my test collections with the collection runner before I try to run them in Newman. Let's add one more request to our negative tests folder before we use the Collection runner. This will be a cleanup request where we will delete the contact that we added in the setup. So let's open our negative tests folder. You can see that we added a contact as part of our setup here, but we never delete that contact. It's a good idea to delete any resources that you create during your tests to help keep your database clean. So let's open up our basic endpoint tests folder. We're going to click on delete contact. We're going to copy that duplicate and then we will pull that copied request down at to the very end of the negative tests folder. Then let's rename that request. We're going to call it cleanup, delete contact. You might be wondering when we are deleting the contact
>
> **[1:38](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=98)** if the contact ID that we are using to delete it is the correct one. Well remember that when we create a contact here that contact ID gets saved and then we delete the contact with that contact ID that was saved. When we add in our new contact in this setup step, that will be a new contact ID and when we delete our contact we are deleting that contact ID from the contact that we created in the setup step. So now that we have added this delete contact request now we can run our entire collection. So let's click on the contact list collection and then the three dot menu and then we will choose run collection. Make sure that your environment is still set. You should see contact list here in the upper right if you don't use the dropdown to select that environment because we will need those variables. Then we click the run contact list button and we can see that all of our requests have run very, very quickly. Let's take a look at our test results. We can see that we've got a number of past tests, 24 and then zero failed tests. And we can also see the name of all of the requests that we are making and the name of all of the tests that we are running for each request.
>
> **[3:15](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=195)** We can also see the response code that we got for each request how long the response took and the size of the response. And we even have a run again button if we want to run our test again. Let's see what a failing test looks like in the collection. We're going to make a small change to one of our requests and then run the collection again. So let's go to the get contact request. And in our assertions, instead of using Environment first name as the value we are asserting on let's put in a different name. We'll put in Mary because right now in our variables we have Carol. So now we will be asserting that the new contact we created has the first name of Mary. We know that it doesn't have that first name so the test should fail. So let's click on save. Let's go back to the collection runner and we will click run again. Okay, and now we can see that we have a failed test. If we click on that failed link, we will go directly to the failed test and we can see exactly what was wrong. It expected Carol to deeply equal Mary, which of course it does not. So now let's fix our test. So we'll go back to the get contact request and we will change this again to have that environment first name variable. We will save and let's go back to the collection runner and run the collection again.
>
> **[4:51](https://www.linkedin.com/learning/postman-essential-training-21969591/using-the-collection-runner?u=76281980&t=291)** And now we can see that all of our tests passed. You don't need to run all of the tests in your collection if you don't want to. You can also run the tests in just one folder. So now let's just run all of the tests in the basic endpoint tests folder. So we're going to click on the three dot menu and we're going to choose run folder. And we get a new runner that shows just the requests in that one folder. So let's run that so we can see now we had 12 tests that ran and passed. It's also possible to exclude tests from a test run. Let's try that. We'll click on the three dot menu next to the basic endpoint tests folder. We will choose run folder again. And this time let's uncheck one of the requests. We'll uncheck update contact. And now we'll run the contact list folder and we can see that now we only had 11 tests run. Keep in mind that when you are running your collections in the collection runner, they are going to run in order and the state of the data is going to change from one test to the next. For example, if you skipped the add contact test when the get contact test is run the test will fail because the old contact ID was deleted in the last run. Always think about what state your data is in before and after each test.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), select the (1), dropdown (1), go to (1)
> **Cross-References:** go back to (3), in the last (1)
> **Prerequisites:** setup (4)
> **CLI Commands:** make (2)
> **Tools:** postman (1), command line (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### [Exporting your collection](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=0)** - [Instructor] In the previous video, we learned how to run a collection with the Collection Runner, but we still had to push a button within the Postman application in order to see our collection run. We want to be able to run our collection from the command line. And in order to do that, we need to export our collection and environment. We'll be exporting them as [[JSON]] files. Fortunately, Postman makes it really easy to do this. First, we'll export the collection. So we will click on the three dot menu next to the Contact List collection. We will choose Export. Make sure that you've selected Collection version 2.1, Click the Export button. And now let's give this collection file a name. We're going to make it a little simpler than the one that they've chosen for us. We're going to name it contactList.collection.json. And we're going to save this collection to the desktop because that way it will be really easy for us to find. So let's click Save. And now our collection has been saved. We can see it right here on the desktop. Now we will export the environment. We're going to click on the Environment tab. Now, you would think that you would want to click the three dot menu
>
> **[1:33](https://www.linkedin.com/learning/postman-essential-training-21969591/exporting-your-collection?u=76281980&t=93)** next to the Contact List environment, but for some reason the export option is not there. So what we're going to do is we're going to click on that environment so it will open up here in the main window. And then we're going to go to the three dot menu at the top-right of the window. And we will choose Export there. We're going to give that environment a name. We're going to call it contactList.environment.json. And once again, we're going to save to the desktop. And there it is on the desktop. If everything went smoothly, you should now have two JSON files on your desktop. One called contactList.collection.json and one called contactList.environment.json. In the next video, we'll learn how to use these files to run Newman.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (6)
> **File Paths:** contactlist.collection.json (2), contactlist.environment.json (2)
> **Code Identifiers:** contactlist (4)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** postman (2), command line (1)
> **Env Vars:** json (2)
> **Cross-References:** previous video (1), in the next (1)

#### [Running your collection with Newman](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=0)** - [Instructor] We are now ready to run our collection from the command line. We'll be using Newman, which as you learned earlier is a tool created by Postman. You should have already installed Newman as part of your work in the setup movie. You can check to see if it's installed by opening a command window and typing Newman dash dash version and then clicking return. If you get a version number in response you have Newman installed. If you don't get a version in response go back to the first chapter, movie three setting up your test environment and follow the instructions to get Newman. Running a collection in Newman is really easy. First, we will change directories to the desktop by typing CD, desktop, and then return. This is because we saved our files to the desktop. Next, we will create our Newman command. First we will type Newman Run, then the name of our collection, contact list dot collection dot [[JSON]]. Then we'll use a dash and an E. This tells Newman that we are about to give them the environment file. Then we type in the name of our environment contact list dot environment dot JSON, and then we click return and we can see that our whole collection just ran.
>
> **[1:34](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=94)** Let's take a look at the output. So starting up here, we see the name of our collection contact list. Then we see the name of our first folder basic endpoint tests. Then we see the name of our requests. Log in, get contact list. Add Contact. We see the name of our assertions response time is less than 3000 milliseconds. Status code is 200 and so on. If we scroll down a little more, we'll see our next folder the negative tests folder, and if we scroll all the way down to the bottom, we will see a chart that shows how many iterations of the collection we ran which was just one, how many requests we ran, which was 14. The number of test scripts that we ran, the number of assertions we ran, and we can see that we had no failed assertions. In addition to the dash E command modifier there are other ways you can modify your Newman command. You can see the other command options by running Newman run dash H. This is like the help menu. It shows you all of the different possible options that you could send in when you are running Newman. You don't have to be in the same folder location as your collection and environment files if you don't want to be. For example, if your files were in this folder location project Newman contact list, you could navigate
>
> **[3:10](https://www.linkedin.com/learning/postman-essential-training-21969591/running-your-collection-with-newman?u=76281980&t=190)** to that location in the command line like this Newman Run and then Project Newman contact list, and then the name of the file, and then you have the dash E to put in the environment, and then projects Newman contact list. That's your navigating to the correct folder and then the name of the environment file. This is helpful if you want to set up Newman to run in your CICD environment. We'll be talking more about this in our final chapter coming up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Env Vars:** json (2), cicd (1)
> **Tools:** command line (2), postman (1)
> **Cross-References:** go back to (1), coming up (1)
> **Prerequisites:** setup (1), set up (1)
> **CLI Commands:** cd (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing with API testing](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=0)** - [Instructor] Congratulations. You've created a Postman Collection with assertions to test an API, learned how to run it with a Collection Runner, and learned how to run it from the command line with Newman. What are some next steps you can take to learn more about Postman? You can continue to use the Contact List API to practice writing different kinds of assertions. You can use the Pet Owners mock API to practice navigating through [[JSON]]. You can practice with other public APIs, such as the Swagger Petstore and the Poke API. You can also start applying what you've learned about APIs at your own workplace by integrating your Postman tests into your workplace's CI/CD platform. Here are some links to documentation for setting up Newman to run with the most common CI/CD tools, [[Jenkins]], GitLab, Travis CI and Circle CI. Postman also recently created a [[CLI]] tool, which offers more security when running automated tests. You can read more about the tool here. And if you enjoyed this course, you will probably enjoy my book, "The Complete Software Tester," which is available on Amazon. This book has an entire section on [[API Testing]], as well as chapters on jots, response codes, how to organize your API tests, and how to decide which API tests to automate. The links mentioned on all these slides can be found in the course links file
>
> **[1:34](https://www.linkedin.com/learning/postman-essential-training-21969591/continuing-with-api-testing?u=76281980&t=94)** in the [[GitHub]] repository for the course. The name of the file is Postman Essential Training Course Links. I hope that you've found API testing with Postman to be easy and fun. With automated API testing, you can get valuable test results for your builds in seconds. Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[API Testing]] (3), [[JSON]] (1), [[Jenkins]] (1), [[CLI]] (1), [[GitHub]] (1)
> **Env Vars:** api (9), json (1), cli (1)
> **Tools:** postman (6), command line (1), gitlab (1), github (1)
> **CLI Commands:** cd (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kristin Jackvony]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/postman-essential-training-4362153)

## Skills Covered

- Postman API
- API Testing
- Test Automation

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