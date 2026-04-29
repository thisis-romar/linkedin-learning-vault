---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-7-smart-contracts
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts"
duration_minutes: 93
duration: 1h 33m
level: Intermediate
updated: 8/11/2021
learners: 5294
skills:
  - Smart Contracts
  - Blockchain
  - Ethereum
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHNvNsDD1K55Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628526726270?e=2147483647&amp;v=beta&amp;t=cBvLEEOmU76oqDmWLjBbj3nzLYcsE5uUy266gRSg2lk"
linkedin_topic: Data Science
learning_paths:
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]]'
  - '[[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]]'
next_courses:
  - '[[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]]'
  - '[[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":7,"total":11,"prev":"Building an Ethereum Blockchain App- 6 Building Your First Ethereum App","next":"Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp"},{"path":"Become a Blockchain Developer","position":7,"total":14,"prev":"Building an Ethereum Blockchain App- 6 Building Your First Ethereum App","next":"Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/smart-contracts
  - skill/blockchain
  - skill/ethereum
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%207%20Smart%20Contracts.md)

![Building an Ethereum Blockchain App: 7 Smart Contracts](https://media.licdn.com/dms/image/v2/C560DAQHNvNsDD1K55Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628526726270?e=2147483647&amp;v=beta&amp;t=cBvLEEOmU76oqDmWLjBbj3nzLYcsE5uUy266gRSg2lk)

# Building an Ethereum Blockchain App: 7 Smart Contracts

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, seventh in a series of eleven, goes in-depth on smart contracts. Instructor Michael Solomon reviews what smart contracts are, then takes you through some real world examples of blockchain solutions being used today. Mich

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts) | 1h 33m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Learning about Smart Contracts**](#1-learning-about-smart-contracts) (14 videos)
  - Smart contracts review
  - What is the supply chain?
  - Supply chain challenges and blockchain solutions
  - Blockchain solution examples
  - Ethereum tokens
  - Supply chain project
  - Exploring solidity
  - Defining types of data
  - Data types
  - Solidity data modifiers, part 1
  - Solidity data modifiers, part 2
  - Revisiting gas
  - Controlling flow
  - Handling errors

### 1. Learning about Smart Contracts

> [↑ Back to Table of Contents](#table-of-contents)

#### Smart contracts review
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=0)** - Okay, so you know how to write smart contracts, right?
>
> **[0:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=3)** Well, not exactly.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=5)** The only smart contract that we've written so far just displays a message, hello world, which is a great start.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=11)** And we have to start somewhere.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=13)** Now you've been through the whole process once, but what about a smart contract or a collection of smart contracts that does something useful?
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=22)** That's what we really want.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=23)** We have to start at the beginning, and that starts with design.
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=27)** So we want to design our smart contracts to solve the problem or problems.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=32)** And of course, to solve the problem, we first off have to define the problem.
>
> **[0:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=37)** All right, so, let's back up just a little bit, and let's review.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=40)** Blockchain, it's different than any other environment, because we had this consensus mechanism that controls adding blocks.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=49)** That way, we can trust the process.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=52)** Data on the blockchain stays there forever, which is great for auditing.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=56)** So we know that once data is added, we have the transparency of that data, and the persistence of that data.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=62)** So that's the beauty of blockchain.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=64)** And, we can carry out actions on this data, but we can't just do anything.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=70)** Whatever actions we can carry out, in other words, adding data or fetching data from the blockchain, is governed by the smart contracts.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=80)** That's the beauty of smart contracts.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=81)** Okay, so let's talk a little bit more about smart contracts.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=84)** Again, just a little bit of review.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=86)** A smart contract is a program that helps us solve real world problems on the blockchain.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=93)** So it not only limits our access to the blockchain, it helps us solve problems in the real world.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=100)** It's not just about the data, it's about mapping the data and the functionality to real world issues.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=107)** One example, the one we're going to focus on, is supply chain.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=111)** Supply chain is all about tracking and managing products and services from the original producer to the final consumer, and it's a great example of how blockchain really, really shines.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=124)** Smart contracts let us implement a supply chain or some other type of solution.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=130)** Smart contracts can prevent, or they do prevent, rogue additions.
>
> **[2:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=135)** It is the smart contract code that gives us the control over how our blockchain is built.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=142)** And remember, all smart contracts must execute the same way on all nodes, which means they're deterministic.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=149)** That means that all of the output, all the results of smart contract code must be identical on all nodes.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=158)** So, that's a real brief overview or review of smart contracts, all right?
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/smart-contracts-review?u=76281980&t=162)** Let's take a closer look now at our use cases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **Definitions:** is a  (2), in other words (1), means that (1)
> **Speakers:** - okay (1)

#### What is the supply chain?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=1)** - So what exactly is supply chain?
>
> **[0:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=2)** Supply chain is a great use case for blockchain technology.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=7)** Not just because they both are chains, but actually there's some truth to that.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=11)** The idea behind supply chain is that it is the path that products or services even take from the producer all the way to the consumer.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=23)** It's rare that there's one organization that controls all the different components.
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=29)** So what are the components?
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=30)** If you start with a producer, let's say it's a farmer, and this farmer is growing corn, that farmer may have started off taking the corn and maybe even driving up to the end of the driveway and having a sign saying, hey, buy corn here.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=44)** It's so much per bushel, or however big you want to package everything.
>
> **[0:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=50)** And it's just a point to point.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=51)** So basically if someone drives by and stops and says, "Hey, you know what?
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=55)** I want some corn."
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=56)** You have the producer selling directly to the consumer.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=60)** All right, that's easy.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=61)** It's no big deal at all.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=62)** You exchange money and you get the corn.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=64)** But you have a very limited number of people you can sell to.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=69)** So the next step may be to go to a farmer's market.
>
> **[1:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=72)** So then you load all the corn up in a big pickup truck and you drive to the farmer's market and you rent a booth and you sit there all day and lots of people come by, but you're still point to point.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=83)** You have the producer talking directly to the consumer.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=87)** So the next step may be, let's say there's someone who walks around and looks at all the different farmers that are selling corn and says to each one of the farmers, "Hey, I'll tell you what.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=98)** How about if I buy your corn and I'll create and rent a big booth here, and then I'll just sell your corn for you."
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=105)** Well in that case, now you have a middleman.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=107)** And of course the middleman wants to make some money and so the middleman is going to take a little bit of money from the farmer, increase the price, and sell the corn probably for more than the farmer would sell the corn because he has to make money as well.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=123)** Or he's going to give the farmer less money because it's easier.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=128)** He doesn't have to sit there at the farmer's market all day long.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=130)** So that's the first phase of a supply chain.
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=133)** And then of course it goes farther and farther with more and more middlemen 'til you get to what we have today.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=139)** Today, we walk into a supermarket and we pick up corn.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=142)** Well, that corn basically came from a warehouse.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=145)** The warehouse then got it from probably another warehouse that several states or maybe even countries away, eventually got that corn from the original farmer.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=155)** But the farmer has no idea who's going to buy the corn and the person who buys the corn has no idea who actually planted the seeds that became the corn later on.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=166)** So the idea of supply chain is tracking this whole complex process and it works well with a blockchain.
>
> **[2:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=174)** So when you look at large supply chains, it's very rare that one organization owns all the different pieces because you've got the producers, you have the shippers, these carriers that move things from one place to another, you have intermediate warehouses and then you have delivery to the final retail outlet and so it's rarely one organization.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=195)** Normally you have a consortium of organizations and they're communicating and exchanging all this data and information about shipping things back and forth.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=206)** And the ownership of the corn changes from the farmer to the carrier, to the warehouser, to the wholesaler, to the retailer, and finally to the consumer.
>
> **[3:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=218)** How do you keep track of all that?
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=220)** And how can you take or make it simpler so that all these intermediaries aren't making the price higher at every level because really that's what's happening.
>
> **[3:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=231)** When you go pick up a piece of corn or an ear of corn at your supermarket, you're paying a lot of people along the supply chain.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=239)** Okay.
>
> **[4:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=240)** So the chain in the supply chain is simply all these entities that pass a product from one place to another, until it finally comes to the final consumer.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=253)** All right. So let's look at some examples.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=254)** You've talked about what supply chain is.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=256)** So how does this work in real life?
>
> **[4:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=259)** Here's one example.
>
> **[4:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=260)** This is Certified Origins Italia.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=263)** Certified Origins is a company that prides themselves on creating very high quality food that's simple and traceable.
>
> **[4:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=274)** In other words, they are going to provide food to their consumers that meet high quality standards.
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=281)** And one of their product lines is premium olive oil.
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=285)** So think about that.
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=285)** Premium olive oil from Italy.
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=288)** Really, really good stuff.
>
> **[4:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=290)** So they want to ensure or assure their customers that you can trust where this food came from.
>
> **[4:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=298)** So how do they do that?
>
> **[4:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=299)** They have a very complex supply chain that tracks the acquisition of the olives all the way through the delivery to the final consumer.
>
> **[5:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=309)** So that's one supply chain where you're interested because you don't want to pay a lot of money for, what's supposed to be a really good bottle of olive oil, if you don't have the assurance that what you're getting is really what you're paying for.
>
> **[5:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=322)** But supply chain is not just about food.
>
> **[5:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=325)** There's lots of other areas that benefit from this structured approach to getting stuff to the right place at the right time.
>
> **[5:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=333)** For example, whenever a natural disaster occurs, one of the first things that relief agencies want and need to do after the initial disaster is over, is get to the victims and bring them goods and services and help them recover.
>
> **[5:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=349)** However, in some cases, the disaster is so horrific that it makes it difficult for the supply chain to operate properly.
>
> **[5:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=358)** And that's exactly what happened with hurricane Dorian.
>
> **[6:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=360)** It threatened the supply chains needed for recovery.
>
> **[6:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=363)** Because remember the supply chain is all about the delivery mechanism including carriers and warehouses and people on the ground.
>
> **[6:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=372)** And whenever a hurricane hits, it may damage the physical properties and the physical ability to continue with a normal supply chain.
>
> **[6:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=383)** So you may be wondering how blockchain can possibly help in recovery efforts after a hurricane.
>
> **[6:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=388)** Well, that's where we're leading up to.
>
> **[6:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=390)** It's important to understand what supply chain is all about and what the needs are.
>
> **[6:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/what-is-the-supply-chain?u=76281980&t=395)** So in the next episode, let's look at some of the obstacles that we run into with traditional supply chain implementations, and how blockchain may be able to help us to address each one of those.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), pass (1), from. (1), for, (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), in other words (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - so (1)

#### Supply chain challenges and blockchain solutions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=1)** - Let's take a look at some classic issues or challenges, with most supply chain implementations.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=7)** Supply chain by itself, typically involves many organizations or at least several organizations.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=13)** So the coordination of activity and data, is always going to pose challenges.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=19)** First and foremost is the lack of transparency.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=23)** Whenever you have multiple organizations transferring goods and it changing data, you can't always see the data from other organizations.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=32)** Most organizations let's say the warehouse, which is right in the middle of the supply chain, probably has their own siloed data system.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=40)** They may can take input from both sides and produce output, but their data is hidden somewhere inside their own databases.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=47)** And most people can't just look into another company's databases and find the data they need.
>
> **[0:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=53)** So the data is not very transparent.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=56)** Only parts of the data will be released, based on what that organization is willing to let somebody else see.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=63)** Along those lines, is the lack of traceability.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=66)** If you don't have very transparent data across the entire chain, it makes it difficult to trace where something actually is in process or where it has been.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=77)** It's difficult to back trace all the way back to an original producer with legacy separate systems.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=85)** Because again, there's no direct chain or no cohesive chain all the way through the process.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=91)** Also, every transfer from one physical location to another, may encounter some sort of time lag.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=99)** Because if you look at the producers, you have warehouses, and then you have wholesale warehouses and retailers, at every step of the chain, you have trucks that are probably moving goods from one place to another.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=111)** When you do that, you're not going to move just one piece of good or one bushel of corn from one warehouse to another, you're going to wait until you have a truckload.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=121)** So, some of the goods may have to sit and wait for some period of time, until you get a batch of goods that are ready to move.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=128)** So we had this time lag and the data may or may not flow with the exact same timeframe of the actual physical products.
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=137)** Because you know, your truck leaves, at what point do you release the data to say, hey, these products were just now shipped out?
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=145)** It may be that night.
>
> **[2:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=146)** It may be in a batch process.
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=148)** So you had these little time lags.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=150)** Well, we talk a lot about data and siloed data, since the data doesn't move all in one big record, each entity is probably only going to release just the data that they want to release and save some other data for internal processing.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=166)** So that means, that at every step of the process, the data may change or maybe you add some data, or maybe you won't release all the data to the next phase.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=177)** So, if you move, it's kind of like that old game, you know, telling a secret.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=182)** Ever done that?
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=183)** You sit in a circle and you basically whisper something in someone's ear, and then they whisper it to the other person and it goes all the way around the circle.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=190)** And when it comes back to you, the message is totally different most of the time than you started out with.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=195)** And the reason for that is that in translation, you'll add some words, you'll change some words, and maybe you drop some of the meaning.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=204)** And the same thing happens in data that's transferred from point to point.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=209)** And just to kind of pull everything together, we also have non-standard data going from place to place and non-standard access.
>
> **[3:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=219)** Which means that there's no convenient way to look at the status for different types of organizations.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=226)** It's very difficult to have a one-stop shopping, like one mobile app to say, where is my olive oil?
>
> **[3:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=232)** And when was it shipped out of Italy?
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=234)** It's very difficult to do that, if you have a different organization handling each step of the fate or a step of the process.
>
> **[4:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=241)** Here's the quick example.
>
> **[4:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=243)** If you want to track a package that was shipped to you, let's say you bought some new running shoes and you want to know when they're going to arrive.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=251)** Well, how do you find out the status of that package?
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=253)** Well, it depends.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=254)** If you bought it from [amazon.com](https://amazon.com), maybe you can find out from their site, but if you bought it from somebody else, you have to go to another site.
>
> **[4:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=264)** And once the product is shipped, how do you find a tracking number?
>
> **[4:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=268)** Well, if it's shipped via USPS, you go to their website.
>
> **[4:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=272)** If it was FedEx, you go to FedEx's site.
>
> **[4:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=274)** So you get the idea.
>
> **[4:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=276)** There's non-standard status tracking.
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=278)** Blockchain can help address all these issues.
>
> **[4:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=282)** Let's see how.
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=283)** First and foremost, lack of transparency.
>
> **[4:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=286)** When you register each phase or each movement of a product or service on a blockchain, you can see every step of the way it's all there.
>
> **[4:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=295)** The data is laid out in front of everybody.
>
> **[4:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=297)** That also gives us traceability.
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=301)** Since there's no central authority, all the transactions are put side by side and you can link, or the... actually the transactions are already linked together.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=310)** And so you can trace both directions.
>
> **[5:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=313)** That means you can figure out where your product is, any one point in time, and you can take the product even after you purchase it, and trace all the way back to the original producer.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=324)** So it gives you a lot of power.
>
> **[5:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=326)** It also can help reduce the transfer time lag.
>
> **[5:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=330)** Smart contracts can make on demand decisions that limits human interactions.
>
> **[5:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=335)** It also reduces human errors, and you don't have to wait for data to be processed during a humans work schedule.
>
> **[5:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=344)** In other words, it can happen at any time 24/7, and just move ahead because the smart contracts are making all the decisions, not people.
>
> **[5:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=352)** Also, translation data loss.
>
> **[5:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=354)** All right, so if you're putting the same data on the blockchain at every step of the process, you're not having to translate data between disparate data systems.
>
> **[6:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=366)** Everybody is using the smart contract interface, to move the data along.
>
> **[6:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=371)** And in fact, it's the smart contracts that are moving the data along.
>
> **[6:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=375)** So, you don't have to worry about differences from each participant in the supply chain.
>
> **[6:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=380)** And then finally non-standard and unavailable status tracking.
>
> **[6:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=383)** That's been solved as well.
>
> **[6:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=385)** All the information is available on the blockchain, and you're querying one blockchain.
>
> **[6:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=390)** And you can figure out where your product is and where your product has been.
>
> **[6:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-challenges-and-blockchain-solutions?u=76281980&t=395)** So in all cases and all of the standard challenges for supply chain, blockchain solves each and everyone.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), else, (1), interface (1)
> **CLI Commands:** find (4), make (1)
> **UI Navigation:** go to (3)
> **Definitions:** means that (1), in other words (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Env Vars:** usps (1)
> **Analogies:** kind of like (1)
> **Speakers:** - let (1)

#### Blockchain solution examples
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=0)** - Wow, it sounds like blockchain is almost too good to be true.
>
> **[0:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=3)** Blockchain solves every supply chain problem invented by man.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=8)** Well, maybe not every problem, but blockchain does go a long way to solving each one of the challenges that you just learned about.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=17)** Let's take a look at how a couple of companies have actually implemented blockchain to solve those challenges.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=24)** In an earlier episode, we talked about Certified Origins Italia, and if you recall, they produce and sell high quality extra-virgin olive oil.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=35)** So they decided they needed some way to really boost their consumer confidence, and in fact, if you'll notice the highlighted section down here, I thought this was interesting, accusations of fraud in the olive oil industry, that is selling inauthentic, cheap or adulterated olive oil as EVOO, are rife.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=55)** So I didn't realize that it was that big of a deal, but apparently if you want to buy high quality EVOO, it's not really clear how you can trust that you're buying real high quality EVOO.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=70)** So Certified Origins Italia went to Oracle.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=73)** Oracle is very large in the blockchain space, especially in enterprise blockchain, and asked them to help build a solution.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=81)** And they did exactly that.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=83)** So if you go to this address, you can read the article about how successful blockchain has been in providing a high level of assurance to Certified Origins Italia's customers, where they can use a mobile app and they can trace every bottle of olive oil right back to the point of origin.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=103)** And all they do is they just scan the code that's on the bottle of olive oil and it accesses data from the blockchain and gives them assurance that they're buying what they think they're buying.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=115)** Let's look at another example.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=117)** We also talked about disaster recovery.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=120)** So here's an example of disaster recovery after Hurricane Dorian.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=124)** There's a Bahama blockchain company that's raising crypto to fund Hurricane Dorian relief.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=131)** So if you read through this article, it's very interesting.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=134)** PO8, which is a blockchain company that is headquartered in the Bahamas, decided to get involved because their home, the place where they're located, was hit by this really large hurricane and they needed to help fund the relief efforts.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=149)** So they decided to roll up their sleeves and put their money where their mouths are.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=152)** So PO8 is an interesting company.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=155)** Let's take a quick look at who they are.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=158)** PO8 is a blockchain, well, they say a blockchain ecosystem that makes marine archeology and treasure hunting more inclusive and de-centralized.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=168)** Basically what happens is you can invest in the company and you do that by buying a PO8 token.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=177)** We're going to come back to that in a second.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=179)** When you invest in the company, you're actually funding their recovery efforts, treasure hunting and recovery efforts.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=185)** And what happens is when they find stuff, they'll actually bring it in.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=189)** Then they auction off what they have found.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=191)** So they auction off some of the artifacts and they auction them where you can actually pay for these artifacts using your PO8 tokens.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=202)** So it's all based on blockchain cryptocurrency.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=205)** There's no real money, well, except for investing in purchasing the tokens to start with.
>
> **[3:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=210)** But instead of buying these archeological finds with cash, you use cryptocurrency.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=217)** So those are a couple of examples of how supply chain issues can be addressed with blockchain approaches.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=225)** And in the last one, we talked a little bit about PO8 and a PO8 token.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/blockchain-solution-examples?u=76281980&t=230)** So really, we really need to pull the layers of the onion away for that and dig down and let's next talk about what is a cryptocurrency token and how can you make one up from scratch in Ethereum.

> [!info]- Semantic Content
>
> **Env Vars:** po8 (7), evoo (3)
> **Code Keywords:** let (4)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we talked about (1), in the last (1)
> **UI Navigation:** go to (1)
> **Speakers:** - wow (1)

#### Ethereum tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=1)** - So we just talked briefly about Ethereum Tokens, so let's unpack that a bit.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=6)** Early on we talked about some of the advantages of Ethereum.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=9)** One was smart contracts, and the other was a native cryptocurrency and the ability to create your own tokens.
>
> **[0:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=16)** So if we have ether, why do we need our own tokens?
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=19)** And the answer to that is that a token gives us the ability to have our own currency in a way.
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=27)** Perhaps if you went to a university, you may have had a card for your university with special money on your card that you couldn't spend anywhere, but you could spend everywhere there on campus, it's kind of the same concept.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=40)** So in Ethereum, we can create our own token by writing a smart contract to support the token.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=48)** So if you think about it this way, think about a physical token, let's say like a quarter.
>
> **[0:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=53)** If you have a US quarter, you can use that quarter in any vending machine that is designed to accept a US quarter.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=62)** Quarters are all minted based on standards, there's a specific width, diameter, weight, composition, and of course the pictures on the front and the back, everything it has to be according to the standard.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=77)** In fact, if you can ever find any coin that deviates from the standard, it's a minting error, those are actually worth a lot more.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=85)** So we always want the coins to match the standard, that means that any vending machine anywhere in the world, that is designed for a US quarter, you're probably just going to find them in the US, will accept a standard token which is a US quarter.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=101)** So if you try to take a US quarter and you go to a foreign country that doesn't accept US quarters and you put a US quarter in their vending machines, it's not going to work.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=110)** So that's the basic idea of having a standard that creates tokens that can be accepted by units that are designed to accept that token.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=120)** In the Ethereum world, there are several token standers.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=125)** By far, the most popular one is called the ERC-20 token standard.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=129)** And a token standard is really nothing more than a set of rules that defines what the token would, well, not really look like, but how it operates.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=140)** The token standard is a smart contract.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=144)** A smart contract is just a program that has data and functionality.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=149)** So a token is a smart contract that defines a place where you put the value of the token, and you had the functions that allow you to buy a token, sell a token and transfer the ownership to someone else.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=163)** All right, let's take a look at some of the existing tokens 'cause there's a lot of them out there.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=168)** So let's go to [etherscan.io](https://etherscan.io).
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=170)** We've already seen this, but if you notice there is a little menu option for tokens.
>
> **[2:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=175)** So let's look at ERC-20, the most popular tokens, there's over 215,000 current tokens.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=184)** When it says token contracts, what that means is there's 215,244 different token contracts which implement token, so there's 200,000 different ERC-20 tokens.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=197)** Then you notice when I dropped the list here, there's another list here or another menu item called ERC 721 top tokens.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=206)** That's just another standard.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=208)** It's another set of rules for a different type of token.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=212)** And if you notice there's only 2,429 of this type of token.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=217)** That's why when we talk about the ERC-20 tokens, it's by far the most popular.
>
> **[3:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=222)** So we see a list of the top 20, we see their price, whether they're going up or down in value, the volume market cap, and how many holders there are for each token.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=234)** Now a holder is basically someone who has transferred some of their cryptocurrency into this token.
>
> **[4:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=241)** So they basically have bought some of these tokens.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=244)** There's a lot of these on this tether USD token.
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=248)** Okay, so what does all this mean?
>
> **[4:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=250)** Basically, an ERC-20 standard is nothing more than a smart contract that has the basic functionality.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=258)** It has the data items, the variables that we need to store the value and the owner of the token, and then we need a minimum of six functions that are standard so that those tokens defined on the ERC-20 standard can be interchanged with other wallets and other tokens.
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=278)** So bottom line is it's just a set of standard functions for funding it, in other words, we transfer, we transfer to another person, another owner, we are able to ask what the current value is.
>
> **[4:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=291)** What's the current balance of this token and so on and so forth.
>
> **[4:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=294)** The standard is nothing more than just a contract that defines the minimum functionality.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=300)** Now, why is that so important?
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=301)** Well, because when you define a new token of any standard, especially the ERC-20 standard, when you define a new token, you want people to be able to buy that token in other words invest in that token.
>
> **[5:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=315)** The only way they can do that is by being able to store that in a wallet, be able to store the keys for that token in a wallet.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=324)** The wallet has to be compatible with your token to be able to interact with your token because you can't exchange cryptocurrency from one crypto to your token, unless the wallet allows you to do that.
>
> **[5:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=337)** That means that if you want to store an ERC-20 compatible token, you need an ERC-20 compatible wallet.
>
> **[5:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=345)** So it's a lot of details, don't worry about all the details just be aware that if you want to create your own token, you start with a standard that gives you the minimum functionality, and then you can write your own and you can create a token and call it whatever you want.
>
> **[5:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=359)** Once you create it, you can ask people to invest money in it.
>
> **[6:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/ethereum-tokens?u=76281980&t=362)** And if you convince them that their money is safe, you can actually start building value in your own cryptocurrency token in Ethereum.

> [!info]- Semantic Content
>
> **Env Vars:** erc (10), usd (1)
> **Definitions:** is a  (4), means that (2), in other words (2), is called (1)
> **Code Keywords:** let (5), else. (1), this, (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (2)
> **URLs:** [etherscan.io](https://etherscan.io) (1)
> **Cross-References:** we talked about (1)
> **Warnings:** be aware (1)

#### Supply chain project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=0)** - Now that we have all of the groundwork laid, we're ready to start really designing our supply chain application.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=7)** What is it going to look like?
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=8)** What do we need to do?
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=10)** And what do we need the smart contracts to do for us?
>
> **[0:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=14)** So, we're going to implement a real supply chain solution.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=18)** It's going to be very, very simple, it's not going to do a lot, but it will carry out the functions of moving a product from one entity to another along the supply chain.
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=30)** So in order to do this, we're going to write two smart contracts.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=35)** We're going to have one smart contract to define a token we're going to use for payments.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=41)** And then we're going to have another smart contract, which will actually do the asset tracking and management.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=47)** So we had two different functions or two different classes of functionality, we're going to put it into two different smart contracts.
>
> **[0:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=53)** Each supply chain link, or each entity or participant in the supply chain, provides a service.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=60)** So we have a producer that produces a product, then we have a carrier perhaps or we have a supplier that then moves the product from one place to another until it finally get to the actual consumer.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=73)** So we have all these links in the supply chain.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=76)** We're shipping, we're storing in warehouses, we're shelving at retailers, and then the of course the consumer actually buys it.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=85)** So each supply chain participant, is in business to make money.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=89)** So every time we change ownership from one link to another in the supply chain, there needs to be some sort of payment.
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=97)** So what we've chosen to do, is use Ethereum for these payments.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=101)** And we're going to define a token that can be used in the future at every step of the process to transfer value, and they transfer the value by paying for it with a token.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=113)** So the second smart contract is going to manage assets, but there's a problem here.
>
> **[1:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=118)** Ethereum them can't manage physical assets.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=121)** It can only manage digital assets.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=124)** So, we need to be very careful with this, this cyber-physical relationship.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=129)** And what that means is, that when I add data to the blockchain, it is that data that we're actually managing, not technically what that data represents, because the real world can deviate from the blockchain.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=144)** All right, here's an example.
>
> **[2:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=146)** You go to an airline, you basically going to take a flight.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=149)** When you check your bags, you walk up to the counter, you provide your boarding pass, your ID, and you give them your bag.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=156)** At that point, the agent is going to print out a tag for your bag hopefully put that tag on your bag and then throw it in the back on the conveyors belt and it bounces around and goes somewhere.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=170)** Hopefully when you get off your flight at the destination airport, you go stand for a little while.
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=176)** And eventually, little conveyor goes round around, your bag appears, it's all magic.
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=181)** But what happens is, the data system for the airlines, are not tracking your bag at all.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=188)** They're tracking the data that is used to print the tag for your bag.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=195)** And that's a big difference.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=196)** And here's why.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=197)** This literally happened to me last year, I went to an airport.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=201)** I checked in the two gate agents next to one another, oh, not the gate, the agents up front, were talking to one another, they're carrying on this really interesting conversation and barely paying attention to the customers.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=212)** So I checked in, and this gentleman checked in next to me.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=216)** What happened was, the gate agents were so busy chatting, they printed off my boarding pass and my ticket for my bag and placed it on the other gentleman's bag.
>
> **[3:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=228)** They printed off the ticket or the tag for his bag and put it on mine.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=233)** Now think about that.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=234)** When the bags went downstairs and the baggage handlers scanned it, they didn't care whose bag it was, they only cared what tag was on it.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=244)** My bag instead of ending up in Atlanta, Georgia, ended up somewhere in rural Mexico.
>
> **[4:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=250)** It took me a week to get my bag back.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=253)** The tag was there, the tag made it to Atlanta, but it was attached to somebody else's bag.
>
> **[4:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=257)** That is because the cyber physical relationship broke down.
>
> **[4:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=262)** Same thing happens in blockchain.
>
> **[4:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=264)** If you're not careful, you have to have procedures to make sure that when you enter data, it represents something in the real world.
>
> **[4:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=272)** So here's some examples of how you can associate physical assets with digital mirror assets.
>
> **[4:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=277)** You can engrave an ID, that's a great way.
>
> **[4:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=280)** If you have a physical good that you can engrave the serial number on, it's part of the physical device, that's a good way to make sure that it doesn't get separated and you don't get the wrong one on it, but it's expensive and slow because you physically have to X something.
>
> **[4:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=297)** You can attach a printed label onto a product that can be unique for each item.
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=301)** It's useful for a lot of different products, but you have to be careful the tag or the label can be damaged, or it can be lost, it may actually come off.
>
> **[5:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=311)** So that's one of the cons.
>
> **[5:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=313)** You could attach a printed label to a box of products, 'cause what if you're shipping, let's say, well, we'll go back to the corn.
>
> **[5:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=320)** I have a bushel of corn, you don't want to label every ear of corn, you may have to label a box of corn.
>
> **[5:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=325)** That's fast for batch products, but you have to then have procedures in handling partial boxes.
>
> **[5:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=332)** 'Cause if the tag represents a full box, how do you handle a box that's not completely full?
>
> **[5:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=338)** Or you can use manufacturer generated IDs.
>
> **[5:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=341)** This is great if you can integrate with manufacturer's data, it's fast if the ID can be scanned, but there's no standards for that.
>
> **[5:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=349)** And so you have to make sure that the supply chain consortium, all the organizations along the supply chain, agree to adopt the same standard so that you can refer back to the original manufacturer ID without having to do a separate look up.
>
> **[6:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=364)** And of course, the last one actually on our list is RFID, which is radio frequency identification.
>
> **[6:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=370)** We hear a lot about those.
>
> **[6:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=372)** That's basically a way of taking a little tiny transmitter and sticking it on a product.
>
> **[6:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=377)** Normally it has to be attached either physically or with glue, which is a physical connection as well.
>
> **[6:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=383)** It's fast, it's easy to scan, it's very, very convenient, but it's expensive and the tags can detach, and if you lose them, then you've got to figure out what the product actually is.
>
> **[6:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=394)** So there's pros and cons to every approach.
>
> **[6:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=397)** Okay, all that being said, what are the functions that we need?
>
> **[6:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=401)** A smart contract like any object oriented program, is made up of data about what you're controlling and then functionality.
>
> **[6:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=411)** Sometimes I refer to these as the nouns and the verbs.
>
> **[6:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=414)** The nouns describe what we're controlling and the verbs describe what we're doing to that to manage it.
>
> **[7:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=421)** So we need several different verbs or functions, we need to be able to create a new supply chain participant, so we create a new producer, we create a new supplier, we create a new consumer.
>
> **[7:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=432)** We need to be able to add a new product to the supply chain.
>
> **[7:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=436)** So it's a separate function.
>
> **[7:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=437)** Then we need to be able to transfer ownership from one participant to another.
>
> **[7:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=442)** So that brings together two different entities.
>
> **[7:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=445)** We have a product that's owned by A, and I need a function to say, now the product is owned by B.
>
> **[7:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=451)** So I'm moving it along the supply chain.
>
> **[7:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=453)** And then, I need the ability to track a product.
>
> **[7:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=456)** So I can say, where is product one, two, three.
>
> **[7:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=459)** And it'll tell me where that is.
>
> **[7:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=461)** Or I can say, where did product one, two, three, come from.
>
> **[7:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=464)** So we're doing backwards, provenance checking.
>
> **[7:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=467)** So those are the basic functions that we need to implement.
>
> **[7:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=470)** So how do we implement those?
>
> **[7:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=471)** Well, that means we have to write some code in a language, that's where solidity comes into play.
>
> **[7:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/supply-chain-project?u=76281980&t=477)** So let's learn a little bit about solidity and how we can use it to write our smart contract functions.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), pass (2), let (2), function (2), throw (1)
> **CLI Commands:** make (4)
> **Env Vars:** rfid (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - now (1)

#### Exploring solidity
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=0)** - So you've heard a little bit about Solidity.
>
> **[0:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=2)** Let's talk about what Solidity actually is.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=5)** Solidity is a programming language for writing Ethereum smart contracts.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=10)** There are other languages, Solidity is not the only language you can use, but that's the one we're going to focus on in this course.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=18)** Solidity is the most popular language in use today for writing Ethereum smart contracts.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=24)** It looks a lot like JavaScript.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=26)** In fact, it's somewhat based on JavaScript, so if you already know JavaScript, you're going to really like Solidity.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=32)** If you don't, though, it's okay.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=33)** It's pretty easy to learn.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=35)** There's just a few rules we'll go over, and then you'll pick up the rest as you move along.
>
> **[0:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=39)** In this course, we're going to just do a basic introduction to Solidity.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=44)** We don't have the time to cover everything, so I do encourage you to look up more resources about Solidity and keep learning, 'cause it's a great language.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=55)** Smart contracts that we write in Solidity are going to run on all EVMs, all nodes.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=61)** That means that we have to ensure that what we write, or we can assume that what we write is deterministic.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=68)** In other words, it runs the same way everywhere, every time.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=73)** Now we do have to be a little concerned about the way we write our code, we don't want to depend on external data that may actually be different on different nodes.
>
> **[1:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=82)** We want to make sure that our input data is always the same so we're not depending on anything that changes, so that that output is deterministic.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=90)** Smart contracts govern how you access the blockchain because you can't access the blockchain without going through a smart contract, so it is kind of like the gatekeeper for the blockchain.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=101)** Remember, too, that smart contract code, the actual code you write is stored on the blockchain, just like data.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=107)** So once you deploy code out to the blockchain, it's always going to be there, but you want to make sure it's fully tested and we're going to go through the process of testing it.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=117)** And when you deploy code out to the blockchain, it's not really source code.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=121)** We write our source code and its very readable text in a code editor, but then we have to compile it to translate it into bytecode.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=131)** The bytecode is the opcode that actually gets deployed out to the blockchain, and that's what the EVM runs.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=139)** Like any language, we write code that we translate into a machine-readable format, and in order to do that, we have to abide by certain rules so that the computer understands it.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=152)** So we have syntax rules and then we have semantics.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=156)** Syntax rules are the rules that define how to write valid smart contracts.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=162)** They're kind of like the rules of any language.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=166)** If you speak in any language, such as English, there are certain rules you have to abide by.
>
> **[2:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=171)** If you just throw words together in some weird order and they have no meaning, people are not going to understand what you're saying.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=177)** It's the same thing in a programming language.
>
> **[3:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=180)** You have to abide by certain rules so that the compiler will understand what you mean.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=186)** If the compiler doesn't understand it, in other words, you use bad syntax, the program will not compile.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=193)** Syntax defines what words, what characters, and what things are valid.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=198)** So if a program compiles, it doesn't mean it's a perfect program because then you have semantics, it's what things mean.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=206)** Even though a program is syntactically correct, it may be a stupid program and not do what it's supposed to do.
>
> **[3:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=213)** So make sure that your programs compile, but then you test them to make sure they do what they do, all right?
>
> **[3:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=219)** So that's two different phases of corrections in programs.
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=223)** Okay, let's take a look at the main smart contract elements.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=227)** At the very high level, you've got a compiler version declarative, then you may have some comments.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=234)** You really should have comments that describe what your program does.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=237)** Then you may want to import external files, and then you define the actual smart contract and its contents, as well.
>
> **[4:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=247)** All right, so let's start at the top, specifying a valid computer version.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=251)** Solidity is still a very young language and it's constantly undergoing more and more changes, so we see new versions coming out all the time.
>
> **[4:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=260)** The good part about that is that it's getting richer and richer.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=263)** The bad part is that if you write code depending on one Solidity compiler version, and a new version comes out, that new version may conflict with your code.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=275)** In other words, the new compiler may not properly compile your code.
>
> **[4:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=280)** The new compilers often, or in some cases, will add more restrictions on how you write your code, and so your old code may not compile.
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=288)** So that's why we can tell the compiler at the very beginning, "Hey, this code should only compile with a version 0.5 or higher," or something like that.
>
> **[4:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=299)** So we're going to see how to do that.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=300)** We use the pragma directive that defines the Solidity compiler version or versions that'll compile a smart contract.
>
> **[5:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=308)** Let's take a look at what that looks like.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=310)** You've already seen it, but let's take a look back at our HelloWorld smart contract.
>
> **[5:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=315)** So we're back to our HelloWorld smart contract.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=317)** And if you recall, the very first line is the pragma directive.
>
> **[5:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=321)** And we basically say pragma, give it a language, we're using Solidity, and then we're showing the minimum version.
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=328)** Now there's lots of different ways we can type this in, but in this case, we're going to say the caret, that first little character there, means that we have to have a minimum compiler version of 0.5.0 in order to compile this.
>
> **[5:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=343)** So if we try to compile this with a lower version, it won't work, and actually the way the syntax works here, if we try to compile this with a 0.6 point something, it will not work either.
>
> **[5:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=354)** We could put a dash here and put a range in so we could say 0.5.0 - 0.5.10, or something.
>
> **[6:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=363)** So typically we just use a single minimum version, and this tells us that anything in the five range will be an acceptable compiler.
>
> **[6:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=375)** The next thing that we want to be able to enter in our smart contracts would be comments, and there's two ways to enter comments in Solidity.
>
> **[6:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=384)** One is a single-line comment.
>
> **[6:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=387)** You always want to add as many comments as possible to communicate with other team members to explain what your program does.
>
> **[6:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=394)** And honestly, I comment so that when I open a program six months later, I remember what I was thinking.
>
> **[6:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=401)** So we can use single-line comments to start with two slashes.
>
> **[6:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=404)** So I can say, "This is a demo smart contract."
>
> **[6:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=414)** Now, we can also add comments onto lines, so let's say I go to the end of line seven and I just start typing "// this stores my string in a variable," and that gives me a comment that is on a single line.
>
> **[7:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=445)** In other words, when I start typing the //, everything from there to the end of the line is a comment.
>
> **[7:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=452)** Now, if you notice, I go back and my comment has a little yellow squiggly line under it.
>
> **[7:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=457)** If I hover over it, it tells me, "Oh, you've got trailing white spaces."
>
> **[7:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=462)** He doesn't like that.
>
> **[7:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=462)** And sure enough, I've got an extra white space there.
>
> **[7:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=464)** If I backspace over that, there it goes away.
>
> **[7:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=467)** So anytime you see a warning, the yellow squiggly line is a warning.
>
> **[7:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=473)** The red squiggly line would be an error, so you want to make sure you go look for those.
>
> **[7:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=478)** So that's one type of comment.
>
> **[7:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=479)** What if my comment is longer?
>
> **[8:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=481)** What if I have, let's see, what if I have a very long comment
>
> **[8:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=491)** that spans multiple lines?
>
> **[8:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=497)** Well, we can do that as well.
>
> **[8:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=499)** What I do is I start the comment with a special character, the /*, and I end with a */.
>
> **[8:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=511)** And that makes it a comment.
>
> **[8:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=513)** Of course, it still doesn't like the trailing spaces and that'll just make it look a little prettier, and we can have, you can open a comment on a single line, I kind of like to do it this way, make my comments on a single line, and then everything in between the slash star and star slash is a comment, and you can type anything you want there.
>
> **[8:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=535)** So that's how we enter comments in Solidity.
>
> **[8:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=539)** The next high level function in a smart contract is one that we don't see in the HelloWorld smart contract, and that is including code from other files.
>
> **[9:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=548)** There's many times when you've already written a piece of code, and it has maybe some function definitions, or maybe it has variable definitions, and you don't want to re-type it over and over again, or copy paste.
>
> **[9:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=559)** What you can do is you can simply say, "Include that other file over there."
>
> **[9:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=565)** We're not going to show you that right now, but you'll see it when we start developing our token contract.
>
> **[9:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=570)** Finally, once you have all of your precursors, you've got your comments, it describes what you're doing, you've imported any files, you've told it what compiler version to use, you're ready to actually define the guts of a smart contract, and that is the contract directive or the contract statement.
>
> **[9:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=587)** Let's see what that looks like.
>
> **[9:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=589)** All right, so we moved down, this contract is named HelloWorld.sol.
>
> **[9:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=594)** In fact, that is the name of the file.
>
> **[9:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=597)** So we see on line 11, the keyword "contract" followed by the name of the contract, and this should be the same name as the file.
>
> **[10:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=606)** So it doesn't have to be, it's very convenient if it does do that, because you can actually define multiple contracts in one file.
>
> **[10:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=614)** We're going to keep it simple for right now.
>
> **[10:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=616)** So now we see that we are defining a contract named HelloWorld.
>
> **[10:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=622)** We followed that with an open curly brace and then everything in between the open and the ending or closing curly brace would mean that is the body of our contract, and this is the guts of our smart contract.
>
> **[10:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=637)** Very, very simple.
>
> **[10:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=638)** We see the main elements except for the include already represented in our existing HelloWorld smart contract.
>
> **[10:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/exploring-solidity?u=76281980&t=645)** So let's start from there, and let's add more and more layers so that you can learn more about the very powerful Solidity programming language to develop your own smart contracts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (2), throw (1), case, (1), this. (1)
> **Definitions:** is a  (6), in other words (4), means that (2)
> **CLI Commands:** make (7)
> **Versions:** 0.5.0 (2), version 0 (1), 0.6 (1), 0.5.10 (1)
> **Analogies:** kind of like (3), just like (1), such as (1)
> **Exercise Files:** source code (2)
> **Warnings:** warning (2)
> **Env Vars:** evm (1)

#### Defining types of data
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=0)** - Let's start talking about how we handle data in Solidity.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=4)** Data is any value that we want to manipulate and potentially store.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=11)** It's basically how we operate.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=13)** Again, we have nouns, which would be our data.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=15)** And then we have functions, which are like our verbs if you think about it in noun and verb context.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=21)** So, the data is, again, it's a collection of values that we operate on, we do things with.
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=29)** So an example of data might be the current value of a particular token.
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=34)** So how much money is in that token?
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=36)** What is it worth?
>
> **[0:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=37)** Or the current price of a product.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=40)** Or even the current owner of a product would be data.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=43)** So the way that Solidity handles data in a blockchain environment is different from a traditional database.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=52)** Several things you need to always keep in mind.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=54)** Number one, there's no delete or direct database update.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=58)** So what that means is with traditional database type of applications.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=62)** And when I mention traditional databases, it doesn't mean necessarily enterprise database.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=67)** Any data store, even if you store data in a comma separated value file, or text file, or Excel spreadsheet, whatever.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=76)** You're storing it in a traditional manner, which means that you store data, you can read the data and change it and restore it again in the same place.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=85)** Or if you want to get rid of it, you can delete that.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=88)** Can't do any of that in blockchain.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=90)** Once you store data to the blockchain, it's always there.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=93)** You can read it, you can change it, but if you store it again, you're storing it in a new block.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=100)** So you're storing a new version of that data.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=102)** So you're actually adding data.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=104)** So updating data means adding data.
>
> **[1:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=106)** So it's a little bit different.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=108)** That's not such a big deal except updating data, which means adding data in blockchain, increases the blockchain size because you're adding another transaction, which makes the blockchain longer, and you've got to pay for it.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=123)** So, be aware that updating data is not like it used to be.
>
> **[2:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=126)** So with that in mind, there's two types of data.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=130)** There's local variables and there's state variables.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=134)** A local variable is a variable that just exists in the EVM memory.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=139)** And when the smart contract stops operating, in other words, you finish a smart contract, the variable goes away.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=145)** It's not stored between invocations.
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=148)** So if you attempt to look at a variable and then you go do something else and you come back and you try to look at that same variable again, the data's is different.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=156)** It's been re initialized, it's gone.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=158)** The other type of variable, a non-local variable is called a state variable.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=163)** Now that's a key phrase there.
>
> **[2:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=165)** A state variable is a variable that's stored in the blockchain.
>
> **[2:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=169)** State variables are maintained persistently between smart contract and vocations because that's data that's in the database, in the blockchain itself.
>
> **[3:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=180)** State variables are persistent, but you have to pay for that persistence.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=186)** So that's the big difference between the two.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=189)** So now when we write our smart contracts, we have to be very cognizant of where the data physically resides.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=196)** So there's different physical locations of data.
>
> **[3:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=200)** There's a stack variable.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=202)** A stack variable is a simple variable.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=205)** In other words, it doesn't have a structure to it and it's simple like an integer or a single character.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=211)** That can live on the stack, which is a local area of memory to the EVM.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=217)** Then there are memory variables.
>
> **[3:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=219)** Memory variables are more complex like structures.
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=223)** It can be structures, different types of variables that don't live on the stack, but they still live in local EVM memory.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=230)** So those are both local variables, stack and memory are locals.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=234)** Storage is blockchain data.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=237)** So if you define a variable as a storage variable, that is always going to go to the blockchain and you're going to have to pay money to actually access it, to store and to get it back.
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=248)** So those are the considerations, local variables versus state variables.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=252)** You have to be cognizant of that.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/defining-types-of-data?u=76281980&t=254)** In the next episode, let's take a look at the actual types of variables that you can create and manage within Solidity.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), in other words (2), means that (1), is called (1)
> **Code Keywords:** let (2), delete (2)
> **Env Vars:** evm (3)
> **Warnings:** keep in mind (1), be aware (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)

#### Data types
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=1)** - Solidity, like every other programming language, has the ability to store different types of data.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=6)** So, you want to be careful about how you define your variables and your other data items, so that you're using the correct data type because each data type has certain strengths in the way that it manipulates its internal data.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=19)** So, let's take a look at the different data types that Solidity supports, for doing that we're going to go look at some code.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=26)** All right, the first thing we're going to do is we're going to launch Visual Studio code, but let's create a new project.
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=34)** So, if I open PowerShell, I'm going to navigate down to my workspace, and we see our first project there.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=43)** So, I'm not going to be too creative, I'm going to create a new directory called Second Project.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=49)** There we go, so I'm going to CD, change directories, down to Second Project.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=59)** And I'm going to initialize this as a new Truffle project.
>
> **[1:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=65)** So, just truffle init.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=76)** So, once we initialize a new project truffle init, you'll notice there's three directories already there contracts, migrations, and test.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=85)** There's really not much in there.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=86)** It's just the default that Truffle creates to get you started, now, we're going to be using some Solidity code that's already been pre-written.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=94)** You'll either have access to that from a download link, or you can find the code in the Notes section of your PDFs, or the PowerPoints.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=102)** All right so, let's go back into Solidity and take a look at real code.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=107)** All right, to get into our code I'm going to launch VS code.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=112)** So, I'm in the right project, I just type in code.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=116)** and there we go, now, if I open contracts, notice I'm in my second project, I see some Solidity code already there.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=125)** The one I care about is DataTypes.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=128)** So, if we open DataTypes, we see a simple contract, contract DataTypes, and we have different types of data that Solidity supports.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=139)** So, let's take a look at each of these data types.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=142)** So, I'm going to go all the way down to the content, or the body of the contract DataTypes.
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=148)** And, of course, you can see I've got all these little squiggly lines here because I have several trailing blanks.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=153)** They annoy me, so I'll take those off.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=157)** It's always a good idea to pay attention to the messages that you're getting from VS code.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=161)** It will help you write cleaner code.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=164)** All right so, let's look at the first variable.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=166)** The first variable is x, x is the name of the variable and it is of data type uint.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=173)** So, a uint is a type of data that stores a positive integer or actually a non-negative integer, that means zero or greater.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=184)** uints are great for anything you want to count.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=187)** Like if you have the product quantity, you want to count that as I want 12 of this one product.
>
> **[3:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=192)** That would be a uint, that's what we would store there.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=195)** Notice the next one here is a uint8.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=198)** It's a uint, but there's a little eight stuck next to it.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=201)** So, basically, if I create a uint variable, that actually is the same as uint 256.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=208)** So that gives me a uint with 256 bits, that can store a pretty big number.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=216)** That's great for storing any numbers that you want of very large sizes.
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=220)** But the problem with that is, remember, these variables might be state variables.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=227)** That means we have to store it in the blockchain.
>
> **[3:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=231)** If I store a big value in the blockchain, I have to pay for the size of the data I'm storing in the blockchain, so if I need an unsigned integer, and I'm only going to store maybe a value of 17, 100, 300 something pretty small, I don't want to pay for a huge value, I want to shrink that down and say, "You know, I'm only going to store this much data.
>
> **[4:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=255)** "So, I'm only going to pay for that much data "in the blockchain," the way we do that is we tell Solidity, "Don't give me a uint 256 by default, but make it smaller."
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=266)** That's what a uint 8 would be.
>
> **[4:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=268)** It's just a smaller integer that's unsigned.
>
> **[4:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=272)** Now, the caveat means that if you try to store a number that's too big you get an error, and that's a problem.
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=278)** So, you want to make sure you define your variables as small as you need to not waste blockchain space because it's cheaper, takes less gas to actually drive that smart contract.
>
> **[4:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=290)** The next type of data is an int.
>
> **[4:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=293)** An int data type is an integer data type.
>
> **[4:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=296)** Now an unsigned int is a zero or greater integer, and an int can store negatives.
>
> **[5:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=302)** So, anytime you have to store a number that might go negative, you need an int.
>
> **[5:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=307)** The next one is bool, that stands for Boolean.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=310)** Boolean is easy, it's the same as logical, yes/no, true or false so, in this case, we define a variable called isEthereumCool.
>
> **[5:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=321)** It is data type Boolean and, of course, we preset that to true, Ethereum is indeed cool.
>
> **[5:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=329)** The next type of data is an address.
>
> **[5:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=333)** We use addresses all over the place.
>
> **[5:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=336)** An address is the address of your Ethereum account.
>
> **[5:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=341)** So, it's very important.
>
> **[5:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=342)** In fact, what we find is when we run, or we invoke a smart contract, the msg.sender, of course, the message is the invocation, it's actually the call of a particular function.
>
> **[5:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=356)** The message has a sender attribute, and we can always refer to that as msg.sender.
>
> **[6:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=363)** And that's really important.
>
> **[6:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=365)** msg.sender is the owner of the smart contract that invoked the function, so it's the owner of the asset.
>
> **[6:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=374)** So, anytime you invoke a function on a product, you have to be the owner... well, you should be the owner to invoke it.
>
> **[6:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=381)** And that way msg.sender is your address.
>
> **[6:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=384)** So, let's take a look at the code again.
>
> **[6:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=387)** Notice, in this case, we create a variable called owner.
>
> **[6:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=392)** It is of type address now, of course, it's kind of backwards the way we have to specify it in Solidity.
>
> **[6:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=397)** It's always data type followed by the name.
>
> **[6:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=400)** So, this variable is owner of data type address, and we're going to assign it a value of msg.sender.
>
> **[6:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=409)** And, now, we have a little comment.
>
> **[6:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=411)** So, this is how handy comments can be.
>
> **[6:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=413)** msg.sender is the Ethereum address of the account that sent this transaction.
>
> **[6:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=419)** So, now, we have a variable called owner that's automatically being populated with the value of the owner, or the account who sent the transaction.
>
> **[7:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=428)** So, we can use that later in our program.
>
> **[7:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=433)** Next, we have two types of variables.
>
> **[7:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=436)** We have bMsg and sMsg, bMsg is a bytes type.
>
> **[7:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=441)** And we basically make this a bytes 32, just like uint and int, we didn't talk about int, we can make all those longer or shorter by just putting a number after it.
>
> **[7:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=452)** And then, finally, we have a string data type.
>
> **[7:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=455)** So, at this point, we're going to say that bytes and strings are kind of the same, very similar.
>
> **[7:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=462)** Bytes is a data type that allows us to store arrays of data of any type really.
>
> **[7:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=469)** And we, typically, use it to store strings 'cause it's easier to manipulate.
>
> **[7:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=474)** And a string is an array of characters.
>
> **[7:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=477)** Whereas, a string itself is just a character string.
>
> **[8:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=481)** In Solidity decomposing strings, and pulling them apart, and concatenating, and stripping apart is a little bit more difficult using the string data type.
>
> **[8:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=491)** So, in most cases, you'll probably store strings as bytes, but be aware that there are strings.
>
> **[8:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=497)** And we're going to come back and talk more about the differences and the similarities of those two data types a little bit later.
>
> **[8:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=503)** And that covers most of the main data types.
>
> **[8:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/data-types?u=76281980&t=506)** There's more to it, there's lots more data types that we could store, but that gives you a brief overview of the ones you'll likely see most often.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), type. (4), function (3), case, (2), default, (1)
> **Definitions:** is a  (6), is an  (4), means that (1), stands for (1)
> **CLI Commands:** make (4), find (2), cd (1)
> **Code Identifiers:** bmsg (2), isethereumcool (1), smsg (1)
> **Tools:** vs code (2), visual studio (1), powershell (1)
> **Warnings:** be careful (1), caveat (1), be aware (1)
> **Non-Speech:** (typing) (2)
> **Cross-References:** later in (1)

#### Solidity data modifiers, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=0)** - One more topic that we need to touch on briefly before we move away from our variable definition discussion is the visibility of both variables and functions.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=11)** Inside Solidity, we can specify how visible both functions and variables are.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=17)** Now, what in the world does that mean?
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=18)** Visibility just defines where you can invoke a function or where you can access a variable.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=26)** Now, remember, variables are actual data locations.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=31)** It's a bucket that lives somewhere.
>
> **[0:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=33)** Typically it's going to live in memory. It's just a bucket.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=36)** So we give the bucket a name and we can reach in and grab a value out or we can throw a value in there.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=42)** But who can do that? Can everybody grab values out?
>
> **[0:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=45)** And when we define functions, can anybody invoke a function?
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=49)** What if you have a third-party API that's running on a mobile app?
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=55)** Is that mobile app able to reach into your smart contract and run a function, invoke a function?
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=62)** Maybe or maybe not. But you have control over what happens.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=66)** So there are four main visibility modifiers.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=70)** These are called modifiers because they're added on to the syntax.
>
> **[1:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=74)** There's public, external, internal, and private.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=78)** Let's look at what each one of those may mean.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=81)** For functions, a public function is one that anybody can call.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=86)** So that mobile app could reach in and invoke the function.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=91)** A public variable is one that any application can read from or write to.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=100)** All right, so that means that you can reach in the bucket and grab the value.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=103)** External means that only external entities can reach in and invoke a function or can access a variable 'cause sometimes you write one function to be for the API, for external entities, and a parallel or different function that's used for internal entities.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=123)** So external means that this is intended for the outside world.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=127)** The next one would be the opposite of external is internal.
>
> **[2:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=132)** Internal means that only functions in this smart contract and any contract deriving from it, yeah, we'll talk about that in a second, can invoke a function.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=142)** Same thing with variables.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=144)** With variables, it means that an internal variable is only accessible, in other words, that bucket, you can reach in and grab the value, only in the current smart contract or any smart contract that is derived from it.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=157)** All right, what does that mean?
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=159)** We haven't gotten into derivations and inheritance yet.
>
> **[2:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=164)** We'll talk briefly about it but be aware that what we can do is we can write a smart contract and make it kind of a template.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=172)** We call that an interface.
>
> **[2:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=174)** Then I can publish this interface and when I go to write a new smart contract, I can say, "Hey, my smart contract "is based on this other smart contract."
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=185)** That becomes a derivation or a derived smart contract.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=189)** Don't worry about it at this point.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=191)** We'll revisit that topic.
>
> **[3:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=192)** I just wanted to kind of prime the pump and tell you what the internal modifier meant.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=198)** And lastly, we have the private modifier.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=201)** The private modifier means that only functions in this contract can invoke a private function.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=209)** And if it's a private variable, only functions in the smart contract can access this local variable.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=216)** So nothing external and nothing in a derived contract can access it.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-1?u=76281980&t=221)** All right, let's go take a quick look at some real code and see if we can kind of unpack this just a tad more.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), private (5), public (3), let (2), interface (2)
> **Definitions:** means that (6), in other words (1)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Warnings:** be aware (1)
> **Speakers:** - one (1)

#### Solidity data modifiers, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=0)** - Okay, so now we're back in VS Code.
>
> **[0:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=2)** We're looking at our data type .sol smart contract, and I've added a little bit to it.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=8)** So you'll notice there's a new function at the very bottom.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=11)** We did have a function, getStateVariables, this is a public function, and we see that from the public keyword right here.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=21)** So what this does is it does several things, the public keyword, and by the way, there's another keyword, another modifier we haven't talked about view.
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=30)** View tells us, or tells the compiler, actually, that the body of my function will only reference local variables, in other words, I'm not touchin the blockchain.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=42)** We do that to save costs, we save gas and we also can do that to help the compiler keep us honest because now if I go into my function and I try to write code that interacts with the blockchain, the compiler is going to say, "Nope, not going to let it happen," and gives me a nasty error message, not a warning, but an error message, and I'll probably get the red squirrely line or squiggly line underneath it.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=68)** Now I love compiler messages, compiler errors especially.
>
> **[1:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=72)** The reason for that is that when I make a syntax error and the compiler catches me, it basically says, "You don't know what you're doing," but I'm okay with that because that tells me I need to fix something.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=84)** It won't let me compile code with a syntax error.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=89)** See, those are good errors.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=91)** The bad errors are the semantics errors.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=94)** A semantic error means that your program compiled correctly and the compiler says, "Yep, it looks great," but it doesn't do what you think it does, in fact it may blow up something.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=105)** And, if you test well, you should find most of those semantics errors, but sometimes you don't find them and you actually introduce a semantic error into deployed code.
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=119)** That's bad because you may or may not find it, and then you have to react to it, so compiler errors are good.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=125)** Okay, so let's come back into our function.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=128)** We see that this function is a public function.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=130)** That means that anyone can invoke it, and that's okay because it's a getter function.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=136)** We call these getters because it fetches the value of one or more values or variables and then it returns them.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=144)** In this case, we see an interesting feature of solidity in that we can return multiple values.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=151)** Some languages allow functions to only return one value at a time.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=155)** Here we can, actually, just send back a whole list of em.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=159)** All right, so let's look at our new function, here, called setbMsg and, yes, this is sometimes called a setter function.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=166)** A setter function is one in which you give it an input value and it does something with it.
>
> **[2:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=171)** So, in this case, the input to the function setbMsg is going to be a bytes32 variable, or parameter, named newValue.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=185)** So, inside the function, I'm going to say bMsg is now equal to newValue, so we're just going to set bMsg to a newValue itself.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=196)** And notice that this function is private.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=199)** So now we have a public function and a private function.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=204)** The public function is one that can be invoked anywhere and, in fact, what I could do, you remember earlier when I tested a function, I went from the command line, from the Truffle console, and I invoked a function.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=216)** Well I could invoke one function here, I can invoke getStateVariables, however, I cannot invoke setbMsg because bMsg is a private function and I cannot reach in from the outside world to invoke it.
>
> **[3:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=232)** So how in the world can I invoke it then?
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=234)** Well the function getStateVariables can call or invoke setbMsg because it's local, it's inside the same smart contract.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=245)** So a private function is one that you only want to be called internally, you don't want to expose it to the outside world.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=252)** So what does this really have to do with supply chain?
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=254)** Well it's important to understand how to create various functions for your supply chain smart contract, or really for any type of smart contract.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=263)** For example, the things that we want our smart contract to be able to do are things such as create a new product, or transfer the ownership of a product from one owner to another, that's a supply chain thing.
>
> **[4:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=277)** However, internally we may need to mess around with data to construct the right standard format of our data structure.
>
> **[4:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=286)** And we have these utility functions, they really shouldn't be exposed to the outside world because it exposes a lot of internal details.
>
> **[4:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=294)** So utility functions, such as build product structure, that might be a function that we only want to be private because we don't want external entities running that, we just need it to be there, locally, to kind of grease the wheels internally.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/solidity-data-modifiers-part-2?u=76281980&t=310)** So there's lots of reasons we may want to use private functions, but they're typically utility value or maybe security related functions, and the public functions or external functions are the ones that we expose to the outside world that allow us to actually pick that product up and move it along the supply chain.

> [!info]- Semantic Content
>
> **Code Keywords:** function (25), public (7), private (6), let (4), case, (2)
> **Code Identifiers:** setbmsg (4), getstatevariables (3), newvalue (3), bmsg (3)
> **Definitions:** is a  (3), means that (2), in other words (1)
> **CLI Commands:** find (3), make (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** vs code (1), command line (1)
> **Warnings:** warning (1)
> **Speakers:** - okay (1)

#### Revisiting gas
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=0)** - One more issue that we need to revisit is that of gas.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=4)** You have to pay for access to the blockchain, and I keep mentioning that.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=8)** So let's kind of look into some of the more granular details of how gas actually works.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=15)** So when we look at gas, we have various values we need to be concerned with.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=20)** First off, there is the gas price.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=23)** The gas price is the highest price per gas unit a transaction originator's willing to pay.
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=30)** So whoever creates the transaction actually puts in the header of the transaction, the gas price, which basically means it's the highest price.
>
> **[0:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=39)** If we go back to our analogy of transporting your friends to the beach, the gas price would be the highest price per gallon that you're willing to pay.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=49)** So it's the same thing with a transaction.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=52)** The reason why it's important is that miners are going to choose transactions that are most lucrative, in general.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=61)** What happens is if you choose a transaction with a very high gas price, that means that the reward will be a little bit higher and the miners are going to make more money.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=73)** The problem is that if you buy, or if you select a transaction with a very high gas price, it's probably going to be more complex and it's going to take longer to mine, based on the complexity algorithm in a Ethereum.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=88)** So if you cherry pick the transactions with the highest gas prices, the miner is going to spend so much time trying to mine the block with all those rich transactions that he might actually lose out because another miner has already found the solution.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=105)** So you want to pick high gas prices, as a miner, to make a little more money, but you have to balance it so that you can mine the block fast enough.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=116)** So it's all a balancing act.
>
> **[1:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=118)** In addition to gas price, we have gas limit.
>
> **[2:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=122)** That's the total number of gas units that a transaction originator's willing to pay.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=127)** Okay, so you've got the gas price, which is the price per unit, and then the total number of gas units is the gas limit.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=136)** The gas limit all depends on how complex the algorithm is or the code is.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=142)** Every operation has a specific gas requirement and you can look that up on the Ethereum website, it's all documented.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=152)** And so if you have a very complex function in your smart contract, that does a lot of blockchain operations, then you're probably going to have to spend a lot of gas to complete that entire transaction.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=166)** If you submit a transaction and your gas limit is too low to let you finish running the whole function, it will fail and will abort, and so you won't have enough gas complete the transaction.
>
> **[3:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=180)** Now that's bad if you set the gas limit too low, because your transactions are going to be bumped back to you, and you're not ever going to get them on the blockchain.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=188)** But it's good if you accidentally created an infinite loop because an infinite loop will eventually run out of gas and be bumped back to you and then you can go fix it.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=199)** So it's a protection mechanism as well.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=202)** So I talked about the fact that every operation has a specific cost and that's called the gas cost.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=209)** So for example, the add operation, when you add two numbers, costs three gas units.
>
> **[3:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=215)** The multiply operation costs five gas units.
>
> **[3:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=219)** So every operation inside the solidity language, or actually every operational on the blockchain, has a specific associated cost to it.
>
> **[3:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=229)** So you want to try to economize your algorithms so it doesn't have a cumulatively high gas cost.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=239)** Okay, so we've got the gas price, which is the highest unit price that a transaction originator's willing to pay, we have the gas limit, which is the total number of gas units a transaction originator's willing to pay, and we have the gas cost, which is the cost per operation.
>
> **[4:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=257)** So then we use all this to pull together the transaction fee.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=261)** Remember I talked about that small fee that you have to pay to actually interact with the blockchain.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=266)** That's the transaction fee.
>
> **[4:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=268)** That is the total fee for the computations in an entire transaction.
>
> **[4:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=273)** It's basically the total gas cost times the total gas price, or the gas price, I should say.
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=281)** So it's a total gas cost times the gas price.
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=285)** So we have a total amount of gas that a transaction originator is willing to pay and so you have a gas budget.
>
> **[4:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=292)** You submit the transaction and the total transaction fee is calculated based on running the transaction.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=300)** You subtract that from the gas budget and whatever's left over is called the unused gas.
>
> **[5:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=307)** What do you think happens to the unused gas?
>
> **[5:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=309)** Well, fortunately, it goes back into the account of the transaction originator.
>
> **[5:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=315)** So basically if you say I've got a hundred bucks for gas, here, let's drive to the beach.
>
> **[5:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=321)** If it only costs $85 to drive to the beach, you take $15 and put it back in your pocket.
>
> **[5:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=327)** That's the unused gas, and it's important to keep everything consistent.
>
> **[5:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=331)** And it's up to the EVM to make sure that unused gas goes back to the account of the originator.
>
> **[5:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=337)** So that's summarizes how gas actually works.
>
> **[5:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/revisiting-gas?u=76281980&t=341)** The moral of the story is understand that you have to pay for access to the blockchain and try to avoid as many of those operations that cost gas as possible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2)
> **CLI Commands:** make (3)
> **Definitions:** basically means (1), means that (1), is called (1)
> **Env Vars:** evm (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - one (1)

#### Controlling flow
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=0)** - So far, the Solidity code that we've seen is really simple.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=4)** We've seen functions that simply return a value.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=8)** We haven't done anything really interesting at all.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=11)** So the next thing we need to do is look at how Solidity allows us to control the execution of our code.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=19)** Because a smart contract is a program, it's made up mainly of functions, there's data items, and then there's functions.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=26)** And inside the functions, it's really basically just an algorithm or a series of steps of what to do, it's really instructions for the computer.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=35)** So as we provide instructions, we get to one step and based on the conditions, we may want to go one direction and we may want to go another direction based on some decision, that's called a conditional expression.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=49)** Likewise, there are some things we may want to do over and over, and that's called iteration.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=55)** So let's go take a look at some Solidity code and we'll learn how we can implement both conditional expressions as well as iterations so we can carry out exactly the types of instructions that we need for our supply chain application.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=70)** So we go back into Visual Studio Code and we see there's another smart contract called flow control.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=76)** So let's click on that, open it up.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=79)** And here we have a new flow control smart contract.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=83)** It's still very simple.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=85)** There's only one contract, flow control, inside this file and it has four functions.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=90)** And these four functions are going to demonstrate how we can implement various control flow and iteration control.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=99)** So the first one is called "calcDozenDiscountIF".
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=102)** So I'm going to demonstrate the if-else statement.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=107)** The purpose of this function is to calculate whether or not we get a dozen discount.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=111)** Let's assume we're purchasing, let's say donuts.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=115)** We have on our doughnut supply chain, I'm going to purchase a dozen donuts and I get a discount if I purchase a full dozen.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=123)** If I purchase 11, I don't get a discount, I'm going to pay 11 times whatever the per donut price is.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=129)** So this is kind of a pricing function.
>
> **[2:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=132)** This type of function, actually, I'm going to change this to private.
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=137)** That would make more sense here.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=140)** I originally had this as public, but now I'm going to make it private.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=144)** And the reason I'm doing this is because calculating a discount is probably an internal function.
>
> **[2:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=153)** All I want to do externally, is calculate the price, but internally I'm going to calculate whether or not I'm getting a discount.
>
> **[2:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=160)** All right, so the function calcDozenDiscountIF takes the purchased quantity as the input and just returns a boolean.
>
> **[2:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=169)** So inside, we're going to say, I'm going to define a local variable called "giveDozenPrice", it's a Boolean, and I'm going to pre-assign it to false.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=179)** It's very important whenever you define variables, whether they're global, which means they're at the contract level, or they're local, which means they're inside functions, always initialize variables.
>
> **[3:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=192)** Initializing a variable means as soon as you define it, put some value in there.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=197)** Uninitialized variables are the bane of program development.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=201)** What happens is if you define a variable and you forget to put something there, you get busy, you go along, you start using the variable, and all of a sudden you realize I'm using this and I'm getting weird output because you forgot to give it a starting value and you never know what's actually being stored in there until you initialize it.
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=220)** So always initialize your variables.
>
> **[3:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=222)** Okay, so giveDozenPrice is false.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=226)** Then we have an if statement.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=227)** If purchased quantity is greater than or equal to 12, do one thing, which means giveDozenPrice is true, else, giveDozenPrice is false.
>
> **[4:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=240)** So this is a conditional.
>
> **[4:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=242)** If the condition is true, then we run the code inside the first block.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=249)** If the condition is false, we run the code after the else.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=256)** So in this case, if I'm purchasing 12 or more, I get my dozen discount.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=261)** If my purchased quantity, which is my passed in value, is less than 12, then giveDozenPrice is false and then I just simply return giveDozenPrice and that means that whoever called this function is going to get a false if I passed in a value that's less than 12.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=284)** In this case, we have a single line of code attached to the if and the else.
>
> **[4:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=290)** If I have multiple lines of code, I can enclose the entire condition in curly braces like this.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=300)** Now I can add more statements afterward.
>
> **[5:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=309)** And this would say that if purchased quantity is greater than equal to 12, do everything between the curly braces.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=317)** I know I'm throwing a lot at you.
>
> **[5:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=319)** There is the assumption that you know a little bit about programming.
>
> **[5:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=322)** We don't have time or the space to cover all the nuances of how to develop programs from scratch and cover all of Solidity.
>
> **[5:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=332)** We're just going to be touching on the high points.
>
> **[5:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=335)** So if any of this is confusing, it may be worth taking a little bit of time to look up basic programming principles, look out for any online tutorials, to get a handle on things such as conditionals and expressions and what those words mean.
>
> **[5:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=350)** So we're going to kind of go fast, but I'll try to be as slow and gentle as I possibly can.
>
> **[5:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=356)** Let's look at a little bit more code now.
>
> **[5:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=358)** All right, so that is the if statement.
>
> **[6:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=361)** Let's move to another instance.
>
> **[6:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=364)** In this case, we're going to go to the second function, which is "calcDozenDiscountWHILE".
>
> **[6:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=370)** Okay, a while is an iteration structure, it means we're going to do something more than one time.
>
> **[6:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=377)** So in this case, we have a boolean, giveDozenPrice, notice it's the same name as the previous one, local variables can have the same name as a local variable from another function, because it's all local to this one function.
>
> **[6:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=391)** So I define a variable, giveDozenPrice is false, and I define a uint called "numDonuts" and I'm going to start it out as one.
>
> **[6:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=400)** So now we go into our while loop.
>
> **[6:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=403)** While numDonuts is less than purchased quantity, then we have left curly brace and right curly brace.
>
> **[6:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=410)** What the while statement does, is it iterates or runs the contents, everything that's between the curly braces, over and over and over, as long as the condition is true.
>
> **[7:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=424)** The while condition, as long as that's true, it keeps running it over and over and over and over and over again.
>
> **[7:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=429)** In most languages, it can run forever, but in Solidity, it runs until when?
>
> **[7:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=434)** Until it runs out of gas.
>
> **[7:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=436)** All right, let's go back and look at some more code.
>
> **[7:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=439)** numDonuts is equal to one 'cause that's what I set it at.
>
> **[7:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=443)** Purchased quantity is whatever we passed in so let's assume we pass in a 12.
>
> **[7:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=447)** So numDonuts being 1 is less than 12, yes, I'm going to increment numDonuts and the "++" sign is the increment operator.
>
> **[7:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=458)** That just simply means add one to it.
>
> **[7:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=461)** So I'm going to now increment donuts, numDonuts is now two and now I have an if statement.
>
> **[7:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=467)** If numDonuts is greater than or equal to 12, I am going to giveDozenPrice is equal to true and then break.
>
> **[7:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=475)** Break is a special command that says stop iterating and drop out of the iteration block.
>
> **[8:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=482)** So this basically drops me out after the while and all I do at that point is I return giveDozenPrice.
>
> **[8:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=491)** So I'll return a true and if I never got above 12, it's still set to false.
>
> **[8:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=498)** But the while block is not the only iteration structure in Solidity, there's actually a couple more.
>
> **[8:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=503)** So let's go look at those.
>
> **[8:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=505)** The last two functions, are "calcDozenDiscountDO" and "calcDozenDiscountFOR".
>
> **[8:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=512)** The do looks like a while, except it's upside down.
>
> **[8:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=516)** Notice this one, in fact, I'm going to scroll back just a tad here, there's the while and here's the do.
>
> **[8:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=522)** If we go into our block, we still have the giveDozenPrice variable and numDonuts price, but in this case, our block, our iteration structure says "do" and then we run the body and we put the while at the end.
>
> **[8:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=536)** So we say do while numDonuts is less than purchased quantity.
>
> **[9:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=540)** Well, it looks just like our while block from the previous function, except the while is put at the end.
>
> **[9:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=548)** So what's the difference between a do and a while?
>
> **[9:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=552)** It's a subtle difference.
>
> **[9:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=554)** A do is an iteration structure that runs the body one or more times.
>
> **[9:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=563)** A while structure is an iteration structure that runs the body zero or more times.
>
> **[9:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=569)** Think about that.
>
> **[9:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=570)** What about a while statement where the condition is false to start with?
>
> **[9:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=576)** We never get into the body.
>
> **[9:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=578)** If I were to pass in the value, let's say of 45 for the number of purchased quantity donuts, it's already greater than a dozen, or greater than the break point quantity, and so in that case, if it's already greater than what I'm comparing against, the while block never runs the body, we never get to the inside of the while block.
>
> **[10:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=600)** So a while iteration structure is a zero or more execution structure.
>
> **[10:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=606)** The do on the other side, we run through the body before we test our condition.
>
> **[10:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=612)** So that means we always run the body once at least, and we might run it more than once.
>
> **[10:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=617)** So that's the subtle difference between a do, it is a one iteration or more structure, whereas the while is a zero iteration or more structure.
>
> **[10:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=627)** So subtle, but you know, you can pick the one that you want that best suits your needs and your algorithm.
>
> **[10:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=632)** All right, we have one more structure to look at.
>
> **[10:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=634)** And last is the for structure or the for loop.
>
> **[10:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=638)** And a for loop is an indexed loop.
>
> **[10:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=641)** Instead of having to manually increment our numDonuts value, let's embed it in the body or in the header.
>
> **[10:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=648)** So in this case, I say for numDonuts equals one, well that pre-initializes the variable numDonuts to one, then we have a semicolon, and then we have our condition, which is the same as the while, as long as numDonuts is less than or equal to purchased quantity, every time around the loop, I'm going to increment numDonuts.
>
> **[11:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=669)** So this kind of puts the initial condition, the query condition or comparison, and then the increment condition, or the increment operation, all in the header.
>
> **[11:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=682)** So it puts it all up there and then in the body, we just simply test if it's greater than 12, let's say, giveDozenPrice is true and then break out and then finally return.
>
> **[11:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=694)** Okay, so that gives us four ways that we can control the flow of execution.
>
> **[11:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=699)** We can use conditionals or we can use one of the three loops.
>
> **[11:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=702)** We can use the while loop, the do loop, or the indexed for loop.
>
> **[11:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=707)** So those give us the ability to control exactly how our programs operate and what blocks of code get executed under which conditions.
>
> **[11:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=716)** Flow control is important for you to build into your algorithms so that you can react to real situations.
>
> **[12:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=723)** In most cases, flow control dictates what happens when things go well.
>
> **[12:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=727)** But what happens when you encounter errors?
>
> **[12:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=730)** How do you handle interruptions?
>
> **[12:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/controlling-flow?u=76281980&t=732)** Let's take a look at that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (10), case, (7), private (2), else. (2)
> **Code Identifiers:** numdonuts (14), givedozenprice (12), calcdozendiscountif (2), calcdozendiscountwhile (1), calcdozendiscountdo (1)
> **Definitions:** is a  (6), is an  (4), is called (1), means that (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** such as (1), just like (1)
> **Tools:** visual studio (1)
> **Speakers:** - so (1)

#### Handling errors
> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=0)** - Although designing good algorithms and properly using execution flow control is really what you want to focus on, you can't forget that sometimes the unexpected happens.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=12)** No program is perfect.
>
> **[0:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=14)** Nothing you write's going to be perfect in all cases.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=17)** And even if your code is really, really good, no data is perfect.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=22)** At some point, you're going to encounter some unexpected data or occurrence, and you've got to be ready for that.
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=29)** If you don't plan for errors, your software will have flaws that will come back to bite you later on.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=35)** So let's look at a few solidity features that help us deal with errors in our code.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=42)** There are three main abilities or statements that allow us to handle errors.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=49)** Two help us respond to errors, and one helps us avoid the errors in the first place.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=55)** So let's take a look at the state-of-the-art actually where things are today in Solidity.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=60)** And the reason I say that is that older versions of Solidity, the original version of Solidity used a throw command.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=69)** The throw command was really the only way to get out of a block that has an error.
>
> **[1:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=74)** It's been deprecated, don't use it, it's not the way to go.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=77)** So we're going to use the approaches that are really much, much better.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=81)** The first is the revert.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=83)** I say, it's a command, it's a function.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=85)** The revert function.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=88)** What happens is when you encounter something unexpected but possible, in other words, it's something you say, yeah, this could possibly happen.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=98)** I should say it's normal, but not unexpected.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=101)** Then the revert will undo all state changes, gives you the ability to send a return value back to the calling context, which is really, really important.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=112)** So you can inform whoever called this function that you're currently in, why it failed.
>
> **[1:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=118)** And it refunds the remaining gas to the caller.
>
> **[2:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=122)** All right, so what that means is that if you use up some gas, but you get into a function and there's a problem, you can actually revert the whole thing and you undo it.
>
> **[2:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=132)** So it's as if nothing ever happened.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=134)** In fact, the transaction really never made it to the blockchain.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=139)** So this indicates the transaction should be terminated before it's actually completed.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=144)** An example of that code might be, let's say you have code that depends only on the owner.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=150)** You can say something like if message dot sender is not equal to the owner, then revert, something like that.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=156)** Okay, the next is assert.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=159)** Assert is a command that you should never, ever, ever, ever encounter.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=163)** This means that something bad has happened you never expected to happen.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=168)** And this is just the escape hatch in case the worst happens.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=173)** What it will do is if you ever hit the assert function.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=177)** And by the way, this is probably the most similar to the old throw condition or the throw function.
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=183)** But the assert function will undo all state changes, just like the previous one.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=188)** However, instead of reverting, it uses up all the remaining gas.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=194)** So it doesn't even refund the gas back to the calling context, so it's pretty bad.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=199)** And it basically says, you tried this, it didn't work, too bad.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=202)** You're still going to pay for your gas.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=204)** So again, assert should only be the worst case solution whenever the bad stuff happens.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=211)** A much better way to handle errors is of course, to use the revert.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=216)** But even before that, why not avoid errors to start with?
>
> **[3:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=219)** We can use the require function in that case.
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=223)** So instead of responding to an error, what you can do is say, before I try this, I want you to make sure that you're the owner.
>
> **[3:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=231)** In other words, you do an ID check before you pour the beer.
>
> **[3:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=236)** Same kind of idea.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=237)** You don't pour the beer afterwards and go, wait a second, you're too young for that, that's after the fact.
>
> **[4:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=241)** So what you would do is you say, require, message sender is equal to owner.
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=248)** If you're not the owner, I'm not even going to try this function.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=251)** And so it's a very easy way to just simply return back to you, it undoes any state changes, sends a return value and refunds all the remaining gas.
>
> **[4:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=260)** So it's a very clean way of getting back out.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=263)** So I would recommend the way that you approach this, number one use require everywhere you can to avoid any errors.
>
> **[4:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=272)** If you do encounter errors, use the revert to gracefully exit.
>
> **[4:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=277)** And then if you realize that if everything goes wrong and a horrible situation occurs, that's the only place that you should use the assert function.
>
> **[4:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=286)** So that wraps up how you can respond to errors.
>
> **[4:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-7-smart-contracts/handling-errors?u=76281980&t=290)** And it also wraps up our overall view of what solidity is and how we get started using the syntax to implement our supply chain application.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), assert (6), throw (4), let (3), this, (3)
> **Definitions:** in other words (2), is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Best Practices:** you should never (1)
> **Speakers:** - although (1)


## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Smart Contracts
- Blockchain
- Ethereum

## Path Context

### In [[Build an Ethereum Blockchain App]]
← [[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]] | **7 of 11** | [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] →

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]] | **7 of 14** | [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] →

## Appears In

- [[Build an Ethereum Blockchain App]]
- [[Become a Blockchain Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] — Blockchain, Ethereum, Smart Contracts
- [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]] — Blockchain, Ethereum

---

[↑ Back to top](#)