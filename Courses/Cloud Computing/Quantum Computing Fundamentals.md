---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: quantum-computing-fundamentals
url: "https://www.linkedin.com/learning/quantum-computing-fundamentals"
duration_minutes: 254
duration: 4h 14m
level: Advanced
updated: 4/17/2023
learners: 25098
skills:
  - Quantum Computing
exercise_files: true
github: "https://github.com/LinkedInLearning/quantum-computing-fundamentals-2833097/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQElNwQBZI4xRA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1681414584066?e=2147483647&amp;v=beta&amp;t=24ajx4QVPPYjuCWAWOxhsjHy212f_YGwXqEgxtpALzo"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Understanding Quantum Computing]]'
prev_courses:
  - '[[Introduction To Quantum Computing]]'
next_courses:
  - '[[Cloud Quantum Computing Essentials]]'
path_nav: '[{"path":"Understanding Quantum Computing","position":2,"total":3,"prev":"Introduction To Quantum Computing","next":"Cloud Quantum Computing Essentials"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - skill/quantum-computing
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Quantum%20Computing%20Fundamentals.md)

![Quantum Computing Fundamentals](https://media.licdn.com/dms/image/v2/D560DAQElNwQBZI4xRA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1681414584066?e=2147483647&amp;v=beta&amp;t=24ajx4QVPPYjuCWAWOxhsjHy212f_YGwXqEgxtpALzo)

# Quantum Computing Fundamentals

> Suggested prerequisites Although not required, it will help if you already have a basic understanding of linear algebra and Python programming before beginning this course. Projects Create a new quantum circuit with one qubit and one classical bit, simulate a measurement on that circuit, and display results. Create a quantum circuit with four qubits and set their states to represent a specific bin

> [LinkedIn Learning](https://www.linkedin.com/learning/quantum-computing-fundamentals) | 4h 14m | Advanced | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Learn quantum computing](#learn-quantum-computing)
  - [What you should know](#what-you-should-know)
  - [Qiskit and GitHub Codespaces](#qiskit-and-github-codespaces)
  - [Why quantum computing?](#why-quantum-computing)
- [**1. Quantum Bits**](#1-quantum-bits) (12 videos)
  - [Classical bits vs. quantum bits](#classical-bits-vs-quantum-bits)
  - [Measuring a qubit](#measuring-a-qubit)
  - [Measure a qubit with Qiskit](#measure-a-qubit-with-qiskit)
  - [Overview of vectors](#overview-of-vectors)
  - [Overview of complex numbers](#overview-of-complex-numbers)
  - [Represent qubits as vectors](#represent-qubits-as-vectors)
  - [Represent qubits on the Bloch sphere](#represent-qubits-on-the-bloch-sphere)
  - [State vectors and Bloch spheres with Qiskit](#state-vectors-and-bloch-spheres-with-qiskit)
  - [Build a model Bloch sphere](#build-a-model-bloch-sphere)
  - [Global and relative phase](#global-and-relative-phase)
  - [Challenge: Create a quantum circuit](#challenge-create-a-quantum-circuit)
  - [Solution: Create a quantum circuit](#solution-create-a-quantum-circuit)
- [**2. Multiple Quantum Bits**](#2-multiple-quantum-bits) (3 videos)
  - [Represent multiple qubits](#represent-multiple-qubits)
  - [Represent multiple qubits with Qiskit](#represent-multiple-qubits-with-qiskit)
  - [How much information is in a qubit?](#how-much-information-is-in-a-qubit)
- [**3. Single-Qubit Pauli Gates**](#3-single-qubit-pauli-gates) (10 videos)
  - [Overview of matrix operations](#overview-of-matrix-operations)
  - [Quantum logic gates](#quantum-logic-gates)
  - [Pauli-X gate](#pauli-x-gate)
  - [Pauli-X gate with Qiskit](#pauli-x-gate-with-qiskit)
  - [Pauli-Y gate](#pauli-y-gate)
  - [Pauli-Y gate with Qiskit](#pauli-y-gate-with-qiskit)
  - [Pauli-Z gate](#pauli-z-gate)
  - [Pauli-Z gate with Qiskit](#pauli-z-gate-with-qiskit)
  - [Challenge: Binary numbers](#challenge-binary-numbers)
  - [Solution: Binary numbers](#solution-binary-numbers)
- [**4. Single-Qubit Superposition Gates**](#4-single-qubit-superposition-gates) (10 videos)
  - [Hadamard gate](#hadamard-gate)
  - [Hadamard gate with Qiskit](#hadamard-gate-with-qiskit)
  - [Measurement on an arbitrary basis](#measurement-on-an-arbitrary-basis)
  - [Phase shift gates](#phase-shift-gates)
  - [Phase shift gates with Qiskit](#phase-shift-gates-with-qiskit)
  - [Parameterized rotation gates](#parameterized-rotation-gates)
  - [Parameterized rotation gates with Qiskit](#parameterized-rotation-gates-with-qiskit)
  - [Single-qubit gates on multi-qubit states](#single-qubit-gates-on-multi-qubit-states)
  - [Challenge: Random numbers](#challenge-random-numbers)
  - [Solution: Random numbers](#solution-random-numbers)
- [**5. Multi-Qubit Gates**](#5-multi-qubit-gates) (8 videos)
  - [Controlled-NOT (CNOT) gate](#controlled-not-cnot-gate)
  - [Controlled-NOT (CNOT) gate with Qiskit](#controlled-not-cnot-gate-with-qiskit)
  - [Toffoli gate](#toffoli-gate)
  - [Toffoli gate with Qiskit](#toffoli-gate-with-qiskit)
  - [Swap and Fredkin gates](#swap-and-fredkin-gates)
  - [Swap and Fredkin gates with Qiskit](#swap-and-fredkin-gates-with-qiskit)
  - [Challenge: Classical two-bit adder](#challenge-classical-two-bit-adder)
  - [Solution: Classical two-bit adder](#solution-classical-two-bit-adder)
- [**6. Quantum Entanglement**](#6-quantum-entanglement) (5 videos)
  - [What is quantum entanglement?](#what-is-quantum-entanglement)
  - [Represent entangled qubits](#represent-entangled-qubits)
  - [Simulate a bell state with Qiskit](#simulate-a-bell-state-with-qiskit)
  - [Challenge: Entangle three qubits](#challenge-entangle-three-qubits)
  - [Solution: Entangle three qubits](#solution-entangle-three-qubits)
- [**7. Real Quantum Hardware**](#7-real-quantum-hardware) (3 videos)
  - [Access IBM quantum computers](#access-ibm-quantum-computers)
  - [Use Qiskit with real quantum hardware](#use-qiskit-with-real-quantum-hardware)
  - [Mitigate quantum measurement errors](#mitigate-quantum-measurement-errors)
- [**8. Quantum Algorithms**](#8-quantum-algorithms) (6 videos)
  - [Superdense coding](#superdense-coding)
  - [Superdense coding with Qiskit](#superdense-coding-with-qiskit)
  - [Quantum teleportation](#quantum-teleportation)
  - [Quantum teleportation with Qiskit](#quantum-teleportation-with-qiskit)
  - [Challenge: Real quantum teleportation](#challenge-real-quantum-teleportation)
  - [Solution: Real quantum teleportation](#solution-real-quantum-teleportation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your next quantum steps](#your-next-quantum-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn quantum computing](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=1)** (keyboard clicks)
>
> **[0:02](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=2)** - This optimization algorithm is taking forever.
>
> **[0:06](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=6)** - You know what might solve that faster?
>
> **[0:09](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=9)** - What?
>
> **[0:09](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=9)** - A quantum computer.
>
> **[0:11](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=11)** - A quantum computer? How do you actually program one of those? That sounds fancy and complicated.
>
> **[0:17](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=17)** - It's not, even you can do it. Hi, I'm Olivia Stone.
>
> **[0:22](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=22)** - And I'm Barron Stone. In this course, we'll introduce you to the fundamental concepts of quantum programming. You may have read about quantum computers in the news, and how they promised to solve some major computational challenges that the regular computers we use every day simply can't handle.
>
> **[0:37](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=37)** - Quantum computers have the potential to do exactly that because they work in a fundamentally different way, using the unique properties of quantum mechanics. This course will explore the abstract models we use to describe quantum computation, giving you the building blocks you need to write your own quantum programs.
>
> **[0:54](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=54)** - We'll also dive into a couple of quantum [[Algorithms]], and by the end of this course, you'll be able to write and run those algorithms on real quantum [[Hardware]].
>
> **[1:03](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=63)** - Let's go to.
>
> **[1:05](https://www.linkedin.com/learning/quantum-computing-fundamentals/learn-quantum-computing?u=76281980&t=65)** - The quantum realm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Hardware]] (1)
> **Speakers:** - a (2), - this (1), - you (1), - what (1), - it (1)
> **UI Navigation:** go to (1)

#### [What you should know](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=0)** - We created this course for curious beginners to make [[Quantum Computing]] accessible to anyone with the willingness to learn so you don't need any background in quantum mechanics to begin.
>
> **[0:10](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=10)** - Throughout this course, we'll be using labeled beach balls like this one to represent quantum states and demonstrate the various quantum computing operations. We recommend creating your own version to follow along with us because having something in your hands to manipulate can make these quantum concepts more intuitive. You could use a beach ball.
>
> **[0:27](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=27)** - Maybe a basketball.
>
> **[0:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=29)** - Or even a round piece of fruit. Find a couple of round objects you can write on and we'll show you how to label them later.
>
> **[0:36](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=36)** - In addition to using quantum beach balls to help visualize the concepts, we'll also look at the math that's used to describe the quantum computation.
>
> **[0:44](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=44)** - We'll be using some basic [[Linear Algebra]], so if you already know how to work with complex numbers and how to multiply vectors and matrices, you'll be ready to tackle the math in this course.
>
> **[0:53](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=53)** - If you don't have the math background, fear not. We've included a few brief lessons to bring you up to speed as needed.
>
> **[1:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=60)** - To demonstrate concepts in action, we'll be writing quantum programs using a [[Python (Programming Language)|Python]] based framework called Qiskit.
>
> **[1:07](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=67)** - Having some prior experience using Python will be helpful but definitely not required. The code we'll be writing is simple and straightforward so even if you don't know Python you should still be able to follow along and understand the quantum [[Programming Concepts]] by mimicking Python commands we show you.
>
> **[1:24](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=84)** - Now, this course is intended for beginners but that does not mean it's easy. These quantum concepts can be tough to grasp and it takes determination to learn them. If you find yourself getting mentally stuck on a lesson, press pause, step away for a bit and come back later with a fresh set of eyes
>
> **[1:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=102)** - Everyone learns differently. So we've tried to teach each topic in multiple ways using a combination of analogies, mathematics and programming examples. Focus on what helps you learn best.
>
> **[1:53](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=113)** - If you're not a fan of math, don't stress over those parts.
>
> **[1:57](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=117)** - Also, don't feel like you need to fully understand every detail of every lesson before continuing on.
>
> **[2:03](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=123)** - During the first few chapters of this course, it may seem like we're just talking about a bunch of random topics.
>
> **[2:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=128)** - We promise they're relevant.
>
> **[2:10](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=130)** - There's a lot of foundational information we need to cover upfront to lay groundwork for later lessons. To give you an idea of where all of this is heading, here's a high level roadmap of the course. Chapters one and two will begin by explaining how we represent and interpret quantum information.
>
> **[2:26](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=146)** - Chapters three and four then cover 11 different operations we can use to manipulate individual units of quantum information or quantum bits.
>
> **[2:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=155)** - Chapter five looks at four more operations that apply to multiple quantum bits, and then chapter six puts those operations together to create entanglement, which is an essential element of quantum computing.
>
> **[2:47](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=167)** - Chapter seven will demonstrate how to run a quantum program on real quantum [[Hardware]] through the IBM Quantum cloud.
>
> **[2:53](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=173)** - Then finally, chapter eight ties all of that together by diving into a couple of quantum [[Algorithms]] and running them on a real quantum computer. As you can see, we've packed a lot into this course.
>
> **[3:05](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-you-should-know?u=76281980&t=185)** - We hope you find it insightful, enjoyable and stick with us to the end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Quantum Computing]] (3), [[Linear Algebra]] (1), [[Programming Concepts]] (1), [[Hardware]] (1)
> **Speakers:** - we (4), - if (2), - chapter (2), - throughout (1), - maybe (1)
> **CLI Commands:** python (4), find (3), make (2)
> **Env Vars:** ibm (1)
> **Definitions:** is an  (1)

#### [Qiskit and GitHub Codespaces](https://www.linkedin.com/learning/quantum-computing-fundamentals/qiskit-and-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/qiskit-and-github-codespaces?u=76281980&t=0)** - [[Quantum Computing]] is still a fairly young field and there's not a single standard architecture for how quantum computers should be designed and built. There are lots of companies developing quantum computers today, such as D-Wave, Rigetti, IonQ, and many more and they all take slightly different approaches to building their systems. Instead of latching onto a single vendor, we designed this course to teach the foundational concepts of quantum programming that should be applicable across the diverse landscape of quantum computers.
>
> **[0:28](https://www.linkedin.com/learning/quantum-computing-fundamentals/qiskit-and-github-codespaces?u=76281980&t=28)** - That said, to show you concrete examples of these concepts implemented with actual code we had to select a programming environment to use. We'll be writing our quantum programs throughout this course using QISkit which is an open source [[Software Development]] framework for quantum computing developed by IBM's research division. Its name originally stood for Quantum Information Science Kit. We chose to use QISkit for this course because it's simple to use and includes several visualization tools to help us learn. Coding QISkit is written using the [[Python (Programming Language)|Python]] programming language as an interface to represent the quantum operations in your program. That Python code then gets translated and optimized into quantum instructions which you can run using a simulator on your own computer or send it to the cloud to run on IBM's real quantum [[Hardware]]. For this course, we'll write our QISkit programs using Jupyter Notebooks and Visual Studio Code running within the [[GitHub]] [[Codespaces]] environment.
>
> **[1:23](https://www.linkedin.com/learning/quantum-computing-fundamentals/qiskit-and-github-codespaces?u=76281980&t=83)** - We recommend that you use Codespaces to follow along so you'll be working from the same environment as us. You can launch your own Codespaces environment by going to the GitHub page for this course, clicking on the green code button and then select create Codespace on main from the dropdown. It may take a minute or so for the Codespace environment to spin up and then you should see a visual studio code window like this. Within the SRC directory on the left, you'll find folders with the code examples shown throughout this course with the beginning and end states of the code at the start and end of each video. We've configured this Codespace to include all of the necessary dependencies, and you can find a list of the Python packages that are installed in the file requirements.txt.
>
> **[2:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/qiskit-and-github-codespaces?u=76281980&t=128)** - If you find yourself struggling with the Jupyter Notebook interface, we recommend the [[LinkedIn]] learning course introducing Jupyter for more information.
>
> **[2:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/qiskit-and-github-codespaces?u=76281980&t=135)** - Similarly, if you want to learn more about Python code, there are lots of other LinkedIn learning courses on that topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Codespaces]] (3), [[Quantum Computing]] (2), [[GitHub]] (2), [[LinkedIn]] (2)
> **CLI Commands:** python (4), find (3)
> **Tools:** jupyter (3), visual studio (2), github (2)
> **Speakers:** - quantum (1), - that (1), - we (1), - if (1), - similarly (1)
> **Env Vars:** ibm (2), src (1)
> **File Paths:** requirements.txt (1)
> **UI Navigation:** dropdown (1)
> **Definitions:** is an  (1)

#### [Why quantum computing?](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=0)** - Before we dive headfirst into writing quantum programs, let's first consider what quantum computers are and why they're uniquely useful. The regular computers you use every day, like your laptop or smartphone, are what we'll call classical computers. The term classical doesn't mean they're old and outdated. They're called that because computers have stored and processed information in fundamentally the same way since, well, the beginning of modern computing. As technology improves, they become faster and more powerful and classical computers can do amazing things. You are able to watch this video thanks to classical computing. But there are certain types of computational tasks that can scale in complexity to a point where classical computers simply can't keep up.
>
> **[0:46](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=46)** - For example, Baron and I are planning a dinner party and we want to find the perfect seating arrangement for our guests. This is an optimization problem. If we have four guests, there will be four factorial ways we can seat them around the table. That means four times three times two times one, or 24 possible seating arrangements. And I've drawn those out on these 24 sheets of paper.
>
> **[1:09](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=69)** - To find the optimal arrangement, a classical computer would go through and evaluate each of those possibilities individually, compare them, and then pick the best one.
>
> **[1:19](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=79)** - Oh, it looks like Catherine wants to come too. Now we'll have five guests, which means there are five factorial or 120 seating combinations to consider.
>
> **[1:31](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=91)** - Well that escalated quickly. We might be able to do some clever things to reduce the number of combinations we need to fully evaluate.
>
> **[1:39](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=99)** - Yeah, don't even bother seating Catherine next to Todd, unless you want a fight to break out.
>
> **[1:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=105)** - Cool, we can toss those seating arrangements. That gives us less to consider. Another way we might speed things up is to divide the work up between two processors to evaluate the options in parallel. That could cut down the time it takes us to solve this problem by as much as half.
>
> **[2:01](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=121)** - Hold on. Catherine wants bring her whole family. So that's 10 people, and 10 factorial is 3,628,800.
>
> **[2:13](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=133)** - Three million. Don't even bother writing that down. We'll never have time to consider that many seating options in time for the dinner party.
>
> **[2:22](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=142)** - This shows how the work required for certain types of problems can grow exponentially to the point of becoming impossible to solve. Merely doubling the number of dinner party guests from five to 10 grew the number of possible seating arrangements from 120 to over three and a half million. Increasing that to 15 guests would represent 1.3 trillion combinations. And if we hosted a banquet with 60 guests we would have nearly as many seating charts to consider as there are atoms in the universe. Even a supercomputer would take more than our lifetime to evaluate all those options.
>
> **[2:58](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=178)** - We'd be long gone by the time it finds the best seating arrangement. But this is the type of problem where quantum computers can have an advantage, because they process information in a new, physically different way than classical computers. Quantum computers use individual particles like photons or electrons to store and process information down at the subatomic level. Those tiny little particles behave in strange and interesting ways, because they follow the rules of quantum mechanics, which are different than the classical laws of physics we experience in our normal sized world. Quantum computers take advantage of unique quantum mechanical phenomena like superposition and entanglement to perform computations, and we'll explore what those mean throughout this course.
>
> **[3:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=222)** - Those properties enable a quantum computer to approach the problem differently than how a classical computer would. Rather than evaluating each possible seating scenario, for our dinner party individually, one at a time, a quantum computer can consider all of the possible scenarios at the same time. It encodes the problem into quantum bits which use quantum property of superposition to simultaneously represent all of our possible outcomes or seating charts. Our quantum search algorithm then applies operations to those quantum bits, which amplifies the solution to our problem so that it emerges from the other possibilities.
>
> **[4:18](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=258)** - Conceptually, think of how waves ripple across the surface of a pond, creating peaks and troughs where they constructively and destructively interfere with each other. When we encode a problem into our quantum bits it's like laying out all of the possible solutions across the surface of a pond, all of our possible seating charts. Our search algorithm's job is to splash that pond in just the right way to make a constructive wave peak at the solution we're searching for while the other possible solutions are destructively canceled out. If we designed our quantum algorithm correctly, when we measure its outcome, we'll have a high [[Probability]] of getting an optimal seating chart. And we get to that answer a lot faster than we could with the classical computing approach.
>
> **[5:01](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=301)** - Now, it's not faster because a quantum computer can execute its operations faster. It's faster because a quantum computer can solve the problem in exponentially fewer operations. But that quantum advantage only applies to problems like this one, where solutions can be evaluated in parallel. Most of the computing that we perform on a daily basis would not benefit from [[Quantum Computing]]. A classical computer can handle writing emails and watching cat videos just fine. So don't expect quantum computers to replace our classical computers. Instead, they'll be used to augment them for specific types of tasks where quantum computing can provide an advantage. It's like how your computer may use a specialized graphics card to augment the general purpose CPU for intense video processing.
>
> **[5:47](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=347)** - So when will I be able to buy a quantum processing card to put in my desktop computer?
>
> **[5:52](https://www.linkedin.com/learning/quantum-computing-fundamentals/why-quantum-computing?u=76281980&t=352)** - Not anytime soon. Many of the quantum computers we have today are big, bulky systems that require elaborate cooling because the processors need to be kept incredibly cold to function. Keep in mind, quantum computing is still very much a developing field, much like classical computers back in the 1940s and '50s. Today, quantum computers are big and have limited capability and writing programs for them is a low level endeavor. But these things are getting better every day and looking back at how much classical computers have advanced since their beginning, we're in for an exciting ride with quantum.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Quantum Computing]] (3), [[Probability]] (1)
> **Speakers:** - before (1), - for (1), - to (1), - oh (1), - well (1)
> **CLI Commands:** find (2), make (1), cat (1)
> **Analogies:** it's like (2), for example (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** cpu (1)
> **Versions:** 1.3 (1)
> **Warnings:** keep in mind (1)


### 1. Quantum Bits

[↑ Back to Table of Contents](#table-of-contents)

#### [Classical bits vs. quantum bits](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=0)** - You probably don't think about it as you're using a computer from day-to-day, but under the hood, that computer stores and processes all of its data using basic units of information called bits. A single bit by itself isn't very useful, but when you combine multiple bits together, they can be used to represent complex information. For example, this video you're watching is stored as a sequence of millions, perhaps billions of individual bits in a specific order that your computer interprets to produce what you're seeing and hearing. Now. In a classical computer like the one you're using to watch this, each of those individual bits can be in one of two possible states. We usually represent those states as one or zero, but they can also be described as true or false, on or off, yes or no. Those are all just abstract names that we use to describe one of two distinct states. Just like how you might describe the two sides of a coin as heads or tails. A coin laying on the table is like a classical bit because it will be in either one state or the other.
>
> **[1:05](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=65)** - Quantum computers also process information as individual bits, but those quantum bits called qubits are special. In addition to being in one of two reliably distinguishable states, one or zero, a qubit can also exist in a state called super position. This is a principle of quantum mechanics that allows multiple states in a quantum system to be added together or superposed. The combination of these states means that a single quantum qubit can be both one and zero at the same time. Using Baron's coin example, we can represent a qubit in super position by giving coin a spin. While it's spinning on its edge, the coin is in a state that's not entirely heads or tails. In a sense, it's simultaneously both. Now, keep in mind this is an analogy that we're using to explain a concept.
>
> **[1:59](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=119)** - This coin is not a quantum particle. It's just a coin. That means it doesn't follow the same rules, a quantum mechanics that a qubit does. A coin cannot really be in a state of superposition of heads or tails at the same time, and we're mentioning that here because we'll be using objects and analogies like this throughout the course.
>
> **[2:19](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=139)** - As we do, keep in mind, these are teaching tools to relate the strange rules of quantum physics to the world as we experience it.
>
> **[2:27](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=147)** - Speaking of teaching tools, here's another way to think about super position. Using an analogy we'll revisit throughout this course. Imagine that Olivia and I are having lunch at a quantum cafe.
>
> **[2:41](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=161)** - This cafe has a very limited menu. You can only get a soup or a salad. Those are the two possible states.
>
> **[2:48](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=168)** - I represent a classical bit because I always know exactly what I want. I'm having soup today. Now, some computational operation might change the value of my bit.
>
> **[2:58](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=178)** - Maybe you should have the salad. It's healthier.
>
> **[3:03](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=183)** - I'm definitely getting the salad. As you can see, my state can change, but as a classical bit, at any given moment, I'm fully committed to one option or the other. There's no in-between for me.
>
> **[3:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=195)** - Unlike Baron's classical mindset, when I choose between two options, I think like a quantum bit. I can consider ordering the soup, and I can consider ordering the salad at the same time. I'm in a super position of both options with some [[Probability]] of picking one over the other.
>
> **[3:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=209)** - That just sounds indecisive.
>
> **[3:32](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=212)** - Not indecisive. Superposed. I can't stay in super position forever, so I'll eventually have to settle on ordering one or the other, but until then, I can consider both.
>
> **[3:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=222)** - The reason quantum bits can exist in super position, and classical bits can't is that, they're physically implemented in different ways. Qubits are stored using tiny particles that act as quantum mechanical systems with two physically distinguishable states. For example, in electron it can be used as a qubit because it has two distinct states referred to as spin up and spin down. A single photon could also be used as a qubit with the two states represented by vertical or horizontal polarization. Electrons and photons are both particles that display the peculiar effects of quantum mechanics such as super position.
>
> **[4:17](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=257)** - The way cubits are physically implemented can have an impact when programming for real quantum [[Hardware]]. However, this course isn't about the physics of quantum computers. We're going to look at the general concepts related to quantum programming and not focus on how a specific type of quantum computer physically works.
>
> **[4:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/classical-bits-vs-quantum-bits?u=76281980&t=273)** - If you've ever written code for a classical computer, you probably didn't think about whether the bits you were manipulating, were being physically represented by the voltage on a wire. light in a fiber optic cable or magnetic fields on a hard disc. You just thought about those bits as being ones or zeros, usually to represent some higher level of information. That's the level of abstraction we'll use as we talk about qubits throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1), [[Hardware]] (1)
> **Speakers:** - this (2), - i (2), - the (2), - you (1), - quantum (1)
> **Analogies:** for example (2), just like (1), imagine (1), such as (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Warnings:** keep in mind (2)

#### [Measuring a qubit](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=0)** - To know the value or state of a qubit we have to measure it. But there's a particular characteristic of quantum mechanics that prevents us from being able to directly observe the state of a quantum system without disturbing it.
>
> **[0:12](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=12)** - This differs from how we interact with classical computers where we can read bits of data without worrying about changing their state.
>
> **[0:19](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=19)** - When we look at a qubit in super position the act of measuring it destroys that super position. It instantly collapses into one of two basis states of that measurement.
>
> **[0:28](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=28)** - Consider our quantum cafe scenario. Olivia is a hungry qubit caught in a decision super position between soup or salad. We can't magically read her mind to know what she's thinking. There's some [[Probability]] she'll order the soup and a corresponding probability she'll order the salad. Ah, here comes the waiter.
>
> **[0:48](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=48)** - Excuse me, ma'am, what will you be having?
>
> **[0:50](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=50)** - Salad.
>
> **[0:52](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=52)** - As soon as the waiter asked for her order, or took a measurement, Olivia's qubit instantly left her super position of both options. In this case, the outcome was salad, that's her state now.
>
> **[1:02](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=62)** - I'm fully committed to salad.
>
> **[1:04](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=64)** - The simple act of performing that measurement, or observation is a one-way, irreversible operation. We gained a classical bit of information because now we know Olivia is having salad, but we'll never know how much Olivia might have also been considering the soup. That super position is gone.
>
> **[1:21](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=81)** - Quantum computers are fundamentally different from classical computers because in a classical computer everything is deterministic. No matter how many times you run a classical algorithm with the same set of inputs, you always get the same result.
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=94)** - In quantum computers, the outcome of measuring a qubit is probabilistic so running the same quantum algorithm multiple times can result in different outcomes. Let's rewind and watch that scene again. (tape whirring) Ah, here comes the waiter.
>
> **[1:52](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=112)** - Excuse me ma'am, what will you be having?
>
> **[1:54](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=114)** - Soup.
>
> **[1:55](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=115)** - This time when the waiter measured Olivia's qubit the outcome was different.
>
> **[2:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=120)** - And for you, sir?
>
> **[2:02](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=122)** - The salad for me.
>
> **[2:04](https://www.linkedin.com/learning/quantum-computing-fundamentals/measuring-a-qubit?u=76281980&t=124)** - Since measuring a qubit will collapse its super position, that's usually one of the last things we do in a quantum program. In general, a quantum algorithm begins by encoding input data into a set of qubits. Then we apply a series of quantum operations on those qubits, putting them into various states of super position and entanglement. Our goal here is to manipulate the quantum space in just the right way, so that when we measure the result at the end of the algorithm we'll have a high probability of getting the right answer to the computational problem our algorithm is meant to solve. It's important to recognize that the inputs and outputs of a quantum algorithm are all classical bits. We're using the unique properties of quantum mechanics to process that information in the middle. But at the end of it all, the results we get out, what we can physically measure is just classical data, ones and zeros.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3)
> **Speakers:** - this (2), - excuse (2), - the (2), - to (1), - when (1)
> **Definitions:** is a  (2)

#### [Measure a qubit with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/measure-a-qubit-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/measure-a-qubit-with-qiskit?u=76281980&t=0)** - [Instructor] Now that we've seen how measuring a qubit in superposition produces a classical bit of information as the outcome, let's look at that concept in action with the Qiskit programming framework. From within the code spaces environment, we'll start by creating a new Jupyter notebook. To do that, I'll press control shift P. That brings up a search bar and there, I'll type Jupyter. Then I'll select the option to create new Jupyter notebook. Now, in the first notebook cell, I'll import all of the base level elements in the Qiskit library with the command from Qiskit import wild card.
>
> **[0:47](https://www.linkedin.com/learning/quantum-computing-fundamentals/measure-a-qubit-with-qiskit?u=76281980&t=47)** We'll also need the ability to plot histograms for this demo, which we can import from the qiskit.tools.visualization module. Finally, to display those plots in the Jupyter notebook, we'll use the magic function matplotlib inline. This tells the plotting library, called matplotlib, to display any plots it generates inline with the Jupyter notebook. To run those commands, I'll press shift enter and that will drop my cursor down into a new entry cell. Now that we've imported the Qiskit library, we can create our first quantum circuit, which will consist of a single qubit, whose value will measure and then we'll store the value of that measurement in a classical bit. We'll create a new variable named QR for our quantum register. And we'll pass it in input argument of one to indicate this register will store one qubit. After that, we'll use a similar line of code to create another variable named CR as a classical register to store a single classical bit. Next, we'll combine those two registers into a quantum circuit, passing in the quantum register as the first argument and the classical register as the second argument. Finally, using that circuit will perform a measure operation on the quantum register and store the result of measuring the quantum register in the classical register.
>
> **[2:22](https://www.linkedin.com/learning/quantum-computing-fundamentals/measure-a-qubit-with-qiskit?u=76281980&t=142)** That completes the circuit, so I'll press shift enter to run those commands. And we see the output as a [[Python (Programming Language)|Python]] object, storing the Qiskit circuit with those instructions. Later in this course, we'll see how to run our programs on real quantum [[Hardware]] through the cloud, but for now, we'll execute our program locally within code spaces using a quantum simulator to run that circuit. The simulator doesn't give us the computational advantages, a real quantum computer wood and it's only really usable for a small number of qubits, but it's an easy way to explore quantum circuits as we're learning. And Qiskit provides several simulators through its backend framework called aer. We'll create a new simulator with the command aer.get_backend. And for the argument to that function, we'll pass in the string qasm_simulator in single or double quotes. QASM stands for quantum assembly language, which is a simple text-based programming language for describing quantum circuits. Many of the Qiskit functions we're using here to build our circuit correspond to lower level chasm instructions. The Qiskit library gives us additional features on top of that, such as simulators. The QASM simulator backend will simulate executing our quantum circuit and give back a Python dictionary object, containing a count of the measured outcomes of our classical registers. We'll capture that result in a new variable named result. Then call the execute function.
>
> **[3:59](https://www.linkedin.com/learning/quantum-computing-fundamentals/measure-a-qubit-with-qiskit?u=76281980&t=239)** Passing in our circuit. Setting the backend to our simulator. And then setting the number of shots to 1,024. The execute function submits a job to the aer simulator. So, to get the result from that, we'll need to call the result method on it. Now, you might be wondering about that input argument named shots that we set to 1,024. Remember that the outcome of measuring a qubit in superposition is not deterministic. It's random according to some distribution of probabilities. For example, let's say we write a quantum algorithm to solve some complex problem. It performs various quantum operations that result in a qubit having a superposition state with a 95% chance of being seen as one when measured and a 5% chance of being measured as zero. Let's say that [[Probability]] distribution represents the answer to whatever problem our algorithm was designed to solve. That's the information we want to know. However, we cannot directly observe that superposition state. When we measure the qubit, we'll observe one of its two basis states, according to that probability distribution. In this specific case, it's more likely to end up with an outcome of one, but there's still a 5% chance we could get a zero instead. If we only run that algorithm once and take a single measurement, if that outcome is zero, we might incorrectly conclude that our algorithm
>
> **[5:32](https://www.linkedin.com/learning/quantum-computing-fundamentals/measure-a-qubit-with-qiskit?u=76281980&t=332)** has a 100% probability of producing a zero because we've never seen an outcome of one. We need more data to better understand the real probability distribution of that qubit in super position. So, we run that same quantum algorithm again and measure the resulting qubit a second time. This time, it's outcome is one. Now we've seen one half of the time and zero the other half. If we run that algorithm a third time and get another one, our measure distribution shifts towards one being the more common outcome. As we continue to rerun the quantum algorithm and see more outcomes, our measured distribution will converge on the actual hidden probability distribution of that quantum state. Running the experiment more times gives us a more precise answer. However, running the experiment more times, also takes longer. So, there's a trade off to make between precision and execution time. The shots argument for the execute function, tells the simulator how many times to run the program. So, in this case, we'll gather 1024 outcomes to build our distribution. To view that distribution, we'll use the plot histogram function and pass it the result and call the get counts method on that. I'll press shift enter to run the program. And we get a histogram with a single bar with a zero at the bottom. This indicates that our circuit measured a zero, every single time, giving the zero outcome a probability
>
> **[7:06](https://www.linkedin.com/learning/quantum-computing-fundamentals/measure-a-qubit-with-qiskit?u=76281980&t=426)** of one or 100%. So, why didn't our quantum circuit measure a one from any of those thousand shots? Well, when we initialize a new qubit, it always starts in the zero basis state and as we'll see later when a qubit is in that basis state, it will always be measured as zero. We haven't applied any quantum operations to the qubit to put it into an interesting superposition yet, so let's do that now. Back up in the second cell after initializing the quantum circuit, but before we measure it, let's apply a quantum operation called the Hadamard or H-gate on our quantum register. We'll cover the Hadamard gate in detail later, but for this example, it will put our qubit into a superposition with a 50% chance of being measured as one or zero. If I press shift enter to rerun that middle block of code and update our circuit and then press shift enter again to rerun the third cell with the [[Simulation]], now our histogram has two bars, indicating the number of times we measured a zero outcome on the left and one on the right. The distribution is close to 50/50, but one is a bit higher because out of those thousand or so shots, one randomly occurred a few more times than zero. If I press the up arrow to select that cell again and then press shift enter to run it, this time we get a slightly different distribution, although it's still roughly half and half. Now, let's increase the number of shots by adding a couple of zeros to the end of the shot count. I'll rerun that simulation.
>
> **[8:43](https://www.linkedin.com/learning/quantum-computing-fundamentals/measure-a-qubit-with-qiskit?u=76281980&t=523)** And now our measured probabilities are even closer to a perfect 50/50 split. We can view the actual number of outcomes by using the Python print function on result.get_counts.
>
> **[8:59](https://www.linkedin.com/learning/quantum-computing-fundamentals/measure-a-qubit-with-qiskit?u=76281980&t=539)** This prints out the Python dictionary, returned by the get counts method, which shows us exactly how many times each of the possible outcomes occurred when we ran that simulation. This circuit is incredibly simple, so simulating a hundred thousand shots is doable, but as your circuits grow in size in complexity and you start running them on real hardware, the execution time can start to add up and you may need to dial back the number of shots you run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (6), [[Python (Programming Language)|Python]] (4), [[Simulation]] (3), [[Hardware]] (2), cursor (1)
> **CLI Commands:** python (4), make (1)
> **Tools:** jupyter (5)
> **Code Identifiers:** get_backend (1), qasm_simulator (1), get_counts (1)
> **Definitions:** is a  (2), stands for (1)
> **Env Vars:** qasm (2)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** later in (1)

#### [Overview of vectors](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980&t=0)** - We've reached the point in this course where we'll need to start using math to describe what's happening in our quantum circuits. In case you're not familiar with basic [[Linear Algebra]] and how to work with vectors and complex numbers, this video and the next one will give you a quick overview of the basic concepts you'll need to get started. In this video, we'll start with how to define a vector and visualize it on a graph using Cartesian coordinates. Then we'll look at how to calculate the magnitude of a vector, scale it, and normalize it to a unit length of one. We'll see several common vector operations, including addition, transpose, and inner product. And finally, we'll explore the concept of an orthonormal basis and what it means for two vectors to be linearly independent. If you already understand those topics, feel free to skip over the [[Representational State Transfer (REST)|rest]] of this video. In mathematics, a vector is a set of values that represent a quantity that has a direction and magnitude within some vector space. Vectors are typically written as a set of numbers enclosed in brackets as shown here. This vector has two elements, so we say it represents a direction and magnitude within a two-dimensional vector space. A vector with three elements lives in a three-dimensional vector space, four elements makes a four-dimensional vector, five is a five-dimensional vector, and so on. The world we live in is only three-dimensional, so it's difficult for us to visualize things in four or more dimensions even though they easily exist in the world of mathematics.
>
> **[1:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980&t=95)** So to avoid melting our brains trying to visualize huge vector spaces, let's stick with just two dimensions for now. For example, consider this vector named a, written in lower case. The notation for a variable that represents a vector can vary widely. You might see vector variables written with an arrow or line overhead, or perhaps as an underlined variable. In print, vectors are often indicated using boldface. There are lots of ways to decorate the variable, but they all mean the same thing, a is a vector with these two values. We can visualize that vector on a two-dimensional plane using what's known as a Cartesian coordinate system, where each of its elements represents a distance along one of the two axes. The first value, three, represents a distance along the horizontal x-axis, and the second value, four, is a distance along the vertical y-axis. If we draw a line from the origin or center of the graph to that point, we've made a vector. It has a direction, in this case pointing up to the right, and a magnitude or length. Let's place a second vector b with the elements negative one and negative three. That gives us a shorter vector pointing downwards to the left. Now vectors don't always have to start with their tail at the center of the origin. These vectors could be located here or even here or here. It doesn't matter where we move those vectors within our two-dimensional space, they retain their same direction and magnitude. That said, you'll usually see vectors drawn
>
> **[3:10](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980&t=190)** with their tail starting at the origin. Now the direction of these two vectors should be fairly obvious because we've drawn them as arrows, but we also learned that vectors have a magnitude. So what does that mean? The term magnitude refers to the length of a vector and is often denoted using this double vertical bar notation around the variable name. To calculate the magnitude of a vector, we square each of its individual elements, add them all together, and then calculate the square root of that total. The equation shown here would apply to a two-dimensional vector where a1 indicates the first element and a2 is the second element. If we had a three-dimensional vector, we would square and add all three of its elements before taking the square root. For four dimensions, we'd square and add all four together, and so on. You may hear calculating the magnitude this way referred to as the Euclidean norm, but for this course, we'll simply use the term magnitude. Now let's apply that equation to calculate the magnitude of our two-dimensional vector a. Three squared is nine and four squared is 16. Adding those squares together gives us 25 and the square root of that is five. So this vector a has a magnitude or length of five. Applying the same formula to vector b gives us the square root of 10, which is an irrational number that equals a little more than three. Notice that even though the values in vector b are negative, the magnitude is still positive due to the equation squaring all of its values.
>
> **[4:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980&t=285)** Whether a vector's elements are positive or negative will affect its direction but not its magnitude. That covers the basics of how we represent and visualize vectors with a direction and magnitude. Now let's talk about some of the operations we can apply to vectors. When we multiply a vector by a single numeric value, which is referred to as a scalar, that will change the magnitude of the vector but not its direction. We've scaled the length of the vector. For example, using our vector a with the elements three and four, if we multiply that by two, that doubles both of its values. So two times three gives us six and two times four is eight. Applying the magnitude formula to that scaled vector, 2a, shows that it has a length of 10. We've doubled the magnitude of a, but its direction is unchanged. While we're on the topic of scaling vectors, let's talk about a related operation known as normalization, which scales a vector to have a magnitude of one which is considered the standard or normal length for a vector, often referred to as the unit length. The equation to normalize a vector is shown here, simply dividing each of the elements of the vector by its overall magnitude. Don't worry about remembering that formula for now. What you need to understand for this course is the concept that a normalized vector has a mathematical length or magnitude of one pointing in some direction. In addition to scaling vectors, we can also add multiple vectors together
>
> **[6:18](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980&t=378)** as long as those vectors have the same number of elements. For example, we can sum vectors a and b together to produce a new vector by adding together each of their corresponding values. Adding together the first elements, three plus negative one, gives us two, and adding the second elements, four plus negative three, gives us one. So the sum of vectors a and b is a vector with the values two and one. We can visually represent that addition operation on a graph by drawing our first vector a with its tail at the origin and then drawing the second vector b with its tail starting at the head of a. Drawing a vector from the origin to the end of that summed together chain of a and b illustrates the resulting sum, the vector two, one. Another important vector operation we'll need to use is the transpose operation, which takes a column vector whose elements are arranged vertically in a column and flips it to become a row vector where the elements are arranged horizontally. And if you apply the transpose operation to a row vector, that flips it back up into a column vector. The transpose operation is denoted with the letter T as a raised superscript above a variable. So for example, if a is our column vector with the elements three and four, a transpose is the row vector with elements three and four. Now it may not seem like we're doing anything useful here since the individual elements are unchanged, but the transpose does change the vector's dimensions, which matters when we start multiplying vectors
>
> **[7:53](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980&t=473)** and matrices. And that brings us to our next operation, the inner product. The inner product is a way to multiply two vectors together such that they produce a single scalar value as the result. This operation requires both vectors to have the same number of elements. For vector multiplication to produce a scalar result, the left vector needs to be oriented as a row vector and the right vector needs to be a column. So when we multiply these three-dimensional vectors, a, b, c, and x, y, z, we multiply the first element of each vector, which is a times x, then we sum that with the product of the second elements, b and y, along with the corresponding [[Microsoft Products|products]] of any other elements, in this case that's c times z. This expression, ax plus by plus cz, results in a single scalar value. Symbolically, the inner product operation is often denoted using the small dot symbols shown here. For that reason, you may hear the inner product referred to as a dot product. There are some subtle distinctions between those terms, but they're not relevant to the way we'll be using them here. So if we want to take the inner product of our two example column vectors from earlier in this video, a and b, we would write that as a dot b. Now, since those are both column vectors, to multiply them to produce a scalar, we'll need to transpose vector a, flipping it on its side to become a row vector. When we multiply and sum
>
> **[9:27](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980&t=567)** the corresponding terms from the vectors, that gives us an inner product of negative 15. Now that we've seen how to scale, normalize, sum, transpose, and multiply vectors, there's one more vector-related concept we need to cover and that's something called an orthonormal basis. Fancy words. Let's break them down. The term basis refers to a set of vectors that can be linearly combined to form any other vector within that space. The term linear combination means we're using addition and multiplication to scale and add vectors together like we saw earlier, thus combining them. The term orthonormal means our vectors are orthogonal or perpendicular to each other and have a unit length of one. Using our two-dimensional space as an example, the vectors one, zero and zero, one would form an orthonormal basis because they both have a length of one, they're perpendicular to each other, and, by linearly combining these two vectors using addition and multiplication, we can scale and add them to produce any other vector within this two-dimensional space. For example, we can represent our example vector a from earlier as three times the vector one, zero plus four times the vector zero, one. That linear combination gives us a, which is three, four. The other example, vector b, can also be expressed as a linear combination of these same two basis vectors. However, it is not possible to express one of these basis vectors in terms of the other one
>
> **[11:03](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980&t=663)** because they're orthogonal. The term linearly independent is used to describe when a vector cannot be expressed as a linear combination of one or more other vectors in the space. That applies to our two orthogonal basis vectors because there's no way to scale and add together that one, zero vector to produce the zero, one vector and vice versa. Additionally, if we calculate the inner product of those two vectors, the result will be zero because they're linearly independent. Now, the vectors one, zero and zero, one are not the only possible orthonormal basis for a two-dimensional vector space. For example, these two diagonal vectors are also orthogonal and normalized and could therefore be used in the same way as a basis pair that can be linearly combined to create any other vector. Really, any pair of orthogonal and normalized vectors can serve as a basis in two-dimensional vector space. However, the set one, zero and zero, one is by far the simplest and most common. And as we'll see soon, these two orthonormal vectors are used to represent the two standard basis states for quantum bits. Wow, we just covered a lot in this video, and if you feel like some parts are still unclear, that's okay. Rather than trying to perfectly understand everything about vectors now, I recommend continuing on. These concepts and operations should start to make more sense as you see them used in action. And if later you still find yourself struggling
>
> **[12:37](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-vectors?u=76281980&t=757)** with the vector math, remember, you can always come back to this video as a reference.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Algebra]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (7), known as (2), refers to (2), is an  (1)
> **Analogies:** for example (6)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - we (1)

#### [Overview of complex numbers](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-complex-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-complex-numbers?u=76281980&t=0)** - Like the previous video on vectors, this video will be a quick overview of complex numbers. So if you're already comfortable working with complex numbers in standard and polar [[Forms]], as well as performing operations like the complex conjugate, feel free to skip past this video. Now to understand complex numbers, we first need to understand the concepts of real and imaginary numbers. A real number is any value that can be represented as a distance along a line. For example, 1, 2, and 3 are all real numbers, as are their negative counterparts going in the other direction. Real numbers can be fractional values, like 1/4 or -1.78, and they can even be irrational numbers, like square root of 2 or pi, which require an infinite number of decimal places to fully represent. Real numbers are quantities that can exist in the real world that we live in. They're the type of values that we use in everyday life. For example, I have three apples. That's a real number representing a real quantity of apples I can physically have. Imaginary numbers, on the other hand, are a mathematical concept to express values that cannot be represented in the real world. Centuries ago, philosophers and mathematicians considered the question: What is the square root of -1, or put in another way, what number can be squared or multiplied by itself to produce the value -1? This seemingly simple equation is impossible to solve using real numbers because, when you square any real number, positive or negative,
>
> **[1:36](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-complex-numbers?u=76281980&t=96)** the result will always be a positive value. Since this type of value doesn't exist in the world of real numbers, we use the term imaginary number to describe a number that produces a negative result when squared. Imaginary numbers are usually written as a real number multiplied by the imaginary unit, which we'll represent with the lowercase letter i. This imaginary unit is defined such that i squared is equal to -1. It's impossible to represent an imaginary quantity in the real world. I can't have square root of -1 apples. There's no such thing. We can't visualize that with physical objects. However, in the world of mathematics, imaginary numbers play a very real role within the mathematical frameworks we use to describe the world around us. So we need to get comfortable seeing and using them. Now that we've defined real and imaginary numbers, we can return to the original topic of the video, complex numbers. A complex number is a value consisting of both a real and imaginary component. We can write a complex number, which we'll refer to with the variable z, as a plus b times i, where a and b are both real values, and i is the imaginary unit. The value a represents the real part of the complex number, and b is the imaginary part. For example, the complex number shown here has a real component of 3 and an imaginary component of 2, which is multiplied by the imaginary value i. Keep in mind, 3 and 2 are both real numbers,
>
> **[3:10](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-complex-numbers?u=76281980&t=190)** but we refer to 2 as the imaginary component because it gets multiplied by i. Another way to represent this complex number is in the form of an ordered pair, or a vector, where the first element is the real component, and the second element is the imaginary component. Since a complex number consists of two real numbers, we can visually represent it as a vector on a two-dimensional plane. We'll use the Cartesian coordinate system with the horizontal axis representing the real component and the vertical axis representing the imaginary component. So our complex number 3 + 2i would be drawn as this vector on our complex plane. A number having a real value of -1 and no imaginary component would be a vector along the horizontal real axis, and a purely imaginary number with no real component, the point along the vertical imaginary access. We just saw some examples of writing complex numbers in the form of a + bi and drawing them on a complex plane using Cartesian coordinates. But we can also represent complex numbers in another format, with polar coordinates. We can write a complex number in the polar form as r times e raised to the power of i times theta. In this expression, r and theta are both real numbers. and e is Euler's number, which is also a real number which is the value of around 2.7. When we use polar coordinates to draw that complex value as a vector on our two-dimensional plane, theta represents the angle of the vector relative to the positive real axis in units of radians. In other words, theta determines
>
> **[4:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-complex-numbers?u=76281980&t=285)** which direction the vector is pointing. You'll often hear theta referred to as the phase angle of this complex number. The other variable, r, represents the magnitude or length of the vector. That gives us two different ways to write a complex number and visualize it in a two-dimensional plane. We have the standard form, a + bi, and the polar form, r times e to the power of i times theta. Notice that both of these expressions contain two real numbers, a and b in the standard form and r and theta in the polar form. That said, a and b and r and theta are not the same. So how do they relate to each other? To bridge the gap between these two formats, we'll need to use Euler's formula. Euler's formula states that e raised to the value of i times theta is equal to the cosine of theta plus i times the sine of theta. We won't go into how Leonhard Euler came up with the equation or his famous number. For now, we'll just accept it as an equation that's used throughout modern mathematics. Looking at the left half of the equation, notice it's similar to the expression we use to represent a complex number in polar form, but now it's missing the scalar r. So let's multiply both sides of that equation by a real magnitude, r, and then on the right side of the equation, we'll use algebra to distribute r to the both parts. Now the left side of the equation is the polar form of a complex number that we saw earlier, and the right side has two parts: r times cosine theta represents the real component of the imaginary number,
>
> **[6:20](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-complex-numbers?u=76281980&t=380)** and r times i times sine theta is the imaginary part. Together, those two parts represent our standard format for a complex number of a plus b times i. To help make that more concrete, let's put some actual numbers behind that equation. Let's make the magnitude r equal to 3 and the phase angle theta be pi/4. The expression with the cosine evaluates to 3 over square root of 2. This represents the real component of our complex number. And the other part, with sine of pi/4, represents the imaginary part. Side by side, we can see how the pairs of real numbers used to describe a complex value are different, depending on whether we're using the polar form or the standard form. Now you might be wondering, why do we need two different formats to represent the exact same complex number? Wouldn't it be simpler to just stick with one format? Well when doing mathematical manipulations, some things are easier to do using the standard form, and some things are easier to do in the polar form. We'll be using both representations at various points throughout this course depending on the concept we're trying to explain. So you need to be familiar with what those variables mean in both formats. Now there's a few more concepts we need to cover related to complex numbers. First, we'll need to know how to find the absolute value of a complex number. When visualized on the complex plane, the absolute value of a complex number is its distance from the origin. If we've written our complex number using the polar form,
>
> **[7:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-complex-numbers?u=76281980&t=476)** then finding the absolute value is easy. It's just the magnitude value of r. If we expressed our complex number in the standard form, a plus b times i, then we can use this equation, which Baron introduced in the previous video, to calculate the magnitude of that vector. Knowing how to find the absolute value of a complex number will become important when we calculate the [[Probability]] of getting different outcomes when measuring quantum states. Another operation we'll need is the complex conjugate. The conjugate of a complex number is the similar complex number, but with the sign of the imaginary component flipped from positive to negative or vice versa. The complex conjugate is often denoted in physics with a superscript star. In terms of the standard a + b form, we can think of the complex conjugate as flipping the sign on b. In the polar form, the conjugate negates the exponent. It's important to recognize that a complex number has the same magnitude as its conjugate, so the magnitude of a complex number z is equal to the magnitude of its complex conjugate. Now that we've seen how to conjugate complex numbers, we're ready for our final operation, the conjugate transpose. Finding the conjugate transpose of a vector is a two-step process that involves transposing a vector and applying the complex conjugate to each of its elements. There are several different symbols that are commonly used to represent this operation. In the context of quantum mechanics, we use the dagger symbol as a superscript. The order in which we apply the transpose
>
> **[9:28](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-complex-numbers?u=76281980&t=568)** and conjugate operations doesn't matter. We can conjugate all the elements first then transpose the vector, or vice versa. The result will always be the same. For example, consider the column vector a shown here. Its conjugate transpose, a dagger, is a row vector where the sign of the imaginary components have been flipped. You might also hear the conjugate transpose operation referred to as the Hermitian conjugate or Hermitian transpose. Those are just other names for it. It's also worth noting that we've only considered vectors thus far, but this conjugate transpose operation also applies to matrices. But that's a topic we'll cover later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Probability]] (1)
> **Analogies:** for example (4), similar to (1)
> **CLI Commands:** make (2), find (2)
> **Definitions:** is a  (3), in other words (1)
> **Cross-References:** previous video (2), later in (1)
> **Versions:** 1.78 (1), 2.7 (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - like (1)

#### [Represent qubits as vectors](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=0)** - It can be difficult to form an intuitive understanding of [[Quantum Computing]] because the tiny world of quantum mechanics works differently than the way we experience the world as humans. And that's why math is an important tool for understanding many of these quantum concepts. We'll be using [[Linear Algebra]] and other abstract models to describe quantum computations throughout this course. So let's take a few minutes to look at how a qubit, which is our fundamental unit of quantum information, can be represented mathematically. A quantum bit has two computational basis states, which we'll call zero and one. These two basis states are mutually exclusive and can be represented by a pair of two dimensional vectors. The zero state is a vector with one as its first element and zero as its second element, and the one state is the opposite of that, with one as the second element, and zero as the first. These two vectors are linearly independent, and together they form an ortho normal basis. Now, you might have noticed this funny looking symbol with a vertical bar and angle bracket. That symbol is part of Dirac notation, which is used to describe quantum mechanical states. We use it to indicate that zero and one are quantum states, and not classical bit values, or just the numbers zero in one. This symbol with a variable enclosed between a vertical bar and right pointing angle bracket is called a ket, and it specifically denotes a quantum state that's represented as a column vector.
>
> **[1:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=93)** So, you may sometimes hear our two standard basis states referred to as ket-zero and ket-one. Now, how do we take those two states, ket-zero and one, and use them to describe a quantum state that can be both zero and one at the same time?
>
> **[1:49](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=109)** - Simple. A quantum state is just a linear combination of those computational basis states in a complex vector space.
>
> **[1:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=116)** - That was a lot of words. Would you mind breaking that down?
>
> **[1:59](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=119)** - Sure. You'll often see the Greek simple si used in a ket to represent an arbitrary quantum state. That quantum state is a linear combination of some scaler value alpha, times ket-zero, plus another scaler value beta, times ket-one. Another way to write this expression is to replace cat zero and one with their corresponding vectors. If we then scale those vectors and send them together that gives us a single two-dimensional vector with alpha as a first element and beta as a second element. These are just different ways to write a quantum state using Dirac notation or vector notation, and you'll see us use both throughout this course. Now, it's important to note that alpha and beta are not just regular numbers, they're both complex numbers, meaning they each have a real and an imaginary component. Why alpha and beta are complex numbers gets into details of quantum mechanics that are beyond the scope of this course, but if we can just accept that they're complex numbers and treat them as such the mathematical operations we'll be using throughout this course will work just fine.
>
> **[3:04](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=184)** - Those two coefficient values, alpha and beta, are called [[Probability]] amplitudes. They indicate how likely we are to get each of the two possible outcomes when measuring a qubit. The absolute value of alpha squared represents the probability that the measurement outcome will be in the zero state, and the absolute value of beta squared is the probability that the outcome will be in the one state. These two amplitudes themselves, alpha and beta, can be positive or negative, because they're just complex values. For example, alpha could be negative one over the square root of two. However, when we use that amplitude to calculate the probability of measuring the zero state, the probability will always be positive, because we're squaring the absolute value of alpha. One important rule of probability is that the individual probabilities for all possible outcomes must always add up to one. That puts a constraint on the values alpha and beta that the sum of the squares of their absolute values must always equal one. This is often referred to as the normalization constraint, because it means the two-dimensional vector that alpha and beta represent will have a normalized unit length of one. We can visualize that by plotting the quantum state vector on a simplified, two-dimensional graph with the alpha probability amplitude on the vertical axis and beta on the horizontal axis. Even though alpha and beta are actually complex numbers, to keep this example simple, we'll restrict them both
>
> **[4:36](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=276)** to being only real positive numbers, but the concepts are the same. If we draw the state vector for a qubit where alpha equals one and beta is zero, that's a line along the vertical axis which represents our ket-zero basis state. To calculate the probability that will get an outcome of zero when measuring this quantum state, we'll square the absolute value of alpha, which gives us a probability of one. If we do the same thing to calculate the probability of getting an outcome of one by squaring the absolute value of beta, that gives us zero. This qubit is simply in the zero basis state. No matter how many times we measure it, the outcome will always be zero. If we swap those values for alpha and beta, now the line is on the horizontal axis, pointing to ket-one. Now there's zero probability that measuring this qubit will give us the outcome of zero, because the outcome will always be one. This qubit is simply in the one basis state. Those two examples showed what the standard basis states look like on our graph, but things get more interesting when we put our qubit into super position
>
> **[5:43](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=343)** - When a quantum bit is in a super position of both zero and one at the same time. That means both alpha and beta have non-zero values. For example, in the quantum state shown here, alpha and beta are both one over the square root of two. That's represented on our graph as a diagonal vector with a magnitude of one. Squaring the absolute value of those two amplitudes tells us that the probability of measuring an outcome of zero is one half, and the probability of getting one is also one half. So measuring a qubit in this quantum state is kind of like flipping a coin, with an equal probability of measuring one or zero. Finally, consider the superposition state where the probability of measuring a zero outcome is higher than measuring a one. If we had a handful of cubits that are all in the super position and measured each one, the majority of these measurements would likely collapse to zero. However, we could still encounter measuring several ones along the way. The key takeaway from all of this is that the quantum state of a qubit can be represented as a two-dimensional vector of complex numbers with a unit length of one, and the probability amplitudes, alpha and beta, correspond to the probability of measuring their respective outcomes.
>
> **[6:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=416)** - Now that we've explored the concepts of state vectors and complex amplitudes, let's revisit Dirac notation to see how it relates to probabilities and measurement. Remember that we use the ket symbol with a bar and the right angle bracket to denote a quantum state that's a column vector. The counterpart to a ket vector is called a bra, and we indicated using a similar symbol with the angle bracket pointing to the left. A bra is a row vector, or more specifically, bra is the conjugate transpose of a ket. For example, if we have a column vector ket-si, with some arbitrary amplitudes, alpha and beta, bra-si will be its conjugate transpose which is a row vector with the complex conjugates of alpha and beta. Now, why is this useful to have notation to distinguish between these row and column vectors? Well, it makes it easy to represent some common operations. If we multiply a bra with a ket, that gives us their inner product, which is a single scaler value. For example, if we multiply bra-zero times ket-zero, that represents the inner product of the zero basis state with itself. The ones in the first position of those two vectors line up, and the product is one. We get this result because bra-zero and ket-zero represent the same quantum state. However, if we multiply bra-one times ket-zero, the ones in those two vectors do not line up anymore so their inner product is zero. This tells us that these zero and one state vectors are orthogonal, which makes sense,
>
> **[8:30](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-as-vectors?u=76281980&t=510)** because they are a pair of ortho normal basis states. As a side note, when multiplying a bra and a ket, we'll often clean up the notation by combining the two bars in the middle into a single one. This means the same thing, and we might refer to these together as bra-ket, which sounds like bracket. If you are wondering where the terms bra and ket came from, there's your source of inspiration, and you'll often hear the the name bra-ket notation used to describe Dirac notation. Now, let's see what happens if we multiply bra-zero by an arbitrary quantum state, ket-si. The one in bra-zero lines up with the alpha term, so our inner product is just alpha. If we perform a similar operation on ket-si, but using bra-one instead of bra-zero, now the one is in the other position, so our inner product is beta. This demonstrates that taking the inner product of ket-si with either of the basis states gives us the corresponding probability amplitude. As we saw earlier in this video, the absolute value squared of these amplitudes gives us the probability of measuring each outcome, and we can express that using Dirac notation as shown here. Knowing how to represent quantum states as vectors and with Dirac notation and how to calculate the probability of measuring different outcomes are essential concepts to quantum computing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (20), [[Quantum Computing]] (2), [[Linear Algebra]] (1)
> **Definitions:** is a  (5), is called (2), is an  (1)
> **Speakers:** - it (1), - simple (1), - that (1), - sure (1), - those (1)
> **Analogies:** for example (4), kind of like (1)
> **Cross-References:** as we saw (1), earlier in (1)
> **CLI Commands:** cat (1)
> **Warnings:** note that (1)

#### [Represent qubits on the Bloch sphere](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=0)** - In the previous video, we visualized a quantum state vector on a two-dimensional graph that simplified things to explain the concepts, but it overlooked the fact that we're actually working with complex numbers. Our [[Probability]] amplitudes, alpha and beta, are both complex numbers, which means they each have real and imaginary components indicated here with the Re and Im notation. That means to fully represent this quantum state, consisting of two complex numbers, we'll actually need four real-valued coefficients. Trying to visualize something in four dimensions is kind of hard.
>
> **[0:38](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=38)** - Fortunately, we don't need to. We can use a representation called the Bloch sphere, which lets us visualize a pure quantum state in three-dimensional space as a point on the surface of a sphere.
>
> **[0:49](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=49)** - Hold up. How do we just go from needing four dimensions to only three?
>
> **[0:54](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=54)** - We'll get to that soon in another video. For now, just know there are certain quantum states that are physically indistinguishable from each other. They look the same so that reduces the number of unique states we need to visualize. By using some clever math to represent a quantum state using polar coordinates, we can reduce the number of dimensions from four to three.
>
> **[1:14](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=74)** - Are we about to derive some really complicated equations?
>
> **[1:18](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=78)** - I'll spare you that math for now. The good news is that we don't really need to fully understand how the equations are derived to use the Bloch sphere as a tool for visualizing quantum states. Let's set up our three-dimensional space with two perpendicular axes named X and Y, which span the horizontal plane, and a vertical axis, Z, which is perpendicular or normal to the X-Y plane. If you've done any sort of 3D modeling or advanced math, this should look familiar. Next we'll draw our spheres centered within that three-dimensional space. The sphere is normalized, meaning the radius or distance from the center of this sphere to any point on its surface has a unit length of one. The point at the very top of this sphere where the Z-axis pokes through represents the ket zero state of our standard basis, and the opposite point down at the very bottom represents the ket one state. Now using the graphical framework, we can visualize any pure quantum state as a point on the surface of the sphere. For example, consider this quantum state ket psi, which is a superposition of our two standard basis states. Since the Bloch sphere has a unit radius of one, the magnitude or length of that vector will always be one, so we only need two values to describe that point on the surface. First is what's known as the polar angle, represented here by the symbol theta. This indicates the angle in radians from the polar Z-axis to the vector representing our quantum state. The second piece of information we need
>
> **[2:52](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=172)** to describe that point is the azimuth angle, which is the angle of rotation around the Z-axis along the X-Y plane represented here with the Greek symbol phi. Using polar coordinates, we can represent that quantum state or point on the sphere using this equation. The alpha coefficient is equivalent to the cosine of theta over two and the beta coefficient is Euler's number e raised to the power of i times phi multiplied by a sine of theta over two. Understanding how we derive this equation is beyond the scope of this course, and not necessary to use it. If you want to understand where this equation came from, check out the Qiskit textbook, it has a great walkthrough.
>
> **[3:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=213)** - Now to demonstrate how that equation can represent alpha and beta, let's assign those two polar variables some actual values. Let's say this quantum state has a polar angle theta of pi over four radians, and the azimuth angle phi is three pi over eight radians. If we substitute those values for theta and phi into our equation and solve for alpha and beta, we see that the alpha term of cosine pi over eight equals approximately 0.93, which is a completely real number without any imaginary component. The beta term on the other hand has a real component of roughly 0.15 and an imaginary component of 0.35. Those two complex probability amplitudes can also be written using vector notation as shown here. If we calculate the probability of observing each outcome when measuring this quantum state, we see there's about an 85% chance of getting to zero state and a 15% probability of measuring it as one. As we should expect, if we add those two probabilities together, they total to one or 100%.
>
> **[4:40](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=280)** - It's important to remember that the Bloch sphere is mapping quantum state vectors onto a three-dimensional space to help visualize it. When working in a Cartesian coordinate system, we typically think of the x-axis, y-axis and z-axis as being orthogonal to one another because they're perpendicular. However that's not how the Bloch sphere works. With the Bloch sphere, we are representing quantum states, and if we take any two states on opposite sides of the sphere along the same axis, those two state vectors will be orthonormal. That means together they form a valid basis to represent any other quantum state.
>
> **[5:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=315)** - The surface of a sphere has an infinite number of points, so does that mean there are an infinite number of possible bases?
>
> **[5:22](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-qubits-on-the-bloch-sphere?u=76281980&t=322)** - Yeah though there are few common ones that we'll reference throughout this course. Of course, at the top and bottom of the Z-axis, we have our standard basis states, zero and one, shown here along with their vector representations. The two states at opposite ends of the X-axis form another common basis pair and are usually identified using the ket plus and ket minus symbols. Finally the ends of the Y-axis are another common pair of states. For this course, we'll identify them as ket plus i and ket minus i. Though if you're looking elsewhere, you may see those two states represented with other symbols. Those four common states around the equator of the Bloch sphere represent different superpositions that all have the same equal probability of collapsing to one or zero when measured in the computational basis along the Z-axis. We're including their state vectors here for reference, but don't worry about trying to memorize all these states right now. We'll see them plenty throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (5)
> **Speakers:** - in (1), - fortunately (1), - hold (1), - we (1), - are (1)
> **Versions:** 0.93 (1), 0.15 (1), 0.35 (1)
> **Definitions:** is a  (2), known as (1)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### [State vectors and Bloch spheres with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/state-vectors-and-bloch-spheres-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/state-vectors-and-bloch-spheres-with-qiskit?u=76281980&t=0)** - [Instructor] Qiskit provides us with the ability to visualize quantum states by plotting them on the bloch sphere. To demonstrate that, let's modify the code from our previous Qiskit example which simulated a simple circuit that measured a single qubit and then plotted a histogram to view the distribution of outcomes. For that example, we used Qiskit's qasm simulator backend which mimics the behavior of an actual quantum device and gives us back a dictionary of resulting counts. For this demonstration, we'll need to use a different simulator named state vector so let's change the name of the backend in the third notebook cell. This state vector simulator executes the quantum circuit and returns a state vector representing the final state of the qubits at the end. It only needs to run a single shot so we can get rid of the shots parameter. Next, we'll retrieve the state vector from the result by calling the get state vector method.
>
> **[1:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/state-vectors-and-bloch-spheres-with-qiskit?u=76281980&t=68)** Then instead of plotting histogram, let's display the values of that state vector. Down in the bottom cell, I'll replace the line to plot a histogram with the print function and I'll pass it the state vector variable as the input. Finally, let's comment out the last two lines in the second notebook cell so the circuit doesn't do anything other than initialize a fresh qubit. Now I'll click the run all arrow button at the top to run this entire notebook, and at the end we can see the resulting state vector for our qubit. Notice that [[Python (Programming Language)|Python]] uses the letter J to represent the imaginary unit which we've been representing with the letter I. The first coefficient alpha has a real component of one and zero imaginary component and the second coefficient beta is zero for both. So this qubit is in the initial cat zero basis state. To make things easier to read, at the top of this notebook I'll import a function called array to latex from Qiskit's visualization package. I'll swap out the print function at the end for array to latex. Then click the run all arrow again and now our state vector is displayed with easy to read latex format. Now to visualize this qubit on the bloch sphere, we'll need to import another function from the visualization module called plot bloch multi-vector. Then down in the fourth notebook cell,
>
> **[2:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/state-vectors-and-bloch-spheres-with-qiskit?u=76281980&t=165)** we'll call the plot bloch multi-vector function and pass its state vector as the input argument.
>
> **[2:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/state-vectors-and-bloch-spheres-with-qiskit?u=76281980&t=176)** I'll click the run all button again to execute those changes. And now in addition to printing the state vector, Qiskit gives us a nice visualization of that quantum state on the bloch sphere. Since the cubit is initialized to the cat zero state, the state vector is a narrow pointing straight up along the Z-axis. Now let's apply an operation to change that qubit state to something else. We'll un-comment the Hadamard Gate to add it back to the end of our quantum circuit. Click the run all arrow again and now the bloch sphere has a horizontal vector pointing along the X axis. Looking at the state vector above that, we can see that in this quantum state the alpha and beta coefficients both have a real component value of one over square root of two. Since we removed the line of code to measure the qubit, the last operation in the circuit before it gets simulated is the Hadamard Gate which puts it into this superposition. Now let's add the final measurement step back into our circuit by un-commenting it. I'll press the run all button to rerun that [[Simulation]]. Now we're looking at the state of that qubit after it was measured. So it was put into superposition then measured, which causes it to collapse to one of the basis states. This time the measured outcome was one. If I run that simulation several more times, sometimes the end-state will be zero and other times it will end up as one. Qiskit's state vector simulator and bloch sphere visualization are useful tools to investigate what's going on with your circuits as you continue to explore
>
> **[4:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/state-vectors-and-bloch-spheres-with-qiskit?u=76281980&t=269)** and learn about quantum programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** cat (2), python (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Build a model Bloch sphere](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=0)** - The block sphere is such a handy tool for visualizing quantum states. We thought it would be nice to have our own. That's why we made...
>
> **[0:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=8)** - [Both] Block sphere beach balls.
>
> **[0:10](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=10)** - We found that having something that we can physically manipulate, help us understand the basic operation on quantum states. If you have a couple of round objects that you can label, I encourage you to pause this video, and grab them.
>
> **[0:21](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=21)** - We've labeled the polar ends of our beach balls, with green circles to represent the two computational basis states, with zero at the top and one at the bottom. Remember, these two basis states exist along the Z-axis. Around the middle, we used blue circles to represent the positive side of the x-axis, and the negative side of the x-axis, and we used yellow circles to represent the positive y axis and the negative y-axis. To label your own sphere, you can use paint, markers, stickers, whatever you have available, and don't worry about using the same color as us. We use different colors to make ours easier to see and recognize, but the colors are not important. If possible, go ahead and create two spheres. That second one will come in handy later when we discuss operations that affect multiple qubits. Now, you may have noticed that the four states around the middle of our sphere are labeled according to their axis, X or Y. And we label the computational basis states along the Z axis as zero and one, not plus Z and minus Z. We found this mixed labeling scheme easiest to follow, and we recommend you do the same. That said, keep in mind, when we start writing out math equations we'll use the symbols kept plus, and kept minus to represent the two states along the X axis, and we'll represent the two Y-axis states, plus I and minus I. There are a couple of different ways, we can manipulate our block sphere beach balls. The first is to hold it stationary with zero one at the top and bottom, and then stick an item on the surface
>
> **[1:54](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=114)** to represent the current state of the qubit. This is similar to how we'll visualize the block sphere with graphics and coding examples throughout the course.
>
> **[2:01](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=121)** - When we orient it this way, I like to pretend like the block sphere is a newly discovered beach ball planet with zero and one at the North and South poles, and our quantum state is a tiny little astronaut that just landed on it. Their mission is to plant a flag at either the north or south pole. When we look through our telescope from back on earth, those two poles are the only parts of the planet we can observe or measure to see where our astronaut went.
>
> **[2:30](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=150)** - What does a space explorer have to do with [[Quantum Computing]]?
>
> **[2:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=154)** - Well, this is an analogy that helps me conceptualize how the location or quantum state on the block sphere relates to the [[Probability]] of measuring different outcomes. If our astronaut lands their spacecraft here in the northern hemisphere, since they're closer to the North Pole, there's a higher probability that'll end up wandering up in that direction, and plant their flag on zero. However, from that landing zone, there's still a non-zero chance they could wander down to the South Pole taking the longer route, and end up on the one state.
>
> **[3:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=188)** - I see. So if they land on the equator, they'll have an equal probability of wandering North or South.
>
> **[3:13](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=193)** - Exactly. And it doesn't matter where around the equator they land because anywhere on the equator is the same distance away from either of the poles.
>
> **[3:22](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=202)** - Well, what happens if they land directly on the North Pole?
>
> **[3:26](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=206)** - Well, in that case, they don't need to go anywhere. They can just plant their flag, and will observe that they're on the North Pole representing the zero state.
>
> **[3:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=215)** - Can we give our a tiny astronaut a shovel? That way they can dig straight through the planet?
>
> **[3:40](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=220)** - Well, a point on the surface of the block sphere, which has a unit radius of one, represents what's known as a pure quantum state. Pure states are what we've seen throughout this course, which can be described using a single vector with alpha and beta values that have a magnitude of one. Think of this as a single well-behaved qubit. Effects like interference can put qubits into what's known as a mixed state, which cannot be described as a simple vector. Instead, mixed states are represented using something a bit more complicated called a density matrix. Those mixed states can correspond to points on the inside of the block sphere. We're not going to go into that for this course, but it's worth knowing that there's a distinction between pure and mixed states.
>
> **[4:23](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=263)** - Hey, Baron.
>
> **[4:24](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=264)** - What's up?
>
> **[4:25](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=265)** - I think holding the beach ball like this is going to be a problem for our course.
>
> **[4:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=269)** - How so?
>
> **[4:30](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=270)** - Well, if we want to talk about state on the backside, the camera won't be able to see it.
>
> **[4:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=275)** - Ah, I've got an idea. Instead of holding the ball stationary, and moving our quantum states around, we'll pretend that the point representing our current quantum state stays in the same place, and then rotate our sphere around that.
>
> **[4:51](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=291)** - Ah. That way the camera can always see the current quantum state.
>
> **[4:54](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=294)** - Exactly. This is how Olivia and I will manipulate our block sphere beach balls for the [[Representational State Transfer (REST)|rest]] of this course. The side you see pointed towards the camera represents the current quantum state. So right now, my qubit is in the zero state, and my qubit is in the one state.
>
> **[5:11](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=311)** - And if I apply a quantum operation to my qubit called Hadamard gate, that transforms it from the zero state into the state on the positive side of the x-axis.
>
> **[5:21](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=321)** - Hold on a sec. I thought when we look at a qubit, we can only observe the state as zero or one. So how are we able to see this intermediate X state?
>
> **[5:30](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=330)** - Great question. We can see this state because we haven't measured this qubit yet, so it's still in super position. If we do measure it, that collapses it out of super position to one of the two computational basis states. Also, keep in mind, this isn't really a quantum particle, it's a beach ball. It doesn't follow the same laws of quantum physics as a qubit, so of course we can see any side of the ball, it's just a beach ball. We're using the block sphere as a tool to help visualize the mathematical abstractions that we use to describe quantum states, but it doesn't represent what's physically going on with a qubit.
>
> **[6:06](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=366)** - Sir, you're telling me that real quantum computers are not full of beach balls with tiny little astronauts running around?
>
> **[6:12](https://www.linkedin.com/learning/quantum-computing-fundamentals/build-a-model-bloch-sphere?u=76281980&t=372)** - I hate to break it to you Olivia, but no. Though, that does sound like it would be a lot of fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3), [[Quantum Computing]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Speakers:** - well (5), - i (3), - we (2), - what (2), - exactly (2)
> **Definitions:** is a  (2), known as (2), is an  (1)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)

#### [Global and relative phase](https://www.linkedin.com/learning/quantum-computing-fundamentals/global-and-relative-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/global-and-relative-phase?u=76281980&t=0)** - In the previous videos we saw how to visualize quantum states on the Bloch sphere. But a pure quantum state is represented by two complex values, alpha and beta, which each have real and imaginary components. That means four real numbers in total. So how do we go from something that should take four dimensions to represent to only three dimensions on the Bloch sphere? Short answer, some of those quantum states look the same. We've already seen the standard zero basis state shown here, represented as the vector one zero. If we measure a qubit in that state the [[Probability]] of getting an outcome of zero is the absolute value of one squared, which is one. We will always measure this state as zero and we will never get an outcome of one. Now, consider what happens if we negate that state or multiply it by negative one. Now it's vector representation has a negative one in the first position and zero in the second. But if we calculate the probability of each outcome when measuring that qubit, we see that the absolute value of negative one squared is also one. So just like its original form, the negative version of the state will also always be measured as zero. For one more example, let's see what happens if we multiply that state by the imaginary unit i. That means the first element is i and the second element is still zero. When we calculate the outcome probabilities for that state, again, we see that it will always be measured as zero. What we have here are three quantum states that may mathematically look different from each other,
>
> **[1:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/global-and-relative-phase?u=76281980&t=95)** but when we measure qubits in those states there's no way to physically tell them apart. Their outcomes will all be the same. This is an artifact of the way we use math to describe quantum states called global phase. Mathematically a global phase is a complex number with a magnitude of one. We can represent that in polar form as e raised to the power of i times theta, where theta is any real number. When we multiply a quantum state vector by a global phase value, it's physically indistinguishable from the original state. The global phase has no observable effect on the probabilities of each outcome when we measure that state. We're mentioning this concept now because as we work through math examples throughout this course, we'll occasionally encounter global phase factors. It's important to recognize that it's just a mathematical artifact and doesn't have any physical relevance to our quantum computations.
>
> **[2:27](https://www.linkedin.com/learning/quantum-computing-fundamentals/global-and-relative-phase?u=76281980&t=147)** - We can usually ignore the global phase, however, there's another type of phase that does affect our quantum computations and that's the relative phase. The relative phase is the difference between the phase vectors of our two probability amplitudes. To see what that looks like in math, let's start by expressing the complex amplitudes alpha and beta using the polar notation. We can write each complex value as a magnitude r times e to the power of i times a phase angle, theta. Remember that in this representation the individual magnitudes and phase angles are real numbers, not complex. Now, if we take that equation and use algebra to factor out the alpha phase factor, theta, that gives us an equivalent expression with that phase factor out in front. You might recognize the format of this factor, e raise to the power of i times theta. That's a complex value with a magnitude of one, which means it's a global phase factor. It has no observable effect on our quantum states, so we can safely ignore it. Mathematically, we can get rid of that global phase factor by multiplying this state by e to power of negative i times theta, which itself is also a global phase factor with no physical effect. That cancels out the global phase we want to get rid of, leaving us with this expression. Now, to simplify this one more step. Let's take that difference in theta values, which are both real numbers that do not appear anywhere else in this equation, and let's simplify it by rewriting it as a single variable, which will label as phi. By ignoring the global phase and simplifying the difference
>
> **[4:02](https://www.linkedin.com/learning/quantum-computing-fundamentals/global-and-relative-phase?u=76281980&t=242)** in phase factors to a single variable, we've represented this quantum state using just three real numbers. Having just three numbers means we can visualize this state as a point on a three-dimensional space like on the Bloch sphere. Mapping this equation to the Bloch sphere requires some additional mathematical manipulation, but that's beyond the scope of this course.
>
> **[4:23](https://www.linkedin.com/learning/quantum-computing-fundamentals/global-and-relative-phase?u=76281980&t=263)** - Now, let's talk about the remaining phase factor in this equation, phi, which is the difference between the phase factors of alpha and beta. Phi represents the relative phase, which is something we can physically observe. In regards to the Bloch sphere, this relative phase represents the azimuth angle around the Z axis. If we think of the Bloch sphere as a planet, a change in the relative phase corresponds to a change in longitude, rotating our quantum state around the pole along the same latitude.
>
> **[4:52](https://www.linkedin.com/learning/quantum-computing-fundamentals/global-and-relative-phase?u=76281980&t=292)** - Rotating our quantum state around the Bloch sphere Z axis doesn't move us any closer to the zero or one state. That means we're not changing the probabilities of measuring either of those states. So how is that relative phase something we can physically observe?
>
> **[5:07](https://www.linkedin.com/learning/quantum-computing-fundamentals/global-and-relative-phase?u=76281980&t=307)** - Great question, and you're right. When we measure a qubit in the standard computational basis, the relative phase doesn't affect our probability of measuring one or zero, so it doesn't really matter. However, there are other ways we can measure a qubit that do allow us to observe its relative phase, but that's an advanced topic we'll save for later in this course. If your head is spinning from all this math talk of phase, don't worry. Let's recap the three key concepts to take away from this lesson. First, there's a thing called global phase, which can show up in our quantum equations. This global phase is just part of the math we use to represent quantum states. It's not something we can physically observe or measure, so we can usually ignore it. The other type of phase that shows up in our quantum equations is the relative phase, which corresponds to an angle around the Z axis of the Bloch sphere. The relative phase is something we can observe through certain types of measurements, so we do need to pay attention to it. Finally, through some clever mathematical manipulations involving those two types of phase we can represent the observable elements of a quantum state using just three real numbers. That's what enables us to visualize a quantum state in three dimensions as a point on the Bloch sphere.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4)
> **Speakers:** - in (1), - we (1), - now (1), - rotating (1), - great (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)

#### [Challenge: Create a quantum circuit](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-create-a-quantum-circuit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-create-a-quantum-circuit?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-create-a-quantum-circuit?u=76281980&t=5)** - We've shown you a few code examples so far along with a lot of math. Now it's time for a challenge to give you hands-on practice working with Qiskit. Your goal for this challenge is to write a new Qiskit program that instantiates a quantum circuit with one qubit and one classical bit and then performs a measurement on the qubit and stores the result in the classical bit. Your program should simulate at least 1,000 shots of that circuit and then display the resulting counts on a histogram. Since the qubit is initialized in the zero basis state and we're not applying any additional operations to change its state, that measurement outcome should always be zero. Finally, your program should print your qubits state vector as well as display its graphical representation on the Bloch sphere. I'll admit, it may not be the most exciting program, but this challenge will give you practice using Qiskit, importing the correct libraries, creating quantum circuits, simulating them and displaying the results. You should start this challenge by working from a new blank Jupyter Notebook, then use the previous example videos and exercise files to reference to help build your solution. Take some time to try this challenge for yourself, then watch the next video to see how we approached it. Good luck.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Tools:** jupyter (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - we (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Create a quantum circuit](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-create-a-quantum-circuit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-create-a-quantum-circuit?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-create-a-quantum-circuit?u=76281980&t=5)** - [Instructor] Let's look at our solution to the challenge of creating a quantum circuit. Since we introduced all of the parts needed for this challenge in just the past few videos, rather than making you watch me type out all of that code again line by line, let's jump straight to the end result and talk through that. The first notebook cell imports the Qiskit modules we'll need to use. We imported all of the modules from the base Qiskit library with the command from Qiskit, import wildcard. After that, we imported the visualization tools we'll need to use for this challenge, including plot_histogram and plot_bloch_multivector, and we also chose to use the array_to_latex function to help us display the state vector. Finally, we included the command to use matplotlibs inline backend for displaying plots. The next notebook cell builds the quantum circuit by instantiating a quantum register with one qubit and a classical register with one classical bit, combines those into a quantum circuit, and then calls the measure method on that circuit to measure the quantum register, qr, and place the result in the classical register, cr. The third block of code simulates executing that circuit multiple times to plot a histogram of the outcomes. For that, we needed to use the qasm_simulator, which we initialized by calling the Aer modules get_backend function. We use the execute function to run the circuit using the simulator we just initialized as the backend and we simulate it for 1,024 shots. Then, we get the resulting count value to plot a histogram, and as expected, the outcome is always zero
>
> **[1:41](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-create-a-quantum-circuit?u=76281980&t=101)** because we didn't do anything to change the qubit state after initializing it. Now, the last part of the challenge was to print the qubit state vector and display it on the Bloch sphere. To do those things, we'll need to use a different simulator backend than the qasm_simulator we just used to get the counts for our histogram. If there was a trick to this challenge, it was realizing that you'll need two different simulators. The notebook cell after the histogram instantiates the state vector simulator backend and then uses that with the execute method to get the resulting state vector. We used the array_to_latex function to print that state vector before the final cell uses the plot_bloch_multivector function to display it on the Bloch sphere.

> [!info]- Semantic Content
>
> **Code Identifiers:** plot_bloch_multivector (2), array_to_latex (2), qasm_simulator (2), plot_histogram (1), get_backend (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 2. Multiple Quantum Bits

[↑ Back to Table of Contents](#table-of-contents)

#### [Represent multiple qubits](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits?u=76281980&t=0)** - So far, we've learned how to describe the state of a single qubit, which can exist in a superposition of our computational basis states: 0 and 1. It may be interesting, but a quantum computer with only 1-qubit is not very useful. To build a useful quantum program, we'll need to use multiple qubits.
>
> **[0:19](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits?u=76281980&t=19)** - If we expand our quantum system to 2-qubits, now there are four possible basis states. Both of our qubits could be 0, they could both be 1, or they could be different, and there are two ways that could happen. Those four states are shown here using Dirac notation. Although we'll verbally describe these states by reading the digits from left to right, keep in mind that they're written with the first bit- or least significant bit- in the rightmost position. So, for example, in the state we'll refer to as 01, 1 is in the first position. Now, to represent these four states in a vector space, we'll need four dimensions. |00⟩ can be written as a four dimensional vector with a 1 in the first position and zeros elsewhere. In the next state, |01⟩, that 1 is shifted down into the second position. |10⟩ has it in the third position. And the |11⟩ state vector has the 1 in the last position. These are the four computational basis states for a 2-qubit system written in both direct notation and the corresponding column vectors.
>
> **[1:28](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits?u=76281980&t=88)** - If we grow our system from 2-qubits to 3, that gives us eight basis states shown here. Having eight states means we need eight dimensions to represent our set of orthonormal basis vectors. We won't go through all of those vectors here but as an example, the state represented by |011⟩ would be an eight dimensional vector with a 1 in the fourth position and zeros everywhere else. Expanding our quantum system again from 3 to 4-qubits grows our number of basis vectors from 8 to 16. Representing a 5-qubit system requires 32 basis states and so on. You may be recognizing a pattern here. The number of qubits in the system means it will have two to that number of states. So, for example, in a system with nine qubits, each individual qubit can be in one of two possible basis states, which is two to the power of nine or 512 states. Those represent all the possible outcomes we could get when measuring those 9-qubits.
>
> **[2:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits?u=76281980&t=149)** - If you've worked with classical computers in the past, this should seem familiar. Because at the end of it all, when we measure quantum bits, we get back classical bits of information, ones and zeros. But when we have a system with multiple qubits in superposition, they represent a linear combination of those however many basis states. For example, to mathematically represent a superposition of 2-qubits, which have four basis states, we need four complex coefficients. Instead of adding more Greek letters to the mix, we've simply used the Latin alphabet here labeling these variables as a, b, c, and d. As an example, consider the quantum state where each of those variables is 1/2. Represented as a vector, that would look something like this. If we calculate the [[Probability]] of measuring those 2-qubits and getting an outcome of 0 for both of them, we see that the probability of that is 1/4. Similarly, the probability of measuring the first bit as 1 and the second bit as 0, is 1/4. The opposite of that outcome has a probability of 1/4, as does the probability of measuring both qubits as being in the 1 state. That example represents what's called a uniform superposition, where every possible outcome has an equal probability when you measure that set of qubits. It's like flipping a pair of coins. (coins clanging)
>
> **[3:57](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits?u=76281980&t=237)** - Now, let's look at another system of 2-qubits in a non-uniform superposition. We've used a slightly different notation here to show that this superposition, |ψ⟩, is the sum of the basis states 00 and 01 both divided by the square root of two. In vector notation, that corresponds to the first two positions being 1 over the square root of 2 and the last two positions being 0. The probability of measuring this system of qubits and seeing both the zeros, is 1/2. As is the probability of measuring the first qubit as 1 and the second qubit as 0. The probability of observing these 2-qubits in any other combination, is 0. So in this particular superposition of 2-qubits, we will always measure the second- or left qubit- as 0 and the outcome of measuring the first or rightmost qubit, will have a 50/50 chance of being 0 or 1.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (9)
> **Speakers:** - if (3), - so (1), - now (1)
> **Analogies:** for example (3), it's like (1)
> **Cross-References:** in the next (1), in the last (1)
> **Warnings:** keep in mind (1)

#### [Represent multiple qubits with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits-with-qiskit?u=76281980&t=0)** - [Instructor] Let's see how to create quantum circuits with multiple qubits by modifying our previous example program which displays a single qubit state on the Bloch sphere. Growing the circuit from one to two bits is as simple as changing the parameters that we use to initialize the quantum and classical registers from one to two. This will create a circuit with two qubits, apply the Hadamard or H operation on both of them, then measure them and place the results into the corresponding classical bits. I'll click the Run All button to run the entire notebook.
>
> **[0:39](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits-with-qiskit?u=76281980&t=39)** Now we see two Bloch spheres, representing the final state of our two qubits after being measured. The first qubit, indexed as number zero is on the left and the second qubit, indexed as cubit number one is on the right. Also, notice that the printed state vector just above that contains four numbers since we now have a two qubit system. Now, rather than individually initializing the quantum and classical registers and then combining them into a quantum circuit, there's a shorthand that we can use to build a new circuit. Let's delete those first two lines from the block of code to build our circuit. Then when we call the function to create the quantum circuit, we'll simply pass it the number of quantum bits and classical bits that this circuit should have. For this, let's give it a two. The next two lines of code references the qr and cr variables, which no longer exists, because we just deleted them, so that won't work. Instead of referencing the entire register of qubits for the H gate, we can index them individually. If we change the parameter for the Hadamard function to zero, that will apply the Hadamard operation to the first qubit. Notice that the bits are sequentially indexed, starting with zero for the first bit, one for the second bit, two would be used for the third if we had one and so on. Finally, I'll insert a hash mark to comment out the line with the measure function. By commenting that out, the circuit will not perform a measurement at the end I'll press Run All to rerun this entire program again.
>
> **[2:16](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits-with-qiskit?u=76281980&t=136)** Now we have a system of qubits where the first qubit is in a state of superposition with equal probabilities of measuring it as zero or one and the second qubit will always be measured as zero. This is similar to one of the example states we looked at in the previous video, and if we look at the printed state vector, we can see that the first two values are one over square root of two, and the second two values in the state vector are both zero. Now, to measure those two qubits, let's uncomment the line that cause the measure function and we'll change the measure function to measure_all. This will measure both of our qubits and store the results in a classical register. Now, since we'll be measuring the circuit, rather than using the state vector simulator, let's use the qasm simulator to run it. We'll replace the call to get the state vector with the function to get counts instead.
>
> **[3:19](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-multiple-qubits-with-qiskit?u=76281980&t=199)** I'll delete the line to display the state vector and then in the final cell, instead of plotting the Bloch sphere, we'll call the function to plot the resulting histogram. I'll press the Run All button to run the [[Simulation]] one more time, and the resulting histogram shows us that when we measure these two qubits, about half the time we'll get an outcome of zero, zero, and half the time we'll see zero, one. The other two possible outcomes of one, zero and one, one will never occur.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1)
> **Code Identifiers:** measure_all (1)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [How much information is in a qubit?](https://www.linkedin.com/learning/quantum-computing-fundamentals/how-much-information-is-in-a-qubit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/how-much-information-is-in-a-qubit?u=76281980&t=0)** - How much more information can a quantum computer store and process than a classical computer? News articles hyping up the future of [[Quantum Computing]] often talk about that but the way it's usually presented can be a bit misleading. So let's take a moment to think through that question. If we have a register of eight classical bits each of those bits can be in one of two possible states, one or zero, which means there are two to the power of eight or 256 possible combinations of bits. To describe the state of that eight-bit classical register, at any given moment, we only need a single integer value which is usually a number between zero and 255. That's how much information those eight classical bits can store.
>
> **[0:44](https://www.linkedin.com/learning/quantum-computing-fundamentals/how-much-information-is-in-a-qubit?u=76281980&t=44)** - Now, let's think about how much information we need to describe the state of eight quantum bits. Eight qubits will have two to the power of eight or 256 possible basis states. However, unlike the classical bits those qubits can exist in a superposition consisting of all of those states at the same time. That means we'll need 256 complex coefficients to describe the [[Probability]] amplitudes for each of those basis states. 256 complex numbers represent a lot more information than the single integer needed to specify the state of eight classical bits.
>
> **[1:20](https://www.linkedin.com/learning/quantum-computing-fundamentals/how-much-information-is-in-a-qubit?u=76281980&t=80)** - That's certainly an impressive difference and it's an angle news stories like to hype up around quantum computers but it doesn't tell the whole story. While qubits can certainly represent a lot of information while they're in superposition, when we measure those qubits they collapse to one of two possible states. So the amount of information we can extract from our eight quantum bits is the same as what we get from eight classical bits and that's an important distinction to keep in mind as we write quantum programs. We can leverage the unique properties of qubits to process information across enormous numbers of quantum states, but at the end of the day the output we get from a quantum algorithm is limited to classical information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Quantum Computing]] (1), [[Probability]] (1)
> **Speakers:** - how (1), - now (1), - that (1)
> **Warnings:** keep in mind (1)


### 3. Single-Qubit Pauli Gates

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of matrix operations](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-matrix-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-matrix-operations?u=76281980&t=0)** - The next section of this course will require us to multiply vectors and matrices. So let's have a quick refresher on how matrix multiplication works. Like the previous math refresher videos on vectors and complex numbers, if you're already comfortable multiplying vectors and matrices and finding the conjugate transpose of a matrix, feel free to skip ahead. A matrix is a rectangular array or table of values, usually written in brackets as shown here. We describe the dimensions of a matrix as the number of rows it has by the number of columns, often referred to by the variables m for the number of rows and n for the number of columns. For example, the matrix shown here has two rows and three columns, so it's a two-by-three matrix. This other example matrix has dimensions two-by-two and this third example is a three-by-one matrix. Notice that the three-by-one matrix is similar to a column vector with three elements. We can multiply two matrices together to calculate what's known as their dot product if the number of columns in the left matrix is equal to the number of rows in the right matrix, so the two-by-two matrix shown here can be multiplied by the two-by-one matrix because their inner dimensions match. However, if we swapped the order of those two matrices, we would not be able to multiply them together because their inner dimensions are now different. The order of the matrices matters for matrix multiplication, so let's swap them back.
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-matrix-operations?u=76281980&t=94)** Now, the dimensions of the resulting matrix will be the number of rows in the left matrix by the number of columns in the right matrix. So multiplying these two matrices together will produce a two-by-one matrix. The first element of that matrix is calculated by taking the first rows of the left matrix which is a row vector ab and the first column of the right matrix. In this case, there's only one column, so that's the column vector xy. We then calculate the inner product of those two vectors by multiplying the corresponding elements and adding them all together as shown here. So the first element in the resulting matrix is equal to a times x plus b times y. The second element of the result matrix will be calculated in a similar manner using the second row in the left matrix and the only column in the right matrix, giving us the expression c times x plus d times y. Those are the basics of how to multiply two matrices together, which is a common operation we'll be using throughout the [[Representational State Transfer (REST)|rest]] of this course. Now, while we're on the topic of matrices, there is a special matrix we should be familiar with and that's the identity matrix. The identity matrix is a square n by n matrix that has ones on its main diagonal and zeros everywhere else. For example, the matrix shown here is a two-by-two identity matrix. A three-by-three identity matrix follows the same diagonal pattern as does a four-by-four identity matrix and so on. We can have an identity matrix with any square dimensions.
>
> **[3:09](https://www.linkedin.com/learning/quantum-computing-fundamentals/overview-of-matrix-operations?u=76281980&t=189)** The thing that makes the identity matrix special is the property that if you multiply a vector or matrix by inappropriately-sized identity matrix, the result is the same. The identity doesn't change anything. As we dive into the math behind quantum operations, the identity matrix will show up from time to time, so it's good to be able to recognize it and understand its unique property. Now, there's one more matrix operation we'll need and that's the conjugate transpose. Finding the conjugate transpose of a matrix is similar to the conjugate transpose we've seen previously with vectors. It's a two-step process that involves transposing the matrix and applying the complex conjugate operation to each of its elements. We'll use the superscript dagger symbol to denote the conjugate transpose. The order in which we apply the transpose and conjugate operations doesn't matter. We could conjugate all of the elements first and then transpose the vector or vice versa. The result will be the same. For example, consider the matrix A shown here. We transpose a matrix by switching its rows with its columns which effectively flips the matrix elements over its diagonal. Then applying the complex conjugate to each of those individual elements gives us the conjugate transpose matrix A dagger. Multiplication and the conjugate transpose are two essential matrix operations that we'll be using throughout the rest of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **Definitions:** is a  (7), known as (1)
> **Analogies:** for example (3)
> **Speakers:** - the (1)

#### [Quantum logic gates](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-logic-gates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-logic-gates?u=76281980&t=0)** - Now that we've seen how to represent information with qubits, we're ready to start writing [[Algorithms]] to manipulate that data. A quantum algorithm applies a specific sequence of operations to our qubits to change their quantum state in a controlled manner. And a common way to visually represent those algorithms is what's called the quantum circuit model which is a diagram that shows the sequence of steps in a quantum computation. Reading a quantum circuit diagram is similar to reading a sheet of music. Each of the horizontal wires correspond to an individual qubit. So the algorithm shown here uses three qubits which will all be initialized to the zero basis state at the beginning of this diagram on the far left. This circuit also has three classical bits which we'll use to store the results when measuring those qubits. Since we don't use those classical bits for anything other than storing results, we're combining them into a single composite line to save space on the diagram. As with a sheet of music, time progresses going from left to right the various boxes and symbols on the diagram correspond to different quantum gates or instructions which tell the quantum computer to perform certain actions on one or more qubits. Finally, at the end of our circuit we use the measurement instruction to read out the values of our three qubits and store the results in our classical registers. In a real world physical quantum computer, executing each of those quantum gates might mean generating a specific electrical signal that affects the particles being used as cubits in the desired way.
>
> **[1:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-logic-gates?u=76281980&t=89)** - However, our intent for this course is to abstract away the physical implementation of quantum computers as much as possible. To think about quantum operations at a higher level, and one way to do that is mathematically. We can represent each of those quantum gates or operations as a matrix that we multiply with the state vector representing one or more qubits to perform a linear transformation on its value. A gate that operates on just a single qubit can be represented as a two by two matrix. When we multiply that by the state vector for a single qubit, the result will be a two by one matrix or vector representing the state of that qubit after the operation. A quantum gate that operates on two qubits would be represented as a four by four matrix which we can multiply with the four dimensional vector representing the quantum state of those two qubits to get the resulting state of that system. Later in this course, we'll even see one quantum gate that operates on three cubits at a time and is therefore represented as an eight by eight matrix.
>
> **[2:30](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-logic-gates?u=76281980&t=150)** - One important characteristic of these quantum logic gates is that the matrices we use to describe them are unitary. A unitary matrix is a square matrix such that if we multiply it by its conjugate transposed we get the identity matrix I. That's significant to [[Quantum Computing]] because a unitarian matrix will preserve the magnitude or norm when we multiply it against a state vector. If we multiply a unitarian matrix operator with an arbitrary state vector Kets, the magnitude of the resulting state vector will be the same as the magnitude of the original state vector Kets. Preserving that magnitude is essential because the quantum state vector should always have a magnitude of one, which is the sum of the probabilities for every possible outcome.
>
> **[3:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-logic-gates?u=76281980&t=195)** - Another important characteristic of quantum logic gates is that they're reversible. That means if I give you the state of a qubit after applying a known quantum gate, you can apply an inverse operation to that qubit to determine what its quantum state was before it went through that gate effectively undoing or reversing the operation. That's an important distinction between how quantum logic gates work and classical logic gates. If you've worked with digital logic in the past, you may be familiar with classical logic gates like and, and or. For example, an and gate takes two classical bits as inputs. If both of those bits are in the one state, then it's output will also be one. Otherwise, if any one of those two inputs are zero, then the output will be zero. This classical logic gate is not reversible because if I were to tell you that the output of an AND gate is zero it would be impossible to determine what the two input bits were that produce that result. As we'll see in the coming lessons. Since quantum logic gates are reversible, that type of information is preserved in their output.
>
> **[4:21](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-logic-gates?u=76281980&t=261)** - Now, if the thought of matrix multiplication and complex math scares you, fair enough. This is where our beach balls will come in handy. Many of the quantum logic operations will learn about correspond to different types of rotations on the block sphere, moving the quantum state of a cubit from one point to another.
>
> **[4:37](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-logic-gates?u=76281980&t=277)** - So if you've made your own block sphere model, grab that now and let's explore some quantum gates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Quantum Computing]] (1)
> **Speakers:** - now (2), - however (1), - one (1), - another (1), - so (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), for example (1)
> **Cross-References:** later in (1)

#### [Pauli-X gate](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate?u=76281980&t=0)** - Three of the simplest yet most significant quantum logic operators are a set of related gates called the Pauli gates, which are named after the Nobel Prize-winning physicist, Wolfgang Pauli. The three Pauli gates each operate on a single qubit affecting its quantum state in different ways. Thinking in terms of the block sphere, each of the Pauli gates corresponds to a rotation of pi radians or 180 degrees around one of the three major axes. Mathematically, the Pauli gates are represented with the set of matrices shown here formally labeled as sigma X, sigma Y, and sigma Z. It's also common to see these gates simply labeled with the capital letters X, Y, and Z, which is how we'll be referring to them here. We'll explore these operations in the next few videos to understand their similarities and differences, starting with the X gate. When applied to a single qubit, the Pauli-X gate performs a bit flip, swapping the two basis states, zero and one. So if we use the X gate on a qubit in the zero state, the output will be one and vice versa. Applying this gate to one results in zero. This behavior makes the Pauli-X gate the quantum equivalent of the NOT gate used in classical computers, which inverts or flips the state of a classical bit between one and zero. For that reason, you'll sometimes see the Pauli-X gate simply referred to as the NOT gate. When drawing quantum circuit diagrams, we'll represent the Pauli-X gate as a block with a capital letter X in it. However, in some circumstances,
>
> **[1:32](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate?u=76281980&t=92)** you may also see it represented symbolically as a circle with crosshairs. We can simulate that quantum NOT operation with our block sphere beach ball by rotating it by pi radians or 180 degrees around the x-axis. For this demonstration, the point on the sphere facing you represents our current quantum state. So this qubit, as you see it, is currently in the zero state. To use the Pauli-X gate, I'll put a finger on each side of the x-axis and then rotate the sphere 180 degrees. That inverts our state, so now this qubit is in the one state. If I perform that same operation again a second time that rotates us back to where we started. So applying the X-gate twice in a row undoes its effect. The X-gate is its own inverse.
>
> **[2:19](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate?u=76281980&t=139)** - That makes sense for flipping between zero and one. But what about the other quantum states?
>
> **[2:24](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate?u=76281980&t=144)** - Well, let's say our qubit is in a super position here, represented by this point on the sphere, which is halfway between zero and the positive x-axis. This point is closer to zero than one, so if we measure this quantum state it would have a higher [[Probability]] of collapsing to zero than to one. Now to apply the Pauli-X gate with my fingers along the x-axis, I'll rotate that by 180 degrees and that transforms our qubit to this other state, halfway between one and the positive x-axis. We've flipped the bits and now our qubit has a higher probability of being measured as one than zero.
>
> **[3:04](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate?u=76281980&t=184)** - That's how we can think of the Pauli-X gate geometrically on the block sphere. Now, let's look at it mathematically. Let's apply the Pauli-X or NOT gate to an arbitrary quantum state with a complex amplitude alpha associated with the cat zero and beta associated with cat one. The result will be a state in which the alpha now applies to cat one and beta is a probability amplitude of cat zero. We've swapped or inverted the two basis states in this expression. As Baron mentioned earlier in this video, we can represent the Pauli-X gate as a two by two matrix shown here with ones in the top right and bottom left elements and zeros everywhere else. We can use this operator by multiplying it with a qubit state vector. In direct notation that's written as a capital X, representing the Pauli matrix to the left side of the cat. The order of operands matters and the Pauli matrix always goes on the left side of the cat or state vector. Now, if we multiply the Pauli-X matrix with the cat zero state vector, the first element of the result will be the dot product calculated at 0 X 1 + 1 X 0. And the second element will be 1 X 1 + 0 X 0. The result is a vector zero one, which corresponds to cat one. Similarly, if we apply the Pauli-X gate to the one state, as we should expect, the result is a zero state. And finally, when applying the Pauli-X gate to an arbitrary quantum state with coefficients alpha and beta
>
> **[4:36](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate?u=76281980&t=276)** that gives us a vector in which the locations of the alpha and beta have been swapped. Those are several different ways to think about the Pauli-X gate operation.
>
> **[4:46](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate?u=76281980&t=286)** - Geometrically.
>
> **[4:47](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate?u=76281980&t=287)** - And mathematically. Use whichever interpretation works best for you to understand those foundational concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3)
> **CLI Commands:** cat (8)
> **Speakers:** - that (2), - three (1), - well (1), - geometrically (1), - and (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (1), earlier in (1)

#### [Pauli-X gate with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate-with-qiskit?u=76281980&t=0)** - Let's explore the Pauli-x gate with Qiskit. I've already imported Qiskit and the visualization tools we'll be using in the top cell of this notebook. The second cell initializes a new quantum circuit with a single qubit, and then the final cells simulate its state vector to display its quantum state on the block sphere. Now to use the Pauli-x or NOT gate on this qubit I'll call the X method on the circuit and pass it the parameter zero, which corresponds to the index of our first and only qubit. Qiskit gives us several ways to display a diagram of our quantum circuit. The simplest way is to call [[Python (Programming Language)|python]]'s print function on the circuit object. I'll press the run all button at the top of the editor to run this entire notebook and we can see that cell prints out a diagram of the circuit using asy tech's characters. It's not the prettiest thing, but at least it shows us what's going on. This circuit has a single qubit represented by the line labeled Q, and it applies a single Pauli-X gate to that qubit represented by the box with an X in the middle. Another way to display the circuit in Qiskit which is a bit nicer looking is to use the circuit.draw method And we'll set the optional output parameter equal to the string mpl. Note that mpl is contained in quotation marks. This command tells Qiskit to draw the circuit
>
> **[1:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate-with-qiskit?u=76281980&t=93)** using the matplotlib library and when I press Ctrl enter to run that cell, now we get a nice colored version of that diagram. This fancier version of the diagram relies on some additional Python libraries to display it. So, if your Python installation is missing those libraries, this command will just give you an error. Just follow the instructions in that error message to install the necessary libraries or simply revert back to using the basic text-based diagram. Now that we've added an x gate to our circuit, let's see how that affects our qubit. I'll press shift, enter a couple of times to run the remaining notebook cells and we can see that the qubit flips from the zero state to one on the block sphere and the state vector above that now shows that our qubit is firmly in the one basis state where it will always be measured as such. Now, let's apply a second Pauli-x gate immediately after the first one. I'll press shift enter several times to run those cells again And now we can see that applying the Pauli-x gate twice in a row undoes the effect and returns our qubit back to the original CAT zero state. That demonstrates how the Pauli-x gate can flip a qubit between its two basis states. If we want to see the effect Pauli-x has on a qubit in superposition, we'll need to use another quantum gate to first put it into super position. We'll be using a new gate that we haven't seen yet and we'll cover in more detail later.
>
> **[3:07](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-x-gate-with-qiskit?u=76281980&t=187)** So for now, don't worry about how it works and just focus on the Pauli-x operation. We'll need the mathematical value of pi for this demonstration, so I'll add import statement to the top cell to bring that into our program. Next, I'll replace our two x gates with a new gate named ry. I'll set the first parameter to pi over four and the second parameter to zero. I'll press the run all arrow to rerun this entire notebook and we can see from the block sphere that this quantum state now represents a vector pointing upwards halfway between the zero state and the positive site of the x axis. Now, keeping in mind what this state looks like, let's insert a Pauli-x gate after that ry gate puts the qubit into this super position. I'll run all those cells one more time and that shows us the result of rotating that superposition state 180 degrees around the X-axis. Now the block sphere is pointing downwards halfway between the one basis state and the positive X axis. Using the Pauli-x gate, we flipped the [[Probability]] amplitude so now there's a higher probability of measuring this qubit as one, than measuring it as zero.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Probability]] (2)
> **CLI Commands:** python (3), cat (1)
> **Env Vars:** cat (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - let (1)

#### [Pauli-Y gate](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=0)** - Our next quantum logic gate is the Pauli-Y gate. And as its name suggests, it corresponds to a rotation of pie radiants or 180 degrees around the Y-axis of the Bloch sphere. You'll see it represented on our quantum circuit diagrams as a box with a letter Y in the middle. To use a Pauli-Y operator on this qubit, which is currently in the zero state, I'll put a finger on each side of the Y-axis and rotate it 80 degrees. As you can see that rotation changed our quantum state from zero to one.
>
> **[0:32](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=32)** - Hang on a sec, that seems like what the Pauli-X gate did in a previous video. In fact, if I take my qubit starting in the zero state and then put my fingers along its X-axis and rotated it 180 degrees, I also end up with a qubit in the one state. So how are these two operations different?
>
> **[0:52](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=52)** - Well, when applied to a qubit and one of our two standard basis states zero and one, which exists along the Z-axis, the Pauli-X and Pauli-Y gates will have a similar effect, flipping from one basis state to the other.
>
> **[1:05](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=65)** - But your one symbol is upside down whereas mine ended right side up because we rotated our spheres differently.
>
> **[1:12](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=72)** - Bingo, there's a bit more going on here. We can see the difference between Pauli-X and Y more clearly if we use our two gates again on a super position state. Let's begin the state halfway between zero and positive side of the X-axis.
>
> **[1:28](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=88)** - Okay, we're in the same starting state. I'll put my fingers along the X-axis and rotate my sphere.
>
> **[1:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=95)** - And I'll do the same along the Y-axis.
>
> **[1:38](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=98)** - It looks like my resulting state is halfway between one and the positive side of the X-axis, but yours ended up between one and the negative X-axis. So my quantum state stayed on the side of the sphere around the positive X-axis where the complex amplitudes are positive, while your quantum state flipped around to the opposite side of the sphere where the amplitudes are negative.
>
> **[2:01](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=121)** - Yep, measuring our two qubits would have the same outcome probabilities with a greater chance of collapsing to one than zero, but these are two distinct quantum states because they have different phases at different points of rotation around the Z-axis. In addition to flipping between zero and one, using the Pauli-Y gate also flip the phase of my quantum state. To see that another way, let's dig into the math behind it. The Pauli-Y gate is most commonly represented as a two by two matrix shown here with negative I in the top right corner and positive I in the bottom left corner. If we apply that gate to the cat zero state, we get an output vector whose first element is zero and the second element is I. Because the first element to zero, we can easily factor out that I which shows us the result of using the Pauli-Y gate on cat zero is I times cat one. So in addition to flipping the bit, the Pauli-Y gate also gave this state a phase factor of I. If we calculate the measurement probabilities for that resulting state, we can see that the [[Probability]] of measuring an outcome of zero is zero, and the probability of measuring a one is the absolute value of I squared, which equals one. Those are the exact same outcome probabilities as the regular one state, which means there is no physically observable differences between cat one and I times cat one. Then imaginary I on the front is just a global phase factor. Next, let's see what happens when we use the Pauli-Y gate on the one basis state. We can see the result that there is a vector with negative I
>
> **[3:36](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=216)** as a first element and zero as a second element. Again, since one of the elements is zero, we can easily factor out the negative I. So the result of using the Pauli-Y gate on cat one is negative I times cat zero. Calculating the outcome probabilities for that state gives us the same probability distribution as irregular zero state. This qubit will always be measured as zero. So we see that applying the Pauli-Y operation on one of our two basis states flips the bit and applies a global phase.
>
> **[4:09](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=249)** - Now let's look at what happens when we use that gate on a qubit in super position. If we use the Pauli-Y gate on an arbitrary quantum state with complex coefficients alpha and beta, the resulting vector has negative I times beta as the first element and I times alpha as the second element. We can factor out the I from that vector, but we cannot factor out the negative vector from beta. Written out using direct notation that resulting state vector looks like this. There are several things going on here so let's break it down piece by piece. This was our starting quantum state, cat I, and this is the result after using the Pauli-Y gate. The first thing to notice is that we've flipped the bits by swapping the two basis states, zero and one. Next is the I that we factored out which represents a global phase factor. I is equal to E to the power of I times pi over two. So the I on the front of this expression corresponds to a global phase factor of PI over two. Finally, we have the factor of negative one which is equivalent to E to the power of I times pi. That corresponds to a relative phase change of pi radiance or 180 degrees. So in addition to flipping this bit which swaps our quantum state between the top half and bottom half of the block sphere, the Pauli-Y gate also flips its relative phase which moves the state between the front side and the backside of the Bloch sphere.
>
> **[5:38](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=338)** - Now, you may have noticed in each of those examples the Pauli-Y gate added on a global phase factor of I. This is because Pauli-Y matrix has I's in the two non-zero positions.
>
> **[5:49](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=349)** - Can't we just ignore global phase though? Because it doesn't physically affect anything. It's just there as a mathematical artifact.
>
> **[5:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate?u=76281980&t=356)** - And some people do. In some textbooks, you may encounter this alternative version of the Pauli-Y matrix with all real values replacing the imaginary I's with ones. That's a bit simpler and looks less intimidating without the I's. However, there are some mathematical relationships between PauliX, Y, and Z matrices that break down without the imaginary values. That's a detail beyond the scope of this course, but to keep things proper, we'll be using the standard form of the Pauli-Y gate with the imaginary I's.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3)
> **Speakers:** - and (2), - now (2), - our (1), - hang (1), - well (1)
> **CLI Commands:** cat (8)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)

#### [Pauli-Y gate with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate-with-qiskit?u=76281980&t=0)** - [Instructor] Let's use Qiskit to explore the effects of the Pauli-Y gate on quantum states. Our starting point is a basic circuit which is initialized in the second notebook cell to have a single qubit. To use the Y gate on that qubit, we'll call the y function on that circuit, pass at the index of our one and only qubit, which is 0. I'll click the Run All button to run the notebook. That updates the quantum circuit diagram to include our Y gate, and on the Bloch sphere down below, our state has flipped from 0 to 1. Looking at the statevector, which is printed just above the Bloch sphere, we can see that the second complex coefficient is now i, representing the imaginary unit. So, as we discussed in the previous video, the Pauli-Y gate has applied a global phase in addition to flipping the bit. If we change the Pauli-Y gate to a Pauli-X gate and rerun the notebook, the Bloch sphere visualization doesn't change, it's still pointing straight down towards the one state. But now, the second element of the statevector is no longer imaginary, it's 1. So, using the Pauli-X and Y gates on the zero basis state produces mathematically different results with differences in global phase, but there are physically indistinguishable from each other, and both represented by the same point on the bottom of the Bloch sphere whose measurement outcome will always be 1. Now, to see how the Pauli-Y gate
>
> **[1:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-y-gate-with-qiskit?u=76281980&t=95)** affects a more interesting superposition state, let's expand our quantum circuit to include two qubits and then use the ry gate to initialize both of those qubits into a superposition state. Qiskit allows us to apply quantum gates to multiple bits using a single command by passing it a list of cubic indices enclosed in square brackets. I'll run those cells, and we can see that both qubits are put into the same superposition located halfway between zero and the positive side of the Bloch sphere's x-axis. Now let's add a Pauli-Y gate to our circuit applying it only to the second qubit. I'll rerun those cells one last time, and we can see side by side how the Pauli-Y gate changes that superposition going from the state shown on the left Bloch sphere with qubit 0 to the right Bloch sphere with qubit 1. Although it's tough to tell with the way these Bloch spheres are drawn, the state of qubit 1 is a point on the backside of the Bloch sphere halfway between one and the negative x-axis.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (1), previous video (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Pauli-Z gate](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=0)** - We've seen the Pauli-X and Pauli-Y gates. Which leaves us to talk about the third and final Pauli-Z gate. And as you can probably guess by now, the Pauli-Z gate corresponds to a rotation of Pi radians or 180 degrees around the Z axis of the block sphere. And you'll see it represented in our quantum circuit diagrams as a box with a letter Z in the middle. To apply the Pauli-Z operator to this qubit which is currently in the one basis state, I'll put a finger on each side of the Z axis and then rotate 180 degrees.
>
> **[0:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=33)** - That didn't do anything. Your qubit is still one.
>
> **[0:37](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=37)** - True, we started with one and ended with one. However, notice that now our label is upside down.
>
> **[0:44](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=44)** - I see, so something happened when you applied the Pauli-Z gate, but one and upside down one are the exact same point on the block sphere. There's nothing to distinguish those two quantum states, they're really just the same thing. Let's try another example, may I?
>
> **[1:01](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=61)** - Sure.
>
> **[1:04](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=64)** - Let's use the Pauli-Z gate on a qubit in this superposition state at the point on the sphere facing you. Halfway between zero and the positive side of the X-axis. I'll put my fingers along the Z-axis and then rotate the sphere 180 degrees. That puts us into a different superposition, halfway between zero and the negative side of the X-axis.
>
> **[1:27](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=87)** - Unlike the Pauli X and Y gates, which flip the bit between a top half and bottom half of the block sphere. When Baron applied the Pauli-Z gate our quantum state remained on the top half of the block sphere. So it has the same probabilities of measuring one or zero as before.
>
> **[1:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=102)** - However, the Pauli-Z gate did flip the phase of our quantum state, moving it from the front side of the block sphere to the backside.
>
> **[1:50](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=110)** - Let's take a look at the math behind that. The Pauli-Z operator is represented as a two by two matrix shown here, with one in the top left corner and negative one in the bottom right. When we use the operator on the zero basis state, the result is zero. The Pauli-Z gate has absolutely no effect on it. However, when we apply it to KET1, that negative one from the Pauli-Z matrix gets picked up. Which gives us a result of negative KET1. That negative factor out front is a global phase factor and there isn't any distinguishable difference between negative KET1 and positive KET1. They both represent the same state on the bottom of the block sphere.
>
> **[2:30](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=150)** - So using the Pauli-Z gate on either of the standard basis states doesn't really change anything. For the Poly Z gate to have any effect, our qubit has to be in a state that's somewhere not along the Z axis. If we use the Pauli-Z operator on the quantum state with complex coefficient Alpha and Beta the result is a state in which the Alpha coefficient is unchanged, but the sign of the Beta coefficient is negated. Which corresponds to flipping the qubit's relative phase by rotating it pi radians around the Z axis. Those are the basics of the Pauli-Z operator. And that completes our set of Pauli logic gates.
>
> **[3:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate?u=76281980&t=188)** - Before we go, let's review the effect of each Pauli operation when applied to a single qubit. Remember that the Pauli-X matrix will flip the bit, swapping the measurement probabilities between the two basis states. The Pauli-Y matrix flips the bit as well as the phase. And finally, the Pauli-Z matrix only flips the relative phase of the qubit, leaving its [[Probability]] distribution unchanged.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Speakers:** - let (2), - we (1), - that (1), - true (1), - i (1)
> **Env Vars:** ket1 (4)
> **Definitions:** is a  (2)

#### [Pauli-Z gate with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate-with-qiskit?u=76281980&t=0)** - [Instructor] The Qiskit method to add the Pauli-Z gate to a quantum circuit is similar to the methods for adding X and Y gates. To demonstrate that, we'll start with a single qubit in its initial zero computational basis state. Notice that the first element of our state vector has the real value one and that all numbers within that state vector are positive. This is the plain and simple zero basis state. Now let's apply the Pauli-Z operation to it by calling circuit.z and then passing in the index value zero for the first qubit. I'll click the Run All button to run all of these notebook cells and the state vector after applying the Pauli-Z gate is exactly the same as before. We went from the zero state to the zero state. Nothing too exciting. Now let's see what happens when we apply the Pauli-Z gate to a qubit in a state other than one of our computational basis states of zero or one. To create a side-by-side demonstration, let's expand our circuit to have two qubits and then use the ry gate to put both of those qubits into a super position. Then, after putting both qubits into the same super position, let's apply the Pauli-Z gate to the second qubit. I'll change the index to do that. Now I'll press the Run All button to run the notebook with those changes.
>
> **[1:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/pauli-z-gate-with-qiskit?u=76281980&t=95)** Now we can see what that superposition state looks like before applying a Z gate from the Bloch sphere on the left and then what it looks like after applying the Z gate from the Bloch sphere on the right. Notice that the Z gate does not flip the [[Probability]] so our quantum state vector stays on the top half of the Bloch sphere closer to zero, but it does flip the phase, which rotates our vector 180 degrees around the z-axis from the front side of the sphere to the back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Binary numbers](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-binary-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-binary-numbers?u=76281980&t=0)** - It's time for another challenge. Most quantum programs start by encoding some classical binary bits of data into a set of qubits before using quantum operations to process that information. So for this challenge, we're going to do just that. Your goal is to write a Qiskit program that initializes a new QuantumCircuit with four quantum bits. Then using the poly-logic gates, configure those four qubits into the basis state 1, 1, 0, 1. As a reminder, by convention, the least significant qubit at index zero is on the far right and the most significant bit, index number three is on the left. We've included this partial program in the exercise files, which you can option optionally use as a starting point. Replace the comment in the second cell with your code. If you use the variable name circuit in all lower case when defining your quantum circuit, then you should be able to execute this notebook. If your circuit is correct, the final cell should display a QSphere. The QSphere is another visualization tool in Qiskit that we have not used yet. It plots a Quantum State as points on a sphere where the size of each point is proportional to the [[Probability]] of measuring that outcome, and the color of the point represents its phase. Since our desired state is 1, 1, 0, 1, if you've initialized your circuit correctly, the QSphere should just display a point for that single state, as shown here.
>
> **[1:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-binary-numbers?u=76281980&t=93)** Take some time to solve this challenge, then watch the next video to see how we approached it. Good luck!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)
> **Speakers:** - it (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Binary numbers](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-binary-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-binary-numbers?u=76281980&t=0)** - Let's talk through how we approach the challenge to encode a binary value into a set of qubits. Since Qiskit initializes all qubits in the cat 0 basis state, we'll need to use either the Pauli-X or Pauli-Y gates to flip some of those bits to represent the desired value. The Pauli-Z gate is not going to be of any use for this challenge, so we can forget about it. To determine which bits need to be flipped, we looked at the location of the ones in the desired end state. The first, third, and fourth qubits in the cat 1101 needs to be flipped, which corresponds to the index values 0, 2, and 3, because [[Python (Programming Language)|Python]] uses zero indexing. To build the code, I started by initializing a new quantum circuit with four qubits and assigning it the variable name circuit. (keyboard clicking) Next, I added the Pauli-X gate to the circuit, and called it on the three qubit indexes I identified: 0, 2, and 3. (keyboard clicking) Finally, though not part of the challenge, I used the draw function to see what that looked like as a quantum circuit diagram. That's all there is to my solution. I'll click the run all arrow to run this entire notebook. We can see the result in quantum circuit,
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-binary-numbers?u=76281980&t=94)** which applied X gates on qubits 0, 2, and 3, and below that the q-sphere shows the only possible outcome when measuring those four qubits is the desired state 1101. If you had fun with this challenge and want some additional practice, try encoding other values into your qubits. For example, encode a binary representation of your age into a set of qubits. Depending on how old you are, that may require more qubits than we used here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** cat (2), python (1)
> **Non-Speech:** (keyboard clicking) (2), (upbeat music) (1)
> **Analogies:** for example (1)
> **Speakers:** - let (1)


### 4. Single-Qubit Superposition Gates

[↑ Back to Table of Contents](#table-of-contents)

#### [Hadamard gate](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate?u=76281980&t=0)** - The three Pauli gates we've seen thus far are incredibly useful and you'll see them used throughout quantum programs. But if those are the only three gates we have to use it's impossible for us to take a qubit, which is initialized in the zero state, and put it into any state other than zero or one. That's not any different than working with classical bits. The Pauli gates are often used to initially set up or encode classical information into a few qubits at the beginning of a quantum program but to then transition our qubits into more interesting states of super position we're going to need a few more gates.
>
> **[0:36](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate?u=76281980&t=36)** - The most common gate for converting a qubit from one of the two basis states into a super position is the Hadamard gate named after the French mathematician Jacques Hadamard. Unlike the Pauli gates, which rotate around one of the major axes, x, y, and z, the Hadamard gate rotates our quantum state by pi radians or 180 degrees around the Bloch sphere vector [1 0 1] which is the vector pointing halfway between the x-axis and the z-axis. In our quantum circuit diagrams, you'll see the Hadamard gate represented as a box with the letter H in it. So what does that look like to rotate around that vector on the Bloch sphere?
>
> **[1:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate?u=76281980&t=75)** - Let's use our Bloch sphere beach ball to visualize it. To apply a Hadamard gate, I'll put my finger on the point halfway between the zero state, which is at the top of the z-axis and the positive side of the x-axis. Then I'll place another finger on the opposite side of the ball. This will be our axis for rotation, which is at a 45 degree angle. Starting with our qubit in the zero state, I'll rotate it 180 degrees and that transitions us to the superposition state at the positive side of the x-axis. If I applied the Hadamard gate a second time on this quantum state, that rotates us another 180 degrees which brings us back to zero. So the Hadamard gate is its own inverse. Applying it twice in a row brings us back to where we started.
>
> **[2:02](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate?u=76281980&t=122)** - To apply the Hadamard gate to a qubit starting in the one state, Baron will put his fingers along the same vector as before then rotate the sphere 180 degrees, and that transitions us from one to the negative side of the x-axis. This is clearly a quantum gate because it takes our classical basis, states one and zero, and puts them into a superposition.
>
> **[2:27](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate?u=76281980&t=147)** - Let's look at that operation mathematically. The two by two matrix shown here represents the Hadamard gate. Notice that, unlike the three Pauli matrices we saw in previous videos, the Hadamard gate does not have any zero elements in it. Factoring out the scalar value of one over the square root of two makes it a little easier to see what's going on here. If we apply this Hadamard gate to a qubit in the zero basis state, that produces a matrix with one over the square root of two as both elements. We can write that using Dirac notation as the sum of ket zero and ket one over the square root of two. We'll refer to this state as ket plus, which is located at the positive end of the x-axis on the Bloch sphere. When we measure a qubit in this state, the [[Probability]] of a zero outcome is the absolute value of one over the square root of two squared, which is one half. Along the same lines, the probability of measuring that qubit and getting an outcome of one is also one half. Measuring this quantum state in our standard basis is like flipping a coin between one and zero.
>
> **[3:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate?u=76281980&t=213)** - [Speaker 2] If we apply the same Hadamard gate to a qubit starting in the one basis state, the product is slightly different. Both elements of the state vector are one over the square root of two but now the bottom element is negative. That corresponds to a point on the Bloch sphere at the negative end of the x-axis which we'll represent in equations with the ket minus symbol. Measuring a qubit in this superposition state has a one half chance of resulting in a zero outcome and an equal probability that the outcome will be one. Applying the Hadamard gate to each of our two basis states results in one of two superpositioned states that look similar when measured.
>
> **[4:11](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate?u=76281980&t=251)** - However, they are distinct states with different phases that put them on opposite ends of the Bloch sphere's x-axis. The Hadamard gate is significant because it can transition our qubits from the classical realm of ones and zeros into the quantum realm of superposition which is where the magic really happens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3)
> **Speakers:** - the (2), - let (2), - to (1), - [speaker (1), - however (1)
> **Prerequisites:** set up (1)

#### [Hadamard gate with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate-with-qiskit?u=76281980&t=0)** - Let's explore the Hadamard gate in action with qiskit. I've already imported qiskit and the visualization tools we'll be using at the top of the notebook, and in the second cell I've initialized a quantum circuit with one qubit and one classical bit. However, as we can see from the circuit diagram it does not perform a measurement on that qubit. The third and fourth cells simulate the circuit's state vector and then print that out along with its block sphere representation. After that, I add a measurement to the end of that circuit and redraw its diagram. Then finally, I use the chasm simulator to simulate the circuit and plot a histogram of outcomes. Since it's just a single qubit in the initial zero state we always get zero as the measured output. Now let's add the Hadamard gate to that qubit by calling circuit.h and then passing in the index value zero. I'll click the run all button to rerun this entire notebook and now we can examine that qubit after applying a Hadamard gate. Notice that both [[Probability]] amplitudes in the printed state vector are now the same. They're both one over the square root of two. Below that, we can see that on the block sphere the state vector is represented as an arrow pointing along the positive side of the x axis. Finally, down at the bottom, we can see that measuring that qubit gave us roughly equal probabilities of each outcome. Now let's insert a poly-X gate to flip the
>
> **[1:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/hadamard-gate-with-qiskit?u=76281980&t=95)** initial zero state to one before we apply the Hadamard operator. I'll run the notebook again. And now we see that the state vector on the block sphere points backwards towards the negative side of the X-axis. Also, notice that the second element of the printed state vector just above that is now negative one over the square root of two. However, if we look at the simulated measurements of that qubit, we see that it still has an equal chance of either outcome the same as before. So from a measurement standpoint, this quantum state with the state vector pointing along the negative X-axis of the block sphere is indistinguishable from the previous state when the state vector pointed to the positive X axis. At least we cannot tell those states apart when measuring in the standard basis which only gives us an outcome of zero or one. Now for one last demonstration, let's apply the Hadamard gate a second time right after the first one remember that the Hadamard gate is its own inverse so applying it twice in a row will reverse the operation. I'll run this notebook. And now we see that the resulting state is one because the two consecutive Hadamard gates have effectively canceled each other out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **File Paths:** circuit.h (1)
> **Speakers:** - let (1)

#### [Measurement on an arbitrary basis](https://www.linkedin.com/learning/quantum-computing-fundamentals/measurement-on-an-arbitrary-basis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/measurement-on-an-arbitrary-basis?u=76281980&t=0)** - Now that we have the Hadamard gate and our bag of quantum tools, it's time to revisit the fundamental concept of measurement. So far in this course, we've always measured our qubits in the standard computational basis, composed of the states zero and one. Measuring a quantum state in that basis means we'll only observe either zero or one, each of which occurs with some [[Probability]]. Since we represent those two states on opposite ends of the Bloch sphere's z-axis, this type of computational basis measurement is often called a Z measurement. But remember, from a mathematical standpoint, zero and one are not the only pair of basis states. Any two points on opposite sides of the Bloch sphere correspond to orthogonal state vectors which together form a valid pair of basis states. That means there's an infinite number of possible bases we can use to represent and measure a quantum state beyond just zero and one.
>
> **[0:53](https://www.linkedin.com/learning/quantum-computing-fundamentals/measurement-on-an-arbitrary-basis?u=76281980&t=53)** - When we measure a quantum state, we can only extract a classical bit worth of information, giving us one of two outcomes. When we perform a standard z-axis measurement, it's like asking the question, is this quantum state ket one or zero? Well, what if we want to ask a different question with our measurement? Maybe we want to know if our qubit is in the ket plus or minus states which form a different basis pair along the x-axis. As we've seen in previous videos, performing a z-axis measurement on the plus state has an equal probability of measuring zero or one, and after that measurement, the qubit will no longer be in that previous superposition. That measurement doesn't help answer the question, was our qubit in the plus or minus state? Because if it had been in the minus state, we would've had the same equal probability of those outcomes. To answer our question, we'll need to measure our qubit in a different basis. If we measure its state along the x-axis instead of the z-axis, now we're looking at whether it's in the plus or minus state, which together form an alternate basis. So if our qubit is in the minus state, then the outcome of the x-axis measurement, we'll always see it as minus. Likewise, if it's in the plus state, the x-axis measurement outcome will always be plus. However, if our qubit is in the zero state when we perform the x-axis measurement, we'll have an equal probability of getting either plus or minus as the outcome. Measuring a qubit in a different basis does not give us more information about its quantum state. It just gives us different information.
>
> **[2:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/measurement-on-an-arbitrary-basis?u=76281980&t=149)** - If we want to represent measuring in a different basis mathematically, we can do so easily by using Dirac notation. For example, the probability of measuring in arbitrary quantum state ket psi as the ket plus state is equal to the absolute value squared of the inner product bra plus times ket psi. If the qubit we were performing an x-axis measurement on was in the zero basis state, since our inner product of bra plus and ket zero is one over the square root of two, then the the probability of measuring it as ket plus is 1/2. The ket zero state has an equal probability of collapsing to ket plus or ket minus when measured in relation to the x-axis. If the qubit we were measuring was in the ket one state, then the probability of measuring it as ket plus would also be 1/2. However, if the state we were measuring was already ket plus, then the inner product of bra plus and ket plus is one which gives us 100% probability of measuring it as ket plus. Likewise, the probability of measuring the ket minus state as ket plus is zero because the inner product of bra plus and ket minus is zero. That's the concept of measuring in an arbitrary basis, but in practice, real quantum computers can usually only measure the difference between two physical states which serve as our computational basis along the z-axis.
>
> **[3:51](https://www.linkedin.com/learning/quantum-computing-fundamentals/measurement-on-an-arbitrary-basis?u=76281980&t=231)** - Can we actually measure a real qubit in another basis?
>
> **[3:54](https://www.linkedin.com/learning/quantum-computing-fundamentals/measurement-on-an-arbitrary-basis?u=76281980&t=234)** - Maybe not directly but we can simulate arbitrary measurements. By applying a rotational gate right before performing a Z measurement, we can manipulate our qubit to effectively choose which basis we're measuring it in. For example, to simulate a measurement along the x-axis we'll apply a Hadamard gate in front of our Z measurement. That rotates the qubit such that what was the x-axis is now effectively the z-axis. So if the qubit we intend to measure is in the plus state, applying that Hadamard gate will rotate it to the zero state and then the final Z measurement will always give us an outcome of zero. And from that information, we know that our qubit was in the plus state before we applied that Hadamard gate. Along those lines, if it had originally been in the minus state, then applying the Hadamard gate would've rotated it to the one state which we would've then seen as the measurement outcome. Finally, notice that if we perform a simulated x-axis measurement on a qubit in one of the computational basis states, such as ket one, that process rotates the qubit into superposition along the x-axis, so we will no longer be able to tell what the qubit's original state was from the Z measurement result. This concept of measuring in arbitrary basis may seem like a quantum novelty at first glance. Sure, it's cool that we can do that, but why is it useful?
>
> **[5:14](https://www.linkedin.com/learning/quantum-computing-fundamentals/measurement-on-an-arbitrary-basis?u=76281980&t=314)** - As we'll see near the end of this course, when we write a quantum algorithm, we encode and process information using various states of superposition. At the end of an algorithm, the result of that computation may be stored in a different basis. To extract an answer, we might want to know whether the qubit ended up in the plus or minus state. So to get that final information, we'll use additional logic gates to simulate measuring in the necessary basis.
>
> **[5:41](https://www.linkedin.com/learning/quantum-computing-fundamentals/measurement-on-an-arbitrary-basis?u=76281980&t=341)** - In this video, we changed our measurement basis from the z-axis to the x-axis but there are countless other pairs of basis states we could use to measure a qubit. As we learn about more quantum logic gates for rotating a single qubit over the next few videos, think about how those gates could be used to simulate measuring in other possible bases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (10)
> **Speakers:** - now (1), - when (1), - if (1), - can (1), - maybe (1)
> **Analogies:** for example (2), it's like (1), such as (1)

#### [Phase shift gates](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=0)** - So far, we've taken our qubits to one of four quantum states. Our two computational basis states, zero and one, and we've used the Hadamard gate to transform those into superposition states at both sides of the x-axis. But there's a lot more surface area on this Bloch sphere, so how do we move our qubits into some of those other possible superpositions?
>
> **[0:23](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=23)** - Well, one way to play with the quantum state is to apply a phase shift, rotating a qubit around the z-axis. We've already seen one type of phase shift gate, the Pauli Z gate, which rotates our qubit 180 degrees around the z-axis. That can transition our qubit from the positive x state to the negative x state. And if we apply it a second time, that brings us back to the positive x.
>
> **[0:49](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=49)** - Both of those rotations passed over the y-axis so how can we transition to a state there?
>
> **[0:55](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=55)** - For that, we'll use a new gate called the S gate, which applies a phase shift of pi over two radians, rotating our qubit one quarter turn around the z-axis. So starting with the positive x state, the S gate will rotate our qubit a quarter turn to the positive y state. Looking at the math behind that, the S gate is represented by the matrix shown here with the elements 1 and i along the diagonal. You may also see it written using exponential notation to represent the imaginary number. These two matrices mean the same thing, just using different formats. If we apply the S gate to the ket plus state, which is the positive end of the Bloch sphere x-axis, that changes the second element of the state vector to i over square root of two. That puts us in the ket+ i state which is a positive end of the y-axis.
>
> **[1:46](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=106)** - What happens if you apply the S gate again?
>
> **[1:49](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=109)** - Well, that's another core return in the same direction, which brings us around to negative X state.
>
> **[1:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=116)** - So applying the S gate twice took us from positive X to positive Y, and then from positive Y to negative X. That means the S gate is not its own inverse.
>
> **[2:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=128)** - You're catching on. Unlike all the gates we've previously seen, since the S gate only shifts the phase by pi over two radians, which is a 90 degree quarter turn, using it twice rotates the state by pi radians, which is a 180 half turn around the Bloch sphere. In fact, if we look at the product of multiplying the S gate matrix by itself, we can see that the resulting matrix is equivalent to the Poly Z gate, which is a 180 degree phase shift around the z-axis.
>
> **[2:39](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=159)** - Seems simple enough. So if I want to shift the phase of a qubit by three pi over two radians, which is 270 degrees or three quarters turn, does that mean I should simply use that S gate three times in a row?
>
> **[2:52](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=172)** - Well, that will technically work, but it'd be more efficient to simply shift the phase by a quarter turn in the other direction. We can do that by using the S-dagger gate, which rotates a qubit by negative pi over two radians around the z-axis. It's represented by the matrix shown here, which is the conjugate transpose of the regular S gate matrix. Notice that the i in the bottom right element is now negative. You may also see it written like this using the exponential notation. If we multiply the regular S gate by the S-dagger gate, their product is the identity matrix, which does nothing. So when used back to back, these two gates should cancel each other out.
>
> **[3:32](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=212)** - Seeing the relationship between the S and S-dagger gates reminds me of another important pair of phase shift gates, The T and T-dagger gates. Instead of rotating by pi over two radians around the z-axis like the S gates, the T gates shift the phase by pi over four radians around the z-axis. That means the T gate rotates our Bloch sphere beach ball by an eighth of a turn.
>
> **[3:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates?u=76281980&t=236)** - As you might expect, the T-dagger gate rotates the Bloch sphere by the same amount in the opposite direction. Looking at the matrix representations of those four S and T gates side by side makes it easy to see how they relate to each other. The S and S-dagger gates rotate by pi over two and negative pi over two radians around the z-axis respectively. And exponents in the T and T-dagger gate matrices show that they each shift the phase by pi over four radians in their respective directions.

> [!info]- Semantic Content
>
> **Speakers:** - well (3), - so (2), - both (1), - for (1), - what (1)
> **Definitions:** is a  (4)

#### [Phase shift gates with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates-with-qiskit?u=76281980&t=0)** - [Olivia] To demonstrate some of the phase shift gates with Qiskit, we'll use this simple circuit, which initializes three qubits with Hadamard gates. On the block spheres below, we can see that that means all three of their state vectors are pointing in the same direction along the X-axis. Now, to apply an S-gate to the middle qubit, I'll type circuit.s and give it the index of 1. While we're at it, let's go ahead and apply an S-dagger gate to the last qubit by typing circuit.sdg with an index of 2. I'll click the Run All button to run all the cells and we can see the updated circuit diagram and visualizations on the block spheres. Remember that the left qubit shows the state that all three qubits were in before we applied the S-gates. The S-gate phase shifted the middle qubit by pi over two radians, which rotated it 90 degrees counterclockwise around the Z-axis, and the S-dagger gate phase shifted the third qubit by negative pi over two radians, rotating it in the other direction, clockwise around the Z-axis by 90 degrees. Now, let's change those S and S-dagger gates into T and T-dagger gates. I'll press Shift + Enter twice to rerun all those cells and now those qubits are phase shifted in the same relative directions as before,
>
> **[1:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/phase-shift-gates-with-qiskit?u=76281980&t=93)** but only by half as much. The T gate rotated the middle qubit counterclockwise by 45 degrees, or pi over four radians, and the T-dagger gate rotated the last cubit by negative pi over four radians in the other direction. This family of S and T gates is commonly used to phase shift cubits by these standard amounts.

> [!info]- Semantic Content
>
> **Speakers:** - [olivia] (1)

#### [Parameterized rotation gates](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=0)** - The family of S and T gates, the Hadamard gate and the Pauli X, Y, and Z gates, let us rotate qubits by common fixed amounts. We can do a lot with those gates, but there's still a lot of Bloch sphere we haven't visited yet. What if we want to put this qubit into a super position between the z and y-axes?
>
> **[0:18](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=18)** - Easy; to get there, we can use a parameterized rotation operator. These parameterized gates let us rotate our qubit state by an arbitrary number of degrees or radians around one of the three major axes. They're symbolically represented in quantum circuit diagrams as Rx, Ry, and Rz blocks which indicate the number of radians for rotation.
>
> **[0:40](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=40)** - So with a qubit starting in the zero state, if we apply the Rx gate to rotate it by pi over four radians, which is 45 degrees, that rotates the qubit around the x-axis transitioning it to a state halfway between cat zero and the negative side of the y-axis.
>
> **[0:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=56)** - Exactly, and if instead of rotating it by positive pi over four, you rotate it by negative pi over four, that would spin the Bloch sphere in the opposite direction around the x-axis.
>
> **[1:06](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=66)** - Okay, that seems straightforward enough. These parameterized gates let us apply an arbitrary amount of rotation around any of the three major axes. What do these gates look like mathematically?
>
> **[1:18](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=78)** - Brace yourself, because these are a bit more complicated than the gates we've seen thus far. That's because they're generalized expressions to rotate the quantum state by any amount. The Rotate x or Rx gate is represented by this two by two matrix of sine and cosine expressions and the Rotate y gate is a slight variation on that equation without the imaginary numbers. In both expressions, the variable theta determines how many radians to rotate around the x or y-axis on the Bloch sphere. Now, the Rz gate looks a little bit different represented by this two by two matrix with exponential expressions. Instead of theta, we've used the variable five here to indicate that Rz gate applies the rotation around the z-axis which only affects the phase of a qubit.
>
> **[2:04](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=124)** - If we use one of these rotation gates, let's say Rx to rotate pi radians or 180 degrees around the x-axis, isn't that just the same as applying the Pauli X gate?
>
> **[2:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=135)** - Kind of, but not quite. In terms of how we visualize quantum states on the Bloch sphere, using the Rx gate to rotate pi radians flips our qubit in the same way as a Pauli X gate. However, the math used to describe those two operations is slightly different. If we take the Rx matrix and substitute pi for theta, those sines and cosines evaluate to this matrix containing zeros and negative i's.
>
> **[2:40](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=160)** - That reminds me of the matrix for the Pauli X gate, but slightly different.
>
> **[2:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates?u=76281980&t=165)** - Exactly. If we factor out that negative i, we do get the Pauli X matrix. So using the Rx gate to rotate our qubit by pi radians is equal to negative i times the X gate. If we walk through a similar process to evaluate the Ry gate for a rotation of pi radians, we see that it's equals i times the Y gate. And along those lines, using the Rz gate to rotate by pi radians is equal to negative i times the Z gate. These factors of i and negative i represent another example of a global phase. They're just mathematical artifacts that don't affect the quantum state in an observable way.

> [!info]- Semantic Content
>
> **Speakers:** - exactly (2), - the (1), - easy (1), - so (1), - okay (1)
> **CLI Commands:** cat (1)
> **Definitions:** is a  (1)

#### [Parameterized rotation gates with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates-with-qiskit?u=76281980&t=0)** - [Instructor] To explore the family of rotational gates in Qiskit, we'll use this simple circuit with three qubits all starting in the initial zero basis state. Notice that in the top notebook cell, in addition to the usual import statements we've seen, I've also imported pi from the math module because we'll be using that value to specify our rotations. Now, let's apply an x rotation gate by typing circuit.rx. The first parameter is how much we want to rotate around the x-axis. Let's say that's pi over three radians, which is 160 degrees, and then we'll apply that to the first qubit at index zero. Now for the middle qubit, let's perform a similar amount of rotation, but instead of rotating around the x-axis, we'll use the ry gate to rotate that same amount around the y-axis. And likewise, we'll use the rz gate to rotate the last qubit by pi over three radians around the z-axis. I'll press the Run All button to rerun this entire notebook and then we'll look at the Bloch sphere representations down below. It can be a little hard to tell exactly where the state vectors are pointing on this two-dimensional image of a three-dimensional Bloch sphere, but we can definitely see there's a difference in the results of those three gates, which all rotated our states by pi over three radians. The rx gate rotated the first qubit 60 degrees around the x-axis.
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/parameterized-rotation-gates-with-qiskit?u=76281980&t=94)** The ry gate rotated the middle qubit the same amount around the y-axis. And since these qubits started in the zero basis state, rotating the third qubit around the z-axis didn't cause any noticeable change. To better see what the rz gate is doing, let's insert a Hadamard gate before it. I'll rerun that notebook. And now we can see that the rz gate rotated the third cubit away from the x-axis following that Hadamard gate. The input parameters for these rotational gates are in units of radians and I've used the value of pi in my input expressions. However, we can pass in whatever number we want. For example, let's modify the rx gate to rotate the first qubit by two radians. Two radians is slightly less than two pi over three radians, so we should expect to see this qubit rotate just under 120 degrees. These input parameters can also be negative, so let's flip the sign on the ry gate to rotate it by negative pi over three. I'll rerun those cells and we can see the results of those changes. These three rotational gates are handy tools for initializing a qubit into a specific state of super position. I recommend taking some time to play around with this example to get comfortable using them.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Single-qubit gates on multi-qubit states](https://www.linkedin.com/learning/quantum-computing-fundamentals/single-qubit-gates-on-multi-qubit-states?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/single-qubit-gates-on-multi-qubit-states?u=76281980&t=0)** - We've applied several different single cubic gates in isolation to one qubit at a time. But what if we want to apply one of those gates to a qubit that's part of a multi-qubit system? For example, let's say we have a quantum circuit with two qubits. They're both initialized in the zero basis state, and we want to apply an X gate to one of those qubits. That operation is easy to understand by looking at the circuit diagram, but let's consider how to accomplish that mathematically. The polyX operator is represented as a two-by-two matrix and the initial state vector for our pair of cubits is a four by one matrix. We can't simply multiply the X-Matrix, and state vector like we've been doing in previous videos because the inner dimensions don't match. These two matrices cannot be directly multiplied together. Conceptually, it also makes sense that regular X gate can't be used here because there's nothing to indicate which of those two qubits is the one being flipped.
>
> **[0:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/single-qubit-gates-on-multi-qubit-states?u=76281980&t=56)** - We need to turn that two-by-two polyX matrix into a four-by-four matrix operator that we can apply to our multi-qubit state vector, and to do that, we'll need a new math tool. Th Kronecker Product is an operation that takes two matrices of arbitrary sizes, and produces a block matrix as its output. The term block matrix means a matrix that can be interpreted as a collection of blocks or subsections. The Kronecker is a generalization of the common outer product operation, but instead of operating on two vectors, it works with matrices. It's denoted by the same X in a circle symbol as the outer product. Now, to understand how that operation works, let's calculate the Kronecker Product of these two matrices, which both have dimensions of two-by-two. The first part of the resulting matrix, takes the top-left element of the left input matrix, and multiplies it against the entire right input matrix. The next part is the top-right value of the left input matrix multiplied against once again, the entire right input matrix. That pattern continues to produce the bottom left part, of the result and the bottom right part. We can think of each of these four parts as subsections of the resulting block matrix. The right input matrix is replicated in the four quadrants and scaled by the corresponding values of the left input matrix. If we distribute those scaler values into those subsections, we end up with this four-by-four matrix. Now, let's use that Kronecker Product to build the quantum operator we'll need for our circuit.
>
> **[2:28](https://www.linkedin.com/learning/quantum-computing-fundamentals/single-qubit-gates-on-multi-qubit-states?u=76281980&t=148)** We only want to apply the X gate to the second qubit, but the Kronecker Product requires two inputs. So to fill in that gap, we'll apply the identity gate to the first qubit. This acts as a placeholder, which has no effect on the qubit state. In the Kronecker Product, the gate operating on the second qubit is our left upper end, and the operation on the first qubit is the right upper end. Looking at the resulting four-by-four matrix, notice that the identity matrix is replicated in the top right and bottom left corners, and all of of the other matrix elements are zero. To simplify notation, you may see such a block matrix written like this with eyes to indicate identity matrices. Keep in mind, even though it looks like a two-by-two matrix with that simplified notation, it's really still a four-by-four matrix under the hood. Looking at that simplified form makes it easy to see that the identity matrices in the output are arranged similar to the ones in the polyX matrix. Now, let's finally apply this new operator we just built to our two qubits both starting in the zero state. Multiplying those together results in a four-by-one state vector with a one in the third position. That corresponds to the one zero basis state, which means we've successfully applied the polyX gate to the second of our two qubit pair while leaving the first qubit alone. This process, using the Kronecker Product is how we can build operators that apply single qubit gates to multi-qubit state vectors.

> [!info]- Semantic Content
>
> **Code Identifiers:** polyx (4)
> **Definitions:** is a  (2), is an  (1)
> **Speakers:** - we (2)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### [Challenge: Random numbers](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-random-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-random-numbers?u=76281980&t=0)** (inquisitive music)
>
> **[0:05](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-random-numbers?u=76281980&t=5)** - We've learned about several quantum gates that can put a single qubit into arbitrary states of superposition, so I think it's time for another challenge. Your goal will be to take a new quantum circuit with three qubits and then use single qubit gates to configure their state such that when you measure those three qubits, they'll have roughly the outcome distribution shown here with a 37.5% [[Probability]] of measuring those three qubits as 001 or 011, and a 12.5% chance of measuring them as 101 or 111. This challenge is a bit of a puzzle. You'll need to work backwards from those measurement results to figure out a set of quantum states that might have produced them. Now, don't get too caught up in trying to match those probabilities exactly. As long as your quantum circuit puts those three qubits into states with roughly the same distribution of those four outcomes, you've achieved the intent of this challenge. To give you a starting point, we've included this simple framework which creates a new quantum circuit with three qubits in the second notebook cell. You can replace the comment after that with your code to configure those qubits before the program calls the measure_all method on the circuit. As its name suggests, the measure_all method adds a measurement operation to all qubits in the circuit, and then by default it creates a new register of classical bits to store the results. There are technically an infinite number of potential solutions to this challenge, but for starters see if you can find at least one.
>
> **[1:39](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-random-numbers?u=76281980&t=99)** Take some time to solve the problem then watch the next video to see how we approached it. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Prerequisites:** configure (2), you'll need (1)
> **Code Identifiers:** measure_all (2)
> **Versions:** 37.5 (1), 12.5 (1)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)

#### [Solution: Random numbers](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-random-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-random-numbers?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-random-numbers?u=76281980&t=5)** - [Instructor] Let's talk through how we approach the challenge to put three qubits into quantum states with a specific outcome distribution. Since each of the qubits are independent of each other, we can think about them one at a time. First, looking at the four possible outcomes, notice that the first qubit at index zero is always measured as one, meaning that qubit needs to be completely flipped from its initial zero state. So let's insert a Pauli-X gate into our quantum circuit to do that. Next, looking at just the second qubit, we can see that 50% of the time, it has an outcome of zero, and 50% of the time, its outcome is one. That means the second qubit needs to be at an equal superposition between these zero and one states and we can accomplish that by applying a Hadamard Gate to it. Now, shifting focus to the third qubit, while looking across these four possible outcomes, if we add together the probabilities of measuring zero, they total 75% and there's a 25% chance of measuring that qubit as one. That means we'll need to apply a rotation that puts it in a super position with a higher [[Probability]] of measuring a zero outcome than one. I chose to accomplish that by using a parameterized gate to rotate the third qubit by pi over three radians around the y-axis. Here you can see my code to produce that circuit with the Pauli-X, Hadamard and Y-Rotation Gates applied to the corresponding qubits.
>
> **[1:39](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-random-numbers?u=76281980&t=99)** When we simulate that circuit for a million shots, we can see the four desired outcome probabilities on the histogram. If you came up with a different set of gates to solve that challenge, great. In theory, there are an infinite number of possible solutions. So if you enjoyed this challenge, I encourage you to take a few minutes to think of other sets of gates that could be used to achieve the same outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 5. Multi-Qubit Gates

[↑ Back to Table of Contents](#table-of-contents)

#### [Controlled-NOT (CNOT) gate](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=0)** - Thus far, we've only explored the quantum state of one qubit at a time.
>
> **[0:04](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=4)** - Sure, we've built circuits with multiple qubits, but those qubits have all been completely independent with the state of one qubit having no impact on any of the other qubits.
>
> **[0:14](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=14)** - To build quantum programs that do more than just generate random numbers, we need to create interactions and dependencies between multiple qubits.
>
> **[0:22](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=22)** - It's time to add another quantum gate to our bag of tools. The controlled NOT gate is a quantum operation involving two qubits, which conditionally flips the state of a target qubit by performing a Pauli-X operation if and only if the state of the other controlled qubit is one. You'll usually see this gate abbreviated as CNOT, though sometimes you may see it referred to as CX, which stands for controlled X gate. The CNOT gate is represented in circuit diagrams with the symbol shown here which connects the two qubits involved with a line between them. The smaller dot symbol indicates the control qubit, and the larger circle with a plus symbol indicates the target qubit. Let's demonstrate that CNOT operation using our Bloch sphere beach balls.
>
> **[1:07](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=67)** - My qubit will be the control qubit.
>
> **[1:09](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=69)** - I guess that means I'm the target.
>
> **[1:11](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=71)** - We'll represent the CNOT gate with a piece of string between our qubits.
>
> **[1:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=75)** - When we apply the gate, since Olivia's control is zero, I don't do anything to my target qubit.
>
> **[1:22](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=82)** - But if I'm in the one state when we apply that gate...
>
> **[1:26](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=86)** - Then my qubit gets flipped. Notice that in both cases, Olivia's control qubit was left unchanged. Since that state information is preserved by the operation, the CNOT gate is easily reversible.
>
> **[1:40](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=100)** - If we apply that gate another time...
>
> **[1:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=102)** - That flips my state again.
>
> **[1:44](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=104)** - And now we're back to where we started. Mathematically, the CNOT gate can be represented as a four by four matrix seen here. Notice that the top left quadrant resembles an identity matrix with ones along the main diagonal, and the bottom right quadrant is similar to the Pauli-X matrix. Now, if we apply the CNOT gate to a pair of qubits in the zero-zero state, since the qubit in the control position is zero, the result is unchanged; it's zero-zero. Along the same lines, if we apply the CNOT gate to the zero-one state, since the control bit is still zero, the result will also be the same, zero-one. However, if we apply the CNOT to the one-zero state, since now the control bit is one, the target bit will be flipped on the output, resulting in the one-one state. And along the same lines, if we apply CNOT to the one-one state, the target qubit will be flipped in the result, leaving us with one-zero.
>
> **[2:39](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate?u=76281980&t=159)** - This CNOT gate is just the first of several quantum gates we'll learn about to operate on multiple qubits.

> [!info]- Semantic Content
>
> **Speakers:** - thus (1), - sure (1), - to (1), - it (1), - my (1)
> **Env Vars:** cnot (11)
> **Definitions:** is a  (1), stands for (1)

#### [Controlled-NOT (CNOT) gate with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate-with-qiskit?u=76281980&t=0)** - [Instructor] To demonstrate the controlled-NOT gate with Qiskit, I've initialized a simple quantum circuit with two qubits. By default, these two new qubits will be initialized to the 0-0 state, and we can see that below on the simulated block spheres. Now, to apply a C-NOT gate, I'll type circuit.cnot.
>
> **[0:23](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate-with-qiskit?u=76281980&t=23)** And then for the first parameter, I'll provide the index of the qubit to use as the control, which will be qubit zero. And the second parameter is the target qubit, which will be one. I'll click the run all button to rerun this notebook. And we can see the updated circuit diagram, which now includes a C-NOT gate, with the first qubit as the control and the second qubit as its target. However, if we look at the block spheres, they're still in the same 0-0 state. Since the control qubit was zero, nothing happened. So, let's insert an X gate to flip that control to one just before the C-NOT. I'll press Shift + Enter twice to rerun those last two cells again. And we can see that both block spheres are now pointing down to the one state. The X gate flipped the first qubit, zero. Then, because that control qubit was in the one state, the C-NOT flipped the other target qubit. Now, the C-NOT gate will only flip the target qubit if the control qubit is one at the time the C-NOT is executed. Let's extend this example to have three qubits. Then, let's add a second C-NOT gate after the first one. Notice that this time, instead of using the cnot method, I've used the cx method for controlled-X gate. This means the exact same thing in Qiskit,
>
> **[1:57](https://www.linkedin.com/learning/quantum-computing-fundamentals/controlled-not-cnot-gate-with-qiskit?u=76281980&t=117)** it's just a different way to write it, and depending on who writes the code, you might see either one. We'll use the second qubit as the control for the C-NOT gate, and the third qubit as it's target. When I run the [[Simulation]] with that new circuit. We see that our qubits are in the 1-1-1 state. After the initial X gate flipped the first qubit, the first C-NOT flips the middle qubit from zero to one because it's top control qubit was one. Then, because the middle qubit is now in the one state, the second C-NOT gate flips the last qubit as its target. If I use copy and paste to swap around the order of those two C-NOT gates. And then run those cells again. Now, we get a different outcome. In this circuit, the first C-NOT gate did not flip the last qubit as its target, because at the time it was executed, the middle control qubit was still zero. However, the second C-NOT gate did flip its target in the middle because when it was executed, the first qubit was already flipped to one. As we can see here, the order in which these quantum logic gates are applied matters, and putting them in a different order can produce different results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1)
> **Speakers:** - [instructor] (1)

#### [Toffoli gate](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate?u=76281980&t=0)** - Now that we've learned about the controlled NOT gate which conditionally flips the state of a target qubit based on a single control bit, let's extend that concept from two qubits to three qubits with the controlled controlled NOT gate, also known as the Toffoli gate. The Toffoli gate uses two qubits as controls which are indicated on its circuit diagram with small dots. If and only if both of those control qubits are 1 the Toffoli gate will apply a POLYX operation to flip the state of the third target qubit, which is indicated with the circle and plus symbol. You'll often see this gate abbreviated as CCNOT or as CCX which stands for controlled controlled-X gate. If these two beach balls that I'm holding represent the control qubits-
>
> **[0:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate?u=76281980&t=45)** - And I'm holding the target qubit-
>
> **[0:47](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate?u=76281980&t=47)** - Then if my qubits are in any state other than 1-1, that could be 0-0, 0-1, or 1-0-
>
> **[0:55](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate?u=76281980&t=55)** - Then I don't do anything.
>
> **[0:57](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate?u=76281980&t=57)** - But if both control qubits are in the 1-1 state, when we apply the Toffoli gate-
>
> **[1:02](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate?u=76281980&t=62)** - My cubic gets flipped. Mathematically, the Toffoli, or CCNOT gate, is represented by this eight-by-eight matrix. Notice that the top left section resembles an identity matrix with 1s along the main diagonal. If we have a set of qubits in which at least one of the controls is 0, that part of the matrix will pass through the state vector leaving the target unchanged. For example, if we apply the Toffoli gate to three qubits that are all in the 0 state, that state vector passes through unchanged. The same thing happens with the vector for the 0-0-1 state, 0-1-0, 0-1-1, 1-0-0, and 1-0-1. However, when we apply the Toffoli gate to a three qubit state in which both control bits are 1, such as 1-1-0, now the bottom right corner of the matrix comes into play. Flipping the target qubit from 0 to 1. Similarly, when the Toffoli gate is applied to the 1-1-1 state, it flips the target from 1 to 0. Notice that regardless of whether or not the target qubit is flipped, the two control qubits are always left unchanged. That's similar to what we saw previously with the C-NOT gate. Since that state information is preserved in the output, the Toffoli gate is easily reversible. And applying it twice in a row undoes its effect because the CCNOT gate, is its own inverse.

> [!info]- Semantic Content
>
> **Speakers:** - then (2), - now (1), - and (1), - but (1), - my (1)
> **Env Vars:** ccnot (3), polyx (1), ccx (1)
> **Analogies:** for example (1), such as (1), similar to (1)
> **Definitions:** known as (1), stands for (1)

#### [Toffoli gate with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate-with-qiskit?u=76281980&t=0)** - [Instructor] To demonstrate the toffoli gate with qiskit, lets add toffoli gate to the simple three-qubit circuit. To do that I'll type circuit.toffoli(0) for the first control qubit. (1) for the second control qubit and (2) for the target qubit. I'll click the run all button to run all the notebook cells and we can see that all three simulated bloch spheres are unchanged, and still in the initial 0 state. That makes sense because the control qubits are 0 so the toffoli gate wouldn't do anything. Let's try inserting an X gate, in front of the first control qubit. I'll press Shift Enter twice to run all those cells again and now the first qubit is flipped to 1 but the target qubit is still 0. Remember that the toffoli gate doesn't flip the target unless both control qubits are 1. So, let's insert another X gate, in front of the second control qubit. Run those cells again and now since both controls are 1 the target gets flipped ending up in the 1 state. In qiskit, in addition to using the toffoli method to implement this gate, we can also call it by using the CCX method, which stands for controlled controlled NOT. Toffoli and CCX are just two different names for the same gate and you may see either one, depending on who wrote the code.
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/toffoli-gate-with-qiskit?u=76281980&t=94)** Now, when we flip that target qubit from 0 to 1 it's not obvious which axis that rotation was around. Did it rotate around the X axis, the Y axis or something else? To help visualize that, let's initialize our target qubit with an RX gate. I'll also comment out the toffoli gate for just a moment, and then rerun those cells. That shows us the initial state of our last qubit, with the state vector pointing up and to the left, somewhere between 0 and the negative end of the Y axis. Now, I'll uncomment that toffoli gate to edit back into our circuit. Rerun those cells one last time and now the state vector is pointing down and to the right. That shows us that the toffoli gate rotated the target qubit 180 degrees around the X axis. If it had rotated around the Y axis instead, then the resulting state vector would be pointing down and to the left.

> [!info]- Semantic Content
>
> **Env Vars:** ccx (2)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Swap and Fredkin gates](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980&t=0)** - We've used the CNOT and Toffoli gates to conditionally flip the state of a target qubit, now let's learn about two more multi qubit gates which can be used to swap the state of two qubits. The first one is called, well, SWAP. As its name implies, the SWAP gate swaps the state of two qubits. It's represented on a circuit diagram as X's on the two qubits to swap and a line connecting them. Let's say Olivia and I use the SWAP gate on our two qubits. If our qubits are both in the same state.
>
> **[0:31](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980&t=31)** - Then swapping doesn't really do anything. But if my qubit starts in a different state, let's say I start in the one state.
>
> **[0:37](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980&t=37)** - And my qubit is zero.
>
> **[0:39](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980&t=39)** - Then if we apply the SWAP gate, then now my qubit is zero.
>
> **[0:44](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980&t=44)** - And I'm holding one.
>
> **[0:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980&t=45)** - Notice that Baron and I didn't physically trade beach balls, I'm still holding the same qubit as before.
>
> **[0:50](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980&t=50)** - And I've also got my original qubit.
>
> **[0:53](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980&t=53)** - What we swapped was the state of these two qubits. Looking at the matrix representation of the SWAP operation, if we apply it to a pair of qubits in the zero state, the one in the top left corner of the SWAP matrix preserves that state leaving the output unchanged. Similarly, trying to swap a pair of qubits are both one doesn't have any effect. However, when we apply SWAP to any other state in which there is a difference between the two qubits, the middle portion of the matrix comes into play, swapping the middle part of the state vector.
>
> **[1:25](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates?u=76281980&t=85)** - If we want to control whether or not these two qubits are swapped, we can use a close relative of the SWAP gate known as the Fredkin gate. The Fredkin, or Controlled-SWAP gate, conditionally swaps the state of two target qubits if and only if a controlled qubit is in the one state. On its circuit diagram symbol, shown here, the small dot indicates the control qubit and the two X's indicate the target qubits to conditionally swap. Mathematically, the Conditional-SWAP, or C-SWAP gate, is represented by the matrix shown here. Notice that top left quadrant resembles an identity matrix. If we use C-SWAP on a state vector in which the first control qubit is zero, then nothing happens. However, if we apply its C-SWAP to a three qubit system where the control qubit is one, then the bottom right quadrant will come into play, which resembles the SWAP gate and swaps the states of the target qubits in the output.

> [!info]- Semantic Content
>
> **Env Vars:** swap (14), cnot (1)
> **Speakers:** - and (3), - then (2), - we (1), - notice (1), - what (1)
> **Definitions:** is called (1), is a  (1), known as (1)

#### [Swap and Fredkin gates with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates-with-qiskit?u=76281980&t=0)** - [Instructor] To demonstrate the swap and Fredkin gates in Qiskit, we'll start with this three qubit circuit which initializes the last two qubits with a Hadamard gate and an X rotation gate. We can see what the initial states of those qubits look like on the simulated block spheres below. Now let's insert a swap gate between the last two qubits, to do that, I'll type circuit.swap, pass in the index for the middle qubit 1 and then the index for the last qubit 2, I'll click the Run All button to update that circuit and run the [[Simulation]]. We can see the swap gate added to the circuit diagram between qubits 1 and 2 and on the block spheres below, we can see that the states of those last two qubits have been swapped from what they previously were. Next, let's try using a Fredkin gate. I'll comment out that swap gate to remove it from the circuit and then on the next line, I'll insert a Fredkin gate with the command, circuit.fredkin. The first input is the control, which I'll make qubit 0 and then the next two inputs are the indices of the qubits to swap, which will be 1 and 2. I'll rerun those notebook cells and we can see the Fredkin gate drawn on the circuit diagram, but since the control qubit is 0, the second and third qubits are not swapped.
>
> **[1:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/swap-and-fredkin-gates-with-qiskit?u=76281980&t=93)** So let's flip that control qubit with an X gate at the beginning of the circuit. I'll rerun those notebook cells one more time, now we can see the X gate applied to Q zero at the beginning, and since the control is 1, the Fredkin gate swaps the other two qubits. As one final note and something you may have already guessed, in addition to using the method named Fredkin to add this gate to our circuit, we can also use the Cswap method. In Qiskit, the Fredkin and Cswap methods both do the same thing, they're just two different names to refer to the same gate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Classical two-bit adder](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-classical-two-bit-adder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-classical-two-bit-adder?u=76281980&t=0)** - Now that we've seen several new logic gates that work on multiple qubits, it's time for another challenge to practice using them. Your goal for this challenge is to build a circuit using quantum logic gates that performs the same operation as a two-bit binary adder. In classical digital logic, a two-bit adder can be implemented using an XOR and AND gate, as shown here, to add together the two input bits, A and B. The output from the XOR represents the sum of those two bits, and the output from the AND gate is an extra carry-out value. If you've never heard of AND and XOR gate before, don't worry. We can look at this logic table to see what the expected output should be for each of the four possible input states. If both input bits are zero, then the sum and carry-out bits should both be zero, because zero plus zero equals, well, zero. If only one of the input bits is one and the other bit is zero, then the sum bit should be one on the output, while the carry-out remains as zero. And if both input bits are one, since one plus one is two, to represent that with our binary output, we raise the carry-out bit to one and set the sum bit to zero. That's how a two-bit binary adder can be implemented using classical digital logic gates. For this challenge, we'll be using a quantum circuit with four logic qubits. The first two qubits represent our inputs A and B,
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-classical-two-bit-adder?u=76281980&t=94)** and we can use a combination of poly-X gates to flip them into one of the four possible input states. The adder circuit will then modify the other two qubits representing the sum and carry-out bits, which are then measured at the end as output. Your job is to implement the adder circuit in the middle, and we've provided a template for this circuit in the exercise files that you can use as a starting point. Your quantum version of the two-bit adder should implement the same logic table, setting the values of the sum and carry-out bits accordingly. This challenge is a logic puzzle. Take some time to think it through and come up with your own solution, then watch the next video to see how I approach this problem.

> [!info]- Semantic Content
>
> **Env Vars:** xor (3)
> **Exercise Files:** template (1), exercise files (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** next video (1)
> **Speakers:** - now (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Classical two-bit adder](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-classical-two-bit-adder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-classical-two-bit-adder?u=76281980&t=0)** - [Instructor] Let's talk through how I came to my solution for the challenge to build a two bit binary adder circuit using quantum logic gates. Looking at the logic table I decide to figure out how to produce each of the two output quibits independently. Consider the sum qubit first. I noticed that it's only one when both inputs A and B are different and that the sum was zero whenever both inputs were the same. Thinking about that, I realized I could implement that logic by using a pair of CNOT gates. The first CNOT on line six would use the first input qubit as its controlled to conditionally flip the sum qubit and then the second CNOT on line seven will use the second input qubit as its control for flipping the sum. If only one of the inputs is one then the sum will be flipped once ending up in the one state. However, if both inputs are one, then both CNOT gates would be triggered flipping the sum from zero to one and then from one back to zero. This circuit diagram makes it a little easier to see how those two CNOT gates use the first two qubits as controls to conditionally flip the third sum qubit. After solving that puzzle for the sum I turned my focus to the fourth carry out qubit. The carry out is only one when both inputs are also one. Otherwise, the carry out qubit is zero.
>
> **[1:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-classical-two-bit-adder?u=76281980&t=93)** Thinking about how to implement that I realized I need to flip the carry out qubit from zero to one if and only if both inputs are one and conveniently there's a quantum gate for just that. On line eight, I configured it Toffoli gate to use the first two input qubits as controls and flip the fourth carryout qubit accordingly. That produced the quantum circuit shown here which is my final solution to the challenge. This circuit diagram makes it a little easier to see how the two CNOT gates use the first two qubits as controls to conditionally flip the third sum qubit. This is my simple solution, but there are other combinations of quantum logic gates that could produce a similar result. If you approach this challenge differently please leave a comment. We'd love to see how you solved it.

> [!info]- Semantic Content
>
> **Env Vars:** cnot (6)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Quantum Entanglement

[↑ Back to Table of Contents](#table-of-contents)

#### [What is quantum entanglement?](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=0)** - We've put qubits into lots of different quantum states throughout this course, but so far, in all of the states we've explored, each of those qubits could be described independently.
>
> **[0:10](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=10)** - For example, the two qubits Barron and I are holding are in different states of superposition. This is a two-qubit system which we can represent with some state vector.
>
> **[0:19](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=19)** - If we measure Olivia's qubit, it has some [[Probability]] of being zero or one. But her probability amplitudes and the outcome of that measurement have no impact on my qubit.
>
> **[0:30](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=30)** - Likewise, the quantum state or measurement outcome of Barron's qubit has nothing to do with mine. We can take Barron's qubit the picture and still describe the state of my qubit. Our two qubits are-
>
> **[0:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=42)** - [Both] Independent.
>
> **[0:43](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=43)** - To really take advantage of [[Quantum Computing]], we need to create a new type of connection between qubits.
>
> **[0:49](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=49)** - Is it finally time?
>
> **[0:50](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=50)** - Oh, it's time. Let's discuss-
>
> **[0:53](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=53)** - [Both] Entanglement.
>
> **[0:54](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=54)** - Quantum entanglement is a strange quantum phenomenon where two or more particles, or qubits, interact with each other in such a way that they become, well, entangled, meaning the quantum state of one qubit is dependent on the state of another qubit. For example, if we entangle two qubits in a state of superposition, the outcome of measuring one of those qubits becomes correlated with the observed state of the other qubit. We can entangle two qubits such that their measured states will always be the same, or we can entangle them such that they're anti-correlated, meaning their measured states will always be the opposite of each other. In either case, we do not know what the final measured states of those qubits will be, but we do know the relationship between them. The observed states of those cubits have become dependent on each other and we can no longer describe their states individually.
>
> **[1:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=105)** - This idea of entanglement can be hard to grasp as humans because it's a quantum phenomenon that applies to tiny little particles and doesn't really relate to the large scale physical world as we experience it
>
> **[1:57](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=117)** - To explore the concept with an analogy that we can relate to as people, let's revisit the Quantum Cafe from earlier in this course where dining qubits can pick from one of two menu items, the soup or the salad. I have a qubit in a state of superposition undecided about whether to order the soup or salad.
>
> **[2:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=135)** - And in this scenario, I am also a qubit in a state of decision superposition. But this time-
>
> **[2:22](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=142)** - [Both] We're entangled.
>
> **[2:24](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=144)** - I'll be having whatever Olivia's having.
>
> **[2:26](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=146)** - And I'll be having whatever Barron's having.
>
> **[2:28](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=148)** - Now neither of us knows what we'll eventually order. We only know that our decisions will be correlated, that we'll always order the same thing. Ah, here comes the waiter.
>
> **[2:39](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=159)** - Excuse me, ma'am, what will you be having?
>
> **[2:41](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=161)** - The soup please.
>
> **[2:44](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=164)** - And for you, sir?
>
> **[2:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=165)** - The soup for me as well. The instant the waiter measured Olivia's qubit by asking for her order, her decision superposition collapsed to ordering soup and my state of superposition also collapsed to soup. I guess you could say we were in a souper-position.
>
> **[3:01](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=181)** - Ugh.
>
> **[3:03](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=183)** - Let's rewind time, 15 seconds or so, putting us both back into our entangled state and see that interaction again. (film reel screeching) Ah, here comes the waiter.
>
> **[3:14](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=194)** - Excuse me, ma'am, what will you be having?
>
> **[3:16](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=196)** - The salad please.
>
> **[3:18](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=198)** - And for you, sir?
>
> **[3:19](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=199)** - The salad for me. This time, Olivia's decision went the other way. There's uncertainty about what we'll order when asked, but we've become entangled such that we'll always order the same thing.
>
> **[3:31](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=211)** - And it doesn't matter which of us the waiter measures first. Let's rewind that scenario one more time. (film reel screeching)
>
> **[3:40](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=220)** - Ah, here comes the waiter. Excuse me, sir, what will you be having?
>
> **[3:43](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=223)** - Soup, please.
>
> **[3:46](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=226)** - And for you ma'am?
>
> **[3:47](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=227)** - I'll have the soup as well. The order in which our entangled cubits are measured doesn't change the fact that our two outcomes are always the same.
>
> **[3:55](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=235)** - Now what makes this entanglement phenomenon even stranger is that the distance between Olivia and me doesn't matter.
>
> **[4:02](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=242)** - We can be seated at opposite corners of the cafe.
>
> **[4:05](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=245)** - Or opposite ends of the galaxy. We can be light years apart, but at the moment either of us is measured and leaves our entangled superposition-
>
> **[4:13](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=253)** - The other one of us also becomes the correlated outcome.
>
> **[4:16](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=256)** - Einstein famously referred to this behavior as spooky action at a distance because it defies the concept of locality. How can two particles so far apart know something about each other instantaneously?
>
> **[4:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=269)** - Well, maybe when those particles become entangled they decide on their a eventual outcomes together. To an outside observer, Barron and I are a pair of entangled cubits that secretly-
>
> **[4:38](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=278)** - [Both] Shh.
>
> **[4:40](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=280)** - We both know that we'll order the soup when measured.
>
> **[4:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=282)** - That's one explanation physicists have used when trying to describe what's going on with entanglement. But experiments have shown there's no secret information being stored by the qubits.
>
> **[4:52](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=292)** - Well, what if the first qubit to be measured sends a quantum message to the other qubit telling them the outcome? We could be two qubits dining at cafes on opposite ends of the galaxy, and when the waiter comes to take my order, I would immediately send you a text message to let you know what to get. If you ordered first, you would do the same.
>
> **[5:10](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=310)** - Another clever explanation, but the correlation between the measurement outcomes of two entangled cubits is instantaneous. If one qubit were to send a message to the other, by the laws of physics and general relativity as we understand them today, that information cannot travel faster than the speed of light. But again, experiments have shown that the light-speed limitation does not apply to this entangled connection.
>
> **[5:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=335)** - Okay, I'll accept that entanglement is this magical quantum thing that happens. So why is it relevant to quantum computing?
>
> **[5:43](https://www.linkedin.com/learning/quantum-computing-fundamentals/what-is-quantum-entanglement?u=76281980&t=343)** - Well, for a quantum algorithm to be faster than its classical counterpart, it must use entanglement. In fact, it's been proven that a quantum algorithm that does not use entangled quantum states at some point along the way can be efficiently simulated using a regular classical computer. Without entanglement, there's no quantum advantage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Quantum Computing]] (2)
> **Speakers:** - and (6), - the (5), - [both] (4), - we (3), - well (3)
> **Analogies:** for example (2), picture (1)
> **Definitions:** is a  (2)
> **Cross-References:** earlier in (1)

#### [Represent entangled qubits](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=0)** - The recipe to create an entangled pair of qubits is fairly simple. It only requires two ingredients. Starting with both of our qubits in the |0&gt; basis state, I'll apply a Hadamard gate to spin my qubit into super position.
>
> **[0:14](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=14)** - And then I'll apply a CNOT gate with Baron's qubit as a control to decide whether or not to flip my target qubit.
>
> **[0:21](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=21)** - The combined quantum situation we've just created is what's known as a Bell state, which is the simplest and most extreme example of quantum entanglement.
>
> **[0:30](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=30)** - Since our entangled qubits can no longer be described independently, the states you're seeing on our block spheres are not really correct, so to visually indicate that our qubits are entangled, we'll use this phi symbol, which represents a Bell state.
>
> **[0:48](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=48)** - Now that we're entangled, if we measure my qubit first, (Velcro rustles) and see that its state is 0-
>
> **[0:54](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=54)** - Then that means my target qubit is unchanged. I'm still in the 0 state. (Velcro rustles)
>
> **[1:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=60)** - But going back a few seconds, if when we measured my qubit, (Velcro rustles) we saw an outcome of 1-
>
> **[1:07](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=67)** - Then that means my target qubit would've been flipped and is therefore (Velcro rustles) 1 as well. In both of those scenarios, we ended up with the same outcome because we're entangled.
>
> **[1:18](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=78)** - It's tempting to describe what just happened as a causal series of events related to the CNOT gate that was connecting us. When my control qubit was measured as 1, did that event cause Olivia's target qubit to flip to 1 as well? Whereas in the first scenario, when my control qubit was measured as 0, did that cause Olivia's target qubit to be left alone and stay 0. As humans, that's how we might try to rationalize what's happening here, but that's not really how entanglement works. As we mentioned in a previous video, scientific experiments have shown there's not some time-traveling secret communication going on between our qubits. This connection is part of the strange and spooky nature of quantum mechanics.
>
> **[2:01](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=121)** - Fortunately, even if it's hard to wrap our human minds around entanglement, we can describe the phenomenon mathematically. Starting with a pair of qubits in the |00&gt; basis state, we'll use the Kronecker product of the Hadamard and Identity gates to apply the Hadamard operation to the left qubit. This rotates it into the ket plus superposition, which gives us this four-element state vector with two non-zero [[Probability]] amplitudes. Notice we've factored out the 1 over square root of 2 and put it in front of these expressions to make them easier to read. If we measure this pair of qubits, there's a one in two chance we'll get an outcome of |00&gt;, and one in two chance it will be |10&gt;, and that leaves zero probability it'll be anything else. At this point, our two qubits are still completely independent and have no effect on each other. The red qubit will always collapse to 0, and the fact that the right qubit is always 0 has no effect on the left qubit's outcome. Now let's take that state. We'll call it |+0, and let's apply a CNOT gate using the left qubit that we spun with the Hadamard gate as a control to determine whether or not to flip the right qubit from its |0&gt; state. Looking at the resulting state vector, we can see that the location of the probability amplitudes have changed. Now, we have equal 1/2 probabilities that the measured outcomes will be the same, either |00&gt;, or |11&gt;, and no chance that the two outcomes will be different. That means if we measure either one of these qubits,
>
> **[3:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/represent-entangled-qubits?u=76281980&t=215)** we'll immediately know what the outcome will be when we measure the other. Their outcomes are correlated to always be the same. Entanglement is one of the strange aspects of [[Quantum Computing]] that often makes the most sense when we describe it in terms of math.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3), [[Quantum Computing]] (1)
> **Speakers:** - the (2), - then (2), - and (1), - since (1), - now (1)
> **Env Vars:** cnot (3)
> **Cross-References:** we mentioned (1), previous video (1)
> **CLI Commands:** make (1)
> **Definitions:** known as (1)

#### [Simulate a bell state with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/simulate-a-bell-state-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/simulate-a-bell-state-with-qiskit?u=76281980&t=0)** - [Narrator] To explore quantum entanglement in Qiskit, let's simulate the Bell States, which are a specific set of quantum states in which two qubits are maximally entangled. There are two Bell states where the qubits are entangled such that they will always have the same measured outcomes. And there are two Bell states in which the two qubits will always have the opposite measurement outcomes. Together these four quantum states are an orthonormal basis that can be used to represent a two-qubit state known as the Bell basis. Keep that in mind because we'll use this Bell basis when we explore a few quantum [[Algorithms]] near the end of this course. For this demonstration, we'll start with a simple program that creates an empty two-qubit circuit. This program displays the circuit statevector and then the final notebook cell simulates measuring both of these qubits to display the outcomes on a histogram. Now, to put these qubits into a Bell state, let's apply a Hadamard gate to the first qubit, and then apply a CNOT gate with the first qubit as the control and the second qubit as the target. I'll press the Run All button to run this notebook. Now we can see the circuit that the code built with the Hadamard gate followed by a CNOT. The resulting statevector, which has equal [[Probability]] amplitudes of 1 over the square root of 2 in the first and last positions, indicate the measured outcomes of the two bits will always be the same. And below that, the simulated histogram shows
>
> **[1:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/simulate-a-bell-state-with-qiskit?u=76281980&t=95)** that roughly half the time we measured 00 and the other half of the time we measured 11. We never saw an outcome where the two bits were different. Creating a Bell state is that simple. Now the order in which the two gates are applied matters. Let's use cut and paste to move the Hadamard gate to after the CNOT. I'll rerun those notebook cells. And now looking at the statevector and histogram we see a different set of outputs. The first qubit has equal odds of either outcome, while the second qubit is always measured as 0. By making CNOT the first gate in the circuit, at that point in time, the first control qubit was still zero, so the CNOT did nothing. Then afterward, the Hadamard gate put the first qubit into superposition, so the order matters. Let's undo that change.
>
> **[2:41](https://www.linkedin.com/learning/quantum-computing-fundamentals/simulate-a-bell-state-with-qiskit?u=76281980&t=161)** And now let's add another gate to our circuit. I'll insert a Pauli-X gate to flip the second qubit before we use the CNOT gate to entangle them. I'll rerun those notebook cells one more time. And now we've created a different Bell state than before. The statevector shows that the two non-zero probability amplitudes are now the middle two elements, and the histogram shows that the two measured states are 01 and 10. And now we've entangled our qubits to have an anti-correlated outcome, meaning they're measured states will always be the opposite of each other. We encourage you to play around with this example and create other circuit variations to put two qubits into entangled states.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Algorithms]] (1)
> **Env Vars:** cnot (6)
> **Definitions:** known as (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Entangle three qubits](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-entangle-three-qubits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-entangle-three-qubits?u=76281980&t=0)** - It's time for another challenge to practice entangling some qubits. Your goal for this challenge is to build a quantum circuit that puts three qubits into what's known as the GHZ state. The Greenberger-Horne-Zeilinger or GHZ state is a specific type of entangled quantum state involving at least three qubits. The state vector for a three qubit GHZ state is shown here and we can see that those qubits have an equal [[Probability]] of all being measured as zero or all being measured as one. All three of them will always have the same outcome and will never end up with a mixed measurement outcome. You can think of this as an extension of the two qubit Bell state we saw earlier in a previous video, but using more qubits. We've included a template in the exercise files that you can use as a starting point. There are multiple ways to achieve this desired GHZ state. So take some time to build and test your own solution. Then watch the next video to see how we approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Env Vars:** ghz (4)
> **Cross-References:** previous video (1), next video (1)
> **Exercise Files:** template (1), exercise files (1)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - it (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Entangle three qubits](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-entangle-three-qubits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-entangle-three-qubits?u=76281980&t=0)** - [Instructor] Let's look at how I entangled three qubits in the GHZ state in which all three qubits will always have the same measurement outcome. Starting from this empty circuit with three qubits, the first thing I did was entangle the first two qubits to create a Bell state between them. To do that, I applied a Hadamard gate to the first qubit, and after that, I applied a CNOT gate with the first qubit as the control and the second qubit as its target. I'll click the Run All arrow to re-run this notebook. And we can see from the output histogram that those first two qubits are always the same and the third qubit is always zero, which makes sense because we haven't done anything to it yet. Now, to pull that third qubit into entanglement with the first two qubits, I'll add another CNOT gate to the circuit, (keyboard clacking) using the second qubit as the control and the third qubit as the target. I'll run those notebook cells again. Now that second CNOT connects the final qubit to the Bell state of the first two qubits creating an entangled dependency between all three of them. The statevector shows equal non-zero [[Probability]] amplitudes in its first and last elements, and that corresponds to the simulated results in the histogram which show roughly equal outcomes
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-entangle-three-qubits?u=76281980&t=94)** of 0, 0, 0, or 1, 1, 1, and nothing else. Now, when connecting that third qubit to the first two entangled qubits in the Bell state, I used the middle qubit as the CNOT's control; however, I could have used either of those first two qubits as the control because once they're entangled in the Bell state, there's nothing to distinguish one as being the controller of the other. So let's change the control bit on that second CNOT gate to use the first qubit as its control. I'll re-run the notebook one more time, and we can see the updated circuit diagram. Scrolling down. Notice that the statevector is exactly the same as before. It doesn't matter which of those two qubits in the Bell-state pair we used as the control when bringing the third qubit into entanglement with them, the resulting statevector is the same. And even though the histogram may have changed a little bit due to randomness in the [[Simulation]], it still shows roughly equal outcomes of 0, 0, 0, and 1, 1, 1, and nothing else. If you enjoyed this challenge and want to take your quantum exploration further, we have a couple of activities to recommend as bonus challenges. The simplest would be to extend your solution to the three-qubit GHZ state to entangle four or more qubits in a similar manner where all of their measured outcomes are the same. And if you want an even tougher bonus challenge, then try to build a quantum circuit that puts three qubits
>
> **[3:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-entangle-three-qubits?u=76281980&t=188)** into what's known as the W state, which has an equal probability of the three outcomes shown here in which only one of the three measured qubits will be in the one state. Putting three qubits into this W state is more complicated than the GHZ state circuit we just saw, but I encourage you to take on the challenge of figuring it out if you're looking for extra practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Simulation]] (1)
> **Env Vars:** cnot (5), ghz (3)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Real Quantum Hardware

[↑ Back to Table of Contents](#table-of-contents)

#### [Access IBM quantum computers](https://www.linkedin.com/learning/quantum-computing-fundamentals/access-ibm-quantum-computers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/access-ibm-quantum-computers?u=76281980&t=0)** - [Instructor] So far, we've only simulated quantum circuits on our computer using the simulators that are included with Qiskit. Now, let's run our circuits using real quantum [[Hardware]]. IBM has made several small quantum computers available to use for free through the cloud. To use those resources, go to quantum-computer.[ibm.com](https://ibm.com) and register a free account.
>
> **[0:26](https://www.linkedin.com/learning/quantum-computing-fundamentals/access-ibm-quantum-computers?u=76281980&t=26)** After logging in, you should see a dashboard page similar to this. To access and use IBM's quantum compute resources from Qiskit, we'll need an API token. I can get my personal API token from the top right section of this landing page by clicking this button to copy it to my clipboard. I'll be using this token with my Qiskit program in the next video. To see all of the quantum computers that are available for me to use, I'll click the view all link on the IBM quantum compute resources section. Notice at the top that I'm on the all systems tab, so right now I'm seeing everything that IBM has to offer. These systems are all named after major cities from around the world. We can see the status of each system to know if it's online, the type of quantum processor it uses, the number of qubits, and a couple of other characteristics related to its performance. For example, we can see that the IBMq Montreal system is online, and that it has a Falcon R4 processor with 27 qubits. Now, notice that there's a tiny little lock symbol on that system, which indicates that I do not have access to use it. That's because it's part of a premium plan that I would need to pay for. To see the processors that are available for me to use for free, I'll navigate to the your resources tab at the top. These systems have fewer qubits, but they're more than enough to meet our needs for this course. We can also see that there are several cloud-based
>
> **[2:01](https://www.linkedin.com/learning/quantum-computing-fundamentals/access-ibm-quantum-computers?u=76281980&t=121)** simulators available for us to use as well. I'll click on the system named Oslo, and that brings up this page with additional information. The first thing you may notice is the map view, which shows the connectivity between the seven qubits on this processor. They're arranged like the letter H, and if we look at the name of this type of processor, we can see that it's a R5.11H. If we look at another processor, I'll select Lima, which is a Falcon R4T, we can see that its five qubits are arranged like the letter T. In a real quantum processor, not every qubit is connected to every other qubit, which means only certain pairs of qubits can perform operations together such as a CNOT gate. In this processor, qubits zero and one are connected together so they can perform a CNOT together. However, qubits zero and two are not directly connected, so they cannot execute a CNOT. These limitations can be important to consider when writing programs to run on real quantum hardware, but for the scope of this course, we won't worry about it. When we write our programs in Qiskit and target them to run on a real processor, under the hood, Qiskit will take into account those connectivity limitations when it transpiles the program. It may change the mapping of physical bits or even insert additional operations to achieve the desired logic we specify in our program. Those details can impact performance when the program runs, but again, diving into that is beyond the scope
>
> **[3:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/access-ibm-quantum-computers?u=76281980&t=215)** of this course. We can see that this system named Lima was last calibrated about 19 hours ago, and if you're curious to explore that calibration data, you can do so by looking at the table view. Now, shifting focus to the section above that, we can see that this processor currently has 519 pending jobs. Keep in mind, these systems are shared resources, so when you submit your program to run, it will go into a job queue, and you may end up waiting for a while to get the results back. Finally, notice that this processor only has five basis gates. CX, which is the controlled X or CNOT gate, ID, which is the identity gate that does nothing to a qubit for one unit of time, the RZ gate, which rotates the qubit state around the Z-axis by a given angle, SX, which is a gate we have not covered in this course. It's the square root of the X gate, which rotates the quantum state by 90 degrees around the x-axis, and finally, the regular poly-x gate. These are the only five gates that this quantum processor can physically execute. However, this small set of gates is all we need to implement the logic of all of the other gates we've explored throughout this course. When you tell your Qiskit program to target this processor, under the hood, the transpiler will implement the logic of your program using just these five gates. Different quantum processors built by different companies may use different sets of basis gates to implement all of the logic operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2)
> **Env Vars:** ibm (4), cnot (4), api (2), r4t (1)
> **UI Navigation:** go to (1), navigate to (1), click on (1)
> **Analogies:** similar to (1), for example (1), such as (1)
> **Definitions:** is a  (2)
> **URLs:** [ibm.com](https://ibm.com) (1)
> **Cross-References:** in the next (1)
> **Warnings:** keep in mind (1)

#### [Use Qiskit with real quantum hardware](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980&t=0)** - [Instructor] To demonstrate how to run our programs on IBM's real Quantum computers, let's use this simple circuit, which entangles two qubits in the bell state and then measures them. We can see from the locally simulated results of that circuit that we should expect to see the outcome zero zero around half the time and one one, the other half. The outcomes zero one and one zero never occur according to the [[Simulation]]. To use IBM's cloud-based Quantum computers, we'll need to import another module into this [[Python (Programming Language)|Python]] script. So, in a new cell after all of the above code, I'll add another import statement from Qiskit_IBM_runtime import QiskitRuntimeService.
>
> **[0:51](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980&t=51)** I'll also import the job monitor function from the qiskit.tools.monitor module so we can monitor the status of our job as it prepares to execute. Next, we'll set up our API credentials to connect with the IBM Quantum Cloud. To do that, I'll call the IBMQ.save_account method. Then, I'll need to pass in my IBM Quantum token as an input argument. I can get that by logging into Quantum-computing.[ibm.com](https://ibm.com) and then clicking this button on my dashboard to copy my API token to the clipboard.
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980&t=94)** Back in the code, I'll insert a pair of single quotation marks to create a string in Python and then I'll press CTRL+V to paste that token into the middle of those quotes.
>
> **[1:52](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980&t=112)** That will save our API credentials locally to disk. Then, to load those stored credentials for the current session, I'll call the IBMQ.load_account method. That connects us with the IBM Quantum Cloud and returns a provider object which provides access to the Quantum devices and simulators. I'll capture that with a new variable. Now I'll click the Run All button to rerun the entire notebook including these new commands
>
> **[2:26](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980&t=146)** and then I'll press Escape+B to insert a new cell at the end. The next thing we'll need to do is specify which Quantum computer we want to connect to. So I'll call the provider.get_backend method and then I'll specify IBMQ_qasm_stimulator as the backend to use. Now, this backend is not a real Quantum computer. It's just a simulator but it is running in the cloud and we can use it to verify that our program is written correctly and connects to the IBM Cloud before we submit our job to one of the real Quantum computers. Next, to run our job, I'll call the execute function, passing in our Quantum circuit as the first argument and then specifying the backend to use as the one we just created qcomp. Depending on the backend we're using, the job could spend a long time waiting in queue for its turn to run, so let's call the job monitor function on that job to get realtime updates on its status. I'll press Shift+Enter to run that cell and execute the job. I've noticed that sometimes Qiskit has a little trouble connecting to the cloud. If your program takes more than 30 seconds or so for the job monitor to show any updates, then I recommend interrupting execution
>
> **[3:59](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980&t=239)** and rerunning that cell. To do that, click the Interrupt button up top then highlight the cell to re-execute and I'll press Shift+Enter again. Now that we see a job status, we know we've successfully connected and since it was only a small simulation, it finishes fairly quickly and we get a message that the job has successfully run. Now in the last cell, I'll add a few lines of code to retrieve the results of that job and plot them on a histogram.
>
> **[4:44](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980&t=284)** When I run it, we get simulated results that look like what we expect with roughly equal counts of zero zero and one one outcomes and nothing else. Great, we know our code is working and successfully connecting to the IBM Cloud. Now, we're ready to finally target a real Quantum computer. Back on the IBM Quantum website, I'll navigate to the compute resources page. I'll click on the Your Resources tab to make sure I'm only looking at the resources that are available to me and then I'll make sure I'm on the table view. I see that the IBM_quito system currently has the shortest queue with only 60 jobs so let's use that for this demonstration to hopefully have the shortest wait. Back in the code, I'll swap out the backend from being the IBMQ_qasm_simulator to use IBMQ_quito instead. I'll press Shift+Enter to run that cell
>
> **[5:47](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980&t=347)** and after a moment, the job monitor output shows us that we're number 63 in queue. In addition to using the job monitor to watch our position and queue from within the Jupyter Notebook, we can also check on that job status from the IBM Quantum dashboard. I see I currently have two jobs pending so I'll click on the most recent one and that brings me to the page for that job which is still waiting in queue. The diagram at the bottom of this page shows the actual circuit that will get executed. Notice that this is different than the circuit in our program. In our program, we used a Hadamard gate followed by a CNOT to put our two qubits in a bell state before measuring them. Since our physical Quantum computer does not natively implement the Hadamard gate, the transpiler used a combination of other basis gates that it does support to perform an equivalent operation. In this case, it used a combination of Z-rotations around a square root of X-gate to implement the Hadamard operation. It looks like we might be waiting in queue for a while so let's fast forward to see the final result. All right, that job spent over 38 minutes waiting in queue but when it finally had its turn to run, it took less than three seconds to actually execute. The job page now shows us a histogram of measured outcomes. As expected, the measured outcome states zero zero and one one occurred roughly the same number of times. But now, we also measured a small number of outcomes in the other two states: zero one and one zero.
>
> **[7:25](https://www.linkedin.com/learning/quantum-computing-fundamentals/use-qiskit-with-real-quantum-hardware?u=76281980&t=445)** Mathematically, those other two states in which the outcomes are different should never occur when measuring our bell state circuit. And when we ran that circuit with a simulator, which represents an ideal Quantum computer, that was the result we saw. But real Quantum computers are not ideal systems and there are various different types of noise that cause errors in our Quantum computation, producing unexpected and invalid results like this. The IBM Quantum website will store the results of all of the jobs you run through their cloud. If you ever want to retrieve the results from a previous job, you can find it by going to the jobs page and then selecting your job. This dropdown on the histogram allows you to download the measured results in a variety of different formats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (2), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** ibm (10), api (3), ibmq (2), ctrl (1), cnot (1)
> **CLI Commands:** python (2), make (2), find (1)
> **UI Navigation:** click on (2), navigate to (1), dropdown (1)
> **Code Identifiers:** save_account (1), load_account (1), get_backend (1)
> **URLs:** [ibm.com](https://ibm.com) (1)
> **Cross-References:** in the last (1)
> **Tools:** jupyter (1)

#### [Mitigate quantum measurement errors](https://www.linkedin.com/learning/quantum-computing-fundamentals/mitigate-quantum-measurement-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/mitigate-quantum-measurement-errors?u=76281980&t=0)** - It seems like quantum computers have a lot of computational errors due to noise and other factors. Is there anything we can do to help reduce, or mitigate those errors?
>
> **[0:09](https://www.linkedin.com/learning/quantum-computing-fundamentals/mitigate-quantum-measurement-errors?u=76281980&t=9)** - The best solution would be to build better quantum computers with less noise, or unwanted randomness. And quantum researchers are working towards that goal every day, but physics... It's a hard problem to solve and the best quantum computers we have today still have a lot of noise and errors because they're physical systems working in delicate quantum states.
>
> **[0:30](https://www.linkedin.com/learning/quantum-computing-fundamentals/mitigate-quantum-measurement-errors?u=76281980&t=30)** - Well, what if we know something about the errors a specific quantum computer produces? If we knew the chances of measuring the wrong outcome from a known state, couldn't we use that information to fix the results of an unknown computation?
>
> **[0:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/mitigate-quantum-measurement-errors?u=76281980&t=42)** - Now you're onto something. One way to characterize a specific quantum computer is with a set of simple quantum circuits. For example, in a two-qubit system, if we simulate the circuit that immediately measures both qubits in their initial state we'll always see 00 as the outcome. However, on a real quantum computer, we'll see results like this with the 00 state occurring most of the time, but with a small number of results in the other states. Along the same lines, this simple calibration circuit, which flips the first qubit before measurement, should always produce an output of 01 in theory. On a real quantum computer, we'll see 01 most of the time, but the other states will also show up in the results. We can characterize a two-qubit system using these four calibration circuits, which put those two qubits into each of the four possible basis states, and then immediately measure them. Running these circuits on a specific quantum computer will give us insight into how often we see each of those other wrong results due to noise and other factors. It takes those four calibration circuits to characterize a two-qubit system. We would need eight calibration circuits to characterize a three-qubit system. 16 for a four-qubit system, and so on. Using those calibration results, it's possible to build a filter that we can apply to the measured outcomes of another quantum computation to counteract, or undo the errors that occur in that physical system. It's not a perfect process, but it can help improve our results.
>
> **[2:14](https://www.linkedin.com/learning/quantum-computing-fundamentals/mitigate-quantum-measurement-errors?u=76281980&t=134)** - We won't be going into the details of how that works here because mitigating errors in quantum computation is a field of study that deserves an entire course of its own. If you want to dive deeper into mitigating measurement errors in quantum circuits the Qiskit textbook is a great starting point which shows you how to use Qiskit packages to build your own air correcting filters.

> [!info]- Semantic Content
>
> **Speakers:** - it (1), - the (1), - well (1), - now (1), - we (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)


### 8. Quantum Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [Superdense coding](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=0)** - We've seen lots of single and multi-qubit logic gates and explored key quantum concepts, like super position and entanglement. Now it's finally time to put all those building blocks together to write quantum [[Algorithms]] that do real work.
>
> **[0:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=15)** - Our first algorithm is known as superdense coding. This is a quantum communication protocol that securely sends classical bits of information by transmitting a smaller number of quantum bits. This protocol starts with the sender and receiver each having half of an entangled pair of qubits before the message needs to be sent. Let's say I want to send two classical bits of information to Baron. The first thing we need is a pair of entangled qubits.
>
> **[0:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=42)** - [Todd] Here you go!
>
> **[0:44](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=44)** - Thanks, Todd!
>
> **[0:47](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=47)** - It doesn't matter where these entangled qubits come from. I could have created them-
>
> **[0:51](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=51)** - Or I could have entangled them-
>
> **[0:53](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=53)** - Or they could have come from a third party. These two qubits are entangled in a simple bell state in which measuring them will always produce similar outcomes. Now, Olivia and I can each take one of these qubits and travel to opposite ends of the galaxy.
>
> **[1:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=68)** - Let's just stick with opposite ends of the table for now.
>
> **[1:12](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=72)** - That's reasonable.
>
> **[1:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=75)** - Now that we're apart, to send my message to Baron, I'll perform one of four quantum operations on my qubit that I'm holding to encode two classical bits of information I want to send. If I want to send the two bit message, zero, zero, I'll use the identity gate and simply not do anything. That leaves our entangled pair in the same bell state that they started in. To send the message zero, one, I'll apply the Z gate to my qubit, which puts our entangled par into a different bell state. For the two bit message one, zero, I'll apply the X gate, putting our cubits in yet another bell state. And finally, to send the message one, one, I'll apply a Z gate followed by an X gate, which puts us in the fourth and final bell state. So our entangled cubits will be in one of these four bell basis states depending on the message. I want to send Baron the message one, zero, so I applied an X gate to shift our entangled qubits to the corresponding state. Now that I've encoded my message, I can send my qubit to Baron.
>
> **[2:18](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=138)** - Thank you. To receive Olivia's message, I need to measure which of those four bell basis states our qubits are in. If I simply perform a standard Z measurement on these two qubits as is, the outcome I get will only tell me if they were entangled in a correlated bell state or an anti-correlated bell state. That's some information, but it's not enough to tell me which of the four possible messages Olivia intended to send. So before I measure these qubits, I need to decode her message. I'll do that by applying a couple of operations to unentangle our bell state pair, basically doing the reverse of the operations that were originally used to entangle these qubits. There's not a good way to physically show that with beach balls, so I'll represent that process by removing these bell state stickers. Now, these qubits are in independent basis states, and when I measure them, the outcome I get is Olivia's message, one, zero, and this outcome is deterministic. I will always see Olivia's message that she intended to send. Of course, that's ignoring other real world physical factors that might cause errors.
>
> **[3:28](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=208)** - With superdense coding, I was able to send Baron two classical bits of information by only sending him one encoded quantum bit.
>
> **[3:35](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=215)** - However, this protocol still involves two qubits. I can't extract two bits of information from either one of our single qubits. I need them both to decode Olivia's message.
>
> **[3:47](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=227)** - That's why superdense coding is a form of secure communication. If a nefarious eavesdropper intercepted my qubit on its way to Baron and looks at it, the result they see is random and tells them nothing about my secret message.
>
> **[4:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=240)** - The fact that I needed both qubits to decode Olivia's message also means that we're not able to transmit information faster than the speed of light, which would break the laws of known physics. When Olivia applies one of the four quantum operations to encode her message, that has an instantaneous effect on my qubit, no matter how far apart we are because our qubits are entangled.
>
> **[4:22](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=262)** - But without my qubit, Baron can't decode the message yet, so we haven't actually transferred any information.
>
> **[4:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=269)** - This superdense coding protocol was first proposed in the 1970s, but it wasn't actually published until 1992 and then demonstrated in 1996 with an experiment using entangled photons.
>
> **[4:41](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=281)** - In terms of scientific research, 1992 isn't that long ago.
>
> **[4:46](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding?u=76281980&t=286)** - I find it inspiring to realize that such a simple protocol is only a few decades old. It makes you wonder what other elegant quantum algorithms are yet to be discovered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2)
> **Speakers:** - or (2), - that (2), - we (1), - our (1), - [todd] (1)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** find (1)

#### [Superdense coding with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding-with-qiskit?u=76281980&t=0)** - [Instructor] Let's look at an example of the superdense coding protocol implemented with Qiskit. After importing the necessary modules at the top, the second cell of this notebook begins by initializing a quantum circuit with two qubits, which I'll use to encode the message I'll transmit to Barron. Lines four and five perform the first step of the protocol by using Hadamard and CNOT gates to entangle our two qubits in the common Bell state. We've inserted a barrier at line seven, which guarantees that all the operations before the barrier are completed before the program continues beyond the barrier. It also inserts a nice visual barrier in the quantum circuit diagram, which is really why we're using it here. Next, lines 10 through 19 use a [[Python (Programming Language)|Python]] match expression to apply one of the four quantum operations on Olivia's qubit, based on the message. The message variable on line 10 is currently assigned to be one zero, which means the case at line 15 will be executed to apply an X gate. After that, Olivia sends her qubit back to Barron, which he then decodes with the CNOT and Hadamard gates on lines 24 and 25 before performing the final measurement. Barron is performing what's known as a Bell state measurement. By applying a CNOT and a Hadamard gate before performing measurements, he's measuring which of the four Bell basis states our qubits are in. If we remember the simple two gate circuit we use to create a Bell state pair, with a Hadamard gate followed by a CNOT, it's easy to see that the Bell state measurement circuit
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/superdense-coding-with-qiskit?u=76281980&t=94)** is a mirror image of that. We are reversing those operations to unentangle our qubits. Now, let's look at the entire circuit for superdense coding and identify the three steps in this algorithm. We begin by creating an entangled Bell state pair. Then, I encode my message by applying an operation to the first qubit, and finally, Barron performs a Bell state measurement to decode and receive the message. In the final cell of this notebook, we used a local simulator to execute this circuit and plot the results on a histogram. We can see that, as expected, Barron always measures the outcome as one zero, which corresponds to the encoded message. Let's scroll back up to the top. I'll change the message on line 10 from one zero to one one. Then, I'll click the run all arrow to rebuild and simulate the new circuit. And now looking at the histogram, we can see that the outcome is always one one. Superdense coding is a quantum algorithm that produces a deterministic result. Ignoring noise and other physical factors that come into play in the real world, the receiver will always decode the correct message that was sent. I encourage you to play around with the example code and try sending different messages. Also, see what happens if you modify the encoding scheme. Try using different combinations of gates to encode and decode the message.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** cnot (4)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Quantum teleportation](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=0)** - We use superdense coding to securely transmit classical bits of information. Now let's transmit a quantum state from one qubit to another with quantum teleportation.
>
> **[0:10](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=10)** - Ooh, sounds fancy. Beam me up, Scotty.
>
> **[0:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=15)** - Not quite, this isn't science fiction and we won't be physically transporting anything.
>
> **[0:21](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=21)** - So I'm staying here?
>
> **[0:23](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=23)** - You're stuck with me here.
>
> **[0:25](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=25)** - Okay.
>
> **[0:27](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=27)** - The quantum teleportation algorithm transfers quantum information between two locations. We'll use this algorithm to transfer the quantum state from one qubit to another.
>
> **[0:37](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=37)** - So it's like copy and paste, but for quantum computers.
>
> **[0:40](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=40)** - Kind of, but not really. In a classical computer, it's easy to copy information. We simply read the state of a bit that we want to copy and then send another bit to that state. However, that approach doesn't work in a quantum computer because...
>
> **[0:54](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=54)** - Because when you look at the qubit you want to copy, you are implicitly measuring it, which destroys the quantum state you want to transfer.
>
> **[1:03](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=63)** - Bingo, the rules are different with a quantum computer. Let's say I want to transfer or teleport the quantum state of this qubit to Baron.
>
> **[1:15](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=75)** - Can you just give me that qubit? That seems like the simplest solution.
>
> **[1:20](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=80)** - No, this is my special qubit, and you can't physically have it, but I'll give you its state. To do that, we'll need a pair of entangled qubits.
>
> **[1:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=89)** - Here you go. - Ah, thanks Todd.
>
> **[1:34](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=94)** - The quantum teleportation algorithm involves three qubits. My qubit is in an unknown state that we want to transfer to one of Baron's qubits.
>
> **[1:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=102)** - Olivia has half of a bell state pair and it doesn't matter which one since the state is symmetric. Now, we can be light years apart and we'll still be able to share quantum information through this entangled connection.
>
> **[1:56](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=116)** - For the next step in the teleportation algorithm, I'll perform a bell state measurement on my qubit and the qubit Baron sent me. To do that, I'll apply the C knot and head mar gate, and then I'll measure both qubits. This is a partial measurement of our three qubit system which gives us two bits of classical information. Now I need to send those results to Baron using any classical communication method, so I'll send him a text.
>
> **[2:25](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=145)** - Got it. Now, for the last step in this algorithm, I'll apply one of four transformations to my qubit based on the result from Olivia's measurement, and that will fully recover the teleported state. If both of the qubits Olivia measured were zero, that means the qubit I'm holding is already in the correct and final state, so I don't need to do anything to it. I can use an identity gate for that. If Olivia measures her half of our shared bell pair as one and her original qubit as zero, then I'll need to apply and X gate. If Olivia measures just her qubit as one, then I'll need to apply a Z gate, and if she measures both of those qubits as one, then I'll need to apply an X gate followed by a Z gate. To understand why this set of four operations recovers the teleported state requires a deep dive into the math behind the algorithm, which is beyond the scope for this course. If you're interested in understanding those details, then we recommend reading the page about quantum teleportation from the Qiskit textbook. Since Olivia measured her qubit as zero and the middle shared qubit as one, I applied in X gate to my qubit, which puts it into the state that Olivia's qubit was originally in.
>
> **[3:36](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=216)** - We've successfully teleport the quantum state from my qubit to Baron's qubit. Notice that as part of that process, I had to measure my qubit, so it's no longer in its original quantum state. This was a transfer of information, we did not copy it.
>
> **[3:50](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=230)** - Since we used entanglement to transfer that state and the correlation between entangled qubits is instantaneous, it may seem like we just sent information between us faster than the speed of light, which would defy the known rules of physics. But remember, I needed to know Olivia's measurement results to know which of the four possible operations to apply. If I had measured my qubit before I received Olivia's results and performed that final recovery step, the outcome I get would be random and meaningless to me. I can't extract any useful information from that random result so no information has actually been shared.
>
> **[4:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=269)** - Along those lines, when I performed that bell state measurement on the two qubits I was holding, each of the four possible outcomes had an equal [[Probability]] of occurring. If someone intercepted those two classical bits of information I texted to Baron, that would not give them any information about the quantum state we're transferring. To an eavesdropper, those are just two random bits.
>
> **[4:51](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=291)** - To complete the process, I need both my physical qubit and those two bits of classical information to apply the right final operation. This quantum teleportation algorithm is a close relative of the superdense coding algorithm we looked at in an earlier video. With superdense coding, we transferred two classical bits of information by encoding the message using an entangled qubit and then physically sending that one qubit to the receiver to be decoded. With quantum teleportation, we transferred information about one qubit's quantum state through a process that involved physically sending two classical bits of information to the receiver to be decoded. A commonality in both of these [[Algorithms]] is that the sender and receiver share an entangled pair of qubits.
>
> **[5:38](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=338)** - Like superdense coding, quantum teleportation was discovered and experimentally demonstrated in the mid 1990s.
>
> **[5:45](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=345)** - That's within my lifetime. - Mine too. And that's why I like to think of them as young algorithms.
>
> **[5:51](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation?u=76281980&t=351)** - It's possible to extend the simple version of the protocol we saw in this video to teleport more complex quantum systems. So it's a good algorithm to have in your bag of quantum tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Probability]] (1)
> **Speakers:** - we (2), - so (2), - the (2), - ooh (1), - not (1)
> **Definitions:** is a  (2)
> **Analogies:** it's like (1)

#### [Quantum teleportation with Qiskit](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation-with-qiskit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation-with-qiskit?u=76281980&t=0)** - [Instructor] Let's look at an example quantum teleportation circuit with Qiskit. After the initial import statements, the second cell of this notebook initializes a quantum circuit with three quantum registers and two classical registers. We've used the optional name parameter when defining these registers to give them unique names to help identify them. Qubit zero is Olivia's qubit, whose state we want to teleport. Qubit one is the half of our Bell state pair that gets sent to Olivia, and qubit two is Barron's qubit, which is the other half of that Bell state pair and the destination for our teleportation. We've named the last two classical registers CRZ and CRX because we'll be using the measured results stored in them to conditionally apply Z and X gates to Barron's target qubit. Next, after creating the circuit, we initialize Olivia's qubit to the quantum state we'll be transferring. In practice, we likely won't know the state of the qubit we're teleporting, but for the sake of this demonstration, we use the RX gate at line 12 to apply an arbitrary rotation to put Olivia's qubit into a super-positioned state. After that, lines 16 and 17 use a Hadamard gate and CNOT to create a Bell state pair, and then on lines 21 through 25, Olivia performs a Bell state measurement on her qubit and half of that entangled pair. Finally, lines 29 and 30 conditionally apply the X and or Z gates based on the results of Olivia's measurements, which are stored
>
> **[1:33](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation-with-qiskit?u=76281980&t=93)** in the CRX and CRZ registers. We can use Qiskit's State Vector Simulator to visualize the in-state of our three qubits on the block sphere. What we're seeing here shows qubits zero and one after performing the Bell state measurement, so they've collapsed into one of the four two bit basis states with an equal [[Probability]] of each outcome. This time, Q zero was in the zero state, and Q1 ended up in the one state. However, at the end of the teleportation algorithm, Barron's qubit, which is the qubit on the far right, will always be in the state that Olivia's qubit, qubit zero, was at the start. Since we used a rotational X gate to initialize Olivia's qubit, now at the end, Barron's qubit is in that specific super position. If I selected that cell and press control enter several times to rerun that [[Simulation]],
>
> **[2:32](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation-with-qiskit?u=76281980&t=152)** we get a random result each time for the first two qubits, but qubit two will always end in the teleported state. Now, let's scroll back up and change line 12 from RX to just a simple X gate, which will initialize Olivia's qubit in the one state.
>
> **[2:55](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation-with-qiskit?u=76281980&t=175)** I'll press shift enter twice to rebuild that circuit and run the state vector simulation, and now we see that the one state has been teleported from Q zero to Q2. To measure our teleported quantum state, the next section of code adds a third classical register named result to our circuit, then measures the state of Barron's qubit, Q2, into that result register. I'll press shift enter to run that cell and draw the new circuit, and I'll also run the next cell, which simulates that circuit and plots the counts on a histogram. Looking at the results, we see four outcomes for that three qubit system. We can see that, as expected, Q2 was always measured as one because that's the state we teleported, and the other two qubits were measured in one of their four possible combinations roughly the same number of times. Now, there's a potential issue with the way we've implemented this algorithm, and that's because we've included instructions after performing a measurement. That's not a problem for the Qiskit simulator, but real world quantum [[Hardware]] may not allow additional instructions to be executed after it performs a measurement. In fact, if we tried to run this algorithm in its current form using one of IBM's quantum computers, the job would fail. Fortunately, there's a [[Quantum Computing]] principle known as deferred measurement, which states that any measurement can be postponed
>
> **[4:29](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation-with-qiskit?u=76281980&t=269)** until the end of the circuit. We won't dive into the details behind that principle, but in short, it means that waiting until the very end of a quantum computation to perform all of the measurements will not affect the probability distribution of the outcomes. To demonstrate that, we've created this modified version of the teleportation circuit, which is included at the bottom of that Jupyter Notebook. It starts out similar to the previous circuit but instead of conditionally executing X and Z gates based on the result of the Bell state measurement, line 19 executes a controlled X gate using the middle qubit as the control and Barron's qubit as the target. Then line 20 performs a controlled Z gate using the state of Olivia's qubit to determine whether or not to apply a Z gate to Barron's target qubit. We haven't seen the controlled Z gate in this course, but as its name implies, it's basically the same as a controlled X gate. It just applies a Z gate to the target instead of X. Even though we haven't performed measurements on Olivia's qubits, those two controlled gates perform the right transformation on Barron's qubit to recover the teleported state. At the end of this example circuit, we only need to measure Barron's destination qubit, and if we look at the simulation results for that circuit, we can see that the outcome is always one. That makes sense because we initialized Olivia's qubit to the one state using an X gate. This modified version of the circuit, which defers the measurement, enables us to run
>
> **[6:02](https://www.linkedin.com/learning/quantum-computing-fundamentals/quantum-teleportation-with-qiskit?u=76281980&t=362)** and demonstrate the algorithm on real hardware like IBM's quantum computers. This circuit can transfer the state from one quantum register to another within a quantum processor. However, it's not really the same as the original teleportation circuit we looked at because we're no longer transferring the quantum state via classical channels. If we want to teleport a quantum state across great distances, then the first circuit best represents the actual protocol we need to do that, taking a Bell state measurement and then transmitting those classical results to the receiver to perform the final recovery operation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (3), [[Probability]] (2), [[Hardware]] (2), [[Quantum Computing]] (1)
> **Env Vars:** crz (2), crx (2), ibm (2), cnot (1)
> **Definitions:** known as (1), means that (1)
> **Tools:** jupyter (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Real quantum teleportation](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-real-quantum-teleportation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-real-quantum-teleportation?u=76281980&t=0)** (electro-pop music)
>
> **[0:06](https://www.linkedin.com/learning/quantum-computing-fundamentals/challenge-real-quantum-teleportation?u=76281980&t=6)** - It's time for our final challenge of this course to write a quantum algorithm and then run it using real quantum [[Hardware]]. Your goal is to create a modified version of the quantum teleportation circuit from the previous video. Your circuit should start by initializing qubit two with a Hadamard gate to put it in a state of super-position and then teleport that state to qubit zero. This is going in the opposite direction of the previous example, which teleported the state of qubit zero to qubit two. At the end of your circuit it should measure only the state of qubit zero and save the result to a classical register. After you've built your teleportation circuit use Qiskit to run it on a real IBM quantum computer and then finally plot the result on a histogram. We're not giving you a starting notebook this time. If you want to make this challenge extra hard try building your solution from memory. If you get stuck you can always reference our previous examples for the pieces of code you'll need. Take some time to solve this challenge on your own, then watch the next video to see how we approached it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Cross-References:** previous video (1), next video (1)
> **CLI Commands:** make (1)
> **Env Vars:** ibm (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - it (1)
> **Non-Speech:** (electro-pop music) (1)

#### [Solution: Real quantum teleportation](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-real-quantum-teleportation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-real-quantum-teleportation?u=76281980&t=0)** - [Instructor] To solve the challenge of teleporting a qubit, I started by copying the example teleportation code from an earlier video. Since the end goal is to run this algorithm on real quantum [[Hardware]], I picked the variation that defers measurement until the end. Now, the circuit I copied from that earlier video teleports the state of qubit zero to qubit two, but this challenge asked us to go in the opposite direction, teleporting the state of qubit two to qubit zero after initializing qubit two with a Hadamard gate. The simplest way to modify this circuit to meet that goal will be to swap around the indices of these various operations, to flip around the source and destination of the teleportation. Let's start with that approach on line five by changing the initialization gate from Pauli X to a Hadamard gate and then changing the index from zero to two. I'll continue that process on the next section, which prepares the bell state by changing the target index on the CNOT gate from two to zero. And for the bell state measurement, we'll change the indices on lines 14 and 15 from zero to two. We'll swap around the indices for the conditional X and Z gates near the end of the algorithm. And finally, we'll modify the measurement to look at qubit zero and store the result in the single classical register.
>
> **[1:36](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-real-quantum-teleportation?u=76281980&t=96)** Those are all the modifications we need to make. So I'll press Shift + Enter to build and redraw the circuit so we can see what that looks like. Now, continuing on. In the next cell, I've imported the Qiskit Runtime service to connect with IBM's cloud-based quantum computers and I've saved and loaded my account by providing my API token. The next section uses the cloud-based simulator to execute the circuit. And then the final notebook cell plots the result on a histogram. Notice that I'm running my circuit on a simulator first to make sure everything is in order before waiting in queue to run it on real hardware. I'll press Shift + Enter three more times to run those remaining cells. And when the [[Simulation]] finishes, we can see that each of the possible outcomes for measuring qubit zero occurred about the same number of times. That makes sense because we initialized qubit two with a Hadamard gate then teleported that quantum state to qubit zero before measuring it. Now, to run that circuit on real hardware, I'll check the IBM Quantum website to see which systems are currently available. I see that the IMB_Oslo system is currently online and has the shortest queue. So let's use that one. Now, back in my code, I'll modify the backend name accordingly
>
> **[3:09](https://www.linkedin.com/learning/quantum-computing-fundamentals/solution-real-quantum-teleportation?u=76281980&t=189)** then I'll press Shift + Enter to execute that circuit on the IBM Quantum cloud. This is going to take a while. So let's fast forward to the end and we'll check out the results on the IBM [[Quantum Computing]] webpage. On on the IBM Quantum jobs page, I can see that the job I submitted to the IBM_Oslo system is complete. So I'll click on it and then check out the histogram. Notice that these outcomes are not quite as equal between one and zero as we saw earlier when using the simulator. The outcomes here were slightly skewed towards measuring one more often than zero. This may be an artifact of running the circuit on a real quantum system, which has noise and other imperfections versus using the simulator, which represents an ideal quantum computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Simulation]] (1), [[Quantum Computing]] (1)
> **Env Vars:** ibm (5), cnot (1), api (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1), as we saw (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your next quantum steps](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=0)** - Congratulations, you've reached the end of this course. We hope it's given you a good foundation to understand the basics of quantum programming.
>
> **[0:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=8)** - We've explored fundamental concepts like super position and entanglement.
>
> **[0:12](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=12)** - We learned about a variety of quantum logic gates.
>
> **[0:14](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=14)** - And we've used those gates to build and run quantum [[Algorithms]].
>
> **[0:17](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=17)** - On a real quantum computer. There's still plenty more to learn, so we want to recommend a couple of free resources we've found useful.
>
> **[0:25](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=25)** - We've already mentioned the Qiskit textbook several times throughout this course. It provides a university level course on quantum programming. If you want to dive deeper into math, learn more about gates and algorithms and explore the realities of quantum [[Hardware]], this is a great place to go.
>
> **[0:42](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=42)** - Another online resource we've enjoyed is the website, Quantum Country, which hosts several detailed essays about quantum mechanics and computing. It's always helpful to read a different explanation of complex topics like quantum teleportation.
>
> **[0:55](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=55)** - Quantum programming is still a young field, so by the time you watch this course, there will probably be lots of other great resources popping up online.
>
> **[1:03](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=63)** - Thanks for watching this course and having the determination to stick with us to the end.
>
> **[1:08](https://www.linkedin.com/learning/quantum-computing-fundamentals/your-next-quantum-steps?u=76281980&t=68)** - [Instructors] Happy programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Hardware]] (1)
> **Speakers:** - we (3), - congratulations (1), - and (1), - on (1), - another (1)
> **Definitions:** is a  (1)


## Instructor

- [[Olivia Chiu Stone]]
- [[Barron Stone]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/quantum-computing-fundamentals-2833097/codespaces)

## Skills Covered

- Quantum Computing

## Path Context

### In [[Understanding Quantum Computing]]
← [[Introduction To Quantum Computing]] | **2 of 3** | [[Cloud Quantum Computing Essentials]] →

## Appears In

- [[Understanding Quantum Computing]]

## Related Courses

_Courses sharing skills:_

- [[Cloud Quantum Computing Essentials]] — Quantum Computing
- [[Introduction To Quantum Computing]] — Quantum Computing

---

[↑ Back to top](#)