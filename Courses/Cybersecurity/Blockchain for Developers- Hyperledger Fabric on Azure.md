---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
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
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEMPgq7Nw9Nww/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1623348837256?e=2147483647&amp;v=beta&amp;t=NZWkyJhuHXyfvvmGSgC1qLA6LjZH2puaz50H2F8dUr8"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]]'
next_courses:
  - '[[Blockchain- Learning Solidity]]'
path_nav: '[{"path":"Become a Blockchain Developer","position":12,"total":14,"prev":"Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps","next":"Blockchain- Learning Solidity"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/data-science
  - skill/blockchain-architecture
  - skill/microsoft-azure
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Blockchain%20for%20Developers-%20Hyperledger%20Fabric%20on%20Azure.md)

![Blockchain for Developers: Hyperledger Fabric on Azure](https://media.licdn.com/dms/image/v2/C560DAQEMPgq7Nw9Nww/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1623348837256?e=2147483647&amp;v=beta&amp;t=NZWkyJhuHXyfvvmGSgC1qLA6LjZH2puaz50H2F8dUr8)

# Blockchain for Developers: Hyperledger Fabric on Azure

> Blockchain technology emerged in tandem with Bitcoin, but its potential far exceeds its function in the world of cryptocurrency. Blockchain offers enterprises a way to store all manner of data in a more secure, efficient, and validated manner—a boon for companies of all stripes. In this course, learn how to tap into the power of enterprise blockchain as a developer as you build a working applicati

> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311) | 1h 18m | Advanced | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Entering blockchain as a developer](#entering-blockchain-as-a-developer)
  - [What you should know](#what-you-should-know)
  - [What we are going to build](#what-we-are-going-to-build)
- [**1. Getting Started in Blockchain and Hyperledger**](#1-getting-started-in-blockchain-and-hyperledger) (2 videos)
  - [Blockchain landscape](#blockchain-landscape)
  - [Public vs. private ledgers](#public-vs-private-ledgers)
- [**2. Hyperledger Concepts**](#2-hyperledger-concepts) (6 videos)
  - [Hyperledger introduction](#hyperledger-introduction)
  - [Hyperledger Fabric network](#hyperledger-fabric-network)
  - [Managing identity in Fabric](#managing-identity-in-fabric)
  - [Smart contracts](#smart-contracts)
  - [How to reach consensus](#how-to-reach-consensus)
  - [What's new in HLF 2.0](#whats-new-in-hlf-20)
- [**3. Blockchain in Azure**](#3-blockchain-in-azure) (3 videos)
  - [Hyperledger Fabric on Azure](#hyperledger-fabric-on-azure)
  - [Production vs. development differences](#production-vs-development-differences)
  - [Hyperledger tools](#hyperledger-tools)
- [**4. Set Up Your Blockchain Environment**](#4-set-up-your-blockchain-environment) (5 videos)
  - [Development environment setup](#development-environment-setup)
  - [Development environment for Fabric on Azure](#development-environment-for-fabric-on-azure)
  - [Deploy Hyperledger Fabric on Azure](#deploy-hyperledger-fabric-on-azure)
  - [Connect to network](#connect-to-network)
  - [Create development project](#create-development-project)
- [**5. Create Your Azure Blockchain Application**](#5-create-your-azure-blockchain-application) (6 videos)
  - [Build the network](#build-the-network)
  - [Examine application structure](#examine-application-structure)
  - [Add readings](#add-readings)
  - [Deploying chaincode to network](#deploying-chaincode-to-network)
  - [Challenge: Determine oil grade](#challenge-determine-oil-grade)
  - [Solution: Determine oil grade](#solution-determine-oil-grade)
- [**Conclusion**](#conclusion) (2 videos)
  - [Teardown](#teardown)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Entering blockchain as a developer](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/entering-blockchain-as-a-developer?u=76281980&t=1)** - In 2017, Gartner Research predicted that [[Blockchain]] will create $3.1 trillion of business value by the year 2030. With so much economic potential, can your organization afford not to get involved with this technology? In this course, we explore the underlying differences and requirements between enterprise and public blockchains. We'll take a look at the Hyperledger projects and together we will build a working application using Hyperledger Fabric in [[Microsoft Azure|Azure]]. Finally, we'll discuss why you or your organization may want to consider a cloud implementation for this technology. I'm Gurinder Singh Mann and I work with companies to realize benefits and business outcomes from cloud and blockchain technologies. After completing this course, you should have a firm grasp on the fundamentals of enterprise blockchain. So join me on my [[LinkedIn]] Learning course and let's dig deeper into blockchain and Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (4), [[Microsoft Azure|Azure]] (2), [[LinkedIn]] (1)
> **Versions:** 3.1 (1)
> **Speakers:** - in (1)

#### [What you should know](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course it's important that you know the basics of [[Microsoft Azure|Azure]]. We will be using Golang for development and referencing Node, as we will be using certain packages. So if you need to brush up on those there's quite a few great courses on the library. Now some knowledge on Bitcoin and Etherium will be helpful as we are referencing them. Finally we do have Docker and it's good to know the commands, it's good to know how it works. You will need an Azure account, so please feel free to go ahead and sign up there. There may even be a trial available. We will be using Visual Studio Code and, as I've mentioned, Golang and Node. These can all be installed using a package manager. Now since we're in [[Windows]], I'm going to be using Chocolatey. Whichever platform that you're using, feel free to use the package manager that you're most comfortable with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Windows]] (1)
> **CLI Commands:** node (2), docker (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [What we are going to build](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-we-are-going-to-build?u=76281980&t=0)** - [Instructor] In this course we are following the olive oil production process for the fictitious company, Two Trees Olive Oils. Now, Two Trees is a family owned business that has exploded in popularity due to the quality of the ingredients and their production process. As they grow, they want to maintain that quality. So, they've decided to record all components of their production process onto a [[Blockchain]]. As we go through this course, we will discuss how they will benefit from an enterprise grade blockchain, and why they may want to use a cloud implementation. As part of this course, we will be creating the following business model, and the components related to it. Additionally, we will also be creating [[Smart Contracts]] that interact with the network. By the end of this course, you will have a working solution in [[Microsoft Azure|Azure]] and Hyperledger Fabric that will determine the grade of the olive oil based on inputs from various components in the production process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (2), [[Smart Contracts]] (1), [[Microsoft Azure|Azure]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started in Blockchain and Hyperledger

[↑ Back to Table of Contents](#table-of-contents)

#### [Blockchain landscape](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=0)** - [Instructor] Before beginning, it's important we understand the need for [[Blockchain]] and how it came to be. If we go back to 2008, you might remember of the global financial crisis. It started by US financial institutions not doing their due diligence. During this time, the highly elusive Satoshi Nakamoto released a white paper on Bitcoin, a peer to peer electronic cash system, which would be free of financial institutions. Satoshi was quoted as saying, "The root problem with conventional currency "is all the trust that's required to make it work. "The central bank must be trusted "not to debase the currency, "but the history of fiat currencies "is full of breaches of that trust. "Banks must be trusted to hold our money "and transfer it electronically, "but they lend it out in waves of credit bubbles "with barely a fraction in reserve." In essence, this technology proposed to replace traditional [[Banking]], where information was centralized and control remained with few organizations. As we can see from this quote, the trust in financial institutions was shaken. The underlying technology that allowed transactions was called blockchain. This is one of the reasons why you'll often hear Bitcoin in the same sentence as blockchain. Since then, there have been a slew of other platforms introduced with this technology that have addressed problems in other areas. The most popular being [[Ethereum]], which consequently introduced [[Smart Contracts]] into this space.
>
> **[1:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/blockchain-landscape?u=76281980&t=92)** Today, blockchain is a lot more than [[Cryptocurrency]]. It is a distributed system that contains verified and immutable records. We get the benefit of transparency, traceability, and peace of mind with greater security than traditional systems. The next thing we are going to touch is answering the question, how can enterprises benefit from this technology?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (4), [[Banking]] (1), [[Ethereum]] (1), [[Smart Contracts]] (1), [[Cryptocurrency]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Public vs. private ledgers](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=0)** - [Instructor] Let's review the benefits afforded to us through public blockchains. The primary reason for using a [[Blockchain]] network is to facilitate transactions in a system where you cannot trust the other party. The Byzantine General's problem is an example often cited in this space. Imagine you have Generals trying to invade a city. Individually, none of them can win. Now with a coordinated attack, they would be able to take over the city; that means they have to communicate through messengers. We don't know which of the messengers are spies or enemies. The problem then, is how can the generals coordinate an attack given this scenario? This is an underlying concern when coordinating distributed systems. We need to be able to determine how nodes can reach an agreement. Let's review how blockchain addresses these issues. Now, if we cannot trust the participants in the system, how do we address the data? Immutability allows users to trust the data once it has been validated, and we know that that data can no longer be tampered with. Transparency allows us to verify the data that's already on the network. Lastly, traceability allows users to audit the transactions to understand the current world state. These patterns are built into public blockchain frameworks, so we know that we can trust the data on the system. I should mention anyone with access to the internet can theoretically access a public blockchain. In cases where the data can only be available to select users, you have the choice
>
> **[1:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=95)** of putting only a subset of data on the network, providing a salted hash, or encrypting, so that individuals with the correct keys or permissions can verify it. Now, let's talk about enterprise requirements that public blockchains just don't meet. I should mention that enterprise implementations require much of the same design as public blockchains. And this is because they do want many of the benefits that public blockchains offer. Now let's look at some of the unique requirements for enterprise. A key difference is that in the enterprise space, we know the peers that are participating in the network. This is why enterprise blockchain frameworks are referred to as permission blockchains, since only authorized peers can join the network. Enterprise-grade frameworks require high performance to deal with large sets of data. If we review our course project, TwoTrees is going to require all of producers to update and provide data throughout the preparation process. In order to guarantee this, the producers will be utilizing [[IoT]] devices to ensure storage, preparation, and delivery requirements are met. Given the amount of devices connected to the network, we know there'll be a large amount of data coming in. For instance, anytime there's a fluctuation in the temperature, the system will be notified and updated. The timelines to put this onto a public blockchain will not suffice, especially as other participants are also recording information on the network.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/public-vs-private-ledgers?u=76281980&t=187)** Finally, given the number of transactions we need the system to be resilient and able to resolve disputes quickly. It is not in the enterprises interest that a large amount of computational power be wasted on transactions that simply won't be put onto the chain. Now, lastly, [[Privacy]] of the data on the network is a key requirement. Only validated participants should have access to the data on the network, but that doesn't mean that we want people to be able to read everything on the network. In the case of TwoTrees, the olive farmers do not need to know about the production process, or the data that's associated with it. This is in fact, actually a company secret. That's why we need enterprise-grade blockchains specifically in enterprise scenarios.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (6), [[IoT]] (1), [[Privacy]] (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** imagine (1), for instance (1)
> **Env Vars:** iot (1)
> **Speakers:** - [instructor] (1)


### 2. Hyperledger Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Hyperledger introduction](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=0)** - [Instructor] At this point, you're probably wondering what is Hyperledger. Let's head over to [hyperledger.org](https://hyperledger.org) and take a look. First thing I'm going to mention is that it's not actually a [[Blockchain]] framework. And I know what you're thinking, "What? "Then why am I wasting my time here?" You're not, it's actually an initiative comprising of open source blockchains and tools that are supported by the [[Linux]] Foundation. Now, all of these are under the Apache 2.0 license. And the cool thing is they're all backed by enterprises. So we have a consortium of over 270 organizations, which include IBM, Oracle, Intel, and SAP. Now the purpose of this was to provide enterprise grade blockchains to address shortcomings that public blockchains have. None of these projects support cryptocurrencies, so you don't have to worry about gas when you're working with transactions. Now that you have a grasp on Hyperledger, let's talk about some of the popular frameworks. We're going to head over to the projects tab and actually take a look at these six frameworks that are available. Now at the time of recording there six, this may grow. So it shouldn't be a surprise to you that they're not all built in the same way. Each of these frameworks targets a different type of audience and multiple frameworks can be used in conjunction to support, to satisfy project requirements. So for instance, you may choose one of these six Hyperledger frameworks to handle sensitive data but you may choose to have a public framework to handle payments via cryptocurrencies.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=94)** Let's first dive into Hyperledger Burrow. Now of the frameworks, this one was created based off [[Ethereum]]. So it's based off of the Ethereum virtual machine specification. What does this mean to us? What it means is users can execute Ethereum [[Smart Contracts]]. You have the ability to migrate smart contracts that you already wrote on Ethereum onto this framework. And this reduces a lot of the overhead of having to redevelop them. Now, the benefit you really get here is you have something from the public side, but you're able to leverage enterprise benefits that we've talked about. Fabric is the most popular of the Hyperledger frameworks, and we'll discuss it in greater depth shortly. Let's move on to Grid. Grid was built to focus on supply chain specific use case scenarios. This is an area where you can get quick wins for enterprises via blockchain. Of the last three, Indy focuses on decentralized identity management. So this can be useful in a couple of scenarios. If we were to look at digital document management, distributed pipelines and workflows, and even membership management. So these are just a couple of use case scenarios that you might take a look at. Iroha was built for speed. Now, what does that mean? It was built using C++ and [[PostgreSQL]]. It provides us fast query times out of the box for digital asset management and identity management use case scenarios. Additionally, it supports mobile platforms. Lastly, we have Hyperledger Sawtooth, which supports permission and public networks with enterprise grade support.
>
> **[3:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-introduction?u=76281980&t=188)** Now, underlying one of the big differences between it and some of the other frameworks is it actually uses Intel's proof of elapsed time consensus algorithm. So the consensus algorithm is a little bit unique to this one. This chain is often used to track asset life cycles. We won't go into detail right now. We'll cover these in a upcoming video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethereum]] (4), [[Blockchain]] (2), [[Smart Contracts]] (2), [[Linux]] (1), [[PostgreSQL]] (1)
> **Env Vars:** ibm (1), sap (1)
> **CLI Commands:** apache (1)
> **URLs:** [hyperledger.org](https://hyperledger.org) (1)
> **Versions:** 2.0 (1)
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)

#### [Hyperledger Fabric network](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=0)** - [Instructor] As previously discussed, Fabric is the most popular framework in Hyperledger Project. It has some unique benefits when compared to the other frameworks, but it's primarily known because it was developed by IBM and IBM has plenty of experience in the enterprise space. Let's review in terms of the Two Trees Olive Oil scenario and why Fabric might be a good fit for them. If we remember, Two Trees is working with internal departments and external vendors to produce olive oil. Now, much of that data, they want to put onto the chain. They already know all the participants in the network and they don't want someone external to have access to it. So it needs to be permissioned. Fabric, unlike some of the other Hyperledger frameworks, is designed to be only permissioned. This allows them to specify rules and access levels to peers and other components in the network. Although they have external vendors on this network, they don't want to necessarily share all the information that they plan to put on the chain. For instance, in the case of a health review for internal departments, Two Trees doesn't want to share that data with vendors. Now, Fabric allows us to maintain sensitive and restricted data through channels. The default channel may include information as to when [[Microsoft Products|products]] were shipped and stages of delivery. Whereas we may decide the production and delivery departments of Two Trees will have a unique channel so that they can maintain [[Privacy]] to the general network and still share data internally for health to review. Now, another concern for Two Trees
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=94)** is whether the network will be able to handle the sheer amount of data. As we discussed earlier, Two Trees will have [[IoT]] devices updating the ledger. The network needs to provide low latency. In the health and safety scenario, missing data is just not an option for us. Fabric has a different consensus process to all the other blockchains out there which allows it to provide a high throughput of transactions. We'll go into detail on this a little bit later. Now, lastly, the architects at Two Trees want the system to adapt to their needs and not become a burden in the future. Fabric has been built with an extensible architecture where one can plug in various components as they need. We can decide on a consensus protocol that may better meet our needs or even a pluggable identity management protocol. There is a lot of customization that we can do to meet our specific goals. Given all these benefits, Two Trees has decided to use Fabric as a framework. Now, before proceeding, we've referenced several terms throughout this course and I think we should take some time to define them as we will be using them regularly. The first one I want to talk about is peers. These are nodes that contain copies of the ledger and chain code. Now, I should mention that they don't all have to contain a copy of the chain code. Some of them do. It really depends on how the network is set up. So if you define in your network setup that all peers must contain the chain code and the ledger, then that is how it will go. The next thing that you do need to consider
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=187)** is there's a subset of these peers that are endorsing. What that means is they propose updates to the ledger and that's how transactions get onto the ledger. Speaking of the ledger, it consists of two parts: the world state and transaction logs. The world state is just a snapshot of the current values whereas the transaction log contains all historical information or any changes made to the ledger. Finally, we have channels. These are the pipelines through which we communicate with the network. And as we've discussed previously, there can be private channels on which we have transactions that are not to be shared with the entire networks. So there's a default channel and we can choose to have several smaller channels in which either internal departments are working, either a vendor is communicating with a specific department, we can choose that. Now we have chain code. Chain code is the same as [[Smart Contracts]]. If you've ever looked at [[Ethereum]], Ethereum has popularized smart contracts. But at the end of the day, what it does is it's how we inject business logic into our transactions. Membership service provider, this is what defines the roles and access levels. So these access levels are defined against channels and other components. Lastly, we had the ordering service. It determines which transactions get onto a block and the order in which they get onto the block. Now, I've given you a lot of detail here. We'll discuss in the upcoming videos in this chapter what this means. Let's take a look at the following example. At number one, we have a client application that wants to request a new transaction
>
> **[4:42](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-network?u=76281980&t=282)** so it submits it to an endorsing peer. Now, the endorsing peer takes that transaction. And at number two, it goes to its local membership service provider to check whether the client has the ability to commit or update transactions. The membership service provider rejects the certificate and informs the peer at number three. Finally, at number four, the endorsing peer rejects the transaction and so the transaction cannot be put onto the ledger. What you may have noticed is that the membership service provider is itself distributed onto peers, channels, and orders, so that each contains an instance. In this way, the system remains truly distributed and there are no bottlenecks from identity management. Now that we understand the purpose of the service provider, let's take a look at how do we code on this platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Smart Contracts]] (2), [[Ethereum]] (2), [[Microsoft Products|Products]] (1), [[Privacy]] (1), [[IoT]] (1)
> **Env Vars:** ibm (2)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Managing identity in Fabric](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=0)** - [Instructor] So we've learned that Fabric is a permission network. Now let's take a look at what does it mean to trust the nodes in that network. It's a two-step process. And the first part is to actually verify and authenticate the actors on that network. Finally, we need to confirm their roles and the access levels that they have. Now, this is all done by the membership service provider as it's the trusted component that allows us to verify the actor and their permissions on the network. By default, we're going to use a 509 certificate for every actor that is accessing the network. Now the actual validation process is a three-step process in of itself. Let's take a look at that. We've already alluded to the fact that you need a 509 certificate. But it does need to go all the way to the root of certificate authorities. What this means is typically you'll have a network set up which will contain intermediate and root certificates so that if an intermediate certificate is compromised, the remainder of the network will remain secure. For the purposes of this course you don't need to know how root and intermediate certificate authorities interact. Or how to set the network up with them. You just need to be aware of the fact that given a certificate we must be able to relate it back to a root certificate. Now, the next thing we need to check is if the identity is on the certificate relocation list. Being part of this list means that the certificate has been revoked and it won't have access to certain channels or potentially even the entire network. Lastly, the certificate must belong to
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/managing-identity-in-fabric?u=76281980&t=93)** an organizational unit. Which is defined in the membership service provider. What it really does then is give us access to organizations and those organizations define the level of access we have on channels and on the network itself.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Smart contracts](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=0)** - [Instructor] We've discussed [[Smart Contracts]] several times in this course already, but we need to understand the importance of them. They were popularized by [[Ethereum]]. Prior to that point, if you had a transaction in Bitcoin, you wouldn't be able to specify conditions on the transactions. Let's look at an example. So we have Alice who wants to sell her car, and Bob is looking to purchase it. He only wants to buy the car if Anna approves the condition of it, which is his mechanic. Now, prior to smart contracts, the mechanic approval would be dealt outside of the network. Only the transaction would be recorded onto the network. Ethereum aim to change this. As you can see with this quote from Vitalik, one of the founders of Ethereum, "In a smart contract approach, an asset or currency is transferred into a program, and the program then runs this code. And at some point, it automatically validates a condition, and it automatically determines whether the asset should go to one person or back to the other person, or whether it should be immediately refunded to the person who sent it or some combination thereof." Now that's quite wordy. But what it really means is we're able to introduce conditional logic to determine where transactions go. Now, if we go back to our example, we still have Alice who is looking to sell her car and Bob who is looking to purchase it. They have now agreed to enter into a smart contract. So Bob will transfer 30 Ethers, should Anna approved the condition of the vehicle.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=93)** So once she does this, the smart contract will automatically update, and it will transfer the coins to Alice, and it will be updated onto the ledger. In Fabric, the term chaincode is used interchangeably with smart contract. A chaincode is the business logic that can be run by peers. It allows peers to query the ledger or manage ledger state with propose transactions by various apps. The great thing about chaincode is that it can be written in [[JavaScript]], Golang or [[Java]]. Unlike Ethereum, where the code is dependent on the Ethereum virtual machine, chaincode runs in its own Docker container outside of the endorsing peers. We're going to quickly jump onto the browser and navigate to the Hyperledger Fabric documentation. You can follow along on your screen. So let's discuss this diagram quickly. We have four organizations here that you'll see, R1 through R4. Now these organizations have access to various channels and the ordering service. So what you'll see here is, this is channel configuration 1, channel configuration 2, and then the ordering service. We have three client applications that write to different channels. So we have two channels here, and these client applications, A1 through A3, are actually writing to them. Now the peers, P1 through P3, also have access to different channels. And one of the interesting things you'll notice here is P2 has access to both, channel 1 and channel 2. So if we look at this, L1 is a representation of the ledger.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/smart-contracts?u=76281980&t=187)** So these are copies of the ledger. Each peer contains a copy of the ledger. So anyone that's on channel 1 will contain ledger 1, any peer that's on channel 2 will contain a copy of ledger 2. Now, S5 and S6 are actually the smart contracts or chaincode if you would. One of the things I do want to mention here is chaincode S6 can't access state created by S5. The only way it would be able to do that is, it would have to invoke S5 to get its state. So S5 can access channel 1, but S6 cannot. This visual representation should give you a better idea of how smart contracts work in Hyperledger Fabric.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethereum]] (5), [[Smart Contracts]] (4), [[JavaScript]] (1), [[Java]] (1)
> **UI Navigation:** go to (1), navigate to (1)
> **CLI Commands:** docker (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How to reach consensus](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=0)** - [Instructor] Up until this point we've discussed components of the fabric framework including the ledger the membership service provider, channels peers and chain code. We have yet to discuss how a transaction gets onto the ledger. Now, as mentioned earlier in the course fabric uses a unique architecture for consensus protocols. When compared to other blockchains. To get a better handle of the consensus process we're going to review how it works for a public [[Blockchain]] such as [[Ethereum]]. Now, keep in mind most blockchains use this method or a variation of it. A block is just a container with a set of transactions that needs to be recorded onto the ledger. Think of the block as a page with transactions written on it. A new block would then be an empty page onto which we decide two items before writing transactions. We decide which transactions belong on this block and the order in which they should be added. Now before mining it is in our interest to fill the page with as many transactions as possible as there's a cost to this process. Additionally miners on the Ethereum Network are likely to give preference to those transactions that pay higher amounts as that is the incentivization for miners. Public blockchains use a term aptly named GAS to indicate how much someone is willing to pay to put a transaction onto the ledger. That means transactions with lower GAS will likely be held out for future blocks. The order of the transactions matter because
>
> **[1:32](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=92)** we do not want to double spend. So let's take this scenario where we have [[John the Ripper|John]] who owes Sally five ether. He requests those funds be allocated to Sally's wallet. In the interim he decides he wants to go purchase a new computer with those funds. As the mining process can take some time John is trying to pay with funds he allocated elsewhere and we want to avoid this scenario. Typically, a nonce is used in blockchains to mitigate this specific scenario. A nonce is unique per account so it allows us to determine which transactions occurred first and use that for ordering transactions. So to summarize in Ethereum and most other blockchains transactions get ordered onto the blockchain before they are executed. Keep in mind the miner may choose to mind the block after this point or may have already mined the block and is just arranging transactions on it. There are a few issues with this process. It can be a bottleneck to high performance and [[Scalability]]. The miner is responsible for ordering and executing the transaction. So all the lifting is done by a single node. Now, in the case of Ethereum and other public blockchains this also means any node can participate in consensus and depend on the [[Probability]] to determine the next block. Unfortunately, this also can cause forks as nodes may have divergent ledgers. In hyperledger fabric the workflow separates from order, execute to execute, order, validate. Let's dig a little deeper into these.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=187)** So we first had the consensus process which is quite different as we don't have any miners. When an application sends a proposed transaction to the network a subset of endorsing peers will perform an endorsement check and return a proposal response to the application. Next, the application will submit the transaction response to the ordering service. The peers in this service order transactions and put them into appropriate blocks. Once complete they send the block to all peers connected to the service. Any remaining peers that are directly connected to the ordering service get updates via the gossip protocol. Basically through other peers. Finally, the receiving peers will validate the transactions and commit the changes. Now the validation process itself is a two-step process. We need to confirm whether the transaction has all the necessary endorsements from required organizations according to the endorsement policy. And lastly, we need to check if a transaction isn't invalidated by another that's already been submitted. In that case, the transaction would still be recorded onto the transaction log. It just wouldn't update the world state. You might remember I had mentioned earlier that fabric has pluggable consensus [[Algorithms]] and you do have several options. One of them is a single ordering peer. And typically this is only used for development purposes because again you only have one peer that's doing the ordering. So it doesn't scale out very well. The other options you have are crash fault-tolerant services
>
> **[4:40](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/how-to-reach-consensus?u=76281980&t=280)** or Byzantine-fault tolerance services. The specifics of these are beyond the scope of this course. So we will be sticking to the default setup. Now let's summarize what we just learned. We discussed how most blockchains use order execute paradigm to reach consensus. We also compared that against fabrics execute-order-validate model. In this model we have the ability to scale orders to meet the demand of the network which provides low latency and loose coupling. By this time, you should have a good understanding of the composition of your hyperledger fabric network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethereum]] (4), [[Blockchain]] (2), [[John the Ripper|John]] (2), [[Scalability]] (1), [[Probability]] (1)
> **CLI Commands:** node (2)
> **Env Vars:** gas (2)
> **Cross-References:** earlier in (1), we discussed (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (2)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### [What's new in HLF 2.0](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=0)** - [Instructor] If you're familiar with Hyperledger Fabric, 1.0. there are a few important changes when it was upgraded to version two, The first set of changes affected the chain code. Some of the problems with version one included The fact that every organization had to run the same chain code. So you wouldn't have an org specific validation. Once the chain code was installed, an organization had no say in the execution of that chain code. On its own peers, which meant upgrades and endorsement policies were beyond their control. In 2.0, the endorsement policy is simplified. All you need is a majority of the channel members to endorse. This means multiple organizations can be involved in deciding on parameters for a chain code. And this extends the upgrade process as well. Finally, peers no longer require access to the Docker Daemon to build and release chain code, which is definitely not something you want to provide access to in production. This then opens up possibilities of setting up chain code as an external service. One of the most common questions around [[Blockchain]] implementations is around managing private data. In version one, one way to do this was to create channels, but it fits a subset of data. And we didn't want additional overhead we use collections. In 2.0, there have been improvements around managing private data. Endorsement policies can be at three levels, including specific to a collection. We also have implicit collections specific to organizations and they can choose what to share. So really with 2.0,
>
> **[1:35](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/what-s-new-in-hlf-2-0?u=76281980&t=95)** it's way easier to share and verify private data. Next, we have performance improvements. In Fabric 2.0, we have peer cache on Couch DB to reduce latency. Also the Docker images now use Alpine [[Linux]], which is lightweight equating to faster startup time. Now most of the points we've discussed are beyond the scope of this course. However, I believe it's important you're aware of these changes as you're developing in this space. As you gain skills and knowledge in Hyperledger Fabric you can start to use these to improve your own projects. If you're familiar with Hyperledger Composer well that's been deprecated. And that's not really a bad thing. VS code has gotten a lot stronger and there are better options out there. We'll be covering the new tool sets in detail later. Finally, let's quickly discuss the changes that have happened in [[Microsoft Azure|Azure]]. The new process uses [[Kubernetes]] to deploy Hyperledger Fabric and I think it's a much better process. We're able to decide how, and when we want to scale our systems and even open the doors to coordinating with peers that may be deployed in other clouds, I do want to mention at the time of recording version 1.4.8 is deployed in Azure. And that's part of the template that we're going to be using. This may be updated once you're looking in your own environment, but for the purposes of our course project you will still be able to build and test it. And version two shouldn't have an impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Blockchain]] (1), [[Linux]] (1), [[Kubernetes]] (1)
> **Versions:** 2.0 (4), 1.0 (1), version 1 (1), 4.8 (1)
> **CLI Commands:** docker (2), composer (1)
> **Tools:** vs code (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Blockchain in Azure

[↑ Back to Table of Contents](#table-of-contents)

#### [Hyperledger Fabric on Azure](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=0)** - [Instructor] In this video, we talk about the cloud. Specifically, why would you want to deploy a Hyperledger Fabric network on [[Microsoft Azure|Azure]]? Now, the benefits of the cloud aren't unique to [[Blockchain]], but the combination of blockchain networks and cloud implementations can be very powerful. First and foremost, we get the benefit of [[Scalability]]. We can grow to match the demand of our network. Now, one of the components we often don't think about scalability is [[Cost Management]]. This means we can reduce resources if our network just doesn't need it at the moment. Next, we have high availability, which ensures business continuity as we can depend on the network to perform beyond service level agreements. Now, in the case of Azure, the network has global reach with over 54 regions worldwide. We know our network can be close to our partners. If we take a look at Two Trees, the olive farmers may be in Europe or Africa and as they need to record data onto the ledger, we can provide them access closest to their regions. We can also choose to have peers in various regions whereas with an on-premise setup, that might be difficult to support. Another benefit we see is the reduction in time in disaster recovery scenarios. So we've mentioned previously with the number of regions available in Azure, we can [[Representational State Transfer (REST)|rest]] assured our system can withstand natural disasters. Security can be a major decision factor towards cloud implementations.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=94)** With Azure, we get security and cumulative updates for [[PaaS|platform as a service]] and [[SaaS|software as a service]] offerings. There are an array of [[Regulatory Compliance]] offerings by region, government, and industry. By default, the security architecture of Azure is quite robust. Now, you want to keep in mind when you are creating a solution, you are responsible for following security best practices and patterns. Lastly, the major benefit we see is a reduction in time to market. Rather than having to reinvent the wheel, we can benefit from bundled services to reduce development time and testing time. In the case of our fabric solution, we may need to expose it via web or mobile interfaces, and we can reduce time by using predefined APIs and packages. Another scenario might be Two Trees decides in the future that they want to have [[Real-Time]] [[Data Processing]] from multiple sources, including the blockchain network. They may want to implement machine learning on the datasets to aid in [[Decision-Making]]. All of these services can be provided in the cloud and are industry-wide standard solutions that can help you achieve your goals in a shorter timeframe. Now in Azure, we have several options for deploying a network and before digging into these, let's once again review the components that we need to deploy. As we are provisioning a network, we need to define the peers, the channels, organizations, chain code, membership service provider, and certificate authorities at a bare minimum.
>
> **[3:08](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-fabric-on-azure?u=76281980&t=188)** We may choose to also change the consensus protocol and other aspects of the system, but those are optional. As you can see, this isn't a quick setup process. So let's take a look at the deployment options and speak to how these components can be set up in the cloud. Our first option is to deploy using [[Virtual Machines]]. Now, using this deployment process, we would be responsible for setting up the machine, the fabric network and maintenance of the VM. As the network grows, we would have to add new virtual machines and connect them to existing virtual networks. This can be a very tedious process. Now, the other option we have is to deploy via [[Kubernetes]]. So we could load our Docker images for the network into various pods. This can be done manually or via a [[Package Management]] solution, such as [[Helm]]. It reduces some of our overhead, but we still have to manage Kubernetes. Additionally, the Helm charts tend to be a few versions behind. Finally, we can look at blockchain as a service option available from Azure. The blockchain as a service option has multiple frameworks including Hyperledger Fabric, [[Ethereum]], amongst many others. When we are creating our network, we just have to define the requirements and the service takes care of creating the network to our specifications. It reduces our time to get a network running. Adding new VMs to the network can be done with relative ease. Given all these options and the ones that we've discussed, for the purposes of this course, we will be using blockchain as a service to deploy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Blockchain]] (6), [[Scalability]] (2), [[Virtual Machines]] (2), [[Kubernetes]] (2)
> **Prerequisites:** setup (2), set up (1)
> **CLI Commands:** docker (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Production vs. development differences](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=0)** - [Instructor] We've decided to deploy a Hyperledger fabric consortium network on [[Microsoft Azure|Azure]]. Now, as we are deploying a development environment, many of the configurations are inadequate for a production deployment. Let's take a few minutes to discuss the difference between these two types of setups. For a development environment, it's suffices to run a single VM. And one of the benefits we get to that is, it actually helps us reduce the cost, 'cause we're only paying for that single VM. In a production deployment, we'll typically have multiple VMs so that we can scale out to meet demand. Additionally, we may actually be working with partners that have different subscriptions, so we may need to communicate between our subscription and theirs. So there is an overhead to networking. Now let's go on and take a look at the ordering service. You might remember, we mentioned that typically, in a development setup, you have a solo deployment. And that is also true in Azure. So what this really means is we have a single order. It also means that ordering service doesn't need to go through a consensus process, since we only have one node. Naturally, as a part of this deployment, we don't get high availability or even [[Scalability]]. Now with the production deployment, we can choose any number of peers to be involved in the ordering service. Additionally, we can specify the VM size separately from the other peers in the network. So we could choose to have faster VMs for our ordering service, as there may be fewer nodes supporting it. Additionally, we could have a scenario
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=93)** where we want to scale out our ordering service at a certain point in the day. And we can do that independently of the other VMs that are installed in our network. Lastly, the ordering service, in this type of setup, uses [[Apache Kafka]] for high throughput and low latency messaging. Another area to consider is persistence. Now all [[Databases]] in a fabric setup are [[NoSQL]]. so we have the option between LevelDB and CouchDB. In an Azure development environment, LevelDB is set as the default. In fact, it's also set as the default for a fabric deployment if you were to do it on your own. Now, the reason you typically use LevelDB is because of its performance benefits. It's very fast. Another option that we have actually in production is CouchDB. CouchDB is typically used for reporting. We're able to get more information out of those nodes. Now, one of the things that we can do in a production setup is, now that we have the option to deploy either Level or CouchDB, we can actually deploy different instances on different nodes. So if we had a five-node setup, we could have CouchDB on two of those nodes, and we could have LevelDB on the remainder. Now, the reason we do this, is because CouchDB is just for reporting, we do not need to get the same information from every single node. Most of them just contain a copy of the same information. So we may only have CouchDB instances set up on specific nodes on different channels,
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/production-vs-development-differences?u=76281980&t=187)** whereas we may still want the performance benefits of LevelDB. And finally, the actual network setup. In a development environment, we have a default setup for organizations and certificate authorities. So typically for organizations, you'll see names like org one, org two. Whereas in Azure, we can specify the organizations when we do a production setup. So I can actually name it correctly to the right organization. And we can actually specify the certificate authorities. We've discussed the differences between a development setup and a production setup. And you should have a good understanding of these.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Scalability]] (1), [[Apache Kafka]] (1), [[Databases]] (1), [[NoSQL]] (1)
> **Prerequisites:** setup (10), set up (1)
> **CLI Commands:** node (3), apache (1)
> **Definitions:** is an  (1), means that (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### [Hyperledger tools](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=0)** - [Instructor] If you remember, when I introduced Hyperledger, I mentioned it was a set of frameworks and tools that supported enterprise [[Blockchain]] scenarios. We've discussed the frameworks, now let's talk about some of the tools and libraries that can benefit us. Let's begin by heading over to the website for Hyperledger. These are the set of tools and libraries currently available. Depending on when you're viewing this course, some of these will change, and new ones might be added. Currently, there are five different tools. I like to think of the tools in three different categories. Those that measure the health of the network, those that allow us to reduce development or deployment time, and finally, those that enhance ledgers beyond what is available out of the box, similar to a plugin. In terms of health, Hyperledger Caliper allows us to measure performance for a blockchain implementation, based on specified use cases. We gain information on transactions per second, latency and resource utilization of the network. With any enterprise system, it is important to be able to verify the performance of that system. Caliper allows us to do this. Keep in mind in a production setup, the blockchain network is a component of the overall solution. Latency will potentially also be introduced by other components of the system. Explorer is another utility that helps us measure health. It provides a web-based application to review status of nodes, peers, and view transactions and chain code on the ledger. In terms of deployment tools, we have Cello. When we deploy on any framework, there will be lots of components. In Fabric alone,
>
> **[1:31](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/hyperledger-tools?u=76281980&t=91)** we must consider the containers, necessary binaries, defining peers, channels, organizations, certificate authorities and participants. Cello provides a dashboard to maintain multiple blockchain ledgers, from deployment to scaling and changing resources to deleting them. It also provides an extensible architecture for logging and monitoring. Finally, for tools that allow us to enhance our network abilities beyond what is available by default. Cactus provides secure integrations between multiple networks. Then we can integrate additional networks based on our business requirements. Lastly, we have Avalon which allows us to scale by offloading work orders to the enterprise [[Ethereum]] blockchain. So those are the set of tools available to us. Now let's look at the five libraries. Quilt allows communication between ledgers through the Interledger protocol. We can use it for payments processing, either with fiat or cryptocurrencies. Ursa is a cryptographic library providing code and interfaces to enhance security for your applications. Grid is a library specifically targeted towards supply chain use cases. Transact provides a virtual machine to interpret code, so you can write code in a standardized manner. And Aries focuses on the lifecycle of digital credential. Now, we won't be using any of these in the [[Representational State Transfer (REST)|rest]] of this course. But as you can keep on working with Hyperledger projects, these can save you a ton of time down the road.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (5), [[Ethereum]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Set Up Your Blockchain Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Development environment setup](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=0)** - [Instructor] Let's take a look at the setup of our development environment. You'll be happy to know the development of this course is done entirely in [[Microsoft Azure|Azure]]. That being said it's quite useful to have a local setup. As such, I'm going to provide a few recommendations and we're actually going to go through the process of installing those. We'll be using cloud shell for scripting. So you don't need Azure [[CLI]] installed locally. I'm going to do my installations on [[Windows]]. If you're following along on a Mac or [[Linux]] machine the process will be a little bit different. I will be using a package manager for installations named Chocolatey. It's similar to Homebrew for Mac. So let's go ahead and open [[Powershell]] as an administrator. First, we want to check if we had node and [[npm]] installed. So I'm going to check for the version here and same thing for NPM. If you don't have node installed I recommend going with node version manager. It makes it easier to manage multiple versions for the purposes of our development. We need node version 10 and NPM version six as you can see, we have both. If you don't have these, go ahead and download them. Now, if you're planning to do most of your development locally and then test it in the cloud because let's face it, it's not cheap to deploy in the cloud, then you're going to need Docker Desktop. So let's go ahead and check for that too. So I'm going to just check the version here and I want to do the same thing for Docker [[Jetpack Compose|Compose]]. Okay, so we have both. Next, we're going to set up some [[Git]] configurations specific to windows. If you're on a Mac, this doesn't apply. Now these are global. So let's apply that tag. The first one we want to set false.
>
> **[1:36](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=96)** The next one, I want to do the same thing but set it to true. And this would be the long path. Now let's install curl. So I'm going to use Chocolatey to do that. Choco install curl. And as you can see, I already have it installed. So that's great, but that's the command that you would use. Finally, we wanted to install VS code. Now we want to install version 1.39.2. So I'm typing up that command here. We want to specify the version. For my part, I've already installed that on this machine. If you haven't used this command to actually install it. At the time of recording, if you're looking to do local development this is the version that works best with IBM [[Blockchain]] Platform which is the extension that we're going to be using. So since I already have this, I'm just going to go ahead and open up VS code. We're going to be using the IBM Blockchain Platform to develop our [[Smart Contracts]]. So let's search for that in our extensions and install it. This can take a few minutes. Once installed, it shows the pre-recs needed to use this platform. If you're missing any pause the video and install those first. One recommendation I would make is if you need to install open SSL make sure you don't use the light version and instead install version 1.0.2U which works best for Hyperledger Fabric development. Again, by the time you're watching this video some of these versions may already be updated and the issues with them may well be resolved. All right, so we now have Hyperledger Fabric installed
>
> **[3:11](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-setup?u=76281980&t=191)** and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[Microsoft Azure|Azure]] (2), [[Windows]] (2), [[Blockchain]] (2), [[CLI]] (1)
> **CLI Commands:** node (4), npm (3), docker (2), curl (2), make (2)
> **Prerequisites:** install (9), setup (2)
> **Env Vars:** npm (3), ibm (2), cli (1), ssl (1)
> **Versions:** version 1 (2), version 10 (1), 39.2 (1)
> **Tools:** vs code (2), powershell (1), docker desktop (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Development environment for Fabric on Azure](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/development-environment-for-fabric-on-azure?u=76281980&t=0)** - [Instructor] There's a significant number of components needed to deploy the development environment. We'll cover those before beginning the setup in [[Microsoft Azure|Azure]]. The template we're working with in Azure is based on AKS, their [[Kubernetes]] service. Onto this, we're going to deploy our resources. We would need to deploy an order which would create its own cluster, followed by another cluster for each of our peers. In our case, we're going to keep it simple, and just use one peer and one order. You could choose to create a single cluster and have both the peers and orders on there. Since we have access to a template and it significantly reduces our deployment times, we will be using multiple clusters. After the clusters are provisioned, we will set up the remainder of the network which includes MSPs and channels. Altogether, the deployment will look something like this. We'll have a cluster for each of our order and peer, the client apps will be the process by which we communicate to those clusters, and we will use Azure Storage to maintain connection profiles and other setup data. To simplify deployments, I'm including here the information we will use to deploy our clusters. The deployment process for both is the same, except for the resource value specified here. You'll notice I'm using the same fabric certificate authority username. That's just for convenience in a development environment. Now that we've covered this, let's go deploy our consortium.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[Kubernetes]] (1)
> **Prerequisites:** setup (2), set up (1)
> **Exercise Files:** template (2)
> **Env Vars:** aks (1)
> **Speakers:** - [instructor] (1)

#### [Deploy Hyperledger Fabric on Azure](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=0)** - [Instructor] We're finally going to create our consortium in [[Microsoft Azure|Azure]]. As you can see, we're in the portal. So let's go ahead and open a Cloud Shell window. To make it easier, I'm going to open up full screen. So let's do that. We need to create a service principle that we're going to use later on. So let's go ahead and do that. Now, I'm going to use the az ad command here to create my principal. I want it to have rbac enabled and I'm going to skip assignment. For the name, I'm just going to call it HLF course SP and let's create that. We're going to want to save the output of this as we're going to reference it later on. So I'm just going to copy this and put it into a Notepad file. Next, let's go back to our portal and create the resource. So I'm going to select Create a Resource here and under Azure Marketplace, I want to select [[Blockchain]]. From here, we're going to select Hyperledger Fabric on Azure [[Kubernetes]] Service Preview. The first thing we want to do here is create a new resource group. I'm going to create the order of first, so let's call our resource group HLF Order. As we're creating the order of first, I'm going to use the resource prefix 01. Let's select Fabric Settings. For the organization name, I'm going to use two trees order and we're going to select Ordering Service here. The number of nodes we're going to keep to three. For Fabric CA username, I'm going to use, HLFC user. And I'm going to go ahead and put in my password here and let's retype that again. Once we have our password in, we're going to keep self-signed certificates here
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=93)** and move on to the AKS cluster settings. To reduce costs, I'm going to reduce node count to one, but you may choose to have more depending on your needs. For service principle ID here, we're going to use the app ID from Notepad. So let's go ahead and reference that. The client secret will contain the password. So we're want to do the same thing here, just copy this value, and we're going to put it back in twice. Let's select Review and Create. So it's quickly going to validate everything. And let's go ahead and create it. While this is running, I should mention we're going to do the exact same steps for the piers with a values mentioned in the previous video. What you'll see is the deployment in progress here, and this can take some time. What we're going to do in the interim is deploy the pier. So let's do the exact same steps here. We're going to select Blockchain and Hyperledger Fabric on Azure. I want a new resource group and this one I'm going to call pier, so HLF pier. And for the prefix, I want to use P1. Let's select Fabric Settings. We're going to call this organization two trees pier. And from the drop-down, we want to select Peer Nodes. We're going to keep a single node, and for the purposes of our database, we're going to use the CouchDB. And then to use the same username as the previous one as this is a development environment. Let's type in the password again here. Okay, same sort of thing, let's head on to the AKS cluster settings. Once again, I'm going to change the note count to one.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploy-hyperledger-fabric-on-azure?u=76281980&t=187)** For service principal ID, I'm going to use the same app ID that I was using before. Now, this is a development environment. Obviously I'm using one service principal for both. In a full production you wouldn't want to do something like this. Let's validate that once again. Okay, so we're ready to run this again and let's hit Create. So you'll notice in the top right corner here that we have two running and both are deploying. This will take about 20 minutes or so. So here we have the deployment completed, as you can see. We can go to the resource group and I can see the entire set of components that have been deployed. Keep in mind, this is just for the pier. We have a similar set for the order. Now, let's go ahead and set up the networking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[Blockchain]] (2), [[Kubernetes]] (1)
> **Env Vars:** hlf (3), aks (2), hlfc (1)
> **CLI Commands:** node (2), make (1), az (1)
> **Cross-References:** go back to (1), previous video (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)

#### [Connect to network](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=0)** - [Instructor] Let's begin by covering what the script will be provisioning. We're going to use the [[Microsoft Azure|Azure]] Hyperledger fabric tool setup script to make it easier to deploy our environment. On line one, we have our subscription ID. You can grab that from the portal. We're creating all resources in the same subscription. So I'm only going to reference this one. For lines 3 through 16, we have our variables that we'll be using for this script. If you're following along update with your environment variables. So you'll notice the ORDERER_ORG_NAME and the PEER_ORG_NAME the ones that we created in the portal. On line 18, we begin by creating the storage account. If you already have one provision feel free to comment it out. On line 23, we create the storage share which we'll be using to communicate between peers as we are setting up the network. It will have the MSP and connection profile info amongst other items. Starting line 34, we're using the Azure HLF tool script, which we'll download shortly to set up the orderer. We do the same for the peer online 38. Finally, we create the channel on line 45. This is where all the communication will take place. For the remainder of the script, the orderer is already part of the consortium and channel. So it just needs to add the peer. Now let's navigate to the Azure Portal. In here, I'm going to open up cloud shell in bash. So let's do the same thing as before and opened this up in another window. We're going to need to download the Azure tool through the curl command. You can do this without using curl but that's a longer process.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/connect-to-network?u=76281980&t=93)** So let's just go ahead and type that here. All right, now that we downloaded it, let's take a look at the files. And I'm going to head into the directory here. We can see all the files in here. Next, we need to run [[npm]] install on this directory. This can take a few moments. Finally, let's run set up. Okay, now that's completed. We want to just take a look at the directory and you'll see if the tool has been there. So the first tool that we see azhlf, that's the one that we're looking for and we can see everything that's been installed. Next, we're going to upload the script onto our cloud shell. So let's go ahead and do that. If you're following along you can grab it from the exercise files. So I'm just going to head up to the root here and take a look at if we have our file. Perfect. Now what we want to do is run it, and as we run it we'll see that it goes through each step that we discussed previously we get a little bit of a message giving us a heads up of what's getting deployed. Again, this can take a couple of minutes. All right. So we see this error message has happened sometimes. You just need to run the last line. So what I'm going to do here is I'm just going to grab it because the peers have already joined. We just need to set the anchor peer and this can happen occasionally. Let's just paste that and try running it again. And there you go. We have our consortium set up now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (4), [[npm]] (1)
> **Env Vars:** orderer_org_name (1), peer_org_name (1), msp (1), hlf (1), npm (1)
> **Prerequisites:** set up (3), setup (1), install (1)
> **CLI Commands:** curl (2), make (1), npm (1)
> **Tools:** azure portal (1), bash (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Cross-References:** we discussed (1)
> **UI Navigation:** navigate to (1)

#### [Create development project](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=0)** - Now that we set up our development environment we're going to want to create our smart contract project. It's useful to review the packaging that is provided out of the box. So let's go ahead and select the IBM [[Blockchain]] platform extension. We have four sections here: Environments contains the locations where we will be deploying. If you're going to do local development you would create an environment here. Now, we can also choose to create a [[JSON]] file here to connect our [[Microsoft Azure|azure]] environment, but for the purposes of this course we'll be deploying via shell. The gateway works on behalf of our application to communicate with the network, so application focuses on business logic not network topology. Finally, the wallet contains the user identities that are used to connect to the channels. If we go ahead and select the ellipsis here you'll notice we have a couple of options: We can create a new project, important existing one, or package and open project. We want to see what's available, so let's just go ahead and create a new project. We get the option to create a default or private contract. Private is specific to a single member. For our purposes, we're going to use the default contract. Now we get a few options here: [[Java]], [[JavaScript]], TypeScript, or Golang. We'll be using JavaScript for our setup. For the name I'm going to select two trees, and let's finally select where we want to save the project. Here I'm going to select add to work space. It can take a moment to generate the actual project. So let's take a look at what's been provisioned. First thing you'll notice here is we have index.js. This file contains our list
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/create-development-project?u=76281980&t=94)** of contracts and components. For our purposes, It's a single contract, but this could include any additional components that we might want to add. Next, let's take a look at package.json. Under dependencies, you notice we have fabric-contract-API and fabric-shim. These are the packages that allow us to communicate with our network. The shim provides the interface for core smart contract functions, that includes innit and invoke which are core to any contract. Fabric-contract-API is the interface for crud operations. We'll be using it to interact with the network. Now, if we navigate to our lib folder here, you'll notice we have a contract. You'll notice that it extends the contract class which, as we mentioned, includes the crud operations. We can see the implemented functions for each of these. All the functions are using a sync await pattern to communicate with the network. We'll look at the specifics of these functions later on as we'll be using these to communicate with our network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[JavaScript]] (2), [[Blockchain]] (1), [[Microsoft Azure|Azure]] (1), [[Java]] (1)
> **Env Vars:** api (2), ibm (1), json (1)
> **File Paths:** index.js (1), package.json (1)
> **UI Navigation:** select the (1), navigate to (1)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - now (1)


### 5. Create Your Azure Blockchain Application

[↑ Back to Table of Contents](#table-of-contents)

#### [Build the network](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=0)** - [Instructor] We're finally at the part of the course where we're going to build the network. To start, we need to define the business model. Now, earlier in the course, we talked about the company we're using as an example, Two Trees Olive Oil, and the complexity of working with partners to produce olive oil. What we're going to do here is map that process to our business model. Every business model requires three components: assets, participants, and transactions. Assets can be defined as tangible or intangible goods, services or property, and they're stored in registries. In terms of Two Trees, we can see three assets: the cultivation and describing the farming process, the production which creates the oil, and the grading process in which we determine what type of oil we've created. Now, let's look at our participants, which are the members in a business network. In our example, we're going to have three participants. We have our olive growers who are the farmers, the oil producers which are the individuals that create the oil, and the bottler who oversees grading the oil. The last item we want to talk about is transactions, which is how participants interact with assets. In our business model, I defined four different types of transactions. The first one is soil reading. We get the quality of the soil during the cultivation process and that's recorded onto the chain. Next, we have pesticides reading. Again, this is done during the cultivation process. Acidity reading helps us determine the grade of the oil. So if it's over a certain acidity level, we cannot term it as virgin olive oil. During the bottling process, we will be creating the grade. I should mention this is how I've defined the business model
>
> **[1:34](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/build-the-network?u=76281980&t=94)** for our course, but we could choose to represent this process in a different manner based on our business needs. It would depend on the organizations and how the various entities choose to interact. The real world model wouldn't be as simple as our examples here. Next, let's see how we represent these components in our code.

> [!info]- Semantic Content
>
> **Cross-References:** earlier in (1), we talked about (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [Examine application structure](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=0)** - [Instructor] Let's begin by reviewing our contract and vs code. The exercise files contain the code if you're following along. We have three functions defined and we'll be shortly creating another one to add readings as transactions. You'll notice we have a few packages imported beyond what's available in the shell. I should mention here, the libraries for shim and prodo pier are updated for fabric 2.0. Instead using contract API, which is actually easier to use. But since [[Microsoft Azure|Azure]] is on version 14.6, we need to reference it. For the purposes of our example, we measure a batch from farm to production. We need to know the weight of the batch being produced, the eventual grade, and want to record which farmer produced that batch. We'll be recording all of that information into a struct on line 15. The first function we have is for instantiation, which you'll see on line 26. This is where we would add any setup processes. For the purposes of this demo, I'm not putting any actual code in here, as it's worth seeing how to create the various components. But we could choose to populate our channel with data for initial setup. Next on line 33, we have invoke, and this function is called whenever an application tries to run the chain code. You'll notice in the signature, we have the stub which contains the information from the call. On line 34, we retrieved the function, name, and parameters. I'm not interested in the parameters for this function. So I've simply use the blank identifier. Next, I checked my functions map, which contains the names of the functions being called.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/examine-application-structure?u=76281980&t=93)** Any new functions will need to be added below line 46. Should the function exist, we pass the stub along so it can retrieve the parameters. We begin create batch on line 55. The first thing we do is get the parameters. We need three parameters. The batch ID, weight of the olives, and the farmer who's growing them. Next, we want to check if the batch ID isn't already used. You'll notice that we use get state to check that on line 63. Should the batch exist, we simply throw an error. On line 68, we convert wait to an integer. And on line 74, we define our new batch. We use [[JSON]] Marshall to convert our data into bites on line 76. And finally put that back onto the network on line 81. You'll notice on line 86, we returned a success message and that lets us know that the batch has been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[JSON]] (1)
> **Env Vars:** api (1), json (1)
> **Versions:** 2.0 (1), version 14 (1)
> **Prerequisites:** setup (2)
> **Tools:** vs code (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Add readings](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=0)** - [Instructor] Let's complete the add reading function. We'll be using a single function to record any type of reading. We'll begin by including the type which could be soil, pesticide, or acidity reading. We then have the value which is the value of the actual reading. We also want to record the auditor and the batch ID which is our unique identifier. Now, since we're going to be using this first thing I want to do is record all of those items into a struct. So I'm going to head to the top here and lets call it Reading. I'm going to include the three values in here. Now for the value, we're going to be recording it as a string because we know there's multiple different types of readings that we're going to get. So we can convert ones that are going to be integer and we can also have string values.
>
> **[0:55](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=55)** We're going to add this struck into our original batch and we'll call it readings because we're going to have more than one obviously. Let's head back to our function and grab our parameters. As I said, we're going to grab the parameters first and we're going to use the stub to get the values here. So it's going to be stub.GetFunctionAndParameters. We don't need the function we already know that. So we use a blank identifier. We want to check if we have the right number of parameters specified. So I'm going to do a quick if statement here. Next we want to use the batch ID and get the batch ID from the world state. What I'm going to do is go ahead and grab it as the first parameter. Now that we have the batch ID. Let's grab it from the world's state. We're going to be using the stub.GetState function. You'll notice I'm going to do quite a few checks for errors. So what I'm going to do here, let's just type this out. We just want to check if the nil values returned. And I am just going to copy this because we're going to be calling it quite a few times. Now let's populate our selected batch. We're going to create the variable here. Let's call it selected batch. And it is of typed Batch. And were going to use [[JSON]].Urmarshall, passing the batchJSON value.
>
> **[2:30](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=150)** And we're going to put that right back into selected batch. Next, let's get our reading type. We know the reading type is always going to be an integer. So we're going to convert it to Int. And the final two ones we want to retrieve are the value of the members. I'm going to find a new reading which will contain these values. Let's just pass in all of the values that we need here. We've created a new reading. What I want to do is get the current reading set and add this to it. So we're going to append it to the end. Let's call this reading set. What I'm going to do is I'm going to grab it from the selected batch. Let's just append to the end of that. Finally, we want to update our state to include the reading which means we need to convert our batch back to bytes. Let's go ahead and do that. So we're going to call this next variable selectedBatchAsJSON Bytes. We're going to use the json.Marshall function here. Once that's done let's call our stub.PutState function. So this is how we're able to get our information back onto the World state. And I'm going to use batch ID because that's our unique identifier. Let's pass in our selectedBatchAsJSONBytes. Finally, let's return this function.
>
> **[4:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/add-readings?u=76281980&t=245)** If we've gotten to this part, we know it's been successful. So let's just say shim.Success. And I'm going to return a byte array which will say "reading added" For the purposes of our code, I'm going to define the main function in this file. It'll make it easier for our demo purposes. Now I'm going to go ahead and create the error here. What we want to do here is shim.Start. Now, if you remember in the other one that was called chain code but we've defined this as batch manager. So we're going to instantiate a new version of batch manager and there we go. We have our add reading function complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Code Identifiers:** batchjson (1), selectedbatchasjson (1), selectedbatchasjsonbytes (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Deploying chaincode to network](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=0)** - [Instructor] Before we go ahead and deploy our chain code, I wanted to show you the exercise files that we have available. So these are the commands that we're going to be using. The first thing that we're going to be doing is installing the chain code, instantiating it, after we instantiate it, we create the batch and finally we add the readings. There are additional ones that we will use later on in the course, but for the purposes of this video, these are the ones that we're looking at primarily. So let's head over to the [[Microsoft Azure|Azure]] portal. I already have a session of cloud shell open here. Let's go ahead and upload our code here. We go ahead and upload our chain code dot goal, and this is why we had created a single file. It's a little bit easier for the purposes of this course. I'm going to go ahead and move our chain code into a different directory just to make it a little bit simpler when we're running our scripts. So if we take a quick look we can see our chain codes there. Let's go ahead and move that. Next, let's head back and you'll see here we have our org name. I've created the chain code name which is going to be add readings for the purposes of this video. We're version one. We're obviously using Golang. And the path that we just created in here. Let's go ahead and copy that. Okay. So our first call is to actually go ahead and install that chain code. And we're using all the variables that we just defined. Okay. So our chain code is installed. Let's go ahead and instantiate it. If you remember, our function is called init so that's the one that we're going to call here. And I'm going to go ahead and paste that. Now, sometimes this can take a little bit of time.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/deploying-chaincode-to-network?u=76281980&t=93)** All right. So our chain code is instantiated. Let's go ahead and create our first batch. Now we provide the function name, which is create batch and then we have all the arguments that are provided here. So we're going to use B01 as our batch. We have our farmer A for the purposes of this test. All right. So our batch has been created. Finally, let's get back here and let's create our first reading. We just want to test out if it comes through and if it's working successfully. So same sort of thing, the function that we're going to be calling is add readings, the arguments that we're providing. So the first one is going to be our unique identifier for the batch that we just created. Next, we're doing a soil reading. And in this case, we're saying that there is no contaminants. So we're going to put none and the auditor is going to be auditor A. Okay so as you can see, we've successfully installed and instantiated our chain code, we've gone ahead and created our batch and we've added readings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** b01 (1)
> **Tools:** azure portal (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is called (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Determine oil grade](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/challenge-determine-oil-grade?u=76281980&t=0)** - [Instructor] Your challenge, should you choose to accept it is to determine the oil grade. Everything we've done in the oil creation process has been leading up to this. You'll be taking readings from the cultivation and production assets to create the determined grade function. So, if we have soil contaminants, whether it be sewage, animals, or flood, we want to reject that oil. In terms of pesticides, if there are none, or there are natural toxins, we can grade that oil as organic. When we're looking at acidity, we will determine based off the percentage. So, it could be anything from virgin to extra-virgin to delicate extra-virgin or beauty [[Microsoft Products|products]]. Now, the reason behind this is Two Trees wants to automate based on pre-defined conditions so people cannot tamper with the actual labeling. And so, that their customers can sleep at night knowing that they're not going to get E. coli poisoning. This challenge should take you about 20 minutes to complete. Good luck and remember Two Trees is depending on you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Determine oil grade](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=5)** - [Instructor] Lets go ahead and create our determined grade function. So the first thing I'm going to do is you'll notice we have the batch struct here. We don't have anything to measure the grade. or the producer, let's add those values Now we are storing both of them as string. Just to keep it simple. Next, I'm going to create a constant that's going to restore our values for reading types where reading soil quality, pesticides, and acidity. Now, if we're doing all of those readings regularly I want to create a enum to store that. golang doesn't have that. So I'm just going to use constant. If you remember previously whenever we're creating a function we have to define it in our map. So let's go ahead and do that. I'm also going to create a query batch function just so that it's easier for us to evaluate afterwards. Let's scroll to the bottom here and we're going to create the determined grade function first. That's going to have the same structure as all the other functions here. By this point, it should be very familiar but we're going to grab the parameters first. So let's use a stub to get those values. As always, I want to check that we have the right number of parameters. in the case of determined grade we only need 2, batch ID, and producer. Okay, So now that we have the parameters
>
> **[1:38](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=98)** we want to grab our batch and our producer. So let's go ahead and do that. As I mentioned, the first thing in the parameters is going to be the batch ID. Once we get the batch ID we want to use that to get the batch from the ledger. So let's go ahead and do that. I'm going to copy this error code cause we're going to use this multiple times. Next, Let's grab our producer here. Now that we've got the batch from the ledger, let's map it to our struct. Going to call it selected batch. Okay, from this, we want to get a reading set. So we know we have our selected batch. Let's grab our reading set from the batch. So this is what we're going to use to determine our grades. And the other thing I do want to set here is a variable. We'll call it oil type Val, it's going to be a string and that's going to contain our output. Okay, So now I'm going to loop through the reading set and we're going to use that information to evaluate and determine what our grade is. So let's go ahead and create a four loop here. So the first step for reading that I want to evaluate is soil reading. Now I'm going to use the constant that we created up top. And let's just go through that. Now, if you remember any soil reading that has any type of contamination, we want to go ahead and reject it. So that's what we want to check for here. The next thing we want to check for is pesticides. And in there, we want to just see
>
> **[3:13](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=193)** if there are any chemical values. So if there are any chemicals, we know it cannot be organic. And let's just do a quick printout here again. So the next thing we want to track is we have the acidity value. We need to convert it from a string intern integer let's go ahead and do that. I'm going to use string convert here. We'll throw an error If we're unable to get the value. Finally, lets us go through those values and iterate through that. So if we have an acidity value lower than one we know that we're going to label it as delicate extra Virgin olive oil. So check for that. If the value is between one and two we're going to call it extra virgin. Now it's between two and four. We're going to call it Virgin. And finally we have for beauty [[Microsoft Products|products]]. So it's anything higher than that. We're just going to use it for beauty products. Keep in mind this is just for this particular example. So there you go. We've completed our four loop. Let's go ahead and print that out next. Okay. So now what we're going to do is we're going to update selected batch and we're going to put the grade and producer into there. Finally, we want to put that information back into the ledger. So let's convert that batch into bites. And now we're just going to call the put state function
>
> **[4:49](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=289)** in the stub as always our batch ID is the unique identifier. We're just going to put the batches bytes in here. Finally, we want to return shim.success and I'm going to put the value graded here so we can see that we've determined the grade let's complete our query batch function, just so that it makes it a little bit easier for us to test it out. As we've seen a few times we're just going to grab the parameters from the stub. So let's go ahead and do that. Now we're only getting one parameter and it's going to be the batch ID. Let's just use that. So we are going to define batch, as bytes. We're not going to get the error function here and I'm just going to use the get state function. Finally, let's return a success value here and I want to return the batch. We've completed this function. We're now ready to test it out. Let's go ahead and head over to the portal. I have our screen maximized to the cloud shop. We've uploaded our chain code. We're going to call it similar commands that we did in a previous exercise. So I'm going to open up that window. So if you remember, let's go ahead and move our chain code into right directory. I'm going to go ahead and copy this. Now, one thing you'll notice here is I've chaincode date. One of the issues that the [[Microsoft Azure|Azure]] tool has AC HLF tool, at the time of according it doesn't upgrade the chaincode you'd actually have to use the peer lifecycle commands. And for the purpose of this course, that's out of scope. So I'm just going to rename it. As before let's go ahead
>
> **[6:23](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/solution-determine-oil-grade?u=76281980&t=383)** and install our chaincode. That is done successfully. Next we're going to initialize it. This can take a few moments. Okay. Our chain code has been instantiated. We are going to ahead and create our batch. So you'll notice the first thing that we need to do is we want to create the batch. We want to add a couple of readings. So one is going to be around the soil quality. We have another reading around the chemicals and then finally we have the reading around the acidity. From there, We can actually use that to determine the grid. So we call it the create batch function. To make this a little bit simpler, I'm going to call it all the ad reading functions together Okay So we've added all our readings. Let's go ahead and determine grade here. All right. It's been graded. Now, one of the things you might be thinking about is why am I not seeing some of the outputs that we had put, so a print screen, we would actually have to connect to the pod and get the logs from there, but rather than do that I'm going to just call queryBatch here. Okay, so we can see provided the readings that we had here. We have graded our olive oil to be extra-virgin. Now, if you wanted to go a bit further and actually look at some of the issues that might be occurring here's the code that you'd have to go into. You'd have to get into the cluster and then actually call the pods. But in our case, we've already got it. We have all the readings, we have successfully graded our olive oil.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** querybatch (1)
> **Env Vars:** hlf (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Teardown](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/teardown?u=76281980&t=0)** - [Instructor] Now that we completed all the exercises for this course, we're going to want to go ahead and delete the resources, because that can add up and the cost can be significant. What I'm going to do is I'm just going to delete the resource groups here. I've opened up [[Microsoft Azure|Azure]] Cloud Shell. And this will allow us to delete the various components. So I'm just going to use az group delete. Let's start by deleting our HLF pier. And I'm just going to say yes so that it automatically goes through that process. Now keep in mind, it takes a little bit of time to run this and we're going to be doing the same step for HLF order. And finally, for the storage resource group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1)
> **Env Vars:** hlf (2)
> **CLI Commands:** az (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-for-developers-hyperledger-fabric-on-azure-14022311/next-steps?u=76281980&t=0)** - [Gurinder] Thank you for joining me for this course. By this point you should have a good foundation but it isn't the end of your journey. I'd recommend taking a look at the Hyperledger fabric documentation. Additionally, there's documentation specific to Hyperledger composer. You could get information on here on how to query the ledger and further information on access control lists. Finally, in terms of [[Microsoft Azure|Azure]], we've just scratched the surface. You might want to look at some of these other areas that are coming up. For instance, Azure, [[Blockchain]] workbench. There's a lot of new stuff happening here and it's useful to be aware of it. Finally, you can always go to the [[LinkedIn]] learning library as we're always adding new content. Again, thank you for watching. My name is Gurinder and happy learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (2), [[Blockchain]] (1), [[LinkedIn]] (1)
> **CLI Commands:** composer (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - [gurinder] (1)


## Instructor

- [[Gurinder Singh Mann]]

## Resources

- Exercise files available

## Skills Covered

- Blockchain Architecture
- Microsoft Azure

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

---

[↑ Back to top](#)