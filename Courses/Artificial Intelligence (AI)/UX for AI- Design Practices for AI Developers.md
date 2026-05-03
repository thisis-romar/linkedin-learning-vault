---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: ux-for-ai-design-practices-for-ai-developers
url: "https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers"
duration_minutes: 59
duration: 59m
level: Advanced
updated: 8/4/2023
learners: 726358
skills:
  - Artificial Intelligence for Design
  - User Experience Design (UED)
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFiEQVxfaM3Mg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691161973383?e=2147483647&amp;v=beta&amp;t=FRnGt-pmxobjyMxUmxdoPc4yJnPX9EnL58wV6i9M-Uw"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills in AI and Machine Learning]]'
prev_courses:
  - '[[MLOps Essentials- Monitoring Model Drift and Bias]]'
next_courses:
  - '[[Foundations Of Responsible Ai]]'
path_nav: '[{"path":"Advance Your Skills in AI and Machine Learning","position":13,"total":16,"prev":"MLOps Essentials- Monitoring Model Drift and Bias","next":"Foundations Of Responsible Ai"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-for-design
  - skill/user-experience-design-ued
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/UX%20for%20AI-%20Design%20Practices%20for%20AI%20Developers.md)

![UX for AI: Design Practices for AI Developers](https://media.licdn.com/dms/image/v2/D4D0DAQFiEQVxfaM3Mg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1691161973383?e=2147483647&amp;v=beta&amp;t=FRnGt-pmxobjyMxUmxdoPc4yJnPX9EnL58wV6i9M-Uw)

# UX for AI: Design Practices for AI Developers

> AI developers are tasked with addressing a wide variety of complex challenges. They’re customer facing, too, which means their UX design interfaces need to be both ethical and effective. In this course, award-winning designer and engineer John Maeda shows you how to navigate UX design for AI applications using a thoughtful balance of design practices that leverage the power of AI models while also

> [LinkedIn Learning](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers) | 59m | Advanced | 726K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Designing for AI](#designing-for-ai)
  - [What is copilot stack?](#what-is-copilot-stack)
- [**1. Collaborative UX in The AI Copilot Stack**](#1-collaborative-ux-in-the-ai-copilot-stack) (3 videos)
  - [What is collaborative UX?](#what-is-collaborative-ux)
  - [Collaborative UX practices](#collaborative-ux-practices)
  - [Copilot stack layers](#copilot-stack-layers)
- [**2. The Titanium Tetrahedron in AI UX Matters**](#2-the-titanium-tetrahedron-in-ai-ux-matters) (8 videos)
  - [The three iron triangle dimensions](#the-three-iron-triangle-dimensions)
  - [Dimension 1: Practices for speed](#dimension-1-practices-for-speed)
  - [Semantic coding for speed](#semantic-coding-for-speed)
  - [Dimension 2: Practices for costs](#dimension-2-practices-for-costs)
  - [Semantic coding for cost](#semantic-coding-for-cost)
  - [Dimension 3: Practices for quality](#dimension-3-practices-for-quality)
  - [Dimension 4: Practices for emotion](#dimension-4-practices-for-emotion)
  - [Semantic coding for emotion](#semantic-coding-for-emotion)
- [**3. Building Appropriate Trust**](#3-building-appropriate-trust) (3 videos)
  - [Adding friction: The new math](#adding-friction-the-new-math)
  - [What's responsible technology?](#whats-responsible-technology)
  - [Semantic coding for responsible AI](#semantic-coding-for-responsible-ai)
- [**4. Conclusion**](#4-conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Designing for AI](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/designing-for-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/designing-for-ai?u=76281980&t=0)** - When I talk with businesses using this new kind of AI, they all inevitably ask how do we make an incredible UX using this [[Microsoft Copilot|copilot]] stack? Well, the answer isn't a pretty UX, it's a collaborative UX. In my course, I'm going to walk you through seven essential principles to use the copilot stack in real world applications for real people, not just developers. Hi, I'm [[John the Ripper|John]] Maeda, VP of Design and AI at [[Microsoft]]. This new kind of AI UX is nothing like we've seen in the past. Come and join me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2), [[John the Ripper|John]] (1), [[Microsoft]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - when (1)

#### [What is copilot stack?](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-is-copilot-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-is-copilot-stack?u=76281980&t=0)** - So if you were there at [[Microsoft]] Build either in the audience or attending remotely you learned about the [[Microsoft Copilot|copilot]] stack. And the copilot stack was a bit radical because it put UX at the front of it. Now, what is a copilot? It's an application using modern AI to assist you with complex cognitive tasks. There's copilots and there's plugins. The plugins are what connects a copilot with the outside world. You want to remember that copilots and plugins together are going to change how you make software. In what ways? [[User Experience (UX)|User experience]], your app architecture and your concern for safety and security. You want to remember that AI used to be about building models and the model was the product but no longer. You're building [[Microsoft Products|products]] that use the model. You're making user experiences that use the model. That's the new way of doing things. So when you build copilots you want to remember three things. They are a new development pattern, they are a different kind of architecture you're likely not used to. And lastly, they will be everywhere. You're probably using one right now. The copilot stack is deceivingly simple. There are five layers. First off, at the very bottom, there's AI infrastructure. Above that, there's foundation models. Above that in the middle is [[AI Orchestration]],
>
> **[1:34](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-is-copilot-stack?u=76281980&t=94)** [[Semantic Kernel]]. You may have taken the course. Above that, copilots are built on top of it and also plugins to connect you to the outside world. To learn more watch Chief Technology Officer, EVP of AI, Kevin Scott's talk at Build 23. So why are you here? You want to learn how to build better user experiences with copilots. Remember, the old way was producing models, the new way you're consuming models. It's very different. Old way, I'm going to build an incredible model that does AI. New way, I'm going to build an app on top of that model, I'm going to consume it. Now, once you use these models, you're going to care a lot about safety and security. Note that in the copilot stack, safety and security is not a module and it has to go throughout every layer of the stack. Now, as a developer, why do you care about this kind of AI and building with it? I don't have to convince you about that but you're going to have to use a new [[Microsoft Word|word]] collaborate. That means collaborating with your marketing partners, your product partners, your design partners, your ops partners. It's because this stuff is changing so quickly and you may be the only one in your organization who really understands the math and the process and the computational shift. So that's a lot of power comes a lot of responsibility. So with that in mind let's learn how to use
>
> **[3:11](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-is-copilot-stack?u=76281980&t=191)** the copilot stack in practical ways to improve the user experiences of your products.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (7), [[Microsoft Products|Products]] (2), [[Microsoft]] (1), [[User Experience (UX)|User experience]] (1), [[AI Orchestration]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** evp (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - so (1)


### 1. Collaborative UX in The AI Copilot Stack

[↑ Back to Table of Contents](#table-of-contents)

#### [What is collaborative UX?](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-is-collaborative-ux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-is-collaborative-ux?u=76281980&t=0)** - When you're building a [[Microsoft Copilot|copilot]], an AI copilot, it's got to be a collaborative process. You, the developer knows the technology, knows the math. Everyone else doesn't know it as well. So working together as a team, it's really important. Taking that spirit into building the UX of a copilot is key. You want to remember that when you're building a copilot the user is the pilot, and the AI is the copilot. User is boss, pilot. AI is not boss. The second thing to remember is that the copilot is only as good as the pilot. Think about it like working with a boss. Your boss, your past boss. The boss isn't good, the co-pilot's no good. The co-pilot is only as good as the human pilot. CollaboroUX as a philosophy at [[Microsoft]] has been evolving rapidly in this copilot era and there's a bunch of people working on it at Microsoft. Shout out to you all. Now, why do you care about building these experiences, these AI experiences? It's because right now, big stuff is happening. (laughs) I'm sure you've noticed since the [[ChatGPT]] sonic boom, everyone's noticing that we got to ship AI in the product right now. We need to work together. I love the emoji, the scream emoji. People think it's the "Home Alone" emoji,
>
> **[1:35](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-is-collaborative-ux?u=76281980&t=95)** but it's not. It ties back to artist Edvard Munch and his Scream painting which literally when people saw it for the first time, they thought it represented a truly insane person. This era feels like insanity in many ways and that's why we can actually bring out our worst angels in the process in "How to Speak Machine", I shared how I've noticed over time that if you're curious, you're able to be less afraid and get more inventive. Whereas when you're just afraid, you get destructive. You get afraid and destroy what is coming at you. That's going to happen for a lot of non-tech people. People who are not developers are not going to understand it. So that's why you as a developer have a pretty important responsibility as the folks spearheading these new advancements. So remember, you're building systems that need to engender trust, but not just any kind of trust. Appropriate trust, meaning trust that the pilot understands the AI copilots limitation and establishes the appropriate bounds of trust. Now, as a developer thinking about design, it may be foreign to you, but I grew up as a software engineer from MIT. I loved building things but never knew how to build things for people
>
> **[3:09](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-is-collaborative-ux?u=76281980&t=189)** and went on a journey into design world and wrote a book called "The Laws of Simplicity" 10 Laws to enable you to design better technology [[Microsoft Products|products]]. That's 2006. Over time I realized 10 laws is kind of too much. To simplify, the three laws that matter in the AI era are the law of emotion, the law of trust, and the law of failure. The law of emotion is basically taking into account; you're building these things for people. Law of trust is the fact that if you trust it, it's like a whole different level. You love it. But lastly, when you're designing things, you're going to fail sometimes. Now it turns out that the nature of this new kind of AI is about failure, some success, some failure. It's non-deterministic. You roll the dice and you hope it's right. With the right kind of engineering the right kind of use of the stack, you can up your odds. So the copilot stack is about these different layers of technology with people using the copilots. It's a new way of UX that brings the old ideas of simplicity and design into this new language of collaboration. Collaboration in your team, collaboration between pilots and their copilots.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (8), [[Microsoft]] (2), [[ChatGPT]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** mit (1)
> **Analogies:** it's like (1)
> **Speakers:** - when (1)

#### [Collaborative UX practices](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/collaborative-ux-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/collaborative-ux-practices?u=76281980&t=0)** - So with the collaborative UX remember the human is the pilot and the AI is the co-pilot. Also, remember that the AI co-pilot is only as good as a human co-pilot. Want to remember that this model is difficult to adopt because you remember the old way, commanding. And so the new way, collaborating. Commanding is, hey computer, go do this. And the computer says back, got it, boss, right away. That was command. The new way is collaborating. You're the pilot. Let's reach for this big goal. And the co-pilot saying, yeah, let's do that. That's hard. Collaboration, generative. Commanding, kind of degenerative in some ways. Now, why are we used to working with computers this old way? Because we are used to having a calculator. And with a calculator, you're like add these two numbers together, 12 and 12. 24. Now imagine if the calculator said let's collaborate on the answer. You wouldn't allow it, you just bossed it around. That's the commanding way. And the commanding way is different than collaborating. However, once we collaborate and we're reading the text on the screen we can't help but wonder, is there a person behind this?
>
> **[1:33](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/collaborative-ux-practices?u=76281980&t=93)** This is an old idea. When I was at MIT in the 80s, long time ago, right? Learning AI, I was like a teenager and I got to my AI class and it was like, oh, I dunno who this professor is. And when you're a kid you go to class and you kind of dismiss the professor. And I cut class a lot by the way. But the professor's name was Joseph Weizenbaum. Years later I realized he was the pioneer of AI chat systems. He wrote his first chat system in 1966, a chatbot called Eliza and his life was changed by making Eliza. Didn't go off and commercialize it. He instead asked extremely deep questions about what it means to have a computer program talking at you. He wrote, "What I had not realized is that extremely short exposures to a relatively simple computer program could induce powerful delusional thinking in quite normal people." That there's a human being behind that. That's the 1970s. That's the danger. And that's why collaborative UX isn't about collaborating with a sentient being, it's about, hate to be boring, the human's a pilot and the AI is a [[Microsoft Copilot|copilot]]. Let's talk about one collaborative UX pattern. It's called the AI Notice Pattern. It's an annoying thing that pops up and says, you better remember this is an AI generating this information. What's it there for? It's a reminder that you as the human have to up your critical thinking game.
>
> **[3:08](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/collaborative-ux-practices?u=76281980&t=188)** You want to ask, what came back? Okay, that was pretty good, co-pilot but let me think about it. Let me slow down and think about it. A second collaborative UX pattern is Suggested Prompts. You know, when the AI can do this many things this way when you roll the dice? Well versus these things here where it's not good at, it's not a bad idea for the copilot to say, hey pilot, why don't we do this and this? I'm good at that kind of thing. So that's what the idea of giving options is about. It's about enabling the copilot to do well with the pilot. A third collaborative UX pattern is Feedback Opportunities. You're the human and the reality is that you are the critical thinker in that duet. So you are the one that knows it's more correct and so when it isn't correct enough, give it feedback. Think of you're being a boss and one of your team members needs feedback to improve the same way. You're the pilot, you're the co-pilot. Your users need to give feedback. Good news. With just these three basic patterns, you're well on your way to becoming an expert in collaborative UX that will be practiced at [[Microsoft]]. Now remember that these patterns are grounded in the co-pilot stack, the tech stack might mind you. But let's go into those layers next to understand how they relate to these collaborative UX principles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3), [[Microsoft]] (1)
> **Definitions:** is an  (2), is a  (1)
> **Env Vars:** mit (1)
> **UI Navigation:** go to (1)
> **Analogies:** imagine (1)
> **Speakers:** - so (1)

#### [Copilot stack layers](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/copilot-stack-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/copilot-stack-layers?u=76281980&t=0)** - So the [[Microsoft Copilot|Copilot]] stack has five components and layers. In the middle there is [[AI Orchestration]]. That's to view [[Semantic Kernel]]. You know what that is, it's about sequencing things. So they follow a plan, goes through a flow. Below AI orchestration is foundation models, the reason why we're all here and curious about this new kind of AI. And below foundation models is the AI infrastructure, the [[Hardware]] that runs it all, GPU world. We go above the AI orchestration level, we have UX, we wrap it. That makes it feel like a Copilot. And we also have plugins. Plugins are things we can dock into. Let's use a car, because we all kind of know what cars are still, 'cause cars are changing so much. But anyways, let's use a car. And a car has wheels and a chassis that makes it car-like, that's the AI infrastructure. It's powered by something, gas, electricity, hydrogen, that's foundation models. Then you have AI orchestration, that's the steering and brakes, the control system. And the UX could be the dashboard, the windshield, the leather seats you sit in to feel comfortable. And lastly, plugins are those things you add to the vehicle. Maybe a way to become a submarine,
>
> **[1:34](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/copilot-stack-layers?u=76281980&t=94)** or maybe as something simple as a little LED thing in your screen. Things you buy and add on. We want to remember that in all these layers, the thing that is possibly easiest to control is the UX part. Plugins are also easy to control, you just snap them in. You don't have to build them. Think about adding something to your car, you didn't have to build that. The UX you build, it requires less AI technology. But everything below that, the AI orchestration, it's got like full-blown AI in it. The foundation models themselves, that special fuel you're using. They're both non-deterministic, meaning that you're rolling the dice. And the AI infrastructure running below it is deterministic, but wow, that's changing. Think all the GPUs powering it and new architectures being built. So the tech stack has a lot of non-determinism in it. Now, why is this a problem? Well, it's more of an opportunity to realize that, "Whoa, a new day." Because a conventional tech stack is all about consistency means quality. A good calculator, 12 plus 12, always 24. The Copilot stack, however, is non-deterministic in nature, which means that sometimes it will give you a different answer, sometimes a wrong answer. So the old way of quality, precision,
>
> **[3:11](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/copilot-stack-layers?u=76281980&t=191)** the new way of quality, imprecision, high-quality imprecision. That's why we're struggling today understanding how to build with these things. So how do we unpack that with collaborative UX? We use the famous Iron Triangle, quality, speed, and cost. And I'll tell you why in the next episode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AI Orchestration]] (5), [[Microsoft Copilot|Copilot]] (3), [[Semantic Kernel]] (1), [[Hardware]] (1)
> **Env Vars:** gpu (1), led (1)
> **CLI Commands:** snap (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Speakers:** - so (1)


### 2. The Titanium Tetrahedron in AI UX Matters

[↑ Back to Table of Contents](#table-of-contents)

#### [The three iron triangle dimensions](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/the-three-iron-triangle-dimensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/the-three-iron-triangle-dimensions?u=76281980&t=0)** - Okay, you have three collaborative UX patterns under your belt. Number one, AI noticed. Number two, suggested prompts. And number three, feedback opportunities. Why do these things matter? These patterns help to cement that pilot human, [[Microsoft Copilot|copilot]] AI relationship. Why does this relationship so important to craft? Well, you know, when you have a person you like, you want to have a good relationship, it's work, right? But what's different is that this AI thing, powered by the copilot stack is so powerful, you got to get the relationship right. And the way to reinforce it is in the [[User Experience (UX)|user experience]]. Why? Because sometimes this AI has hallucinatory behavior, what it's called, but mathematically it's just non-determinism. You don't know what to expect. So your notion of quality has to change. The old definition of quality doesn't fit this new kind of quality in this copilot stack. And also think of this as not a quality problem that has to be erased, it brings new opportunities. And so that brings us to the iron triangle, also called the prioritization triangle. I'm sure you've seen it before, quality, speed, cost. Just pick two, which you're always told. In this case, when it comes to non-deterministic quality,
>
> **[1:35](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/the-three-iron-triangle-dimensions?u=76281980&t=95)** you only can pick two. One is speed and the other is cost. It's because of the fact that you're building on a technology that is evolving so rapidly in a way that experts are saying is just going to get better. But right now, the speed is slow, and the cost, it's kind of expensive. So quality is governed by how you work with speed and cost, and how you engineer, and how you design, how you engineer the real thing to work faster and cost less and how you design the UX so that it feels faster, and it maybe makes you want to pay more for something better. This is a collaborative UX approach, and it's intrinsic to using the copilot stack. You might think it's a kind of a pain. Well, the fact is it's just new. So let's keep going. Going deeper into the copilot stack, figuring out how to manage speed and cost in clever ways.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[User Experience (UX)|User experience]] (1)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Speakers:** - okay (1)

#### [Dimension 1: Practices for speed](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-1-practices-for-speed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-1-practices-for-speed?u=76281980&t=0)** - So let's talk about speed. There was a time when computers were really slow. In particular, copying a file off of a physical mechanical floppy disc took forever. So Apple invented this simple idea based upon human perception. To discover that, if the computer says copying and you wait, you wait, you wait, and it's done. That feels like a lot more time than if it shows what's called a progress bar where it shows a line filling up over time. That was a way to make you feel like, "Oh, it's not that... It doesn't take that long at all." This is how design works. It alters perception and it makes something feel better. In the modern day, when you use something like [[ChatGPT]], what does it do? It's stream text out character by character. It looks like it's typing. Actually, it takes long to compute the entire thing, but rather than wait for it to plop all out, it's streaming character by character. So you perceptually feel like it's taking less time, but it's also a technical lift to be able to do that. So we went through three collaborative UX patterns. Let's give you a fourth, Status Updates. That's the AI being transparent to why it's maybe taking so long. Think of when you're going to like a restaurant and you're like, "Oh my gosh, when's my salad coming?"
>
> **[1:33](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-1-practices-for-speed?u=76281980&t=93)** You look at the kitchen, all the lettuce is piled up over there. "Oh, okay, it's going to take a while." So you can give status updates. "Oh, I'm doing this, I'm doing this, I'm doing this," while the thing is processing. And the [[Microsoft Copilot|Copilot]] can make you the user feel better knowing that it's not being lazy. The fifth collaborative UX pattern is to give citations for information that the Copilot generates, whenever possible. Because it turns out that the AI itself can sometimes find source material, and that source material is possibly better than just being transparent. And you could display it, and the person who is experiencing it can say, "Huh, thank you for looking this stuff up. I want to learn more." And the reason why you want that is because you want the human to be able to think harder. So the pilot should question the information coming back. And the Copilot speedily provides references that they can browse while they're doing other things. It's kind of like going to a doctor's [[Microsoft Office|office]] and the doctor's office is taking a while to get into. And there's all these health magazines. And so having these references citations available makes that weight feel so much better.
>
> **[3:09](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-1-practices-for-speed?u=76281980&t=189)** So with these kinds of collaborative UX patterns, what you can do is you can make time feel different, but most importantly, this kind of AI you can use as a developer building a Copilot to be your Copilot in building things. What does that mean? Let's jump into the code to show you how that's done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[Microsoft Office|Office]] (2), [[ChatGPT]] (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** kind of like (1)
> **Speakers:** - so (1)

#### [Semantic coding for speed](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-speed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-speed?u=76281980&t=0)** - Okay, I am in the [[GitHub]] repo for [[Semantic Kernel]]. Those of you who are one of the tens of thousands of people who have completed the Semantic Kernel intro training, you'll know that this repo exists, but you might be looking at them like there looks kind of too much for me. So some of you like you've already forked it and they're running, running, running, running, running. Well, this is about, again, UX for AI and you remember the AI notice pattern we described? Here it is laid out and it's open source because if you go to the Build 23 site, this came out just in May and you can watch the entire presentation on this very topic. But let's go to code and let us go to VS Code and going to show you something pretty special. What it is is it's the new Semantic Kernel extension and the way you get it is you go to extensions and you type in Semantic Kernel and there it is. It lets you do quick [[Prompt Engineering]] without any installation of this that GitHub repo, can just get going really quickly. Let's show you how that works. So we go to Semantic Kernel and I have different endpoints available. I want to provide my OpenAI key and let me get that key, one second.
>
> **[1:33](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-speed?u=76281980&t=93)** And this works with [[Microsoft Azure|Azure]] OpenAI or regular OpenAI. And there I have all these endpoints available. Wow, look at all these models we get to try out. And what I can then do is I can make my own functions. Let's start, let's make a function to address latency issues in UX, okay?
>
> **[2:05](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-speed?u=76281980&t=125)** This is a rumination on how to deal with the fact that models are a bit slow, okay? So the application that is being built is for customers of this type. Going to give it the type of customer as input, we'll show you how that works next. And they are being made to wait and the process is taking too long. Useful copy to provide to the customer to let them know
>
> **[2:58](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-speed?u=76281980&t=178)** all is okay. Is okay, this is basically asking for some quick copy. This is better than a quick lorem ipsum, right? Let's run that function. And you can see it in the output. It is taking that function and oh, it's asking me for input. I forgot to say within the customers, [[Banking]] in a retail location, you know that thing, they're like waiting. So you are at a bank and you've got this long line of people, dissimilar to a service, takes you long. We apologize for the wait, we are doing our best to serve you as quickly as possible, thank you for your patience. Isn't that better than lorem ipsum? Anyways you can imagine as a copy generator for things that take too long relevant to your industry, it can go to town that way. Let's say instead however, you wanted to have some quick illustration to place in context. Well, we can use these Semantic Kernel endpoints available for [[Hugging Face]] and we can use their open source text to image models to do something similar. Let's make a plugin for, let's see here, latency is a thing. Making images to surface to users so that they can happily wait if waiting is ever happy.
>
> **[4:40](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-speed?u=76281980&t=280)** If following application serves users who are blah,
>
> **[4:50](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-speed?u=76281980&t=290)** no actually this is, let me change that. Let me just jump to the conclusion. Photograph of, it's easy as that, right? Let's not overthink it. We're now going to generate let's say it is a turtle eating spinach. This would never be appropriate in a banking app folks but we're going do this and you need a quick forward position only image, and then voila, you can stick it inside your app, right? So I can load this up and there you go. Hey, turtle, eating spinach. And so that's all happening from within the Visual Studio code extension for Semantic Kernel. We found that a way for more users to more quickly create with Semantic code and also of course, it makes it easier to integrate into your actual code. So please enjoy this new tool and increase your own speed to market.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Semantic Kernel]] (7), [[GitHub]] (2), [[Banking]] (2), [[Prompt Engineering]] (1), [[Microsoft Azure|Azure]] (1)
> **UI Navigation:** go to (6)
> **Tools:** github (2), vs code (1), visual studio (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Exercise Files:** github repo (2)
> **Analogies:** imagine (1)
> **Speakers:** - okay (1)

#### [Dimension 2: Practices for costs](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-2-practices-for-costs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-2-practices-for-costs?u=76281980&t=0)** - So we covered speed which is a fundamental thing that designer is good at working with. It's about altering perception. I thought it was going to take that long, but it felt so quick. Now, we're going to jump into cost. Cost is a little harder to fake. You know, that's more expensive than that thing over there. But don't forget, developers love hard problems. So consider all of these cool new open AI models, DaVinci, [[GPT-4]]. But DaVinci had its predecessor, Curie. It's predecessor, Babbage, and ADA. Get it ABCD, A, older, D, newer. ADA is much cheaper to use than DaVinci. And so, the trick for engineers today, is figure out how to basically make a cocktail out of using these different models. Now, that brings us to the Sixth Collaborative UX Pattern. It is the invisible craft. This means, you as a developer are doing some pretty strange things in the [[Microsoft Copilot|copilot]] stack to reduce costs. And in reality, you're not going to get a lot of credit for... Unless, you actually move the needle, so it costs less. But in doing so, you're trying to match quality to costs. This is very common in the world of Japanese craftspeople. Like if you've ever been to Japan,
>
> **[1:36](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-2-practices-for-costs?u=76281980&t=96)** and looked at what gets made there, it's at a whole different level. It is engineering at its finest. And cleverness and everything we love about making things. But it's also the power of a brand narrative to understand the story behind everything is key. So we're going to ask questions about quality in the cost dimension, and get our copilot making skills to help us tell stories about it, so people appreciate what happened behind the scenes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2), [[GPT-4]] (1)
> **Env Vars:** ada (2), gpt (1), abcd (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** we covered (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - so (1)

#### [Semantic coding for cost](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-cost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-cost?u=76281980&t=0)** - [Instructor] Okay, we're back in the code, and we're worried about cost, and cost correlates to a lot of things in the AI world, especially in the model usage because it costs [[Tokens]] to use them. You may be using an open source modeling locally, so you're like, ah, no problem. But it is these incredibly powerful foundation models that you really like using, and they cost per token. So you're sitting there, maybe you're by yourself. You don't have like an architect to work with you. That's most people, right? And wouldn't you like to have help? So help me deal with the cost. I was sort of hoping someone out there will help you. Engineering can be lonely, and this is a fundamental issue with LLMs cost. Okay, so there's a bunch of tricks. We call them tricks still, but they are harder knowledge. Caching is a proven means to reducing costs. Therefore, we want to cache the completions, ie [[Generative AI|GenAI]], I ranked 'em myself.
>
> **[1:34](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-cost?u=76281980&t=94)** You like, in this world you can like just talk to yourself, and someone's actually listening, actually not someone, again, don't want to humanize AI ever. This is just like human talking to human. You're out there listening hopefully, and you are a human. So we're going to cache completions, and the [[Python (Programming Language)|Python]] code that's being used is able to generate embeddings from the text you give it. And of course, you can generate completions as well. Goal is to cache the completions and generate embeddings for the text to cache the outputs with the key as the input. We'll use vector similarity to compare a new piece of text to the available cached completions. Wow. If you know what this is, you're like, ah, that makes sense. I'll tell you like six months ago, I had no idea what I'm typing just now. (chuckles) So actually, in the spirit of that, let's say, let's actually do something different here.
>
> **[3:10](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-cost?u=76281980&t=190)** Let's use the [[Semantic Kernel]] extension to summarize the previous text in plain language.
>
> **[3:22](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-cost?u=76281980&t=202)** Okay, we're going to ask GPT-3 to translate my gobbledygook into different like, okay, result, caching, save, store results, cache completions, use vector similarity. Yeah, that's much simpler. So that's what I'm trying to say. We're going to increase the number of tokens available. We can also do it here from the text file config.[[JSON]]. And okay, that's our strategy. There is a function to convert text to embeddings called text to embeddings. And there's a function to complete a text called text completion. They are both in Python. Decode to construct rudimentary cache, will read as, and you know, if you have [[GitHub]] co-pilot installed, this happens automagically while you're typing. But just imagine you're a developer somewhere out there trying to figure stuff out. Yes, you can have it generate code in from GitHub. I would go with the big GitHub co-pilot extension within VS code. But you can also have these conversations to kind of work with an architect to really kind of like suss out things.
>
> **[4:56](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-cost?u=76281980&t=296)** And I want to note that this is using GPT-3. And if you try [[GPT-4]], you'll quickly discover that the code it generates is probably like three to four times better. But that's the kind of quick way to sort of play with ideas, like, oh, it costs a lot to use the model. Let's use caching. Oh, it costs a lot to use that model. Let's use a cheaper model. So you can have a conversation with the systems. You can have a conversation with the model to be able to basically think out loud while it thinks out loud. And it's a wonderful way to not just reduce cost but play with more sophisticated engineering ideas. This is an example of how by working with AI, our slow thinking muscle, which we never get to use in daily life, we get to accelerate it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Tokens]] (2), [[Python (Programming Language)|Python]] (2), [[Semantic Kernel]] (1), [[JSON]] (1)
> **Tools:** github (3), vs code (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** gpt (3)
> **Analogies:** just like (1), imagine (1), kind of like (1)
> **CLI Commands:** python (2)
> **File Paths:** config.json (1)
> **Warnings:** note that (1)

#### [Dimension 3: Practices for quality](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-3-practices-for-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-3-practices-for-quality?u=76281980&t=0)** - Everyone loves quality, they want it to be a sure thing, high quality. But when it comes to this world, it's about rolling dice. That's about a non-deterministic thing, meaning that the AI can produce something that's not a hundred percent correct, but no worries because we're in an era where native code is really good, that's a deterministic. And at build 23, deputy CTO, Sam Schillace, my boss, who's always thinking about how these two come together, syntax, conventional coding and semantic, AI prompt coding, and how on the one hand you have precision, and the other hand you have power and it's this combination that is so extraordinary. For example, when we worked through speed, we found how, wow, this Collateral UX we're trying to create to change the perception of speed. We can use the semantic coding build that we have now to be able to give us ideas, hints for how to actually improve the [[User Experience (UX)|user experience]], collaboratively with AI. And for cost, we're also able to ask questions about how to optimize how models get used. The AI can generate actual code as our [[Microsoft Copilot|copilot]] to decrease costs. This intersection is magic. And when you consider how quality correlates to speed and cost with this new kind of AI, we want to remember
>
> **[1:36](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-3-practices-for-quality?u=76281980&t=96)** that it's only because this stuff is evolving. It's expensive because it's new, it's slow because it's new. We're figuring it out right now, that's where Collateral UX is extremely important. It takes a new kind of developer who understands syntax, regular coding and semantic AI coding just like you. And they're also curious about how to use Collateral UX to change the perceptual angle and to use AI as their co-pilot to be able to make incredible [[Microsoft Products|products]] for people and discovering that they might have feelings about the product. They might have emotions, so next, let's get emotional.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Microsoft Copilot|Copilot]] (1), [[Microsoft Products|Products]] (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** make (1)
> **Env Vars:** cto (1)
> **Speakers:** - everyone (1)

#### [Dimension 4: Practices for emotion](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-4-practices-for-emotion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-4-practices-for-emotion?u=76281980&t=0)** - So by now you're comfortable with the iron triangle, speed, cost, quality. These are three important things. But when it comes to AI, we have to add a fourth point to make it a tetrahedron. And that is emotion. Designers know how to manage the people's emotions, their users, their customers. It's not something that a developer really has to think about a lot. But an enlightened developer, especially in this AI era has to. Remember that we're in the era of what Herbert Simon, AI pioneer calls AI that is powered by scissors. One blade is the cognition blade, the foundation model. The other blade is context, prompts, et cetera. The two together produce this incredible [[Microsoft Copilot|copilot]] world. But don't forget what your parents told you. Don't rub with scissors. Kind of dangerous. Now, psychologist Paul Ekman in 1976 described six types of emotions. Fear, surprise, sadness, enjoyment, disgust, anger. You think about that, those are six general emotion categories and only 1/6th is about positive. So we spend most of our time kind of, "Ah," this expressions of your face. This is consistent with how we manage any kind of big event in our life, especially grief.
>
> **[1:36](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-4-practices-for-emotion?u=76281980&t=96)** This curve by Kübler-Ross describes what happens when you discover something has changed and you're like, "Oh, I don't like that change." And you kind of try to find your way back. Some people can't make it their way back. Some people are stuck in depression, sadly. Some people do actually barely make it back but they're never the same person. So emotion is about human beings experiencing change. And remember, 5/6th of the reactions are negative and this is consistent with designing any product. Professor Jean (indistinct) talks about how when you design a product, you're looking for the sweet spot of familiarity, high familiarity, and high novelty. It doesn't make any sense. Something that's familiar and novel at the same time? People like that quadrant because it's similar to the past. Familiar, but it's also novel. It's brand new. Pretty hard to create that. That kind of design happens very rarely. So consider how you're often going to probably upset your user in some way 'cause you're surprising them with something new. And AI is all brand new. So in that spirit, the seventh collaborative UX pattern is to not humanize AI. And the things it is saying to a user, if you make it sound too like, "Hey, best friend, got to trust it," you're going to get your pilot in trouble. Remember, AI is not a human.
>
> **[3:11](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/dimension-4-practices-for-emotion?u=76281980&t=191)** Don't humanize it. And if you don't, you'll be able to make sure that their emotional reaction when the copilot has let them down is mitigated. But let's examine how to work with emotions in writing copilots in code. Let's check it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2)
> **CLI Commands:** make (6), find (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - so (1)

#### [Semantic coding for emotion](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-emotion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-emotion?u=76281980&t=0)** - I know that sometimes when you're writing code, you have to put your emotions into your background, basically in the back of your mind. And that's why when a user error occurs that sounds like user error doesn't sound very catastrophic. Or actually, the user never makes a mistake, the app makes the mistake. But anyways. So, let's imagine we're going to cook a semantic function that is about, "define empathy for issue." Well, define is kind of a weird [[Microsoft Word|word]], isn't it? But let's try that. "This is going to help us critically think by activating our emotional stuff," feelings. Okay. Should have called it like make me feel. Okay. So, let's write a prompt that can help us do that. Say, "The following feature has been released to a set of people who are new to computers.
>
> **[1:12](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-emotion?u=76281980&t=72)** The error message reads as following: When they make a mistake, describe the emotional reaction that they have." Okay, so what's happening here? We are going to make the machine feel for us, which sounds kind of ridiculous. But again, when you're in the zone, it's hard to remember that this is being used by people. So, let's run the function. The error message says, "You are missing the key.env file for this to run. Terminate." Okay. I don't know, like how are they going to [[React.js|react]] to this one? Let's see. That's a pretty good message if you ask me. Like they're missing the .env file, so just stop working. "The people who are new to computers may feel frustrated and overwhelmed with this error message. They may feel confused and unsure of what to do next, and may be intimidated by tech," oh, really? Well, they should have read the manual, as we say when we write stuff. If you get my drift here. But let's make it even more evocative. "They have and provide the work and family context they may be experiencing
>
> **[2:41](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-emotion?u=76281980&t=161)** when this message lands." Okay. This is kind of like, "Okay, now let's sort of like illustrate not how they feel but what situation are they in." Remember, like, because of remote work or blended work or hybrid work, "The," how about this one? "You have forgotten the .env file. Terminate." Okay. All right. Let's see how people react. Let's see here. They may be telling yourself, "Well, you're asking a [[Generative AI]] to do this for you?" Well, in reality, you should actually test it on real people, use a research, you know? Get like a sample group to do this with and hear what they say. "The person may feel frustrated. They may be feeling the stress of trying to balance work and family responsibilities." That sound familiar? I kind of think so. There's a reason why they feel this. It's the context they're in. And so, consider this way of working with AI a key to basically writing this kind of code and testing different ideas in it. And, you know, helping the AI help you feel. Let's do another one, shall we? Okay. Now, let's describe this differently. "The following feature has been released for people who are experts in accounting software." This is a different group of people.
>
> **[4:15](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-emotion?u=76281980&t=255)** Their message reads as following when they make a mistake. Let's try this with a different group of people. Let's try the emotional reaction they have. And let's remove that context. Here we go. "Missing numerical information on line 12. Input again." Okay. Now, we're kind of asking it like, "Well, this time they're not beginners, maybe they are feeling different about it." The experts, they feel frustrated. Even expert feels frustrated. "Time is being wasted." Notice how an expert is like, "Hey, this is my time." And so, now, when you're developing the system, you're thinking, "Oh, hold it." They're losing time, and time is the most valuable thing. They're not being efficient. So that's another way to like look at the problem. So, really use this kind of AI to build copilots that are more empathetic to different groups of users. Use it like a calculator for emotion. So when you're creating the feature, about to ship it, you're asking questions like, how's someone going to feel when they use this? Because the copilots have to enable the pilot to succeed. We've come a long way. We're going to go a little further by doing the thing you probably don't want to hear. We're going to add more friction
>
> **[5:49](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-emotion?u=76281980&t=349)** as we're getting towards the end. Let's learn why adding friction is so key in collaborative UX.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[Microsoft Word|Word]] (1), [[Generative AI]] (1)
> **CLI Commands:** make (5)
> **Analogies:** imagine (1), kind of like (1)
> **File Paths:** key.env (1)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)


### 3. Building Appropriate Trust

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding friction: The new math](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/adding-friction-the-new-math?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/adding-friction-the-new-math?u=76281980&t=0)** - So if you've been noticing something a little funny, it's the fact that UX is usually about reducing friction, but all the UX patterns for Collaborative UX add friction. For example, pattern one is about adding AI notices to force the human pilot to think critically. Cloud UX pattern two is about suggesting prompts because you want the pilot to be able to choose things that the AI is better at doing. Cloud UX pattern three is now giving citations, making the pilot work and learn more. Cloud UX pattern four is about status updates. It's about making sure there's more information in the pilot's view to be able to be aware of what's happening. That's friction. Cloud UX pattern five is providing citations, making the pilot read more and learn more, even more friction. Pattern six is different, however. It's what engineers are really good at doing, removing friction. That one you get the old way. Pattern seven though, is about not humanizing AI, which is the ultimate form of friction, because you're managing people's emotions. You're dispelling the myth that this is magic, and that's an important part
>
> **[1:34](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/adding-friction-the-new-math?u=76281980&t=94)** of being responsible in this era of AI. So we have the tetrahedron to guide us in the [[Microsoft Copilot|copilot]] stack, speed, cost, quality, emotion. And remember the emotion one, it's hard as a developer to remember the emotion one. A lot of this stuff in the developer world understand that, ensures that you're more likely to do something well on behalf of all the pilots out there looking for awesome copilots.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - so (1)

#### [What's responsible technology?](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-s-responsible-technology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-s-responsible-technology?u=76281980&t=0)** - Last week I was in San Francisco at a special art opening of an exhibit at a place called the Exploratorium. It was founded by Frank Oppenheimer who is one of the particle physicists who famously worked on the Manhattan Project. The incredible project that created the nuclear bomb. Now, how did a particle physicist end up having an art museum about science in particular? It's because many scientists who worked during World War II to create weapons of mass destruction, either during or after, ask questions about what is science for if it can't protect human life? And when you think about Joseph Weizenbaum, my AI professor I mentioned, who created the first chat bot, he fled Nazi Germany as a youth. And that's when he made this chat bot, he became afraid of what happens if this is in the wrong hands. We always tend to think critically after something bad has happened. That's why we call it criticism and it sounds really negative, but right now, luckily, a lot of people, corporations, individuals, education institutions, governments, we're thinking critically before something could happen negatively with AI. That's a good thing. But I believe this is the first time where the very thing we're afraid of could possibly help us figure out ahead of time,
>
> **[1:38](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/what-s-responsible-technology?u=76281980&t=98)** improve our critical thinking, think slowly before something happens that we don't want to occur. So instead of blah, blah, blah, let's jump into code as we close off this course.

> [!info]- Semantic Content
>
> **Speakers:** - last (1)

#### [Semantic coding for responsible AI](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-responsible-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-responsible-ai?u=76281980&t=0)** - [Instructor] So let's get coding. If you remember, we use the [[Semantic Kernel]] extension. This is always available on the left-hand side and let's make a function called make_me_responsible.
>
> **[0:25](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-responsible-ai?u=76281980&t=25)** If that, if they were that easy, right? This is a function that improves my critical thinking in building AI technologies. So make_me_responsible's right here. Okay this is that moment where you're like uh I got to write something. How do I do it? No problem. I have gathered information online, open source, from [[Microsoft]]'s harms taxonomy that lays out the different risks of AI and what we want to be concerned about. Things like infringement on human rights, things on [[Privacy]] laws, things that we should be worried about. Let's just take a piece of one of them. Let's see here. Let's take the economic loss issues. Okay, copy that. Go back into my make_me_responsible function and I'm going to add that context here that this is a denial of consequential service, harm description consideration example. I want to say this using the above framing for a feature described as the concerns that we should have regarding financial instruments are okay.
>
> **[2:09](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-responsible-ai?u=76281980&t=129)** And then we're going to run that function. So now let's say we are building a way to take credit card information quickly. So now what it's doing is it is computing based upon this context output. So it's saying given that consideration, the concerns the ones we should have and it's based upon the input. So let me read it here. Wow, we're going to deny people based on socioeconomic status not good. We're going to charge different rates. Doesn't sound good too either. They're going to have to work for low wages. So this is like, this is like gloomy dark things that if you're waking up in the morning saying I'm going to make a cool way to do this, these are the consequences, the unintended consequences. Now let's actually improve this reflection or essentially the critical thinking behind this. Now it isn't getting too creative so let me give it a little bit of latitude. Kind of like unbutton its top shirt collar button. And I'm going to say are including examples
>
> **[3:37](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-responsible-ai?u=76281980&t=217)** in the context of the feature. Let me give it a little more. Okay, let's now run it. Okay, a way to take credit card information quickly. You know fast is always great, right? But you got to ask questions when it's happening too quickly. Look at it here. Okay, okay. Now it's giving me the for example. Someone once told me always say for example, what before when you're opening your mouth and it'll make sense. For example, this is what happens when you write a prompt like this. It produces something like this. Clear discrimination. For example, charging higher rates for people with lower socioeconomic codes. Differential pricing. For example, charging more. This is sort of a more in plain English which is great. Paying destitute people for biometric data. These examples kind of really elicit the feeling inside you. And as a critical thinker, you don't solve the problem immediately. You understand the problem. So this is one example of using expert information about unintended consequences. [[Responsible AI]] thinking in the context of a feature input and this can get as complex as you want. And when you think about it,
>
> **[5:11](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/semantic-coding-for-responsible-ai?u=76281980&t=311)** this ability to enable the AI that could enable you to do irresponsible things could also be used as a calculator, a responsible AI calculator. I think it's a question of feature, how we build features, we'll want to be able to write new code but also write this kind of reflective code. As in the software industry, we have [[Software Testing]]. We may as part of deploying this kind of AI-based software. Instead of unit tests, we may write responsible AI tests. And not just for the output of AI but for the human pilots who are developing these co-pilots for others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Responsible AI]] (3), [[Semantic Kernel]] (1), [[Microsoft]] (1), [[Privacy]] (1), [[Software Testing]] (1)
> **Analogies:** for example (5), kind of like (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** make_me_responsible (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 4. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ux-for-ai-design-practices-for-ai-developers/next-steps?u=76281980&t=0)** - This course has been about AI technology but it's also been about emotions. I'm sorry to see you go, but I am excited that you're going to be jumping into the [[Microsoft Copilot|Copilot]] stack. Just download [[Semantic Kernel]]. We have a chat reference apps, deploy it, customize it, try it with a user base, optimize it, and get ready to scale responsibly. I hope you collaborate with your users as soon as possible. You're going to learn a lot from them and I hope to learn a lot with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (1), [[Semantic Kernel]] (1)
> **Speakers:** - this (1)


## Instructor

- [[John Maeda]]

## Skills Covered

- Artificial Intelligence for Design
- User Experience Design (UED)
- Artificial Intelligence (AI)

## Path Context

### In [[Advance Your Skills in AI and Machine Learning]]
← [[MLOps Essentials- Monitoring Model Drift and Bias]] | **13 of 16** | [[Foundations Of Responsible Ai]] →

## Appears In

- [[Advance Your Skills in AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Exploring AI Workflows within Figma Design]] — Artificial Intelligence (AI), Artificial Intelligence for Design, User Experience Design (UED)
- [[Generative AI UX Design with Uizard]] — Artificial Intelligence (AI), Artificial Intelligence for Design, User Experience Design (UED)
- [[Using AI Tools for UX Design]] — Artificial Intelligence (AI), Artificial Intelligence for Design, User Experience Design (UED)
- [[The Ai Driven Product Designer]] — Artificial Intelligence (AI), Artificial Intelligence for Design, User Experience Design (UED)
- [[AI Foundations- Ideating and Prototyping]] — Artificial Intelligence (AI), Artificial Intelligence for Design

---

[↑ Back to top](#)