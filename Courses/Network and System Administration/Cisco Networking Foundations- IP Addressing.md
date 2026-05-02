---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: cisco-networking-foundations-ip-addressing
url: "https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing"
duration_minutes: 95
duration: 1h 35m
level: Beginner
updated: 12/5/2024
learners: 49380
skills:
  - IP Addressing
  - Cisco Networking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHYL1WbFHdmTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660156548404?e=2147483647&amp;v=beta&amp;t=JkG8tVL92pU8DOSgGoVaa3BVPESVAdiyUS4TMN6kuNI"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Getting Started with Cisco Networks]]'
prev_courses:
  - '[[Cisco Networking Foundations Fundamentals Of Cisco Networking]]'
next_courses:
  - '[[Cisco Networking Foundations- Switching and Routing]]'
path_nav: '[{"path":"Getting Started with Cisco Networks","position":2,"total":4,"prev":"Cisco Networking Foundations Fundamentals Of Cisco Networking","next":"Cisco Networking Foundations- Switching and Routing"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/ip-addressing
  - skill/cisco-networking
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20IP%20Addressing.md)

![Cisco Networking Foundations: IP Addressing](https://media.licdn.com/dms/image/v2/C560DAQHYL1WbFHdmTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660156548404?e=2147483647&amp;v=beta&amp;t=JkG8tVL92pU8DOSgGoVaa3BVPESVAdiyUS4TMN6kuNI)

# Cisco Networking Foundations: IP Addressing

> If you’re looking to ramp up your skill set as a Cisco network administrator, you won’t get very far without IP addressing. In this course, Cisco Certified Internetwork Expert and instructor Kevin Wallace walks you through everything you need to know about IPv4 and IPv6 addressing, developing your ability to support and manage Cisco networks. Learn the basics of IPv4 addressing, converting from a 

> [LinkedIn Learning](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing) | 1h 35m | Beginner | 49K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learn IP addressing](#learn-ip-addressing)
  - [What you’ll learn](#what-youll-learn)
- [**1. IPv4 Addressing**](#1-ipv4-addressing) (15 videos)
  - [Converting from binary to decimal](#converting-from-binary-to-decimal)
  - [Converting from decimal to binary](#converting-from-decimal-to-binary)
  - [Binary practice exercise #1](#binary-practice-exercise-1)
  - [Binary practice exercise #2](#binary-practice-exercise-2)
  - [IPv4 address format](#ipv4-address-format)
  - [IPv4 address classes](#ipv4-address-classes)
  - [Public vs. private IPv4 addresses](#public-vs-private-ipv4-addresses)
  - [IPv4 unicast, broadcast, and multicast](#ipv4-unicast-broadcast-and-multicast)
  - [The need for subnetting](#the-need-for-subnetting)
  - [Calculating available subnets](#calculating-available-subnets)
  - [Calculating available hosts](#calculating-available-hosts)
  - [Subnetting practice exercise #1](#subnetting-practice-exercise-1)
  - [Subnetting practice exercise #2](#subnetting-practice-exercise-2)
  - [Calculating usable ranges of IPv4 addresses](#calculating-usable-ranges-of-ipv4-addresses)
  - [Subnetting practice exercise #3](#subnetting-practice-exercise-3)
- [**2. IPv6 Addressing**](#2-ipv6-addressing) (14 videos)
  - [Hexadecimal numbering](#hexadecimal-numbering)
  - [IPv6 address format](#ipv6-address-format)
  - [Shortening an IPv6 address](#shortening-an-ipv6-address)
  - [IPv6 address shortening exercise](#ipv6-address-shortening-exercise)
  - [IPv6 global unicast](#ipv6-global-unicast)
  - [IPv6 multicast](#ipv6-multicast)
  - [IPv6 link local](#ipv6-link-local)
  - [IPv6 unique local](#ipv6-unique-local)
  - [IPv6 loopback](#ipv6-loopback)
  - [IPv6 unspecified](#ipv6-unspecified)
  - [IPv6 solicited-node multicast](#ipv6-solicited-node-multicast)
  - [EUI-64 address](#eui-64-address)
  - [IPv6 autoconfiguration](#ipv6-autoconfiguration)
  - [IPv6 traffic flows](#ipv6-traffic-flows)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn IP addressing](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/learn-ip-addressing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/learn-ip-addressing?u=76281980&t=0)** - [Instructor] Most any time you send traffic out to the internet, to that shared printer in your [[Microsoft Office|office]] at work, or when you check the camera built in to your home's doorbell, you're sending traffic to an internet protocol, or IP address.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/learn-ip-addressing?u=76281980&t=13)** That's our focus in this course.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/learn-ip-addressing?u=76281980&t=15)** And we'll cover both the theory of [[IP Addressing]], and the behind the scenes math that we do with those IP addresses when we're designing networks.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/learn-ip-addressing?u=76281980&t=24)** Hi, my name is Kevin Wallace, I'm a double CCIE, or Cisco Certified Internet Work Expert, and I've been teaching IT courses for over two decades.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/learn-ip-addressing?u=76281980&t=34)** So join me in my [[LinkedIn]] course covering [[Cisco Networking]] foundations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[IP Addressing]] (1), [[LinkedIn]] (1), [[Cisco Networking]] (1)
> **Env Vars:** ccie (1)
> **Speakers:** - [instructor] (1)

#### [What you’ll learn](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=0)** - [Instructor] In this course, you're going to be learning about [[IP Addressing]], and we've got two types of IP addresses.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=6)** We have IPv4 addresses and IPv6 addresses.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=10)** Now I've got bad news about IPv4 addresses, and that is we're out, meaning that you cannot go to your country's numbering authority and say, "Hey, I would like to get a block of IPv4 addresses for my company."
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=22)** They're simply not available.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=24)** However, most every network that you work on today is going to to use IPv4 addressing, but we're starting to see more and more IPv6 addressing, and we will not run out of IPv6 addresses as we'll see in this course.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=37)** And in this course, we'll cover the theory of IP addressing, but also, for network design purposes, you need to know how to do some of the math behind IP addressing.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=47)** Specifically, you need to know how to do subnetting.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=50)** And to help with that, I've created some practice exercises for you.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=53)** To access a PDF containing those exercises in the overview tab of your course under the related to this course area, you can go into exercise files by saying show all.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=65)** And from there, you can download a PDF, and this PDF has several subnetting practice questions.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=71)** And after doing the calculations on your own, you can check your answer with very detailed descriptions of how to go through each calculation.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=79)** Now, if you're ready, I'm ready.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/what-you-ll-learn?u=76281980&t=80)** So join me in the next video, and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IP Addressing]] (3)
> **Env Vars:** pdf (3)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. IPv4 Addressing

[↑ Back to Table of Contents](#table-of-contents)

#### [Converting from binary to decimal](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=0)** - [Instructor] As we're working with IP version 4 addresses, it's critical that we understand binary numbering.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=6)** And in this chapter, we're going to learn how to do subnetting, we'll learn how to convert between decimal numbers and binary and binary into decimal.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=13)** Consider for example this IP version 4 address, 10.1.2.3.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=18)** Notice, we have four decimal numbers, each separated by a dot.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=22)** We call this dotted decimal notation.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=24)** And we're going to learn in our next video how to take a number like 10 and convert that into its corresponding binary number, which is going to be 00001010.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=36)** And each of these decimal numbers, they're going to be represented by eight binary digits.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=41)** And since each decimal number is going to be represented by eight binary digits, we call those eight digits an octet.
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=48)** Octo meaning eight.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=49)** So the first decimal number of 10, that's the first octet.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=53)** The second decimal number of 1, that's the second octet, and so on, where each octet can be represented with a series of eight binary digits, zeros and ones.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=63)** And by the way, the valid range of a decimal is going to be 0 through 255.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=66)** 255 we're going to learn is the biggest number you can make out of eight binary digits.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=72)** Now, in this video specifically, we want to take a look at how we can convert a binary number into decimal.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=78)** And this is going to be super simple because we can start out with this table of eight columns.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=83)** And the way you write out this table on scratch paper is to begin at the right with a 1.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=88)** And then simply double that number to the left.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=91)** 1 times 2 is 2, 2 times 2 is 4, 4 doubled is 8, 8 double to 16, and so on, until we get to the left most column, which is going to be 128.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=101)** And let's say that we had a binary number of 10010110 and we want to convert that into its corresponding decimal number.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=111)** Well, here's how we do it.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=112)** Notice that four of these columns have a binary 1 in them.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=116)** We have a 1 in the 128 column, the 16, the 4, and the 2 column.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=122)** All we have to do is add up those column headings.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=125)** In other words, what is 128 + 16 + 4 + 2? That's 150.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-binary-to-decimal?u=76281980&t=130)** And it's that simple to take eight binary digits and convert those into their corresponding decimal number.

> [!info]- Semantic Content
>
> **Versions:** version 4 (2), 10.1.2 (1)
> **Definitions:** we call this (1), in other words (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Converting from decimal to binary](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=0)** - [Instructor] In our previous video, we took a look at how to take a binary number and convert that into a decimal number.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=6)** Now, in this video, we're going to go in the opposite direction.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=8)** We're going to take a decimal number and see how to convert it into an eight-digit binary number.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=14)** And the decimal number we're going to be using in this example is 167.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=19)** And we start out with that very same table that we used in the prior video.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=22)** The table that had eight columns, we started in the right most column with a 1.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=26)** And then moving to the left, we double each time.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=28)** 1, 2, 4, 8, 16, and so on until we get to 128.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=32)** Now, we're going to take this number of 167, and begin with the left most column, the 128 column.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=37)** And we're going to ask a series of questions.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=39)** The question is is 167 equal to or greater than 128?
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=45)** Yes. Yes it is.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=46)** If the answer is yes, then we're going to place a 1 in that column.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=51)** And we find the difference.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=52)** What is the difference between 167 and 128?
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=55)** Well, if we subtract 128 from 167, we get 39.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=60)** Now, we're dealing with a 39 as we move over to the 64 column.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=64)** And we ask, is 39 equal to or greater than 64?
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=68)** This time, the answer's no.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=70)** If the answer's no, we're going to place a 0 in that column.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=73)** And we move along to the next column, the 32 column.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=76)** And here we're going to ask is 39 equal to or greater than 32?
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=81)** Yes, it is.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=82)** What do we do?
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=83)** We place a 1 in the 32 column and find the difference.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=86)** What is 39 - 32?
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=89)** It's 7.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=90)** Now we're dealing with a number of 7 as we move over to the 16 column.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=94)** And we ask, is 7 equal to or greater than 16?
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=97)** No.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=98)** If we say no, then we put a 0 on that column, and we move along.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=102)** So we're going to take our number of 7 and march over to the 8 column and ask, is 7 equal to or greater than 8?
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=108)** Again, the answer's no. What do we do?
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=110)** We place a 0 in that 8 column, and we move over to the 4 column.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=115)** Is 7 greater than or equal to 4?
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=118)** Yes, it is.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=119)** That means we place a 1 in the 4 column and we find the difference.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=123)** What is 7 - 4?
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=126)** It's 3.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=127)** Now we're dealing with a number of 3 as we move over to the 2 column.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=131)** In the 2 column, we say, is 3 greater than or equal to 2?
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=135)** Yes, it is.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=136)** Meaning we place a 1 in that 2 column and we find the difference.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=141)** What's the difference between a 3 and 2?
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=143)** Yeah, it's a 1.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=144)** And we take that number of 1 and move over to the final column, the 1 column.
>
> **[2:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=148)** And we ask is 1 equal to or greater than 1?
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=152)** Yeah, it's equal to 1.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=154)** So we're going to place a 1 in that column.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=156)** And there is no difference between 1 and 1, so we have no remainder.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=161)** And we're done.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/converting-from-decimal-to-binary?u=76281980&t=162)** We have now converted the decimal number of 167 into a corresponding binary number of 10100111.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Binary practice exercise #1](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=1)** It's now your turn to get some practice converting between binary and decimal.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=5)** In this exercise, I want to challenge you to take a binary number of 01101011 and convert that into a corresponding decimal number.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=16)** You might want to pause the video right now and when you're done, resume the video and we'll go through the solution together.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=22)** (lively music) All right, how did you do?
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=29)** Let's go through the solution together.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=31)** Recall that we start with that eight-column table.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=34)** And in that header row of this table, we start at the right with a number of one and we double as we move to the left.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=42)** We do that for eight columns where the leftmost number is a 128.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=47)** And to convert a binary number into a corresponding decimal number, all we have to do is to superimpose those eight binary digits in that table.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=56)** And in that table, every time we have a column containing a one, we add up that column heading.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=62)** In this case, we have a one in columns 64, 32, eight, two and one.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-1?u=76281980&t=68)** So we simply sum up 64, 32, eight, two, one to give us a decimal number of 107.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Binary practice exercise #2](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=0)** - [Instructor] In our previous video, you got some practice converting a binary number to a decimal number.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=5)** Now let's go in the opposite direction.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=7)** This time I'll want to challenge you to take the decimal number of 49 and give to me an eight-bit binary number that equals 49.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=16)** You might want to pause the video right now, then resume and we'll go through the solution together.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=21)** Okay, let's see how you did.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=29)** We start, as we always do, with that eight-column table where the headers in that table begin with a one on the right and then for each column, we double that value.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=38)** We go from one, two, four, eight, 16, 32, and so on until we get a 128 in that leftmost column.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=45)** And we're going to ask a series of questions.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=47)** We're going to take that number of 49 and we start with the leftmost column, and we ask is 49 equal to or greater than 128?
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=56)** No, it's not.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=57)** If the answer's no, then we're going to place a zero in that column and we take our number 49 and we march over to the 64 column.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=65)** In the 64 column, we ask is 49 equal to or greater than 64?
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=70)** And the answer again is no, so we'll once again place a zero in that column, and move over, in this case, to the 32 column.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=77)** In the 32 column, we say is 49 equal to or greater than 32?
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=82)** Yes, it is.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=84)** If the answer's yes, we place a one in that column.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=87)** And we find the difference.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=89)** What is the difference between 49 and 32?
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=93)** Well, if we subtract 32 from 49, we get 17.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=97)** And we take that number and go to the next column, which is the 16 column and we ask is 17 equal to or greater than 16?
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=105)** Barely.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=106)** The answer's yes but since the answer's yes, we'll place a one in that column and we'll find the difference.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=111)** What is the difference between 17 and 16?
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=114)** It's a one.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=115)** And then we'll take the one and go to the eight column.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=118)** And let me pause right here and see if you can make a leap in logic.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=121)** You might notice that since we're dealing with a value of one, the answer as to whether or not a one is equal to or greater than a particular column heading, the answer's going to be no for columns eight, four and two.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=133)** We could just go ahead and write zeros in this columns and jump immediately to the one column and place a one there.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=140)** If you're able to see that leap in logic, that can save you a bit of time but we'll just walk through it as if we didn't notice that.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=146)** We'll go to the eight column and we'll say is one equal to or greater than eight?
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=150)** The answer's no.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=151)** What do we do?
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=152)** We place a zero in that column and we move over to the four column.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=156)** In the four column, we say is one equal to or greater than four?
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=159)** And again, the answer is no.
>
> **[2:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=161)** What do we do?
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=162)** We place a zero in that column and move over to the two column.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=166)** Is one equal to or greater than two?
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=168)** No, it's not.
>
> **[2:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=169)** So again, we place a zero in that column and we move along.
>
> **[2:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=173)** And we finally find ourselves in the one column, and we ask is one equal to or greater than one?
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=179)** Yes. It's equal to one.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=181)** And since the answer's yes, we'll place a one in that column and there is no difference.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=186)** One minus one is zero.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=188)** But that is our result.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/binary-practice-exercise-2?u=76281980&t=190)** We've now determined that a decimal number of 49 has a binary equivalent of 00110001.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** go to (3)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [IPv4 address format](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=0)** - [Instructor] In this video, let's consider the format of an IP version 4 address.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=5)** And as an analogy, let's say that you asked your friend for their address, and they wrote it down on a piece of paper.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=11)** And this is what it looked like.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=13)** 27837th Street.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=16)** There's this big number, and we don't know what portion of that number refers to the street and which portion refers to the house number on that street.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=25)** For example, did they mean to say 278 37th Street or perhaps they meant 2783 7th Street.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=33)** We're not sure where the dividing line is between the house number and the street number.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=39)** That's the challenge that we have with an IP version 4 address.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=42)** Because an IP version 4 address has 32 bits total.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=46)** And we talked earlier about this dotted decimal notation.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=49)** We have an example, IP version 4 address of 10.1.2.3.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=54)** And if we break each of those four decimal values down into their eight binary values, that's going to be a total of 32 bits, as you see here on screen.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=65)** The question is, which of those bits represent the network, analogous to the street address, and which bits represent the host, analogous to the house number on that street?
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=78)** Well, the dividing line is determined by something called a subnet mask.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=81)** And a subnet mask is also 32 bits in length.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=84)** And it's a series of ones followed by a series of zeros.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=89)** So you would never have 10101100.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=93)** You would never have a situation where you went back and forth between zeros and ones.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=97)** No, it's always a series of ones followed by a series of zeros.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=102)** And anytime we have a one in the subnet mask, that represents a network bit.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=108)** So in this case, the first eight bits in our subnet mask are ones.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=112)** That means the first eight bits in my address of 10.1.2.3, it means the first eight bits are also network bits.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=121)** And the last 24 bits in my subnet mask are all zeros.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=125)** Those are host bits.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=126)** When we have a zero, that's a host bit.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=129)** Meaning that the last 24 bits in my IP address, those are also representing the host.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=135)** So now we know where this dividing line is.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=138)** And let's say that you ask your friend once again for their IP address.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=141)** This time they said, "My IP address is 10.1.2.3."
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=145)** Well, that is their IP address, but we don't know precisely what network they reside on.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=151)** There's no subnet mask information.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=153)** One way they could tell you that subnet mask information is to give you an address like this.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=158)** They could say, "Oh, my address is 10.1.2.3/8."
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=162)** The /8 means we have eight ones in our subnet mask.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=168)** This is sometimes called prefix notation or CIDR notation, C-I-D-R.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=174)** That stands for classless inter-domain [[Routing]].
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=176)** Or sometimes we simply call this slash notation.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=179)** But whether we say prefix or CIDR or slash, that's where we have a forward slash followed by the number of ones in the subnet mask.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=187)** Another way to communicate subnet mask information is for them to say, "Oh, my IP address is 10.1.2.3 255.0.0.0."
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=198)** That is the subnet mask in dotted decimal notation.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=202)** Notice in the first octet in the subnet mask, we have all ones.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=206)** And as we've mentioned previously, if we have an octet with all ones, that equals the 255.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=212)** So the 255 says, "The first eight bits, they're ones."
>
> **[3:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=216)** And then we have .0.0.0.
>
> **[3:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=219)** That means the last 24 bits are host bits.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-format?u=76281980&t=222)** And that's another way of communicating, not just our IP address, but our subnet mask, which defines the network on which our IP address resides.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Versions:** 10.1.2 (5), version 4 (4), 255.0.0 (1), 0.0.0 (1)
> **Definitions:** refers to (2), stands for (1)
> **Analogies:** analogous to (2), for example (1)
> **Env Vars:** cidr (2)
> **Speakers:** - [instructor] (1)

#### [IPv4 address classes](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=0)** - [Instructor] Later in this chapter, we're going to get into the math behind subnetting and as part of that math, we need to be able to look at an IP version 4 address and recognize what class of address are we looking it?
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=11)** It is a class A address or a class B, C, D or E?
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=14)** And the key is the first octet.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=17)** We should be able to look at the first octet and say oh, this is a class A address, or this is a class C address or so on.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=23)** And the way we recognize a class A address is in that first octet.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=28)** The value's going to be in the range of 1 through 126.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=32)** And a key piece of information to know about a class A address is it has a default subnet mask of 255.0.0.0 or as we learned earlier, we could write that in slash notation or prefix notation as /8, meaning that it has eight network bits, implying that it has 24 host bits.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=52)** A class B IP version 4 address is going to have a value in the first octet somewhere in the range of 128 through 191 and it's going to have a different default subnet mask.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=62)** Sometimes called a classful mask or a natural mask.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=65)** And it's going to be 255.255.0.0 or we could write that in prefix notation as /16.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=73)** Now, you might be wondering what happened to 127?
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=75)** It seems like we skipped over that.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=77)** Well, 127 is reserved for a special purpose.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=81)** It's called a loopback interface.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=83)** We have a special IP address of 127.0.0.1, which refers to our local machine that we're on.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=90)** Next up, we have a class C address and it's going to have a value in the first octet somewhere in the range of 192 through 223.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=97)** Its default subnet mask or classful or natural subnet mask is 255.255.255.0.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=106)** We've got lots more network bits now.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=108)** We've got a /24 mask in prefix notation, meaning we have 24 network bits and we have 32 bits total, meaning that we have eight host bits.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=116)** Things get a little bit different when we go to a class D IP address.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=120)** A class D IP address is going to have a value in the first octet of 224 through 239.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=126)** And notice, there is no default subnet mask.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=129)** Why is that?
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=130)** Because you will never assign a class D address to a host.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=135)** This is only going to be used as a destination address, specifically for multicasting.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=141)** We'll talk about multicasting a little bit later in this chapter but with multicasting, if I want to reach a group of devices that want to receive a video stream as an example, I can send that video stream to a single IP address, a multicast IP address, and that stream is going to be replicated and sent just to members of that multicast group identified by a class D IP address.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=166)** So that's the reason we don't have a subnet mask.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=168)** We will never assign to a host.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=170)** It's always going to be a multicast group number.
>
> **[2:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=173)** And finally, we have a class E IP address.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=176)** It's going to have a value in the range of 240 through 255 in the first octet.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=181)** And predict you'll never run into one of these.
>
> **[3:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=183)** Personally, I've been doing networking with IP version 4 addressing for over three decades and I've already heard that a class E IP address is reserved for experimental purposes.
>
> **[3:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=194)** I've never run into such an experiment and I doubt that you will either, especially since, as we're going to see in our next chapter, IP version 6 is going to be taking over at some point IP version 4.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-address-classes?u=76281980&t=206)** So a class E IP version 4 address, I doubt that you'll ever see it but technically, it's said to be reserved for experimental purposes.

> [!info]- Semantic Content
>
> **Versions:** version 4 (5), 255.0.0 (1), 255.255.0 (1), 127.0.0 (1), 255.255.255 (1)
> **Definitions:** is a  (3), refers to (1)
> **Cross-References:** later in (1), next chapter (1)
> **UI Navigation:** go to (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Public vs. private IPv4 addresses](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=0)** - [Instructor] When it comes to IPv4 addressing, I've got some bad news and the bad news is we're out of IPv4 addresses.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=7)** And what I mean by that is you can no longer go to your country's numbering authority and say, "Hey, I would like a class C block of IP addresses."
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=14)** There are none available.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=15)** In fact, about all you can hope for is one or maybe a few IP addresses that are publicly routable that you can get from your internet service provider.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=23)** Those are public IPv4 addresses.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=26)** Now, when we talk about a public IPv4 address, we mean that it is routable around the internet.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=32)** However, we just said we don't have enough of these to go around.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=35)** So if I'm putting up a new [[Microsoft Office|office]] building and it's going to have a thousand clients inside of it, how do I give all those clients a unique IPv4 address if we don't have enough addresses?
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=45)** Well, what we can do is turn to some private [[IP Addressing]].
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=49)** It's called RFC 1918 Addressing.
>
> **[0:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=52)** And what this means is we're going to use ranges of private IP addresses that can be routed within our company, but not on the public internet.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=62)** That's going to allow multiple companies to use the same RFC 1918 private IP address spaces.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=70)** And does that mean they cannot communicate on the public internet?
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=72)** No, they certainly can using a technology we will learn about later in this course called NAT, Network Address Translation.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=79)** But for now, understand public IP addresses are routable on the internet.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=83)** RFC 1918 Addressing is private IP addressing and it can be routed within our company, but it cannot be routed on the public internet.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=90)** And there's one other type of private IP address I want you to know about.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=94)** It's called an APIPA address, automatic private IP addressing.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=98)** You might see this when you put a [[Microsoft]] [[Windows]] computer on a network.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=101)** You boot it up.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=102)** You don't assign it an IP address, and it's not able to dynamically obtain an IP address from a [[DHCP]] server.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=109)** So it says, I guess I'll just assign myself an IP address and it does that from this block of APIPA addresses.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=116)** Now, an APIPA address is only valid on a network segment.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=121)** In other words, not only can it not be routed on the public internet, it cannot be routed even inside your organization.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=127)** It's only valid on its local network segment.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=130)** In other words, it cannot pass through a router.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=132)** It's only valid on its own broadcast domain as we discussed previously.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=136)** And I want you to be able to recognize these different blocks of addresses.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=140)** First, let's consider a Class A RFC 1918 private IP address.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=146)** If the IP address starts with a 10 followed by anything, we're dealing with a private IP address, and you might see this used in many companies because we're dealing with a class A address here with over 16 million available hosts, so this is going to accommodate just about any company's network for internal numbering and internal [[Routing]].
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=166)** We're just not able to route it on the public internet.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=168)** We have to use that feature called NAT that we mentioned to do that.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=172)** There's also an RFC 1918 private IP address block for class B addresses.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=177)** And you'll recognize that if the first two octets are in the range of 172.16 followed by anything all the way through 172.31 followed by anything.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=188)** And notice I've got another row in this table for a privately class B IP address base.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=193)** This is that APIPA address that I talked about.
>
> **[3:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=196)** If your IP address begins with a 169.254 followed by anything, you're dealing with an APIPA address.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=202)** It's probably telling you that your computer did not get assigned an IP address, so it just made one up.
>
> **[3:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=208)** And this IP address is not routable even within your company.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=211)** It's only valid on its local broadcast domain.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=214)** And finally, we have one other block of RFC 1918 addresses and it's a class C block and it begins with a 192.168.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=222)** If you see 192.168 followed by anything, that is an RFC 1918 private IP address block.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/public-vs-private-ipv4-addresses?u=76281980&t=229)** And that's a look at how to recognize private IPv4 addresses that we might use within our company even though they're not routable on the public internet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IP Addressing]] (3), [[Microsoft Office|Office]] (1), [[Microsoft]] (1), [[Windows]] (1), [[DHCP]] (1)
> **Env Vars:** rfc (7), apipa (5), nat (2), dhcp (1)
> **Documentation:** rfc (7)
> **Versions:** 192.168 (2), 172.16 (1), 172.31 (1), 169.254 (1)
> **Cross-References:** later in (1), we discussed (1), we mentioned (1)
> **Definitions:** in other words (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [IPv4 unicast, broadcast, and multicast](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=0)** - [Instructor] My goal for you in this video is to understand three different IP version 4 communication flows and to illustrate these three different types of flows, let's consider a scenario.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=12)** Let's imagine that at 2:00 PM today, our company's CEO is going to make an announcement over a video, and it's going to be coming from this video server you see on screen.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=21)** Now, PCs 1 and 2, they want to receive the video.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=23)** They want to see what the CEO has to say.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=25)** PC 3, that user, they're on a tight deadline.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=28)** They're working on another project.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=29)** They don't want to get the video, and the question is, how do we achieve that?
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=33)** Now, for simplicity's sake, I'm just showing three PCs here, but this could be 300 PCs, where 200 wanted to receive the video, and 100 did not want to receive the video, but first let's consider IP version 4 unicast.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=46)** A unicast packet goes from one source IP address to one destination IP address.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=53)** So notice the video server sent two packets, one to 10.1.1.1, another one to 10.1.1.2, and it did not send a packet to 10.1.1.3.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=63)** So we could think of IP version 4 unicast as a one-to-one communication.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=67)** The challenge with our video scenario is this is simply not scalable.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=71)** If I had 200 PCs that wanted to receive the video and 100 PCs that did not want to receive the video, the poor video server would have to send 200 copies of every single video packet.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=83)** That's going to put a processor burden on the server, and it's also going to put a bandwidth burden on that link between the server and the switch, and that's not to say there's never a reason to use IP version 4 unicast.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=94)** Just in this scenario, it might not be the best fit.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=96)** Let's consider a different approach.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=98)** We could use IP version 4 broadcast.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=101)** Recall that earlier in this course we talked about broadcast domains?
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=104)** Well, here, the video server could send out just a single copy of every video packet to everybody in the broadcast domain.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=112)** In fact, we could say that on IP version 4 broadcast is one-to-all communication, where all means all devices within the broadcast domain and PC 1 and 2, they got the video.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=124)** That's great.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=125)** We only sent out one copy of every video frame from the video server that reduced its processor burden.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=131)** It reduced the bandwidth burden on that link between the video server and the switch.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=135)** The downside is PC 3 did not want to get the video, and it did because it was in the broadcast domain.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=141)** It had to take time out of its day from every single video packet and look at it and say, oh, that's not for me, discard.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=146)** That's not for me, discard, and we're putting a processor burden on PC 3.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=151)** So in this particular scenario, broadcast is not the ideal solution either.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=156)** Finally, let's consider IP version 4 multicast.
>
> **[2:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=159)** Remember when we talked about IP version 4 address classes, and we said that a class-D IP address was going to be a multicast group number, and that group number, or that IP address, that was going to be a destination address because we're never going to assign a class-D address to a device.
>
> **[2:57](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=177)** It's only going to be the destination address.
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=179)** In this case, let's say that we created an IP multicast group with an IP address of 239.1.1.1.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=186)** That's a class-D IP address, and the video server is going to send out just one copy of every video packet, and the switch, or if we had any routers, they would replicate those packets and send them just to members of the multicast group, PCs 1 and 2.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=202)** So in this case, it's the best of all worlds.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=205)** We only had to send out a single copy of every video packet from the video server.
>
> **[3:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=209)** Only the PCs that wanted to get the video got the video, and PC 3, that did not want to get the video, did not have to get the video.
>
> **[3:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv4-unicast-broadcast-and-multicast?u=76281980&t=216)** So we could say that IP version 4 multicast is one-to-many communication, where many refers to the members of a multicast group.

> [!info]- Semantic Content
>
> **Versions:** version 4 (9), 10.1.1 (3), 239.1.1 (1)
> **Env Vars:** ceo (2)
> **Cross-References:** earlier in (1), we talked about (1)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [The need for subnetting](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=0)** - [Narrator] We know that Class A, B, and C IP version for networks have a default subnet mask, but sometimes we might want to change that default subnet mask, and that's called subnetting, when we're adding bits to that subnet mask.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=14)** Let's take a look at a couple of reasons we might want to alter that default subnet mask.
>
> **[0:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=18)** Consider, for example, a company with these two locations.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=21)** We have router R1 at one site, router R2 at the other site, and these routers are interconnected with a dedicated line, and we need to assign IP addresses to these routers.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=30)** And we're going to use the network of 192.0.2.0/24.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=34)** We know it's a class C network we're dealing with because the value in the first doc is 192.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=39)** And we know that a class C network has a default subnet mask of /24.
>
> **[0:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=45)** So let's assign some IP addresses to these routers.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=47)** We'll say that R1 is going to have an IP address of 192.0.2.1 and R2 is going to have an IP address of 192.0.2.2.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=56)** The challenge is in this entire network we only needed two addresses.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=60)** We've wasted addresses in the range of 192.0.2.3 all the way through 192.0.2.254.
>
> **[1:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=68)** In other words, we've wasted 252 addresses.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=72)** They cannot be used anywhere else because that would be a different network.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=76)** And this is with a Class C network.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=78)** Think about a Class A network.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=80)** with a Class A network, there are over 16 million addresses that we could assign to our devices.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=86)** If we have fewer than 16 million addresses on a network, and we must definitely do, then we're wasting IP addresses if we just leave the Class A address at its default subnet mask.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=97)** with a Class B network, we've got over 65,000 IP addresses we could assign or in our case that we just saw here.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=103)** With a Class C network, we have 254 addresses that we can assign.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=108)** And sometimes we just don't need that many.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=110)** Instead we might benefit from having more networks with fewer hosts on each network.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=115)** We're going to see how to do that in this chapter.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=117)** Specifically, we're going to see how to take a network, a Class A, B or C network and subnet it to divide it up into different individual networks each with a fewer number of hosts.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=128)** Another reason we might want to change the default subnet mask is for summarization.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=134)** This is sometimes called supernetting.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=136)** This is where we're not adding bits to the default subnet mask.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=140)** We're subtracting bits.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=141)** Let's say that we're an internet service provider, and we have so many different network advertisements to send out.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=147)** It would be better for our router's memory and processor if we could send out a single network advertisement that would encompass multiple networks.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=156)** Consider these four networks.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=157)** Let's say that we wanted to advertise 192.168.1.0, 192.168.14.0.25.0 and .30.0.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=167)** Instead of sending those four separate advertisements, what if we sent a summary advertisement that encompassed all four of those addresses?
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=176)** How can we do that?
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=178)** Well, if we look at these addresses in binary, we'll see that they have a lot in common.
>
> **[3:02](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=182)** We know that they have the first two octets in common because they all begin with 192.168, but if you look at that third octet, do you notice that they have the first three bits in common?
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=193)** So if we add this up, eight bits for octet 1, eight bits for octet 2, we've got three common bits in octet 3.
>
> **[3:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=199)** We have 19 bits that are in common.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=202)** So what we could do is use a /19 subnet mask and advertise all of these networks with one advertisement.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=212)** Here's how that would work.
>
> **[3:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=213)** Our subnet mask would have 19 ones and 13 zeros because we have 19 bits in common.
>
> **[3:40](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=220)** If we converted that to decimal, then that would be a subnet mask in decimal of 255.255.224.0.
>
> **[3:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=228)** Do you see how we get the 224 in the third octet?
>
> **[3:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=231)** We've got three ones.
>
> **[3:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=233)** Remember our conversion table?
>
> **[3:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=235)** That's 128 plus 64 plus 32.
>
> **[3:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=238)** That gives us the 224.
>
> **[4:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=240)** Now, what network are we going to be advertising with this subnet mask?
>
> **[4:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=244)** Well, it's going to be the first 19 bits that are in common followed by 13 zeros.
>
> **[4:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=249)** You see, a network address has all host bits set to a zero.
>
> **[4:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=254)** So it would look like this.
>
> **[4:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=256)** And in decimal, this would translate to 192.168.0.0, and we're going to be using a /19 subnet mask.
>
> **[4:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=265)** So what a service provider could do is send a single advertisement of 192.168.0.0/19.
>
> **[4:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=273)** And that single advertisement would encompass all four of those individual network addresses.
>
> **[4:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/the-need-for-subnetting?u=76281980&t=278)** And that's another reason that we might want to alter a default subnet mask.

> [!info]- Semantic Content
>
> **Versions:** 192.0.2 (5), 192.168.0 (2), 192.168.1 (1), 192.168.14 (1), 0.25.0 (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Calculating available subnets](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=0)** - [Instructor] Now that we understand that we have the option of altering the default subnet mask of an IP address, let's see how many subnets get created when we add bits to that subnet mask.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=11)** Here's the formula.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=12)** It's two raised to the borrowed bits.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=13)** That's how many subnets get created.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=16)** And S in this case, that's the number of borrowed bits.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=19)** What's a borrowed bit?
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=20)** Well, a borrowed bit is a bit beyond the natural or the default subnet mask.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=24)** Let's go through an example.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=26)** Let's say that we've got a subnet mask of 255.255.255.224.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=31)** And we've applied that to a class C network of 192.168.1.0/24.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=38)** That's the default mask, because a 192 in the first octet says this is class C network.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=44)** So we know that has a default or a natural subnet mask of /24.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=49)** But we've applied this other subnet mask.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=51)** Let's see how many subnets get created.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=53)** And we've already answered the first question which is what is the network class?
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=57)** Well, there's a 192 in that first octet so we know it's a class C network.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=61)** And what is the natural mask of class C network?
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=64)** It's a 24-bit subnet mask /24, or we could say 255.255.255.0.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=72)** What is the subnet mask that we've applied?
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=74)** Well, it's 255.255.255.224 or a /27 subnet mask.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=81)** And how many bits did we borrow?
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=83)** In other words, how many bits did we add to the natural mask to get a /27 mask?
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=89)** Well, we have three borrowed bits in that four octet.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=93)** We have 3 ones, 128 + 64 + 32 that gives us 224.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=99)** We've got 3 ones followed by 5 zeros.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=101)** How many subnets get created if we've added three borrowed bits?
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=105)** Well, we're going to use that formula, two raised to the power of S, where S is the number of borrowed bits.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=110)** And in this case, 2 raised to the power of 3 equals 8.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-subnets?u=76281980&t=114)** We've created eight subnets by borrowing or adding three bits to the default subnet mask.

> [!info]- Semantic Content
>
> **Versions:** 255.255.255 (3), 192.168.1 (1)
> **Definitions:** is a  (1), in other words (1)
> **Speakers:** - [instructor] (1)

#### [Calculating available hosts](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=0)** - [Instructor] Now in this video, we want to take a look at how many available host IP addresses we have when we apply a certain subnet mask.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=7)** Because the longer we extend the default subnet mask, the fewer number of assignable IP addresses we have in a subnet.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=14)** Here's the formula we're going to use.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=16)** The number of assignable IP addresses in a subnet is two raised to the power of h minus two where h is the number of host bits.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=23)** Remembering there are 32 bits in an IP version four address.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=27)** So if I had, for example, a /27 subnet mask, that means I would have five host bits.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=34)** But let's pause and address the question why are we subtracting two?
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=38)** Well, we cannot assign the network address to a host.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=42)** The network address is where all host bits are set to zeros.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=46)** We also are not allowed to assign a directed broadcast address to a host.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=50)** A directed broadcast address is where we have all of the host bits set to a one.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=55)** And if somebody were to send traffic to that directed broadcast address, that traffic would go to every host in that broadcast domain or in that subnet.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=63)** Let's go through an example.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=64)** Let's say that we have a subnet mask of 255.255.255.224.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=70)** We've applied that to a Class C network of 192.168.1.0/24 and we want to figure out how many hosts we can support in a subnet that we created by adding bits to the default subnet mask.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=84)** The first question we ask is how many ones do we have in the subnet mask?
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=89)** If my subnet mask is 255.255.255.224, that's a /27 subnet mask.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=97)** We have three ones in that fourth octet of our subnet mask.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=101)** 128 plus 64 plus 32, that's 224.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=105)** And now that we know how many ones or network bits we have, we ask how many host bits do we have?
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=111)** Well, grand total, we have 32 bits in the address.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=114)** 27 of those are network bits.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=116)** That leaves five host bits.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=118)** How many hosts can we support?
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=120)** In other words, how many assignable IP addresses do we have in one of these subnets?
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=125)** Let's plug into the formula two raised to the power of h minus two.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=128)** In this case, h is five, that's the number of host bits.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=132)** Two raised to the power of five is 32, but we have to subtract two.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=135)** We cannot include the network address where all host bits are zeros and we cannot include the directed broadcast address where all host bits are set to a one.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-available-hosts?u=76281980&t=144)** So we subtract two from 32, giving us an available number of hosts, in other words, an available number of assignable IP addresses of 30.

> [!info]- Semantic Content
>
> **Versions:** 255.255.255 (2), 192.168.1 (1)
> **Definitions:** in other words (2)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Subnetting practice exercise #1](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=0)** - [Instructor] Let's get some practice with our subnetting calculations.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=3)** We'll go through this first practice exercise together, and then, in our next video, I'll challenge you to do one of your own.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=8)** In this practice exercise, here's the problem we're challenged with.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=12)** Your company has been assigned the 172.20.0.0/16 network for use at one of its sites.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=19)** You need to use a subnet mask that will accommodate 47 subnets while simultaneously accommodating the maximum number of hosts per subnet.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=28)** And the question we need to answer is what subnet mask will you use?
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=33)** Now notice when it says we need to have the maximum number of hosts per subnet, that means we should not use more bits in our subnet mask than needed.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=42)** We have to accommodate 47 subnets, but let's not add any network bits beyond what's required to meet that criterion because the more subnet bits we add, the fewer number of hosts we can have for subnet.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=56)** So let's go through the solution together.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=58)** First, we might want to jot out on some scratch paper the number of subnets that get created when we borrow a certain number of bits.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=65)** This is going to be the powers of two.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=66)** Remember, the formula two raised to the power of s?
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=69)** That's the number of subnets that get created where s is the number of borrowed bits.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=74)** If I don't borrow any bits, in other words, s equals zero, then the number of subnets we have is one.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=80)** We haven't done any subnetting at all.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=81)** We have our original network.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=83)** So two raised to the power of zero, anything raised to the power of zero is a one.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=87)** If we borrow one bit, two raised to the power of one is a two.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=90)** If we borrow two bits, two raised to the power of two is four and so on.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=94)** And in our case, we need to support 47 subnets.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=98)** And none of these exactly equals 47.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=101)** If I borrow five bits, that's not going to quite be enough.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=104)** That would only give us 32.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=106)** If I borrow six bits, that's more than enough.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=109)** That would give us 64 available subnets.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=112)** However, that is the fewest number of borrowed bits I can use and still meet the requirement of supporting 47 subnets.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=119)** So we've got to go with six borrowed bits.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=121)** And this is a Class B network.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=124)** We know that because there's a 172 in the first octet.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=127)** That's why I was saying earlier that it's critical to be able to recognize a class of IP address, because if we didn't know what class this was, we would not know what the default mask was that we would be adding these borrowed bits to.
>
> **[2:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=139)** But we know this is a Class B network and a Class B network has 16 bits by default in its subnet mask.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=146)** And we've determined that we need to borrow six bits in order to meet this design requirement.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=151)** So if I add six bits to the default of 16 bits, that's going to give me a 22 bit subnet mask.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=157)** And if we write that in dotted decimal, that's going to be a 255.255.252.0.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-1?u=76281980&t=164)** That's the subnet mask that we should apply to support 47 subnets.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), in other words (1)
> **Versions:** 172.20.0 (1), 255.255.252 (1)
> **Cross-References:** next video (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Subnetting practice exercise #2](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=0)** - [Instructor] In this video, I'm going to challenge you to do your own subnet calculation to meet this design requirement.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=5)** We're told that your company has been assigned the 172.20.0.0/16 network for use at one of its sites.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=13)** And I want you to calculate a subnet mask that will accommodate 100 hosts per subnet while maximizing the number of available subnets.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=22)** In other words, don't use more host bits than you absolutely need because if you use more host bits than you need you're reducing the number of available subnets.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=30)** The question is what subnet mask will you use?
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=33)** You might want to pause the video now do the calculation on your own, and when you're done return and we will walk through a solution together.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=40)** (jazz music) All right, how did you do in your calculation?
>
> **[0:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=48)** Let's go through a solution together.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=50)** We're told that we need to determine how many host bits are required to accommodate 100 hosts.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=56)** Do you recall the formula we used to calculate the number of hosts.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=60)** It was two raised to the power of H minus two where H was the number of host bits.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=64)** So again, we might want to write out a table to say if I have this many host bits, how many hosts, in other words how many available IP addresses, does that give me.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=72)** If I had, for example, two host bits, two raised to the power of two is four, but we have to subtract two because we cannot assign the network address where all the host bits are zeros and we cannot assign the directed broadcast address where all the host bids are ones.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=87)** So four minus two is two.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=89)** If I had four host bits, two raised to the power of four is 16.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=94)** Let's subtract two.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=95)** That's going to give me 14 supported hosts.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=97)** But in this case, we're required to accommodate 100 hosts.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=101)** And as we look through our table we see that six host bits doesn't quite give us enough.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=106)** Seven gives us more than enough but we have to round up to seven because six is not enough.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=112)** We're going to be using seven host bits.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=114)** And we know that an IP version four address has 32 bits total.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=118)** And if I need seven host bits that means my subnet mask is going to have 25 ones in it.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=123)** We're going to have a slash 25 subnet mask because 32 minus seven, it gives us 25 subnet mask bits.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=131)** We've got 25 ones followed by seven zeros in that subnet mask.
>
> **[2:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=136)** That means our subnet mask is slash 25.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-2?u=76281980&t=138)** And if you want to write that in dotted decimal that will be 255.255.255.128.

> [!info]- Semantic Content
>
> **Versions:** 172.20.0 (1), 255.255.255 (1)
> **Definitions:** in other words (2)
> **Prerequisites:** required to (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (jazz music) (1)

#### [Calculating usable ranges of IPv4 addresses](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=0)** - [Instructor] Once I decide on what subnet mask to use and I know how many subnets I'm creating, how do we calculate those subnets and what usable IP addresses do I have in each of those subnets?
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=10)** That's what we're going to see how to do in this video.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=12)** As a super simple example, let's say that I've got this class B network 172.25.0.0/16 and I apply a 24-bit subnet mask to this network.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=24)** So I'm borrowing, in other words, I'm adding eight bits.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=28)** And what we're going to learn how to do in this video is determine how do I figure out what the next subnet is and the next and the next.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=35)** What we're going to do in this case is we're going to count by ones in the third octet.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=39)** So our subnets are going to be 172.25.0.0/24, the next subnet is going to be 172.25.1.0/24, then .2.0 and so on all the way up to 172.25.255.0/24.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=57)** What we're doing is counting by one in the third octet.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=60)** And when I say we're counting by one, we're counting by something called the block size and we're counting in the third octet.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=67)** We're going to call that the interesting octet.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=69)** Now let's first define the interesting octet.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=73)** That is the last octet in our subnet mask to contain a binary one, or we could think of that as being the last octet in a subnet mask to have a non-zero value.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=83)** Let's take a look in our example.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=85)** We have a network of 172.25.0.0/24.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=89)** What is the interesting octet?
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=90)** Well, a /24 subnet mask has ones in the first three octets and it has zeros in the fourth octet.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=97)** The question is which octet is the last octet to have a one?
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=102)** It's the third octet. That is our interesting octet.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=105)** We need to count by the block size in the interesting octet.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=110)** How do we determine the block size?
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=111)** That's going to be the increment that we're counting by as we're counting in the interesting octet.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=116)** And the formula for calculating the block size is this, the block size is going to be 256 minus whatever the subnet's interesting octet value is.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=127)** In our case, we have a subnet mask of 255.255.255.0 We said the third octet was the interesting octet.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=137)** What is the value in the interesting octet? It's 255.
>
> **[2:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=141)** Therefore, the block size is 256 minus 255 or one.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=147)** We're going to count by one, the block size, in the third octet, the interesting octet.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=152)** That's how we're going to calculate our subnets.
>
> **[2:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=155)** Now, our network address is where we have all of the host bits set to a zero, and a directed broadcast address is where we have all of the host bits set to a one and we cannot assign those.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=166)** Those are not going to be assignable.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=167)** Let's take a look at how we're going to calculate the usable range of IP addresses for our first subnet.
>
> **[2:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=173)** Our first subnet before we start counting by our block size at all is going to be 172.25.0.0 and we're using a /24 mask.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=186)** And in the network address, the last eight bits are zeros.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=188)** For the directed broadcast address, the last eight bits are ones.
>
> **[3:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=192)** And if we were to put that into dotted decimal, that gives us a directed broadcast address of 172.25.0.255.
>
> **[3:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=201)** Let's now count by a one in the interesting octet.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=204)** In other words, we're going to count by one in the third octet.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=207)** And when we do that, our next network address is going to be 172.25.1.0 and the directed broadcast address is 172.25.1.255.
>
> **[3:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=218)** And the usable IP addresses for subnet are all of the addresses between the network address and the directed broadcast address.
>
> **[3:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=225)** In our example, our first network was 172.25.0.0, the directed broadcast address was 172.25.0.255.
>
> **[3:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=234)** The usable range of IP addresses for that subnet was everything between those numbers.
>
> **[3:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=239)** Our useful range of IP addresses was 172.25.0.1 all the way through 172.25.0.254, then we count by a one in the interesting octet to get our next subnet 172.25.1.0 with a directed broadcast as we just saw of 172.25.1.255 and the usable range of IP addresses everything between the network and the directed broadcast address.
>
> **[4:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=265)** And so it continues through all of our subnets.
>
> **[4:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/calculating-usable-ranges-of-ipv4-addresses?u=76281980&t=268)** And that's how we calculate the subnets that get created when we apply a specific subnet mask and the usable range of IP addresses within each subnet.

> [!info]- Semantic Content
>
> **Versions:** 172.25.0 (9), 172.25.1 (5), 2.0 (1), 172.25.255 (1), 255.255.255 (1)
> **Definitions:** in other words (2)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Subnetting practice exercise #3](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=0)** - [Instructor] Let's go through another subnetting practice exercise together.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=3)** We've now learned how to calculate what subnets get created when we apply a specific subnet mask and how to determine what usable IP addresses we have within each subnet.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=14)** An example we went through in our previous video was fairly easy to visualize.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=19)** We counted by a one in the third octet.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=22)** However, not every subnet mask is going to neatly end at the end of an octet.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=27)** In this case, we want to apply a 26-bit subnet mask to a network of 192.168.0.0/24.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=35)** The question is what subnets get created when we do that?
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=39)** And what are the usable ranges of IP addresses we have for each subnet? The first thing we want to do is determine the interesting octet.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=46)** And our 26-bit subnet mask, it could be written in dotted decimal as 255.255.255.192.
>
> **[0:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=54)** And the last octet to contain a one, the last one that's nonzero in other words, is the fourth octet.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=60)** That's going to be our interesting octet, and we're going to count by the block size in the interesting octet, which leads to the question what is the block size?
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=69)** We said the block size was 256 minus whatever the subnet mask value was in the interesting octet.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=76)** In our case, our subnet mask is 255.255.255.192.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=82)** The interesting octet is the fourth octet.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=85)** The value in the fourth octet is 192.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=88)** So we're simply saying what is 256 minus 192?
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=92)** That gives us a block size of 64.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=95)** So we're going to be counting by 64 in the fourth octet.
>
> **[1:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=99)** And we're going to start by leaving all of the borrowed bits and host bits at zero.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=103)** So that's going to be our first network.
>
> **[1:44](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=104)** And that's going to be 192.168.0.0/26.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=109)** Then we're going to start counting by 64 in that fourth octet, giving us 192.168.0.64, .0.128, .0.192.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=120)** We cannot add 64 again because that would give us 256.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=124)** And the maximum value for an octet is 255.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=128)** So we've created these four subnets.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=130)** Now we want to determine the usable range of IP addresses within each subnet.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=135)** We know that we cannot use the network address itself where all of the host bits are zeros.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=140)** Also, we cannot use the directed broadcast where all the host bits are ones.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=144)** Well, we've already determined that the first subnet is 192.168.0.0.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=150)** How do we find the directed broadcast address?
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=152)** Well, we certainly could go through the binary math that we saw in our previous video or we could make this observation.
>
> **[2:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=157)** We could say well, the directed broadcast address of the first subnet is going to be one less than the network address of the second subnet.
>
> **[2:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=166)** The network address of our second subnet is 192.168.0.64.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=172)** Let's just subtract one from that.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=174)** And that's going to give us the directed broadcast address of our first subnet.
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=178)** 192.168.0.63.
>
> **[3:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=181)** And for that first subnet, the usable range of IP addresses, it's everything in between the subnet and the directed broadcast.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=189)** We've got a usable range of IP addresses of 192.168.0.1, all the way through 192.168.0.62.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=198)** For our next subnet, we're counting by 64 in the interesting octet to give us a subnet or a network value of 192.168.0.64.
>
> **[3:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=208)** And here's a shortcut for ya.
>
> **[3:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=210)** Instead of doing the binary math again for the directed broadcast address, we could just count by the block size in the interesting octet for our directed broadcast.
>
> **[3:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=219)** You see, 63 plus 64, that's 127.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=223)** Add 64 to that, you get 191.
>
> **[3:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=225)** Add 64 to that, you get 255.
>
> **[3:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/subnetting-practice-exercise-3?u=76281980&t=228)** And for each of these four subnets, the usable range of IP addresses that we have is going to be made up of all of the IP addresses between the subnet's network address and its directed broadcast address.

> [!info]- Semantic Content
>
> **Versions:** 192.168.0 (9), 255.255.255 (2), 0.128 (1), 0.192 (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** previous video (2)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)


### 2. IPv6 Addressing

[↑ Back to Table of Contents](#table-of-contents)

#### [Hexadecimal numbering](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=0)** - [Instructor] When we start to work with IP version six addressing, we're going to be using hexadecimal numbering.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=6)** Let's talk about that in this video.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=8)** First, consider traditional decimal numbering.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=10)** With decimal numbering, we have 10 possible values for any digit position 0 through 9.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=17)** And once we count out those 10 possible values of 0 through 9, if we want to go any higher, we have to add a second digit, so we go to one zero, then one one, and so on.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=27)** With binary, we've only got two possible values, a zero and a one.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=31)** And if we want to go higher than a one, we've got to add another digit position.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=36)** In fact, with IP version four addressing, we commonly had eight binary bits to make up an octet, to represent a single decimal number in the range of 0 through 255.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=46)** But since IP version six gives us so many addresses, we want to be able to write those addresses as compactly as possible, and it would take 128 binary bits to represent an IP version six address.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=58)** It would be more compact with decimal but even more compact with hexadecimal.
>
> **[1:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=63)** With hexadecimal, we have 16 possible values in the range of 0 through F, 0 through 9 matching up with our 10 decimal numbers.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=74)** But when we go above 9 instead of going to a second digit and saying 10, we start with the letters of the alphabet, and we're going to use letters A through F.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=84)** So as you can see in this table, a decimal number of 10 equates to a hexadecimal value of an A.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=91)** And you'll notice that each of these hexadecimal values can be represented with four binary bits because two to the power of four is 16.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=101)** And when we write one of these hexadecimal values in binary, that grouping of four binary bits, that's called a nibble.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=108)** And when you see a hexadecimal number written out, you might see it prepended with a 0x, and we see an example of that here with 0xBC01, and 0x simply means what follows is a hexadecimal number.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=123)** Now, here it's fairly obvious that BC01 is hexadecimal, but what if we had a number like 1234?
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=130)** Is that decimal? It could be.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=132)** Is that hexadecimal? It could be that as well.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=134)** But if we put a 0x in front of the 1234, that would eliminate that ambiguity, and we would know that we're dealing with a hexadecimal number.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=142)** And to reinforce this concept, let's go through a couple of examples.
>
> **[2:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=146)** Let's say we're given a decimal number of 12, and we want to know the corresponding hexadecimal number.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=151)** Well, remember that in hexadecimal, we count zero through nine, and then we start counting A, B, C, D, E, F.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=158)** So if we recall that table that we saw in the previous slide, a 10 is an A, an 11 is a B, and a 12 is a C.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=167)** So in this case, a decimal number of 12 corresponds to a hexadecimal number of a C.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=172)** What about binary?
>
> **[2:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=173)** Let's say we have a binary value of 1011.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=176)** What is the corresponding hexadecimal number?
>
> **[2:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=179)** Well, the first thing I would do here is convert 1011 into decimal.
>
> **[3:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=183)** Remember how we did that in the previous chapter?
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=185)** We made that table of eight columns.
>
> **[3:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=188)** Starting at the right, we had a value of 1, and then we doubled to 2, and we doubled to 4.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=193)** We kept doubling till we got all the way to the left with a value of 128, and we simply put in our eight binary values in that table.
>
> **[3:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=202)** Now, here, our binary number only has four bits.
>
> **[3:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=205)** Those are going to be right-justified, meaning the first four bits in our table, they're going to be zeros.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=211)** And then we superimpose 1011, and we add up the column headings any time we have a one.
>
> **[3:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=217)** So what is 8 + 2 + 1? That's 11.
>
> **[3:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=221)** And referring to our table or just doing the math in our head, we remember that a 10 in decimal is an A, and an 11 in decimal, what we're looking for here, is a B.
>
> **[3:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/hexadecimal-numbering?u=76281980&t=230)** So in this case, a binary number of 1011 has a corresponding hexadecimal number of a B.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (2)
> **CLI Commands:** make (1)
> **Env Vars:** bc01 (1)
> **Cross-References:** previous chapter (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 address format](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=0)** - [Instructor] In this video, let's consider the format of an IP version six address.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=5)** With an IP version four address, you recall we had network bits followed by host bits.
>
> **[0:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=10)** It's very similar with IP version six.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=12)** We have prefix bits followed by host bits and we refer to something called the prefix length.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=19)** The prefix length is the number of bits in the prefix.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=23)** And what is the prefix?
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=24)** Even though we typically don't call it the network, it's the network address.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=28)** So we have bits referring to the network and bits referring to the host on that network and grand total, we have 128 bits in an IP version six address compared to only 32 bits in an IP version four address.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=42)** That means we don't have the issue that we have with IP version four addresses, where we have depleted pools of addresses that can be handed out.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=50)** There are plenty of IP version six addresses to go around.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=53)** Another benefit of IP version six is it does not rely on broadcasts.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=58)** With IP version four, we might send out a broadcast for a variety of purposes.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=64)** Maybe to try to determine the MAC address of a known IP address.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=69)** Well, it can be more efficient with IP version six, using multicasting, as we're going to see later in this chapter.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=75)** So IP version six can accommodate more addresses, it can be more efficient in its communication, and it also does not have to do fragmentation.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=83)** With IP version four, if I have one router talking to another router, as an example, and those routers have different maximum values for how large a packet can be, the router that supports the smaller maximum size packet might have to fragment larger packets so that it can transmit those.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=103)** However, with IP version six, that maximum transmission unit or MTU is negotiated as the connection is set up so we don't need to worry about fragmentation.
>
> **[1:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=114)** And since we are dealing with such a large 128 bit address, to write this address more concisely, we use hexadecimal numbering as we discussed in the previous video, and specifically, we're going to have 32 hexadecimal numbers making up this address.
>
> **[2:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=130)** And these 32 hexadecimal numbers are going to be put in eight different groups.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=135)** Each of these eight groups are going to have four hexadecimal digits and a grouping of four hexadecimal digits is called a quartet.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=143)** And remember with IP version four, we had dotted decimal notation.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=147)** We had our octets separated by a dot.
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=150)** Well here, we use a colon as our separator.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=154)** We have quartets separated by colons.
>
> **[2:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=158)** And remember from our last video that a hexadecimal digit can represent one of 16 values?
>
> **[2:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=163)** That means it can be represented with four binary bits.
>
> **[2:47](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=167)** Now let's take a look at a sample IP version six address.
>
> **[2:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=171)** Here we have 32 hexadecimal digits.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=174)** We have eight groupings of hexadecimal digits separated by a colon.
>
> **[2:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=178)** Each of those groupings contained four hexadecimal digits and we said that grouping of four hexadigits was called a quartet.
>
> **[3:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=186)** We've got eight quartets separated by colons.
>
> **[3:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=189)** And this address ends in a /64.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=193)** That's the prefix length that we spoke of.
>
> **[3:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=195)** That's the number of bits that we have in a prefix.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=198)** So we know that the first 64 bits of this 128 bit address refers to the network.
>
> **[3:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=204)** That's the prefix.
>
> **[3:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=206)** The remaining 64 bits refers to the host that lives on that network, identified by that prefix.
>
> **[3:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=214)** However, even writing this address out in hexadecimal notation, it's still a fairly large address to write out.
>
> **[3:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=222)** The good news is there are some cases where we can abbreviate an address like this so it becomes even more manageable.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-format?u=76281980&t=229)** Let's take a look in our next video at how we might abbreviate one of these IP version six addresses.

> [!info]- Semantic Content
>
> **Cross-References:** later in (1), we discussed (1), previous video (1), next video (1)
> **Definitions:** refers to (2), is called (1)
> **Env Vars:** mac (1), mtu (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Shortening an IPv6 address](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=0)** - [Instructor] One of the characteristics of an IP version 6 address is it is large.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=5)** It is 128 bits in size.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=7)** And we make that more manageable by using hexadecimal numbering when we're writing out an IP version 6 address.
>
> **[0:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=13)** But as we saw in our last video, we're still left with 32 hexadecimal digits.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=19)** To make this address even more manageable and easier to type in, there are a couple of rules that, in some cases, let us shorten an IP version 6 address.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=27)** Let's take a look at those two rules.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=29)** When we're looking at a quartet, which is a grouping of four hexadecimal digits, we can eliminate any leading zeros in that quartet.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=37)** So if I had a quartet of 0004, I could just write a 4 for that quartet.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=44)** Something else I could do is represent consecutive quartets containing all zeros with a double colon.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=51)** So if I had three quartets in a row as an example and they all contain zeros, I could substitute those three all zero quartets with a double colon, but we could only do that once per IP version 6 address.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=64)** If I had a couple of double colons in my abbreviated address, we wouldn't know how many quartets were represented by each colon.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=72)** Let's take a look at an example.
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=74)** Let's see if we can shorten this IP version 6 address.
>
> **[1:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=77)** Let's go quartet by quartet.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=79)** Let's take a look at the first quartet, 23A0.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=83)** It does not begin with a 0.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=85)** So there's really nothing to abbreviate.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=87)** We have to bring that down just as it is, 23A0.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=91)** What about the next quartet, 201A?
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=95)** Nothing to abbreviate there either.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=97)** So we put a colon and say 201A.
>
> **[1:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=101)** But what about the next quartet?
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=103)** Here, we have 00B2.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=106)** We can eliminate those leading zeros.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=109)** And instead of saying :00B2, just say :B2.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=115)** Now, look at the next three quartets.
>
> **[1:57](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=117)** They're all zeros.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=119)** This is where we can use that shortcut of using a double colon.
>
> **[2:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=123)** I can represent those three quartets containing all zeros by just saying double colon.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=128)** In our next quartet, we have 0400.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=132)** I can eliminate the leading zero and just say 400.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=137)** And our follow quartet is 0001.
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=140)** Again, eliminate the leading zeros, and we'll just say :1.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=144)** And we still say /64 to indicate there are 64 bits in the prefix, which indicates the number of bits in the network portion of the address.
>
> **[2:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/shortening-an-ipv6-address?u=76281980&t=154)** And that's an example of how we can shorten an IPv6 address.

> [!info]- Semantic Content
>
> **Versions:** version 6 (5)
> **CLI Commands:** make (2)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 address shortening exercise](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=0)** - [Instructor] In our previous video, we took a look at a couple of rules that would allow us to, in some cases, abbreviate an IP version six address.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=8)** Now in this video, I want to give you some practice doing that.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=11)** I want you to take a look at this IP version six address on screen, pause the video and come up with the best abbreviation, if there is an abbreviation, and when you're done, resume the video and we'll go through a solution together.
>
> **[0:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=25)** (bright music) Alright, did you abbreviate this address?
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=33)** Let's go through it together.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=35)** In that first quartet, we have 2000, really nothing to abbreviate there because that quartet does not begin with a zero.
>
> **[0:44](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=44)** But I noticed that the next three quartets, they're all zeros.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=49)** That would be an opportunity to use the double colon.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=51)** However, before I just immediately jump to that conclusion, let's look further down in the address and see if there's a better opportunity to use the double colon.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=61)** And as I look further down in the address, I do see two other adjacent quartets containing all zeros and I can certainly abbreviate those two quartets with the double colon.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=71)** The question is, since I can only use the double colon shortcut once per IP address, where should I use it?
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=78)** Well, I would suggest that I use it here to abbreviate these three quartets because I would be abbreviating three quartets instead of two quartets.
>
> **[1:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=87)** This would be a more efficient use of the double colon.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=89)** So I'll say double colon and that has abbreviated those 12 hexadecimal digits.
>
> **[1:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=95)** The next quartet is 1234.
>
> **[1:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=98)** Nothing to abbreviate there.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=100)** And now I'm faced with a quartet that contains all zeros followed by another quartet that contains all zeros, but I've already used my double colon.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=109)** Can I abbreviate an all zeros quartet if I'm not using the double colon?
>
> **[1:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=113)** Actually, yes.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=115)** I could still fall back on the rule of eliminating leading zeros.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=119)** I cannot eliminate all the zeros because that would be a double colon, but I could eliminate the first three zeros and represent that next quartet as simply :0, and the next all zeros quartet, again, I can say :0.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=133)** And for the final quartet, 000B, we'll eliminate the three leading zeros and write :B and a /64 to indicate a prefix length.
>
> **[2:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-address-shortening-exercise?u=76281980&t=145)** And that's the most efficient abbreviation of this IP version six address.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [IPv6 global unicast](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=0)** - [Instructor] Let's consider an IP version 6 address that can be routed globally through the internet, as well as used locally like we see in this topology.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=8)** Here, PC 1 is talking to PC 2.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=11)** And the packet is sent destined for 2001::2.
>
> **[0:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=16)** That's the IP version 6 address of PC 2.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=19)** And this IP version 6 address does meet the criteria to be a global unicast address.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=26)** But what are those criteria?
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=27)** Let's take a look at the format of an IP version 6 address that is routable through the internet.
>
> **[0:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=33)** First, the first three bits in the 128 bit address must be 001.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=40)** After that, we apply a global [[Routing]] prefix, which a numbering authority would assign you or your company that would make your network unique as it was routed around the internet.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=51)** And within your network, you could assign your own subnet ID if you wanted to break up that global routing prefix into subnets within your company, as an example.
>
> **[1:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=60)** And you could have the last 64 bits to indicate the interface ID of a host.
>
> **[1:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=66)** And again, if we have an IP version 6 address meeting these criteria, that address can be routed, not just locally, but also routed across the internet.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=75)** And this type of address must begin with 001.
>
> **[1:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=79)** And the way you're going to see that written in literature is, it must begin with 2000::/3.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=88)** Now, let's interpret what that means, because at first glance, it might be a bit misleading.
>
> **[1:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=92)** For example, we're not saying that an IP version 6 global unicast address must begin with a 2000.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=100)** We're just dictating the first three bits.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=103)** And if we had all the other bits set to zeros in this 128 bit address, this is what we would have.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=109)** We would have 001 followed by 125 zeros.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=116)** However, it takes four binary bits to make a hexadecimal digit.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=120)** And we are only mandating that the first three bits be 001.
>
> **[2:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=125)** Could the first four bits be 0010? Yes.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=129)** In that case, the first hex digit is a 2.
>
> **[2:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=132)** Could the first four bits be 0011? Yes.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=137)** In that case, we're still meeting this global unicast criterion, but the first hexa decimal digit is not a 2, it's a 3.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=144)** We're just mandating the first three bits.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=147)** Now, where does the global routing prefix come from?
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=150)** Well, we're going to get that from the IANA, the Internet Assigned at Numbers Authority.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=156)** And again, within our own network, just like with IP version 4, if we want to divide up different subnets, we can do that with a subnet ID that we assign, and we typically have 64 bits to represent a host.
>
> **[2:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=168)** And global unicast means not just that we can route this globally, but unicast means it's one to one communication.
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-global-unicast?u=76281980&t=176)** We're going from one source, PC 1, in this example, to one destination, PC 2, in this example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3)
> **Versions:** version 6 (6), version 4 (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), just like (1)
> **Env Vars:** iana (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 multicast](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=0)** - [Instructor] In this video, let's consider IP version six multicasting.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=4)** We know with IP version four, a multicast address allows a sender to send traffic to a Class D IP version four address and members of the multicast group identified by that Class D address, they receive the traffic.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=20)** It's very similar with IP version six.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=22)** Here we have PCs one and two that want to receive the video traffic.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=26)** PC three does not.
>
> **[0:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=27)** So what we do is have PCs one and two join a multicast group for IP version six.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=34)** This multicast group has a group ID of FF04::10.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=40)** And the video server sends each video packet out just one time and the routers and switches in the network would replicate that to members of the multicast group.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=50)** However, for an IP version six address to be a multicast address, it has to meet a set of criteria.
>
> **[0:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=56)** Let's check out the format of an IP version six multicast address.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=61)** And remember that traffic is going to be going to this IP version six multicast address as a destination.
>
> **[1:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=67)** It's going to be replicated to members of the multicast group, meaning that we're never going to be assigning this multicast address to a device.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=76)** And we see that the first eight bits are all ones.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=80)** And since a hexadecimal digit made up of four ones is an F, which would be 15 in decimal, that means that our first two multicast hexadecimal digits are going to be FF.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=91)** In fact, in the literature, you'll see this written as FF00::/8.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=97)** We're only dictating the first eight bits and they're all ones, so it is super easy to recognize an IP version six multicast address.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=105)** It's always going to begin with an FF.
>
> **[1:48](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=108)** And in the next field, we have four bits to indicate flags.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=112)** This gets into a concept in multicasting known as a rendezvous point.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=116)** Essentially, a device that wants to belong to this multicast group tells its router, Hey, I want to get copies of all that traffic going to that group.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=124)** And the router says, Okay, I need to get you that traffic.
>
> **[2:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=127)** Well, one way of getting that traffic to that router is it can go to another router designated as a rendezvous point.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=135)** And it's possible that that rendezvous point, or RP information, is contained in this multicast address.
>
> **[2:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=142)** Next step, we have four bits to represent the scope and the scope says what is the collection of devices that are going to be receiving this traffic?
>
> **[2:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=150)** As a couple of examples, FF02::2, that's going to reach all routers on the link.
>
> **[2:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=156)** Or here's another one, FF02::1, that is called the all nodes multicast.
>
> **[2:44](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=164)** Remember that IP version six says that it did not need to do broadcasts which goes to every device on a link.
>
> **[2:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=170)** Even though it technically doesn't do a broadcast, FF02::1 goes to every node on a link, which is exactly the same thing that a broadcast does.
>
> **[3:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=180)** So if IP version six needs to do something like a broadcast, it certainly can using a multicast.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-multicast?u=76281980&t=185)** And finally, we have 112 bits to represent the multicast group ID.

> [!info]- Semantic Content
>
> **Env Vars:** ff02 (3), ff04 (1), ff00 (1)
> **Definitions:** is an  (1), means that (1), known as (1), is called (1)
> **CLI Commands:** node (1)
> **Ports:** :10 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 link local](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=0)** - [Instructor] Next, let's consider an IP version six link local address.
>
> **[0:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=4)** And as the name suggests, this address can only be used on a local link.
>
> **[0:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=9)** In other words, we cannot send traffic to this address if this address lives beyond another router.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=15)** In this case, we see R1 communicating with R2 and it's going to R2's link local address of FE80::2.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=24)** If R1 were trying to communicate with R3, it could not have sent traffic to R3's link local address of FE80::B because the link local address, it's only valid on the local link, meaning it cannot go through a router.
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=39)** And here's the format that will allow us to recognize a link local address.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=43)** We're told that the first 10 bits must be seven one's and then a 010, and that's followed by 54 zeros.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=51)** And finally, the last half of the 128 bit IP version six address, the last 64 bits, that's the interface ID that identifies the host.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=61)** And you'll typically see the format written as this.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=64)** You see that a link local address must start with FE80::/10, meaning that we are mandating what the first 10 bits have to be.
>
> **[1:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=72)** However, we're really mandating what the first 64 bits have to be because after the first 10 bits, we're told that the next 54 bits, they have to be zeros.
>
> **[1:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=84)** So I would say that a link local address starts with FE80::/64.
>
> **[1:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=90)** I think that's valid as well but the literature will say /10.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=94)** And we said that the big characteristic of a link local address is that it only communicates on that local network segment.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=100)** And this might remind you of the APIPA address that we had with IP version four.
>
> **[1:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=105)** And typically, when we got an IP version four APIPA address assigned to us, that indicated a problem.
>
> **[1:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=112)** It meant our device tried to get an IP address but it failed or nobody bothered to assign it an IP address.
>
> **[1:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=119)** It was an error condition, basically.
>
> **[2:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=121)** That's not the case with IPv6.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=124)** In fact, IPv6 requires link local addresses.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=128)** When a client is communicating with a router, for example, to say, hey, what network am I on, the router's going to respond using its link local address.
>
> **[2:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=137)** Later in this series, we'll talk about [[Routing Protocols]].
>
> **[2:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=140)** Oftentimes routing protocols will send [[Routing]] updates to their neighboring routers link local address.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=147)** So these addresses are required.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=149)** In fact, every IP version six address that we have that we might route within our network or out on the internet, it must have a corresponding link local address, and these link local addresses could be automatically assigned.
>
> **[2:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=162)** In fact, we'll see how that's done later in this chapter when we talk about EUI 64 addressing, or we as administrators, we could statically assign those addresses.
>
> **[2:52](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-link-local?u=76281980&t=172)** But again, an IP version six link local address is a required address to accompany all other IP version six addresses and it cannot pass through a router.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing Protocols]] (2), [[Routing]] (1)
> **Env Vars:** fe80 (4), apipa (2), eui (1)
> **Cross-References:** later in (2)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 unique local](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=0)** - [Instructor] Another type of IP version 6 address I want you to know about is an IPv6 unique local address.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=6)** This is somewhat analogous to those private IP addresses we had with IP version 4, those RFC 1918 addresses that could not be routed on the public internet.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=17)** Here, R1 is communicating with R2.
>
> **[0:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=20)** We're going to a destination IPv6 address of FD00::2, but notice that is not routed out to the public internet.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=28)** Here's the format of one of these unique local addresses.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=32)** The first seven bits begin with six ones and then a zero.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=37)** So we're told that one of these unique local addresses have to begin with FC00::/7 since we're mandating the first seven bits, and we said the big characteristic of this address is it's not ratable on the public internet, but it is ratable inside of our network.
>
> **[0:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=55)** Unlike a link local address that cannot go through a router, this address can go through a router within our network, just not out on the internet.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=64)** Again, this is similar to those IP version 4 private IP addresses, those RFC 1918 addresses.
>
> **[1:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=71)** Now, notice that eighth bit.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=73)** It's an L bit.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=75)** We're going to set that to a one if the address is locally-assigned, which is typically the case.
>
> **[1:20](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=80)** So oftentimes, you'll see a unique local address, again, not with FC, but with FD because the first four bits are all ones, making an F in hex, and the next four bits are going to be 1101, giving us a D in hex.
>
> **[1:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=96)** The next 40 bits after that, that's our global ID and after that, we have 16 bits that indicate the subnet that we might have created within our network, and as we often see with IP version 6 addresses, the last 64 bits.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unique-local?u=76281980&t=109)** In other words, the last half of the 128-bit IPv6 address, those bits are going to refer to the interface ID of the host.

> [!info]- Semantic Content
>
> **Env Vars:** rfc (2), fd00 (1), fc00 (1)
> **Versions:** version 6 (2), version 4 (2)
> **Documentation:** rfc (2)
> **Definitions:** is an  (1), in other words (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 loopback](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-loopback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-loopback?u=76281980&t=0)** - [Instructor] An IPv6 loopback address is a special address that a device, such as a router, or a PC, can use to talk to itself.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-loopback?u=76281980&t=8)** So in this example, if R1 wants to communicate with itself, it can send traffic to that IPv6 loopback address, which is written as ::1.
>
> **[0:19](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-loopback?u=76281980&t=19)** And from that, you could probably guess, the format of this IPv6 loopback address, it's made up of 127 zeros, followed by a single one.
>
> **[0:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-loopback?u=76281980&t=29)** And again, we write that as ::1, and you might hear this referred to as the loopback, the local loopback, or the local host.
>
> **[0:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-loopback?u=76281980&t=37)** And this is very similar to what we talked about with IPv4, IPv4 had a loopback address of 127.0.0.1.
>
> **[0:47](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-loopback?u=76281980&t=47)** Well, ::1 is the IPv6 version of that.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-loopback?u=76281980&t=51)** And we could use this loopback address to make sure that IPv6 is up and running on this interface, on our device, or a web developer as another example.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-loopback?u=76281980&t=61)** They might have a website running locally on their machine, and they could point their browser to ::1, to pull up and test that website.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** make (1)
> **Versions:** 127.0.0 (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 unspecified](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=0)** - [Instructor] Here's an interesting IPv6 address.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=3)** It's an IPv6 unspecified address.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=6)** Here, PC1 has an unspecified address of colon colon, in other words, all 128 bits are zeros, and we're sending traffic to FF02::2, which goes to all routers on a local link.
>
> **[0:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=21)** So the traffic makes it to R1, but that double colon address is an abbreviation of 128 zeros, and we simply write it as colon colon.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=31)** We're replacing all eight zero quartets in other words, with that double colon.
>
> **[0:35](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=35)** But how can this PC communicate with an all zeros address?
>
> **[0:39](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=39)** Well, let me give you a couple of examples of when we might see this.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=42)** First, let's say that PC1 wants to give itself an address, and after it goes through that process, and we'll discuss that process later in this chapter, before it assigns that address that it's calculated, it wants to make sure that nobody else has that address.
>
> **[0:57](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=57)** So it sends out a neighbor solicitation message saying, hey, I just want to make sure nobody has this address.
>
> **[1:02](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=62)** And when it sends that message, it doesn't want to take that address on, because maybe somebody else has it, so it communicates with an all zeros address.
>
> **[1:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=70)** And when it's giving itself an address, it needs to know what network it's on, so it might send a router solicitation message, as we saw in this example, to FF02::2, to ask the router what network we're on.
>
> **[1:25](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=85)** So it knows how to populate the first 64 bits of its address.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=89)** When it does that, since it does not have an address, it uses this unspecified address.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=94)** Now this might bring up the question, how can the router communicate back to PC1, if it's an unspecified address?
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=102)** Well, because we're on the same link, we're communicating back to PC1, using PC1's Mac address.
>
> **[1:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-unspecified?u=76281980&t=109)** So while this unspecified address is super useful, it can only be used on a local link.

> [!info]- Semantic Content
>
> **Env Vars:** pc1 (5), ff02 (2)
> **Definitions:** in other words (2), is an  (1)
> **CLI Commands:** make (2)
> **Cross-References:** later in (1), as we saw (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 solicited-node multicast](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=0)** - [Instructor] The type of IPv6 address we want to discuss in this video is called an IPv6 solicited-node multicast.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=8)** So this is a multicast address that corresponds to a non-multicast IPv6 address.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=15)** For example, here R1 is sending a packet over to R2, destined for the solicited-node multicast address of FF02::1:FF00:2.
>
> **[0:30](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=30)** And that corresponds to R2's IPv6 address of 3000::2.
>
> **[0:36](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=36)** Let's see how that solicited-node multicast address was constructed.
>
> **[0:41](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=41)** Here's the format.
>
> **[0:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=42)** The first 104 bits are made up of FF02::1:FF.
>
> **[0:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=50)** Then the remaining 24 bits in this 128-bit address come from the last 24 bits in the IPv6 address that we're querying.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=61)** So we can say that this address begins with FF02::1:FF/104.
>
> **[1:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=69)** Again, with the last 24 bits coming from the IPv6 address that we're wanting information about.
>
> **[1:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=76)** And the question at this point is when would we use a solicited-node multicast address?
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=81)** Well, let me give you two examples.
>
> **[1:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=82)** Remember, with IP version 4, if a host wants to know the MAC address of another host, it sends out an ARP broadcast, an Address Resolution Protocol broadcast saying, hey, can somebody tell me the MAC address of this known IPv4 address?
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=97)** And whoever has that IPv4 address responds and says that's me, and here's my MAC address.
>
> **[1:42](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=102)** Well, we don't do broadcasts with IPv6.
>
> **[1:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=106)** Instead, we can use a solicited-node multicast address.
>
> **[1:50](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=110)** Now, let's take a look at how IPv6 can replace this ARP function without using a broadcast.
>
> **[1:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=116)** We're going to use a combination of two IPv6 message types.
>
> **[2:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=120)** A neighbor solicitation message and a neighbor advertisement.
>
> **[2:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=124)** Here, PC1 wants to know the MAC address of PC2.
>
> **[2:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=128)** PC1 knows PC2's IPv6 address is 3000::A.
>
> **[2:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=135)** What it's going to do is send out a neighbor solicitation message asking if anybody can provide the MAC address for 3000::A but the destination address in this neighbor solicitation message is not 3000::A.
>
> **[2:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=152)** Note, it's the corresponding solicited-node multicast address of 3000::A, which is FF02::1:FF00:A.
>
> **[2:45](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=165)** Well, PC2 gets that and it responds with a neighbor advertisement saying, yes, I'm 3000::A and here's my MAC address.
>
> **[2:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=175)** That means with this combination of neighbor solicitation and neighbor advertisement messages, we've eliminated the need to use an ARP broadcast for IPv6 networks.
>
> **[3:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=185)** Another use of a solicited-node multicast is when a host self-generates its own IPv6 address.
>
> **[3:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=193)** And we're going to see how that's done later in the chapter using an approach called EUI-64 but before it assigns that address to itself, it wants to make sure nobody else has it.
>
> **[3:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=203)** So it tries to detect any duplicates of that IP address.
>
> **[3:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=207)** It's called DAD, duplicate address detection.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=211)** Here's how that works.
>
> **[3:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=212)** Let's say that PC1 has self-assigned an IPv6 address of 3000::2, which by the way, has a corresponding solicited-node multicast address of FF02::1:FF00:2.
>
> **[3:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=229)** And it wants to make sure that nobody has that 3000::2 IP address assigned.
>
> **[3:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=236)** So it sends out a packet destined for the solicited-node multicast address of 3000::2.
>
> **[4:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=245)** Notice, the source address of PC1.
>
> **[4:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=247)** PC1 does not want to assume that there is no 3000::2 on the network.
>
> **[4:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=253)** So it doesn't take that address on just yet.
>
> **[4:16](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=256)** It uses the unspecified address and it hopes that it hears nothing in response to this message that it just sent out.
>
> **[4:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=263)** And since no device did have that 3000::2 IPv6 address, PC1 concludes it must be safe for me to take that address on.
>
> **[4:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-solicited-node-multicast?u=76281980&t=273)** And that's another use of this solicited-node multicast address.

> [!info]- Semantic Content
>
> **Env Vars:** mac (6), pc1 (6), ff02 (5), ff00 (3), arp (3)
> **CLI Commands:** node (10), make (2)
> **Definitions:** is called (1), is a  (1)
> **Versions:** version 4 (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [EUI-64 address](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=0)** - [Instructor] We know that an IP version 6 address is 128 bits in length.
>
> **[0:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=5)** And there are times when a device, like a router or a PC might want to generate the last 64 bits of its own address.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=12)** Whether that address is going to be used by the device to communicate on the network or maybe that address is going to be used as that device's link-local address to communicate just on its local link.
>
> **[0:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=24)** Well, the good news is we can use an approach called EUI-64 to have a device self-generate the last 64 bits of its IP version 6 address.
>
> **[0:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=34)** And later in this chapter, we'll see how this is used for a device to automatically give itself an IP version 6 address it can use to communicate on the network but in this video, I want to show you how we could use this approach to calculate the last 64 bits of a link-local address.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=49)** Specifically, R1 has interface gig 0/1 with a MAC address of 0015.2BE4.9B60.
>
> **[0:59](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=59)** We want to use that unique MAC address to create a unique 64-bit identifier.
>
> **[1:05](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=65)** The paradox is that this MAC address is only 48 bits in length and we want to extract from that 64 bits.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=73)** How is that possible?
>
> **[1:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=74)** Well, let me show ya.
>
> **[1:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=75)** Step number one is we take that 48-bit MAC address and we divide it in two.
>
> **[1:21](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=81)** And the first 24 bits in this example are going to be represented in hexes 0015.2B.
>
> **[1:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=88)** And the last 24 bits are going to be E4.9B60.
>
> **[1:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=93)** And it's in step two where we pick up the missing 16 bits.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=97)** Specifically, we're going to add in the middle of these two different pieces, we're going to add FF.FE.
>
> **[1:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=103)** And if we are using a dot delimiter between these different quartets, we want to change that in step three to a colon delimiter.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=111)** The next thing we do in step four is to take the first two hexadecimal digits and convert those to binary.
>
> **[1:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=118)** We know that a hex digit is made up of four binary bits.
>
> **[2:02](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=122)** So two hex digits, that's going to give us eight binary bits.
>
> **[2:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=126)** And here we have 00 as the first two hexadecimal digits.
>
> **[2:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=131)** So in binary, that's going to be all zeros.
>
> **[2:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=133)** And step five says we're going to flip the seventh bit.
>
> **[2:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=138)** And that means if this bit had been a zero, as it was in this case, we're going to flip it to a one.
>
> **[2:24](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=144)** Or if it had been a one, we would flip it to a zero.
>
> **[2:27](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=147)** But typically, it's going to be a zero and we're going to flip it to a one.
>
> **[2:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=151)** Now, here's why we're doing that.
>
> **[2:33](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=153)** If you closely examine the format of a MAC address, you'll learn that the seventh bit in a MAC address is called the U bit and that stands for universal.
>
> **[2:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=163)** And if that bit is set to a zero, that means it was universally assigned, meaning that an organization like the IANA that we discussed assigned a vendor code to the manufacturer of this [[NIC|network interface card]].
>
> **[2:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=176)** And because that vendor code was assigned by that public authority, the seventh bit was set to a zero, meaning that it was universally assigned.
>
> **[3:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=184)** But here, we're creating an address on our own.
>
> **[3:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=187)** We want to indicate that it's locally generated.
>
> **[3:10](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=190)** That's why we're flipping the seventh bit.
>
> **[3:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=192)** So in almost all cases, that seventh bit is going to be a zero to begin with and we're going to flip it to a one.
>
> **[3:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=198)** Now we take those eight binary bits, convert them back into two hexadecimal digits, which is going to give us 02 in this case, because we flipped that seventh bit, and all the other digits remain the same.
>
> **[3:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=211)** We have now generated a 64-bit extended unique identifier address.
>
> **[3:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=217)** And we said that we were wanting to generate the link-local address for R1's gig 0/1 interface.
>
> **[3:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=223)** And we learned earlier in this chapter that a link-local address begins with FE80:: That's going to give us the first 64 bits, and based on the MAC address, we generated the last 64 bits.
>
> **[3:56](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/eui-64-address?u=76281980&t=236)** That's going to give us this unique link-local address that we see on the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIC|Network interface card]] (1)
> **Env Vars:** mac (7), eui (1), iana (1), fe80 (1)
> **Versions:** version 6 (3)
> **Cross-References:** later in (1), we discussed (1), earlier in (1)
> **Definitions:** is called (1), stands for (1)
> **Speakers:** - [instructor] (1)

#### [IPv6 autoconfiguration](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=0)** - [Instructor] In this video, let's consider some ways that a device like PC 1 might obtain IPv6 address information.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=7)** One way would be for us to statically assign all that information.
>
> **[0:11](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=11)** We could do that or PC one could obtain that information automatically.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=15)** Let's take a look at a couple of options.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=17)** One is stateful auto-configuration and this is where we use a DHCPv6 server.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=23)** And this works very similarly to a [[DHCP]] server for IPv4, where the server can provide all of our IP address information.
>
> **[0:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=31)** In this case, the DHCPv6 server provides PC 1 with everything it needs, the prefix length.
>
> **[0:38](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=38)** In other words, the first 64 bits of our IPv6 address, the host portion of the address, the last 64 bits, and any extra information such as, the IP address of a DNS server.
>
> **[0:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=51)** However, another option is to use IPv6 stateless auto-configuration With stateless auto-configuration, this PC does not have to get all of its information from the DHCPv6 server.
>
> **[1:04](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=64)** Do you recall earlier in the chapter, we talked about how a PC could use its Mac address to generate an EUI-64 address that's going to give us the last 64 bits of the IP version six address for this device.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=78)** In other words, the host portion and we still need to know what network we're on, and the router in this case, R1, it can send using a router advertisement message, an RA message.
>
> **[1:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=89)** It can tell PC 1 here is your prefix length.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=91)** In other words, the network portion of the address.
>
> **[1:34](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=94)** Now at this point, PC 1 has it's complete 128 bit IP version six address.
>
> **[1:40](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=100)** It might need some extra information though, such as the IP address of a DNS server and that extra information, it could come from a DHCPv6 server.
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-autoconfiguration?u=76281980&t=111)** And that's a look at a couple of different ways that an IP version six client can obtain IPv6 address information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (1)
> **Env Vars:** dns (2), dhcp (1), eui (1)
> **Definitions:** in other words (3)
> **Cross-References:** earlier in (1), we talked about (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [IPv6 traffic flows](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=0)** - [Instructor] In this video, we want to look at three different IPv6 traffic flows.
>
> **[0:06](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=6)** With IPv4, we considered three traffic flows: unicast, broadcast, and multicast.
>
> **[0:12](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=12)** With IPv6, it's a little bit different.
>
> **[0:15](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=15)** We still have a unicast traffic flow.
>
> **[0:17](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=17)** That's where I'm going from one IPv6 address to one other IPv6 address.
>
> **[0:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=23)** So we could say that unicast is one-to-one communication.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=28)** We still have the concept of multicast with IPv6.
>
> **[0:32](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=32)** In fact, earlier in this chapter, we discovered that it was very easy to recognize an IPv6 address identifying a multicast group because it always began with an FF.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=43)** Here, we've got a couple of PCs that want to receive traffic from server one, and they both join this multicast group of FF04::10.
>
> **[0:53](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=53)** Now, when the server sends traffic destined for the multicast group, PC3 doesn't have to get it.
>
> **[0:58](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=58)** It's going to be replicated just to members of the multicast group.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=61)** And since multicast can go to devices that explicitly want to receive information, we say that it is one-to-many communication where many refers to the members of the multicast group.
>
> **[1:13](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=73)** And we've mentioned a few times in this chapter that IPv6 does not do broadcasts.
>
> **[1:18](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=78)** Well, that's true, but IPv6 does do something IPv4 does not do.
>
> **[1:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=83)** We have something called IPv6 anycast.
>
> **[1:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=86)** For example, let's say that we have a worldwide content distribution network.
>
> **[1:31](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=91)** We offer some sort of streaming service or download service to our customers around the globe.
>
> **[1:37](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=97)** And instead of just having one server from which they're going to be getting our information, wouldn't it be great if they could get that streaming service or those downloads from a server closest to them geographically?
>
> **[1:51](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=111)** That's what we can do with IPv6 anycast.
>
> **[1:55](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=115)** Notice here that I've got a couple of servers with identical IPv6 addresses 3003::1 and these are available via different internet service providers in different parts of the world over the internet.
>
> **[2:09](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=129)** And PC1 wants to get content from one of these servers.
>
> **[2:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=134)** It doesn't really care which server it gets it from, but to make it most efficient, what we can do with anycast is get it from the nearest server.
>
> **[2:23](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=143)** Specifically, PC1 says I want to get traffic from 3003::1.
>
> **[2:29](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=149)** And within the internet service provider's router, it determines which server is closest to it and it's going to use a [[Routing]] protocol that we'll mention in another course in the series called BGP, the border gateway protocol, but that's going to allow the customer's internet service provider to select the closest destination, even though multiple destinations with identical addresses exist.
>
> **[2:54](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/ipv6-traffic-flows?u=76281980&t=174)** And to sum up, we said that unicast was one-to-one communication, multicast was one-to-many communication, but here we see that anycast is one-to-nearest communication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Env Vars:** pc1 (2), ff04 (1), pc3 (1), bgp (1)
> **UI Navigation:** go to (1), select the (1)
> **CLI Commands:** make (1)
> **Ports:** :10 (1)
> **Cross-References:** earlier in (1)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on finishing this course.
>
> **[0:03](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=3)** This course covered both IP versions four and six.
>
> **[0:07](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=7)** We discussed theory.
>
> **[0:08](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=8)** We discussed the mathematical calculations that you and I need to perform when we're doing network design.
>
> **[0:14](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=14)** Now, if you're feeling good about what you've learned, I encourage you to keep that momentum going and join me in another course.
>
> **[0:22](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=22)** Until then, I want to give you my sincere thanks for entrusting me with your time in this course.
>
> **[0:26](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=26)** That's not something I take lightly.
>
> **[0:28](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=28)** And also, please realize that for many CCNA Certification candidates, what we've covered in this course, especially subnetting, is the most difficult content in all of their CCNA studies.
>
> **[0:40](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=40)** So if you need to review parts of this course, that is completely okay.
>
> **[0:43](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=43)** In fact, that's one of the great advantages of [[LinkedIn]] Learning.
>
> **[0:46](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=46)** You can go back and re-watch whatever you'd like to review.
>
> **[0:49](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=49)** I want you to go at your pace and take your time learning [[IP Addressing]], be patient with yourself, you can do this, and when you're ready I'll be here waiting to guide you through your next CCNA foundational topics.
>
> **[1:01](https://www.linkedin.com/learning/cisco-networking-foundations-ip-addressing/next-steps?u=76281980&t=61)** I'll see you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[IP Addressing]] (1)
> **Env Vars:** ccna (3)
> **Cross-References:** we discussed (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Kevin Wallace]]

## Resources

- Exercise files available

## Skills Covered

- IP Addressing
- Cisco Networking

## Path Context

### In [[Getting Started with Cisco Networks]]
← [[Cisco Networking Foundations Fundamentals Of Cisco Networking]] | **2 of 4** | [[Cisco Networking Foundations- Switching and Routing]] →

## Appears In

- [[Getting Started with Cisco Networks]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Cisco Networking
- [[Cisco Networking Foundations- Switching and Routing]] — Cisco Networking
- [[Cisco Networking Foundations Fundamentals Of Cisco Networking]] — Cisco Networking
- [[Cisco Network Security- Content and Endpoint Security]] — Cisco Networking
- [[Cisco Network Security- Intrusion Detection and Prevention]] — Cisco Networking

---

[↑ Back to top](#)