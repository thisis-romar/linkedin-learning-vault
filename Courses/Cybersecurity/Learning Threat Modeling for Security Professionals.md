---
type: course
cssclasses:
  - lle-course
slug: learning-threat-modeling-for-security-professionals
url: "https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals"
duration_minutes: 46
duration: 46m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGHpHNyTXJrNg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568070586410?e=2147483647&amp;v=beta&amp;t=3QA96DHE05FKZQRVbOFzGK2c2hTdgv_-r-tWsZep-Hk"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an IT Security Specialist]]'
  - '[[Improve Your Threat Modeling Skills]]'
prev_courses:
  - '[[Vulnerability Management in Cybersecurity- The Basics]]'
  - null
next_courses:
  - '[[Artificial Intelligence for Cybersecurity]]'
  - '[[Threat Modeling- Spoofing In Depth]]'
path_nav: '[{"path":"Become an IT Security Specialist","position":9,"total":12,"prev":"Vulnerability Management in Cybersecurity- The Basics","next":"Artificial Intelligence for Cybersecurity"},{"path":"Improve Your Threat Modeling Skills","position":1,"total":6,"prev":null,"next":"Threat Modeling- Spoofing In Depth"}]'
path_count: 2
tags:
  - course
  - topic/security
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Learning%20Threat%20Modeling%20for%20Security%20Professionals.md)

![Learning Threat Modeling for Security Professionals](https://media.licdn.com/dms/image/v2/C4E0DAQGHpHNyTXJrNg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568070586410?e=2147483647&amp;v=beta&amp;t=3QA96DHE05FKZQRVbOFzGK2c2hTdgv_-r-tWsZep-Hk)

# Learning Threat Modeling for Security Professionals

> In the 21st century, no one doubts the importance of cybersecurity. Threat modeling is where it starts. Threat modeling is a framework for thinking about what can go wrong, and the foundation for everything a security professional does. This training course provides an overview of the traditional four-question framework for (1) defining what you're working on, (2) discovering what can go wrong, (3

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals) | 46m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Develop secure products](#develop-secure-products)
  - [Why would you threat model?](#why-would-you-threat-model)
  - [A simple approach to threat modeling](#a-simple-approach-to-threat-modeling)
- [**1. The Four Question Framework**](#1-the-four-question-framework) (4 videos)
  - [What are we working on?](#what-are-we-working-on)
  - [What can go wrong?](#what-can-go-wrong)
  - [What are we going to do about it?](#what-are-we-going-to-do-about-it)
  - [Did we do a good job?](#did-we-do-a-good-job)
- [**2. STRIDE**](#2-stride) (8 videos)
  - [Spoofing a specific server](#spoofing-a-specific-server)
  - [Tampering with a file](#tampering-with-a-file)
  - [Interlude: Scope and timing](#interlude-scope-and-timing)
  - [Repudiating an order](#repudiating-an-order)
  - [Information disclosure](#information-disclosure)
  - [Denial of service](#denial-of-service)
  - [Elevation of privilege](#elevation-of-privilege)
  - [Expansion of authority](#expansion-of-authority)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Develop secure products](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/develop-secure-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/develop-secure-products?u=76281980&t=1)** - Delivering secure systems is a matter of both professional pride and obligation. People are more and more concerned about hacking, and we need our systems to be better, safer, without derailing a project we're supposed to be helping. By asking simple questions and looking for the most common sorts of issues, you can improve the security posture of a project. Through a simple case study, I'll show how to apply the most effective [[Threat Modeling]] practices to any technology you're working on. I'm Adam Shostack. Over my 20 years of threat modeling, I've written a book, shipped software, and created a game all to help others threat model. Join me in my course where I'll share practical techniques that can have you threat modeling today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (3)
> **Definitions:** is a  (1)
> **Speakers:** - delivering (1)

#### [Why would you threat model?](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/why-would-you-threat-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/why-would-you-threat-model?u=76281980&t=1)** - The best time to find security problems is before they happen, and the very best time is before any work needs to be redone, before anyone's written a line of code, before any images or containers have been configured. But how do you do that? You can't run standard tools like [[Nmap]] or ZAP to see what's wrong. The fact is projects often start at a whiteboard, but too often, security isn't at that whiteboard, engaging in trade-offs with developers or operations, because we lack tools to be part of these conversations. Worse, we in security have a reputation. Ask two security experts, get three versions of no. [[Threat Modeling]] is a structured way to discover problems lurking in a project. You can threat model at any time, but the biggest payoff comes from threat modeling early. Planning for threat modeling insures that there's a way to consistently unearth problems. Systematic, structured, comprehensive threat modeling helps security get a seat at the table. There are many ways to threat model. Threat modeling isn't a monolith any more than sysadmining is a monolith. I'll focus on the most broadly applicable building blocks. You'll learn these course skills, tools, and techniques first, and over time, you'll end up with a whole set.
>
> **[1:35](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/why-would-you-threat-model?u=76281980&t=95)** Threat modeling is the best way to bring structure to your security work, and it's a skill set that you'll use for the [[Representational State Transfer (REST)|rest]] of your career.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (6), [[Nmap]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** zap (1)
> **Speakers:** - the (1)

#### [A simple approach to threat modeling](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/a-simple-approach-to-threat-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/a-simple-approach-to-threat-modeling?u=76281980&t=1)** - At the heart of [[Threat Modeling]] are four incredibly simple questions: what are we working on, what can go wrong, what are we going to do about it, and did we do a good job? We use these questions because they're easy to remember. The first question is about the project we're working on at the moment we kick off threat modeling. The four questions together give structure to our threat modeling work. They work in an [[Agile Development|Agile]] world or a Waterfall one. They work for all sorts of projects: apps, web services, [[Microservices]], infrastructure, networks, and even the things that make up the [[Internet of Things (IoT)|Internet of Things]]. If you want to be old-fashioned, they even work for boxed software and enterprise apps. The specific answers to the four questions might look different when working on different sorts of projects. The way to describe a microservice is different than the way to describe a network, but the questions, the principles, and the approaches remain the same. We start with what are we working on because, well, if you can't answer that, most other questions are going to be pretty frustrating. I'll use the Red30 Advertising Network as my model, and for this project, we're adding autoplaying media. Our customers are really excited about the opportunity to engage eyeballs with catchy jingles at unexpected times. (deep sigh) Let's make sure we do so securely. You might see other frameworks out there
>
> **[1:34](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/a-simple-approach-to-threat-modeling?u=76281980&t=94)** for how to threat model, ones that say start from a list of attackers or the things you want to protect. Both are attractive but hard to do right. Unless you're James Bond, you know less about your adversaries than you know about your current project, and starting by making a list of the things to protect can take you away from the scope of the project you're working on right now. There are other issues with the things you want to protect approach, but for right now, focus on what you're working on, because that's where you care about what can go wrong and what you're going to do about it, all of which makes it easier to do a good job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (3), [[Agile Development|Agile]] (1), [[Microservices]] (1), [[Internet of Things (IoT)|Internet of things]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - at (1)


### 1. The Four Question Framework

[↑ Back to Table of Contents](#table-of-contents)

#### [What are we working on?](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-working-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-working-on?u=76281980&t=1)** - The first question in [[Threat Modeling]] is what are we working on? The reason we ask this is like the old parable of the blind folks and the elephant. One touches a leg and thinks it's a tree, another finds the tail and says it's a snake. We need to see the big picture, and so we need a, um, picture! And so I'm going to draw one. The best place to draw the first picture is on a whiteboard. A whiteboard is the epitome of we can erase and change this. You draw a picture of what you're working on, that you can change and evolve. You draw a picture that everyone can point to and debate. The whiteboard is a place of collaboration. Anyone can add, edit, or adjust it. So let's do it. I'm going to serve ads today, I need a media server.
>
> **[0:58](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-working-on?u=76281980&t=58)** It has to get ads from at least one or two advertisers, so I'll draw them in.
>
> **[1:09](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-working-on?u=76281980&t=69)** - [Woman] Hey, Adam, what about billing?
>
> **[1:11](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-working-on?u=76281980&t=71)** - Hey, that's a good idea. Money's good, let's add billing and logs.
>
> **[1:22](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-working-on?u=76281980&t=82)** And there we have it. It's not perfect, no model ever is. The map is not the territory. We may find that we need to add bits or change the diagram as we go, and that's okay. This is a simple diagram that we can point to, we can see, and make sure that everyone's on the same page as we use it to ask, what can go wrong?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (1)
> **Analogies:** picture (5)
> **Speakers:** - the (1), - [woman] (1), - hey (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)

#### [What can go wrong?](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-can-go-wrong-24336176?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-can-go-wrong-24336176?u=76281980&t=1)** - The second question in [[Threat Modeling]] is what can go wrong? Oh my, what can go wrong? Yeah, you could build your nuclear power plant next door to a spider farm or on an earthquake fault line. But hang on a minute, I'm not designing a nuclear power plant here. I'm building an ad server. I have a project scope right here. And you know what? No nuclear power plants, no spider farms. But you know what could go wrong? Customer A might be able to upload content to Customer B's campaign. So Customer B is paying for Customer A's ads. That's sort of fun. Uh-oh, the lawyers tell me I can't say fun. How about exciting? That's sort of exciting. Or my servers might get overwhelmed with traffic, which is cha-ching, great, but what if they're so overwhelmed they fail to send packets to the billing server? What can go wrong is the key question in threat modeling, and it can be hard to get it right. If you scope too wide, you worry about radioactive spiders. And hey, I'm not saying don't worry about radioactive spiders. I'm saying don't worry about them as part of this project because spiders not on the diagram. It's important to scope properly and find the threats that you can deal with during this project or even during a given sprint. And because it's hard to get right,
>
> **[1:34](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-can-go-wrong-24336176?u=76281980&t=94)** there's a tool, a mnemonic, to help answer the question what can go wrong, which focuses on the things that go wrong over and over across all sorts of systems. The mnemonic is STRIDE. It stands for spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege. Failure to look for any one of these is an almost certain path to doom. Well, that's the historical way of talking about it. Today we define the E as expansion of authority because it turns out privilege is a squishy concept. Authority is the actions a program is authorized to take. A program that can read one file has less authority than a program that can read two. If we let the program write those files, it has twice as much authority. It can do two things to each file. The concepts are pretty similar, and I feel it's important for you to know that the authority version is more up to date. And when people talk about things like least privilege, you can measure least authority. For example, STRIDE might not help you realize that there is a new European regulation regarding what you can do with personal data. Which might actually be relevant and worth flagging to a project manager. STRIDE helps when there's uncertainty
>
> **[3:09](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-can-go-wrong-24336176?u=76281980&t=189)** about where to look next. Answering the question what can go wrong starts with a high level look at the diagram and continues through finding specific instances of each threat relevant to each box and line in the diagram. And sometimes as you do that, you'll find you're not looking at the most critical issues. You're finding things over which you have no control or even influence. And so I'll draw a line on this diagram.
>
> **[3:49](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-can-go-wrong-24336176?u=76281980&t=229)** So this is a trust boundary. It's where you and your customer meet. It's where different domains of responsibility within an org delineate that responsibility. And the real definition, it's everywhere trust or privileges change. And so I labeled inside of it Red 30, the name of our advertising agency. We're going to focus our analysis of what can go wrong near or inside this boundary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (2)
> **Definitions:** is a  (3), stands for (1), is an  (1)
> **Env Vars:** stride (3)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### [What are we going to do about it?](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-going-to-do-about-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-going-to-do-about-it?u=76281980&t=1)** - Now, we found a few threats. Our client, AgePlus, could upload content to another client's account, let's say Topsy Turvy. The media servers might be so overwhelmed, that they can't send packets to the billing servers. That brings me to the third key question that frames [[Threat Modeling]]. What are we going to do about each of these awful problems? The very first thing to do is to track them. I can start with notes on a white board, and later transfer them to our bug tracking system. Now, maybe it doesn't seem like these are bugs. Well, maybe they are, maybe they aren't. Right now, what can go wrong is that we find lots of problems and lose track of them. That'd be annoying. Anyway, I'd better get these threats up here before I lose track.
>
> **[1:00](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-going-to-do-about-it?u=76281980&t=60)** Spoofing, login to someone else's account, and upload content to be shown on their bill, denial of service, media server is overwhelmed, media service network interface get filled, ad server can't be contacted. Now, these words aren't exactly what I said before. I added more information about how I found the threat. Spoofing, denial of service, denial of service, and I added a little about how it might work. The network interface gets filled. This refinement in evolution is normal. As people develop skills, their need to stick to the four questions, in that specific order, goes down. But what's most important is that each of these is a bug. An issue. The sort of thing that gets tracked. Even if someone says, "But wait. "That couldn't happen, because we have logins," There's a potential problem. You can take that potential problem and check to see if it's a real issue, and document that you did that. You can write test code to ensure it's not an issue. Or you can write code to test that defenses work. For example, I could write test code to verify that there's no way to login without a username and password. I could also check that after logging in as AgePlus, I can't change directories to Topsy's files. I can't create a directory called dot dot Topsy Turvy
>
> **[2:36](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/what-are-we-going-to-do-about-it?u=76281980&t=156)** and overwrite all their ads. Each of these is a different type of issue. A different set of actions you might take, and can result in a different type of bug title, a different framing. Test this, prevent that. All of those are okay and good. What's important is that you're managing security issues the way your organization manages other issues. Choosing or prioritizing a fix can happen later, outside of threat modeling. Fixing issues is part of [[Software Development]]. It's part of operations, it's part of product management. Every team gathers issues from many sources. You have to decide which ones get addressed, and to decide that in a consistent way. Bugs are a key deliverable from threat modeling, to how you deliver [[Microsoft Products|products]] and services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (3), [[Software Development]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - now (1)

#### [Did we do a good job?](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/did-we-do-a-good-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/did-we-do-a-good-job?u=76281980&t=1)** - So, I've discovered a few threats, filed some bugs, and we're done [[Threat Modeling]], right? Not quite. We want to take a minute and reflect on the fourth major question in threat modeling: did we do a good job? It's important to reflect on, both because we want to do a good job and so you know you're done. How can you know if you're half finished? How can you tell your boss, your [[Scrum]] master, or anyone else that you've done the work? As a result, the very first part of this is, is the work done? Are there clear answers to the questions which frame threat modeling? Those questions are: what are we working on, what can go wrong, what are we doing about it? Are there clear answers? If not, there's work to be done. If there are, then it makes sense to check on a few more things. When looking at what can go wrong, it's important to look for each STRIDE threat across each part of the diagram, or each part of the diagram that's inside relevant trust boundaries. Therefore, the next question is, is there a record of a specific instance of a threat against each element in the diagram? That might be an attacker can spoof the AD server by hiring an army of bots. Or by hiring an army of bots, an attacker can spoof clients and drain Topsy's advertising budget.
>
> **[1:35](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/did-we-do-a-good-job?u=76281980&t=95)** The exact form is less important than defining the bad thing that can happen with more specificity than the threat mnemonic. So, someone can tamper with a file is less specific than someone can tamper with the media files in another client's directory and cause the wrong ads to be shown. A good job here includes specificity about the threat. What could happen that breaks your security and where exactly in the system can that happen? You can be vague about who performs this. You can be vague about why they do it. For now, you can even be flummoxed by what to do about it because you're tracking it. Let's go back to the question of who performs this attack. Some of the objections people will bring up are but who would do that or no one would ever do that. And you know what, people surprise us all the time. I mean, have you looked at the internet lately? Do you want to bet your security on knowing why people do what they do? Of course you need to prioritize fixes. Sometimes people suggest that no one would ever do that and they really mean this is complicated to fix or I don't want to touch this code or something like that. The simplest answer is okay, let's just track the decision not to address it.
>
> **[3:11](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/did-we-do-a-good-job?u=76281980&t=191)** You'll learn later if that was a good idea. There are more complex answers that you can learn later on. But if you have specific answers to what you're working on, what can go wrong, and what you're doing about it, then you're off to a great start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (3), [[Scrum]] (1)
> **Env Vars:** stride (1)
> **Cross-References:** go back to (1)
> **Speakers:** - so (1)


### 2. STRIDE

[↑ Back to Table of Contents](#table-of-contents)

#### [Spoofing a specific server](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/spoofing-a-specific-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/spoofing-a-specific-server?u=76281980&t=1)** - Spoofing is what happens when authenticity fails. Authenticity meaning something is real, it's genuine, it's the one we expect, rather than being about something done in a traditional way, like authentic Italian food. It's about the authentic website loading when you click a URL, rather than a fake trying to get you to expose your password. Authenticity is about the name matching the expectation. When an attacker spoofs, they provide a fake, a sham, an unexpected thing in place of the real. RED30 has a website where advertisers upload content. The site is protected by a username and password. An attacker might try to upload ads as a different brand, by spoofing a user from another company. Then, the attacker's ads will be shown, and the bill will be sent to someone else. To log in as someone else, the attacker can pick a likely username, say, Topsy Turvy, and try common passwords like password or 123456. A brute force attack can happen by hand, or there's software like THC [[Hydra]] to speed it up. Hydra spawns lots of heads, each one testing many common passwords across one or more possible usernames at the RED30 site. Someone on the RED30 analytics team could study Hydra looking for anomalies in the way it presents itself relative to a real web browser.
>
> **[1:35](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/spoofing-a-specific-server?u=76281980&t=95)** That's not very wise. An attacker might use a different tool, and then the site would be vulnerable again. Instead, I can create a feature that looks for login attempts with the same username. When the same username shows up too many times, we can respond to protect that account. For example, I can put up a captcha, or just delay them by a minute. That slows their attempts way way down, and I'm done, right? Not so fast. Even if it takes a minute per attempt, software doesn't get bored, and nothing stops anyone from leaving it running for a while. Instead, I could use an exponential backoff. First one second, then four, then nine, then 16. And pretty soon logins are slow for Topsy, which isn't very good when they're trying to upload new ads. I could continue this chess game of threat and defense, but in the interest of time I want to jump to the next level of defense, multifactor authentication. [[Google]] has a nice free app called Google Authenticator. It runs on a phone and uses [[Cryptography]] to generate a six digit code that changes once per minute. After someone logs in, software on the website asks them for their six digit code. But why use an app rather than SMS? Well, the phone system is vulnerable to spoofing in all sorts of ways. That code might end up in the wrong place, and the threat is great enough that many regulators
>
> **[3:09](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/spoofing-a-specific-server?u=76281980&t=189)** are suggesting that SMS systems need to be replaced. This back and forth is important. Attackers aren't static, and will adjust to each new defense. As you think about, what are we going to do about it, for the threats you find, remember that attackers will shift, and that leads to a good exercise. Think through all the ways to spoof a customer and the defenses, then how to bypass them just like we've been doing. It's worth taking the time to really do this exercise. Another good exercise is to look at the spoofing defenses that you've seen, and ask, "Why was this feature built like this?" But be aware, many of the defenses out there don't stand up very well to [[Threat Modeling]]. To this point, I've been discussing the spoofing of a client, or really, a person. But you can also spoof software. That might be a client acting on behalf of a person, such as an SSH client, or software acting on its own behalf, like a microservice, a server, or anything else whose authenticity might be important. The S in stride stands for spoofing. Watch out for all the ways authenticity can be violated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hydra]] (3), [[Google]] (2), [[Cryptography]] (1), [[Threat Modeling]] (1)
> **Env Vars:** red30 (3), sms (2), url (1), thc (1), ssh (1)
> **Analogies:** for example (1), just like (1), such as (1)
> **CLI Commands:** find (1), ssh (1)
> **Warnings:** be aware (1), watch out (1)
> **Definitions:** stands for (1)
> **Speakers:** - spoofing (1)

#### [Tampering with a file](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/tampering-with-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/tampering-with-a-file?u=76281980&t=1)** - The T in STRIDE stands for tampering, which is all about unauthorized modification. Let's talk about the logs in my model. It turns out my diagram is not very clear about where these logs are stored. All models have this property. Omitted detail is the difference between model and reality. I could've changed my original diagram as I wrote the course, but left it to show you that models improve iteratively. It is pretty clear where the logs are not, on the billing server or on the media server. Originally, the logs were on a network attached storage server. Employees were treating this server as a data store and no one was responsible for its permissions, so anyone can read or write the logs. Anyone could tamper with them. To fix that and some other issues, they were moved to a [[Cloud Storage]] bucket. The trouble there was permissions were opened up a few months ago when there was a problem with the billing system, and, oops, no one remembered to lock them down. Again, anyone can read or write to the logs. Anyone can tamper with them. There's more. We haven't defined who can log in to any server in this system. Maybe it's anyone with a Red30 account. Should we worry about rogue or even confused employees? And what about users at Red30 clients? Wouldn't we be better off with micro-instances
>
> **[1:35](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/tampering-with-a-file?u=76281980&t=95)** such as topsyturvy.media.ads.[red30.com](https://red30.com)? I mean, it's a mouthful, but then there's fewer concerns about permissions between different companies. I could lock things down so only authorized users could log in. Tampering is not just about files. I can tamper with a network connection. I can tamper with a connection when ads are being uploaded or with the ones between the ad server, the logs, and the billing server. It can be hard to think of tampering with packets. After all, they fly by so quickly. In a real man-in-the-middle attack, the first step is to convince one of the computers in this diagram that my computer is the best router for their packets. This spoofing can be surprisingly easy to pull off and allows the new router to read, alter, discard, or create packets to its heart's content. The attacker doesn't need to be inside the trust boundary. How are ads served to eyeballs? Addressing tampering is relatively simpler than addressing spoofing. For local files, operating system permissions are robust, assuming you configure them. Similarly, in the cloud, make use of the permissions the system provides. And for network systems, use cryptographic integrity protection like what's included in TLS. What's important right now is that you're finding threats
>
> **[3:10](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/tampering-with-a-file?u=76281980&t=190)** by looking for tampering, the T in STRIDE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (1)
> **Env Vars:** stride (2), tls (1)
> **CLI Commands:** make (1)
> **URLs:** [red30.com](https://red30.com) (1)
> **Definitions:** stands for (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - the (1)

#### [Interlude: Scope and timing](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/interlude-scope-and-timing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/interlude-scope-and-timing?u=76281980&t=1)** - While analyzing my model, I posed the question would we be better off with micro instances? It's time to touch on when to threat model and the advantages and disadvantages in different choices. [[Threat Modeling]] is amazingly powerful at the very start of a project while designs are literally on the whiteboard. It gives a structured way to engage with the security tradeoffs of a project. It helps pose questions like would we be better off with micro instances when it's easy to make that change? There are more constraints when threat modeling starts near the end of a project or is introduced when an existing product or service is being updated. It's harder to ask foundational questions. Threat modeling the entire plan system at the start of a project is great, and threat modeling what we're working on in a given sprint is also great. For example, I could add a load balancer in front of the media server. And the threat model scope for that project would be the load balancer and its connections.
>
> **[1:26](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/interlude-scope-and-timing?u=76281980&t=86)** When threat modeling begins at the start of a project, it can expose risky design choices when it's still easy to make changes. But at the start of a project there are many unknowns, and assumptions you rely on may be changed or incorrect by the time you get around to implementation. What you're doing as you ask, what are we working on and what can go wrong? has a really tight-beam focus. So threat modeling the content of a sprint has a different value. You know more and can bring that knowledge into the implementation. In fact, the way to think of threat modeling is not one big activity you do all at once, but a set of skills and building blocks you bring to bear through the project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (7)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - while (1)

#### [Repudiating an order](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/repudiating-an-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/repudiating-an-order?u=76281980&t=1)** - The R in STRIDE stands for repudiation. Repudiation is a little bit different than the other STRIDE threats. It's an uncommon [[Microsoft Word|word]] and it means disclaiming, denying or any way of saying you're not responsible for something. Saying, "I didn't get your email," is an act of repudiation. These threats are also a bit closer to the human meaning or impact than the other threats. Let's say an attacker succeeded at putting unauthorized ads into Topsy Turvy's account. When the bakery looks at their monthly bill they'll notice ads that don't look like theirs. And they'll repudiate. What happens next? Does Red 30 have a complaint mechanism that allows the issue to be tracked and managed or will a complaint spawn a million email threads? When an investigation starts, have the right things been logged? Logs are a way to look into what's already happened and it's hard to add them after the fact. Do the logs show security events like log-ins and password changes? Do they show each change to an add file? Who did it and when? And while it's not the subject of this complaint, do they show each ad impression? Do they record the factors that lead us to conclude it's a bot or not? It's possible to consider these things before we get a complaint. It may even help us to create a little mini threat model. What are working on? Managing complaints that are repudiations. How does that work?
>
> **[1:43](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/repudiating-an-order?u=76281980&t=103)** So a complaint comes in, we have a complaint, we've got a tracking number and this diagram isn't quite working for me which is okay because that's part of getting to a good diagram.
>
> **[2:03](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/repudiating-an-order?u=76281980&t=123)** Don't forget, your first diagram is often wrong and that's why I start on a whiteboard or even scrap paper. Diagrams evolve, they change. It's okay to re-draw them.
>
> **[2:23](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/repudiating-an-order?u=76281980&t=143)** Within Red 30's complaint portal, that passes information off to an investigation where we gather logs. And we correlate them and then we use the information to come to a decision.
>
> **[2:52](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/repudiating-an-order?u=76281980&t=172)** And maybe along the way we have to go back to the customer and get some additional information from them. Customer sends a complaint to Red 30 and gets a tracking number back. Red 30 kicks off an investigation gathering, correlating and analyzing the logs and may need to get some additional information from the customer. With all the information in hand a decision can be made and communicated back to the customer, but we don't need to model that last little step to help us understand the situation. What happens at each step? This simple model prompts analysis of the tools and technology that make each step happen. It's also possible to dig deeper, asking, "What can go wrong?" The logs might be missing or they might contradict information that the customer provides. The customer might disagree with the decision. Most importantly, asking about repudiation threats has prompted a walk-through before any customers have gotten angry. As with everything in threat-modeling, early analysis prevents having to repudiate your designs or code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Definitions:** stands for (1), is a  (1), is an  (1)
> **Env Vars:** stride (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - the (1)

#### [Information disclosure](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/information-disclosure?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/information-disclosure?u=76281980&t=1)** - The I in STRIDE stands for information disclosure. For example, if someone logs in to the portal to upload ads from a coffee shop, can anyone in that coffee shop see their username and password? Usernames and passwords are supposed to be secret, just like the contents of a new ad campaign. Come on, admit it, isn't that really why you watched the Super Bowl? Contents of logs are also confidential. Who's being shown ads may reveal details of Red30's proprietary StickyEye tracking technology and more of those details are accessible on the media server. Each of these secrets needs to be kept a secret relative to different audiences. No customer gets to learn about StickyEye. Each customer can only see their own specific metrics and they can't have access to other customers' success rates. On the network, the best confidentiality comes via [[Cryptography]]. In fact cryptography is the best way to protect every secret, but then you have to manage keys, and that's complicated. TLS mostly handles key management for you. Within a system, it can be easier to use permissions. Sometimes the permission system provided by an operating system can work. When it does, that's great. Those mechanisms have been honed for years for consistency and reliability. But sometimes you have to build your own. Most [[Web Servers]] put [[User Management]]
>
> **[1:33](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/information-disclosure?u=76281980&t=93)** and file management into the web server. Because the user is logging in to the web server, they can't SSH into the server. The disadvantage is having to select and manage a mechanism for permissions. Many times that's built in. For example, [[WordPress]] has layers of user types and controls over what normal authors or commenters can configure. It's easy to think about disclosure as being about the content of communication, but the mere occurrence of communication can be interesting to some people. For example, the fact that a political candidate is communicating with a foreign diplomat sure seems interesting, even if the contents of that communication are unknown. Confidentiality can be required for the content or the [[Metadata]] of communication. Sometimes both need to remain confidential. CEOs of some of the world's largest public companies regularly talk about [[Privacy]] being a differentiator for their [[Microsoft Products|products]]. They're competing on how they protect your information from inappropriate use or disclosure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (2), [[Web Servers]] (1), [[User Management]] (1), [[WordPress]] (1), [[Metadata]] (1)
> **Analogies:** for example (3), just like (1)
> **Env Vars:** stride (1), tls (1), ssh (1)
> **CLI Commands:** ssh (1)
> **Definitions:** stands for (1)
> **Prerequisites:** configure (1)
> **Speakers:** - the (1)

#### [Denial of service](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/denial-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/denial-of-service?u=76281980&t=1)** - The D in STRIDE stand for denial-of-service. There are denial-of-service or DoS attacks against processors, networks, and storage. In the world of [[IoT]], there's denial-of-service against batteries and in the ElastiCLOUD world against your wallet. The easiest denial-of-service attacks are simply brute-force With a lot of requests to see a given ad, the network fills up. Either because of the connections inbound or more likely data outbound. If you have requests for different ads, then your disk might be the bottleneck. If red 30 sticky eye algorithm for deciding who sees which ad is complex, then you might overload your server. I'm making the assumption here that the attackers don't know or care about red 30. They make simple requests and they do the damage that they do. Simple brute-force can be very effective in denial-of-service but not all attacks are brainless not even all denial-of-service attacks. There are denial-of-service attacks that are symmetric, where attacker and [[Microsoft Defender|defender]] spend roughly the same amount of resources. For these, an army of bots makes the attacks work. These distributed attacks are also harder to block because they come from all over. There are also asymmetric attacks, that chew up way more of the defender's resources than the attacker's. A zip bomb is a good example. The attacker sends 10 bytes and the defender chews through a gig of disk.
>
> **[1:34](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/denial-of-service?u=76281980&t=94)** Or the attacker sends a carefully crafted sequel request that requires large intermediate results, searching unusual combinations that are in indexed, or otherwise requires lots of memory or disk access. I can make a very small zip file expand to gigabytes. Every compression algorithm has a way of expressing I have a string of X that repeats Y times. So, if I have a string of eight As, in a row, I can represent it as A times eight. If I have a string of ABC repeated eight times, I can represent that with ABC times eight. And if I tell the system A times MAXINT I get two to the 32nd or two to the 64th worth of As, which could really fill up a disk. Modern devices help battery life as a feature. Some wireless security cameras are designed to run for a year on a pair of double A batteries. Cool. As long as no one finds a way to run them down in a day. In denial-of-service attacks against your wallet, an attacker might break into a cloud service, install [[Cryptocurrency]] mining software, and exhaust your budget while building their own. The simplest way to defend against denial-of-service attacks is with an abundance of resources that are hard for attackers to exhaust. This is also great for serving lots of customers quickly and is obviously expensive. Defending against distributed attacks is something
>
> **[3:10](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/denial-of-service?u=76281980&t=190)** best done at the network or cloud provider layers. Defending against clever attacks requires that you profile your applications and know how they're going to behave. Much like information disclosure spans security and [[Privacy]], keeping systems available is both a security property and a reliability property but more, it's good engineering.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Defender|Defender]] (3), [[IoT]] (1), [[Cryptocurrency]] (1), [[Privacy]] (1)
> **Env Vars:** abc (2), stride (1), maxint (1)
> **CLI Commands:** make (2)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - the (1)

#### [Elevation of privilege](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/elevation-of-privilege?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/elevation-of-privilege?u=76281980&t=1)** - The E in STRIDE stands for elevation of privilege, reducing the set of restrictions applied to you. So if you're currently restricted to send network packets to the AD server, you might elevate to run code or even Root on that machine. If someone can change something and their response is they shouldn't be able to do that, you may have an elevation of privilege attack. Some elevation of privilege issues relate to things protected only by obscurity like the admin control panel that used to be hidden on our [[Web Servers]] before we realized that was not a good idea and fixed it. Many other elevation of privilege attacks relate to how unprivileged input is parsed or confusion about the difference between code and data. For example, a [[SQL]] injection attack elevates privilege by running code that a web server passes to a database where the web server has taken its input data and allowed some of it to be treated as code. Similarly, a cross-site scripting attack gives an attacker the run code privilege and probably others. There's also a slew of classical elevation attacks from Userland to Root that typically exploit set UID programs. The patterns that led to these attacks, abuse of the file system, environment variables, race conditions continue to show up in attacks like Shell Shock.
>
> **[1:34](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/elevation-of-privilege?u=76281980&t=94)** Web servers, mail servers and other attack surfaces can be tricked into relaying exploit code to command shells that receive and run code. It's weird. It's like a shell is designed to want to run commands. Small utilities are easier to design and implement so they do one thing carefully. Their input, parse and logic can be simpler, more robust. These small utilities need to protect against confusion in their environment, state, argument parsing or anyplace else it might take input. Avoiding elevation of privilege attacks involves a well designed and deployed authorization system. Don't let the order of the mnemonic fool you into thinking that one attack or another should be elevated. Each letter is an important part of systematically answering the question, what can go wrong?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (2), [[SQL]] (1)
> **Env Vars:** stride (1), sql (1), uid (1)
> **Definitions:** stands for (1), is an  (1)
> **Analogies:** for example (1), it's like (1)
> **Speakers:** - the (1)

#### [Expansion of authority](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/expansion-of-authority?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/expansion-of-authority?u=76281980&t=0)** - [Instructor] For a very long time, the E in STRIDE has stood for elevation of privilege. Privileged operations are those that normal accounts can't do. They're changes to security configuration and that idea works. But as you really dig in, the relationship between privilege and permissions can get confusing. If the idea of privilege works for you, great. And if you find it confusing, let me introduce expansion of authority. Authority is what a specific program is allowed to do. Being able to read a file is one thing. Being able to write to it is another. And so you can measure authority. Authority is often tied to other security improvements like capabilities, which are like secured file handles. Authority is more crisp and understandable. It gets us away from imprecise definitions, and it makes it natural to start thinking about, "What should this program be able to do?" That's a great frame as you create new systems, especially if the program is running on a modern platform like a cloud, iOS, or [[Android]]. In the privilege lesson, I say, "It's weird. It's like a shell is designed to want to run commands. Small utilities are easier to design and implement, so they do one thing carefully." Those words captured the idea.
>
> **[1:35](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/expansion-of-authority?u=76281980&t=95)** We want to limit the authority that a program has or transfers to someone else. That transfer might be direct command access or it might be transitive. By transitive, what I mean is that a program might be confused about what files it's opening or for whom. We often see this with, say, a web server. A web server needs to be able to open lots of files, and ideally it does so in very specific ways for very specific reasons. You need to enumerate what those reasons are. If you don't or if you don't enforce it, your program may hand its authority to someone else. You need to validate your inputs to make sure you can handle them well. We prefer validation, saying what's allowed, to sanitization, trying to detect and fix dangerous input? So why change the meaning of the E? Elevation has always been a bit of a weird name. We call going from Adam to root elevation, and we call going from Adam to Bob horizontal elevation? As I wrote my threats book, I learned the elevation of concept could be confusing. The expansion definition is easier to understand and use, and I encourage you to use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** ios (1)
> **Env Vars:** stride (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/next-steps-24336177?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/next-steps-24336177?u=76281980&t=1)** - [[Threat Modeling]] is the best way to bring structure to your security work. And it's a skillset that you'll use for the [[Representational State Transfer (REST)|rest]] of your career. If you're interested in learning more, the best way to learn threat modeling is to dive in and do it. Encourage your colleagues to come together for a threat modeling exercise at the start of your next project. If they or you are a little hesitant, or if games are more your speed, I'd invite you to download and play the Elevation of Privilege Threat Modeling game. I created this game to help teach threat modeling with cards that have hints that help you threat model. This course is a great introduction to threat modeling. For a more comprehensive view, check out my book, "Threat Modeling: Designing for Security." If you want to learn more about the STRIDE threats, I have an entire book on them. Well, STRIDE is the core of the book, and the first six chapters cover STRIDE in tremendous depth, and with some fun "Star Wars" stories. It continues on to cover what I think every engineer should know. And I'll add a thank you. The book really exists in part because people take in these [[LinkedIn]] learning courses brought me interesting questions and helped me see that it was needed. A systematic, structured and comprehensive approach to threat modeling will lead you to deliver more robust outcomes in more predictable timeframes.
>
> **[1:37](https://www.linkedin.com/learning/learning-threat-modeling-for-security-professionals/next-steps-24336177?u=76281980&t=97)** As you think about what you're working on in your next project, be sure to ask what can go wrong and what you're going to do about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Threat Modeling]] (8), [[Representational State Transfer (REST)|Rest]] (1), [[LinkedIn]] (1)
> **Env Vars:** stride (3)
> **Definitions:** is a  (1)
> **Speakers:** - threat (1)


## Instructor

- [[Adam Shostack]]

## Path Context

### In [[Become an IT Security Specialist]]
← [[Vulnerability Management in Cybersecurity- The Basics]] | **9 of 12** | [[Artificial Intelligence for Cybersecurity]] →

### In [[Improve Your Threat Modeling Skills]]
**1 of 6** | [[Threat Modeling- Spoofing In Depth]] →

## Appears In

- [[Become an IT Security Specialist]]
- [[Improve Your Threat Modeling Skills]]

---

[↑ Back to top](#)