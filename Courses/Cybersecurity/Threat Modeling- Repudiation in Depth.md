---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
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
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH8-fXfaBVyxQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1580924049084?e=2147483647&amp;v=beta&amp;t=Joe5xWPFhXDQwGbpluWFw-PoR38vGO2Ce9ypAHxcvZo"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Improve Your Threat Modeling Skills](../../Paths/Cybersecurity/Learning%20Paths/Improve%20Your%20Threat%20Modeling%20Skills.md)'
prev_courses:
  - '[Threat Modeling- Tampering in Depth](Threat%20Modeling-%20Tampering%20in%20Depth.md)'
next_courses:
  - '[Threat Modeling- Information Disclosure in Depth](Threat%20Modeling-%20Information%20Disclosure%20in%20Depth.md)'
path_nav: '[{"path":"Improve Your Threat Modeling Skills","position":4,"total":6,"prev":"Threat Modeling- Tampering in Depth","next":"Threat Modeling- Information Disclosure in Depth"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/threat-modeling
  - skill/cybersecurity
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Threat%20Modeling-%20Repudiation%20in%20Depth.md)

![Threat Modeling: Repudiation in Depth](https://media.licdn.com/dms/image/v2/C4E0DAQH8-fXfaBVyxQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1580924049084?e=2147483647&amp;v=beta&amp;t=Joe5xWPFhXDQwGbpluWFw-PoR38vGO2Ce9ypAHxcvZo)

# Threat Modeling: Repudiation in Depth

> Repudiation—the third stage in the STRIDE threat modeling framework—involves the acceptance or denial of responsibility. In the case of identity theft, repudiation comes into play when victims deny involvement with the charges racked up by the criminal. These threats impact all sorts of systems, and security professionals and developers need to understand how they work, and how they can ensure tha

> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth) | 25m | Intermediate | 68K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [The threat of repudiation](#the-threat-of-repudiation)
  - [Four-question framework](#four-question-framework)
  - [Repudiation as part of STRIDE](#repudiation-as-part-of-stride)
- [**1. Technical Repudiation**](#1-technical-repudiation) (2 videos)
  - [Message repudiation](#message-repudiation)
  - [Operational repudiation](#operational-repudiation)
- [**2. Fraud**](#2-fraud) (3 videos)
  - [Buyers and sellers](#buyers-and-sellers)
  - [Intermediaries](#intermediaries)
  - [Account takeover](#account-takeover)
- [**3. Identity Theft**](#3-identity-theft) (2 videos)
  - [Identity theft and repudiation](#identity-theft-and-repudiation)
  - [Catfishing, deepfakes, and voice cloning](#catfishing-deepfakes-and-voice-cloning)
- [**4. Attacks on Logs**](#4-attacks-on-logs) (2 videos)
  - [Attacks on logs](#attacks-on-logs)
  - [Attacks via logs and response systems](#attacks-via-logs-and-response-systems)
- [**5. Repudiation in Specific Technologies**](#5-repudiation-in-specific-technologies) (3 videos)
  - [Cloud](#cloud)
  - [AI and machine learning](#ai-and-machine-learning)
  - [Crypto and blockchain](#crypto-and-blockchain)
- [**6. Defenses**](#6-defenses) (4 videos)
  - [Cryptographic defenses](#cryptographic-defenses)
  - [Logs](#logs)
  - [Log analysis](#log-analysis)
  - [Anti-fraud](#anti-fraud)
- [**Conclusion**](#conclusion) (1 videos)
  - [Secure by design](#secure-by-design)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The threat of repudiation](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/the-threat-of-repudiation?u=76281980&t=1)** - It was like that when I got here. The check is in the mail. Repudiate means to revoke. To deny involvement in. It's a slightly different threat. One that often happens at a human layer. To claim something didn't happen or that you weren't responsible. Repudiation is nearly as old as speech, and as new as the latest hot app. This course is part of a series on [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md). And the stride pneumonic for threats. I'm Adam Shostack. I've written the most popular book on threat modeling, helped create the CVE, and I'm on the Black Hat Review Board. In this course you'll learn about threat modeling. A structured and systematic approach to finding security threats early in a project while there's still time to address them. Let's take a deep dive into repudiation and how to address it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (3)
> **Env Vars:** cve (1)
> **Speakers:** - it (1)

#### [Four-question framework](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/four-question-framework?u=76281980&t=1)** - At the heart of [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) are four incredibly simple questions. What are we working on? What can go wrong? What are we going to do about it? And did we do a good job? These questions act as guideposts as you're reflecting on your work. If you're not sure why you're doing what you're doing, tie that work to one of the questions. In this course, I'll be digging deep into details around what can go wrong and what are we going to do about it through the lens of spoofing and authenticity. Spoofing is a broad threat. I can spoof computers, people, or files. The mechanisms are quite different as I do, but all involve breaking authentication. Looking at these four questions through a spoofing lens is part of the systematic, structured, and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - at (1)

#### [Repudiation as part of STRIDE](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/repudiation-as-part-of-stride?u=76281980&t=0)** - [Narrator] This course is part of a series on [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) and the STRIDE threats. STRIDE is a mnemonic that stands for spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege. We'll cover how repudiation impacts our ability to rely on communications in real world processes and how it relates to fraud. You'll also learn about how to protect your systems. Let's go super abstract here, or not. I'm going to repudiate the whole line of thinking and go concrete. Going to repudiate the promise to go abstract. I'm going to get concrete and blame my producer, Andrew, for misspelling repudiate in a draft graphic. Here it is. Repudiation is about taking responsibility, being accountable, or trying to avoid it. We'll cover how people repudiate things they did and how to demonstrate what really happened.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (1)
> **Env Vars:** stride (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Technical Repudiation

[↑ Back to Table of Contents](#table-of-contents)

#### [Message repudiation](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/message-repudiation?u=76281980&t=0)** - [Instructor] I didn't get your email. I didn't see your text. I missed your [Facebook](../../Glossary/Service/Facebook.md) post. We've all said these. And sometimes we've even been telling the truth. Before we really delve into the threat of repudiation and defenses against it, I want that reality to sink in. Messages do get dropped by servers, eaten by spam filters, or other technical issues. You might silence calls from unknown callers. Someone might just be overwhelmed. Repudiation isn't always a false claim. It's also crucial to understand that repudiation can be an essential part of how we make things run smoothly and quickly. Design for the mistakes that will happen. People will make sure you hear about them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Facebook](../../Glossary/Service/Facebook.md) (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Operational repudiation](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/operational-repudiation?u=76281980&t=0)** - [Narrator] How many times have you heard a developer say, "It works for me!" Repudiation doesn't need to be about messages or communications. It can be about operational issues, how the software works on this computer or that one. That might be about the code itself. It might also relate to a library or configuration file that wasn't checked in. One of the reasons we have software build the software that runs the business is that we can track and manage these issues. Repudiation can also be about a process like package delivery. Which brings up another important part of repudiation, "It's not my fault." More importantly, it might be nobody's fault. Repudiation can be about a mistake or an oversight.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)


### 2. Fraud

[↑ Back to Table of Contents](#table-of-contents)

#### [Buyers and sellers](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/buyers-and-sellers?u=76281980&t=0)** - Fraud used to be the exclusive domain of sellers. For example, with fake Gucci handbags. But today, the seller is at the end of a global supply chain and may think they bought and are selling the real deal. With credit cards and mail order, there's now also fraud by buyers. I didn't get the package. The package didn't have a real Gucci bag. My credit card was stolen. And speaking of payments, more and more startups are offering to move money by app. What could go wrong there? Also, it's entirely possible that there's theft or substitution going on behind the business owner's back. The sorts of data capture that you do to help make the business run smoothly can also help show what was done by whom and when, and that can help you handle repudiation claims. But when someone says the money, the goods didn't show up, maybe they're telling the truth. Who knows and how do they make a case for that truth? Whose left holding the bag? This isn't even a Gucci bag.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - fraud (1)

#### [Intermediaries](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/intermediaries?u=76281980&t=0)** - [Instructor] Platforms like eBay, Etsy, and even World of Warcraft are intermediaries. They help parties to a transaction come together. Intermediaries include app stores, shippers, and payment processors. Each of these can end up in the middle of your repudiation problems. Retail platforms will have people selling fake goods, and selling goods that the platform forbids. App stores have to worry about fake apps brandsquatting. And who pays the reimbursement when the fake Nevada company takes the money and runs? Shippers and their logs are important to repudiation proceedings, but they're not always the hearers of the story. Sometimes their employees will commit frauds or let collaborators know about a pile of packages left on a porch. In at least one case, the delivery folks took pictures of the packages they left on porches for a very few minutes. Lastly, while repudiation isn't any fun, designers of complex multiplayer games will find all of these frauds taking place between characters in their games.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Identifiers:** ebay (1)
> **Speakers:** - [instructor] (1)

#### [Account takeover](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/account-takeover?u=76281980&t=0)** - [Instructor] Account takeover is a common problem. People are bad at keeping their accounts secure and frankly, we're bad at helping them. See my spoofing class for a lot of details but after someone manages to login as you, they can do whatever they want with your account, wire money, tweet, email your friends saying that you're trapped in a hotel in London. And after they've done those things, you have to repudiate their words or actions. Clean up. Or maybe you claim your account was taken over after a night of regrettable tweeting. So let's say you're a platform provider and someone claims their account was taken over and they want it back. What factors do you consider? Do you have their previous favorite pizza topping, first car or other security questions? Or did you discard those on change? Do you track when you send a password reset email and make that information easily available to investigators? Next, let's say you're a platform provider and someone claims their account was taken over and they want you to make a statement to that effect. Do you? Most won't and I'm unsure how long that will be a defensible position. From the repudiation perspective, the investigations look the same. Would you be comfortable having yours subject to public scrutiny?

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Identity Theft

[↑ Back to Table of Contents](#table-of-contents)

#### [Identity theft and repudiation](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/identity-theft-and-repudiation?u=76281980&t=0)** - [Instructor] The phrase identity theft is used in many ways. And the mechanisms can be pretty country-specific, which is a challenge for a global course. Generally, there's a couple of phases to identity theft. They are first, an initial crime of impersonation, second, repudiation of the charges or debts that the criminal has accumulated, and potentially third, an ongoing process of trying to clear up one's good name against credit agencies. If the impersonation starts with a fraudster getting key information like a social security number, then that cycle can repeat over and over, to the great frustration of the victim. The deepest systemic problem is shifting responsibility to the victim. They don't design the authentication process. They don't issue the driver's license or credit card. But they have to fight a bureaucracy that treats all repudiation as false. But it's there that the label of identity theft makes some sense. Victims feel their good name has been stolen. Don't make the problem worse.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Catfishing, deepfakes, and voice cloning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/catfishing-deepfakes-and-voice-cloning?u=76281980&t=0)** - That problem of someone's good name being stolen is an awful problem for today's victims of financial fraud. But not all identity theft is about finances. Impersonation can involve all the things you learned about in spoofing, including deepfakes and voice cloning. Having a deepfake made of you can be a quite disconcerting experience. These technologies break some very deep-seated assumptions. Do you think Groucho Marx ever said, "Who are you going to believe, me or your own eyes?" No, it was Chico. He was being ironic. But technology has caught up with irony. It's always been reasonable to say, "I heard Adam say", because faking that was hard. We're going to need to adjust our expectations of what we can believe.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - that (1)


### 4. Attacks on Logs

[↑ Back to Table of Contents](#table-of-contents)

#### [Attacks on logs](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-on-logs?u=76281980&t=0)** - [Instructor] We'll cover defenses in-depth in chapter six, but for now, understand that logs, yes, logs, are a primary way of dealing with repudiation, and so, they can come under attack. Someone breaks into your server. They'll delete the logs. They'll fill the logs so your software deletes them, and so you needed logs of what's happening on your servers at a system, shell and application level, and you need to keep those logs around. Typical log rotation rules were last updated in the 90's when disc cost dollars per megabytes. Now, it's pennies per gigabyte, but we haven't updated the rules, and by default, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) still rotates out your logs after seven days. Pushing logs to a dedicated logging system allows you to manage and protect storage, to perform correlation and analysis, and gives you something to look at when local copies of your logs have been trashed, and gives you something to look at when local copies of your logs have been burned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Speakers:** - [instructor] (1)

#### [Attacks via logs and response systems](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=0)** - [Instructor] Attacks follow data. And sometimes that data flows through logs to attack analysis systems. Sometimes, attackers will send data that's designed to munge your log processing or display, login attempts that are designed to interfere with REgExp, [HTML](../../Skills/Web%20Development/HTML.md) display, [SQL](../../Skills/Data%20Science/SQL.md) statements or anything else. Login attempts for accepted, login attempts with 10,000 characters in them, login attempts that include attacks on the server. On the log processor or anything else. One tremendously important point is to be crisp and clear on what fields come from attackers, I mean users or attackers. (mumbling) I guess I mean either because I don't know how to distinguish in advance. A process name comes from a kernel so it's safe or not. If it's not clear why not, think about where process names come from on a traditional desktop or server operating system. The more exposed to the internet your system is, the more randomly you'll see attackers behaving. It's also important to understand that the really interesting bits are not the first bits, the last bits or anything predictable. As storage costs fall, so does the payoff from truncating the information that comes in. Lastly, sometimes attackers
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/attacks-via-logs-and-response-systems?u=76281980&t=93)** will deliberately set off alarms to take your attention away from the thing they're really attacking. Attackers are never more gleeful than when they're using your response systems against you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** html (1), sql (1)
> **Speakers:** - [instructor] (1)


### 5. Repudiation in Specific Technologies

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cloud?u=76281980&t=0)** - [Narrator] When moving to the cloud means uploading machine images, you get the same logs from the machine you did in your data center, except you don't get the hypervisor logs or their outer logs. In contrast, when you're rearchitecting for the cloud, using more and more of the new technologies offered by the big infrastructure providers, your logs change. And your logs change even more when you move to [software as a service](../../Glossary/Concept/SaaS.md). There, the logs you get may not be what you need and logging may not be your provider's top goal. It's important to test your ability to use the logs that you get. You need to simulate predictable situations and repudiations, and discover if the logs are sufficient. Of course, this is not limited to repudiation. But when your customers have a deep stake in the outcome, knowing what's knowable is important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software as a service](../../Glossary/Concept/SaaS.md) (1)
> **Speakers:** - [narrator] (1)

#### [AI and machine learning](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/ai-and-machine-learning?u=76281980&t=0)** - [Instructor] There're a lot of [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) systems whose results are hard to understand. And it's okay if sometimes your pictures of cats also include a picture of a sweater or a teacup. But when your AI is making more impactful decisions, and I hope it is, then some of those decisions are going to be ones that people want to understand, contest or reject. So for example, if you're a payment processor, using an AI to make decisions about what transactions to refuse, your merchants are going to want details. If you're delivering spam filters, the people whose emails are blocked are going to want to know why. Sometimes, this is referred to as explainable AI or transparency. It's not always cheap or easy but that doesn't mean it's not important. Also important, you want to test your AI for viruses including those that come from the training data. As I was prepping this course, there was a story in the news about a lady whose Apple credit card had a much lower credit limit than her husband's despite her higher credit score. Nor did Apple or Goldman Sachs could explain why. There's over 37,000 stories about this listed on [Google](../../Glossary/Service/Google.md) News. You don't want to have to repudiate your own product.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Analogies:** picture (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Crypto and blockchain](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/crypto-and-blockchain?u=76281980&t=0)** - [Instructor] One of the advantages of a [Blockchain](../../Skills/Data%20Science/Blockchain.md) is that it creates a consensus ledger where assertions are recorded. Usually, those are assertions like this public key controls this Bitcoin, but those are just numbers, anything that can be represented as a number, any digital information can be recorded in a blockchain. This creates a situation where those records are effectively immutable because the blockchain consensus mechanism relies on hashes of the previous blockchain. So if you alter it, you break the verification. If you say, I watched Adam's class today and it was awesome, thanks, then the fact that you did that on that date is recorded. If you say, I got five Bitcoins from Joe in payment for a stolen Picasso, then that's a bad deal, and it's also visible forever. You can't repudiate the statement. Sometimes that's a good thing, but other times, you don't want to be admitting to receiving stolen property. Yet, other times, it will turn out that it was a forged stolen Picasso, bummer. It's in some blockchain forever. More, if a fraudster got a hold of your keys, it's recorded. In many systems, repudiation is built-in. Some people see that as a feature, some see it as a bug.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Blockchain](../../Skills/Data%20Science/Blockchain.md) (5)
> **Speakers:** - [instructor] (1)


### 6. Defenses

[↑ Back to Table of Contents](#table-of-contents)

#### [Cryptographic defenses](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=0)** - [Instructor] Let's distinguish digital signatures from electronic ones. Both are ways to sign things. An electronic signature is what a website does to make a cheesy little graphic version of your signature. A digital signature uses public key [Cryptography](../../Skills/Cybersecurity/Cryptography.md) and in that sense, the use of a digital signature with public key cryptography is a mathematically unambiguous statement. This private key was used in a mathematical operation on this document. We use RSA and other asymmetric [Algorithms](../../Skills/Software%20Development/Algorithms.md) for this and call it a signature and in many ways, it's very strong non-repudiation. It's often done with a hash of the document or message. A cryptographic hash is a function that's designed to be easy to compute and hard to predict. Any change to the input should permute the entire output. It's sometimes called a one-way function or a trap door to capture that one-way nature. A hash takes any amount of input and produces a fixed length output. That size used to be nice and simple. Md5 had 128-bit output. Newer functions have their output size in their names. We can use hashes in binary trees where each leaf is the hash of a document or message and each parent is the hash of its children. Then, any change can be inserted very efficiently and the root is derived from the complete current state of the tree.
>
> **[1:33](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/cryptographic-defenses?u=76281980&t=93)** If that root is published in an old-fashioned paper newspaper, then the state of the tree can be demonstrated at the time of publication. This also gives strong non-repudiation. Signatures are useful for documents. Hash trees are useful for events or chains of events like logs. [Blockchain](../../Skills/Data%20Science/Blockchain.md) can serve the same purpose with different costs and verifiability mechanisms but let's threat model this. The possession of the private key, the information given to the signer and the intent of the signer may all be contested. The public key might be stolen. The software used to create the signature might display a fake document. The signer may think they're decrypting something when the software is generating a signature. Cryptography gives us a whole toolbox of ways to address repudiation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Blockchain](../../Skills/Data%20Science/Blockchain.md) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** rsa (1)
> **Speakers:** - [instructor] (1)

#### [Logs](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=0)** - [Narrator] Logs record what happened when and store it for later analysis. That's way simpler than all that crypto and sometimes it's enough to meet your needs. So what should you log? There's a model that can help, but it's a bit complex. Ready? Log who, what, why, when, and where. These are not just logs for debugging, they're logs for investigation later and so what you need are the facts. Just the facts. Log the who. Is this a network connection? Log the IP and the DNS. If it's a local account, log the who and remember that lots of systems have layers of login. I can run commands as Bob via SU and then log into the data base as Charlie. To the extent that you can, capture all of those names. Log what they're doing, commands and arguments. Log what choices you make and why. Log and denied versus log and denied for bad IP address. Also, log the weird. Anytime you come to the end of a switch or case statement and you're not sure what to do, say so. Log when things happened. For most things there's no need to resolve microseconds, but there's not a lot of value in throwing it away. Log where it happened. What system did this happen on? Who defined the names that way? Logging details as they come is helpful. Log the facts, what's coming in, decisions you make, and the reasons behind the decisions.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/logs?u=76281980&t=95)** There's a form called canonical logging where at the end of a transaction you emit a single log message with all the relevant details possibly in a different logging channel. This dramatically reduces the hard work of reassembling it all. I'll log that Adam Showset came to the end of this script in booth 18 at 22:57:34 and didn't have a piffy end to this video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Ports:** :57 (1), :34 (1)
> **Env Vars:** dns (1)
> **Speakers:** - [narrator] (1)

#### [Log analysis](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/log-analysis?u=76281980&t=0)** - [Instructor] Logs are rarely stored in the customer service desk and the form of logs is rarely what the customer service agent needs, nor are they stored in a form that's helpful to developers, incident responders, or the myriad other people who might need to use them. The process of constructing and delivering useful information from logs is less like security and more like typical product management. You need to understand the normal use cases and make sure the logs stick around long enough to be used in those circumstances. You should run your data systems in UTC, especially including logging. The value of a timestamp is its consistency with other timestamps. Your log analysis software may resolve that into something that's presented with human time zones, but remember, twice a year, politicians mess with clocks and if you operate globally, time zones jump on different days. This can mess up scheduled tasks. Do they happen? Do they happen twice? When do the logs show it happening? But if you're running in UTC, you can pay less attention to such things. Always run on UTC, unless you're on Mars, but you're not on Mars, so run in UTC.

> [!info]- Semantic Content
>
> **Env Vars:** utc (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Anti-fraud](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/anti-fraud?u=76281980&t=0)** - [Instructor] There are lots of anti-fraud tools in the marketplace. There are a few ways in which they work. They try to instrument your site to detect bots or fraud patterns. They try to fingerprint devices, PCs and phones, to see if those devices are buying things on other sites. They find signatures for fraud, email addresses, phone numbers, or delivery addresses which are associated with fraud. Many of these work across many merchants to help them detect fraud and so can spot bad transactions for you faster. Even the ones that work only on your site will bring lessons learned elsewhere. However, many of these tools suffer from a bias towards false positives. From their perspective, better to tell you all the negatives so you can't say you should've flagged that. You need to make sure that you include their information in your decisions and measure how much good business you're losing to either blocking or making customers jump through hoops. Anti-fraud tools are just tools in your toolbox. Don't let a vendor control how you use them.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure by design](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-repudiation-in-depth/next-steps?u=76281980&t=0)** - This course is a great introduction to understanding repudiation threats. So you can apply them to [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) and other security work. I want to encourage you to watch my other courses here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. You can also read my book, "Threat Modeling: Designing for Security." A systematic, structured and comprehensive approach to threat modeling will bring your teams to more secure and robust outcomes faster. The next time you find yourself working on a new feature, product or service, be sure to consider what can go wrong and what you're going to do about that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - this (1)


## Instructor

- [Adam Shostack](../../Instructors/Cybersecurity/Adam%20Shostack.md)

## Skills Covered

- Threat Modeling
- Cybersecurity

## Path Context

### In [Improve Your Threat Modeling Skills](../../Paths/Cybersecurity/Learning%20Paths/Improve%20Your%20Threat%20Modeling%20Skills.md)
← [Threat Modeling- Tampering in Depth](Threat%20Modeling-%20Tampering%20in%20Depth.md) | **4 of 6** | [Threat Modeling- Information Disclosure in Depth](Threat%20Modeling-%20Information%20Disclosure%20in%20Depth.md) →

## Appears In

- [Improve Your Threat Modeling Skills](../../Paths/Cybersecurity/Learning%20Paths/Improve%20Your%20Threat%20Modeling%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Threat Modeling- Denial of Service and Expansion of Authority](Threat%20Modeling-%20Denial%20of%20Service%20and%20Expansion%20of%20Authority.md) — Cybersecurity, Threat Modeling
- [Securing Containers and Kubernetes Ecosystem](../DevOps/Securing%20Containers%20and%20Kubernetes%20Ecosystem.md) — Cybersecurity
- [Threat Modeling for AI-ML Systems](../Artificial%20Intelligence%20(AI)/Threat%20Modeling%20for%20AI-ML%20Systems.md) — Threat Modeling
- [AI in Cybersecurity- The Future of Red Teaming and Blue Teaming](../Artificial%20Intelligence%20(AI)/AI%20in%20Cybersecurity-%20The%20Future%20of%20Red%20Teaming%20and%20Blue%20Teaming.md) — Cybersecurity
- [Building a Cybersecurity Awareness Program](Building%20a%20Cybersecurity%20Awareness%20Program.md) — Cybersecurity

---

[↑ Back to top](#)