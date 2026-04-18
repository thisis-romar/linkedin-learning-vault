---
type: course
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
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/responsible-ai
  - skill/openai-products
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-17
---

# OpenAI API: Moderation

> Left unchecked, AI systems can both process and output what can be considered harmful language. Sometimes this is necessary; other times it is unwanted. Using the OpenAI API, you can apply moderation tools to the communication between the user and the API to control both what goes into and what comes out of the system. In this course, you’ll get an overview of how these features work and how to im

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-moderation) | 14m | 12K learners

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

## Table of Contents

### Introduction

#### Managing potentially harmful language with AI
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=0)** - Let's talk about language moderation and AI.
>
> **[0:03](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=3)** If you're developing a product or service your users can talk to using natural language, language moderation is necessary because sometimes the language we use to communicate can be problematic and even harmful.
>
> **[0:14](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=14)** The standard way of dealing with this issue is brute force filtering of input and responses for specific words and phrases.
>
> **[0:21](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=21)** This approach works but it's labor intensive, error prone, and very difficult to get right because our language is context specific and word filters don't handle context at all.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=32)** Consider this example.
>
> **[0:33](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=33)** If I say I'm going to shoot my shot, the contextual meaning is I'm going to take a chance and do something to achieve a desired goal.
>
> **[0:41](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=41)** But a traditional harmful words filter may flag the sentence because the words shot and shoot can be used in a violent context, which is not great.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=52)** Enter AI.
>
> **[0:53](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=53)** The language capabilities of modern AI systems can help us with language moderation because they are capable of processing words and phrases in context.
>
> **[1:02](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=62)** The OpenAI API provides a robust moderation endpoint you can use for exactly this purpose: to evaluate user prompts and AI responses for harmful content by measuring it against OpenAI's content policy.
>
> **[1:15](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=75)** Adding an AI-powered moderation layer to your apps can make them safer for you to host and for your users to use.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=81)** And I'm here to show you how to get started.
>
> **[1:22](https://www.linkedin.com/learning/openai-api-moderation/managing-potentially-harmful-language-with-ai?u=76281980&t=82)** Let's get cracking.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Speakers:** - let (1)


### 1. Moderating AI Exchanges

#### How the OpenAI API moderation feature works
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=0)** - When you build an app or service where people can input natural language and get natural language responses, it's important to filter and moderate the language.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=8)** This is especially true with a conversational AI system because users can input anything and cause a system to respond in kind.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=15)** Now, rather than automatically moderating input and output language for you, OpenAI provides an endpoint you can use to get information about the text and whether it violates OpenAI's content guidelines.
>
> **[0:27](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=27)** And once you have this information, you can then write software to handle the violations according to your own needs, whether that be asking the user or the system to resubmit or regenerate the content or automatically cleaning up the language before handling the request or even blocking the request or the user altogether.
>
> **[0:45](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=45)** The OpenAI API moderation endpoint classifies text based on whether it passes or violates OpenAI's content guidelines.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=52)** This moderation endpoint is free to use when monitoring the input and output of OpenAI's APIs, and OpenAI is currently disallowing other uses.
>
> **[1:01](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=61)** So if you're trying to use it for some other purpose, there's a good chance they'll block that usage.
>
> **[1:06](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=66)** The moderation endpoint is very fast compared to other AI endpoints, likely because it doesn't generate content; it's just reviewing the existing content.
>
> **[1:15](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=75)** And this brings up an important point.
>
> **[1:17](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=77)** The moderation endpoint does not actively moderate the text content, as in blocking or altering it in any way.
>
> **[1:24](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=84)** It only provides feedback on the text.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=87)** Any active moderation of the text must be done programmatically by the software you build around this moderation endpoint.
>
> **[1:34](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=94)** So you can use the data it provides to perform custom moderations on your end, but the API does not do that job for you.
>
> **[1:41](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=101)** OpenAI has defined 11 classification categories for violations of their content guidelines, and these are outlined with more detailed explanations in the moderation guide.
>
> **[1:50](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=110)** They include hate, harassment, self-harm, sexual, violence, and various subcategories.
>
> **[1:57](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=117)** The API reference breaks down how this moderation endpoint works.
>
> **[2:01](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=121)** When you send text to the endpoint, you get a moderation object in return.
>
> **[2:05](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=125)** That object includes a boolean flagged property telling you if the content got flagged by the moderation system, and if so, what category or categories got flagged.
>
> **[2:15](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=135)** Content sent to the moderation endpoint can be flagged for multiple violations on this list, and any single violation is enough for the flag property to be set to true.
>
> **[2:24](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=144)** The moderation object also includes the confidence scores for each category presented as a number between zero and one.
>
> **[2:30](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=150)** And from what I can tell, everything above about 0.5 or 0.6 gets classified as a violation.
>
> **[2:37](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=157)** You have two models to choose from here.
>
> **[2:39](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=159)** You can choose text moderation stable and text moderation latest.
>
> **[2:44](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=164)** And the latest one is the default.
>
> **[2:46](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=166)** Text moderation latest is continuously updated for greater accuracy.
>
> **[2:51](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=171)** So the main reason you'd consider using the stable model would be if you want consistency over time instead of accuracy.
>
> **[2:58](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=178)** The moderation endpoint receives text, and you can pass in any length of text, though, OpenAI says accuracy is reduced if the text is longer than 2,000 characters.
>
> **[3:07](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=187)** So if you have a very long text, the recommendation is to chunk it up into 2,000 character segments or less to preserve that accuracy.
>
> **[3:16](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=196)** Practically speaking, the moderation endpoint can be used in two different places in your app: to moderate prompts before they are sent into the AI and to moderate the responses after they come back.
>
> **[3:26](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=206)** In the first case, you'd likely use it to stop a prompt with problematic language and ask the user to resubmit the requests.
>
> **[3:33](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=213)** In the second case, you can use the moderation to review the response and ask for a new response avoiding the flagged categories.
>
> **[3:41](https://www.linkedin.com/learning/openai-api-moderation/how-the-openai-api-moderation-feature-works?u=76281980&t=221)** In either case, the moderation adds additional steps to the communication between the user and the AI and exactly what happens when content gets flagged is up to you.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), self (1), return. (1), default. (1), pass (1)
> **Env Vars:** api (3)
> **Versions:** 0.5 (1), 0.6 (1)
> **Documentation:** api reference (1)
> **Speakers:** - when (1)

#### Using the moderation feature in the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=0)** - To put the moderation endpoint into technical context, I've created three examples for you and you can find them in the GitHub repository for this course and run them in either Codespaces or on your own computer.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=11)** They're all using Python and they're really straightforward and easy to follow.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=15)** To access these code examples, the easiest thing you can do is go to the GitHub repository, click on code, then select the Codespaces tab and create either a new Codespace or select one you've already created for this repository.
>
> **[0:27](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=27)** Once you're inside the Codespace, you need to create a new file called .env.
>
> **[0:31](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=31)** And inside this file you type in OPENAI_API_KEY, all caps, equals and then you put in your OpenAI key.
>
> **[0:40](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=40)** That OpenAI key is found at platform.[openai.com](https://openai.com).
>
> **[0:44](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=44)** From here, you log in, then go to API keys, click on create new secret key, create a new key.
>
> **[0:53](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=53)** Copy this key before you close the panel, then paste the new key here.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=60)** That's all you need to do to get these examples to work.
>
> **[1:02](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=62)** Now let's take a look.
>
> **[1:04](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=64)** The first example, basic.py, is the most basic implementation of this endpoint.
>
> **[1:10](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=70)** All we're doing here is passing a sentence to the endpoints.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=73)** We're sending it to client.moderations.create and the sentence we're passing in is "blond people are boring".
>
> **[1:20](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=80)** Seems like a fairly innocuous statement or so you'd think.
>
> **[1:24](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=84)** Let's see what happens when we run it.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=87)** In my console I'll type in python basic.py.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=93)** Now I'm sending the sentence off to the moderation's endpoint, and in return I get a moderation's object.
>
> **[1:40](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=100)** It looks like this.
>
> **[1:40](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=100)** First we get an id, then we get the model, this is the latest model, and then we get the results.
>
> **[1:45](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=105)** And here we have the categories, the category scores, and on the bottom we have the flagged property, which is currently set to true, meaning that statement was flagged as some form of problematic content.
>
> **[1:57](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=117)** Scrolling up, we can then look in the categories list to figure out which of the categories were triggered.
>
> **[2:03](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=123)** It's right here, hate.
>
> **[2:05](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=125)** And this is interesting and it hints at how the system works because when you look at the sentence blonde people are boring, you might wonder why would that flag as hate?
>
> **[2:14](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=134)** Well, think carefully about what we're doing here.
>
> **[2:16](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=136)** We're categorizing a group of people based on a property of their body.
>
> **[2:20](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=140)** So like I'm blonde, I can't change that.
>
> **[2:23](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=143)** And then we're saying that all people that have that property in their body are boring.
>
> **[2:28](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=148)** So that's why.
>
> **[2:29](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=149)** But if I go in and change blonde people to something that is not a property of you, but maybe an interest, the response will be different.
>
> **[2:37](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=157)** So if I go in and say, chess players, "chess players are boring" and rerun the same exact script, we get flagged false because being a chess player is a choice, an interest, and therefore the system is clearly separating those classifications.
>
> **[2:55](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=175)** If we're talking about a group of people in a negative way, that can be considered hate or harassment.
>
> **[2:59](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=179)** If we're talking about a group of people based on their interests, it's different.
>
> **[3:04](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=184)** So this is how the system works and that's why it's kind of interesting to work with.
>
> **[3:07](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=187)** 'Cause as you're sending in different statements, you'll see that it makes some surprising determination sometimes, which is also why you can't lean on the system to make decisions.
>
> **[3:17](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=197)** You as the developer need to figure out exactly how to handle these violations yourself.
>
> **[3:22](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=202)** Let's now see what happens if I change the original statement just a little bit.
>
> **[3:26](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=206)** So I'll go in and say, "blonde people are funny".
>
> **[3:33](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=213)** Send the request off again and again we get flagged false, likely because we're now saying something positive or something that's hinting towards positive about a group of people.
>
> **[3:43](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=223)** So here you get a feel for how the moderation system works.
>
> **[3:46](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=226)** And you can go in and change that sentence to whatever you want to see how the system responds to different inputs.
>
> **[3:52](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=232)** But this is just a basic example.
>
> **[3:53](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=233)** It doesn't really show you how you would build it into anything.
>
> **[3:56](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=236)** So let's look at the next example.
>
> **[3:59](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=239)** If you open the file called conditional.py, you get a more built out example.
>
> **[4:02](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=242)** And what's happening here at the very bottom is I'm first passing off client.moderations.create on the same prompt, and then I'm capturing the response and saying, if flagged is set to true, then send an API request that explains why the prompt was rejected and ask the user to provide a new prompt.
>
> **[4:19](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=259)** And then I pass on all the information in that response object.
>
> **[4:24](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=264)** If the flagged is set false, then I send off an actual request along with the actual prompt.
>
> **[4:31](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=271)** So now we're creating a different experience based on whether the input is flagged or not.
>
> **[4:36](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=276)** Let's run this and see what happens.
>
> **[4:38](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=278)** The starting statement is, "blonde people are nice".
>
> **[4:41](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=281)** And if I open the terminal here and clear it and then say python conditional.py, you'll see it says Not flagged, and then we get the system response.
>
> **[4:53](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=293)** So I didn't output the actual object here because we don't need it, but you get a system response that is a full response to the statement I made.
>
> **[5:02](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=302)** But you can also see it says, "It's interesting that you associate hair color with personality, but it's important to remember that kindness isn't determined by physical attributes."
>
> **[5:10](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=310)** So the system is actually picking up on the fact that this is a problematic statement, even though it's a positive statement.
>
> **[5:16](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=316)** So you can see how the system works, right?
>
> **[5:19](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=319)** The moderation system and the language output system is the same model.
>
> **[5:23](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=323)** So this is probably what's happening on the backend.
>
> **[5:26](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=326)** Let's see what happens if I change the statement.
>
> **[5:28](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=328)** So here, boring.
>
> **[5:31](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=331)** Save.
>
> **[5:32](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=332)** Resend it.
>
> **[5:33](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=333)** Now we're triggering the condition, so therefore we're asking the system to explain what went wrong.
>
> **[5:38](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=338)** And you'll remember in the response object, it flagged hate as the category, and I'm passing the response object off to the AI to explain.
>
> **[5:46](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=346)** So now this system is explaining, "it was flagged and rejected due to its content which was identified as harassment and hateful."
>
> **[5:54](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=354)** So I'm leaning on the AI to explain what went wrong without actually processing the input in the process.
>
> **[6:01](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=361)** So that way I'm not passing the hateful content into the API and then risking that it comes back through the response.
>
> **[6:08](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=368)** Okay, so that is a very rudimentary implementation of it.
>
> **[6:11](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=371)** Now let's see what happens if we've used this same approach in an actual app, or at least a prototype of an app.
>
> **[6:17](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=377)** In this example, I first set up an assistant from the platform.[openai.com](https://openai.com) website and I'm using that assistant to create a threaded conversation with the AI.
>
> **[6:27](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=387)** Then inside this assistant, I'm using the same conditional statement I had here in the conditional example.
>
> **[6:33](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=393)** So I'm first passing any prompt from the user into the moderation, then getting a response from the moderation and if the moderation says this is fine, then it gets passed on and gets processed.
>
> **[6:43](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=403)** If it says it's not fine, then it gets passed on and processed so you get an explanation of what went wrong with that statement.
>
> **[6:48](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=408)** Let's run it and see what happens.
>
> **[6:50](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=410)** Again, I'll clear my console and then say, python mod-assistant.py.
>
> **[7:00](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=420)** This assistant says, welcome to the Math Tutor Chat.
>
> **[7:03](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=423)** That's because it's a math tutor assistant.
>
> **[7:05](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=425)** And then I type in a request.
>
> **[7:06](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=426)** So I'll say, blonde people are nice and see what it says.
>
> **[7:11](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=431)** It's not flagged, and we wait for the response.
>
> **[7:14](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=434)** And once the response returns says that's a stereotype, niceness isn't determined by hair color and varies from individual to individual.
>
> **[7:20](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=440)** So it's telling me that this is not a great statement, but you know it's not being flagged.
>
> **[7:25](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=445)** What if I say blonde people are boring?
>
> **[7:30](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=450)** Now we're triggering the system.
>
> **[7:31](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=451)** A different process kicks in and we get a response explaining why this was rejected.
>
> **[7:35](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=455)** So it says the prompt was rejected because it was flagged for containing harassment and hate content.
>
> **[7:40](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=460)** This is probably the best practical example I can give you of how the moderation tool not only works, but can be implemented into an application.
>
> **[7:47](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=467)** And you can take the code in these examples and run it on your own and try different statements and different inputs to see how it all works.
>
> **[7:53](https://www.linkedin.com/learning/openai-api-moderation/using-the-moderation-feature-in-the-openai-api?u=76281980&t=473)** And you can also take this code and carry it over into your own applications and work with it further.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (1), pass (1)
> **UI Navigation:** go to (2), click on (2), open the (2), select the (1)
> **CLI Commands:** python (4), find (1), make (1)
> **File Paths:** basic.py (2), conditional.py (2), mod-assistant.py (1)
> **Env Vars:** api (3), openai_api_key (1)
> **Definitions:** is a  (4)
> **Tools:** github (2), terminal (1)
> **URLs:** [openai.com](https://openai.com) (2)


### 2. Going Further

#### Further resources and documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=0)** - All right, now that you've seen how the moderation endpoint works, what it's for and how to use it, I'm sure you want to go out in the real world and try it for yourself.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=8)** Before you do, so, I have four resources for you.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=11)** First, the GitHub repository for this course.
>
> **[0:14](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=14)** This is where you find the examples I've built out.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=16)** Go check them out.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=17)** Test them to see how the moderation endpoint works, and look at how I've implemented it to get an idea of how to build it for yourself.
>
> **[0:25](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=25)** Second, check out the moderation documentation.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=28)** This breaks down the categories for different types of violations, and also explains how the moderation endpoint works and how OpenAI is approaching moderation in general.
>
> **[0:38](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=38)** Third, go to the API reference and read up on how all of this fits together.
>
> **[0:43](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=43)** This is where you get an example of the moderation object, as well as how to use the moderation endpoint, including all the inputs.
>
> **[0:51](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=51)** And this is also where you get an explanation of the difference between text-moderation-latest and text-moderation-stable.
>
> **[0:57](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=57)** Finally, I encourage you to go read the OpenAI usage policies.
>
> **[1:01](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=61)** Now, these apply to all usage of all OpenAI products, and they're also the foundation for this moderation.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=68)** If you read these usage policies, you'll see why the system does things like flag "Blond people are boring" as an issue, but not "Blond people are interesting."
>
> **[1:18](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=78)** And it's also worth knowing what you're getting yourself into when you're working with these APIs, and this is the source of that information.
>
> **[1:25](https://www.linkedin.com/learning/openai-api-moderation/further-resources-and-documentation?u=76281980&t=85)** Now, all that's left for me to say is (speaks foreign language) go build some interesting things using the OpenAPI moderation, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), go build (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **Documentation:** api reference (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Speakers:** - all (1)


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
