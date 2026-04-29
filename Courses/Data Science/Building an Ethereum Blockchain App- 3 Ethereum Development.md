---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-3-ethereum-development
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development"
duration_minutes: 49
duration: 49m
level: Intermediate
updated: 8/10/2021
learners: 5294
skills:
  - Blockchain
  - Ethereum
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHeqO1Rq1rPFw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628267859787?e=2147483647&amp;v=beta&amp;t=z8DLY_8sweUcEfibHAtGcYuE5mUS9qNPDFuRQloHvvg"
linkedin_topic: Data Science
learning_paths:
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 2 Introduction to Ethereum]]'
  - '[[Building an Ethereum Blockchain App- 2 Introduction to Ethereum]]'
next_courses:
  - '[[Building an Ethereum Blockchain App- 4 Ethereum Development Tools]]'
  - '[[Building an Ethereum Blockchain App- 4 Ethereum Development Tools]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":3,"total":11,"prev":"Building an Ethereum Blockchain App- 2 Introduction to Ethereum","next":"Building an Ethereum Blockchain App- 4 Ethereum Development Tools"},{"path":"Become a Blockchain Developer","position":3,"total":14,"prev":"Building an Ethereum Blockchain App- 2 Introduction to Ethereum","next":"Building an Ethereum Blockchain App- 4 Ethereum Development Tools"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/blockchain
  - skill/ethereum
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%203%20Ethereum%20Development.md)

![Building an Ethereum Blockchain App: 3 Ethereum Development](https://media.licdn.com/dms/image/v2/C560DAQHeqO1Rq1rPFw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628267859787?e=2147483647&amp;v=beta&amp;t=z8DLY_8sweUcEfibHAtGcYuE5mUS9qNPDFuRQloHvvg)

# Building an Ethereum Blockchain App: 3 Ethereum Development

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, third in a series of eleven, introduces you to everything you need to write and test smart contract code in Ethereum. Instructor Michael Solomon discusses the parts of the Ethereum blockchain, such as of decentralized ap

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development) | 49m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. The Ethereum Ecosystem and Development Life Cycle**](#1-the-ethereum-ecosystem-and-development-life-cycle) (10 videos)
  - Parts of the Ethereum blockchain
  - Smart contracts
  - Smart contract languages
  - What are virtual machines?
  - The Ethereum Virtual Machine (EVM)
  - Fueling your code with gas
  - Tools for Ethereum SDLC
  - Blockchain client
  - Writing and testing your code, part 1
  - Writing and testing your code, part 2

### 1. The Ethereum Ecosystem and Development Life Cycle

> [↑ Back to Table of Contents](#table-of-contents)

#### Parts of the Ethereum blockchain
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=1)** - Now it's time to really get our hands dirty with Ethereum.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=4)** Let's take a look at what's underneath the covers.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=7)** What does the Blockchain actually look like?
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=10)** How are the blocks structured and how are they really put together?
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=13)** We've talked about it at a high level.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=15)** So we're going to dig a little deeper.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=17)** Now you can really get in the weeds here.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=19)** So I'm not going to spend a lot of time explaining every specific term and every specific field, but we're going to touch on the ones that are most important and give you an overview of what the blocks really, really look like.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=32)** So let's start with them some terminology.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=35)** First off, we're going to be dealing with dApps, decentralized applications.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=40)** dApps are the apps that we use to interact with the Blockchain.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=46)** They're decentralized because they run on the EVM, the Ethereum Virtual Machine, and they're not designed to run as centralized apps.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=55)** So we're going to have to keep the decentralized component in mind as we start developing these apps.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=61)** All right, so a Blockchain is made up of blocks.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=64)** A block is a primary component of the Blockchain, and it stores all the transactions and the smart contract code.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=73)** Now remember the way that blocks get put on the Blockchain is that miners will mine the blocks.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=80)** In other words, the miners take these transactions, add them to blocks, and then determine what the right result for the proof of work consensus mechanism.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=92)** Basically what that means is, they have to find the right value to satisfy the hash value.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=99)** And you remember what that value is?
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=101)** It's called a nonce.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=104)** The nonce is a number used once.
>
> **[1:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=106)** So the whole process of mining is finding the right number, the nonce, so that when you take that nonce or the rest of the data and the block, and you hash that, the number satisfies the complexity requirements.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=124)** Now Ethereum uses a different complexity requirement than the simple example that I showed you earlier, which was the number of leading zeros.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=131)** Ethereum does a little differently, but it's the same concept.
>
> **[2:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=135)** So every approximately 14, 15 seconds, a new block gets added to the Ethereum Blockchain.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=142)** So that's pretty fast.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=143)** So that means that we have a lot of miners that are competing to add these blocks.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=149)** And it's very possible that more than one miner comes back with a solution at the same time or nearly the same time.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=157)** The first one wins.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=159)** But Ethereum is a little bit nicer and fairer because you don't want to say we have one winner and everybody else loses.
>
> **[2:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=167)** What the Ethereum does, is they said, the first block that is submitted by a miner, the first miner wins and gets the reward.
>
> **[2:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=175)** But what if there's somebody else, another miner comes right behind that one a second later and solves the block?
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=181)** Maybe it's a different nonce. It could be the same nonce.
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=183)** That block is a valid block, but it's not the first valid block.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=187)** We call that an uncle or ommer block.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=191)** The uncle, it's a relation to the actual block that are the parent block, but it's not valid.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=199)** However, we don't want to basically say, "Hey, you're a second late.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=202)** "You lose. You get nothing."
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=204)** So what happens is they get a discounted reward.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=207)** It's less than being the first one, but it still rewards them and keeps them incentivized to come back and try to mind more blocks.
>
> **[3:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=215)** The blocks also live for a period of time on the Blockchain, but they're not part of the main chain.
>
> **[3:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=222)** So the idea is that incentivizes miners to keep working, even though they may not win every time.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=227)** After six uncle blocks, there's no more reward.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=230)** That's enough time. We don't need any more uncle blocks.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=233)** So if you ever hear the term ommer or uncle, that's what it refers to.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=237)** It's a block that successfully mined, but it wasn't the one that actually got there first and it gets put onto the Blockchain.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=244)** All right.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=245)** So now if we look inside a block, we have two main sections.
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=248)** We have the header, and then we have the body or the list of transactions.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=254)** The header of the block describes the attributes of the entire block.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=258)** So let's take a look at a few of the attributes or the fields that we'll find inside a block.
>
> **[4:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=264)** First off, notice we have the parentHash.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=267)** That is the previous hash, is the hash of the previous block that actually creates the chain.
>
> **[4:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=273)** Then we had the nonce.
>
> **[4:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=274)** That's what the miners actually figure out the right nonce.
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=278)** There's also a timestamp, which keeps track of exactly when the block was mined and created.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=284)** Then there's the ommerHash, where we talked about uncle block, ommer.
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=288)** That's the other term for it.
>
> **[4:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=290)** That's a hash for the uncle blocks for this particular block.
>
> **[4:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=294)** Then there's several other fields.
>
> **[4:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=295)** I don't want to get too much into the weeds here.
>
> **[4:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=298)** We have beneficiary.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=300)** We have a logsBloom, which is a Bloom filter.
>
> **[5:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=303)** Bloom filters are cool data structures, way more complex when we have time to really get into right here.
>
> **[5:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=308)** We also have a difficulty parameter, which shows the level of difficulty of the network at the time this block was created.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=317)** And then other things.
>
> **[5:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=318)** We also have gasLimit and gasUsed.
>
> **[5:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=321)** We're going to talk about that.
>
> **[5:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=322)** That's how we pay for access for the Blockchain.
>
> **[5:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=325)** And then we have several routes which are actually tree pointers.
>
> **[5:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=329)** These point to the actual rest of the block.
>
> **[5:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=332)** In other words, it points to the individual transactions and some other stuff.
>
> **[5:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=338)** I know I'm kind of waving my hands here over some of the details.
>
> **[5:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=341)** But the idea is that the block header contains information that describes the block as a whole, and then we go down into the actual tree structures where we have the list of the transactions that make up each block.
>
> **[5:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=354)** What actually is in each transaction.
>
> **[5:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=358)** So a block transaction has its own content.
>
> **[6:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=361)** First off, there's a digital signature, which associates that transaction with the owner.
>
> **[6:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=367)** So that's when you're transferring funds, that is the from account, that's where the transaction actually originated.
>
> **[6:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=375)** Then there's a nonce, also, for each transaction.
>
> **[6:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=378)** It works a little differently, but it's used in the creation of a unique transaction ID.
>
> **[6:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=384)** Then there's gasLimit and gasPrice.
>
> **[6:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=386)** Once again, that's a concept we're going to dig into a little bit later.
>
> **[6:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=390)** But I will tell you now that Ethereum implemented an interesting feature called gas so that you basically have to fuel each transaction, and every time we process data in a transaction, it uses a little gas.
>
> **[6:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=406)** And eventually, you might run out of gas.
>
> **[6:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=408)** That may be a problem, but really it's not.
>
> **[6:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=411)** It actually keeps us from getting stuck in infinite loops because at some point you run out of gas and you stop.
>
> **[6:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=416)** Okay, we're going to come back and talk about that later, but it's a very neat feature.
>
> **[7:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=421)** Then we have the to.
>
> **[7:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=422)** So when you're transferring funds, you have a value amount, how much you're transferring of cryptocurrency from the signature or whoever it comes from, and then it has to be transferred to someone else, and that's the to value.
>
> **[7:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=435)** And then finally there may be data associated with the transaction that may be over and above just the physical transfer.
>
> **[7:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=443)** All right.
>
> **[7:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=444)** So those are some of the fields that we're going to find in every transaction.
>
> **[7:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=450)** So let's take a look at some real transactions.
>
> **[7:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=453)** Let's see how all this stuff may fit together.
>
> **[7:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=455)** One of the easiest places to go is [etherscan.io](https://etherscan.io).
>
> **[7:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=459)** So open up your web browser, and let's take a look at [etherscan.io](https://etherscan.io).
>
> **[7:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=464)** So here's [etherscan.io](https://etherscan.io).
>
> **[7:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=466)** This is a webpage that basically peaks at the real life Ethereum network.
>
> **[7:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=475)** So the first thing we see is Latest block.
>
> **[7:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=477)** Well, actually there's lots of summary information.
>
> **[7:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=478)** But let's go down and look at Latest Blocks.
>
> **[8:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=480)** So we see that there was a block that was added 14 seconds ago, 15 seconds ago, of course, you're going to keep going up and up.
>
> **[8:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=487)** If I click on the block ID, it shows us this information about the block.
>
> **[8:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=492)** So it gives us the Block Height, which is the block ID.
>
> **[8:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=495)** Timestamp.
>
> **[8:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=496)** There's 0 transaction and 0 contract internal transactions in the block, okay?
>
> **[8:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=500)** So this is a different type of block.
>
> **[8:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=502)** It shows the address of who mined the block and what the reward was.
>
> **[8:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=507)** So the reward was to 2 Ether.
>
> **[8:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=508)** It's pretty good.
>
> **[8:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=510)** Here's a difficulty value.
>
> **[8:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=511)** So these are all the fields that we just talked about.
>
> **[8:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=514)** I can click to see more, and there's even more information shows us the various hashes.
>
> **[8:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=519)** All right, let's go back to the header here, actually, the top level.
>
> **[8:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=524)** And let's look at another block.
>
> **[8:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=526)** Here, let's just pick an arbitrary other block here.
>
> **[8:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=530)** And this one, okay. This has 131 transactions.
>
> **[8:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=532)** That's what I wanted to see.
>
> **[8:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=534)** So let's click on the Transactions.
>
> **[8:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=536)** These are the transactions that are contained in this block that I just chose.
>
> **[9:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=541)** And of course there's 131 of them.
>
> **[9:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=543)** And if we pick any transaction we want, this shows us the details of that transaction.
>
> **[9:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=549)** It was a success.
>
> **[9:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=550)** There's the hash.
>
> **[9:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=551)** This is the block it belongs to.
>
> **[9:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=553)** Here's the timestamp.
>
> **[9:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=555)** And there's our from and to, the signature where it came from, and that's who it went to, and it transferred 0.0006 Ethers.
>
> **[9:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=564)** So 12 cents was transferred from one account to another.
>
> **[9:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=568)** The transaction fee was in this case 6 cents, which is actually kind of a high transaction fee for the low transfer.
>
> **[9:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=575)** So we have to dig in to see why that was the case.
>
> **[9:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=578)** But we see the transaction fee and the actual value.
>
> **[9:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=581)** And there's more information.
>
> **[9:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=582)** If we click More, we have that gas information, which we're going to come back and talk about a little bit later.
>
> **[9:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=588)** There's the nonce.
>
> **[9:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=589)** And here's our input data, 0x.
>
> **[9:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=592)** And this could have a lot more data in it.
>
> **[9:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=595)** This was a simple value transfer, but that this transaction involved data would see it here.
>
> **[10:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=603)** So that gives us a little view of actual data on the Ethereum blockchain.
>
> **[10:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=608)** We've looked at the blocks, the block header, and a list of transactions.
>
> **[10:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=612)** And that's basically what we see in the real live Blockchain.
>
> **[10:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=617)** So now you've kind of dug into what's really going on.
>
> **[10:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/parts-of-the-ethereum-blockchain?u=76281980&t=620)** Now, let's continue our discussion and take a look at some of the other details of how a Ethereum works under the covers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), else, (2), from, (2), case. (1), continue (1)
> **Definitions:** is a  (7), in other words (2), means that (1), refers to (1)
> **Code Identifiers:** dapps (2), gaslimit (2), parenthash (1), ommerhash (1), logsbloom (1)
> **CLI Commands:** find (3), make (1)
> **URLs:** [etherscan.io](https://etherscan.io) (3)
> **Cross-References:** we talked about (1), go back to (1)
> **UI Navigation:** click on (2)
> **Env Vars:** evm (1)

#### Smart contracts
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=0)** - So in the previous episode, we looked at the live Ethereum blockchain, and there's lots of data there.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=7)** And we saw that more blocks were being added every few seconds.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=11)** But how do those blocks actually get there?
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=13)** Well, we know how the blocks get there, but how did the transactions get submitted to the network?
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=19)** Because we talked about the fact that miners take submitted transactions and add them into blocks, but how did they get there?
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=25)** Well, they get there through Smart Contracts.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=28)** The only way that you can actually submit a transaction to the Ethereum Network is that a Smart Contract has to run that you invoke a function, and then you do something, you put data onto the blockchain, but it all happens through Smart Contracts.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=47)** Smart Contracts remember they run, it's code that runs on the EVM on the Ethereum Virtual Machine.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=54)** And they basically enforce rules when exchanging things of value.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=58)** They not only just enforce the rules, but they actually make the exchange happen.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=62)** All transactions on the Ethereum blockchain must resolve the same way on all nodes.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=70)** That means that the Smart Contract code, which actually allows you to change values on the blockchain or actually add values to the blockchain must come out the same way on all nodes.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=83)** That means it's deterministic, Smart Contracts are the programs that execute to carry these transactions out.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=90)** They actually create the transactions.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=92)** It's the only way to access the Ethereum blockchain.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=95)** Now you can physically write to the data that's stored on your disc.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=100)** If you are a local node, or if you're an Ethereum node and you have a local copy, but of course if you change anything, you invalidate your copy of the blockchain.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=108)** So the only way to legally write to the blockchain is to go through Smart Contracts.
>
> **[1:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=114)** In addition to the fact that we have deterministic Smart Contract code, one of the beautiful aspects of Ethereum is that the Smart Contracts are Turing complete.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=125)** Now, what that means basically is that given enough resources, Smart Contract code can calculate anything.
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=133)** Theoretically, you can do anything in software that you can do in the physical world.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=138)** Now that may seem like kind of a big concept, but previous iterations of blockchain had scripting languages that were not Turing complete.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=149)** In other words, you can only do certain things there and it kind of ran out of steam at some point.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=153)** In Ethereum, you can write entire applications as Smart Contracts if you really want to.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=159)** An example of something that you may want to do on a smart or in a Smart Contract is to create escrow accounts and handle the escrow payments.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=168)** Now we think of escrow as being something we interact with when we buy a home or buy a real estate, what happens is when you buy a house, you typically set up a monthly payment.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=179)** And if you have, let's say taxes you have to pay and insurance you have to pay.
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=183)** While you have a mortgage, your annual tax bill estimated, and your annual insurance bill is chopped up into 12 or 12 pieces.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=195)** And your monthly payment includes these 12 pieces.
>
> **[3:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=200)** So every month you're paying 1/12 of your insurance and you're paying 1/12 of your taxes, but that money doesn't go to the insurance company every month or to the government every month.
>
> **[3:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=210)** Instead it goes into an escrow account.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=212)** It's a holding account.
>
> **[3:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=213)** So that once a year, when your insurance is due, the money is transferred from your escrow account and it's paid to the insurance company.
>
> **[3:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=222)** Well, currently you have to have a middleman or middle person to do that for you.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=226)** You've got to have somebody to actually transfer the funds, but in Smart Contracts you can make that automatic.
>
> **[3:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=232)** Every month, you can just simply put 1/12 of your payment into a certain account, and then on a certain date, the Smart Contract would actually fire it and make the payment for you.
>
> **[4:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=242)** So you can automate lots and lots of things.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=244)** And any time you want to hold funds, escrow accounts are great ways to do that.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=249)** And again, you can do that automatically on the blockchain.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=252)** Smart Contracts provide access to the blockchain, but also give us governance and predictability since we know how the outcome is going to be the same on all nodes.
>
> **[4:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contracts?u=76281980&t=262)** So that's a very brief overview of what Smart Contracts are, but they're core to understanding and being able to interact with the Ethereum blockchain and what we're going to be doing in the next several sections here is we're actually going to be writing our own Smart Contract code to interact with the Ethereum.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), node (2)
> **Code Keywords:** function (1), let (1)
> **Cross-References:** we talked about (1), in the next (1)
> **Definitions:** means that (1), in other words (1)
> **Env Vars:** evm (1)
> **Prerequisites:** set up (1)
> **Speakers:** - so (1)

#### Smart contract languages
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=1)** - So, if you want to develop our own smart contracts, we have to learn what that means.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=5)** We know what smart contracts are, but how do you actually create them from scratch?
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=11)** Well, you basically write them in a specific language and that's a programming language.
>
> **[0:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=16)** Now, a programming language is really like another language that has vocabulary, it has syntax, and it has some the semantics.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=24)** In other words, it means things, and you actually use it to express what you want to have happen.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=31)** Think of it this way.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=32)** A programming language is kind of like a recipe.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=36)** So if you want to create a meal, you want to prepare a meal you probably start with a recipe.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=40)** The recipe includes ingredients, and step by step instructions of how you actually create the final output.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=49)** So, I've heard the term or heard the phrase.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=51)** If you can read, you can cook.
>
> **[0:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=53)** And the idea is that if you have a really good recipe and you just follow the instructions, you're going to get the food you want.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=59)** Yes, there's some technique there and there's some different ways you can write do it, but follow the steps with the right ingredients, and you're going to have the results you're looking for.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=69)** So, a programming language is kind of like a recipe or rather the software program that you create is a recipe for the computer.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=78)** You give it the input that you want.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=80)** You have data, and then you have functions or methods that are really the recipe instructions, and the computer follows the instructions.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=87)** So a well-written program or recipe gives you the proper results.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=93)** And just like the recipe, it uses specific language that the chef would understand such as dice.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=100)** If you just hear something like dice a potato.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=103)** Well, you got to have to understand how to do that, that means you have to take a really sharp knife, and you cut it in a certain way to end up with a certain little piece or cube of potatoes at the end.
>
> **[1:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=114)** So there's terminology that you have to know, but if you follow and you understand the vocabulary, then you're going to be able to create those results.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=124)** So, a programming language is really nothing more than just a set of instructions that a computer carries out to accomplish certain tasks.
>
> **[2:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=132)** So, knowing that what's the best language to use for Ethereum smart contracts?
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=138)** Well, there really is no best.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=141)** The best language for you is one that is familiar.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=145)** One that is capable of doing everything that you want.
>
> **[2:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=147)** And one that's available.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=149)** Some languages have costs associated with them, and it's not necessarily monetary cost, but maybe it's learning curve, or it's something that just really isn't very familiar to you.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=159)** You're used to one type of language, and another language just is foreign.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=164)** So, pick a language that makes the most sense for you.
>
> **[2:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=167)** And there's a long list of languages that you can use.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=170)** For example, you can use well, you could have used Mutan, which is an older language, it's been deprecated now.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=177)** So, you probably only see that if you use legacy smart contract software that came from early versions of Ethereum.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=186)** There's also LLL, which is very much like the language list.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=190)** So if you really like list, maybe LLL is something you want to look at.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=193)** Serpent is a newer language it's very similar to Python.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=198)** Python is one of my favorite go-to languages.
>
> **[3:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=200)** So if you're really into Python, serpent might be something you want to look at course, the names, you know, kind of the similar thing.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=206)** Bamboo is another newer language.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=209)** Viper, yet another newer language that focuses on simplicity and security.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=214)** So, security is important you may want to look at that one.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=217)** However, by far the most popular language that's used today, for Ethereum smart contract development is solidity.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=225)** It's very similar to Java script.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=227)** So if you know anything about JavaScript syntax, you're going to really find Solidity to be very familiar.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=233)** We've chosen to use Solidity.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/smart-contract-languages?u=76281980&t=235)** And now, we're going to learn more about what Solidity you can do for us as we develop our own smart contract code.

> [!info]- Semantic Content
>
> **Analogies:** kind of like (2), similar to (2), just like (1), such as (1), for example (1)
> **CLI Commands:** python (3), find (1)
> **Definitions:** is a  (2), in other words (1), is an  (1)
> **Env Vars:** lll (2)
> **Code Keywords:** for. (1)
> **Speakers:** - so (1)

#### What are virtual machines?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=1)** - You've already heard the term Ethereum Virtual Machine several times.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=4)** And we know that every Ethereum node runs an Ethereum Virtual Machine, the EVM.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=11)** And it is the EVM that execute smart contract code.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=15)** All right, so, we're talking about smart contracts and we know that we're going to run that in the context of the EVM.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=23)** But let's unpack that a little bit.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=24)** What does in the context mean?
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=27)** And what is a virtual machine to start with?
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=30)** Even before we look at the Ethereum Virtual Machine, what is a virtual machine?
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=34)** If we back up a little bit and look at physical machines, historically what would happen would be you would buy a computer, whether it's a big computer for an organization or if it's a little personal computer, but you would have a computer and you would load an operating system on that computer.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=52)** So your computer has internal physical components of the CPU, you've got your memory.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=58)** You have network interface cards or devices, and you've got storage devices.
>
> **[1:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=65)** So you've got all the basic components.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=67)** Then you lay the operating system on top of that.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=70)** The operating system is software that allows application code or application software to interact with the hardware.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=77)** So it sits between the two.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=79)** And then you install your applications.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=81)** You install Microsoft Office, you install your web browser, you install your favorite games and do all the fun stuff.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=88)** And that's how a computer works.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=91)** So, if you have a Windows machine, and then you want to do something like run a Linux application, or you want to play around with Linux, it's difficult to do because you already have Windows on your box.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=104)** However, what you could do is you could start using a virtual machine.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=109)** So you've got a Windows machine.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=110)** It has its own operating system and hardware.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=113)** But then you can create virtual segments or virtual machines inside a physical machine.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=121)** So a virtual machine normally would run in the context of another virtual manager, such as VMware or VirtualBox or Hyper-V.
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=133)** So there's other virtualization managers that what they allow you to do is create this image or create this segment within your computer, that you can then load another operating system on.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=145)** So in the context of virtualization, it lets you run multiple operating systems within a single physical computer.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=156)** So the basic idea is it virtually allows you to create a computer within a physical computer.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=164)** And you can create multiples of these.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=166)** So you can launch a Linux virtual machine and a Windows virtual machine running side-by-side.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=172)** They are separate, but they all run on the same physical hardware.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=177)** So virtualization gives us the ability to appear to run multiple operating systems without having to buy multiple computers.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=186)** So why is virtualization so cool?
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=189)** Virtual machines allow us to use smaller number of computers and let them do more, so we don't have to invest as much money in hardware.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=198)** Like, if I want a Linux computer and a Windows computer, I don't have to buy two computers.
>
> **[3:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=203)** I buy one and I use virtualization to run virtual machines.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=208)** I can easily switch between operating systems or configurations.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=212)** In my line of work, I tend to have lots of virtual machines configured differently.
>
> **[3:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=218)** So I have one for a database consulting gig.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=221)** I have another one that may be the same operating system, but it's configured for a pen testing gig or other security gig.
>
> **[3:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=229)** So I can just launch these at will and I don't have to have different computers to do that.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=234)** Also, virtual machines make it really, really easy to roll back and undo the changes through the concept of snapshots.
>
> **[4:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=243)** One thing that I do for my students at the university level is when they run labs, I recommend that when you have a virtual machine, when you reach the end of a lab, take a snapshot, because if you get into the next lab and you totally mess up your environment, you can simply restore to the snapshot and start over very, very quickly.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=261)** Virtualization makes that possible.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=263)** Additionally, I can provision up or down depending on my needs.
>
> **[4:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=268)** In other words, if I'm running a business application, I may need three virtual servers, but as the load increases, I may need four or five virtual servers to run and support all the service requests that I have.
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=281)** And then I can kill the virtual machines if I don't need them all running.
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=285)** This could help with energy costs 'cause I'm being more of a good citizen and not using energy, running multiple servers, physical servers all the time.
>
> **[4:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=296)** I have a smaller footprint on the environment.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=300)** I'm using less energy and I'm saving money.
>
> **[5:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=303)** And I can also reduce overall IT acquisition and management costs because I don't have to buy and maintain as many physical servers that way.
>
> **[5:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=311)** And, the icing on the cake is that it is virtualization that makes cloud computing possible.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=317)** So everything you're doing in the cloud is you're running on virtual machines.
>
> **[5:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=321)** So that gives you a brief history of and explanation of what virtual machines are.
>
> **[5:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/what-are-virtual-machines?u=76281980&t=327)** Next we're going to see how a Ethereum uses this concept to implement it's blockchain.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1), switch (1)
> **Env Vars:** evm (3), cpu (1)
> **Prerequisites:** install (4)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** node (1), make (1)
> **Analogies:** such as (1)
> **Speakers:** - you (1)

#### The Ethereum Virtual Machine (EVM)
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=0)** - So now you know what virtual machines are.
>
> **[0:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=3)** Once again, they are virtual environments that have their own operating system and applications that run on shared physical hardware.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=12)** So how does that map to Ethereum?
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=15)** Ethereum uses its runtime as the Ethereum Virtual Machine.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=20)** What that means is that when you implement a node, in other words, you download and install the Ethereum software and become a node on Ethereum network, what happens is you're running a package or an application that implements the Ethereum Virtual Machine.
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=38)** So that's basically how the Ethereum Virtual Machine presents itself.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=42)** It is a software application that creates a closed environment and the smart contracts work and they run inside that environment.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=51)** The EVM is present on all nodes.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=54)** That's what makes a computer an Ethereum node is because you're running an EVM.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=60)** So it gets installed with Ethereum.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=62)** So whenever you download and install your own blockchain client, you actually are installing the EVM.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=69)** Now, it's important to understand that all EVM instances play by the same rules.
>
> **[1:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=74)** You can get EVMs in different languages.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=77)** You can download and install different types of packages that support different types of languages, but they all have to be compliant with the Ethereum standard, which means they play by the same rules on every node.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=92)** Any node that breaks the rules becomes a rogue node and they create a rogue blockchain.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=98)** If you remember, we talked about the fact that smart contract code is deterministic.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=103)** That means that smart contract code produces the same results on all nodes.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=108)** Well, it's the EVM that makes sure that the smart contract code executes exactly the same way.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=115)** So that's why they have to play by the same rules.
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=119)** Any EVM deviation is immediately evident by all the other nodes.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=123)** It's obvious because things get out of whack.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=125)** The hashes don't match anymore.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=127)** And it's clear who the offending party is.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=130)** Anytime we have an offending EVM, it'll create an invalid blockchain and that copy of the blockchain is no longer part of the network and it's basically the black sheep of the family at that point.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=142)** Why is it so important?
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=143)** Because the EVM provides smart contract execution which gives clients the only access to the Ethereum blockchain.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/the-ethereum-virtual-machine-evm?u=76281980&t=153)** That's why the EVM is so important.

> [!info]- Semantic Content
>
> **Env Vars:** evm (9)
> **CLI Commands:** node (6)
> **Definitions:** in other words (1), is a  (1), means that (1)
> **Prerequisites:** install (3)
> **Code Keywords:** implements (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - so (1)

#### Fueling your code with gas
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=0)** - One other aspect that's brand new to Ethereum is that of gas.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=5)** Gas is a cryptocurrency cost of accessing the blockchain.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=10)** So unlike legacy applications like database applications, you can't just read from or write to the blockchain for free.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=17)** There's a tiny little cost that goes with every transaction access.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=22)** You may ask why is that?
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=24)** It's twofold.
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=25)** Number one, it's used to incentivize people and organizations to store local copies of the blockchain and maybe even mine blockchain data, but also when you provide a limit of gas for each transaction, every time you access the blockchain, you use a little gas and eventually you run out of gas and that keeps you from getting into runaway infinite loops.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=48)** So it basically makes everybody more stable and avoids one process from overtaking the entire blockchain.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=55)** So it provides a little bit of a transaction fee, but it takes away from each transaction, which means that every transaction you submit, you got to pay a little bit to touch the blockchain.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=66)** So what you can do for each transaction is you can set a maximum amount that you're willing to pay.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=73)** This incentivizes developers to create efficient smart contracts.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=77)** Because if you say I'm only going to pay a certain amount of gas and smart contracts are kind of, they're not very conservative in their use of gas and you may get an iteration or two and you run out of gas, then your transactions are never going to complete.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=91)** You're going to get frustrated and you're going to do something else.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=94)** So smart contract developers have to always keep in mind this gas cost and they want to reduce the times that they actually touch the blockchain itself.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=105)** So that's going to change the way that we write our programs.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=108)** So it reduces malicious code and Denial-of-Service attacks, but it also increases this cost to access the blockchain.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=116)** So again, this is a big consideration when we start developing our applications.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=121)** So how does all this work?
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=123)** Basically, there are different components in figuring out the total gas cost.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=128)** First off, there's the amount of gas that's used, and then there's the gas price.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=134)** So if you're figuring out your total gas costs, you simply say, well, there's X number of units used, and I paid X number for each unit, you multiply those together and then you get your gas costs, just like in a real vehicle.
>
> **[2:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=146)** And the units we use are not gallons and dollars, or leaders and dollars, but it is Wei units.
>
> **[2:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=154)** W e i, Wei.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=155)** So one ether is equal to one quintillion Wei.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=161)** In other words, one with 18 zeros behind it.
>
> **[2:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=165)** So a Wei is really, really tiny segment of an ether.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=170)** So let's look at it this way.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=172)** Let's assume that we go back to a real example.
>
> **[2:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=175)** Let's assume that you are supposed to transport yourself and seven friends on a beach trip.
>
> **[3:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=180)** So you're going to the beach.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=182)** So you decide that you want to keep the gas costs, the total gas cost within a budget.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=188)** So you set the gas price that you're willing to pay and how much gas you expect to have to buy.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=194)** So there's the quantity of gas and the price.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=197)** Then you have to figure out whether to take two small cars or take the big suburban.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=202)** So then you've got to figure out, okay, which one makes more sense?
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=205)** The suburban is going to use more gas, but it may be cheaper in the long run than having two cars that are more fuel efficient.
>
> **[3:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=215)** But again, you have two cars to fuel up.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=217)** So again, which is going to be worse, you've got to do the math and figure it out.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=221)** What if you only have three people going instead of seven, well in that case you should probably use the smaller car, because you're going to save more on gas cost overall than taking the big suburban.
>
> **[3:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=232)** So small cars are kind of like simple transfers or simple data transfers in smart contract programming.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=239)** You use the small cars if you want to just do simple things, but you use the big transfers, like the suburban, when you have a lot of data to transfer back and forth.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=249)** So that's kind of an analogy depending on what you want to do and how many people you're transporting to the beach, tells you whether you use one big or one small car.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=258)** That kind of wraps up the whole concept of what gas is all about.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/fueling-your-code-with-gas?u=76281980&t=263)** We're always going to be thinking of gas when we start writing our smart contract code, because we have to pay every time we interact with the blockchain.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), else. (1)
> **Definitions:** is a  (2), means that (1), in other words (1)
> **Analogies:** just like (1), kind of like (1)
> **Cross-References:** go back to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - one (1)

#### Tools for Ethereum SDLC
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=1)** - So now we've laid the foundation and we're ready to move ahead.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=4)** The next step is to move forward and start developing our decentralized apps through smart contracts.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=11)** So we have to learn how to develop application code.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=15)** There is a specific set of steps that we go through.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=18)** And it's not that we're limited by these steps.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=20)** It's just the natural progression of developing an application.
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=25)** And it's called the software development life cycle, SDLC.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=28)** There's lots of different phases and ways to do describe it, but we're going to keep it really, really simple.
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=34)** Basically, you start off in the planning stage.
>
> **[0:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=37)** You don't just start writing code.
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=38)** You need to plan what you want to do first.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=41)** Then you move into the coding, the development.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=44)** That's where you're actually writing code in an editor that you're then going to compile and deploy.
>
> **[0:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=50)** But then once you write your code, you have to have a place to actually deploy it to.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=55)** So we first deploy it to a testing environment, which means we need some environment that's not the real mainnet, but it's a testing type of environment where we can see if our code actually works.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=67)** And then finally, we take our code and we deploy it to mainnet, to the live environment.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=73)** So in order to do all this, we need a set of tools in our toolbox.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=78)** So what do we need?
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=79)** Well first, we need blockchain client.
>
> **[1:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=82)** So what we're going to do is we're going to install an Ethereum of blockchain client so that we have our own EVM so that we can develop and run smart contracts locally.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=92)** After we write the code, we have to be able to test it in a local environment.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=96)** We want to test it in a development environment and then maybe even put it into a formal test environment for other people to test it.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=103)** So we've already talked about several different public test blockchains, but we probably want to have our own local test blockchain before we're ready to go to that level.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=113)** Well, another thing we have to be concerned about is taking our source code, which is the text that we write in an editor and converting it into bytecode that the EVM can execute.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=124)** For that, we need an Ethereum compiler, actually, we need a Solidity compiler.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=129)** So we want a compiler for the language we're writing our smart contract code in.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=134)** And of course, I keep talking about writing code.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=136)** Well, we need some sort of editor to do that.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=139)** We can use any source code editor, any text editor, but an integrated development environment makes life a lot easier.
>
> **[2:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=147)** And so that's what we'll use.
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/tools-for-ethereum-sdlc?u=76281980&t=148)** We'll use an IDE to write our smart contract code.

> [!info]- Semantic Content
>
> **Env Vars:** evm (2), sdlc (1), ide (1)
> **Code Keywords:** finally, (1), this, (1), public (1)
> **Exercise Files:** source code (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - so (1)

#### Blockchain client
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=0)** - The first component that we need to put in place as we build our Ethereum development environment is the blockchain client.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=8)** Now recall that a blockchain client is just a soft replication that makes a computer or a device a node on the Ethereum blockchain.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=18)** So it implements all of the rules and the standards that Ethereum puts forth and allows you to connect to the actual Ethereum network and then download some portion of the blockchain, either all of it or only pieces of the blockchain.
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=34)** So the client runs EVM or runs an EVM on a specific node.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=40)** The nodes can either be full nodes or light nodes.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=42)** A full node stores the entire blockchain.
>
> **[0:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=45)** So if you implement a full node, the first thing you're going to do is you're going to install the software and then when you fire it up, it connects to the network, and then it downloads the blockchain, and it's going to take a minute.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=56)** So it's going to take a little while and you're going to notice you're using a lot of disk space.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=60)** So make sure that you have the disk space and you can wait for that download to occur if you choose to go with a full node.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=67)** If you don't want a full node, you can be a light node.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=70)** A light node only stores a portion of the blockchain.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=73)** And normally it's only going to grab the latest few blocks and on demand as your smart contract code needs to access older blocks, it will pull those down on demand only when they're absolutely needed.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=86)** The different clients that are available are basically the same, they end up being the same thing.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=94)** In other words, they run the same code.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=95)** However, they're written in different languages.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=98)** So if you want to make changes or additions to the EVM, as long as you maintain the standards, you might want to choose a specific model or a specific version, so that it's in a language that you recognize or comfortable with.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=112)** Some of the options include Cpp-ethereum that's written in C++.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=117)** There's also Ethereumjs-lib, which is written in JavaScript.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=121)** There's Geth or go-Ethereum, which is written in a language Go.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=125)** That's actually what we're going to be using.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=127)** There's also Parity, which is written in Rust, the Rust language, and also Pyethapp, which is a Python Ethereum app.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/blockchain-client?u=76281980&t=136)** So it just depends on what language you're most comfortable with, but go to the website for each one, download the one you want, install it, fire it up, and now you are a node on the Ethereum network.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9), make (2), python (1)
> **Env Vars:** evm (3)
> **Definitions:** in other words (1), is a  (1)
> **Prerequisites:** install (2)
> **Code Keywords:** implements (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - the (1)

#### Writing and testing your code, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=1)** - Once you have your own Ethereum client installed.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=4)** by default, when you first fire it up, it's going to connect to the Ethereum blockchain, which is Mainnet, and download everything or part if you're a light node.
>
> **[0:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=14)** However, you never ever write smart contract code and deploy it directly to Mainnet.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=19)** You always want to test it locally first.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=22)** So even though we have this EVM that's connected to Mainnet, you want to detach that and connect it to something else.
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=30)** And that something else is a simulated blockchain.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=33)** So the idea is we need to also create our own local blockchain that we use for development and for initial testing.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=41)** Because again, you don't want to put anything out on Mainnet, on the live network, until you're sure that it's going to work the way that you want.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=49)** So traditional development, if you've ever done any traditional software development, you write and you test your code in a safe, simulated environment.
>
> **[0:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=57)** So we're going to do the same thing in Ethereum development.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=61)** So we want to be able to create development and testing blockchains, so that they simulate the live environment.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=70)** Now, when we have local blockchains, they are not going to be truly a live environment or exactly like the live environment, but it's going to be close.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=79)** Some of the options are going to be local, some are going to actually be out on a network that are shared with other users, but they're not truly live.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=88)** So you've got a wide range of choices here.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=91)** If you create a local development and test blockchain and then you connect your EVM to that blockchain, you have full control.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=98)** You can actually delete the whole blockchain and start over, which is great if you're developing code and you realize you did something wrong, you've created a lot of garbage data.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=107)** If it's a local blockchain, even though it's immutable, you can wipe the thing clean and start from scratch.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=113)** And once your code is working the way you want, then you deploy it out to a public test or the Mainnet.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=120)** Because that way you're not going to affect anyone else.
>
> **[2:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=122)** The next step of course is to deploy to something like a Ropsten test network.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=127)** Those are shared with other users and the data on it is, it's testing data, so it doesn't really matter.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=134)** But you don't have to pay any real money.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=136)** You get fake money to use to run on that network, and that's the whole idea.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=140)** So you want to make sure you get everything right and you're economizing your usage of cryptocurrency and gas before you go to a live net.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=149)** All right, so there's lots of examples here of products we can use to create our local development and testing blockchains.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=156)** First, there's Ganache, one of the most popular tools.
>
> **[2:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=160)** It's an open source tool, you can download, install it, and run it on a private network, or really on a single machine.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=166)** There's also Truffle.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=168)** Truffle and Ganache actually came from the same place, and so they're going to be, they work well together.
>
> **[2:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=174)** Truffle has its own network, or you can use the Ganache network, or rather blockchain I should say.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=179)** Truffle has its own blockchain, Ganache has its own blockchain as well.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=182)** So we're going to use both of those later on and we'll see what the slight differences might be.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=188)** There's also Cliquebait, which uses a docker instance.
>
> **[3:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=192)** Now we haven't talked about what docker is and containers.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=196)** A docker container is kind of like a lightweight virtual machine.
>
> **[3:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=200)** So you can think of it as being a virtual machine that runs in and of itself that doesn't take as many resources as a full virtual machine.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=208)** That's about as far as we can go.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=211)** Cliquebait uses these docker containers to create its own internal blockchain network.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=217)** And we can also use Local Ethereum Network.
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=220)** And this is basically a set of scripts that makes it easy to set up our own local networks.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=225)** So those are several options that we can use.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=227)** Regardless of which one you choose, you want to make sure that you do set up your local blockchain so that you can do the testing and make all the mistakes here locally.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=237)** All right, the next step is to actually write our code.
>
> **[4:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=241)** So to write the code, we need a text editor or a development environment, or an integrated development environment or IDE.
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=248)** Really, any editor works because smart contract source code is just text files, a collection of text files.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-1?u=76281980&t=256)** We write them out in any editor, we'll be just fine.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (4), make (3), node (1)
> **Code Keywords:** else. (2), default, (1), delete (1), public (1), private (1)
> **Env Vars:** evm (2), ide (1)
> **Prerequisites:** set up (2), install (1)
> **Analogies:** kind of like (1), think of it as (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)

#### Writing and testing your code, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=0)** - Although you can use any editor, there's lots of special purpose editors or plugins that work with general editors and integrated development environments that make life a lot easier.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=11)** So you might want to explore some of the options for tools that include a compiler that's built in, so you don't have to compile it externally.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=19)** You also may want syntax checking and assistance so you can have pop-up help that'll help you determine what you did wrong and how to fix it.
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=27)** You might want organization and collaboration tools to make it easy to integrate with other team members and share your code.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=35)** There's tons of general purpose editors that have these plugins for specific languages that make life easier.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=42)** And of course, I keep alluding to the fact that the next step up the chain is the integrated development environment.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=48)** An IDE is basically one workspace that has several views, all built in, and they're like little windows that make it easy for you to code, see compiler errors, manage the organization of where your files live, and it's all in a tight, integrated environment that makes it easy for you to do everything you need to do to write test and then deploy your code.
>
> **[1:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=74)** We're going to look at several different versions or different several different options, but we're going to really end up using a very nice IDE because it makes life a lot easier.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=84)** So here's a list of a few different options.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=86)** This is not the only option or the only list of options out there, but these are just a few.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=90)** Atom is very popular, it's a full-blown IDE and it does support solidity.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=96)** Visual Studio Code is another one, this is free now, if you've used older versions of Visual Studio, Visual Studio code is free and it works in Windows and Linux, Mac OS, lots of different environments.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=109)** Vim Solidity, if you like the VI editor, I'm a big VI fan.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=115)** Vim is an implementation of VI and Vim Solidity has solidity language support built into the VI type editor.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=125)** Then if you decided that you didn't want to do all of your code development locally, if you wanted to do web-based development, there's several products out there.
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=133)** There's Remix, EthFiddle and Superblocks Lab.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=136)** All of those are web based IDEs where you basically just need internet access to be able to get in and develop your code.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=144)** So here's Remix, if you just navigate to remix.[ethereum.org](https://ethereum.org), this is what you'll see.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=151)** It shows you two contracts in solidity.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=155)** These are smart contracts.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=157)** And if I click on each sub-smart contract in the File Explorer window, it shows me the code here.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=162)** And so it's really nice, we have syntax highlighting, it shows us what are our keywords are.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=170)** It shows us various colors to give us tips as to what's what, and we can compile, and we can do a lot of work here.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=177)** Another IDE is EthFiddle and they default to the dark theme.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=184)** But EthFiddle is very similar to what we just saw.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=186)** It organizes things a little bit differently, but we have syntax highlighting, I can scroll up and down.
>
> **[3:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=192)** It's a very smart contract here, but literally just click on compile and it will compile it right there, and there we go, there's our compile output at the bottom, that's what the bytecode is going to look like, and we have no compiler errors.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=209)** So if you want to just for laughs put in something that is a syntax error, as soon as we put in that syntax error, since we have auto compile, we see down at the bottom here, we get a compiler error and it tells us something is wrong.
>
> **[3:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=224)** So source code editors or IDEs help you organize your work and write the source code that's going to eventually become bytecode.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=234)** But to get it from source code to bytecode, you have to compile it.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=237)** So even though some of the editors or IDEs have embedded compilers, you'll still likely need a standalone compiler that you use to compile before you deploy to the specific networks you want to go to.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=249)** So when you compile your source code into bytecode, then you deploy it to a specific development or testing or even main net network, but of course you don't go to main net until you finished all your testing, then you run it to test it and then deploy it to the next network.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=266)** Manually completing these deployments and moving things around, compiling it for one network to another network and deploying is really tedious.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=275)** So the last piece of the puzzle, to pull our toolbox together is a framework to help simplify the process of managing these smart contracts as they move through the life cycle, from source code to bytecode for testing, to bytecode for deployment.
>
> **[4:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=293)** So some of the different networks that are available for us or the frameworks that are available for us include Truffle, which is the one we'll be using.
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=301)** There's also a standalone compiler, Solidity Compiler or solc, we'll be using that one as well.
>
> **[5:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=308)** There's a JavaScript version, it's the same thing, just written in JavaScript called solcjs.
>
> **[5:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=315)** Remix does have its own compiler and testing framework.
>
> **[5:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=319)** So it provides a lot more than just the development portion of the ADE or IDE.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=324)** And then we have Populus and Embark, which are two other solutions.
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=328)** Take a look at these and look at which one serves your needs the best.
>
> **[5:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=333)** Regardless, a framework is going to help you complete the task and actually get your code out to the right network at the right time, so then you have your own de-centralized apps being built from these smart contracts.
>
> **[5:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=346)** Okay, I just threw a lot of information at you in a very short period of time.
>
> **[5:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=351)** Don't worry, even though I threw one tool after another at you and told you what this does and what that does, where you can get this, it's okay.
>
> **[5:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=359)** What we're going to do now is we're going to revisit some of these tools, I'm going to make a couple of recommendations and I'm going to step you through one piece at a time.
>
> **[6:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=370)** How do you actually grab the tool we recommend?
>
> **[6:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=372)** How do we install it?
>
> **[6:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=373)** And more importantly, how do we use it?
>
> **[6:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-3-ethereum-development/writing-and-testing-your-code-part-2?u=76281980&t=376)** Don't worry, you don't have to make all this up on your own, I'm going to be with you the whole way.

> [!info]- Semantic Content
>
> **Tools:** visual studio (3), vim (3), atom (1)
> **CLI Commands:** make (6)
> **Env Vars:** ide (5), ade (1)
> **UI Navigation:** click on (2), go to (2), navigate to (1), scroll up (1)
> **Exercise Files:** source code (5)
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** this, (1)
> **URLs:** [ethereum.org](https://ethereum.org) (1)


## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Blockchain
- Ethereum

## Path Context

### In [[Build an Ethereum Blockchain App]]
← [[Building an Ethereum Blockchain App- 2 Introduction to Ethereum]] | **3 of 11** | [[Building an Ethereum Blockchain App- 4 Ethereum Development Tools]] →

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 2 Introduction to Ethereum]] | **3 of 14** | [[Building an Ethereum Blockchain App- 4 Ethereum Development Tools]] →

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