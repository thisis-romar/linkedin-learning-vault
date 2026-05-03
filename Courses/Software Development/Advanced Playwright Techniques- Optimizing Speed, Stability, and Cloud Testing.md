---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing
url: "https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing"
duration_minutes: 68
duration: 1h 8m
level: Advanced
updated: 4/9/2026
learners: 47627
skills:
  - Test Automation
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-playwright-techniques-5210160"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGHxE52KnuJdQ/learning-public-crop_675_1200/B4DZZkgSNWG8AY-/0/1745442907701?e=2147483647&amp;v=beta&amp;t=ms2XvyG0D7-kDyb_SrHN9vj3sYqlE5CRYUbtZ38PXN8"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Test Automation with Playwright]]'
prev_courses:
  - '[[Playwright- Design Patterns]]'
path_nav: '[{"path":"Master Test Automation with Playwright","position":4,"total":4,"prev":"Playwright- Design Patterns","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/test-automation
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Advanced%20Playwright%20Techniques-%20Optimizing%20Speed%2C%20Stability%2C%20and%20Cloud%20Testing.md)

![Advanced Playwright Techniques: Optimizing Speed, Stability, and Cloud Testing](https://media.licdn.com/dms/image/v2/D4D0DAQGHxE52KnuJdQ/learning-public-crop_675_1200/B4DZZkgSNWG8AY-/0/1745442907701?e=2147483647&amp;v=beta&amp;t=ms2XvyG0D7-kDyb_SrHN9vj3sYqlE5CRYUbtZ38PXN8)

# Advanced Playwright Techniques: Optimizing Speed, Stability, and Cloud Testing

> This course dives deep into advanced Playwright testing strategies, and is designed to help experienced testers and developers optimize their test suites for speed, stability, and scalability. Learn how to streamline your tests, diagnose and fix bottlenecks, and apply resilient practices that make your testing robust against flakiness. Additionally, explore the power of visual testing using screen

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing) | 1h 8m | Advanced | 48K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Advanced Playwright techniques](#advanced-playwright-techniques)
  - [What you should know](#what-you-should-know)
- [**1. Optimising Test Speed in Playwright**](#1-optimising-test-speed-in-playwright) (7 videos)
  - [Green testing: Speed, efficiency and sustainability](#green-testing-speed-efficiency-and-sustainability)
  - [Diagnosing performance bottlenecks with VS Code metrics](#diagnosing-performance-bottlenecks-with-vs-code-metrics)
  - [Using storageState to avoid repeated logins](#using-storagestate-to-avoid-repeated-logins)
  - [Configuring project dependencies for cookie setup](#configuring-project-dependencies-for-cookie-setup)
  - [Parallelisation: When to use It and when to avoid It](#parallelisation-when-to-use-it-and-when-to-avoid-it)
  - [Challenge: Optimise a slow test in VS Code](#challenge-optimise-a-slow-test-in-vs-code)
  - [Solution: Optimise a slow test in VS Code](#solution-optimise-a-slow-test-in-vs-code)
- [**2. Reducing Test Flakiness in Playwright**](#2-reducing-test-flakiness-in-playwright) (7 videos)
  - [Mastering flaky tests](#mastering-flaky-tests)
  - [Handling Nuxt page hydration issue in tests](#handling-nuxt-page-hydration-issue-in-tests)
  - [Implementing stable locators](#implementing-stable-locators)
  - [Handling external dependencies to minimise flakiness](#handling-external-dependencies-to-minimise-flakiness)
  - [Running tests multiple times to detect flakiness](#running-tests-multiple-times-to-detect-flakiness)
  - [Challenge: Fix this flaky test](#challenge-fix-this-flaky-test)
  - [Solution: Fix this flaky test](#solution-fix-this-flaky-test)
- [**3. Screenshot and Snapshot Testing Best Practices**](#3-screenshot-and-snapshot-testing-best-practices) (5 videos)
  - [Visual testing with screenshots and snapshots](#visual-testing-with-screenshots-and-snapshots)
  - [How do you capture a screenshot?](#how-do-you-capture-a-screenshot)
  - [How do you capture a snapshot?](#how-do-you-capture-a-snapshot)
  - [Challenge: Implement a test to screenshot a page](#challenge-implement-a-test-to-screenshot-a-page)
  - [Solution: Implement a test to screenshot a page](#solution-implement-a-test-to-screenshot-a-page)
- [**4. Running Tests on Microsoft Playwright Testing Service**](#4-running-tests-on-microsoft-playwright-testing-service) (6 videos)
  - [What is Microsoft Playwright Testing (MPT) service?](#what-is-microsoft-playwright-testing-mpt-service)
  - [Creating a resource on Microsoft Azure](#creating-a-resource-on-microsoft-azure)
  - [Setting up your framework to run tests on the cloud](#setting-up-your-framework-to-run-tests-on-the-cloud)
  - [Running tests via CLI](#running-tests-via-cli)
  - [Challenge: Run tests against your local server on MPT](#challenge-run-tests-against-your-local-server-on-mpt)
  - [Solution: Run tests against your local server on MPT](#solution-run-tests-against-your-local-server-on-mpt)
- [**Conclusion**](#conclusion) (2 videos)
  - [Final thoughts and best practices](#final-thoughts-and-best-practices)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Advanced Playwright techniques](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/advanced-playwright-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/advanced-playwright-techniques?u=76281980&t=0)** - Let me tell you a story. A global retailer was struggling. Their test suite was taking over an hour to run. Imagine we rerunning the whole pipeline just because of a flaky test. This was a major blow. They asked for help. I went there and restructured their test setup, stabilized their flaky test, and made sure that their tests were running in parallel in a cloud-based environment. In this course, we will be covering all those techniques. Let's go beyond testing. Let's unlock velocity, quality, and engineering joy together.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - let (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/what-you-should-know?u=76281980&t=0)** - [Qambar] You should know that I have got your back. If you're looking for a more intermediate-level course on Playwright, I've got a course on [[Design Patterns]] that you can watch. If you have got any questions, I'm here for you, just click on this Question & Answer tab, and ask your question. And don't forget, the Exercise Files, including challenges and solutions are present on [[GitHub]]. Just click on Get files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Design Patterns]] (1), [[GitHub]] (1)
> **UI Navigation:** click on (2)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [qambar] (1)


### 1. Optimising Test Speed in Playwright

[↑ Back to Table of Contents](#table-of-contents)

#### [Green testing: Speed, efficiency and sustainability](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/green-testing-speed-efficiency-and-sustainability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/green-testing-speed-efficiency-and-sustainability?u=76281980&t=0)** - [Instructor] Let's start with a thought. Every test you run consumes compute power. Every extra second of execution adds cost. Every unnecessary test impacts energy consumption. Test speed optimization isn't just about making tests faster. It's about reducing waste, lowering costs, and creating sustainable, high-performance test suites. We often talk about green energy and sustainable living, but what about green [[Software Development]]? Computing resources aren't unlimited. Every test that runs unnecessarily consumes energy. CPU cycles don't come for free. They consumer power, they generate emissions, and they cost money. As Greta Thunberg might say, "How dare you?" If we don't take responsibility for optimizing the way we run software, we are actively contributing to waste. That's where green software development comes in. It's about reducing resource consumption, optimizing code, and ensuring automation is efficient, not excessive. The good news, by making Playwright tests run faster, we're not just improving performance. We are making a real-world impact. Beyond the environmental impact, slow tests create real-world problems for teams and businesses, block CI/CD pipelines, higher cloud and infrastructure costs, reduce developer productivity, flaky failures due to time-out issues. They cost a lot of money to our business. Using the techniques in this course,
>
> **[1:34](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/green-testing-speed-efficiency-and-sustainability?u=76281980&t=94)** we managed to reduce the execution time of the test from one hour 11 minutes to under 15 minutes, and saving thousands in infrastructure cost and improving software delivery speed for a large specs company. When optimizing test speed, less is often more. Think of it like cleaning out cluttered closet. If a test isn't bringing value, it shouldn't be there. This is what I call the joy principle of [[Test Automation]]. If a test isn't providing clear value, it needs to be removed or refactored. Test speed optimization starts with small, high-impact changes. Here are three things you can do right now to make your Playwright tests faster. Use storageState to eliminate redundant logins. Identify slow steps with Visual Studio Code metrics. And ensure that your tests are executing in parallel across the workers. These are simple but effective optimization techniques, but they will immediately improve your test suite's performance. By optimizing speed, we are not making automation faster. We are making it cheaper, more reliable, and better for the environment. Test speed optimization isn't a one-time fix. It's an ongoing process. The key is to start small, remove inefficiencies, and always measure impact. Now take a look at your test suite. What's slowing your tests down? Which tests can be optimized or removed?
>
> **[3:06](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/green-testing-speed-efficiency-and-sustainability?u=76281980&t=186)** What small change can you apply today? Make testing faster, smarter, and greener. Let's start optimizing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (2), [[Test Automation]] (1)
> **CLI Commands:** make (2), cd (1)
> **Code Identifiers:** storagestate (1)
> **Env Vars:** cpu (1)
> **Tools:** visual studio (1)
> **Analogies:** think of it like (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Diagnosing performance bottlenecks with VS Code metrics](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/diagnosing-performance-bottlenecks-with-vs-code-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/diagnosing-performance-bottlenecks-with-vs-code-metrics?u=76281980&t=0)** - [Instructor] What if I told you that some of your Playwright tests are silently wasting time without you even realizing it? A few extra milliseconds here, a redundant step there, it all adds up. Multiply that across a full test suite and suddenly your automation isn't as fast as it could be. That's where Visual Studio Code Metrics comes in. Instead of guessing where your tests are slow, we'll use real data and find performance bottlenecks and fix them. Let's start with this basic test that is a default example that Playwright provides when you install it. So I've got these two tests, but let's focus on the first one. I'm going to, rephrase, I'm going to run this test and see how much time does it take. So as soon as I run this test, you can see it tells me the first statement took 444 milliseconds and the second statement took 24 milliseconds. Now, if I want to optimize it, what can I do? I can just look into the documentation, just by literally hovering over the function, I can see what options are available. For example, with goto, you can choose load, domcontentloaded, networkidle, or commit. And this is a part of options. So I will basically add a comma and pass in the waitUntil, and here I will select the option commit. Because it's a page title and that's the first thing that opens when a page loads, we can just use the commit. And let's run the test again.
>
> **[1:34](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/diagnosing-performance-bottlenecks-with-vs-code-metrics?u=76281980&t=94)** If you remember, previously it was taking 444 milliseconds. Now, it is taking 135 milliseconds, so it's more than 50% saving already. Now, have a look at this one. We are basically checking the page to have a title, and this is using our regex. What about if we do it like this? So we have got a page.title, and we are comparing the title with whatever the title is. I don't know the title, so I will basically run the test and make it fail and copy the title from there.
>
> **[2:18](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/diagnosing-performance-bottlenecks-with-vs-code-metrics?u=76281980&t=138)** Don't forget the weight. The weight is the most important thing. So now you can see the title is this, and I can paste this title here, run this again, and the test passes and it says it took one milliseconds, as compared to, if I just undo this, run this again,
>
> **[2:49](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/diagnosing-performance-bottlenecks-with-vs-code-metrics?u=76281980&t=169)** you can see, just by making this change from 41 milliseconds to one milliseconds. So there you go. Now, it is your turn to look at your test suite and ask yourself questions. Where can you find bottlenecks? What redundant steps can you remove? And how can you make your tests faster today?

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** waituntil (1)
> **Documentation:** the documentation (1)
> **Tools:** visual studio (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)

#### [Using storageState to avoid repeated logins](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/using-storagestate-to-avoid-repeated-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/using-storagestate-to-avoid-repeated-logins?u=76281980&t=0)** - [Instructor] One of the biggest challenges that testers face is this login screen, because whenever you want to test anything after this login screen, you have to go through the whole login process. And Playwright has a solution for you. It's called Storage State. So let's get started. So on my screen, there is a myaccount spec.ts, and I'm going to write a test for the myaccount, which is the page that comes after the login. So playwright test, test heading on my account page, async, and we have got a page, and the test is await page.goto. I want to go to the [practicesoftwaretesting.com/account](https://practicesoftwaretesting.com/account).
>
> **[1:02](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/using-storagestate-to-avoid-repeated-logins?u=76281980&t=62)** And on this page, I want to expect page.getByRole, heading. And the heading name is called "My Account". I want to make sure that it is visible. Let's run this test and see what happens. So when I ran this test, it opened the Trace Viewer, it goes to that page, and it fails because that page that I'm testing is behind the login. Now let's see how we can resolve this issue. First of all, I will type test.use, and I will specify I want to use a storage state. And this will be stored in the auth.[[JSON]] file. Now, question is where does this file come from? Well, you will be creating this in the global setup file.
>
> **[2:18](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/using-storagestate-to-avoid-repeated-logins?u=76281980&t=138)** The reason I'm doing it in the global setup is so that all the tests can start using this. So in this global setup, I will do the login, and store the auth details into the auth JSON file. So let's do it. So because I'm using only the Chromium browser right now, I only need Chromium. In your case, you might be using Firefox and web kit, so make sure you import all of them. So async function, global setup, config, and the type of the config, I need the browser. The reason I need the browser is because I would need the context just after it. The reason I need the context is because I will need the page just after it. So page is equal to context. Oh, sorry, oh wait. Context.newpage. Now that I have got a page, I can do a simple page.goto, and I can directly go to the login page for [practicesoftwaretesting.com/auth/login](https://practicesoftwaretesting.com/auth/login). Here, I know that I have got the two text boxes, so get by role, and the role is text box.
>
> **[3:51](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/using-storagestate-to-avoid-repeated-logins?u=76281980&t=231)** My first text box is called name is email address, but if you notice there's a star as well in the name. May not be the best practice to put the star in the name, but yep. (chuckling) Test@[directtest.com](https://directtest.com) is the username, and the second text box is called Password with a capital P. And this password expires in an hour, so you might need to recreate your login if you're using the same website for a testing. You might not be able to use the same details here. So await page.getByRole, button, and the button is called login. And we will click this button. Once we click this button, it will log in. How do we confirm that it has logged in? It will basically redirect us to the new page. So we will wait for URL, which is HTTPS [practicesoftwaretesting.com/account](https://practicesoftwaretesting.com/account), which is a page that we actually want to test in our test. And await... Now, this is the most important step. So page.context. From the page.context, what we will do is, we will get the storage state, and we will save it in the path, which is the file
>
> **[5:28](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/using-storagestate-to-avoid-repeated-logins?u=76281980&t=328)** that we are using in the test. Auth.json. After this, we'll just close the browser, because we don't need the browser anymore, we can use the context. And once we have done this, we'll export the global setup.
>
> **[5:50](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/using-storagestate-to-avoid-repeated-logins?u=76281980&t=350)** Now to link global setup with the test, you need to go into the playwright config, and add this important line, which is global setup, require, resolve, global setup. This basically says, this is where you can find a global setup file, which will run before all the test runs. So, now let's try and run this test again. Now you can see that it went to the My account page, and it wasn't redirected to the login page because we have already logged in, and it was able to check the My account heading. By using playwright storage state feature, we have significantly reduced test execution time, and eliminated redundant logins. This not only makes your tests faster, but also makes them more reliable and scalable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3)
> **Prerequisites:** setup (9)
> **Definitions:** is called (4), is a  (2)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (3), [directtest.com](https://directtest.com) (1)
> **File Paths:** auth.json (2), spec.ts (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** json (1), url (1), https (1)
> **Code Identifiers:** getbyrole (2)

#### [Configuring project dependencies for cookie setup](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/configuring-project-dependencies-for-cookie-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/configuring-project-dependencies-for-cookie-setup?u=76281980&t=0)** - [Instructor] Have you ever run a test only to find that cookie banner blocks a page? Instead of handling this inside every test, we can accept cookies once before test run, saving time and ensuring test stability. So I've prepared a prebuilt server for you, which basically runs a cookie banner. You don't need to worry about what's inside this example. Basically it's just a server which is inside the package [[JSON]]. You run node cookie example server and it'll show you that page that you just saw. And in the playwright config we have got a web server which basically runs it every time you do NPX playwright test. Back to how do you solve the cookie problem. So I will create a new folder called test cookie. This will be a separate project to the folder test. Inside this folder, I will create the file cookie.spec.ts. This file will basically interact with the cookie banner once and it will save the cookie in a file. So we need fs from fs. And it will save cookies after interacting. So async, page, context. We need a context over here so that we can interact and save the cookie from the browser cookie. So it will go to the URL.
>
> **[1:36](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/configuring-project-dependencies-for-cookie-setup?u=76281980&t=96)** So you can always show this in the base U are in the config. I put it over here because of the lessons so that you know exactly which UR we are going to. Okay, by role. And you saw the button name was accept all. So we will just click on that button here. Once we click on the button, we will write a file and let's call it cookies because it'll contain cookies, cookies.JSON. And we will write JSON.stringify. And now remember we've got the context over here. So we will, we can get the cookie from the context. So context.cookies. This is built into playwright so you can get it and save it in the file. Next we will basically go to the playwright config file and we can see the project, which is a test project which refer to this test folder, as you can see the test directory. We will copy this test project and we'll make another project called test cookie dash cookie. And we will make this test Cookies project a dependency for a test project. So all you need to do to make a dependency is you add dependencies and you specify the project name. So whatever the name over here is,
>
> **[3:13](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/configuring-project-dependencies-for-cookie-setup?u=76281980&t=193)** you copy that name and paste it over here. So test cookies is a dependency project for test. So now this is how you have link. So now this project will run first, it'll save the cookie file and then the test project can use that cookie file to write our original test. So I will go into the test folder, follow link here. I will quickly write the test, which is test Expect from playwright. I will need to use FS again because I will be reading the cookie file and I will add a before each function. So before each, what this function will do is it'll use that cookie file and update the context for the test. So await context.@cookies. And here we will pass the JSON file that we stored in the previous project and we will pass it as UTF 8. So this is going to run before every test. And now let's write our test to follow the link. So test follow link without accepting cookies. So async page.
>
> **[4:49](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/configuring-project-dependencies-for-cookie-setup?u=76281980&t=289)** And in here we will go to that URL. So page. go two, sorry, it's an http. 12721. Because the server is hosted locally, as I have already mentioned, it's in the cookie example, we will go to the actual link. So what does the actual link look like? Await page.get by role
>
> **[5:20](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/configuring-project-dependencies-for-cookie-setup?u=76281980&t=320)** and we want to get the link. What's the name of the link? The name of the link is, so the link has got the R label defined as linked in URL, which is why we are able to use that. And we can do .get attribute and the attribute would be HREF. So let's just invent it correctly so that it's more readable.
>
> **[6:09](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/configuring-project-dependencies-for-cookie-setup?u=76281980&t=369)** All right, so the last but not least step is we do an expect. Expect. We will use the actual link and we will compare that with the link that we want to verify with. So the link that we are following is the [linkedin.com/i/gambar](https://linkedin.com/i/gambar). And that's the link. So first we will run the test without this before each and see what happens. So NPX playwright test.
>
> **[6:57](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/configuring-project-dependencies-for-cookie-setup?u=76281980&t=417)** So you can see that something happened over here. I'm going to bring the test results on the screen. The safe cookies test passed as you can see, but follow link failed. And why did it fail? You can see it in the screenshot that there was a cookie banner so it couldn't follow the link because of the cookie banner, right? But if you look at the cookies.JSON file, we have got the right cookie over here. So all we need to do is uncommon despite to read the cookie and store it in the context. So I will run this test again and this time, as you can see, both tests passed. So this time we interacted with the cookie in the test cookie project, which is a dependency for test project. And then we used that cookie, which was stored in the cookie.spec file in here, and we saved it into the context. So our test didn't see any cookie banners. This is just one of the application of the project dependencies. Hope you got the concept of how project dependencies work. Now it's your turn to structure your project smartly and see the difference it makes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[LinkedIn]] (1)
> **Env Vars:** json (5), url (3), npx (2), utf (1), href (1)
> **CLI Commands:** make (3), npx (2), find (1), node (1)
> **UI Navigation:** go to (4), click on (2)
> **Definitions:** is a  (3), defined as (1)
> **File Paths:** cookies.json (2), cookie.spec.ts (1)
> **Documentation:** spec (2)
> **URLs:** [linkedin.com](https://linkedin.com) (1)

#### [Parallelisation: When to use It and when to avoid It](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/parallelisation-when-to-use-it-and-when-to-avoid-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/parallelisation-when-to-use-it-and-when-to-avoid-it?u=76281980&t=0)** - [Narrator] Parallelization sounds like a game changer, running multiple tests at once and drastically cutting down execution time. But is it always the right move? Let's break down when it makes sense, and when it can cause more harm than good. Playwright supports parallelism out of the box. By default, it uses a number of workers based on your machine CPU cycle, but this is configurable. You can set a fixed number of workers, use a percentage of CPU codes, like 50% or 100%, or disable parallelism by setting workers to one. It's flexible, but it also means it's on us to configure it wisely. Too much of a good thing can be a problem. Running too many workers can overload your CI/CD pipeline, causing flakiness and instability. Playwright recommends setting workers to one in CI environments to maintain stability and avoid conflicts. If you're running tests locally or on self-hosted system with powerful resources, you might increase workers, but always experiment to find a sweet spot between performance and reliability. One of my students shared an interesting setup. They run end-to-end tests in CI using four workers and seven charts, and it works well for them. But here's the takeaway. Don't blindly follow this approach. What works for one team might overload another. Assess your system's CPU capacity, memory availability,
>
> **[1:34](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/parallelisation-when-to-use-it-and-when-to-avoid-it?u=76281980&t=94)** and pipeline configuration before deciding. In the upcoming chapters, I'll cover the recommended way to run parallel tests on the cloud to avoid local resource constraints. For now, stick to using one worker in CI to ensure stability and consistency.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (3)
> **CLI Commands:** cd (1), find (1)
> **Prerequisites:** configure (1), setup (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Optimise a slow test in VS Code](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-optimise-a-slow-test-in-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-optimise-a-slow-test-in-vs-code?u=76281980&t=0)** (energetic music plays)
>
> **[0:05](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-optimise-a-slow-test-in-vs-code?u=76281980&t=5)** - [Instructor] Now that you know several techniques of how to optimize a test in Playwright, I want to give you a challenge. This test currently takes over 29 seconds to run, painfully slow, and definitely not green. Your challenge, optimize this test to run under two seconds without changing the outcome. Everything needed is already in place. The test files are available in the [[GitHub]] exercise files for this chapter. Can you apply what you have learned so far, like avoiding unnecessary rates, improving selectors, and skipping redundant steps to make it lean, fast and efficient. Let's see what kind of performance gains you can squeeze out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music plays) (1)

#### [Solution: Optimise a slow test in VS Code](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-optimise-a-slow-test-in-vs-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-optimise-a-slow-test-in-vs-code?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-optimise-a-slow-test-in-vs-code?u=76281980&t=5)** - [Instructor] All right, time to optimize this slow test. So first of all, let's see what this test is doing. This test is basically going to a page, then clicking on the link, which is the sign-in link, and checking if the link is working. Okay, so let's update the test title. Test. Sign-in link is correct, so we don't need to wait before that. We'll get rid of that. The goto state pin. Yes, that is needed because we need to go to that page. And then we just need to click on the selector so we can get rid of all of this. And we can just do a click over here. We don't need to have a separate variable to store the element name because we are not using it anymore. This is an unnecessary wait because playwright has gotten auto waiting. So we don't need to wait for the state and the final unnecessary wait. So if you run this test now, what happens? So npx playwright test, it runs within 1.6 seconds.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** npx (1)
> **Versions:** 1.6 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 2. Reducing Test Flakiness in Playwright

[↑ Back to Table of Contents](#table-of-contents)

#### [Mastering flaky tests](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/mastering-flaky-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/mastering-flaky-tests?u=76281980&t=0)** - [Instructor] Flaky tests are one of the most frustrating challenges in [[Test Automation]]. They waste time, reduce confidence, and disrupt CI and CD pipelines. Just like fake news stories, flaky tests appear credible at first glance, but they're not reliable. One minute they pass, the next minute they fail without any real change. This inconsistency makes it hard to trust your automation results. Developers end up questioning whether the failures are real or just random glitches. This constant doubt wastes time, drains energy, and erodes confidence in your test rate. To make your tests trustworthy, we need to understand the root causes and eliminate the flakiness. Flaky tests don't just slow down development, they create friction and frustration among teams. Developers often end up spending more time debugging tests than writing new features. In large-scale projects with thousands of tests, even a small percentage of flakiness can snowball into massive inefficiency. Let's make flaky tests a thing of the past and get your pipelines running smoothly. To truly eliminate flakiness, we must understand what causes it. Common issues include timing errors where tests execute before the UI is ready, dependency issues where APIs respond inconsistently, and environmental problems like fluctuating resources or network instability. Finally, poor test designs, including hard-coded waits and shared states, often leads to flakiness.
>
> **[1:37](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/mastering-flaky-tests?u=76281980&t=97)** Addressing these problems is essential to achieving stable, reliable automation. Let's look at some real-world examples of test flakiness. In this example, we can see the test is assuming that elements will appear instantly. You can use dynamic waits, such as wait for selected, to adapt to the application's behavior and resolve such issues. Another example is the unreliable API response. APIs can fail unpredictably due to outages and data inconsistencies. Mocking APIs ensure consistent and reliable test results. In this example, you can see hard-coded waits, which is assuming static conditions, which often leads to failure. Switching to conditional weights ensure your test dynamically adjusts to application behavior. Playwright also has a built-in auto weighting mechanism, so try to make use of that first. Now that we understand the root causes of flaky tests, we can focus on fixing them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test Automation]] (1)
> **CLI Commands:** make (3), cd (1)
> **Analogies:** just like (1), such as (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Handling Nuxt page hydration issue in tests](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-nuxt-page-hydration-issue-in-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-nuxt-page-hydration-issue-in-tests?u=76281980&t=0)** - [Instructor] One of the reasons your tests are flaky is a race condition between the application's readiness and when your test starts running. Hydration is when framework like Nuxt sends a pre-rendered [[HTML]] page to the browser, but it's not alive yet. The static page looks complete, but it isn't interactive. Playwright sees a button, tries to click, but nothing happens. Why? Because even listeners weren't attached yet, the page hadn't been hydrated. A temporary workaround is to wait for the hydration process to complete by checking window.useNuxtApp?.().isHydrating === false. This tells Playwright to pause until the app confirms it's fully hydrated. Now, ideally, hydration delays should be fixed in the application itself. That's the right, long-term solution. But not every team has access to the frontend code, so use this test-side workaround mentioned in the previous slide when needed, and raise a bug ticket so the product team can address it later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Code Identifiers:** usenuxtapp (1), ishydrating (1)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Implementing stable locators](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/implementing-stable-locators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/implementing-stable-locators?u=76281980&t=0)** - [Instructor] What kind of locator would you use if you want to click on this sign-in link? So if I do right-click, inspect element, I can see this is the sign-in link and if I right-click on it, I can copy the selector from it. So here is my copied selector, navbar support content UL.li and it's child four. That's what I copied from Chrome. Now if you want to write a test for this, let's see how we would do it. So I will do an input test, expect from playwright and in the test, my fragile locator test async, and I will get the page fixture and the body of the test would look like. Go to, page.goto, yes, the website name. So practice software [testing.com](https://testing.com). So go to this website and then click on this locator. So Awaitpage.click and click is dislocate over here that we copied.
>
> **[1:23](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/implementing-stable-locators?u=76281980&t=83)** Okay. And once we click on the sign-in link, we can expect page to have URL, which is the URL of the authentication. So practice software [testing.com/auth/login](https://testing.com/auth/login). So let's run this test and see what happens.
>
> **[1:56](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/implementing-stable-locators?u=76281980&t=116)** So this test ran, it went to the page, it clicked on the right locator, it went to this second page and checked the URL is correct and the test passed. Now my question is, is this code maintainable? Is this code scalable? Also, what will happen if there is a do change? Well, the answer to all the above questions is no. So how would you do it differently? So instead of using an unstable locator, I would basically use the page.get by rule. Using the get by rule. I know it is a link. I know the name of the link is sign in. So I will just click the signin link. Let's run this test again.
>
> **[3:04](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/implementing-stable-locators?u=76281980&t=184)** There you go. So just by changing this whole located that I copied from Chrome to a get by my test code is more readable. It's more maintainable, and also it would be more stable to all the DOM changes that are happening. So if another link is added in the menu, it won't break because there is a hardcoded number four in the previous locator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Testing]] (1)
> **UI Navigation:** click on (3), right-click (2), go to (2), in the menu (1)
> **Env Vars:** url (3), dom (1)
> **Definitions:** is a  (3)
> **URLs:** [testing.com](https://testing.com) (2)
> **Speakers:** - [instructor] (1)

#### [Handling external dependencies to minimise flakiness](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-external-dependencies-to-minimise-flakiness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-external-dependencies-to-minimise-flakiness?u=76281980&t=0)** - [Instructor] I had a test field just because the server was acting moody that day. External APIs, no matter how reliable they are, they're a big source of test flakiness. So if you look at my screen, we have got a tool shop website where we can see multiple [[Microsoft Products|products]]. So we will write a test to check if this product name combination pliers appears on the page. All right, so let's start by writing import tests expect from playwright. What we are doing is we are checking, so test product name is displayed on page.
>
> **[0:47](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-external-dependencies-to-minimise-flakiness?u=76281980&t=47)** You can be very specific like which product name if you want to. And the test body is, we will go to that page of page.goto and the page name is [practicesoftwaretesting.com](https://practicesoftwaretesting.com). And over there what we want to check is if the productLink appears. So if you do await page.getbyrole and we check the link
>
> **[1:19](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-external-dependencies-to-minimise-flakiness?u=76281980&t=79)** and the name of the link is combination pliers. So that's a link that we want to check. So we will store it in a variable called productlink. And let's do a quick expect to check productLink toBeVisible. Now let's run this test. So as you can see, it goes to the page and checks if the productLink is visible, this whole block was visible so the test ran and test passed. Now this data, if you look at the data, this is coming from the API. So now if you look at the data, this data that we are getting for a product, it is coming from the API. So there is this link to the API and it gets you all the product details like this one. So I'm going to copy this data for myself
>
> **[2:41](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-external-dependencies-to-minimise-flakiness?u=76281980&t=161)** and I will just put it here and end of the API, which is this bit. I'll copy this as well. This is so that we can mock this API. So let me see if I've got the brackets right. This matches this bracket, this curly bracket would, where is this? So that's the array. And what am I missing here? We've got this curly bracket
>
> **[3:23](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-external-dependencies-to-minimise-flakiness?u=76281980&t=203)** and I need another curly bracket for closing. So is it this one? So this matches this bracket. This square bracket matches that one. And then we have got this square, yeah, so that should be right now. So in here there's a lot of details. So I'm going to just simplify this so that we can manage this easily
>
> **[3:56](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-external-dependencies-to-minimise-flakiness?u=76281980&t=236)** and the [[Representational State Transfer (REST)|rest]] looks okay to me. So we will write another test. So I'm going to just make a copy of this test just to show you what it looks like. So this is another test. Let's store this data as constant data is equal to this. And I can put this data for now in this test because this is the data that we got. And now what I'm going to do is instead of like directly going to the URL, I will first mock the API. So let's move this go to statement right after the mocking. So the original test, as you can see remains the same. What I'm doing is I'm just writing a mock. So awaitpage.route, this is how you mock a specific route and you can specify like what's the URL. So if you do star, star, it basically means everything before slash products. And this was the APIs of between equal to price 100
>
> **[5:27](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-external-dependencies-to-minimise-flakiness?u=76281980&t=327)** and page equal to 1. So this is the of the API that I've got and route.fulfill. And what would be the route data? So like we basically want to make sure that the status is 200, content type is application/[[JSON]]. So whatever head is of the API was and the body would be JSON.stringify and the data that we got from the API. So that should be it. So this is how you would write a mock, page.route, specify the URL, do a fulfill of status, contentType and body. And the rest of the test would remain the same. So let's try and run this test. It's saying something is not correct. So let's see what, what's wrong with it.
>
> **[6:51](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/handling-external-dependencies-to-minimise-flakiness?u=76281980&t=411)** So the test name is same. So the first test name is product name. This test is also product name. So I'll just write mocked. Now you can see that the play button is available. I'm going to click on it to run this test. As you can see, this test passed but let me run it properly again. So I will run this test again and you can see it in the trace viewer that this same thing appears as you can see that there are no other products because we are only returning one product in the mock API. But if I run the other test, which is actually going to the real API, you can see more products. Now this test is stable, no API downtime, no flicky data. It's completely under our control. We know what data is rendered and we can verify it with confidence. External dependencies are like caffeine, great until they are not. By mocking them, we take ownership of stability and keep our as consistent regardless of what the backend is doing. Give this a try in your own test suite.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[Representational State Transfer (REST)|Rest]] (2), [[JSON]] (2)
> **Env Vars:** api (12), url (3), json (1)
> **Code Identifiers:** productlink (3), tobevisible (1), contenttype (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (2)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (1)
> **Definitions:** basically means (1)
> **Speakers:** - [instructor] (1)

#### [Running tests multiple times to detect flakiness](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/running-tests-multiple-times-to-detect-flakiness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/running-tests-multiple-times-to-detect-flakiness?u=76281980&t=0)** - [Instructor] Flaky tests can be frustrating, passing one moment and failing the next, but there's a simple way to detect them efficiently. Let's explore how to use Playwright's repeat-each command to identify a flaky test. So on my screen, you can see two tests which come with the Playwright installation. I'm going to type the command to run the first test, so npx playwright test and --grep and the test name, which is has title. So, what this does is it will run the test. Now, because I had three projects configured in my Playwright config, it ran the test three times. So I'm going to disable the other two projects, which is Firefox and WebKit, and I will run this command again. So now, you can see it's running one test using one worker. What if I wanted to run this test 50 times? What I would do is I would repeat the same command but add --repeat-each and type 50, equal to 50. Now, you can see that it's running 50 tests using four workers. So, it's running the same test, which is has title, but it's running 50 times to make sure that this test is not flaky. If it was flaky, it would have failed once or twice and you wouldn't see 50 out of 50 passed. And that is how you detect flakiness. If a test is flaky, you make a change and you run this command again. So, rinse and repeat. That's your motto.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), npx (1), grep (1)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Fix this flaky test](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-fix-this-flaky-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-fix-this-flaky-test?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-fix-this-flaky-test?u=76281980&t=5)** - Alright, time for another challenge. I want you to mock the product API and write a test to check long nose pliers. Product link exists on the page. Let's see how you get on with that.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - alright (1)
> **Non-Speech:** (gentle music) (1)

#### [Solution: Fix this flaky test](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-fix-this-flaky-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-fix-this-flaky-test?u=76281980&t=0)** - [Instructor] This challenge is very similar to chapter number two, video number four, where we mock the API. So I literally copied the [[GitHub]] exercise files from that chapter, and this is what it looks like. I'm going to run the test, first test, to see what the data is on the website, so you can see it is showing the real data and we can see Long Nose Pliers here. So I'm going to go to the Network tab, scroll down until I see the product API, which is this one. Click on the Body, and I'm going to go scroll down and find Long Nose Pliers here, which is this data, although in mocking, the data doesn't matter, but just for the sake of this exercise, let's do this. So I've copied the data, and in this data area, what I'm going to do is I'm going to delete this product, replace it with mine. Oh, I copied the wrong one, so let's go back and run this again. [[Microsoft Products|Products]], Body. Long Nose Pliers. And delete this data. Replace it with the one that I need, Long Nose Pliers. I'm going to copy this data, and let's put that in the testing, Long Nose Pliers, and run this test.
>
> **[1:39](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-fix-this-flaky-test?u=76281980&t=99)** So I'm going to click on play to run this test. And on my screen you can see Long Nose Pliers only. There are no other products. That means it's mocked correctly, and that's a solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[GitHub]] (1)
> **UI Navigation:** scroll down (2), click on (2), go to (1)
> **Env Vars:** api (2)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Screenshot and Snapshot Testing Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Visual testing with screenshots and snapshots](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/visual-testing-with-screenshots-and-snapshots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/visual-testing-with-screenshots-and-snapshots?u=76281980&t=0)** - [Instructor] Layout bugs are sneaky. A button slightly misaligned, a label vanishing on a smaller screen, these are the kinds of issues functional tests happily skip. But users definitely won't. Visual testing steps in to bridge that gap, making sure what people see is what's meant to be seen. Visual testing ensures the app looks as intended, not that it behaves correctly. Functional tests might pass even if the UI is broken or misaligned. Visual tests catch those sneaky regressions like a button shifting, text wrapping oddly, or colors changing unexpectedly. It's like having a second pair of eyes, always comparing what the user sees with what's meant to be seen. Here's why it really counts. First, it helps detect UI changes before users do, especially the ones no one notices until it's live in production. Second, it maintains a consistent experience across devices, screen sizes, and browsers. And finally, it prevents visual bugs from creeping through unnoticed, especially after dependency updates or CSS tweaks. This is where the confusion usually kicks in. So let's break it down. Screenshots are literally images, full or partial, taken of your app's UI. They're used for pixel-by-pixel comparisons. Snapshots, on the other hand, capture the structure or output of code, usually the DOM tree or rendered output. They're more about verifying intent than visuals. One checks how something looks.
>
> **[1:33](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/visual-testing-with-screenshots-and-snapshots?u=76281980&t=93)** The other checks how something renders. Next up, we'll explore how to capture and assert screenshot effective in Playwright. Then we'll look at using snapshots for structural testing. By the end, expect to know exactly when to use each and how to avoid flaky false positives.

> [!info]- Semantic Content
>
> **Env Vars:** css (1), dom (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [How do you capture a screenshot?](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/how-do-you-capture-a-screenshot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/how-do-you-capture-a-screenshot?u=76281980&t=0)** - [Instructor] As a tester, how do you capture a screenshot when you want to do a pixel-perfect comparison? So the first step is, you basically write the test. So, we need test and expect from Playwright. And we will write the test, "capture full page screenshot." Now, remember, we need to capture a full-page screenshot, not just a screenshot, so how would we do this? So first of all, we've got this fixture page, and we will write the test body. So, if you remember, a basic test just goes to a page. So we go to [https://practicesoftwaretesting.com](https://practicesoftwaretesting.com). And once we go to the page, I want to capture the screenshot. So if you go to the Playwright documentation, there is a method called screenshot, but we are not going to use that one, we are going to use the expect statement. So, await expect page .toHaveScreenshot. And this method takes two arguments. The first argument is the screenshot name. So homepage.png. And the second argument is the options. And if you look at the Playwright documentation, you will know that this option can take an option called fullPage. And if you specify this as true, it'll take a full-page screenshot. So let's try it. So as you can see on my left, there is nothing here.
>
> **[1:34](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/how-do-you-capture-a-screenshot?u=76281980&t=94)** So I'm going to play, which means run the test. And as soon as I run this test, I can see a snapshot folder appearing. And if I click on it, I can see the full-page screenshot.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (1)
> **Code Identifiers:** tohavescreenshot (1), fullpage (1)
> **URLs:** [https://practicesoftwaretesting.com](https://practicesoftwaretesting.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How do you capture a snapshot?](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/how-do-you-capture-a-snapshot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/how-do-you-capture-a-snapshot?u=76281980&t=0)** - [Instructor] If you want to check if your page is rendered correctly and check [[HTML]] attributes are doing the right thing, you use snapshot testing. And because you're checking HTML, not the visual pixels, you pick a certain part of the page. For example, I will pick the top menu by right clicking and going to inspect element and picking the ID of the top menu. Once I've done it, I will store this ID in a comment so that I can use it in my test. So I will write a test for a snapshot test expect from playwright and test is snapshot of top menu async page.
>
> **[0:46](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/how-do-you-capture-a-snapshot?u=76281980&t=46)** And here we will go to that page. So await page.goto, and the URL of the website, [pracitcesoftwaretesting.com](https://pracitcesoftwaretesting.com). Once we are on that page, I will use this locator, this ID to create a locator and get the HTML. So await page.locator. And this is the ID. So I will put a hash and the name of the locator, dot, I want to get the HTML, so inner HTML. And I will store this in HTML. So once I have this HTML, I can compare this HTML in a snapshot to match snapshot
>
> **[1:37](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/how-do-you-capture-a-snapshot?u=76281980&t=97)** and the name of the file. So top-menu.html. Now let's run this test and see what happens. So when I run this test, if the file doesn't exist, as you can see, the test has run correctly. It will say a snapshot doesn't exist. Can I create it for you? And it does. So this is the created HTML. Now, there are several issues with this HTML. One is that it's not formatted, so I can't read it correctly. If you're committing this to [[Git]], it will be harder for someone to review. Second, it has got IDs which are generated. So NG content, which is I think [[Angular]] related. And this is a dynamic ID, which would change maybe on each deployment. So we need to sanitize it and format it. So we will write a function to sanitize and format. So function, sanitize HTML. And this will take a string, and which is the HTML string. So I want to make sure that it is returning a pretty version. So I will use the plugin import prettier from prettier and make sure that this is installed. So I will do [[npm]] install prettier, and this will install it in my package [[JSON]], which you can see over here. Now what I will do is I will clean this HTML. So I copied the HTML into the Chat GPT
>
> **[3:09](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/how-do-you-capture-a-snapshot?u=76281980&t=189)** to generate a very quick regex that I can use. This is my regex. So constant cleaned to HTML.replace, and this is my regex, and I want to replace it with nothing. So I don't want NG content at all in the the HTML. Second thing I want to do is formatting. So formatted await prettier.format, and I will pass in the HTML, which is cleaned, and in this HTML, so the options that I will pass are parser HTML. And second option is I don't want a single line attribute, so I'm just going to make sure that it's disabled. And now let's try and use this method in here. So sanitize HTML, HTML. I will just use this in here. But as you can see, it's a promise. So we'll need to do an await. So let's actually create another variable. So constant sanitized HTML is able to await sanitized HTML. And there you go. So this was the previous HTML. You can see all this. Now I'm going to delete this and rerun the test. Let's run our test again.
>
> **[4:46](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/how-do-you-capture-a-snapshot?u=76281980&t=286)** So the test ran, and now it has failed because it's waiting, because we haven't done the return. So let's do return of formatted. Let's run the test again. This time the test passed. So this snapshot has generated the HTML. As you can see, this is the snapshot that is generated. It's pretty snapshot, and sometimes the editor makes changes. So make sure you try to save this and see it's not actually changing your snapshot because on save some editors have auto intent option. Now I will rerun this test again because I haven't changed anything. The test should pass, but it didn't because as you can see the editor made a change to these lines. As soon as I saved it, it changes the content. So I will delete this snapshot again. I will regenerate it. It has created a snapshot. You can see the snapshot here, and I will rerun the test now. And this test has passed. So this is how you do a snapshot test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (26), [[Git]] (1), [[Angular]] (1), [[npm]] (1), [[JSON]] (1)
> **Env Vars:** html (25), url (1), npm (1), json (1), gpt (1)
> **CLI Commands:** make (4), git (1), npm (1)
> **Prerequisites:** install (2)
> **File Paths:** top-menu.html (1)
> **URLs:** [pracitcesoftwaretesting.com](https://pracitcesoftwaretesting.com) (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Challenge: Implement a test to screenshot a page](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-implement-a-test-to-screenshot-a-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-implement-a-test-to-screenshot-a-page?u=76281980&t=0)** - [Instructor] All right, this is your third challenge. I want you to take a screenshot of [binaryville.com](https://binaryville.com) and not the full page, just the bit that is visible. There is another bit of this challenge, which is part B. This is where you will take a snapshot of the first heading on [binaryville.com](https://binaryville.com), and the output should look something like this.

> [!info]- Semantic Content
>
> **URLs:** [binaryville.com](https://binaryville.com) (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Implement a test to screenshot a page](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-implement-a-test-to-screenshot-a-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-implement-a-test-to-screenshot-a-page?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-implement-a-test-to-screenshot-a-page?u=76281980&t=5)** - [Instructor] Since we have already practiced the screenshot testing and the snapshot testing, I will just directly show you what the code looks like. So, for the screenshot test, it's very simple. You'll just do a two half screenshot and store it in a file called binaryville-homepage.png. For the next challenge where you're doing snapshot, you don't need to do sanitization because you're just capturing each one. But if you were dealing with something more complicated, that is where you would need to do sanitize. So it's just three line of code, like this one.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 4. Running Tests on Microsoft Playwright Testing Service

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Microsoft Playwright Testing (MPT) service?](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/what-is-microsoft-playwright-testing-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/what-is-microsoft-playwright-testing-service?u=76281980&t=0)** - [Instructor] As your test suite grows, running tests locally becomes a bottleneck. Managing infrastructure, configuring parallel execution and debugging failures can quickly become overwhelming. That's where the [[Microsoft]] Playwright Testing Service comes in, a cloud-based platform designed to scale your test effortlessly while ensuring consistent execution. Let's explore how this service can revolutionize your testing strategy. Microsoft Playwright Testing Service is a cloud-based platform that lets you run your Playwright tests at scale. Remember, in the previous chapters, I mentioned that you cannot run more than one worker on your CI? Now you can with this service. Instead of setting up complex infrastructure yourself, Microsoft Playwright Testing Service handles it for you, offering parallel execution, automatic scaling, and debugging tools. This makes it ideal for [[Continuous Integration (CI)|continuous integration]] and continuous deployment environments where reliable test execution is crucial. There are some key differences between the Microsoft Playwright Framework locally and the Microsoft Playwright Testing Service. So in all the previous chapters, you have been looking at the Microsoft Playwright Framework. In this chapter, we will be discussing about Microsoft Playwright Testing service. With the framework, you are responsible for setting infrastructure, configuring parallel execution, and managing resources. But with the testing service, all of this is handled. It provides built-in parallel execution, debugging tools, and auto-scaling.
>
> **[1:33](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/what-is-microsoft-playwright-testing-service?u=76281980&t=93)** This means you can focus on writing tests, not managing the infrastructure. Microsoft Playwright Testing Service takes care of the heavy lifting by providing infrastructure management, parallel execution, and cross-browser testing. It also integrates seamlessly with [[GitHub]] actions and [[Microsoft Azure|Azure]] [[DevOps]], allowing you to automate tests at scale without worrying about resource management. Plus, with built-in debugging tools and trace viewer, tracking down issues become a breeze. If you're part of a QA team, a developer working on automated tests, or a CI/CD pipeline engineer, Microsoft Playwright Testing Service can significantly enhance your workflow. It's designed for anyone who needs scalable, reliable, and efficient test execution without the hassle of managing infrastructure. If that sounds like you, Microsoft Playwright Testing Service is definitely worth exploring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (10), [[Continuous Integration (CI)|Continuous integration]] (1), [[GitHub]] (1), [[Microsoft Azure|Azure]] (1), [[DevOps]] (1)
> **CLI Commands:** cd (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating a resource on Microsoft Azure](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/creating-a-resource-on-microsoft-azure-31258274?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/creating-a-resource-on-microsoft-azure-31258274?u=76281980&t=0)** Before we can start leveraging playwright workspaces in [[Microsoft Azure|Azure]], to run our playwright tests in the cloud, we first need to create a resource on [[Microsoft Azure]]. For that, head over to portal.[azure.com](https://azure.com) and sign in with your Azure account. If Azure account has not been set up yet, choose a subscription such as the Azure free trial or any existing plan. Once inside the Azure portal, go to the top search and type playwright. Here you will see multiple playwright services the one that you are after is the playwright workspaces do not select the playwright testing classic because that is going away so i'm gonna click on playwright workspaces here i've got an option to click create this is how i'm going to create a playwright workspace for our project so for the resource group i'm just going to type [[LinkedIn]] learning with dashes in workspace themes cannot contain any special characters it may update later but i'm just going to type linkedin playwright as one [[Microsoft Word|word]] for the region i'm just going to select east us and click on review and create what this will do is it will validate my setup and then it it will give me an option to create. Once I click on create, it will start deploying it. And as you can see, the deployment is happening on the screen.
>
> **[1:37](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/creating-a-resource-on-microsoft-azure-31258274?u=76281980&t=97)** So now you can see the deployment has succeeded. Your deployment is complete. You can go to the resource and validate that the deployment is complete and you can see the browser endpoint and API base URL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[LinkedIn]] (2), [[Microsoft Azure]] (1), [[Microsoft Word|Word]] (1)
> **UI Navigation:** click on (3), go to (2), select the (1)
> **Env Vars:** api (1), url (1)
> **Prerequisites:** set up (1), setup (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Tools:** azure portal (1)
> **Analogies:** such as (1)

#### [Setting up your framework to run tests on the cloud](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/setting-up-framework-to-run-tests-on-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/setting-up-framework-to-run-tests-on-cloud?u=76281980&t=0)** - [Instructor] So now that you have got the [[Microsoft Azure|Azure]] resource ready for the Playwright Testing Service, it's time to setup your repository to use it. So this is just a basic Playwright setup that you get with the [[npm]] installed Playwright. Now what we will do is we will go to the Azure resource. So after deploying, you will see this message your deployment is complete so click on go to resource. This will take you to the newly created resource. Here you have got the dashboard URL, click on the dashboard URL and sign in. And this will give you all the details that you need to follow to set up your framework. So we will follow all these steps. To start, I want you to notice files on my left it doesn't contain the Playwright Service config and that is what we need to run the test on the [[Microsoft]] Playwright Testing Service. So I'm going to open my terminal. And run the first command which is npm init
>
> **[1:08](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/setting-up-framework-to-run-tests-on-cloud?u=76281980&t=68)** azure/microsoft-playwright-testing. What this will do is it will enable your local Playwright installation to run tests on Microsoft Playwright Testing Service. So as you can see now it has got a Playwright Service config file. The second step you need to do is to make sure that you are logged into Azure. So I will type az login. So once I do az login, it will ask me to sign into Azure. When I click on sign in it will say you have logged into Azure. We can now safely close this window and you will see that it has logged in correctly. It is showing you your default directory. And wait, first. And just press enter so there is no other changes. Last but not least, you need the Playwright Service URL. And for that if you can go back to that documentation, here you can see the add region in your setup, just click on the copy here and bring it back to your editor and press enter. Now you can see if you echo that environment variable it will show you the Playwright Service you URL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[Microsoft]] (3), [[npm]] (2)
> **UI Navigation:** click on (4), go to (2)
> **CLI Commands:** npm (2), az (2), make (1)
> **Env Vars:** url (4)
> **Prerequisites:** setup (3), set up (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Running tests via CLI](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/running-tests-via-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/running-tests-via-cli?u=76281980&t=0)** - [Instructor] Finally, when you want to run the test again, refer back to the documentation that is provided by [[Microsoft]] to test them before. And place playwright test that's how you normally run the tests on local, but if you want to run it on the Microsoft playwright testing service, this --config and you provide the option playwright service config.ts is necessary. So I'm going to copy this line. Go back to my editor where we have got a local basic setup. And I will run this test. So npx playwright test. Now you can see that it is showing us initializing reporting for the test run. You can view results at test URL so I will open this URL in the browser which is the URL for the Microsoft Playwright Testing Service so I will open this URL. Sign in again. And here you can see it ran all the tests on all the browsers it showed me six tests passed. And you can see all the information visible on the screen. So that's how you run tests on Microsoft Playwright Testing Service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4)
> **Env Vars:** url (4)
> **File Paths:** config.ts (1)
> **CLI Commands:** npx (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Run tests against your local server on MPT](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-run-tests-against-your-local-server-on-mpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/challenge-run-tests-against-your-local-server-on-mpt?u=76281980&t=5)** - [Narrator] Here's your last challenge. I want you to run your test against your local server on [[Microsoft]] Playwright Testing service. So remember, this needs some sort of configuration related to network because your test exists on your machine, they are not connected to the internet, and your Microsoft Playwright Testing service is in the cloud. So how can that Playwright Testing service connect to your machine and run the test? Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2)
> **Speakers:** - [narrator] (1)

#### [Solution: Run tests against your local server on MPT](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-run-tests-against-your-local-server-on-mpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-run-tests-against-your-local-server-on-mpt?u=76281980&t=0)** - [Instructor] The solution is exposeNetwork loopback. As you can see on my screen, in the [[Microsoft]] documentation, it says, "This setting allows you to connect to local resources from your Playwright test code without having to configure another firewall setting." So how do you use it? Basically, if you scroll up, it says you have to use it in your defined config, and this is your Playwright service config. So we will use this and see how that works. Now that you know, you can just go back to your codebase and double-check that exposeNetwork is defined. Even if it's not defined, the default value, as you can see, is loopback. So you don't even need to do anything, just run your test. So to run the test, I will just run the command npx playwright test
>
> **[0:50](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/solution-run-tests-against-your-local-server-on-mpt?u=76281980&t=50)** - -config=playwright.service.config.ts, and number of workers. Let's see what happens. So the test passed, and the test run on the Microsoft Playwright Testing service. You can see this by looking at the message here, running tests using Microsoft Playwright Testing service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (3)
> **Code Identifiers:** exposenetwork (2)
> **File Paths:** playwright.service.config.ts (1)
> **CLI Commands:** npx (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll up (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Final thoughts and best practices](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/final-thoughts-and-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/final-thoughts-and-best-practices?u=76281980&t=0)** - [Instructor] We have covered a lot of ground in this course, from speed optimization and parallel execution to flakiness elimination and cloud-based testing. Before we wrap up, let's consolidate what you have mastered and discuss some essential testing strategies to keep your automation robust and reliable. You have mastered how to optimize storageState when testing in parallel on your local or in the cloud, how to eliminate flaky tests with retries, how to debug the test, and how to structure a test, which won't be flaky anymore. You have also learned what is [[Microsoft]] Playwright Testing service, how you can scale your test, how should you choose between visual testing, between snapshot and screenshot, and you learned how to integrate Playwright into CI/CD pipelines for automation and scale. Here are some essential strategies to maintain a robust test suite. First of all, to minimize redundancy, use storageState, example, logins. Next, use the Playwright's built-in automating rather than using manual ways. Third is use the --repeat-each option to detect instability in your test suite. Fourth is leverage cloud execution. Fifth is ensure UI consistency. Last but not least, integrate testing into CI/CD pipelines for automated control. Now remember, some of the teams from my experience did the last step in the very, very end,
>
> **[1:36](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/final-thoughts-and-best-practices?u=76281980&t=96)** and they had a very bad experience with this because they were writing the test only on their local, and when they came to integrating this test into the pipeline, it didn't work there because the tests were flaky. So make sure from the very beginning when you start writing or developing the framework, your tests are working end to end. It means they work on your machine, as well as they work on the pipeline and the Microsoft Playwright Testing service. That's a key bit of an advice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2)
> **CLI Commands:** cd (2), make (1)
> **Code Identifiers:** storagestate (2)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing/next-steps?u=76281980&t=0)** - Congratulations on finishing this course. Now you have got full bragging rights and a certificate to show it to your friends that you have completed advanced Playwright techniques. Make sure you follow me on [[LinkedIn]]. And if you have got any questions, click the Q&A tab and ask your question there. Also, look at the [[GitHub]] files and keep learning. Playwright documentation is awesome, so make sure you look at that, as well. See you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[GitHub]] (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Qambar Raza]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-playwright-techniques-5210160)

## Skills Covered

- Test Automation

## Path Context

### In [[Master Test Automation with Playwright]]
← [[Playwright- Design Patterns]] | **4 of 4**

## Appears In

- [[Master Test Automation with Playwright]]

## Related Courses

_Courses sharing skills:_

- [[Postman Essential Training]] — Test Automation
- [[Learning Selenium- Structure, Scale, Run, and Optimize Automated Tests]] — Test Automation
- [[Playwright- Design Patterns]] — Test Automation
- [[Playwright Essential Training- Abstractions, Fixtures, and Complex Scenarios]] — Test Automation
- [[Python Automation and Testing]] — Test Automation

---

[↑ Back to top](#)