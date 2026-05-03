---
type: course
cssclasses:
  - lle-course
slug: prompt-engineering-with-chatgpt
url: "https://www.linkedin.com/learning/prompt-engineering-with-chatgpt"
duration_minutes: 54
duration: 54m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEbvCcHVeK8sQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713398114484?e=2147483647&amp;v=beta&amp;t=UUj7lyCKIyutn6Rg8ujKgpsZq3fm6H2l-MtdH0syEQw"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building ChatGPT Skills for Business Professionals]]'
  - '[[Prompt Engineering Skills for Developers]]'
prev_courses:
  - '[[How to Research and Write Using Generative AI Tools (2023)]]'
  - '[[Introduction To Prompt Engineering For Generative Ai]]'
next_courses:
  - '[[Nano Tips for Using ChatGPT for Business with Rachel Woods]]'
  - '[[ChatGPT- Perfecting Your Output with Templates in Prompts]]'
path_nav: '[{"path":"Building ChatGPT Skills for Business Professionals","position":3,"total":6,"prev":"How to Research and Write Using Generative AI Tools (2023)","next":"Nano Tips for Using ChatGPT for Business with Rachel Woods"},{"path":"Prompt Engineering Skills for Developers","position":3,"total":6,"prev":"Introduction To Prompt Engineering For Generative Ai","next":"ChatGPT- Perfecting Your Output with Templates in Prompts"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/devops
  - topic/network-and-system-administration
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Prompt%20Engineering%20with%20ChatGPT.md)

![Prompt Engineering with ChatGPT](https://media.licdn.com/dms/image/v2/D560DAQEbvCcHVeK8sQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713398114484?e=2147483647&amp;v=beta&amp;t=UUj7lyCKIyutn6Rg8ujKgpsZq3fm6H2l-MtdH0syEQw)

# Prompt Engineering with ChatGPT

> ChatGPT has taken the world by storm. However, very few users know how to utilize it to its full potential, and there are so many misconceptions about how to use it effectively. This course debunks the myths and misconceptions about AI and equips you with the skills required to leverage powerful prompt engineering techniques with ChatGPT.Join instructor Ronnie Sheer as he provides a comprehensive 

> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt) | 54m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [ChatGPT: The AI game changer](#chatgpt-the-ai-game-changer)
  - [How ChatGPT works](#how-chatgpt-works)
- [**1. Prompt Best Practices**](#1-prompt-best-practices) (4 videos)
  - [Providing context and using delimiters](#providing-context-and-using-delimiters)
  - [Use detailed instructions](#use-detailed-instructions)
  - [Challenge: Prompt refactor](#challenge-prompt-refactor)
  - [Solution: Prompt refactor](#solution-prompt-refactor)
- [**2. Advanced Techniques**](#2-advanced-techniques) (7 videos)
  - [Personas](#personas)
  - [Splitting up complex tasks](#splitting-up-complex-tasks)
  - [Custom instructions](#custom-instructions)
  - [Leveraging multi-modality](#leveraging-multi-modality)
  - [Socratic prompting](#socratic-prompting)
  - [Challenge: Writing copy](#challenge-writing-copy)
  - [Solution: Writing copy](#solution-writing-copy)
- [**3. DALL-E 3 in ChatGPT**](#3-dall-e-3-in-chatgpt) (4 videos)
  - [What is DALL-E?](#what-is-dall-e)
  - [DALL-E 3 best practices](#dall-e-3-best-practices)
  - [Challenge: Enrich a DALL-E prompt](#challenge-enrich-a-dall-e-prompt)
  - [Solution: Enrich a DALL-E prompt](#solution-enrich-a-dall-e-prompt)
- [**4. Security Considerations**](#4-security-considerations) (5 videos)
  - [ChatGPT security considerations](#chatgpt-security-considerations)
  - [Plans and data controls](#plans-and-data-controls)
  - [Hallucinations](#hallucinations)
  - [Challenge: Use data controls](#challenge-use-data-controls)
  - [Solution: Use data controls](#solution-use-data-controls)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [ChatGPT: The AI game changer](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/chatgpt-the-ai-game-changer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/chatgpt-the-ai-game-changer?u=76281980&t=0)** - Get more out of [[ChatGPT]] quickly. That's what effective [[Prompt Engineering]] is about, and that's just what we'll learn in this course. We'll look at methods such as Socratic Prompting and personas in real business scenarios. We'll even have a little fun by using multimodality in order to cook a meal. Finally, we'll look at security and [[Privacy]] considerations that are essential to using this tool effectively in a professional environment. I'm Ronnie Sheer. I'm a software engineer with over a decade of experience working for companies that lean heavily on AI. If you want to be a ChatGPT Power User, you're in the right place. So let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[Prompt Engineering]] (1), [[Privacy]] (1)
> **Analogies:** such as (1)
> **Speakers:** - get (1)

#### [How ChatGPT works](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/how-chatgpt-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/how-chatgpt-works?u=76281980&t=0)** - [Instructor] [[ChatGPT]] is powered by a large language model. And at their core, text-to-text models are good at predicting the next token. You can think of a token as a small unit of language, such as a [[Microsoft Word|word]]. Or a word could be made up of a few [[Tokens]]. Now, let's take this example where we give a language model a prompt, such as, "I try to learn something new." Now, a large language model will likely have trained on lots and lots of text, and can come up with the likelihood of different words being next. So with the prompt, "I try to learn something new," the next word could be "every." It could be "every day." It could be a brand-new line. It could be "each," or it could be "other." Now, a large language model will run this raffle, so to speak, and could come up with "every day." Now, notice that "every day" was not the most likely to come up, but 17% is still a good chance of the next word being "every day." Now ChatGPT is particularly impressive when it comes to responding to instructions and conversational abilities, and this is due to a fine-tuning process called [[Reinforcement Learning]] from humans. This fine-tuning technique involves human feedback and helps get more desirable results
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/how-chatgpt-works?u=76281980&t=95)** when it comes to giving instructions with few or no examples and when it comes to conversational chatbots.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[ChatGPT]] (2), [[Tokens]] (1), [[Reinforcement Learning]] (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 1. Prompt Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Providing context and using delimiters](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/providing-context-and-using-delimiters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/providing-context-and-using-delimiters?u=76281980&t=0)** - Providing context is one of the best ways to get more out of [[ChatGPT]]. Doing so will likely improve ChatGPT's accuracy. It will simplify the chat, cutting down on the unnecessary back and forth in the conversation with ChatGPT. And finally, you'll be much more likely to get an output that is tailored to your needs and is unique to your use case. Let's take a look at two examples. On one side, we have a rather vague prompt, "Write an apology email for a late shipment." It doesn't say a shipment of what or to whom this email is, and it leaves a lot for ChatGPT to sort of guess. Then, we have this slightly better prompt with more context. It says, "Our company Red30 Tech Imports GPUs. Our [[Microsoft Products|products]] are used for on-premise AI applications. A shipment of three GPUs is two weeks late due to supply-chain issues. Write a formal apology to our client. Take full responsibility and offer a 10-percent discount. The client is Binaryville Robots." Now at a glance, it looks like the second prompt I read with more context takes a bit more work to put together, but let's look at what happens
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/providing-context-and-using-delimiters?u=76281980&t=93)** when we input both of them into ChatGPT. So, I'll start off with the more vague example.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/providing-context-and-using-delimiters?u=76281980&t=109)** Here's our output, and notice that this is more of a template for an apology email and less of an apology message. You'll see that there are a lot of these bracketed sections that ChatGPT asks us to fill in, and there's still a lot of work to be done here. You'll notice that ChatGPT has to come up with things and sometimes these things may not be things that we want in our messages, but we've left a lot of guesswork for the system. So, in a sense, if we were to keep going with this, we would have to do quite a bit more work. But what happens when we use this prompt that has more context, that took a bit longer to write, but still just a few sentences with exactly what it is we need? I'm going to go ahead and clear my conversation. I'll add this prompt.
>
> **[2:54](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/providing-context-and-using-delimiters?u=76281980&t=174)** The results here are almost a finished product. There's not a lot of places where we have to fill in blanks. This is less of a template and more of an actual message. We would still want to review this and double check that what we intended is there and only what we intended is there. But still this is much less work than having a template to work off of. Also, what is the likelihood of another ChatGPT user receiving something similar to this? It's highly unlikely because this is extremely tailored to our needs. So, having plenty of context will result in an output that we can identify as ours and we know is quite unique to our use case. Now, what if our context is a chunk of text or a bunch of code that we want to send along as part of our prompt? For that, it's a good idea to use delimiters. Delimiters allow us to nicely divide our prompt and show ChatGPT where different portions of the prompt start and end. For example, if we were to bring in some text about the planet Jupiter, we can ask ChatGPT to summarize the following article for a 10th grader. We would then use these triple quotes as our delimiter in the beginning of the text and to denote the end of the text.
>
> **[4:29](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/providing-context-and-using-delimiters?u=76281980&t=269)** For code, we could use [[HTML]], we can also use a markdown-like language, for example, these three ticks and then write the name of the language, which is [[Python (Programming Language)|Python]] here. And then at the end after the code example, we can close things off with three additional ticks. Now, using delimiters will help ChatGPT interpret our prompts better. We can also have neat reusable prompt templates where what's in the delimiters produces different outputs. Finally, we can use the limiters to show ChatGPT what kind of outputs we want. Let's take a look at how we can use delimiters in our prompt. Here's an article about Jupiter, and I'm going to go ahead and highlight some of it. Now I'll head over to ChatGPT and clear things up, and I'll type in, "Summarize this article for a 2nd grader." I'll use three quotes as my delimiters. And I like to start them off, create some space here and then close them off. That way I can just paste my here. And I have this nice little summary
>
> **[6:05](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/providing-context-and-using-delimiters?u=76281980&t=365)** that ChatGPT has put together. So, as you can see, using delimiters will help ChatGPT understand where your example starts and where it ends.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (15), [[Microsoft Products|Products]] (1), [[HTML]] (1), [[Python (Programming Language)|Python]] (1)
> **Exercise Files:** template (3)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** python (1)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Speakers:** - providing (1)

#### [Use detailed instructions](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/use-detailed-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/use-detailed-instructions?u=76281980&t=0)** - [Instructor] To get the most out of [[ChatGPT]], our prompts have to include detailed instructions. In particular, we want to tell ChatGPT what it is we want, and in what format we want the output to be. In a previous example, we asked ChatGPT to summarize a portion of an article for a second grader. Now notice that we didn't really specify what kind of summary we wanted. As a result, ChatGPT gave us this generic summary with just a few paragraphs. But what if we were more detailed about what kind of output we expected? Let's go ahead and copy this and I'll clear my chat, and I'll paste it to a new chat. And I'll say this. "Summarize this article for a second grader. Create a presentation by generating a slide deck. Generate a pptx file." I'll submit the prompt. Now once you see this analyzing spinner, you can click the arrow and see the code that ChatGPT will run to produce this file.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/use-detailed-instructions?u=76281980&t=97)** Now at the time of this recording, the free version of ChatGPT may not be able to run code and produce files. And if this is the case, you can either ask for bullet points and paste them onto a presentation, or if you know a little bit of code, you can ask for the code and then run it. But do make sure that you understand the code that you run on your computer. I'll go ahead and download this. And if I open this up, I will see this presentation right here, which is a good starting point. Now you can play around with theming and ask for a different theme. You can also upload a [[Microsoft PowerPoint|PowerPoint]] presentation and ask ChatGPT to try and use the existing theme of that presentation. But as you can see, asking for a particular type of output really goes a long way. Now, a good thing to keep in mind, if you want something that is spreadsheet compatible, is you can ask for a CSV output. CSV format can be manipulated and opened by different spreadsheet software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (7), [[Microsoft PowerPoint|Powerpoint]] (1)
> **Env Vars:** csv (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Prompt refactor](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-prompt-refactor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-prompt-refactor?u=76281980&t=0)** (light upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-prompt-refactor?u=76281980&t=6)** - [Ronnie] It is time for a challenge where we take a simple prompt and refactor it with some of the practices that we've learned in this chapter. So take about 10 to 15 minutes to take this prompt, which is "write a post about learning [[Prompt Engineering]]" and enhancing it using some of these techniques. Now, try different variations and see what produces the results that you're happy with. Once you're done, if you're happy with the results and feel like it, you can go ahead and share them on [[LinkedIn]] using these hashtags. #learntechwithlinkedin, #ai, #[[ChatGPT]]. And you can also tag me in the post, and I'll try my best to go ahead and [[React.js|react]] to some of these outputs. I'm always glad to see what learners are doing in these courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (1), [[LinkedIn]] (1), [[ChatGPT]] (1), [[React.js|React]] (1)
> **Speakers:** - [ronnie] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Prompt refactor](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-prompt-refactor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-prompt-refactor?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-prompt-refactor?u=76281980&t=5)** - [Instructor] The goal of this challenge was to refactor this prompt. Write a post about learning [[Prompt Engineering]]. My approach was to say, you are a software engineer and instructor specializing in AI. Write a professional post for [[LinkedIn]] about the importance of learning prompt engineering. Use plenty of emojis. Now, even specifying which platform this post is for is going to make a difference in the output [[ChatGPT]] produces. Also, notice that I told ChatGPT who the persona is that they're writing this post on behalf of. We'll talk about this technique when we get to dealing with personas. So let's go ahead and take this prompt and bring it over to ChatGPT.
>
> **[1:07](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-prompt-refactor?u=76281980&t=67)** Now, I really like asking ChatGPT to add emojis to text. One thing to note about this is that we didn't really give ChatGPT a lot of content to work with. So it had to come up with a lot of ideas, which could be what we want or not. If we added more context explaining why it's important to us, then we would be doing more processing and ChatGPT would do less inventing. So when you have an output like this, make sure you go through it thoroughly and see that these are points that you stand behind and wish to convey. Also, it might be a good idea to use this as a starting point for a post, and edit it and change it up a little bit to give it your personal touch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (6), [[Prompt Engineering]] (2), [[LinkedIn]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 2. Advanced Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### [Personas](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/personas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/personas?u=76281980&t=0)** - In this one, we're going to look at personas. Asking [[ChatGPT]] to adopt a persona means telling ChatGPT who we want it to be before asking it to perform a task. Let's have a look at a task. We're going to ask ChatGPT to talk about Grafana, which is an open source analytics tool. And in the first example, we'll tell ChatGPT, "You are a marketing expert specializing in B2B cloud observability. Write an email to a CTO of a small startup explaining the benefits of using Grafana." In the second one, we say, "You are an IT consultant specializing in cloud observability. Write an email to a CTO of a small startup explaining the benefits of using Grafana." Just like in other [[Prompt Engineering]] techniques, giving lots of context and being very detailed in your instructions is helpful. So let's go ahead and use this first prompt. I'll head over to ChatGPT, and I'll use three quotes as my delimiters. Go ahead and copy this right here, this beginning right here.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/personas?u=76281980&t=87)** As you can see, ChatGPT is trying to market Grafana in this one. It's using language that's meant to convince someone to use Grafana. Now I'm going to clear this chat and try the other prompt. In this one, it's an IT consultant, so what would we expect the results to be? Again, I'll use three quotes as my delimiters. I'll go ahead and grab this portion of a Wikipedia article.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/personas?u=76281980&t=131)** Now, while this still recommends Grafana, because we asked it to explain the benefits of using Grafana, it's using language like, "Implementing Grafana can elevate your startup's observability capabilities." And when we go back to the previous one, the marketing language says, "Choosing Grafana means investing in your startup's future." It appeals to someone more as a customer. The marketing persona's email title is "Elevate Your Startup's Performance with Grafana's Advanced Observability." While the consultant's email title is "Enhance your Startup's Monitoring and Visualization with Grafana." So both of them are recommending it, but the approach is slightly different. Keep in mind, there are endless personas you can give ChatGPT, and this can help you tailor your response very effectively. Asking ChatGPT to adopt a persona can be a very concise way of receiving a certain type of input, whereas describing the same input without a persona would be much less efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (8), [[Prompt Engineering]] (1)
> **Env Vars:** cto (2), b2b (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - in (1)

#### [Splitting up complex tasks](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=0)** - [Instructor] In this one, we're going to talk about splitting up tasks into subtasks. Now doing this gives you greater control over how a task is performed, and it can really increase efficiency. Now, here are some ways we can split things up. We can get [[ChatGPT]] to plan, for example. We can ask it, how would you do this? And then we can follow up with another prompt, asking it to perform the actual task. Then we can also start a new conversation when necessary and only bring whatever it is we need into a new conversation. This way, we have less [[Tokens]] and we're less likely to hit the token limit. We can also ask ChatGPT to summarize something in one chat, and then bring that summary over to a new chat to be processed. And this, again, is another way of being efficient. Let me show you what I mean. Here I have an article about [[Generative AI]]. It's from Wikipedia, and it's not so short. I also have this article about generative pre-trained transformers, GPT. That's the model that ChatGPT is based on. And this is also not the shortest article. Now, I'll start off by downloading these articles. So in Tools, I can go ahead and download as PDF. You can also copy and paste this if you can't upload files onto ChatGPT.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=95)** And I'll also download this one, Tools, Downloaded as PDF.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=106)** Now, if I uploaded both of these together and asked ChatGPT to create a presentation out of it, ChatGPT would have many tokens to process and the results would be less desirable. You get this kind of messy presentation that's not so useful, and it would also take a very, very long time to process. Instead, we're going to do something else. So we are going to start another tab right here with another conversation. And in the first tab, we're going to upload this article right here. You can also paste using quotes or triple quotes and delimiters. And I'm going to say, "Summarize this article by writing an outline
>
> **[2:43](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=163)** with sections and subsections.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=173)** Each bullet point should have 6 to 12 words."
>
> **[3:07](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=187)** Now, ChatGPT is not going to have precisely 6 to 12 words. This is more of a guideline. And I'll copy this.
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=204)** And now I have a distilled version of this information right here. Next, I'll clear this up and open a new chat. I'll upload the other article and I'll use the exact same prompt.
>
> **[3:54](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=234)** Great, so I have a distilled version of this information right here. Now, I'll head over to my new tab. I'll start a new conversation, clear it up, and the first thing I'm going to do is I'm going to upload this template. It's an empty [[Microsoft PowerPoint|PowerPoint]] presentation. And I'll ask it, "What are the names of the layouts in this PPTX theme?
>
> **[4:30](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=270)** List the exact names." Now it's opening them up and checking the names of the themes. And it has this list right here. And the reason I asked ChatGPT to list the names is it's not for me to know. It's for ChatGPT to have this context so that it may use this template correctly. Now, I'm going to go ahead and bring over my information. So I'll start off with this info right here
>
> **[5:12](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=312)** and I'll say, "Use template.pptx to generate a slide deck
>
> **[5:26](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=326)** about [[Generative AI|GenAI]] and GPT. Here is the context for the presentation,"
>
> **[5:44](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=344)** and I'll use my delimiters right here.
>
> **[5:53](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=353)** I'll remove this unnecessary wording right here.
>
> **[6:03](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=363)** I'll also bring the information about GPT.
>
> **[6:31](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=391)** Now, believe it or not, while this takes some time, dumping both these articles with the template into a prompt would take much longer and wouldn't give me much to work with. And this is the [[Python (Programming Language)|Python]] code it's going to run in order to create this presentation.
>
> **[7:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/splitting-up-complex-tasks?u=76281980&t=420)** I'll download the file. While this is not perfect, it's a starting point for my presentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (9), [[Tokens]] (2), [[Generative AI]] (1), [[Microsoft PowerPoint|Powerpoint]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** gpt (3), pdf (2), pptx (1)
> **Exercise Files:** template (4), download the (1)
> **CLI Commands:** python (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Custom instructions](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/custom-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/custom-instructions?u=76281980&t=0)** - [Instructor] In this one, we're going to talk about custom instructions. Custom instructions allow us to save time and repetitive work by giving us presets that we can give to [[ChatGPT]]. Now, let me show you what I mean. Do you remember this prompt right here that we used for the apology email for a late shipment of GPUs? Well, people in this company wouldn't want to have to repeat what it is they do every time they start a chat. So let's go ahead and clear this up, and I've created a custom instruction that I'm going to activate. I'll head over to my logo right here, and I'll go to custom instructions. And here I'll go ahead and enable this for new chat. And what I've said is: Our company Red30 Tech imports GPUs. Our [[Microsoft Products|products]] are used for on-premise AI applications. You also have these nice hints for what it is you can say. You can say where you're based. You can say what you do for work, hobbies, et cetera. In this field, we can type in how we want ChatGPT to respond, whether it's a specific format or to take a certain persona. Here I say: You are Robin Red, the CEO of the company. Use professional language and take full responsibility for mistakes.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/custom-instructions?u=76281980&t=95)** Now, I'll go ahead and save this once I've enabled it, and now my prompt can be a bit more abrupt, so I can say: Write an apology for a shipment of three units, that is three weeks late.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/custom-instructions?u=76281980&t=127)** And I can be a little bit more abrupt because a lot of the context that I need is in the custom instructions. Now it's very important to remember to turn off custom instructions when we don't want to use them, otherwise we're going to have undesired behavior from ChatGPT with this context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3), [[Microsoft Products|Products]] (1)
> **Env Vars:** ceo (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging multi-modality](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/leveraging-multi-modality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/leveraging-multi-modality?u=76281980&t=0)** - [Instructor] This is going to be an exciting one where we look at multimodality. Now, a multimodal model is an AI model that can process data from various modalities. Some examples of modalities are text, audio, video, and imagery. And examples of tasks that leverage multimodality are visual question answering. That's where you give a model an image along with a question, and hopefully the model can answer questions about the image it receives. There's also text to image, video, or audio generation where you would give a model a text prompt along with perhaps an image, and the model would generate a new image. Now, the paid version of [[ChatGPT]] supports multimodality, and here's a neat way that I like to use it in order to cook. And you can try this out. What I do is I gather some ingredients that I have laying around the house and I put them all together. And using the ChatGPT mobile app, I take a photo of these ingredients and I add to this image the prompt, "How do I cook with these ingredients?" Now, I don't have to go shopping for ingredients for a particular recipe because ChatGPT will tailor a recipe
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/leveraging-multi-modality?u=76281980&t=94)** to the ingredients I have. And surprisingly, the recipe is often pretty good and pretty detailed. So I encourage you to check this out and I encourage you to push the limits of what you can do with ChatGPT and multimodality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Socratic prompting](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=0)** - [Instructor] Socratic prompting involves asking [[ChatGPT]] various questions in order to improve the output quality through reasoning. Now, there's an interesting paper about this by Edward Y. Chang that I encourage you to check out. It has various examples of such questions. There's a twist on this approach that I really find useful that involves getting ChatGPT to ask us questions. This can be very beneficial in two ways. First of all, you can get ChatGPT to ask you questions and find out if you are missing some information. This is a good exercise to do in a team. Another benefit of this is it can be a good way of providing ChatGPT with context. Let me show you what I mean. So here I am in a brand new chat and I'm going to go ahead and tell ChatGPT: "You are a branding expert. Come up with five brand names.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=74)** Ask me questions." And it's a good idea to say: "One each time until you have all the necessary information."
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=97)** Now, I purposely left out some of the context and let's see what happens. So it's asking me in what sector the brand is going to operate, and I'm going to say, "It's one brand that imports chips
>
> **[2:01](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=121)** used for on-premise AI applications."
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=137)** Great, so it's asking me to specify the primary audience of this brand, and I'll say, "The primary audience are going to be large tech companies."
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=160)** So what are the selling points and values? And this is rephrased, so it's asking me what are the unique selling points, and this is great. I'll say, "Fast supply and extensive support."
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=182)** I'll say, "Extensive [[Customer Support]], so fast supply and extensive customer support."
>
> **[3:17](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=197)** Now it's asking me whether I prefer the brand name to be very descriptive or very abstract. And how about I ask for five descriptive names
>
> **[3:32](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=212)** and five abstract names.
>
> **[3:45](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/socratic-prompting?u=76281980&t=225)** So here it's given me a few names and it's giving me different reasons why these names may work. I'm going to say that I like [[Swift (Programming Language)|Swift]] Chip Solutions, so I'll say, "I like Swift Chip Solutions. Can you create a logo for it?" And if you have a paid version of ChatGPT that includes Dolly, this is an added benefit. And I have some logo ideas to start with. So as you can see, sometimes getting ChatGPT to interview you is a good way to make sure that you give ChatGPT more context to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (8), [[Customer Support]] (2), [[Swift (Programming Language)|Swift]] (2)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Writing copy](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-writing-copy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-writing-copy?u=76281980&t=0)** - [Instructor] It's time to put the things we've learned to complete a challenge. And the goal of this challenge is to help come up with a slogan for this fictional [[E-Commerce]] brand. It's called Binaryville, and you can find this fictional site at [binaryville.com/shop](https://binaryville.com/shop). Now, Binaryville sells merchandise with these robots and nice little quotes about tech, and we want to go ahead and use some of the techniques we learned. You can try using personas, Socratic prompting, leverage multimodality, or anything we've learned so far, and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1)
> **CLI Commands:** find (1)
> **URLs:** [binaryville.com](https://binaryville.com) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Writing copy](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-writing-copy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-writing-copy?u=76281980&t=0)** - [Instructor] The goal of this challenge was to create a good slogan for the Binaryville Shop. And let me show you how I solve this using multimodality and personas. I'm going to go ahead and grab a screenshot of this portion right here. I'll go ahead and add this screenshot to my chat. And my first prompt will say: "Describe this [[E-Commerce]] shop.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-writing-copy?u=76281980&t=46)** Explain what makes its [[Microsoft Products|products]] valuable to customers." So this is a way of dividing things up a little bit.
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-writing-copy?u=76281980&t=71)** So now it's time to give [[ChatGPT]] a persona, and I'll say: "You are an e-commerce expert.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-writing-copy?u=76281980&t=85)** Come up with five slogan ideas for the Binaryville Shop."
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-writing-copy?u=76281980&t=107)** So here we've leveraged multimodality because we've inputted an image and a text prompt. We've split the task into two sections. First of all, getting ChatGPT to talk about what's appealing in this e-commerce site's products. And finally, we gave ChatGPT the persona of an e-commerce expert and asked it to perform a task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (4), [[ChatGPT]] (3), [[Microsoft Products|Products]] (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. DALL-E 3 in ChatGPT

[↑ Back to Table of Contents](#table-of-contents)

#### [What is DALL-E?](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/what-is-dall-e?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/what-is-dall-e?u=76281980&t=0)** - [[DALL-E]] is OpenAI's text to image model. It used to be its own product, but is now part of [[ChatGPT]]'s paid offerings. Now, what we know about DALL-E is a bit limited, but we do know it's a diffusion type model. It receives a prompt, starts off with a noisy image, and then iteratively removes noise until it has a clean and crisp image. Now, DALL-E was trained with a very, very large data set of pairs of images and captions. Keeping this in mind can help us make better choices when [[Prompt Engineering]] to get better results from DALL-E.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (4), [[ChatGPT]] (1), [[Prompt Engineering]] (1)
> **Env Vars:** dall (4)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - dall (1)

#### [DALL-E 3 best practices](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/dall-e-3-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/dall-e-3-best-practices?u=76281980&t=0)** - [Instructor] When we prompt [[DALL-E]], we want to use as much detail as possible, and it can be difficult to describe an image with precise style and what goes into this image, but having DALL-E as part of the [[ChatGPT]] ecosystem can really help us with that. Let me show you what I mean. I can start by asking ChatGPT to list the details that make up an image of a tech conference booth.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/dall-e-3-best-practices?u=76281980&t=46)** ChatGPT has created this exhaustive list of what would be in this image. Now I can ask ChatGPT to describe an image of a tech conference booth for a chip supply come.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/dall-e-3-best-practices?u=76281980&t=78)** The theme is AI [[Hardware]]. Use the details listed above.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/dall-e-3-best-practices?u=76281980&t=100)** Now I can go ahead and ask ChatGPT to generate this image, and it will go ahead and use DALL-E to do so.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/dall-e-3-best-practices?u=76281980&t=117)** And here I have an idea for a conference booth for a tech company. I can also leverage some of ChatGPT and DALL-E's multi-modality capabilities. For example, here is a sketch of a teddy bear that I've drawn. And as you can see, I'm not a great sketch artist, but I can use this. I can go ahead and upload this to a prompt and I can say, "Show me an image from a Pixar-style movie
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/dall-e-3-best-practices?u=76281980&t=161)** about this teddy bear. Use the same color for the bear."
>
> **[3:03](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/dall-e-3-best-practices?u=76281980&t=183)** And while I'm a great artist, I don't know that I could draw this precise bear and I actually quite like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (6), [[DALL-E]] (4), [[Hardware]] (1)
> **Env Vars:** dall (4)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Enrich a DALL-E prompt](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-enrich-a-dall-e-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-enrich-a-dall-e-prompt?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-enrich-a-dall-e-prompt?u=76281980&t=5)** - [Ronnie] It is time for a little challenge and in this one, we're going to create a little sticker or a logo for a team of prompt engineers. This team is the learners in this course, and once you're done, I would really want to see what you've created. So go ahead and share it on [[LinkedIn]] with the hashtags #AI and #LearnTechwithLinkedIn and @Ronnie Sheer. I've seen many creations from students in previous courses and it really brings me lots of joy to see people putting these techniques to work. So I'll see you in the next one with the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [ronnie] (1)
> **Non-Speech:** (light upbeat music) (1)

#### [Solution: Enrich a DALL-E prompt](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-enrich-a-dall-e-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-enrich-a-dall-e-prompt?u=76281980&t=0)** - [Ronnie] The goal of this challenge was to use [[ChatGPT]] and [[DALL-E]] to generate a sticker for a team of prompt engineers. Then share your creations on [[LinkedIn]] so that hopefully we can learn from each other's work. And let's go ahead and head over to ChatGPT, and I'll start by saying, "List the details that make up an appealing sticker design for a team of professional [[Prompt Engineering]] superheroes." So I'll go ahead and submit this.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-enrich-a-dall-e-prompt?u=76281980&t=47)** Great. Now I'm going to ask ChatGPT to, "Use these details to describe a sticker for LinkedIn Learning Prompt Heroes."
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-enrich-a-dall-e-prompt?u=76281980&t=69)** And I'll put this in quotes,
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-enrich-a-dall-e-prompt?u=76281980&t=79)** and I'll ask ChatGPT to, "Generate one sticker."
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-enrich-a-dall-e-prompt?u=76281980&t=92)** And it looks like we have a sticker for our team of prompt engineers. It's cut off a little bit, and so I can go ahead and let ChatGPT know that, "This sticker is slightly cropped. Generate another one."
>
> **[2:06](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-enrich-a-dall-e-prompt?u=76281980&t=126)** And it looks much better. We have LinkedIn Learning Prompt Heroes with "Engineering the future, one prompt at a time." Now, I can't wait to see what you have designed. And once this course comes out, I'll post this and share it, and I can't wait to see what you've designed. Once again, go ahead and share it on LinkedIn with the hashtags #ai and #learntechwithlinkedin, as well as my name, Ronnie Sheer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[LinkedIn]] (4), [[DALL-E]] (1), [[Prompt Engineering]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** dall (1)
> **Speakers:** - [ronnie] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Security Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### [ChatGPT security considerations](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/chatgpt-security-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/chatgpt-security-considerations?u=76281980&t=0)** - Before we start using [[ChatGPT]] in a professional environment, here are a few security considerations to keep in mind. It's always a good idea to seek stakeholder's approval when introducing new cutting edge tools to our workflow. Such stakeholders could include management, the person in charge of information security, and of course, our users and clients. It's also important to check ChatGPT's terms of use to see that they're aligned with your organization's security and [[Privacy]] policy. It's also important to configure your environment for optimal security and privacy. As with many tools, you should not input passwords, keys, or any sensitive data into ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3), [[Privacy]] (2)
> **Prerequisites:** before we start (1), configure (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - before (1)

#### [Plans and data controls](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/plans-and-data-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/plans-and-data-controls?u=76281980&t=0)** - [Instructor] Data controls give you a few options when it comes to information security and [[Privacy]] while using [[ChatGPT]]. Before we take a look at how we can configure data controls, let's take a look at what different plans of ChatGPT mean for businesses. At the time of this recording, the free version of ChatGPT and ChatGPT+ use data for training by default. These versions of ChatGPT are also less suitable for business use, and they're definitely not intended for enterprise applications. Now, both the Teams and Enterprise plans do offer enhanced security and privacy. They allow resource sharing within an organization or a team, and they offer larger context [[Windows]]; allowing you to have longer conversations and use more [[Tokens]]. Most importantly, both teams and enterprise plans are built for work and are more appropriate for business use. With that in mind, let's take a look at how we can configure data controls. You'll notice that at the bottom it says the Smart Plan workspace chats aren't used to train models. ChatGPT can make mistakes. So these are the two pieces of information they're letting me know. The reason these chats are private is
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/plans-and-data-controls?u=76281980&t=92)** because I am using ChatGPT Teams. My team's name is Smart Plan. Now, if I go ahead and go to settings, if I go to data controls, you'll notice that this workspace is private and opted out of training. Similarly, you'll see a chat history toggle and you can toggle this on and off. Now, if you're using the free version of Chat GPT or ChatGPT+, there is a trade off here. If you want your data not to be used for training, you cannot retain your chats so you don't have the chat history and you cannot go back and forth between chats. Once you're done with the chat, you are free to copy whatever information you want and kind of save it elsewhere. Let's have a look at this in my personal account. Let's go ahead and head over to settings, and here under data controls, you'll see that I don't have the training toggle separate from chat history and training. I would have to turn off both at the same time, and this would mean if I use this right now, it would almost be like an incognito mode on a browser.
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/plans-and-data-controls?u=76281980&t=181)** Now, do keep in mind that if you wish to have better privacy for your work, I highly encourage you to consider getting ChatGPT Teams or ChatGPT Enterprise and to consult OpenAI's website for the terms of use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (10), [[Privacy]] (3), [[Windows]] (1), [[Tokens]] (1)
> **UI Navigation:** toggle (3), go to (2)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Env Vars:** gpt (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Hallucinations](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/hallucinations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/hallucinations?u=76281980&t=0)** - [Instructor] [[Large Language Models (LLM)|Large language models]] such as [[ChatGPT]] are very impressive. They can, however, be inaccurate and sometimes even make up things. It's often said that models such as ChatGPT are 90 or 97% accurate, but 100% confident. This notion stems from the fact that sometimes, in rare occasions, ChatGPT can say something that is false very, very confidently. Now, to mitigate the impact of hallucinations, there are a few things we can do. Always verify ChatGPT's output. Do not use any code output that you understand and that you have reviewed. Keep humans in the loop. So when integrating ChatGPT into a system, always make sure there's a human in the loop checking outputs. And whenever there's a severe hallucination or inaccuracy, it's a good idea to document it, perhaps in a shared document. And in this way, we can share knowledge about these shortcomings of ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (6), [[Large Language Models (LLM)|Large language models]] (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Tools:** notion (1)
> **Best Practices:** always make sure (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Use data controls](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-use-data-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-use-data-controls?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/challenge-use-data-controls?u=76281980&t=6)** - [Instructor] Being familiar with data controls is an important part of working with [[ChatGPT]] professionally. So in this one, your challenge is to head over to data controls in the setting section and making sure that chat history and training is off. Then start a conversation and do what you need to keep ChatGPT's output. So take about five to 10 minutes to complete this challenge and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Use data controls](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-use-data-controls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-use-data-controls?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-use-data-controls?u=76281980&t=5)** - [Instructor] The goal of this challenge was to head over to data controls, turn off chat history and training, and start a conversation, then to keep [[ChatGPT]]'s output somehow. Now, let me show you my solution and I'll also demonstrate a way you can get data from ChatGPT to spreadsheet software like [[Microsoft Excel|Excel]] if you don't have access to creating files with ChatGPT. So here I am in my personal account of ChatGPT, and I'll open up the menu and navigate to Settings. And I'll head over to Data Controls and go ahead and toggle off chat history and training. Now, I'll type in this prompt, create a table with names, column, and ages column. Add Jill, age 44, Jim, age 43, [[John the Ripper|John]], age 33, and Jack, age 28 to the table.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-use-data-controls?u=76281980&t=100)** Output should be CSV.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/solution-use-data-controls?u=76281980&t=110)** Now, CSV format is supported by most spreadsheet's software, and it's created some extra characters down here that I'll ignore and I'll only grab this comma separated value section. I'll head over to an empty file that I've created. I'll open it with a text edit, which is a plain text editor. If you're using [[Windows]], you can use a Notepad application, and I'll go ahead and paste this, save it, and close. And I'll open it with the default spreadsheet application. Notice that it's created a table that I can now work with in numbers or in Excel. Now if I head over to ChatGPT and refresh my browser, my chat was cleared, and to enable chat history, but with training data, meaning my information is going to be used for training, I could go ahead and click this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[Microsoft Excel|Excel]] (2), [[John the Ripper|John]] (1), [[Windows]] (1)
> **Env Vars:** csv (2)
> **UI Navigation:** navigate to (1), toggle (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-chatgpt/next-steps?u=76281980&t=0)** - [Ronnie] This is Ronnie Sheer. I wanted to thank you for taking this course. Now, if you're interested in AI and all things technology, go ahead and subscribe to my YouTube channel; there I talk about the latest trends in AI and share tips that may help you leverage cutting-edge technologies. You might also want to follow me on [[LinkedIn]] where I share my thoughts on these trends. Now, as far as courses go, here are a few neat ones I can recommend checking out from the library. If you wish to get a sense of the broad [[Generative AI]] landscape and how [[Prompt Engineering]] applies to it, there's my course [[Introduction To Prompt Engineering For Generative Ai]]. If you wish to customize [[ChatGPT]]'s behavior, there's the course Build Your Own GPTs with Alina Zhang. Finally, if you're involved in software engineering and wish to get cutting-edge AI into your software, there's a great learning path called Develop Your Skills with the [[OpenAI API]]. Once again, thank you so much and till the next one, always be learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[Prompt Engineering]] (2), [[LinkedIn]] (1), [[ChatGPT]] (1), [[OpenAI API]] (1)
> **Env Vars:** api (1)
> **Speakers:** - [ronnie] (1)


## Instructor

- [[Ronnie Sheer]]

## Path Context

### In [[Building ChatGPT Skills for Business Professionals]]
← [[How to Research and Write Using Generative AI Tools (2023)]] | **3 of 6** | [[Nano Tips for Using ChatGPT for Business with Rachel Woods]] →

### In [[Prompt Engineering Skills for Developers]]
← [[Introduction To Prompt Engineering For Generative Ai]] | **3 of 6** | [[ChatGPT- Perfecting Your Output with Templates in Prompts]] →

## Appears In

- [[Building ChatGPT Skills for Business Professionals]]
- [[Prompt Engineering Skills for Developers]]

---

[↑ Back to top](#)