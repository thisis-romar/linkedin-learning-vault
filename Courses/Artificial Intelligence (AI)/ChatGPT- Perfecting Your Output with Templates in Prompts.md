---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: chatgpt-perfecting-your-output-with-templates-in-prompts
url: "https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts"
duration_minutes: 34
duration: 34m
level: Intermediate
updated: 10/30/2024
learners: 10972
skills:
  - Artificial Intelligence (AI)
  - ChatGPT
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEbhIwyLpvDuA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728672186430?e=2147483647&amp;v=beta&amp;t=S-vJ9zkO7wCQ-p8t4DJafNHrFDAPH4C8zebSHxT54xI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Prompt Engineering Skills for Developers]]'
prev_courses:
  - '[[Prompt Engineering with ChatGPT]]'
next_courses:
  - '[[Prompt Engineering with LangChain]]'
path_nav: '[{"path":"Prompt Engineering Skills for Developers","position":4,"total":6,"prev":"Prompt Engineering with ChatGPT","next":"Prompt Engineering with LangChain"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-ai
  - skill/chatgpt
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/ChatGPT-%20Perfecting%20Your%20Output%20with%20Templates%20in%20Prompts.md)

![ChatGPT: Perfecting Your Output with Templates in Prompts](https://media.licdn.com/dms/image/v2/D4D0DAQEbhIwyLpvDuA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728672186430?e=2147483647&amp;v=beta&amp;t=S-vJ9zkO7wCQ-p8t4DJafNHrFDAPH4C8zebSHxT54xI)

# ChatGPT: Perfecting Your Output with Templates in Prompts

> Unlock the full potential of ChatGPT by mastering the art of output perfection. In this course, instructor Jules White guides you through using Markdown templating and advanced prompt engineering techniques to achieve precise, beautifully formatted results every time. Learn how to create predictable outputs that elevate the quality and consistency of your AI interactions, whether you're drafting c

> [LinkedIn Learning](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts) | 34m | Intermediate | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. ChatGPT: Perfecting Your Output with Templates in Prompts**](#1-chatgpt-perfecting-your-output-with-templates-in-prompts) (5 videos)
  - [Unlock the power of templates: Create impactful ChatGPT prompts with the template pattern](#unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern)
  - [Supercharge your prompts with Markdown: Enhance ChatGPT output like a pro](#supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro)
  - [Elevate your writing: Using Markdown for footnotes and citations in ChatGPT](#elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt)
  - [Advanced Markdown mastery: Perfect ChatGPT prompts for outstanding results](#advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results)
  - [Refine ChatGPT responses: Reduce hallucinations with escape valve techniques](#refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques)

### 1. ChatGPT: Perfecting Your Output with Templates in Prompts

[↑ Back to Table of Contents](#table-of-contents)

#### [Unlock the power of templates: Create impactful ChatGPT prompts with the template pattern](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=0)** The Template Pattern is something that I've created and talked about in my very first course.
>
> **[0:05](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=5)** But, over the last year, when I've really been doing a lot of [[Prompt Engineering]] and prompting, the Template Pattern, I realized, is something that I really wish I had taken more time to explain, because it's one of the most powerful things that I use on a daily basis.
>
> **[0:19](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=19)** In fact, it's something that when I go into demos, I always try to use the Template Pattern because it's something that usually looks like a Jedi mind trick to people.
>
> **[0:27](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=27)** Like they see it and then go, "Oh my Gosh!
>
> **[0:30](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=30)** What did he just do?"
>
> **[0:31](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=31)** And so, I wanted to just really take some time to dive into this a little bit more and it's a very rich topic.
>
> **[0:37](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=37)** There's so much you can do with this concept of the Template Pattern or templating; however you want to think about it.
>
> **[0:43](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=43)** But I really, really want to spend some time to just show you the power of this, all the different ways to use it but, also the intricacies of how to think about using it.
>
> **[0:52](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=52)** Now, I'm going to dive into an example to get you started.
>
> **[0:56](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=56)** And one of the most basic things when we have to start thinking about the template is the concept of a placeholder.
>
> **[1:03](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=63)** Now, what is a placeholder?
>
> **[1:04](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=64)** A placeholder is a point in our text where there is something that we want filled in.
>
> **[1:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=69)** So, you can think about it, like if you created a template for some intern to go and write a report, you would leave placeholders and you would say, "this is what I want you to fill in here.
>
> **[1:20](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=80)** So, go and put that in."
>
> **[1:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=81)** And you would try to provide good placeholders wherever there was something that needed to be filled in.
>
> **[1:27](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=87)** At the same time, the key thing that the placeholders give you is they tell you what is in the template that should not be changed.
>
> **[1:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=94)** Meaning, if it's not in a placeholder, I don't really want you to change it.
>
> **[1:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=99)** So, that's an important concept.
>
> **[1:41](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=101)** The moment we start introducing placeholders we also are introducing the idea that certain things that I'm giving you just aren't meant to be changed.
>
> **[1:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=109)** And I don't have to tell you that for you to know that. You can infer it because of the fact that I've got placeholders.
>
> **[1:56](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=116)** If you go look at a contract, a legal contract, and it has a placeholder for your name, it's indicating you fill in your name, but you don't get to change anything else.
>
> **[2:05](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=125)** And we can kind of do the same thing with the LLM.
>
> **[2:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=127)** We can tell it, "Hey, here's placeholders, but don't touch other things."
>
> **[2:11](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=131)** Now, can we guarantee that it won't touch anything else?
>
> **[2:13](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=133)** No, but it really, really can be a helpful thing.
>
> **[2:16](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=136)** So, look at the look of this prompt: "Vanderbilt University was founded in" and I have a placeholder "<Insert Year>" by "<Insert Founder>".
>
> **[2:26](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=146)** You can do placeholders all kinds of different ways.
>
> **[2:29](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=149)** I find less than (<) what you want it to insert, greater than (>), is a really effective way to do this.
>
> **[2:35](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=155)** And I also tend to put insert language into there to just completely disambiguate that this is a place where you're going to insert something.
>
> **[2:43](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=163)** It's telling the LLM, "Here are your instructions for what to do right here.
>
> **[2:47](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=167)** Insert this."
>
> **[2:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=169)** So, I find that this works really well across all the different LLMs, but just simple idea of less than (<), insert something, greater than (>).
>
> **[3:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=180)** No, why does this work?
>
> **[3:01](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=181)** Well, it works well because it's probably trained on a lot of programming language and probably trained on a lot of templates and other things that programmers do.
>
> **[3:08](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=188)** And we use stuff like this to indicate where we want to fill something in.
>
> **[3:12](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=192)** Now, you could do brackets, braces, parentheses, all kinds of other stuff.
>
> **[3:17](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=197)** I encourage you, go and try the less than (<), greater than (>) with the insert in there.
>
> **[3:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=201)** It works really well.
>
> **[3:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=201)** But at the end of the day you experiment and find out what works well for you.
>
> **[3:25](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=205)** But that's what I'm going to use and sort of standardize on throughout the [[Representational State Transfer (REST)|rest]] of this.
>
> **[3:29](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=209)** So, this is my prompt: "Vanderbilt University was founded in" "<Insert Year>" "by" "<Insert Founder>".
>
> **[3:35](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=215)** Now, notice I didn't tell it "Go and write and tell me."
>
> **[3:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=218)** I didn't ask it a question.
>
> **[3:40](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=220)** I just gave it text with placeholders.
>
> **[3:43](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=223)** And it comes back: "Vanderbilt University was founded in 1873 by Cornelius Vanderbilt."
>
> **[3:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=229)** Now, notice I didn't have to give it instructions.
>
> **[3:52](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=232)** It knew what to do.
>
> **[3:53](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=233)** It knew that, ah, this is a template.
>
> **[3:55](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=235)** I need to fill it in.
>
> **[3:56](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=236)** And here are the placeholders.
>
> **[3:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=238)** And that becomes now a powerful capability that we can use to go and start directing the output of the large language model to go the direction that we want.
>
> **[4:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=249)** Now, let's start looking at how we can use placeholders even more richly.
>
> **[4:14](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=254)** Now, if you can imagine you're going to be filling out a legal contract, it might say "insert physical address" or "insert owner's name" or "insert child's name", or it might say "insert birthday" and it gives you the format for it.
>
> **[4:31](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=271)** And so, one of the things that we can do in our placeholders, is we can provide rich information about what we want inserted, but also the format that we want to insert it.
>
> **[4:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=279)** So, if you look at this prompt, what I've got is "Vanderbilt University was founded in "<Insert Year in MM-DD-YYY format>", meaning a two-digit month, dash, a two-digit day of the month, dash, a four-digit year.
>
> **[4:57](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=297)** So something like, you know, January 1st would be 01-01- and if we're going to do 2021 it would be 20-21.
>
> **[5:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=307)** And so, it's basically spelling out exactly how to format the date rather than to leave it up to the large language model.
>
> **[5:14](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=314)** And then I put after that "format."
>
> **[5:16](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=316)** So, I'm just specifying, "hey, it's not just the date, I want it in this format."
>
> **[5:20](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=320)** And so, sometimes you'll have to play around with what you put into those instructions.
>
> **[5:25](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=325)** And then, I say "by" "<Insert Founder Initials Only>" and notice now I'm telling it I don't want the full name, I just want the initials.
>
> **[5:33](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=333)** We go put this in, we get "Vanderbilt University was founded in 03-17-1873 by C.V." Cornelius Vanderbilt.
>
> **[5:43](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=343)** And so, we've taken control of the LLM's output, and we've actually taking control of it without explicitly telling it what to do through what we think of as instructions.
>
> **[5:52](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=352)** In the same way that if somebody hands you a piece of paper and it has "fill in name here."
>
> **[5:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=358)** You know what to do.
>
> **[5:59](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=359)** They don't have to tell you.
>
> **[6:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=360)** You're supposed to fill in your name.
>
> **[6:02](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=362)** You're going to look at the piece of paper, you're going to read it.
>
> **[6:03](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=363)** You're going to be like, "I need to fill in my name here," and you'll fill it in.
>
> **[6:06](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=366)** And the large language model knows that too, and we want to take advantage of it.
>
> **[6:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=370)** Now, let's do something more sophisticated.
>
> **[6:14](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=374)** Let's start thinking about how to put longer chunks of content together using this capability.
>
> **[6:20](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=380)** So now what I've got is what I had before, "Vanderbilt University was founded in" "<Insert Year>" and I've got the format, "by" "<Insert Founder Initials Only>, and now I'm adding: "It's schools are" and I have a placeholder for "<Insert List of Schools as Bullets>".
>
> **[6:36](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=396)** And so, I'm telling it, "here's what I want you to do.
>
> **[6:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=398)** I want you to put some content in here and go fill it in."
>
> **[6:42](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=402)** And when I do that now, it comes back and it fills in the different schools at Vanderbilt.
>
> **[6:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=409)** And that's a really powerful, useful thing that I can start building upon. It's not just about giving it to give me something.
>
> **[6:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=418)** It's about giving it to give me something in the format that I actually want so I don't then have to go spend a bunch of time like copying and pasting out of its format into the format that actually want to put it into.
>
> **[7:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=430)** But no, I can just get it into the right format on the first pass, which is an incredibly useful thing to do.
>
> **[7:17](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=437)** Like, if you want to take really badly formatted information like those comments that I took out of [[LinkedIn]] and get them into a structured format like comma separated values.
>
> **[7:28](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=448)** Or, let's say you have your resume in one format and you need to move your resume into a new format.
>
> **[7:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=454)** Well, you say, "here's all of my information from my resume.
>
> **[7:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=458)** Here's the format, the template that I want you to put it in, redo it."
>
> **[7:42](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/unlock-the-power-of-templates-create-impactful-chatgpt-prompts-with-the-template-pattern?u=76281980&t=462)** And so, it's this idea that we can take control of it and take control of the format that it gives it to us in is a really, really powerful thing that we can take advantage of in all kinds of special ways that we'll look at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[LinkedIn]] (1)
> **Exercise Files:** template (9)
> **Definitions:** is a  (6), is an  (1)
> **Env Vars:** llm (3), yyy (1)
> **CLI Commands:** find (3)
> **Analogies:** imagine (1)

#### [Supercharge your prompts with Markdown: Enhance ChatGPT output like a pro](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=0)** To really take control over the format that is going to give us stuff in with the template pattern, we want to understand Markdown. And, what is Markdown?
>
> **[0:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=9)** Well, let's think about what you do in a [[Microsoft Word|word]] processor, right?
>
> **[0:12](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=12)** You will go in and you will write a document and you will highlight certain sections and you'll say, "this is going to be a first level heading."
>
> **[0:19](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=19)** And then you'll go highlight something else and you'll say, "this is a second level heading."
>
> **[0:22](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=22)** You'll highlight certain words and you'll make them bold, or you'll highlight certain things and you'll say, "this is a list of bullets."
>
> **[0:28](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=28)** But the way we do that is normally by going in and highlighting things and then clicking in the GUI, and we don't have a GUI here, there's no... how do we specify this?
>
> **[0:37](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=37)** How do we make that happen?
>
> **[0:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=39)** Well, [[Large Language Models (LLM)|large language models]] know how to speak text.
>
> **[0:43](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=43)** And so, what we want to do is we want to work with the large language model so that it can spit out text, that when you take that text and you put it into the right tool, it will have the formatting that we want.
>
> **[0:55](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=55)** Now, it turns out that most of these large language model tools, these chat interfaces, like Claude or [[ChatGPT]], they already know a formatting language that's textual called "Markdown."
>
> **[1:08](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=68)** And Markdown, then, is what we can take advantage of in order to, you know, control exactly the formatting that we get out.
>
> **[1:15](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=75)** So, let's take a look at what Markdown is.
>
> **[1:18](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=78)** Now, probably whatever large language model you're working with, you can go into the interface and you can do something like this.
>
> **[1:24](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=84)** "Show me examples of the Markdown that you know" and it will start telling you Markdown.
>
> **[1:29](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=89)** So, the first thing we can do is we can create headers.
>
> **[1:32](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=92)** So, a header is simply a number of hashes followed by the text that we want in the header.
>
> **[1:37](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=97)** So, you can think of this as a section header in a document.
>
> **[1:40](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=100)** This is one of the simplest, easiest things to do to improve the formatting of what you're getting out, it is to start building in headers into it.
>
> **[1:48](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=108)** Second thing we can do is something really, you know, obvious and you know, something that we commonly do in documents, which is we highlight things and we put them in bold or italics or bold and italics, but not a lot of people know how do you get the language model to do that?
>
> **[2:04](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=124)** Well, you do it by using emphasis.
>
> **[2:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=127)** Emphasis is the markdown term for bold and italics.
>
> **[2:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=130)** And if you want to make something in italics, you put it between two, essentially, stars.
>
> **[2:16](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=136)** I don't know, there's probably a better term for this, but I think of it as the star.
>
> **[2:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=141)** And if you want it bold, you put it between two of these stars.
>
> **[2:24](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=144)** And basically the first one would be italicized, the second one would be put in bold.
>
> **[2:29](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=149)** And then if we need it, bold and italics, and we just go and start adding in this formatting.
>
> **[2:35](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=155)** And we'll see how this works in a little bit when we actually go and build output that follows the markdown.
>
> **[2:41](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=161)** Lists.
>
> **[2:43](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=163)** We can have different types of lists that are either unordered, meaning it doesn't have numbers attached to it, it's just a bunch of bullets.
>
> **[2:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=169)** Or we can have ordered lists where we have numbers attached to them.
>
> **[2:53](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=173)** And to do unordered list, you just go and have dashes.
>
> **[2:56](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=176)** If you want ordered lists, you go in and put numbers.
>
> **[2:59](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=179)** Similarly, we can do links.
>
> **[3:02](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=182)** Now, links may or may not work because these large language models are sensitive to trying to render links that you could then go and click on and have bad things happen.
>
> **[3:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=190)** So, you may or may not be able to get links to work depending on the tool that you're working in.
>
> **[3:14](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=194)** But, this is roughly how they work is you specify inside of brackets what the link text is going to be, and then in a parentheses like, within parentheses right after it, you specify the URL that you would want it to go to.
>
> **[3:29](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=209)** Now this won't always work.
>
> **[3:31](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=211)** You can do images that might sometimes work.
>
> **[3:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=214)** It just depends.
>
> **[3:35](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=215)** It's all based on what they allow.
>
> **[3:37](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=217)** And there's security reasons not to allow everything like images and text or links.
>
> **[3:42](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=222)** So, just know that that's something you may run into trouble with.
>
> **[3:46](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=226)** Now, something that's underappreciated and underutilized that I've seen is tables.
>
> **[3:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=229)** Tables can be really helpful, especially when we're representing data, all kinds of things like that.
>
> **[3:54](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=234)** And most people deal with lists and they don't really know how to control the output to get a table like they want.
>
> **[4:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=240)** Tables are essentially these pipe operators.
>
> **[4:04](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=244)** Now, I think of it as pipe because I'm a programmer, there may be a different word, but you can think of these vertical lines.
>
> **[4:08](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=248)** You can find it on your keyboard somewhere.
>
> **[4:11](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=251)** Mine is on a Mac.
>
> **[4:12](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=252)** And so, it's right above the Return key.
>
> **[4:14](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=254)** I hit Shift and then that key above the Return key, and I get the sort of pipe, and then you specify the header.
>
> **[4:20](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=260)** Now I'm not going to go into full detail behind this.
>
> **[4:22](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=262)** You can go find something about markdown.
>
> **[4:24](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=264)** You can even better yet within your LLM, ask it to teach you markdown or fix your markdown.
>
> **[4:29](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=269)** Or if you tell it, "I want a table with these columns and the rows look like this.
>
> **[4:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=274)** How would I do that in markdown?"
>
> **[4:35](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=275)** And it can show you and help you get there.
>
> **[4:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=278)** Horizontal rules, task lists like, you know, checkboxes that you can check off of tasks.
>
> **[4:43](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=283)** All kinds of fun things.
>
> **[4:45](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=285)** But, I'm going to leave off on the most underutilized but amazing one because it's so helpful for a number of different tasks.
>
> **[4:56](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=296)** And I'm going to show you this task in the use of footnotes.
>
> **[5:01](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=301)** But footnotes are an amazing way —particularly when you are giving the large language model information— of having it tell you what information that you gave it, that it used to support its answer.
>
> **[5:14](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=314)** And we'll come back to this one later.
>
> **[5:16](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=316)** But this is one that's super underutilized and when you show it to people, it looks like magic.
>
> **[5:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=321)** But it also helps you whenever you, you know, encounter those people who are LLM haters, they're doubters, they say it hallucinates, everything's garbage, you can never trust anything.
>
> **[5:30](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=330)** The footnote is where you're going to go and absolutely blow their mind.
>
> **[5:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/supercharge-your-prompts-with-markdown-enhance-chatgpt-output-like-a-pro?u=76281980&t=334)** It is a superpower to know that markdown and to know how to use it effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Large Language Models (LLM)|Large language models]] (2), [[ChatGPT]] (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** gui (2), llm (2), url (1)
> **Definitions:** is a  (3)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** think of it as (2)
> **Exercise Files:** template (1)

#### [Elevate your writing: Using Markdown for footnotes and citations in ChatGPT](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=0)** Now we're going to look at some sophisticated templates that put together the idea of placeholders with taking control over the precise details of the formatting.
>
> **[0:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=9)** And we're going to put these two things together.
>
> **[0:11](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=11)** We're going to use markdown and placeholders.
>
> **[0:13](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=13)** And we're going to make some amazing things happen.
>
> **[0:15](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=15)** And hopefully we'll open your mind to how you can go about really building more sophisticated outputs out of these [[Large Language Models (LLM)|large language models]].
>
> **[0:24](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=24)** So, we're going to start off with a big prompt, and I'm going to show you this prompt and walk you through it step by step.
>
> **[0:31](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=31)** The first thing I'm going to do for my prompt is I want it grounded in real information.
>
> **[0:35](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=35)** So, I'm going to provide it the facts.
>
> **[0:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=38)** I don't want it to hallucinate.
>
> **[0:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=39)** I don't want it to dream up the facts.
>
> **[0:41](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=41)** I'm going to give it the information I want it to work with.
>
> **[0:44](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=44)** Now, you can imagine this could be all kinds of raw data.
>
> **[0:46](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=46)** This might be raw information that you need to put into a quarterly report.
>
> **[0:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=49)** This might be raw information that you have from your resume that you're trying to reformat, but you don't want it to hallucinate your qualifications.
>
> **[0:57](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=57)** You want it to use your real qualifications.
>
> **[1:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=60)** But basic idea is in the prompt, we're going to go and give it the information to use.
>
> **[1:05](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=65)** And this is going to be really critical later.
>
> **[1:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=67)** And I'll show you how we're going to use it.
>
> **[1:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=70)** Now, I say, "Reference source material for footnotes:" and you'll see what I'm going to do with this in a second.
>
> **[1:15](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=75)** I then have a separator to explain where the reference material starts, and I have a whole bunch of different facts, kind of fun facts about Vanderbilt.
>
> **[1:23](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=83)** And I have a bunch of them.
>
> **[1:25](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=85)** My prompt is pretty big.
>
> **[1:26](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=86)** It's spanning two slides right now.
>
> **[1:28](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=88)** So, we see these two different, you know, slides.
>
> **[1:30](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=90)** And we've got a bunch of facts about Vanderbilt.
>
> **[1:33](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=93)** Now, let's look at my template.
>
> **[1:35](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=95)** And what I say is, "We are going to create a report on exciting things about Vanderbilt."
>
> **[1:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=99)** "Create your report in this format:" So, when I start building out more complicated prompts, although I could probably just put in a template, once I start introducing information, I don't want it to be confused about what is this information versus the template?
>
> **[1:53](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=113)** How is it all fit together?
>
> **[1:54](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=114)** And so, what I'm saying is like, "here's the information.
>
> **[1:56](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=116)** Now I want you to create a report in this format."
>
> **[1:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=118)** And this is what I'll commonly say is, you know, "create your output in this format:" And then give it the template.
>
> **[2:05](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=125)** And that's how I intend to use the template pattern now.
>
> **[2:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=127)** Now, it's a bit different how I used to use it.
>
> **[2:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=129)** And if you took my first course on [[Prompt Engineering]] for [[ChatGPT]], it's not exactly how I presented it there.
>
> **[2:14](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=134)** So, this is how I use it now. My sort of way of thinking about it has evolved.
>
> **[2:18](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=138)** Now, what I said there still applies, but this I think is a more efficient, simpler way to use it.
>
> **[2:24](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=144)** So, I say "in this format" and I have a first level heading which is "# Exciting Vanderbilt facts!"
>
> **[2:31](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=151)** So that is a headline that I'm telling it it should show up in the report.
>
> **[2:36](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=156)** It doesn't need to do anything.
>
> **[2:37](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=157)** It just needs to put it in the report, output it as is.
>
> **[2:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=159)** Then I have a second level heading of "Fact 1:" So fact one should be there.
>
> **[2:47](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=167)** Now we'll see that it gets smart about this.
>
> **[2:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=169)** It's following patterns and it'll know what to do.
>
> **[2:51](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=171)** It'll know to increment the numbers on the facts.
>
> **[2:54](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=174)** Now we could have said "insert number" or whatever.
>
> **[2:57](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=177)** But sometimes numbers and things, it just knows what you meant.
>
> **[3:01](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=181)** Um, and then I say "<Insert 6-9 [[Microsoft Word|Word]] Exciting Summary>" So, I want like a second level heading that has some exciting, fun fact about Vanderbilt.
>
> **[3:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=189)** But I don't want it to be too long, so I want it to be 6 to 9 words.
>
> **[3:13](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=193)** And then I say, <Describe Fact in Detail>" So, this is where I'm telling it, "Hey, go and really expand on that fact and explain it.
>
> **[3:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=201)** And then behind it I'm using Markdown Footnotes.
>
> **[3:27](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=207)** And if you don't exactly see how this footnote works, go and look at the Markdown again for Footnotes.
>
> **[3:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=214)** You'll see it in a minute and you'll understand it in a minute.
>
> **[3:37](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=217)** But I would refer to that if you're getting confused in this video.
>
> **[3:40](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=220)** Now, I'm creating a Markdown Footnote, but I'm saying <Insert Footnote to Original Fact>" So, I'm telling it, I want you to create a footnote based on the original fact that you're relying on to write this part of the report, and then I have some dots or ellipses.
>
> **[4:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=240)** And what this means is ellipses are a really powerful way of telling the large language model "Go and fill in more of these.
>
> **[4:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=247)** I don't want just one fact.
>
> **[4:08](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=248)** I want a bunch of them."
>
> **[4:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=250)** So, if you have like one part of the pattern and then you want it to fill in more, you can do dots.
>
> **[4:15](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=255)** Do more sophisticated things, too.
>
> **[4:17](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=257)** But dots works well.
>
> **[4:19](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=259)** And then at the bottom I have a first level header again, that's footnotes because I think this is a really important thing.
>
> **[4:25](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=265)** And it's something that I want you to start using and showing to people that say, "they hallucinate, you can't use it in a in a powerful way.
>
> **[4:32](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=272)** It can never give you citations.
>
> **[4:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=274)** It's impossible for it to give you citations."
>
> **[4:36](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=276)** And you can say, "yeah, yeah, let's, let's check that out."
>
> **[4:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=279)** And then I say, <Insert Footnotes as Quotes from Source Material>" What is going to happen?
>
> **[4:46](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=286)** I want to just take a look at this.
>
> **[4:48](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=288)** Take a moment for you to stare at this, because this is just amazing and it's so powerful and so helpful when we're thinking about large language models taking control of the output and beginning to trust the output.
>
> **[5:01](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=301)** Exciting Vanderbilt facts!
>
> **[5:03](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=303)** So, it preserved our header. Fact 1: A Historic Generosity Sparked its Founding.
>
> **[5:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=309)** Vanderbilt University was founded in 1873 thanks to the generous $1 million donation of Cornelius Vanderbilt, blah, blah, blah, blah.
>
> **[5:16](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=316)** And then notice what is at the end of that.
>
> **[5:18](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=318)** Now, it may be hard to see in this video, but there is a little one there.
>
> **[5:22](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=322)** It is a footnote and we'll see what happens with those in a minute.
>
> **[5:25](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=325)** We have a bunch more of Vanderbilt facts, footnote or facts, and note that each one of them now has a footnote attached to it.
>
> **[5:32](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=332)** That's going to be important.
>
> **[5:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=334)** And then we go all the way through to fact number ten.
>
> **[5:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=338)** "Illustrious Alumni Network."
>
> **[5:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=339)** And since we're on the last fact, I'm just going to pull out the very last fact here in a second.
>
> **[5:46](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=346)** And that's, we've got footnotes, as well.
>
> **[5:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=349)** So, we got to the last fact, we've now got our footnotes.
>
> **[5:52](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=352)** And notice we've got ten footnotes as well.
>
> **[5:54](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=354)** We've got ten facts.
>
> **[5:56](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=356)** We've got ten footnotes.
>
> **[5:59](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=359)** Notice our footnotes are numbered.
>
> **[6:02](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=362)** Now, let's look at that number ten.
>
> **[6:04](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=364)** That last fact.
>
> **[6:06](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=366)** "And NFL quarterback Jay Cutler."
>
> **[6:08](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=368)** So, it says, "The university boasts numerous distinguished alumni.
>
> **[6:11](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=371)** And the last part of that sentence is "and NFL quarterback Jay Cutler."
>
> **[6:16](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=376)** Ten footnote. What is footnote number ten?
>
> **[6:19](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=379)** Number ten is the university boasts numerous distinguished nominee, including Nobel Prize winners, blah blah, blah blah and NFL quarterback Jay Cutler.
>
> **[6:26](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=386)** So, it literally verbatim, essentially repeated the fact, which is fine because that was the source information I gave it, and it linked what it had output back to my original fact.
>
> **[6:42](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=402)** So, this is particularly important if you go and you number your original inputs like your original source facts that you gave it.
>
> **[6:51](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=411)** But the kind of key thing behind this is it's creating self-consistency because now I can go and reference, was that a fact in the original facts that I gave it if I had already numbered them?
>
> **[7:01](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=421)** And that's a failing in my prompting, I should have gone in the original prompt when I listed all the fun facts and I should have numbered them.
>
> **[7:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=427)** That's the thing I should have done, but I didn't.
>
> **[7:11](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=431)** But if I had, it would make it even easier.
>
> **[7:14](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=434)** But now I can go and I can say, okay, it's saying this statement.
>
> **[7:17](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=437)** It's basing it on this footnote.
>
> **[7:19](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=439)** It has the quotation from the original source material.
>
> **[7:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=441)** I can check if that quotation exists in the original source material, and if I numbered it, my check would probably be even faster.
>
> **[7:28](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=448)** Now I have to go and scan through them and make sure that is a quotation from the original source material.
>
> **[7:32](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=452)** But what I just created was self-consistency.
>
> **[7:36](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=456)** I gave it information that I knew was true.
>
> **[7:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=458)** I had it outputted in a particular format.
>
> **[7:40](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=460)** I had it create footnotes using markdown that refer back to the original prompt.
>
> **[7:45](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=465)** And I've created self-consistency.
>
> **[7:46](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=466)** And this is a powerful way to build trust in the output.
>
> **[7:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=469)** You're saying, well, it summarized a bunch of information. How do I know it's true?
>
> **[7:53](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=473)** Well, you give it the information.
>
> **[7:55](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=475)** You then ask it to put footnotes to page numbers or things like that in the bottom, and then you go and you check what it says.
>
> **[8:02](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=482)** So, if it says something there and there's a footnote, check its footnote, see if it's right.
>
> **[8:06](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=486)** You can do this other ways.
>
> **[8:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=487)** You can just have it list the page number.
>
> **[8:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=489)** But it's kind of visually nice when you do it as footnotes, a bunch of facts.
>
> **[8:13](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=493)** It helps, you know, prevent intermingling of a bunch of stuff within it, and it becomes a really powerful, simple way to provide consistency checking between the output that it created and the original input that you put into it.
>
> **[8:28](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=508)** And this is something that's so valuable.
>
> **[8:30](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=510)** So whenever somebody comes to you and they say, "well, it can never recite its sources.
>
> **[8:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=514)** It can never give you, you know, you can never trust that its facts are right."
>
> **[8:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=518)** And you can say, "yes, I can," and you can create a prompt where you give it the facts.
>
> **[8:42](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=522)** Ideally you number them, which I did not.
>
> **[8:44](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=524)** I should have known better. But you give it the facts, then you have it create a report or some other output in a template that you control with Markdown, with footnotes that refer back to the facts that you specified in the prompt.
>
> **[8:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=538)** And now you get the output and you say, "okay, let's look if it's facts are right" and you have footnotes, you go to the footnote.
>
> **[9:04](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=544)** You say is this... Here's the information that it relied on.
>
> **[9:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=547)** Is that information information that we gave it originally?
>
> **[9:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=550)** It is. Done.
>
> **[9:11](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=551)** We now have fact-checked it and we've made the output fact checkable.
>
> **[9:15](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=555)** We haven't made it to where we don't have to do due diligence.
>
> **[9:18](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=558)** We still do due diligence as human beings.
>
> **[9:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=561)** We are still going to check it and make sure it's accurate and right, because we're going to be responsible for it.
>
> **[9:25](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/elevate-your-writing-using-markdown-for-footnotes-and-citations-in-chatgpt?u=76281980&t=565)** But we now have a mechanism to do that that helps us make sure that we're getting reliable, accurate, correct outputs, that we can go back and we can point to people and tell them, "here's how I fact check it."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (1), [[ChatGPT]] (1), [[Microsoft Word|Word]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Exercise Files:** template (6)
> **Definitions:** is a  (6)
> **CLI Commands:** make (5)
> **Env Vars:** nfl (3)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)

#### [Advanced Markdown mastery: Perfect ChatGPT prompts for outstanding results](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=0)** Now, let's go and look at some more interesting things that we can do with Markdown that people don't use enough in their prompts for my opinion.
>
> **[0:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=7)** So, one of them we can do is we can start building with tables.
>
> **[0:11](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=11)** And we present so much information in, you know, large language model output, why not put it in a table?
>
> **[0:17](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=17)** Or why not always ask for it in a table or know how to format that table?
>
> **[0:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=21)** So, let's go and look at a simple example of this.
>
> **[0:23](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=23)** So, I'm going to take that original prompt building this report about Vanderbilt.
>
> **[0:26](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=26)** And I'm now going to have it insert a table of fun facts in that start of that that report.
>
> **[0:33](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=33)** And so what I've done is I've gone enough modified this prompt.
>
> **[0:36](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=36)** And if you look you'll see a placeholder now that says, <Insert Table of Key Numeric Facts>" Now, I want to talk about two aspects of what I'm doing here.
>
> **[0:44](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=44)** So, one I'm telling it what I want.
>
> **[0:47](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=47)** So, you could go and you can tell it Markdown explicitly.
>
> **[0:50](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=50)** But you can also go and do something like this where you tell it what you want, like "insert a table" and it will figure out the markdown for you.
>
> **[0:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=58)** Similarly, in the past, I had a "insert bullets of all the schools of Vanderbilt" I didn't have to show it the exact Markdown.
>
> **[1:06](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=66)** So, you can also go and do it like this.
>
> **[1:07](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=67)** Sort of semantically explain what you want, as long as you don't need fine-grained control.
>
> **[1:11](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=71)** Now, I probably could have gone and said "insert table of key facts with these headers" or columns or whatever it is that I want, and I could have done it that way as well.
>
> **[1:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=81)** So, you can kind of. you can go back and forth between explicit Markdown as well as placeholders that describe semantically like in terms of meaning, what you want, like "insert a table with these columns" and then let it figure out the Markdown for you.
>
> **[1:37](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=97)** Now, the other thing I'm doing is I'm saying, "<Insert Table of Key Numeric Facts>" And so, basically, I'm telling it the types of facts that I want.
>
> **[1:47](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=107)** I'm essentially giving it a filter of which of the many facts that are there do I want you to put into this table?
>
> **[1:54](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=114)** So, I only want a certain type of fact to be present.
>
> **[1:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=118)** And so, we can use placeholders to control the formatting.
>
> **[2:01](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=121)** We can control that formatting either explicitly by spelling out the Markdown.
>
> **[2:05](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=125)** We can do it sort of through semantic high-level explanations of like "table with these columns."
>
> **[2:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=130)** And then we can also use it to control what data or information goes into that placeholder. Essentially a filter for what should be put in there in this case numeric facts.
>
> **[2:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=141)** So, you can do so much with placeholders. They are really powerful.
>
> **[2:25](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=145)** We go through and we run this.
>
> **[2:26](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=146)** Now we get this table of key facts.
>
> **[2:29](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=149)** Now it didn't perfectly do what I want because not all of these facts are numeric.
>
> **[2:34](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=154)** Like "Cornelius Vanderbilt" is not a numeric fact.
>
> **[2:37](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=157)** So, it goes to show it won't necessarily perfectly do everything every time like you want.
>
> **[2:42](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=162)** Be aware of that.
>
> **[2:44](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=164)** It just reemphasizes the fact that you need to fact check what comes out of this thing, and that you need to make sure that it's what you want.
>
> **[2:53](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=173)** And so, you read through it, take ownership of it.
>
> **[2:55](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=175)** So, I would look at this and say, that's not a numeric fact.
>
> **[2:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=178)** I'd go to fix it, but it's done a good job overall.
>
> **[3:01](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=181)** Now, let's say I want to take more control over this.
>
> **[3:04](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=184)** I don't want to just have it produce a table, but I want to explicitly spell out the formatting for the table.
>
> **[3:11](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=191)** So, what I've done here is I've replaced where I said <Insert Table>.
>
> **[3:14](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=194)** And now what I'm doing is I'm actually building out the Markdown for that table.
>
> **[3:19](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=199)** So, my Markdown I've created a header in the table called "Fun Fact!"
>
> **[3:24](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=204)** And then I have a column for "Wow Number!"
>
> **[3:29](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=209)** And then I have a column for "Tweet".
>
> **[3:31](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=211)** And it's going to figure out based on the meaning of the table, what to fill in to tweet, which is kind of fun.
>
> **[3:36](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=216)** So, and then in the first row that I'm giving it, I say, "<Insert 3 [[Microsoft Word|Word]] Title>" So, I want roughly three-word titles, <Insert Number> and then <Insert Short Tweet>.
>
> **[3:47](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=227)** And so, basically, it's going to fill out this table with that format.
>
> **[3:51](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=231)** So, I should get a three column table out.
>
> **[3:53](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=233)** The last column should be Tweet.
>
> **[3:54](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=234)** It should have a number in the second column.
>
> **[3:56](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=236)** And it should have a fun fact in the beginning.
>
> **[3:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=238)** That's, um, a three-word title.
>
> **[4:02](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=242)** Okay.
>
> **[4:02](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=242)** How did we do?
>
> **[4:04](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=244)** We did okay.
>
> **[4:05](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=245)** We didn't get exactly... If you went back and we looked, I said three-word title.
>
> **[4:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=249)** I think it took that as an upper bound.
>
> **[4:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=250)** So, it did two-word titles for these.
>
> **[4:13](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=253)** And then it did mostly numeric facts.
>
> **[4:16](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=256)** SEC is not a numeric fact, but it did okay.
>
> **[4:18](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=258)** And then it generated tweets to go into the columns.
>
> **[4:22](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=262)** So, like let's imagine you were brainstorming.
>
> **[4:24](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=264)** You're thinking, oh, I need some social media posts.
>
> **[4:25](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=265)** Here's a bunch of facts.
>
> **[4:26](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=266)** Give me a bunch of social media posts and you want them in a table to look at all at once as tweets and what fact they're based on, or whatever it is.
>
> **[4:36](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=276)** You could have it formatted all out for you.
>
> **[4:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=278)** So, tables can be a really powerful way to get it to sort of fill in and not only go and format it a way you want, but kind of do some work for you along the way.
>
> **[4:46](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=286)** Because if you think about it, it's basically creating a bunch of tweets, but it's also showing you the input data that it's based on.
>
> **[4:52](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=292)** So, it's kind of doing more work than you think of it is necessarily doing in one prompt, like you might be used to going and saying, "okay, create a tweet based on this" or "create ten tweets," but then you don't necessarily have the correspondence, and it's formatted all kinds of weird ways.
>
> **[5:05](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=305)** Second thing I'm going to show you is kind of a fun one, particularly if maybe you're in project management or maybe you're trying to plan for your trip, or you're trying to remember what to pack, or you're trying to create a recipe or anything like that, having a checklist can be helpful.
>
> **[5:23](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=323)** And so, what we're going to do is we're going to use markdown to create a checklist.
>
> **[5:27](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=327)** Now, in this case we're going to give it a fun to do list of things to do at Vanderbilt when you visit.
>
> **[5:33](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=333)** Because we all know that you want to visit now because you've seen me do so many darn prompts related to Vanderbilt.
>
> **[5:38](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=338)** So, the rough format of this is going to be dash.
>
> **[5:42](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=342)** And then we have the empty braces, which indicates it's basically a brace, a space, and another brace, which is like a placeholder for a checkbox.
>
> **[5:50](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=350)** And then I say, "<Insert Activity on Campus Related to Fun Facts>" And then I have the footnote.
>
> **[5:55](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=355)** So again, I'm referencing back to my original facts that I gave it so I can fact check it.
>
> **[6:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=360)** And then I say, "...<Insert Up to Four More>" And so, the purpose of this is to put bounds on how many we get.
>
> **[6:08](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=368)** Ellipses are really powerful, but we can also go and sort of add notes to our ellipses so it knows yeah I want more, but I maybe not want too many more, or I want at least this many, those types of things you can go and put in ellipses.
>
> **[6:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=381)** And now we get our table and then beneath it, now we get our checklist of things we could go and do at Vanderbilt that are fun activities while we're there.
>
> **[6:31](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=391)** And then we also have, of course, the footnote so that we can go and look at and see that those activities really do exist and are things that we could actually potentially do, and we can fact check against the information that we gave it.
>
> **[6:43](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=403)** But now, we also have something that's checkable.
>
> **[6:45](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=405)** We could print this off.
>
> **[6:47](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/advanced-markdown-mastery-perfect-chatgpt-prompts-for-outstanding-results?u=76281980&t=407)** We could go and interactively do it and check them off within [[ChatGPT]] or within Claude or whatever it is that we want to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[ChatGPT]] (1)
> **UI Navigation:** go to (1), checkbox (1)
> **CLI Commands:** make (1)
> **Env Vars:** sec (1)
> **Analogies:** imagine (1)
> **Warnings:** be aware (1)

#### [Refine ChatGPT responses: Reduce hallucinations with escape valve techniques](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=0)** I want to show you a concept that's really, really helpful in many different ways within [[Large Language Models (LLM)|large language models]] and prompts, but it's really particularly helpful in templates to solve a particular problem that we just saw.
>
> **[0:12](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=12)** And that is what happens when we ask it to fit things into a template, where it's trying to put something into a hole that it doesn't fit in?
>
> **[0:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=21)** So, you can think of you've given it a whole bunch of pegs, most of them around, but one of those pegs is square.
>
> **[0:27](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=27)** But you gave it a template with a round hole.
>
> **[0:30](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=30)** What does it do?
>
> **[0:31](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=31)** How does it how does it solve that problem?
>
> **[0:33](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=33)** And you basically need to explicitly tell it what to do in that case. You need to give it an escape valve.
>
> **[0:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=39)** If it's trying to do something that just doesn't fit and doesn't work, you want to give it an out.
>
> **[0:44](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=44)** You want to give it an option of what to do.
>
> **[0:46](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=46)** Now, this is also really important with instructions. You can tell it to do something, and if you tell it to do something, it's really going to try to follow your instructions and do that thing you're asking it to do.
>
> **[0:58](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=58)** But you want to tell it what to do when it can't be done for some reason.
>
> **[1:03](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=63)** That is when you have inadvertently asked it for the square peg in a round hole.
>
> **[1:08](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=68)** What should it do?
>
> **[1:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=69)** That's what you want to do.
>
> **[1:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=70)** And that's what the escape valve is.
>
> **[1:12](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=72)** So, I'm going to go back to this prompt that I was working on with Vanderbilt and facts about Vanderbilt.
>
> **[1:18](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=78)** So, I've got all this reference material.
>
> **[1:20](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=80)** And now down at the bottom I've created a prompt and I want to focus you down on here where I've said, "For each fact, extract the numeric value into the format:" And I have, you know, a second level header of fact.
>
> **[1:32](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=92)** And then I have "insert fact".
>
> **[1:33](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=93)** And then below it I say, "insert value or n/a" meaning not applicable.
>
> **[1:39](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=99)** Now, why am I doing this?
>
> **[1:41](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=101)** Well, if I just said "insert value" or "insert numeric value," something like that, I have created a round hole and some of my facts are square because they are not numeric.
>
> **[1:54](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=114)** And so, what will happen then?
>
> **[1:56](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=116)** Well, it might just try to jam that numeric fact in or sorry, it may try to jam that fact that is not numeric into that placeholder for the template just because it wants to do what and follow the instructions and do the best it can.
>
> **[2:09](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=129)** And I under specified what to do when you can't get that thing into the part in the in the template.
>
> **[2:16](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=136)** So, what we want to do is we want to tell it, "You either put it in there or you say it's not applicable or n/a".
>
> **[2:21](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=141)** Now, I could come up with a better way of expressing this in the template, but I kind of want to show you just a very, just direct example of this.
>
> **[2:29](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=149)** So, what happens when I do this now?
>
> **[2:31](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=151)** Well, before it was going and it was creating my table and it was putting things that were non-numeric into a column that was really meant to be numeric, because it was trying to fit all the facts in.
>
> **[2:42](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=162)** Now, another escape valve I could have told it for the table is, "you don't have to fit all the facts and only put in facts that are numeric.
>
> **[2:49](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=169)** You can ignore other things." So, you want to give it escape valves about how to handle the situation when you've told it to put a square peg into a round hole.
>
> **[2:59](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=179)** In this case, the fact, location of Vanderbilt University, which is Nashville, Tennessee, it now puts in n/a, meaning not applicable because it's not a numeric fact.
>
> **[3:10](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=190)** So, by creating that escape valve, I've created a way that it can get an out when my instructions really won't work, and it's basically trying to follow my instructions to the letter.
>
> **[3:22](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=202)** It's inferring that I want all the facts introduced.
>
> **[3:26](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=206)** Now, why is it doing that?
>
> **[3:28](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=208)** Well, it doesn't have anything that tells it not to put all the facts in.
>
> **[3:32](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=212)** It doesn't know if it should just leave facts out, or does it need to include everything.
>
> **[3:37](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=217)** And I think it's kind of nice in this case, it's trying to include all the facts.
>
> **[3:40](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=220)** That's a good thing.
>
> **[3:42](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=222)** But the problem is it's trying to include all the facts and not all the facts fit the template that I've given it.
>
> **[3:48](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=228)** So, by giving it an escape valve, we've given it a way out.
>
> **[3:51](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=231)** But this is true for instructions.
>
> **[3:53](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=233)** Anytime you tell it to do something, you should tell it what to do if it can't make it work. If it can't use the facts, if it can't find something that works, you can give it an escape valve.
>
> **[4:03](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=243)** And they could be very high level instructions like, "hey, if there's a problem with this, rather than attempting the task, just tell me what the problems are," things like that.
>
> **[4:12](https://www.linkedin.com/learning/chatgpt-perfecting-your-output-with-templates-in-prompts/refine-chatgpt-responses-reduce-hallucinations-with-escape-valve-techniques?u=76281980&t=252)** So, give it an escape valve to help take control and make sure you get the output that you want.

> [!info]- Semantic Content
>
> **Exercise Files:** template (6)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (1)


## Instructor

- [[Jules White]]

## Skills Covered

- Artificial Intelligence (AI)
- ChatGPT

## Path Context

### In [[Prompt Engineering Skills for Developers]]
← [[Prompt Engineering with ChatGPT]] | **4 of 6** | [[Prompt Engineering with LangChain]] →

## Appears In

- [[Prompt Engineering Skills for Developers]]

## Related Courses

_Courses sharing skills:_

- [[Better Relationships and More Sales- Using ChatGPT to Sell]] — Artificial Intelligence (AI), ChatGPT
- [[Prompt Engineering and AI Agents with ChatGPT]] — Artificial Intelligence (AI), ChatGPT
- [[Power BI- Working Together with ChatGPT]] — Artificial Intelligence (AI), ChatGPT
- [[Learning ChatGPT for Business Analysis]] — Artificial Intelligence (AI), ChatGPT
- [[Generative AI for Data Engineering- ChatGPT Power Tips]] — Artificial Intelligence (AI), ChatGPT

---

[↑ Back to top](#)