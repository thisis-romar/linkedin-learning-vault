---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-1-introduction-to-blockchain
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain"
level: Intermediate
updated: 7/14/2021
learners: 5294
skills:
  - Blockchain
  - Ethereum
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFWZ-Wnjky0pA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626115729643?e=2147483647&amp;v=beta&amp;t=OUystgsKkSVSNCLL-TjNuRKcriX35-tJZB4o7pbZKgQ"
linkedin_topic: Data Science
learning_paths:
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
next_courses:
  - '[[Building an Ethereum Blockchain App- 2 Introduction to Ethereum]]'
  - '[[Building an Ethereum Blockchain App- 2 Introduction to Ethereum]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":1,"total":11,"prev":null,"next":"Building an Ethereum Blockchain App- 2 Introduction to Ethereum"},{"path":"Become a Blockchain Developer","position":1,"total":14,"prev":null,"next":"Building an Ethereum Blockchain App- 2 Introduction to Ethereum"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/blockchain
  - skill/ethereum
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20An%20Ethereum%20Blockchain%20App%201%20Introduction%20To%20Blockchain.md)

![Building An Ethereum Blockchain App 1 Introduction To Blockchain](https://media.licdn.com/dms/image/v2/C560DAQFWZ-Wnjky0pA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626115729643?e=2147483647&amp;v=beta&amp;t=OUystgsKkSVSNCLL-TjNuRKcriX35-tJZB4o7pbZKgQ)

# Building An Ethereum Blockchain App 1 Introduction To Blockchain

> What is blockchain technology, and where did it come from? Why are other people using it, and what can it do for you? This series of eleven courses introduces blockchain technologies and deep dives into Ethereum development. In this first course, instructor Michael Solomon explains in-depth what blockchain is. Michael explains the beginning of blockchain and how it differs from Bitcoin. He shows y

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain) | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to blockchain](#introduction-to-blockchain)
- [**1. What Is Blockchain?**](#1-what-is-blockchain) (14 videos)
  - [The beginning of blockchain](#the-beginning-of-blockchain)
  - [Currency and cryptocurrency](#currency-and-cryptocurrency)
  - [Why use the blockchain?](#why-use-the-blockchain)
  - [Blockchain data and blocks](#blockchain-data-and-blocks)
  - [Blockchain immutability](#blockchain-immutability)
  - [Blockchain consensus](#blockchain-consensus)
  - [Building the blockchain story](#building-the-blockchain-story)
  - [Hashes](#hashes)
  - [What is a chain of blocks?](#what-is-a-chain-of-blocks)
  - [Finding the nonce](#finding-the-nonce)
  - [Blockchain mining](#blockchain-mining)
  - [Arriving at consensus](#arriving-at-consensus)
  - [Public vs. private blockchains](#public-vs-private-blockchains)
  - [Distributed processing and blockchain solutions](#distributed-processing-and-blockchain-solutions)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to blockchain](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=1)** - Hi there and welcome to the [[Ethereum]] [[Blockchain]] Apps course.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=4)** I'm Michael Solomon and when I'm not on camera, I'm a professor, an author, and an industry consultant, and I'm starting to work more and more in database environments that include blockchain applications.
>
> **[0:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=16)** It's a great technology and it's one that I think pretty much everybody needs to learn a little bit about.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=21)** So you've heard a lot of hype about Ethereum and blockchain, but this course will take you from zero to hero in almost no time.
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=29)** We're going to cover what is the blockchain?
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=31)** We're going to start at the very ground level.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=33)** Then we're going to introduce Ethereum and talk about why you really want to use Ethereum.
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=38)** It's a second generation and we'll define what first and second generation means and why the second generation is really, really cool.
>
> **[0:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=45)** Then we're going to get into the Ethereum ecosystem and cover development tools.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=49)** We're going to have you actually set up your own development environment so you can write your own code.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=54)** You'll also need to create your own Ethereum wallet, and we'll step you through exactly how to do that.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=59)** You do that so that you can manage your own [[Cryptocurrency]] and other crypto assets.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=64)** From there, you're all ready to really dig into Ethereum.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=68)** We're going to basically teach you about [[Smart Contracts]] and dApps and we're going to be using [[Solidity]], which is the most popular language that we use in Ethereum to develop these smart contracts.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=79)** We'll take you through the [[Software Development]] life cycle so you'll know how you do things and what process.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=85)** We're going to talk about how to design smart contracts, then how to write your own code and in smart contracts.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=91)** How to test them on a test blockchain, and then how to deploy them, and then what do you do after you deploy?
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=97)** How do you maintain your app?
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=99)** We're going to cover everything from the beginning to the very, very end.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=103)** What you'll learn by the end of the course is how to actually roll up your sleeves and get your hands dirty.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=108)** We're going to cover a supply chain application, and you're going to learn how to actually write it and deploy it as a dApp on the blockchain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethereum]] (8), [[Blockchain]] (6), [[Smart Contracts]] (4), [[Cryptocurrency]] (1), [[Solidity]] (1)
> **Code Identifiers:** dapps (1), dapp (1)
> **Prerequisites:** set up (1)
> **Speakers:** - hi (1)


### 1. What Is Blockchain?

[↑ Back to Table of Contents](#table-of-contents)

#### [The beginning of blockchain](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=0)** - The best place to start when learning about [[Blockchain]] is the very beginning.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=5)** So we're going to start at a very foundational level.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=8)** We're going to talk about the history of blockchain, what blockchain is and what blockchain can do.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=13)** So if you're already very comfortable with all the blockchain concepts, you might want to skip to the next section or the next chapter.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=20)** But if you're new to it or you want to have any questions answered, this is the place to start.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=26)** Blockchain is really all about trust and determining and deciding who you want to trust.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=33)** So there are three things you need to know.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=35)** Number one, people like to exchange things of value.
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=38)** We see this in transactions all over the place in real life.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=43)** You basically want to perhaps trade one item of value for another, or maybe you're going to use some type of currency to pay for something, so of course you render currency and you get something back, either a product or a service.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=58)** We also know that this value exchange relies on trust, and it basically means that you have to trust that when you pay for something, you're getting what you pay for.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=69)** I mean, you've always heard the term, you get what you pay for, but sometimes it's not the case if you don't trust the person or the entity that you're exchanging this value with.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=79)** So you have to be able to trust.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=81)** So things such as, if we want to order from, let's say [amazon.com](https://amazon.com), do you trust that you're going to get what you paid for?
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=87)** Well, yeah, you do, because of the reputation.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=90)** So there's a whole trust value in the basis of any type of transaction that you encounter.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=98)** Also, you want to make sure that you have a fair trade.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=101)** And that's one of the things we do with comparative shopping, especially online.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=104)** We want to look to make sure that we're getting the best price for whatever goods we're purchasing or services in that matter.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=111)** This trust often depends on a third party.
>
> **[1:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=114)** I mentioned [amazon.com](https://amazon.com).
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=116)** When we purchase something from [amazon.com](https://amazon.com), we're probably purchasing a product from some other vendor or from some other producer.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=124)** And we don't have to trust that producer, if we trust Amazon, because we think that, oh, if I purchase something from Amazon, I have the guarantees that if I don't like it, I can return it and I can also provide feedback and I can look at other people's feedback.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=140)** So we build this concept of trust so that we don't worry about giving our money to someone we don't trust if we have built that trust.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=149)** In many cases, we have some sort of middleman.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=152)** Anytime that we engage in financial transactions, we're probably interacting with a bank of some sort.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=159)** You think again, online purchases, we normally are going to pay for those purchases using some sort of card, whether it's a debit card or a credit card.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=168)** Regardless, that card represents money that we may have and we can render that card for [[Microsoft Products|products]] or services because we trust the vendor and the vendor trusts that card.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=182)** They don't trust us, they trust the card.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=184)** So we had this concept of middlemen that kind of handshake on both sides so that we had the trust so that we can engage in financial transactions.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=194)** But as I mentioned earlier, there's a service fee in there and it costs more, or makes the transactions cost a lot more in some cases.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=202)** And there's more room for human error and obviously for corruption.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=206)** Well, if there are trust issues, and in order to solve the trust issues, we have to pay somebody in the middle.
>
> **[3:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=213)** Isn't there a better way?
>
> **[3:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=215)** Can't we save money and still find a way to trust whom we're interacting with?
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=220)** The answer is yes.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=221)** And that's where blockchain fits a really interesting niche.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=226)** It helps us solve these third-party trust issues.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=230)** Now, blockchain's been around for a little while, since 2008.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=233)** In fact, in 2008, Satoshi Nakamoto introduced a very interesting paper that introduced the first blockchain and implementation of a blockchain using [[Cryptocurrency]], and it's basically Bitcoin.
>
> **[4:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=246)** Now, Nakamoto's not the real name.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=249)** We don't really know who the author is, or perhaps a group of authors, but this paper was proposed that showed us how we can use this blockchain concept to implement a cryptocurrency.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=261)** What it does, it allows people to conduct business without trade relations obstacles.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=266)** In other words, it allows us to exchange money, cryptocurrency, with entities we don't trust, or maybe not even know, but we trust the process.
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=278)** So it was initially all about a new type of electronic currency exchange called cryptocurrency, but it's grown to be much more than that.
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=288)** So let's take a look at what else blockchain can do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (12), [[Cryptocurrency]] (4), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [amazon.com](https://amazon.com) (3)
> **Definitions:** basically means (1), in other words (1)
> **Cross-References:** next chapter (1)
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### [Currency and cryptocurrency](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=0)** - We know that [[Blockchain]] can help us enact currency exchange, but what does that actually mean?
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=7)** A traditional currency exchange means we have some type of currency and we exchange that for something else.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=13)** Now it could be a different type of currency.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=15)** Like we're going from us dollars to Canadian dollars or some other currency, or we can take our currency and exchange that for a product or a service.
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=25)** Either way, we're exchanging something of value.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=28)** And in most cases, we need a third party to inter mediate or to be the mediator in between the two parties.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=36)** So we need a bank, we need a credit card company or something, or maybe a government entity or some other middleman to guarantee that currency's value that will make sure that whatever we're exchanging maintains the value and we maintain the trust on both sides.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=54)** So again, it's all about trust.
>
> **[0:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=57)** So blockchain technology was originally introduced to support a new type of currency.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=63)** Now, digital currency has been around for a while, a lot longer than blockchain, but the new type of digital currency, called [[Cryptocurrency]], is new, and that's what Bitcoin actually implemented.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=77)** So the idea behind it is, there's no third party that's actually needed.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=81)** So let's take a look at what cryptocurrency actually is.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=86)** If you've ever heard of blockchain, you've probably heard of Bitcoin.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=90)** Now they're not the same thing.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=92)** Blockchain and Bitcoin are different.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=95)** Blockchain is a technology of how we do something.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=98)** Bitcoin is one implementation of what we can do with the blockchain technology.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=105)** So keep them separate.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=107)** Bitcoin is just one implementation of blockchain.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=110)** We're going to focus on what blockchain actually is.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=113)** A digital or electronic currency is kind of like the digital representation of your money in a bank account.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=120)** So if you ask yourself, how much money do I have today?
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=124)** That's kind of a dangerous question to ask.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=127)** If you go online, you go to your bank's website, you'll see a number there.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=131)** Now that represents some currency.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=134)** Some fiat currency, fiat currency is kind of like a real currency that's backed by some regulatory or government agency.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=142)** So we have a number of dollars, hopefully it's multiple dollars that you would have in your bank account, but really it's a number.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=149)** If you go to a cryptocurrency exchange and you have funded an account, you may also see a number, but it's going to be in a different base, a different type of currency, it'll be cryptocurrency.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=164)** So all it is is a digital representation of how much your money based on what type of currency it's in, is actually worth.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=173)** Now, there's a lot more details than that, but we're going to keep it at a high level at this point.
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=176)** We'll dig down a little bit further.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=178)** One of the differences between fiat currency and cryptocurrency is that the cryptocurrency is called crypto because it uses [[Cryptography]] to ensure the integrity of all the data out there.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=191)** Because remember, we don't trust other people that are handling our data.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=196)** So one of the features of blockchain is that we use cryptography to ensure that integrity in a trustless environment.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=204)** We use things called hashes.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=206)** We're going to talk about that later, don't worry about it.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=208)** It's actually pretty easy once you dig down into it, but we use hashing as one of the cryptographic mechanisms to make sure that everything is fair and honest, even in an environment in which we lack trust.
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=223)** Now, one last thing, be aware that when we mention cryptography, that does not always mean encryption.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=230)** encryption is only one piece of cryptography.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=233)** So we're talking about the bigger picture here.
>
> **[3:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=236)** We're going to peel this back like an onion, one layer at a time, so don't worry, we're not going to dive in too deep, too quickly.
>
> **[4:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=243)** We're going to make it fun to learn more about the cryptography basis of blockchain and how it all fits together to be a really, really cool technology.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=253)** All right, so basically, this is all just a fancy way to say that blockchain is a secure way to handle transactions in a trustless environment.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=263)** All right, so that's a high level view of what blockchain is kind of sort of.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=267)** In the next episode, I'm going to give you an example scenario to demonstrate why we might use blockchain to help understand better, before we dive deep into how the technology actually works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (14), [[Cryptocurrency]] (6), [[Cryptography]] (5)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (3)
> **Analogies:** kind of like (2), picture (1)
> **UI Navigation:** go to (2)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)
> **Speakers:** - we (1)

#### [Why use the blockchain?](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=0)** - In the last episode, you learned that [[Blockchain]] was initially created to exchange currency, but it can do a lot more than that.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=8)** Let's start our path toward learning more about blockchain by mapping a real-life example to what blockchain may be able to do for us.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=18)** Let's take a look at a service organization.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=21)** Let's keep it really, really simple.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=22)** How about mowing lawns?
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=24)** All right, so you've got a young, enterprising person who wants to go out and mow lawns, but then how do they get paid?
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=30)** And on the other side, if you want to hire someone to mow your lawn, how do you pay that person?
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=36)** Chances are, you're not going to be able to hand out a credit card and be able to swipe after the work is done, so what do you do?
>
> **[0:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=45)** Customers want to be able to offer payment, and the vendors, the lawn mower, wants to be able to accept that payment.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=52)** So that's a great example of how blockchain may help.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=56)** So the problems involve both sides.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=59)** And again, you may want to be able to pay cash, but then cash is always dangerous.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=64)** What happens if let's say you're working during the day, and that's the time of day that the person who mows your lawn is able to come and mow it.
>
> **[1:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=72)** Do you put cash in an envelope and stick it under your front porch or on the mat?
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=78)** Okay, you could do that, but if somebody swipes it, it's gone and who's the wiser?
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=83)** What about a check?
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=84)** Do you want to leave a personal check? Maybe not.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=86)** And even though you write personal checks, will the person who moves the lawn accept it?
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=92)** Maybe, maybe not.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=94)** So there's lots of issues in exchanging payment with strangers.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=98)** Okay, on the other side, if you're mowing the lawn, what types of payment will you accept?
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=103)** Of course cash is great, but again, there's problems with the person who's paying you may not want to use cash.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=110)** And if you want to set up your own process of being able to accept credit cards, you need a merchant account, you've got to sign up for a service, and it's easier these days, but again, it's not perfect.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=120)** So what's the solution? The blockchain.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=123)** Blockchain technology will make it possible for both sides to easily transfer funds when the work is done without trusting one another, and that's the whole idea.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=134)** So blockchain provides various features that really help encourage transactions.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=141)** And in other words, it just supports commerce.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=143)** It gives us value without trust.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=145)** That means that we can exchange a service or product, such as mowing a lawn, and payment without having to trust one another.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=153)** We can also eliminate those middlemen, so we don't need to have that merchant account, we don't have to sign up for any service so that we can swipe credit cards because those cost money.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=164)** So if we eliminate middlemen, we eliminate, or at least drastically reduce those service charges that the middlemen typically charge.
>
> **[2:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=174)** And we also increase efficiency because it's point to point, we have producer and the consumer exchange funds directly without having to go through other parties.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=185)** So it's win-win for everyone.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=187)** Additional features include complete transaction history.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=191)** Remember, that on the blockchain, once you put something on the blockchain it stays there and it makes it really, really easy to go back and look at transaction history.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=201)** Why is this important?
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=202)** Well, from the lawn mower's standpoint, you can look back at payment history.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=207)** How many times have you mown a certain person's lawn, or how many lawns have you mown in this last month?
>
> **[3:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=213)** So it gives you lots of good information.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=214)** On the other side, you could go back and say, if Fred is going to mow your lawn, you can go back and see, has Fred been doing this for very long, have other people hired Fred to mow the lawn as well?
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=227)** And you get a history of the person that you're interacting with on both sides.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=233)** Also, we get resilience through replication.
>
> **[3:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=236)** That's a big term but what that basically means is that the blockchain is not stored in one location.
>
> **[4:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=241)** It's stored lots of different places.
>
> **[4:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=243)** So if we had, let's say a spreadsheet of all the work that we've done, it's hard to share that spreadsheet with a lot of places, and chances are, it's going to be stored in probably one place or a couple places.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=254)** And if something bad happens, let's say ransomware encrypts it so that he can't get a hold of it, or if there's a [[Hardware]] failure, or for whatever reason, the data goes away, it's hard to get back.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=266)** With blockchain, there's lots of copies, and so we get this resilience.
>
> **[4:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=269)** It's not just stored in one or two locations.
>
> **[4:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=272)** And then lastly, there's transparency.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=275)** Transparency kind of goes back to the complete transaction history.
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=278)** It means that in a public blockchain, which we're going to be talking about predominantly throughout this whole course, the data is all out there for everyone to see.
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=288)** There's no hiding of data, kind of, yes, you can encrypt it, we'll get back to that a little bit later, but the data is all there.
>
> **[4:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=295)** So it's easy to trace transactions and figure out what's been going on.
>
> **[4:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=299)** Since most blockchains that we're going to be focused on in this course are public, as long as you have the credentials to access something, you can see any data that you want.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=310)** Now that you have a better idea as to why we might want to use blockchain, let's look at how blockchain actually works.
>
> **[5:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=318)** It's important to know the how so we can implement our solutions when we have the why questions.
>
> **[5:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=325)** Once you have a firm grasp on how general blockchain works, then we're ready to start digging into a specific, very cool implementation of blockchain called [[Ethereum]], from which we're going to talk about predominantly in chapter two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (16), [[Hardware]] (1), [[Ethereum]] (1)
> **Definitions:** means that (2), in other words (1), basically means (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### [Blockchain data and blocks](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=1)** - [[Blockchain]] technology is all about adding data in such a way that we can trust data, but it's really all about data.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=9)** Yes, we use transactions, but let's dig down and talk about data a little bit more.
>
> **[0:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=14)** In traditional applications, we store data in a data store.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=18)** It could be a flat file, it could be lots of other things, we typically think of of things as spreadsheets or [[Databases]].
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=26)** In any of those data repositories, support four main operations, and they're called the CRUD operations.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=33)** That means we can create new records or create data, we can read the data back that we've already created and stored, we can also update the data, and that's very important, and of course, part of update is to delete or to get rid of it.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=47)** So those four operations are called the CRUD operations.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=51)** Now, think of an [[Microsoft Excel|Excel]] spreadsheet.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=54)** You create a brand new Excel spreadsheet, and you've got nothing there.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=58)** So the first thing you do is you enter data into cells, well, that's a create data.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=62)** And you realize, oops, made a mistake, I want to come back and I can go into a cell and I can change it.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=67)** Well, that's the update operation.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=69)** And if you decide, you want to get rid of it, you can just delete the whole spreadsheet,, or a row, or a column, or whatever you want, that's delete.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=76)** So that shows us that we can make all of these changes and store it, so that the next time we open up our spreadsheet, it's back to the way that we left it.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=84)** So we have all four of those operations.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=87)** Now, blockchain is different.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=90)** Blockchain doesn't support all of those operations because in order to have multiple copies of the blockchain spread across lots of different locations, and we want this integrity to make sure that the history is always there, the only two operations that blockchain support are add and read.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=109)** Wait, what about update and delete?
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=111)** Sorry, can't do it in blockchain.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=113)** Once you add data to the end of this blockchain, it's always going to be there, you can't change it, you can't get rid of it.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=121)** So what happens if you add data and you realize, whoops, my data's changed.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=125)** It could be an error, or it could just be that the data has been updated.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=128)** What that means is that at that point, you have to add data to the very end of the blockchain.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=134)** So you really have updated data, and that's kind of a pain, isn't it?
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=137)** So if you have data that changes several times, you've got three different copies of it or multiple copies, but that's the beauty of blockchain 'cause now you have a record of when and where the data actually changed and what the old versions used to be.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=152)** So you have automatic history and auditing capability.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=156)** So if we look at the blockchain, we can think of it as like one long ledger.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=161)** If we go back to a spreadsheet, it's kind of like that, where each block, or each transaction in a block is like one row.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=168)** And that's a simplification, but that's a good way to look at it.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=172)** Ledgers have been around for a long time.
>
> **[2:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=174)** In fact, if you know anything about [[Relational Databases]], a relational database is really kind of like a spreadsheet, like a big ledger, in the way that it's logically stores data.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=185)** But if you look back even before computers, we've known about ledgers for a long time.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=190)** For example, you remember the Play a Christmas Carol, or the story, A Christmas Carol?
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=196)** Well, Bob Cratchit is often seen leaning over his ledger of accounts.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=201)** Now, not sure what the Dickens the [[Representational State Transfer (REST)|rest]] of the story is about, but I do remember that ledger.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=206)** So that's the idea of a way of recording, accounting information or really information of any type you create these ledgers.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=214)** And instead of marking through and changing them, if you keep adding to the end of it, you have an auditable view of your data with full history.
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=223)** And that way, you can always determine how data got to be the way it is today.
>
> **[3:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=229)** And when you can determine the provenance or the background of that data, you can trust it's authenticity.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=237)** Let's take a step back, and let's imagine what this might look like in real life.
>
> **[4:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=241)** Let's go back to our lawnmower analogy.
>
> **[4:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=243)** Remember, you've got somebody who wants to mow lawns, and they're looking for somebody to actually mow the lawns and pay them for that.
>
> **[4:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=250)** So basically what if we stored these lawn mower transactions, which is effectively saying, I mowed your lawn on this date, you paid me, we have a payer, we have a payee.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=261)** So we keep this information and we put it on the blockchain.
>
> **[4:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=264)** So here are three transactions.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=266)** There's one for June 1st, another one for June 2nd, and another for June 3rd.
>
> **[4:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=271)** So he's pretty busy, mowing one lawn a day, maybe he can do more, but this is what we're going to put on the blockchain.
>
> **[4:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=277)** We can pretend that each one of these transactions is a transaction in a block, or let's just keep it simple.
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=283)** Let's make every transaction a separate block of information on the blockchain.
>
> **[4:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=289)** This is an oversimplification of the way that it really works, but that's okay.
>
> **[4:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=292)** We'll get into greater detail later.
>
> **[4:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=294)** On June 1st, he cut Jenna Anderson's lawn, and then that transaction was added to the blockchain.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=300)** On June 2nd, another lawn was cut.
>
> **[5:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=303)** And on June 3rd, there's another transaction.
>
> **[5:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=305)** So we've got three separate transactions each in separate blocks on our blockchain.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=310)** And every transaction after that, keeps getting added, and added, and added to the end of the blockchain.
>
> **[5:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=316)** So the blockchain gets longer, and longer, and longer.
>
> **[5:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=321)** And remember, once something is on the blockchain, it's always going to be there.
>
> **[5:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=326)** Blockchain is referred to as being immutable, which it kind of sort of really is, but it's effectively immutable.
>
> **[5:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=333)** We'll talk about what that actually means.
>
> **[5:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=335)** But the idea is that once a block gets put on the blockchain, it's there forever, you can't change it, or if you do, everybody knows it's been changed.
>
> **[5:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=344)** So it's not going to change without you knowing about it.
>
> **[5:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=347)** We'll talk about what that really means in the next episode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (20), [[Microsoft Excel|Excel]] (2), [[Databases]] (1), [[Relational Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** kind of like (2), think of it as (1), for example (1), imagine (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (2), in the next (1)
> **Env Vars:** crud (2)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - blockchain (1)

#### [Blockchain immutability](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=1)** - Now you understand how data is handled on the [[Blockchain]], let's talk a little bit more about the immutability property.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=7)** So, here's where the magic happens.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=9)** How can I confirm that the data has never changed?
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=13)** After all, we hear about hackers breaking into secure computers and accessing and changing data all the time.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=18)** And sometimes actually even deleting it, or encrypting it to where you can't ever get to it again.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=23)** Let's pretend that I'm a bad lawnmower guy and I want to go back and change the transaction history.
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=29)** I want to pretend that Jenna didn't pay me for the last job and I want to get paid again.
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=34)** That's the double spin problem.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=36)** Well, the beauty of that is that blockchain was designed to address the double spin problem.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=43)** All right so, let's try deleting that record.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=46)** I know I said you just can't delete anything on the blockchain, but let's see why.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=51)** First of all, you have to understand that the data on the blockchain is stored on multiple nodes.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=56)** Now, a node is really any device or computer that stores blockchain data and is connected to the network, we just refer to them as nodes.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=66)** So when we use the term server or node, typically, it's probably referring to about the same thing.
>
> **[1:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=72)** So, in this case, we're going to keep it really simple.
>
> **[1:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=74)** Let's say that the blockchain is stored on two servers.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=78)** That means that we have two servers that each have an identical copy of the blockchain.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=84)** So, here's my transaction history stored on both nodes.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=88)** Secondly, you need to understand that the nodes have to agree before anything is changed on the blockchain.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=94)** All right, let's say I try to get into server one and delete Jenna's transaction.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=99)** Remember, I'm the bad lawnmower guy.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=102)** The second server is going to double-check it's copy of the blockchain against server one.
>
> **[1:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=106)** But once it sees there's a difference, it's going to sound the alarm and say, "Whoa, no, not going to do that, server one's blockchain "is marked as invalid and is no longer accepted.
>
> **[1:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=118)** "It's server two's blockchain "that is the correct blockchain."
>
> **[2:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=122)** Essentially, server two kicks server one's blockchain out of the party, but there's a problem here.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=131)** How do we know that server two is right?
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=134)** Did server one actually delete a block, or did server two add a block?
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=141)** Maybe I'm the bad lawnmower guy, and I never mowed Jenna's lawn in the first place.
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=148)** I just claimed to mow the lawn.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=150)** How do we know who's right?
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=152)** Aha, that's where consensus comes into play.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=156)** Let's take a look at blockchain consensus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (14)
> **CLI Commands:** node (2)
> **Definitions:** means that (1)
> **Speakers:** - now (1)

#### [Blockchain consensus](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=0)** - Remember that in a [[Blockchain]] environment, there's a lot of spinning plates, several things we need to keep in mind.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=6)** Number one, we can only add data and of course read it.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=10)** But the big deal is, we can only change the blockchain by adding new blocks and nobody's in charge.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=17)** So how do we do that, when is it okay to add new blocks?
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=21)** Well, that's where consensus comes in.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=24)** Blockchain is very democratic.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=26)** It means that a majority of the nodes have to agree to allow new blocks to be added.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=33)** Nodes use a consensus mechanism.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=35)** In other words, just a set of rules that they agree to abide by because no one node has more authority than any other node.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=43)** So how do they reach this consensus and agree?
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=47)** So how do I know that server one deleted something and server two didn't just add something?
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=55)** Well, we really can't agree if it's just a, he said, she said kind of environment, because who do we trust, server one or server two?
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=62)** We don't know, that's why we need at least one more server.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=66)** So we need at least three servers in there so that we can agree.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=70)** In that point, we have to have more than half of the servers agree to make a decision.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=77)** So what happens there is we follow these consensus rules and they use those rules to determine who agrees with who.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=86)** So in this case we have server one saying I'm right.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=90)** Server two says I'm right and server three then follows the rules and says, no, you know what?
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=95)** Server two is right.
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=97)** So two is two thirds of the whole network, which is greater than half.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=102)** And that's how we have consensus.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=105)** Anytime a majority agrees, that becomes the truth of the blockchain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (4)
> **CLI Commands:** node (2), make (1)
> **Definitions:** means that (1), in other words (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - remember (1)

#### [Building the blockchain story](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=1)** - So now you have a handle on a few things, [[Blockchain]] related.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=4)** Number one, data on the blockchain can only be added, and added and added and added and added.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=10)** And read.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=12)** You can't do anything else with it.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=13)** Number two, you can't change any data on the blockchain, which means it's essentially immutable.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=20)** Now, technically you can change it, but it's really, really, really easy to figure that out and it invalidates the blockchain, which means it's just no longer in use.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=28)** And number three, it's immutable because there are multiple nodes that have to agree on any changes, and it's very easy for those nodes to detect any unauthorized changes.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=40)** All right.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=41)** So let's start back with that lawn mowing transaction and pair it down to just the money changing hands.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=48)** In reality, on real blockchain applications, you're probably going to be storing more data than just the transaction, but let's keep it simple.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=56)** Julie paid me $40 to mow her lawn, that's a transaction.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=61)** It includes an amount, $40, a source, Julie is paying me, the target.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=68)** So we've got three pieces in play.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=70)** Blockchain, again, can store lots more information, but this is a simple transaction.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=77)** Each person has to have an account from where the money is being drawn and to provide a place for the money to go.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=85)** So we have a source account and a target account.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=90)** Each account has an address.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=92)** An address is kind of like a bank account.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=95)** We're going to go into more detail later.
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=97)** Each block consists of multiple transactions and each transaction can have more details than you see here.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=103)** Pretty much anything from my lawn mowing business transactions, to literally anything you can put in a database, can be stored inside the blockchain.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=113)** As you've probably realized, the blockchain can contain lots of information and it just keeps getting bigger and bigger and bigger, or longer and longer and longer, and taking up more space.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=124)** So how are these nodes able to determine when a block has been changed and validate the integrity of the entire blockchain?
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=133)** We use something called a hash to do just that.
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=137)** Now, I'm going to discuss what hashes are all about in the next episode, and then we're going to put everything together, so you'll have a clear picture of how the blockchain actually is a chain and not just a bunch of blocks, how we create these hashes and the links between the chains, and who actually goes through all the effort to create those hashes, why is it hard to do and why would they choose to do that?
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=162)** Well, we're going to go into all those details in the next episode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (10)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (2)
> **Analogies:** kind of like (1), picture (1)
> **Speakers:** - so (1)

#### [Hashes](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=0)** - So let's talk about hashes.
>
> **[0:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=3)** A hash is basically a one-way mathematical function that's very easy to calculate, but very difficult to reverse.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=12)** It maps input to a specific type of output.
>
> **[0:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=16)** And again, one way, easy, backwards, no.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=19)** Let's think about, like, coffee.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=21)** You take coffee, you have beans, you get really nice coffee beans that you want to grind and then brew into your own morning cup of coffee.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=28)** Well, it's really easy to grind those coffee beans to create the ground coffee that you then brew, percolate, whatever you do with it.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=36)** But it's really, really hard and next to impossible to take those coffee grounds and reassemble them back to make coffee beans.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=44)** It's kind of a, grinding is a one-way function.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=46)** It goes one way and that's it.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=48)** Now, theoretically, it would be possible.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=51)** If you want to spend enough time and effort and you have enough patience to take each one of those grind, ground little pieces of coffee and glue them back together and make beans.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=60)** But, my gosh, that's going to take forever.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=63)** So again, it's a one-way function, that's easy one way, very hard the other way.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=67)** That's what a hash is.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=69)** So here's what hashing algorithm really may look like.
>
> **[1:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=74)** Let's take a very, very simple hashing algorithm.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=77)** Again, this is not what [[Blockchain]] uses.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=80)** This is what no one would really use, but it demonstrates what's going on under the covers.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=87)** Let's assume that we have a string.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=89)** We have this character value.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=90)** Let's just use the [[Microsoft Word|word]] "hello".
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=93)** Well, how do we represent "hello" in some way that we can do some math on it?
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=98)** First off we have to represent each character as some number.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=103)** Well, fortunately there's a standard table that does that for us.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=107)** We'll use the ASCII code.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=109)** Computers don't store characters.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=112)** They store numbers.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=113)** The ASCII code is a way of relating numbers to every character that you can print, and actually non-printable characters as well.
>
> **[2:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=122)** It really stands for the American Standard Code for Information Interchange, but don't worry about that, it's just a table.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=129)** It means that letters such as A have specific values with a number representation.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=136)** So let's assume a real world example.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=138)** We're going to take a string called, let's just say "hello".
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=142)** We look at our ASCII table and we find out that H has the value of 104.
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=148)** E has a value of 101.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=150)** So we find the values for each letter in our string.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=155)** And our hash function, again, very simple hashing function.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=158)** We're just going to add them all up.
>
> **[2:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=160)** So using our hashing function, we say that we can represent the string "hello" as the value 532.
>
> **[2:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=167)** 532 represents "hello".
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=170)** And it's kind of difficult to look at 532 and then back that out and figure out what string it represents.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=177)** It's not all that difficult for such a simple hashing algorithm, but again, you can see it's a little more difficult than just simply adding the numbers up.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=184)** However, with simple [[Algorithms]], you run into collisions.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=189)** For example, what if we changed our string a little bit?
>
> **[3:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=192)** We change the first letter to an F and the middle letters from L's to M's.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=197)** Now we have "femmo".
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=199)** Yeah, it doesn't mean anything, but it's another string.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=202)** If we add up the ASCII values of this string, it's also 532.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=207)** That's called a collision.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=209)** So a good hashing algorithm is one in which it's fast to calculate, nearly impossible to reverse, and creates very few collisions.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=221)** That means that we don't have very many source or inputs that will result in the same output.
>
> **[3:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=229)** All right, so two things to know for hashes.
>
> **[3:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=231)** Number one, today's hashes, the ones we're going to be using, of course, in blockchain, and the ones that are in use all over the place are very complex and they create unique outputs for whatever the input is given to them.
>
> **[4:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=246)** Yes, it's possible to create collisions, but a very, very small number of collisions would occur.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=252)** They're very, very hard to reverse, but very easy to calculate in the forward manner.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=258)** That's why they're so valuable.
>
> **[4:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=259)** Fast to calculate and determine, if the hash is different from a hash value you stored, it means that the source is different.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=267)** So let's take a look at an online example that really shows us how these hashes work in real life.
>
> **[4:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=273)** We're going to go to Anders Brownworth's website.
>
> **[4:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=276)** He has put up a really nice little demo that steps us through all the components of how to build a blockchain.
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=283)** So if we navigate to [anders.com](https://anders.com), we're going to move down to blockchain slash hash.
>
> **[4:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=290)** And here we have an example of a very popular hashing algorithm called SHA-256, or SHA-256.
>
> **[4:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=299)** So what happens is we enter data, and that data, every time we type a character, the hash will be updated here at the bottom automatically.
>
> **[5:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=308)** So we can see that the output of a SHA 256 hashing algorithm is actually 64 characters.
>
> **[5:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=315)** We won't worry about how it gets to that point.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=317)** But notice when I click here, the hash is the hash of a blank string.
>
> **[5:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=322)** And as soon as I start typing the first character, notice that the hash changes.
>
> **[5:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=327)** So I'll type "hello".
>
> **[5:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=330)** And notice with every character it changes.
>
> **[5:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=332)** And also it's pretty fast.
>
> **[5:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=333)** So it doesn't take long at all.
>
> **[5:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=335)** And if I were to keep on typing any values here, notice that every time I type a character, the hash changes.
>
> **[5:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=345)** And if I want to cut something out, same thing.
>
> **[5:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=349)** So you see how easy it is to actually calculate hashes.
>
> **[5:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=352)** In fact, we calculated a new 64 character hash value every time I typed a new character, and you can type as fast as you want to.
>
> **[6:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=360)** Very easy to do, but you can clearly see, if I gave you this hash, would you be able to figure out that that represents "hello"?
>
> **[6:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=367)** No, that's going to be pretty hard to do.
>
> **[6:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=369)** So that's basically what hashes are all about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (4), [[Microsoft Word|Word]] (1), [[Algorithms]] (1)
> **Env Vars:** ascii (4), sha (3)
> **CLI Commands:** brew (2), make (2), find (2)
> **Definitions:** means that (3), is a  (2), stands for (1)
> **UI Navigation:** go to (1), navigate to (1)
> **Analogies:** such as (1), for example (1)
> **URLs:** [anders.com](https://anders.com) (1)
> **Speakers:** - so (1)

#### [What is a chain of blocks?](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=0)** - In the last episode, you learned about hashes and hashing functions.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=5)** But you may wonder, what does a hash have to do with a [[Blockchain]]?
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=8)** Well, actually, hashes make blockchains possible.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=13)** A blockchain is a chain of blocks.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=15)** You know, a block is a collection of transactions.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=18)** But how are they linked together?
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=21)** They're linked together using the output of the hash function.
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=25)** The way it works is when you start a brand new blockchain, you actually start with one block, and it's called the Genesis block.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=33)** The Genesis block isn't linked to anything because it's the only one there.
>
> **[0:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=37)** Then you add the next block which, by the way, the Genesis block is block zero.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=42)** In computer science, we start things at zero.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=44)** We don't start counting at one.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=46)** So the next block is actually block one.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=49)** How do I make it a chain?
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=51)** What I do is I take the hash value of block zero, and I store that in block one.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=59)** Now, in real blockchain, we're going to have very long hash values, like 64 characters long.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=66)** But in our example, let's keep it a little simpler.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=69)** We're going to just use three-character hashes.
>
> **[1:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=72)** So for every block, every block is going to contain the hash value of the previous block, and that is the link between the two that actually creates the blockchain.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=86)** Let's take a look at what this might actually look like.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=89)** So we look at a block.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=91)** You have the block number.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=92)** Remember, the Genesis block is block zero.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=94)** Then you have the current block hash value, which is the hashed value of the current block.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=101)** So you just take all the data of your current block and you paste it into that hashing algorithm and you get a value back, and we store that here.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=110)** Then for most blocks, you're going to have the previous block's hash that creates the chain or the link.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=117)** Of course, for the Genesis block, there is no previous block's hash.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=121)** And then we have the body, which is the list of all the transactions, all the transfers of [[Cryptocurrency]] value from one address to another.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=131)** Once you start adding blocks, each block would then contain the hash of the previous block, which is effectively the link that makes that chain.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=140)** So let's take a look.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=141)** Block 11's hash, the value of a13, gets copied to block 12, linking the two blocks.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=150)** That means that any changes to any block breaks the chain.
>
> **[2:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=154)** Why is that?
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=155)** Think it through now.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=157)** Let's assume that block 11's hash is a13.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=162)** Now we create block 12, and we copy that hash over to block 12.
>
> **[2:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=167)** But what happens if the bad lawnmower goes back, and he changes block 11's data?
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=173)** Well, that's going to change block 11's hash.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=177)** You remember, when we changed the data, we typed the data into the hash function.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=182)** It changed the value of the hash.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=184)** So now we have a problem.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=186)** Block 11 has a different hash, but block 12 is storing the old hash value for block 11, and they don't match.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=195)** That breaks the chain.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=197)** And because of the way that every block's hash points to the previous, it actually breaks all the other blocks that come later.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=206)** But we'll see that a little bit later.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=208)** So the key to blockchain integrity is finding the right hash value that makes verifying blocks easy, but spoofing blocks, or in other words, changing them and making them wrong data, very hard to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (6), [[Cryptocurrency]] (1)
> **Definitions:** is a  (2), means that (1), in other words (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the last (1)
> **Speakers:** - in (1)

#### [Finding the nonce](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=0)** - You may be noticing what seems to be a little bit of a problem.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=4)** If creating a hash or calculating a hash is so easy, then how can you use a hash to make spoofing hard?
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=12)** Because if anybody can calculate hashes, then wouldn't spoofing a block and creating a spoofed hash be easy?
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=18)** Well, yeah, it would be.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=20)** However, what if we introduce another layer?
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=23)** In other words, we introduce a new value and we tack that along or onto the actual block data such that we have certain requirements as to what the output looks like.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=36)** What we need to do is introduce something new.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=40)** So in [[Blockchain]], what we do is we add a new number and we add that to the data.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=47)** So that with this new number plus the block data, we create a new hash value.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=52)** But then, we're going to add rules onto that new hash value such that it has to meet certain criteria and we call that the complexity requirement.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=62)** So what does the complexity requirement really mean?
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=64)** Well, in the Bitcoin world, the complexity requirement means that the resulting hash value has to start with a certain number of zeros.
>
> **[1:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=75)** Well currently, it I believe is 19 zeros.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=79)** That's really, really hard to find.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=81)** So what is this other number I talk about?
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=84)** That number is called a nonce.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=86)** It is a number used only once.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=88)** That's why it's called a nonce.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=90)** It's a random number that's used together with the block data that when you create a hash, creates a new hash value.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=100)** In the process of finding the right nonce to meet the complexity requirements, makes creating this valid block situation very, very difficult.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=111)** Let's take a look at what this all means.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=113)** It'll be a little bit clearer.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=115)** We're going to go back to [andrews.com](https://andrews.com) and we're going to look at a block.
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=119)** In this case, we have block number one and we have a default nonce.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=125)** Notice at the very bottom, for demo purposes, this website is designed so that we have a complexity requirement of four leading zeros because if we went to 19 zeros, it would take a long, long time.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=139)** So we're going to stick with four leading zeros.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=142)** Now, I'm going to start typing hello.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=144)** As soon as I type the [[Microsoft Word|word]], the letter H, notice something has happened.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=150)** Since we calculate a new hash value every time we change our input data, we now take the nonce value plus the H and calculate a new hash value.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=161)** But look, the first characters of the hash value are not four zeros.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=166)** That means it is an invalid hash value.
>
> **[2:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=169)** And in fact, that's why the whole screen turns a light pink.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=173)** It tells us it's no longer valid.
>
> **[2:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=175)** So now, if I keep typing, notice the hash value changes and none of the hash values are four zeros.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=182)** So we have a problem.
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=183)** Now I've got to go try to find a nonce.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=186)** So what I do is I try nonce one.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=189)** Nope. That wasn't it.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=190)** Let's try nonce two.
>
> **[3:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=192)** Nope, that's not it.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=193)** Cause notice, what I'm looking for at the bottom here, is I'm looking for a hash value based on my nonce and my data that leads up with four leading zeros.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=204)** So I'll try three.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=205)** Nope. Four.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=206)** So what I'm going to do is I'm going to run through thousands and thousands of examples or I can just click on the Mine button.
>
> **[3:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=213)** If I click the Mine button, what the program does is iteratively count from one up to a value that results in a hash value with four leading zeros.
>
> **[3:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=224)** So I would have had to have typed in one all the way through 85,869 to find the proper nonce that when pasted together with the string hello, gives us a hash value that starts with four zeros.
>
> **[4:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=242)** If that seems overly complicated, don't get overwhelmed.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=245)** All of this is automated.
>
> **[4:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=246)** That just gives you an idea of how hard it is creating a or finding the right nonce to use for a given set of data with four leading zeros is hard.
>
> **[4:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=259)** You know, 85,000 different values.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=261)** What about five zeros? It's way harder.
>
> **[4:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=264)** Six zeros is way harder but now, Bitcoin is using 19 zeros.
>
> **[4:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=269)** That's extremely difficult and takes a lot of time and a lot of energy to actually create.
>
> **[4:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=276)** So blockchain is data stored in blocks and the blocks are linked together.
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=281)** They're linked together through these hash values so that if any block changes, it's easy to figure out that that block has been changed and all the subsequent blocks are invalid.
>
> **[4:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=294)** Now we're going to dig more into this later but be aware that hashes make blockchain work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (3), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (3), make (2)
> **Definitions:** in other words (1), is called (1), is a  (1), is an  (1)
> **URLs:** [andrews.com](https://andrews.com) (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Warnings:** be aware (1)
> **Speakers:** - you (1)

#### [Blockchain mining](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=0)** - In the previous episode, you learned that it's very difficult to find that right nonce.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=5)** and the process you probably already realized by clicking on that little button called mine, the process of finding the right nonce is called mining.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=15)** That was pretty easy for us, only took a few seconds, because we had a very simple complexity requirement, only four leading zeros.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=22)** In real life, 19, 20 leading zeros is coming up before too much longer.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=28)** So the idea of that many leading zeros means that mining takes a lot of effort, and you have to expend a lot of energy and resources towards finding that one perfect nonce.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=40)** Bitcoin uses leading zeros.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=43)** Other implementations, other blockchains, use different complexity requirements.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=47)** But the idea is it's very resource intensive.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=51)** That means that you have to have lots of energy.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=55)** It takes a lot of electricity to run the rigs that actually will try to solve these solutions.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=63)** And you have multiple miners or nodes that are all competing to do this at the same time.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=70)** In fact, there are certain geographical locations that tend to be better suited toward mining.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=76)** Since you're going to create a lot of heat and use a lot of electricity, miners like areas that have a lower outside temperature and cheap electricity.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=87)** In fact, Iceland has very reasonably priced electricity and a lower temperature.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=93)** And what we're finding is Iceland actually commits more energy to mining than they do using electricity in other areas such as lighting your home.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=103)** It's kind of interesting, in that one area of the world, there's a lot of mining going on.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=108)** Even in the United States, in some of the northern areas that are very cool, you'll find that so much energy or so much heat is produced from mining rigs, that some people, especially personal miners, will actually take the output from their mining rigs and pump it back into their house during the winter months to heat their homes.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=127)** So it's really crazy how much energy is expended.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=130)** And one of the concerns is that that's just not sustainable over the longterm.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=136)** So you may ask yourself the question, what sense is there in actually buying these rigs that only does one thing?
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=142)** It basically finds hash values.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=145)** It uses a lot of electricity and creates a lot of heat that you've got to do something with.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=150)** Why would anybody do that?
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=151)** Well, the answer is that when these miners compete to find the right nonce, which creates the right hash, that satisfies the complexity requirements, the first one that finds it gets a little bit of a reward and those rewards can start adding up.
>
> **[2:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=167)** They're rewarded in [[Cryptocurrency]].
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=170)** So when the cryptocurrency has a high value, the miners are willing to invest lots of money to compete to earn that money back.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=179)** And when you're really hardcore into mining, you can actually create a situation where it's profitable for you to mine cryptocurrency.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=188)** That's why there's a lot of miners out there.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=190)** And a lot of them are actually making some pretty good money.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptocurrency]] (3)
> **CLI Commands:** find (3)
> **Definitions:** is called (1), means that (1)
> **Cross-References:** coming up (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### [Arriving at consensus](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=0)** - [[Blockchain]] is all about integrity and trust.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=4)** So you don't have integrity if any node can just add a block at any time.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=9)** So you have to agree, by you, I mean, all the nodes have to agree on what the valid blockchain is and which blocks are valid.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=18)** So all the nodes have to agree on which new blocks can be added.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=23)** They do that through a consensus mechanism.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=26)** They come to consensus because blockchain is purely democratic.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=31)** In other words, when anything over 50% of the nodes agree, that becomes the rule.
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=38)** So all you have to have is 50.000001 number of the nodes to agree that a block should be added and all the block, all the nodes have to agree to add that block.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=52)** So the downside of that is that it's possible to attack a blockchain.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=59)** If you can somehow take over and control just over 50% of the node, you can do what you want, but that's very, very difficult.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=66)** Let's not worry about the attacks right now.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=68)** Let's focus on consensus.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=70)** And how did these nodes actually agree with one another and come to consensus?
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=76)** The most common consensus mechanism that is in use today is called proof of work.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=81)** You've actually already seen that.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=83)** That's where the nodes, or the miners, compete to solve a mathematical puzzle.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=89)** The first node to solve that gets a little reward and adds the new block to the blockchain.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=94)** Now let's stop for just a second here.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=96)** Remember we talked earlier in an earlier episode about getting rid of the middlemen and getting rid of these extra charges.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=104)** The service fees that middlemen tend to charge are far, far higher than this tiny little charge or reward that miners get.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=113)** So if we compare the two, even though you have to pay a little bit to get your transaction put on the blockchain, it's very small compared to what the middlemen may charge.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=123)** So it's much, much better situation.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=125)** After the miner decides or finds the right value and submits it to the blockchain, the miner gets a reward, and then all the other nodes will validate that that block is valid.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=138)** How do they do that?
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=139)** The way that they validate that is just calculate the hash.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=142)** Again, that's easy to do.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=144)** But proof of work is not the only consensus mechanism out there, there are others.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=149)** Proof of stake is another popular one.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=151)** It will likely replace proof of work in some blockchains in the near future.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=156)** It provides consistency, just like proof of work, but requires far less computing power.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=162)** The way that it works, basically, is that every node submits a bet.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=166)** The size of the bet, among other criteria, is used to select the winner.
>
> **[2:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=171)** The selection is randomized, so the richest node doesn't always win.
>
> **[2:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=175)** So proof of stake is a way of providing input, still making it a democratic environment, but you don't have to expend so much work.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=185)** Others include delegated proof of stake, which is a modified version of proof of stake.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=190)** The candidate nodes are selected kind of like proof of stake.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=194)** Plus a few other nodes are voted in, even those that don't submit bets.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=199)** It makes it more fair and is less likely that richer nodes will win more often.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=204)** Another example of a consensus mechanism is the delegated Byzantine fault tolerance.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=209)** Well, that's a mouthful.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=211)** This consensus mechanism is based on the Byzantine General's problem.
>
> **[3:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=215)** That's an old classic problem in which you have multiple generals, each commanding an army surrounding a city and determining when to attack.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=225)** The problem is if they all attack together, then they will succeed.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=230)** But if they don't attack at the same time, they will be defeated.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=234)** So how do you send the message to all the different generals to make sure that everyone attacks, because what if your messenger gets intercepted and the message has changed?
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=244)** There's a lot more to it than that, but that's the basic gist of the Byzantine General's problem.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=249)** So this consensus mechanism is based on that problem.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=253)** So a group of nodes elect a delegate.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=256)** The speaker randomly is chosen from those delegates and creates a hash.
>
> **[4:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=260)** And as long as two thirds of the delegates agree with the hash, then the block is added.
>
> **[4:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=265)** So it's just a modification.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=267)** So regardless of the type of consensus mechanism that's used, basically what happens is a four step process.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=275)** Number one, a request is submitted to a blockchain node.
>
> **[4:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=279)** When the node... a request is basically a transaction.
>
> **[4:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=282)** When the node has enough transactions and data, it organizes that into a block and creates a header.
>
> **[4:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=289)** The block is then submitted to the miners for consensus, at least with proof of work.
>
> **[4:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=295)** If it's accepted, then each node validates the block and adds it to their local blockchain copy.
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=301)** Once again, how do the nodes validate a block?
>
> **[5:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=304)** All they do is they run the hash on the block and the knots, and if it matches what is expected, it's a valid block.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (9)
> **CLI Commands:** node (9), make (1)
> **Definitions:** is a  (3), in other words (1), is called (1)
> **Analogies:** just like (1), kind of like (1)
> **Versions:** 50.000001 (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** select the (1)
> **Speakers:** - blockchain (1)

#### [Public vs. private blockchains](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=0)** - Throughout this course, we're going to be talking about public blockchains, but that's not the only type of blockchains out there.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=7)** There's really a couple of different types, main types.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=10)** There are public blockchains and private blockchains, and sometimes the public blockchains are called permissionless blockchains, where the private blockchains are called permissioned.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=21)** Basically the difference between the two is in a public or permissionless [[Blockchain]], anybody can download the blockchain and participate as a node.
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=30)** There's no governing authority that says you can't.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=33)** So anybody can participate.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=35)** Anybody can see the data.
>
> **[0:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=37)** All the nodes can freely access all of the blockchain data without restriction and all of the data is shared and available to all.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=46)** So that means that if you don't encrypt the data in the block, everybody can see it.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=51)** On the other side of the coin, there is the private or permissioned blockchain.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=56)** This is what you see normally for enterprise blockchains or even consortium blockchains, which may be a blockchain that's shared among a few members.
>
> **[1:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=65)** The difference is that only authorized nodes can access the blockchain.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=70)** So in this case, there is some governing authority that says, yes, you can connect.
>
> **[1:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=75)** No, you cannot.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=77)** The difference is that that gives the governing authority the opportunity to determine who can see data and they can implement access control.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=87)** So it's a totally different type of approach and different environment, but be aware that there are the two different types.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=93)** Again, we're going to focus on a public blockchain.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=98)** Now, once we implement our type of blockchain, which ours will be public and nodes can participate, there are actually different types of nodes.
>
> **[1:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=106)** There are full nodes that basically pulled down and control or manage an entire copy of the blockchain.
>
> **[1:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=114)** In some cases, there can be a lot of data, gigs and gigs of data.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=120)** What happens though, if you want to interact with the blockchain, let's say on your home laptop or your phone, or some other lightweight device, and you really don't have to have all the blockchain there.
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=133)** You just want to be able to interact with the latest part.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=136)** Well, in that case, may be you can become a lightweight node.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=139)** A lightweight node is a node that is a participant in the blockchain network, but only downloads the latest or the most recent blocks.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=150)** And that way, if you need data, you can actually go back and get an older block 'cause sometimes in order to validate a current transaction you need to go back to a previous block that fed this transaction, but you only grabbed the old blocks if you need them.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=163)** It's not where you have to have gigs of storage space for the blockchain.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=168)** So in most cases, you'll either be a full node or a lightweight node.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=172)** You get to choose how much of the blockchain you actually need on your own devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (14)
> **CLI Commands:** node (6)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** download the (1)
> **Warnings:** be aware (1)
> **Speakers:** - throughout (1)

#### [Distributed processing and blockchain solutions](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=0)** - To better understand how important [[Blockchain]] technology is, let's take a quick look at how we got here.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=7)** What kind of problems blockchain technology can solve for us?
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=12)** First off, blockchain technology is based on the concept of solving distributed processing issues.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=19)** So what is distributed processing?
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=21)** Distributed processing is taking the original approach to applications like a host-based system.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=28)** You had one big mainframe and just connect with terminals.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=31)** And what if we split that off into different entities?
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=36)** So the first generation was client server.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=40)** Client server distributed processing basically says that the client does most of the work, but the server stores and manages the shared data.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=47)** So the idea was to split things across, to make it more efficient.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=51)** Sometimes that works, sometimes it doesn't.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=54)** Then we moved to three-tier architecture where the client connects to a server to get content.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=61)** The server gets the data from a database on a third server.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=64)** So you've basically got two servers and one client.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=67)** Example, that would be a website.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=69)** When you hit a website, you're running code on a web server, and it's probably getting data from a data server.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=76)** If you extend that, the next generation would be n-tier.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=79)** We call this n-tier because it's not just three tier, maybe four tier or whatever.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=84)** And n-tier architecture is where you have a client that connects to perhaps a web server that may connect to an application server that then connects to a database server.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=94)** So you've got multiple servers going on here and you're sharing processing and they're communicating with one another.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=101)** Then we move ahead to the next type or next generation, which would be peer to peer.
>
> **[1:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=106)** So this is not where you have a client and a server, where you have some sort of some centralized server situation.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=113)** You've got multiple peers that share information and share processing.
>
> **[1:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=118)** So there are lots of examples of peer to peer, where the nodes on the network are all equal.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=124)** And you'll see this more often than not within organizations, but there are examples of peer-to-peer networks that are personal types of networks.
>
> **[2:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=135)** So what are the problems we run into?
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=136)** 'Cause it sounds like we've got lots of examples of distributed processing out there already.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=141)** The problems kind of boil down to four main issues.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=144)** Number one, how do I launch remote processes from one machine to run a process on another machine?
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=152)** Secondly, how do I communicate between these remote processes?
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=157)** Then how do I store data among different locations and make sure that they're the same.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=163)** And lastly, how do I just get multiple computers to work together and play nice.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=168)** Each of these problems have been studied individually and sometimes together, and they've been addressed using other mechanisms.
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=176)** I'm going to show you that blockchain is the first one to solve all of the problems together.
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=181)** But there are other solutions.
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=183)** For example, launching remote processes, you can use remote procedure call or remote method invocation.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=189)** If you want to communicate between remote processes, inter-process communications been around for a long time.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=196)** So we know how to do that.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=198)** Storing one version of data in multiple locations is probably the hardest nut to crack.
>
> **[3:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=203)** It's more of the most difficult issues that we encounter in distributed processing.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=208)** The idea is it's very difficult to keep data in sync if it lives in multiple locations.
>
> **[3:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=215)** We want to make sure that clients are not colliding.
>
> **[3:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=218)** In other words, they're not trying to update the same copy of the data and that whatever copy is updated is properly replicated or what happens.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=227)** We have two clients on two different servers updating the same record.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=230)** How do we decide which one's right?
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=233)** So it's very sensitive to any type of update timing.
>
> **[3:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=236)** And that again is one of the hardest issues to resolve and getting multiple computers to work together.
>
> **[4:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=242)** Well, there is temporary dominance, various types of consensus mechanisms, but it has to be implemented at the grassroots level.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=251)** So why do I tell you all this?
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=253)** Because blockchain brings solutions to all these issues together.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=258)** We can launch remote processes 'cause every node is actually going to be running the same code.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=263)** We can communicate through this consensus mechanism.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=267)** We have built in communication, which there's a lot more to it than just consensus, but we do have the nodes communicating as peer-to-peer nodes.
>
> **[4:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=277)** We also have solved the problem with storing one version of data in multiple computers.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=284)** That's the whole idea of consensus, allowing modification to the blockchain and finally getting multiple computers to work together.
>
> **[4:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=291)** Once again, a result of implementing consensus.
>
> **[4:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=295)** Hopefully you have a better understanding what blockchain is all about.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=300)** We've talked about what it is, how blockchain works and how you actually build a blockchain together.
>
> **[5:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=307)** So far, we've talked about blockchain in generic terms.
>
> **[5:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=311)** in the next chapter, we're going to drill down and look at a theorem, a specific blockchain implementation and what we're going to focus on for the [[Representational State Transfer (REST)|rest]] of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (11), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3), node (1)
> **Definitions:** we call this (1), in other words (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - to (1)


## Skills Covered

- Blockchain
- Ethereum

## Path Context

### In [[Build an Ethereum Blockchain App]]
**1 of 11** | [[Building an Ethereum Blockchain App- 2 Introduction to Ethereum]] →

### In [[Become a Blockchain Developer]]
**1 of 14** | [[Building an Ethereum Blockchain App- 2 Introduction to Ethereum]] →

## Appears In

- [[Build an Ethereum Blockchain App]]
- [[Become a Blockchain Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 7 Smart Contracts]] — Blockchain, Ethereum

---

[↑ Back to top](#)