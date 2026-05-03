---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-automation-and-testing
url: "https://www.linkedin.com/learning/python-automation-and-testing"
duration_minutes: 98
duration: 1h 38m
level: Intermediate
updated: 3/6/2024
learners: 107193
skills:
  - Python (Programming Language)
  - Test Automation
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH0CzFeraiXWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1620678936944?e=2147483647&amp;v=beta&amp;t=H-GGFJpuxObnSk03o7D4MD3LRT19N2UsNLwvWByd3FY"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your Skills in Python]]'
prev_courses:
  - '[[Python Data Structures and Algorithms]]'
next_courses:
  - '[[Python GUI Development with Tkinter]]'
path_nav: '[{"path":"Advance Your Skills in Python","position":4,"total":7,"prev":"Python Data Structures and Algorithms","next":"Python GUI Development with Tkinter"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/test-automation
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Automation%20and%20Testing.md)

![Python Automation and Testing](https://media.licdn.com/dms/image/v2/C4E0DAQH0CzFeraiXWQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1620678936944?e=2147483647&amp;v=beta&amp;t=H-GGFJpuxObnSk03o7D4MD3LRT19N2UsNLwvWByd3FY)

# Python Automation and Testing

> Do you spend too much time manually testing your user interfaces? Automation is the answer. Python and Selenium offer a simple but powerful framework to script any testing. Here, instructor Bhoomika Agarwal shows how to use the combination of Selenium WebDriver and Python code to automate web UI tests. Follow along and learn how to locate elements, navigate pages, test user interactions with forms

> [LinkedIn Learning](https://www.linkedin.com/learning/python-automation-and-testing) | 1h 38m | Intermediate | 107K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. What Is Automation Testing and Python-Selenium Framework?**](#1-what-is-automation-testing-and-python-selenium-framework) (5 videos)
  - [What is automated testing?](#what-is-automated-testing)
  - [Python-Selenium bindings](#python-selenium-bindings)
  - [A simple code example](#a-simple-code-example)
  - [Cross-browser support](#cross-browser-support)
  - [Cross-browser support](#cross-browser-support)
- [**2. Parsing the HTML DOM Structure**](#2-parsing-the-html-dom-structure) (11 videos)
  - [What is the HTML DOM structure?](#what-is-the-html-dom-structure)
  - [Locating elements by ID](#locating-elements-by-id)
  - [Locating elements by name](#locating-elements-by-name)
  - [Locating elements by XPath](#locating-elements-by-xpath)
  - [Locating elements by class](#locating-elements-by-class)
  - [Challenge](#challenge)
  - [Solution](#solution)
  - [Challenge](#challenge)
  - [Solution](#solution)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**3. Navigating through Pages**](#3-navigating-through-pages) (5 videos)
  - [Page interaction](#page-interaction)
  - [Filling forms](#filling-forms)
  - [Drag and drop elements](#drag-and-drop-elements)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**4. Waits**](#4-waits) (3 videos)
  - [What are waits and why do we need them?](#what-are-waits-and-why-do-we-need-them)
  - [Explicit waits](#explicit-waits)
  - [Implicit waits](#implicit-waits)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/welcome?u=76281980&t=0)** - [Bhoomika] Welcome to Automating Web Testing with [[Python (Programming Language)|Python]]. I'm Bhoomika Agarwal, and I'm your pilot for this topic. Have you spent a large portion of your time manually testing your web UI? If yes, you should hop onto this flight. I'm a huge fan of [[Test Automation]] using Python [[Selenium]] for the simple reason that it's so easy to use and so powerful at the same time. The main problem with test automation is that its importance is underrated and its complexity is overrated. Python Selenium breaks both these myths by giving you a very simple framework that can automation any web UI testing for you in a jiffy. You will see this for yourself, as you jump on board the plane and take off with me. We'll be covering locating elements, navigating through pages, user interaction, waits, and much more. Before you know it, you'll have arrived at your destination. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Test Automation]] (2), [[Selenium]] (2)
> **CLI Commands:** python (3)
> **Speakers:** - [bhoomika] (1)

#### [What you should know](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/what-you-should-know?u=76281980&t=0)** - [Instructor] What do you need to know to get started with this course? Essentially, no prior knowledge is required. However, it is good to have some knowledge of [[Python (Programming Language)|Python]] which covers the basics, syntax and [[Object-Oriented Programming (OOP)|object-oriented programming]] concepts. It is also good to have a basic working knowledge of [[HTML]] as we will be working with Web UIs. I personally recommend you to try out the courses [[Python Essential Training]] and [[HTML Essential Training]]. In addition to the knowledge that you require, we will be using the following tools. You are required to have Python installed on your system. Python is installed by default on [[Linux]], Mac, [[Ubuntu]], etc. On [[Windows]], you have to install Python separately. We will be using the web ID IDLE throughout this course which comes installed by default with Python on Windows. You will have to install it separately on all other operating systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[HTML]] (2), [[Windows]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Linux]] (1)
> **CLI Commands:** python (6)
> **Env Vars:** html (2), idle (1)
> **Prerequisites:** install (2), required to (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/using-the-exercise-files?u=76281980&t=0)** - [Instructor] I want to familiarize you with how to use the exercise files. Always remember that the best way to learn coding is to try out the codes yourself. It is always better to use these files just as a reference. You have access to the same exercise files that I have here with me. Let's see how these files are structured. I have placed the folder on my desktop, but you can put them at any location convenient to you. In the Exercise Files folder, all the files are structured according to the chapter. Within each chapter folder, the files are structured according to the video that we are going to look at. Within each folder, you'll see the files that you'll require for that video. I just want to bring to your notice that, in the second chapter, within each video, we have two separate folders for the start files and the completed files. This is because we'll be building upon the code in each subsequent video. The start folder contains the files that we get started with, and the completed folder has the files that you will get at the end of this video. For any common files that are being used throughout the chapter, those are placed in the chapter folder. I would strongly encourage you to try out the codes for yourself and use these exercise files just as a reference.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (4)
> **Speakers:** - [instructor] (1)


### 1. What Is Automation Testing and Python-Selenium Framework?

[↑ Back to Table of Contents](#table-of-contents)

#### [What is automated testing?](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=0)** - [Instructor] Understanding the importance of automated testing is the key to an effective test strategy. Automating our test cases saves cost and time of testing while increasing the quality and test coverage. [[Test Automation]] enables [[Continuous Delivery (CD)|continuous delivery]] of software by allowing quick testing around the clock. Also, it enables faster regression testing that may be required after debugging or upon further development of software. It is easy to scale to a variety of devices and environments, thereby allowing cross browser and cross device testing easily. Mike Cohn defines three layers of test automation. Unit tests, API or service tests, and UI tests. The bottom most layer of the pyramid is comprised of unit tests. These are the most numerous and have maximum coverage. A unit test can pinpoint bugs in code to the level of the line where it has occurred. They are used to test small pieces of code, and hence, can not be used for [[Integration Testing]] or system testing. Let's skip to the UI layer of the pyramid and look at it next. The UI layer should be used to test only the functionality of the UI elements.
>
> **[1:36](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=96)** Let's take the example of a simple calculator application that allows a user to add, subtract, multiply, or divide two integers and displays the answer to the user. To test this application through the UI, we would write a test to launch the application, enter values into the field, enter the operation to be performed, and then check the actual and expected result. This form of testing is a redundant in that it is brittle, expensive, and time consuming. Each test will invoke the code for the operation and also test the code that displays the result. Although many test cases need to checked, not all of them need to run through the UI. This is where the API or service layer plays a role. The service layer of the pyramid tests the functionality in terms of services. A service is a function or an operation that the application performs on some inputs to produce an output. In the case of the calculator, there are four services for each of the four operations that it can perform. The aim of service layer of testing is to separate UI testing from functionality testing, thereby, saving on the costs and time of UI testing. This layer is often missed out and is essential to an affective test strategy.
>
> **[3:09](https://www.linkedin.com/learning/python-automation-and-testing/what-is-automated-testing?u=76281980&t=189)** As the number of UI tests increases, so does the cost to maintain them, and time of execution. At the same time, the quality of testing and the end to end test coverage increases. Separation of automation test cases into these three layers helps optimize the trade off between cost, quality, and time. In this course, we will look at the top most layer of the pyramid, that is the UI layer. [[Python (Programming Language)|Python]] provides many in built libraries for automated web testing. For [[Unit Testing]] and [[API Testing]], the Python library's unittest, pytest, and nose provide support for UI level testing. [[Selenium]] and Python are commonly used. In this course we will explore automated web testing at the UI level using Selenium and Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Test Automation]] (2), [[Selenium]] (2), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Integration Testing]] (1)
> **CLI Commands:** python (4)
> **Env Vars:** api (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Python-Selenium bindings](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=0)** - [Instructor] As the tagline of [[Selenium]] states, Selenium automates browsers. In testing it is used for the functional and [[Integration Testing]]. Selenium is primarily used for web UI automation which is the automatic execution of the actions performed in a web browser window by a user. It enables robust browser based regression testing. Selenium is also used to scale tests to multiple browsers and environments using the Selenium grid. The [[Python (Programming Language)|Python]] Selenium bindings are used to leverage the power of the Selenium WebDriver through Python. The main motive is to access all the functionalities of the Selenium web driver in an intuitive way. Now let's head over to the installation of Selenium. I'm going to go to my browser and open the official Python Selenium documentation for the same. In order to install Selenium you are required to have Python installed along with Pip which is Python's package installation manager. In case you do not have Python installed on your [[Windows]] machine, you can follow these steps to install it. While installing Python on Windows using the MSI given here, there's an option that you can check to add Python to the path environment variable. In case you have missed that out
>
> **[1:33](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=93)** then you can follow these steps to install Python Selenium on your machine. In the case that you have added Python to your path environment variable then you can go ahead and install Python using Pip. The process of installing Selenium using Pip is very simple. All you need to do is run a single command that is pip install selenium. This command will work irrespective of your OS if you're installing Selenium using Python Pip. Along with installing Selenium on your system you will also need to install the drivers for the browser of your choice. In this course we will be using Firefox as the default browser. For Firefox the geckodriver needs to be installed from the following link. In the case that you wish to use a browser of your choice you have to install the drivers for that browser as well. You need to ensure that the driver for the browser that you're installing is placed in the path environment variable of your system. This path environment variable can be located in different places in different OS's. Regardless of that you have to ensure that the driver is placed in the path environment variable to get the script up and running. Let's now ensure that the installation is complete and get a feel of what the Selenium framework can do
>
> **[3:07](https://www.linkedin.com/learning/python-automation-and-testing/python-selenium-bindings?u=76281980&t=187)** using the simple test script. So I'm going to minimize my browser window and head over to the exercise files and run a simple test script from there. I have the exercise files folder here, we're gonna head to chapter one and to the second video in the course. I have a Python test script already saved here. I open it with Idle which is a Python editor. We look at the details of this program line by line later on during the course. I will go ahead and run this script and we can then look at what it does. So as you can see this script opens the Selenium official website, that is [seleniumhq.org](https://seleniumhq.org). Now that we have the script up and running as expected we know that the installation is complete and the Python Selenium bindings have been installed successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (19), [[Python (Programming Language)|Python]] (15), [[Windows]] (2), [[Integration Testing]] (1)
> **CLI Commands:** python (15), pip (5)
> **Prerequisites:** install (7)
> **Tools:** firefox (2)
> **Exercise Files:** exercise files (2)
> **URLs:** [seleniumhq.org](https://seleniumhq.org) (1)
> **Env Vars:** msi (1)
> **UI Navigation:** go to (1)

#### [A simple code example](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/a-simple-code-example?u=76281980&t=0)** - [Instructor] Let's take a quick run through a simple code example to get a better idea of how the [[Python (Programming Language)|Python]] [[Selenium]] bindings work. I'll head over to the exercise files where I go to chapter 1 and do the third video. I have a Python script already. This is the audio. So I'm going to open the script with IDLE. In this script, we open a new browser instance. We head over the the site [python.org](https://python.org). In the website, we'll be looking for the search box and we'll be typing in the keyword pycon. Once we search for the keyword pycon, the search results will be available for eight seconds because we're making the browser window sleep for eight seconds. Following which, it will close. So I'm quickly gonna run this script and we can see how it works. So, you can see that the keyword of Python is so much fun we get to search results. And for after eight seconds, the browser window closes. This test script is just the tip of the iceberg with regards to what [[Test Automation]] using selenium can do for you. In order to be able to write your own automation test scripts, it is essential to understand the [[HTML]] dom structure and how to pass it. We will look at this in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Selenium]] (2), [[Test Automation]] (1), [[HTML]] (1)
> **CLI Commands:** python (4)
> **Env Vars:** idle (1), html (1)
> **UI Navigation:** go to (1), open the (1)
> **URLs:** [python.org](https://python.org) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Cross-browser support](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=0)** - The [[Selenium]] WebDriver supports various browsers including Firefox, Chrome, Internet Explorer, and Safari. This is useful when you want to run a single script on multiple browsers to ensure that your code is compatible with all the browsers available. Selenium can also be extended to run on various systems and platforms. Here since we're checking for web UI support we're going to check cross-browser compatibility in specific. In the case of Firefox, the FirefoxDriver binary needs to be installed separately from the [[Python (Programming Language)|Python]] site and added to the system path. An instance of Firefox browser can be created through your code using the following line. Driver = webdriver.Firefox. Let me quickly shift to the browser and show you how the Firefox binary can be installed and added to your system path. The binaries for the various web drivers provided by Selenium can be installed from the following site selenium-python.[readthedocs.io/installation.html](https://readthedocs.io/installation.html). The driver is available for Chrome, Edge, Firefox, and Safari. Once you have downloaded the driver, you need to add it to your system path so that it can be run from your script. Let me show you how to do that as well. For [[Windows]], you need to go to your PC, right click, go to Properties, go to Advanced Systems settings,
>
> **[1:37](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=97)** Environment Variables. You will see a path environment variable. You edit this and add the path for your various drivers here. Once you have added the path to your driver in the path system variable, you can access that browser from your script. So once all of this is done, let me now show you how you can use the Chrome driver in your script. So I'll quickly run to item and the sample script that we use let us run it using Chrome. So I first import webdriver. Once I have imported webdriver I'm also going to import time so that we can see the driver being installed. And to create an instance of the Chrome driver I just say webdriver.Chrome. In the case of Firefox, we were using webdriver.Firefox, for Edge, we'll simply change it to webdriver.Edge. This is the only line that needs to be changed. The [[Representational State Transfer (REST)|rest]] of your code remains the same. So I navigate my site, [seleniumhq.org](https://seleniumhq.org), and I can add a time, width of two seconds, and then close my driver. With this, the script as you can see, the script is the same.
>
> **[3:10](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-2?u=76281980&t=190)** The only line that you need to change is the driver that you're using. So I'll save this in my working code folder, as code five one. And let's run this. Instead of opening Firefox, this should open Chrome. So you can see the Chrome browser being run and the script being run on Chrome. Similarly you can do the same for Internet Explorer. For FirefoxDriver this is what we use. For ChromeDriver, you need to give webdriver.Chrome. And for EdgeDriver, once you have placed the binary and added it to the system path, you say webdriver.Edge. This is the only change that you need to make. And your script will be compatible with all the browsers that you want to run it on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (4), [[Python (Programming Language)|Python]] (2), [[HTML]] (1), [[Windows]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** firefox (9), safari (2)
> **CLI Commands:** python (2), make (1)
> **UI Navigation:** go to (3)
> **URLs:** [readthedocs.io](https://readthedocs.io) (1), [seleniumhq.org](https://seleniumhq.org) (1)
> **File Paths:** selenium-python.readthedocs.io/installation.html (1)
> **Speakers:** - the (1)

#### [Cross-browser support](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=1)** - [Iinstructor] The [[Selenium]] WebDriver supports various browsers including Firefox, Chrome, Internet Explorer, and Safari. This is useful when you want to run a single script on multiple browsers to ensure that your code is compatible with all available browsers. Selenium can also be extended to run on various systems and platforms. Here, since we are checking for web UI automation, we will focus specifically on cross-browser compatibility. In the case of Firefox, the Firefox driver binary needs to be installed separately and then placed in the system path so that web driver can locate it. This can then be accessed using the line, driver = webdriver.Firefox(). Let's quickly go to the Selenium [[Python (Programming Language)|Python]] documentation see how to install these drivers and then place them in the system path. The drivers for different browsers can be installed from this webpage, seleniumpython.[readthedocs.io/installation](https://readthedocs.io/installation). Here, we can see the drivers for Chrome, Edge, Firefox and Safari.
>
> **[1:36](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=96)** Once we have downloaded these drivers, we need to place them in the path environment variable. Let me quickly switch over to the [[Windows]] file explorer and show you how to do that. So here in the windows file explorer, we right click, go to properties, advanced system settings, and then we can see a button for environment variables. When we click on this, we are going to look for the path environment variable. And we edit this and add the path of the Chrome driver, get co-driver, edge driver and all the other drivers that we need and save this. With this, we have all of our set up ready for Firefox. In the case of Chrome, a similar process needs to be followed by installing the binary, placing it in the system path, and then we can access it using the line, driver = webdriver.Chrome(). The only thing that changes here is the name of the browser. It's that simple to get your script compatible to different browsers. Let me quickly switch to the code editor and show you how we can write a simple script to open a webpage in Chrome. So here we are on our code editor
>
> **[3:11](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=191)** and as with all other scripts we start with importing the WebDriver. Then we are going to import the time module so that we can see our script in action. And let's create an instance of the Chrome driver using webdriver.Chrome(). Now that we have this driver ready, we are going to use it to navigate to the selenium website, which is [selenium.dev](https://selenium.dev).
>
> **[3:54](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=234)** And then we add a time sleep of two seconds so that we can see the website opening. And finally, we close our driver with driver.close. And with this, we have a script that will run on Chrome. Let me save this in my working code folder
>
> **[4:24](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=264)** as code one four,
>
> **[4:32](https://www.linkedin.com/learning/python-automation-and-testing/cross-browser-support-8632025?u=76281980&t=272)** and now let's run this. So as you can see, we have a webpage opening in Chrome, navigating through the website and returning back. In the case of EdgeDriver, we again need to install the binary, place it in the system path, and use driver = webdriver.Edge. So just by changing the name of the driver it's really simple to make your code compatible to different browsers and to different environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (5), [[Windows]] (2), [[Python (Programming Language)|Python]] (1)
> **Tools:** firefox (6), safari (2)
> **UI Navigation:** go to (2), click on (1), switch to (1)
> **Prerequisites:** install (2), set up (1)
> **CLI Commands:** python (1), make (1)
> **URLs:** [readthedocs.io](https://readthedocs.io) (1), [selenium.dev](https://selenium.dev) (1)
> **Speakers:** - [iinstructor] (1)


### 2. Parsing the HTML DOM Structure

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the HTML DOM structure?](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/what-is-the-html-dom-structure?u=76281980&t=0)** - [Instructor] The [[HTML]] [[Document Object Model (DOM)|document object model]], or the HTML DOM defines the standard way for accessing and manipulating HTML documents. In the document object model, documents have a logical structure which is very much like a tree. To be more precise it is like a forest or grove which can contain more than one tree. The DOM presents an HTML document as a tree structure with elements, attributes, and text. The structure of the DOM for any document will resemble the actual structure of the mock up of the document. With the DOM, programmers can create and build documents, navigate their structure, and add, modify, or delete elements and content. Consider the following HTML document. The DOM for this document includes all the elements and any text nodes within those elements. The core above, creates an object hierarchy as shown in the diagram. Each element under the document root, that is HTML, there's an element node, and these element nodes have text nodes containing the text that is within the element. If there were an element with attributes, an attribute node would be created for that element and any text for the attribute would create a text node under that attribute node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[Document Object Model (DOM)|Document object model]] (2)
> **Env Vars:** html (6), dom (5)
> **CLI Commands:** node (4)
> **Speakers:** - [instructor] (1)

#### [Locating elements by ID](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=0)** - [Instructor] The very first step in [[Test Automation]] is to locate [[HTML]] elements. Let's take a look at locating elements using the id attribute along with a code example for the same. The HTML id attribute specifies a unique id for an HTML element. The rules for the id attribute are: it must contain at least one character, it must not contain any space characters, the id value is case sensitive, and it must be unique in a document. We use this method to locate elements when the id attribute of an element is known. The first element with a matching attribute value will be returned. Let's go ahead and try a hands-on on how to locate the elements using the id attribute. I'm going to head over to the exercise files where under chapter two I have an HTML code file that we will be using for the whole of chapter two to run our code. So I'm going to open this script with sublime text. As you can see, we have a form element with id loginform. We'll be writing a [[Python (Programming Language)|python]] script to locate this form element. I'm going to head over to the exercise files again and run this script to see what the HTML file looks like in the browser.
>
> **[1:32](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=92)** So when I double click on it I see the output which says it's a form example. It has two fields, a login button, and a clear button. So this is the path of the HTML file. I'm going to copy this because we will be needing this in our python script. Now I'll head over to IDLE and we'll start writing our python script to locate HTML elements. So I'll open IDLE and here I'll create a new file. In this file let's start writing our script. So the very first thing that we need to remember for any [[Selenium]] script is to import the web driver from selenium. So this line imports the web driver which is used to control the browser instance. Then I create a driver variable which holds an instance of my web browser. Since we're using Firefox in our tutorial, I'm going to specify webdriver.Firefox(). So this will create a new instance of Firefox and initialize it. After this, I will open the file. I've already copied the path of the HTML file, so I'm going to paste it right here. Close the quotes and close the bracket. This line will open the HTML file in a browser instance
>
> **[3:09](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=189)** of Firefox. I will then create a login form variable, and I need to use this variable to locate my login form by id. So the function used for locating elements by id in python selenium is called find_element_by_id. Pretty intuitive right? So, here I will put the id value of my login form. So what this will do is locate an element by id login form and store it in the variable login_form. Next, what I want to do is print this variable. So I will first say my login form element is
>
> **[4:05](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-id?u=76281980&t=245)** and then I will print the variable login_form. Now the user would want to close the browser instance so there's a function called close which is invoked on the web browser instance. In this case that instance is stored in driver. So I say driver.close to close my web browser. With this we have our script ready. So let's save it. I'm going to save this on the desktop. I'll create a new folder, and let's call it working code. Inside the working code folder I'm going to store my file as code2, simply because we're on the second chapter, and let's save this. Now that we are all ready with the script, let's run it and see what the output is. So our file is open and you can see the output as my login form element is, and this is your login form element. So this is how we use python selenium to locate HTML elements by their id attribute.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (10), [[Python (Programming Language)|Python]] (5), [[Selenium]] (4), [[Test Automation]] (1)
> **Env Vars:** html (10), idle (2)
> **CLI Commands:** python (5)
> **Tools:** firefox (4), sublime (1)
> **Code Identifiers:** login_form (2), find_element_by_id (1)
> **UI Navigation:** open the (2), click on (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is called (1)

#### [Locating elements by name](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=0)** - [Instructor] We can also look at elements using the name attribute. Let's take a look at this along with the code example. The [[HTML]] name attribute specifies a name for an HTML element. It does not have to be unique in a document and the name attribute is usually used in [[Forms]] to reference the element when the data is submitted. This is commonly used for logging into a website with a username and password. We use this method to look at elements when the name attribute of an element is known. In the case that there are multiple elements with the same name, the first element with the matching attribute value will be returned. Let's head over to the HTML webpage that we used in our previous video. So we are going to look at the input element using its name attribute, that is username. I'm going to copy this, so we can use this in our code. Now, I'll head over to the [[Python (Programming Language)|Python]] script that we used in our previous video. So here, I am going to first change the name of the variable to username. And now I need a method to look at elements by name. So in Python Python [[Selenium]], that method is simply called find element by name, pretty intuitive again. Here I will paste the username that I copied and I'm also going to change my print statements.
>
> **[1:34](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-name?u=76281980&t=94)** My input element is and I will also change this to the variable name. So with this, we have all the changes made in our file. Now let's go ahead and run this and see what the output is like. So here you see that the output printer is my input element is and the input element is printed after it's located by name, so in Python Selenium, this is how we look at HTML elements by name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Python (Programming Language)|Python]] (4), [[Selenium]] (2), [[Forms]] (1)
> **CLI Commands:** python (4), find (1)
> **Env Vars:** html (4)
> **Cross-References:** previous video (2)
> **Speakers:** - [instructor] (1)

#### [Locating elements by XPath](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=0)** - [Narrator] Besides the ID and the name attributes, we can also locate elements using the XPath. Let's take a look at this along with a code example. XPath stands for XML path language. It uses path expressions to identify and navigate nodes in an XML document. As [[HTML]] is an implementation of XML, the power of XPath can be extended to HTML. These path expressions look very much like the path expressions that we use in traditional computer file systems. That is, they follow a tree or a folder structure. The HTML node is selected by following a path or steps along the dome tree and can be used to select one or more nodes in the document. XPath is used to locate elements when a specific ID or name attribute is not available for a node. It can be used to locate nodes in absolute or relative terms. In the case of an absolute path, the path of the name is specified right from the root node. In the case of relative paths, the path of the node is specified relative to another node that has an identifying attribute. It is generally advised to not use an absolute XPath
>
> **[1:36](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=96)** as even the slightest change in the application structure could cause it to fail and become invalid. Let's head over to the HTML code that we were using. We are going to locate the form element with ID loginForm using XPath. We'll take a look at how to do this using relative terms and absolute terms. So I'm going to close this and head over to my desktop, where I go to the working code folder. We'll get started with the code that we were using so far in this chapter, and since we're locating the login form element, I'm going to replace the username variable with login_form. Let's take a look at how to do this in absolute terms first. So I'll call my variable login_form_absolute. The function to locate elements using XPath is called find elements using XPath. So here we will specify the complete or the absolute XPath. So we first start from the HTML element. Now we get to the body element, and then we specify that we want the first form element to be selected. I would generally not advise you to use the absolute path because any changes in the intermediate path structure could cause it to become invalid. So, what's a better way to do this?
>
> **[3:10](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=190)** In this case, we use a relative XPath, so let's see a relative XPath for the same element. So I'll call the variable login_form_relative and I say driver.find_element_by_xpath, and just to cut down on the complete path, I'm going to give the levels using backslashes, and then say that I want to select the form element at the third level. So this is a relative path, and in this case any changes in the intermediate path will not affect the path of the form element. So I would advise you to use this as it is much safer, and in case I want to make this relative path more specific using a given ID or the name element, there's also a way to do that. So I'm going to use the ID element of this form to locate it. So I'll call the variable login_form_id and I say I want to find the element by XPath...
>
> **[4:25](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=265)** And again, I give the relative path. So I will give form, and instead of specifying that it's the first element I will say that I want ID login form. So here, as you can see, I've made the relative path much more specific. Now that we have all these elements, let's change our print statement. So, I say "My login form is," and in the print statements I change the variable names again. So, I say login_form_absolute and I'll copy this print statement for the others and paste it here. I need another one here since we have three elements, so I say I want the relative one to be printed, and the one with the ID to be printed. So with this we have our code all ready to run, so I'll save it and let's run the module and see how it works. So as you can see, we have the three login form elements printed. The three variables have been printed out here. So this is how you use absolute and relative paths in XPath. Again, I would like to remind you that XPath is more for worst case scenario.
>
> **[5:58](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-xpath?u=76281980&t=358)** That is, you use it only when a specific ID, or name, or class attribute is not available, and also if you are using an XPath it's always more advisable to use a relative one over an absolute one. So this is how you locate elements using XPath in [[Python (Programming Language)|Python]] Selene.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** node (5), find (2), make (1), python (1)
> **Env Vars:** html (5), xml (3)
> **Code Identifiers:** login_form_absolute (2), loginform (1), login_form (1), login_form_relative (1), find_element_by_xpath (1)
> **Definitions:** stands for (1), is an  (1), is called (1), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Locating elements by class](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=0)** - [Instructor] Along with the methods that we've seen so far we can also locate elements using the class attribute. Let's take a look at this along with a code example. The [[HTML]] class attribute specifies one or more class names for an HTML element. These class names are used to point to a calls in a stylesheet. Typically a class is used to group a number of elements that have the same format or the same transition or have the same form, color, or anything in common. We use this method to locate elements when we know the class attribute of one or more elements. The first element with a matching attribute value will be returned. Let's take a look at the HTML code that we have been using so far. So here, we have a heading element with a class, content. So I'm going to copy this class name so that we can use it in our code. Let's head over to the desktop where I'll go to the Working Code folder, and I'll open the code that we have been working with so far here. Since we do not need multiple elements, I'll delete the first two, and let's rename this login_form element to content since we're looking at the content class. The method to locate elements using class name in [[Python (Programming Language)|Python]]
>
> **[1:35](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=95)** is called class, find_element_by_class_name. Again it's pretty intuitive and here I'll add the class name that we have copied from the HTML file and let's place that here, and format this properly. While printing, again we do not need multiple print statements, and let's change this element name to the valuable name that we have been using. Also, let's change the print statement itself. So I'll call this my class element, and with this we have our code ready to run. So let's save this and let's run it.
>
> **[2:27](https://www.linkedin.com/learning/python-automation-and-testing/locating-elements-by-class?u=76281980&t=147)** So as you can see here, we have located an element successfully using the class attribute. Generally I would advise you to use the class element when you want to locate a group of elements besides the class attribute and the one that we have seen so far, there are other attributes that you can locate elements using such as CSS locators, tag names, et cetera. But generally these are the most frequently used one, and they're a good thing to have in your tool bag. This is how we use the class attribute to locate elements in Python [[Selenium]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Python (Programming Language)|Python]] (2), [[Selenium]] (1)
> **Env Vars:** html (4), css (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** login_form (1), find_element_by_class_name (1)
> **UI Navigation:** go to (1), open the (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=0)** (intense whoosh)
>
> **[0:03](https://www.linkedin.com/learning/python-automation-and-testing/challenge?u=76281980&t=3)** - [Instructor] Now that we have looked at how to locate the elements using different attributes and different nodes, let's do a small challenge on the same and see how far we have got with our learning. In this challenge, I have a couple of five steps for you that should take you all of five minutes to do overall. The first step that I want you to do is head over to the site [seleniumhq.org](https://seleniumhq.org), so let's head over to the site and see what it looks like. This is the site [seleniumhq.org](https://seleniumhq.org) which is the official [[Selenium]] site. In this site, let's do the following. The first thing you do is locate an element by id "q" and print it out. Locate an element by name "q". We locate an element with the heading "What is Selenium?" using the XPath. And lastly, we locate an element with class "selenium-sponsors" and we print all of these. It's a pretty simple challenge. Let's go ahead and see how we do this. I'll let you go ahead and give it a shot. In the next video, we walk through it step by step and see how to solve it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (3)
> **URLs:** [seleniumhq.org](https://seleniumhq.org) (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Solution](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=3)** - [Narrator] Now that we have seen the challenge that we have taken up, let's take a step by step walkthrough of how to solve it. One thing to remember is that there are many ways to do the solution to this challenge, and we are going to look at one of those solutions only. So we start off, I'm going to open the code editor directly, and we go through the first step so. As with every [[Python (Programming Language)|Python]] [[Selenium]] script, we have to import the web driver first. So once that is done, I open a driver window.
>
> **[0:42](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=42)** Now the next step to do is to open the Selenium HQ site. So I'm just gonna type in this site name. [seleniumhq.org](https://seleniumhq.org). Now the next step that we have to do is to find an element with its ID, so I'm going call the variable name element ID, and we have to find an element with ID Q.
>
> **[1:19](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=79)** And here I specify the ID that is Q. Next, we are going to print out this element, so I give the variable name element ID. This is the first two steps of how would you done. The next step that we have to do is to locate an element by name, so I'm going to call the variable element name here, just to keep things simple. And the function to find an element by name is find element by name. And the name of the element is Q again. So this will find the element by name Q, and then we print it out. The next step that we have is to find a heading by xpath. At times, it can get a little tricky to find the xpath of an element, so we're going to head over to the site and see how to do this in a simple way. So I'm going to head over to the browser. And I know that this is the heading element, so what I will do is select the element, right-click, inspect element. And here you can see the DOM structure of this element. Also you can see the xpath in a hierarchical manner at the bottom. There are many ways to find the xpath. One way to do it would be the absolute xpath which would go right from the [[HTML]] up to the H2.
>
> **[2:54](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=174)** This can be a little tricky in case the folder structure changes, so I would advise you against it. So let's look at the alternative, that is to find the relative path of this element. In that case, we will find the closest ID or class or name attribute element. Here you can see that is a div with ID main content, which is right above the heading in the hierarchy. So we'll first navigate to the element with ID main content, and then from there, we will navigate to the first heading. Heading back to the code, the xpath for that would look like driver, so I'm going to give the method name that is find element by xpath and, let's specify the xpath here so I know that there is at least two levels in the hierarchy. The star specifies that there can be any number of intermediate levels. After that, I know that my ID is main content.
>
> **[4:08](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=248)** And from here, I navigate to the next hierarchical level, and find the first heading element. So as you can see, we have navigated first to the ID and then from there, gone to the heading element. Following this, we'll just print this variable. The final step is to locate an element by the class name. So as you remember, the function name is find element by class name, and the element that we are looking for has a class name, selenium sponsors. So this will locate the element and let's print it out.
>
> **[5:04](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=304)** To wind things up, we'll close the driver, and with this, our code is ready. Let's save it. I'm going to save it in the working code as challenge two. And let's run it.
>
> **[5:37](https://www.linkedin.com/learning/python-automation-and-testing/solution?u=76281980&t=337)** In the console, you can see the four elements printed out for you. Here we have taken up a challenge where we have located various elements using the ID name and various attributes in Selenium. As we have seen four different ways to do this, so you can use a combination of these, you can use various other methods. And this is very useful when you're starting to automate code and you want to know which element to use. So this is very first step in automation, and let's look at what we can do further from here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (4), [[Python (Programming Language)|Python]] (1), [[HTML]] (1)
> **CLI Commands:** find (13), python (1)
> **UI Navigation:** navigate to (3), open the (2), select the (1), right-click (1)
> **Env Vars:** dom (1), html (1)
> **URLs:** [seleniumhq.org](https://seleniumhq.org) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Challenge](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=0)** - [Instructor] Now that we have looked at how to locate elements using different attributes and different nodes, let's do a small challenge on this and see how far we have gotten with our learning. In this challenge, I have five steps for you, that should take you all of five minutes to do overall. The first step that I want you to do is navigate to the website, [selenium.dev](https://selenium.dev). Let's head over to the site quickly and see what it looks like. This is the official [[Selenium]] site, [selenium.dev](https://selenium.dev). On the site, let's do the following. The first thing you have to do is locate an element by id "gsc-iw-id1" and print it out. Then, locate an element by name, "submit" Then locate an element by heading, "Selenium automates browsers. That's it!" using XPath. And lastly, relocate an element with class "selenium-backers", and print it out. It's a pretty simple challenge. How about you go ahead
>
> **[1:33](https://www.linkedin.com/learning/python-automation-and-testing/challenge-8631231?u=76281980&t=93)** and give it a shot yourself first. In the next video, we will walk through it step by step and see how to solve it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (5)
> **URLs:** [selenium.dev](https://selenium.dev) (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=0)** - [Instructor] Now that we have seen the challenge that we have taken up, let's take a step by step walk through of how to solve it. To start off, I'm going to open the code editor directly and let's jump right into the first step. As with all our code, I'm going to start off with importing the webdriver from [[Selenium]]. So from selenium import webdriver and the next thing I'm going to do is create an instance of Firefox using this webdriver with webdriver.Firefox. Now, the first step is to navigate to the selenium official website. So let's use driver.get to do that. And in here, I'm going to get the URL, which is [https://selenium.dev](https://selenium.dev). And with this, we are already done with our first step. The second step is to locate an element by its ID and then print it out. To make the printing out easier. I'm going to create a variable element_id and store the element that we find into this variable. So I'm going to use driver.find_element_by_id method
>
> **[1:43](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=103)** and in here, I'm going to specify the id that I'm searching for, which is gsc-iw-id1. And now that we have found this element, let's print it out using the variable we created. Similarly for element_name which is the third step, we are going to create a variable and use the driver.find_element_by_name method
>
> **[2:18](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=138)** and here we are going to specify the name of the element that we are searching for, which is 'submit.' And then we are going to print out this element using the variable that we created. Here we're already done with more than half of the challenge. I repeat here, we already done with more than half of a challenge. The next step is to find a heading by xpath. At times it can get a little tricky to find the xpath often element. So we are going to head over to the website and see how to do this in a very simple way. So off to the browser we go. I know that this is a heading element so what I will do is select this heading, right click and inspect this element. So here we can see the dome, structure of this element displayed and at the bottom of the page, we can see the hierarchical xpath. There are many ways to find the xpath. One way to do it, would be to use the absolute xpath, which goes right from the [[HTML]] element up to the h1 heading element. This can be a little tricky in case the folder structure changes and it would break the entire code.
>
> **[3:52](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=232)** Personally, I would advise against this. The alternative in this case is to use a relative xpath. So what we do in this case is find the closest ID or class or name attribute, which is identifiable and then we navigate from there. Here, you can see that the section element has a class hero homepage. So we shall use that and navigate to the heading element from there. So, now heading back to the code, I'm going to create an element called element_xpath and I'm going to use the driver.find_element_by_xpath method.
>
> **[4:54](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=294)** And here let's type out the xpath. So I remember that there were two hierarchical levels, so I will add two slashes, then we come to a section element and in the section element, we have a class which is equal to hero homepage.
>
> **[5:20](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=320)** From the section element, we want to go to the first heading element. So this is our entire relative xpath. Let's print this out using the variable we created. And the final step is to find an element by its class name. So I'm going to create a variable again and use driver.find_element_by_class_name method
>
> **[5:59](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=359)** and in here, I'm going to specify the class name which is selenium-backers and to complete the last step, we are going to also print out this element.
>
> **[6:22](https://www.linkedin.com/learning/python-automation-and-testing/solution-8629403?u=76281980&t=382)** As with all our other programs, to clean up, we close the driver and we're done with this code. So let's go ahead and save this. I will save this in my working code folder on the desktop as Challenge_01 and now let's run this. So let's open the browser and here you can see four elements printed out for you. So this is the code running and completed well, and here we have taken up a challenge where we located various elements using the id, name, and various attributes in selenium. We have seen four different ways to do this but you can use a combination of these and various other available methods. This is very useful when you're starting to automate your code and you want to know which element to use. So, this is the very first step in automation and let's look at what we can do further from here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (6), [[HTML]] (1)
> **CLI Commands:** find (6), make (1)
> **Code Identifiers:** element_id (1), find_element_by_id (1), element_name (1), find_element_by_name (1), element_xpath (1)
> **UI Navigation:** open the (2), navigate to (1), go to (1)
> **Env Vars:** url (1), html (1)
> **Tools:** firefox (2)
> **URLs:** [https://selenium.dev](https://selenium.dev) (1)
> **Definitions:** is a  (1)

#### [Challenge](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=0)** (soft music)
>
> **[0:05](https://www.linkedin.com/learning/python-automation-and-testing/challenge-23476214?u=76281980&t=5)** - [Instructor] Now that we have looked at how to locate elements using different attributes and different nodes, let's do a small challenge on this and see how far we have gotten with our learning. In this challenge, I have five steps for you that should take you all five minutes to do overall. The first step that I want you to do is go to the [[Python (Programming Language)|Python]] website, [python.org](https://python.org). Let's head over to the site quickly and see what it looks like. This is the official Python site, [python.org](https://python.org). On this site, let's do the following: The first thing you have to do is locate an element by id "submit" and print it out. Then locate an element by name "submit" and print it out. Following this, locate the Python logo image in the top header by XPath and print it. And lastly, locate an element by class "search-button" and print it out. It's a pretty simple challenge. How about you go ahead and give it a shot yourself first. In the next video, we will walk through it step by step and see how to solve it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5)
> **CLI Commands:** python (5)
> **URLs:** [python.org](https://python.org) (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft music) (1)

#### [Solution](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=0)** - [Instructor] Now that we have seen the challenge that we have taken up, let's take a step by step walkthrough of how to solve it. To start off, I'm going to open the code editor directly and let's jump right into the first step. As with all our code, I'm going to start off with importing the web driver from [[Selenium]]. So from Selenium import web driver.
>
> **[0:35](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=35)** The next thing I'm going to do is create an instance of Firefox using the web driver with webdriver.firefox
>
> **[0:52](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=52)** The first step is to navigate to the official [[Python (Programming Language)|Python]] website. So let's use driver.get to do that, and in here I type the URL that we want to navigate to, which is https www.[python.org](https://python.org).
>
> **[1:16](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=76)** And with this, we are already done with our first step. The second step is to locate an element by its id and print it out. To make the printing out easier, I'm going to create a variable element id and we are going to store the element that we find into this variable. So I use the driver dot find element by id method, and in here we are going to specify the id that we are searching for, which is submit. And let's print out this element using the variable that we created. Similarly for element name, which is the third step, I'm going to create a variable and use the driver dot find element by name method.
>
> **[2:19](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=139)** And in here we are going to specify the name we are searching for, which is also submit. And let's print out this element here. We're already done with more than half the challenge. The next step is to find an image using XPath. At times it can get a little tricky to find the XPath part of an element. So we are going to head over to the website and see how to do this in a very simple way. So off to the browser we go. I know that this is an image element, so I will select this image, right click on the mouse and inspect it. Here we can see the dome structure of the element displayed, and at the bottom we can see the hierarchical XPath as well. I'm going to select this element, right click and copy the XPath. And now let's head back to the code. I'm going to create a variable called Element XPath and use the driver dot find element by XPath method.
>
> **[3:46](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=226)** And in here I'm going to paste the XPath that we copied from the browser and let's print out this element. The final step is to find an element by its class name. So I'm going to create a variable again and use the driver dot find element by class name method. And in here we are going to specify the class name that we are searching for, which is search button. And to complete the step, let's print it out. As with all our other programs, to clean up, we close the driver and we are done with this code. So let's go ahead and save this. I'm going to save it on my desktop in the working code folder as challenge one. And now to the most exciting part, let's run this code. The code opens the web browser and we see four elements printed out here. So this is the completed code running and executed well. In this video, we have taken up a challenge
>
> **[5:21](https://www.linkedin.com/learning/python-automation-and-testing/solution-23476215?u=76281980&t=321)** where we located four different elements using the ID, name and various attributes in Selenium. We have seen four different ways to do this, but you can use a combination of these and various other available methods. This is very useful when you're starting to automate your code and you want to know which element to use. This is the very first step in automation, and let's look at what we can do further from here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (3), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** find (8), python (2), make (1)
> **UI Navigation:** open the (1), navigate to (1), click on (1)
> **Tools:** firefox (2)
> **URLs:** [python.org](https://python.org) (1)
> **Env Vars:** url (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 3. Navigating through Pages

[↑ Back to Table of Contents](#table-of-contents)

#### [Page interaction](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=0)** - [Instructor] So far, we have looked at how to find elements on a web page, however, just landing on a page and locating elements is not enough to automate your web UI. The next step in automation is to interact with the elements on the webpage once they are selected. So let's take a look at interacting with a page as actions would be performed by a user while they are browsing the webpage. So what we will do, is we will use the the code example that we initially looked at and go in detail of it to understand how it's working. So in this code what we're gonna do, is we're going to open the website [Python.org](https://Python.org), locate that search box, enter out text to the search box, and perform the search. So to start out with as with any other [[Python (Programming Language)|Python]] [[Selenium]] script, I import the WebDriver. (keyboard clicking) We need another import for entering the keys. (keyboard clicking) So that is common.keys. I'm going to import it as Keys. And we're also going to import the time module, which will help us to pace our module and the entire script so that we can see the actions being performed. So now I'm going to create an instance of my browser. (keyboard clicking) And we're going to open [Python.org](https://Python.org).
>
> **[1:35](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=95)** (keyboard clicking)
>
> **[1:44](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=104)** So with this, we have the site open. Now the next thing that we need to do is locate the search box, so I'm going to name the valuable as search, and I find it by the element name, Q.
>
> **[2:08](https://www.linkedin.com/learning/python-automation-and-testing/page-interaction?u=76281980&t=128)** Now, I have found the element and the next thing to do is to delete any existing text that is there. Search.clear. This will clear out any existing text for me, and there's another function called send keys, which will help me to enter text into the text box. So the keys that I'm going to send is pycon, so this will enter the text into my search box, and following this I need to perform the search. So for this I need to send across and enter. That is a return. Now that I have sent my return, and I want to see the search results, I'll let the browser window pause for four seconds so that we can see the search results and then I'll close the browser. So this is our script ready. Let's save it in the Working Code Folder. And let's run it and see how it goes. So we have opened the browser, we've navigated to [Python.org](https://Python.org), performed the search, and we're waiting, and everything's done here. As you can see, this is how we interact with a webpage on behalf of a user by automating the entire thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Selenium]] (1)
> **CLI Commands:** python (4), find (2)
> **Non-Speech:** (keyboard clicking) (4), (clicking) (1)
> **URLs:** [python.org](https://python.org) (3)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Filling forms](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=0)** - [Narrator] So far, we have seen how to send keys to text inputs and text areas. The question at hand is how to deal with other form elements. [[Selenium]] comes with a wide toolbox of classes and functions that can help you deal with other form elements. The select class helps you deal with select elements in the form and it also comes with a submit method that works on every element in the form. So, let's go to a code example and see how to use these functions and classes. I'm going to head over to the exercise files folder on the desktop. In the exercise files, I'm going to go to chapter three, second part. I have an [[HTML]] code that I'm going to be using as a form for this chapter. So let's run this code and see what the output is. So you can see there's a select element with a variety of values and a submit element. I'm going to to copy the path of this file so that we can use it directly within our code. Now I'm going to head over to IDLE, where I'll open a new file. Let's quickly look at the HTML code once before that. This is the HTML code that we're using as a login form. It has the form element with ID loginForm. Inside this form element, there's a select element with the ID number ReturnSelect, and a variety of options with the visible text and the value.
>
> **[1:37](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=97)** Following the select option, we have an input element which is of type submit, with the name continue and the value submit. So this is a simple HTML form that we're going to use. Now let's head over to IDLE and start with the code right away. I'm going to open a new file and here let's begin with the coding. So, as with any other code, I import the web driver first. Once we have the web driver, I'm going to import the time module so that we can modulate the time and the speed of our script. Lastly, I need to import the select class, so I'm going to go to selenium.webdriver.support.ui and I'm going to import the select class. With this, all our function inputs are done. Let's head over to opening the browser. So I'm opening the Firefox instance and in this instance I will open the file path that I copied. So I'm going to paste the file path, close the parenthesis and the codes, and now I'm going to look at the select class. So, I'm going to create a variable, select, which is an instance of the select class, and here I'm going to find the select element in the form by its name.
>
> **[3:14](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=194)** As you remember from the HTML code, the name of the select element is numReturnSelect. Now I have an instance of the select element created as a select class. There are various ways to select elements: by index, by visible text, and by value. So we're going to look at each of those. Let's first look at selecting an element by its index. So we have a function, select_by_index, where you give an integer value, which is the index of the index of the option that you want to select. I'm going to give a short sleep of two seconds so that we can see the select in action. Next, I'm going to select by visible text. Again, the function name is very intuitive, and here, let's see, I select by visible text 200. I'm going to give a sleep again, so I will copy the sleep and paste it here. The next method of select is by select_by_value. So here, I'm going to select an element by value, 250. We need to place this into quotes. And I'm going to give a sleep, again, of two seconds. With this we have seen the various ways to select options. Also, if you want to print out all the available options,
>
> **[4:48](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=288)** select comes with a function, select.options, which will return an area for all the available options on that select element. Let's print out this area. As we saw in the PPT, there's also submit function that can be invoked on any select element to submit the form. So let's create an instance of the submit button, or locate it, driver.find_element_by_name,
>
> **[5:29](https://www.linkedin.com/learning/python-automation-and-testing/filling-forms?u=76281980&t=329)** and the name of the select element was continue. So here we have located the submit element and I'm going to call this submit function on the select button element, which will submit my form. I'm going to add another sleep here so that we can see the submit in action, and we are going to close the function. With this, our script is ready. Let's save it. I'm going to head over to my working code and save it as code 3, 2. Finally, our code is ready. Let's run it and see it in action. So, we have the Selenium browser open, the first value selected, second value selected, third value selected, and then the form is submitted, as you can see here. Also, the list of all available options is printed out here. So, this way we can deal with various form elements using the powerful add-y of classes and functions that are provided to us by Selenium.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Selenium]] (4)
> **Env Vars:** html (5), idle (2), ppt (1)
> **Code Identifiers:** loginform (1), numreturnselect (1), select_by_index (1), select_by_value (1), find_element_by_name (1)
> **UI Navigation:** go to (3), open the (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Cross-References:** as we saw (1)

#### [Drag and drop elements](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=0)** - [Instructor] The sites performing actions such as entering text and filling [[Forms]], users also drag and drop elements as part of the UI interaction. The [[Selenium]] WebDriver provides classes that enables us to automate the drag and drop actions as well. In the Selenium WebDriver you can drag and drop a source element to a target element and also drag and drop a source element by a specific x-offset and a specific y-offset. Let's take a look at a code example to see how this can be done. Let's open IDE and directly being coding. So I'm going to open a new file and as with any other Selenium code, I'm going to import the webdriver first. Also, I'm going to import the time module in order to modulate the timing of our script. Besides this, I'm also going to import ActionChains which is a class that we'll be using during this program. I'll be explaining the function of ActionChains in a while. So let's begin by creating a driver instance. And we'll open the URL, http [jqueryui.com/droppable](https://jqueryui.com/droppable).
>
> **[1:34](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=94)** This UI has a sample drag and drop interface that we're going to automate and use in this script. Besides this, we also have to switch the frame to the first one so that we can access the drag and drop interface directly. Now we're going to create an ActionChains instance. ActionChains is a class provided by the Selenium WebDriver which enables us to automate actions such as drag and drop, hover, et cetera. So when you add a method to the ActionChains, it is queued and when the perform function is called, these actions are performed as they're added to the queue. To begin coding, we'll first look at our source element by the ID which is draggable. And moving on, we look it at the target element by its ID which is droppable.
>
> **[2:46](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=166)** And now we're going to start off with the ActionChains. So I invoke drag_and_drop_by_offset on the action chain.
>
> **[3:02](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=182)** Here I'm going to say that I want to drag my source element by an x-offset of 100 and a y-offset of 100. And then I'm going to call the perform method to perform or execute these actions by the action chains. I'm going to add a sleep of two seconds so that we can see the action and then we're going to call drag and drop from the source element to the target element. And I'm going to ask action chains to perform this action to me. Again, I'm going to add a sleep of two seconds and then I'm going to close my driver. This small typo between action and chains, I'm going to switch the period to an underscore so that the variable name is right. And now we can go ahead and save this file. I'm going to save it in the Working code folder on the Desktop as code_03_03 and we're ready to run this module.
>
> **[4:19](https://www.linkedin.com/learning/python-automation-and-testing/drag-and-drop-elements?u=76281980&t=259)** So the site is open. There's a drag and drop by an offset and from the source to the target element as you can see. So in this way we have automated the drag and drop action as it is performed by the user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (4), [[Forms]] (1)
> **UI Navigation:** drag and drop (10), open the (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** ide (1), url (1)
> **Analogies:** such as (2)
> **Code Identifiers:** drag_and_drop_by_offset (1)
> **URLs:** [jqueryui.com](https://jqueryui.com) (1)
> **Speakers:** - [instructor] (1)

#### [Challenge](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=0)** (intense whoosh)
>
> **[0:03](https://www.linkedin.com/learning/python-automation-and-testing/challenge-2?u=76281980&t=3)** - [Instructor] So far, we have seen how to perform user actions in an automated way using [[Selenium]] WebDriver. So let's take up a small challenge together and perform the same actions. So the challenge is, you have to navigate to this site and you have to perform a search and also change the value for select bar. So I'm going to navigate to the site and show you where what it is to be done. This is the website that you have to navigate to. In the search bar, you perform a search for the text beginner. And in the select bar that we have here, you change the value to raw text. This is a challenge that we're going to do together. In the subsequent video, I will show you my solution for it which is one of the many solutions that we can have here. The entire challenge should take you all of three minutes since it's three simple steps that you have to perform. Let's try this out together and go ahead with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (1)
> **UI Navigation:** navigate to (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=0)** (logo chimes)
>
> **[0:03](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=3)** - [Instructor] Let's take a quick step-by-step walk-through of the solution. As you will see, it's a very short solution. And there are also possibilities of other solutions. This is one of the possible solutions. The very first step that we have to perform is to navigate to this URL. So I'm going to copy this URL, and let's head over to the code editor and begin coding. (keyboard clicks) The very first step for us is to import the web driver. I'm also going to import the time module. Now, let's create a browser instance. webdriver.Firefox. And navigate to the URL. Since we already have the URL copied, I'm just going to paste it here. With this, our very first step is completed. The second step is to look for the search box, locate it, and then enter some text into it for the search. We do not have a locator for the search box as yet. So let's head over to the browser and find a locator first. So let's head over to the browser. This is the search box that we need to work with. So I'm quickly going to inspect it. As you can see, there's an ID for it. So let's copy this ID and find the element using it. I'll create a variable search box,
>
> **[1:40](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=100)** and let's use the find_element_by_id function. Here, I'm quickly going to paste the ID that we copied. With this, we have located our search box. So let's clear it out. Now we need to send the search input to it. So I send_keys, and I give the search text that is big enough. In order to perform this search, I need to send an enter key, so I'm going to give Keys.RETURN. We are quickly going to go to the top and include the import for the keys class. So from [[Selenium]].webdriver.common.keys,
>
> **[2:44](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=164)** I import the Keys matter. I have a typo here. And with this, we have our search performed. I'm going to add a quick sleep of five seconds so that we can see our action. The next step is to locate the select box and then change the visible text. So let's head back to the browser and find a locator for the select box. This is the select box that we need to work with, so I'm going to inspect it. As you can see, there's no unique name or ID for it, so we have to result to a last option of using an XPath, so let's copy the XPath, and then head back to our code. So I create a variable select, which is an instance of the select class. Here, I'm going to find the element_by_xpath, and I'll paste the XPath that we copied here. As you can see, this is a completely absolute path. So let's simplify it a bit and make it more relative. I know that there will definitely be two levels. And after that, there are a couple of intermediate levels, which I can represent with an asterisk. And then I know there's a form, a div, and a select.
>
> **[4:19](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=259)** So this is a model relative URL that is much safer to use. Now, I'm going to change the visible text, and I know that the visible text I need is Raw Text. Lastly, I'm going to add a sleep of five seconds so that we have time to see the action. And let's end it by closing the trial. With this, we have our code ready. If you can see, we have used the select class but not imported it, so I'm quickly going to import the select class on top. .webdriver.support.ui import Select.
>
> **[5:10](https://www.linkedin.com/learning/python-automation-and-testing/solution-2?u=76281980&t=310)** So with this, we have our code all ready. Let's save it. I'm going to head over to the working code folder and save it as challenge three. Now, let's finally run it. So the link is open, the search is performed, and the select text is changed as required. With this, we have completed this challenge together, and good job with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Selenium]] (1)
> **Env Vars:** url (5), return (1)
> **CLI Commands:** find (4), make (1)
> **Code Identifiers:** find_element_by_id (1), send_keys (1), element_by_xpath (1)
> **UI Navigation:** navigate to (2), go to (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)


### 4. Waits

[↑ Back to Table of Contents](#table-of-contents)

#### [What are waits and why do we need them?](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=0)** - [Instructor] Waits are very important when it comes to placing your automation script. Most websites today use asynchronous techniques such as [[AJAX]]. When a webpage is loaded by the browser, the elements may be loaded at different time intervals due to this. So elements may take much longer to load as compared to others. This could be something like an image, a video, or any other element that requires more time to load. This poses a problem while locating elements on a page. If an element is not found by a script at that time, an exception is raised and your script will run into an issue and stop. This is where waits come into the picture. Waiting adds a time interval between the actions performed by the WebDriver. That is, it adds a wait between locating elements and performing operations on them. The [[Selenium]] WebDriver provides two types of waits, explicit and implicit. An explicit wait stops execution until a certain condition is satisfied. An implicit wait on the other hand, polls the DOM for a given amount of time while trying to locate a specific element. Typically waits seem like a very complicated topic, but once you understand the use case of each, it is a very simple topic to code, and also it is very important to understand
>
> **[1:34](https://www.linkedin.com/learning/python-automation-and-testing/what-are-waits-and-why-do-we-need-them?u=76281980&t=94)** where to use waits and where not to use waits, and which type of wait to use where. We're going to explore more about waits in the subsequent videos, so let's go ahead and jump right into the topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AJAX]] (1), [[Selenium]] (1)
> **Analogies:** such as (1), picture (1)
> **Env Vars:** dom (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Explicit waits](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=0)** - [Instructor] An explicit wait is one where you want your code to pause until a certain condition has been satisfied. Typically in [[Test Automation]] scripts, if you're testing an image and you want to wait for the presence of that image to be loaded, then you will add and explicit wait. In case you do not add an explicit wait there, the image will not be loaded at the right time in your script and an element not found exception will be thrown. So it is always better to add explicit waits when expecting certain elements to take much longer to load than the other elements in the webpage, and you want to wait for those elements because they're essential to your script being able to run. The [[Selenium]] WebDriver provides a lot of convenient methods that enable you to add the required explicit waits in your code. A combination of the classes WebDriverWait and ExpectedConditions are used to add explicit waits. These convenient methods could test conditions ranging from the title list to visibility of an element being located to an alert being present, to text being present, and much more. Let's look at how to add explicit waits with an example using code. I'll open a new file. As with any other code, I'm going to first import WebDriver and I'm going to add the [[Representational State Transfer (REST)|rest]] of the classes that I would need for my explicit waits to work.
>
> **[1:39](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=99)** So the first class that I add is by. We'll be looking at the use cases of these as we write the code. The next class that I add is... (keyboard clicking) WebdriverWait. And lastly, I add the class ExpectedConditions. (keyboard clicking)
>
> **[2:20](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=140)** With this we have our line codes, so let's start with a code. (keyboard clicking) We've created a Firefox instance here. I'm going to navigate to the webpage [python.org](https://python.org). (keyboard clicking)
>
> **[2:45](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=165)** Now that I have navigated to my page, I'm going to test for the presence of an element by ID start shell. So here I'm going to add a wait of 10 seconds. If the element is loaded within 10 seconds, then this script proceeds. In the case that the element is not loaded within 10 seconds a timeout exception is thrown. So in order to handle the exception, I'll add a try. I'm going to create a variable element, which is of type WebDriverWait, and I set a wait of 10 seconds here, and next thing that I add is the condition where I say I want to wait until the expected condition that the presence of the element is located, and here I specify the element that I want to look for. So I give an element which has an ID start-shell, and I close my WebDriverWait. This is required. One of the use cases of this could be that the element with ID start-shell takes much longer to load than the other elements, and we want to test it in our script. So we are going to wait for it to load. Then I close my driver, and finally I save the file and run it.
>
> **[4:19](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=259)** I'm going to save it in the Working Code folder as code_04_02. Let's save this and run the module.
>
> **[4:37](https://www.linkedin.com/learning/python-automation-and-testing/explicit-waits?u=76281980&t=277)** Since the element has been found within 10 seconds, the script has not timed out and proceeded to close the driver. In the event that the element would not have been loaded within 10 seconds, the script would have thrown an element not found exception. So here we see how explicit waits are essential to writing scripts, wherein a certain element could take much longer to load than the others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (1), [[Selenium]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **Non-Speech:** (keyboard clicking) (4)
> **CLI Commands:** python (1)
> **URLs:** [python.org](https://python.org) (1)
> **Tools:** firefox (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Implicit waits](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=0)** - [Instructor] An implicit wait is one where you want your code to pause for a certain amount of time before every action or every element to be loaded. The typical use case for implicit waits is when you have a slow internet connection and you know that every element in the site will load much slowly than expected. So you add an implicit wait before every call, so once the element is loaded. If the element is loaded within the specified time, then the script moves on. If the element is not loaded within the specified amount of time, then an exception is thrown. The main difference between implicit and explicit waits is that explicit wait, waits for a certain condition only. Implicit wait waits before every call that is made from your script. The waiting time in the case of implicit wait is specified in seconds. Let's look at a small code example to see how implicit waits can be used. And we have a new file here. So I'm going to first import the WebDriver, (keyboard clicking) and I will create a driver instance. (keyboard clicking) I'm going to add implicit wait with the function implicity_wait, and I specify the wait time in seconds as a parameter to this function.
>
> **[1:33](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=93)** This will ensure that every call for every element waits for at least ten seconds before the script moves on. If it is not loaded within ten sections, then an exception is thrown. After this, I load my site. So I'm going to load [python.org](https://python.org). So in this case it would wait for the site itself to load for 10 seconds first, and then I'm just going to specify some dynamic element. So let's say I'm looking for an element with a specific ID, (keyboard clicking) and the ID of the element is start-shell. (keyboard clicking) So here again, first it will wait for the site to be loaded for 10 seconds, and then it will wait for the element to load for ten seconds. If I specify another element, it will wait for 10 seconds, for a maximum of ten seconds before that element to be loaded as well. So our wait is implicitly added before every call. So with this, our script is ready. I'm going to save it in the Working Code folder, as code_04_03, and save it, and let's run this.
>
> **[3:08](https://www.linkedin.com/learning/python-automation-and-testing/implicit-waits?u=76281980&t=188)** So our script has run as expected since all the elements as specified loaded in less than 10 seconds, the script successfully ran. This is how implicit waits are used to add a wait before every call of every element to be loaded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Non-Speech:** (keyboard clicking) (4)
> **CLI Commands:** python (1)
> **Code Identifiers:** implicity_wait (1)
> **URLs:** [python.org](https://python.org) (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-automation-and-testing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-automation-and-testing/next-steps?u=76281980&t=0)** - [Bhoomika] Are you ready to begin automating your own web UI using [[Python (Programming Language)|Python]] and [[Selenium]]? You are now equipped with the understanding of the importance of [[Test Automation]] and how to use Python Selenium. In this course, we have seen how to automate step by step, beginning with the understanding of the DOM structure, locating elements, and then moving on to navigating and interacting with pages. We have also looked at weights and how to use them. More importantly, you must remember that if you run into any roadblocks, the official documentation and the vast online Python developer community is always available to your rescue. With this knowledge, you are all set to go with test automation using Python Selenium.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Selenium]] (3), [[Test Automation]] (2)
> **CLI Commands:** python (4)
> **Env Vars:** dom (1)
> **Speakers:** - [bhoomika] (1)


## Instructor

- [[Bhoomika Agarwal]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Test Automation

## Path Context

### In [[Advance Your Skills in Python]]
← [[Python Data Structures and Algorithms]] | **4 of 7** | [[Python GUI Development with Tkinter]] →

## Appears In

- [[Advance Your Skills in Python]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Postman Essential Training]] — Test Automation

---

[↑ Back to top](#)