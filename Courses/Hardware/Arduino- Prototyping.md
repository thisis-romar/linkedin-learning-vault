---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: arduino-prototyping
url: "https://www.linkedin.com/learning/arduino-prototyping"
duration_minutes: 113
duration: 1h 53m
level: Intermediate
updated: 4/20/2021
learners: 132419
skills:
  - Arduino
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGQJKvf1rrRjQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1579902853635?e=2147483647&amp;v=beta&amp;t=kAxDvFHP06fc2-ZpcPLiXHzHx8xGA5_Afwv5F8GEc2k"
linkedin_topic: Hardware
learning_paths:
  - '[[Become an Arduino Developer]]'
prev_courses:
  - '[[C Programming for Embedded Applications]]'
next_courses:
  - '[[Learning Soldering for Electronics]]'
path_nav: '[{"path":"Become an Arduino Developer","position":10,"total":11,"prev":"C Programming for Embedded Applications","next":"Learning Soldering for Electronics"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - topic/network-and-system-administration
  - topic/software-development
  - skill/arduino
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/Arduino-%20Prototyping.md)

![Arduino: Prototyping](https://media.licdn.com/dms/image/v2/C4E0DAQGQJKvf1rrRjQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1579902853635?e=2147483647&amp;v=beta&amp;t=kAxDvFHP06fc2-ZpcPLiXHzHx8xGA5_Afwv5F8GEc2k)

# Arduino: Prototyping

> For designers and product managers, the Arduino family of microcontrollers and easy-to-assemble components is a valuable tool for exploring and evaluating hardware product designs. Rapid, incremental prototypes can help improve outcomes and reduce cost and time in the design process. In this course, instructor Robert Gallup helps you go beyond the basics and learn what it takes to develop Arduino-

> [LinkedIn Learning](https://www.linkedin.com/learning/arduino-prototyping) | 1h 53m | Intermediate | 132K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Prototype with Arduino](#prototype-with-arduino)
  - [What you should know](#what-you-should-know)
  - [What's new in this update](#whats-new-in-this-update)
- [**1. Understand Prototyping**](#1-understand-prototyping) (3 videos)
  - [Purpose and pitfalls of prototypes](#purpose-and-pitfalls-of-prototypes)
  - [Prototype form factors](#prototype-form-factors)
  - [The prototype process](#the-prototype-process)
- [**2. Plan the Prototype**](#2-plan-the-prototype) (6 videos)
  - [Prototype planning considerations](#prototype-planning-considerations)
  - [Demo product brief of handheld game](#demo-product-brief-of-handheld-game)
  - [Define the proof-of-concept prototype](#define-the-proof-of-concept-prototype)
  - [Select components and libraries](#select-components-and-libraries)
  - [Design the circuit](#design-the-circuit)
  - [Make a pin map](#make-a-pin-map)
- [**3. Your Prototype "Hello World"**](#3-your-prototype-hello-world) (4 videos)
  - [Connect the display](#connect-the-display)
  - [Display "Hello World" sketch](#display-hello-world-sketch)
  - [Challenge: Controlling the display](#challenge-controlling-the-display)
  - [Solution: Controlling the display](#solution-controlling-the-display)
- [**4. Animate the Display**](#4-animate-the-display) (4 videos)
  - [Understand display dynamics](#understand-display-dynamics)
  - [Implement display dynamics](#implement-display-dynamics)
  - [Challenge: Modify the animation](#challenge-modify-the-animation)
  - [Solution: Modify the animation](#solution-modify-the-animation)
- [**5. Add Interaction**](#5-add-interaction) (5 videos)
  - [Understand interaction logic](#understand-interaction-logic)
  - [Breadboard buttons and update pin map](#breadboard-buttons-and-update-pin-map)
  - [Implement buttons](#implement-buttons)
  - [Challenge: Name](#challenge-name)
  - [Solution: Name](#solution-name)
- [**6. Improve Responsiveness**](#6-improve-responsiveness) (3 videos)
  - [Blocking versus non-blocking code](#blocking-versus-non-blocking-code)
  - [Understand timers](#understand-timers)
  - [Implement non-blocking interaction](#implement-non-blocking-interaction)
- [**7. Advanced Interaction**](#7-advanced-interaction) (5 videos)
  - [Button debouncing](#button-debouncing)
  - [Advanced button interaction](#advanced-button-interaction)
  - [Implement button functions](#implement-button-functions)
  - [Challenge: Game intro](#challenge-game-intro)
  - [Solution: Game intro](#solution-game-intro)
- [**8. Iterating your Prototype**](#8-iterating-your-prototype) (4 videos)
  - [Use symbolic parameters](#use-symbolic-parameters)
  - [Document prototypes](#document-prototypes)
  - [Challenge: Complete the experience](#challenge-complete-the-experience)
  - [Solution: Complete the experience](#solution-complete-the-experience)
- [**Conclusion**](#conclusion) (1 videos)
  - [Final thoughts](#final-thoughts)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Prototype with Arduino](https://www.linkedin.com/learning/arduino-prototyping/prototype-with-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/prototype-with-arduino?u=76281980&t=0)** - [Robert] The [[Arduino]]'s simple [[Hardware]], ease of use and large community of users have helped make physical [[Product Development]] accessible to everyone.
>
> **[0:10](https://www.linkedin.com/learning/arduino-prototyping/prototype-with-arduino?u=76281980&t=10)** This includes product managers and designers who now have the ability to develop hardware prototypes as part of their [[Product Design]] process.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/prototype-with-arduino?u=76281980&t=19)** In this course, we'll spend some time seeing how [[Prototyping]] fits into the design process.
>
> **[0:25](https://www.linkedin.com/learning/arduino-prototyping/prototype-with-arduino?u=76281980&t=25)** Then we'll dive into the details, and I'll show you step-by-step how you can develop a proof of concept prototype that helps you explore and validate a small handheld game.
>
> **[0:35](https://www.linkedin.com/learning/arduino-prototyping/prototype-with-arduino?u=76281980&t=35)** I'm Robert Gallup, and I've spent my career working with technology as a designer, program manager and developer.
>
> **[0:42](https://www.linkedin.com/learning/arduino-prototyping/prototype-with-arduino?u=76281980&t=42)** If you're ready to take your Arduino skills to the next level and see how you can use the Arduino in product development, joined me in my [[LinkedIn]] Learning course on Arduino prototyping.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4), [[Hardware]] (2), [[Product Development]] (2), [[Prototyping]] (2), [[Product Design]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [robert] (1)

#### [What you should know](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is designed for product managers, designers, and programmers.
>
> **[0:05](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980&t=5)** We start looking at the [[Prototyping]] process then dive into techniques and strategies for you and your team to make prototyping with an [[Arduino]] a integral part of a nimble design process.
>
> **[0:17](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980&t=17)** While the beginning of the course is general and requires no specific background, the technical parts of this course related to building a prototype assume that you've had some exposure to Arduino.
>
> **[0:28](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980&t=28)** We'll start from the beginning and talk about prototyping step by step, but it will be easier for you to follow if you've had some experience programming.
>
> **[0:36](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980&t=36)** The Learning Arduino: Foundations [[LinkedIn]] Learning course is a good place to start if you're new to the Arduino.
>
> **[0:43](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980&t=43)** The prototype itself is built with some common [[Electronics]] and other parts.
>
> **[0:48](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980&t=48)** They include an Arduino Uno, a 16 by two LCD display, a simple button like a tact switch, a 10K or 10,000 ohm potentiometer, a 220 ohm resistor, a full-sized breadboard, and an assortment of jumper wires to connect everything together.
>
> **[1:09](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980&t=69)** If you have an interest in discovery the joy designing [[Microsoft Products|products]] and exploring and developing prototypes then this course is for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (5), [[Prototyping]] (3), [[LinkedIn]] (1), [[Electronics]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** lcd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [What's new in this update](https://www.linkedin.com/learning/arduino-prototyping/what-s-new-in-this-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/what-s-new-in-this-update?u=76281980&t=0)** - [Instructor] In addition to videos, hands-on experience is fun and it helps you develop a deeper understanding of course material.
>
> **[0:07](https://www.linkedin.com/learning/arduino-prototyping/what-s-new-in-this-update?u=76281980&t=7)** This course update add several hands-on challenges for you to work on.
>
> **[0:12](https://www.linkedin.com/learning/arduino-prototyping/what-s-new-in-this-update?u=76281980&t=12)** They help you practice what you're learning and encourage you to look beyond just what's presented.
>
> **[0:17](https://www.linkedin.com/learning/arduino-prototyping/what-s-new-in-this-update?u=76281980&t=17)** The final challenge combines everything you've learned, along with one new idea from a more complete prototype.
>
> **[0:24](https://www.linkedin.com/learning/arduino-prototyping/what-s-new-in-this-update?u=76281980&t=24)** And each challenge is followed by a video showing you the solution I came up with.
>
> **[0:28](https://www.linkedin.com/learning/arduino-prototyping/what-s-new-in-this-update?u=76281980&t=28)** So as you go through the course, take some time to work through the challenges.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/what-s-new-in-this-update?u=76281980&t=32)** They're good practice and demonstrate techniques not covered in the main videos, and they can be a fun way to explore and further develop your [[Arduino]] [[Prototyping]] skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1), [[Prototyping]] (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 1. Understand Prototyping

[↑ Back to Table of Contents](#table-of-contents)

#### [Purpose and pitfalls of prototypes](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=0)** - [Instructor] In physical [[Product Design]], if a picture is worth a thousand words, a prototype is worth a thousand pictures.
>
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=6)** Holding a prototype allows you to experience and communicate your design as it evolves, in a way no description or image can.
>
> **[0:13](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=13)** There are different reasons for [[Prototyping]], and before you start, it's helpful to step back and think about what you're hoping to achieve.
>
> **[0:21](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=21)** One reason to prototype is to learn about new or unfamiliar technology.
>
> **[0:25](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=25)** For example, you might want to build a simple prototype to learn how a distance sensor works.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=31)** Another reason to prototype is to explore and inspire different approaches to your design.
>
> **[0:36](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=36)** There's nothing like having a physical object you can play with to spark imagination.
>
> **[0:41](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=41)** And a well-constructed prototype can be rapidly modified to explore multiple ideas.
>
> **[0:46](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=46)** A prototype is also useful in evaluating ideas.
>
> **[0:49](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=49)** Just because an idea works doesn't mean it's a good idea.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=53)** A prototype can be shared for feedback from team members, project stakeholders, and potential customers.
>
> **[1:00](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=60)** A final reason to prototype is to communicate your design or your progress to others.
>
> **[1:05](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=65)** Touching and interacting with a prototype can be a compelling addition to your slide deck.
>
> **[1:10](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=70)** Okay, we've seen all the great reasons for prototyping, what are some of the risks.
>
> **[1:14](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=74)** Imagine this, you finally manage to get buttons and a display working on your prototype.
>
> **[1:20](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=80)** It's on a breadboard with its chaos of wires, but it works and you're really excited to show it off.
>
> **[1:25](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=85)** Who wouldn't be, right?
>
> **[1:27](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=87)** You arrange a meeting with the team, and your CEO, to demonstrate your progress.
>
> **[1:31](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=91)** After the presentation, the CEO presses the button a few times, there's a reflective pause, then, the CEO says, "So, I thought our product "was going to come in a case.
>
> **[1:44](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=104)** "Wasn't it going to be a red case?"
>
> **[1:47](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=107)** Your heart sinks, you know the CEO has been underwhelmed, and you prepare for the damage control you know will be required.
>
> **[1:55](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=115)** In another scenario, let's say your prototype looks and works like the finished product.
>
> **[2:01](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=121)** During your demo, the CEO is impressed and asks if the product launch can be announced in two weeks at your industry's annual trade show.
>
> **[2:10](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=130)** You have to explain that's not possible.
>
> **[2:13](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=133)** There's significant testing and engineering remaining to make a market-ready product.
>
> **[2:18](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=138)** The CEO leaves disappointed.
>
> **[2:20](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=140)** More damage control.
>
> **[2:23](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=143)** In an actual case, I worked on a project with a very tight time line.
>
> **[2:27](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=147)** It involved some complicated technology, and industrial design.
>
> **[2:32](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=152)** We communicated with the client frequently, and prototypes received positive feedback.
>
> **[2:37](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=157)** When we were days from completion, the project was canceled by the primary stakeholder.
>
> **[2:42](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=162)** There was a communication breakdown with the person who mattered most, and they were unsatisfied with the project's direction.
>
> **[2:50](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=170)** A physical prototype can have a strong impact, so it's important to have a positive impact.
>
> **[2:56](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=176)** The key to this is communication.
>
> **[2:58](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=178)** When showing your prototype, make sure you explain its purpose, and the type of feedback you want, and make sure you're communicating with the right people.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (2), [[Product Design]] (1)
> **Env Vars:** ceo (6)
> **CLI Commands:** make (3)
> **Analogies:** picture (1), for example (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### [Prototype form factors](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=0)** - [Instructor] Your prototype can take different [[Forms]] as it develops, from a simple bare board to a prototype that looks like a finished product.
>
> **[0:07](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=7)** The most basic prototype is a single board.
>
> **[0:10](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=10)** Most [[Arduino]] boards included an LED connected to pin number 13.
>
> **[0:14](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=14)** Newer boards may include sensors and other components you can also use for [[Prototyping]].
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=19)** Breadboards are another way to build a prototype.
>
> **[0:22](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=22)** They all work on the same principle and come in multiple sizes.
>
> **[0:26](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=26)** Components and wires are connected to the breadboard to build your prototype circuit.
>
> **[0:30](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=30)** When you're first getting things to work, it's easiest to use what I call flying jumper wires.
>
> **[0:34](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=34)** These are wires that arch over the board as you build your circuit.
>
> **[0:38](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=38)** Flying jumper wires are very quick but can get confusing, and the wires are notorious for being pulled out at inopportune times like on your way to a presentation.
>
> **[0:47](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=47)** Another approach to breadboard wiring is using wires cut to length and carefully aligned on the breadboard.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=53)** These look neater and are generally more durable.
>
> **[0:56](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=56)** You might use this approach for presentations and user testing.
>
> **[1:00](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=60)** If you want a more durable prototype, you can hand-build your circuit on what's called perfboard.
>
> **[1:05](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=65)** Perfboard comes in various sizes.
>
> **[1:08](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=68)** Standard perfboard contains pre-drilled holes spaced at tenth of an inch intervals and which may or may not be interconnected like a breadboard.
>
> **[1:17](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=77)** If you want to make several of the same prototype and you want to save time wiring components, or if you just want a neater looking prototype, you can design and order a custom printed circuit board, or PCB.
>
> **[1:29](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=89)** Software such as KiCad, Eagle, and others can be used to design your boards from a schematic.
>
> **[1:37](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=97)** With the resulting design files, you can easily order inexpensive boards online.
>
> **[1:42](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=102)** Finished prototype boards are often available in less than two weeks.
>
> **[1:48](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=108)** Finally, you may want an enclosure for your prototype.
>
> **[1:51](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=111)** You can use off-the-shelf or found enclosures.
>
> **[1:54](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=114)** There are many different enclosures in plastic or metal available in stores and online.
>
> **[2:00](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=120)** Another approach is to craft a custom enclosure.
>
> **[2:03](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=123)** You can use traditional methods and materials or you can design a 3D printable enclosure.
>
> **[2:08](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=128)** 3D prints can be ordered online or printed yourself with a 3D printer.
>
> **[2:14](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=134)** Usually your prototype will evolve as your design evolves.
>
> **[2:17](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=137)** So you might start with a breadboard, then move to a perfboard or even to a custom PCB as your design matures.
>
> **[2:26](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=146)** Choosing the right format at the right time can help make the prototype process flexible and fast.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Arduino]] (1), [[Prototyping]] (1)
> **Env Vars:** pcb (2), led (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [The prototype process](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=0)** - [Instructor] One way to think about [[Prototyping]] is as documentation.
>
> **[0:04](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=4)** First there's a process of design.
>
> **[0:07](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=7)** Then when the design is complete a prototype is built to communicate the design to engineers, management, and other stakeholders.
>
> **[0:14](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=14)** You might start with a brief outlining the product goals.
>
> **[0:18](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=18)** Then there's ideation and a design concept emerges.
>
> **[0:22](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=22)** Next, a spec is written for the prototyper.
>
> **[0:25](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=25)** And finally, the prototyper builds a prototype as a living document of the design.
>
> **[0:30](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=30)** If necessary parts of the process can be repeated to refine the design and prototype.
>
> **[0:36](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=36)** Another way to think about it though is that the prototype is part of the design process itself, evolving and informing your design as it progresses.
>
> **[0:45](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=45)** By including prototyping in the design process you create a process I call nimble design.
>
> **[0:51](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=51)** In nimble design you can think of the design process as containing multiple activities.
>
> **[0:56](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=56)** For example, the completed design might include a brief, prototyping, engineering, physical design, documentation, and validation, among other activities.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=66)** When all of the activities are complete the design is complete.
>
> **[1:10](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=70)** In nimble design the process can start in any one of these activities, perhaps with an idea about how the product would look.
>
> **[1:18](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=78)** Or maybe you're playing with some sensor technology that inspires a product idea.
>
> **[1:23](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=83)** Once started the process can move between activities as each activity informs the next move.
>
> **[1:29](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=89)** When all design activities are complete the design is complete.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=93)** Nimble design is especially useful when you're exploring new ideas and technologies and you may not have the information you need in one area until you've worked in another area.
>
> **[1:42](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=102)** Nimble design also allows you to easily take advantage of shifting requirements and resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (3)
> **Documentation:** spec (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Plan the Prototype

[↑ Back to Table of Contents](#table-of-contents)

#### [Prototype planning considerations](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=0)** - [Instructor] [[Prototyping]] as part of a design process can begin without extensive planning.
>
> **[0:05](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=5)** In fact, starting early is a good strategy for quickly gaining momentum and keeping the design grounded.
>
> **[0:12](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=12)** Many projects begin with a product brief that describes the overall goal of the design and any considerations and constraints, such as target audience, cost, and timeline.
>
> **[0:23](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=23)** A product brief can be a good starting point for the design process and your prototype.
>
> **[0:29](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=29)** They say even the longest journey begins with the first step.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=32)** In prototyping, the first step is often to focus on a single component or feature.
>
> **[0:37](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=37)** Maybe connecting a component you haven't used before or creating a feature, like displaying the time on a small screen.
>
> **[0:45](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=45)** This is a minimum viable prototype or proof of concept prototype and can be a small step that helps build momentum.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=53)** Once you've determined the general outline of your prototype, next you need to select the components you'll use.
>
> **[0:59](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=59)** Maybe you need a potentiometer or some LEDs or a gas sensor or a display.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=66)** You may already have these lying around or you may need to order them.
>
> **[1:11](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=71)** If you're ordering components, make sure they will arrive in time to fit your prototype's schedule or be ready to pay for expedited shipping.
>
> **[1:19](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=79)** After deciding on components, the next stage is to design the circuit.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=84)** You can draw on a napkin or use software, such as KeyCAD, EAGLE, or [Circuits.io](https://Circuits.io), to draw schematic or breadboard layout.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=93)** Finally, you'll develop a sketch to implement your design and animate your prototype.
>
> **[1:38](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=98)** Remember when we talked about nimble design?
>
> **[1:41](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=101)** Well, prototyping is inherently nimble.
>
> **[1:43](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=103)** As you prototype, you and the team will gain new insight and the design will evolve.
>
> **[1:49](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=109)** Be ready to visit all stages of the process as new design ideas emerge from this growing understanding and inspiration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (3)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **URLs:** [circuits.io](https://circuits.io) (1)
> **Env Vars:** eagle (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** select the (1)

#### [Demo product brief of handheld game](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=0)** - [Instructor] To set the stage for the prototype we'll be building, imagine that you're working on a prototype for the product based on a short brief that was developed after meeting with product marketing.
>
> **[0:10](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=10)** They felt there was a lucrative opportunity in developing a simple, handheld game for young to early-teen children.
>
> **[0:18](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=18)** The project name is RETRO.
>
> **[0:20](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=20)** The description is a retro action game that emphasizes motor skills and timing rather than puzzle solving.
>
> **[0:27](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=27)** The audience is five to 14-year-olds.
>
> **[0:30](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=30)** For the budget, they want to keep the cost of manufacturing below $5.
>
> **[0:35](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=35)** And as for timeline, they want the product to be ready for manufacturing in six months.
>
> **[0:40](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=40)** Engineering needs to have a complete design significantly earlier than that, which means the [[Product Design]] needs to be complete in six weeks.
>
> **[0:49](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=49)** Now it's time for the design team to work out a concept for the product.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=53)** After some brainstorming, research, and ideation, a design idea emerges.
>
> **[0:59](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=59)** The idea is to create a simple targeting game using a small LCD display and a button for interaction.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=66)** Basically, shooting its base invaders with a laser.
>
> **[1:10](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=70)** The display shows invaders on one line, and a scanning laser on the other line moves back and forth.
>
> **[1:18](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=78)** There's also a button that fires the laser when it's pressed.
>
> **[1:21](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=81)** If the laser points at a target, the target is destroyed.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=84)** Now that there's an initial design concept, it's time to begin [[Prototyping]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Product Design]] (1), [[Prototyping]] (1)
> **Env Vars:** retro (1), lcd (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Define the proof-of-concept prototype](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=0)** - [Instructor] The design concept is simple, but the team has questions about game dynamics and whether the game will be fun to play.
>
> **[0:08](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=8)** The obvious solution is to build a proof of concept prototype to explore the design and maybe to use for some customer testing.
>
> **[0:15](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=15)** With that, it's time to begin working on the prototype.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=19)** A proof of concept prototype typically focuses on a specific part of a design, something you're uncertain about, or which needs more exploration.
>
> **[0:30](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=30)** In our case, the proof of concept prototype will focus on game dynamics.
>
> **[0:34](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=34)** If the game is fun, the team is confident it can work out any other design issues.
>
> **[0:40](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=40)** One general concept for a prototype is to keep it as simple as possible.
>
> **[0:44](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=44)** This facilitates a nimble process by reducing the investment in any one version making it easier to explore multiple ideas with fewer resources.
>
> **[0:54](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=54)** Since we're focusing on the feel of gameplay, rather than the physical product, our proof of concept prototype will simply be a breadboard with a micro controller, a display, and a button.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=66)** Now that we have the outline of our prototype, we can move on to selecting specific components.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Select components and libraries](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=0)** - [Instructor] For simple prototypes, you may have all the parts you need such LEDs, buttons, and potentiometers, but for specific applications or if you want to build multiple prototypes, you may need additional components.
>
> **[0:14](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=14)** The mantra keep it simple applies to components as well as prototype design.
>
> **[0:20](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=20)** Some components may be difficult to integrate.
>
> **[0:22](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=22)** Other components may be breadboard-ready and have libraries, sample code, and tutorials to help.
>
> **[0:28](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=28)** You've probably already used resistors and LEDs.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=32)** These through-hole components have wires or leads that are designed to feed through holes in a breadboard or a PCB.
>
> **[0:40](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=40)** Some components, however, are not designed for [[Prototyping]].
>
> **[0:43](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=43)** For these parts, breakout boards are often available.
>
> **[0:47](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=47)** A breakout board is a PCB that contains the component and any additional support parts required.
>
> **[0:54](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=54)** Connections from the breakout board to a breadboard are made using headers or pins which work easily with breadboards.
>
> **[1:01](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=61)** Pre-wired add-on boards, called shields, can also be used for prototypes.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=66)** Shields plug directly into an [[Arduino]] and add functionality like a display, motor controllers, Bluetooth, or wireless connectivity to name just a few, and they often have software libraries that make them very easy to use.
>
> **[1:22](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=82)** Modules are similar to breakout boards, but they can be certified for manufacturing a commercial product.
>
> **[1:28](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=88)** This can be helpful in the transition from prototype to product.
>
> **[1:32](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=92)** An example of this type of module is the Artemis by SparkFun.
>
> **[1:36](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=96)** Arduino-compatible development platforms like Grove from Seeedstudio, Qwiic from SparkFun, and Feather from Adafruit provide breakout boards, connectors, cables, and software libraries to make prototyping as easy as plugging components together, then using the supplied libraries and software examples to get started.
>
> **[1:57](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=117)** One thing to be careful of is the fact that there are two common voltage levels used with microcontrollers and components: five volts and 3.3 volts.
>
> **[2:06](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=126)** Connecting a 3.3 volt pin to five volts may permanently damage the device.
>
> **[2:11](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=131)** So it's best to check specifications to confirm that your components are compatible.
>
> **[2:16](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=136)** Apart from the [[Hardware]], components often require software to access their features.
>
> **[2:22](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=142)** For example, to read values from an accelerometer requires some specific programming.
>
> **[2:28](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=148)** For these components, there's often a library available that includes functions to make programming much easier, and libraries often include example sketches which can help you understand how to use a component and can be a starting point for your own project.
>
> **[2:43](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=163)** There are built-in libraries documented in the Arduino reference, and you can use the Arduino Library Manager to research and install many libraries from other developers.
>
> **[2:54](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=174)** More information about libraries can be found on the Arduino website.
>
> **[3:00](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=180)** Another way to get information about a component and its use is to search for a tutorial.
>
> **[3:05](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=185)** These may be published in a variety of locations, but a simple web search will often uncover many useful resources.
>
> **[3:13](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=193)** In fact, we'll be using an LCD tutorial to get us started on our prototype.
>
> **[3:19](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=199)** Prototyping supplies can be purchased from Adafruit, SparkFun, Pimoroni, Amazon, Ebay, and many others.
>
> **[3:30](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=210)** Some things to consider when ordering are cost, quality, including support with good software libraries, and speed of delivery.
>
> **[3:38](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=218)** The cost of components is usually a small part of the overall prototype budget, so it is often a good practice to order duplicate components just in case one is damaged at a crucial moment like just before an important demo.
>
> **[3:52](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=232)** So getting back to our prototype, here are the components we'll be using.
>
> **[3:57](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=237)** There are lots of choices, but for simplicity, we're going to be using a standard Arduino Uno.
>
> **[4:03](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=243)** These are inexpensive and easy to use, and they have extensive support and a large community of users.
>
> **[4:09](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=249)** For the display, the current design calls for a two-line by 16-character LCD.
>
> **[4:16](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=256)** These are also inexpensive and easy to use with the built-in LiquidCrystal Arduino Library.
>
> **[4:22](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=262)** For interaction, we'll start by using a single button.
>
> **[4:26](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=266)** Next, we need a 220-ohm resistor for the backlight and a 10-k potentiometer to control the LCD contrast.
>
> **[4:34](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=274)** Other components we will need include a breadboard and an assortment of jumper wires.
>
> **[4:39](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=279)** Now that we have all the components in place, we can move on to designing the prototype circuit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (7), [[Prototyping]] (3), [[Hardware]] (1)
> **Env Vars:** lcd (3), pcb (2)
> **CLI Commands:** make (3)
> **Versions:** 3.3 (2)
> **Analogies:** similar to (1), for example (1)
> **Best Practices:** it's best to (1), good practice (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)

#### [Design the circuit](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=0)** - [Instructor] Our prototype will contain an [[Arduino]] Uno, a display, and a button to control the game.
>
> **[0:07](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=7)** With this in mind, we can begin planning our circuit.
>
> **[0:11](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=11)** From looking at the Arduino LCD tutorial we located earlier, we know you need to connect the display to power.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=19)** You also need to connect several other pins for lighting and contrast, and finally, you need to connect some pins to the Arduino to control the display.
>
> **[0:28](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=28)** Using this information, we can draw a schematic, which is a good way to understand and document your prototype.
>
> **[0:34](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=34)** As we discussed earlier, you can use EDA software to draw your schematic, but sometimes the easiest approach is to use pencil and paper.
>
> **[0:44](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=44)** We can begin by adding power connections to the LCD.
>
> **[0:47](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=47)** The LCD we're using runs on five volts, so we need to add connections to the Arduino five volt output and ground.
>
> **[0:56](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=56)** The LCD uses a backlight to make the characters visible.
>
> **[1:00](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=60)** This requires connections to power and ground.
>
> **[1:04](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=64)** Power is usually connected to the LCD backlight on pin number 15 through a 220 ohm resistor.
>
> **[1:12](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=72)** Ground is connected directly to the LCD pin number 16.
>
> **[1:16](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=76)** LCD contrast is adjusted by connecting the center pin of the potentiometer to LCD pin number three.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=84)** One of the outside leads of the potentiometer should be connected to five volts and the other outside lead should be connected to ground.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=93)** The LCD uses three connections to control communication.
>
> **[1:37](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=97)** These are the RS, RW, and E or EN pins.
>
> **[1:44](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=104)** Finally, the LCD uses either four or eight lines for data transfer.
>
> **[1:49](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=109)** We can do everything we need using only four connections.
>
> **[1:53](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=113)** D2 through D5 are available on the Arduino and won't interfere with serial communications on pins zero and one.
>
> **[2:01](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=121)** They'll be connected to pins 11 through 14 on the LCD.
>
> **[2:05](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=125)** Note how the pin numbers are increasing on the Arduino and decreasing on the LCD.
>
> **[2:12](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=132)** That completes connections to the LCD.
>
> **[2:15](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=135)** The only other component we need is a button.
>
> **[2:18](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=138)** The easiest way to connect a button is one side to ground and the other side to an Arduino digital pin.
>
> **[2:24](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=144)** Pin D7 looks available.
>
> **[2:27](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=147)** That completes our quick schematic.
>
> **[2:30](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=150)** When you begin to put the circuit together, you'll have to translate this to a breadboard layout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (7)
> **Env Vars:** lcd (13), eda (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### [Make a pin map](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=0)** - [Instructor] An [[Arduino]] has a limited number of programmable input/output, or I/O pins.
>
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=6)** All Arduino pins can be used for digital input and output.
>
> **[0:10](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=10)** Some pins can be used for analog output and are sometimes called PWM pins.
>
> **[0:16](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=16)** Some pins can also be used for analog input to read a voltage level between zero and five volts.
>
> **[0:22](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=22)** And some pins have special uses like serial and other [[Forms]] of communication.
>
> **[0:27](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=27)** When you're connecting pins for your prototype, you can sometimes run out of pins or end up with a conflict where you need a pin for one thing, but you're already using it for something else.
>
> **[0:38](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=38)** If this occurs you may have to rewire pins so there's no conflict.
>
> **[0:42](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=42)** Then you'll need to update your sketch to reflect the changes.
>
> **[0:46](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=46)** An Arduino pin map is a good way to keep track of pin usage so there's less chance of having to make changes as the prototype evolves.
>
> **[0:55](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=55)** The form I use is a table that lists all of the pins available on the Arduino along with their capabilities, special uses, and what they're being used for in the prototype.
>
> **[1:08](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=68)** Having this information in one place helps planning and avoids conflicts.
>
> **[1:14](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=74)** Recording the connections from the prototype circuit, we can see there are no problems, and the pin map will also be a useful part of our prototype documentation.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=84)** By the way, a pin map template is available on the course materials for you to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4), [[Forms]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** pwm (1)
> **Exercise Files:** template (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. Your Prototype "Hello World"

[↑ Back to Table of Contents](#table-of-contents)

#### [Connect the display](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=0)** - [Presenter] So, we understand the product brief, and we've done some planning for our proof of concept prototype to explore game play.
>
> **[0:09](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=9)** Now we have to get the prototype up and running.
>
> **[0:12](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=12)** The display is the most complicated part, so let's get that going first.
>
> **[0:17](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=17)** Then we can add other elements as the prototype evolves.
>
> **[0:21](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=21)** Looking at the schematic, in addition to the LCD we see we'll need a resistor to connect the display's backlight.
>
> **[0:29](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=29)** And we'll need a potentiometer to control the LCD contrast.
>
> **[0:33](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=33)** These need to be placed on the breadboard and connected to the [[Arduino]].
>
> **[0:37](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=37)** This early prototype is a proof of concept and doesn't need to be compact, so we can use a full breadboard which gives us more room to work with.
>
> **[0:46](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=46)** Okay, let's jump in and start wiring things up.
>
> **[0:50](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=50)** Here we are, ready to wire up the prototype.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=53)** You can see we've got the LCD, potentiometer, some neat jumper wires here, resistor, and flying jumpers.
>
> **[1:02](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=62)** So let's start by putting the main components on the breadboard.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=66)** LCD first, in the middle.
>
> **[1:09](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=69)** Making sure to leave some room above it for the jumper wires.
>
> **[1:14](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=74)** And we have the potentiometer here, also put that in.
>
> **[1:20](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=80)** Now we're going to place connections from the power and ground rails to the LCD using neat jumper wires.
>
> **[1:27](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=87)** I use red wires for positive voltage and black for ground.
>
> **[1:32](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=92)** The color doesn't matter, they just make connections easier to identify.
>
> **[1:36](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=96)** The ground rail will be connected to the Arduino ground and is on the edge of the board.
>
> **[1:42](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=102)** All of our ground connections will be made to this rail.
>
> **[1:45](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=105)** LCD pins are numbered from one to 16, with the pins at the top there, and one, five, and 16 are all connected to ground.
>
> **[1:56](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=116)** So let's start by doing that.
>
> **[2:00](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=120)** There is pin number one, between the ground and the pin.
>
> **[2:07](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=127)** And pin number five.
>
> **[2:17](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=137)** And finally, pin number 16.
>
> **[2:25](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=145)** We also need to connect one side of our potentiometer to ground, so we can do that now.
>
> **[2:39](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=159)** Now, LCD pin number two connects to positive power, so we can do that.
>
> **[2:53](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=173)** Sometimes it's a little fussy getting wires in the breadboard holes.
>
> **[2:59](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=179)** And the other side of the potentiometer also gets connected to power.
>
> **[3:08](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=188)** We can do that.
>
> **[3:12](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=192)** LCD pin 15, to the backlight, also needs to connects to positive, but through a 220 Ohm resistor.
>
> **[3:20](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=200)** This limits the current so the backlight doesn't burn out.
>
> **[3:24](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=204)** We can use the resistor as the jumper wire between the positive rail and the LCD.
>
> **[3:37](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=217)** That completes all of our power connections.
>
> **[3:41](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=221)** Now we'll start connecting the LCD to the Arduino.
>
> **[3:45](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=225)** First we'll connect the RS, or register select pin, from LCD pin four to Arduino pin 12.
>
> **[3:57](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=237)** Then we'll connect the enable pin from LCD pin six to Arduino pin 11.
>
> **[4:10](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=250)** Now we'll attach the data lines from the LCD to the Arduino.
>
> **[4:15](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=255)** We start with LCD pin 11 or D four, to Arduino pin five.
>
> **[4:26](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=266)** Then we connect LCD pin 12 to Arduino pin four.
>
> **[4:36](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=276)** Then LCD pin 13 to Arduino pin three.
>
> **[4:43](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=283)** And finally, LCD pin 14 to Arduino pin two.
>
> **[4:50](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=290)** Next we'll add the contrast control to the LCD by connecting the potentiometer's middle pin to LCD pin number five.
>
> **[4:59](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=299)** We go from the middle pin to the D zero or LCD pin five.
>
> **[5:10](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=310)** Finally, to bring power to the breadboard, connect a jumper from ground on the Arduino to the ground rail on the breadboard.
>
> **[5:29](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=329)** Then connect a jumper from five volts on the Arduino to the positive rail on the breadboard.
>
> **[5:40](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=340)** Now's a good time to look over your connections to make sure they're all correct.
>
> **[5:46](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=346)** As a simple test of your wiring, you can connect a USB cable to the Arduino from your computer.
>
> **[5:52](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=352)** You should see the backlight come on.
>
> **[5:55](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=355)** If not, remove the USB cable and recheck connections.
>
> **[6:02](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=362)** Success.
>
> **[6:04](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=364)** Since the backlight works, we can test the contrast control by turning the potentiometer all the way in one direction until each character position shows a dark square.
>
> **[6:14](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=374)** If you don't see this, try turning the potentiometer in the opposite direction.
>
> **[6:20](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=380)** Reduce the contrast until the squares are just invisible.
>
> **[6:24](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=384)** That's it, now we're ready to start programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (13)
> **Env Vars:** lcd (20), usb (2)
> **CLI Commands:** make (2), rails (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Display "Hello World" sketch](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=0)** - You've connected your LCD.
>
> **[0:02](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=2)** Now it's time to see if your [[Arduino]] can control it.
>
> **[0:05](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=5)** We'll work on the sketch for our game soon, but now we just want to see if the LCD works properly.
>
> **[0:11](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=11)** So let's start with what's called a Hello World sketch to see if we can get anything to appear on the display.
>
> **[0:18](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=18)** We can write a sketch from scratch, but libraries often provide example sketches.
>
> **[0:24](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=24)** So let's go to the Arduino IDE to see if there's anything we can use from the liquid crystal library to get started.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=31)** So now on the desktop, we can open Arduino.
>
> **[0:35](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=35)** Wait for it to initialize.
>
> **[0:40](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=40)** And now if we go up to File, examples, liquid crystal we can see that there's a Hello World sketch.
>
> **[0:52](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=52)** So let's open that.
>
> **[0:57](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=57)** We'll look more closely at the sketch in a second.
>
> **[0:59](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=59)** But for now let's just run it to see if it works.
>
> **[1:05](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=65)** But first, make sure you've selected the correct board the Arduino Uno, and you've selected the USB port.
>
> **[1:14](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=74)** Now to run the sketch, just click on the run button.
>
> **[1:19](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=79)** You can see it compiling and uploading on the bottom.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=84)** Now we can go to our display.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=86)** If you don't see characters, you can adjust the contrast until they're visible.
>
> **[1:35](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=95)** You can see that we have hello world on the top line, and a number counting up on the second line.
>
> **[1:42](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=102)** So let's look more closely at the sketch.
>
> **[1:46](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=106)** Luckily, the sketch begins with a long comment block that documents how the display should be connected.
>
> **[1:52](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=112)** Also mentioned is that this example is in the public domain so you can use it any way you want.
>
> **[1:59](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=119)** Next we see that the liquid crystal library is included using this include statement.
>
> **[2:05](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=125)** To initialize the display the sketch uses what's called a constructor.
>
> **[2:10](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=130)** The constructor creates a variable or object used to access library functions.
>
> **[2:16](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=136)** The variable is called LCD in this case, but can be any name.
>
> **[2:21](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=141)** The constructor also specifies which pins are used to control it.
>
> **[2:27](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=147)** The constants on the previous line define those connections and fortunately, they match the connections we've made so far.
>
> **[2:35](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=155)** Now let's look at the setup and loop functions.
>
> **[2:39](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=159)** In the setup function, LCD begin is a method that specifies how many columns and rows your display has.
>
> **[2:49](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=169)** The last statement in setup, the print statement, prints the message Hello World.
>
> **[2:56](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=176)** Now let's look at the loop function.
>
> **[2:59](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=179)** Each time through the loop function, the sketch prints the value of Millie's the milliseconds since this sketch began.
>
> **[3:08](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=188)** Normally when something is printed, the next thing printed will come right after it.
>
> **[3:12](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=192)** But that wouldn't be very good here.
>
> **[3:14](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=194)** So the sketch uses set cursor to set the position back to the beginning of the line each time.
>
> **[3:21](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=201)** That's it for our hello world sketch.
>
> **[3:23](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=203)** It verified that the display works properly.
>
> **[3:27](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=207)** We can continue by modifying the sketch to experiment with the display and library.
>
> **[3:32](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=212)** We can also use this hello world as the starting point as we build our prototype.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4)
> **Env Vars:** lcd (4), ide (1), usb (1)
> **UI Navigation:** go to (2), click on (1)
> **Prerequisites:** setup (3)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - you (1)

#### [Challenge: Controlling the display](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980&t=0)** - [Instructor] This first challenge is a chance for you to make sure the [[Arduino]] IDE and the display are properly set up and to make some changes to test your understanding of the "Hello World" sketch.
>
> **[0:17](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980&t=17)** The goals of this challenge are simple.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980&t=19)** First, change the message on the top line of the display.
>
> **[0:23](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980&t=23)** For example, change it from Hello World to Hey Universe.
>
> **[0:28](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980&t=28)** Second, reverse the two lines on the display.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980&t=31)** Put the counter on the top line and the message on the second line.
>
> **[0:36](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980&t=36)** That's it.
>
> **[0:37](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980&t=37)** Try this on your own and in the next video, I'll show you the solution I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** ide (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Controlling the display](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=0)** - [Instructor] Here's a solution to the challenge.
>
> **[0:08](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=8)** The challenge was to first, change the message on the display.
>
> **[0:12](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=12)** For example, change from Hello World to Hey Universe.
>
> **[0:16](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=16)** The second goal was to reverse the two lines on the display, putting the counter on the top line and the message on the second line.
>
> **[0:24](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=24)** The necessary changes are straightforward.
>
> **[0:27](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=27)** First, you need to change the text in the LCD print statement.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=31)** Then you need to explicitly place the cursor before each line is written to the LCD using the set cursor method.
>
> **[0:38](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=38)** Let's go to the [[Arduino]] IDE to see how this works.
>
> **[0:42](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=42)** Here we are in the IDE.
>
> **[0:44](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=44)** The first thing I'm going to do is save this and you can see I've loaded Hello World.
>
> **[0:48](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=48)** I'm going to save this under a new name.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=53)** So I'll just call it Hello World Challenge And if we scroll up here, you can see the bulk of the program.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=66)** And there are two places where we need to make changes.
>
> **[1:09](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=69)** First of all, we need to change the message here where it says Hello World.
>
> **[1:14](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=74)** We can just change this to Hey Universe and add another exclamation just for emphasis.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=86)** And we need to change which line it's been printed on, because by default, it's being printed on the top line.
>
> **[1:35](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=95)** So we have to explicitly put it on the second line by using LCD set cursor, and then we want column zero, and then we use one because the line numbers start with zero.
>
> **[1:51](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=111)** And then down here where we display the counter, instead of putting it on the second line, we just need to change that to zero, the line number, to put it on the top line.
>
> **[2:03](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=123)** And now when we run this and upload it, you can see by looking at the prototype that the message is on the bottom and it's changed to Hey Universe and the counter is on the top.
>
> **[2:18](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=138)** And that's it for my solution to the first challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Env Vars:** lcd (3), ide (2)
> **UI Navigation:** go to (1), scroll up (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Animate the Display

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand display dynamics](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=0)** - [Instructor] The design concept we're working from has two rows, one row with invaders and one row with a laser that moves back and forth.
>
> **[0:07](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=7)** We already know how to show characters on the display using set cursor and print, so let's focus on animating the laser.
>
> **[0:15](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=15)** Traditionally, animation consists of frames being presented one-by-one.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=19)** Changes from frame to frame appear as motion.
>
> **[0:22](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=22)** For animation controlled by a sketch, each frame's changes have to be calculated, then displayed.
>
> **[0:28](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=28)** Our laser animation works the same way.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=31)** For each frame, the laser moves to a new column.
>
> **[0:33](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=33)** The question now is how would you sketch that?
>
> **[0:38](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=38)** One way to start is to write what's called pseudocode.
>
> **[0:41](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=41)** Pseudocode is an informal description of an algorithm or process.
>
> **[0:45](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=45)** Pseudocode won't ever be used directly, but it can help you when it's time to write your sketch.
>
> **[0:52](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=52)** For example, the pseudocode description of blinking an LED might be turn the LED on, delay half a second, turn the LED off, delay half a second, and repeat.
>
> **[1:03](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=63)** Since pseudocode is informal, the precise language isn't important.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=66)** It simply has to be meaningful to you and provide enough information to translate to actual code when you begin [[Sketching]].
>
> **[1:13](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=73)** In pseudocode, our laser animation algorithm might look something like this.
>
> **[1:18](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=78)** Calculate the laser position for the frame, display the laser, then repeat.
>
> **[1:22](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=82)** This is enough to start with.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=84)** The next step is to turn the pseudocode into a sketch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sketching]] (1)
> **Env Vars:** led (3)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Implement display dynamics](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=0)** - [Instructor] So, we've developed this simple pseudocode describing our animation.
>
> **[0:04](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=4)** First, we calculate the laser position for the frame.
>
> **[0:07](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=7)** Then, we display the laser.
>
> **[0:08](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=8)** Then, we repeat.
>
> **[0:09](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=9)** Now, let's go to the [[Arduino]] IDE to see how we would implement that in our sketch.
>
> **[0:16](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=16)** Okay, so, we'll open the IDE.
>
> **[0:21](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=21)** Okay, so, now we're going to go to the Hello World sketch in our examples here.
>
> **[0:27](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=27)** LiquidCrystal, Hello World.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=31)** I'll maximize that so we can work with it.
>
> **[0:34](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=34)** And the first thing you should do is you cannot save changes to a built-in file.
>
> **[0:39](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=39)** So, let's save it under a new name.
>
> **[0:42](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=42)** I'm just going to call it RETRO_1.
>
> **[0:48](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=48)** We can also save a new version every time we get ready to make changes later on.
>
> **[0:54](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=54)** Now, we can get rid of a lot of the existing stuff in here.
>
> **[0:59](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=59)** So, let's get rid of these comments at the beginning.
>
> **[1:03](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=63)** I'm going to leave the circuit in here, just for reference, but we can change the name to RETRO.
>
> **[1:11](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=71)** And brief description, which is space invader game.
>
> **[1:19](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=79)** And then, it is an author.
>
> **[1:21](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=81)** Use my pseudoname, which is Red Team Leader.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=86)** And we can also get rid of the other comments down here about who wrote the original thing and the licensing, et cetera.
>
> **[1:38](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=98)** So, that's it for the comments.
>
> **[1:39](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=99)** Now, we can also get rid of some unnecessary code from the Hello World.
>
> **[1:45](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=105)** This stuff all is related to the LiquidCrystal library, so, we'll leave that there.
>
> **[1:51](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=111)** We don't need to print out Hello World anymore.
>
> **[1:54](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=114)** So, we can get rid of that.
>
> **[1:56](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=116)** And we can also get rid of this print for the millis in the loop, milliseconds.
>
> **[2:01](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=121)** So, get rid of that.
>
> **[2:03](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=123)** And I'm going to save this, just so we're clear to this point.
>
> **[2:09](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=129)** So, the original sketch wrote out a message at a fixed location.
>
> **[2:15](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=135)** In this sketch, we need to vary the location of the laser.
>
> **[2:20](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=140)** So, let's create a variable for that.
>
> **[2:23](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=143)** So, I'm going to call, it's an integer variable.
>
> **[2:26](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=146)** And we'll call it laserColumn.
>
> **[2:31](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=151)** Let's just add a comment for that.
>
> **[2:34](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=154)** Current laser position.
>
> **[2:38](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=158)** And let's initialize that in our setup, here.
>
> **[2:44](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=164)** Initialize.
>
> **[2:50](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=170)** So, we'll say laserColumn equals zero.
>
> **[2:56](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=176)** Now, let's look at how we would do the animation.
>
> **[3:00](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=180)** So, the first thing in our pseudocode is to update the location in the frame, or recalculate the frame.
>
> **[3:07](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=187)** So, let's do that.
>
> **[3:12](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=192)** And to do that, we're simply adding one to the column each time for the new frame.
>
> **[3:17](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=197)** So, we just say laserColumn equals laserColumn
>
> **[3:26](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=206)** plus one.
>
> **[3:28](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=208)** So, that gets us the new position.
>
> **[3:30](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=210)** And now, we need to print out the laser character or a laser character at that position.
>
> **[3:37](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=217)** So, we know that we can set the position using the setCursor command, but instead of having a fixed column, we want to use laserColumn here, as the column we're going to print on.
>
> **[3:51](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=231)** And it's on the same row, 'cause it's the second row.
>
> **[3:55](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=235)** And the rows are numbered, starting from zero at the top.
>
> **[3:58](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=238)** And then, what we want to do, is print at that location.
>
> **[4:05](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=245)** And we can use any character.
>
> **[4:07](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=247)** But the caret is a nice character for our laser.
>
> **[4:11](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=251)** And that's it.
>
> **[4:13](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=253)** So, each time through the loop, it'll update the position.
>
> **[4:16](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=256)** And then, print the character.
>
> **[4:21](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=261)** There are no errors here.
>
> **[4:22](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=262)** So, now we can go over and look at our prototype.
>
> **[4:24](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=264)** Well, I don't know about you, but this isn't exactly what I was expecting.
>
> **[4:30](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=270)** You saw the carets kind of zoomed across the screen really quickly, and they're all over the place.
>
> **[4:36](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=276)** They're not just on the second row.
>
> **[4:38](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=278)** So, let's try to figure out what the problem is here.
>
> **[4:42](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=282)** Let's deal with the first thing, which is everything moved too quickly.
>
> **[4:46](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=286)** So, the way we dealt with that in other sketches, for example, the blink sketch, is to just put a delay in the loop.
>
> **[4:53](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=293)** So, each time through the loop takes a little longer.
>
> **[4:55](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=295)** So, let's just do that here.
>
> **[4:59](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=299)** And let's add a half a second or 500 millisecond delay.
>
> **[5:06](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=306)** And let's see what that does.
>
> **[5:08](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=308)** So, I'm just going to upload it again.
>
> **[5:12](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=312)** Well, this is looking a little bit more like what we want.
>
> **[5:16](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=316)** It gets to the edge of the screen, nothing happens.
>
> **[5:19](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=319)** We keep waiting.
>
> **[5:21](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=321)** Oh, now it's beginning some random lasers up here at the top.
>
> **[5:25](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=325)** So, let's deal with the fact that it's not moving in the same sense that we wanted.
>
> **[5:31](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=331)** It's just kind of leaving a trail behind.
>
> **[5:33](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=333)** The problem with that is that while we are writing a new laser in a new position, we're not getting rid of the old laser.
>
> **[5:43](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=343)** So, we have to put an erase statement in here.
>
> **[5:46](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=346)** And the way we do that is up at the beginning of the loop, let's just say erase the old frame.
>
> **[5:53](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=353)** And to do that, we just do the same thing we did to write it.
>
> **[5:58](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=358)** We do lcd.setCursor laserColumn,
>
> **[6:06](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=366)** a one.
>
> **[6:08](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=368)** 'Cause it turns out laserColumn is where we wrote the last laser at.
>
> **[6:12](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=372)** And then print.
>
> **[6:14](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=374)** And this time, we're going to print a space, rather than the laser character.
>
> **[6:19](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=379)** And that should erase the old laser.
>
> **[6:22](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=382)** So, let's try this again.
>
> **[6:27](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=387)** And now, we see we actually have a laser, which is fairly respectable.
>
> **[6:31](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=391)** It's still disappearing when it gets to the end, and that's a problem.
>
> **[6:35](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=395)** The problem with that is, if you haven't figured it out already, is that there are only 16 columns in the LCD, and they're numbered from zero to 15.
>
> **[6:44](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=404)** And the laserColumn just keeps counting up.
>
> **[6:47](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=407)** So, what happens when the column gets to be greater than 15?
>
> **[6:51](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=411)** Something indeterminate happens, and then it begins moving along the top.
>
> **[6:55](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=415)** So, to fix that, we just have to limit the laserColumn so that it doesn't get to be greater than 15.
>
> **[7:02](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=422)** So, we can do that with an if statement, here.
>
> **[7:10](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=430)** And, so, we say if laserColumn is greater than 15, then, we want to just set the laserColumn back to zero.
>
> **[7:25](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=445)** So, it'll go back to the left side and then start scanning again.
>
> **[7:28](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=448)** Let's just save this and then run it again.
>
> **[7:33](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=453)** Okay, now we see the laser moving.
>
> **[7:36](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=456)** And now, let's see what happens when it gets to the edge.
>
> **[7:43](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=463)** Starts over again.
>
> **[7:44](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=464)** And, so, there we have it.
>
> **[7:45](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=465)** We've got a respectably animated laser, and we can move on to the next steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Code Identifiers:** lasercolumn (11), setcursor (2)
> **Env Vars:** ide (2), retro_1 (1), retro (1), lcd (1)
> **UI Navigation:** go to (2), open the (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)

#### [Challenge: Modify the animation](https://www.linkedin.com/learning/arduino-prototyping/challenge-modify-the-animation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/challenge-modify-the-animation?u=76281980&t=0)** - [Instructor] In this challenge, you'll get a chance to experiment with the prototype animation.
>
> **[0:11](https://www.linkedin.com/learning/arduino-prototyping/challenge-modify-the-animation?u=76281980&t=11)** The challenge has two goals.
>
> **[0:13](https://www.linkedin.com/learning/arduino-prototyping/challenge-modify-the-animation?u=76281980&t=13)** First in our current prototype, the laser animation goes in a single direction from left to right.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/challenge-modify-the-animation?u=76281980&t=19)** The goal in this challenge is to make the laser bounce back and forth in both directions.
>
> **[0:24](https://www.linkedin.com/learning/arduino-prototyping/challenge-modify-the-animation?u=76281980&t=24)** The second goal is to experiment with different animation speeds and observe the results.
>
> **[0:30](https://www.linkedin.com/learning/arduino-prototyping/challenge-modify-the-animation?u=76281980&t=30)** Have fun working on this challenge.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/challenge-modify-the-animation?u=76281980&t=31)** In the next video, I'll show you the solutions I came up with.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Modify the animation](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=6)** - [Instructor] Here's the solution I came up with for this challenge.
>
> **[0:10](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=10)** Remember, this challenge has two goals.
>
> **[0:13](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=13)** First, in our current prototype, the laser animation goes in a single direction from left to right.
>
> **[0:20](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=20)** The goal is to make the laser bounce back and forth in both directions.
>
> **[0:25](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=25)** The second goal is to experiment with different animation speeds and observe the results.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=31)** Currently, our prototype moves the laser by adding one to the laser column each time through the loop.
>
> **[0:38](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=38)** When the laser goes past the right side of the LCD, the laser column is reset to zero.
>
> **[0:45](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=45)** To make the laser bounce, you can start by using a variable instead of a constant one for calculating the laser animation step.
>
> **[0:54](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=54)** Then, when the laser reaches the right side of the LCD, you can change the laser step to minus one.
>
> **[1:01](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=61)** When it reaches the left side, the laser step changes to one again and so on.
>
> **[1:07](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=67)** You can see the If statements here.
>
> **[1:10](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=70)** Another way to code the same thing is to use a compound condition in the If statement to check for the laser reaching either side of the display.
>
> **[1:19](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=79)** If so, just reverse the laser step using the minus sign.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=84)** So that's the idea.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=86)** Now let's go to the [[Arduino]] IDE and look at how I added this to the sketch.
>
> **[1:32](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=92)** Here we are in the IDE and I've loaded Retro_1 here.
>
> **[1:36](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=96)** And the first thing I'm going to do is save this with a new name.
>
> **[1:42](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=102)** I'll call it Retro_1_Challenge.
>
> **[1:50](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=110)** Then, we need to add a variable for the laser step.
>
> **[1:54](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=114)** So I'll add int laserStep.
>
> **[2:04](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=124)** And then in setup, we need to initialize it.
>
> **[2:14](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=134)** And I'll just say, laserStep = 1.
>
> **[2:22](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=142)** Then here, where we calculate the laser column, instead of using the constant one, I'll use laserStep here, and then here, where we limit the column, I want to use the compound If statement.
>
> **[2:38](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=158)** So first of all, if the laser column is equal to zero or the laser column is equal to 15, then instead of setting the laser column explicitly to zero, I want to say laserStep equals minus laser.
>
> **[3:09](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=189)** So those are all the changes.
>
> **[3:10](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=190)** Let's upload this.
>
> **[3:13](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=193)** See what happens.
>
> **[3:18](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=198)** Okay, you can see the laser's moving left to right as normal and then it bounces back and starts going right to left.
>
> **[3:29](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=209)** So the next thing we want to do is experiment a little bit with the speed.
>
> **[3:33](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=213)** It's going a little slow now.
>
> **[3:35](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=215)** So let's make it 10 times faster.
>
> **[3:38](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=218)** Change the delay to 50, which is what's controlling the speed here.
>
> **[3:43](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=223)** I'm going to upload that.
>
> **[3:47](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=227)** And now on my display, you can't really even see the animation, or it's very difficult.
>
> **[3:56](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=236)** These displays have a specification called the refresh rate, and that's how long it takes for the crystals to dark and then actually display characters.
>
> **[4:06](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=246)** And if the animation is too fast, the display doesn't have time to display it before it moves.
>
> **[4:12](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=252)** That's what's happening here.
>
> **[4:14](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=254)** So let's change the display rate, make it a little slower.
>
> **[4:17](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=257)** 150 rather than 50.
>
> **[4:18](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=258)** So it's three times slower and let's upload that.
>
> **[4:26](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=266)** And now you can begin to see the animation.
>
> **[4:29](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=269)** So pick a speed that's comfortable for your display, cause the displays can be different for that.
>
> **[4:34](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=274)** And that's it for my solutions to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** laserstep (4)
> **Env Vars:** lcd (2), ide (2)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 5. Add Interaction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand interaction logic](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=0)** - [Instructor] We now have a laser animating across our display and while you probably feel pretty good about getting that to work, truthfully it might get a little boring after a while and the design concept specifies some interaction like zapping some invaders.
>
> **[0:13](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=13)** In this video we'll see how to add invaders and interaction to our prototype.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=19)** Here's the current pseudocode for the animation.
>
> **[0:21](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=21)** We erase the previous frame, calculate a new laser position, display the laser, delay for a while, and then repeat.
>
> **[0:30](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=30)** The design concept specifies a button for interaction, so we need to update the pseudocode to add checking whether a button is pressed.
>
> **[0:36](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=36)** And if it is, then take some action.
>
> **[0:41](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=41)** So here's some updated pseudocode.
>
> **[0:43](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=43)** We erase the frame just like before, calculate a new laser position, display the laser, but now we check the button.
>
> **[0:50](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=50)** If it's pressed below an invader, then we zap it.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=53)** Then we go back and delay for a while and then repeat.
>
> **[0:57](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=57)** Now of course we need some invaders on the screen to zap, so let's add that to our pseudocode, and we can do that in the setup function.
>
> **[1:04](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=64)** Now of course we need some invaders on the screen to zap, so let's add that to our pseudocode.
>
> **[1:09](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=69)** We've added that in the setup function.
>
> **[1:11](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=71)** So that's the general idea.
>
> **[1:13](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=73)** Now we just have to get these changes working.
>
> **[1:15](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=75)** First we'll connect the button to our prototype, then we'll look at modifying our sketch to zap the invaders.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Breadboard buttons and update pin map](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=0)** - [Instructor] Looking at our prototype circuit, we see that adding the button to the prototype is as easy as connecting one side of the button to ground and other side to pin number seven on the [[Arduino]].
>
> **[0:10](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=10)** So let's go to the breadboard and the button.
>
> **[0:12](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=12)** Then we'll return to the IDE and modifier sketch to add interaction.
>
> **[0:17](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=17)** First let's add the button to the breadboard.
>
> **[0:20](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=20)** There are different types of buttons, but they all connect two leads together when pressed.
>
> **[0:26](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=26)** So make sure that two leads are on different rows of the breadboard.
>
> **[0:35](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=35)** We know from the schematic that one side of the button connects to ground, so just like we have before, let's add a neat jumper from the ground rail to one side of the button.
>
> **[0:54](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=54)** Finally we need to connect the other side of the button to pin number seven on the Arduino.
>
> **[0:58](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=58)** We can use a flying jumper wire for this.
>
> **[1:11](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=71)** And that's it for connections.
>
> **[1:13](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=73)** Earlier we recorded the button pin in the pin map.
>
> **[1:15](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=75)** So now let's go to the IDE to update our sketch and add interaction from our pseudo-code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** ide (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Implement buttons](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=0)** - [Instructor] Our updated pseudocode has added setting up the invaders on the display, checking the button, and if the button is pressed when the laser is below an invader, the invader is destroyed.
>
> **[0:11](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=11)** The first new feature there is to set up the invaders.
>
> **[0:14](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=14)** Following our keep it simple mantra, one approach is to simply use LCD set cursor and LCD print to display a string of invaders at the top of our display.
>
> **[0:25](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=25)** One thing that will be useful to know when we get to our sketch is that individual characters in a string can be accessed directly.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=32)** For example let's say you set up your invaders string as a variable, and set its value equal to 16 characters to fit our display.
>
> **[0:40](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=40)** You can then reference the first character in this string as invaders with a zero between square brackets.
>
> **[0:47](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=47)** And it is an invader.
>
> **[0:49](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=49)** The fourth character in this string is invaders with three between square brackets, and it is not an invader, it's a space.
>
> **[0:57](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=57)** Counting characters starts with zero rather than one.
>
> **[1:00](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=60)** With that in mind, let's go back to the IDE and our sketch to add some interaction.
>
> **[1:07](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=67)** Here we are in the retro one sketch that we ended with last time.
>
> **[1:12](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=72)** So we should save it with a new name before we get started with these changes, so we can change it to retro two.
>
> **[1:22](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=82)** So the first thing we're going to do is add a variable for the invaders.
>
> **[1:29](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=89)** We'll do that up here at the top, below the include statement.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=93)** So, add a comment, and then set the string type, invaders, and then we'll want to initialize that in setup.
>
> **[1:50](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=110)** And so we can say, so we just say invaders equals, then we put double quotes, then let's just put in some two, three, four, five, six, seven, eight, nine, 10, 11, 12, 13, 14, 15, 16, some random invaders.
>
> **[2:20](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=140)** Now to actually display the invaders we don't need to do that each time through our loop, so we can do that in the setup function as well.
>
> **[2:31](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=151)** We have to set the cursor to the right position, LCD set cursor, this is going to be on the top row, so it's column zero on the left side, and then row zero.
>
> **[2:46](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=166)** And then we just use LCD print to print the invaders.
>
> **[2:54](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=174)** Okay, we can save the sketch and let's give that a try to see how it works, so just upload it using the upload button here, and there you go, we've got some invaders, and our laser menacing them from below.
>
> **[3:11](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=191)** So let's now go back and see how to zap the invaders.
>
> **[3:17](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=197)** So the next thing we need to do is put in the statements to read our button and to zap an invader if we press a button when the laser is below the invader.
>
> **[3:29](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=209)** So the first thing we need to do is set up the pin that the button is connected to.
>
> **[3:36](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=216)** Setup laser button, and we use the familiar pin mode command, and our button is on pin seven, and we want to initialize it in what's called input pull up mode.
>
> **[3:56](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=236)** That just means by default the button is high, or the pin is high, and when you press the button, since it's connected to ground, that will bring the pin low.
>
> **[4:08](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=248)** So now in our loop we want to check the button each time through the loop.
>
> **[4:14](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=254)** Here we can add some code to check the button and zap invaders.
>
> **[4:23](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=263)** To do this we use an if statement, and we start out if we're going to read the pin seven using digital read, and then we're going to check, to see whether it's up or down.
>
> **[4:37](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=277)** We'll use that double equals sign for comparing two values, and we're going to say if it's low that means we've pressed the button, then we want to set the cursor to that column in the invader line, so we'll say set cursor, column is going to be our current laser column, and the laser is on row one, but the invaders are on row zero, so we'll put our cursor up on row zero where the invaders are.
>
> **[5:12](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=312)** And then we're going to print a space, which is how we zap our invaders.
>
> **[5:23](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=323)** And that's it, that's all we have to do.
>
> **[5:25](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=325)** So let's save that and then upload it to our prototype and see how that works.
>
> **[5:31](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=331)** Uh oh, there's an error here, oh, turns out you have to make sure that you're applying the set cursor to the LCD.
>
> **[5:44](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=344)** Try that again, it's done uploading, now it looks the same as before, but now we should have some interaction with our button.
>
> **[5:55](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=355)** Oop, you can see some invaders disappearing, which is pretty cool.
>
> **[6:00](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=360)** We'll develop this further as we go along, but for now we have the basics of the game, we have some invaders, and we have a laser, and we have the ability to zap invaders.
>
> **[6:12](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=372)** We've added interaction and our prototype's game play is basically complete.
>
> **[6:16](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=376)** One of the most important parts of [[Prototyping]] is playing with it.
>
> **[6:20](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=380)** First of all it's fun when your prototype actually works, but it also helps you understand how the prototype works and feels.
>
> **[6:26](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=386)** So if you have your prototype up and running, spend some time now to play with it.
>
> **[6:30](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=390)** Keep track of anything you see you might want to change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (1)
> **Env Vars:** lcd (5), ide (1)
> **Prerequisites:** set up (3), setup (3)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Name](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=0)** - [Instructor] The prototype now has some interaction in the form of a button and zapping invaders.
>
> **[0:12](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=12)** But part of interaction is giving the player feedback about game progress.
>
> **[0:16](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=16)** So in this challenge, your goal is to stop the animation and display a message when all of the invaders have been zapped.
>
> **[0:23](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=23)** This is a small bit of positive feedback for successfully completing the game.
>
> **[0:29](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=29)** You might be wondering how to stop a sketch.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=32)** One answer is that you can use an empty while statement with a constant true condition.
>
> **[0:38](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=38)** Since the condition is always true, the sketch stays in the loop with no way out.
>
> **[0:44](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=44)** To restart your sketch, press the reset button on your [[Arduino]].
>
> **[0:49](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=49)** That's it, now it's your turn to work on solving this challenge.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=53)** In the next video, I'll show you my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Name](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=0)** - [Instructor] Here's my solution to the challenge.
>
> **[0:09](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=9)** Remember the goal of the challenge is to display a message on the LCD when all of the invaders are zapped.
>
> **[0:15](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=15)** Here's some pseudocode that explains the basic idea.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=19)** First, create a variable with the number of invaders at the beginning.
>
> **[0:23](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=23)** Then each time through the loop, if the laser's fired by pressing the button, check to see if there's an invader there.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=31)** If so, subtract from the total invaders and erase the invader from the string variable.
>
> **[0:37](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=37)** Finally, if the number of invaders reaches zero, display a message and halt the sketch.
>
> **[0:43](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=43)** Now let's head to the desktop to see how this works in code.
>
> **[0:47](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=47)** Here we are in the IDE.
>
> **[0:50](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=50)** First thing I'm going to do is I've preloaded retro to our starting point.
>
> **[0:55](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=55)** I'm going to save that as retro to challenge.
>
> **[1:05](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=65)** And now, the first thing I need to do is to the code is, add a variable for the number of invaders.
>
> **[1:15](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=75)** So I'll set that to be an integer and then down here in set up, or I initialize the invaders, I can say number of invaders equals, I think there are 10 asterisks there.
>
> **[1:35](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=95)** So I'll set the number of invaders to 10.
>
> **[1:39](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=99)** Then here in the loop, this is where we check the button and zap and invader, if the button's pressed.
>
> **[1:48](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=108)** So what we need to do is check to make sure there's an invader actually there.
>
> **[1:53](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=113)** And so if we say, if invaders indexed to laser column
>
> **[2:04](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=124)** equals an asterisk and notice I used a single quote there because it's a character.
>
> **[2:12](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=132)** I need to use a double equals rather than a string.
>
> **[2:17](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=137)** And then I'll set a block here and I want to set the cursor erase the invader, but now I also want to remove it from the invader string.
>
> **[2:33](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=153)** So I'll say invaders also with index laser column
>
> **[2:42](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=162)** equals, I'll put in a space and then I have to set number of invaders equals number of invaders minus one.
>
> **[2:58](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=178)** So I have one less invader and then close off that if statement.
>
> **[3:05](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=185)** So that takes care of making sure I know how many invaders are left.
>
> **[3:11](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=191)** Now I need to say if there are nothing, if there are no invaders left, then print a message.
>
> **[3:17](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=197)** So if I say, if number of invaders equals zero and the first thing I want to do is clear the LCD then LCD print all invaders for the first line and then set cursor to the second line and say LCD print zapped, and a few exclamations for effect.
>
> **[4:03](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=243)** And then I want to stop the sketch with that while loop.
>
> **[4:07](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=247)** So I can say while true, do nothing.
>
> **[4:13](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=253)** And so that should stop the sketch until you reset everything.
>
> **[4:19](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=259)** Okay. So that's the code.
>
> **[4:20](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=260)** Let's upload it and see how it works.
>
> **[4:30](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=270)** Okay. You can see it's kind of working as expected here.
>
> **[4:37](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=277)** Let's see what happens.
>
> **[4:40](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=280)** There we go.
>
> **[4:42](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=282)** It's gratifying to get some positive feedback after you've completed the game.
>
> **[4:46](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=286)** And that's my solution to the challenge.

> [!info]- Semantic Content
>
> **Env Vars:** lcd (4), ide (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Improve Responsiveness

[↑ Back to Table of Contents](#table-of-contents)

#### [Blocking versus non-blocking code](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=0)** - [Instructor] You expect your world to be responsive.
>
> **[0:02](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=2)** When you push on a door, you expect it to respond immediately.
>
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=6)** If it doesn't, you may run into it.
>
> **[0:08](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=8)** In our prototype, you may have noticed that the timing between pressing a button and zapping an invader is a little off.
>
> **[0:15](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=15)** That timing issue makes the prototype a little confusing and unpredictable.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=19)** Let's see what that problem is and see if we can fix that.
>
> **[0:24](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=24)** If you look at the code in the Loop function, you can see there's quite a bit that goes on, but the [[Arduino]] is pretty fast and it finishes everything quickly.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=32)** Initially, we let the loop run as quickly as it could, and the animation was way too fast.
>
> **[0:37](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=37)** So to slow things down, we did something that's pretty common.
>
> **[0:40](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=40)** We added a Delay statement, and that's what's causing the timing problem.
>
> **[0:45](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=45)** The problem with Delay is when it's delaying, nothing else is happening.
>
> **[0:50](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=50)** That's okay if you're just watching what's going on, but if you want to interact, you're blocked during that time.
>
> **[0:55](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=55)** If you press your button, nothing will happen.
>
> **[0:58](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=58)** There's just a small window when the sketch can read your button press.
>
> **[1:01](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=61)** Delay is referred to as blocking.
>
> **[1:03](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=63)** It blocks everything else until it's complete.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=66)** Let's look at a simple sketch to illustrate this.
>
> **[1:11](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=71)** So here, we're starting with a new sketch, and right off the bat, I'm just going to save it.
>
> **[1:18](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=78)** We can call it Blocking.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=86)** And all we're going to do, is we're going to turn the LED on and off when we're pressing the button or releasing it.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=93)** So first of all, we need to set up the pins for the button and the LED.
>
> **[1:37](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=97)** So we'll say pinMode, seven, this is for the button.
>
> **[1:43](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=103)** We already know that that's INPUT_PULLUP before.
>
> **[1:47](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=107)** And I'm going to set pinMode, 13, as output for the LED.
>
> **[1:56](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=116)** Now, in the loop, we're going to do something a little tricky.
>
> **[2:00](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=120)** We're going to say digitalWrite for the LED on pin 13, but the value we're going to use for that is just what we're going to read from pen seven, so we can use digitalRead on pen number seven.
>
> **[2:17](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=137)** Now what's going to happen is when the button press returns a low, the light will go off.
>
> **[2:24](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=144)** When the button press returns a high, the button will go back on.
>
> **[2:28](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=148)** When the button is pressed, it returns low and when the button is released, it returns high.
>
> **[2:33](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=153)** We're also going to put in a delay here.
>
> **[2:37](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=157)** We'll put in a two second delay for each loop.
>
> **[2:40](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=160)** So let's save this, and then upload it to our prototype and see what happens.
>
> **[2:48](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=168)** Now if we look at our prototype, and see that the LED is on because the button is up.
>
> **[2:55](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=175)** If we press the button down, the LED goes off.
>
> **[2:59](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=179)** We release the button, the LED comes on, but there's sometimes a delay in both directions.
>
> **[3:11](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=191)** That's because the delay statement is blocking.
>
> **[3:13](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=193)** It's waiting that two seconds.
>
> **[3:16](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=196)** Now if we go back to the Arduino IDE to that sketch, and comment out delay, and upload the sketch again, and look at the LED.
>
> **[3:29](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=209)** When we press it, it's instantly responsive.
>
> **[3:36](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=216)** That's because there's nothing blocking in our loop.
>
> **[3:41](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=221)** Our sketch illustrates the problem, but it's a simple case.
>
> **[3:45](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=225)** If we remove delay from our prototype, we've already seen how the animation goes too fast.
>
> **[3:52](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=232)** One solution is to use a timer to time steps in your animation.
>
> **[3:56](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=236)** The timer will keep track of animation intervals and only update the animation when necessary, otherwise it skips the animation and leaves the Arduino free to do other things like checking the button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (3)
> **Env Vars:** led (8), input_pullup (1), ide (1)
> **Code Identifiers:** pinmode (2), digitalwrite (1), digitalread (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Understand timers](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=0)** - [Instructor] We've seen the problem when the delay function blocks your code from doing anything else.
>
> **[0:05](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=5)** Now we'll see about another way to code without blocking by using a simple timer.
>
> **[0:11](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=11)** A timer is based on the built in function Millis.
>
> **[0:14](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=14)** Millis returns the number of milliseconds since the sketch began.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=19)** Basically you save the value of millis when the timer starts, then you keep going until the required number of additional have passed.
>
> **[0:27](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=27)** When that happens you run your time code.
>
> **[0:31](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=31)** Let's look at the pseudocode describing a timer in our prototype.
>
> **[0:35](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=35)** First of all you save the current millis as the start time.
>
> **[0:38](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=38)** Then in the loop, if the current millis minus start time is greater than the timerLength, then your timer has expired, so you reset the timer, update your animation, and continue on.
>
> **[0:50](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=50)** Now let's look at the code used to implement a timer.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=53)** First we need some variables.
>
> **[0:55](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=55)** One for the timerStart, one for the timer interval, and one for the currentTime.
>
> **[1:00](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=60)** Because the value of millis can get quite large, you should declare the variables as unsigned long, which just means they can only be positive and they can hold the maximum size integer.
>
> **[1:12](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=72)** To set up the timer, you set the two timer variables in the setup function.
>
> **[1:16](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=76)** Timer intervals is the number of millis you want the timer interval to be.
>
> **[1:21](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=81)** timerStart saves the value of millis when the timer begins.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=86)** To check the timer, you can subtract the timer start time from the current time to get how long the timer has been running.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=93)** If that time is greater than the interval, the timer has expired, and it's time to do something.
>
> **[1:37](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=97)** The check would look something like this.
>
> **[1:40](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=100)** currentTime equals millis, then if the currentTime minus the timer start is greater than the interval, do something.
>
> **[1:47](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=107)** Finally to reset the timer and begin the next interval, we need to reset the timer start to the current time.
>
> **[1:53](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=113)** So we've added that to our pseudocode and that's all there is to it.
>
> **[1:57](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=117)** This non blocking timer template works in many applications where you need to accomplish tasks on timed intervals.

> [!info]- Semantic Content
>
> **Code Identifiers:** currenttime (3), timerstart (2), timerlength (1)
> **Prerequisites:** set up (1), setup (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Implement non-blocking interaction](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=0)** - [Instructor] Using a timer is a way to time things in your sketch without holding up or blocking the main loop.
>
> **[0:05](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=5)** This allows an animation to continue, for example, while still being responsive waiting for a button press.
>
> **[0:11](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=11)** Here's a reminder of the basic timer pseudocode.
>
> **[0:14](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=14)** We start the timer by saving the current millis as the start time, and then each time through the loop, we check if the current time minus the start time is greater than the timer length.
>
> **[0:25](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=25)** When our timer has expired, we update the animation and reset the timer.
>
> **[0:29](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=29)** So now let's look at how this would actually be implemented in our prototype.
>
> **[0:35](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=35)** Okay, so we're looking at our previous sketch, RETRO_2.
>
> **[0:40](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=40)** Let's right off the bat save this as RETRO_3.
>
> **[0:47](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=47)** First of all, let's get rid of our delay, because we're going to be replacing that with our timer.
>
> **[0:53](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=53)** So we can do that.
>
> **[0:56](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=56)** And then we need a couple of variables up here to manage our timer, three in particular.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=66)** First of all, we need... A start variable.
>
> **[1:18](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=78)** Then we need... The interval.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=86)** And then we need something for the current time.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=93)** Okay, now we need to initialize a couple of those in setup.
>
> **[1:38](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=98)** We can do that right here.
>
> **[1:44](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=104)** And the first thing we need to do is set timer start equal to millis, which starts the timer off at the current sketch time.
>
> **[1:55](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=115)** And then we need to set up an interval so the timer knows how frequently to run.
>
> **[2:02](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=122)** We've been running our prototype kind of slowly, at 500 milliseconds per loop.
>
> **[2:07](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=127)** Let's speed it up a little bit and use 250 milliseconds.
>
> **[2:11](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=131)** Now the last thing we need to do is put the timer in our loop, and we're going to start right up at the top here.
>
> **[2:18](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=138)** And so we set the current time to the millis now.
>
> **[2:28](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=148)** This is kind of the meat of the timer.
>
> **[2:30](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=150)** We check if the current time minus the timer start is greater than the timer interval.
>
> **[2:45](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=165)** Then we want to do something, and in our case, the thing we want to do is all of this animation code.
>
> **[2:53](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=173)** So only when the timer goes off will it, move it over a little bit, will it update the frame, and then after the code, since we have an if block here, it opens with a bracket, we can come down and put a closing bracket there.
>
> **[3:10](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=190)** So now all we have to do, let's save it, okay, and now we can run it and see how it works.
>
> **[3:19](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=199)** Okay, looks like it's not working, and I know exactly what I did.
>
> **[3:24](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=204)** The thing I forgot to do was, you have to make sure to reset the timer.
>
> **[3:28](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=208)** Otherwise the timer just runs once.
>
> **[3:37](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=217)** Timer start equals the current time.
>
> **[3:43](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=223)** Okay, so let's save that and give it a try.
>
> **[3:49](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=229)** There we go, that works a little better.
>
> **[3:52](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=232)** So now you can see that the animation appears to be moving correctly, it's working a little faster.
>
> **[3:58](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=238)** And it's being pretty responsive to these button presses.
>
> **[4:02](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=242)** So there you go, you've got a non-blocking timer running your animation.

> [!info]- Semantic Content
>
> **Env Vars:** retro_2 (1), retro_3 (1)
> **Prerequisites:** setup (1), set up (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 7. Advanced Interaction

[↑ Back to Table of Contents](#table-of-contents)

#### [Button debouncing](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=0)** - [Instructor] You're probably pretty familiar with how switches work on the [[Arduino]].
>
> **[0:04](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=4)** Depending on the circuit, pushing, pulling, or flipping the switch makes it go high or low.
>
> **[0:09](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=9)** In reality, though, switches usually don't transition cleanly from one state to the other.
>
> **[0:14](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=14)** On both the down and up motion, there can actually be a small bounce before the switch settles on its value.
>
> **[0:22](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=22)** The settling time can be anywhere from a millisecond or less to several hundred milliseconds, depending on your switch.
>
> **[0:29](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=29)** When your sketch loop runs slowly, and you only check your switch once every few hundred milliseconds, switch bouncing may not be much of a problem, but now that our prototype is using non-blocking code, the loop is running very fast, and it may read the switch value multiple times during the transition.
>
> **[0:46](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=46)** This could result in several presses while the switch settles rather than a single one.
>
> **[0:51](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=51)** To deal with this, we can use a technique called debouncing to help ensure the switch is read accurately.
>
> **[0:57](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=57)** The basic idea is that you read the switch multiple times and only record a change when the readings are consistent.
>
> **[1:04](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=64)** There are different approaches, but in the interest of keeping it simple, we'll read the switch only twice, but separated by a delay and only when we sense a change on the first reading.
>
> **[1:14](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=74)** The amount of delay can be altered.
>
> **[1:16](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=76)** The pseudocode for switch debouncing could look something like this.
>
> **[1:21](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=81)** Get a new button state.
>
> **[1:23](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=83)** If the state has changed, delay a while.
>
> **[1:25](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=85)** Check the button again.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=86)** If the state is still the same, then adopt the new state.
>
> **[1:30](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=90)** So let's go to the IDE and see how this would work in our prototype sketch.
>
> **[1:36](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=96)** Okay, we're looking at the sketch where we left off last time.
>
> **[1:40](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=100)** What we'll do first of all, like we always do, is save this with a new name.
>
> **[1:47](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=107)** RETRO_4.
>
> **[1:50](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=110)** Now we're adding debouncing code to this, so as usual, the first thing we need to do is add a couple of variables for this.
>
> **[2:04](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=124)** And the first one we need, these are integers.
>
> **[2:08](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=128)** They don't have to be large integers.
>
> **[2:11](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=131)** So the first one is the current reading, and then we need another variable for the new reading.
>
> **[2:21](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=141)** We need both so that we can compare them and see if anything has changed.
>
> **[2:28](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=148)** In setup... We initialize debouncing by setting the current reading to the current value of the button pin.
>
> **[2:44](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=164)** So that would be digital read on seven.
>
> **[2:50](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=170)** And now we come down to where we're just doing a simple read here.
>
> **[2:55](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=175)** Let's add some debounce.
>
> **[3:01](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=181)** And we start that out by checking the button here.
>
> **[3:07](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=187)** Equals digital read on pin seven.
>
> **[3:13](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=193)** And then we check and see if the new reading has changed from the current reading.
>
> **[3:20](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=200)** So if new reading is not equal to current reading, then we're going to do something, and what we're going to do is we're going to wait for a while, and we're just going to wait for four milliseconds.
>
> **[3:36](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=216)** Then we're going to take a new reading.
>
> **[3:45](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=225)** And we're going to do the same recheck, or the same if statement.
>
> **[3:54](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=234)** We'll see if it's still not equal to the current reading.
>
> **[4:01](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=241)** And if that's true, then we want to set the current reading to the new reading.
>
> **[4:13](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=253)** Okay, so when we come out of this debouncing section, our current reading will be an accurate reading of the button.
>
> **[4:21](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=261)** So we don't need to check the button again here, we just replace this with whatever the current reading is.
>
> **[4:30](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=270)** And if it's low, meaning the button is pressed, then we're going to zap invaders.
>
> **[4:35](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=275)** So we can save this, and then upload it.
>
> **[4:42](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=282)** There we go, we see that the sketch is working.
>
> **[4:45](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=285)** Let's see if we can still zap invaders.
>
> **[4:48](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=288)** Yep.
>
> **[4:50](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=290)** Then you can be able to notice that it's a little more reliable, the button is more reliable.
>
> **[4:57](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=297)** Okay, we've seen an easy way to debounce our button.
>
> **[5:00](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=300)** One thing to keep in mind is that any time you use delay in your sketch, it is blocking.
>
> **[5:05](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=305)** That means if you use this method for debouncing a very noisy switch or button, it could affect the response time of your sketch.
>
> **[5:13](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=313)** If you look at the built-in Arduino example, 02_Digital Debounce, you'll find a sketch that uses a timer to debounce a button without blocking the main loop.
>
> **[5:22](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=322)** The code is more complicated than our approach, but might be useful if your application requires maximum responsiveness.
>
> **[5:29](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=329)** But keep in mind, even with non-blocking debouncing, a noisy button or switch will affect the input responsiveness.
>
> **[5:35](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=335)** If after adding debouncing to your sketch it's still not responsive, you might try a different button.
>
> **[5:44](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=344)** There are many discussions about the best way to debounce buttons on the internet, including modifying the button circuit, but our manta is keep it simple, so we'll stay with our simple solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** ide (1), retro_4 (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Advanced button interaction](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=0)** - [Instructor] If you've been playing around with your prototype, you might have noticed that while the button is responsive, sometimes you zap two invaders with a single button press.
>
> **[0:09](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=9)** In fact, you may have discovered the cheat that you can destroy all the invaders by just holding the button down while the laser moves.
>
> **[0:17](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=17)** Let's take a minute to talk a bit more about buttons.
>
> **[0:20](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=20)** Then we'll see how we can improve the laser situation.
>
> **[0:25](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=25)** Buttons are pretty natural.
>
> **[0:27](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=27)** You press them, and you release them.
>
> **[0:29](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=29)** And in a sketch you can read the value from the connected [[Arduino]] pin to determine if the button is up or down.
>
> **[0:36](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=36)** But sometimes up and down aren't quite enough.
>
> **[0:39](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=39)** You may want to toggle a light on and off but only when the button is pressed.
>
> **[0:44](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=44)** In other words, when the button does from up to down.
>
> **[0:48](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=48)** But you don't want to continue toggling the light while the button is down.
>
> **[0:52](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=52)** That's the situation with our laser.
>
> **[0:55](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=55)** The same may apply to a button release.
>
> **[0:59](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=59)** All of these use something called edge detection.
>
> **[1:02](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=62)** Edge detection just means to detect the transition or edge of a signal.
>
> **[1:07](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=67)** In this case, the voltage on the button pin.
>
> **[1:11](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=71)** So let's look at the pseudocode to fire a laser only on press.
>
> **[1:16](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=76)** First you remember the current button state, low or high.
>
> **[1:20](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=80)** Then you get the new, debounced button state.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=84)** If the previous state is high and the new state is low, then you fire the laser.
>
> **[1:29](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=89)** Now let's go to the IDE to see how it would work in our prototype sketch.
>
> **[1:34](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=94)** Okay, here we are after we left off last time.
>
> **[1:38](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=98)** First thing we do, as usual, is save our sketch with a new version.
>
> **[1:43](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=103)** This time RETRO_5.
>
> **[1:46](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=106)** And the only thing we need to add this time is, we had some button debounce variables, but let's add an edge detection variable.
>
> **[1:58](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=118)** And we can call this previousReading.
>
> **[2:02](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=122)** And we have to make sure we've given it a type.
>
> **[2:09](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=129)** Okay.
>
> **[2:13](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=133)** Now the only thing we need to do is before we debounce the button, we need to save the current button reading so that we can compare it with the button reading after it reads the buttons.
>
> **[2:31](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=151)** So we'll say previousReading equals currentReading.
>
> **[2:39](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=159)** Now it goes through and it debounces the switch.
>
> **[2:42](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=162)** Now here, instead of using just one condition, we can say if previousReading is equal to HIGH
>
> **[2:59](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=179)** and, that's what the double ampersand means, both these conditions have to be true.
>
> **[3:05](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=185)** And the currentReading is LOW, that means the button has gone from up to down, and it's a fire.
>
> **[3:13](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=193)** Then we'll zap the invader.
>
> **[3:17](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=197)** So let's save this and then upload it to our sketch
>
> **[3:26](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=206)** and see how this works.
>
> **[3:28](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=208)** So it looks like all the scanning is working as before.
>
> **[3:32](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=212)** And I can still zap them, but if I hold the button down, you see it only zaps one invader at a time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Code Identifiers:** previousreading (3), currentreading (2)
> **Env Vars:** ide (1), retro_5 (1), high (1), low (1)
> **UI Navigation:** toggle (1), go to (1)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Implement button functions](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=0)** - [Instructor] As you prototype, you'll begin to realize that you're using some of the same code patterns over and over.
>
> **[0:07](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=7)** For example, the debounce code that we created earlier might be useful in any prototype we build that uses buttons.
>
> **[0:14](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=14)** We can easily Copy and Paste this code from one sketch to another, but then we'd have to edit the code to reflect the pin number being debounced and the interval being used in the new sketch.
>
> **[0:25](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=25)** Another way to reuse the debounce code from sketch to sketch is to create a debounce function.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=32)** The function can be copied to different sketches, just like sharing the original code.
>
> **[0:37](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=37)** But we'll see in the finished version that the function won't require any editing to reflect different pin numbers or debounce times.
>
> **[0:44](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=44)** A simple version of the debounce function just uses the exact same code as the sketch, but the code is included in the function definition.
>
> **[0:54](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=54)** A function definition begins with the function header.
>
> **[0:57](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=57)** The header contains the function name.
>
> **[1:00](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=60)** You can choose any name, just like variables, but it's good to use descriptive names.
>
> **[1:06](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=66)** To the left of the name is the type of value this function returns.
>
> **[1:11](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=71)** In our case, debounce returns either high or low to reflect the button values.
>
> **[1:17](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=77)** These are integers, so the type of the function is int, and you can see the last statement in the function returns the value of currentReading.
>
> **[1:27](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=87)** Some functions don't return values.
>
> **[1:30](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=90)** For example, the delay function has no value.
>
> **[1:34](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=94)** Functions without a value use the type void.
>
> **[1:38](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=98)** The main part of the function is called the function body and is surrounded by curly brackets.
>
> **[1:44](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=104)** To use debounce, you can just replace the debounce code, simply assigning the value of the debounce function to the currentReading.
>
> **[1:55](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=115)** Using debounce this way is possible, and it does make our prototype code a little easier to read.
>
> **[2:01](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=121)** But this function depends on variables specific to this sketch, like newReading, and the pin number and debounce interval are also specific to this prototype.
>
> **[2:13](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=133)** Because of that, we'd have to change the function quite a bit to use it in another sketch.
>
> **[2:19](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=139)** Fortunately, by changing some things about this function we can make it more generally useful.
>
> **[2:25](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=145)** The problem with our original function is that it uses specific values and variables that are defined globally in the sketch.
>
> **[2:34](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=154)** To make the function more general, we can add variables in the header.
>
> **[2:38](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=158)** These are called parameters.
>
> **[2:41](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=161)** The parameters all include types, just like the normal variable declarations.
>
> **[2:46](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=166)** But the parameters create variables that are local to the function and don't depend on the [[Representational State Transfer (REST)|rest]] of the sketch.
>
> **[2:53](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=173)** You then substitute the local parameters for the global variables in the function.
>
> **[2:58](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=178)** You can also create a variable inside the function that is local just to the function.
>
> **[3:05](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=185)** To use the debounce function in our sketch, we replace the debounce code with a simple call to the function that contains specific values and variables that are matched to the parameters of the function.
>
> **[3:18](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=198)** You can copy this function to another sketch and use it without any editing to debounce any pin with any debounced interval just by changing parameters.
>
> **[3:29](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=209)** Note that the currentReading variable is used as a parameter and changed to the debounce function's result.
>
> **[3:37](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=217)** When debounce is called, currentReading contains the previous button value.
>
> **[3:43](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=223)** That allows debounce to determine if anything has changed that needs to be debounced.
>
> **[3:49](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=229)** The returned value is the new current button value and will be used the next time debounce is called.
>
> **[3:57](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=237)** That's the general idea.
>
> **[3:59](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=239)** Let's go to the IDE and look at how this works in practice.
>
> **[4:04](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=244)** Okay, so here we are with the sketch the way we left off last time.
>
> **[4:08](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=248)** First thing we're going to do is Save this with a new name.
>
> **[4:13](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=253)** Let's put it up to retro six.
>
> **[4:19](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=259)** Now we're going to create a debounce function.
>
> **[4:22](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=262)** The first thing we should do is come down here and create the header and body of the function.
>
> **[4:27](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=267)** So remember, it's an int, and it's called debounce, and then it had several parameters, the pin number, and the pinState, and finally, the interval.
>
> **[4:48](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=288)** And then the code was going to go between these curly brackets here.
>
> **[4:53](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=293)** Okay.
>
> **[4:54](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=294)** So now, to move the debounce code in there we're just going to Cut it from the main sketch and put it in the function.
>
> **[5:06](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=306)** That looks good.
>
> **[5:09](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=309)** We're going to replace these parameters where they should go in the code here.
>
> **[5:15](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=315)** The pin represents number seven here, so pin seven in the original sketch.
>
> **[5:24](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=324)** We'll do that.
>
> **[5:24](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=324)** Four is the interval and pinState is what we're calling currentReading in the code here.
>
> **[5:32](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=332)** I'll change those to pinState.
>
> **[5:37](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=337)** We're going to use Copy and Paste.
>
> **[5:45](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=345)** And then we have this newReading which is left over from the code, but it refers to a global variable, so we're going to create a new local one called newValue so all of the newReadings get replaced with newValue.
>
> **[6:07](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=367)** There we go!
>
> **[6:10](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=370)** The function uses these parameters to input to the code here, and it uses newValue as a local variable.
>
> **[6:18](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=378)** So now, to go up and put debouncing back in our sketch, we end up with currentReading after this bit of code, so we have to say currentReading equals debounce on pin number seven using the previous currentReading as the reference, and then using four as the debounce interval.
>
> **[6:49](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=409)** So that's it for the changes to this sketch.
>
> **[6:52](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=412)** Let's Save it and then upload it, and see if it works.
>
> **[7:03](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=423)** It looks like everything works like it did before except nothing is happening.
>
> **[7:15](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=435)** I know exactly what the problem is.
>
> **[7:17](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=437)** One of the things you have to make sure to do in a function is if it has a value you have to return that value.
>
> **[7:25](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=445)** In our case, we have to return pinState, and that should help.
>
> **[7:35](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=455)** See if this works any better.
>
> **[7:41](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=461)** It does not.
>
> **[7:43](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=463)** So the next problem is that one of the newReadings did not get replaced with newValue.
>
> **[7:53](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=473)** Let's see if that works.
>
> **[7:59](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=479)** That was it.
>
> **[8:02](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=482)** So there you go!
>
> **[8:03](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=483)** Now you have a reusable debounce function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** currentreading (8), pinstate (4), newvalue (4), newreading (2), newreadings (2)
> **Analogies:** just like (3), for example (2)
> **CLI Commands:** make (4)
> **Definitions:** is called (3), refers to (1)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)

#### [Challenge: Game intro](https://www.linkedin.com/learning/arduino-prototyping/challenge-game-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/challenge-game-intro?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/challenge-game-intro?u=76281980&t=6)** - [Instructor] How players start a game can be as important as how the game ends.
>
> **[0:11](https://www.linkedin.com/learning/arduino-prototyping/challenge-game-intro?u=76281980&t=11)** In this challenge, the goal is to display a message, for example, "Zap invaders" on the first line and "Press button" on the second line.
>
> **[0:20](https://www.linkedin.com/learning/arduino-prototyping/challenge-game-intro?u=76281980&t=20)** Once the message is displayed, the sketch should wait for a button press before continuing with the game.
>
> **[0:26](https://www.linkedin.com/learning/arduino-prototyping/challenge-game-intro?u=76281980&t=26)** Now see if you can solve this challenge on your own.
>
> **[0:29](https://www.linkedin.com/learning/arduino-prototyping/challenge-game-intro?u=76281980&t=29)** In the next video, I'll show you how I did it.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Game intro](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=0)** - [Instructor] Here's my solution to the challenge.
>
> **[0:09](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=9)** Remember, the goal for this challenge is to display a welcome message and wait for a button press before continuing.
>
> **[0:16](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=16)** The pseudocode for this is straightforward.
>
> **[0:19](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=19)** To wait, you can use a while loop to check to see if the button is pressed.
>
> **[0:24](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=24)** To make the while condition, we can use the currentReading variable, which is either high or low depending on whether the button is pressed or not.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=32)** The while loop updates currentReading using the debounce function.
>
> **[0:36](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=36)** Now let's go to the Desktop to see how this works in practice.
>
> **[0:42](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=42)** Here we are in the IDE.
>
> **[0:44](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=44)** And I've loaded Retro 6, which is our starting point.
>
> **[0:49](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=49)** And the first thing I'm going to do is save a new copy.
>
> **[0:54](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=54)** Call it RETRO_6_Challenge.
>
> **[1:03](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=63)** Now we want to add our startup screen in the setup function.
>
> **[1:07](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=67)** So we can do that here.
>
> **[1:09](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=69)** So we can say display introduction.
>
> **[1:17](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=77)** And I'll start out by clearing the screen.
>
> **[1:22](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=82)** Then I'll print the first line.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=93)** Zap Invaders.
>
> **[1:35](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=95)** And then I'll set the cursor to the second line.
>
> **[1:44](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=104)** And print the second line of the message.
>
> **[1:55](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=115)** And then I need to wait for the button press.
>
> **[2:04](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=124)** And to do that, I have the while loop while the currentReading is not equal LOW.
>
> **[2:18](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=138)** And then in the loop, the while loop, I want to update the currentReading.
>
> **[2:22](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=142)** So say currentReading equals debounce.
>
> **[2:30](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=150)** And our button pin is seven.
>
> **[2:36](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=156)** Use currentReading as our reference.
>
> **[2:38](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=158)** The debounce of four.
>
> **[2:41](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=161)** Okay, so this in general should work.
>
> **[2:44](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=164)** But there's one problem that this creates.
>
> **[2:47](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=167)** You'll notice up here, we print the Invaders, which stay at the top of the screen.
>
> **[2:53](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=173)** But below that is where we're actually printing the introduction screen.
>
> **[2:59](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=179)** And so that introductory screen will erase the Invaders.
>
> **[3:03](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=183)** So what we need to do is move this from here down here.
>
> **[3:14](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=194)** Just copy and paste that or cut and paste that and then here, instead of setting the cursor, we want to use clear to clear the display after the introductory message.
>
> **[3:26](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=206)** Okay, so that's it.
>
> **[3:28](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=208)** I'm going to run this and let's see what happens.
>
> **[3:35](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=215)** Okay, you can see that the startup message is here on the screen.
>
> **[3:40](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=220)** When I press the button, the game begins.
>
> **[3:44](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=224)** So that's it for my solution.
>
> **[3:46](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=226)** This type of startup screen helps give control to the game player and it's good for setting context and explaining game rules.
>
> **[3:53](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=233)** We've used a single screen, but you could easily add multiple screens if you wanted.

> [!info]- Semantic Content
>
> **Code Identifiers:** currentreading (6)
> **Env Vars:** ide (1), low (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 8. Iterating your Prototype

[↑ Back to Table of Contents](#table-of-contents)

#### [Use symbolic parameters](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=0)** - [Presenter] With a prototype, you often want to explore multiple designs for things like screen layout, animation frame rate, colors, and so on.
>
> **[0:10](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=10)** One way to do this is to create different versions of the firmware for each design.
>
> **[0:14](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=14)** It's important to save versions as you progress, but one drawback to this approach is that it can be easy to have lots of versions around without remembering which version is which.
>
> **[0:26](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=26)** Another approach is to create settings for everything you want to explore, and make the settings easy to change.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=32)** Then, to use a specific version, you just adjust the settings and upload the sketch to your prototype.
>
> **[0:38](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=38)** To create a setting, first identify something that you or a designer might want to change.
>
> **[0:43](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=43)** Let's say that in our prototype, you want to be able to change the character used for the laser in the display.
>
> **[0:50](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=50)** Next, turn the value into a variable by giving it a name, for example, "laser symbol" might be a good choice for us.
>
> **[0:58](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=58)** So we replace the current character in our sketch with the setting name "laser symbol".
>
> **[1:03](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=63)** Next, we declare laser symbol at the top of our sketch and give it a value.
>
> **[1:07](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=67)** Normally we would declare laser symbol and set it to the caret character.
>
> **[1:12](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=72)** Finally, we replace all of the caret characters with the setting name, "laser symbol".
>
> **[1:18](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=78)** Unlike normal variables, you don't expect to change settings in your sketch.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=84)** They are set once at the beginning and that's it.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=86)** One way to tell [[Arduino]] that a variable isn't going to change is to use the "const" keyword, which stands for constant.
>
> **[1:34](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=94)** If you add that at the beginning of your definition, Arduino knows the value is set and won't be changed.
>
> **[1:40](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=100)** This makes laser symbol a constant.
>
> **[1:42](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=102)** Constants are just like variables, but they aren't variable.
>
> **[1:46](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=106)** You set a constant to a value when it's declared and you can't change it.
>
> **[1:51](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=111)** Using a constant has a couple of advantages.
>
> **[1:54](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=114)** First, if you're using the constant in several places and you want to change the value, you don't have to go through your sketch changing it at each location, you just change the value in one place.
>
> **[2:04](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=124)** The other advantage to constants is that they don't take any memory from your sketch.
>
> **[2:08](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=128)** Each variable uses some dynamic memory, which is limited.
>
> **[2:12](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=132)** Using constants when you can leaves more room for variables.
>
> **[2:16](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=136)** Okay, let's go to the IDE and see how constants work in our sketch.
>
> **[2:22](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=142)** So here we are, back in our sketch where we left off, and as usual we will save this with a new version.
>
> **[2:30](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=150)** Retro seven.
>
> **[2:33](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=153)** And now all we're going to do is add a constant for the laser character.
>
> **[2:38](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=158)** We have to scroll down here and figure out where the laser character is.
>
> **[2:43](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=163)** The sketch is getting kind of long now.
>
> **[2:46](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=166)** There it is, it's right here.
>
> **[2:49](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=169)** So all we're going to do is replace this with the symbol that we came up with, "laser symbol".
>
> **[2:59](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=179)** And then we go back up to the top of our sketch and declare that, let's do it right at the top.
>
> **[3:07](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=187)** So we just declare it as a const, and it's a character, use "laser symbol".
>
> **[3:16](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=196)** I often use all upper case for identifying these constants just to make them stand out.
>
> **[3:22](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=202)** You don't have to, but just a habit.
>
> **[3:24](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=204)** And then we set a value to the caret.
>
> **[3:30](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=210)** End it just like we would normally.
>
> **[3:32](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=212)** And I'll put a comment in here, "sketch settings", 'cause we might have other settings.
>
> **[3:39](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=219)** Save it.
>
> **[3:41](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=221)** And upload it to our prototype, see if it works.
>
> **[3:48](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=228)** And there you can see, it works just like it did before.
>
> **[3:52](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=232)** But now, let's say that we want to change our symbol to an exclamation point.
>
> **[3:57](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=237)** It's as easy as updating it right there at the beginning of your sketch, you can upload the sketch again, and instantly you can see what the effect is.
>
> **[4:10](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=250)** In addition to the laser symbol, there are numerous other settings that might be useful for our prototype, including button pin, debounce time, certainly include the laser character, the laser row, whether it's on the top or bottom, the invader character, and the invader row.
>
> **[4:26](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=266)** Exploring design variations is an important role of a prototype.
>
> **[4:29](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=269)** Using settings is a powerful tool to make that exploration easy and nimble.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Analogies:** just like (3), for example (1)
> **CLI Commands:** make (3)
> **Definitions:** stands for (1), is an  (1), is a  (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Env Vars:** ide (1)
> **Speakers:** - [presenter] (1)

#### [Document prototypes](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=0)** - [Instructor] When you're [[Prototyping]], design, problem solving, and coding can move quickly and this is good.
>
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=6)** It means you're engaged with the design process and iterating, but when you're in this flow it's tempting to skip documentation.
>
> **[0:13](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=13)** When you're in the middle of a project, it can be hard to imagine you'd ever forget anything about your prototype and even a few seconds to add a comment can feel like it breaks the flow.
>
> **[0:23](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=23)** But it turns out that even after only a day or two it can be difficult to remember different versions and even what the current version does.
>
> **[0:30](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=30)** Fortunately, there's strategies you can use to help you remember.
>
> **[0:35](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=35)** One place to start is to write clear code when you're [[Sketching]].
>
> **[0:39](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=39)** For example, use the name LASER_SYMBOL for your setting rather than a single letter, L.
>
> **[0:45](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=45)** Another important documentation practice is to use comments throughout your sketch.
>
> **[0:51](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=51)** The most common comments are single line or end line comments that begin with double slashes.
>
> **[0:57](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=57)** Another type of comment is the block comment that begins with a slash asterisk and ends with the opposite, asterisk slash.
>
> **[1:07](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=67)** Comments at the beginning of your sketch can help identify the purpose of a sketch, the date it was first updated, the author, copyright, or anything else that's relevant.
>
> **[1:18](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=78)** As you iterate through numerous designs and sketches, it's very useful to keep track of different sketch versions so you can track the path of your current design.
>
> **[1:26](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=86)** Also, it can help keep the team from going in circles by documenting ideas you've already explored.
>
> **[1:31](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=91)** Revision history often goes at the top of the sketch as part of the sketch header.
>
> **[1:35](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=95)** Each revision record can contain the date and the version number of the revision, along with a brief description of what was in or changed about that version.
>
> **[1:43](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=103)** These are often ordered with the newest revision first, followed by previous revision history, and on to the beginning of the sketch.
>
> **[1:52](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=112)** It's a good idea to save versions of your sketch as it evolves.
>
> **[1:55](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=115)** Versions can help you keep track of progress and can be useful if you reach a dead end on your prototype and you want to go back to a previous version and begin there in a new direction.
>
> **[2:05](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=125)** There are numerous ways to name versions, but I usually just use sequential numbers following the main sketch name.
>
> **[2:10](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=130)** Combined with settings, versions are a powerful way to track and explore options.
>
> **[2:16](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=136)** In addition to documenting your code, make sure to keep the Pin map up to date if you add, delete, or rearrange [[Hardware]] connections.
>
> **[2:25](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=145)** And of course, update your schematic.
>
> **[2:30](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=150)** And finally, it can be very useful to create a bill of materials, or BOM, which lists the components you're using in a prototype along with links to sources and data sheets, cost and so on.
>
> **[2:43](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=163)** In being nimble, you won't necessarily follow all of these all of the time.
>
> **[2:47](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=167)** You may skip comments as you're developing a section of code, but then make sure you add comments before you complete your version.
>
> **[2:54](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=174)** Keeping prototype documentation up to date for each version will save you and others time and effort as the prototype evolves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (1), [[Sketching]] (1), [[Hardware]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** laser_symbol (1), bom (1)
> **Analogies:** imagine (1), for example (1)
> **Cross-References:** go back to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Complete the experience](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=6)** - [Instructor] You've created a prototype that satisfies the original goal, to prove the gameplay concept of invaders from space being zapped by a moving laser.
>
> **[0:15](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=15)** Communication with stakeholders has been great, and everyone is pleased with your prototype's progress.
>
> **[0:21](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=21)** But in response to observations and input they've received, the team wants to create a complete prototype for user testing and to change gameplay slightly to make it more challenging.
>
> **[0:32](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=32)** So here's the challenge.
>
> **[0:34](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=34)** First, you've been asked to add the intro and completion screens into the main prototype.
>
> **[0:40](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=40)** And they'd also like you to put in the back and forth laser.
>
> **[0:44](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=44)** Second, the team would like you to modify gameplay as follows.
>
> **[0:48](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=48)** Instead of removing an invader when it's zapped, deactivate it, and change its character from an asterisk to a plus sign.
>
> **[0:56](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=56)** If you shoot a deactivated invader, it gains energy from your laser and reactivates and returns to an asterisk.
>
> **[1:04](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=64)** The game ends when all invaders are deactivated.
>
> **[1:08](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=68)** That's it.
>
> **[1:09](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=69)** Have fun working on this challenge to complete your prototype.
>
> **[1:12](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=72)** In the next video, I'll show you my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Complete the experience](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=0)** - [Instructor] Here's my solution to the challenge.
>
> **[0:09](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=9)** To recap the goals are, first to add the intro and completion screens to the main prototype and have the laser bounce back and forth.
>
> **[0:18](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=18)** Second, to revise gameplay to deactivate rather than erase zapped invaders.
>
> **[0:24](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=24)** Then, reactivate zapped invaders if you shoot them again by accident.
>
> **[0:29](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=29)** The intro and completion screens and the laser motion can be copied from previous challenges but the changes to the gameplay are new.
>
> **[0:37](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=37)** The pseudocode for the new gameplay is, when the laser's fired if an invader is there deactivate it and reduce the invader account.
>
> **[0:47](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=47)** Otherwise, if a deactivated invader is there reactivate the invader and increase the invader count.
>
> **[0:55](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=55)** Now let's go to the desktop and I'll show you how I modified the prototype sketch.
>
> **[1:00](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=60)** Here, you can see I've loaded where in the IDE and I've loaded retro seven and I've already put in the changes for the start screen and the completion screen and the back and forth laser.
>
> **[1:14](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=74)** You can see the number of invaders variable here for tracking the number of invaders and set tend to begin with.
>
> **[1:24](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=84)** We've got the intro screen, waiting for a button press then down here we've got our completion screen and here is the back and forth laser code
>
> **[1:44](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=104)** from the previous challenge.
>
> **[1:47](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=107)** So the new thing we need to add though, is the gameplay.
>
> **[1:51](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=111)** And that occurs right here, we've checked the button and decided that it's been pressed because it's gone from high to low.
>
> **[2:00](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=120)** So I'm just going to change the comment.
>
> **[2:02](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=122)** If an invader was hit, deactivate it.
>
> **[2:13](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=133)** And we check if the invader at the laser column is an asterisk, then we set the cursor to the laser column.
>
> **[2:22](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=142)** And instead of printing a space there, we want to print a plus sign and reduce the number of invaders.
>
> **[2:30](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=150)** And then instead of setting the invader string to a blank, I want to set that to a plus sign to indicate that that's an inactive or deactivated invader.
>
> **[2:44](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=164)** Now, when we shoot a deactivated invader, we want to reactivate it.
>
> **[2:49](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=169)** So we have to put encode for that.
>
> **[2:51](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=171)** And we do that by just adding another condition here and we can say else, and then I can just copy this code
>
> **[3:05](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=185)** from there and then I'll paste it in here cause it's almost identical.
>
> **[3:14](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=194)** And so else if the invaders at the laser column are deactivated or a plus sign, then you want to turn it back into an asterisk.
>
> **[3:28](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=208)** And instead of reducing the invader count, you increase the invader count cause they're back in action.
>
> **[3:35](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=215)** And then here you want to make sure that you record the current state of the invader by putting the asterisks there.
>
> **[3:43](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=223)** So, put a space in here just to make it a little more readable.
>
> **[3:48](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=228)** So let's say, let's upload this and see how it works.
>
> **[3:56](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=236)** So now you can see we've got our header screen, press the button, the lasers bouncing back and forth.
>
> **[4:03](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=243)** So let's see okay, we've deactivated a laser or a invader.
>
> **[4:08](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=248)** Oop, activated one.
>
> **[4:11](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=251)** So let's see if I can get them all.
>
> **[4:15](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=255)** Nope, this is a little more complicated.
>
> **[4:26](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=266)** If I can be fast enough, there we go.
>
> **[4:29](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=269)** All invaders zapped.
>
> **[4:31](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=271)** So that's it.
>
> **[4:32](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=272)** There are many more features you could add to this prototype of course, but for now the prototype has a complete experience for user testing and everybody on the team is excited to move forward.
>
> **[4:43](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=283)** Congratulations.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** ide (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Final thoughts](https://www.linkedin.com/learning/arduino-prototyping/final-thoughts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/final-thoughts?u=76281980&t=0)** - Thank you for spending time with me in this course.
>
> **[0:03](https://www.linkedin.com/learning/arduino-prototyping/final-thoughts?u=76281980&t=3)** I hope you've enjoyed your journey through the world of nimble design and [[Prototyping]] with an [[Arduino]].
>
> **[0:08](https://www.linkedin.com/learning/arduino-prototyping/final-thoughts?u=76281980&t=8)** For me, creating the course relied on the very thing it teaches, being nimble, prototyping, and the tension and joy that process brings.
>
> **[0:17](https://www.linkedin.com/learning/arduino-prototyping/final-thoughts?u=76281980&t=17)** You can learn more about design, prototyping, and the Arduino through the wealth of content here on [[LinkedIn]] Learning, and feel free to connect with me on LinkedIn.
>
> **[0:26](https://www.linkedin.com/learning/arduino-prototyping/final-thoughts?u=76281980&t=26)** I'd love to hear your story and how you're getting along with your new-found knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prototyping]] (3), [[Arduino]] (2), [[LinkedIn]] (2)
> **Speakers:** - thank (1)


## Instructor

- [[Robert Gallup]]

## Resources

- Exercise files available

## Skills Covered

- Arduino

## Path Context

### In [[Become an Arduino Developer]]
← [[C Programming for Embedded Applications]] | **10 of 11** | [[Learning Soldering for Electronics]] →

## Appears In

- [[Become an Arduino Developer]]

## Related Courses

_Courses sharing skills:_

- [[Learning Arduino- Pulse Width Modulation]] — Arduino
- [[Learning Arduino- Interfacing with Analog Devices]] — Arduino
- [[Learning Arduino- Interfacing with Hardware]] — Arduino
- [[Learning Arduino Foundations]] — Arduino

---

[↑ Back to top](#)