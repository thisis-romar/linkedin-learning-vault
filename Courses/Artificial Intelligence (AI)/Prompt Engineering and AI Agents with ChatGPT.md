---
type: course
cssclasses:
  - lle-course
slug: prompt-engineering-and-ai-agents-with-chatgpt
url: "https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt"
duration_minutes: 27
duration: 27m
updated: 8/7/2024
learners: 626639
skills:
  - Artificial Intelligence (AI)
  - ChatGPT
  - Prompt Engineering
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHxdj3nqXxX6g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722897951098?e=2147483647&amp;v=beta&amp;t=B_aD9_PB1EVfR0JBbxk2vGM8NFRVaRYEohpGjfzK0_g"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Getting Started with Prompt Engineering]]'
prev_courses:
  - '[[Introduction to Multimodal Prompting for Generative AI]]'
next_courses:
  - '[[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]]'
path_nav: '[{"path":"Getting Started with Prompt Engineering","position":5,"total":6,"prev":"Introduction to Multimodal Prompting for Generative AI","next":"AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-ai
  - skill/chatgpt
  - skill/prompt-engineering
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Prompt%20Engineering%20and%20AI%20Agents%20with%20ChatGPT.md)

![Prompt Engineering and AI Agents with ChatGPT](https://media.licdn.com/dms/image/v2/D4D0DAQHxdj3nqXxX6g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722897951098?e=2147483647&amp;v=beta&amp;t=B_aD9_PB1EVfR0JBbxk2vGM8NFRVaRYEohpGjfzK0_g)

# Prompt Engineering and AI Agents with ChatGPT

> Explore how OpenAI's updates transform prompt engineering with new agentic features. Learn to use variables and identifiers for reusable prompts and convert them into custom GPT agents. Master the @ mentioning system for task-specific GPTs, and discover advanced features like memory management, vision, audio processing, and custom instructions.

> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt) | 27m | 627K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (1 videos)
- **[[#1. Agentive Prompt Engineering]]** (7 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The new age of prompting
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/the-new-age-of-prompting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/the-new-age-of-prompting?u=76281980&t=0)** - ChatGPT is only a couple of years old, having been released at the end of 2020, and a lot of people don't know how to take advantage of improvements in the platform since then.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/the-new-age-of-prompting?u=76281980&t=10)** What's really changed is prompting.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/the-new-age-of-prompting?u=76281980&t=12)** The original 3.5 version focused on answering text queries.
>
> **[0:16](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/the-new-age-of-prompting?u=76281980&t=16)** Then, ChatGPT gained multimodal features with version four, so you can use documents, images, and other inputs.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/the-new-age-of-prompting?u=76281980&t=23)** With the addition of the code interpreter, ChatGPT can write Python code to process and visualize data for you.
>
> **[0:30](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/the-new-age-of-prompting?u=76281980&t=30)** Today we have enhanced memory, custom GPTs and the ability to modularize our prompting to create agentic behaviors.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/the-new-age-of-prompting?u=76281980&t=38)** So if you're still prompting like it's 2022, it's time for an update.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/the-new-age-of-prompting?u=76281980&t=42)** Let's do this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** python (1)
> **Versions:** 3.5 (1)
> **Speakers:** - chatgpt (1)


### 1. Agentive Prompt Engineering

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Prompting strategies for agentic behavior
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=0)** - I'm going to start by showing you my traditional prompting process and work on ways that we can make prompting more productive.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=7)** I call my approach the four Ts: traits, tasks, tones, and targets.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=13)** Let's say you're thinking about doing a podcast and you need to come up with some sample topics for an episode.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=19)** You might try using a prop like this, "Give me some ideas for a podcast."
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=26)** ChatGPT does a reasonable job with this, but the answer is pretty generic.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=31)** It helps to remember that ChatGPT learned to mimic human chat conversations, but a real person you chat with will understand more context about who you are and what the conversation is about.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=43)** ChatGPT, on the other hand, will only be able to complete the task with whatever information you've given it.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=49)** Let's try to improve our prompt by adding the first T, traits.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=53)** This is the role you want ChatGPT to pursue.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=57)** Let's create a new chat and type in the following, "You're a talented and experienced top artificial intelligence podcaster.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=65)** Give me some ideas for my next podcast."
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=68)** You can see that I get much better results.
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=71)** Once I add the traits I want ChatGPT to mirror, it will give you more focused results.
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=77)** Let's move on to the next T, and that's the task I'm asking it to complete.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=82)** The one I'm currently using is very vague.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=85)** Your tasks should be as specific and focused as possible.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=89)** Once again, I'll create a new chat and I'm going to try a different prompt here, "You're a talented and experienced top artificial intelligence podcaster.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=99)** Give me 10 ideas for the title of a new episode focusing on the future of AI."
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=105)** By adding more specific instructions here, like the number of ideas that we're looking for, titles, and the focus of the topic, you get better results.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=114)** For some reason ChatGPT likes to use colons when I ask it to create titles.
>
> **[1:58](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=118)** For traditional prompts, you might correct this by adding a follow-up prompt, but instead of creating a new chat, you can hit this pencil tool to edit the original prompt.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=127)** I'll add some additional instructions to not use colons in the title.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=134)** Now I'm getting much better results, but what if I don't like the options I got?
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=139)** You can use the regenerate icon rate here to get some different ideas.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=143)** Let's click on that to see some more versions.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=147)** Let's move on to another task, like adding a description for the episode.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=151)** Since ChatGPT already knows about my traits, I don't need to repeat that.
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=156)** My follow-up will be, "I'm going with #3.
>
> **[2:38](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=158)** Help me create a description.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=160)** Make it one paragraph, three sentences, no more than 300 characters, and give me three different options."
>
> **[2:47](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=167)** Sometimes when you're filling out forms, you'll need to limit it yourself to a certain amount of characters, and you can include that in your instructions.
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=175)** Let's regenerate to get some different versions.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=179)** The nice thing about ChatGPT is that anytime you regenerate, you can move back through your previous options using these arrows right here.
>
> **[3:11](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=191)** I'll be honest, I don't like ChatGPT's writing style.
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=194)** It just doesn't sound like me, so we need to use the next T, and that's the tone, which is the style of writing I would like ChatGPT to use.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=203)** I'm going to edit the previous message and I'll add something to the end.
>
> **[3:27](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=207)** I'll say use, "Straightforward and clear language, be concise, avoid hype, and use an informational style."
>
> **[3:36](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=216)** This is closer to how I would write this, but I need to add one more T, and that's for ChatGPT to consider the audience for this podcast, which I call the target.
>
> **[3:48](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=228)** Let's add some information about who this is for.
>
> **[3:52](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=232)** Again, I'll edit this version of the prompt and I'll add some additional instructions at the end.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=237)** I'll say, "The target audience is developers and data scientists who are looking for information that affects their careers."
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=244)** And you should notice a difference in the way that it is writing now.
>
> **[4:07](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/prompting-strategies-for-agentic-behavior?u=76281980&t=247)** By using the four Ts: traits, tasks, tones, and targets, your prompts will yield better results and help you build reusable agentic prompts that are more effective.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (3), for, (1), for. (1), yield (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - i (1)

#### Personalizing your prompts with custom instructions
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=0)** - Custom instructions is one of those underutilized gems in ChatGPT that will have a dramatic effect on the quality of your results.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=8)** If you go to your account profile, then click on customized ChatGPT, you'll see a couple of text boxes where you can drop in some text.
>
> **[0:16](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=16)** The first section says, what would you like ChatGPT to know about you to provide better responses.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=21)** Here, you can enter things that you want ChatGPT to know about before it answers any of your prompts.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=28)** If you look at the text of the sites, you'll see some thought starters, like, where are you based?
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=32)** What do you do for work, hobbies, et cetera.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=35)** If it sounds familiar, it's because it's a description of your traits, which is one of our four Ts, but instead of applying it to just one conversation, it will use them for all your future chats.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=47)** Here's the custom instructions that I use for myself.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=51)** I'm a master course designer with 13 years of experience building online courses for LinkedIn Learning and [Lynda.com](https://Lynda.com).
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=58)** I love technology and specialize in topics that can help others have profitable careers.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=63)** I can confidently teach artificial intelligence, full stack development, GitHub, graphic design and web design.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=69)** I want to help people learn practical skills to improve their lives.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=73)** Here's a tip.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=74)** You can go beyond traits and add all types of information or set defaults that you want ChatGPT to remember for any future chats.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=82)** Here's an example.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=84)** Always use a 16 by nine aspect ratio when creating images with Dall-E 3.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=89)** If you have the paid plan, ChatGPT generates square images by default, so I'm overriding that with this custom instruction, since I usually need wider generations.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=99)** You can also teach ChatGPT any type of knowledge or trivia that you wanted to remember.
>
> **[1:44](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=104)** Let's take a look at that.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=106)** I'll say my dog's name is Mojo.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=108)** He is a blue gray Boston Terrier.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=110)** He was born on October 10th, 2019, and I just want to emphasize one more time that this will work for any new messages, so it won't be able to recall any of this information on chats that you've created previously.
>
> **[2:03](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=123)** And we'll check this out by asking ChatGPT to draw a picture of my dog.
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=129)** Now you should note a couple of things.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=131)** First, that it drew the image at the correct aspect ratio.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=135)** Then it drew a reasonable picture of my dog remembering the breed, the age, and the color correctly.
>
> **[2:21](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=141)** Let's go back to customized ChatGPT and take a look at the second box.
>
> **[2:25](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=145)** This one says, how would you like ChatGPT to respond?
>
> **[2:29](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=149)** Here's the prompt that I use.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=151)** Avoid using verbose, indirect, or jargon heavy phrases, opt for straightforward, concise, and conversational language that is accessible and engaging to a broad audience.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=160)** Strive for simplicity, clarity, and directness in your phrasing.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=164)** It should directly engage the audience.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=166)** Use matter of fact tone with fewer adjectives and a more straightforward approach.
>
> **[2:51](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=171)** Please remain neutral.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=172)** Once again, if this sounds familiar, it's because it's another one of our Ts, the tone.
>
> **[2:58](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=178)** Most people learn to prompt by only focusing on the task at hand, but you can see that the traits and the tones are so important that OpenAI programmed this special feature just for them.
>
> **[3:10](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=190)** Notice that you can add up to 1500 characters for both of these boxes.
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=194)** You should definitely add some default traits and tones using custom instructions.
>
> **[3:19](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/personalizing-your-prompts-with-custom-instructions?u=76281980&t=199)** It will make ChatGPT more accurate and also sound more like you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default, (1)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** picture (2)
> **CLI Commands:** make (1)
> **URLs:** [lynda.com](https://lynda.com) (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)

#### Using memories to remember information
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=0)** - You can ask ChatGPT to remember things for you.
>
> **[0:03](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=3)** As you interact with the chatbot, it can automatically manage those memories, making ChatGPT more and more accurate over time.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=11)** To reach out, go back to your profile picture, then choose Settings and look for Personalization.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=17)** You can see a link to custom instructions from here as well, but then you can see that you can turn memory off and then on.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=25)** ChatGPT is going to store this information in a hidden notebook that it considers as part of all your prompts.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=31)** Memory isn't editable, but you can delete things that ChatGPT has remembered for you.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=37)** Just click on the Manage button.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=39)** You can see some of the items that ChatGPT has stored for me over time, and you can also add memories by just asking the tool to remember something.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=47)** Let's try that in a new prompt.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=49)** I'll say, "Remember that my default target audience is "developers and data scientists.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=54)** "Use language my audience is "comfortable with, but don't explicitly "mention any job titles."
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=59)** When I enter this prompt, I should see a link that says Memory updated.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=64)** If I roll over that link, you can see what it's stored in the memory system for me.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=68)** There's also a direct link to manage your memories from here.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=72)** Now it's going to take that into account as well on any new prompts that I do.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=76)** You might be wondering what the difference is between memory and custom instructions.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=81)** Memories are auto updated by ChatGPT over time, whereas custom instructions are managed by you so you have more control.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=90)** Let's try this as the next prompt.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=92)** I'll say, "Remember that my default target audience is "technologists and new users who want "to learn more about artificial intelligence."
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=100)** I'll go ahead and submit that and you'll see that the memory has also been updated.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=105)** You can see that instead of just adding this as an additional instruction, it replaced the one that was there.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=110)** You can also ask ChatGPT what it remembers about you.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=114)** Let's go ahead and type in "what do you remember about me?"
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=117)** And it'll give you a list of things that it has stored.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=120)** This auto update behavior means that sometimes ChatGPT will add, modify, or even delete previous memories without you noticing it, so it's a good idea to check on them from time to time.
>
> **[2:13](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=133)** You can also ask ChatGPT to forget something.
>
> **[2:16](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=136)** Let's ask it to "forget instructions about my target audience."
>
> **[2:20](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=140)** You'll see that memory has been updated and if I go to manage memories, that item will be gone.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=146)** Memories are going to help ChatGPT get better and better the more you use it.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-memories-to-remember-information?u=76281980&t=151)** Taking cues from your prompting to improve your results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (2)
> **UI Navigation:** click on (1), go to (1)
> **Cross-References:** go back to (1)
> **Analogies:** picture (1)
> **Speakers:** - you (1)

#### Archiving reusable chats
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=0)** - Archiving chats is another one of those underutilized gems that lets you store prompts in a special location, which is a great place to store chats, information or data you may want to reuse.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=12)** Now, as you know, prompts are auto named by ChatGPT.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=15)** If you look next to one of the pre-prompts, you can see that there is an archive item right here.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=21)** Let's go ahead and choose that.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=23)** And you'll see that the prompt will disappear from the list.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=26)** To find it again, go to your profile, and select Settings.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=29)** And look for the archive chats section right here under the General tab.
>
> **[0:33](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=33)** You can click on manage to see all of your archive chats, and you can see the one that I just archived at the very top.
>
> **[0:40](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=40)** Now, if you want to go directly to an existing chat, you can simply click on one of these links.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=46)** This will take you to the chat and give you an Unarchive button at the bottom.
>
> **[0:50](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=50)** If you click on Unarchive, the prompt will appear at the top of the list.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=54)** And now you can continue to work with this prompt as usual.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=58)** Archiving puts prompts in an easy to find location that you can pull up whenever you need to use that prompt again.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=65)** Since prompts are editable, archived prompts can be reused over and over by simply editing their messages.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=72)** Let's go ahead and rename this prompt so that we can find it later.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=76)** I'm going to call this PROMPT in capitals, and then a name like Brainstorm Episode.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=82)** That's going to make it easier to find, but we can also make it more reusable if we edit the prompt.
>
> **[1:28](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=88)** I'm going to edit this message and I'll remove the part that says, "Focusing on the future of AI."
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=94)** And I'll tell it that before you get started, ask me what the topic of the episode will be.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=100)** That way it's going to ask me the topic of the episode and I can put that in here.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=106)** And I can hit Enter.
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=107)** And it will try to give me some options.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=110)** Now, sometimes you'll get this, "Which response do you prefer?"
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=113)** I'm going to just ignore that for now because my purpose is to create this reusable prompt, which I can now archive.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=120)** And then anytime I want to reuse this, all I need to do is edit my topic right here and it will create some different responses for me.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=128)** Let's go ahead and re-archive that, and now that goes back into my archive section.
>
> **[2:13](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=133)** You can also archive prompts that include files with some information that you may want to process later.
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=139)** Now, I'm going to go to my LinkedIn profile, and one of the features that I like about LinkedIn is the ability to save your profile as a PDF file.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=147)** So I'm going to go to Resources, Save to PDF, and this will download a PDF with my profile information here.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=154)** This is what that profile looks like.
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=156)** I can use that with ChatGPT as the beginning of a reusable prompt.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=161)** I'll say, here's some information I want to use for prompting.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=164)** Don't process it yet.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=165)** Ask me what I need to do with it before going further, and now it's going to ask me what I want to do with this information.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=172)** Now we can rename this prompt.
>
> **[2:54](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=174)** I'll call it INFO, and then I'll say, this is My Bio.
>
> **[2:58](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=178)** Next, I'm going to ask a simple question to create a placeholder.
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=182)** This is what I'll edit over and over when I unarchive this prompt to get different versions of my bio.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=188)** For now, I'll just say that, "I want you to write a one sentence bio with this information."
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=194)** Now, whenever I want to reuse this information, I can just edit this message and ask for a longer bio.
>
> **[3:20](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=200)** Let's go ahead and archive this and we'll use that later.
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=204)** Sometimes I've noticed that ChatGPT will not keep certain files for a long time.
>
> **[3:29](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=209)** For more complex files, you may want to use custom GPTs, which will cover later.
>
> **[3:34](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/archiving-reusable-chats?u=76281980&t=214)** However, this would work for someone on the free plan that doesn't have access to creating custom GPTs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), continue (1)
> **CLI Commands:** find (4), make (2)
> **UI Navigation:** go to (3), click on (3)
> **Env Vars:** pdf (3), prompt (1), info (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - archiving (1)

#### Using variables and identifiers
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=0)** - For powerful reusable prompts, you can ask ChatGPT to create variables as well as internal identifiers that store information for later use.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=10)** Let's take a look at an example of how that would work.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=14)** Whenever I finish a live stream or a meeting, I end up with a lot of tabs pointing to websites that I want to feed into a link shortener so that I can have trackable short links for each episode.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=25)** To create my short links, I use an app called Switchy.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=28)** One of the features that I love about this particular app is that it allows you to bulk import a number of links using a comma separated value file, and then it processes those into custom short links for me.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=41)** I've got a great Chrome extension called TabCopy that will grab the title and the link for all of my open tabs and create a text document that I can use in a prompt.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=52)** I'm going to open that Chrome extension and copy all of these tabs into a document.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=57)** Here's what that document looks like.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=59)** I get a title as well as a link from the tab, and I want to clean up the title and make it simpler, as well as take care of some of the links that come in with a bunch of tracking information.
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=71)** Let's design that prompt.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=72)** So I'll say, "Before you get started, ask me to add a file with or paste a link of titles and links, then execute the following prompt using the file."
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=81)** I want to ask it to rewrite the title to make it simpler.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=84)** I'll say, "Rewrite the titles in this document and store them into a NEW_TITLE."
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=90)** Then I'll say, "Make the new title straightforward and informative."
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=94)** I'm going to ask that we remove any part of the old title that identifies the company or the website.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=100)** I want to keep my titles short, so I'll say, "Make sure NEW_TITLE is no more than 60 characters."
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=105)** I'm also going to ask it to not use the hyphen in the new title.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=110)** Sometimes these titles will come in with hyphens in them.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=113)** I'll also ask it to remove prefixes or postfixes in the titles that group information.
>
> **[1:58](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=118)** I'm going to ask for a couple more things, including that it removes any tracking data from the links.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=125)** I'll ask it to create a slug formatted like this.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=128)** A slug is a simple version of a link, and I'm including a pound sign here because I want each one of the links to be formatted with a number.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=137)** So I'm going to tell it to replace the number in the slug with a number starting at one, and it will increment those automatically for me.
>
> **[2:25](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=145)** I'll say that the prefix for this project is going to be TFIT.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=148)** My podcast used to be named "The Future in Tech".
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=151)** I'll also include an episode number.
>
> **[2:33](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=153)** Let's go ahead and try this out.
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=156)** So, of course, it's going to want the list of titles and links, so I'm going to copy them from the list that TabCopy created for me, and I'll paste them all in here.
>
> **[2:47](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=167)** Now I want the output to be a CSV file, so I'm going to modify my prompt, so I'll add that the output of this prompt is a CSV file with NEW_TITLE and SLUG.
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=181)** Let's go ahead and hit the Send button.
>
> **[3:06](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=186)** Now, I'll need to re-paste the links again, and you can see that it's generating the output for me, showing me the simpler titles, and then it creates a CSV file for me, which I can download.
>
> **[3:21](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=201)** You can see this is looking pretty good.
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=204)** I can also modify this so that it asks me for the two variables.
>
> **[3:28](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=208)** So I'll hit Edit Message here, and instead of hard coding the variables like this, I'm going to type, "Ask me to enter two variables.
>
> **[3:35](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=215)** First, a prefix.
>
> **[3:36](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=216)** Then once I enter that, ask me for an episode number and use that for the EP variable."
>
> **[3:43](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=223)** It should ask me for the links again, let's go ahead and paste those.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=230)** Now it wants a PREFIX for the SLUG, so I'll put in TFIT, and now it's going to ask me for the episode number.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=237)** I'll just give it a different one.
>
> **[3:58](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=238)** I'll say this is episode 50, and now it generates that for me.
>
> **[4:05](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=245)** You can create some really advanced prompts by including variables and identifiers.
>
> **[4:10](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/using-variables-and-identifiers?u=76281980&t=250)** Plus you can get ChatGPT to require certain information that feeds those variables by asking questions.

> [!info]- Semantic Content
>
> **Env Vars:** new_title (3), csv (3), tfit (2), slug (2), prefix (1)
> **Code Keywords:** let (5), this. (1), this, (1), type, (1), require (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Speakers:** - for (1)

#### Converting prompts to custom GPTs
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=0)** - Custom GPTs are only available to paid users, but they take prompting to the next level by letting you create your own versions of ChatGPT.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=9)** Let's take a look at how you can create custom GPTs with the agentic behavior we've been programming into our prompts.
>
> **[0:16](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=16)** To create custom GPTs, you can click rate here and select my GPTs.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=21)** Let's go ahead and hit the create a GPT.
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=24)** Now you can use either the create tab, which asks you a series of questions to help you build your GPT.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=31)** However, since we're interested in more adjunctive behavior, I'm going to hit the configure button.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=36)** It's divided into several parts.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=38)** Because I'm not using the create tab, it's not going to generate artwork for us.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=42)** I can upload some artwork myself, or I can ask DALL-E to generate some art for me.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=48)** But to generate that artwork, it's going to look at the rest of the form, so I'm going to wait to do that a little bit later.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=54)** First thing we'll need is a name for your GPT, so I'm going to call this short link preparer and I'm going to add a description.
>
> **[1:01](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=61)** I'll put a tool to process links and prepare them for my link shortener.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=66)** Next, the instruction section is where you would add the prompt that will control how the custom GPT behaves.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=72)** I'm going to use the same prompt that I used in the previous video.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=76)** I'll copy it from right here, and then I'll just paste the instructions right there.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=81)** The conversation starters are buttons that will show up in your ChatGPT interface.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=85)** I'm going to create a single button called Get Started.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=91)** The knowledge section is where you can upload files that relate to the current GPT.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=95)** This can be more than just information for the GPT to use, but also a sample output of how you want the work to be done.
>
> **[1:44](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=104)** Since I have a file that the previous prompt generated, I'm going to rename this sample export and then I'll feed this into my knowledge files.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=115)** I'm going to modify my prompt and sometimes it's easier to click on this button right here to see this all in a single window.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=122)** I'm going to add some instructions right here to make sure that it follows the format in the file I included called sampleexport.csv.
>
> **[2:13](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=133)** Capabilities is where you can turn features on an off.
>
> **[2:16](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=136)** If your custom GPT doesn't use a feature, you can click it off in here.
>
> **[2:20](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=140)** Our tool is not going to need web browsing or image generation, but it is going to need the code interpreter in order to export files for us.
>
> **[2:29](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=149)** If you want to, you can use ChatGPT to make a query to an external API and include that as part of your project.
>
> **[2:37](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=157)** We're not doing anything that complicated for this project, so we don't need that right now.
>
> **[2:43](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=163)** By default, conversations in custom GPTs help improve OpenAI's model, so you can click that off if you don't want that to happen.
>
> **[2:50](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=170)** Now let's go back to the top and click on the plus button right here for the icon.
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=175)** I'm going to ask it to use DALL-E and it's going to automatically read information from the form and create an icon for us.
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=182)** You can also guide the icon that it creates for you by giving it some instructions, which you can delete later.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=189)** So I'm going to click right here and add some instructions for the icons.
>
> **[3:15](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=195)** I'll go ahead and say when you create an icon using DALL-E, I don't want to use chain links, but use something that looks like a web browser.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=203)** I'll go ahead and close and then ask it to use DALL-E again.
>
> **[3:28](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=208)** Now that looks a lot better to me, so I'm going to remove that instruction since it doesn't really need it normally to process the links and I'll click the create button, and now I can choose how I want to share this GPT.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=224)** I want it to be a personal GPT, so I'll say only me and I'll hit save.
>
> **[3:49](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=229)** Now this GPT will be published and I can hit the view GPT button.
>
> **[3:54](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=234)** Let's go ahead and try to use this.
>
> **[3:56](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=236)** I'll click on the get started button and it should first ask me for the links.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=241)** I'm going to copy them from this previous prompt that I've done before and I'll paste them in here.
>
> **[4:08](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=248)** Now I want the prefix.
>
> **[4:10](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=250)** I'll go ahead and use TFIT like before and next the episode number.
>
> **[4:15](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=255)** I'll type episode 40 for this one.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=257)** You can see that it did the links correctly and it gave me a file that I can download.
>
> **[4:22](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=262)** Custom GPTs give you the option of preloading your prompt information as well as files and data.
>
> **[4:28](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/converting-prompts-to-custom-gpts?u=76281980&t=268)** It can also give you access to features that will generate documents and can be shared with others to take care of tasks you do often.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (11), dall (4), api (1), tfit (1)
> **Code Keywords:** let (4), interface (1), default, (1), delete (1), this. (1)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1), go back to (1)
> **File Paths:** sampleexport.csv (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)

#### Creating modular agentic GPTs
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=0)** - You can call custom GPTs from any other chat by using the at symbol.
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=5)** That means that your custom GPTs can be modular tools that you can call upon to take care of tasks inside existing prompts.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=13)** So if we take a look at this right here and I start a message with the at symbol, going to look through any custom GPTs that I have used in the past, including ones from the GPT store.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=25)** And you could see that I can pick the GPT that I just created, and now I can use that as part of this message.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=32)** So if I wanted to, I could paste the links right here.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=36)** So now I can enter my prefix, the episode number.
>
> **[0:45](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=45)** And although it ended up being a little more detailed in how it showed you all of the transformations, it still generated the CSV file for me right here.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=55)** So I'm going to create a similar custom GPT with slightly different behavior.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=60)** I'm going to go back into my Short Link Preparer, and right here I can hit Edit GPT to take a look at my configuration.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=68)** Now, what I want to do is just copy these instructions to create a new GPT.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=74)** So I'm going to back out of this and then go to my profile, select My GPTs, and create a new custom GPT.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=82)** I'm going to paste the instructions here.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=87)** Now, this time I don't need it to generate a CSV file, so I'm going to replace this, and I'll ask it to show me a code block with this information.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=96)** And I'm going to say the new title and then my prefix that I use for all of my short links as well as the SLUG.
>
> **[1:44](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=104)** Now I do have a file that I wanted to use that I've created right here called youtube_links.txt.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=112)** This is the format that YouTube links should be written in, so I'll make that the sample file for this project.
>
> **[2:01](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=121)** I'm also going to add some instructions for the icon that I wanted to use for this one, so I'm going to say, "When you create an icon using DALL-E, use something that looks like a video player."
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=131)** Go ahead and hit Close for the instructions, and we'll fill out the rest of the information for this one.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=137)** I'll call it YouTube Link Preparer.
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=139)** For the descriptions, I'll say, "Accepts a bunch of links and clean them up for YouTube."
>
> **[2:24](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=144)** Again, I'll just say Get Started for the conversation starters.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=147)** And I'm going to click right here to upload my YouTube links example, and then make sure that the code interpreter is on just like before.
>
> **[2:37](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=157)** And once again, I'll turn off using this conversation to train ChatGPT, and I'll go ahead and go back to the top and create the icon using DALL-E.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=168)** That looks pretty good.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=169)** I'll remove the instructions for the icons since I don't need it later.
>
> **[2:54](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=174)** And I'll go through and create this for only me and save this.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=179)** Now I can go to this GPT and use it just as before, or I can also use it as part of another conversation.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=188)** I'll call it up.
>
> **[3:10](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=190)** I'll say, "Use the same links and variables, then prepare them for YouTube using this custom GPT."
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=196)** Now, since it knew all the information about the links as well as the prefix and the episode number, it just went ahead and used that, and it gave me a nice code block that I can use to copy to YouTube.
>
> **[3:29](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=209)** In addition to making your own custom GPTs, you can go to the Explore GPTs section and find thousands of other GPTs that others have created.
>
> **[3:39](https://www.linkedin.com/learning/prompt-engineering-and-ai-agents-with-chatgpt/creating-modular-agentic-gpts?u=76281980&t=219)** Between the ability to create your own custom and modular GPTs, plus the thousands of GPTs available in the GPT store, you are ready to make artificial intelligence agents make your life and work a lot easier.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (9), csv (2), dall (2), slug (1)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** go to (3)
> **Code Keywords:** this, (1), this. (1)
> **File Paths:** youtube_links.txt (1)
> **Code Identifiers:** youtube_links (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)


## Instructor

- [[Ray Villalobos]]

## Skills Covered

- Artificial Intelligence (AI)
- ChatGPT
- Prompt Engineering

## Path Context

### In [[Getting Started with Prompt Engineering]]
← [[Introduction to Multimodal Prompting for Generative AI]] | **5 of 6** | [[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]] →

## Appears In

- [[Getting Started with Prompt Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Generative AI for Data Engineering- ChatGPT Power Tips]] — Artificial Intelligence (AI), ChatGPT, Prompt Engineering
- [[Prompting ChatGPT with Multimodal Techniques]] — Artificial Intelligence (AI), ChatGPT, Prompt Engineering
- [[Better Relationships and More Sales- Using ChatGPT to Sell]] — Artificial Intelligence (AI), ChatGPT
- [[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]] — Artificial Intelligence (AI), Prompt Engineering
- [[Power BI- Working Together with ChatGPT]] — Artificial Intelligence (AI), ChatGPT

---

[↑ Back to top](#)