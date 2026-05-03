---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: the-ai-driven-cybersecurity-analyst
url: "https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst"
duration_minutes: 32
duration: 32m
level: Beginner
updated: 4/2/2025
learners: 11039
skills:
  - Generative AI
  - Information Security Analysis
  - Artificial Intelligence (AI)
  - Cybersecurity Tools
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHbB9GXY_N8qw/learning-public-crop_675_1200/B4DZXPvlsNHYAY-/0/1742947114514?e=2147483647&amp;v=beta&amp;t=hUD4N88zf3HMXPSACveBYfpWi4R4sBkk-nEzJZs9bpI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Leverage AI as a Cybersecurity Analyst]]'
prev_courses:
  - '[[Understanding Artificial Intelligence Concepts And Terminology With Iso Iec 22989]]'
next_courses:
  - '[[The OWASP Top 10 for Large Language Model (LLM) Applications- An Overview]]'
path_nav: '[{"path":"Leverage AI as a Cybersecurity Analyst","position":2,"total":7,"prev":"Understanding Artificial Intelligence Concepts And Terminology With Iso Iec 22989","next":"The OWASP Top 10 for Large Language Model (LLM) Applications- An Overview"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - skill/generative-ai
  - skill/information-security-analysis
  - skill/artificial-intelligence-ai
  - skill/cybersecurity-tools
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/The%20AI-Driven%20Cybersecurity%20Analyst.md)

![The AI-Driven Cybersecurity Analyst](https://media.licdn.com/dms/image/v2/D4D0DAQHbB9GXY_N8qw/learning-public-crop_675_1200/B4DZXPvlsNHYAY-/0/1742947114514?e=2147483647&amp;v=beta&amp;t=hUD4N88zf3HMXPSACveBYfpWi4R4sBkk-nEzJZs9bpI)

# The AI-Driven Cybersecurity Analyst

> Artificial intelligence is transforming cybersecurity. Are you ready to transform with it? Learn to harness the power of AI in this course that looks at AI in both offensive and defensive security capacities. Instructor Michael Wylie shares ten tips for leveraging AI—including prompt engineering, ethical use of AI, threat detection, and LLM-driven honeypots—that will shape the next generation of c

> [LinkedIn Learning](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst) | 32m | Beginner | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [How AI is transforming cybersecurity](#how-ai-is-transforming-cybersecurity)
- [**1. AI Tips for Cybersecurity Analysts**](#1-ai-tips-for-cybersecurity-analysts) (10 videos)
  - [Prompt engineering and productivity tips for cybersecurity analysts](#prompt-engineering-and-productivity-tips-for-cybersecurity-analysts)
  - [Advanced prompt engineering and productivity tips](#advanced-prompt-engineering-and-productivity-tips)
  - [Using AI ethically and securely in cybersecurity, part 1](#using-ai-ethically-and-securely-in-cybersecurity-part-1)
  - [Using AI ethically and securely in cybersecurity, part 2](#using-ai-ethically-and-securely-in-cybersecurity-part-2)
  - [Running AI offline and locally](#running-ai-offline-and-locally)
  - [Threat actors use of AI](#threat-actors-use-of-ai)
  - [Threat detection with AI](#threat-detection-with-ai)
  - [Improve security reporting using AI](#improve-security-reporting-using-ai)
  - [AI-driven threat intelligence](#ai-driven-threat-intelligence)
  - [LLM-driven honeypots](#llm-driven-honeypots)
- [**2. Helpful Resources**](#2-helpful-resources) (1 videos)
  - [The future of cybersecurity with AI](#the-future-of-cybersecurity-with-ai)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [How AI is transforming cybersecurity](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/how-ai-is-transforming-cybersecurity?u=76281980&t=0)** - Why should we even care about AI in [[Cybersecurity]]? One of AI's greatest strengths is recognizing patterns. For example, I once spent half the day analyzing network traffic from a new malware variant, looking for patterns. As an experiment, I asked AI to analyze the same network telemetry. It was able to identify a more refined pattern On seconds. Since [[ChatGPT]] went viral, a wave of AI-powered tools have emerged, designed to be user friendly, even for those without a coding background. But with all this talk about AI as the cybersecurity superhero, it raises an important question. Are there any downsides? Like any tool, AI can be misused, and one of the biggest things to remember is that AI is only as good as the data it's trained on. It's about carefully selecting the data AI learns from, and baking ethical considerations into the development process from the very beginning. So does this mean robots are going to steal our jobs? The short answer, no, but the nature of cybersecurity jobs are evolving, and professionals will need to adapt by developing new skills, especially those that involve working alongside AI. Hi, I'm Michael Wylie. I help organizations and security professionals like you detect and respond to threats, reducing risks and preventing costly breaches. Join me in this course to learn how to lead the next generation of cybersecurity professionals, ones who leverage AI as a powerful [[Microsoft Copilot|copilot]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[ChatGPT]] (1), [[Microsoft Copilot|Copilot]] (1)
> **Analogies:** for example (1)
> **Speakers:** - why (1)


### 1. AI Tips for Cybersecurity Analysts

[↑ Back to Table of Contents](#table-of-contents)

#### [Prompt engineering and productivity tips for cybersecurity analysts](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=0)** - [Instructor] [[Prompt Engineering]]. Doesn't it sound intimidating? I'm excited to demystify prompt engineering in this video, so let's jump right in. By the end, you'll be crafting prompts that make [[Large Language Models (LLM)|large language models]] or LLMs work for you, and that's not always easy. What is prompt engineering? At its core, prompt engineering is like learning to speak AI, not in a literal sense, but in learning how to communicate effectively with LLMs. A prompt is an input you give to an AI model to elicit a specific response. It can be a question, an instruction, data, or a combination of these. Before we dive into the details of prompt engineering, it's important to understand how LLMs work at a high level. LLMs [[Microsoft Excel|excel]] at understanding token relationships, a token being a [[Microsoft Word|word]] or character, and predicting the next token in a sequence. Because these models are trained on vast amounts of text, documents, and web pages, they essentially become advanced word completers. For example, if you prompt a pre-train model with a simple phrase like prompt engineering, it might generate a list of questions or phrases similar to what you'd see in a [[Google]] Search Autocomplete. When I typed prompt engineering into Google, I get suggestions like prompt engineering jobs, prompt engineering courses, and prompt engineering for [[ChatGPT]]. Prompting a pre-trained LLM would have a similar result. But when I enter the same phrase into a more advanced trained model, I get a detailed, polished explanation of prompt engineering instead. Understanding what happens behind the scenes when interacting with AI is important.
>
> **[1:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/prompt-engineering-productivity-tips-for-cybersecurity-analysts?u=76281980&t=94)** The words you use, the order in which you place them, and the structure of your prompt can dramatically change the results. Imagine you're at a restaurant, the server asks what you'd like. You respond with something delicious. The chef will bring you food, but it might not be what you expected. Now, imagine you're more specific. I'd like something savory, preferably steak with asparagus as my vegetable. The chances of getting exactly what you want much higher. The same applies to AI. Specific well-structured prompts yield better results. To get high quality output from AI a well-engineered prompt typically includes these key elements. Instructions, what the model should do. Context, background information or relevant details. Input data, specific information for the model to process. And output indicators, the desired format or type of response. There are many acronyms like RTF, which stands for role, task, and format, and CTF, which stands for context, task, and format, designed to help remember these elements when crafting a prompt. By incorporating these elements, you'll get far more accurate and useful responses. Try it for yourself. Take a minute to experiment with prompt engineering and compare the results to how you used to interact with AI. First, craft a generic prompt, like prompt engineering. Then refine it by adding instructions, context, input data, and output indicators to see how much better the AI's response becomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (13), [[Microsoft Word|Word]] (2), [[Google]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Microsoft Excel|Excel]] (1)
> **Analogies:** imagine (2), for example (1), similar to (1)
> **Env Vars:** llm (1), rtf (1), ctf (1)
> **Definitions:** stands for (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Advanced prompt engineering and productivity tips](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=0)** - [Instructor] Now if you want to take [[Prompt Engineering]] to the next level, understanding LLM parameters and hyper parameters will help you fine tune and master your prompts. Here's some key parameters that influence AI responses. I'll walk you through it in LM Studio. First, system prompt. By adjusting the system prompt, users can control how the model reacts to different prompts, making it more informative, creative, or factual, depending on the desired outcome. A system prompt is a set of instructions or context that guides the behavior of the LLM during interactions. It lets users customize the tone and expected response style for the model based on the input. One of my favorite use cases for system prompts, sometimes referred to as pre prompts, is to help create accurate tailored threat hunting queries. When you ask an AI tool for help creating a query, it doesn't have knowledge of your system's field names or data types. Every time you interact with the AI tool, you could provide detailed information about your data schema. But if you enter the field names and data types in the system prompt, you don't need to add the context every time you interact with the chat bot. Next, temperature. Temperature controls the randomness of the AI's output. In other words, it determines how creative the AI gets in its response. Lower temperatures, for example, 0.2, leads to more focused and repetitive text. The AI plays it safe. Higher temperatures, for example, 0.8, results in more creative and diverse responses, but they can sometimes be less coherent. The AI takes risks. Now let's look at Top-K and Top-P.
>
> **[1:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=94)** Another set of important hyper parameters are Top-K and Top-P, which helps shape the AI's [[Microsoft Word|word]] selection process. Imagine you're playing a word guessing game and the AI is trying to complete your sentence. You type, "I love eating..." The AI has a huge vocabulary, but some words make more sense than others. Let's say it's algorithm ranks the following choices. Pizza, 40% chance. Burgers, 30% chance. Chocolate, 15% chance. Broccoli, 5% chance. And toothpaste, 3% chance. With Top-K sampling or K equals three, the AI will only pick from the top three choices, pizza, burgers, or chocolate. This prevents the AI from saying something odd, like, I love eating toothpaste. So Top-K ensures AI selects from the best choices, making response more natural. Top-P works similarly, but instead of picking a fixed number of top choices, like K equals three, it selects words until their combined probabilities reach a certain threshold, for example, 0.9 or 90%. If the model is confident, it might pick only three words. If confidence is spread out, it might need five or more words to reach 90%. Now, have you ever noticed AI getting a bit repetitive, stuck on a phrase or idea? Two, hyper parameters help with this are frequency penalty and presence penalty. Frequency penalty discourages the AI from repeating the same word too often. Think of it as a gentle nudge to the AI. Hey, you've used that word enough. Try something different. Presence penalty is like the big brother of frequency penalty.
>
> **[3:06](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/advanced-prompt-engineering-and-productivity-tips?u=76281980&t=186)** It applies to the entire topics or themes instead of just words. If you want to prevent AI from getting stuck on describing the same setting or idea over and over, increase the presence penalty. Try it yourself. Take a moment to pause the video and experiment with different hyper parameters. Use the prompt engineering tips and hyper parameters we've discussed and see how they change the AI's response. Did the output differ from what you typically see? Keep in mind, not every AI tool gives you access to hyper parameters. For example, [[Google]] AI Studio and LM Studio allow you to tweak these hyper parameters. However, [[ChatGPT]]'s web interface does not. To leverage hyper parameters with ChatGPT, you need to use the OpenAI's API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Prompt Engineering]] (2), [[ChatGPT]] (2), [[Google]] (1)
> **Analogies:** for example (4), imagine (1), think of it as (1)
> **Env Vars:** llm (2), api (1)
> **Versions:** 0.2 (1), 0.8 (1), 0.9 (1)
> **Definitions:** is a  (1), in other words (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Using AI ethically and securely in cybersecurity, part 1](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=0)** - [Instructor] How do we ensure that AI-powered [[Cybersecurity]] systems aren't making existing biases worse? It's a complex issue, one that the cybersecurity community is actively grappling with right now. The challenge is that AI [[Algorithms]] are often trained on historical data, which may already contain biases. If these biases go unchecked, AI can reinforce and amplify them in a way that negatively impacts cybersecurity decisions. Let's say an [[AI Security]] system is trained on historical cyber attack data. If that data shows that a higher percentage of attacks originated from a particular country, the AI may start flagging any activity from that country as suspicious, even if it's perfectly legitimate. This could lead to incorrect profiling based on location, increased false positives causing unnecessary security alerts, and discrimination in threat detection, where some users are treated differently. It's a real risk, and it highlights the need for transparency and [[Accountability]] in AI development. We must understand how AI systems make decisions, and ensure we have ways to challenge and correct those decisions if they're based on biased data. As AI continues to shape cybersecurity defenses, ensuring ethical development is more important than ever. Here are some key concerns we need to keep in mind. AI systems must provide equal protection against cyber threats. If an algorithm unfairly targets or overlooks certain users, regions, or systems, it creates unbalanced defenses and gaps in security. For example, if AI over-prioritizes threats based on past data biases, it may fail to detect new emerging threats
>
> **[1:33](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-i?u=76281980&t=93)** from previously safe sources. AI models operate as probabilistic systems, meaning they generate responses based on learned patterns, weights, and clusters of data. But if AI makes decisions that humans can't follow or could cause harm, it becomes difficult to trust its effectiveness, identify potential errors, and fix vulnerabilities in the system. A humorous yet serious example of how AI can generate a dangerous response is when [[Google]]'s AI suggested adding Elmer's glue to cheese. It's believed that the AI misinterpreted a joke or comment on Reddit where users sarcastically suggested glue to keep cheese from sliding off pizza. Of course, eating glue is hazardous and no sane person would recommend it, but this example highlights the importance of understanding how AI arrives at its conclusions. To make AI-powered cybersecurity systems truly effective, we must minimize bias in training data, and ensure transparency in AI decision making, continuously test AI outputs to catch errors before they cause harm, and incorporate human oversight so experts can verify AI-driven security measures. As we move forward, ethical AI development isn't just a goal; it's a necessity. The question isn't whether AI will be used in cybersecurity. It's how we ensure it's used responsibly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (6), [[Algorithms]] (1), [[AI Security]] (1), [[Accountability]] (1), [[Google]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Using AI ethically and securely in cybersecurity, part 2](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=0)** - [Narrator] On January 20, 2025, Chinese AI startup Deepseek released its latest model, Deepseek-R1, claiming to rival Chat GPT in capabilities while being significantly cheaper to train. By January 24th, Deepseek's popularity skyrocketed, but with its rise came a wave of malicious copycat sites exploiting eager users just as quickly. Then on January 27th, the US stock market took a massive hit. Fears that Deepseek and other Chinese AI companies could produce [[Microsoft Products|products]] faster and for less money triggered a $969 billion loss in value of US Tech stocks. By January 28th, the Deepseek mobile app had surged to the number one spot in both the [[Google]] Play and Apple App Store. On January 29th, OpenAI raised concerns, alleging that Deepseek may have inappropriately leveraged OpenAI's data to build its model. That same day, security researchers made a shocking discovery. A publicly exposed Deepseek database had leaked sensitive information, API keys, and users' chat histories. For CISOs, this was the nightmare scenario they'd long feared. Deepseek proved that AI's theoretical risks can quickly become reality. AI's rapid evolution can blindside security teams unless they stay [[Agile Development|agile]], informed, and ready to act. User input into AI tools could expose intellectual property and trade secrets to third parties. All collected data could be stored in a foreign country, where national security laws require firms to share data with government agencies, and a data breach could expose chat logs,
>
> **[1:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/using-ai-ethically-and-securely-in-cybersecurity-part-ii?u=76281980&t=94)** meaning sensitive employee inputs could now be public. But AI chatbots aren't the only risk. From hotel booking apps to accounting software, AI is everywhere, and that opens the door to data leaks. Imagine this, your company carefully vets a teleconferencing vendor for security compliance, but after approval, the vendor rolls out AI features enabled by default that analyze user conversations, video, audio, and transcripts, to train its model. Worse, there's no easy way to opt out. This actually happened when [[Zoom]] introduced AI features, catching many organizations off guard. And it's not stopping there. More software vendors are jumping on the AI bandwagon. So as a [[Cybersecurity]] analyst, your job is to protect organizations from AI tools that could unintentionally expose sensitive data and ensure AI is used securely to enhance, not endanger your work. Take a minute to pause the video and write down some ways you can help minimize AI risks within your organization. Need help getting started? How about assess risks associated with AI tools that are in use? Brainstorm ways to detect inappropriate AI use. For example, how can you tell if source code is entered into Chat GPT? And help set up secure offline AI alternatives. AI is transforming the workplace, but without the right safeguards, it can become a security nightmare. The question is, are you ready to securely use AI?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Google]] (1), [[Agile Development|Agile]] (1), [[Zoom]] (1), [[Cybersecurity]] (1)
> **Env Vars:** gpt (2), api (1)
> **Analogies:** imagine (1), for example (1)
> **Prerequisites:** getting started (1), set up (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Running AI offline and locally](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=0)** - [Instructor] By now, I hope I've convinced you that AI can be a powerful [[Microsoft Copilot|copilot]] for [[Cybersecurity]] analysts, but maybe you're concerned about [[Data Privacy]], or perhaps your company's [[Generative AI]] policy restricts tools like [[ChatGPT]]. If that's the case, running AI locally might be the answer. In this video, I'll walk you through what local AI tools are and why they matter, open-source LLMs worth exploring, and how to optimize an offline AI model for your needs. Let's dive in. So, what's a local AI tool? A local AI tool lets you harness the power of AI without sending data to a third party. When you use tools like ChatGPT, you're interacting with cloud-based AI models over the internet. While convenient, this raises concerns about [[Privacy]] and security, but there's good news. You don't have to rely on online or paid AI tools as a cybersecurity analyst. It's surprisingly easy to download a pre-trained LLM onto your laptop, a private server, or even a secure cloud instance. Platforms like [[Hugging Face]] host thousands of open-source AI models that you can explore. Open source LLMs are on the rise, and for good reason. Take [[LLaMA]] 2 and Mistral for example. These models are fast, multilingual, and design for high performance. Let's say you're analyzing cybersecurity threats across different regions. With a multilingual model, you don't need separate tools or a translator. That's a huge advantage in today's global cyber landscape. For cybersecurity professionals dealing with massive amounts of data, these models can be a game changer.
>
> **[1:34](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/running-ai-offline-and-locally?u=76281980&t=94)** Think of them as co-pilots that analyze data in different languages without ever getting tired. Once you've picked a model, you'll need to decide on the size, which refers to the number of parameters. Generally, more parameters means better performance, but there's a catch [[Hardware]] limitations. Pro tip, share your hardware specs with ChatGPT and ask which size model will run smoothly on your setup. For most laptops, a seven to 13 billion parameter model is realistic. That might sound small compared to 70 billion parameter models, but AI is evolving fast and efficiency is improving. One way you can get better output of a smaller parameter model is by using RAG or retrieval augmented generation. Think of it as giving your AI a cheat sheet before it answers your question. Instead of relying solely on general knowledge, the AI can pull specific, relevant data just like an experienced cybersecurity analyst would. This approach makes smaller models much more powerful. In fact, experiments have shown that RAG enhanced small models can outperform larger general purpose ones. Try it out. Take a moment to pause the video and explore tools for running AI models locally. Some of my favorites are [[Ollama]] and LM Studio. (bright music) By running AI locally, choosing the right model and leveraging RAG, you can unlock the power of AI capabilities all while keeping your data private. Give it a try and let me know on [[LinkedIn]] what you discover.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (5), [[ChatGPT]] (3), [[Hardware]] (2), [[Microsoft Copilot|Copilot]] (1), [[Data Privacy]] (1)
> **Env Vars:** rag (3), llm (1)
> **Analogies:** for example (1), think of it as (1), just like (1)
> **Prerequisites:** you'll need (1), setup (1)
> **Definitions:** refers to (1)
> **Best Practices:** pro tip (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Threat actors use of AI](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=0)** - [Instructor] We've focused on using AI for good in [[Cybersecurity]], but what are the threat actors up to? They aren't just sitting back and letting us take the lead with AI. They're not only aware of AI's potential, they're already using it to make their attacks more and more sophisticated. They're using AI against us. For example, one of the biggest threats in cybersecurity is [[Phishing]], which accounted for 15% of all data breaches According to the Verizon's 2024 Data Breach and Investigation Report. With AI tools like [[ChatGPT]], attackers can now create incredibly convincing phishing emails that are personalized and almost impossible to distinguish from real messages. Creating a phishing campaign which used to be pretty time consuming for attackers, is now becoming much easier and more effective thanks to AI. While the big AI models that everyone knows about have safeguards and are constantly being monitored, there are also less restricted AI models out there, such as Perplexity's uncensored model, kind of hiding in the dark corners of the internet. And the most concerning part is we're still in the early stages of all this. We're in this constant technological race with the threat actors with AI powering both sides. Another example of how threat actors are using AI is to generate malware. Tools like [[GitHub Copilot]], designed to assist developers can be exploited by attackers to create sophisticated malware, even without [[Software Development]] knowledge. So is AI ultimately going to make the cybersecurity landscape better or worse in the long run? That's the million dollar question, isn't it? The good news is that while the threats are real and they're serious,
>
> **[1:32](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-actors-use-of-ai?u=76281980&t=92)** AI is also giving the defenders a fighting chance. In fact, it's helping to level the playing field in cybersecurity. Think about smaller organizations or teams with limited resources. They often struggle to keep up with the latest threats and defenses, but AI can give them powerful tools and capabilities that they wouldn't have otherwise. If you take the time to learn how to effectively use AI, it is kind of like a superpower for the underdogs. This course is designed to help you get better at using AI for security without years of training and coding bootcamps. As AI gets more powerful and easier to access, cyber criminals will find new ways to exploit it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[Phishing]] (3), [[ChatGPT]] (1), [[GitHub Copilot]] (1), [[Software Development]] (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (1), such as (1), kind of like (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Threat detection with AI](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=0)** - [Instructor] Traditional threat detection relies on signature-based approaches, rule sets, and predefined examples to identify and mitigate potential threats. While these methods worked in the past, the evolving threat landscape is making them less effective. Signature-based detection struggles to keep up with the increasing number and sophistication of attacks, especially zero-day threats. That's where AI steps in. AI is good at spotting tiny deviations from normal behavior, subtle clues that could indicate a stealthy attack. It's like having a super-sensitive radar system that detects threats before they escalate. A recent article found that AI-based threat detection systems achieved an average detection accuracy of 92.5% across various cyber threats, with a false positive rate of just 3.2%. Machine learning [[Algorithms]] also cut response times to cyberattacks by 40%, and AI-driven [[Phishing]] prevention systems reached an impressive 95% effectiveness rate. But some people worry about relying too much on AI. What if AI makes a mistake? What if it misidentifies normal activity as a threat and shuts down an entire system? That's a real concern and an important one. But here's the thing. AI isn't meant to replace human analysts. Instead, it enhances their capabilities. Think of it as a partnership in detecting threats. AI does the heavy lifting, analyzing vast amounts of data in lightning speed, identifying patterns and flagging anomalies. Humans, on the other hand, provide critical oversight. They understand context, interpret data,
>
> **[1:33](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/threat-detection-with-ai?u=76281980&t=93)** and make the final judgment calls. Imagine a system that learns what normal looks like on your network. AI establishes a baseline and flags anything that deviates from it. This shifts [[Cybersecurity]] from reactive to proactive. Instead of responding to attacks after they happen, AI helps prevent them from occurring in the first place, and that's a game changer. Even in high-stakes situations where fully-automated AI detection isn't an option, AI can still act as a threat detection [[Microsoft Copilot|copilot]], providing valuable insights that speed up investigations. Years ago, before [[Generative AI]] was widely accessible, I spent over three hours analyzing a complex and highly obfuscated [[Powershell]] command from a client's logs. The attacker had used aliases, concatenation, whitespace, variable substitution, padding, and other evasion techniques to make analysis difficult. Fast forward to today, when I fed the same obfuscated code into an AI chatbot and asked it to decode the PowerShell. Within seconds, I had a clear explanation of the command and its purpose. That's the power of AI in cybersecurity. By working with AI, security teams can detect threats faster, smarter, and more effectively than ever before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (2), [[Powershell]] (2), [[Algorithms]] (1), [[Phishing]] (1), [[Microsoft Copilot|Copilot]] (1)
> **Analogies:** it's like (1), think of it as (1), imagine (1)
> **CLI Commands:** make (2)
> **Versions:** 92.5 (1), 3.2 (1)
> **Tools:** powershell (2)
> **Speakers:** - [instructor] (1)

#### [Improve security reporting using AI](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=0)** - [Instructor] As a [[Cybersecurity]] analyst, you're expected to create a variety of documents to support the organization. But let's be honest, writing reports isn't always the most exciting part of the job. The good news? AI can help. Let's look at some ways AI can make cybersecurity documentation easier and more effective. It can be especially helpful when it comes to [[Incident Response]] and post-incident review documentation. I've seen brilliant analysts dig through logs, find evidence and document technical details, but where many struggle is translating those findings into something business leaders can understand and act on. For example, my team once briefed a customer on a hunt. They had found unsanctioned remote desktop tools like AnyDesk being used in the network. But instead of being concerned, the customer asked them to hunt for a specific threat actor, Scattered Spider. My team was frustrated. They knew Scattered Spider frequently uses these exact remote desktop tools. The problem? They presented the facts but didn't connect the dots for the customer. The key isn't just stating the technical details, it's explaining the risk in a way that resonates with the target audience. AI can help bridge this gap by rewriting findings in a way that's clear and more impactful for different audiences. Another way AI can help is with security policies and procedures. Before AI chatbots, companies paid expensive resources or used generic templates to draft policies, often ended up with a Frankenstein document that didn't fully meet their needs. As a former virtual CISO, I spent hours customizing security policies.
>
> **[1:33](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=93)** Now, with AI and some smart [[Prompt Engineering]], I can get to the final version much faster. For example, I could ask an AI chatbot generate an acceptable use policy for a healthcare company in California that aligns with ISO 27001 and HIPPA. AI provides a strong starting point, which I can then tailor to fit the organization's needs. Check out the course handout for a more detailed example prompt. AI could also help with compliance and regulatory documentation. In my experience, up to 40% of my time was spent documenting findings and drafting customized recommendations. Identifying a security gap is easy. What takes time is researching best practices, understanding the impact, and writing tailored recommendations, especially if I'm not familiar with particular technology. With AI, I can speed up the process. I can tell it act as an internal auditor following XYZ framework. Here's the gap I found. Write a detailed recommendation. This approach saves time while ensuring recommendations are thorough and relevant. Now, let's look at executive and board level reports. One of the biggest challenges in cybersecurity, translating technical jargon into business language. AI can act as a translator, making reports more accessible to executives. Here's an example. We detected multiple SPF/DKIM misalignments and inbound email systems from a suspicious ASN correlating with recent IOC activity from a known APT group. SIEM logs indicate failed authentication attempts against O365,
>
> **[3:05](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/improve-security-reporting-using-ai?u=76281980&t=185)** and we applied YARA rules to analyze payload behavior. That's a lot to digest. I fed this update into [[ChatGPT]] and asked it to rewrite it for executives. Here's what it gave me. Our team identified and mitigated a targeted [[Phishing]] attack, attempting to compromise employee's credentials. No sensitive data was accessed, and we're enhancing email security and employee training to reduce risk. Much clearer, right? AI is changing how we approach cybersecurity documentation, making it faster, clearer, and more tailored to different audiences. Try experimenting with AI for your next report and see how much time you save.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[Incident Response]] (1), [[Prompt Engineering]] (1), [[ChatGPT]] (1), [[Phishing]] (1)
> **Env Vars:** ciso (1), iso (1), hippa (1), xyz (1), spf (1)
> **CLI Commands:** make (1), find (1), apt (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [AI-driven threat intelligence](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=0)** - [Narrator] Threat intelligence is useless unless you use it. Last year I set a goal, read more business books to become a better [[Cybersecurity]] leader. So I bought the Harvard Business Review collection, 10 books covering topics like communication strategy, emotional intelligence, and conflict resolution. And it sat next to my bed for a year, still wrapped in plastic. Throughout that year, I faced real situations where those books would've helped managing conflict, leading a growing team, and making tough decisions. But I couldn't apply any of that knowledge because I never read them. Threat intelligence works the same way. Subscribing to a threat intel service is useless if you don't read it, understand it, apply it, and take action. So how do you know if threat intel is worth using? Just remember CART. C stands for complete. It should provide enough detail to inform your decisions. And A stands for accurate. Bad intel leads to bad decisions. It should come from trusted vetted sources. R stands for relevant. The threat must matter to your organization. A campaign targeting ATMs isn't relevant to a hospital. And T stands for timely. It needs to arrive in time to make a difference. If your in intelligence meets all four, great. If not, it could be wasting your time or worse, leading you in the wrong direction. So where does AI fit in? I never read those 10 Harvard Business Review books, but what if I had someone who did someone I could quickly ask for insights whenever I needed them?
>
> **[1:33](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/ai-driven-threat-intelligence?u=76281980&t=93)** That's how AI enhances threat intelligence. Instead of manually sifting through thousands of pages of intel reports, AI helps us extract complete, accurate, relevant, and timely information instantly. Traditionally, [[Cyber Threat Intelligence (CTI)|Cyber Threat Intelligence]] or CTI relies on manual methods, analyzing data from threat feeds, reports, and raw indicators, but AI changes the game. One of my favorite ways to process large volumes of threat intel is by feeding trusted sources into Notebook LM, a research and note-taking tool from [[Google]] Labs that uses AI, specifically [[Google Gemini]], to let you understand complex topics, ask questions and get instant insights from your sources. Google calls Notebook LM a virtual research assistant. Try it for yourself. Add a few public threat Intel sources to Notebook LM. Then ask it to summarize the threats discussed in your sources. Extract IOCs from the sources and list out the TTPs from the sources. Remember, threat intelligence is only valuable if you use it. AI can help you process and apply intel faster, but it's up to you to take action. So how will you use AI to strengthen your collection, analysis and interpretation of data?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Cybersecurity]] (1), [[Cyber Threat Intelligence (CTI)|Cyber threat intelligence]] (1), [[Google Gemini]] (1)
> **Definitions:** stands for (4)
> **Env Vars:** cart (1), cti (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [LLM-driven honeypots](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=0)** - [Instructor] Honeypots probably aren't something you think about every day, and that's okay. I'm going to show you a fascinating way AI could take honeypots to the next level. This is a perfect example of how creative you can get with AI as a [[Cybersecurity]] analyst. Honeypots serve two key purposes, collecting threat intelligence and high-fidelity threat detection. For threat intelligence, organizations set up fake systems with known vulnerabilities and expose them to the internet. When attackers exploit them, security teams collect data on the tools, commands, and behaviors used. These breadcrumbs help security teams prioritize defenses. For threat detection, honeypots are deployed inside networks or as honey [[Tokens]], little traps that trigger alerts when attackers breach the system. The problem with traditional honeypots is that most of them don't fool attackers for long. They either look too perfect or remain static, unlike real systems. That's where AI can make a difference. Historically, we had low-interaction honeypots, which are basic, easy-to-identify systems, and high-interaction honeypots, more realistic, but harder to maintain. But with AI, honeypots are evolving. Instead of just mimicking a system, they can now engage with hackers dynamically, reacting, adapting, and even improvising responses. AI-powered honeypots respond to a wider range of commands, are harder to fingerprint, and keep attackers engaged longer. But how do we know AI-powered honeypots actually work? Meet shelLM, an LLM-driven, shell-based, honeypot
>
> **[1:37](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/llm-driven-honeypots?u=76281980&t=97)** designed to look and feel like a real [[Linux]] system. Researchers tested it by having 12 cybersecurity experts interact with shelLM and try to detect if it was fake. Think of it like a turning test for hackers. But instead of making AI sound human, the goal was to make it behave like a real server. The results, shelLM fooled them 90% of the time. Experts classified its responses as real Linux shell outputs in 9 out of 10 cases. This is just the beginning of how AI can revolutionize cybersecurity. Dynamic, AI-driven honeypots make deception smarter and cyber defenses stronger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (3), [[Linux]] (2), [[Tokens]] (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** shellm (3)
> **Env Vars:** llm (1)
> **Definitions:** is a  (1)
> **Analogies:** think of it like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Helpful Resources

[↑ Back to Table of Contents](#table-of-contents)

#### [The future of cybersecurity with AI](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/the-ai-driven-cybersecurity-analyst/the-future-of-cybersecurity-with-ai?u=76281980&t=1)** - Congratulations, you've reached the end of the course, but now you might be curious about what the future holds, what's coming down the pipeline in the next five to 10 years. The future is always tough, but there are definitely some trends that I think will have major impact on [[Cybersecurity]]. One thing I'm already starting to see is the rise of AI powered security operation centers. AI is doing the heavy lifting of collecting and analyzing threat intel, sifting through mountains of data, correlating events, and identifying patterns. This frees up the human analysts to focus on critical incidents, the ones that require human intuition and decision making. By completing this course, you're ready to be part of the future as an AI-driven cybersecurity analyst. Threats in AI are moving quickly, so stay ahead by connecting with me on [[LinkedIn]]. Check out my other courses on threat hunting and cybersecurity, and if you have any questions, check out the Q&A section below. Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (3), [[LinkedIn]] (1)
> **Cross-References:** in the next (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Mike Wylie]]

## Resources

- Exercise files available

## Skills Covered

- Generative AI
- Information Security Analysis
- Artificial Intelligence (AI)
- Cybersecurity Tools

## Path Context

### In [[Leverage AI as a Cybersecurity Analyst]]
← [[Understanding Artificial Intelligence Concepts And Terminology With Iso Iec 22989]] | **2 of 7** | [[The OWASP Top 10 for Large Language Model (LLM) Applications- An Overview]] →

## Appears In

- [[Leverage AI as a Cybersecurity Analyst]]

## Related Courses

_Courses sharing skills:_

- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI)
- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)