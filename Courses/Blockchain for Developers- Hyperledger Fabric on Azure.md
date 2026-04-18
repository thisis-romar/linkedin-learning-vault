---
type: course
slug: blockchain-for-developers-hyperledger-fabric-on-azure-14022311
url: "https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311"
duration_minutes: 78
duration: 1h 18m
level: Advanced
updated: 6/14/2021
learners: 5294
skills:
  - Blockchain Architecture
  - Microsoft Azure
exercise_files: true
tags:
  - course
  - topic/security
  - topic/data-science
  - skill/blockchain-architecture
  - skill/microsoft-azure
status: not-started
created: 2026-04-17
---

# Blockchain for Developers: Hyperledger Fabric on Azure

> Blockchain technology emerged in tandem with Bitcoin, but its potential far exceeds its function in the world of cryptocurrency. Blockchain offers enterprises a way to store all manner of data in a more secure, efficient, and validated manner—a boon for companies of all stripes. In this course, learn how to tap into the power of enterprise blockchain as a developer as you build a working applicati

> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311) | 1h 18m | Advanced | 5K learners

## Instructor

- [[Gurinder Singh Mann]]

## Resources

- Exercise files available

## Skills Covered

- Blockchain Architecture
- Microsoft Azure

## Table of Contents

### Introduction

#### Entering blockchain as a developer
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980&t=1)** - In 2017, Gartner Research predicted that blockchain will create $3.1 trillion of business value by the year 2030.
>
> **[0:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980&t=10)** With so much economic potential, can your organization afford not to get involved with this technology?
>
> **[0:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980&t=17)** In this course, we explore the underlying differences and requirements between enterprise and public blockchains.
>
> **[0:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980&t=24)** We'll take a look at the Hyperledger projects and together we will build a working application using Hyperledger Fabric in Azure.
>
> **[0:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980&t=32)** Finally, we'll discuss why you or your organization may want to consider a cloud implementation for this technology.
>
> **[0:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980&t=40)** I'm Gurinder Singh Mann and I work with companies to realize benefits and business outcomes from cloud and blockchain technologies.
>
> **[0:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980&t=48)** After completing this course, you should have a firm grasp on the fundamentals of enterprise blockchain.
>
> **[0:54](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980&t=54)** So join me on my LinkedIn Learning course and let's dig deeper into blockchain and Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), finally, (1), let (1)
> **Versions:** 3.1 (1)
> **Speakers:** - in (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course it's important that you know the basics of Azure.
>
> **[0:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=4)** We will be using Golang for development and referencing Node, as we will be using certain packages.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=9)** So if you need to brush up on those there's quite a few great courses on the library.
>
> **[0:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=12)** Now some knowledge on Bitcoin and Etherium will be helpful as we are referencing them.
>
> **[0:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=16)** Finally we do have Docker and it's good to know the commands, it's good to know how it works.
>
> **[0:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=21)** You will need an Azure account, so please feel free to go ahead and sign up there.
>
> **[0:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=24)** There may even be a trial available.
>
> **[0:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=26)** We will be using Visual Studio Code and, as I've mentioned, Golang and Node.
>
> **[0:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=31)** These can all be installed using a package manager.
>
> **[0:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=33)** Now since we're in Windows, I'm going to be using Chocolatey.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=36)** Whichever platform that you're using, feel free to use the package manager that you're most comfortable with.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), docker (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### What we are going to build
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980&t=0)** - [Instructor] In this course we are following the olive oil production process for the fictitious company, Two Trees Olive Oils.
>
> **[0:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980&t=7)** Now, Two Trees is a family owned business that has exploded in popularity due to the quality of the ingredients and their production process.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980&t=15)** As they grow, they want to maintain that quality.
>
> **[0:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980&t=18)** So, they've decided to record all components of their production process onto a blockchain.
>
> **[0:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980&t=22)** As we go through this course, we will discuss how they will benefit from an enterprise grade blockchain, and why they may want to use a cloud implementation.
>
> **[0:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980&t=31)** As part of this course, we will be creating the following business model, and the components related to it.
>
> **[0:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980&t=37)** Additionally, we will also be creating smart contracts that interact with the network.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980&t=42)** By the end of this course, you will have a working solution in Azure and Hyperledger Fabric that will determine the grade of the olive oil based on inputs from various components in the production process.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started in Blockchain and Hyperledger

#### Blockchain landscape
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=0)** - [Instructor] Before beginning, it's important we understand the need for blockchain and how it came to be.
>
> **[0:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=5)** If we go back to 2008, you might remember of the global financial crisis.
>
> **[0:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=10)** It started by US financial institutions not doing their due diligence.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=15)** During this time, the highly elusive Satoshi Nakamoto released a white paper on Bitcoin, a peer to peer electronic cash system, which would be free of financial institutions.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=28)** Satoshi was quoted as saying, "The root problem with conventional currency "is all the trust that's required to make it work.
>
> **[0:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=35)** "The central bank must be trusted "not to debase the currency, "but the history of fiat currencies "is full of breaches of that trust.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=43)** "Banks must be trusted to hold our money "and transfer it electronically, "but they lend it out in waves of credit bubbles "with barely a fraction in reserve."
>
> **[0:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=53)** In essence, this technology proposed to replace traditional banking, where information was centralized and control remained with few organizations.
>
> **[1:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=63)** As we can see from this quote, the trust in financial institutions was shaken.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=67)** The underlying technology that allowed transactions was called blockchain.
>
> **[1:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=72)** This is one of the reasons why you'll often hear Bitcoin in the same sentence as blockchain.
>
> **[1:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=78)** Since then, there have been a slew of other platforms introduced with this technology that have addressed problems in other areas.
>
> **[1:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=86)** The most popular being Ethereum, which consequently introduced smart contracts into this space.
>
> **[1:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=92)** Today, blockchain is a lot more than cryptocurrency.
>
> **[1:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=95)** It is a distributed system that contains verified and immutable records.
>
> **[1:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=100)** We get the benefit of transparency, traceability, and peace of mind with greater security than traditional systems.
>
> **[1:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=107)** The next thing we are going to touch is answering the question, how can enterprises benefit from this technology?

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Public vs. private ledgers
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=0)** - [Instructor] Let's review the benefits afforded to us through public blockchains.
>
> **[0:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=5)** The primary reason for using a blockchain network is to facilitate transactions in a system where you cannot trust the other party.
>
> **[0:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=12)** The Byzantine General's problem is an example often cited in this space.
>
> **[0:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=17)** Imagine you have Generals trying to invade a city.
>
> **[0:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=20)** Individually, none of them can win.
>
> **[0:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=23)** Now with a coordinated attack, they would be able to take over the city; that means they have to communicate through messengers.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=29)** We don't know which of the messengers are spies or enemies.
>
> **[0:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=33)** The problem then, is how can the generals coordinate an attack given this scenario?
>
> **[0:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=38)** This is an underlying concern when coordinating distributed systems.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=42)** We need to be able to determine how nodes can reach an agreement.
>
> **[0:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=47)** Let's review how blockchain addresses these issues.
>
> **[0:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=50)** Now, if we cannot trust the participants in the system, how do we address the data?
>
> **[0:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=55)** Immutability allows users to trust the data once it has been validated, and we know that that data can no longer be tampered with.
>
> **[1:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=64)** Transparency allows us to verify the data that's already on the network.
>
> **[1:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=69)** Lastly, traceability allows users to audit the transactions to understand the current world state.
>
> **[1:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=76)** These patterns are built into public blockchain frameworks, so we know that we can trust the data on the system.
>
> **[1:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=83)** I should mention anyone with access to the internet can theoretically access a public blockchain.
>
> **[1:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=90)** In cases where the data can only be available to select users, you have the choice of putting only a subset of data on the network, providing a salted hash, or encrypting, so that individuals with the correct keys or permissions can verify it.
>
> **[1:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=105)** Now, let's talk about enterprise requirements that public blockchains just don't meet.
>
> **[1:51](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=111)** I should mention that enterprise implementations require much of the same design as public blockchains.
>
> **[1:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=117)** And this is because they do want many of the benefits that public blockchains offer.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=123)** Now let's look at some of the unique requirements for enterprise.
>
> **[2:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=127)** A key difference is that in the enterprise space, we know the peers that are participating in the network.
>
> **[2:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=133)** This is why enterprise blockchain frameworks are referred to as permission blockchains, since only authorized peers can join the network.
>
> **[2:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=142)** Enterprise-grade frameworks require high performance to deal with large sets of data.
>
> **[2:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=148)** If we review our course project, TwoTrees is going to require all of producers to update and provide data throughout the preparation process.
>
> **[2:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=157)** In order to guarantee this, the producers will be utilizing IOT devices to ensure storage, preparation, and delivery requirements are met.
>
> **[2:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=167)** Given the amount of devices connected to the network, we know there'll be a large amount of data coming in.
>
> **[2:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=172)** For instance, anytime there's a fluctuation in the temperature, the system will be notified and updated.
>
> **[2:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=178)** The timelines to put this onto a public blockchain will not suffice, especially as other participants are also recording information on the network.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=187)** Finally, given the number of transactions we need the system to be resilient and able to resolve disputes quickly.
>
> **[3:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=194)** It is not in the enterprises interest that a large amount of computational power be wasted on transactions that simply won't be put onto the chain.
>
> **[3:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=203)** Now, lastly, privacy of the data on the network is a key requirement.
>
> **[3:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=208)** Only validated participants should have access to the data on the network, but that doesn't mean that we want people to be able to read everything on the network.
>
> **[3:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=216)** In the case of TwoTrees, the olive farmers do not need to know about the production process, or the data that's associated with it.
>
> **[3:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=224)** This is in fact, actually a company secret.
>
> **[3:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=227)** That's why we need enterprise-grade blockchains specifically in enterprise scenarios.

> [!info]- Semantic Content
>
> **Code Keywords:** public (7), let (4), require (3), this, (1), finally, (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** imagine (1), for instance (1)
> **Env Vars:** iot (1)
> **Speakers:** - [instructor] (1)


### 2. Hyperledger Concepts

#### Hyperledger introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=0)** - [Instructor] At this point, you're probably wondering what is Hyperledger.
>
> **[0:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=4)** Let's head over to [hyperledger.org](https://hyperledger.org) and take a look.
>
> **[0:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=7)** First thing I'm going to mention is that it's not actually a blockchain framework.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=11)** And I know what you're thinking, "What?
>
> **[0:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=13)** "Then why am I wasting my time here?"
>
> **[0:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=15)** You're not, it's actually an initiative comprising of open source blockchains and tools that are supported by the Linux Foundation.
>
> **[0:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=23)** Now, all of these are under the Apache 2.0 license.
>
> **[0:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=26)** And the cool thing is they're all backed by enterprises.
>
> **[0:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=30)** So we have a consortium of over 270 organizations, which include IBM, Oracle, Intel, and SAP.
>
> **[0:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=39)** Now the purpose of this was to provide enterprise grade blockchains to address shortcomings that public blockchains have.
>
> **[0:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=46)** None of these projects support cryptocurrencies, so you don't have to worry about gas when you're working with transactions.
>
> **[0:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=53)** Now that you have a grasp on Hyperledger, let's talk about some of the popular frameworks.
>
> **[0:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=58)** We're going to head over to the projects tab and actually take a look at these six frameworks that are available.
>
> **[1:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=65)** Now at the time of recording there six, this may grow.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=68)** So it shouldn't be a surprise to you that they're not all built in the same way.
>
> **[1:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=73)** Each of these frameworks targets a different type of audience and multiple frameworks can be used in conjunction to support, to satisfy project requirements.
>
> **[1:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=83)** So for instance, you may choose one of these six Hyperledger frameworks to handle sensitive data but you may choose to have a public framework to handle payments via cryptocurrencies.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=94)** Let's first dive into Hyperledger Burrow.
>
> **[1:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=97)** Now of the frameworks, this one was created based off Ethereum.
>
> **[1:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=101)** So it's based off of the Ethereum virtual machine specification.
>
> **[1:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=105)** What does this mean to us?
>
> **[1:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=106)** What it means is users can execute Ethereum smart contracts.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=112)** You have the ability to migrate smart contracts that you already wrote on Ethereum onto this framework.
>
> **[1:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=119)** And this reduces a lot of the overhead of having to redevelop them.
>
> **[2:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=122)** Now, the benefit you really get here is you have something from the public side, but you're able to leverage enterprise benefits that we've talked about.
>
> **[2:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=132)** Fabric is the most popular of the Hyperledger frameworks, and we'll discuss it in greater depth shortly.
>
> **[2:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=139)** Let's move on to Grid.
>
> **[2:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=140)** Grid was built to focus on supply chain specific use case scenarios.
>
> **[2:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=145)** This is an area where you can get quick wins for enterprises via blockchain.
>
> **[2:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=150)** Of the last three, Indy focuses on decentralized identity management.
>
> **[2:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=153)** So this can be useful in a couple of scenarios.
>
> **[2:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=155)** If we were to look at digital document management, distributed pipelines and workflows, and even membership management.
>
> **[2:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=162)** So these are just a couple of use case scenarios that you might take a look at.
>
> **[2:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=166)** Iroha was built for speed.
>
> **[2:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=168)** Now, what does that mean?
>
> **[2:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=169)** It was built using C++ and PostgreSQL.
>
> **[2:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=172)** It provides us fast query times out of the box for digital asset management and identity management use case scenarios.
>
> **[2:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=179)** Additionally, it supports mobile platforms.
>
> **[3:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=181)** Lastly, we have Hyperledger Sawtooth, which supports permission and public networks with enterprise grade support.
>
> **[3:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=188)** Now, underlying one of the big differences between it and some of the other frameworks is it actually uses Intel's proof of elapsed time consensus algorithm.
>
> **[3:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=197)** So the consensus algorithm is a little bit unique to this one.
>
> **[3:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=200)** This chain is often used to track asset life cycles.
>
> **[3:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=205)** We won't go into detail right now.
>
> **[3:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=207)** We'll cover these in a upcoming video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), public (4)
> **Env Vars:** ibm (1), sap (1)
> **CLI Commands:** apache (1)
> **URLs:** [hyperledger.org](https://hyperledger.org) (1)
> **Versions:** 2.0 (1)
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)

#### Hyperledger Fabric network
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=0)** - [Instructor] As previously discussed, Fabric is the most popular framework in Hyperledger Project.
>
> **[0:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=6)** It has some unique benefits when compared to the other frameworks, but it's primarily known because it was developed by IBM and IBM has plenty of experience in the enterprise space.
>
> **[0:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=18)** Let's review in terms of the Two Trees Olive Oil scenario and why Fabric might be a good fit for them.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=25)** If we remember, Two Trees is working with internal departments and external vendors to produce olive oil.
>
> **[0:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=31)** Now, much of that data, they want to put onto the chain.
>
> **[0:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=34)** They already know all the participants in the network and they don't want someone external to have access to it.
>
> **[0:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=39)** So it needs to be permissioned.
>
> **[0:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=41)** Fabric, unlike some of the other Hyperledger frameworks, is designed to be only permissioned.
>
> **[0:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=47)** This allows them to specify rules and access levels to peers and other components in the network.
>
> **[0:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=53)** Although they have external vendors on this network, they don't want to necessarily share all the information that they plan to put on the chain.
>
> **[1:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=60)** For instance, in the case of a health review for internal departments, Two Trees doesn't want to share that data with vendors.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=67)** Now, Fabric allows us to maintain sensitive and restricted data through channels.
>
> **[1:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=72)** The default channel may include information as to when products were shipped and stages of delivery.
>
> **[1:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=78)** Whereas we may decide the production and delivery departments of Two Trees will have a unique channel so that they can maintain privacy to the general network and still share data internally for health to review.
>
> **[1:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=91)** Now, another concern for Two Trees is whether the network will be able to handle the sheer amount of data.
>
> **[1:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=98)** As we discussed earlier, Two Trees will have IoT devices updating the ledger.
>
> **[1:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=104)** The network needs to provide low latency.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=106)** In the health and safety scenario, missing data is just not an option for us.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=112)** Fabric has a different consensus process to all the other blockchains out there which allows it to provide a high throughput of transactions.
>
> **[2:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=120)** We'll go into detail on this a little bit later.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=123)** Now, lastly, the architects at Two Trees want the system to adapt to their needs and not become a burden in the future.
>
> **[2:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=132)** Fabric has been built with an extensible architecture where one can plug in various components as they need.
>
> **[2:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=137)** We can decide on a consensus protocol that may better meet our needs or even a pluggable identity management protocol.
>
> **[2:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=145)** There is a lot of customization that we can do to meet our specific goals.
>
> **[2:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=150)** Given all these benefits, Two Trees has decided to use Fabric as a framework.
>
> **[2:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=155)** Now, before proceeding, we've referenced several terms throughout this course and I think we should take some time to define them as we will be using them regularly.
>
> **[2:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=164)** The first one I want to talk about is peers.
>
> **[2:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=166)** These are nodes that contain copies of the ledger and chain code.
>
> **[2:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=169)** Now, I should mention that they don't all have to contain a copy of the chain code.
>
> **[2:54](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=174)** Some of them do.
>
> **[2:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=175)** It really depends on how the network is set up.
>
> **[2:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=178)** So if you define in your network setup that all peers must contain the chain code and the ledger, then that is how it will go.
>
> **[3:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=185)** The next thing that you do need to consider is there's a subset of these peers that are endorsing.
>
> **[3:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=190)** What that means is they propose updates to the ledger and that's how transactions get onto the ledger.
>
> **[3:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=196)** Speaking of the ledger, it consists of two parts: the world state and transaction logs.
>
> **[3:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=201)** The world state is just a snapshot of the current values whereas the transaction log contains all historical information or any changes made to the ledger.
>
> **[3:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=210)** Finally, we have channels.
>
> **[3:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=211)** These are the pipelines through which we communicate with the network.
>
> **[3:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=215)** And as we've discussed previously, there can be private channels on which we have transactions that are not to be shared with the entire networks.
>
> **[3:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=223)** So there's a default channel and we can choose to have several smaller channels in which either internal departments are working, either a vendor is communicating with a specific department, we can choose that.
>
> **[3:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=235)** Now we have chain code.
>
> **[3:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=236)** Chain code is the same as smart contracts.
>
> **[3:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=239)** If you've ever looked at Ethereum, Ethereum has popularized smart contracts.
>
> **[4:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=244)** But at the end of the day, what it does is it's how we inject business logic into our transactions.
>
> **[4:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=251)** Membership service provider, this is what defines the roles and access levels.
>
> **[4:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=256)** So these access levels are defined against channels and other components.
>
> **[4:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=261)** Lastly, we had the ordering service.
>
> **[4:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=263)** It determines which transactions get onto a block and the order in which they get onto the block.
>
> **[4:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=267)** Now, I've given you a lot of detail here.
>
> **[4:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=269)** We'll discuss in the upcoming videos in this chapter what this means.
>
> **[4:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=274)** Let's take a look at the following example.
>
> **[4:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=276)** At number one, we have a client application that wants to request a new transaction so it submits it to an endorsing peer.
>
> **[4:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=285)** Now, the endorsing peer takes that transaction.
>
> **[4:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=289)** And at number two, it goes to its local membership service provider to check whether the client has the ability to commit or update transactions.
>
> **[4:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=298)** The membership service provider rejects the certificate and informs the peer at number three.
>
> **[5:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=304)** Finally, at number four, the endorsing peer rejects the transaction and so the transaction cannot be put onto the ledger.
>
> **[5:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=312)** What you may have noticed is that the membership service provider is itself distributed onto peers, channels, and orders, so that each contains an instance.
>
> **[5:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=321)** In this way, the system remains truly distributed and there are no bottlenecks from identity management.
>
> **[5:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=328)** Now that we understand the purpose of the service provider, let's take a look at how do we code on this platform.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (2), private (1)
> **Env Vars:** ibm (2)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Managing identity in Fabric
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=0)** - [Instructor] So we've learned that Fabric is a permission network.
>
> **[0:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=3)** Now let's take a look at what does it mean to trust the nodes in that network.
>
> **[0:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=8)** It's a two-step process.
>
> **[0:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=10)** And the first part is to actually verify and authenticate the actors on that network.
>
> **[0:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=16)** Finally, we need to confirm their roles and the access levels that they have.
>
> **[0:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=21)** Now, this is all done by the membership service provider as it's the trusted component that allows us to verify the actor and their permissions on the network.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=29)** By default, we're going to use a 509 certificate for every actor that is accessing the network.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=36)** Now the actual validation process is a three-step process in of itself.
>
> **[0:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=40)** Let's take a look at that.
>
> **[0:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=41)** We've already alluded to the fact that you need a 509 certificate.
>
> **[0:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=45)** But it does need to go all the way to the root of certificate authorities.
>
> **[0:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=49)** What this means is typically you'll have a network set up which will contain intermediate and root certificates so that if an intermediate certificate is compromised, the remainder of the network will remain secure.
>
> **[1:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=61)** For the purposes of this course you don't need to know how root and intermediate certificate authorities interact.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=67)** Or how to set the network up with them.
>
> **[1:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=69)** You just need to be aware of the fact that given a certificate we must be able to relate it back to a root certificate.
>
> **[1:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=76)** Now, the next thing we need to check is if the identity is on the certificate relocation list.
>
> **[1:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=82)** Being part of this list means that the certificate has been revoked and it won't have access to certain channels or potentially even the entire network.
>
> **[1:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=91)** Lastly, the certificate must belong to an organizational unit.
>
> **[1:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=95)** Which is defined in the membership service provider.
>
> **[1:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=98)** What it really does then is give us access to organizations and those organizations define the level of access we have on channels and on the network itself.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), default, (1)
> **Definitions:** is a  (2), means that (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Smart contracts
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=0)** - [Instructor] We've discussed smart contracts several times in this course already, but we need to understand the importance of them.
>
> **[0:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=7)** They were popularized by Ethereum.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=9)** Prior to that point, if you had a transaction in Bitcoin, you wouldn't be able to specify conditions on the transactions.
>
> **[0:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=17)** Let's look at an example.
>
> **[0:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=19)** So we have Alice who wants to sell her car, and Bob is looking to purchase it.
>
> **[0:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=23)** He only wants to buy the car if Anna approves the condition of it, which is his mechanic.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=28)** Now, prior to smart contracts, the mechanic approval would be dealt outside of the network.
>
> **[0:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=34)** Only the transaction would be recorded onto the network.
>
> **[0:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=37)** Ethereum aim to change this.
>
> **[0:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=39)** As you can see with this quote from Vitalik, one of the founders of Ethereum, "In a smart contract approach, an asset or currency is transferred into a program, and the program then runs this code.
>
> **[0:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=52)** And at some point, it automatically validates a condition, and it automatically determines whether the asset should go to one person or back to the other person, or whether it should be immediately refunded to the person who sent it or some combination thereof."
>
> **[1:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=68)** Now that's quite wordy.
>
> **[1:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=70)** But what it really means is we're able to introduce conditional logic to determine where transactions go.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=77)** Now, if we go back to our example, we still have Alice who is looking to sell her car and Bob who is looking to purchase it.
>
> **[1:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=84)** They have now agreed to enter into a smart contract.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=88)** So Bob will transfer 30 Ethers, should Anna approved the condition of the vehicle.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=93)** So once she does this, the smart contract will automatically update, and it will transfer the coins to Alice, and it will be updated onto the ledger.
>
> **[1:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=103)** In Fabric, the term chaincode is used interchangeably with smart contract.
>
> **[1:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=107)** A chaincode is the business logic that can be run by peers.
>
> **[1:51](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=111)** It allows peers to query the ledger or manage ledger state with propose transactions by various apps.
>
> **[1:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=118)** The great thing about chaincode is that it can be written in JavaScript, Golang or Java.
>
> **[2:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=124)** Unlike Ethereum, where the code is dependent on the Ethereum virtual machine, chaincode runs in its own Docker container outside of the endorsing peers.
>
> **[2:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=133)** We're going to quickly jump onto the browser and navigate to the Hyperledger Fabric documentation.
>
> **[2:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=139)** You can follow along on your screen.
>
> **[2:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=142)** So let's discuss this diagram quickly.
>
> **[2:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=144)** We have four organizations here that you'll see, R1 through R4.
>
> **[2:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=149)** Now these organizations have access to various channels and the ordering service.
>
> **[2:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=154)** So what you'll see here is, this is channel configuration 1, channel configuration 2, and then the ordering service.
>
> **[2:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=162)** We have three client applications that write to different channels.
>
> **[2:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=165)** So we have two channels here, and these client applications, A1 through A3, are actually writing to them.
>
> **[2:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=172)** Now the peers, P1 through P3, also have access to different channels.
>
> **[2:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=176)** And one of the interesting things you'll notice here is P2 has access to both, channel 1 and channel 2.
>
> **[3:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=183)** So if we look at this, L1 is a representation of the ledger.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=187)** So these are copies of the ledger.
>
> **[3:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=189)** Each peer contains a copy of the ledger.
>
> **[3:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=191)** So anyone that's on channel 1 will contain ledger 1, any peer that's on channel 2 will contain a copy of ledger 2.
>
> **[3:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=198)** Now, S5 and S6 are actually the smart contracts or chaincode if you would.
>
> **[3:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=204)** One of the things I do want to mention here is chaincode S6 can't access state created by S5.
>
> **[3:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=211)** The only way it would be able to do that is, it would have to invoke S5 to get its state.
>
> **[3:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=217)** So S5 can access channel 1, but S6 cannot.
>
> **[3:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=222)** This visual representation should give you a better idea of how smart contracts work in Hyperledger Fabric.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (2), this. (1)
> **UI Navigation:** go to (1), navigate to (1)
> **CLI Commands:** docker (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How to reach consensus
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=0)** - [Instructor] Up until this point we've discussed components of the fabric framework including the ledger the membership service provider, channels peers and chain code.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=9)** We have yet to discuss how a transaction gets onto the ledger.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=13)** Now, as mentioned earlier in the course fabric uses a unique architecture for consensus protocols.
>
> **[0:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=20)** When compared to other blockchains.
>
> **[0:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=22)** To get a better handle of the consensus process we're going to review how it works for a public blockchain such as Ethereum.
>
> **[0:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=30)** Now, keep in mind most blockchains use this method or a variation of it.
>
> **[0:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=35)** A block is just a container with a set of transactions that needs to be recorded onto the ledger.
>
> **[0:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=41)** Think of the block as a page with transactions written on it.
>
> **[0:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=45)** A new block would then be an empty page onto which we decide two items before writing transactions.
>
> **[0:51](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=51)** We decide which transactions belong on this block and the order in which they should be added.
>
> **[0:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=56)** Now before mining it is in our interest to fill the page with as many transactions as possible as there's a cost to this process.
>
> **[1:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=65)** Additionally miners on the Ethereum Network are likely to give preference to those transactions that pay higher amounts as that is the incentivization for miners.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=77)** Public blockchains use a term aptly named GAS to indicate how much someone is willing to pay to put a transaction onto the ledger.
>
> **[1:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=86)** That means transactions with lower GAS will likely be held out for future blocks.
>
> **[1:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=91)** The order of the transactions matter because we do not want to double spend.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=94)** So let's take this scenario where we have John who owes Sally five ether.
>
> **[1:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=100)** He requests those funds be allocated to Sally's wallet.
>
> **[1:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=104)** In the interim he decides he wants to go purchase a new computer with those funds.
>
> **[1:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=108)** As the mining process can take some time John is trying to pay with funds he allocated elsewhere and we want to avoid this scenario.
>
> **[1:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=116)** Typically, a nonce is used in blockchains to mitigate this specific scenario.
>
> **[2:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=121)** A nonce is unique per account so it allows us to determine which transactions occurred first and use that for ordering transactions.
>
> **[2:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=131)** So to summarize in Ethereum and most other blockchains transactions get ordered onto the blockchain before they are executed.
>
> **[2:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=138)** Keep in mind the miner may choose to mind the block after this point or may have already mined the block and is just arranging transactions on it.
>
> **[2:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=147)** There are a few issues with this process.
>
> **[2:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=150)** It can be a bottleneck to high performance and scalability.
>
> **[2:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=153)** The miner is responsible for ordering and executing the transaction.
>
> **[2:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=157)** So all the lifting is done by a single node.
>
> **[2:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=161)** Now, in the case of Ethereum and other public blockchains this also means any node can participate in consensus and depend on the probability to determine the next block.
>
> **[2:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=172)** Unfortunately, this also can cause forks as nodes may have divergent ledgers.
>
> **[2:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=177)** In hyperledger fabric the workflow separates from order, execute to execute, order, validate.
>
> **[3:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=185)** Let's dig a little deeper into these.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=187)** So we first had the consensus process which is quite different as we don't have any miners.
>
> **[3:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=194)** When an application sends a proposed transaction to the network a subset of endorsing peers will perform an endorsement check and return a proposal response to the application.
>
> **[3:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=204)** Next, the application will submit the transaction response to the ordering service.
>
> **[3:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=209)** The peers in this service order transactions and put them into appropriate blocks.
>
> **[3:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=214)** Once complete they send the block to all peers connected to the service.
>
> **[3:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=218)** Any remaining peers that are directly connected to the ordering service get updates via the gossip protocol.
>
> **[3:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=225)** Basically through other peers.
>
> **[3:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=227)** Finally, the receiving peers will validate the transactions and commit the changes.
>
> **[3:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=232)** Now the validation process itself is a two-step process.
>
> **[3:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=236)** We need to confirm whether the transaction has all the necessary endorsements from required organizations according to the endorsement policy.
>
> **[4:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=245)** And lastly, we need to check if a transaction isn't invalidated by another that's already been submitted.
>
> **[4:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=252)** In that case, the transaction would still be recorded onto the transaction log.
>
> **[4:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=256)** It just wouldn't update the world state.
>
> **[4:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=259)** You might remember I had mentioned earlier that fabric has pluggable consensus algorithms and you do have several options.
>
> **[4:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=266)** One of them is a single ordering peer.
>
> **[4:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=268)** And typically this is only used for development purposes because again you only have one peer that's doing the ordering.
>
> **[4:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=274)** So it doesn't scale out very well.
>
> **[4:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=277)** The other options you have are crash fault-tolerant services or Byzantine-fault tolerance services.
>
> **[4:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=284)** The specifics of these are beyond the scope of this course.
>
> **[4:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=287)** So we will be sticking to the default setup.
>
> **[4:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=290)** Now let's summarize what we just learned.
>
> **[4:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=292)** We discussed how most blockchains use order execute paradigm to reach consensus.
>
> **[4:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=299)** We also compared that against fabrics execute-order-validate model.
>
> **[5:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=303)** In this model we have the ability to scale orders to meet the demand of the network which provides low latency and loose coupling.
>
> **[5:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=311)** By this time, you should have a good understanding of the composition of your hyperledger fabric network.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (3), finally, (1), case, (1)
> **CLI Commands:** node (2)
> **Env Vars:** gas (2)
> **Cross-References:** earlier in (1), we discussed (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (2)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### What's new in HLF 2.0
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=0)** - [Instructor] If you're familiar with Hyperledger Fabric, 1.0.
>
> **[0:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=3)** there are a few important changes when it was upgraded to version two, The first set of changes affected the chain code.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=9)** Some of the problems with version one included The fact that every organization had to run the same chain code.
>
> **[0:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=16)** So you wouldn't have an org specific validation.
>
> **[0:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=20)** Once the chain code was installed, an organization had no say in the execution of that chain code.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=25)** On its own peers, which meant upgrades and endorsement policies were beyond their control.
>
> **[0:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=31)** In 2.0, the endorsement policy is simplified.
>
> **[0:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=35)** All you need is a majority of the channel members to endorse.
>
> **[0:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=38)** This means multiple organizations can be involved in deciding on parameters for a chain code.
>
> **[0:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=44)** And this extends the upgrade process as well.
>
> **[0:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=48)** Finally, peers no longer require access to the Docker Daemon to build and release chain code, which is definitely not something you want to provide access to in production.
>
> **[0:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=57)** This then opens up possibilities of setting up chain code as an external service.
>
> **[1:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=63)** One of the most common questions around blockchain implementations is around managing private data.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=68)** In version one, one way to do this was to create channels, but it fits a subset of data.
>
> **[1:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=74)** And we didn't want additional overhead we use collections.
>
> **[1:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=78)** In 2.0, there have been improvements around managing private data.
>
> **[1:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=82)** Endorsement policies can be at three levels, including specific to a collection.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=88)** We also have implicit collections specific to organizations and they can choose what to share.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=94)** So really with 2.0, it's way easier to share and verify private data.
>
> **[1:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=99)** Next, we have performance improvements.
>
> **[1:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=101)** In Fabric 2.0, we have peer cache on Couch DB to reduce latency.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=106)** Also the Docker images now use Alpine Linux, which is lightweight equating to faster startup time.
>
> **[1:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=113)** Now most of the points we've discussed are beyond the scope of this course.
>
> **[1:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=117)** However, I believe it's important you're aware of these changes as you're developing in this space.
>
> **[2:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=121)** As you gain skills and knowledge in Hyperledger Fabric you can start to use these to improve your own projects.
>
> **[2:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=128)** If you're familiar with Hyperledger Composer well that's been deprecated.
>
> **[2:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=133)** And that's not really a bad thing.
>
> **[2:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=135)** VS code has gotten a lot stronger and there are better options out there.
>
> **[2:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=141)** We'll be covering the new tool sets in detail later.
>
> **[2:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=145)** Finally, let's quickly discuss the changes that have happened in Azure.
>
> **[2:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=150)** The new process uses Kubernetes to deploy Hyperledger Fabric and I think it's a much better process.
>
> **[2:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=155)** We're able to decide how, and when we want to scale our systems and even open the doors to coordinating with peers that may be deployed in other clouds, I do want to mention at the time of recording version 1.4.8 is deployed in Azure.
>
> **[2:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=170)** And that's part of the template that we're going to be using.
>
> **[2:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=172)** This may be updated once you're looking in your own environment, but for the purposes of our course project you will still be able to build and test it.
>
> **[2:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=179)** And version two shouldn't have an impact.

> [!info]- Semantic Content
>
> **Code Keywords:** private (3), finally, (2), extends (1), require (1), let (1)
> **Versions:** 2.0 (4), 1.0 (1), version 1 (1), 4.8 (1)
> **CLI Commands:** docker (2), composer (1)
> **Tools:** vs code (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Blockchain in Azure

#### Hyperledger Fabric on Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=0)** - [Instructor] In this video, we talk about the cloud.
>
> **[0:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=3)** Specifically, why would you want to deploy a Hyperledger Fabric network on Azure?
>
> **[0:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=8)** Now, the benefits of the cloud aren't unique to blockchain, but the combination of blockchain networks and cloud implementations can be very powerful.
>
> **[0:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=17)** First and foremost, we get the benefit of scalability.
>
> **[0:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=20)** We can grow to match the demand of our network.
>
> **[0:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=23)** Now, one of the components we often don't think about scalability is cost management.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=28)** This means we can reduce resources if our network just doesn't need it at the moment.
>
> **[0:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=33)** Next, we have high availability, which ensures business continuity as we can depend on the network to perform beyond service level agreements.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=43)** Now, in the case of Azure, the network has global reach with over 54 regions worldwide.
>
> **[0:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=49)** We know our network can be close to our partners.
>
> **[0:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=52)** If we take a look at Two Trees, the olive farmers may be in Europe or Africa and as they need to record data onto the ledger, we can provide them access closest to their regions.
>
> **[1:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=65)** We can also choose to have peers in various regions whereas with an on-premise setup, that might be difficult to support.
>
> **[1:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=74)** Another benefit we see is the reduction in time in disaster recovery scenarios.
>
> **[1:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=80)** So we've mentioned previously with the number of regions available in Azure, we can rest assured our system can withstand natural disasters.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=88)** Security can be a major decision factor towards cloud implementations.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=94)** With Azure, we get security and cumulative updates for platform as a service and software as a service offerings.
>
> **[1:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=102)** There are an array of regulatory compliance offerings by region, government, and industry.
>
> **[1:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=108)** By default, the security architecture of Azure is quite robust.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=112)** Now, you want to keep in mind when you are creating a solution, you are responsible for following security best practices and patterns.
>
> **[2:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=121)** Lastly, the major benefit we see is a reduction in time to market.
>
> **[2:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=125)** Rather than having to reinvent the wheel, we can benefit from bundled services to reduce development time and testing time.
>
> **[2:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=132)** In the case of our fabric solution, we may need to expose it via web or mobile interfaces, and we can reduce time by using predefined APIs and packages.
>
> **[2:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=143)** Another scenario might be Two Trees decides in the future that they want to have real-time data processing from multiple sources, including the blockchain network.
>
> **[2:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=154)** They may want to implement machine learning on the datasets to aid in decision-making.
>
> **[2:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=158)** All of these services can be provided in the cloud and are industry-wide standard solutions that can help you achieve your goals in a shorter timeframe.
>
> **[2:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=167)** Now in Azure, we have several options for deploying a network and before digging into these, let's once again review the components that we need to deploy.
>
> **[2:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=176)** As we are provisioning a network, we need to define the peers, the channels, organizations, chain code, membership service provider, and certificate authorities at a bare minimum.
>
> **[3:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=188)** We may choose to also change the consensus protocol and other aspects of the system, but those are optional.
>
> **[3:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=195)** As you can see, this isn't a quick setup process.
>
> **[3:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=198)** So let's take a look at the deployment options and speak to how these components can be set up in the cloud.
>
> **[3:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=205)** Our first option is to deploy using virtual machines.
>
> **[3:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=209)** Now, using this deployment process, we would be responsible for setting up the machine, the fabric network and maintenance of the VM.
>
> **[3:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=217)** As the network grows, we would have to add new virtual machines and connect them to existing virtual networks.
>
> **[3:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=223)** This can be a very tedious process.
>
> **[3:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=226)** Now, the other option we have is to deploy via Kubernetes.
>
> **[3:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=230)** So we could load our Docker images for the network into various pods.
>
> **[3:54](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=234)** This can be done manually or via a package management solution, such as Helm.
>
> **[4:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=240)** It reduces some of our overhead, but we still have to manage Kubernetes.
>
> **[4:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=244)** Additionally, the Helm charts tend to be a few versions behind.
>
> **[4:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=248)** Finally, we can look at blockchain as a service option available from Azure.
>
> **[4:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=253)** The blockchain as a service option has multiple frameworks including Hyperledger Fabric, Ethereum, amongst many others.
>
> **[4:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=260)** When we are creating our network, we just have to define the requirements and the service takes care of creating the network to our specifications.
>
> **[4:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=268)** It reduces our time to get a network running.
>
> **[4:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=271)** Adding new VMs to the network can be done with relative ease.
>
> **[4:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=274)** Given all these options and the ones that we've discussed, for the purposes of this course, we will be using blockchain as a service to deploy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default, (1), finally, (1)
> **Prerequisites:** setup (2), set up (1)
> **CLI Commands:** docker (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Production vs. development differences
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=0)** - [Instructor] We've decided to deploy a Hyperledger fabric consortium network on Azure.
>
> **[0:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=6)** Now, as we are deploying a development environment, many of the configurations are inadequate for a production deployment.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=13)** Let's take a few minutes to discuss the difference between these two types of setups.
>
> **[0:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=18)** For a development environment, it's suffices to run a single VM.
>
> **[0:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=22)** And one of the benefits we get to that is, it actually helps us reduce the cost, 'cause we're only paying for that single VM.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=29)** In a production deployment, we'll typically have multiple VMs so that we can scale out to meet demand.
>
> **[0:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=35)** Additionally, we may actually be working with partners that have different subscriptions, so we may need to communicate between our subscription and theirs.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=43)** So there is an overhead to networking.
>
> **[0:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=46)** Now let's go on and take a look at the ordering service.
>
> **[0:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=49)** You might remember, we mentioned that typically, in a development setup, you have a solo deployment.
>
> **[0:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=55)** And that is also true in Azure.
>
> **[0:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=57)** So what this really means is we have a single order.
>
> **[1:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=61)** It also means that ordering service doesn't need to go through a consensus process, since we only have one node.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=67)** Naturally, as a part of this deployment, we don't get high availability or even scalability.
>
> **[1:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=73)** Now with the production deployment, we can choose any number of peers to be involved in the ordering service.
>
> **[1:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=79)** Additionally, we can specify the VM size separately from the other peers in the network.
>
> **[1:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=84)** So we could choose to have faster VMs for our ordering service, as there may be fewer nodes supporting it.
>
> **[1:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=91)** Additionally, we could have a scenario where we want to scale out our ordering service at a certain point in the day.
>
> **[1:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=98)** And we can do that independently of the other VMs that are installed in our network.
>
> **[1:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=103)** Lastly, the ordering service, in this type of setup, uses Apache Kafka for high throughput and low latency messaging.
>
> **[1:51](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=111)** Another area to consider is persistence.
>
> **[1:54](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=114)** Now all databases in a fabric setup are NoSQL.
>
> **[1:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=118)** so we have the option between LevelDB and CouchDB.
>
> **[2:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=122)** In an Azure development environment, LevelDB is set as the default.
>
> **[2:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=126)** In fact, it's also set as the default for a fabric deployment if you were to do it on your own.
>
> **[2:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=131)** Now, the reason you typically use LevelDB is because of its performance benefits.
>
> **[2:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=136)** It's very fast.
>
> **[2:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=138)** Another option that we have actually in production is CouchDB.
>
> **[2:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=141)** CouchDB is typically used for reporting.
>
> **[2:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=144)** We're able to get more information out of those nodes.
>
> **[2:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=148)** Now, one of the things that we can do in a production setup is, now that we have the option to deploy either Level or CouchDB, we can actually deploy different instances on different nodes.
>
> **[2:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=159)** So if we had a five-node setup, we could have CouchDB on two of those nodes, and we could have LevelDB on the remainder.
>
> **[2:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=168)** Now, the reason we do this, is because CouchDB is just for reporting, we do not need to get the same information from every single node.
>
> **[2:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=177)** Most of them just contain a copy of the same information.
>
> **[3:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=180)** So we may only have CouchDB instances set up on specific nodes on different channels, whereas we may still want the performance benefits of LevelDB.
>
> **[3:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=191)** And finally, the actual network setup.
>
> **[3:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=194)** In a development environment, we have a default setup for organizations and certificate authorities.
>
> **[3:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=199)** So typically for organizations, you'll see names like org one, org two.
>
> **[3:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=203)** Whereas in Azure, we can specify the organizations when we do a production setup.
>
> **[3:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=208)** So I can actually name it correctly to the right organization.
>
> **[3:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=213)** And we can actually specify the certificate authorities.
>
> **[3:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=216)** We've discussed the differences between a development setup and a production setup.
>
> **[3:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=221)** And you should have a good understanding of these.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (10), set up (1)
> **Code Keywords:** let (2), default. (1), this, (1), finally, (1)
> **CLI Commands:** node (3), apache (1)
> **Definitions:** is an  (1), means that (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### Hyperledger tools
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=0)** - [Instructor] If you remember, when I introduced Hyperledger, I mentioned it was a set of frameworks and tools that supported enterprise blockchain scenarios.
>
> **[0:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=7)** We've discussed the frameworks, now let's talk about some of the tools and libraries that can benefit us.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=11)** Let's begin by heading over to the website for Hyperledger.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=15)** These are the set of tools and libraries currently available.
>
> **[0:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=18)** Depending on when you're viewing this course, some of these will change, and new ones might be added.
>
> **[0:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=23)** Currently, there are five different tools.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=25)** I like to think of the tools in three different categories.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=29)** Those that measure the health of the network, those that allow us to reduce development or deployment time, and finally, those that enhance ledgers beyond what is available out of the box, similar to a plugin.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=42)** In terms of health, Hyperledger Caliper allows us to measure performance for a blockchain implementation, based on specified use cases.
>
> **[0:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=50)** We gain information on transactions per second, latency and resource utilization of the network.
>
> **[0:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=56)** With any enterprise system, it is important to be able to verify the performance of that system.
>
> **[1:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=61)** Caliper allows us to do this.
>
> **[1:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=64)** Keep in mind in a production setup, the blockchain network is a component of the overall solution.
>
> **[1:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=69)** Latency will potentially also be introduced by other components of the system.
>
> **[1:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=73)** Explorer is another utility that helps us measure health.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=77)** It provides a web-based application to review status of nodes, peers, and view transactions and chain code on the ledger.
>
> **[1:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=84)** In terms of deployment tools, we have Cello.
>
> **[1:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=87)** When we deploy on any framework, there will be lots of components.
>
> **[1:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=90)** In Fabric alone, we must consider the containers, necessary binaries, defining peers, channels, organizations, certificate authorities and participants.
>
> **[1:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=102)** Cello provides a dashboard to maintain multiple blockchain ledgers, from deployment to scaling and changing resources to deleting them.
>
> **[1:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=110)** It also provides an extensible architecture for logging and monitoring.
>
> **[1:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=113)** Finally, for tools that allow us to enhance our network abilities beyond what is available by default.
>
> **[1:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=119)** Cactus provides secure integrations between multiple networks.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=123)** Then we can integrate additional networks based on our business requirements.
>
> **[2:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=127)** Lastly, we have Avalon which allows us to scale by offloading work orders to the enterprise Ethereum blockchain.
>
> **[2:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=133)** So those are the set of tools available to us.
>
> **[2:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=136)** Now let's look at the five libraries.
>
> **[2:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=138)** Quilt allows communication between ledgers through the Interledger protocol.
>
> **[2:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=142)** We can use it for payments processing, either with fiat or cryptocurrencies.
>
> **[2:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=146)** Ursa is a cryptographic library providing code and interfaces to enhance security for your applications.
>
> **[2:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=152)** Grid is a library specifically targeted towards supply chain use cases.
>
> **[2:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=157)** Transact provides a virtual machine to interpret code, so you can write code in a standardized manner.
>
> **[2:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=164)** And Aries focuses on the lifecycle of digital credential.
>
> **[2:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=167)** Now, we won't be using any of these in the rest of this course.
>
> **[2:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=170)** But as you can keep on working with Hyperledger projects, these can save you a ton of time down the road.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (2), this. (1), default. (1)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Set Up Your Blockchain Environment

#### Development environment setup
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=0)** - [Instructor] Let's take a look at the setup of our development environment.
>
> **[0:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=2)** You'll be happy to know the development of this course is done entirely in Azure.
>
> **[0:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=6)** That being said it's quite useful to have a local setup.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=9)** As such, I'm going to provide a few recommendations and we're actually going to go through the process of installing those.
>
> **[0:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=14)** We'll be using cloud shell for scripting.
>
> **[0:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=16)** So you don't need Azure CLI installed locally.
>
> **[0:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=18)** I'm going to do my installations on windows.
>
> **[0:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=20)** If you're following along on a Mac or Linux machine the process will be a little bit different.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=25)** I will be using a package manager for installations named Chocolatey.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=28)** It's similar to Homebrew for Mac.
>
> **[0:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=30)** So let's go ahead and open PowerShell as an administrator.
>
> **[0:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=33)** First, we want to check if we had node and NPM installed.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=36)** So I'm going to check for the version here and same thing for NPM.
>
> **[0:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=41)** If you don't have node installed I recommend going with node version manager.
>
> **[0:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=45)** It makes it easier to manage multiple versions for the purposes of our development.
>
> **[0:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=50)** We need node version 10 and NPM version six as you can see, we have both.
>
> **[0:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=55)** If you don't have these, go ahead and download them.
>
> **[0:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=57)** Now, if you're planning to do most of your development locally and then test it in the cloud because let's face it, it's not cheap to deploy in the cloud, then you're going to need Docker Desktop.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=68)** So let's go ahead and check for that too.
>
> **[1:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=72)** So I'm going to just check the version here and I want to do the same thing for Docker Compose.
>
> **[1:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=79)** Okay, so we have both.
>
> **[1:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=81)** Next, we're going to set up some git configurations specific to windows.
>
> **[1:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=85)** If you're on a Mac, this doesn't apply.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=88)** Now these are global.
>
> **[1:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=89)** So let's apply that tag.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=93)** The first one we want to set false.
>
> **[1:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=96)** The next one, I want to do the same thing but set it to true.
>
> **[1:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=100)** And this would be the long path.
>
> **[1:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=104)** Now let's install curl.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=106)** So I'm going to use Chocolatey to do that.
>
> **[1:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=108)** Choco install curl.
>
> **[1:51](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=111)** And as you can see, I already have it installed.
>
> **[1:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=113)** So that's great, but that's the command that you would use.
>
> **[1:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=116)** Finally, we wanted to install VS code.
>
> **[1:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=118)** Now we want to install version 1.39.2.
>
> **[2:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=122)** So I'm typing up that command here.
>
> **[2:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=126)** We want to specify the version.
>
> **[2:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=128)** For my part, I've already installed that on this machine.
>
> **[2:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=131)** If you haven't used this command to actually install it.
>
> **[2:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=134)** At the time of recording, if you're looking to do local development this is the version that works best with IBM Blockchain Platform which is the extension that we're going to be using.
>
> **[2:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=142)** So since I already have this, I'm just going to go ahead and open up VS code.
>
> **[2:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=147)** We're going to be using the IBM Blockchain Platform to develop our smart contracts.
>
> **[2:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=152)** So let's search for that in our extensions and install it.
>
> **[2:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=158)** This can take a few minutes.
>
> **[2:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=160)** Once installed, it shows the pre-recs needed to use this platform.
>
> **[2:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=164)** If you're missing any pause the video and install those first.
>
> **[2:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=168)** One recommendation I would make is if you need to install open SSL make sure you don't use the light version and instead install version 1.0.2U which works best for Hyperledger Fabric development.
>
> **[3:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=181)** Again, by the time you're watching this video some of these versions may already be updated and the issues with them may well be resolved.
>
> **[3:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=189)** All right, so we now have Hyperledger Fabric installed and let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), npm (3), docker (2), curl (2), make (2)
> **Prerequisites:** install (9), setup (2)
> **Code Keywords:** let (8), finally, (1), this, (1)
> **Env Vars:** npm (3), ibm (2), cli (1), ssl (1)
> **Versions:** version 1 (2), version 10 (1), 39.2 (1)
> **Tools:** vs code (2), powershell (1), docker desktop (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Development environment for Fabric on Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=0)** - [Instructor] There's a significant number of components needed to deploy the development environment.
>
> **[0:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=4)** We'll cover those before beginning the setup in Azure.
>
> **[0:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=7)** The template we're working with in Azure is based on AKS, their Kubernetes service.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=11)** Onto this, we're going to deploy our resources.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=15)** We would need to deploy an order which would create its own cluster, followed by another cluster for each of our peers.
>
> **[0:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=21)** In our case, we're going to keep it simple, and just use one peer and one order.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=25)** You could choose to create a single cluster and have both the peers and orders on there.
>
> **[0:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=30)** Since we have access to a template and it significantly reduces our deployment times, we will be using multiple clusters.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=36)** After the clusters are provisioned, we will set up the remainder of the network which includes MSPs and channels.
>
> **[0:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=41)** Altogether, the deployment will look something like this.
>
> **[0:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=44)** We'll have a cluster for each of our order and peer, the client apps will be the process by which we communicate to those clusters, and we will use Azure Storage to maintain connection profiles and other setup data.
>
> **[0:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=59)** To simplify deployments, I'm including here the information we will use to deploy our clusters.
>
> **[1:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=64)** The deployment process for both is the same, except for the resource value specified here.
>
> **[1:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=69)** You'll notice I'm using the same fabric certificate authority username.
>
> **[1:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=72)** That's just for convenience in a development environment.
>
> **[1:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=75)** Now that we've covered this, let's go deploy our consortium.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), case, (1), this. (1), let (1)
> **Prerequisites:** setup (2), set up (1)
> **Exercise Files:** template (2)
> **Env Vars:** aks (1)
> **Speakers:** - [instructor] (1)

#### Deploy Hyperledger Fabric on Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=0)** - [Instructor] We're finally going to create our consortium in Azure.
>
> **[0:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=3)** As you can see, we're in the portal.
>
> **[0:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=4)** So let's go ahead and open a Cloud Shell window.
>
> **[0:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=7)** To make it easier, I'm going to open up full screen.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=9)** So let's do that.
>
> **[0:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=10)** We need to create a service principle that we're going to use later on.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=13)** So let's go ahead and do that.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=15)** Now, I'm going to use the az ad command here to create my principal.
>
> **[0:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=21)** I want it to have rbac enabled and I'm going to skip assignment.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=29)** For the name, I'm just going to call it HLF course SP and let's create that.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=36)** We're going to want to save the output of this as we're going to reference it later on.
>
> **[0:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=40)** So I'm just going to copy this and put it into a Notepad file.
>
> **[0:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=44)** Next, let's go back to our portal and create the resource.
>
> **[0:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=47)** So I'm going to select Create a Resource here and under Azure Marketplace, I want to select Blockchain.
>
> **[0:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=53)** From here, we're going to select Hyperledger Fabric on Azure Kubernetes Service Preview.
>
> **[0:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=58)** The first thing we want to do here is create a new resource group.
>
> **[1:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=62)** I'm going to create the order of first, so let's call our resource group HLF Order.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=67)** As we're creating the order of first, I'm going to use the resource prefix 01.
>
> **[1:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=71)** Let's select Fabric Settings.
>
> **[1:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=74)** For the organization name, I'm going to use two trees order and we're going to select Ordering Service here.
>
> **[1:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=80)** The number of nodes we're going to keep to three.
>
> **[1:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=82)** For Fabric CA username, I'm going to use, HLFC user.
>
> **[1:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=86)** And I'm going to go ahead and put in my password here and let's retype that again.
>
> **[1:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=89)** Once we have our password in, we're going to keep self-signed certificates here and move on to the AKS cluster settings.
>
> **[1:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=96)** To reduce costs, I'm going to reduce node count to one, but you may choose to have more depending on your needs.
>
> **[1:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=102)** For service principle ID here, we're going to use the app ID from Notepad.
>
> **[1:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=107)** So let's go ahead and reference that.
>
> **[1:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=110)** The client secret will contain the password.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=112)** So we're want to do the same thing here, just copy this value, and we're going to put it back in twice.
>
> **[1:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=117)** Let's select Review and Create.
>
> **[2:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=120)** So it's quickly going to validate everything.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=123)** And let's go ahead and create it.
>
> **[2:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=126)** While this is running, I should mention we're going to do the exact same steps for the piers with a values mentioned in the previous video.
>
> **[2:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=132)** What you'll see is the deployment in progress here, and this can take some time.
>
> **[2:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=136)** What we're going to do in the interim is deploy the pier.
>
> **[2:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=141)** So let's do the exact same steps here.
>
> **[2:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=143)** We're going to select Blockchain and Hyperledger Fabric on Azure.
>
> **[2:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=147)** I want a new resource group and this one I'm going to call pier, so HLF pier.
>
> **[2:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=152)** And for the prefix, I want to use P1.
>
> **[2:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=155)** Let's select Fabric Settings.
>
> **[2:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=158)** We're going to call this organization two trees pier.
>
> **[2:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=163)** And from the drop-down, we want to select Peer Nodes.
>
> **[2:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=166)** We're going to keep a single node, and for the purposes of our database, we're going to use the CouchDB.
>
> **[2:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=172)** And then to use the same username as the previous one as this is a development environment.
>
> **[2:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=176)** Let's type in the password again here.
>
> **[2:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=179)** Okay, same sort of thing, let's head on to the AKS cluster settings.
>
> **[3:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=184)** Once again, I'm going to change the note count to one.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=187)** For service principal ID, I'm going to use the same app ID that I was using before.
>
> **[3:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=191)** Now, this is a development environment.
>
> **[3:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=193)** Obviously I'm using one service principal for both.
>
> **[3:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=197)** In a full production you wouldn't want to do something like this.
>
> **[3:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=202)** Let's validate that once again.
>
> **[3:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=205)** Okay, so we're ready to run this again and let's hit Create.
>
> **[3:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=209)** So you'll notice in the top right corner here that we have two running and both are deploying.
>
> **[3:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=214)** This will take about 20 minutes or so.
>
> **[3:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=219)** So here we have the deployment completed, as you can see.
>
> **[3:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=222)** We can go to the resource group and I can see the entire set of components that have been deployed.
>
> **[3:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=227)** Keep in mind, this is just for the pier.
>
> **[3:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=228)** We have a similar set for the order.
>
> **[3:51](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=231)** Now, let's go ahead and set up the networking.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), self (1), this. (1)
> **Env Vars:** hlf (3), aks (2), hlfc (1)
> **CLI Commands:** node (2), make (1), az (1)
> **Cross-References:** go back to (1), previous video (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)

#### Connect to network
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=0)** - [Instructor] Let's begin by covering what the script will be provisioning.
>
> **[0:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=4)** We're going to use the Azure Hyperledger fabric tool setup script to make it easier to deploy our environment.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=9)** On line one, we have our subscription ID.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=11)** You can grab that from the portal.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=13)** We're creating all resources in the same subscription.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=15)** So I'm only going to reference this one.
>
> **[0:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=17)** For lines 3 through 16, we have our variables that we'll be using for this script.
>
> **[0:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=23)** If you're following along update with your environment variables.
>
> **[0:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=27)** So you'll notice the ORDERER_ORG_NAME and the PEER_ORG_NAME the ones that we created in the portal.
>
> **[0:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=32)** On line 18, we begin by creating the storage account.
>
> **[0:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=35)** If you already have one provision feel free to comment it out.
>
> **[0:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=39)** On line 23, we create the storage share which we'll be using to communicate between peers as we are setting up the network.
>
> **[0:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=46)** It will have the MSP and connection profile info amongst other items.
>
> **[0:51](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=51)** Starting line 34, we're using the Azure HLF tool script, which we'll download shortly to set up the orderer.
>
> **[0:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=59)** We do the same for the peer online 38.
>
> **[1:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=61)** Finally, we create the channel on line 45.
>
> **[1:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=63)** This is where all the communication will take place.
>
> **[1:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=66)** For the remainder of the script, the orderer is already part of the consortium and channel.
>
> **[1:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=70)** So it just needs to add the peer.
>
> **[1:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=74)** Now let's navigate to the Azure Portal.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=77)** In here, I'm going to open up cloud shell in bash.
>
> **[1:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=80)** So let's do the same thing as before and opened this up in another window.
>
> **[1:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=84)** We're going to need to download the Azure tool through the curl command.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=88)** You can do this without using curl but that's a longer process.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=93)** So let's just go ahead and type that here.
>
> **[1:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=99)** All right, now that we downloaded it, let's take a look at the files.
>
> **[1:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=103)** And I'm going to head into the directory here.
>
> **[1:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=105)** We can see all the files in here.
>
> **[1:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=107)** Next, we need to run NPM install on this directory.
>
> **[1:51](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=111)** This can take a few moments.
>
> **[1:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=115)** Finally, let's run set up.
>
> **[1:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=118)** Okay, now that's completed.
>
> **[1:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=119)** We want to just take a look at the directory and you'll see if the tool has been there.
>
> **[2:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=124)** So the first tool that we see azhlf, that's the one that we're looking for and we can see everything that's been installed.
>
> **[2:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=129)** Next, we're going to upload the script onto our cloud shell.
>
> **[2:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=133)** So let's go ahead and do that.
>
> **[2:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=135)** If you're following along you can grab it from the exercise files.
>
> **[2:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=139)** So I'm just going to head up to the root here and take a look at if we have our file.
>
> **[2:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=143)** Perfect.
>
> **[2:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=145)** Now what we want to do is run it, and as we run it we'll see that it goes through each step that we discussed previously we get a little bit of a message giving us a heads up of what's getting deployed.
>
> **[2:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=156)** Again, this can take a couple of minutes.
>
> **[2:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=160)** All right.
>
> **[2:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=161)** So we see this error message has happened sometimes.
>
> **[2:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=163)** You just need to run the last line.
>
> **[2:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=165)** So what I'm going to do here is I'm just going to grab it because the peers have already joined.
>
> **[2:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=169)** We just need to set the anchor peer and this can happen occasionally.
>
> **[2:54](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=174)** Let's just paste that and try running it again.
>
> **[2:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=177)** And there you go.
>
> **[2:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=178)** We have our consortium set up now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), finally, (2)
> **Env Vars:** orderer_org_name (1), peer_org_name (1), msp (1), hlf (1), npm (1)
> **Prerequisites:** set up (3), setup (1), install (1)
> **CLI Commands:** curl (2), make (1), npm (1)
> **Tools:** azure portal (1), bash (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** navigate to (1)

#### Create development project
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=0)** - Now that we set up our development environment we're going to want to create our smart contract project.
>
> **[0:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=6)** It's useful to review the packaging that is provided out of the box.
>
> **[0:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=10)** So let's go ahead and select the IBM blockchain platform extension.
>
> **[0:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=14)** We have four sections here: Environments contains the locations where we will be deploying.
>
> **[0:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=18)** If you're going to do local development you would create an environment here.
>
> **[0:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=23)** Now, we can also choose to create a JSON file here to connect our azure environment, but for the purposes of this course we'll be deploying via shell.
>
> **[0:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=31)** The gateway works on behalf of our application to communicate with the network, so application focuses on business logic not network topology.
>
> **[0:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=37)** Finally, the wallet contains the user identities that are used to connect to the channels.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=43)** If we go ahead and select the ellipsis here you'll notice we have a couple of options: We can create a new project, important existing one, or package and open project.
>
> **[0:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=52)** We want to see what's available, so let's just go ahead and create a new project.
>
> **[0:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=56)** We get the option to create a default or private contract.
>
> **[0:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=59)** Private is specific to a single member.
>
> **[1:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=62)** For our purposes, we're going to use the default contract.
>
> **[1:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=66)** Now we get a few options here: Java, JavaScript, TypeScript, or Golang.
>
> **[1:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=71)** We'll be using JavaScript for our setup.
>
> **[1:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=73)** For the name I'm going to select two trees, and let's finally select where we want to save the project.
>
> **[1:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=81)** Here I'm going to select add to work space.
>
> **[1:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=84)** It can take a moment to generate the actual project.
>
> **[1:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=87)** So let's take a look at what's been provisioned.
>
> **[1:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=89)** First thing you'll notice here is we have index.js.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=93)** This file contains our list of contracts and components.
>
> **[1:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=95)** For our purposes, It's a single contract, but this could include any additional components that we might want to add.
>
> **[1:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=101)** Next, let's take a look at package.json.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=106)** Under dependencies, you notice we have fabric-contract-API and fabric-shim.
>
> **[1:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=110)** These are the packages that allow us to communicate with our network.
>
> **[1:54](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=114)** The shim provides the interface for core smart contract functions, that includes innit and invoke which are core to any contract.
>
> **[2:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=122)** Fabric-contract-API is the interface for crud operations.
>
> **[2:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=125)** We'll be using it to interact with the network.
>
> **[2:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=128)** Now, if we navigate to our lib folder here, you'll notice we have a contract.
>
> **[2:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=134)** You'll notice that it extends the contract class which, as we mentioned, includes the crud operations.
>
> **[2:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=140)** We can see the implemented functions for each of these.
>
> **[2:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=143)** All the functions are using a sync await pattern to communicate with the network.
>
> **[2:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=148)** We'll look at the specifics of these functions later on as we'll be using these to communicate with our network.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), private (2), interface (2), finally, (1), extends (1)
> **Env Vars:** api (2), ibm (1), json (1)
> **File Paths:** index.js (1), package.json (1)
> **UI Navigation:** select the (1), navigate to (1)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - now (1)


### 5. Create Your Azure Blockchain Application

#### Build the network
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=0)** - [Instructor] We're finally at the part of the course where we're going to build the network.
>
> **[0:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=4)** To start, we need to define the business model.
>
> **[0:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=6)** Now, earlier in the course, we talked about the company we're using as an example, Two Trees Olive Oil, and the complexity of working with partners to produce olive oil.
>
> **[0:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=16)** What we're going to do here is map that process to our business model.
>
> **[0:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=20)** Every business model requires three components: assets, participants, and transactions.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=25)** Assets can be defined as tangible or intangible goods, services or property, and they're stored in registries.
>
> **[0:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=32)** In terms of Two Trees, we can see three assets: the cultivation and describing the farming process, the production which creates the oil, and the grading process in which we determine what type of oil we've created.
>
> **[0:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=44)** Now, let's look at our participants, which are the members in a business network.
>
> **[0:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=49)** In our example, we're going to have three participants.
>
> **[0:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=52)** We have our olive growers who are the farmers, the oil producers which are the individuals that create the oil, and the bottler who oversees grading the oil.
>
> **[1:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=61)** The last item we want to talk about is transactions, which is how participants interact with assets.
>
> **[1:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=66)** In our business model, I defined four different types of transactions.
>
> **[1:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=70)** The first one is soil reading.
>
> **[1:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=71)** We get the quality of the soil during the cultivation process and that's recorded onto the chain.
>
> **[1:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=76)** Next, we have pesticides reading.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=77)** Again, this is done during the cultivation process.
>
> **[1:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=80)** Acidity reading helps us determine the grade of the oil.
>
> **[1:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=83)** So if it's over a certain acidity level, we cannot term it as virgin olive oil.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=88)** During the bottling process, we will be creating the grade.
>
> **[1:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=91)** I should mention this is how I've defined the business model for our course, but we could choose to represent this process in a different manner based on our business needs.
>
> **[1:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=99)** It would depend on the organizations and how the various entities choose to interact.
>
> **[1:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=104)** The real world model wouldn't be as simple as our examples here.
>
> **[1:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=107)** Next, let's see how we represent these components in our code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** earlier in (1), we talked about (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### Examine application structure
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=0)** - [Instructor] Let's begin by reviewing our contract and vs code.
>
> **[0:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=3)** The exercise files contain the code if you're following along.
>
> **[0:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=6)** We have three functions defined and we'll be shortly creating another one to add readings as transactions.
>
> **[0:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=14)** You'll notice we have a few packages imported beyond what's available in the shell.
>
> **[0:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=19)** I should mention here, the libraries for shim and prodo pier are updated for fabric 2.0.
>
> **[0:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=24)** Instead using contract API, which is actually easier to use.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=28)** But since Azure is on version 14.6, we need to reference it.
>
> **[0:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=33)** For the purposes of our example, we measure a batch from farm to production.
>
> **[0:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=37)** We need to know the weight of the batch being produced, the eventual grade, and want to record which farmer produced that batch.
>
> **[0:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=44)** We'll be recording all of that information into a struct on line 15.
>
> **[0:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=48)** The first function we have is for instantiation, which you'll see on line 26.
>
> **[0:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=53)** This is where we would add any setup processes.
>
> **[0:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=56)** For the purposes of this demo, I'm not putting any actual code in here, as it's worth seeing how to create the various components.
>
> **[1:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=64)** But we could choose to populate our channel with data for initial setup.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=68)** Next on line 33, we have invoke, and this function is called whenever an application tries to run the chain code.
>
> **[1:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=75)** You'll notice in the signature, we have the stub which contains the information from the call.
>
> **[1:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=80)** On line 34, we retrieved the function, name, and parameters.
>
> **[1:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=83)** I'm not interested in the parameters for this function.
>
> **[1:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=86)** So I've simply use the blank identifier.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=88)** Next, I checked my functions map, which contains the names of the functions being called.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=93)** Any new functions will need to be added below line 46.
>
> **[1:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=97)** Should the function exist, we pass the stub along so it can retrieve the parameters.
>
> **[1:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=103)** We begin create batch on line 55.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=106)** The first thing we do is get the parameters.
>
> **[1:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=109)** We need three parameters.
>
> **[1:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=110)** The batch ID, weight of the olives, and the farmer who's growing them.
>
> **[1:54](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=114)** Next, we want to check if the batch ID isn't already used.
>
> **[1:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=117)** You'll notice that we use get state to check that on line 63.
>
> **[2:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=120)** Should the batch exist, we simply throw an error.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=123)** On line 68, we convert wait to an integer.
>
> **[2:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=125)** And on line 74, we define our new batch.
>
> **[2:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=130)** We use JSON Marshall to convert our data into bites on line 76.
>
> **[2:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=133)** And finally put that back onto the network on line 81.
>
> **[2:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=136)** You'll notice on line 86, we returned a success message and that lets us know that the batch has been created.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (1), struct (1), pass (1), throw (1)
> **Env Vars:** api (1), json (1)
> **Versions:** 2.0 (1), version 14 (1)
> **Prerequisites:** setup (2)
> **Tools:** vs code (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Add readings
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=0)** - [Instructor] Let's complete the add reading function.
>
> **[0:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=2)** We'll be using a single function to record any type of reading.
>
> **[0:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=6)** We'll begin by including the type which could be soil, pesticide, or acidity reading.
>
> **[0:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=10)** We then have the value which is the value of the actual reading.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=13)** We also want to record the auditor and the batch ID which is our unique identifier.
>
> **[0:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=17)** Now, since we're going to be using this first thing I want to do is record all of those items into a struct.
>
> **[0:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=24)** So I'm going to head to the top here and lets call it Reading.
>
> **[0:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=31)** I'm going to include the three values in here.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=36)** Now for the value, we're going to be recording it as a string because we know there's multiple different types of readings that we're going to get.
>
> **[0:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=44)** So we can convert ones that are going to be integer and we can also have string values.
>
> **[0:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=55)** We're going to add this struck into our original batch and we'll call it readings because we're going to have more than one obviously.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=67)** Let's head back to our function and grab our parameters.
>
> **[1:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=74)** As I said, we're going to grab the parameters first and we're going to use the stub to get the values here.
>
> **[1:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=79)** So it's going to be stub.GetFunctionAndParameters.
>
> **[1:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=82)** We don't need the function we already know that.
>
> **[1:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=84)** So we use a blank identifier.
>
> **[1:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=86)** We want to check if we have the right number of parameters specified.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=88)** So I'm going to do a quick if statement here.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=94)** Next we want to use the batch ID and get the batch ID from the world state.
>
> **[1:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=98)** What I'm going to do is go ahead and grab it as the first parameter.
>
> **[1:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=105)** Now that we have the batch ID.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=106)** Let's grab it from the world's state.
>
> **[1:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=110)** We're going to be using the stub.GetState function.
>
> **[1:54](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=114)** You'll notice I'm going to do quite a few checks for errors.
>
> **[1:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=116)** So what I'm going to do here, let's just type this out.
>
> **[2:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=120)** We just want to check if the nil values returned.
>
> **[2:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=126)** And I am just going to copy this because we're going to be calling it quite a few times.
>
> **[2:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=131)** Now let's populate our selected batch.
>
> **[2:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=133)** We're going to create the variable here.
>
> **[2:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=134)** Let's call it selected batch.
>
> **[2:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=138)** And it is of typed Batch.
>
> **[2:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=141)** And were going to use json.Urmarshall, passing the batchJSON value.
>
> **[2:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=150)** And we're going to put that right back into selected batch.
>
> **[2:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=155)** Next, let's get our reading type.
>
> **[2:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=158)** We know the reading type is always going to be an integer.
>
> **[2:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=160)** So we're going to convert it to Int.
>
> **[2:44](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=164)** And the final two ones we want to retrieve are the value of the members.
>
> **[2:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=168)** I'm going to find a new reading which will contain these values.
>
> **[2:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=176)** Let's just pass in all of the values that we need here.
>
> **[3:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=182)** We've created a new reading.
>
> **[3:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=183)** What I want to do is get the current reading set and add this to it.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=187)** So we're going to append it to the end.
>
> **[3:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=189)** Let's call this reading set.
>
> **[3:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=192)** What I'm going to do is I'm going to grab it from the selected batch.
>
> **[3:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=199)** Let's just append to the end of that.
>
> **[3:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=204)** Finally, we want to update our state to include the reading which means we need to convert our batch back to bytes.
>
> **[3:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=210)** Let's go ahead and do that.
>
> **[3:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=211)** So we're going to call this next variable selectedBatchAsJSON Bytes.
>
> **[3:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=219)** We're going to use the json.Marshall function here.
>
> **[3:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=223)** Once that's done let's call our stub.PutState function.
>
> **[3:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=227)** So this is how we're able to get our information back onto the World state.
>
> **[3:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=233)** And I'm going to use batch ID because that's our unique identifier.
>
> **[3:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=237)** Let's pass in our selectedBatchAsJSONBytes.
>
> **[4:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=242)** Finally, let's return this function.
>
> **[4:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=245)** If we've gotten to this part, we know it's been successful.
>
> **[4:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=247)** So let's just say shim.Success.
>
> **[4:10](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=250)** And I'm going to return a byte array which will say "reading added" For the purposes of our code, I'm going to define the main function in this file.
>
> **[4:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=262)** It'll make it easier for our demo purposes.
>
> **[4:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=264)** Now I'm going to go ahead and create the error here.
>
> **[4:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=268)** What we want to do here is shim.Start.
>
> **[4:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=270)** Now, if you remember in the other one that was called chain code but we've defined this as batch manager.
>
> **[4:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=274)** So we're going to instantiate a new version of batch manager and there we go.
>
> **[4:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=278)** We have our add reading function complete.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (10), pass (2), finally, (2), struct (1)
> **Code Identifiers:** batchjson (1), selectedbatchasjson (1), selectedbatchasjsonbytes (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### Deploying chaincode to network
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=0)** - [Instructor] Before we go ahead and deploy our chain code, I wanted to show you the exercise files that we have available.
>
> **[0:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=4)** So these are the commands that we're going to be using.
>
> **[0:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=7)** The first thing that we're going to be doing is installing the chain code, instantiating it, after we instantiate it, we create the batch and finally we add the readings.
>
> **[0:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=16)** There are additional ones that we will use later on in the course, but for the purposes of this video, these are the ones that we're looking at primarily.
>
> **[0:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=24)** So let's head over to the Azure portal.
>
> **[0:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=27)** I already have a session of cloud shell open here.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=29)** Let's go ahead and upload our code here.
>
> **[0:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=33)** We go ahead and upload our chain code dot goal, and this is why we had created a single file.
>
> **[0:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=38)** It's a little bit easier for the purposes of this course.
>
> **[0:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=41)** I'm going to go ahead and move our chain code into a different directory just to make it a little bit simpler when we're running our scripts.
>
> **[0:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=48)** So if we take a quick look we can see our chain codes there.
>
> **[0:51](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=51)** Let's go ahead and move that.
>
> **[0:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=55)** Next, let's head back and you'll see here we have our org name.
>
> **[0:58](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=58)** I've created the chain code name which is going to be add readings for the purposes of this video.
>
> **[1:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=64)** We're version one. We're obviously using Golang.
>
> **[1:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=66)** And the path that we just created in here.
>
> **[1:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=69)** Let's go ahead and copy that.
>
> **[1:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=72)** Okay. So our first call is to actually go ahead and install that chain code.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=77)** And we're using all the variables that we just defined.
>
> **[1:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=80)** Okay. So our chain code is installed.
>
> **[1:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=83)** Let's go ahead and instantiate it.
>
> **[1:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=84)** If you remember, our function is called init so that's the one that we're going to call here.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=88)** And I'm going to go ahead and paste that.
>
> **[1:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=90)** Now, sometimes this can take a little bit of time.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=93)** All right. So our chain code is instantiated.
>
> **[1:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=96)** Let's go ahead and create our first batch.
>
> **[1:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=101)** Now we provide the function name, which is create batch and then we have all the arguments that are provided here.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=106)** So we're going to use B01 as our batch.
>
> **[1:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=109)** We have our farmer A for the purposes of this test.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=112)** All right. So our batch has been created.
>
> **[1:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=115)** Finally, let's get back here and let's create our first reading.
>
> **[1:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=119)** We just want to test out if it comes through and if it's working successfully.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=123)** So same sort of thing, the function that we're going to be calling is add readings, the arguments that we're providing.
>
> **[2:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=128)** So the first one is going to be our unique identifier for the batch that we just created.
>
> **[2:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=133)** Next, we're doing a soil reading.
>
> **[2:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=134)** And in this case, we're saying that there is no contaminants.
>
> **[2:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=137)** So we're going to put none and the auditor is going to be auditor A.
>
> **[2:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=142)** Okay so as you can see, we've successfully installed and instantiated our chain code, we've gone ahead and created our batch and we've added readings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (3), finally, (1), case, (1)
> **CLI Commands:** make (1)
> **Env Vars:** b01 (1)
> **Tools:** azure portal (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is called (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Determine oil grade
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=0)** - [Instructor] Your challenge, should you choose to accept it is to determine the oil grade.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=11)** Everything we've done in the oil creation process has been leading up to this.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=15)** You'll be taking readings from the cultivation and production assets to create the determined grade function.
>
> **[0:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=21)** So, if we have soil contaminants, whether it be sewage, animals, or flood, we want to reject that oil.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=29)** In terms of pesticides, if there are none, or there are natural toxins, we can grade that oil as organic.
>
> **[0:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=35)** When we're looking at acidity, we will determine based off the percentage.
>
> **[0:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=39)** So, it could be anything from virgin to extra-virgin to delicate extra-virgin or beauty products.
>
> **[0:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=45)** Now, the reason behind this is Two Trees wants to automate based on pre-defined conditions so people cannot tamper with the actual labeling.
>
> **[0:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=53)** And so, that their customers can sleep at night knowing that they're not going to get E. coli poisoning.
>
> **[0:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=59)** This challenge should take you about 20 minutes to complete.
>
> **[1:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=62)** Good luck and remember Two Trees is depending on you.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), function (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Determine oil grade
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=5)** - [Instructor] Lets go ahead and create our determined grade function.
>
> **[0:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=8)** So the first thing I'm going to do is you'll notice we have the batch struct here.
>
> **[0:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=12)** We don't have anything to measure the grade.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=13)** or the producer, let's add those values Now we are storing both of them as string.
>
> **[0:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=21)** Just to keep it simple.
>
> **[0:27](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=27)** Next, I'm going to create a constant that's going to restore our values for reading types where reading soil quality, pesticides, and acidity.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=36)** Now, if we're doing all of those readings regularly I want to create a enum to store that.
>
> **[0:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=41)** golang doesn't have that.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=42)** So I'm just going to use constant.
>
> **[0:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=47)** If you remember previously whenever we're creating a function we have to define it in our map.
>
> **[0:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=52)** So let's go ahead and do that.
>
> **[0:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=57)** I'm also going to create a query batch function just so that it's easier for us to evaluate afterwards.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=67)** Let's scroll to the bottom here and we're going to create the determined grade function first.
>
> **[1:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=73)** That's going to have the same structure as all the other functions here.
>
> **[1:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=78)** By this point, it should be very familiar but we're going to grab the parameters first.
>
> **[1:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=82)** So let's use a stub to get those values.
>
> **[1:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=86)** As always, I want to check that we have the right number of parameters.
>
> **[1:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=89)** in the case of determined grade we only need 2, batch ID, and producer.
>
> **[1:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=96)** Okay, So now that we have the parameters we want to grab our batch and our producer.
>
> **[1:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=102)** So let's go ahead and do that.
>
> **[1:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=105)** As I mentioned, the first thing in the parameters is going to be the batch ID.
>
> **[1:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=109)** Once we get the batch ID we want to use that to get the batch from the ledger.
>
> **[1:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=113)** So let's go ahead and do that.
>
> **[1:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=117)** I'm going to copy this error code cause we're going to use this multiple times.
>
> **[2:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=121)** Next, Let's grab our producer here.
>
> **[2:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=127)** Now that we've got the batch from the ledger, let's map it to our struct.
>
> **[2:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=132)** Going to call it selected batch.
>
> **[2:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=137)** Okay, from this, we want to get a reading set.
>
> **[2:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=140)** So we know we have our selected batch.
>
> **[2:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=141)** Let's grab our reading set from the batch.
>
> **[2:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=144)** So this is what we're going to use to determine our grades.
>
> **[2:29](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=149)** And the other thing I do want to set here is a variable.
>
> **[2:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=152)** We'll call it oil type Val, it's going to be a string and that's going to contain our output.
>
> **[2:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=158)** Okay, So now I'm going to loop through the reading set and we're going to use that information to evaluate and determine what our grade is.
>
> **[2:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=165)** So let's go ahead and create a four loop here.
>
> **[2:48](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=168)** So the first step for reading that I want to evaluate is soil reading.
>
> **[2:53](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=173)** Now I'm going to use the constant that we created up top.
>
> **[2:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=175)** And let's just go through that.
>
> **[2:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=177)** Now, if you remember any soil reading that has any type of contamination, we want to go ahead and reject it.
>
> **[3:03](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=183)** So that's what we want to check for here.
>
> **[3:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=186)** The next thing we want to check for is pesticides.
>
> **[3:12](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=192)** And in there, we want to just see if there are any chemical values.
>
> **[3:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=194)** So if there are any chemicals, we know it cannot be organic.
>
> **[3:19](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=199)** And let's just do a quick printout here again.
>
> **[3:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=206)** So the next thing we want to track is we have the acidity value.
>
> **[3:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=210)** We need to convert it from a string intern integer let's go ahead and do that.
>
> **[3:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=216)** I'm going to use string convert here.
>
> **[3:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=220)** We'll throw an error If we're unable to get the value.
>
> **[3:43](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=223)** Finally, lets us go through those values and iterate through that.
>
> **[3:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=226)** So if we have an acidity value lower than one we know that we're going to label it as delicate extra Virgin olive oil.
>
> **[3:54](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=234)** So check for that.
>
> **[3:57](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=237)** If the value is between one and two we're going to call it extra virgin.
>
> **[4:04](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=244)** Now it's between two and four.
>
> **[4:06](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=246)** We're going to call it Virgin.
>
> **[4:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=251)** And finally we have for beauty products.
>
> **[4:14](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=254)** So it's anything higher than that.
>
> **[4:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=255)** We're just going to use it for beauty products.
>
> **[4:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=257)** Keep in mind this is just for this particular example.
>
> **[4:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=261)** So there you go.
>
> **[4:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=262)** We've completed our four loop.
>
> **[4:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=263)** Let's go ahead and print that out next.
>
> **[4:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=270)** Okay. So now what we're going to do is we're going to update selected batch and we're going to put the grade and producer into there.
>
> **[4:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=278)** Finally, we want to put that information back into the ledger.
>
> **[4:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=280)** So let's convert that batch into bites.
>
> **[4:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=286)** And now we're just going to call the put state function in the stub as always our batch ID is the unique identifier.
>
> **[4:56](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=296)** We're just going to put the batches bytes in here.
>
> **[4:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=299)** Finally, we want to return shim.success and I'm going to put the value graded here so we can see that we've determined the grade let's complete our query batch function, just so that it makes it a little bit easier for us to test it out.
>
> **[5:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=311)** As we've seen a few times we're just going to grab the parameters from the stub.
>
> **[5:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=315)** So let's go ahead and do that.
>
> **[5:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=317)** Now we're only getting one parameter and it's going to be the batch ID.
>
> **[5:20](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=320)** Let's just use that.
>
> **[5:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=321)** So we are going to define batch, as bytes.
>
> **[5:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=325)** We're not going to get the error function here and I'm just going to use the get state function.
>
> **[5:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=331)** Finally, let's return a success value here and I want to return the batch.
>
> **[5:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=336)** We've completed this function.
>
> **[5:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=337)** We're now ready to test it out.
>
> **[5:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=340)** Let's go ahead and head over to the portal.
>
> **[5:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=342)** I have our screen maximized to the cloud shop.
>
> **[5:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=346)** We've uploaded our chain code.
>
> **[5:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=347)** We're going to call it similar commands that we did in a previous exercise.
>
> **[5:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=350)** So I'm going to open up that window.
>
> **[5:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=352)** So if you remember, let's go ahead and move our chain code into right directory.
>
> **[5:59](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=359)** I'm going to go ahead and copy this.
>
> **[6:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=361)** Now, one thing you'll notice here is I've chaincode date.
>
> **[6:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=365)** One of the issues that the Azure tool has AC HLF tool, at the time of according it doesn't upgrade the chaincode you'd actually have to use the peer lifecycle commands.
>
> **[6:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=376)** And for the purpose of this course, that's out of scope.
>
> **[6:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=378)** So I'm just going to rename it.
>
> **[6:21](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=381)** As before let's go ahead and install our chaincode.
>
> **[6:26](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=386)** That is done successfully.
>
> **[6:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=388)** Next we're going to initialize it.
>
> **[6:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=393)** This can take a few moments.
>
> **[6:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=396)** Okay. Our chain code has been instantiated.
>
> **[6:39](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=399)** We are going to ahead and create our batch.
>
> **[6:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=402)** So you'll notice the first thing that we need to do is we want to create the batch.
>
> **[6:45](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=405)** We want to add a couple of readings.
>
> **[6:47](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=407)** So one is going to be around the soil quality.
>
> **[6:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=410)** We have another reading around the chemicals and then finally we have the reading around the acidity.
>
> **[6:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=415)** From there, We can actually use that to determine the grid.
>
> **[7:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=420)** So we call it the create batch function.
>
> **[7:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=422)** To make this a little bit simpler, I'm going to call it all the ad reading functions together Okay So we've added all our readings.
>
> **[7:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=433)** Let's go ahead and determine grade here.
>
> **[7:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=436)** All right.
>
> **[7:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=437)** It's been graded.
>
> **[7:18](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=438)** Now, one of the things you might be thinking about is why am I not seeing some of the outputs that we had put, so a print screen, we would actually have to connect to the pod and get the logs from there, but rather than do that I'm going to just call queryBatch here.
>
> **[7:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=454)** Okay, so we can see provided the readings that we had here.
>
> **[7:37](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=457)** We have graded our olive oil to be extra-virgin.
>
> **[7:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=461)** Now, if you wanted to go a bit further and actually look at some of the issues that might be occurring here's the code that you'd have to go into.
>
> **[7:46](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=466)** You'd have to get into the cluster and then actually call the pods.
>
> **[7:50](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=470)** But in our case, we've already got it.
>
> **[7:52](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=472)** We have all the readings, we have successfully graded our olive oil.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), function (10), finally, (4), struct (2), enum (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** querybatch (1)
> **Env Vars:** hlf (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Teardown
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=0)** - [Instructor] Now that we completed all the exercises for this course, we're going to want to go ahead and delete the resources, because that can add up and the cost can be significant.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=9)** What I'm going to do is I'm just going to delete the resource groups here.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=11)** I've opened up Azure Cloud Shell.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=13)** And this will allow us to delete the various components.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=15)** So I'm just going to use az group delete.
>
> **[0:17](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=17)** Let's start by deleting our HLF pier.
>
> **[0:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=22)** And I'm just going to say yes so that it automatically goes through that process.
>
> **[0:24](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=24)** Now keep in mind, it takes a little bit of time to run this and we're going to be doing the same step for HLF order.
>
> **[0:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=30)** And finally, for the storage resource group.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (1), finally, (1)
> **Env Vars:** hlf (2)
> **CLI Commands:** az (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=0)** - [Gurinder] Thank you for joining me for this course.
>
> **[0:02](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=2)** By this point you should have a good foundation but it isn't the end of your journey.
>
> **[0:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=7)** I'd recommend taking a look at the Hyperledger fabric documentation.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=11)** Additionally, there's documentation specific to Hyperledger composer.
>
> **[0:16](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=16)** You could get information on here on how to query the ledger and further information on access control lists.
>
> **[0:22](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=22)** Finally, in terms of Azure, we've just scratched the surface.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=25)** You might want to look at some of these other areas that are coming up.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=28)** For instance, Azure, blockchain workbench.
>
> **[0:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=30)** There's a lot of new stuff happening here and it's useful to be aware of it.
>
> **[0:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=34)** Finally, you can always go to the LinkedIn learning library as we're always adding new content.
>
> **[0:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=40)** Again, thank you for watching.
>
> **[0:41](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=41)** My name is Gurinder and happy learning.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2)
> **CLI Commands:** composer (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - [gurinder] (1)


## Path Context

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] | **12 of 14** | [[Blockchain- Learning Solidity]] →

## Appears In

- [[Become a Blockchain Developer]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain Programming in iOS Using Swift]] — Blockchain Architecture
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure
- [[Building a Web Application on Microsoft Azure]] — Microsoft Azure
