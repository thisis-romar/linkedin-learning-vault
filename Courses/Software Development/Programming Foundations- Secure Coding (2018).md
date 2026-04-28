---
type: course
cssclasses:
  - lle-course
slug: programming-foundations-secure-coding-2018
url: "https://www.linkedin.com/learning/programming-foundations-secure-coding-2018"
duration_minutes: 156
duration: 2h 36m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHz_x3XQit9Gw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665661027?e=2147483647&amp;v=beta&amp;t=vJbz7MiTx8N0DalQyWnlCRE2Xdyu_GnLxTdQp3WQz7k"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a Programmer- Foundations]]'
prev_courses:
  - '[[Programming Foundations- APIs and Web Services]]'
next_courses:
  - '[[Programming Foundations- Test-Driven Development]]'
path_nav: '[{"path":"Become a Programmer- Foundations","position":10,"total":12,"prev":"Programming Foundations- APIs and Web Services","next":"Programming Foundations- Test-Driven Development"}]'
path_count: 1
tags:
  - course
  - topic/software-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Programming%20Foundations-%20Secure%20Coding%20(2018).md)

![Programming Foundations: Secure Coding (2018)](https://media.licdn.com/dms/image/v2/C4E0DAQHz_x3XQit9Gw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665661027?e=2147483647&amp;v=beta&amp;t=vJbz7MiTx8N0DalQyWnlCRE2Xdyu_GnLxTdQp3WQz7k)

# Programming Foundations: Secure Coding (2018)

> Learn how to incorporate security into the software development life cycle. Move security into your design and build phases by identifying common insecure code issues and embracing the mindset of a security professional. In this course, security architect Frank Moley provides a basic understanding of secure coding practices. Learn how to understand your attackers and risks and mitigate issues at c

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018) | 2h 36m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. Security and Risk Overview** (5 videos)
- **3. 2. Web Client Server Interaction Code Issues** (3 videos)
- **4. 3. Thick App and Client-Server Interaction Issues** (8 videos)
- **5. 4. Crypto and Security Misuse Issues** (3 videos)
- **6. 5. Security in the SDLC** (5 videos)
- **7. Glossaries** (0 videos)
- **8. Conclusion** (1 videos)

### 1. Introduction

#### Implement secure code with your team
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=1)** - You'll find an interesting trend in the security industry, the recurrence of the same flaws over and over again.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=9)** Public disclosure of security flaws and the theft or leaking of sensitive data continues to make the national news.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=18)** With some basic knowledge, a little dedication, and a company culture that embraces security, many of these issues can be preventable.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=29)** This course is designed to provide you with some of the basic knowledge of secure coding.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=37)** My goal is to arm you with the knowledge so that you can capitalize on this information, protect your systems, and prevent the trend of recurring flaws.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=48)** Hi, my name is Frank Moley.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=50)** I'm a software, technology, and security developer and architect.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=56)** I've built security programs for organizations and seen how adding security into agile processes can improve team attitudes and understanding, as well as help you have a better security posture.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-secure-code-with-your-team?u=76281980&t=71)** I invite you to join me on my LinkedIn Learning course about secure coding.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** public (1)
> **Speakers:** - you (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=0)** - If you're a professional software developer, or looking to enter into this crazy chaos that is software development, then this course is for you.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=11)** The consistent theme in this industry is that nothing is consistent.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=17)** As such, we need to be perpetual students.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=21)** The only thing I expect you to be armed with is a knowledge of how to write software in some capacity.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=30)** I don't care about which language you use, or what platform you deploy your code to, but you must understand that some languages are susceptible to one kind of attack while others can be prone to other attacks.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=46)** That is the nature of languages in general.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=49)** They all have their advantages and disadvantages.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=53)** Platforms work in the same way.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=56)** A web platform for instance has very different attack vectors than the embedded software on an IoT device.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=65)** Neither is secure or insecure in its own right.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=70)** It's a matter of handling the challenges that you're presented with in your given situation.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=77)** In order to do that you need to understand they're risks and work from there.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/what-you-need-to-know?u=76281980&t=83)** As you watch this course, I expect you to take the knowledge of the language and platforms you use and apply them to make your code more secure.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - if (1)


### 2. 1. Security and Risk Overview

#### The goal of secure coding
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=1)** - Part of being a good developer is understanding what you need to learn and what you need to stay up to date on.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=7)** So I want to talk about how this course will prepare you for the day-to-day operations as a developer.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=15)** Please keep in mind that this course will not make you all knowledgeable about writing secure code.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=22)** This course is aimed at giving you the information and support that you need to write more secure code.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=30)** In fact, this is one of my primary goals for you.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=35)** There is no way to say you are a secure developer.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=39)** What I want you to take away is the ability to be called a security-minded developer.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=46)** Another goal is to prepare you to be the champion for security practices on your team.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=53)** What I've found in both my personal experiences around security and through discussions with others is that for a team to really embrace any sort of culture of security, you need a champion.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=68)** Now, this champion can come from anywhere in the team.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=71)** But in my opinion, the single most effective place for a champion is within the ranks of development.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=80)** Right or wrong, developers tend to listen to other developers more than anyone else on the team.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=88)** In addition, forcing culture on a team seldom works.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=93)** This is why I believe the developer is the single most effective person on the team.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=99)** They are listened to and they can be the grassroots driver of change.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=106)** The third goal that I have is that you become a more effective reviewer.
>
> **[1:52](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=112)** This may sound strange at first, but if you work on a development team, you can only write a portion of the code on your team.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=121)** So while you may be great at writing code that is more secure, your personal impact in the overall code base is smaller than that of the whole team.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=133)** In most teams, several developers are part of the code review or pull request.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=139)** So your impact can be dramatically increased by simply being engaged in code reviews from a security perspective.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=149)** Now, if you're not a developer, you may wonder what value this course can have for you.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=156)** If you are a development manager, you need to understand what your team is doing, what your team is spending time on, and what risks they are trying to resolve.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=167)** If you're a project manager or a scrum leader, you also need to know why a development task may take longer because of the security concerns.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=177)** And if you are a quality assurance or quality control person for a team, you can leverage this knowledge of exploits and attack vectors to write more effective tests.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/the-goal-of-secure-coding?u=76281980&t=189)** And that's the ultimate challenge, realizing that security has a place for everyone on the development team and embracing it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - part (1)

#### Understand an attacker
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=1)** - The mind of an attacker or bad actor is foreign to many software developers.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=7)** We spent our lives building things that we hope makes the world a better price.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=13)** I know that is kind of cliche, but the reality is most of us really want to write code that improves our business or engages our passion.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=22)** As such, we are builders and makers.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=26)** An attacker, however, has a very different mindset.
>
> **[0:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=30)** They want to tear down what you have built.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=34)** Now, their motivations can be all over the place, and while it is important to understand these motivations, the simple fact that they want to tear down what we build is very hard for many developers to grasp.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=50)** So part of writing secure code is understanding the mindset of the attacker.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=56)** The first component is looking at why they want to break your code.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=62)** Now, the reasons can be as many as the stars in the sky, but each attacker has a reason.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=69)** Most attacks we hear about seem to be financial in purpose, but attacks happen for other reasons, things like political motivations, revenge, or building credit with other bad actors, to name a few.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=86)** I have seen attacks happen because people want to build a reputation as a security tester.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=93)** While I'm not a fan of this type of extortion, it currently is a reason why people are attacking systems.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=101)** Now, regardless of the why, it's very beneficial to figure out all of the possible attack reasons.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=109)** This why is critical because once you know why attackers might disrupt your application, you can start looking at the possible exploits that could exist in your system.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=122)** This is really the heart of understanding the attacker.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=126)** As a developer, truly understanding an attacker is one of the most difficult challenges in my opinion.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=134)** But once you start recognizing the mindset of an attacker, it opens up a wealth of new ways to protect your system.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=143)** For instance, understanding motivations allows you to look at an attack vector in your application by thinking through the lens of the attacker.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=155)** Once you collect this information, you can start building an attack tree.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=160)** The attack tree allows you to build scenarios based on probable attacks.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=167)** With these scenarios, you can determine where you need to add testing, increase threat detection, or apply mitigating controls.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=178)** Getting into the mindset of the attacker can be a huge undertaking.
>
> **[3:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-an-attacker?u=76281980&t=182)** However, it can reap significant rewards to your organizations.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - the (1)

#### Break what you build
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=1)** - As developers, our general strength lies in building systems.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=6)** A huge part of the problem in secure coding is that we are builders.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=12)** So we need to change our mindset a little in order to truly be effective as a secure coder.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=19)** Developers interested in proving their security footprint need to develop the skill of breaking code.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=27)** Now I'm not going to argue that you should be an expert penetration tester, but there is real value in learning the basics of attacking systems.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=39)** Now some developers may want to go deep and learn how to write exploit attacks.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=44)** And while this can be an amazing skill, it's over the top of what you really need to do in my opinion.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=53)** The fact is that there are several really great tools on the market that allow you to attack your code without a lot of extended learning.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=63)** The value of using these tools is that you can start looking at actual exploits in your code.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=70)** By breaking your code, you can gain many valuable insights into your application.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=77)** You will see how data is accessed and used.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=81)** You will see how logging output is generated and eventually consumed.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=86)** It becomes a natural learning exercise that will increase your knowledge of the code base as a whole.
>
> **[1:33](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=93)** One of the biggest benefits of learning to break software is that you get to interact with security professionals.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=101)** This is powerful when you consider how important collaboration is for a development team.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=108)** Constructive collaboration with team members can never be discounted.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=113)** Constructive collaboration with security teams can be even more valuable for today's development teams.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=122)** This concept of DevSecOps really is about bringing security into your development process the same way that we brought operations into our processes for DevOps.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=137)** Everyone on the team learns and becomes responsible for the security footprint of the application.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=145)** Once developers understand how to break software and start to have more constructive conversations with security professionals, the entire team benefits.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=157)** You will hopefully see faster turnaround on bug fixes and better testing as the knowledge base grows on your team.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=166)** Another advantage from learning to break software is that if you know how to break software, you are prepared to fix your software or better yet prevent security defects to begin with.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=181)** This skill of breaking software can create a culture of secure coding.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/break-what-you-build?u=76281980&t=187)** Now I encourage you as a developer to take time to learn the basics and you will find amazing results in how you and your team approach security.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - as (1)

#### Understand your risks
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=0)** - One of the core tenets of security especially in a software development shop is understanding and mitigating your risks.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=10)** An entire course could be devoted to risk management for software teams.
>
> **[0:15](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=15)** But for this course, let's take a quick look at the basics.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=20)** While I would like to convince you that you should test every possible scenario on every release, the reality is that this isn't possible in most businesses.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=32)** There just isn't enough time in the day to write or execute every test.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=38)** If you could write them all, execution then becomes an issue for most teams as long build and development cycles are really an anti-pattern in today's processes.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=52)** To address this problem, focus on the high-risk areas and determine where to get the most reward.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=61)** You'll see an immediate value from automating the mitigations and testing for these high-risk areas on each release.
>
> **[1:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=70)** You will have immediate feedback to your team and stakeholders that the software you are delivering is not exposing you to these risks or at the very least not increasing your exposure.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=85)** Understanding risk isn't only about testing them.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=90)** If a software development team can identify the risks earlier in the process, more emphasis can be applied to requirements, design, and development.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=102)** In software development, we've repeatedly learned that cost savings of fixing issues earlier in the process is significant.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=111)** While the team engages in understanding risks together, the awareness of these risks penetrates every job function.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=121)** When you truly incorporate this model of identifying risks early in your development process, your entire team, your project, and your budget benefit.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=133)** Imagine for a moment you're a developer who understands the risk exposure of your application.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=140)** You can then question requirements and evaluate design decisions that include these risks.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=147)** More importantly, armed with knowledge of secure coding and risks, you can provide more tangible feedback on code reviews.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=158)** Understanding your risk is not static however.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=162)** Risk must constantly be evaluated and updated to match not only the changes in your functionality, but also the changes in the environment around you.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=175)** Everyday, new attacks are discovered, new reasons for being attacked develop, and new information is obtained.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=184)** My suggestion is to leverage a portion of your regular planning sessions to discuss these new risks and do it as a team and apply these changes to your risk register.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=197)** Always keep in mind that the goal of secure coding is not just about the bytes.
>
> **[3:23](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=203)** It's an overall culture that you're trying to create.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/understand-your-risks?u=76281980&t=208)** Understanding risks moves you closer to improving the security culture in your organization.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1), static (1)
> **Cross-References:** earlier in (2)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - one (1)

#### Document what you understand
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=1)** - Documenting your designs, documenting your APIs, and documenting your code are all built into a team's development process.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=10)** What usually isn't part of the process is documenting all of the security decisions you have made.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=17)** Now, I know, I know, I've heard all the excuses in the book about documentation.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=23)** Heck, I've used many of them myself.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=26)** I've heard documentation is dead the minute it's written, or documentation is never read, or that it's too hard to find the answers you really need.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=35)** The point is, though, that regardless of the excuses, there is value in documentation especially in the security realm, as you will see.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=46)** One of the first things that you should document even if only on Post-it Notes is how are going to deal with security-related bugs found in production.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=57)** Now, I won't argue that you need a full-blown vulnerability management plan, you do, but that's for another course.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=65)** You do, however, at least need to have a plan to prioritize and fix production security bugs and route them through your development process.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=77)** This document can be very useful when a really bad bug or an industry scare shows its ugly head.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=87)** You will be better prepared to move the fix quickly to production and protect your company and your customers.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=96)** You should also document your risks in a risk register.
>
> **[1:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=101)** The purpose of this is to not only document the risks that are in the application, but the ways you plan to mitigate those risks.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=111)** This can be very valuable to a team when trying to determine where the risks are in your application during a planning session or design review.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=123)** Having risks documented gives you the foundation when it's time to reevaluate your risks.
>
> **[2:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=130)** I also believe in documenting your risk mitigation and testing strategy.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=136)** This can be easily incorporated into your definition-of-done statement, assuming, of course, that you want security testing to be part of that definition.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=147)** There are a couple of other areas of documentation that I feel are so important that they're worth mentioning here.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=155)** One is documenting your security bugs.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=159)** Now, this is beyond just production bugs that are usually tracked in your issue tracking system.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=165)** This document should be in the form of a bug book.
>
> **[2:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=169)** As you're either fixing or identifying an issue, no matter the phase, you should document it in your bug book.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=178)** This bug book can be reviewed at team meetings as training tools.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=184)** Now, be careful not to make this a blame game.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=187)** Instead, make it an educational tool.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=192)** You may find that your developers can learn from each other's mistakes.
>
> **[3:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=197)** The other is documenting traceability between your automated tests and the risk that they address.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=204)** Now, this documentation should be in the form of a common naming pattern for your tests themselves.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=212)** On reason to do this is that as you evaluate your risks and make changes, you know immediately which tests you need to address, whether it's an update, a rewrite, or a flat out removal from the test suite.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=228)** Another reason is that this will prevent regression of security bugs.
>
> **[3:54](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=234)** These can be especially nasty from a publicity perspective to have that same bug identified multiple times.
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/document-what-you-understand?u=76281980&t=243)** Now, this is just a glance at documentation, but I do hope it gives you a solid perspective into the needs of documenting your security stance and the value around it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Warnings:** be careful (1)
> **Speakers:** - documenting (1)


### 3. 2. Web Client Server Interaction Code Issues

#### Input validation issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=0)** - One of the most repetitive security issues we find in software development today is input validation bugs.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=8)** With input validation issues exist in many different contexts.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=14)** We are going to focus on the client server input validation issues and how to possibly address them.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=21)** Let's get started by talking about the attack vectors at play.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=26)** Injection attacks are one of the most common and most publicized exploits, not just in the input validation arena but globally.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=36)** Often when we think about injection attacks we are talking about SQL injection.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=41)** But there are several other types.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=45)** In fact, anything that is interpreted can be subject to an injection attack.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=53)** The concept is rather simple.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=55)** A structured statement is created, then anticipates user input to complete that statement before it is run through an interpreter.
>
> **[1:05](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=65)** For example, in SQL we could write a statement that is something like SELECT star from users WHERE username equals some value.
>
> **[1:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=76)** Now at run time we take user input and simply concatenate the statement before execution.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=84)** If an attacker can find this scenario, they can provide input that not only completes this statement, but also executes a new statement by simply adding a semicolon.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=97)** This provides the attacker more information about the system than the developer ever intended.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=105)** Scripting attacks are another very common attack based on lack of proper input validation.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=113)** The most common, and continually on the OWASP Top Ten, is cross-site scripting, or XSS attacks.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=122)** The concept again is rather simple.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=126)** The attacker injects a script through a user input field or some other post or put method.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=133)** That script is then served to a victim through his or her browser.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=139)** The script is then rendered in the client browser of the victim and the exploit is executed.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=146)** Often these scripts send data of some kind back to the attacker's server.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=152)** So what I just described is called a persistent cross-site scripting attack.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=157)** However, there are a couple other types.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=161)** Reflected cross-site scripting is often used in phishing attacks, where the malicious script actually originates in the request.
>
> **[2:51](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=171)** There are also exploits in the dom that can be attacked.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=176)** All of these exploits are based on lack of input validation.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=181)** While these attacks can be nasty, the fixes for them are relatively straightforward.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=188)** One approach is to require validation of all user input.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=194)** One such validation technique is called blacklisting.
>
> **[3:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=198)** Blacklists look for key patterns like script tags and filter the input out.
>
> **[3:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=205)** Blacklisting is often one of the first attempts, but they tend to be easy to circumvent and should not be used alone.
>
> **[3:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=215)** Another validation technique is whitelisting.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=218)** And it's much more effective than blacklisting.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=221)** Whitelisting looks at the pattern that the data should have, such as length or symbols, and requires that the data matches that pattern before it's ever accepted.
>
> **[3:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=233)** For instance, an email address must contain the at symbol and end with a dot and a valid top-level domain.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=242)** In either case, the validation should always be applied server side and be the first thing executed.
>
> **[4:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=250)** Now you can apply validations client side to save the server call, but it still must be executed server side.
>
> **[4:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=259)** The reason is that you could always post back to the server without the actual webpage.
>
> **[4:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/input-validation-issues?u=76281980&t=265)** So never rely only on client side input validation.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), select (1), where (1), owasp (1), xss (1)
> **Code Keywords:** let (1), require (1), case, (1)
> **Analogies:** for example (1), such as (1), for instance (1)
> **CLI Commands:** find (2)
> **SQL:** select (1), where (1)
> **Definitions:** is called (2)
> **Speakers:** - one (1)

#### Communication channel issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=1)** - In a client server architecture there is always a risk of a security vulnerability existing in the communication channel between the two systems.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=12)** Because of the way TCPIP works, these communication channels are potential hotspots for attackers to exploit.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=21)** The most common communication channel attack is the theft of sensitive information on the wire.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=29)** An attacker who can gain access to the network of either the client or the server can potentially steal the information on that channel.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=41)** Many businesses, for instance, provide free wifi, which is left open and unencrypted.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=49)** This can become a hot bed of theft and your development team needs to proactively protect your customer.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=58)** Unfortunately some users may set their devices to always trust and connect to public wifi systems, making the ability to spoof these SSIDs an attack vector.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=73)** A spoofing attack is actually simple to prevent through the use of proper transport layer security, or TLS, because the attacker has to man in the middle TLS connections to steal the data, and your user will see browser warnings in this case.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=95)** TLS is sometimes mistakenly referred to as SSL, or secure sockets layer.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=102)** While they both serve as a cryptographic protocol that provides authentication and encryption between systems, the fact is that SSL has been deprecated and replaced by TLS.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=116)** To set up TLS connections a valid certificate is signed by a trusted certificate authority.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=124)** The certificate must be installed on the server side.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=129)** The communication channel itself must be a secure one.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=134)** Therefore, it's always a good practice to redirect all traffic from HTTP to HTTPS.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=142)** If you choose to only accept HTTPS connections, you may frustrate your users.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=149)** Always remember that if your security makes your site unusable it becomes ineffective.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=157)** It is also important that your certificates are valid, trusted, and not expired.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=164)** Tools like open SSL make this validation easy.
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=168)** In addition, you can build up processes to manage your certificates on a regular basis.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=175)** Now when you control the actual code on the client side of the connection, you should always validate the certificate.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=184)** This includes not only checking that it is a valid certificate but that it has not expired or been revoked.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=192)** Each language and framework has tools around not only making TLS connections but doing the validation.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=200)** Often developers skip that validation part.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=204)** So make sure that you don't.
>
> **[3:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=206)** This extra overhead is worth it, because if a certificate becomes compromised you have a way of protecting the client system from accepting a bad connection.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=218)** Which again can cause a leak of sensitive data.
>
> **[3:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/communication-channel-issues?u=76281980&t=223)** Using secure communication channels wherever possible will dramatically increase the overall security on your systems, as well as improve your SEO results, since most of them weigh TLS connections heavier.

> [!info]- Semantic Content
>
> **Env Vars:** tls (7), ssl (3), https (2), tcpip (1), http (1)
> **CLI Commands:** make (2)
> **Code Keywords:** public (1), case. (1)
> **Best Practices:** good practice (1), you should always (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### Session management issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=1)** - Session management vulnerabilities are associated with web application based client server systems.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=8)** Let's take a look at the vulnerabilities and mitigations in this context.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=14)** To understand session management issues, first let's look at how HTTP works.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=21)** HTTP is a stateless protocol which means there is no user data or other information stored between requests in the web server.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=32)** In a pure stateless HTTP system, each and every request is independent of every other request, even if it's the same user with the same browser in the same browsing session.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=48)** Some developers feel the need to maintain some sort of state for the user leading to the creation of the session.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=57)** The session is usually initiated by some event on the website.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=62)** Authentication is usually that event that starts the session and generates the unique token.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=69)** The server shares that token with the client through a cookie.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=74)** Now every subsequent request from the client to the server will send that cookie and the token it contains.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=84)** The server can then use the token in that cookie to look up the session state data.
>
> **[1:31](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=91)** The vulnerability that can exploit this process is called session hijacking.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=97)** Session hijacking works by using the session's tokens which are often created using random numbers.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=106)** If the random number generator isn't secure, a bad actor can simply predict the value of the session identifier for a user.
>
> **[1:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=116)** Once they can predict the pattern through an algorithm, they can generate a seed session and use it to grab the next user's session.
>
> **[2:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=126)** If you find yourself creating tokens for sessions, you must verify that you are using a secure random number generator.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=136)** Most languages have a general random or pseudo random number generator and a secure one.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=142)** Always use the secure generator.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=146)** Lack of communication channel protection can increase session management risks.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=152)** If you don't mark the session token cookie to be secure, it may be passed over HTTP instead of HTTPS.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=163)** Another issue is when you create the session on first visit but don't create a new session when the user logs in.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=173)** A session fixation attack can occur as the pre authentication session token would now point to an authenticated session.
>
> **[3:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=183)** Anyone who grabbed the session on plain HTTP traffic could use it once you log in even though that communication is now over HTTPS with the secure flag now on the cookie between the real user and the server.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=200)** Session creation isn't the only weak point.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=204)** Session termination also exposes potential risks.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=209)** A developer must ensure that when the use logs out the session is invalidated.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=216)** If not, the session token can still be stolen and used by a bad actor even if the user is no longer interacting with the system.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=227)** Likewise, sessions should expire after some period of inactivity.
>
> **[3:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=233)** If the user leaves the browser open but is no longer using the site, there's a risk of the token being stolen and used by someone else.
>
> **[4:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=244)** In such cases, developers should provide timeouts for inactive sessions to protect the user.
>
> **[4:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=252)** While this may frustrate a user to see the timeout, they are more secure when we destroy the session.
>
> **[4:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=258)** Just be open to iterating on the timeout value to keep your users as happy as possible while still being secure.
>
> **[4:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=267)** Very rarely do users actually log out of sites.
>
> **[4:31](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=271)** Instead, they just close their browsers therefore their sessions remain active and can be stolen.
>
> **[4:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=279)** A developer should invalidate the session when the browser closes to ensure the session cannot be stolen.
>
> **[4:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=286)** Now we don't always use sessions in web development but when we do, we need to be aware of the risks.
>
> **[4:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/session-management-issues?u=76281980&t=293)** Protecting users in these situations isn't hard but you have to think about the risks and make a global plan.

> [!info]- Semantic Content
>
> **Env Vars:** http (5), https (2)
> **Code Keywords:** let (2), else. (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), is called (1)
> **Warnings:** be aware (1)
> **Speakers:** - session (1)


### 4. 3. Thick App and Client-Server Interaction Issues

#### Error handling issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=0)** - Error handling is an important part of application development.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=5)** It allows the developer to prevent the application from abnormal termination while also providing a great place for troubleshooting break points when issues do arise.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=17)** What makes it powerful for developers also makes it attractive for bad actors.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=23)** One of the most frequent vulnerabilities comes from information disclosure through error messaging.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=31)** In these vulnerabilities the application raises an error that produces an error status.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=38)** This error status usually results in a message or a redirect in the web world.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=44)** The vulnerability arises when that error message discloses information such as a stack trace or a database dump.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=53)** This information can be very valuable for an attacker trying to gain entry to your system.
>
> **[1:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=61)** Even the disclosure of your internal error codes can be used to attack your system.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=67)** Even how you raise an error can provide an attack point.
>
> **[1:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=72)** One of the most common issues that I have seen in applications of every type is in user authentication flows.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=81)** Often, developers provide different error messages if the user doesn't exist versus the wrong password was entered.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=90)** This level of disclosure can provide a bad actor a brute force vector into your system.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=98)** All of these situations are easy to prevent.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=102)** We must first accept that error conditions will always exist.
>
> **[1:47](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=107)** We need them to exist on our applications for flow control and to protect us from crashing.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=113)** The fix isn't to prevent the errors, it's to accept them and make conscious decisions about what information we display.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=123)** In either error case from our previous example, the developer should only disclose that the situation exists, not which case we're in.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=133)** The language should be consistent so a valid user can take appropriate action, but a bad actor won't be given too much information.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=144)** It takes some time to get good at using consistent language, but often it is just a matter of taking the time to document the messages.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=155)** Review the textual display and make sure that errors don't disclose internal system information.
>
> **[2:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=162)** Also, ensure that they don't display information about your users to attackers.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=170)** Code reviews and documentation can help a bunch in these cases, but an even better model is to actually test your error states.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=181)** When you do so, you can provide guidance through the test about what text should be displayed and what shouldn't be.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/error-handling-issues?u=76281980&t=190)** This can also be a great exercise to ensure your error messages are consistent, valuable, and don't disclose sensitive information.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** raise (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - error (1)

#### Logging and output issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=1)** - We discussed issues with disclosure through error handling and in a similar vein, it's possible to expose too much information in our log messages and system output.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=14)** We will start with log information because it is much easier to inadvertently cause issues in how you write log messages.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=22)** There are two classes of vulnerability in log messages.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=26)** The first is exposure of too much of your internal workings and the second is too much information about your user.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=35)** When you write log messages often you are providing detailed information about what is actually happening in your system.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=45)** This data can be critical when issues arise whether they're security focused or operational in nature.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=53)** But log messages can also provide too much information, making your log aggregations an attack point.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=62)** Events are one of the things you should always log whether they are user events of system events such as authentication or task completions.
>
> **[1:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=74)** You should also always log errors, especially in controls that are designed to prevent attacks against your system such as input and output validation errors.
>
> **[1:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=86)** Session events are also a great place to provide detailed logging specifically on creation, reanimation, or destruction.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=95)** In addition, you need general application flow and connection details in your logs for operations.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=103)** While these things should appear in your log messages, there are several things that should never appear.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=110)** Credentials and connection strings for backing services like databases should never be logged.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=117)** Tokens for sessions or specific events likewise have no place in your logs.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=124)** Encryption operations and keys as well as user passwords also fall into this category.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=132)** Sensitive personal information like email addresses shouldn't be in logs in plain text.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=138)** If this information can be useful in troubleshooting, it belongs in the logs.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=144)** However, it should be hashed using a secure cryptographic hash and then the hash is what should be logged.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=154)** That way you could recreate the hash for troubleshooting but not the reverse.
>
> **[2:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=159)** If the information has no value in troubleshooting, it shouldn't be in the logs.
>
> **[2:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=165)** One useful strategy for logging is to provide a set of methods that write to the logs instead of directly calling the logging APIs.
>
> **[2:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=176)** This allows you to provide uniformity and proper sanitization of the log data to protect the system and the users all while promoting good security and operational behavior.
>
> **[3:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=191)** Application output also needs to be inspected.
>
> **[3:15](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=195)** System output should be validated just like user input to ensure that you are not creating risk to other systems that may be downstream.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=207)** Data should be filtered and sanitized so that the user sees what they need to but not so much that an attacker could use it as an exploit.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=218)** Since many systems are used by both users and other systems, the output can expose other vulnerabilities and should be treated as something to be protected.
>
> **[3:52](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=232)** These vulnerabilities really come down to disclosing enough information to help you do your job but not so much that you become the attack point.
>
> **[4:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/logging-and-output-issues?u=76281980&t=243)** It's a fine line but one that a collaborating team can solve.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), just like (1)
> **Code Keywords:** protected (1)
> **Cross-References:** we discussed (1)
> **Best Practices:** you should always (1)
> **Speakers:** - we (1)

#### Internal data management issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=1)** - There are often many data points an application needs in order to operate successfully.
>
> **[0:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=8)** These data points can be as simple as URLs and other resources and as complex as encryption keys.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=16)** While this data is needed for applications to operate, in the wrong hands, they can be treacherous to a system.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=25)** Let's start our discussion with a common use case and that is connecting to a remote service.
>
> **[0:31](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=31)** Usually, to connect to a remote service, you need to store the URL of that service along with the credentials or tokens needed to consume that service.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=42)** That information is needed by your application at runtime.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=45)** Serving that data at runtime can be the challenge.
>
> **[0:50](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=50)** The attack vector associated with this should be relatively straightforward.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=55)** If you expose the data you need for your system to operate, the attacker can then use that same data to mimic you to your backend service.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=67)** The attacker can then use the mimic behavior to manipulate the backend service and either exploit it or cause it to make your system exploitable.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=80)** Solving these problems are actually very straightforward.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=84)** One way to help solve these issues is through a secret storage service.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=89)** Your system needs a way to securely authenticate to the service, so you still need to protect that data point.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=98)** Then, it can get the data it needs to operate at runtime.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=103)** These tools are powerful for your application, because many of them also provide ways to rotate your credentials.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=111)** Another key takeaway to prevent vulnerabilities related to data management is to ensure developers never commit sensitive information to source control.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=123)** Even non-prod systems can provide an attack vector into your application or your system as a whole, so no sensitive information should ever be checked into the software configuration management or SCM.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=138)** Finally, you should consider using certificates for your systems where there is a client/server component.
>
> **[2:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=146)** Two-way certificate pinning allows your client to both authenticate with the server side but also to ensure the validity of the server side.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=157)** This protects the internal data of both systems.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=160)** This, coupled with secure client-side storage and digitally signed software updates will allow you to protect the data your application needs, its connections to the source systems, and help ensure valid traffic flows.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/internal-data-management-issues?u=76281980&t=177)** Again, we find that much like other vulnerabilities, these can be mitigated with a little common sense, but we have to understand that the issues exist.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1), this, (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** url (1), scm (1)
> **Definitions:** is a  (1)
> **Speakers:** - there (1)

#### Configuration issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=1)** - A somewhat common theme should be identified by this point.
>
> **[0:05](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=5)** We find that in many cases the process that make running, deploying and troubleshooting an application much easier can also be used to exploit an application.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=18)** Configuration of our application is another such case.
>
> **[0:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=22)** So what is configuration?
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=25)** To SANS for instance, secure configurations apply to the systems and servers.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=32)** It's the software and operating systems the machines are running on.
>
> **[0:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=37)** It's definitely critical to keep systems patched.
>
> **[0:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=41)** But from a development perspective, this isn't configuration.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=45)** When I talk about securing your configuration, I'm referring to the feature flags, options, and other data elements that your application needs to run, but they can be optionally configured at startup or runtime.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=62)** Many times as developers, we want to soft rollout of features through the use of feature flags, or provide ways to put the application into a higher state of logging.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=75)** Inherently, these features are not bad on their own, however they can expose the system.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=84)** For instance, if you're developing a feature and want to roll it out to beta testers that you trust, you may put a feature flag in place.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=94)** Your beta testers have the documentation to turn that feature on.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=99)** But you acknowledge that it may still have bugs.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=104)** If those bugs expose the system to attack, compromise, or some other vulnerability, you have now exposed that application.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=115)** Likewise, if you expose backing service URLs through configuration that can be modified by the user, or worse an attacker, you can trick the application into exposing information by simply changing the URL.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=133)** Mitigating these attacks is actually relatively easy.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=137)** First off, consider packaging beta versions of your software separately and deliver them to your trusted beta testers directly.
>
> **[2:28](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=148)** This will reduce the risk of feature flags exposing software that isn't ready for primetime.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=155)** Also be careful of what functionality you expose through configuration.
>
> **[2:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=161)** If the configuration exposes where sensitive information or application information goes, or how it is exposed, reconsider how that configuration is set.
>
> **[2:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=173)** If an attacker can identify how to modify the level, type, or location of this information, they can use it to expose details of your system, or your users.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=187)** Consider data in the database, such as preferences as well.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=192)** In a thick application where the database is embedded or on the local file system, preferences act as raw configuration flags.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=202)** Attackers can manipulate this data to expose an attack vector into your application stack.
>
> **[3:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=210)** One final place to consider configuration is in your runtime itself.
>
> **[3:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=216)** For instance, if you are using an application server to run your application, it's default configuration will most likely expose too much information about your application.
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=229)** You should apply best practices from organizations like OWASP when configuring your runtime to prevent information disclosure that could be used to attack your application.
>
> **[4:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=242)** Once again, it comes down to common sense.
>
> **[4:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=246)** Only expose options you need to expose.
>
> **[4:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=251)** Don't rely on configuration for handling sensitive flows and processes.
>
> **[4:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=257)** Protect your internal processes, especially sensitive ones.
>
> **[4:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/configuration-issues?u=76281980&t=262)** And don't flex their behavior based on configuration or preferences.

> [!info]- Semantic Content
>
> **Analogies:** for instance (3), such as (1)
> **Env Vars:** sans (1), url (1), owasp (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** case. (1), type, (1)
> **Documentation:** the documentation (1)
> **Warnings:** be careful (1)
> **Speakers:** - a (1)

#### Database issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=1)** - We talked about a couple of the potential issues with databases from other perspectives, but databases and other backing services are used in multiple ways in targeted attacks.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=13)** Let's start our discussion once again with SQL injection attacks.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=18)** I mentioned these attacks when we discussed user input validation and indeed that is a good mitigation for these attacks.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=27)** Another good mitigation is the frameworks and strategies that we use to connect to databases.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=34)** SQL statements should include bind variables and parameters.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=39)** Now, you can write full statements or use bind variables.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=44)** Creating full statements is susceptible to injection attacks because those statements are often concatenated with user input strings like in our previous example.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=56)** But, when you use bind variables and parameters, you remove that risk because of how the drivers will create the statement for you and escape the dangerous behavior.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=69)** Using a bind variable allows you to place a variable in the statement where you expect the user input to be added.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=78)** For instance, select star from user, where username equals some bind variable.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=84)** Then, we will execute the statement by passing a parameter for a bind variable from the validated user input.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=94)** This strategy dramatically reduces any risk of injection attacks.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=100)** Databases have other issues and one goes back to Secure communication channels.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=106)** Often, database connection strings are performed using plain text communication channels.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=113)** If you own the database client code, its runtime, the network, and the database system, and all of the hardware involved, you may be tempted to think you aren't at risk.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=127)** We must, however, consider that all too often the internal user is the most dangerous attacker in a company.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=136)** The proper way to connect to database systems is through secured channels.
>
> **[2:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=142)** Most, if not all databases, allow for encrypted communication between the client and the server.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=151)** Yes, there is more configuration for both the DBA and the developer, but not having a way for someone to sniff the traffic on the line is worth it.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=163)** If an attacker comes from the inside, they can simply sniff the line instead of attacking the application itself.
>
> **[2:52](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=172)** As a developer, you must ensure you are only using secured connections to databases.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=179)** Databases also often contain sensitive information.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=184)** Now, disk level, or table level encryption of the database does offer some value.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=190)** But, they really don't protect the data in the database.
>
> **[3:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=194)** The only way to truly protect the data from an attacker is through the use of application level encryption.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=202)** If the application itself is handling the encryption, assuming cryptal operations are being done correctly, then you know that you're providing the best protection to the underlying data from a potential attacker.
>
> **[3:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=217)** Databases are valuable to developers for many clear reasons.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=221)** And as such they are great targets for attackers.
>
> **[3:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/database-issues?u=76281980&t=225)** Consider this when you interact with databases and apply some good practices.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), dba (1)
> **Cross-References:** we talked about (1), we discussed (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - we (1)

#### File and I/O issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=1)** - The file system can be a dangerous place for applications, and bad actors love to leverage it to find exploits.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=10)** Attacks of the file system can be relatively easy to exploit, because it's a great learning arena for new attackers.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=19)** Furthermore, the results can be devastating to the systems.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=24)** As we look at the risk management flow, the ease of attack in conjunction with the damage potential, should yield a clear need to take these seriously.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=36)** There are several areas we need to focus on with file systems and file input and output.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=43)** The first we will discuss is often more infrastructure focused, but in a devops world, the line is very blurred.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=52)** You need to ensure your application is run in a user process that is controlled.
>
> **[0:59](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=59)** You should only provide access to the file system for that user that the application needs in order to run.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=68)** This is often considered in server side application, especially in the Linux world, but the same cannot be said for desktop or mobile applications.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=78)** While sandboxing environments help, the fact is that the developer still needs to only allow the application to read and write from a finite location on the file system, and the process needs to only have that same access.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=96)** When an application needs to read from the file system, for its behavior, consider using read-only files in these cases.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=106)** Attackers love to modify files that applications need to operate, in an attempt to exploit the application.
>
> **[1:54](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=114)** By leveraging read-only files or media, the attacker has less opportunity for attack.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=122)** Another important attack vector is a run file upload.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=127)** When systems allow file uploads, it becomes an easy way to impact the system as a whole.
>
> **[2:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=134)** The first scenario is a system that parses a file that a user uploads.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=140)** An attacker can inject malicious data that forces data leakage, unexpected operations, or simply cause crashes, making the system unavailable.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=151)** The situation is worse if the contents are stored on a remote system or database.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=158)** The mitigation for this attack is one that we have discussed, and that is input validation.
>
> **[2:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=164)** The system should not trust the data in the file without first inspecting it for malicious behavior, based on how the data is consumed.
>
> **[2:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=175)** Another scenario is infected file upload.
>
> **[2:59](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=179)** While this generally is an infrastructure concern, developers need to be aware of the scenario in order to engage the infrastructure teams.
>
> **[3:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=189)** The attack is again easy to exploit.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=193)** The system allows file upload, so the attacker embeds some form of malware into that upload.
>
> **[3:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=200)** The fix for this is as simple as providing a sandboxed area for intermediate uploads.
>
> **[3:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=207)** The upload process should write the file, and then trigger a malware scan.
>
> **[3:33](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=213)** Once the file is determined clean, another process can move it to its final location, and so our theme continues.
>
> **[3:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=223)** Never trust what your users provide you.
>
> **[3:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/file-and-i-o-issues?u=76281980&t=226)** Provide as much isolation as you can, and never provide more trust than is absolutely necessary.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Code Keywords:** yield (1)
> **Warnings:** be aware (1)
> **Speakers:** - the (1)

#### Memory management issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=1)** - Memory management vulnerabilities are a very special class in that they're only exposed in certain languages and certain situations.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=10)** The most common and the one that I will focus on is the buffer overflow attack.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=16)** I want to start by providing a clear indication of how bad buffer overflow vulnerabilities are.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=24)** There are several yearly contests that result in large sums of prize money for security researchers that compromise systems, often called rooting.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=34)** Some of the most profitable vulnerabilities are called Zero Days are a result of buffer overflow attacks.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=43)** These attacks are catastrophic and can be expensive to say the least and unfortunately are hard for those developers who deal with higher level languages to see or understand.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=56)** In higher level languages, for instance, we seldom deal with raw memory allocations.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=62)** Even in languages like Go, Java and C#, where we have pointers, we're not usually able to manipulate raw memory without dipping into unsafe code.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=75)** As such, these languages are usually safe from these errors.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=81)** There are lessons to be learned, however, from those of us that use these higher level languages.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=87)** So, I encourage you to to listen and find parallels in how you deal with data structures in your code.
>
> **[1:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=96)** In lower level languages like C for instance, you are dealing with arrays and pointers to them.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=103)** And ultimately the memory allocated to them.
>
> **[1:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=108)** As such, you are now fully responsible for checking the bounds of the array and here enters the problem.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=117)** Let's say, for instance, you declare two variables.
>
> **[2:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=120)** The first is a character array of say 10 bytes and the second is an unsigned integer of say four bytes.
>
> **[2:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=129)** They happen to be next to each other in memory.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=133)** Now, you have a program that asks for input and stores that value into the first array.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=140)** You expect no more than nine characters in your response, however, you don't check the length of the input, you just write it to the variable.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=151)** If an attacker writes a value that is say 13 characters in size, it will overwrite the four bytes of the integer with the last one being a stop byte.
>
> **[2:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=163)** Now, if your program then accesses the unsigned integer, and the attacker has done his or her homework, the program may execute other instruction sets often at the command of the attacker through user input or exception flows.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=181)** Now, some exploitations can impact the stack, others can impact the heap but both can be leveraged in specific cases and neither is pretty.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=192)** There are a couple of mitigations that you can put in place but really there's only one fix.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=199)** One of the mitigations is to randomize your memory allocations so that the likelihood of memory spaces touching is decreased but this is nowhere near perfect.
>
> **[3:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=210)** The same can be said for various protections for pointers, executable space or stack alteration.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=218)** Again, while this protection strategy can be good mitigation for legacy code, it is not foolproof.
>
> **[3:47](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=227)** The best way to protect against these attacks is actually a three-fold approach.
>
> **[3:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=233)** The first is to use when available native protections in your development language.
>
> **[4:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=240)** In addition, you should validate your inputs to ensure they're within the acceptable bounds and they cannot overflow the buffer.
>
> **[4:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=249)** Finally, leveraging a good testing strategy.
>
> **[4:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=254)** One thing you should note is that even if you aren't writing code in assembly, C, C++ or Fortran, you may be leveraging components that are.
>
> **[4:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/memory-management-issues?u=76281980&t=266)** You need to consider this whenever you write code that input and boundary checks are always important.

> [!info]- Semantic Content
>
> **Analogies:** for instance (3)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Speakers:** - memory (1)

#### Dependency issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=1)** - Dependency Management is often the bane of software engineering.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=6)** When it comes to security-related topics, it's even more so of a problem.
>
> **[0:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=12)** Many times when we write software, we can write the most secure code ever and still be susceptible to security vulnerabilities because of a dependency.
>
> **[0:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=24)** We all know the stories of the old and vulnerable component that caused a system, its data, or worse, all the customer data to become exposed.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=36)** Some of these leaks have been so bad that they put a large portion of the population at risk for credit fraud or identity theft.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=45)** This is something we must always remember when writing software and trying to secure it.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=51)** So obviously, the exploit is out of our control since we don't own the code.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=57)** Now, if it's an unpatched defect, we could of course fix it ourselves assuming it is open source code.
>
> **[1:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=64)** However, that still is a process.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=67)** The reality is however, that many of the vulnerabilities have already been discovered.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=73)** These discoveries are documented and often, they indicate the dependency inversion number that is impacted by the security issue.
>
> **[1:23](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=83)** They also often document when the issue was fixed.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=88)** As such, the simplest path then, is to upgrade your components to a fixed version.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=95)** Now I don't want to pretend that this is easy from a system level.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=99)** But as for fixing issues with dependencies, it often resolves the issue.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=105)** We will assume for the sake of this discussion that nothing new is introduced, which of course, is not always the case.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=113)** The real question however, is not how to fix these, but instead, how to identify them.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=121)** There are actually several tools, some free like from OWASP, that run scans on your bill of materials, or dependency graph, and identify which of your dependencies are actually vulnerable to an attack.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=137)** Some paid tools even have detailed analysis that provides more information about the attack possibilities.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=145)** But ultimately, they all point to similar, if not identical databases of CWEs and CVEs.
>
> **[2:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/dependency-issues?u=76281980&t=154)** So your strategy needs to simply be this, stay on top of dependencies, look for problem spots, and address those problems as needed.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), this, (1)
> **Env Vars:** owasp (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Speakers:** - dependency (1)


### 5. 4. Crypto and Security Misuse Issues

#### Authentication and password issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=0)** - Authentication is not an easy operation when it comes to modern software.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=6)** On paper, it looks very straightforward.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=10)** User comes to your site, enters their username and password, and clicks submit.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=16)** You then evaluate the username and password and determine if this is indeed the correct person and go from there.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=25)** Simple, right?
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=26)** Well, not so fast.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=29)** Authentication itself has many security implications.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=34)** One such attack is an enumeration attack, which we've already discussed.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=39)** If you provide separate messages when a wrong password is entered, versus when an unknown user enters your system, you are telling an attacker if they have the username correct or not.
>
> **[0:52](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=52)** So, the key here is keep the messaging consistent.
>
> **[0:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=57)** Another issue to address is the actual time it takes to perform authentication.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=63)** This is a case where faster is not better.
>
> **[1:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=67)** We're going to talk about cryptographic algorithms in a bit, but know that some hashing algorithms are slower than others, and when it comes to authentication, slow is not a bad thing.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=80)** Now, when I say slow, we're talking about hundreds of milliseconds slower, not seconds or minutes.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=88)** The reason for this is because a faster algorithm gives an attacker more operations per unit of time to brute force a password, so the key here is use a good password hashing algorithm.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=105)** Another issue that just makes the previous two worse is simply allowing password brute force attacks.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=113)** If you do not provide a maximum number of bad password attempts before you institute a lockout procedure, you're setting your site up to be attacked.
>
> **[2:05](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=125)** Not only will this put your customer data at risk, but you will also be allowing more load on your system than you even should be.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=136)** The key, here, is having a maximum number of incorrect attempts and storing those failed attempts in a database.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=145)** Storing this data in a session is not sufficient.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=151)** So, I want to point out a couple other issues really quickly, because in all honesty, we could go on for days.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=160)** Never stores your customer's password, encrypted, or worse yet, in plain text.
>
> **[2:47](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=167)** You have zero reason to know, or be able to identify a customer's password.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=174)** If you can do so, an attacker can as well, if they gain access, so only hash passwords.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=184)** Also, leverage short-lived unique links for passwords resets.
>
> **[3:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=190)** Password reset functionality should provide unique tokens to customers through their verified email address.
>
> **[3:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=198)** You should never provide them a password in a plain text email.
>
> **[3:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=204)** You should also never allow anyone from your company to manipulate their passwords or impersonate the customer.
>
> **[3:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=214)** Also, like before, consider how you respond to password changes on screen.
>
> **[3:41](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=221)** If you know the user, is the messaging the same, or different, than if you don't know them?
>
> **[3:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=229)** A final point that I want to bring up about authentication and passwords is consider the complexity.
>
> **[3:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=236)** You would be better served to only use lowercase letters in a password of sufficient size, than a short password with complex rules.
>
> **[4:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=247)** The first is easier for the user to memorize, while the latter is next to impossible.
>
> **[4:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=254)** While I won't argue that special characters and uppercase letters add to the search space, I will state that an all lowercase, 29 character, dictionary word based password would currently take over a trillion years to crack randomly.
>
> **[4:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=272)** An eight character password, with symbols, numbers, and mixed case, can take minutes to guess.
>
> **[4:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=279)** Authentication issues can arise if you don't take this topic seriously, which, believe it or not, can be the case.
>
> **[4:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authentication-and-password-issues?u=76281980&t=288)** I urge you to really think about authentication and passwords the next time you interact with that part of your system.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), case. (1)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** you should never (1)
> **Speakers:** - authentication (1)

#### Authorization and access control issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=1)** - Providing authentication for an application is only half the battle.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=6)** You also need to provide the rules around what that person can access.
>
> **[0:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=11)** This is called authorization, and faulty authorization can lead to security defects that often are hard to track down.
>
> **[0:21](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=21)** So let's start with the basics of what issues exist around authorization.
>
> **[0:26](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=26)** Often, defects arise in this arena because we either have access control lists in place, but they aren't applied correctly, or they simply haven't been applied.
>
> **[0:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=39)** In either case, a user could get access to resources or data that he or she shouldn't have access to.
>
> **[0:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=48)** Consider the use case where your site has a user portion and an administrator portion.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=55)** If you don't have solid access control lists, your users could access your admin section of your site.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=63)** This obviously give them more control that they should ever have access to.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=69)** Now consider that in your admin site, you can see all the demographic and personal details of your customers.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=77)** Imagine not only the negative publicity your application would receive, but even more importantly, your customers could potentially have their identities stolen.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=87)** And your site would be responsible.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=90)** A couple of rules to consider when doing authorization.
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=94)** First off, you should always do authorization checks server-side in a client-server program, and never client-side only.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=104)** If a user impersonates the client side, and you don't check rules server-side, you will potentially expose protected transactions.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=115)** In addition, all permission state changes should require logging out, and logging back in.
>
> **[2:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=123)** Even your privileged users should have ACLs in place, and not be able to change them in a single session.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=132)** Often for troubleshooting and support, we put impersonation models in place.
>
> **[2:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=138)** But they should only be part of authentication, and the session should be static when it comes to permission models, to help protect from internal threats.
>
> **[2:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=149)** Furthermore, each transaction should check the authorization of the user.
>
> **[2:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=155)** It should not simply be checked once.
>
> **[2:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=158)** This becomes even more critical in microservices architectures where the systems are distributed.
>
> **[2:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=166)** You should only serve data, or execute transactions, if the principle has the authority to do so.
>
> **[2:54](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=174)** So mitigations for these risks are twofold.
>
> **[2:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=178)** First and foremost, you need good controls in place around how you review, and control access within your application.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=188)** Using code reviews, design reviews, and even acceptance criteria can help you evaluate authorization during development.
>
> **[3:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=199)** This will not only help you prevent issues, but it will also help you understand the authorization flows that exist.
>
> **[3:28](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=208)** In addition to reviewing code, you should focus on documenting and discussing changes to access control lists on a regular basis.
>
> **[3:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=219)** The second mitigation, and maybe even more effective, is good testing of your ACLs on every build.
>
> **[3:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=228)** You should leverage role-based users in your test suites, and look at every transaction from both the positive and the negative perspective for every role.
>
> **[4:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=240)** Essentially, you're building a matrix to check all of your access controls.
>
> **[4:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/authorization-and-access-control-issues?u=76281980&t=247)** Spend some time in processes and testing, to help prevent these security risks from becoming an issue for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1), protected (1), require (1), static (1)
> **Definitions:** is called (1)
> **Analogies:** imagine (1)
> **Best Practices:** you should always (1)
> **Speakers:** - providing (1)

#### Cryptography issues
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=0)** - Cryptography is a very hard subject for most developers.
>
> **[0:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=6)** Thankfully, those that do understand cryptography are very good at it and make things easier for the rest of us, assuming we follow the rules correctly.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=18)** So let's start by talking about the security risks associated with broken cryptography.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=25)** First and most common is the use of broken cryptographic routines.
>
> **[0:33](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=33)** Now the term broken is a little overloaded here.
>
> **[0:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=36)** When I say broken, most often it means that the algorithm has been cracked, theoretically can be cracked, or has a flaw that has been identified.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=49)** Many developers implement an algorithm for encryption, hashing, or digital signatures that they have used before but it may no longer be considered safe.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=62)** The mitigation for these flaws is quite simply to use the latest and greatest algorithms that serve the current and possibly future purposes.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=73)** Now you don't need to be bleeding edge but you do need to use algorithms that are not yet cracked and I do mean not yet.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=84)** There is a risk that cracking will be possible in the future for any algorithm.
>
> **[1:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=90)** So you also need to keep tabs on the algorithms that you use and their acceptance by the industry.
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=99)** Ultimately, upgrading is needed.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=102)** One thing to note, closely associated here is choosing the wrong algorithm.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=109)** Say you need to hash passwords, you could use SHA-2 from a pure crypto perspective.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=117)** However, it is too fast of an algorithm and opens you up for brute force attacks.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=124)** Instead, consider something like bcrypt.
>
> **[2:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=128)** That being said, ensure you are also using the right algorithm for the use case.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=136)** Second, there is a case where developers misuse or misunderstand the algorithms that they are using.
>
> **[2:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=145)** Things like initialization vectors, salt, nonce, and other parameters have valid places in certain crypto algorithms and should not be ignored.
>
> **[2:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=157)** In addition, often key sizes can fall into this arena because insufficient key size can ruin a great algorithm.
>
> **[2:48](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=168)** This can lead to cases where the algorithms are no longer as safe as they should be because the implementation was not correct.
>
> **[2:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=177)** The mitigation for these flaws is to ensure you are using the algorithms correctly.
>
> **[3:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=184)** If you don't know, ask.
>
> **[3:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=188)** I have yet to meet a developer who knows everything.
>
> **[3:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=193)** As such, it's perfectly okay and honestly advisable to be a little humble and ask questions.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=202)** Misusing algorithms can be as dangerous relatively as not using them at all.
>
> **[3:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=209)** Of course, there's a little exaggeration there.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=212)** But opening yourself up to rainbow attacks because you don't understand salt is a pretty bad flaw that could be solved with a simple question.
>
> **[3:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=223)** One that honestly bothers me is inappropriately implemented crypto algorithms.
>
> **[3:50](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=230)** There are some developers that feel that they know crypto well enough to implement the algorithm's more efficiently.
>
> **[3:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=238)** I won't say that they fail more often than not, but leading crypo and security researchers usually argue that they do.
>
> **[4:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=247)** The possibility of a closed homegrown implementation having a flaw is too great for most companies to accept.
>
> **[4:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=257)** The mitigation for this is quite simply never roll your own crypto.
>
> **[4:23](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=263)** I call this the first rule of crypo club because in my mind, it's a no-brainer.
>
> **[4:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=269)** I feel like I have a good grasp on crypto and I would never in a million years roll my own crypto for a customer or an employer.
>
> **[4:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=279)** There are good libraries out there that you can use.
>
> **[4:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=283)** The moral of this whole story is ask questions.
>
> **[4:47](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=287)** If you wonder if an algorithm is cracked, ask.
>
> **[4:51](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=291)** If you wonder if an algorithm is poor, ask.
>
> **[4:54](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=294)** If you need to understand an API, ask.
>
> **[4:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/cryptography-issues?u=76281980&t=298)** You get the rest of the picture.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5)
> **Code Keywords:** let (1), case. (1)
> **Env Vars:** sha (1), api (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - cryptography (1)


### 6. 5. Security in the SDLC

#### Embrace security in design
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=0)** - As we begin talking about culture changes around secure coding, I think it is only fitting to talk first about the point where most developers begin their engagement, and that is the design.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=14)** Design is a great place to start looking at ways to make your application more secure for various reasons, but I want to focus on some strategies for how to take security into account during design.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=28)** I like to start all of my design activities by looking at the system design.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=34)** Whether it's a complete system in waterfall or a simple feature in Scrum, the system itself is key.
>
> **[0:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=43)** By looking at what you are building, you can start looking at ways to destroy it, and that is in my opinion one of the greatest assets for a secure developer.
>
> **[0:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=55)** I feel very strongly that developers struggle with security because they are trying to build, not tear down.
>
> **[1:03](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=63)** Good security people learn how to tear down systems.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=68)** They learn how to exploit features to attack the system.
>
> **[1:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=73)** This is what you should aim for in design.
>
> **[1:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=77)** Look at your system or even your feature with a critical eye.
>
> **[1:21](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=81)** Identify the weakest points in your design from a security perspective.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=87)** Armed with the knowledge that we've just looked at, do you run the risk of injection attacks or memory attacks?
>
> **[1:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=94)** Do you leverage a database and therefore have to work around database issues?
>
> **[1:39](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=99)** The list goes on and on.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=102)** But the point is you are creating an inventory of risks.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=106)** These observations on your design can then be used during development and testing to ensure you are putting appropriate controls in place.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=118)** Sometimes it is an active control.
>
> **[2:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=121)** Sometimes it may be passive.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=124)** Sometimes they may be compensating controls and sometimes you may determine the risk is too great and you simply remove the feature completely.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-design?u=76281980&t=136)** The point is you have collected the information, made observations, and started the conversation with security early in the development process, and that is one critical component of a culture of security.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - as (1)

#### Embrace security in development
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=1)** - Obviously, there was a large focus in this course on the development side of secure coding.
>
> **[0:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=7)** But I want to emphasize a little about how you can leverage this knowledge to positively impact your culture.
>
> **[0:14](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=14)** First and foremost in my mind is education.
>
> **[0:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=19)** If you have seen any of my other courses or heard me speak, you should get a feeling that I am all in on education.
>
> **[0:28](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=28)** This course may be the start for you in secure coding and security in general, but please don't make it the last.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=38)** You have to start living this stuff at least a little in order to really grasp the full reality of it.
>
> **[0:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=45)** Follow blogs and Twitter because that is how you will hear of the new attacks you may need to react to.
>
> **[0:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=53)** If you hear of a vulnerability the day it is announced and the component you use, you will have the information to fix the issue before it becomes one for you, assuming of course you weren't hit before the announcement.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=68)** You also need to test your own skill sub.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=71)** Try and execute a few attacks every now and then.
>
> **[1:15](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=75)** Practice reading buggy code and practice fixing it.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=79)** These skills alone will make you better at peer reviews.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=84)** You also need a dose of humility.
>
> **[1:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=87)** This is a very important aspect of working in security in my opinion, and one that I personally struggled with a lot, especially at first.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=97)** You will not know everything there is to know.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=100)** You will make mistakes.
>
> **[1:43](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=103)** Just own it.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=104)** It will make you a better developer, a better secure developer, and honestly a better person.
>
> **[1:51](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=111)** You also need to be the change agent for your team.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=115)** Development is hard, we know that.
>
> **[1:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=118)** Security is even harder, but a champion will help the the team more than any mandate pushed down from above.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=127)** You may inspire others to start down the path with you.
>
> **[2:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=132)** The most important aspect, however, is to apply this knowledge often.
>
> **[2:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=137)** Look at code reviews from The Security Mindset, look at development tasks and designs and try to break them, look at risks and ensure they're properly mitigated.
>
> **[2:30](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=150)** Question behavior that seems to put your company or your customers at risk.
>
> **[2:36](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-development?u=76281980&t=156)** Be the champion.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Definitions:** is a  (1)
> **Speakers:** - obviously (1)

#### Embrace security in testing
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=1)** - In my mind, no single aspect of the SDLC can have as much impact as testing.
>
> **[0:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=9)** Unfortunately no single aspect of the SDLC is ignored as much as testing.
>
> **[0:17](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=17)** Testing for security is no exception, in fact it may be even worse.
>
> **[0:23](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=23)** There are three key strategies to testing for security.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=27)** The first strategy is to leverage attack trees.
>
> **[0:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=32)** As a team, you will design user personas and attack trees that give you step by step attack vectors against your application.
>
> **[0:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=42)** You can then weigh the likelihood of these attacks and the risks presented by them.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=49)** Once you have this information, you are given an ordered list of scenarios that should be mitigated.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=56)** You then write test to confirm the mitigations are in place.
>
> **[1:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=62)** This testing is highly effective in assuring that your controls are in place correctly to help protect your system.
>
> **[1:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=71)** These tests if properly automated, can then be run on every build and every release.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=79)** Now, keep in mind these trees do change over time, so your scenarios and tests will also have to change.
>
> **[1:28](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=88)** The next strategy is to leverage the risk register.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=92)** As a team, you should maintain a list of risks within your system.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=98)** These risks will have controls and mitigations in place.
>
> **[1:42](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=102)** Some of these risks should be security focused.
>
> **[1:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=106)** And this is where testing comes into play.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=109)** Your risk register should be leveraged in testing to ensure that your risks are handled appropriately.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=117)** As such, your security risks should also be tested on each and every release.
>
> **[2:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=124)** Once again, risks change, and you have to address these changes in your existing tests as well as new tests.
>
> **[2:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=133)** Another area that testing comes into play is with penetration testing tools.
>
> **[2:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=139)** You may not have a security focused person on your team who can do this.
>
> **[2:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=144)** As such, you may have to take the lead.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=147)** Penetration tools often require an initial learning curve to use.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=152)** And then, often another sometimes steeper learning curve to understand and interpret the results.
>
> **[2:40](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=160)** This testing however can become essential to making your software more secure by identifying results.
>
> **[2:50](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=170)** Some tools can even plug into your CI/CD pipeline, and self-discover your system based on your other tests or service documentation.
>
> **[3:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=181)** These tools can be expensive, but are very powerful.
>
> **[3:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=187)** You should not try to tackle all of theses tests at once however.
>
> **[3:12](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=192)** Make a testing plan that works on one area, and try to make significant headway in that area before moving on to others.
>
> **[3:22](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=202)** A word of caution here, while you may be tempted to start with penetration testing, keep in mind the security mindset of the whole team.
>
> **[3:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=212)** If you dump a list of vulnerabilities on them day one, they may never catch up.
>
> **[3:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-testing?u=76281980&t=218)** Work together and focus on your plan.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), cd (1)
> **Code Keywords:** this. (1), require (1), self (1)
> **Warnings:** keep in mind (2), caution (1)
> **Env Vars:** sdlc (2)
> **Speakers:** - in (1)

#### Embrace security in deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=1)** - Deployment of code is one of those areas that all too often gets ignored when it comes to developing a secure coding plan.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=10)** This is an unfortunate oversight, as there are many ways to improve the security of your system at this point.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=18)** One of the weakest points of secure deployments is how you manage the sensitive configuration of the systems being deployed.
>
> **[0:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=27)** The use of files on a file system or in a startup script all too often count as secure enough, when in reality, they fail.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=38)** They expose significant attack vectors into your systems or the systems you depend on.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=46)** There are, however, very powerful tools and patterns that can be leveraged to improve the secrecy and security of these sensitive data points.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=58)** Some of the tooling have sophisticated APIs and startup routines that ensure your system will get its config, and no one else can.
>
> **[1:09](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=69)** If you're deploying to a containerized framework, you also likely have built-in support for secrets, so at least consider using those.
>
> **[1:19](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=79)** Another step that seems to increase the security is automation.
>
> **[1:24](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=84)** Any time a human has to be involved in deployments, you increase the risks of compromise.
>
> **[1:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=92)** The operator may make a mistake with permissions or leave something open that shouldn't be.
>
> **[1:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=98)** Worst-case scenario, the operator may get disgruntled and become the bad actor.
>
> **[1:45](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=105)** While automation is by no means a complete stopgap, it can be a great opportunity to prevent internal attacks.
>
> **[1:55](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=115)** By forcing code through a peer review cycle, and then only deploying through an automated gating process, you can ensure that the code running in production has been fully vetted.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=127)** As long as the boxes doing the deployments themselves are secured, you have set yourself up to be more secure than not.
>
> **[2:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=136)** There are several other aspects of secure deployment strategies, but that could be a course on its own.
>
> **[2:23](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=143)** My purpose here is to get you thinking of ways to improve your culture of security around deployments.
>
> **[2:31](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/embrace-security-in-deployment?u=76281980&t=151)** As always, try and think like a bad actor and see how you can prevent attacks, and focus your efforts there first.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - deployment (1)

#### Implement best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=1)** - Security is often a moving target.
>
> **[0:04](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=4)** When you are starting down this path of secure coding, and ultimately, a culture of security, it's easy to get lost.
>
> **[0:13](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=13)** I'm going to suggest you focus on the most current best practices.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=18)** Consider development tasks like source control, unit testing, static and dynamic code analysis, and peer-reviewed best practices to help secure your code.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=29)** Don't be afraid to attack them one at a time and get processes in place that work for you.
>
> **[0:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=35)** You don't, however, have to re-create the wheel.
>
> **[0:38](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=38)** There are several great resources on the web for free that will help you build a platform of secure development.
>
> **[0:46](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=46)** Requirements and design are no different.
>
> **[0:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=49)** A lot of time and effort has been put into developing secure practices around these tasks.
>
> **[0:56](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=56)** Again, many of them are published for free.
>
> **[1:00](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=60)** Consider risk management as one of the bigger areas here, and focus on how the industry is managing risks and documenting them.
>
> **[1:08](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=68)** While not everything will work for you, you may find enough to get you started, and ultimately, save you some valuable time.
>
> **[1:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=78)** One area I would highly suggest you follow industry standards around is vulnerability management.
>
> **[1:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=85)** Many people have put in a lot of time to developing standards and strategies for companies and teams to manage their vulnerabilities.
>
> **[1:35](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=95)** Things like scoring, ranking, and prioritizing vulnerabilities have been solved, as well as ways to accept those risks.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=104)** Tracking and reporting on vulnerabilities has also been vetted pretty well in the industry.
>
> **[1:50](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=110)** As always, you will make parts of it your own, but definitely use what you can.
>
> **[1:57](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=117)** Finally, when it comes to testing and deployment, there is a lot documented, but you will have to work through a significant amount of it on your own.
>
> **[2:07](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=127)** Start with the basics and reach out to the community.
>
> **[2:11](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=131)** A lot of work around penetration testing and automated deployments has been solved, but things like attack trees are not as common.
>
> **[2:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=140)** You may prioritize your individual workloads based on what is done and what isn't.
>
> **[2:27](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=147)** Ultimately, I want to encourage you to start somewhere.
>
> **[2:32](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/implement-best-practices?u=76281980&t=152)** Try out what your peers are doing and go from there.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** static (1), finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - security (1)


### 7. Glossaries


### 8. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=1)** - Throughout this course we have looked at several different yet important aspects of secure coding and culture, so let's review.
>
> **[0:10](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=10)** We spent some time talking about what secure coding is all about and why it is important.
>
> **[0:16](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=16)** We talked about our goals.
>
> **[0:18](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=18)** We talked about the attacker persona.
>
> **[0:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=20)** We talked about how to focus on breaking and not just building.
>
> **[0:25](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=25)** And we talked a lot about risks and documentation.
>
> **[0:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=29)** This foundation led us into a discussion of vulnerabilities.
>
> **[0:34](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=34)** We spent a significant portion of this course going through a lot of the most common defects that routinely appear as security issues.
>
> **[0:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=44)** We talked about what they were, how they manifest themselves, and some basic strategies to mitigate them.
>
> **[0:51](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=51)** Each of these classes was unique but shared enough similarities to develop patterns of mitigation.
>
> **[0:58](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=58)** We then talked a little bit about building a culture of security within various areas of the SDLC.
>
> **[1:06](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=66)** While this course wasn't about culture, it really is an important part of secure coding as a whole, and I highly encourage you to spend time on developing a culture of security within your organization.
>
> **[1:20](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=80)** Because of the vastness of this topic, I hope that I gave you enough of a taste of secure coding for you to dig in a little deeper.
>
> **[1:29](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=89)** It is a wide and deep focus area but one that an experienced developer can find rewarding as well as lucrative.
>
> **[1:37](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=97)** I hope you have found value in this foundation.
>
> **[1:40](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=100)** I want to thank you for your time in this course.
>
> **[1:44](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=104)** It means a lot to me to have spent this time with you even virtually.
>
> **[1:49](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=109)** My commitment does not end when this course is over.
>
> **[1:53](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=113)** I respond to requests on Twitter and Stack Overflow on all of my content here or any other public platform where I present on.
>
> **[2:02](https://www.linkedin.com/learning/programming-foundations-secure-coding-2018/next-steps?u=76281980&t=122)** I love learning and sharing knowledge, so please reach out to me with questions or ideas.

> [!info]- Semantic Content
>
> **Cross-References:** we talked about (4)
> **Code Keywords:** let (1), public (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Env Vars:** sdlc (1)
> **Documentation:** stack overflow (1)
> **Speakers:** - throughout (1)


## Instructor

- [[Frank P Moley III]]

## Path Context

### In [[Become a Programmer- Foundations]]
← [[Programming Foundations- APIs and Web Services]] | **10 of 12** | [[Programming Foundations- Test-Driven Development]] →

## Appears In

- [[Become a Programmer- Foundations]]

---

[↑ Back to top](#)