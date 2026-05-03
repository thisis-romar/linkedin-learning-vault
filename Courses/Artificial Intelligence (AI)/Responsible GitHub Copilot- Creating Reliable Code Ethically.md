---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: responsible-github-copilot-creating-reliable-code-ethically-24981582
url: "https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582"
duration_minutes: 23
duration: 23m
level: Beginner
updated: 1/15/2025
learners: 81700
skills:
  - Artificial Intelligence (AI)
  - GitHub Copilot
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGgFgJMm98eKQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736186054165?e=2147483647&amp;v=beta&amp;t=t2HKxA8B6gKwi9B1Kbjui5umAr0tD6Wgb4UCRglBYzc"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Transform Your Programming with AI Coding Tools]]'
  - '[[Career Essentials in GitHub Copilot Professional Certificate]]'
  - '[[Master GitHub Copilot]]'
prev_courses:
  - '[[Software Testing Assistance with GitHub Copilot AI]]'
  - '[[Refactoring with GitHub Copilot]]'
  - '[[Delivering and Analyzing a Software Pilot- GitHub Copilot]]'
next_courses:
  - '[[Delivering and Analyzing a Software Pilot- GitHub Copilot]]'
  - null
  - '[[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]]'
path_nav: '[{"path":"Transform Your Programming with AI Coding Tools","position":6,"total":7,"prev":"Software Testing Assistance with GitHub Copilot AI","next":"Delivering and Analyzing a Software Pilot- GitHub Copilot"},{"path":"Career Essentials in GitHub Copilot Professional Certificate","position":4,"total":4,"prev":"Refactoring with GitHub Copilot","next":null},{"path":"Master GitHub Copilot","position":5,"total":8,"prev":"Delivering and Analyzing a Software Pilot- GitHub Copilot","next":"Creating a Book Search Engine from Scratch Using Java and GitHub Copilot"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/artificial-intelligence-ai
  - skill/github-copilot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Responsible%20GitHub%20Copilot-%20Creating%20Reliable%20Code%20Ethically.md)

![Responsible GitHub Copilot: Creating Reliable Code Ethically](https://media.licdn.com/dms/image/v2/D4D0DAQGgFgJMm98eKQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1736186054165?e=2147483647&amp;v=beta&amp;t=t2HKxA8B6gKwi9B1Kbjui5umAr0tD6Wgb4UCRglBYzc)

# Responsible GitHub Copilot: Creating Reliable Code Ethically

> GitHub Copilot offers speed and ease, but getting things right, both in code and on the more human side, is challenging. You can use GitHub Copilot to create code instantly, as well as inspect and test it, but how can you be sure you’re getting the right code for the right purpose? In this course, DevOps professional and consultant Rob Bos shows you how. Learn how to avoid introducing bias into yo

> [LinkedIn Learning](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582) | 23m | Beginner | 82K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [GenAI and creating code responsibly](#genai-and-creating-code-responsibly)
- [**1. Using GitHub Copilot Responsibly**](#1-using-github-copilot-responsibly) (7 videos)
  - [Controlling the Skies: Your role as a Copilot](#controlling-the-skies-your-role-as-a-copilot)
  - [Keeping things current: Data freshness](#keeping-things-current-data-freshness)
  - [Unravelling the bias: Model prejudices](#unravelling-the-bias-model-prejudices)
  - [Crafting excellence: Development best practices](#crafting-excellence-development-best-practices)
  - [Trust but verify: Validate everything](#trust-but-verify-validate-everything)
  - [Bulletproof your code: Unit and regression testing](#bulletproof-your-code-unit-and-regression-testing)
  - [Guarding your gates: Security testing essentials](#guarding-your-gates-security-testing-essentials)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [GenAI and creating code responsibly](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/genai-and-creating-code-responsibly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/genai-and-creating-code-responsibly?u=76281980&t=0)** - Welcome to this course on [[Responsible AI]] with [[GitHub Copilot]]. In this course, I want to make you aware what it means to responsibly use [[Generative AI]] in general but especially when you're writing code, and that, of course, applies when you do GitHub Copilot. We'll talk about your role as a [[Microsoft Copilot|copilot]]. You're the pilot, and Copilot has a different reason there. We'll talk about things like data freshness, model prejudices. All those kinds of things boil down together to making sure that you're using generative AI in a responsible way to make sure you get the most value out of that and you do not go in any direction where you just blindly trust whatever a GitHub Copilot produces for you. So join me in this course and learn all about responsible AI with GitHub Copilot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (4), [[Responsible AI]] (2), [[Generative AI]] (2), [[Microsoft Copilot|Copilot]] (2)
> **Tools:** github (4)
> **CLI Commands:** make (2)
> **Speakers:** - welcome (1)


### 1. Using GitHub Copilot Responsibly

[↑ Back to Table of Contents](#table-of-contents)

#### [Controlling the Skies: Your role as a Copilot](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/controlling-the-skies-your-role-as-a-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/controlling-the-skies-your-role-as-a-copilot?u=76281980&t=0)** - The name for [[Microsoft Copilot|Copilot]] was chosen by [[GitHub]], and it fits excellently. It specifies that the AI will act as a copilot, giving you information on the things you ask it for. It also states that you are still the pilot. You are the one making all the decisions. [[GitHub Copilot]] behaves like a copilot with a distinction that it waits for you to ask it something, whereas sometimes a human copilot starts to give you information or remarks you did not ask it for. I see GitHub Copilot more as a buddy or a co-worker, and you can ask it anything you like. Because this copilot has no human component, there are also no emotions involved, or even things like reading between the lines. The GitHub Copilot service is based on a large language model that has been trained on vast amounts of data that we, as humans, have generated. It has no feelings or opinions on the quality of your questions. This allows you to feel safe with GitHub Copilot, and it will not think any less of you if you ask it a question that you might think is very basic. I can imagine some people would feel embarrassed to ask such a question to a coworker, being afraid that your colleague thinks less of you or your skills. Since you are in control as the pilot using GitHub Copilot, all the responsibility of your decisions fall on you as well. It's up to you to determine if the code
>
> **[1:33](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/controlling-the-skies-your-role-as-a-copilot?u=76281980&t=93)** or explanation co-pilot gives you is accurate or not. You are the professional that guides Copilot into a certain direction, and you control what you do with results. This also means that validating that the generated code is correct, or that it can work in your environment and it doesn't create security issues is all up to you. You are the pilot. Your role as the pilot is to provide GitHub Copilot with enough information to make sense of your intent. Copilot uses the context of the files you have open as information to base the answers on. Based on the question or prompt, it'll determine what files are interesting to send to the model, and it helps if you understand how the service works and how [[Large Language Models (LLM)|large language models]] use the information available to them. The response can be improved by adding specific references to the files or parts of those files. Most of the officially supported IDs will let you add this context with #file or #selection. By giving Copilot examples of data you are working with or classes and methods that are available in your code, it will give you better results. In the end, the code that you produce using GitHub Copilot is linked to your account. You are the one pushing that code into production, and the comments will be linked to your user information.
>
> **[3:07](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/controlling-the-skies-your-role-as-a-copilot?u=76281980&t=187)** So another thing to remember when using Copilot is that large language models only reason about the information that you ask it for. There is no computation involved. The classic examples here are asking the large language model for a random number between 1 and 100. Most of the time it will respond with the answer of 42. Yes, this is not because it's randomly generated the number, but because this is the number that it has seen reference in their training data the most. The other example is asking Copilot to count the amount of times the letter R is in the [[Microsoft Word|word]] strawberry. Most of the time it will tell you the answer is two, whereas the actual answer is three. So in short, you need to know how Copilot creates an answer to your prompts, and with that, you need to use the power of GitHub Copilot wisely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (11), [[GitHub Copilot]] (8), [[Large Language Models (LLM)|Large language models]] (2), [[GitHub]] (1), [[Microsoft Word|Word]] (1)
> **Tools:** github (9)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - the (1)

#### [Keeping things current: Data freshness](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/keeping-things-current-data-freshness?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/keeping-things-current-data-freshness?u=76281980&t=0)** - One thing all [[Large Language Models (LLM)|large language models]] have in common is that they are static in essence. They're trained at a certain point in time and the training freezes the available information into the model. That means that after the training period, there is currently no way to update the models or feed them newer information. This problem is known as data freshness. Training these models is also very time consuming and uses large amounts of computing power, memory, and disc space. It is therefore impractical for the providers of those models to regularly update them. You can see this in practice by looking at the release dates of major versions. Looking at one of the most well-known models, [[ChatGPT]], we can see that they released version 3.5 in November, 2022. The next major iteration was released in March, 2023, which was four months later. After the initial release, they did provide more tuned versions or add more capabilities, but the larger releases always take time. At the time of this recording, a newer major version of chatGPT has not been released for six months. The result of this is that the models are always stuck with the available information at the time of training. If training the model takes months and new releases are only available twice a year, then the information that was available
>
> **[1:32](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/keeping-things-current-data-freshness?u=76281980&t=92)** to the model is almost always at least six months old or older. This becomes visible for engineers using [[GitHub Copilot]] when they search for newer versions of their technology stack. Asking [[Microsoft Copilot|Copilot]] questions about the large, about the latest version of node.gs, for example, may give you an answer with a different version than you are expecting. If that version was released either during or after the training model, it will be different already. In the enterprise version of GitHub copilot, there is specific functionality available to prevent this from happening. Using the at [[GitHub]] chat participant, you can instruct copilot to use the Bing search engine to look for the information online. The downside is that you have to anticipate this issue with your current prompt and then add this instruction to get the current and correct results back. This is also another example that shows that you are the pilot and you are in full control of the direction you are going into. Since you are the engineer, you probably know if you're asking GitHub Copilot something that references versions, for example, when referring to packages that you are importing to your code base. Even when you get an answer that says, import this package without version into your project, your next question should either be, how do I update this to the latest version? Or you should be asking what the latest version of that package is. Knowing about this data freshness issue can save you a lot of head scratching
>
> **[3:04](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/keeping-things-current-data-freshness?u=76281980&t=184)** when the solution provided does not work or works with some unexpected side effects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (3), [[ChatGPT]] (2), [[Microsoft Copilot|Copilot]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[GitHub]] (1)
> **Tools:** github (4)
> **Code Identifiers:** chatgpt (2)
> **Definitions:** means that (1), known as (1)
> **Analogies:** for example (2)
> **CLI Commands:** node (1)
> **Versions:** version 3 (1)
> **Speakers:** - one (1)

#### [Unravelling the bias: Model prejudices](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/unravelling-the-bias-model-prejudices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/unravelling-the-bias-model-prejudices?u=76281980&t=0)** - All [[Large Language Models (LLM)|large language models]] have a built-in bias. Having a bias means that they will show a preference for certain information or certain ways of thinking. This is a key concept when learning about large language models. They reiterate what they have seen the most. Since the models are trained on data generated by humans, our human biases show through in their responses to our prompts. For example, if the training data for the Mel model was only done with houses that have red tiled roofs, the result of asking for a description of a house will most likely be one with a tiled roof and a red one at that. Even asking for the code to draw a house can have this bias implemented in the generated code. This also means [[Microsoft Copilot|Copilot]] could potentially respond with results that are harmful, hateful, racist, sexist, or otherwise inappropriate. [[GitHub]] of course operates the service with content filtering that helps prevent this from showing up in the results. Sometimes it will just respond with, "Hey, I can't assist you with that," if it determines your prompt asked for harmful content. Keep in mind that this cannot be 100% waterproof. The bias in the data could still leak into the information it shows you. Let's talk about places where this might show up when using [[GitHub Copilot]]. It could for example show up when you ask it to generate test data for your unit tests. Depending on how you phrase the prompt, you might end up
>
> **[1:35](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/unravelling-the-bias-model-prejudices?u=76281980&t=95)** with data that is culturally incorrect if it does not match your region. It might be racist and repeat data from a racist source. Or think for example where you ask Copilot to help you write an algorithm to determine credit risks for a person. Humans have historically rated these risks based on for example, gender, race, wealth, or even the profession of your parents. These kinds of biases might show up in the algorithm if Copilot is helping you to create it. This is another example that shows that it is super-important to understand how a large language model actually works and to trigger you to educate yourself on the biases that we all have. With that knowledge, you can prevent this bias from ending up in your own code base by looking at the suggestions that GitHub Copilot gives you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3), [[Large Language Models (LLM)|Large language models]] (2), [[GitHub Copilot]] (2), [[GitHub]] (1)
> **Analogies:** for example (4)
> **Tools:** github (3)
> **Definitions:** means that (1), is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - all (1)

#### [Crafting excellence: Development best practices](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/crafting-excellence-development-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/crafting-excellence-development-best-practices?u=76281980&t=0)** - By now, I have said this a couple of times, but I cannot stress it enough. While using [[Generative AI]] like [[GitHub Copilot]], you are in a driver's seat. You provide direction to [[Microsoft Copilot|Copilot]] on what you want to achieve, and you give it hints on how you want to achieve that. Then you decide what you do with the suggestions that Copilot gives you. This also means that all the coding lessons learned from coding apply. You need to validate that you have created code that works, code that performs within your requirements and code that is maintainable in the long run. Since you are responsible for creating all that code, you need to use your expertise to validate everything as well. That means creating a way of validating the code does what you expect it to do. And this often starts with things like adding unit tests, but using Copilot, you can also go to the next level and ask it for other ways to test and validate your code. Testing includes validating the code executes as instructed, but also to add regression test into the mix to prevent a change in location A in the code to have an unwanted effect in location B. So that means the classic test pyramid still applies here. Write the tests that you can validate your code and choose the level where the tests are most applicable. This could be a unit test, an integration test that only tests the edges of your code where it integrates with other places.
>
> **[1:34](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/crafting-excellence-development-best-practices?u=76281980&t=94)** Or you could start writing end-to-end acceptance tests, which were often slower to execute. I'll dive deeper into the test topic in the next video. Using GitHub Copilot does not mean you can blindly trust everything at outputs, as we have seen already in a couple of these examples. That also means you cannot push just this into a branch, create a pull request and be done with the change. Someone else in your team still needs to review the pull request and validate that things that have been created within your team's way of working. For me, this is a standard practice for development these days, and it incorporates a lot of what we have seen in the [[DevOps]] movement. You are the engineer creating this new code with some help of Copilot, of course. And you need to show your craft and expertise with the code that you deliver. Take some pride in delivering a quality product, and this of course goes for everything you create, whether it is code, [[Infrastructure as code (IaC)|infrastructure as code]], or CI/CD pipelines that push your code into production. You still need to think about edge cases, input validation, and take security measures to prevent things like [[SQL]] injection attacks. Copilot can of course help with that, but you need to start asking for that and see how you can improve your code in your way of working using GitHub Copilot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[GitHub Copilot]] (3), [[Generative AI]] (1), [[DevOps]] (1), [[Infrastructure as code (IaC)|Infrastructure as code]] (1)
> **Tools:** github (3)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** cd (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - by (1)

#### [Trust but verify: Validate everything](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/trust-but-verify-validate-everything?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/trust-but-verify-validate-everything?u=76281980&t=0)** - We have seen, in previous videos, that [[Large Language Models (LLM)|large language models]] are, in essence, just a text predictor. Based on the data the model was trained on, it will choose the most likely [[Microsoft Word|word]] to continue the given sentence with. Based on the instructions given with your prompt, it might return something that does not fit your needs at all, or it might go off in a different direction of the things you actually need. [[GitHub Copilot]] has a very good system prompt with instructions on what you want to accomplish as a user. And we know that large language models work exceptionally well with code, as code is very structured text. Often the results are so good it is very easy to fall into a trap where you start to blindly accept whatever [[Microsoft Copilot|Copilot]] suggests. As we have seen the issue with data freshness and biases in the previous videos, it is important to remember that large language models are nondeterministic. Even if you ask it the same question over and over, it is very likely you'll get a slightly different answer. Most of the answers are pretty similar, of course, but you can see variations in every single answer. Because of this nature of large language models, you need to look at everything it generates with your own expertise. Look at the suggestions and determine if the code fits your environment. The next step is to validate that the code
>
> **[1:32](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/trust-but-verify-validate-everything?u=76281980&t=92)** actually does what you want it to do, and you can do this through running through the code, checking the results, executing it, or adding enough tests so that you have confidence in the results. What kind of validation you need is, of course, completely dependent on your own requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (4), [[Microsoft Word|Word]] (1), [[GitHub Copilot]] (1), [[Microsoft Copilot|Copilot]] (1)
> **Tools:** github (1)
> **Speakers:** - we (1)

#### [Bulletproof your code: Unit and regression testing](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/bulletproof-your-code-unit-and-regression-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/bulletproof-your-code-unit-and-regression-testing?u=76281980&t=0)** - Writing good tests is almost an art form. In my opinion, a test should be able to run in isolation from the [[Representational State Transfer (REST)|rest]] of your environment. And test a single thing and nothing more. You create a test to codify your business rules on the objects and methods, or perhaps start a test from the outside as an integration test. In the past I have created SpecFlow like tests where we described in business language our expectations for an API and by only creating these types of tests, we had a high code coverage and we got high confidence that our API would still work according to our specs. In that case, there were no unit tests involved at all. So choose your set of tests very carefully. Just like trying to get a high percentage of code coverage by tests should not be a goal by itself. A test is there to increase your confidence as that code executes as defined, and now you can run those tests in different phases of your development cycle. A unit test often test only a single method of your code and test its normal behavior together with error handling, input validation, and perhaps some other edge cases. Look for example, at this simple calculator code that has a method that adds two integers together, you can add this test to test its normal mode of operation by adding two numbers together. [[Microsoft Copilot|Copilot]] can now help you find some edge cases that you want to make sure that your implementation
>
> **[1:34](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/bulletproof-your-code-unit-and-regression-testing?u=76281980&t=94)** can handle correctly as well. Or for example, gracefully handle any exceptions that might come up. Co-pilot will probably tell you to add a test for negative numbers and then throw in examples with max integer issues as well. Co-pilot works very well in exploring these edge cases if you ask it the right way. This is, we're working on your prompting skills really starts to pay off. In the beginning of using Copilot, people often just ask for all the tests Copilot can think of. There are some size limitations for the code that can be generated and Copilot can easily give you a couple of simple unit tests, but it will start indicating pretty quickly that there are more tests to think of, but you will need to implement those yourself. This becomes less of an issue as the context window for Copilot keeps on growing, but we see that more and more complex code, Copilot will run into these limitations as well. The smarter thing to do here is asking Copilot instead to only generate the method headers for the missing tests, and all of a sudden you get the entire framework of tests that now you need to go and implement. With that, you can use Copilot to suggest and let it complete those methods for you as well. So explore, Copilot and play with the prompts to discover more ways to run tests and to improve your confidence before you deploy your code to production. As ask it about edge cases or try out mutation testing for example, or maybe look at how to set up a low test. Copilot is that pair programming buddy
>
> **[3:11](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/bulletproof-your-code-unit-and-regression-testing?u=76281980&t=191)** that will not think any less of you if you ask it to explain the different options. The best tip around testing is to work with Copilots to be able to run your tests locally while you are developing. Testing locally should always be the last thing you run before you commit and push your code into your repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (10), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (3), just like (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** api (2)
> **Prerequisites:** set up (1)
> **Speakers:** - writing (1)

#### [Guarding your gates: Security testing essentials](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/guarding-your-gates-security-testing-essentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/guarding-your-gates-security-testing-essentials?u=76281980&t=0)** - Now that we can create a lot more code with [[GitHub Copilot]], testing on all sides becomes more important than ever, with [[Unit Testing]], [[Integration Testing]], now you can capture the expectations you have for your code and validate that there are no regression issues, things that used to work, and now no longer work anymore. One of the next steps is adding common development practices through your development process, and for example, adding [[Continuous Integration (CI)|continuous integration]] and continuous deployment practices from the [[DevOps]] world into your project. Adding those things will give you even more confidence in your application. When you have the project in good order, you can also start adding [[Security Testing]] into the mix. [[GitHub]] has filters enabled on everything that goes into GitHub copilot and checks the results that it generates as well. You might already have spotted the warning inside of GitHub copilot chat that tells you about the security issues in the code that was produced. [[Microsoft Copilot|Copilot]] watches out for things like injection attacks and hard-coded secrets in the results it will show you as well. With that, you should also validate all the code that is created by you and thus also that is created with using GI copilot. Run standard security checks on your project. Luckily for us, copilot can help you with that as well. In the chat, you ask for ways to run security checks on your project, and if you run inside of a container, ask how people can inject extra data or binaries into your runtime environment.
>
> **[1:34](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/guarding-your-gates-security-testing-essentials?u=76281980&t=94)** Ask copilot to explain the [[Dependency Management]] and how you can prevent supply chain attacks from happening. Copilot will not magically fix all these issues for you, but it can help you a lot with learning in different ways to prevent this, and it can help you create the scripts that you can embed into your process as well. This also applies to all the code you have written yourself as well. Ask copilot to review a part of that code and recommend security improvements and keep in mind that you are the pilot. You have the professional skills to know about the security context for your project. If it is a [[Representational State Transfer (REST)|rest]] API ask about the OBO top 10 for web APIs. If you're running an application from disc, ask about file tampering and how to prevent that from happening. If you run your code inside of a container, ask copilot about container and runtime security, and let's all work together to make the world a more secure place starting with your own code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (7), [[GitHub Copilot]] (3), [[Unit Testing]] (1), [[Integration Testing]] (1), [[Continuous Integration (CI)|Continuous integration]] (1)
> **Tools:** github (4)
> **Env Vars:** api (1), obo (1)
> **Warnings:** warning (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/next-steps?u=76281980&t=0)** - In this course, [[Responsible AI]] with [[GitHub Copilot]]. We talked about being aware of what responsible usage of GitHub Copilot means. We talked about things like, Hey, you are the pilot. You are completely in control of what kind of questions you ask GitHub Copilot, what direction you're going into, and you control what you do with the results it gives you. I hope you're not blindly accepting whatever is in there because we also talked about data freshness and that you need to take up a responsibility of making sure that your code and the methods that you use are still up to date. We also talked about the model prejudices for example. Hey, be aware of all the biases that are in the generated model and think about how you can best mitigate those things. All this boils down to the development best practices. Be aware of the GitHub Copilot. The models are helping you along in your coding, but you must validate everything that it produces, just like you would do with a normal coworker, add some [[Unit Testing]] there to make sure your code still does what it you think it would do, add regression testing and security on testing on top of that as well, we're now constantly generating more code using [[Generative AI]], so it becomes our responsibility to get more out of that as well, and making sure that we're not blindly trusting whatever it gives us for a suggestion, you need to validate that this stuff actually works, works correctly, fits into your requirements, and all the boundaries that you have there, and take some pride and ownership of the code that you're producing. [[Microsoft Copilot|Copilot]] is only there to help you produce that code faster,
>
> **[1:35](https://www.linkedin.com/learning/responsible-github-copilot-creating-reliable-code-ethically-24981582/next-steps?u=76281980&t=95)** and we're only touching the tip of the iceberg of what generative AI can do. If you have extra questions or thoughts that you want to share, then please reach out to me through [[LinkedIn]]. I'm happy to help you further. I'll see you around, until next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (4), [[Generative AI]] (2), [[Responsible AI]] (1), [[Unit Testing]] (1), [[Microsoft Copilot|Copilot]] (1)
> **Tools:** github (4)
> **Cross-References:** we talked about (2)
> **Analogies:** for example (1), just like (1)
> **Warnings:** be aware (2)
> **CLI Commands:** make (1)
> **Speakers:** - in (1)


## Instructor

- [[Rob Bos]]

## Skills Covered

- Artificial Intelligence (AI)
- GitHub Copilot

## Path Context

### In [[Transform Your Programming with AI Coding Tools]]
← [[Software Testing Assistance with GitHub Copilot AI]] | **6 of 7** | [[Delivering and Analyzing a Software Pilot- GitHub Copilot]] →

### In [[Career Essentials in GitHub Copilot Professional Certificate]]
← [[Refactoring with GitHub Copilot]] | **4 of 4**

### In [[Master GitHub Copilot]]
← [[Delivering and Analyzing a Software Pilot- GitHub Copilot]] | **5 of 8** | [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] →

## Part of

- [[Career Essentials in GitHub Copilot Professional Certificate]]

## Appears In

- [[Transform Your Programming with AI Coding Tools]]
- [[Career Essentials in GitHub Copilot Professional Certificate]]
- [[Master GitHub Copilot]]

## Related Courses

_Courses sharing skills:_

- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), GitHub Copilot
- [[Practical GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[AI Pair Programming with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Capstone- Building Production Features with Copilot]] — Artificial Intelligence (AI), GitHub Copilot

---

[↑ Back to top](#)