---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: getting-hands-on-with-gpt-models-tips-and-tricks
url: "https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks"
duration_minutes: 49
duration: 49m
level: Advanced
updated: 7/11/2025
learners: 14050
skills:
  - OpenAI API
  - Artificial Intelligence (AI)
  - ChatGPT
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFIfHHuNXRfxw/learning-public-crop_675_1200/B4EZei_GFCHsAY-/0/1750786139288?e=2147483647&amp;v=beta&amp;t=pOiWDVmbWGXmOfuKs-uIf3tlUnTCkRTgBpRQojBLyJM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Hands-On Projects for OpenAI-Powered Apps](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Hands-On%20Projects%20for%20OpenAI-Powered%20Apps.md)'
prev_courses:
  - '[Gpt Foundations Building Ai Powered Apps](Gpt%20Foundations%20Building%20Ai%20Powered%20Apps.md)'
next_courses:
  - '[Hands-On OpenAI API- Building a Real-World Solution](Hands-On%20OpenAI%20API-%20Building%20a%20Real-World%20Solution.md)'
path_nav: '[{"path":"Hands-On Projects for OpenAI-Powered Apps","position":2,"total":5,"prev":"Gpt Foundations Building Ai Powered Apps","next":"Hands-On OpenAI API- Building a Real-World Solution"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/network-and-system-administration
  - topic/web-development
  - skill/openai-api
  - skill/artificial-intelligence-ai
  - skill/chatgpt
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Getting%20Hands-On%20with%20GPT%20Models-%20Tips%20and%20Tricks.md)

![Getting Hands-On with GPT Models: Tips and Tricks](https://media.licdn.com/dms/image/v2/D4E0DAQFIfHHuNXRfxw/learning-public-crop_675_1200/B4EZei_GFCHsAY-/0/1750786139288?e=2147483647&amp;v=beta&amp;t=pOiWDVmbWGXmOfuKs-uIf3tlUnTCkRTgBpRQojBLyJM)

# Getting Hands-On with GPT Models: Tips and Tricks

> In this course, Denys Linkov—the Head of ML at Wisedocs—dives into the world of enhanced productivity with advanced ChatGPT prompting techniques. Discover how to generate compelling content and improve daily workflows. Learn to leverage powerful methods like few-shot learning and chain of thought reasoning to bring clarity and precision to your tasks. Explore practical techniques for maximizing AI

> [LinkedIn Learning](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks) | 49m | Advanced | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Level up your ChatGPT skills](#level-up-your-chatgpt-skills)
  - [Configuring ChatGPT](#configuring-chatgpt)
- [**1. Refresh Your Basic Prompting Practice**](#1-refresh-your-basic-prompting-practice) (5 videos)
  - [Brainstorming with GPT](#brainstorming-with-gpt)
  - [Iterating with GPT](#iterating-with-gpt)
  - [Improving writing with GPT](#improving-writing-with-gpt)
  - [Challenge: Creating an ice cream advertisement](#challenge-creating-an-ice-cream-advertisement)
  - [Solution: Creating an ice cream advertisement](#solution-creating-an-ice-cream-advertisement)
- [**2. Advance Your Prompts to Improve Results**](#2-advance-your-prompts-to-improve-results) (6 videos)
  - [An overview of OpenAI GPT and Reasoning Models](#an-overview-of-openai-gpt-and-reasoning-models)
  - [Improving prompting with examples and quotes](#improving-prompting-with-examples-and-quotes)
  - [Using completion sequences and few shot](#using-completion-sequences-and-few-shot)
  - [Using chain-of-thought reasoning](#using-chain-of-thought-reasoning)
  - [Challenge: Give GPT a tricky problem](#challenge-give-gpt-a-tricky-problem)
  - [Solution: Give GPT a tricky problem](#solution-give-gpt-a-tricky-problem)
- [**3. Learn How to Code with ChatGPT**](#3-learn-how-to-code-with-chatgpt) (6 videos)
  - [Interpreting code with ChatGPT](#interpreting-code-with-chatgpt)
  - [Generating code with ChatGPT](#generating-code-with-chatgpt)
  - [Editing code with ChatGPT](#editing-code-with-chatgpt)
  - [Formatting responses as JSON with ChatGPT](#formatting-responses-as-json-with-chatgpt)
  - [Challenge: Auto formatting an API call](#challenge-auto-formatting-an-api-call)
  - [Solution: Auto formatting an API call](#solution-auto-formatting-an-api-call)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Level up your ChatGPT skills](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/level-up-your-chatgpt-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/level-up-your-chatgpt-skills?u=76281980&t=0)** - Okay, you've used GPT before and you know the basics, but you're looking to take your prompting to the next level. We'll start with some basic prompting, like generating compelling content. Then we'll advance our [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) skills to explore things like few-shot learning and chain of thought reasoning. We'll also learn how [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) can help us work with data and code, even if that's not your strong suit. Hi, I'm Denys Linkov, Head of Machine Learning at Wisedocs. I use GPT in my daily job to experiment and be more productive, and I'm excited to share my best tips with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Prompt Engineering](../../Skills/Artificial%20Intelligence%20(AI)/Prompt%20Engineering.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **Env Vars:** gpt (2)
> **Speakers:** - okay (1)

#### [Configuring ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=0)** - [Instructor] You might've used the public version of [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) going to [chatgpt.com](https://chatgpt.com). Here, you can use ChatGPT for free, but there are some limitations. You can upload data. If we click on the Attach, we get the Try Advance Features for Free notification and we can switch models going at the top left here, clicking on ChatGPT. If we create an account, we can address these concerns. So let's set up our ChatGPT environment. I've created an account and upgraded to the Plus plan. You can see in the top right over here. Clicking on the logo on Plus, I can see Upgrade Plan. So you can see here I'm on the Plus plan and there's also a Pro plan. You can see all the features by scrolling through the plans here. There's also a Business plan. So if you're working on a team, this is a good one to enable. There's also Enterprise, but you'll have to contact a sales rep for that. One of the benefits of the Business plan is that your data has additional protections on it, but we can enable some protections on our personal account. Let's go ahead and exit on the top right here. Click back on the top right here and go to Settings. Let's go to Data Controls on the left, and here we can turn off the Improve the Model for Everyone. So in this mode, if we toggle this off, we won't be sharing our information that we upload to ChatGPT to open AI for training their models. Now if we want to learn more, we can click on Learn More to open up the policies. So when you're using [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md), it's important to review the policies as they can change, and also depending on the type of content that you're uploading. Let's close that.
>
> **[1:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=92)** Now, this configuration are interactions with ChatGPT should be more private. Let's continue personalizing our account by going to Personalizations on the left here. I'm going to click on it, and I'm going to click on Memory. So by default, memory is enabled in ChatGPT, but if you don't want to use it, you can turn it off by clicking the toggle here. Now the benefit of memory is that you'll have previous context that is being used in all your responses. We can also click on Custom Instructions to provide some more context to ChatGPT on our interactions. We can add a nickname, some descriptions on what we do, some different characteristics, and so forth. I'm going to leave it as the default for now. Let's click Cancel. Now, one way that you might've interacted with ChatGPT is through the speech option. So let's click on it, click on Speech, and we have the voice here. Let's play a sample.
>
> **[2:23](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=143)** - [ChatGPT] Hello, it's lovely to meet you.
>
> **[2:26](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=146)** - [Instructor] Alright, that sounds okay. I can also click on the voice name here to select a different option. Let's stick with the default. Now, one final configuration we'll make is going to connected apps. Now here we can connect some different integrations depending on what we want to do with ChatGPT. We see [Google Drive](../../Skills/Software%20Development/Google%20Drive.md), [OneDrive](../../Skills/Cloud%20Computing/Microsoft%20OneDrive.md), [GitHub](../../Skills/Software%20Development/GitHub.md), Dropbox, and a few others. As you're using ChatGPT, these integrations might evolve, so keep an eye out. Let's close these up and go back to ChatGPT. Let's type in a prompt. What is one plus one? And hit Enter. All right, here we go, that's an answer. Now let's go ahead and try to use the voice mode. I'm going to go to the bottom right here and click Use Voice Mode. What is one plus one?
>
> **[3:13](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=193)** - [ChatGPT] One plus one is two. It's a classic.
>
> **[3:17](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/configuring-chatgpt?u=76281980&t=197)** - [Instructor] And there we go, that's the voice mode. If I just want to use dictation, I can also click on the Dictate on the bottom right. So let's ask ChatGPT, What is one plus one? And you can see here that this prompt was dictated. So now we've configured ChatGPT, and we're ready to prompt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (17), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) (1), [Onedrive](../../Skills/Cloud%20Computing/Microsoft%20OneDrive.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **UI Navigation:** click on (9), go to (3), toggle (2)
> **Speakers:** - [instructor] (3), - [chatgpt] (2)
> **CLI Commands:** make (1)
> **URLs:** [chatgpt.com](https://chatgpt.com) (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)


### 1. Refresh Your Basic Prompting Practice

[↑ Back to Table of Contents](#table-of-contents)

#### [Brainstorming with GPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=0)** - [Instructor] So we have writer's block. We're trying to brainstorm some ideas, but nothing's coming to us. Let's use [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) to help us out. I'm on [ChatGPT.com](https://ChatGPT.com) and have selected [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) in the top left corner as my model. You can click up here to double check. I'm trying to plan an ice cream fundraiser for a charity. Let's go ahead and type in a prompt. I'm going to type in brainstorm 5 ice cream fundraiser ideas. Now let's click enter. Right, here we go, we have some responses. We have Build your Own Sundae Bar, Ice Cream Eating Contest, Scoop for a Cause, Flavor Creation Contest, and an Ice Cream Silent Auction. Okay, these sound pretty good. I like the Flavor Creation Contest. This is a pretty fun idea, but I don't have that much time to prepare for this. So let's ask [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) for three simpler ideas that don't require too much prep. What are three ideas that don't require too much prep? Right, let's scroll through. We have an ice Cream Sale Table, Scoops & Go, Donation for a Cause. Alright, these are pretty good. Now, based on this iteration, I've actually come up with my own idea. What if we do a coupon book with local ice cream stores? So this will be pretty similar for Donation for a Cone Day. So let's ask ChatGPT to give us some coupon ideas. I have a new idea. Can you help me refine a coupon book for ice cream?
>
> **[1:38](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=98)** Right, here we go, we have some responses. Now, ChatGPT likes to use emojis and different headings. So you'll see that that's pretty common in the responses. Now the responses you might be getting or the ideas might be slightly different, so don't be alarmed. [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) often produce different results for different people at different times. Okay, here we go, we have some ideas here. Free items, BOGO, discounts, exclusive items, and challenge coupons. Okay, these sound pretty good. Let's actually make some challenge coupons. So let's ask ChatGPT to create an illustration of this coupon book. Can you create a sample coupon with a challenge on it? Generate an image. Now you can see here ChatGPT can generate images right in the console. We'll talk about this a little bit more in a different video, but this is just a sneak preview. All right, here we go. So this is a coupon, and this looks pretty good. Complete our ice cream trivia and get a free topping. Okay, this is great. Now to wrap up my task, I want to generate an email to send to my friends and family to come to my fundraiser. Let's type out, write an email for this coupon, book ice cream fundraiser. And hit enter. Here we go, we have the subject line, we have an introduction, we have some different values that we have within the coupon book, and we have a call to action. So this is great. I can now substitute my name, my group name, and who I'm emailing to send off this email.
>
> **[3:14](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/brainstorming-with-gpt?u=76281980&t=194)** And that's how we went from having writer's block about this fundraiser to generating an email that we can now send out all by the power of GPT-4.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (6), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (2), [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **Env Vars:** gpt (3), bogo (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **URLs:** [chatgpt.com](https://chatgpt.com) (1)
> **Speakers:** - [instructor] (1)

#### [Iterating with GPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=0)** - [Instructor] I'm hosting an event about [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) and [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md), and I'd like some feedback from a colleague, but they're on vacation. So let's use GPT to start. My goal is to iterate through an itinerary and get some feedback from [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md). Now, I've attached this starting itinerary in the exercise folder. Let me show you how to access it. You can see here we have the exercise files and we're going to go into 01 02. We're going to start with the itinerary prompt.txt. Let's go ahead and copy that. We'll head back to ChatGPT and paste it in. So here's our prompt where we have an initial itinerary and we want some feedback. Let's click enter. Okay, let's look at the results. We see some initial compliments from ChatGPT and then some areas to consider. As you can see here in the output, we have a lot of emojis and markdown to structure the text. So, we have these suggestions: it's a pretty tight timing, very early lunch, we have talks back-to-back, so participants might get tired, and no closing remarks. Now here's a revised structure. This actually looks better. We start off a little later, and then we have some breaks and have lunch at 11:00. Now what I noticed here is we're missing breakfast. So let's ask, "Can you add breakfast to the schedule?" So breakfast at 08:30, opening remarks and so forth. Now as you're interacting with ChatGPT, your output might be different, the structure might be different, or the contents. So just know that this is pretty normal. Now let's add one more lightning talk
>
> **[1:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=92)** and let's type in, "Can you add one more lightning talk "after the panel?" Okay, here we go. That's pretty good. Now the lightning talks are intro to ChatGPT, future of LLMs, and real-world applications. That's a pretty good talk. So now let's wrap this up by creating an email to send to potential executives to attend this talk. Let's say, "Can you generate an email "for this itinerary?" Let's fix that typo. This email should be for business execs, and hit enter. So you have the subject, we have the header, and we have the contents. Now this has emojis which might not be as professional, so let's ask for the emojis to be removed. "Let's remove the emojis "and make it more plain text", and hit enter. Right, here we go. So subject, we have the Dear [First Name], we have the contents. Okay, so we don't want to include the optional wrap-up, so let's say, "Let's make sure we don't tell attendees "that it's an optional wrap-up" and hit enter. So you can see here, I'm iterating, I'm brainstorming. I'm working with ChatGPT. Alright, closing remarks, that looks better. Okay, great. In this video, we learned how to iterate with GPT. We provided some initial ideas
>
> **[3:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/iterating-with-gpt?u=76281980&t=186)** and then got to our goal, which was an email invite for our professional scheduled event.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (6), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1)
> **Env Vars:** gpt (3)
> **CLI Commands:** make (2)
> **Ports:** :00 (1), :30 (1)
> **File Paths:** prompt.txt (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Improving writing with GPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=0)** - [Instructor] So I created a draft for an article, but when I wrote it, I was a little bit tired, so there might be some mistakes. In this video, we'll be covering how we can use GPT to help us rewrite some content. Let's go ahead and open the exercise files. I'm here under 01_03 and I have mistakes_article.txt open. Let's copy this and paste it into [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). You can see here I have some typos. I misspelled prevalence. If I keep scrolling down. I have [Office](../../Skills/Web%20Development/Microsoft%20Office.md) 363, not 365, and so forth. So at the top, let's type, "Can you fix the mistakes in this article," and hit enter. Okay, here we go, we see the corrections, so it's been bolded, which is quite nice, so I can see prevalence, will, driven, Office 365, and so forth. Now, what I can do is I can ask, "Can you show me the changes you made, comparing them side by side," and hit enter. Okay, this table format is very nice, and I can even copy it if I want to paste it somewhere. Now, this is a pretty cool call to action if I want to download this as a PDF or as a [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) document. I still want to keep iterating, so let's not do that yet. Now, let's ask ChatGPT to rewrite it in a more formal tone. "Can you rewrite it in a more formal tone," and hit enter. Okay, this seems more professional. This is pretty good.
>
> **[1:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-writing-with-gpt?u=76281980&t=94)** We have some larger words. We have some M dashes here, as ChatGPT loves to use, and so forth. Now, let's ask if we want to make it less formal, "Can you make it more informal, and hit enter. Now, we can see here we have a number of sayings being used, really taken off, smooth sailing, and so forth. Now, we can continue iterating and figuring out what the right tone is for this message. Depending on your corporate culture and the communication style, you can keep iterating with ChatGPT, whether you're working for a large company or a smaller startup. Now, before I publish this, I'm going to reread this article and make sure that there are no mistakes that ChatGPT has added or has missed. So overall, ChatGPT can be a great tool for iterating over your articles and correcting any mistakes. It's a great way to validate what you wrote and to make sure you don't publish with any silly mistakes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (6), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (4)
> **Env Vars:** gpt (1), pdf (1)
> **File Paths:** mistakes_article.txt (1)
> **Code Identifiers:** mistakes_article (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Challenge: Creating an ice cream advertisement](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-creating-an-ice-cream-advertisement?u=76281980&t=0)** - [Host] Your challenge for this chapter is to create a campaign ad for a new ice cream flavor. We need to do three things. The first, let's draft a list of the top five ice cream flavors. The second is let's create an [Email Marketing](../../Skills/Data%20Science/Email%20Marketing.md) campaign. And finally, let's create three social media posts. Now, you should leverage the three techniques we mentioned before, which includes brainstorming with GPT, having GPT write some copy and iterating with GPT so we can get some feedback. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Email Marketing](../../Skills/Data%20Science/Email%20Marketing.md) (1)
> **Env Vars:** gpt (3)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [host] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Creating an ice cream advertisement](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=0)** - [Instructor] Let's go through our solution for a potential ice cream ad. We'll start off with our first task, which is brainstorming five new ice cream flavors. So here in [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md), let's type out, can you create five new ice cream flavors for me? And hit Enter. Okay, Midnight Campfire, Mango Tajin Tango, Espresso Biscoff Crunch, Blueberry Basil Bliss, Salted Honeycomb Pistachio. Okay, these all sound interesting. I might've heard of some of them before, but that's okay. So let's ask ChatGPT to change out this Espresso Biscoff Crunch. Let's say, can you replace the Espresso Biscoff Crunch with another flavor? So here we're iterating to make sure we get the experience we want. Peach Lavender Shortbread. Okay, that sounds pretty good. Now, once again, ChatGPT might have generated some other flavors for you, so keep that in mind. Now let's go ahead and generate an email. So which one do I like here the most? I think I like the Midnight Campfire. So let's go ahead and say, can you generate a promotional email to ice cream stores about the Midnight Campfire flavor and hit Enter.
>
> **[1:29](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-creating-an-ice-cream-advertisement?u=76281980&t=89)** Okay, that's a pretty good header. "Midnight Campfire - A Scoop of Pure Nostalgia." Okay, I like that. So we go through, we have the important parts about it. We have a preview, that sounds good. So let's say the partnership came to light. Now we want to promote this ice cream flavor. Let's ask ChatGPT to generate three ads on social media. So let's say, can you generate three social media ads about this ice cream flavor. Let's say, let's be extra creative. Include an image for each. Hit Enter. So now ChatGPT will generate some images for us, and then we can work through this image and the copywriting. All right, so here we have the ad, "Kick Back with Midnight Campfire." Okay, that looks really good. Toasted marshmallow ice cream, chocolate fudge, graham cracker crumble. We only got one image, so let's generate some copy. Can you generate some copy for this social media ad? Okay, this is great. New Flavor Drop: Midnight Campfire. We have some emojis, we have some hashtags. That's great. And we can go through and iterate with the different ads that we have for each of these flavors. So overall, we've used the techniques that we learned in this chapter to brainstorm some ideas for ice cream flavors, generate an email and create some advertisements all while iterating through the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (5)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Advance Your Prompts to Improve Results

[↑ Back to Table of Contents](#table-of-contents)

#### [An overview of OpenAI GPT and Reasoning Models](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=0)** - [Instructor] You might have noticed in the top left we have the [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) dropdown. We have ChatGPT-4o, and then some other models. We have the o-series models, and under more models we have some more GPTs. But what do these models mean? From 2018 to 2024, OpenAI had been working on the GPT models, but starting in 2024, they released the o-series models, or reasoning models. These models, as noted in the UI, specialize in reasoning and coding tasks. Now, as you can see here, these reasoning models can also work with images. We can see o4-mini-high in here as well, saying, "Great at coding and visual reasoning." Now, modern GPT models can also take in text and image, and they generally generate text responses. They're great for general tasks, as we've been seeing, and we'll be using them for this course. o-series models are stronger at math, coding, and logic problems. They've been trained with additional [Reinforcement Learning](../../Skills/Artificial%20Intelligence%20(AI)/Reinforcement%20Learning.md) techniques, which will help the model learn on how to get to a clear answer. This is why these models are stronger coding and math, domains where verification on answers is easier. So let's ask [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) and o4-mini the same question. Let's start off with an easy one. What is one plus one? And hit enter. One plus one equals two. Check mark emoji. Okay. Now to rerun this with a different model, there's a nice UX experience here where I can hover over this refresh logo, click it, and swap to o41-mini, and here we have the result.
>
> **[1:37](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/an-overview-of-openai-gpt-and-reasoning-models?u=76281980&t=97)** Now, you might have missed it, but there's a quick thinking text that came up. Let's click refresh again. We'll do o4-mini. There we go. So this thinking mode works by the o-series models making a plan, generating some intermediate answers, and then finally showing it to a user. And this question was pretty easy. Let's ask it a harder question and see what the answers are. Let's type out, "What is the meaning of life?" And hit enter. You can see here 4o generated an answer pretty quickly. Let's generate this with o4-mini. So we saw the thinking, but only for a split second. What we can do is try another model that does more thinking, so we can select either o3 or o4-mini-high. So o4-mini-high takes more time to think about the answer. So let's click it. Here we go. We see more thinking time, so we see, it thought for a few seconds, and then here we have the answer. Now, if you've used some other [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) like [Gemini](../../Skills/Software%20Development/Gemini.md), you can see the thought outputs, but for OpenAI models, like the o-series, those are hidden from the user. Now, for this course, we'll be using the [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) family of models, but if you're facing problems that are more math- or coding-focused, you can go ahead and switch to the o-series. So now when somebody asks you what's the difference between a GPT model and an o-series model, you'll have the answer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (2), [Reinforcement Learning](../../Skills/Artificial%20Intelligence%20(AI)/Reinforcement%20Learning.md) (1), [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **Env Vars:** gpt (5)
> **UI Navigation:** dropdown (1), switch to (1)
> **Speakers:** - [instructor] (1)

#### [Improving prompting with examples and quotes](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=0)** - [Narrator] In this video, we're going to talk about using quotes and examples to reinforce the precision of our prompting. So let's ask a question that many of us have been thinking about: what is the most reliable car? So let's type it in. "What is the most reliable car?" And we'll hit Enter. So here we go. Once again, we can see the structure of [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). We have the bold, we have the emojis, and so forth. We have this overview of the most reliable brands and the most reliable cars. Now let's say we wanted this information in a list. We can ask, "Can you make this in a list format?" And hit Enter. And once again, we have this similar structure. Let's learn how we can help structure our outputs by using quotes and examples. So let's head over to the exercise files and open up 02_02. I'm going to copy in this prompt and paste it in. So here we have: "What is the most reliable car. List the top three. The list should look like car model A, car model B, car model C." Let's hit Enter. So here we go. We have this output. "The most reliable cars, 2025. Toyota Corolla, Lexus G6, and Mazda Miata. If we wanted to make it even more specific, let's say I don't want the preamble at the top here, let's say, "Only output the list." So we got a slightly unexpected result. ChatGPT decided to search the web. Now, not exactly what I'm looking for, I wasn't expecting these images, but good thing to know
>
> **[1:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/improving-prompting-with-examples-and-quotes?u=76281980&t=93)** that our interactions are not always deterministic. So let's go ahead and go back up, copy our prompt, paste it in and say, "Only output the list," and hit Enter. All right, once again, we got the images, but we just got our list too. And we also got the web sources. Now, finally, let's iterate through our prompt, paste that back in and say, "Output the list, do not search the web," and hit Enter. And there we go. So depending on the version of the model you're using, you might have to iterate on your prompt to get exactly what you're looking for. But we can use our examples and our quotes to get this information. Now, in the next video, we'll learn a couple more techniques for structuring and improving the accuracy of our prompts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (2)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### [Using completion sequences and few shot](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=0)** - [Instructor] We usually understand a concept better when someone gives us an example. LLMs work in a very similar way. Providing examples is a technique called few-shot learning. Let me show you how this can be helpful using [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). Let's go ahead and go into the Exercise Files. I'm here in 02_03, with prompts.txt open. Let's copy the first prompt, and we'll paste it in, and hit Enter. So, our task is to classify these reviews. Let's see what ChatGPT outputted. We have Positive, Negative, Positive, Negative, Neutral, Negative, Strongly Negative, Strongly Negative, and Unclassifiable. Now, this is good, but not exactly what I wanted. I want a more specific format, so let's go back and copy the second prompt. Let's paste it in. Now, in this prompt, I provide some categories that we want to classify the reviews into. I have Promoter, Neutral, Churn risk, Churned, Detractor, and Random. Let's hit Enter, and this is better. I get the responses that I want, but I still have this preamble at the top, and this follow-up message. So, let's go back and copy the third prompt. So, let's go ahead and paste it in. Now, in this case, I'm going to use few-shot learning by providing some examples that I want to use for classification. I have great product all the way to I am a cat. Now, this will help ChatGPT classify into the correct labels, and will also help with the structure of their responses.
>
> **[1:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-completion-sequences-and-few-shot?u=76281980&t=93)** So, in my prompt, I have, classify the following reviews. Here are some examples, and I provide the examples. And then I say, now classify these reviews. All right, let's hit Enter. Now, you can see here, I still got the preamble, but I got the classifications that I want. Now, these look pretty good. We use similar examples to make sure that we can go through the tricky classifications. Now, as always, I can always follow up with only return the reviews and their classifications, and hit Enter. And there we go. And that's how we can use ChatGPT for a few-shot learning to improve our task performance, and get the formatting that we want.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (4)
> **CLI Commands:** cat (1), make (1)
> **File Paths:** prompts.txt (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using chain-of-thought reasoning](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=0)** - [Instructor] Remember in school, when your teacher would ask you to explain your thinking on homework? In the LM space, this approach is called chain-of-thought reasoning, and it can be applied to improving our prompting when using AI tools. To show you how this works, let's talk about a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) puzzle that has a series of operations. Normally, [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) is really good at these puzzles, but I found one that doesn't work. Let's go ahead and grab our puzzle from exercise folder under 02_04. We'll open up the prompts. Let's copy the first prompt and go back to ChatGPT. Let's paste it in. So here, we have a question. "Take the first and last letters of these words in, 'She ate a pretzel over the sea,' and concatenate them together. Which position does the sequence 'sea' occur at?" And hit enter. So here, we have the thinking process that ChatGPT follows. In previous versions, we'd only get the answer, but since then, the models have been trained to use chain-of-thought reasoning as the default. So if we look at the answer, we can see that "sea" occurs at position zero, so using chain-of-thought reasoning, ChatGPT can get the answer. Now, let's paste in this question again and say, "Only provide the answer." So we got 10, so that's incorrect, and because ChatGPT didn't have the intermediary steps that it reasoned through earlier, it didn't get to the correct answer, so this is an example where chain-of-thought reasoning can be effective. Let's go back to our prompts. Let's copy prompt number two and paste it in.
>
> **[1:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=95)** If we want to be more explicit, we can say, "Let's think step by step" by the end of the prompt. This is how chain-of-thought reasoning was originally implemented. Let's hit enter. So you can see here, we have the different chains of thought, and we got the result. Now, this time around, we got the wrong answer, so this is why this puzzle is quite tricky. Now, let's go back to our prompts in the exercise files. Let's copy prompt number three and paste it in. In this case, we're going to use chain-of-thought reasoning with an example, so this would be chain-of-thought reasoning with one-shot learning. Let's hit enter. In our prompt, we provide a different structure of chain-of-thought reasoning. We get the first and last letters, we get the phrase after concatenating it, then we get the different positions, and we output them, and for our next question, we ask a similar one, but with a different phrase. Now, let's see the result. As we can see here, ChatGPT didn't find the sequence. You can see it right here, "let". So once again, chain-of-thought reasoning and one-shot learning doesn't always work, but we can ask ChatGPT to double check its work. "Can you double check your work?' Right, here we go. Now, it has a slightly different technique here, with the index and the string, and we have the correct result. So once again, we need to experiment with our prompts
>
> **[3:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/using-chain-of-thought-reasoning?u=76281980&t=189)** using the different techniques that we've learned. It can be one-shot learning, few-shot learning, chain-of-thought, or asking follow-up questions. Now, as mentioned earlier, this technique is so powerful that large language model providers have incorporated it as a default behavior, so now we've learned how to use chain-of-thought reasoning to improve our prompts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (7), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Cross-References:** go back to (3)
> **Definitions:** is called (1), is an  (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Give GPT a tricky problem](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-give-gpt-a-tricky-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-give-gpt-a-tricky-problem?u=76281980&t=0)** - [Instructor] [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) is quite good at solving logical problems, but can you find a way to trick it? Your challenge today has two parts. First, find a question that tricks GPT to give the wrong answer. Then rewrite your prompt using chain-of-thought learning or few-shot learning to allow GPT to solve the question correctly. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **CLI Commands:** find (2)
> **Env Vars:** gpt (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Give GPT a tricky problem](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=0)** - [Instructor] So what kind of question did you come up with? I gave GPT another text puzzle. Let's paste it in here from the exercise files. I'm here under O2_06. So in prompts.txt, let's copy first prompt. We'll paste it in. So this is a question about counting legs. We have animals, table legs, and our own legs. Let's click enter. In this prompt, I only asked for outputting the answer. Now, this answer is wrong. It should be 94, not 74. Let's go ahead and edit our prompt. Let's remove the, "Only output the answer," as we saw in the previous video and hit send. Now by default, [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) is going to output the answer using chain of thought reasoning. Now we have the correct answer. We don't count the raven's legs 'cause they're on the neighbor's property, but we do count our own legs, so that's correct. Now, to make sure we get the correct answer every time, we can use a one-shot example. Let's grab our second prompt here, copy it, and paste it in. So once again, we have the thinking process here that leverages the example we provided from the beginning. So now if we keep rerunning this prompt, we'll see that it's more consistent to the answer that we want to get. By using chain of thought reasoning and one-shot learning, we're able to get more consistent answers with GPT. And I'm also curious what kind of problem you came up with, so feel free to share on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md)
>
> **[1:32](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-give-gpt-a-tricky-problem?u=76281980&t=92)** on how you tricked ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** gpt (2), o2_06 (1)
> **Cross-References:** as we saw (1), previous video (1)
> **File Paths:** prompts.txt (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Learn How to Code with ChatGPT

[↑ Back to Table of Contents](#table-of-contents)

#### [Interpreting code with ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=0)** - [Instructor] Whether you're new to coding or a pro, you'll want to know how [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) can help you save time and teach you how to improve your skills. Right here I have some code that I grabbed from the exercise files, under 0301. So I want to know what this code does. So let's type out, "Can you explain what this code does?" and hit enter. Right, so here we have a walkthrough. We have the code, we have an explanation of what happens here. So we're going to create this line of fruits. It's going to have apple, banana, and cherry in it. And you can see here, these are three string elements. Then we're going to loop through it, with a four loop, and then print the result. And this is what we get. So that's a pretty good explanation. Now let's go back to our exercise files and copy our second prompt. So let's ask, "Explain this code," and hit enter. So this code is a little bit more complex. It uses a function called map. So let's see what GPT had to say. So first it talks about the addition, so it adds the number twice together, and it gives us an example. So this is great. So addition one returns two, addition two returns four. Then it has a two pool of numbers, this is similar to a list, one through four, and then we use the map operation. And as the explanation says, we go through each of the numbers and map the addition function onto it. And, finally, we print out the results.
>
> **[1:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/interpreting-code-with-chatgpt?u=76281980&t=96)** So we get 2, 4, 6, 8. Now we can keep asking questions, like, "What is a map in programming?" So here I have an explanation of another one, so a squaring map. And there's another term, a data structure. Okay, looks like I'm talking about the map function. Let's say, "Can you give me another example of a map function?" And here I'm iterating with chat GPT, and it's helping me to understand how to code and concepts relating to code. So another one here, I have words, I have a function to upper, which makes it uppercase, and I get the results. All right, this is great. So here we learned how we can use ChatGPT to help us in our coding journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (2)
> **Env Vars:** gpt (2)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Generating code with ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=0)** - [Instructor] You're helping out at a fruit fair and are writing down what everybody wants to eat. You realize you have a big list, but you need a final count to give to the fruit preparation staff. Let's have GPT help us out to write some code for this task. Let's open up our Exercise Files and copy Prompt 1 and go to [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). So let's take a look at this prompt, "Write some [JavaScript](../../Skills/Software%20Development/JavaScript.md) that takes in a list of fruits and counts how many there are." So JavaScript is a programming language and it can be run on a web browser. This means that ChatGPT can write this code and also run it at the same time. Let's go ahead and click Enter. Okay, here we go, we have a result. So counts fruit, we go through and we loop through the fruit and we count, and then we have an example here with the results. So example, apple, banana, apple, orange, banana, apple. We have 3, 2, 1. Okay, so this is nice, but how do I validate that this code works? So we can use one of the tools, we can click on Write or code, and now this is going to use the canvas feature. So let's go ahead and rewrite this code with [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md). So this is a new interface. We now have the code on the right and our chat interface on the left. So we have the code here, but we still can't run it. So let's say, "Can you make this a webpage that I can run?" And hit Enter.
>
> **[1:35](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=95)** Okay, so what do we have here? So this is [HTML](../../Skills/Web%20Development/HTML.md), it helps us create webpages and gives the structure. You might've seen HTML before, but if you haven't, don't worry too much. Now before explaining each of the parts, let's go to Preview to see what we have. Okay, so we have a fruit counter heading here, we have a title and we have a text box. Let's enter apple, banana, apple, and hit Count Fruits. Here we have the results. That's pretty cool. So let's go to the top right and hit Stop. We're back to the code. So you can see the heading right here with Fruit Counter, we have this input field, we have the placeholder text, and we see the function that we wrote earlier, handleCount. And here we have the code. Under the script tag where the JavaScript is run. So that's pretty cool. You might have heard of the term called [Vibe Coding](../../Skills/Software%20Development/Vibe%20Coding.md). This is what we're doing. We have a goal and we're asking the large language model to do something and then we're testing it out and then asking the model to make any changes if we have any. All right, now let's go back to our exercise files and open up the second prompt. So let's paste it in. So now we want to generate a list of 100 fruits so we can test out this function on a larger list. It's pretty annoying to type out apple, banana, orange all over again. "Generate a list of 100 fruits in a JavaScript compatible format. Have 6 different fruit types in your list." Let's hit Enter.
>
> **[3:09](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=189)** Right, there we go, so we got an error, but ChatGPT is trying to correct itself. So let's go to Preview and see what we got. So we can Count Fruits or we can Use Example Data. Let's click that. So we've got some data in here. Let's click Count Fruits. Okay, that's pretty cool. Let's try it again. Use Example Data, Count Fruits. Hmm, so this isn't what I wanted. When I click the Use Example Data button, I want us to generate a new list of fruits each time, so these values should be different. So let's write, "Every time I click the example data button, generate a new list of fruits," and hit Enter. Let's try this out. Use Example Data, Count Fruits. Use Example Data, Count Fruits. Okay, this is quite different. Now if we click Stop on the top right, we can go through and review this code. If we don't understand it, we can highlight it and click Ask ChatGPT. Let's say, "What does this code mean? Explain to me like I am a beginner," and hit Enter. Here we go. We have the explanation of the function, the declaration of the constant types of the list, apple, banana, orange, grape, kiwi, mango, and so forth. Now, if we want more advanced functionality, we can go to the bottom right and click this [Code Review](../../Skills/Software%20Development/Code%20Review.md).
>
> **[4:44](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/generating-code-with-chatgpt?u=76281980&t=284)** We have different options that we can use for coding: Code review, Port to a language, Fix bugs, Add logs, and Add comments. Let's click Port to a language, and let's do it for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and click Enter. Okay, here we go, this code is being rewritten. Let's run it. It's running in the console and we got the result. So we have many powerful tools in ChatGPT that we can use to generate, edit, and understand code. We can start off as a beginner and build some really cool stuff. Now, it's important to remember that this code might be buggy, and if we are going to go to bigger fair to count more fruits, we might want to consult a senior developer to make sure that there are no bugs. Sometimes GPT still gives us buggy code, meaning that there can be errors or mistakes, some of which that can be very subtle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Code Review](../../Skills/Software%20Development/Code%20Review.md) (2), [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1)
> **UI Navigation:** go to (6), click on (1)
> **Env Vars:** gpt (3), html (2)
> **CLI Commands:** make (3), python (1)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** exercise files (2)
> **Code Identifiers:** handlecount (1)
> **Cross-References:** go back to (1)

#### [Editing code with ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=0)** - [Instructor] Let's learn how we can use [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) to edit our code and find issues with it. I have some code here from the exercise files under 03_03 under prompt one. So with the code here, let's go to Tools and enable write or code. Now let me add the prompt. What is wrong with this code? Now the goal of this code is to find a palindrome, meaning that the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) is the same forwards and backwards. It can also be a sentence, but we'll get to that. Let's click Enter. So here we see that there are a few issues. LowerCas should actually be LowerCase, so this code wouldn't run. Next, we're told that this filter syntax is not correct, and the final part is that the regex isn't fully correct. Okay, so we have the corrected code here. So let's go back to our exercise files and copy prompt number three. So let's make sure that the [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) code runs. So let's paste it in. We go into the canvas, paste in the code and say, can you run the code to validate the is palindrome function? And hit Enter. Okay, so we got the confirmation here. And let's click View Analysis. So we have the test cases and it ran this code. Something's not right. This is different code. This is [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code, not my [JavaScript](../../Skills/Software%20Development/JavaScript.md) code. So we have to be careful.
>
> **[1:33](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=93)** Let's go to the bottom-right here and click [Code Review](../../Skills/Software%20Development/Code%20Review.md). So let's ask ChatGPT to run the code in the console. Make sure to run the JavaScript code I wrote for you. So this is a limitation of ChatGPT right now. JavaScript experience isn't as smooth. So once again, let's use a workaround. Can you create a website that lets me check palindromes? Use the code I wrote. Okay, here we go, we see my code here. We'll go to Preview and we'll enter a phrase. Let's go back to our prompts and copy, A man, a plan, a canal, Panama. And paste our test. A man, a plan, a canal, Panama. We'll hit Check. All right, so this says that this is a palindrome, but we're ignoring the semicolon here. So let's give this feedback to ChatGPT. Make sure to check for the semicolon. The first example is not a palindrome.
>
> **[2:47](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=167)** Okay, let's run this again. Hmm, not quite right. Let's hit Stop and check the code. Let's try this again. Make sure to check characters that are not alphanumeric.
>
> **[3:06](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=186)** For example, a man, a plan, a canal, Panama is not a palindrome. Because of the colon. And hit Enter. Okay, so in this case, we're going to check all the characters, not just the alphanumeric ones. And in this case, ChatGPT tells us if we want a strict or relaxed mode. So let's preview. Type in the result and hit Check. Great. Now let's use ChatGPT's suggestion. Yes, I want a strict and relaxed mode checker. Please add a button. And hit Enter. Okay, we have a dropdown, let's paste it in. So we have relaxed, check. Yes. Strict, check. No. Let's go back and grab some more test cases. So, hello world. They should fail for both, right? We don't have the same letters. Relaxed and strict, both no. And our third test case. Yes. And yes. Okay, that's great. So you can see here, we iterated with ChatGPT to create a palindrome checker. The process wasn't the smoothest, but it's an important learning journey to understand the capability of the tooling. And as we saw here, make sure to double-check the answer 'cause ChatGPT can make a mistake.
>
> **[4:40](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/editing-code-with-chatgpt?u=76281980&t=280)** And as always, it's great to have human mentorship where senior developers can review your code and provide you with more feedback.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (8), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (6), find (2), python (1)
> **UI Navigation:** go to (3), dropdown (1)
> **Best Practices:** make sure to (4)
> **Cross-References:** go back to (2), as we saw (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **Env Vars:** gpt (1)

#### [Formatting responses as JSON with ChatGPT](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=0)** - [Narrator] Data entry and [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) can be a very tedious task. Luckily, when generating and transforming data with GPT, we can specify the format of our data. One way to structure the data is with the [JSON](../../Skills/Web%20Development/JSON.md) format. JSON is a structured form of data that uses keys and values. For example, we have the recipe name and brownies, cooking time in five minutes. So on the left we have the key, and on the right we have the value. You can think about it as looking something up in a library. The key is the name of the book and the contents is the value. So let's head over to [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) to structure some data. We're going to ask ChatGPT to generate three recipes. Can you generate three recipes? And hit Enter. So we have creamy spinach and mushroom pasta, honey garlic chicken thighs, and a no-bake chocolate oatmeal cookie. Okay, that sounds pretty good. Now, this data is not very structured. If we want to use it for programming task, we'll have to manually go and reformat it. So let's say format this data as JSON and hit Enter. So here we go. We have recipes here with the contents. So this is a list and then an object. We have some instructions and we have the other recipes here. Let's say I only care about the ingredients. Let's say, can you output the ingredients as a JSON structure for each recipe?
>
> **[1:36](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/formatting-responses-as-json-with-chatgpt?u=76281980&t=96)** Let's make sure to be specific and hit Enter. Okay, here we go. We have the title, the type, the ingredients and so forth. Now, I don't really need the type here, so let's say I don't need the type and hit Enter. So we have recipes, title, ingredients, and so forth. Okay, this is great. So now we know how to ask ChatGPT to generate some data for us in a specific format. And if we don't have the data in a specific format, we can ask ChatGPT to convert the format for us to save us some time so we don't have to do some manual data entry or writing custom code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (4), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **Env Vars:** json (4), gpt (1)
> **Definitions:** is a  (2)
> **Best Practices:** the key is (1), make sure to (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Auto formatting an API call](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/challenge-auto-formatting-an-api-call?u=76281980&t=0)** - [Instructor] So this challenge is a little bit different. We're going to teach you a new concept by challenging you to learn about APIs. As a quick overview, APIs are a way to connect to data sources. Using APIs is a key part of your coding journey, but it could be a little intimidating. So your challenge today is to use GPT to extract information from an API call. Now the API call I've chosen is a weather API. Now to get you started, I provided a sample file that has an API call and some example data. Now your goal with this data is two parts. First, write a prompt that can extract the temperature for 12:00 p.m. Eastern Time and then have [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) generate some [JavaScript](../../Skills/Software%20Development/JavaScript.md) code that can make the call to the API and print all the temperatures returned. Now if you're struggling with this task, you can always ask [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) for some help. All right, this challenge is a little bit trickier, but I believe in you. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Env Vars:** api (5), gpt (2)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Auto formatting an API call](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=0)** - [Instructor] This challenge was a little trickier, but it really puts together everything that we've learned so far. Let's dive in. Let's open up the exercise files to find Prompt+API.txt under O3_06. So let's do part one of our task extracting the temperature for noon at Eastern Time. So let's go ahead and copy this text from current data all the way down until API call. Now let's paste it into [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). If we scroll up, we can see my prompt "Extract the temperature for noon by writing a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) function." I'm going to go to tools and enable write or code. So we have our Canvas interface. Let's go ahead and click enter. Alright, there we go. We have our code. Now one thing that is missing here is the actual data. So let's say "Make sure to include the data" and enter. Now as you're doing this task, your outputs might be different, but don't worry, right? Here we go. We have some data here and we're extracting the noon temperature. Now I want to make two more changes. Let's not specify the date and look through all the data, and let's make sure the data includes all of it. So let's say include "All the data and find all the noon temperatures" and hit enter. So as you can see here, coding with GPT is an iterative process. Okay, there we go. So we have this code. Let's click run in the top right
>
> **[1:34](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/solution-auto-formatting-an-api-call?u=76281980&t=94)** and see if it's the right result. Okay, there we go. We have a few different temperatures. Now let's make one more change. Let's head back to the exercise files and copied the second prompt under API call. We're going to paste this in. So now we're going to ask ChatGPT to call this API in the code to get the most up-to-date information. So here's our prompt and here's our API. Let's hit enter and here we go. So we changed our script. We're now fetching the weather data and we're extracting the noon temperatures and we can see the [Fetch](../../Skills/Web%20Development/Fetch.md) from the API here. Let's go ahead in the top right and click run. Okay, here we go. We have more no temperatures. Now with chatGPT, we are able to build the simple little application that's quite powerful. We now have an introduction to using APIs so we can build even more powerful apps. Now how cool is that? Now, as you continue coding with chatGPT, you can ask follow up questions like what is an API? What are the different [Forms](../../Skills/Web%20Development/Forms.md) of an API? And how do we format this information in different ways? And with that, we've learned the skills to build some powerful apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** api (8), o3_06 (1), gpt (1)
> **CLI Commands:** make (4), find (2), python (1)
> **Code Identifiers:** chatgpt (3)
> **UI Navigation:** scroll up (1), go to (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is an  (2)
> **File Paths:** api.txt (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/next-steps-26249246?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/getting-hands-on-with-gpt-models-tips-and-tricks/next-steps-26249246?u=76281980&t=1)** - Thank you for joining me on this adventure to learn how to get the most out of [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). OpenAI has some great resources about GPT, so you can check it out on their website at [openai.com](https://openai.com). You can also follow me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), where I share content about [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). You can also check out my other LinkedIn Learning courses, like AI Pricing and ROI or LLM Evaluation Techniques. Let's keep learning about generative AI and incorporating it into our daily lives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1)
> **Env Vars:** gpt (1), roi (1), llm (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Speakers:** - thank (1)


## Instructor

- [Denys Linkov](../../Instructors/Artificial%20Intelligence%20(AI)/Denys%20Linkov.md)

## Resources

- Exercise files available

## Skills Covered

- OpenAI API
- Artificial Intelligence (AI)
- ChatGPT

## Path Context

### In [Hands-On Projects for OpenAI-Powered Apps](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Hands-On%20Projects%20for%20OpenAI-Powered%20Apps.md)
← [Gpt Foundations Building Ai Powered Apps](Gpt%20Foundations%20Building%20Ai%20Powered%20Apps.md) | **2 of 5** | [Hands-On OpenAI API- Building a Real-World Solution](Hands-On%20OpenAI%20API-%20Building%20a%20Real-World%20Solution.md) →

## Appears In

- [Hands-On Projects for OpenAI-Powered Apps](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Hands-On%20Projects%20for%20OpenAI-Powered%20Apps.md)

## Related Courses

_Courses sharing skills:_

- [Better Relationships and More Sales- Using ChatGPT to Sell](Better%20Relationships%20and%20More%20Sales-%20Using%20ChatGPT%20to%20Sell.md) — Artificial Intelligence (AI), ChatGPT
- [Prompt Engineering and AI Agents with ChatGPT](Prompt%20Engineering%20and%20AI%20Agents%20with%20ChatGPT.md) — Artificial Intelligence (AI), ChatGPT
- [Power BI- Working Together with ChatGPT](../Data%20Science/Power%20BI-%20Working%20Together%20with%20ChatGPT.md) — Artificial Intelligence (AI), ChatGPT
- [Learning ChatGPT for Business Analysis](Learning%20ChatGPT%20for%20Business%20Analysis.md) — Artificial Intelligence (AI), ChatGPT
- [Generative AI for Data Engineering- ChatGPT Power Tips](Generative%20AI%20for%20Data%20Engineering-%20ChatGPT%20Power%20Tips.md) — Artificial Intelligence (AI), ChatGPT

---

[↑ Back to top](#)