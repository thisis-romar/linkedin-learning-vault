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
created: 2026-05-03
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
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=1)** - Hi there and welcome to the [[Ethereum]] [[Blockchain]] Apps course. I'm Michael Solomon and when I'm not on camera, I'm a professor, an author, and an industry consultant, and I'm starting to work more and more in database environments that include blockchain applications. It's a great technology and it's one that I think pretty much everybody needs to learn a little bit about. So you've heard a lot of hype about Ethereum and blockchain, but this course will take you from zero to hero in almost no time. We're going to cover what is the blockchain? We're going to start at the very ground level. Then we're going to introduce Ethereum and talk about why you really want to use Ethereum. It's a second generation and we'll define what first and second generation means and why the second generation is really, really cool. Then we're going to get into the Ethereum ecosystem and cover development tools. We're going to have you actually set up your own development environment so you can write your own code. You'll also need to create your own Ethereum wallet, and we'll step you through exactly how to do that. You do that so that you can manage your own [[Cryptocurrency]] and other crypto assets. From there, you're all ready to really dig into Ethereum. We're going to basically teach you about [[Smart Contracts]] and dApps and we're going to be using [[Solidity]], which is the most popular language that we use in Ethereum to develop these smart contracts. We'll take you through the [[Software Development]] life cycle so you'll know how you do things and what process. We're going to talk about how to design smart contracts, then how to write your own code and in smart contracts. How to test them on a test blockchain,
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/introduction-to-blockchain?u=76281980&t=94)** and then how to deploy them, and then what do you do after you deploy? How do you maintain your app? We're going to cover everything from the beginning to the very, very end. What you'll learn by the end of the course is how to actually roll up your sleeves and get your hands dirty. We're going to cover a supply chain application, and you're going to learn how to actually write it and deploy it as a dApp on the blockchain.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=0)** - The best place to start when learning about [[Blockchain]] is the very beginning. So we're going to start at a very foundational level. We're going to talk about the history of blockchain, what blockchain is and what blockchain can do. So if you're already very comfortable with all the blockchain concepts, you might want to skip to the next section or the next chapter. But if you're new to it or you want to have any questions answered, this is the place to start. Blockchain is really all about trust and determining and deciding who you want to trust. So there are three things you need to know. Number one, people like to exchange things of value. We see this in transactions all over the place in real life. You basically want to perhaps trade one item of value for another, or maybe you're going to use some type of currency to pay for something, so of course you render currency and you get something back, either a product or a service. We also know that this value exchange relies on trust, and it basically means that you have to trust that when you pay for something, you're getting what you pay for. I mean, you've always heard the term, you get what you pay for, but sometimes it's not the case if you don't trust the person or the entity that you're exchanging this value with. So you have to be able to trust. So things such as, if we want to order from, let's say [amazon.com](https://amazon.com), do you trust that you're going to get what you paid for? Well, yeah, you do, because of the reputation. So there's a whole trust value in the basis
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=94)** of any type of transaction that you encounter. Also, you want to make sure that you have a fair trade. And that's one of the things we do with comparative shopping, especially online. We want to look to make sure that we're getting the best price for whatever goods we're purchasing or services in that matter. This trust often depends on a third party. I mentioned [amazon.com](https://amazon.com). When we purchase something from [amazon.com](https://amazon.com), we're probably purchasing a product from some other vendor or from some other producer. And we don't have to trust that producer, if we trust Amazon, because we think that, oh, if I purchase something from Amazon, I have the guarantees that if I don't like it, I can return it and I can also provide feedback and I can look at other people's feedback. So we build this concept of trust so that we don't worry about giving our money to someone we don't trust if we have built that trust. In many cases, we have some sort of middleman. Anytime that we engage in financial transactions, we're probably interacting with a bank of some sort. You think again, online purchases, we normally are going to pay for those purchases using some sort of card, whether it's a debit card or a credit card. Regardless, that card represents money that we may have and we can render that card for [[Microsoft Products|products]] or services because we trust the vendor and the vendor trusts that card. They don't trust us, they trust the card. So we had this concept of middlemen that kind of handshake on both sides
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=189)** so that we had the trust so that we can engage in financial transactions. But as I mentioned earlier, there's a service fee in there and it costs more, or makes the transactions cost a lot more in some cases. And there's more room for human error and obviously for corruption. Well, if there are trust issues, and in order to solve the trust issues, we have to pay somebody in the middle. Isn't there a better way? Can't we save money and still find a way to trust whom we're interacting with? The answer is yes. And that's where blockchain fits a really interesting niche. It helps us solve these third-party trust issues. Now, blockchain's been around for a little while, since 2008. In fact, in 2008, Satoshi Nakamoto introduced a very interesting paper that introduced the first blockchain and implementation of a blockchain using [[Cryptocurrency]], and it's basically Bitcoin. Now, Nakamoto's not the real name. We don't really know who the author is, or perhaps a group of authors, but this paper was proposed that showed us how we can use this blockchain concept to implement a cryptocurrency. What it does, it allows people to conduct business without trade relations obstacles. In other words, it allows us to exchange money, cryptocurrency, with entities we don't trust, or maybe not even know, but we trust the process. So it was initially all about a new type of electronic currency exchange called cryptocurrency,
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/the-beginning-of-blockchain?u=76281980&t=285)** but it's grown to be much more than that. So let's take a look at what else blockchain can do.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=0)** - We know that [[Blockchain]] can help us enact currency exchange, but what does that actually mean? A traditional currency exchange means we have some type of currency and we exchange that for something else. Now it could be a different type of currency. Like we're going from us dollars to Canadian dollars or some other currency, or we can take our currency and exchange that for a product or a service. Either way, we're exchanging something of value. And in most cases, we need a third party to inter mediate or to be the mediator in between the two parties. So we need a bank, we need a credit card company or something, or maybe a government entity or some other middleman to guarantee that currency's value that will make sure that whatever we're exchanging maintains the value and we maintain the trust on both sides. So again, it's all about trust. So blockchain technology was originally introduced to support a new type of currency. Now, digital currency has been around for a while, a lot longer than blockchain, but the new type of digital currency, called [[Cryptocurrency]], is new, and that's what Bitcoin actually implemented. So the idea behind it is, there's no third party that's actually needed. So let's take a look at what cryptocurrency actually is. If you've ever heard of blockchain, you've probably heard of Bitcoin. Now they're not the same thing.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=92)** Blockchain and Bitcoin are different. Blockchain is a technology of how we do something. Bitcoin is one implementation of what we can do with the blockchain technology. So keep them separate. Bitcoin is just one implementation of blockchain. We're going to focus on what blockchain actually is. A digital or electronic currency is kind of like the digital representation of your money in a bank account. So if you ask yourself, how much money do I have today? That's kind of a dangerous question to ask. If you go online, you go to your bank's website, you'll see a number there. Now that represents some currency. Some fiat currency, fiat currency is kind of like a real currency that's backed by some regulatory or government agency. So we have a number of dollars, hopefully it's multiple dollars that you would have in your bank account, but really it's a number. If you go to a cryptocurrency exchange and you have funded an account, you may also see a number, but it's going to be in a different base, a different type of currency, it'll be cryptocurrency. So all it is is a digital representation of how much your money based on what type of currency it's in, is actually worth. Now, there's a lot more details than that, but we're going to keep it at a high level at this point. We'll dig down a little bit further. One of the differences between fiat currency and cryptocurrency is that the cryptocurrency is called crypto because it uses [[Cryptography]]
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/currency-and-cryptocurrency?u=76281980&t=188)** to ensure the integrity of all the data out there. Because remember, we don't trust other people that are handling our data. So one of the features of blockchain is that we use cryptography to ensure that integrity in a trustless environment. We use things called hashes. We're going to talk about that later, don't worry about it. It's actually pretty easy once you dig down into it, but we use hashing as one of the cryptographic mechanisms to make sure that everything is fair and honest, even in an environment in which we lack trust. Now, one last thing, be aware that when we mention cryptography, that does not always mean encryption. encryption is only one piece of cryptography. So we're talking about the bigger picture here. We're going to peel this back like an onion, one layer at a time, so don't worry, we're not going to dive in too deep, too quickly. We're going to make it fun to learn more about the cryptography basis of blockchain and how it all fits together to be a really, really cool technology. All right, so basically, this is all just a fancy way to say that blockchain is a secure way to handle transactions in a trustless environment. All right, so that's a high level view of what blockchain is kind of sort of. In the next episode, I'm going to give you an example scenario to demonstrate why we might use blockchain to help understand better, before we dive deep into how the technology actually works.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=0)** - In the last episode, you learned that [[Blockchain]] was initially created to exchange currency, but it can do a lot more than that. Let's start our path toward learning more about blockchain by mapping a real-life example to what blockchain may be able to do for us. Let's take a look at a service organization. Let's keep it really, really simple. How about mowing lawns? All right, so you've got a young, enterprising person who wants to go out and mow lawns, but then how do they get paid? And on the other side, if you want to hire someone to mow your lawn, how do you pay that person? Chances are, you're not going to be able to hand out a credit card and be able to swipe after the work is done, so what do you do? Customers want to be able to offer payment, and the vendors, the lawn mower, wants to be able to accept that payment. So that's a great example of how blockchain may help. So the problems involve both sides. And again, you may want to be able to pay cash, but then cash is always dangerous. What happens if let's say you're working during the day, and that's the time of day that the person who mows your lawn is able to come and mow it. Do you put cash in an envelope and stick it under your front porch or on the mat? Okay, you could do that, but if somebody swipes it, it's gone and who's the wiser? What about a check? Do you want to leave a personal check? Maybe not. And even though you write personal checks, will the person who moves the lawn accept it? Maybe, maybe not.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=94)** So there's lots of issues in exchanging payment with strangers. Okay, on the other side, if you're mowing the lawn, what types of payment will you accept? Of course cash is great, but again, there's problems with the person who's paying you may not want to use cash. And if you want to set up your own process of being able to accept credit cards, you need a merchant account, you've got to sign up for a service, and it's easier these days, but again, it's not perfect. So what's the solution? The blockchain. Blockchain technology will make it possible for both sides to easily transfer funds when the work is done without trusting one another, and that's the whole idea. So blockchain provides various features that really help encourage transactions. And in other words, it just supports commerce. It gives us value without trust. That means that we can exchange a service or product, such as mowing a lawn, and payment without having to trust one another. We can also eliminate those middlemen, so we don't need to have that merchant account, we don't have to sign up for any service so that we can swipe credit cards because those cost money. So if we eliminate middlemen, we eliminate, or at least drastically reduce those service charges that the middlemen typically charge. And we also increase efficiency because it's point to point, we have producer and the consumer exchange funds directly without having to go through other parties. So it's win-win for everyone.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=187)** Additional features include complete transaction history. Remember, that on the blockchain, once you put something on the blockchain it stays there and it makes it really, really easy to go back and look at transaction history. Why is this important? Well, from the lawn mower's standpoint, you can look back at payment history. How many times have you mown a certain person's lawn, or how many lawns have you mown in this last month? So it gives you lots of good information. On the other side, you could go back and say, if Fred is going to mow your lawn, you can go back and see, has Fred been doing this for very long, have other people hired Fred to mow the lawn as well? And you get a history of the person that you're interacting with on both sides. Also, we get resilience through replication. That's a big term but what that basically means is that the blockchain is not stored in one location. It's stored lots of different places. So if we had, let's say a spreadsheet of all the work that we've done, it's hard to share that spreadsheet with a lot of places, and chances are, it's going to be stored in probably one place or a couple places. And if something bad happens, let's say ransomware encrypts it so that he can't get a hold of it, or if there's a [[Hardware]] failure, or for whatever reason, the data goes away, it's hard to get back. With blockchain, there's lots of copies, and so we get this resilience. It's not just stored in one or two locations. And then lastly, there's transparency. Transparency kind of goes back to the complete transaction history. It means that in a public blockchain,
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/why-use-the-blockchain?u=76281980&t=281)** which we're going to be talking about predominantly throughout this whole course, the data is all out there for everyone to see. There's no hiding of data, kind of, yes, you can encrypt it, we'll get back to that a little bit later, but the data is all there. So it's easy to trace transactions and figure out what's been going on. Since most blockchains that we're going to be focused on in this course are public, as long as you have the credentials to access something, you can see any data that you want. Now that you have a better idea as to why we might want to use blockchain, let's look at how blockchain actually works. It's important to know the how so we can implement our solutions when we have the why questions. Once you have a firm grasp on how general blockchain works, then we're ready to start digging into a specific, very cool implementation of blockchain called [[Ethereum]], from which we're going to talk about predominantly in chapter two.

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
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=1)** - [[Blockchain]] technology is all about adding data in such a way that we can trust data, but it's really all about data. Yes, we use transactions, but let's dig down and talk about data a little bit more. In traditional applications, we store data in a data store. It could be a flat file, it could be lots of other things, we typically think of of things as spreadsheets or [[Databases]]. In any of those data repositories, support four main operations, and they're called the CRUD operations. That means we can create new records or create data, we can read the data back that we've already created and stored, we can also update the data, and that's very important, and of course, part of update is to delete or to get rid of it. So those four operations are called the CRUD operations. Now, think of an [[Microsoft Excel|Excel]] spreadsheet. You create a brand new Excel spreadsheet, and you've got nothing there. So the first thing you do is you enter data into cells, well, that's a create data. And you realize, oops, made a mistake, I want to come back and I can go into a cell and I can change it. Well, that's the update operation. And if you decide, you want to get rid of it, you can just delete the whole spreadsheet,, or a row, or a column, or whatever you want, that's delete. So that shows us that we can make all of these changes and store it, so that the next time we open up our spreadsheet, it's back to the way that we left it. So we have all four of those operations. Now, blockchain is different. Blockchain doesn't support all of those operations because in order to have multiple copies
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=95)** of the blockchain spread across lots of different locations, and we want this integrity to make sure that the history is always there, the only two operations that blockchain support are add and read. Wait, what about update and delete? Sorry, can't do it in blockchain. Once you add data to the end of this blockchain, it's always going to be there, you can't change it, you can't get rid of it. So what happens if you add data and you realize, whoops, my data's changed. It could be an error, or it could just be that the data has been updated. What that means is that at that point, you have to add data to the very end of the blockchain. So you really have updated data, and that's kind of a pain, isn't it? So if you have data that changes several times, you've got three different copies of it or multiple copies, but that's the beauty of blockchain 'cause now you have a record of when and where the data actually changed and what the old versions used to be. So you have automatic history and auditing capability. So if we look at the blockchain, we can think of it as like one long ledger. If we go back to a spreadsheet, it's kind of like that, where each block, or each transaction in a block is like one row. And that's a simplification, but that's a good way to look at it. Ledgers have been around for a long time. In fact, if you know anything about [[Relational Databases]], a relational database is really kind of like a spreadsheet, like a big ledger, in the way that it's logically stores data. But if you look back even before computers, we've known about ledgers for a long time.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=190)** For example, you remember the Play a Christmas Carol, or the story, A Christmas Carol? Well, Bob Cratchit is often seen leaning over his ledger of accounts. Now, not sure what the Dickens the [[Representational State Transfer (REST)|rest]] of the story is about, but I do remember that ledger. So that's the idea of a way of recording, accounting information or really information of any type you create these ledgers. And instead of marking through and changing them, if you keep adding to the end of it, you have an auditable view of your data with full history. And that way, you can always determine how data got to be the way it is today. And when you can determine the provenance or the background of that data, you can trust it's authenticity. Let's take a step back, and let's imagine what this might look like in real life. Let's go back to our lawnmower analogy. Remember, you've got somebody who wants to mow lawns, and they're looking for somebody to actually mow the lawns and pay them for that. So basically what if we stored these lawn mower transactions, which is effectively saying, I mowed your lawn on this date, you paid me, we have a payer, we have a payee. So we keep this information and we put it on the blockchain. So here are three transactions. There's one for June 1st, another one for June 2nd, and another for June 3rd. So he's pretty busy, mowing one lawn a day, maybe he can do more, but this is what we're going to put on the blockchain. We can pretend that each one of these transactions is a transaction in a block, or let's just keep it simple. Let's make every transaction a separate block of information
>
> **[4:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-data-and-blocks?u=76281980&t=287)** on the blockchain. This is an oversimplification of the way that it really works, but that's okay. We'll get into greater detail later. On June 1st, he cut Jenna Anderson's lawn, and then that transaction was added to the blockchain. On June 2nd, another lawn was cut. And on June 3rd, there's another transaction. So we've got three separate transactions each in separate blocks on our blockchain. And every transaction after that, keeps getting added, and added, and added to the end of the blockchain. So the blockchain gets longer, and longer, and longer. And remember, once something is on the blockchain, it's always going to be there. Blockchain is referred to as being immutable, which it kind of sort of really is, but it's effectively immutable. We'll talk about what that actually means. But the idea is that once a block gets put on the blockchain, it's there forever, you can't change it, or if you do, everybody knows it's been changed. So it's not going to change without you knowing about it. We'll talk about what that really means in the next episode.

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
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=1)** - Now you understand how data is handled on the [[Blockchain]], let's talk a little bit more about the immutability property. So, here's where the magic happens. How can I confirm that the data has never changed? After all, we hear about hackers breaking into secure computers and accessing and changing data all the time. And sometimes actually even deleting it, or encrypting it to where you can't ever get to it again. Let's pretend that I'm a bad lawnmower guy and I want to go back and change the transaction history. I want to pretend that Jenna didn't pay me for the last job and I want to get paid again. That's the double spin problem. Well, the beauty of that is that blockchain was designed to address the double spin problem. All right so, let's try deleting that record. I know I said you just can't delete anything on the blockchain, but let's see why. First of all, you have to understand that the data on the blockchain is stored on multiple nodes. Now, a node is really any device or computer that stores blockchain data and is connected to the network, we just refer to them as nodes. So when we use the term server or node, typically, it's probably referring to about the same thing. So, in this case, we're going to keep it really simple. Let's say that the blockchain is stored on two servers. That means that we have two servers that each have an identical copy of the blockchain. So, here's my transaction history stored on both nodes. Secondly, you need to understand that the nodes have to agree before anything is changed on the blockchain.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-immutability?u=76281980&t=94)** All right, let's say I try to get into server one and delete Jenna's transaction. Remember, I'm the bad lawnmower guy. The second server is going to double-check it's copy of the blockchain against server one. But once it sees there's a difference, it's going to sound the alarm and say, "Whoa, no, not going to do that, server one's blockchain "is marked as invalid and is no longer accepted. "It's server two's blockchain "that is the correct blockchain." Essentially, server two kicks server one's blockchain out of the party, but there's a problem here. How do we know that server two is right? Did server one actually delete a block, or did server two add a block? Maybe I'm the bad lawnmower guy, and I never mowed Jenna's lawn in the first place. I just claimed to mow the lawn. How do we know who's right? Aha, that's where consensus comes into play. Let's take a look at blockchain consensus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (14)
> **CLI Commands:** node (2)
> **Definitions:** means that (1)
> **Speakers:** - now (1)

#### [Blockchain consensus](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=0)** - Remember that in a [[Blockchain]] environment, there's a lot of spinning plates, several things we need to keep in mind. Number one, we can only add data and of course read it. But the big deal is, we can only change the blockchain by adding new blocks and nobody's in charge. So how do we do that, when is it okay to add new blocks? Well, that's where consensus comes in. Blockchain is very democratic. It means that a majority of the nodes have to agree to allow new blocks to be added. Nodes use a consensus mechanism. In other words, just a set of rules that they agree to abide by because no one node has more authority than any other node. So how do they reach this consensus and agree? So how do I know that server one deleted something and server two didn't just add something? Well, we really can't agree if it's just a, he said, she said kind of environment, because who do we trust, server one or server two? We don't know, that's why we need at least one more server. So we need at least three servers in there so that we can agree. In that point, we have to have more than half of the servers agree to make a decision. So what happens there is we follow these consensus rules and they use those rules to determine who agrees with who. So in this case we have server one saying I'm right. Server two says I'm right and server three then follows the rules and says, no, you know what?
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-consensus?u=76281980&t=95)** Server two is right. So two is two thirds of the whole network, which is greater than half. And that's how we have consensus. Anytime a majority agrees, that becomes the truth of the blockchain.

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
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=1)** - So now you have a handle on a few things, [[Blockchain]] related. Number one, data on the blockchain can only be added, and added and added and added and added. And read. You can't do anything else with it. Number two, you can't change any data on the blockchain, which means it's essentially immutable. Now, technically you can change it, but it's really, really, really easy to figure that out and it invalidates the blockchain, which means it's just no longer in use. And number three, it's immutable because there are multiple nodes that have to agree on any changes, and it's very easy for those nodes to detect any unauthorized changes. All right. So let's start back with that lawn mowing transaction and pair it down to just the money changing hands. In reality, on real blockchain applications, you're probably going to be storing more data than just the transaction, but let's keep it simple. Julie paid me $40 to mow her lawn, that's a transaction. It includes an amount, $40, a source, Julie is paying me, the target. So we've got three pieces in play. Blockchain, again, can store lots more information, but this is a simple transaction. Each person has to have an account from where the money is being drawn and to provide a place for the money to go. So we have a source account and a target account. Each account has an address. An address is kind of like a bank account.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/building-the-blockchain-story?u=76281980&t=95)** We're going to go into more detail later. Each block consists of multiple transactions and each transaction can have more details than you see here. Pretty much anything from my lawn mowing business transactions, to literally anything you can put in a database, can be stored inside the blockchain. As you've probably realized, the blockchain can contain lots of information and it just keeps getting bigger and bigger and bigger, or longer and longer and longer, and taking up more space. So how are these nodes able to determine when a block has been changed and validate the integrity of the entire blockchain? We use something called a hash to do just that. Now, I'm going to discuss what hashes are all about in the next episode, and then we're going to put everything together, so you'll have a clear picture of how the blockchain actually is a chain and not just a bunch of blocks, how we create these hashes and the links between the chains, and who actually goes through all the effort to create those hashes, why is it hard to do and why would they choose to do that? Well, we're going to go into all those details in the next episode.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=0)** - So let's talk about hashes. A hash is basically a one-way mathematical function that's very easy to calculate, but very difficult to reverse. It maps input to a specific type of output. And again, one way, easy, backwards, no. Let's think about, like, coffee. You take coffee, you have beans, you get really nice coffee beans that you want to grind and then brew into your own morning cup of coffee. Well, it's really easy to grind those coffee beans to create the ground coffee that you then brew, percolate, whatever you do with it. But it's really, really hard and next to impossible to take those coffee grounds and reassemble them back to make coffee beans. It's kind of a, grinding is a one-way function. It goes one way and that's it. Now, theoretically, it would be possible. If you want to spend enough time and effort and you have enough patience to take each one of those grind, ground little pieces of coffee and glue them back together and make beans. But, my gosh, that's going to take forever. So again, it's a one-way function, that's easy one way, very hard the other way. That's what a hash is. So here's what hashing algorithm really may look like. Let's take a very, very simple hashing algorithm. Again, this is not what [[Blockchain]] uses. This is what no one would really use, but it demonstrates what's going on under the covers. Let's assume that we have a string. We have this character value. Let's just use the [[Microsoft Word|word]] "hello".
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=93)** Well, how do we represent "hello" in some way that we can do some math on it? First off we have to represent each character as some number. Well, fortunately there's a standard table that does that for us. We'll use the ASCII code. Computers don't store characters. They store numbers. The ASCII code is a way of relating numbers to every character that you can print, and actually non-printable characters as well. It really stands for the American Standard Code for Information Interchange, but don't worry about that, it's just a table. It means that letters such as A have specific values with a number representation. So let's assume a real world example. We're going to take a string called, let's just say "hello". We look at our ASCII table and we find out that H has the value of 104. E has a value of 101. So we find the values for each letter in our string. And our hash function, again, very simple hashing function. We're just going to add them all up. So using our hashing function, we say that we can represent the string "hello" as the value 532. 532 represents "hello". And it's kind of difficult to look at 532 and then back that out and figure out what string it represents. It's not all that difficult for such a simple hashing algorithm, but again, you can see it's a little more difficult than just simply adding the numbers up. However, with simple [[Algorithms]],
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=187)** you run into collisions. For example, what if we changed our string a little bit? We change the first letter to an F and the middle letters from L's to M's. Now we have "femmo". Yeah, it doesn't mean anything, but it's another string. If we add up the ASCII values of this string, it's also 532. That's called a collision. So a good hashing algorithm is one in which it's fast to calculate, nearly impossible to reverse, and creates very few collisions. That means that we don't have very many source or inputs that will result in the same output. All right, so two things to know for hashes. Number one, today's hashes, the ones we're going to be using, of course, in blockchain, and the ones that are in use all over the place are very complex and they create unique outputs for whatever the input is given to them. Yes, it's possible to create collisions, but a very, very small number of collisions would occur. They're very, very hard to reverse, but very easy to calculate in the forward manner. That's why they're so valuable. Fast to calculate and determine, if the hash is different from a hash value you stored, it means that the source is different. So let's take a look at an online example that really shows us how these hashes work in real life. We're going to go to Anders Brownworth's website. He has put up a really nice little demo that steps us through all the components
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/hashes?u=76281980&t=281)** of how to build a blockchain. So if we navigate to [anders.com](https://anders.com), we're going to move down to blockchain slash hash. And here we have an example of a very popular hashing algorithm called SHA-256, or SHA-256. So what happens is we enter data, and that data, every time we type a character, the hash will be updated here at the bottom automatically. So we can see that the output of a SHA 256 hashing algorithm is actually 64 characters. We won't worry about how it gets to that point. But notice when I click here, the hash is the hash of a blank string. And as soon as I start typing the first character, notice that the hash changes. So I'll type "hello". And notice with every character it changes. And also it's pretty fast. So it doesn't take long at all. And if I were to keep on typing any values here, notice that every time I type a character, the hash changes. And if I want to cut something out, same thing. So you see how easy it is to actually calculate hashes. In fact, we calculated a new 64 character hash value every time I typed a new character, and you can type as fast as you want to. Very easy to do, but you can clearly see, if I gave you this hash, would you be able to figure out that that represents "hello"? No, that's going to be pretty hard to do. So that's basically what hashes are all about.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=0)** - In the last episode, you learned about hashes and hashing functions. But you may wonder, what does a hash have to do with a [[Blockchain]]? Well, actually, hashes make blockchains possible. A blockchain is a chain of blocks. You know, a block is a collection of transactions. But how are they linked together? They're linked together using the output of the hash function. The way it works is when you start a brand new blockchain, you actually start with one block, and it's called the Genesis block. The Genesis block isn't linked to anything because it's the only one there. Then you add the next block which, by the way, the Genesis block is block zero. In computer science, we start things at zero. We don't start counting at one. So the next block is actually block one. How do I make it a chain? What I do is I take the hash value of block zero, and I store that in block one. Now, in real blockchain, we're going to have very long hash values, like 64 characters long. But in our example, let's keep it a little simpler. We're going to just use three-character hashes. So for every block, every block is going to contain the hash value of the previous block, and that is the link between the two that actually creates the blockchain. Let's take a look at what this might actually look like. So we look at a block. You have the block number.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=92)** Remember, the Genesis block is block zero. Then you have the current block hash value, which is the hashed value of the current block. So you just take all the data of your current block and you paste it into that hashing algorithm and you get a value back, and we store that here. Then for most blocks, you're going to have the previous block's hash that creates the chain or the link. Of course, for the Genesis block, there is no previous block's hash. And then we have the body, which is the list of all the transactions, all the transfers of [[Cryptocurrency]] value from one address to another. Once you start adding blocks, each block would then contain the hash of the previous block, which is effectively the link that makes that chain. So let's take a look. Block 11's hash, the value of a13, gets copied to block 12, linking the two blocks. That means that any changes to any block breaks the chain. Why is that? Think it through now. Let's assume that block 11's hash is a13. Now we create block 12, and we copy that hash over to block 12. But what happens if the bad lawnmower goes back, and he changes block 11's data? Well, that's going to change block 11's hash. You remember, when we changed the data, we typed the data into the hash function. It changed the value of the hash.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/what-is-a-chain-of-blocks?u=76281980&t=184)** So now we have a problem. Block 11 has a different hash, but block 12 is storing the old hash value for block 11, and they don't match. That breaks the chain. And because of the way that every block's hash points to the previous, it actually breaks all the other blocks that come later. But we'll see that a little bit later. So the key to blockchain integrity is finding the right hash value that makes verifying blocks easy, but spoofing blocks, or in other words, changing them and making them wrong data, very hard to do.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=0)** - You may be noticing what seems to be a little bit of a problem. If creating a hash or calculating a hash is so easy, then how can you use a hash to make spoofing hard? Because if anybody can calculate hashes, then wouldn't spoofing a block and creating a spoofed hash be easy? Well, yeah, it would be. However, what if we introduce another layer? In other words, we introduce a new value and we tack that along or onto the actual block data such that we have certain requirements as to what the output looks like. What we need to do is introduce something new. So in [[Blockchain]], what we do is we add a new number and we add that to the data. So that with this new number plus the block data, we create a new hash value. But then, we're going to add rules onto that new hash value such that it has to meet certain criteria and we call that the complexity requirement. So what does the complexity requirement really mean? Well, in the Bitcoin world, the complexity requirement means that the resulting hash value has to start with a certain number of zeros. Well currently, it I believe is 19 zeros. That's really, really hard to find. So what is this other number I talk about? That number is called a nonce. It is a number used only once. That's why it's called a nonce. It's a random number that's used together with the block data
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=95)** that when you create a hash, creates a new hash value. In the process of finding the right nonce to meet the complexity requirements, makes creating this valid block situation very, very difficult. Let's take a look at what this all means. It'll be a little bit clearer. We're going to go back to [andrews.com](https://andrews.com) and we're going to look at a block. In this case, we have block number one and we have a default nonce. Notice at the very bottom, for demo purposes, this website is designed so that we have a complexity requirement of four leading zeros because if we went to 19 zeros, it would take a long, long time. So we're going to stick with four leading zeros. Now, I'm going to start typing hello. As soon as I type the [[Microsoft Word|word]], the letter H, notice something has happened. Since we calculate a new hash value every time we change our input data, we now take the nonce value plus the H and calculate a new hash value. But look, the first characters of the hash value are not four zeros. That means it is an invalid hash value. And in fact, that's why the whole screen turns a light pink. It tells us it's no longer valid. So now, if I keep typing, notice the hash value changes and none of the hash values are four zeros. So we have a problem. Now I've got to go try to find a nonce. So what I do is I try nonce one.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=189)** Nope. That wasn't it. Let's try nonce two. Nope, that's not it. Cause notice, what I'm looking for at the bottom here, is I'm looking for a hash value based on my nonce and my data that leads up with four leading zeros. So I'll try three. Nope. Four. So what I'm going to do is I'm going to run through thousands and thousands of examples or I can just click on the Mine button. If I click the Mine button, what the program does is iteratively count from one up to a value that results in a hash value with four leading zeros. So I would have had to have typed in one all the way through 85,869 to find the proper nonce that when pasted together with the string hello, gives us a hash value that starts with four zeros. If that seems overly complicated, don't get overwhelmed. All of this is automated. That just gives you an idea of how hard it is creating a or finding the right nonce to use for a given set of data with four leading zeros is hard. You know, 85,000 different values. What about five zeros? It's way harder. Six zeros is way harder but now, Bitcoin is using 19 zeros. That's extremely difficult and takes a lot of time and a lot of energy to actually create. So blockchain is data stored in blocks and the blocks are linked together. They're linked together through these hash values
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/finding-the-nonce?u=76281980&t=284)** so that if any block changes, it's easy to figure out that that block has been changed and all the subsequent blocks are invalid. Now we're going to dig more into this later but be aware that hashes make blockchain work.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=0)** - In the previous episode, you learned that it's very difficult to find that right nonce. and the process you probably already realized by clicking on that little button called mine, the process of finding the right nonce is called mining. That was pretty easy for us, only took a few seconds, because we had a very simple complexity requirement, only four leading zeros. In real life, 19, 20 leading zeros is coming up before too much longer. So the idea of that many leading zeros means that mining takes a lot of effort, and you have to expend a lot of energy and resources towards finding that one perfect nonce. Bitcoin uses leading zeros. Other implementations, other blockchains, use different complexity requirements. But the idea is it's very resource intensive. That means that you have to have lots of energy. It takes a lot of electricity to run the rigs that actually will try to solve these solutions. And you have multiple miners or nodes that are all competing to do this at the same time. In fact, there are certain geographical locations that tend to be better suited toward mining. Since you're going to create a lot of heat and use a lot of electricity, miners like areas that have a lower outside temperature and cheap electricity. In fact, Iceland has very reasonably priced electricity and a lower temperature.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=93)** And what we're finding is Iceland actually commits more energy to mining than they do using electricity in other areas such as lighting your home. It's kind of interesting, in that one area of the world, there's a lot of mining going on. Even in the United States, in some of the northern areas that are very cool, you'll find that so much energy or so much heat is produced from mining rigs, that some people, especially personal miners, will actually take the output from their mining rigs and pump it back into their house during the winter months to heat their homes. So it's really crazy how much energy is expended. And one of the concerns is that that's just not sustainable over the longterm. So you may ask yourself the question, what sense is there in actually buying these rigs that only does one thing? It basically finds hash values. It uses a lot of electricity and creates a lot of heat that you've got to do something with. Why would anybody do that? Well, the answer is that when these miners compete to find the right nonce, which creates the right hash, that satisfies the complexity requirements, the first one that finds it gets a little bit of a reward and those rewards can start adding up. They're rewarded in [[Cryptocurrency]]. So when the cryptocurrency has a high value, the miners are willing to invest lots of money to compete to earn that money back. And when you're really hardcore into mining, you can actually create a situation where it's profitable for you to mine cryptocurrency.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/blockchain-mining?u=76281980&t=188)** That's why there's a lot of miners out there. And a lot of them are actually making some pretty good money.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=0)** - [[Blockchain]] is all about integrity and trust. So you don't have integrity if any node can just add a block at any time. So you have to agree, by you, I mean, all the nodes have to agree on what the valid blockchain is and which blocks are valid. So all the nodes have to agree on which new blocks can be added. They do that through a consensus mechanism. They come to consensus because blockchain is purely democratic. In other words, when anything over 50% of the nodes agree, that becomes the rule. So all you have to have is 50.000001 number of the nodes to agree that a block should be added and all the block, all the nodes have to agree to add that block. So the downside of that is that it's possible to attack a blockchain. If you can somehow take over and control just over 50% of the node, you can do what you want, but that's very, very difficult. Let's not worry about the attacks right now. Let's focus on consensus. And how did these nodes actually agree with one another and come to consensus? The most common consensus mechanism that is in use today is called proof of work. You've actually already seen that. That's where the nodes, or the miners, compete to solve a mathematical puzzle. The first node to solve that gets a little reward and adds the new block to the blockchain.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=94)** Now let's stop for just a second here. Remember we talked earlier in an earlier episode about getting rid of the middlemen and getting rid of these extra charges. The service fees that middlemen tend to charge are far, far higher than this tiny little charge or reward that miners get. So if we compare the two, even though you have to pay a little bit to get your transaction put on the blockchain, it's very small compared to what the middlemen may charge. So it's much, much better situation. After the miner decides or finds the right value and submits it to the blockchain, the miner gets a reward, and then all the other nodes will validate that that block is valid. How do they do that? The way that they validate that is just calculate the hash. Again, that's easy to do. But proof of work is not the only consensus mechanism out there, there are others. Proof of stake is another popular one. It will likely replace proof of work in some blockchains in the near future. It provides consistency, just like proof of work, but requires far less computing power. The way that it works, basically, is that every node submits a bet. The size of the bet, among other criteria, is used to select the winner. The selection is randomized, so the richest node doesn't always win. So proof of stake is a way of providing input, still making it a democratic environment, but you don't have to expend so much work. Others include delegated proof of stake,
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=188)** which is a modified version of proof of stake. The candidate nodes are selected kind of like proof of stake. Plus a few other nodes are voted in, even those that don't submit bets. It makes it more fair and is less likely that richer nodes will win more often. Another example of a consensus mechanism is the delegated Byzantine fault tolerance. Well, that's a mouthful. This consensus mechanism is based on the Byzantine General's problem. That's an old classic problem in which you have multiple generals, each commanding an army surrounding a city and determining when to attack. The problem is if they all attack together, then they will succeed. But if they don't attack at the same time, they will be defeated. So how do you send the message to all the different generals to make sure that everyone attacks, because what if your messenger gets intercepted and the message has changed? There's a lot more to it than that, but that's the basic gist of the Byzantine General's problem. So this consensus mechanism is based on that problem. So a group of nodes elect a delegate. The speaker randomly is chosen from those delegates and creates a hash. And as long as two thirds of the delegates agree with the hash, then the block is added. So it's just a modification. So regardless of the type of consensus mechanism that's used, basically what happens is a four step process. Number one, a request is submitted to a blockchain node. When the node...
>
> **[4:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/arriving-at-consensus?u=76281980&t=280)** a request is basically a transaction. When the node has enough transactions and data, it organizes that into a block and creates a header. The block is then submitted to the miners for consensus, at least with proof of work. If it's accepted, then each node validates the block and adds it to their local blockchain copy. Once again, how do the nodes validate a block? All they do is they run the hash on the block and the knots, and if it matches what is expected, it's a valid block.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=0)** - Throughout this course, we're going to be talking about public blockchains, but that's not the only type of blockchains out there. There's really a couple of different types, main types. There are public blockchains and private blockchains, and sometimes the public blockchains are called permissionless blockchains, where the private blockchains are called permissioned. Basically the difference between the two is in a public or permissionless [[Blockchain]], anybody can download the blockchain and participate as a node. There's no governing authority that says you can't. So anybody can participate. Anybody can see the data. All the nodes can freely access all of the blockchain data without restriction and all of the data is shared and available to all. So that means that if you don't encrypt the data in the block, everybody can see it. On the other side of the coin, there is the private or permissioned blockchain. This is what you see normally for enterprise blockchains or even consortium blockchains, which may be a blockchain that's shared among a few members. The difference is that only authorized nodes can access the blockchain. So in this case, there is some governing authority that says, yes, you can connect. No, you cannot. The difference is that that gives the governing authority the opportunity to determine who can see data and they can implement access control. So it's a totally different type of approach and different environment, but be aware that there are the two different types.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/public-vs-private-blockchains?u=76281980&t=93)** Again, we're going to focus on a public blockchain. Now, once we implement our type of blockchain, which ours will be public and nodes can participate, there are actually different types of nodes. There are full nodes that basically pulled down and control or manage an entire copy of the blockchain. In some cases, there can be a lot of data, gigs and gigs of data. What happens though, if you want to interact with the blockchain, let's say on your home laptop or your phone, or some other lightweight device, and you really don't have to have all the blockchain there. You just want to be able to interact with the latest part. Well, in that case, may be you can become a lightweight node. A lightweight node is a node that is a participant in the blockchain network, but only downloads the latest or the most recent blocks. And that way, if you need data, you can actually go back and get an older block 'cause sometimes in order to validate a current transaction you need to go back to a previous block that fed this transaction, but you only grabbed the old blocks if you need them. It's not where you have to have gigs of storage space for the blockchain. So in most cases, you'll either be a full node or a lightweight node. You get to choose how much of the blockchain you actually need on your own devices.

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
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=0)** - To better understand how important [[Blockchain]] technology is, let's take a quick look at how we got here. What kind of problems blockchain technology can solve for us? First off, blockchain technology is based on the concept of solving distributed processing issues. So what is distributed processing? Distributed processing is taking the original approach to applications like a host-based system. You had one big mainframe and just connect with terminals. And what if we split that off into different entities? So the first generation was client server. Client server distributed processing basically says that the client does most of the work, but the server stores and manages the shared data. So the idea was to split things across, to make it more efficient. Sometimes that works, sometimes it doesn't. Then we moved to three-tier architecture where the client connects to a server to get content. The server gets the data from a database on a third server. So you've basically got two servers and one client. Example, that would be a website. When you hit a website, you're running code on a web server, and it's probably getting data from a data server. If you extend that, the next generation would be n-tier. We call this n-tier because it's not just three tier, maybe four tier or whatever. And n-tier architecture is where you have a client that connects to perhaps a web server that may connect to an application server that then connects to a database server.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=94)** So you've got multiple servers going on here and you're sharing processing and they're communicating with one another. Then we move ahead to the next type or next generation, which would be peer to peer. So this is not where you have a client and a server, where you have some sort of some centralized server situation. You've got multiple peers that share information and share processing. So there are lots of examples of peer to peer, where the nodes on the network are all equal. And you'll see this more often than not within organizations, but there are examples of peer-to-peer networks that are personal types of networks. So what are the problems we run into? 'Cause it sounds like we've got lots of examples of distributed processing out there already. The problems kind of boil down to four main issues. Number one, how do I launch remote processes from one machine to run a process on another machine? Secondly, how do I communicate between these remote processes? Then how do I store data among different locations and make sure that they're the same. And lastly, how do I just get multiple computers to work together and play nice. Each of these problems have been studied individually and sometimes together, and they've been addressed using other mechanisms. I'm going to show you that blockchain is the first one to solve all of the problems together. But there are other solutions. For example, launching remote processes, you can use remote procedure call
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=187)** or remote method invocation. If you want to communicate between remote processes, inter-process communications been around for a long time. So we know how to do that. Storing one version of data in multiple locations is probably the hardest nut to crack. It's more of the most difficult issues that we encounter in distributed processing. The idea is it's very difficult to keep data in sync if it lives in multiple locations. We want to make sure that clients are not colliding. In other words, they're not trying to update the same copy of the data and that whatever copy is updated is properly replicated or what happens. We have two clients on two different servers updating the same record. How do we decide which one's right? So it's very sensitive to any type of update timing. And that again is one of the hardest issues to resolve and getting multiple computers to work together. Well, there is temporary dominance, various types of consensus mechanisms, but it has to be implemented at the grassroots level. So why do I tell you all this? Because blockchain brings solutions to all these issues together. We can launch remote processes 'cause every node is actually going to be running the same code. We can communicate through this consensus mechanism. We have built in communication, which there's a lot more to it than just consensus, but we do have the nodes communicating as peer-to-peer nodes. We also have solved the problem with storing
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-1-introduction-to-blockchain/distributed-processing-and-blockchain-solutions?u=76281980&t=281)** one version of data in multiple computers. That's the whole idea of consensus, allowing modification to the blockchain and finally getting multiple computers to work together. Once again, a result of implementing consensus. Hopefully you have a better understanding what blockchain is all about. We've talked about what it is, how blockchain works and how you actually build a blockchain together. So far, we've talked about blockchain in generic terms. in the next chapter, we're going to drill down and look at a theorem, a specific blockchain implementation and what we're going to focus on for the [[Representational State Transfer (REST)|rest]] of this course.

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