---
type: course
cssclasses:
  - lle-course
slug: openai-api-moderation
url: "https://www.linkedin.com/learning/openai-api-moderation"
duration_minutes: 14
duration: 14m
updated: 1/5/2024
learners: 12474
skills:
  - OpenAI API
  - Responsible AI
  - OpenAI Products
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-moderation-4564114/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEOeWMzlRnrkQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704244853724?e=2147483647&amp;v=beta&amp;t=iJsTVn3l7enKGG5VWoGxsZJANY63kIfqJZDcM1hbmpI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with the OpenAI API]]'
prev_courses:
  - '[[OpenAI API- Speech]]'
next_courses:
  - '[[OpenAI API- Code Interpreter and Advanced Data Analysis]]'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":9,"total":10,"prev":"OpenAI API- Speech","next":"OpenAI API- Code Interpreter and Advanced Data Analysis"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/responsible-ai
  - skill/openai-products
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/OpenAI%20API-%20Moderation.md)

![OpenAI API: Moderation](https://media.licdn.com/dms/image/v2/D560DAQEOeWMzlRnrkQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704244853724?e=2147483647&amp;v=beta&amp;t=iJsTVn3l7enKGG5VWoGxsZJANY63kIfqJZDcM1hbmpI)

# OpenAI API: Moderation

> Left unchecked, AI systems can both process and output what can be considered harmful language. Sometimes this is necessary; other times it is unwanted. Using the OpenAI API, you can apply moderation tools to the communication between the user and the API to control both what goes into and what comes out of the system. In this course, you’ll get an overview of how these features work and how to im

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-moderation) | 14m | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Managing potentially harmful language with AI](#managing-potentially-harmful-language-with-ai)
- [**1. Moderating AI Exchanges**](#1-moderating-ai-exchanges) (2 videos)
  - [How the OpenAI API moderation feature works](#how-the-openai-api-moderation-feature-works)
  - [Using the moderation feature in the OpenAI API](#using-the-moderation-feature-in-the-openai-api)
- [**2. Going Further**](#2-going-further) (1 videos)
  - [Further resources and documentation](#further-resources-and-documentation)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing potentially harmful language with AI](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=0)** - Let's talk about language moderation and AI. If you're developing a product or service your users can talk to using natural language, language moderation is necessary because sometimes the language we use to communicate can be problematic and even harmful. The standard way of dealing with this issue is brute force filtering of input and responses for specific words and phrases. This approach works but it's labor intensive, error prone, and very difficult to get right because our language is context specific and [[Microsoft Word|word]] filters don't handle context at all. Consider this example. If I say I'm going to shoot my shot, the contextual meaning is I'm going to take a chance and do something to achieve a desired goal. But a traditional harmful words filter may flag the sentence because the words shot and shoot can be used in a violent context, which is not great. Enter AI. The language capabilities of modern AI systems can help us with language moderation because they are capable of processing words and phrases in context. The [[OpenAI API]] provides a robust moderation endpoint you can use for exactly this purpose: to evaluate user prompts and AI responses for harmful content by measuring it against OpenAI's content policy. Adding an AI-powered moderation layer to your apps can make them safer for you to host and for your users to use. And I'm here to show you how to get started. Let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[OpenAI API]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Speakers:** - let (1)


### 1. Moderating AI Exchanges

[↑ Back to Table of Contents](#table-of-contents)

#### [How the OpenAI API moderation feature works](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=0)** - When you build an app or service where people can input natural language and get natural language responses, it's important to filter and moderate the language. This is especially true with a [[Conversational AI]] system because users can input anything and cause a system to respond in kind. Now, rather than automatically moderating input and output language for you, OpenAI provides an endpoint you can use to get information about the text and whether it violates OpenAI's content guidelines. And once you have this information, you can then write software to handle the violations according to your own needs, whether that be asking the user or the system to resubmit or regenerate the content or automatically cleaning up the language before handling the request or even blocking the request or the user altogether. The [[OpenAI API]] moderation endpoint classifies text based on whether it passes or violates OpenAI's content guidelines. This moderation endpoint is free to use when monitoring the input and output of OpenAI's APIs, and OpenAI is currently disallowing other uses. So if you're trying to use it for some other purpose, there's a good chance they'll block that usage. The moderation endpoint is very fast compared to other AI endpoints, likely because it doesn't generate content; it's just reviewing the existing content. And this brings up an important point. The moderation endpoint does not actively moderate the text content, as in blocking or altering it in any way. It only provides feedback on the text. Any active moderation of the text must be done programmatically by the software you build around this moderation endpoint. So you can use the data it provides
>
> **[1:36](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=96)** to perform custom moderations on your end, but the API does not do that job for you. OpenAI has defined 11 classification categories for violations of their content guidelines, and these are outlined with more detailed explanations in the moderation guide. They include hate, harassment, self-harm, sexual, violence, and various subcategories. The API reference breaks down how this moderation endpoint works. When you send text to the endpoint, you get a moderation object in return. That object includes a boolean flagged property telling you if the content got flagged by the moderation system, and if so, what category or categories got flagged. Content sent to the moderation endpoint can be flagged for multiple violations on this list, and any single violation is enough for the flag property to be set to true. The moderation object also includes the confidence scores for each category presented as a number between zero and one. And from what I can tell, everything above about 0.5 or 0.6 gets classified as a violation. You have two models to choose from here. You can choose text moderation stable and text moderation latest. And the latest one is the default. Text moderation latest is continuously updated for greater accuracy. So the main reason you'd consider using the stable model would be if you want consistency over time instead of accuracy. The moderation endpoint receives text, and you can pass in any length of text, though, OpenAI says accuracy is reduced if the text is longer than 2,000 characters. So if you have a very long text,
>
> **[3:09](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=189)** the recommendation is to chunk it up into 2,000 character segments or less to preserve that accuracy. Practically speaking, the moderation endpoint can be used in two different places in your app: to moderate prompts before they are sent into the AI and to moderate the responses after they come back. In the first case, you'd likely use it to stop a prompt with problematic language and ask the user to resubmit the requests. In the second case, you can use the moderation to review the response and ask for a new response avoiding the flagged categories. In either case, the moderation adds additional steps to the communication between the user and the AI and exactly what happens when content gets flagged is up to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Conversational AI]] (1), [[OpenAI API]] (1)
> **Env Vars:** api (3)
> **Versions:** 0.5 (1), 0.6 (1)
> **Documentation:** api reference (1)
> **Speakers:** - when (1)

#### [Using the moderation feature in the OpenAI API](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=0)** - To put the moderation endpoint into technical context, I've created three examples for you and you can find them in the [[GitHub]] repository for this course and run them in either [[Codespaces]] or on your own computer. They're all using [[Python (Programming Language)|Python]] and they're really straightforward and easy to follow. To access these code examples, the easiest thing you can do is go to the GitHub repository, click on code, then select the Codespaces tab and create either a new Codespace or select one you've already created for this repository. Once you're inside the Codespace, you need to create a new file called .env. And inside this file you type in OPENAI_API_KEY, all caps, equals and then you put in your OpenAI key. That OpenAI key is found at platform.[openai.com](https://openai.com). From here, you log in, then go to API keys, click on create new secret key, create a new key. Copy this key before you close the panel, then paste the new key here. That's all you need to do to get these examples to work. Now let's take a look. The first example, basic.py, is the most basic implementation of this endpoint. All we're doing here is passing a sentence to the endpoints. We're sending it to client.moderations.create and the sentence we're passing in is "blond people are boring". Seems like a fairly innocuous statement or so you'd think. Let's see what happens when we run it. In my console I'll type in python basic.py. Now I'm sending the sentence off
>
> **[1:35](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=95)** to the moderation's endpoint, and in return I get a moderation's object. It looks like this. First we get an id, then we get the model, this is the latest model, and then we get the results. And here we have the categories, the category scores, and on the bottom we have the flagged property, which is currently set to true, meaning that statement was flagged as some form of problematic content. Scrolling up, we can then look in the categories list to figure out which of the categories were triggered. It's right here, hate. And this is interesting and it hints at how the system works because when you look at the sentence blonde people are boring, you might wonder why would that flag as hate? Well, think carefully about what we're doing here. We're categorizing a group of people based on a property of their body. So like I'm blonde, I can't change that. And then we're saying that all people that have that property in their body are boring. So that's why. But if I go in and change blonde people to something that is not a property of you, but maybe an interest, the response will be different. So if I go in and say, chess players, "chess players are boring" and rerun the same exact script, we get flagged false because being a chess player is a choice, an interest, and therefore the system is clearly separating those classifications. If we're talking about a group of people in a negative way, that can be considered hate or harassment. If we're talking about a group of people based on their interests, it's different. So this is how the system works and that's why it's kind of interesting to work with.
>
> **[3:07](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=187)** 'Cause as you're sending in different statements, you'll see that it makes some surprising determination sometimes, which is also why you can't lean on the system to make decisions. You as the developer need to figure out exactly how to handle these violations yourself. Let's now see what happens if I change the original statement just a little bit. So I'll go in and say, "blonde people are funny". Send the request off again and again we get flagged false, likely because we're now saying something positive or something that's hinting towards positive about a group of people. So here you get a feel for how the moderation system works. And you can go in and change that sentence to whatever you want to see how the system responds to different inputs. But this is just a basic example. It doesn't really show you how you would build it into anything. So let's look at the next example. If you open the file called conditional.py, you get a more built out example. And what's happening here at the very bottom is I'm first passing off client.moderations.create on the same prompt, and then I'm capturing the response and saying, if flagged is set to true, then send an API request that explains why the prompt was rejected and ask the user to provide a new prompt. And then I pass on all the information in that response object. If the flagged is set false, then I send off an actual request along with the actual prompt. So now we're creating a different experience based on whether the input is flagged or not. Let's run this and see what happens. The starting statement is, "blonde people are nice".
>
> **[4:41](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=281)** And if I open the terminal here and clear it and then say python conditional.py, you'll see it says Not flagged, and then we get the system response. So I didn't output the actual object here because we don't need it, but you get a system response that is a full response to the statement I made. But you can also see it says, "It's interesting that you associate hair color with personality, but it's important to remember that kindness isn't determined by physical attributes." So the system is actually picking up on the fact that this is a problematic statement, even though it's a positive statement. So you can see how the system works, right? The moderation system and the language output system is the same model. So this is probably what's happening on the backend. Let's see what happens if I change the statement. So here, boring. Save. Resend it. Now we're triggering the condition, so therefore we're asking the system to explain what went wrong. And you'll remember in the response object, it flagged hate as the category, and I'm passing the response object off to the AI to explain. So now this system is explaining, "it was flagged and rejected due to its content which was identified as harassment and hateful." So I'm leaning on the AI to explain what went wrong without actually processing the input in the process. So that way I'm not passing the hateful content into the API and then risking that it comes back through the response. Okay, so that is a very rudimentary implementation of it. Now let's see what happens if we've used this same approach
>
> **[6:13](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=373)** in an actual app, or at least a prototype of an app. In this example, I first set up an assistant from the platform.[openai.com](https://openai.com) website and I'm using that assistant to create a threaded conversation with the AI. Then inside this assistant, I'm using the same conditional statement I had here in the conditional example. So I'm first passing any prompt from the user into the moderation, then getting a response from the moderation and if the moderation says this is fine, then it gets passed on and gets processed. If it says it's not fine, then it gets passed on and processed so you get an explanation of what went wrong with that statement. Let's run it and see what happens. Again, I'll clear my console and then say, python mod-assistant.py. This assistant says, welcome to the Math Tutor Chat. That's because it's a math tutor assistant. And then I type in a request. So I'll say, blonde people are nice and see what it says. It's not flagged, and we wait for the response. And once the response returns says that's a stereotype, niceness isn't determined by hair color and varies from individual to individual. So it's telling me that this is not a great statement, but you know it's not being flagged. What if I say blonde people are boring? Now we're triggering the system. A different process kicks in and we get a response explaining why this was rejected. So it says the prompt was rejected because it was flagged for containing harassment and hate content. This is probably the best practical example I can give you of how the moderation tool not only works, but can be implemented into an application.
>
> **[7:47](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=467)** And you can take the code in these examples and run it on your own and try different statements and different inputs to see how it all works. And you can also take this code and carry it over into your own applications and work with it further.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[GitHub]] (2), [[Codespaces]] (2)
> **UI Navigation:** go to (2), click on (2), open the (2), select the (1)
> **CLI Commands:** python (4), find (1), make (1)
> **File Paths:** basic.py (2), conditional.py (2), mod-assistant.py (1)
> **Env Vars:** api (3), openai_api_key (1)
> **Definitions:** is a  (4)
> **Tools:** github (2), terminal (1)
> **URLs:** [openai.com](https://openai.com) (2)


### 2. Going Further

[↑ Back to Table of Contents](#table-of-contents)

#### [Further resources and documentation](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=0)** - All right, now that you've seen how the moderation endpoint works, what it's for and how to use it, I'm sure you want to go out in the real world and try it for yourself. Before you do, so, I have four resources for you. First, the [[GitHub]] repository for this course. This is where you find the examples I've built out. Go check them out. Test them to see how the moderation endpoint works, and look at how I've implemented it to get an idea of how to build it for yourself. Second, check out the moderation documentation. This breaks down the categories for different types of violations, and also explains how the moderation endpoint works and how OpenAI is approaching moderation in general. Third, go to the API reference and read up on how all of this fits together. This is where you get an example of the moderation object, as well as how to use the moderation endpoint, including all the inputs. And this is also where you get an explanation of the difference between text-moderation-latest and text-moderation-stable. Finally, I encourage you to go read the OpenAI usage policies. Now, these apply to all usage of all [[OpenAI Products]], and they're also the foundation for this moderation. If you read these usage policies, you'll see why the system does things like flag "Blond people are boring" as an issue, but not "Blond people are interesting." And it's also worth knowing what you're getting yourself into when you're working with these APIs, and this is the source of that information. Now, all that's left for me to say is (speaks foreign language) go build some interesting things using the OpenAPI moderation, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[OpenAI Products]] (1)
> **CLI Commands:** find (1), go build (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Documentation:** api reference (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Speakers:** - all (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-moderation-4564114/codespaces)

## Skills Covered

- OpenAI API
- Responsible AI
- OpenAI Products
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your Skills with the OpenAI API]]
← [[OpenAI API- Speech]] | **9 of 10** | [[OpenAI API- Code Interpreter and Advanced Data Analysis]] →

## Appears In

- [[Develop Your Skills with the OpenAI API]]

## Related Courses

_Courses sharing skills:_

- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Image Generation with DALL-E]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Fine-Tuning]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)