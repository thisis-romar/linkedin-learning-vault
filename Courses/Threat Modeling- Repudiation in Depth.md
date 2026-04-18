---
type: course
slug: threat-modeling-repudiation-in-depth
url: "https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth"
duration_minutes: 25
duration: 25m
level: Intermediate
updated: 8/27/2024
learners: 67716
skills:
  - Threat Modeling
  - Cybersecurity
exercise_files: false
tags:
  - course
  - topic/security
  - skill/threat-modeling
  - skill/cybersecurity
status: not-started
created: 2026-04-17
---

# Threat Modeling: Repudiation in Depth

> Repudiation—the third stage in the STRIDE threat modeling framework—involves the acceptance or denial of responsibility. In the case of identity theft, repudiation comes into play when victims deny involvement with the charges racked up by the criminal. These threats impact all sorts of systems, and security professionals and developers need to understand how they work, and how they can ensure tha

> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth) | 25m | Intermediate | 68K learners

## Instructor

- [[Adam Shostack]]

## Skills Covered

- Threat Modeling
- Cybersecurity

## Table of Contents

### Introduction

#### The threat of repudiation
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=1)** - It was like that when I got here.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=3)** The check is in the mail.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=5)** Repudiate means to revoke.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=7)** To deny involvement in.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=9)** It's a slightly different threat.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=11)** One that often happens at a human layer.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=14)** To claim something didn't happen or that you weren't responsible.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=18)** Repudiation is nearly as old as speech, and as new as the latest hot app.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=24)** This course is part of a series on threat modeling.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=27)** And the stride pneumonic for threats.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=30)** I'm Adam Shostack.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=32)** I've written the most popular book on threat modeling, helped create the CVE, and I'm on the Black Hat Review Board.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=39)** In this course you'll learn about threat modeling.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=43)** A structured and systematic approach to finding security threats early in a project while there's still time to address them.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=50)** Let's take a deep dive into repudiation and how to address it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** cve (1)
> **Speakers:** - it (1)

#### Four-question framework
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=1)** - At the heart of threat modeling are four incredibly simple questions.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=5)** What are we working on?
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=6)** What can go wrong?
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=7)** What are we going to do about it?
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=9)** And did we do a good job?
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=12)** These questions act as guideposts as you're reflecting on your work.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=17)** If you're not sure why you're doing what you're doing, tie that work to one of the questions.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=24)** In this course, I'll be digging deep into details around what can go wrong and what are we going to do about it through the lens of spoofing and authenticity.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=34)** Spoofing is a broad threat.
>
> **[0:36](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=36)** I can spoof computers, people, or files.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=39)** The mechanisms are quite different as I do, but all involve breaking authentication.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=45)** Looking at these four questions through a spoofing lens is part of the systematic, structured, and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - at (1)

#### Repudiation as part of STRIDE
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=0)** - [Narrator] This course is part of a series on threat modeling and the STRIDE threats.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=5)** STRIDE is a mnemonic that stands for spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=16)** We'll cover how repudiation impacts our ability to rely on communications in real world processes and how it relates to fraud.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=25)** You'll also learn about how to protect your systems.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=28)** Let's go super abstract here, or not.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=31)** I'm going to repudiate the whole line of thinking and go concrete.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=35)** Going to repudiate the promise to go abstract.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=38)** I'm going to get concrete and blame my producer, Andrew, for misspelling repudiate in a draft graphic.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=46)** Here it is.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=47)** Repudiation is about taking responsibility, being accountable, or trying to avoid it.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=54)** We'll cover how people repudiate things they did and how to demonstrate what really happened.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (2), let (1), super (1)
> **Env Vars:** stride (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Technical Repudiation

#### Message repudiation
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=0)** - [Instructor] I didn't get your email.
>
> **[0:02](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=2)** I didn't see your text.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=5)** I missed your Facebook post.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=7)** We've all said these.
>
> **[0:08](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=8)** And sometimes we've even been telling the truth.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=12)** Before we really delve into the threat of repudiation and defenses against it, I want that reality to sink in.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=20)** Messages do get dropped by servers, eaten by spam filters, or other technical issues.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=26)** You might silence calls from unknown callers.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=29)** Someone might just be overwhelmed.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=32)** Repudiation isn't always a false claim.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=37)** It's also crucial to understand that repudiation can be an essential part of how we make things run smoothly and quickly.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=47)** Design for the mistakes that will happen.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=50)** People will make sure you hear about them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Operational repudiation
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=0)** - [Narrator] How many times have you heard a developer say, "It works for me!"
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=5)** Repudiation doesn't need to be about messages or communications.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=10)** It can be about operational issues, how the software works on this computer or that one.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=17)** That might be about the code itself.
>
> **[0:20](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=20)** It might also relate to a library or configuration file that wasn't checked in.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=26)** One of the reasons we have software build the software that runs the business is that we can track and manage these issues.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=35)** Repudiation can also be about a process like package delivery.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=39)** Which brings up another important part of repudiation, "It's not my fault."
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=45)** More importantly, it might be nobody's fault.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=47)** Repudiation can be about a mistake or an oversight.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)


### 2. Fraud

#### Buyers and sellers
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=0)** - Fraud used to be the exclusive domain of sellers.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=3)** For example, with fake Gucci handbags.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=7)** But today, the seller is at the end of a global supply chain and may think they bought and are selling the real deal.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=16)** With credit cards and mail order, there's now also fraud by buyers.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=22)** I didn't get the package.
>
> **[0:24](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=24)** The package didn't have a real Gucci bag.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=27)** My credit card was stolen.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=30)** And speaking of payments, more and more startups are offering to move money by app.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=35)** What could go wrong there?
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=38)** Also, it's entirely possible that there's theft or substitution going on behind the business owner's back.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=47)** The sorts of data capture that you do to help make the business run smoothly can also help show what was done by whom and when, and that can help you handle repudiation claims.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=62)** But when someone says the money, the goods didn't show up, maybe they're telling the truth.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=68)** Who knows and how do they make a case for that truth?
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=72)** Whose left holding the bag?
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=78)** This isn't even a Gucci bag.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - fraud (1)

#### Intermediaries
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=0)** - [Instructor] Platforms like eBay, Etsy, and even World of Warcraft are intermediaries.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=6)** They help parties to a transaction come together.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=10)** Intermediaries include app stores, shippers, and payment processors.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=16)** Each of these can end up in the middle of your repudiation problems.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=21)** Retail platforms will have people selling fake goods, and selling goods that the platform forbids.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=29)** App stores have to worry about fake apps brandsquatting.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=33)** And who pays the reimbursement when the fake Nevada company takes the money and runs?
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=39)** Shippers and their logs are important to repudiation proceedings, but they're not always the hearers of the story.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=47)** Sometimes their employees will commit frauds or let collaborators know about a pile of packages left on a porch.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=56)** In at least one case, the delivery folks took pictures of the packages they left on porches for a very few minutes.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=65)** Lastly, while repudiation isn't any fun, designers of complex multiplayer games will find all of these frauds taking place between characters in their games.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** ebay (1)
> **Speakers:** - [instructor] (1)

#### Account takeover
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=0)** - [Instructor] Account takeover is a common problem.
>
> **[0:04](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=4)** People are bad at keeping their accounts secure and frankly, we're bad at helping them.
>
> **[0:10](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=10)** See my spoofing class for a lot of details but after someone manages to login as you, they can do whatever they want with your account, wire money, tweet, email your friends saying that you're trapped in a hotel in London.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=26)** And after they've done those things, you have to repudiate their words or actions.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=31)** Clean up.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=33)** Or maybe you claim your account was taken over after a night of regrettable tweeting.
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=40)** So let's say you're a platform provider and someone claims their account was taken over and they want it back.
>
> **[0:48](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=48)** What factors do you consider?
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=50)** Do you have their previous favorite pizza topping, first car or other security questions?
>
> **[0:57](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=57)** Or did you discard those on change?
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=60)** Do you track when you send a password reset email and make that information easily available to investigators?
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=68)** Next, let's say you're a platform provider and someone claims their account was taken over and they want you to make a statement to that effect.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=78)** Do you?
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=79)** Most won't and I'm unsure how long that will be a defensible position.
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=85)** From the repudiation perspective, the investigations look the same.
>
> **[1:30](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=90)** Would you be comfortable having yours subject to public scrutiny?

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), public (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Identity Theft

#### Identity theft and repudiation
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=0)** - [Instructor] The phrase identity theft is used in many ways.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=5)** And the mechanisms can be pretty country-specific, which is a challenge for a global course.
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=12)** Generally, there's a couple of phases to identity theft.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=17)** They are first, an initial crime of impersonation, second, repudiation of the charges or debts that the criminal has accumulated, and potentially third, an ongoing process of trying to clear up one's good name against credit agencies.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=37)** If the impersonation starts with a fraudster getting key information like a social security number, then that cycle can repeat over and over, to the great frustration of the victim.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=50)** The deepest systemic problem is shifting responsibility to the victim.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=56)** They don't design the authentication process.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=59)** They don't issue the driver's license or credit card.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=63)** But they have to fight a bureaucracy that treats all repudiation as false.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=69)** But it's there that the label of identity theft makes some sense.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=74)** Victims feel their good name has been stolen.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=78)** Don't make the problem worse.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Catfishing, deepfakes, and voice cloning
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=0)** - That problem of someone's good name being stolen is an awful problem for today's victims of financial fraud.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=9)** But not all identity theft is about finances.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=13)** Impersonation can involve all the things you learned about in spoofing, including deepfakes and voice cloning.
>
> **[0:22](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=22)** Having a deepfake made of you can be a quite disconcerting experience.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=28)** These technologies break some very deep-seated assumptions.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=34)** Do you think Groucho Marx ever said, "Who are you going to believe, me or your own eyes?"
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=39)** No, it was Chico.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=41)** He was being ironic.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=43)** But technology has caught up with irony.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=47)** It's always been reasonable to say, "I heard Adam say", because faking that was hard.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=55)** We're going to need to adjust our expectations of what we can believe.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - that (1)


### 4. Attacks on Logs

#### Attacks on logs
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980&t=0)** - [Instructor] We'll cover defenses in-depth in chapter six, but for now, understand that logs, yes, logs, are a primary way of dealing with repudiation, and so, they can come under attack.
>
> **[0:14](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980&t=14)** Someone breaks into your server.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980&t=16)** They'll delete the logs.
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980&t=18)** They'll fill the logs so your software deletes them, and so you needed logs of what's happening on your servers at a system, shell and application level, and you need to keep those logs around.
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980&t=32)** Typical log rotation rules were last updated in the 90's when disc cost dollars per megabytes.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980&t=39)** Now, it's pennies per gigabyte, but we haven't updated the rules, and by default, Linux still rotates out your logs after seven days.
>
> **[0:50](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980&t=50)** Pushing logs to a dedicated logging system allows you to manage and protect storage, to perform correlation and analysis, and gives you something to look at when local copies of your logs have been trashed, and gives you something to look at when local copies of your logs have been burned.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (1), default, (1)
> **Speakers:** - [instructor] (1)

#### Attacks via logs and response systems
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=0)** - [Instructor] Attacks follow data.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=3)** And sometimes that data flows through logs to attack analysis systems.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=9)** Sometimes, attackers will send data that's designed to munge your log processing or display, login attempts that are designed to interfere with REgExp, HTML display, SQL statements or anything else.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=23)** Login attempts for accepted, login attempts with 10,000 characters in them, login attempts that include attacks on the server.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=33)** On the log processor or anything else.
>
> **[0:37](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=37)** One tremendously important point is to be crisp and clear on what fields come from attackers, I mean users or attackers.
>
> **[0:47](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=47)** (mumbling) I guess I mean either because I don't know how to distinguish in advance.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=55)** A process name comes from a kernel so it's safe or not.
>
> **[0:59](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=59)** If it's not clear why not, think about where process names come from on a traditional desktop or server operating system.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=68)** The more exposed to the internet your system is, the more randomly you'll see attackers behaving.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=74)** It's also important to understand that the really interesting bits are not the first bits, the last bits or anything predictable.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=84)** As storage costs fall, so does the payoff from truncating the information that comes in.
>
> **[1:31](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=91)** Lastly, sometimes attackers will deliberately set off alarms to take your attention away from the thing they're really attacking.
>
> **[1:40](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=100)** Attackers are never more gleeful than when they're using your response systems against you.

> [!info]- Semantic Content
>
> **Code Keywords:** else. (2)
> **Env Vars:** html (1), sql (1)
> **Speakers:** - [instructor] (1)


### 5. Repudiation in Specific Technologies

#### Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980&t=0)** - [Narrator] When moving to the cloud means uploading machine images, you get the same logs from the machine you did in your data center, except you don't get the hypervisor logs or their outer logs.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980&t=13)** In contrast, when you're rearchitecting for the cloud, using more and more of the new technologies offered by the big infrastructure providers, your logs change.
>
> **[0:25](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980&t=25)** And your logs change even more when you move to software as a service.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980&t=30)** There, the logs you get may not be what you need and logging may not be your provider's top goal.
>
> **[0:38](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980&t=38)** It's important to test your ability to use the logs that you get.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980&t=43)** You need to simulate predictable situations and repudiations, and discover if the logs are sufficient.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980&t=52)** Of course, this is not limited to repudiation.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980&t=56)** But when your customers have a deep stake in the outcome, knowing what's knowable is important.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)

#### AI and machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=0)** - [Instructor] There're a lot of deep learning systems whose results are hard to understand.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=5)** And it's okay if sometimes your pictures of cats also include a picture of a sweater or a teacup.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=11)** But when your AI is making more impactful decisions, and I hope it is, then some of those decisions are going to be ones that people want to understand, contest or reject.
>
> **[0:23](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=23)** So for example, if you're a payment processor, using an AI to make decisions about what transactions to refuse, your merchants are going to want details.
>
> **[0:33](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=33)** If you're delivering spam filters, the people whose emails are blocked are going to want to know why.
>
> **[0:39](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=39)** Sometimes, this is referred to as explainable AI or transparency.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=45)** It's not always cheap or easy but that doesn't mean it's not important.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=51)** Also important, you want to test your AI for viruses including those that come from the training data.
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=58)** As I was prepping this course, there was a story in the news about a lady whose Apple credit card had a much lower credit limit than her husband's despite her higher credit score.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=70)** Nor did Apple or Goldman Sachs could explain why.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=74)** There's over 37,000 stories about this listed on Google News.
>
> **[1:19](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=79)** You don't want to have to repudiate your own product.

> [!info]- Semantic Content
>
> **Analogies:** picture (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Crypto and blockchain
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=0)** - [Instructor] One of the advantages of a blockchain is that it creates a consensus ledger where assertions are recorded.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=7)** Usually, those are assertions like this public key controls this Bitcoin, but those are just numbers, anything that can be represented as a number, any digital information can be recorded in a blockchain.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=21)** This creates a situation where those records are effectively immutable because the blockchain consensus mechanism relies on hashes of the previous blockchain.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=31)** So if you alter it, you break the verification.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=35)** If you say, I watched Adam's class today and it was awesome, thanks, then the fact that you did that on that date is recorded.
>
> **[0:43](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=43)** If you say, I got five Bitcoins from Joe in payment for a stolen Picasso, then that's a bad deal, and it's also visible forever.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=52)** You can't repudiate the statement.
>
> **[0:54](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=54)** Sometimes that's a good thing, but other times, you don't want to be admitting to receiving stolen property.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=60)** Yet, other times, it will turn out that it was a forged stolen Picasso, bummer.
>
> **[1:06](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=66)** It's in some blockchain forever.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=69)** More, if a fraudster got a hold of your keys, it's recorded.
>
> **[1:14](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=74)** In many systems, repudiation is built-in.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=78)** Some people see that as a feature, some see it as a bug.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1)
> **Speakers:** - [instructor] (1)


### 6. Defenses

#### Cryptographic defenses
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=0)** - [Instructor] Let's distinguish digital signatures from electronic ones.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=5)** Both are ways to sign things.
>
> **[0:07](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=7)** An electronic signature is what a website does to make a cheesy little graphic version of your signature.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=13)** A digital signature uses public key cryptography and in that sense, the use of a digital signature with public key cryptography is a mathematically unambiguous statement.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=26)** This private key was used in a mathematical operation on this document.
>
> **[0:31](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=31)** We use RSA and other asymmetric algorithms for this and call it a signature and in many ways, it's very strong non-repudiation.
>
> **[0:42](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=42)** It's often done with a hash of the document or message.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=46)** A cryptographic hash is a function that's designed to be easy to compute and hard to predict.
>
> **[0:52](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=52)** Any change to the input should permute the entire output.
>
> **[0:56](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=56)** It's sometimes called a one-way function or a trap door to capture that one-way nature.
>
> **[1:01](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=61)** A hash takes any amount of input and produces a fixed length output.
>
> **[1:07](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=67)** That size used to be nice and simple.
>
> **[1:09](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=69)** Md5 had 128-bit output.
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=72)** Newer functions have their output size in their names.
>
> **[1:16](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=76)** We can use hashes in binary trees where each leaf is the hash of a document or message and each parent is the hash of its children.
>
> **[1:24](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=84)** Then, any change can be inserted very efficiently and the root is derived from the complete current state of the tree.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=93)** If that root is published in an old-fashioned paper newspaper, then the state of the tree can be demonstrated at the time of publication.
>
> **[1:41](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=101)** This also gives strong non-repudiation.
>
> **[1:44](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=104)** Signatures are useful for documents.
>
> **[1:47](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=107)** Hash trees are useful for events or chains of events like logs.
>
> **[1:52](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=112)** Blockchain can serve the same purpose with different costs and verifiability mechanisms but let's threat model this.
>
> **[2:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=120)** The possession of the private key, the information given to the signer and the intent of the signer may all be contested.
>
> **[2:07](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=127)** The public key might be stolen.
>
> **[2:09](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=129)** The software used to create the signature might display a fake document.
>
> **[2:14](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=134)** The signer may think they're decrypting something when the software is generating a signature.
>
> **[2:19](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=139)** Cryptography gives us a whole toolbox of ways to address repudiation.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (2), private (2), function (2), this. (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** rsa (1)
> **Speakers:** - [instructor] (1)

#### Logs
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=0)** - [Narrator] Logs record what happened when and store it for later analysis.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=5)** That's way simpler than all that crypto and sometimes it's enough to meet your needs.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=11)** So what should you log?
>
> **[0:12](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=12)** There's a model that can help, but it's a bit complex.
>
> **[0:15](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=15)** Ready?
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=17)** Log who, what, why, when, and where.
>
> **[0:21](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=21)** These are not just logs for debugging, they're logs for investigation later and so what you need are the facts.
>
> **[0:27](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=27)** Just the facts.
>
> **[0:29](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=29)** Log the who.
>
> **[0:30](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=30)** Is this a network connection?
>
> **[0:32](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=32)** Log the IP and the DNS.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=34)** If it's a local account, log the who and remember that lots of systems have layers of login.
>
> **[0:41](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=41)** I can run commands as Bob via SU and then log into the data base as Charlie.
>
> **[0:46](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=46)** To the extent that you can, capture all of those names.
>
> **[0:51](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=51)** Log what they're doing, commands and arguments.
>
> **[0:55](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=55)** Log what choices you make and why.
>
> **[0:58](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=58)** Log and denied versus log and denied for bad IP address.
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=63)** Also, log the weird.
>
> **[1:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=65)** Anytime you come to the end of a switch or case statement and you're not sure what to do, say so.
>
> **[1:10](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=70)** Log when things happened.
>
> **[1:12](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=72)** For most things there's no need to resolve microseconds, but there's not a lot of value in throwing it away.
>
> **[1:18](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=78)** Log where it happened.
>
> **[1:20](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=80)** What system did this happen on?
>
> **[1:22](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=82)** Who defined the names that way?
>
> **[1:25](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=85)** Logging details as they come is helpful.
>
> **[1:28](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=88)** Log the facts, what's coming in, decisions you make, and the reasons behind the decisions.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=95)** There's a form called canonical logging where at the end of a transaction you emit a single log message with all the relevant details possibly in a different logging channel.
>
> **[1:46](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=106)** This dramatically reduces the hard work of reassembling it all.
>
> **[1:51](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=111)** I'll log that Adam Showset came to the end of this script in booth 18 at 22:57:34 and didn't have a piffy end to this video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Ports:** :57 (1), :34 (1)
> **Code Keywords:** switch (1)
> **Env Vars:** dns (1)
> **Speakers:** - [narrator] (1)

#### Log analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=0)** - [Instructor] Logs are rarely stored in the customer service desk and the form of logs is rarely what the customer service agent needs, nor are they stored in a form that's helpful to developers, incident responders, or the myriad other people who might need to use them.
>
> **[0:16](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=16)** The process of constructing and delivering useful information from logs is less like security and more like typical product management.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=26)** You need to understand the normal use cases and make sure the logs stick around long enough to be used in those circumstances.
>
> **[0:35](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=35)** You should run your data systems in UTC, especially including logging.
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=40)** The value of a timestamp is its consistency with other timestamps.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=45)** Your log analysis software may resolve that into something that's presented with human time zones, but remember, twice a year, politicians mess with clocks and if you operate globally, time zones jump on different days.
>
> **[1:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=60)** This can mess up scheduled tasks.
>
> **[1:02](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=62)** Do they happen?
>
> **[1:03](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=63)** Do they happen twice?
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=64)** When do the logs show it happening?
>
> **[1:07](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=67)** But if you're running in UTC, you can pay less attention to such things.
>
> **[1:11](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=71)** Always run on UTC, unless you're on Mars, but you're not on Mars, so run in UTC.

> [!info]- Semantic Content
>
> **Env Vars:** utc (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Anti-fraud
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=0)** - [Instructor] There are lots of anti-fraud tools in the marketplace.
>
> **[0:03](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=3)** There are a few ways in which they work.
>
> **[0:06](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=6)** They try to instrument your site to detect bots or fraud patterns.
>
> **[0:11](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=11)** They try to fingerprint devices, PCs and phones, to see if those devices are buying things on other sites.
>
> **[0:17](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=17)** They find signatures for fraud, email addresses, phone numbers, or delivery addresses which are associated with fraud.
>
> **[0:26](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=26)** Many of these work across many merchants to help them detect fraud and so can spot bad transactions for you faster.
>
> **[0:34](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=34)** Even the ones that work only on your site will bring lessons learned elsewhere.
>
> **[0:40](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=40)** However, many of these tools suffer from a bias towards false positives.
>
> **[0:45](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=45)** From their perspective, better to tell you all the negatives so you can't say you should've flagged that.
>
> **[0:53](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=53)** You need to make sure that you include their information in your decisions and measure how much good business you're losing to either blocking or making customers jump through hoops.
>
> **[1:04](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=64)** Anti-fraud tools are just tools in your toolbox.
>
> **[1:08](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=68)** Don't let a vendor control how you use them.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Secure by design
> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/next-steps?u=76281980&t=0)** - This course is a great introduction to understanding repudiation threats.
>
> **[0:05](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/next-steps?u=76281980&t=5)** So you can apply them to threat modeling and other security work.
>
> **[0:09](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/next-steps?u=76281980&t=9)** I want to encourage you to watch my other courses here on LinkedIn Learning.
>
> **[0:13](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/next-steps?u=76281980&t=13)** You can also read my book, "Threat Modeling: Designing for Security."
>
> **[0:18](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/next-steps?u=76281980&t=18)** A systematic, structured and comprehensive approach to threat modeling will bring your teams to more secure and robust outcomes faster.
>
> **[0:28](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/next-steps?u=76281980&t=28)** The next time you find yourself working on a new feature, product or service, be sure to consider what can go wrong and what you're going to do about that.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - this (1)


## Path Context

### In [[Improve Your Threat Modeling Skills]]
← [[Threat Modeling- Tampering in Depth]] | **4 of 6** | [[Threat Modeling- Information Disclosure in Depth]] →

## Appears In

- [[Improve Your Threat Modeling Skills]]

## Related Courses

_Courses sharing skills:_

- [[Threat Modeling- Denial of Service and Expansion of Authority]] — Cybersecurity, Threat Modeling
- [[Securing Containers and Kubernetes Ecosystem]] — Cybersecurity
- [[Threat Modeling for AI-ML Systems]] — Threat Modeling
- [[AI in Cybersecurity- The Future of Red Teaming and Blue Teaming]] — Cybersecurity
- [[Building a Cybersecurity Awareness Program]] — Cybersecurity
