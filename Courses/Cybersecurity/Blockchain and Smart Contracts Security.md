---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: blockchain-and-smart-contracts-security
url: "https://www.linkedin.com/learning/blockchain-and-smart-contracts-security"
duration_minutes: 92
duration: 1h 32m
level: Intermediate
updated: 5/27/2022
learners: 129846
skills:
  - Smart Contracts
  - Cryptography
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFi1XK4Zr4dqw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1653503208284?e=2147483647&amp;v=beta&amp;t=uI0nw6DQaArZ41atAmsRSbzTPkMp-UdZdmVeTl0DjTY"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Getting Started in Blockchain]]'
prev_courses:
  - '[[Foundations of Decentralized Finance (DeFi)]]'
path_nav: '[{"path":"Getting Started in Blockchain","position":5,"total":5,"prev":"Foundations of Decentralized Finance (DeFi)","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/data-science
  - skill/smart-contracts
  - skill/cryptography
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Blockchain%20and%20Smart%20Contracts%20Security.md)

![Blockchain and Smart Contracts Security](https://media.licdn.com/dms/image/v2/C560DAQFi1XK4Zr4dqw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1653503208284?e=2147483647&amp;v=beta&amp;t=uI0nw6DQaArZ41atAmsRSbzTPkMp-UdZdmVeTl0DjTY)

# Blockchain and Smart Contracts Security

> Blockchain is the backbone of cryptocurrencies, non-fungible tokens, Web 3.0, and the metaverse. It’s critically important for supporting distributed applications (dapps), whose day-to-day relevance has been increasing at an almost-exponential rate. This makes Blockchain a prime target for a potentially devastating security breach. In this course, instructor Sam Sehgal shows you how to configure a

> [LinkedIn Learning](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security) | 1h 32m | Intermediate | 130K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Security concerns with blockchain](#security-concerns-with-blockchain)
  - [What you should know](#what-you-should-know)
- [**1. Demystifying Blockchain**](#1-demystifying-blockchain) (3 videos)
  - [What is blockchain?](#what-is-blockchain)
  - [Smart contracts and dApps](#smart-contracts-and-dapps)
  - [How blockchain works](#how-blockchain-works)
- [**2. Security Properties of Blockchain**](#2-security-properties-of-blockchain) (4 videos)
  - [Consensus](#consensus)
  - [Immutability](#immutability)
  - [Cryptography: Keys and addresses](#cryptography-keys-and-addresses)
  - [Cryptography: Validation](#cryptography-validation)
- [**3. Security Model for the Blockchain Ecosystem**](#3-security-model-for-the-blockchain-ecosystem) (3 videos)
  - [Overall technology architecture](#overall-technology-architecture)
  - [Attack surface and vectors](#attack-surface-and-vectors)
  - [Security model](#security-model)
- [**4. Blockchain Platform Security**](#4-blockchain-platform-security) (2 videos)
  - [Proof-of-work protocol attacks](#proof-of-work-protocol-attacks)
  - [Proof-of-stake protocol attacks](#proof-of-stake-protocol-attacks)
- [**5. Distributed Apps and Smart Contracts Security**](#5-distributed-apps-and-smart-contracts-security) (6 videos)
  - [Smart contracts and EVM](#smart-contracts-and-evm)
  - [Anatomy of a smart contract](#anatomy-of-a-smart-contract)
  - [Deploying a smart contract](#deploying-a-smart-contract)
  - [Smart contracts threats: Part one](#smart-contracts-threats-part-one)
  - [Smart contracts threats: Part two](#smart-contracts-threats-part-two)
  - [Secure design](#secure-design)
- [**6. Non-distributed Apps and Enabler Services**](#6-non-distributed-apps-and-enabler-services) (3 videos)
  - [Blockchain ecosystem threats: Part one](#blockchain-ecosystem-threats-part-one)
  - [Blockchain ecosystem threats: Part two](#blockchain-ecosystem-threats-part-two)
  - [Blockchain ecosystem threats: Part three](#blockchain-ecosystem-threats-part-three)
- [**7. End User Security**](#7-end-user-security) (2 videos)
  - [Wallet and keys security](#wallet-and-keys-security)
  - [Web session security](#web-session-security)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Security concerns with blockchain](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=0)** - Do you know what's the driving force and the technology behind cryptos, NFTs, Web 3.0 and the metaverse?
>
> **[0:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=10)** It's [[Blockchain]] While the adoption of blockchain has skyrocketed, so have the number of attacks compromising the security and trust in this ecosystem.
>
> **[0:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=22)** [[Smart Contracts]] and [[Decentralized Applications (DApps)|decentralized applications]] are paving the way to new business models and a revolutionary new autonomous incarnation of the internet.
>
> **[0:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=34)** And security must be ingrained from day one.
>
> **[0:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=38)** So what can you and your organization do to secure your share in the blockchain ecosystem?
>
> **[0:47](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=47)** Well, if you are a security professional, trying to apply your knowledge and experience in security to this intriguing world of blockchain, or if you are a blockchain Smart contracts or decentralized app developer who wants to get a comprehensive view of security threats, weaknesses and mitigation practices, this course is for you.
>
> **[1:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=71)** Hi, my name is Sam Seghal.
>
> **[1:14](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=74)** I have over a decade of combined industry experience across leading software engineering projects, securing complex applications, and leading grassroots security transformation efforts.
>
> **[1:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=86)** In this course, I will help you look at the blockchain Smart contracts and its ecosystem from the lens of security.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=94)** Keeping inside its attack surface and potential attack vectors we will apply a four factor security model to cover security aspects of blockchain platform and its consensus protocols, Smart contracts programming, third party services, such as wallets, exchanges, and Oracles.
>
> **[1:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=117)** And finally the end user.
>
> **[2:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=121)** By the end of this course I hope that you will walk away with an understanding of security controls and practices you should apply to protect your blockchain ecosystem, whether you leverage it for cryptocurrencies, decentralized finance, non-fungible [[Tokens]], or your industry specific applications.
>
> **[2:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-concerns-with-blockchain?u=76281980&t=142)** So join me on my [[LinkedIn]] learning course as we explore the intersection of blockchain and security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (9), [[Smart Contracts]] (4), [[Decentralized Applications (DApps)|Decentralized applications]] (1), [[Tokens]] (1), [[LinkedIn]] (1)
> **Versions:** 3.0 (1)
> **Analogies:** such as (1)
> **Speakers:** - do (1)

#### [What you should know](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-you-should-know?u=76281980&t=0)** - [Instructor] This course includes an introduction to the foundations of the [[Blockchain]] and [[Smart Contracts]].
>
> **[0:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-you-should-know?u=76281980&t=6)** But to get the best out of this course, you should have some information technology knowledge.
>
> **[0:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-you-should-know?u=76281980&t=12)** Familiarity with crypto, blockchain, and smart contracts will help you get the most out of the concepts.
>
> **[0:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-you-should-know?u=76281980&t=20)** Exposure to programming in any language will help you approach these [[Secure Coding]] practices that will apply to smart contracts.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-you-should-know?u=76281980&t=29)** And finally, familiarity with the general knowledge of security concepts outside of blockchain is an excellent foundation for learning security controls specific to blockchain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (4), [[Smart Contracts]] (3), [[Secure Coding]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Demystifying Blockchain

[↑ Back to Table of Contents](#table-of-contents)

#### [What is blockchain?](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=0)** - [Narrator] [[Blockchain]] is a decentralized and distributed ledger.
>
> **[0:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=5)** A crude but easy way to internalize the concept of blockchain in your mind is to think of it as a special kind of database where the data is spread and stored across geographically distributed machines and without a single database administrator or a management layer.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=28)** The reason it is called blockchain is data is stored in a series of blocks where one block is linked to its predecessor, almost like a chain.
>
> **[0:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=40)** Hence the name blockchain.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=43)** What makes blockchain unprecedented from other technologies is the combination of unique features it carries.
>
> **[0:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=52)** It is distributed, decentralized, immutable, consensus driven and highly available.
>
> **[1:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=61)** Let's review them, one by one.
>
> **[1:04](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=64)** As a user, when you write data to blockchain, the data is replicated to multiple computers, or, also known as nodes.
>
> **[1:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=75)** In fact, a node in a blockchain network may hold a copy of the entire database, sometimes also known as a ledger.
>
> **[1:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=85)** Now keep in mind that a distributed system can be centralized, meaning it is operated and managed by a central governing body.
>
> **[1:37](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=97)** Or it can be decentralized where it is not managed by such a controlling entity.
>
> **[1:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=104)** Blockchain is a decentralized distributed system.
>
> **[1:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=110)** The nodes of the blockchain coordinate with each other using specialized protocols to ensure that the data is recorded in a manner the user intended to.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=123)** To illustrate these concepts of distributed and decentralized, let's take an example of an application that many of you are likely to be familiar with, the Bitcoin.
>
> **[2:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=136)** Bitcoin is a [[Cryptocurrency]] that uses blockchain technology, its network, and specialized protocols.
>
> **[2:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=144)** Bitcoin network is a peer to peer network of distributed nodes.
>
> **[2:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=150)** A node is just another [[Microsoft Word|word]] for a computer.
>
> **[2:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=153)** Now that computer could very well be the computer you are on right now, provided it has the right software and configuration.
>
> **[2:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=164)** When you send or receive Bitcoins to another person using a mobile wallet app, you are announcing to the distributed Bitcoin network that you have a transaction you wish to conduct.
>
> **[2:58](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=178)** You also expect the underlying blockchain ecosystem to verify the financial accounting and finally record the transaction onto the blockchain ledger.
>
> **[3:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=191)** No bank or financial institution is sitting between you, that is the sender, and the receiver, that is going to validate or even facilitate this transaction.
>
> **[3:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=204)** While decentralized implies that there is no central authority to approve what gets written to the blockchain.
>
> **[3:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=214)** But does it mean anyone can write to blockchain, whatever and whenever they wanted to?
>
> **[3:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=221)** Wouldn't that be a security problem?
>
> **[3:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=224)** Blockchain has another feature where data is written only after the changes have been approved by multiple participating nodes of the blockchain network.
>
> **[3:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=236)** In other words, nodes must reach a consensus on what block is added to the chain of blocks.
>
> **[4:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=245)** We will cover the concept of consensus in blockchain and security threats in depth later.
>
> **[4:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=251)** Blockchain is an append only database.
>
> **[4:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=255)** That means someone can't go back and alter the blocks of data at a previous time.
>
> **[4:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=262)** Once data is written to blockchain it cannot be altered.
>
> **[4:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=268)** In the security nomenclature this feature is known as immutability.
>
> **[4:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=274)** Since the blockchain is distributed, meaning the data is replicated across nodes, if some of the nodes malfunction and leave the network or in the worst case, they become rogue, blockchain protocols will ensure the blockchain network continues to remain functional and the data remains accessible at all times.
>
> **[5:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=300)** Blockchain records are public, meaning anyone can see the record of transactions published on the blockchain ledger.
>
> **[5:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=309)** That said, some blockchains can be set up as private but most widely adopted blockchains today, such as Bitcoin and [[Ethereum]] are public.
>
> **[5:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=321)** Obviously the public nature allows anyone to audit and spot any discrepancies but it can also be a [[Privacy]] concern.
>
> **[5:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/what-is-blockchain?u=76281980&t=331)** So we reviewed the unique features of blockchain but before we dig deeper into security aspects of the blockchain, let's digress and take a look at another use case for blockchain that is beyond cryptocurrencies but has profound implications if not secured.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (27), [[Cryptocurrency]] (1), [[Microsoft Word|Word]] (1), [[Ethereum]] (1), [[Privacy]] (1)
> **Definitions:** is a  (4), known as (3), is called (1), in other words (1), is an  (1)
> **CLI Commands:** node (2)
> **Analogies:** think of it as (1), such as (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Smart contracts and dApps](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=0)** - [Narrator] Enter [[Smart Contracts]].
>
> **[0:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=3)** Now don't be confused by the name.
>
> **[0:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=5)** In simple words a smart contract is a computer program that is a collection of code and data that is stored and executed on the [[Blockchain]].
>
> **[0:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=16)** In contrast, a traditional program runs on a desktop or a virtual machine or in the cloud.
>
> **[0:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=24)** But smart contracts since they are deployed on blockchain are by nature, distributed and transparent.
>
> **[0:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=32)** Moreover, any user can interact with a smart contract and execute its function.
>
> **[0:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=38)** This distinguishing feature of the smart contracts makes them vulnerable to attacks.
>
> **[0:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=45)** Now, with regular applications, you can patch or redeploy app frequently and get rid of the coding issues.
>
> **[0:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=53)** But once you have a buggy code deployed in blockchain it is extremely difficult to replace it.
>
> **[1:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=62)** So what role do smart contracts play in the world of the blockchain?
>
> **[1:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=67)** Well, think of smart contracts as important building blocks that other users can leverage.
>
> **[1:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=75)** You average you as a user when want to create business applications that are decentralized in nature and deployed on blockchain are likely to rely on smart contracts.
>
> **[1:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=90)** Smart contracts are developed in blockchain specific languages, such as [[Solidity]].
>
> **[1:37](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=97)** [[Decentralized Applications (DApps)|Decentralized applications]] deployed on blockchain are a new breed of applications that take advantage of the properties of blockchain that we reviewed in the prior videos.
>
> **[1:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=109)** Sometimes these are also referred to as Web 3.0 applications.
>
> **[1:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=116)** Surprisingly, the most common examples of such apps are Bitcoin and [[Ethereum]].
>
> **[2:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=123)** And then, there are apps that allow users to trade digital ad via known fungible [[Tokens]] or NFTs.
>
> **[2:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=132)** E-voting and identity management are specific use cases addressed by many upcoming decentralized apps.
>
> **[2:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=141)** Decentralized apps are also heavily used in the world of finance today.
>
> **[2:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-dapps?u=76281980&t=146)** Many industry specific applications are also emerging in the fields of legal supply chain and [[IoT|internet of things]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (8), [[Smart Contracts]] (7), [[Solidity]] (1), [[Decentralized Applications (DApps)|Decentralized applications]] (1), [[Ethereum]] (1)
> **Definitions:** is a  (2)
> **Versions:** 3.0 (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [How blockchain works](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=0)** - [Instructor] You'll be able to appreciate the security properties and the weaknesses in [[Blockchain]] if you know how blockchain actually works behind the scenes.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=11)** So let's get to that first and see how a transaction is created, validated, and finally recorded on blockchain.
>
> **[0:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=21)** You already know blockchain is a chain of blocks, but what is a block?
>
> **[0:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=27)** A block is a collection of [[Data Structures]] that includes a header and a list of transactions.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=36)** Blockchain header contains multiple fields that are necessary for blockchain protocols to do their job.
>
> **[0:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=44)** Some examples are timestamp, the hash of the previous block, Merkle root, and so on.
>
> **[0:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=52)** We will cover the purpose of these fields in a minute.
>
> **[0:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=56)** By the way, the very first block of a blockchain is known as the Genesis block.
>
> **[1:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=61)** It does not contain a hash of the previous block since there is none.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=67)** A block contains multiple transactions that are recorded in the blockchain.
>
> **[1:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=73)** A transaction can represent any of the following: a transfer of [[Cryptocurrency]] value from one party to another.
>
> **[1:23](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=83)** It can also be a smart contract program intended to perform an action that someone programmed it to be.
>
> **[1:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=92)** When a user wants to record a transaction onto the blockchain network, the process follows these six steps.
>
> **[1:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=101)** Let's start with the first step.
>
> **[1:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=103)** A node in the blockchain network is a physical entity that can play different roles.
>
> **[1:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=109)** Some nodes play the role of a user's crypto wallet, some play the role of a miner, and some of a validator.
>
> **[1:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=117)** We will cover mining and validation in upcoming videos.
>
> **[2:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=121)** A user initiates the transaction by using wallet software.
>
> **[2:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=126)** The transaction is signed with the sender's private key.
>
> **[2:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=131)** Wallet software is a utility software used by end users for multiple purposes such as generating and storing sign-in keys, managing the crypto funds, and communicating with blockchain on behalf of the user.
>
> **[2:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=148)** Next, the transaction is broadcast to the blockchain network.
>
> **[2:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=153)** Broadcast ensures that the information makes to every other node of the network.
>
> **[2:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=160)** A commonly used protocol for broadcasting on P2P network is the gossip protocol.
>
> **[2:47](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=167)** Imagine how a rumor is spread.
>
> **[2:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=170)** One shares a rumor with a few, those few spread with its next few, and then the process continues.
>
> **[2:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=177)** A blockchain network is a peer-to-peer network of nodes.
>
> **[3:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=181)** A node can be someone's personal computer, a VM in the cloud, or a dedicated data center for blockchain.
>
> **[3:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=189)** Now, bear in mind that blockchain network is not a brand new physical network.
>
> **[3:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=195)** In fact, it sits on top of the existing network layer.
>
> **[3:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=200)** So from a security perspective, it inherits the strengths and vulnerabilities of the underlying network.
>
> **[3:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=208)** Not all nodes are made equal.
>
> **[3:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=212)** At a broad level, there are two types of nodes: full node and lightweight nodes.
>
> **[3:39](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=219)** Full nodes maintain a copy of the entire blockchain ledger.
>
> **[3:46](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=226)** Depending upon the role of a full node, it may validate the transaction, add blocks to the blockchain, or may just perform administrative tasks of permitting or denying other nodes from joining the network.
>
> **[4:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=241)** In contrast to the full node, lightweight nodes keep only a copy of the block headers instead of the entire ledger.
>
> **[4:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=250)** Many of the end user clients act as a lightweight node and perform transaction validation for one user only.
>
> **[4:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=260)** Before the incoming transaction is recorded to the blockchain network, it must go through a series of validations.
>
> **[4:29](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=269)** First, the miner nodes validate the transaction is not malicious and that it follows some basic rules such as cryptocurrency funds to be transferred are not already spent; that is, avoid double spending.
>
> **[4:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=285)** The total value of the output is equal to the value of the input of the transaction, basic accounting 101.
>
> **[4:54](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=294)** And lastly, digital signatures are valid to ensure that the transaction is not malicious.
>
> **[5:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=302)** After validation, miner nodes continue to cache these transactions in their local memory pool in preparation to add them to a transaction block.
>
> **[5:14](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=314)** Recall that a block contains multiple transactions.
>
> **[5:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=319)** Once a group of transactions is ready, the miner node adds them to a block, updates its header with the timestamp, and includes the hash of the previous block.
>
> **[5:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=332)** Many miner nodes follow the same process and arrive at their own version of the block.
>
> **[5:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=341)** They all wish to append their block to the blockchain, but only one will succeed.
>
> **[5:47](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=347)** In order to succeed, the miner nodes must solve a puzzle.
>
> **[5:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=352)** Solving the puzzle in blockchain lingo is known as, as you guessed it, mining.
>
> **[5:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=359)** Each block header contains a 32-bit nodes.
>
> **[6:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=363)** By the way, a nonce is a just a technical term for a number that can only be used once.
>
> **[6:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=371)** To solve the puzzle, the miner must keep calculating the hash of the new block until it exceeds the target hash value, and the only parameter a miner can change is the nonce value.
>
> **[6:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=387)** No other attribute of the header can be chained after the miner solves the puzzle and arrives at a final hash value which is then stored in the block header, but why mine in the first place?
>
> **[6:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=403)** The mining process ensures that miners have spent personal resources, be it computing, storage, or personal stake.
>
> **[6:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=413)** Basically, they need to have skin in the game.
>
> **[6:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=416)** As a result, the miners are awarded with cryptocurrencies.
>
> **[7:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=421)** Bear in mind that multiple miners may come up with their own version of the proposed block which will contain a different set of transactions.
>
> **[7:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=431)** Only the miner that solved the puzzle first will have the opportunity to append its block and hence earn the reward, but what if more than one miner solved the puzzle at the same time?
>
> **[7:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=445)** In that case, there'll be two branches or chains of the blockchain, but that's not desired.
>
> **[7:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=453)** There should only be one branch.
>
> **[7:35](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=455)** As more blocks are added to the chain, only the longest branch shall prevail and others will be purged.
>
> **[7:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=463)** Transactions from the purged branches shall be mined again and added to a future block.
>
> **[7:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=470)** After successful mining, the miner broadcasts the proposed block to the blockchain network for others' node to validate.
>
> **[8:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=480)** The step of validating the block should not be confused with step of validating a transaction that the miner performed before starting the mining process.
>
> **[8:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=492)** After successful validation, the new winning block is appended to the blockchain.
>
> **[8:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/how-blockchain-works?u=76281980&t=498)** The winning miner receives its award.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (23), [[Cryptocurrency]] (2), [[Data Structures]] (1)
> **CLI Commands:** node (9)
> **Definitions:** is a  (7), known as (2)
> **Analogies:** such as (2), imagine (1)
> **Env Vars:** p2p (1)
> **Speakers:** - [instructor] (1)


### 2. Security Properties of Blockchain

[↑ Back to Table of Contents](#table-of-contents)

#### [Consensus](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=0)** - [Instructor] Having seen what [[Blockchain]] is and how it works, it is time to look into its native security properties.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=9)** Blockchain is designed to be secure through built-in design mechanisms.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=15)** It comes with three built-in security properties.
>
> **[0:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=19)** Consensus, immutability and security through [[Cryptography]].
>
> **[0:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=25)** You know that in a Blockchain there is no central governing entity that dictates or oversees what transactions are chosen to be written to the Blockchain.
>
> **[0:35](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=35)** That decision is made through consensus among the participating nodes within Blockchain.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=42)** The process of arriving a consensus by the nodes is materialized through a specialized and robust protocol.
>
> **[0:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=51)** But why?
>
> **[0:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=52)** What if one of the nodes become rogue and wants to corrupt the process of picking a majority selected block?
>
> **[1:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=60)** The consensus algorithm must be robust and should be able to handle corrupt nodes, colluding nodes, and even faults due to communication failures.
>
> **[1:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=72)** There are many types of consensus protocols prevalent in the Blockchain ecosystem.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=77)** Proof of resource protocol family is a general term for the family of protocols that require nodes to provide evidence that they have spent personal resources when participating in the mining process.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=93)** Such resources must not be abundant or free.
>
> **[1:37](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=97)** For example, Bitcoin and [[Ethereum]] use proof of work protocols that require proof of computing.
>
> **[1:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=105)** Recall the example of puzzle solving we saw in the last videos.
>
> **[1:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=110)** Miners will not be able to solve the puzzle without exerting their CPU power.
>
> **[1:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=116)** Proof of space or storage protocols requires expanding storage resources as used by SpaceCoin.
>
> **[2:04](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=124)** Proof of burn protocols requires spending crypto resources.
>
> **[2:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=129)** Since proof of resource requires miners to spend physical resources, it ends up consuming a significant amount of energy and is not environmentally friendly.
>
> **[2:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=142)** In contrast, proof of state protocols family requires nodes to invest crypto [[Tokens]] before participating in the consensus mechanism.
>
> **[2:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=153)** These nodes are called validators.
>
> **[2:37](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=157)** It is based on the principle that a node has substantial skin in the game, so as not to cheat the system.
>
> **[2:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=164)** Higher the stake, the higher the [[Probability]] of being selected as a validator.
>
> **[2:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=171)** As of the writing of this course, Ethereum is planning to move to proof of stake from proof of work consensus protocol.
>
> **[3:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=181)** Well, the above two classifications fall into category of protocols known as modern-Nakamoto and post-Nakamoto consensus.
>
> **[3:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=191)** In fact, proof of work was first used in Bitcoin.
>
> **[3:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=196)** But keep in mind that consensus [[Algorithms]] are not new to decentralized systems.
>
> **[3:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=202)** In fact, the design of fault-tolerant consensus protocols has been subject of research for many decades.
>
> **[3:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=211)** Such protocols fall into the family of protocols known as Byzantine Fault Tolerance, or BFT protocols.
>
> **[3:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=220)** In contrast to proof of work and proof of state protocols, BFT protocols do not require a burden of proof on the nodes in the network.
>
> **[3:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=232)** Some notable examples of BFT protocols are practical BFT, Paxos, and so on.
>
> **[3:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=239)** While these protocols are not directly usable in Blockchain world, their variations such as IBFT and Tendermint have potential uses in the Blockchain.
>
> **[4:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=251)** We have been using the term Byzantine and Fault Tolerance in the context of consensus protocols.
>
> **[4:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=258)** The term Byzantine Fault is also known as Byzantine Generals Problem.
>
> **[4:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=264)** It refers to a situation in computer networks where nodes fail or behave maliciously.
>
> **[4:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=272)** This problem was described in 1982 by Lamport, Shostak and Pease by taking examples of generals in an army.
>
> **[4:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=281)** In this hypothetical situation the generals are planning to attack.
>
> **[4:46](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=286)** In order to execute the attack they need to communicate among themselves by sending messages, so they can agree on the time of the attack.
>
> **[4:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=296)** But some generals could be traitors and will try to mislead the group by sending false messages about the time of the attack.
>
> **[5:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=305)** So they need a protocol that allows reaching an agreement despite the presence of traitors.
>
> **[5:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=312)** Obviously, it is not known who those generals are.
>
> **[5:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=316)** This situation is similar to the analogy of communication in distributed networks, such as Blockchain.
>
> **[5:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=324)** This problem was finally solved in 1999 by Castro and Liskov, using an algorithm known as Byzantine Fault Tolerance algorithm.
>
> **[5:35](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=335)** Since that time, there are other algorithms that have also solved this problem, including, guess what?
>
> **[5:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/consensus?u=76281980&t=342)** The proof of work protocol used in Blockchain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (10), [[Ethereum]] (2), [[Algorithms]] (2), [[Cryptography]] (1), [[Tokens]] (1)
> **Env Vars:** bft (4), cpu (1), ibft (1)
> **Definitions:** known as (4), is a  (1), refers to (1)
> **Analogies:** such as (2), for example (1), similar to (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the last (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Immutability](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=0)** - [Instructor] In [[Blockchain]] terms, the immutability property means, once a block of transactions is added to the blockchain the data cannot be modified.
>
> **[0:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=12)** Obviously one can continue to append new blocks but the previous blocks are immutable.
>
> **[0:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=18)** This isn't quite a contrast to the enterprise database that is used in the financial and [[Representational State Transfer (REST)|rest]] of the industries, where with the appropriate rights one can modify any table or attribute.
>
> **[0:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=33)** Why does that matter from a security perspective?
>
> **[0:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=36)** Maintaining [[Data Integrity]] is one of the key elements of the CIA trial of security.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=43)** CIA stands for confidentiality, integrity and availability.
>
> **[0:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=49)** Data integrity goal requires that data must not be tampered with maliciously or by error and hence should remain trustable at all times.
>
> **[1:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=61)** So how does blockchain achieve immutability?
>
> **[1:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=65)** Well, if you recall from previous videos, every new block added to the blockchain contains a hash of the previous block.
>
> **[1:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=75)** A hash in simple words is a mathematical function that takes an input data of variable length and returns an output of fixed length.
>
> **[1:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=87)** Blockchain uses SHA-256 hashing algorithm, which means the hash is of 256 bit length regardless of the input data.
>
> **[1:37](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=97)** Once you have a hash at hand, you can't calculate the original input data from the hash.
>
> **[1:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=103)** In other words, it is a one way operation.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=106)** Hash is very sensitive to minor variations in the input data.
>
> **[1:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=111)** Meaning even if there is a slight change in the input block, the output hash will look completely different.
>
> **[1:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=119)** By including the hash of the previous block, in way blockchain creates a linked list of the blocks.
>
> **[2:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=127)** Let's say an attacker tries to manipulate one of the blocks, its hash will change and so often next blocks in the chain as well.
>
> **[2:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/immutability?u=76281980&t=137)** Any future additions to the blockchain will be rejected from being added.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (7), [[Data Integrity]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (3), stands for (1), in other words (1)
> **Env Vars:** cia (2), sha (1)
> **Speakers:** - [instructor] (1)

#### [Cryptography: Keys and addresses](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=0)** - [Instructor] [[Blockchain]] security features, such as consensus, and immutability, as well as many other features rely on several cryptographic constructs.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=11)** Let's start with the one that is closest to the end user: the cryptographic keys and the blockchain addresses.
>
> **[0:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=18)** You'll see both of these constructs used heavily in both Bitcoin and [[Ethereum]] blockchains, as well as in [[Smart Contracts]].
>
> **[0:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=27)** Blockchain uses public and private key pairs for use cases, such as encryption, proving the identity of a user and non-repudiation.
>
> **[0:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=38)** There are many [[Algorithms]] historically used for public key [[Cryptography]], also known as asymmetric cryptography.
>
> **[0:46](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=46)** Blockchain, however, uses elliptic cryptography or ECC to generate private and public key pairs.
>
> **[0:55](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=55)** A private key is a key you, that is the end user, use to prove that you are the owner who really initiated a transaction.
>
> **[1:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=65)** You never publish that key and always keep it secret.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=68)** In fact, your private key is what prevents access by others to your cryptocurrencies, such as Bitcoins and Ethers in a wallet.
>
> **[1:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=78)** On the other hand, you publish your public key.
>
> **[1:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=81)** A public key is generated from a private key.
>
> **[1:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=85)** In fact, you can generate multiple public keys but not the other way around.
>
> **[1:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=90)** When you post a transaction on a blockchain network, the public key is used to verify that you are who you say you are.
>
> **[1:39](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=99)** A blockchain address is what you can use to have other people send you cryptocurrencies.
>
> **[1:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=105)** A public key is used to generate a blockchain address.
>
> **[1:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=109)** For example, in the case of Bitcoin, your Bitcoin's address is generated by hashing your public key first with the SHA-256 algorithm and then again with a different algorithm.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=123)** And finally, appending a checksum and lastly, encoding it with Base58 format.
>
> **[2:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=131)** The math behind these calculations is beyond the scope of this course.
>
> **[2:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=135)** Let's see with an example of what a Bitcoin address looks like.
>
> **[2:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=140)** So this is an NFT online utility that allows you to generate Bitcoin addresses.
>
> **[2:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=146)** As you can see, as I move my mouse, the address changes with the random inputs.
>
> **[2:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=152)** Switching back to the Ethereum example, private and public keys are generated using Elliptic Curve Digital Signature Algorithm.
>
> **[2:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=163)** Now, you generate the address from the public key using the Keccak256 function and by taking the rightmost 160 bits of the output.
>
> **[2:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=173)** The Keccak algorithm was the winner in [[NIST]] SHA-3 competition.
>
> **[2:58](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-keys-and-addresses?u=76281980&t=178)** To learn more about this algorithm, visit the URL on the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (7), [[Cryptography]] (3), [[Ethereum]] (2), [[Smart Contracts]] (1), [[Algorithms]] (1)
> **Env Vars:** sha (2), ecc (1), nft (1), nist (1), url (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** known as (1), is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Cryptography: Validation](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=0)** - [Instructor] We already talked about how the hashing is used for immutability in the previous video but let us clarify a few important interconnected but sometimes confused cryptographic concepts, such as hashing, Merkle root, digital signatures and encryption.
>
> **[0:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=18)** Let's assume that you are the sender who is about to post a transaction on the [[Blockchain]] network.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=25)** When you want to give the confidence to the receiver that the transaction is not modified in the transit, include a hash of the data along with it.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=36)** Upon receipt, the receiver will calculate the hash and compare it with your supplied value.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=42)** An exact match confirms that data has not been altered on its way.
>
> **[0:48](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=48)** Speaking of [[Data Integrity]], the cornerstone of the blockchain is the capability to validate the transactions can still be trusted and their data integrity has not be violated.
>
> **[1:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=61)** And as you saw in the previous videos, blockchain relies on the validator nodes for this.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=68)** Let's revisit the blockchain block one more time.
>
> **[1:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=72)** Each block has a header and list of transactions.
>
> **[1:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=76)** And the header has a set of fields about the transaction.
>
> **[1:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=80)** One special field called Merkle root is essential to the process of transaction verification.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=88)** In the context of blockchain, the Merkle tree is a data structure that stores the transaction hashes in a binary tree format.
>
> **[1:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=98)** As you can see in this fictitious example, the leaves, that is the bottom most nodes, store the hashes of the transactions.
>
> **[1:48](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=108)** From there on, each parent node stores the hash of its two child nodes.
>
> **[1:55](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=115)** The process continues upwards until you arrive at the top node, also known as the Merkle root node.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=123)** But why go through the effort of calculating the Merkle root and store in the header?
>
> **[2:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=129)** Well, it turns out, if the validators were to verify the hash of each transaction in a block individually, it will be a memory, compute and network-intensive process.
>
> **[2:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=142)** The beauty of Merkle root is that just by validating the topmost hash value, you can be sure that none of the transactions in the block has been altered.
>
> **[2:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=153)** It is a much faster and more efficient way to validate multiple transactions at the same time.
>
> **[2:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=161)** Now, let's switch to digital signatures.
>
> **[2:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=165)** As a sender, when you want to prove to the receiver that you are the one who really authored a transaction, encrypt the message using the private key.
>
> **[2:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=177)** This process is known as digitally signing the transaction.
>
> **[3:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=182)** Remember, no one else has your private key.
>
> **[3:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=186)** A private key is unique to you and uniquely identifies you.
>
> **[3:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=192)** Upon receipt, the recipient decrypts the message using your public key.
>
> **[3:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=197)** If for some reason, the receiver did not receive your correct matching public key, that will prove that the transaction was not signed by you.
>
> **[3:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=207)** Lastly, after the transaction is hashed and digitally signed, you want to ensure that nobody other than the desired recipient on the blockchain network should be able to open your transaction.
>
> **[3:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=221)** To do this, you encrypt the message with receiver's public key.
>
> **[3:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=225)** Compare this process with digitally signing a transaction.
>
> **[3:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=229)** Upon receiving the transaction, the receiver shall decrypt the transaction with his or her private key.
>
> **[3:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/cryptography-validation?u=76281980&t=237)** If an adversary tries to open your message, they will not be able to do so since the adversary will not have the right full recipient's private key.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (6), [[Data Integrity]] (2)
> **Definitions:** is a  (2), known as (2)
> **CLI Commands:** node (3)
> **Cross-References:** previous video (1), as you saw (1)
> **UI Navigation:** switch to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Security Model for the Blockchain Ecosystem

[↑ Back to Table of Contents](#table-of-contents)

#### [Overall technology architecture](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=0)** - [Instructor] To implement security controls for protecting your [[Blockchain]] ecosystem, you first need to identify the attack surface.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=9)** And that requires an understanding of the end-to-end architecture.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=13)** That also requires knowledge of the role each building block plays from the underlying platform to [[Smart Contracts]] to decentralized apps and finally, to the end users.
>
> **[0:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=26)** To put things into perspective, when we looked at blockchain in the last few videos, we were only focused on just one but a critical piece of its ecosystem.
>
> **[0:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=38)** But in order for blockchain to be valuable to real-life business applications beyond cryptocurrencies, a number of other players step in to create a rich ecosystem.
>
> **[0:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=50)** Foundation of this ecosystem is the blockchain platform.
>
> **[0:55](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=55)** The platform includes a distributed ledger that stores and processes transactions across blockchain networks.
>
> **[1:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=63)** Consensus layer provides the transaction validation capability through the consensus protocols.
>
> **[1:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=71)** Examples are proof of work, proof of stake, BFT or a combination of these.
>
> **[1:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=79)** A number of different external services enable blockchain platform to be usable for end users and [[Decentralized Applications (DApps)|decentralized applications]].
>
> **[1:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=88)** Host wallet services offer users the ability to store their private keys and hence, their cryptocurrencies with a third-party provider.
>
> **[1:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=98)** One example you may have heard of is Coinbase.
>
> **[1:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=102)** Chances are if you hold crypto [[Tokens]], you're going to buy, sell, or exchange them in others.
>
> **[1:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=110)** Obviously, you can directly contact an interested party and transfer the tokens to them or you can take the route of using an exchange.
>
> **[1:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=119)** Exchange is exactly what the name says.
>
> **[2:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=122)** It's a third-party service that allows users to trade their crypto tokens.
>
> **[2:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=128)** Again, some of the known examples are Binance, Coinbase and Kraken, and so on.
>
> **[2:14](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=134)** While blockchain ledgers act as source of truth for the transactions that are stored in it, it still needs access to the external data.
>
> **[2:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=144)** For example, a smart contract may need access to live stock market data or wind speed data from [[IoT]] sensors installed on the windmills.
>
> **[2:35](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=155)** So blockchain needs a trustworthy source that can provide a data feed.
>
> **[2:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=161)** Such third-party entities are known as oracles in the blockchain ecosystem.
>
> **[2:46](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=166)** Timestamping service provides assurance that a certain data existed at the moment it was timestamped.
>
> **[2:54](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=174)** For example, you can use this service to prove that you were in possession of an asset at the timestamped time.
>
> **[3:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=182)** Smart contracts are the building blocks for creating decentralized apps or Dapps.
>
> **[3:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=189)** They bring programmability and business logic into the world of blockchain.
>
> **[3:14](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=194)** Now, at the end of the day, it is software.
>
> **[3:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=197)** That means it has all the characteristics of the classic non-blockchain deployed application with the added complexity of being decentralized in nature.
>
> **[3:29](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/overall-technology-architecture?u=76281980&t=209)** Lastly, the end users and business domain applications that utilize or consume everything blockchain has to offer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (12), [[Tokens]] (3), [[Smart Contracts]] (2), [[Decentralized Applications (DApps)|Decentralized applications]] (1), [[IoT]] (1)
> **Analogies:** for example (2)
> **Env Vars:** bft (1)
> **Cross-References:** in the last (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Attack surface and vectors](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=0)** - [Instructor] Keeping the [[Blockchain]] ecosystem secure is going to be challenging, but before we can secure it we need to understand what can actually go wrong.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=11)** To do so, we will look at the attack surface of the components of its ecosystem.
>
> **[0:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=17)** The attack surface simply means the areas of a system that are vulnerable and can be exploited.
>
> **[0:23](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=23)** The first, concentration of consensus power, meaning malicious minors and transaction validators can collude to manipulate the consensus protocols.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=36)** Nodes on the blockchain network can become rogue, assume civil identities, and compromise the trust in the blockchain.
>
> **[0:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=45)** These weaknesses can cause a ripple effect and lead to 51% attacks and double spending attacks.
>
> **[0:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=53)** Vulnerability in the blockchain platform can also lead to an attack on the promise of [[Privacy]] that blockchain is founded upon.
>
> **[1:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=63)** [[Smart Contracts]] are also vulnerable to attacks such as reentrancy attack, front running attack, and denial of service attacks.
>
> **[1:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=72)** Ecosystem enabler services such as wallets exchanges can also be compromised due to [[Phishing]] attacks, denial of service attacks, other insider threats, and conflict of interests.
>
> **[1:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/attack-surface-and-vectors?u=76281980&t=87)** The end user and client running on these devices is also prone to well known attacks such as malware infections, threat of private keys, and a host of attacks that are possible due to application level vulnerabilities also defined by [[OWASP]] Top 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (5), [[Privacy]] (1), [[Smart Contracts]] (1), [[Phishing]] (1), [[OWASP]] (1)
> **Analogies:** such as (3)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)

#### [Security model](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=0)** - [Narrator] So now we know that the [[Blockchain]] ecosystem has an enormous attack surface and can be breached due to a variety of threats.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=9)** Such threats can emerge from traditional and well-known attack vectors, or due to a new breed of attacks, unique to blockchain.
>
> **[0:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=19)** We can now appreciate the complexity of efforts that will be required to keep it all protected.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=25)** Therefore, we need a structured approach to security.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=29)** We are going to apply a four factor security model.
>
> **[0:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=33)** Each factor comprises of a set of security controls that works to protect this ecosystem.
>
> **[0:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=40)** Let's take a quick look at them.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=42)** The [[Representational State Transfer (REST)|rest]] of the course will be a deep dive into each of these factors.
>
> **[0:47](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=47)** The first factor is all about securing the foundations of the blockchain.
>
> **[0:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=51)** That includes its transactions, distributed ledger and consensus protocol.
>
> **[0:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=57)** The next factor focuses on security of [[Smart Contracts]].
>
> **[1:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=62)** This factor includes secure design principles, [[Secure Coding]] practices, especially targeted for smart contracts.
>
> **[1:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=70)** And finally, the testing strategies to discover bugs before deploying a contract.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=77)** The next factor focuses on securing the crucial ecosystem players, such as wallet, providers, exchanges, and Oracles.
>
> **[1:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/security-model?u=76281980&t=87)** And the last factor is all about the end user and security controls to protect the interactions of the users with the blockchain ecosystem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (4), [[Smart Contracts]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Secure Coding]] (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [narrator] (1)


### 4. Blockchain Platform Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Proof-of-work protocol attacks](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=0)** - [Instructor] The 51% attack occurs when a group of miners grabs more than 51% of the hashing power of the [[Blockchain]] network.
>
> **[0:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=11)** These miners can make the genuine transactions orphaned and can override the process of writing to the blockchain with their own transactions.
>
> **[0:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=21)** This can even further leads to other attacks, such as double spending attack.
>
> **[0:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=26)** But let's see what's hashing power first.
>
> **[0:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=30)** As you know, in proof of work-based consensus protocols, minors are continuously calculating hashes and competing with each other to solve a mathematical puzzle.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=42)** Hashing power or hash rate refers to the number of hash calculations performed per second.
>
> **[0:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=49)** Higher the hash rate, higher the speed at which miners can calculate hashes and increase their [[Probability]] of solving the puzzle.
>
> **[0:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=59)** Let's say a group of minors start to collude and start another network among themselves while still being part of the main blockchain network.
>
> **[1:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=70)** Obviously when they separate, they will have a replica of the main blockchain as their starting point.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=77)** Since the attacker group is smaller than the main network, they will be able to add blocks to their ledger faster than the main network, meaning their chain will be longer at a given time.
>
> **[1:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=90)** Now, if you recall from the previous videos, when two blockchains diverge, the longer blockchain eventually gets picked up and transactions from the smaller ones are sent back to the memory pool.
>
> **[1:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=102)** So you can now infer that when the attacking group of minors rejoin the main blockchain, their transactions will be the ones to survive.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=112)** So how do you prevent your blockchain from such an attack?
>
> **[1:55](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=115)** First of all, 51% attack is difficult to accomplish on a larger blockchain, such as Bitcoin or [[Ethereum]].
>
> **[2:04](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=124)** They're more likely to take place on smaller chains.
>
> **[2:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=127)** Regardless, there are several research proposals that blockchain designers and implementers can follow to lower the chance of this attack.
>
> **[2:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=137)** Keep in mind that these security controls are not something you can implement with the switch of a button but they require rather careful planning at the blockchain protocol design stage.
>
> **[2:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=150)** One way to mitigate is to implement a penalty proportional to the amount of time a block is delayed from adding back to the main blockchain network.
>
> **[2:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=161)** The longest chain feature is fundamental to blockchain but it is also one of the reasons that can lead to the 51% attack.
>
> **[2:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=171)** During the design of your blockchain network, you can limit the blockchain to accept only a finite number of blocks.
>
> **[3:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=180)** This will limit the ability of the attackers to append an arbitrary number of blocks to the blockchain.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=187)** Now keep in mind that these are platform level security controls that are implemented when designing the core of the blockchain.
>
> **[3:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=196)** These are not the controls that an application developer would implement in a decentralized application or a smart contract.
>
> **[3:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=205)** 51% attack leads to another variation known as a double-spending attack.
>
> **[3:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=212)** So what is double-spending?
>
> **[3:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=214)** In the financial world, double payment refers to a flaw in the electronic payment system where the same digital currency can be spent or transferred more than once.
>
> **[3:48](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=228)** When you have physical cash such as dollar or pound and you hand over a note or coin to someone else, it's gone from your possession to the recipient.
>
> **[3:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=239)** You can't give or spend that same money again.
>
> **[4:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=243)** But in case of digital currency, as enabled by blockchain, it is possible to double spend should necessary protection measures are not taken.
>
> **[4:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=253)** In blockchain consensus protocol, a transaction is not considered settled until a condition of finality is met.
>
> **[4:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=262)** When a transaction is settled, all involved parties can be sure that the transaction cannot be altered.
>
> **[4:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=271)** The time it takes to reach finality varies from blockchain network to network.
>
> **[4:35](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=275)** For example, in case of Bitcoin, which uses proof of work consensus protocol, it takes about 10 minutes per block.
>
> **[4:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=284)** The recommendation is to wait till six confirmations are received.
>
> **[4:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=289)** That means it could very well be one hour before a transaction is considered final.
>
> **[4:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=296)** So why is this relevant?
>
> **[4:58](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=298)** Let's say a merchant accepts payment on a blockchain network without waiting for block confirmation and then releases the goods to the buyer.
>
> **[5:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=307)** But the buyer may also issue a duplicate transfer to someone else at the same time.
>
> **[5:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=313)** If the minors validate the second transaction, the merchant will not receive the payment for the goods.
>
> **[5:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=320)** So how can you prevent double spending?
>
> **[5:23](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=323)** Wait for the confirmation before accepting a payment and then release the goods to the buyer.
>
> **[5:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=330)** Now let's switch to a different kind of attack.
>
> **[5:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=333)** Sybil attack.
>
> **[5:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=334)** Sybil attack is not specific to the blockchain.
>
> **[5:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=338)** It is a general attack on the security of a peer-to-peer network.
>
> **[5:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=344)** In this attack, an adversary creates multiple identities and uses them to gain influence over the network.
>
> **[5:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=353)** You can also observe this attack in social media where the trustworthiness of a participant in the network is important.
>
> **[6:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=361)** Obviously in blockchain, the trustworthiness of the nodes is critical.
>
> **[6:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=367)** To another user on the blockchain, such Sybil identities appear as new users, but behind the scenes, they are orchestrated by the same attacker.
>
> **[6:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=379)** By the way, the Sybil attack gets his name from a book titled Sybil which was a study of women with multiple personality disorder.
>
> **[6:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=390)** In the case of blockchain, an attacker takes control of multiple nodes and can interfere or reverse-case stop genuine nodes from participating in the consensus protocol.
>
> **[6:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=402)** A well-coordinated Sybil attack can lead to 51% attack because of the attackers combined hash power.
>
> **[6:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=412)** So how to mitigate this attack?
>
> **[6:55](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=415)** You will need to apply a combination of the existing strategies that are offered by blockchain which will make the attack difficult to carry or too expensive to be worth it.
>
> **[7:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=427)** For example, the well implemented consensus protocols, such as proof of work or proof of stake will make it difficult for a single attacker to carry out the attack.
>
> **[7:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=439)** In proof of stake, to carry out this attack the same attacker will need to match or exceed the stake invested by the honest validating nodes.
>
> **[7:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-work-protocol-attacks?u=76281980&t=451)** On the non-public blockchain, you can implement ID verification or also known as know your customer protocols.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (26), [[Probability]] (1), [[Ethereum]] (1)
> **Analogies:** such as (4), for example (2)
> **Definitions:** refers to (2), known as (2), is a  (1)
> **CLI Commands:** make (3)
> **Warnings:** keep in mind (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Proof-of-stake protocol attacks](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=0)** - [Instructor] So far, we focused on attacks in scenarios where the consensus arrived through the proof of work protocols but more and more [[Blockchain]] networks are or will be transitioning to proof of stake or a hybrid of proof of stake and proof of work protocols.
>
> **[0:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=20)** But the proof of stake protocols are not immune to security attacks either.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=25)** In fact, in proof of work, an attacker needs to have 51% of hash power, which means they need to pony up and spend physical resources to outvote genuine miners.
>
> **[0:39](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=39)** In case of proof of stake protocol, an attacker can participate in more than two fork chains and keep creating blocks without risking its stake.
>
> **[0:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=51)** Since there is no proof of work required, nothing to lose, they can keep putting the same stake at each fork.
>
> **[0:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=59)** They will be able to get the reward, regardless of the chain that becomes final.
>
> **[1:04](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=64)** This can also lead to a double spending attack.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=68)** Let's say an attacker submits a transaction to transfer crypto.
>
> **[1:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=72)** The transaction gets confirmed and is recorded into one of the fork chains.
>
> **[1:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=78)** The transaction is also accepted by the exchange because it recognizes that chain.
>
> **[1:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=84)** Now, since the attacker is participating on both the chains, the attackers also submits a similar transaction on the second change.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=94)** Coincidentally, due to the effect of his stake, combined with the stakes that other validators have, the second chain becomes final and the attacker's transaction is accepted in the second chain as well.
>
> **[1:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=109)** So attacker will have spent the same funds twice.
>
> **[1:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=113)** So as you can see, to conduct a successful attack, they don't need even 51% of the hashing power.
>
> **[2:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=121)** There is another issue with proof of stake protocols.
>
> **[2:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=125)** They are susceptible to something known as a long-range attack.
>
> **[2:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=129)** Usually, when an attacker creates a fork, it's only a few blocks behind the head of the chain but in case of a long-range attack, the attacker creates a fork thousands of blocks before the main.
>
> **[2:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=145)** For this reason, this attack is also known as a history attack.
>
> **[2:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=150)** Now, since there is no proof of work required, the attacker may start a new chain with new blocks containing the transactions of his choosing.
>
> **[2:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=160)** Other users will not be able to tell which chain is genuine.
>
> **[2:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=165)** So how do you protect against such attacks?
>
> **[2:47](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=167)** Before we look at mitigation techniques, we need to realize that proof of stake protocols are not widely adopted yet.
>
> **[2:54](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=174)** One of the reason is indeed the known weaknesses.
>
> **[2:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=179)** However, there are many recommendations from the research community.
>
> **[3:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=183)** First, making a chain that is created after forks, be aware of other chains.
>
> **[3:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=191)** Penalize miners who are found mining on multiple chains.
>
> **[3:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=196)** Have the validator deposit crypto [[Tokens]].
>
> **[3:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=199)** Tokens from the deposit will be withdrawn if multiple blocks are being generated by the same validator.
>
> **[3:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/proof-of-stake-protocol-attacks?u=76281980&t=207)** When applicable, require the validators to submit their identity information without disclosing their true identity in the public.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[Blockchain]] (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 5. Distributed Apps and Smart Contracts Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Smart contracts and EVM](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=0)** - [Instructor] While [[Blockchain]] platform security vulnerabilities affect the underlying core of the ecosystem, a poorly written smart contract can still lead to a security breach, regardless of how secure the platform is.
>
> **[0:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=16)** In fact, every day, new [[Decentralized Applications (DApps)|decentralized applications]] and [[Smart Contracts]] are written and many of them without going through proper secure [[Software Development]] practices.
>
> **[0:29](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=29)** Now, the security risks associated with a traditional centralized application can still manifest in a modern Web 3.0 application but a new breed of security bugs can impact your smart contracts, making them even harder to secure.
>
> **[0:46](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=46)** Let's take a look at the architecture of a Web 3.0 application and review its similarity and differences from Web 2.0 application.
>
> **[0:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=56)** Given the popularity and suitability of [[Ethereum]] for smart contracts, I will use Ethereum as the platform for explaining these concepts.
>
> **[1:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=65)** A typical application today follows architecture like this.
>
> **[1:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=70)** A front-end module that enables interaction with the user via a web or a mobile interface.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=77)** Common languages and frameworks used for this are [[HTML]], CSS, [[JavaScript]] with [[Angular]] or [[React.js|React]].
>
> **[1:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=85)** The backend server-side logic handles the requests and responses from front-end client.
>
> **[1:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=92)** The backend also contains the business logic for the application.
>
> **[1:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=96)** Examples of the languages and frameworks used here are [[Node.js]], [[Java]], C# and [[Python (Programming Language)|Python]].
>
> **[1:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=104)** It also interacts with a relational or a [[NoSQL]] database where the data about the transactions is stored.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=112)** Now, compare that to the architecture of a decentralized application.
>
> **[1:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=117)** There is still a need for a front end that could very well use the same languages and frameworks as in Web 2.0.
>
> **[2:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=126)** Now, you may recall that smart contracts are the building blocks for decentralized apps.
>
> **[2:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=131)** A smart contract is a software program that contains backend logic.
>
> **[2:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=137)** The most common language used for developing smart contracts is [[Solidity]].
>
> **[2:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=142)** Front-end code interacts with the smart contract.
>
> **[2:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=146)** And Ethereum virtual machine runs the compiled smart contract program, and both smart contracts and EVM are deployed on the distributed blockchain nodes.
>
> **[2:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=158)** But wait, what is Ethereum virtual machine or EVM?
>
> **[2:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=164)** If you recall, we have been using the term distributed ledger to describe blockchain.
>
> **[2:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=170)** This model has worked well to explain [[Cryptocurrency]] operations, such as sending or receiving Bitcoins.
>
> **[2:58](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=178)** While Ethereum also fully supports cryptographic primitives, it also has much richer support for smart contracts.
>
> **[3:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=186)** So to explain its inner working, it has adopted a different model known as Ethereum virtual machine.
>
> **[3:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=195)** EVM is a virtual software stack that is embedded in each Ethereum node and executes smart contract code.
>
> **[3:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=204)** Each of the nodes is a part of the Ethereum network and communicates with each other using an implementation of Ethereum protocol, such GET.
>
> **[3:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=214)** But smart contract written in Solidity cannot be executed by EVM as is.
>
> **[3:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=220)** The high-level language code is compiled to op-code that is machine instructions before running on EVM.
>
> **[3:48](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=228)** EVM also maintains the state of the world, meaning the balances associated with each Ethereum account on the blockchain.
>
> **[3:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=237)** When a new transaction comes in, and is recorded in blockchain, EVM updates the state machine.
>
> **[4:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-and-evm?u=76281980&t=245)** Now, keep in mind that since EVM is on every node, the state of every smart contract is stored on each node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethereum]] (10), [[Smart Contracts]] (7), [[Blockchain]] (5), [[Solidity]] (2), [[Decentralized Applications (DApps)|Decentralized applications]] (1)
> **Env Vars:** evm (8), html (1), css (1)
> **CLI Commands:** node (4), python (1)
> **Versions:** 3.0 (2), 2.0 (2)
> **Definitions:** is a  (3)
> **File Paths:** node.js (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)

#### [Anatomy of a smart contract](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=0)** - [Instructor] Before getting into the security bugs and controls for [[Smart Contracts]], let's take a look at a sample contract written in [[Solidity]].
>
> **[0:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=10)** It's a rudimentary program just to demonstrate a limited set of language features so that you can appreciate what goes into a smart contract.
>
> **[0:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=19)** By the way, a deep dive into the Solidity language and its programming constructs is beyond the scope of this course.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=28)** But I encourage you to check out the following resources on [[LinkedIn]] Learning.
>
> **[0:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=34)** This example program makes a very simple family will, which is codified as a smart contract to be deployed in the [[Ethereum]] [[Blockchain]].
>
> **[0:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=45)** This fictitious will captures the wishes of a person known as the grantor.
>
> **[0:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=51)** The grantor wants to distribute her estate to her beneficiaries after she is no longer living.
>
> **[0:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=59)** The goal of the smart contract is to make sure assets are distributed in a certain order and in the desired proportions.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=68)** The first part of the program contains the [[Metadata]] about the licensing and version number of the compiler to be used.
>
> **[1:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=76)** A smart contract is represented with a contract keyword, quite similar to a class for those who are familiar with the [[Object-Oriented Programming (OOP)|object-oriented programming]] languages.
>
> **[1:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=88)** The variables in the contract store information.
>
> **[1:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=92)** In this example, we are storing the Ethereum account address for the spouse and the two children who are the beneficiaries.
>
> **[1:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=100)** Two Boolean variables store the living status of the grantor and the spouse.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=106)** The contract's constructor gets executed when the smart contract is deployed to the blockchain.
>
> **[1:54](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=114)** You initialize the contract variables by passing the parameters to the constructors.
>
> **[2:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=120)** In this example, we are passing the blockchain addresses of the spouse and the children.
>
> **[2:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=126)** handleLifeEvent is a contract function that can be called to report a life event, such as when one of the person in the will is no longer living.
>
> **[2:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=137)** The distribute function is called to transfer the crypto [[Tokens]] from the grantor to beneficiaries.
>
> **[2:23](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=143)** The if construct is used to ensure that funds are transferred only when conditions as desired by the grantor are met.
>
> **[2:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=153)** Now, this is a very simple contract.
>
> **[2:35](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=155)** It is actually rather incomplete but as you can see, the language supports many of the primitives of a modern programming language.
>
> **[2:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=165)** And that's why it's also known as Turing Complete Language.
>
> **[2:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=169)** Let's quick see how to deploy the smart contract.
>
> **[2:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=173)** I will use the [[Remix]] integrated development environment.
>
> **[2:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/anatomy-of-a-smart-contract?u=76281980&t=177)** It's a 100% web-based with built-in compiler and the ability to deploy it to Ethereum.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethereum]] (3), [[Blockchain]] (3), [[Solidity]] (2), [[Smart Contracts]] (1), [[LinkedIn]] (1)
> **Definitions:** known as (2), is a  (2), is called (1)
> **Analogies:** similar to (1), such as (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** handlelifeevent (1)
> **Speakers:** - [instructor] (1)

#### [Deploying a smart contract](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=0)** - [Instructor] Here is the [[Remix]] IDE.
>
> **[0:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=2)** I've already copied the code for my smart contract into a file named MySmartWill.sol.
>
> **[0:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=10)** Now, if you look at the left panel, you'll see a separate section for deploying and running transactions and another section for compiling the code.
>
> **[0:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=22)** We must compile the code before we can deploy into the [[Blockchain]].
>
> **[0:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=28)** I'll start compiling by clicking on the Compile button.
>
> **[0:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=32)** As you can see, the code compiled without any errors.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=36)** It's time to deploy the code.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=42)** Now, if you look carefully, the constructor expects three input parameters, which are the addresses of the spouse and of the two children.
>
> **[0:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=53)** I've already gathered those addresses, which are provided to me by the Remix IDE, right here.
>
> **[1:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=63)** Now, pay close attention to this first address and its balance.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=67)** At this time, the balance is 124.
>
> **[1:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=71)** Now, this is the address and the balance of the spouse.
>
> **[1:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=75)** We will trigger an event, which will enable the transfer of funds from the grantor to the spouse.
>
> **[1:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=86)** I'll seed the contract with 10 Ethers.
>
> **[1:29](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=89)** This will be the starting balance of the grantor.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=93)** Let's go ahead and deploy.
>
> **[1:37](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=97)** The contract has been successfully deployed.
>
> **[1:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=101)** Now, let's handle a life event in which the grantor is no longer living but the spouse is still living.
>
> **[1:54](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=114)** Now, let's distribute the funds.
>
> **[1:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=119)** Let's go back and look at the balance of the spouse.
>
> **[2:04](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=124)** As you can see, the number has changed from 124 to 134.
>
> **[2:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/deploying-a-smart-contract?u=76281980&t=130)** That means our smart contract has successfully transferred the funds from grantor to the spouse on a certain life event.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Remix]] (2), [[Blockchain]] (1)
> **Env Vars:** ide (2)
> **Speakers:** - [instructor] (1)

#### [Smart contracts threats: Part one](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=0)** - [Instructor] Having seen the anatomy of a smart contract, let's pivot to security issues that can arise from them.
>
> **[0:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=7)** In 2016, a decentralized autonomous organization, also known as DAO was established.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=15)** Its goal was to function as a [[Blockchain]]-based investment body owned by its members.
>
> **[0:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=22)** The organization raised $150 million from thousands of investors.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=28)** But not too long after it was formed, an attacker was able to withdraw 3.6 ether currency and that was made possible due to a software issue generated out of recursive calling of the external smart contract.
>
> **[0:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=44)** As you already know that the code already deployed on blockchain cannot be modified.
>
> **[0:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=50)** So in order to fix this issue, the [[Ethereum]] organization had to take drastic measure and make a hard fork.
>
> **[0:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=57)** This led to the creation of two currencies, Ethereum Classic and Ethereum, the one that is commonly traded today.
>
> **[1:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=66)** This type of attack DAO is known as the reentrancy attack.
>
> **[1:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=71)** The intuition behind the attack is as follows.
>
> **[1:14](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=74)** Attackers recognize that the crypto balances at the blockchain address are protected by the mining layer, which is difficult to exploit.
>
> **[1:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=84)** But [[Smart Contracts]], which also track the balances in the contract are susceptible to coding errors.
>
> **[1:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=91)** Attackers can trick a smart contract and create a mismatch between balances as known to the smart contract versus as known to the blockchain protocol layer.
>
> **[1:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=104)** While this type of attack can take many [[Forms]], the fundamental issue is that your smart contract code allows itself to be called repeatedly before finishing the first call.
>
> **[1:58](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=118)** The multiple invocations can enable an attacker to take advantage of the incorrect state of a variable created as a result.
>
> **[2:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=127)** This issue is a manifestation of known software weakness, classified by MITRE organization as CWE-664.
>
> **[2:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=138)** As per MITRE, the software does not maintain or incorrectly maintains control over a resource throughout its lifetime of creation, use and release.
>
> **[2:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=151)** Let's explain this with a simple example.
>
> **[2:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=154)** A banker's smart contract holds the crypto [[Tokens]].
>
> **[2:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=158)** The smart contract offers a withdraw function that allows others to withdraw funds.
>
> **[2:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=165)** Now, there is the attacker's malicious smart contract, which calls the Withdraw function.
>
> **[2:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=172)** The Withdraw function in turn invokes SendEther, leading to the Fallback function of the attacker being invoked subsequently.
>
> **[3:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=182)** Now, the problem is the Fallback function calls Withdraw again, leading to another withdrawal of funds.
>
> **[3:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=190)** Finally, the control reaches the UpdateBalance function of the banker contract.
>
> **[3:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=196)** The job of this function is to update the balance of funds in the contract.
>
> **[3:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=200)** But by the time, as you may guess, the UpdateBalance is called a bit too late.
>
> **[3:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=207)** By the time the control reaches here, the attacker would have called Withdraw multiple times.
>
> **[3:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=213)** So how to fix this.
>
> **[3:35](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=215)** First, correct the balance before giving the attacker a second opportunity to call the WithdrawBalance function.
>
> **[3:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=224)** And then continue with the call to SendEther.
>
> **[3:47](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=227)** Since the balance is already reduced, it is not possible to withdraw again.
>
> **[3:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=233)** Let's now switch to a different attack.
>
> **[3:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=237)** Overflow and underflow are a type of arithmetic errors where developers fail to account for the upper or lower bounder of a numerical variable.
>
> **[4:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=247)** This issue is not specific to smart contracts and can appear in any general software program as well but due to the arithmetic involved with [[Cryptocurrency]], this issue is more prone and with potential for significant loss.
>
> **[4:23](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=263)** For example, if you keep incrementing or decrementing an unsigned integer variable, it will ultimately reach zero or its maximum value, respectively.
>
> **[4:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=274)** If a developer's program does not handle it, it will lead to unpredictable results.
>
> **[4:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=280)** This problem is even more likely to appear when a smart contract can be called by anyone and the caller can change a public variable.
>
> **[4:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=291)** As per MITRE CWE-682, this weakness occurs when the software performs a calculation that generates incorrect or unintended results that are later used in security-critical decisions or resource management.
>
> **[5:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-one?u=76281980&t=308)** To mitigate this, use [[Solidity]] version 8.0 or above or use math library SafeMath.sol.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (4), [[Ethereum]] (3), [[Smart Contracts]] (2), [[Forms]] (1), [[Tokens]] (1)
> **Env Vars:** mitre (3), dao (2), cwe (2)
> **Definitions:** known as (2), is a  (1), is called (1)
> **Versions:** 3.6 (1), version 8 (1)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Smart contracts threats: Part two](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=0)** - [Instructor] Origins of the front-running attack are from the traditional financial markets.
>
> **[0:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=5)** Since all of the transactions before recording into the [[Blockchain]] are stored in mempool, short for memory pool, they are visible to everyone.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=15)** Attackers can take advantage of this information and get to the so-called the front of the line and get their transaction executed first.
>
> **[0:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=26)** Now, the transactions that are sitting in the memory pool will eventually be picked up to become part of a block yet to be added into the blockchain.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=36)** But how is it decided which transaction will be picked up first?
>
> **[0:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=40)** Well, that depends upon the fees that are set by the user.
>
> **[0:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=45)** Higher the fee, the higher the incentive for the block creator to pick a transaction over the other.
>
> **[0:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=52)** The front-running attack exploits this weakness by placing a transaction before the other transactions.
>
> **[0:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=59)** CWE-362 states "The program contains a code sequence that can run concurrently with other code, and the code sequence requires temporary, exclusive access to a shared resource, but a timing window exists in which the shared resource can be modified by another code sequence that is operating concurrently."
>
> **[1:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=86)** So how do we address this?
>
> **[1:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=88)** A developer needs to be aware of whether a contract is susceptible to the front-running attack.
>
> **[1:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=94)** The mitigation for this type of attack comes from a combination of strategies at the platform, and the smart contract level.
>
> **[1:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=102)** The first one is to remove the benefit of the ordering of the transaction and then implement a commitment scheme where a user first needs to commit the bit and then reveal the details of the transaction later.
>
> **[1:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=116)** Now, let's switch to another type of threat to [[Smart Contracts]].
>
> **[2:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=120)** The [[Solidity]] language offers a self-destruct function that allows you to deactivate a contract already deployed at an [[Ethereum]] address.
>
> **[2:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=131)** Now, we know that the data on the blockchain is immutable.
>
> **[2:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=135)** So self-destruct means that no other users or contracts can send a transaction to it.
>
> **[2:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=142)** The self-destruct function takes the Ethereum address as the input argument.
>
> **[2:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=148)** When the self-destruct operation on a smart contract is executed, the crypto balance in the contract is sent to the address passed as the input argument.
>
> **[2:39](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=159)** After that, the contract that contains the self-destruct is no longer active.
>
> **[2:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=165)** But the problem is that the Fallback function of the contract that will receive the Ethers from the destructed contract will not be executed.
>
> **[2:55](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=175)** Now, to appreciate this problem, let's take a detour and talk about the Fallback function.
>
> **[3:01](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=181)** A Fallback function in Solidity is a special handler function that is executed when no other function in a contract matches the caller's request.
>
> **[3:12](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=192)** When a contract is receiving Ethers, it must have a Fallback function that is marked payable.
>
> **[3:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=199)** If no such function is defined, the contract cannot receive Ethers.
>
> **[3:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=205)** A payable Fallback function will have a logic that will not allow the contract to receive payment when not appropriate.
>
> **[3:34](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=214)** But when the Ethers are being sent due to self-destruct operation, the fallback of receiver will not be executed.
>
> **[3:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=223)** An attacker can take advantage of this and start sending Ethers to a contract, depriving the receiving contract the opportunity to validate the request.
>
> **[3:54](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=234)** So to address this issue, don't rely on this.balance condition check in the Fallback function because the contract may have forcibly received the Ethers and this variable may not have been updated.
>
> **[4:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=250)** Instead, you should create a separate variable to keep track of the incoming balance.
>
> **[4:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=256)** So we only covered a subset of known attacks but I encourage you to check out the smart contract attack registry, which is frequently updated resource for known attacks on smart contracts.
>
> **[4:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=271)** So there may be new attacks in the future but how do you prepare for them?
>
> **[4:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/smart-contracts-threats-part-two?u=76281980&t=276)** Well, there are a few design practices that you want to follow so your smart contract or decentralized app is free of avoidable vulnerabilities and robust enough to withstand zero-day attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (3), [[Smart Contracts]] (2), [[Solidity]] (2), [[Ethereum]] (2)
> **Definitions:** short for (1), means that (1), is a  (1)
> **Env Vars:** cwe (1)
> **UI Navigation:** switch to (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Secure design](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=0)** - [Instructor] There are three focus areas that you need to pay attention to, starting with [[Software Development]] processes, number two, [[Software Design]] principles, especially those applicable to [[Smart Contracts]].
>
> **[0:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=15)** And finally, [[Software Testing]] and verification practices.
>
> **[0:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=20)** Let's start with software development practices.
>
> **[0:23](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=23)** [[Version Control]] your code with [[Git]] and follow an appropriate Git branching model.
>
> **[0:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=30)** Document your code.
>
> **[0:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=32)** Make sure that all pull and merge requests are peer reviewed before approval.
>
> **[0:38](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=38)** Automate analysis and testing of your code before deployment.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=43)** Ensure that security bugs identified are addressed before the code is promoted.
>
> **[0:49](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=49)** When designing your software, especially smart contracts, anticipate and prepare for failure.
>
> **[0:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=56)** Since the deployed code is immutable and cannot be patched, you want to minimize the damage when things go wrong.
>
> **[1:04](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=64)** Use circuit breakers in your code to pause functionality when an unhandled error is discovered.
>
> **[1:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=71)** Circuit breakers are nothing but the control mechanisms in your code and activate when a condition is met.
>
> **[1:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=78)** While obviously you can programmatically trigger a circuit breaker but you can also permit another trusted smart contract to trigger your circuit breakers.
>
> **[1:29](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=89)** Slow down when a major change is required, meaning when your smart contract or decentralized app is observing a major transaction, for example, withdrawal greater than a certain amount, instead of immediately fulfilling the request, implement a waiting period of certain days.
>
> **[1:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=110)** Go beyond implementing speed bumps.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=112)** Require approval for major changes.
>
> **[1:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=116)** Complexity is the enemy of security.
>
> **[1:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=119)** So keep your contracts simple.
>
> **[2:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=122)** Don't ignore the [[Blockchain]] foundation.
>
> **[2:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=125)** While experience in developing and securing smart contracts and the decentralized apps is important, your app may still remain vulnerable if you are not aware of the underlying blockchain platform and its protocols.
>
> **[2:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=141)** To draw an analogy with Web 2.0, you cannot develop a solid and secure application without the knowledge of operating systems and basic [[Computer Networking]].
>
> **[2:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=152)** So don't skimp on the blockchain basics.
>
> **[2:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=156)** Identify weaknesses in your design by [[Threat Modeling]].
>
> **[2:41](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=161)** [[NIST]] offers guidance on threat modeling complex systems using data-driven approach.
>
> **[2:47](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=167)** While software development and design processes will help you both in security practices in your software, you still don't want to take any chances.
>
> **[2:58](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=178)** And the industry norm is to test frequently and extensively.
>
> **[3:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=182)** Let's go through some testing strategies.
>
> **[3:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=186)** Start with static code analysis.
>
> **[3:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=188)** Static code analysis and coverage help you identify common security bugs in your smart contract code.
>
> **[3:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=197)** Here are some reference tool options for you to consider.
>
> **[3:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=201)** Dynamic [[Security Testing]] tools help you analyze your code at runtime.
>
> **[3:27](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=207)** These are different from static analysis tools.
>
> **[3:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=210)** One popular example is Manticore.
>
> **[3:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=213)** First, testing allows you to test the behavior of your program with pseudo-random inputs.
>
> **[3:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=220)** Tools such as sFuzz and Echidna are available to help you run for this testing.
>
> **[3:47](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=227)** Monitor smart contract attack registry regularly.
>
> **[3:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=232)** Test thoroughly before rollout, first in your own test net, then public test net, and then finally, deploy in the main network.
>
> **[4:02](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=242)** Enroll in the bug bounty programs.
>
> **[4:04](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=244)** These programs allows ethical hackers to test and find issues in your deployed smart contracts and help you spot an issue that you couldn't discover yourselves.
>
> **[4:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/secure-design?u=76281980&t=256)** Here are some of the bug bounty programs in no particular order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Smart Contracts]] (4), [[Software Development]] (3), [[Blockchain]] (3), [[Git]] (2), [[Threat Modeling]] (2)
> **CLI Commands:** git (2), make (1), find (1)
> **Analogies:** for example (1), such as (1)
> **Code Identifiers:** sfuzz (1)
> **Env Vars:** nist (1)
> **Versions:** 2.0 (1)
> **Speakers:** - [instructor] (1)


### 6. Non-distributed Apps and Enabler Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Blockchain ecosystem threats: Part one](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=0)** - [Instructor] For [[Smart Contracts]] and [[Decentralized Applications (DApps)|decentralized applications]] to be useful in the real world, they rely on many enabler services.
>
> **[0:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=9)** You already know that [[Blockchain]] platform security vulnerabilities affect the underlying core of the ecosystem.
>
> **[0:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=17)** A poorly written smart contract can also lead to a security breach.
>
> **[0:22](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=22)** Similarly, these enabler services that make up the blockchain ecosystem are also prone to security attacks.
>
> **[0:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=31)** This ecosystem is complex and contains many moving parts.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=36)** We will cover hosted wallets, exchanges, and oracles, which are the most critical systems of all.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=43)** Regardless of the nature of the crypto [[Tokens]], be it native cryptocurrencies or special purpose asset ownership tokens, they all need to be secured.
>
> **[0:55](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=55)** Wallets serve an important purpose here.
>
> **[0:58](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=58)** They act as the custodian of the tokens and provide a unified user-friendly interface to the blockchain.
>
> **[1:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=67)** Wallets fall into two categories: hosted and non-hosted wallets.
>
> **[1:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=73)** You may also notice them being referred to with different names, such as custodial and non-custodial wallets.
>
> **[1:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=81)** Regardless of the names, basically, the wallets where users are in full control and are responsible for their tokens are known as non-custodial or non-hosted wallets.
>
> **[1:33](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=93)** In the case of custodial or hosted wallets, users rely on a third-party provider for storage and management of their private keys.
>
> **[1:44](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=104)** Recall that private keys are what associates a user's ownership rights with their crypto tokens.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=112)** By the way, some hosted wallets also allow users to store their private keys in their browsers.
>
> **[1:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=119)** In this case, the keys are not in the custody of the wallet provider.
>
> **[2:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=125)** First of all, hosted wallets are regular applications with web and mobile entry points accessible to users.
>
> **[2:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=133)** That means these applications are vulnerable to classic well-known security attacks.
>
> **[2:20](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=140)** These are documented under [[OWASP]] Top 10.
>
> **[2:23](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=143)** To mitigate these attacks, the wallet provider must follow secure development life cycle processes.
>
> **[2:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=151)** The approach and tooling to handle such attacks are well documented.
>
> **[2:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=156)** These hosted wallet providers are also the single point of failure, meaning they are also vulnerable to attacks such as denial of service, [[Phishing]] attacks, which can further lead to more sophisticated and targeted attacks.
>
> **[2:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=172)** All of these attacks are well understood by the security community and should be addressed with appropriate security controls, including network firewalls, DDoS protection, access management, and employee training.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=187)** To learn more about these security controls, check out this learning path on [[LinkedIn]] Learning.
>
> **[3:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=193)** Regardless of whether it is a hosted or non-hosted wallet setting, if the keys are stored and managed by a user, they are subject to additional attacks.
>
> **[3:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=205)** Keys stored locally are prone to malicious attacks using keyloggers and other malwares.
>
> **[3:32](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=212)** These attacks can either lead to theft of the private key or malicious intrusion during the signing of a blockchain transaction.
>
> **[3:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=222)** You can mitigate this attack with a [[Hardware]] wallet supplement with additional control such as [[Multi-factor Authentication]].
>
> **[3:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=231)** Typically, an end user's computer runs software for managing keys.
>
> **[3:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=237)** This software may have its own security weaknesses.
>
> **[4:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=240)** It performs cryptographic operations such as encrypting and signing transactions, but the software may be built with security bugs.
>
> **[4:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=250)** For example, poor [[Data Management]], secret stored in plain text, or unprotected memory access.
>
> **[4:18](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-one?u=76281980&t=258)** Use known and blockchain community recommended libraries for cryptographic operations such as encryption and decryption.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (5), [[Tokens]] (5), [[Smart Contracts]] (1), [[Decentralized Applications (DApps)|Decentralized applications]] (1), [[OWASP]] (1)
> **Analogies:** such as (5), for example (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** owasp (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Blockchain ecosystem threats: Part two](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=0)** - [Instructor] [[Cryptocurrency]] owners usually want to buy, sell or exchange their currencies.
>
> **[0:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=6)** Obviously, they can do so directly with others, but it limits their ability to locate potentially interested parties.
>
> **[0:15](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=15)** Third-party exchanges solve this problem by offering the ability to swap crypto [[Tokens]].
>
> **[0:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=21)** There are two types of exchanges, centralized and decentralized.
>
> **[0:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=26)** In the case of centralized exchanges, a third-party intermediary facilitates, monitors and secures the transactions.
>
> **[0:35](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=35)** Users of the centralized exchanges are subject to "Know Your Customer" or KYC requirements.
>
> **[0:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=42)** That means they're also required to share their identification information.
>
> **[0:48](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=48)** Centralized exchanges also offer advantages, such as funds liquidity, stability and [[Customer Support]].
>
> **[0:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=56)** Examples are Binance and Coinbase.
>
> **[1:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=60)** Decentralized exchanges on the other hand have no third-party intermediary involved.
>
> **[1:06](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=66)** Instead, the exchange protocol facilitates the transaction.
>
> **[1:11](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=71)** End users continue to maintain control of their funds while relying on the [[Blockchain]] for clearing the funds.
>
> **[1:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=79)** The exchange protocol uses [[Smart Contracts]] to execute the transaction.
>
> **[1:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=85)** One of the rapidly-growing protocols that operate on [[Ethereum]] is Uniswap.
>
> **[1:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=91)** There is no requirement for KYC, but liquidity is low and orders take a long time to fill.
>
> **[1:39](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=99)** Even today, most of the order fulfillment takes place through centralized exchanges.
>
> **[1:46](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=106)** The interest and adoption of a decentralized exchange are rapidly growing.
>
> **[1:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=111)** Both of these types of exchanges are vulnerable to attacks but considering the attacks in recent years, centralized exchanges have been attacked more often as they have been more active.
>
> **[2:03](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=123)** Centralized exchanges are similar to a hosted wallet in terms of their threat vectors.
>
> **[2:09](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=129)** In fact, many times the same commercial company offers both of these capabilities.
>
> **[2:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=136)** They are also susceptible to [[OWASP]] Top 10 application-level attacks, denial of service attacks and so on.
>
> **[2:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=144)** So you should implement the same security controls as described earlier in the wallet section of this video.
>
> **[2:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=151)** Since decentralized exchanges are based on exchange protocols, which in turn are built on the blockchain smart contracts, they are prone to the same attacks that normal blockchain transactions are.
>
> **[2:46](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=166)** For example, in April, 2020, attackers managed to steal $25 million worth of currency from Uniswap and Lendf.Me by leveraging the reentrancy attack.
>
> **[2:59](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=179)** The reason this attack was possible was due to the same security bug in the Uniswap code that we reviewed earlier.
>
> **[3:07](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=187)** Some other attacks are also possible.
>
> **[3:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=190)** For example, the front-running attack.
>
> **[3:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-two?u=76281980&t=193)** Mitigation strategies should include implementing the controls and best practices for smart contracts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (3), [[Smart Contracts]] (3), [[Cryptocurrency]] (1), [[Tokens]] (1), [[Customer Support]] (1)
> **Env Vars:** kyc (2), owasp (1)
> **Analogies:** for example (2), such as (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [Blockchain ecosystem threats: Part three](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=0)** - [Instructor] [[Blockchain]] networks are isolated networks, so are the smart contract and decentralized apps that are built on them.
>
> **[0:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=8)** These apps need to rely on data from external [[Microsoft Word|word]] and legacy Web 2.0 applications to be of meaningful use.
>
> **[0:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=17)** Oracles are the off chain middleware that enables these apps to interface with [[Representational State Transfer (REST)|rest]] of the world.
>
> **[0:25](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=25)** Oracles handle the communication between blockchain and external data providers, business applications, [[IoT]] sensors, financial markets, you name it.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=36)** Note that Oracles are not embedded into the blockchain network but are rather run as their own independent Oracle networks.
>
> **[0:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=45)** Oracles are important and should they be compromised, they can undermine the trustworthiness of the data they're providing.
>
> **[0:53](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=53)** This will further lead to a ripple effect on trust in [[Smart Contracts]] and decentralized apps.
>
> **[1:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=60)** So, Oracles do carry the same burden of providing trust and security as rest of the blockchain networks.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=68)** Just as we have previously seen in other ecosystem players, Oracles to can be centralized and decentralized.
>
> **[1:16](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=76)** Centralized Oracles pose what's known as the Oracle problem in the industry, while blockchain is built on the principle of [[Decentralization]], reliance on a central Oracle as a trusted source, brings us back to a centralized model with single point of failure.
>
> **[1:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=96)** Just like with any centralized organization, Oracles are susceptible to conflict of interest.
>
> **[1:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=103)** When personnel behind the Oracle have potential material gain, they are likely to get influenced and manipulate the data.
>
> **[1:51](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=111)** This can lead to breach of trust in the Oracle dependent smart contracts.
>
> **[1:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=116)** Centralized Oracles are the single point of failure and are vulnerable to attacks such as denial of service.
>
> **[2:04](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=124)** There has been a movement to transition from centralized Oracles to decentralized Oracle networks.
>
> **[2:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=130)** These independent blockchain based networks run specialized consensus protocols in the Oracle networks themselves.
>
> **[2:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/blockchain-ecosystem-threats-part-three?u=76281980&t=139)** Some of the examples are Witnet, Auger and Chainlink.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (6), [[Representational State Transfer (REST)|Rest]] (2), [[Smart Contracts]] (2), [[Microsoft Word|Word]] (1), [[IoT]] (1)
> **Analogies:** just like (1), such as (1)
> **Env Vars:** iot (1)
> **Versions:** 2.0 (1)
> **Definitions:** known as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 7. End User Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Wallet and keys security](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=0)** - While [[Blockchain]] platforms, [[Smart Contracts]], and enabler services are necessary to maintain trust in the ecosystem, that trust does not automatically flow to the end user.
>
> **[0:14](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=14)** In fact, in a decentralized world, where there are no governance and protection laws, the burden of responsibility on the shoulders of an end user is much higher than in our traditional world.
>
> **[0:28](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=28)** But the irony is, that given this field is so new, the expertise and knowledge of a common person does not equate to the interest that end user has.
>
> **[0:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=40)** So let's review some of the necessary prevention and best practices to protect your [[Cryptocurrency]] and your end of the decentralized application.
>
> **[0:50](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=50)** Malwares, trojan horses, either directly compromise your computing device or make it easy for attackers to take control of the device.
>
> **[1:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=60)** So install antivirus, and keep your device updated with operating system updates, especially these security patches.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=68)** Similarly, any keylogger installed on your device can read anything you type, including passwords and keys.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=77)** Do not install any software that you do not trust.
>
> **[1:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=81)** Hosted wallets make it easy to store your keys, but any interaction with an online wallet provider creates a new attack surface.
>
> **[1:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=91)** You can always opt for cold wallets, such as a dedicated [[Hardware]] device, or even print them on a paper wallet.
>
> **[1:39](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=99)** Now that doesn't mean that just because they are cold, they are automatically safe.
>
> **[1:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=105)** You would still need to safeguard them as if you would guard any physical assets of high value.
>
> **[1:52](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=112)** Diversify your cryptocurrency portfolio with multiple wallets.
>
> **[1:57](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/wallet-and-keys-security?u=76281980&t=117)** Obviously do not share your private keys with anyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptocurrency]] (2), [[Blockchain]] (1), [[Smart Contracts]] (1), [[Hardware]] (1)
> **CLI Commands:** make (2)
> **Prerequisites:** install (2)
> **Analogies:** such as (1)
> **Speakers:** - while (1)

#### [Web session security](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=0)** - [Presenter] When interacting with online exchanges or wallet providers from your computing device, you will likely open a web session using your browser.
>
> **[0:10](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=10)** Many types of attacks can hijack your session.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=13)** Some of the known attacks are, manipulator in the middle attack, cross-site request forgery, cross-site scripting and injection attacks.
>
> **[0:24](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=24)** Now the bulk of the responsibility of protecting your session lies with the provider but by enabling web protection control through your antivirus provider you can add another layer of defense.
>
> **[0:37](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=37)** Do not conduct a transaction with a website that does not implement TLS.
>
> **[0:43](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=43)** [[Phishing]] is a social engineering attack in which the attacker disguised as a trusted entity, tricks a victim to take any action that the victim would not have taken otherwise.
>
> **[0:56](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=56)** For example, clicking on a malicious link in the email.
>
> **[1:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=60)** This further leads to installing malware keylogger or starting a ransomware attack on victims devices.
>
> **[1:08](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=68)** Don't click or tap on links that you receive via email or text messages.
>
> **[1:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=73)** Always carefully check the link and the target URL.
>
> **[1:17](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=77)** A more specific example here is ice fishing.
>
> **[1:21](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=81)** In this attack, the attacker tricks a victim to sign a transaction that grants permission to the attacker, to use the victim's [[Tokens]].
>
> **[1:31](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=91)** In fact, this was the reason for the Badger DAO attack in December, 2021 in which $130 million worth of funds were stolen.
>
> **[1:42](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/web-session-security?u=76281980&t=102)** Anytime you are engaging in a token transfer using a protocol, say UNICEF do not trust by default the smart contract, always verify contract address, who deployed it and how did the deployer receive the funds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (1), [[Tokens]] (1)
> **Env Vars:** tls (1), url (1), dao (1), unicef (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980&t=0)** - [Instructor] The world of [[Blockchain]] and [[Decentralized Applications (DApps)|decentralized applications]] is evolving rapidly.
>
> **[0:05](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980&t=5)** In this course, we only scratched the surface of security controls you can use to protect this ecosystem.
>
> **[0:13](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980&t=13)** But that shouldn't stop you from taking advantage of blockchain in your organization today.
>
> **[0:19](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980&t=19)** Many organizations are already seeing the benefits of blockchain in their respective industries.
>
> **[0:26](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980&t=26)** So I urge you to start today and take action.
>
> **[0:30](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980&t=30)** Make security a priority for your blockchain projects and decentralized applications.
>
> **[0:36](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980&t=36)** Feel free to reach out and connect with me on [[LinkedIn]].
>
> **[0:40](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980&t=40)** I look forward to hearing how your journey in the security of the blockchain is progressing.
>
> **[0:45](https://www.linkedin.com/learning/blockchain-and-smart-contracts-security/next-steps?u=76281980&t=45)** Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (5), [[Decentralized Applications (DApps)|Decentralized applications]] (2), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Sam Sehgal]]

## Resources

- Exercise files available

## Skills Covered

- Smart Contracts
- Cryptography

## Path Context

### In [[Getting Started in Blockchain]]
← [[Foundations of Decentralized Finance (DeFi)]] | **5 of 5**

## Appears In

- [[Getting Started in Blockchain]]

## Related Courses

_Courses sharing skills:_

- [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] — Smart Contracts
- [[Building an Ethereum Blockchain App- 7 Smart Contracts]] — Smart Contracts
- [[Ethical Hacking- Cryptography]] — Cryptography

---

[↑ Back to top](#)