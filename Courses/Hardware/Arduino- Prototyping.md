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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/prototype-with-arduino?u=76281980&t=0)** - [Robert] The [[Arduino]]'s simple [[Hardware]], ease of use and large community of users have helped make physical [[Product Development]] accessible to everyone. This includes product managers and designers who now have the ability to develop hardware prototypes as part of their [[Product Design]] process. In this course, we'll spend some time seeing how [[Prototyping]] fits into the design process. Then we'll dive into the details, and I'll show you step-by-step how you can develop a proof of concept prototype that helps you explore and validate a small handheld game. I'm Robert Gallup, and I've spent my career working with technology as a designer, program manager and developer. If you're ready to take your Arduino skills to the next level and see how you can use the Arduino in product development, joined me in my [[LinkedIn]] Learning course on Arduino prototyping.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4), [[Hardware]] (2), [[Product Development]] (2), [[Prototyping]] (2), [[Product Design]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [robert] (1)

#### [What you should know](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is designed for product managers, designers, and programmers. We start looking at the [[Prototyping]] process then dive into techniques and strategies for you and your team to make prototyping with an [[Arduino]] a integral part of a nimble design process. While the beginning of the course is general and requires no specific background, the technical parts of this course related to building a prototype assume that you've had some exposure to Arduino. We'll start from the beginning and talk about prototyping step by step, but it will be easier for you to follow if you've had some experience programming. The Learning Arduino: Foundations [[LinkedIn]] Learning course is a good place to start if you're new to the Arduino. The prototype itself is built with some common [[Electronics]] and other parts. They include an Arduino Uno, a 16 by two LCD display, a simple button like a tact switch, a 10K or 10,000 ohm potentiometer, a 220 ohm resistor, a full-sized breadboard, and an assortment of jumper wires to connect everything together. If you have an interest in discovery the joy designing [[Microsoft Products|products]] and exploring and developing prototypes then this course is for you.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/what-s-new-in-this-update?u=76281980&t=0)** - [Instructor] In addition to videos, hands-on experience is fun and it helps you develop a deeper understanding of course material. This course update add several hands-on challenges for you to work on. They help you practice what you're learning and encourage you to look beyond just what's presented. The final challenge combines everything you've learned, along with one new idea from a more complete prototype. And each challenge is followed by a video showing you the solution I came up with. So as you go through the course, take some time to work through the challenges. They're good practice and demonstrate techniques not covered in the main videos, and they can be a fun way to explore and further develop your [[Arduino]] [[Prototyping]] skills.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=0)** - [Instructor] In physical [[Product Design]], if a picture is worth a thousand words, a prototype is worth a thousand pictures. Holding a prototype allows you to experience and communicate your design as it evolves, in a way no description or image can. There are different reasons for [[Prototyping]], and before you start, it's helpful to step back and think about what you're hoping to achieve. One reason to prototype is to learn about new or unfamiliar technology. For example, you might want to build a simple prototype to learn how a distance sensor works. Another reason to prototype is to explore and inspire different approaches to your design. There's nothing like having a physical object you can play with to spark imagination. And a well-constructed prototype can be rapidly modified to explore multiple ideas. A prototype is also useful in evaluating ideas. Just because an idea works doesn't mean it's a good idea. A prototype can be shared for feedback from team members, project stakeholders, and potential customers. A final reason to prototype is to communicate your design or your progress to others. Touching and interacting with a prototype can be a compelling addition to your slide deck. Okay, we've seen all the great reasons for prototyping, what are some of the risks. Imagine this, you finally manage to get buttons and a display working on your prototype. It's on a breadboard with its chaos of wires, but it works and you're really excited to show it off. Who wouldn't be, right? You arrange a meeting with the team, and your CEO, to demonstrate your progress. After the presentation, the CEO presses the button
>
> **[1:34](https://www.linkedin.com/learning/arduino-prototyping/purpose-and-pitfalls-of-prototypes?u=76281980&t=94)** a few times, there's a reflective pause, then, the CEO says, "So, I thought our product "was going to come in a case. "Wasn't it going to be a red case?" Your heart sinks, you know the CEO has been underwhelmed, and you prepare for the damage control you know will be required. In another scenario, let's say your prototype looks and works like the finished product. During your demo, the CEO is impressed and asks if the product launch can be announced in two weeks at your industry's annual trade show. You have to explain that's not possible. There's significant testing and engineering remaining to make a market-ready product. The CEO leaves disappointed. More damage control. In an actual case, I worked on a project with a very tight time line. It involved some complicated technology, and industrial design. We communicated with the client frequently, and prototypes received positive feedback. When we were days from completion, the project was canceled by the primary stakeholder. There was a communication breakdown with the person who mattered most, and they were unsatisfied with the project's direction. A physical prototype can have a strong impact, so it's important to have a positive impact. The key to this is communication. When showing your prototype, make sure you explain its purpose, and the type of feedback you want, and make sure you're communicating with the right people.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=0)** - [Instructor] Your prototype can take different [[Forms]] as it develops, from a simple bare board to a prototype that looks like a finished product. The most basic prototype is a single board. Most [[Arduino]] boards included an LED connected to pin number 13. Newer boards may include sensors and other components you can also use for [[Prototyping]]. Breadboards are another way to build a prototype. They all work on the same principle and come in multiple sizes. Components and wires are connected to the breadboard to build your prototype circuit. When you're first getting things to work, it's easiest to use what I call flying jumper wires. These are wires that arch over the board as you build your circuit. Flying jumper wires are very quick but can get confusing, and the wires are notorious for being pulled out at inopportune times like on your way to a presentation. Another approach to breadboard wiring is using wires cut to length and carefully aligned on the breadboard. These look neater and are generally more durable. You might use this approach for presentations and user testing. If you want a more durable prototype, you can hand-build your circuit on what's called perfboard. Perfboard comes in various sizes. Standard perfboard contains pre-drilled holes spaced at tenth of an inch intervals and which may or may not be interconnected like a breadboard. If you want to make several of the same prototype and you want to save time wiring components, or if you just want a neater looking prototype, you can design and order a custom [[PCB|printed circuit board]], or [[PCB]]. Software such as KiCad, Eagle, and others can be used to design your boards
>
> **[1:34](https://www.linkedin.com/learning/arduino-prototyping/prototype-form-factors?u=76281980&t=94)** from a schematic. With the resulting design files, you can easily order inexpensive boards online. Finished prototype boards are often available in less than two weeks. Finally, you may want an enclosure for your prototype. You can use off-the-shelf or found enclosures. There are many different enclosures in plastic or metal available in stores and online. Another approach is to craft a custom enclosure. You can use traditional methods and materials or you can design a 3D printable enclosure. 3D prints can be ordered online or printed yourself with a 3D printer. Usually your prototype will evolve as your design evolves. So you might start with a breadboard, then move to a perfboard or even to a custom PCB as your design matures. Choosing the right format at the right time can help make the prototype process flexible and fast.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PCB]] (2), [[Forms]] (1), [[Arduino]] (1), [[Prototyping]] (1), [[PCB|Printed circuit board]] (1)
> **Env Vars:** pcb (2), led (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [The prototype process](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=0)** - [Instructor] One way to think about [[Prototyping]] is as documentation. First there's a process of design. Then when the design is complete a prototype is built to communicate the design to engineers, management, and other stakeholders. You might start with a brief outlining the product goals. Then there's ideation and a design concept emerges. Next, a spec is written for the prototyper. And finally, the prototyper builds a prototype as a living document of the design. If necessary parts of the process can be repeated to refine the design and prototype. Another way to think about it though is that the prototype is part of the design process itself, evolving and informing your design as it progresses. By including prototyping in the design process you create a process I call nimble design. In nimble design you can think of the design process as containing multiple activities. For example, the completed design might include a brief, prototyping, engineering, physical design, documentation, and validation, among other activities. When all of the activities are complete the design is complete. In nimble design the process can start in any one of these activities, perhaps with an idea about how the product would look. Or maybe you're playing with some sensor technology that inspires a product idea. Once started the process can move between activities as each activity informs the next move. When all design activities are complete the design is complete.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/the-prototype-process?u=76281980&t=93)** Nimble design is especially useful when you're exploring new ideas and technologies and you may not have the information you need in one area until you've worked in another area. Nimble design also allows you to easily take advantage of shifting requirements and resources.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=0)** - [Instructor] [[Prototyping]] as part of a design process can begin without extensive planning. In fact, starting early is a good strategy for quickly gaining momentum and keeping the design grounded. Many projects begin with a product brief that describes the overall goal of the design and any considerations and constraints, such as target audience, cost, and timeline. A product brief can be a good starting point for the design process and your prototype. They say even the longest journey begins with the first step. In prototyping, the first step is often to focus on a single component or feature. Maybe connecting a component you haven't used before or creating a feature, like displaying the time on a small screen. This is a minimum viable prototype or proof of concept prototype and can be a small step that helps build momentum. Once you've determined the general outline of your prototype, next you need to select the components you'll use. Maybe you need a potentiometer or some LEDs or a gas sensor or a display. You may already have these lying around or you may need to order them. If you're ordering components, make sure they will arrive in time to fit your prototype's schedule or be ready to pay for expedited shipping. After deciding on components, the next stage is to design the circuit. You can draw on a napkin or use software, such as KeyCAD, EAGLE, or [Circuits.io](https://Circuits.io), to draw schematic or breadboard layout. Finally, you'll develop a sketch to implement your design
>
> **[1:36](https://www.linkedin.com/learning/arduino-prototyping/prototype-planning-considerations?u=76281980&t=96)** and animate your prototype. Remember when we talked about nimble design? Well, prototyping is inherently nimble. As you prototype, you and the team will gain new insight and the design will evolve. Be ready to visit all stages of the process as new design ideas emerge from this growing understanding and inspiration.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/demo-product-brief-of-handheld-game?u=76281980&t=0)** - [Instructor] To set the stage for the prototype we'll be building, imagine that you're working on a prototype for the product based on a short brief that was developed after meeting with product marketing. They felt there was a lucrative opportunity in developing a simple, handheld game for young to early-teen children. The project name is RETRO. The description is a retro action game that emphasizes motor skills and timing rather than puzzle solving. The audience is five to 14-year-olds. For the budget, they want to keep the cost of manufacturing below $5. And as for timeline, they want the product to be ready for manufacturing in six months. Engineering needs to have a complete design significantly earlier than that, which means the [[Product Design]] needs to be complete in six weeks. Now it's time for the design team to work out a concept for the product. After some brainstorming, research, and ideation, a design idea emerges. The idea is to create a simple targeting game using a small LCD display and a button for interaction. Basically, shooting its base invaders with a laser. The display shows invaders on one line, and a scanning laser on the other line moves back and forth. There's also a button that fires the laser when it's pressed. If the laser points at a target, the target is destroyed. Now that there's an initial design concept, it's time to begin [[Prototyping]].

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/define-the-proof-of-concept-prototype?u=76281980&t=0)** - [Instructor] The design concept is simple, but the team has questions about game dynamics and whether the game will be fun to play. The obvious solution is to build a proof of concept prototype to explore the design and maybe to use for some customer testing. With that, it's time to begin working on the prototype. A proof of concept prototype typically focuses on a specific part of a design, something you're uncertain about, or which needs more exploration. In our case, the proof of concept prototype will focus on game dynamics. If the game is fun, the team is confident it can work out any other design issues. One general concept for a prototype is to keep it as simple as possible. This facilitates a nimble process by reducing the investment in any one version making it easier to explore multiple ideas with fewer resources. Since we're focusing on the feel of gameplay, rather than the physical product, our proof of concept prototype will simply be a breadboard with a micro controller, a display, and a button. Now that we have the outline of our prototype, we can move on to selecting specific components.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Select components and libraries](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=0)** - [Instructor] For simple prototypes, you may have all the parts you need such LEDs, buttons, and potentiometers, but for specific applications or if you want to build multiple prototypes, you may need additional components. The mantra keep it simple applies to components as well as prototype design. Some components may be difficult to integrate. Other components may be breadboard-ready and have libraries, sample code, and tutorials to help. You've probably already used resistors and LEDs. These through-hole components have wires or leads that are designed to feed through holes in a breadboard or a [[PCB]]. Some components, however, are not designed for [[Prototyping]]. For these parts, breakout boards are often available. A breakout board is a PCB that contains the component and any additional support parts required. Connections from the breakout board to a breadboard are made using headers or pins which work easily with breadboards. Pre-wired add-on boards, called shields, can also be used for prototypes. Shields plug directly into an [[Arduino]] and add functionality like a display, motor controllers, Bluetooth, or wireless connectivity to name just a few, and they often have software libraries that make them very easy to use. Modules are similar to breakout boards, but they can be certified for manufacturing a commercial product. This can be helpful in the transition from prototype to product. An example of this type of module
>
> **[1:34](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=94)** is the Artemis by SparkFun. Arduino-compatible development platforms like Grove from Seeedstudio, Qwiic from SparkFun, and Feather from Adafruit provide breakout boards, connectors, cables, and software libraries to make prototyping as easy as plugging components together, then using the supplied libraries and software examples to get started. One thing to be careful of is the fact that there are two common voltage levels used with microcontrollers and components: five volts and 3.3 volts. Connecting a 3.3 volt pin to five volts may permanently damage the device. So it's best to check specifications to confirm that your components are compatible. Apart from the [[Hardware]], components often require software to access their features. For example, to read values from an accelerometer requires some specific programming. For these components, there's often a library available that includes functions to make programming much easier, and libraries often include example sketches which can help you understand how to use a component and can be a starting point for your own project. There are built-in libraries documented in the Arduino reference, and you can use the Arduino Library Manager to research and install many libraries from other developers. More information about libraries can be found on the Arduino website. Another way to get information about a component and its use is to search for a tutorial. These may be published in a variety of locations,
>
> **[3:08](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=188)** but a simple web search will often uncover many useful resources. In fact, we'll be using an LCD tutorial to get us started on our prototype. Prototyping supplies can be purchased from Adafruit, SparkFun, Pimoroni, Amazon, Ebay, and many others. Some things to consider when ordering are cost, quality, including support with good software libraries, and speed of delivery. The cost of components is usually a small part of the overall prototype budget, so it is often a good practice to order duplicate components just in case one is damaged at a crucial moment like just before an important demo. So getting back to our prototype, here are the components we'll be using. There are lots of choices, but for simplicity, we're going to be using a standard Arduino Uno. These are inexpensive and easy to use, and they have extensive support and a large community of users. For the display, the current design calls for a two-line by 16-character LCD. These are also inexpensive and easy to use with the built-in LiquidCrystal Arduino Library. For interaction, we'll start by using a single button. Next, we need a 220-ohm resistor for the backlight and a 10-k potentiometer to control the LCD contrast. Other components we will need include a breadboard and an assortment of jumper wires. Now that we have all the components in place,
>
> **[4:42](https://www.linkedin.com/learning/arduino-prototyping/select-components-and-libraries?u=76281980&t=282)** we can move on to designing the prototype circuit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (7), [[Prototyping]] (3), [[PCB]] (2), [[Hardware]] (1)
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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=0)** - [Instructor] Our prototype will contain an [[Arduino]] Uno, a display, and a button to control the game. With this in mind, we can begin planning our circuit. From looking at the Arduino LCD tutorial we located earlier, we know you need to connect the display to power. You also need to connect several other pins for lighting and contrast, and finally, you need to connect some pins to the Arduino to control the display. Using this information, we can draw a schematic, which is a good way to understand and document your prototype. As we discussed earlier, you can use EDA software to draw your schematic, but sometimes the easiest approach is to use pencil and paper. We can begin by adding power connections to the LCD. The LCD we're using runs on five volts, so we need to add connections to the Arduino five volt output and ground. The LCD uses a backlight to make the characters visible. This requires connections to power and ground. Power is usually connected to the LCD backlight on pin number 15 through a 220 ohm resistor. Ground is connected directly to the LCD pin number 16. LCD contrast is adjusted by connecting the center pin of the potentiometer to LCD pin number three. One of the outside leads of the potentiometer should be connected to five volts and the other outside lead should be connected to ground. The LCD uses three connections to control communication.
>
> **[1:37](https://www.linkedin.com/learning/arduino-prototyping/design-the-circuit?u=76281980&t=97)** These are the RS, RW, and E or EN pins. Finally, the LCD uses either four or eight lines for data transfer. We can do everything we need using only four connections. D2 through D5 are available on the Arduino and won't interfere with serial communications on pins zero and one. They'll be connected to pins 11 through 14 on the LCD. Note how the pin numbers are increasing on the Arduino and decreasing on the LCD. That completes connections to the LCD. The only other component we need is a button. The easiest way to connect a button is one side to ground and the other side to an Arduino digital pin. Pin D7 looks available. That completes our quick schematic. When you begin to put the circuit together, you'll have to translate this to a breadboard layout.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/make-a-pin-map?u=76281980&t=0)** - [Instructor] An [[Arduino]] has a limited number of programmable input/output, or I/O pins. All Arduino pins can be used for digital input and output. Some pins can be used for analog output and are sometimes called PWM pins. Some pins can also be used for analog input to read a voltage level between zero and five volts. And some pins have special uses like serial and other [[Forms]] of communication. When you're connecting pins for your prototype, you can sometimes run out of pins or end up with a conflict where you need a pin for one thing, but you're already using it for something else. If this occurs you may have to rewire pins so there's no conflict. Then you'll need to update your sketch to reflect the changes. An Arduino pin map is a good way to keep track of pin usage so there's less chance of having to make changes as the prototype evolves. The form I use is a table that lists all of the pins available on the Arduino along with their capabilities, special uses, and what they're being used for in the prototype. Having this information in one place helps planning and avoids conflicts. Recording the connections from the prototype circuit, we can see there are no problems, and the pin map will also be a useful part of our prototype documentation. By the way, a pin map template is available on the course materials for you to use.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=0)** - [Presenter] So, we understand the product brief, and we've done some planning for our proof of concept prototype to explore game play. Now we have to get the prototype up and running. The display is the most complicated part, so let's get that going first. Then we can add other elements as the prototype evolves. Looking at the schematic, in addition to the LCD we see we'll need a resistor to connect the display's backlight. And we'll need a potentiometer to control the LCD contrast. These need to be placed on the breadboard and connected to the [[Arduino]]. This early prototype is a proof of concept and doesn't need to be compact, so we can use a full breadboard which gives us more room to work with. Okay, let's jump in and start wiring things up. Here we are, ready to wire up the prototype. You can see we've got the LCD, potentiometer, some neat jumper wires here, resistor, and flying jumpers. So let's start by putting the main components on the breadboard. LCD first, in the middle. Making sure to leave some room above it for the jumper wires. And we have the potentiometer here, also put that in. Now we're going to place connections from the power and ground rails to the LCD using neat jumper wires. I use red wires for positive voltage and black for ground. The color doesn't matter, they just make
>
> **[1:34](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=94)** connections easier to identify. The ground rail will be connected to the Arduino ground and is on the edge of the board. All of our ground connections will be made to this rail. LCD pins are numbered from one to 16, with the pins at the top there, and one, five, and 16 are all connected to ground. So let's start by doing that. There is pin number one, between the ground and the pin. And pin number five.
>
> **[2:17](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=137)** And finally, pin number 16.
>
> **[2:25](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=145)** We also need to connect one side of our potentiometer to ground, so we can do that now.
>
> **[2:39](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=159)** Now, LCD pin number two connects to positive power, so we can do that.
>
> **[2:53](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=173)** Sometimes it's a little fussy getting wires in the breadboard holes. And the other side of the potentiometer also gets connected to power. We can do that. LCD pin 15, to the backlight, also needs to connects to positive, but through a 220 Ohm resistor. This limits the current so the backlight doesn't burn out. We can use the resistor as the jumper wire between the positive rail and the LCD.
>
> **[3:37](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=217)** That completes all of our power connections. Now we'll start connecting the LCD to the Arduino. First we'll connect the RS, or register select pin, from LCD pin four to Arduino pin 12.
>
> **[3:57](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=237)** Then we'll connect the enable pin from LCD pin six to Arduino pin 11.
>
> **[4:10](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=250)** Now we'll attach the data lines from the LCD to the Arduino. We start with LCD pin 11 or D four, to Arduino pin five. Then we connect LCD pin 12 to Arduino pin four. Then LCD pin 13 to Arduino pin three. And finally, LCD pin 14 to Arduino pin two. Next we'll add the contrast control to the LCD by connecting the potentiometer's middle pin to LCD pin number five. We go from the middle pin to the D zero or LCD pin five. Finally, to bring power to the breadboard, connect a jumper from ground on the Arduino to the ground rail on the breadboard.
>
> **[5:29](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=329)** Then connect a jumper from five volts on the Arduino to the positive rail on the breadboard.
>
> **[5:40](https://www.linkedin.com/learning/arduino-prototyping/connect-the-display?u=76281980&t=340)** Now's a good time to look over your connections to make sure they're all correct. As a simple test of your wiring, you can connect a USB cable to the Arduino from your computer. You should see the backlight come on. If not, remove the USB cable and recheck connections. Success. Since the backlight works, we can test the contrast control by turning the potentiometer all the way in one direction until each character position shows a dark square. If you don't see this, try turning the potentiometer in the opposite direction. Reduce the contrast until the squares are just invisible. That's it, now we're ready to start programming.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=0)** - You've connected your LCD. Now it's time to see if your [[Arduino]] can control it. We'll work on the sketch for our game soon, but now we just want to see if the LCD works properly. So let's start with what's called a Hello World sketch to see if we can get anything to appear on the display. We can write a sketch from scratch, but libraries often provide example sketches. So let's go to the Arduino IDE to see if there's anything we can use from the liquid crystal library to get started. So now on the desktop, we can open Arduino. Wait for it to initialize. And now if we go up to File, examples, liquid crystal we can see that there's a Hello World sketch. So let's open that. We'll look more closely at the sketch in a second. But for now let's just run it to see if it works. But first, make sure you've selected the correct board the Arduino Uno, and you've selected the USB port. Now to run the sketch, just click on the run button. You can see it compiling and uploading on the bottom. Now we can go to our display. If you don't see characters, you can adjust the contrast until they're visible.
>
> **[1:35](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=95)** You can see that we have hello world on the top line, and a number counting up on the second line. So let's look more closely at the sketch. Luckily, the sketch begins with a long comment block that documents how the display should be connected. Also mentioned is that this example is in the public domain so you can use it any way you want. Next we see that the liquid crystal library is included using this include statement. To initialize the display the sketch uses what's called a constructor. The constructor creates a variable or object used to access library functions. The variable is called LCD in this case, but can be any name. The constructor also specifies which pins are used to control it. The constants on the previous line define those connections and fortunately, they match the connections we've made so far. Now let's look at the setup and loop functions. In the setup function, LCD begin is a method that specifies how many columns and rows your display has. The last statement in setup, the print statement, prints the message Hello World. Now let's look at the loop function. Each time through the loop function, the sketch prints the value of Millie's the milliseconds since this sketch began.
>
> **[3:08](https://www.linkedin.com/learning/arduino-prototyping/display-hello-world-sketch?u=76281980&t=188)** Normally when something is printed, the next thing printed will come right after it. But that wouldn't be very good here. So the sketch uses set [[Cursor]] to set the position back to the beginning of the line each time. That's it for our hello world sketch. It verified that the display works properly. We can continue by modifying the sketch to experiment with the display and library. We can also use this hello world as the starting point as we build our prototype.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/challenge-controlling-the-display?u=76281980&t=0)** - [Instructor] This first challenge is a chance for you to make sure the [[Arduino]] IDE and the display are properly set up and to make some changes to test your understanding of the "Hello World" sketch. The goals of this challenge are simple. First, change the message on the top line of the display. For example, change it from Hello World to Hey Universe. Second, reverse the two lines on the display. Put the counter on the top line and the message on the second line. That's it. Try this on your own and in the next video, I'll show you the solution I came up with.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=0)** - [Instructor] Here's a solution to the challenge. The challenge was to first, change the message on the display. For example, change from Hello World to Hey Universe. The second goal was to reverse the two lines on the display, putting the counter on the top line and the message on the second line. The necessary changes are straightforward. First, you need to change the text in the LCD print statement. Then you need to explicitly place the [[Cursor]] before each line is written to the LCD using the set cursor method. Let's go to the [[Arduino]] IDE to see how this works. Here we are in the IDE. The first thing I'm going to do is save this and you can see I've loaded Hello World. I'm going to save this under a new name. So I'll just call it Hello World Challenge And if we scroll up here, you can see the bulk of the program. And there are two places where we need to make changes. First of all, we need to change the message here where it says Hello World. We can just change this to Hey Universe and add another exclamation just for emphasis. And we need to change which line it's been printed on, because by default, it's being printed on the top line.
>
> **[1:35](https://www.linkedin.com/learning/arduino-prototyping/solution-controlling-the-display?u=76281980&t=95)** So we have to explicitly put it on the second line by using LCD set cursor, and then we want column zero, and then we use one because the line numbers start with zero. And then down here where we display the counter, instead of putting it on the second line, we just need to change that to zero, the line number, to put it on the top line. And now when we run this and upload it, you can see by looking at the prototype that the message is on the bottom and it's changed to Hey Universe and the counter is on the top. And that's it for my solution to the first challenge.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/understand-display-dynamics?u=76281980&t=0)** - [Instructor] The design concept we're working from has two rows, one row with invaders and one row with a laser that moves back and forth. We already know how to show characters on the display using set [[Cursor]] and print, so let's focus on animating the laser. Traditionally, animation consists of frames being presented one-by-one. Changes from frame to frame appear as motion. For animation controlled by a sketch, each frame's changes have to be calculated, then displayed. Our laser animation works the same way. For each frame, the laser moves to a new column. The question now is how would you sketch that? One way to start is to write what's called pseudocode. Pseudocode is an informal description of an algorithm or process. Pseudocode won't ever be used directly, but it can help you when it's time to write your sketch. For example, the pseudocode description of blinking an LED might be turn the LED on, delay half a second, turn the LED off, delay half a second, and repeat. Since pseudocode is informal, the precise language isn't important. It simply has to be meaningful to you and provide enough information to translate to actual code when you begin [[Sketching]]. In pseudocode, our laser animation algorithm might look something like this. Calculate the laser position for the frame, display the laser, then repeat. This is enough to start with. The next step is to turn the pseudocode into a sketch.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=0)** - [Instructor] So, we've developed this simple pseudocode describing our animation. First, we calculate the laser position for the frame. Then, we display the laser. Then, we repeat. Now, let's go to the [[Arduino]] IDE to see how we would implement that in our sketch. Okay, so, we'll open the IDE. Okay, so, now we're going to go to the Hello World sketch in our examples here. LiquidCrystal, Hello World. I'll maximize that so we can work with it. And the first thing you should do is you cannot save changes to a built-in file. So, let's save it under a new name. I'm just going to call it RETRO_1. We can also save a new version every time we get ready to make changes later on. Now, we can get rid of a lot of the existing stuff in here. So, let's get rid of these comments at the beginning. I'm going to leave the circuit in here, just for reference, but we can change the name to RETRO. And brief description, which is space invader game. And then, it is an author. Use my pseudoname, which is Red Team Leader. And we can also get rid of the other comments down here about who wrote the original thing
>
> **[1:35](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=95)** and the licensing, et cetera. So, that's it for the comments. Now, we can also get rid of some unnecessary code from the Hello World. This stuff all is related to the LiquidCrystal library, so, we'll leave that there. We don't need to print out Hello World anymore. So, we can get rid of that. And we can also get rid of this print for the millis in the loop, milliseconds. So, get rid of that. And I'm going to save this, just so we're clear to this point. So, the original sketch wrote out a message at a fixed location. In this sketch, we need to vary the location of the laser. So, let's create a variable for that. So, I'm going to call, it's an integer variable. And we'll call it laserColumn. Let's just add a comment for that. Current laser position. And let's initialize that in our setup, here. Initialize. So, we'll say laserColumn equals zero. Now, let's look at how we would do the animation. So, the first thing in our pseudocode is to update the location in the frame, or recalculate the frame.
>
> **[3:07](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=187)** So, let's do that. And to do that, we're simply adding one to the column each time for the new frame. So, we just say laserColumn equals laserColumn
>
> **[3:26](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=206)** plus one. So, that gets us the new position. And now, we need to print out the laser character or a laser character at that position. So, we know that we can set the position using the setCursor command, but instead of having a fixed column, we want to use laserColumn here, as the column we're going to print on. And it's on the same row, 'cause it's the second row. And the rows are numbered, starting from zero at the top. And then, what we want to do, is print at that location. And we can use any character. But the caret is a nice character for our laser. And that's it. So, each time through the loop, it'll update the position. And then, print the character. There are no errors here. So, now we can go over and look at our prototype. Well, I don't know about you, but this isn't exactly what I was expecting. You saw the carets kind of zoomed across the screen really quickly, and they're all over the place. They're not just on the second row. So, let's try to figure out what the problem is here. Let's deal with the first thing, which is everything moved too quickly. So, the way we dealt with that in other sketches, for example, the blink sketch, is to just put a delay in the loop. So, each time through the loop takes a little longer. So, let's just do that here. And let's add a half a second
>
> **[5:03](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=303)** or 500 millisecond delay. And let's see what that does. So, I'm just going to upload it again. Well, this is looking a little bit more like what we want. It gets to the edge of the screen, nothing happens. We keep waiting. Oh, now it's beginning some random lasers up here at the top. So, let's deal with the fact that it's not moving in the same sense that we wanted. It's just kind of leaving a trail behind. The problem with that is that while we are writing a new laser in a new position, we're not getting rid of the old laser. So, we have to put an erase statement in here. And the way we do that is up at the beginning of the loop, let's just say erase the old frame. And to do that, we just do the same thing we did to write it. We do lcd.setCursor laserColumn,
>
> **[6:06](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=366)** a one. 'Cause it turns out laserColumn is where we wrote the last laser at. And then print. And this time, we're going to print a space, rather than the laser character. And that should erase the old laser. So, let's try this again. And now, we see we actually have a laser, which is fairly respectable. It's still disappearing when it gets to the end, and that's a problem. The problem with that is, if you haven't figured it out already, is that there are only 16 columns in the LCD, and they're numbered from zero to 15. And the laserColumn just keeps counting up. So, what happens when the column gets to be greater than 15? Something indeterminate happens, and then it begins moving along the top. So, to fix that, we just have to limit the laserColumn so that it doesn't get to be greater than 15. So, we can do that with an if statement, here. And, so, we say if laserColumn is greater than 15, then, we want to just set the laserColumn back to zero. So, it'll go back to the left side and then start scanning again. Let's just save this and then run it again. Okay, now we see the laser moving. And now, let's see what happens when it gets to the edge. Starts over again.
>
> **[7:44](https://www.linkedin.com/learning/arduino-prototyping/implement-display-dynamics?u=76281980&t=464)** And, so, there we have it. We've got a respectably animated laser, and we can move on to the next steps.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/challenge-modify-the-animation?u=76281980&t=0)** - [Instructor] In this challenge, you'll get a chance to experiment with the prototype animation. The challenge has two goals. First in our current prototype, the laser animation goes in a single direction from left to right. The goal in this challenge is to make the laser bounce back and forth in both directions. The second goal is to experiment with different animation speeds and observe the results. Have fun working on this challenge. In the next video, I'll show you the solutions I came up with.

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
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=6)** - [Instructor] Here's the solution I came up with for this challenge. Remember, this challenge has two goals. First, in our current prototype, the laser animation goes in a single direction from left to right. The goal is to make the laser bounce back and forth in both directions. The second goal is to experiment with different animation speeds and observe the results. Currently, our prototype moves the laser by adding one to the laser column each time through the loop. When the laser goes past the right side of the LCD, the laser column is reset to zero. To make the laser bounce, you can start by using a variable instead of a constant one for calculating the laser animation step. Then, when the laser reaches the right side of the LCD, you can change the laser step to minus one. When it reaches the left side, the laser step changes to one again and so on. You can see the If statements here. Another way to code the same thing is to use a compound condition in the If statement to check for the laser reaching either side of the display. If so, just reverse the laser step using the minus sign. So that's the idea. Now let's go to the [[Arduino]] IDE and look at how I added this to the sketch. Here we are in the IDE and I've loaded Retro_1 here. And the first thing I'm going to do is save this
>
> **[1:39](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=99)** with a new name. I'll call it Retro_1_Challenge. Then, we need to add a variable for the laser step. So I'll add int laserStep. And then in setup, we need to initialize it.
>
> **[2:14](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=134)** And I'll just say, laserStep = 1. Then here, where we calculate the laser column, instead of using the constant one, I'll use laserStep here, and then here, where we limit the column, I want to use the compound If statement. So first of all, if the laser column is equal to zero or the laser column is equal to 15, then instead of setting the laser column explicitly to zero, I want to say laserStep equals minus laser. So those are all the changes. Let's upload this. See what happens. Okay, you can see the laser's moving left to right as normal and then it bounces back and starts going right to left. So the next thing we want to do is experiment a little bit with the speed. It's going a little slow now. So let's make it 10 times faster. Change the delay to 50, which is what's controlling the speed here. I'm going to upload that. And now on my display,
>
> **[3:50](https://www.linkedin.com/learning/arduino-prototyping/solution-modify-the-animation?u=76281980&t=230)** you can't really even see the animation, or it's very difficult. These displays have a specification called the refresh rate, and that's how long it takes for the crystals to dark and then actually display characters. And if the animation is too fast, the display doesn't have time to display it before it moves. That's what's happening here. So let's change the display rate, make it a little slower. 150 rather than 50. So it's three times slower and let's upload that. And now you can begin to see the animation. So pick a speed that's comfortable for your display, cause the displays can be different for that. And that's it for my solutions to this challenge.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/understand-interaction-logic?u=76281980&t=0)** - [Instructor] We now have a laser animating across our display and while you probably feel pretty good about getting that to work, truthfully it might get a little boring after a while and the design concept specifies some interaction like zapping some invaders. In this video we'll see how to add invaders and interaction to our prototype. Here's the current pseudocode for the animation. We erase the previous frame, calculate a new laser position, display the laser, delay for a while, and then repeat. The design concept specifies a button for interaction, so we need to update the pseudocode to add checking whether a button is pressed. And if it is, then take some action. So here's some updated pseudocode. We erase the frame just like before, calculate a new laser position, display the laser, but now we check the button. If it's pressed below an invader, then we zap it. Then we go back and delay for a while and then repeat. Now of course we need some invaders on the screen to zap, so let's add that to our pseudocode, and we can do that in the setup function. Now of course we need some invaders on the screen to zap, so let's add that to our pseudocode. We've added that in the setup function. So that's the general idea. Now we just have to get these changes working. First we'll connect the button to our prototype, then we'll look at modifying our sketch to zap the invaders.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Breadboard buttons and update pin map](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=0)** - [Instructor] Looking at our prototype circuit, we see that adding the button to the prototype is as easy as connecting one side of the button to ground and other side to pin number seven on the [[Arduino]]. So let's go to the breadboard and the button. Then we'll return to the IDE and modifier sketch to add interaction. First let's add the button to the breadboard. There are different types of buttons, but they all connect two leads together when pressed. So make sure that two leads are on different rows of the breadboard. We know from the schematic that one side of the button connects to ground, so just like we have before, let's add a neat jumper from the ground rail to one side of the button.
>
> **[0:54](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=54)** Finally we need to connect the other side of the button to pin number seven on the Arduino. We can use a flying jumper wire for this.
>
> **[1:11](https://www.linkedin.com/learning/arduino-prototyping/breadboard-buttons-and-update-pin-map?u=76281980&t=71)** And that's it for connections. Earlier we recorded the button pin in the pin map. So now let's go to the IDE to update our sketch and add interaction from our pseudo-code.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=0)** - [Instructor] Our updated pseudocode has added setting up the invaders on the display, checking the button, and if the button is pressed when the laser is below an invader, the invader is destroyed. The first new feature there is to set up the invaders. Following our keep it simple mantra, one approach is to simply use LCD set [[Cursor]] and LCD print to display a string of invaders at the top of our display. One thing that will be useful to know when we get to our sketch is that individual characters in a string can be accessed directly. For example let's say you set up your invaders string as a variable, and set its value equal to 16 characters to fit our display. You can then reference the first character in this string as invaders with a zero between square brackets. And it is an invader. The fourth character in this string is invaders with three between square brackets, and it is not an invader, it's a space. Counting characters starts with zero rather than one. With that in mind, let's go back to the IDE and our sketch to add some interaction. Here we are in the retro one sketch that we ended with last time. So we should save it with a new name before we get started with these changes, so we can change it to retro two. So the first thing we're going to do is add a variable for the invaders. We'll do that up here at the top, below the include statement.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=93)** So, add a comment, and then set the string type, invaders, and then we'll want to initialize that in setup. And so we can say, so we just say invaders equals, then we put double quotes, then let's just put in some two, three, four, five, six, seven, eight, nine, 10, 11, 12, 13, 14, 15, 16, some random invaders.
>
> **[2:20](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=140)** Now to actually display the invaders we don't need to do that each time through our loop, so we can do that in the setup function as well. We have to set the cursor to the right position, LCD set cursor, this is going to be on the top row, so it's column zero on the left side, and then row zero. And then we just use LCD print to print the invaders. Okay, we can save the sketch and let's give that a try to see how it works, so just upload it using the upload button here, and there you go, we've got some invaders, and our laser menacing them from below. So let's now go back and see how to zap the invaders. So the next thing we need to do is put in the statements to read our button and to zap an invader if we press a button when the laser is below the invader. So the first thing we need to do is set up the pin that the button is connected to. Setup laser button, and we use the familiar pin mode command, and our button is on pin seven, and we want to initialize it in what's called input pull up mode.
>
> **[3:56](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=236)** That just means by default the button is high, or the pin is high, and when you press the button, since it's connected to ground, that will bring the pin low. So now in our loop we want to check the button each time through the loop. Here we can add some code to check the button and zap invaders. To do this we use an if statement, and we start out if we're going to read the pin seven using digital read, and then we're going to check, to see whether it's up or down. We'll use that double equals sign for comparing two values, and we're going to say if it's low that means we've pressed the button, then we want to set the cursor to that column in the invader line, so we'll say set cursor, column is going to be our current laser column, and the laser is on row one, but the invaders are on row zero, so we'll put our cursor up on row zero where the invaders are. And then we're going to print a space, which is how we zap our invaders. And that's it, that's all we have to do. So let's save that and then upload it to our prototype and see how that works.
>
> **[5:31](https://www.linkedin.com/learning/arduino-prototyping/implement-buttons?u=76281980&t=331)** Uh oh, there's an error here, oh, turns out you have to make sure that you're applying the set cursor to the LCD. Try that again, it's done uploading, now it looks the same as before, but now we should have some interaction with our button. Oop, you can see some invaders disappearing, which is pretty cool. We'll develop this further as we go along, but for now we have the basics of the game, we have some invaders, and we have a laser, and we have the ability to zap invaders. We've added interaction and our prototype's game play is basically complete. One of the most important parts of [[Prototyping]] is playing with it. First of all it's fun when your prototype actually works, but it also helps you understand how the prototype works and feels. So if you have your prototype up and running, spend some time now to play with it. Keep track of anything you see you might want to change.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/challenge-name?u=76281980&t=0)** - [Instructor] The prototype now has some interaction in the form of a button and zapping invaders. But part of interaction is giving the player feedback about game progress. So in this challenge, your goal is to stop the animation and display a message when all of the invaders have been zapped. This is a small bit of positive feedback for successfully completing the game. You might be wondering how to stop a sketch. One answer is that you can use an empty while statement with a constant true condition. Since the condition is always true, the sketch stays in the loop with no way out. To restart your sketch, press the reset button on your [[Arduino]]. That's it, now it's your turn to work on solving this challenge. In the next video, I'll show you my solution.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=0)** - [Instructor] Here's my solution to the challenge. Remember the goal of the challenge is to display a message on the LCD when all of the invaders are zapped. Here's some pseudocode that explains the basic idea. First, create a variable with the number of invaders at the beginning. Then each time through the loop, if the laser's fired by pressing the button, check to see if there's an invader there. If so, subtract from the total invaders and erase the invader from the string variable. Finally, if the number of invaders reaches zero, display a message and halt the sketch. Now let's head to the desktop to see how this works in code. Here we are in the IDE. First thing I'm going to do is I've preloaded retro to our starting point. I'm going to save that as retro to challenge.
>
> **[1:05](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=65)** And now, the first thing I need to do is to the code is, add a variable for the number of invaders. So I'll set that to be an integer and then down here in set up, or I initialize the invaders, I can say number of invaders equals, I think there are 10 asterisks there. So I'll set the number of invaders to 10. Then here in the loop, this is where we check the button and zap and invader, if the button's pressed. So what we need to do is check to make sure there's an invader actually there. And so if we say, if invaders indexed to laser column
>
> **[2:04](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=124)** equals an asterisk and notice I used a single quote there because it's a character. I need to use a double equals rather than a string. And then I'll set a block here and I want to set the [[Cursor]] erase the invader, but now I also want to remove it from the invader string. So I'll say invaders also with index laser column
>
> **[2:42](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=162)** equals, I'll put in a space and then I have to set number of invaders equals number of invaders minus one. So I have one less invader and then close off that if statement. So that takes care of making sure I know how many invaders are left. Now I need to say if there are nothing, if there are no invaders left, then print a message. So if I say, if number of invaders equals zero and the first thing I want to do is clear the LCD then LCD print all invaders for the first line and then set cursor to the second line and say LCD print zapped, and a few exclamations for effect. And then I want to stop the sketch with that while loop. So I can say while true, do nothing.
>
> **[4:13](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=253)** And so that should stop the sketch until you reset everything. Okay. So that's the code. Let's upload it and see how it works.
>
> **[4:30](https://www.linkedin.com/learning/arduino-prototyping/solution-name?u=76281980&t=270)** Okay. You can see it's kind of working as expected here. Let's see what happens. There we go. It's gratifying to get some positive feedback after you've completed the game. And that's my solution to the challenge.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=0)** - [Instructor] You expect your world to be responsive. When you push on a door, you expect it to respond immediately. If it doesn't, you may run into it. In our prototype, you may have noticed that the timing between pressing a button and zapping an invader is a little off. That timing issue makes the prototype a little confusing and unpredictable. Let's see what that problem is and see if we can fix that. If you look at the code in the Loop function, you can see there's quite a bit that goes on, but the [[Arduino]] is pretty fast and it finishes everything quickly. Initially, we let the loop run as quickly as it could, and the animation was way too fast. So to slow things down, we did something that's pretty common. We added a Delay statement, and that's what's causing the timing problem. The problem with Delay is when it's delaying, nothing else is happening. That's okay if you're just watching what's going on, but if you want to interact, you're blocked during that time. If you press your button, nothing will happen. There's just a small window when the sketch can read your button press. Delay is referred to as blocking. It blocks everything else until it's complete. Let's look at a simple sketch to illustrate this. So here, we're starting with a new sketch, and right off the bat, I'm just going to save it. We can call it Blocking. And all we're going to do, is we're going to turn the LED on and off when we're pressing the button or releasing it.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=93)** So first of all, we need to set up the pins for the button and the LED. So we'll say pinMode, seven, this is for the button. We already know that that's INPUT_PULLUP before. And I'm going to set pinMode, 13, as output for the LED. Now, in the loop, we're going to do something a little tricky. We're going to say digitalWrite for the LED on pin 13, but the value we're going to use for that is just what we're going to read from pen seven, so we can use digitalRead on pen number seven. Now what's going to happen is when the button press returns a low, the light will go off. When the button press returns a high, the button will go back on. When the button is pressed, it returns low and when the button is released, it returns high. We're also going to put in a delay here. We'll put in a two second delay for each loop. So let's save this, and then upload it to our prototype and see what happens. Now if we look at our prototype, and see that the LED is on because the button is up. If we press the button down, the LED goes off. We release the button, the LED comes on, but there's sometimes a delay in both directions.
>
> **[3:11](https://www.linkedin.com/learning/arduino-prototyping/blocking-versus-non-blocking-code?u=76281980&t=191)** That's because the delay statement is blocking. It's waiting that two seconds. Now if we go back to the Arduino IDE to that sketch, and comment out delay, and upload the sketch again, and look at the LED. When we press it, it's instantly responsive. That's because there's nothing blocking in our loop. Our sketch illustrates the problem, but it's a simple case. If we remove delay from our prototype, we've already seen how the animation goes too fast. One solution is to use a timer to time steps in your animation. The timer will keep track of animation intervals and only update the animation when necessary, otherwise it skips the animation and leaves the Arduino free to do other things like checking the button.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=0)** - [Instructor] We've seen the problem when the delay function blocks your code from doing anything else. Now we'll see about another way to code without blocking by using a simple timer. A timer is based on the built in function Millis. Millis returns the number of milliseconds since the sketch began. Basically you save the value of millis when the timer starts, then you keep going until the required number of additional have passed. When that happens you run your time code. Let's look at the pseudocode describing a timer in our prototype. First of all you save the current millis as the start time. Then in the loop, if the current millis minus start time is greater than the timerLength, then your timer has expired, so you reset the timer, update your animation, and continue on. Now let's look at the code used to implement a timer. First we need some variables. One for the timerStart, one for the timer interval, and one for the currentTime. Because the value of millis can get quite large, you should declare the variables as unsigned long, which just means they can only be positive and they can hold the maximum size integer. To set up the timer, you set the two timer variables in the setup function. Timer intervals is the number of millis you want the timer interval to be. timerStart saves the value of millis when the timer begins. To check the timer, you can subtract the timer start time from the current time to get how long the timer has been running.
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/understand-timers?u=76281980&t=93)** If that time is greater than the interval, the timer has expired, and it's time to do something. The check would look something like this. currentTime equals millis, then if the currentTime minus the timer start is greater than the interval, do something. Finally to reset the timer and begin the next interval, we need to reset the timer start to the current time. So we've added that to our pseudocode and that's all there is to it. This non blocking timer template works in many applications where you need to accomplish tasks on timed intervals.

> [!info]- Semantic Content
>
> **Code Identifiers:** currenttime (3), timerstart (2), timerlength (1)
> **Prerequisites:** set up (1), setup (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Implement non-blocking interaction](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=0)** - [Instructor] Using a timer is a way to time things in your sketch without holding up or blocking the main loop. This allows an animation to continue, for example, while still being responsive waiting for a button press. Here's a reminder of the basic timer pseudocode. We start the timer by saving the current millis as the start time, and then each time through the loop, we check if the current time minus the start time is greater than the timer length. When our timer has expired, we update the animation and reset the timer. So now let's look at how this would actually be implemented in our prototype. Okay, so we're looking at our previous sketch, RETRO_2. Let's right off the bat save this as RETRO_3. First of all, let's get rid of our delay, because we're going to be replacing that with our timer. So we can do that. And then we need a couple of variables up here to manage our timer, three in particular. First of all, we need... A start variable. Then we need... The interval. And then we need something for the current time. Okay, now we need to initialize a couple of those in setup.
>
> **[1:38](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=98)** We can do that right here. And the first thing we need to do is set timer start equal to millis, which starts the timer off at the current sketch time. And then we need to set up an interval so the timer knows how frequently to run. We've been running our prototype kind of slowly, at 500 milliseconds per loop. Let's speed it up a little bit and use 250 milliseconds. Now the last thing we need to do is put the timer in our loop, and we're going to start right up at the top here. And so we set the current time to the millis now. This is kind of the meat of the timer. We check if the current time minus the timer start is greater than the timer interval. Then we want to do something, and in our case, the thing we want to do is all of this animation code. So only when the timer goes off will it, move it over a little bit, will it update the frame, and then after the code, since we have an if block here, it opens with a bracket, we can come down and put a closing bracket there. So now all we have to do, let's save it,
>
> **[3:14](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=194)** okay, and now we can run it and see how it works. Okay, looks like it's not working, and I know exactly what I did. The thing I forgot to do was, you have to make sure to reset the timer. Otherwise the timer just runs once.
>
> **[3:37](https://www.linkedin.com/learning/arduino-prototyping/implement-non-blocking-interaction?u=76281980&t=217)** Timer start equals the current time. Okay, so let's save that and give it a try. There we go, that works a little better. So now you can see that the animation appears to be moving correctly, it's working a little faster. And it's being pretty responsive to these button presses. So there you go, you've got a non-blocking timer running your animation.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=0)** - [Instructor] You're probably pretty familiar with how switches work on the [[Arduino]]. Depending on the circuit, pushing, pulling, or flipping the switch makes it go high or low. In reality, though, switches usually don't transition cleanly from one state to the other. On both the down and up motion, there can actually be a small bounce before the switch settles on its value. The settling time can be anywhere from a millisecond or less to several hundred milliseconds, depending on your switch. When your sketch loop runs slowly, and you only check your switch once every few hundred milliseconds, switch bouncing may not be much of a problem, but now that our prototype is using non-blocking code, the loop is running very fast, and it may read the switch value multiple times during the transition. This could result in several presses while the switch settles rather than a single one. To deal with this, we can use a technique called debouncing to help ensure the switch is read accurately. The basic idea is that you read the switch multiple times and only record a change when the readings are consistent. There are different approaches, but in the interest of keeping it simple, we'll read the switch only twice, but separated by a delay and only when we sense a change on the first reading. The amount of delay can be altered. The pseudocode for switch debouncing could look something like this. Get a new button state. If the state has changed, delay a while. Check the button again. If the state is still the same, then adopt the new state. So let's go to the IDE and see how this would work in our prototype sketch.
>
> **[1:36](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=96)** Okay, we're looking at the sketch where we left off last time. What we'll do first of all, like we always do, is save this with a new name. RETRO_4. Now we're adding debouncing code to this, so as usual, the first thing we need to do is add a couple of variables for this.
>
> **[2:04](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=124)** And the first one we need, these are integers. They don't have to be large integers. So the first one is the current reading, and then we need another variable for the new reading. We need both so that we can compare them and see if anything has changed. In setup... We initialize debouncing by setting the current reading to the current value of the button pin. So that would be digital read on seven. And now we come down to where we're just doing a simple read here. Let's add some debounce. And we start that out by checking the button here. Equals digital read on pin seven. And then we check and see if the new reading has changed from the current reading. So if new reading is not equal to current reading, then we're going to do something, and what we're going to do is we're going to wait for a while, and we're just going to wait for four milliseconds. Then we're going to take a new reading.
>
> **[3:45](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=225)** And we're going to do the same recheck, or the same if statement. We'll see if it's still not equal to the current reading. And if that's true, then we want to set the current reading to the new reading. Okay, so when we come out of this debouncing section, our current reading will be an accurate reading of the button. So we don't need to check the button again here, we just replace this with whatever the current reading is. And if it's low, meaning the button is pressed, then we're going to zap invaders. So we can save this, and then upload it. There we go, we see that the sketch is working. Let's see if we can still zap invaders. Yep. Then you can be able to notice that it's a little more reliable, the button is more reliable. Okay, we've seen an easy way to debounce our button. One thing to keep in mind is that any time you use delay in your sketch, it is blocking. That means if you use this method for debouncing a very noisy switch or button, it could affect the response time of your sketch. If you look at the built-in Arduino example, 02_Digital Debounce, you'll find a sketch
>
> **[5:19](https://www.linkedin.com/learning/arduino-prototyping/button-debouncing?u=76281980&t=319)** that uses a timer to debounce a button without blocking the main loop. The code is more complicated than our approach, but might be useful if your application requires maximum responsiveness. But keep in mind, even with non-blocking debouncing, a noisy button or switch will affect the input responsiveness. If after adding debouncing to your sketch it's still not responsive, you might try a different button. There are many discussions about the best way to debounce buttons on the internet, including modifying the button circuit, but our manta is keep it simple, so we'll stay with our simple solution.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=0)** - [Instructor] If you've been playing around with your prototype, you might have noticed that while the button is responsive, sometimes you zap two invaders with a single button press. In fact, you may have discovered the cheat that you can destroy all the invaders by just holding the button down while the laser moves. Let's take a minute to talk a bit more about buttons. Then we'll see how we can improve the laser situation. Buttons are pretty natural. You press them, and you release them. And in a sketch you can read the value from the connected [[Arduino]] pin to determine if the button is up or down. But sometimes up and down aren't quite enough. You may want to toggle a light on and off but only when the button is pressed. In other words, when the button does from up to down. But you don't want to continue toggling the light while the button is down. That's the situation with our laser. The same may apply to a button release. All of these use something called edge detection. Edge detection just means to detect the transition or edge of a signal. In this case, the voltage on the button pin. So let's look at the pseudocode to fire a laser only on press. First you remember the current button state, low or high. Then you get the new, debounced button state. If the previous state is high and the new state is low, then you fire the laser. Now let's go to the IDE to see how it would work in our prototype sketch.
>
> **[1:34](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=94)** Okay, here we are after we left off last time. First thing we do, as usual, is save our sketch with a new version. This time RETRO_5. And the only thing we need to add this time is, we had some button debounce variables, but let's add an edge detection variable. And we can call this previousReading. And we have to make sure we've given it a type. Okay. Now the only thing we need to do is before we debounce the button, we need to save the current button reading so that we can compare it with the button reading after it reads the buttons. So we'll say previousReading equals currentReading.
>
> **[2:39](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=159)** Now it goes through and it debounces the switch. Now here, instead of using just one condition, we can say if previousReading is equal to HIGH
>
> **[2:59](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=179)** and, that's what the double ampersand means, both these conditions have to be true. And the currentReading is LOW, that means the button has gone from up to down, and it's a fire. Then we'll zap the invader. So let's save this and then upload it to our sketch
>
> **[3:26](https://www.linkedin.com/learning/arduino-prototyping/advanced-button-interaction?u=76281980&t=206)** and see how this works. So it looks like all the scanning is working as before. And I can still zap them, but if I hold the button down, you see it only zaps one invader at a time.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=0)** - [Instructor] As you prototype, you'll begin to realize that you're using some of the same code patterns over and over. For example, the debounce code that we created earlier might be useful in any prototype we build that uses buttons. We can easily Copy and Paste this code from one sketch to another, but then we'd have to edit the code to reflect the pin number being debounced and the interval being used in the new sketch. Another way to reuse the debounce code from sketch to sketch is to create a debounce function. The function can be copied to different sketches, just like sharing the original code. But we'll see in the finished version that the function won't require any editing to reflect different pin numbers or debounce times. A simple version of the debounce function just uses the exact same code as the sketch, but the code is included in the function definition. A function definition begins with the function header. The header contains the function name. You can choose any name, just like variables, but it's good to use descriptive names. To the left of the name is the type of value this function returns. In our case, debounce returns either high or low to reflect the button values. These are integers, so the type of the function is int, and you can see the last statement in the function returns the value of currentReading. Some functions don't return values. For example, the delay function has no value. Functions without a value use the type void.
>
> **[1:38](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=98)** The main part of the function is called the function body and is surrounded by curly brackets. To use debounce, you can just replace the debounce code, simply assigning the value of the debounce function to the currentReading. Using debounce this way is possible, and it does make our prototype code a little easier to read. But this function depends on variables specific to this sketch, like newReading, and the pin number and debounce interval are also specific to this prototype. Because of that, we'd have to change the function quite a bit to use it in another sketch. Fortunately, by changing some things about this function we can make it more generally useful. The problem with our original function is that it uses specific values and variables that are defined globally in the sketch. To make the function more general, we can add variables in the header. These are called parameters. The parameters all include types, just like the normal variable declarations. But the parameters create variables that are local to the function and don't depend on the [[Representational State Transfer (REST)|rest]] of the sketch. You then substitute the local parameters for the global variables in the function. You can also create a variable inside the function that is local just to the function. To use the debounce function in our sketch, we replace the debounce code
>
> **[3:10](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=190)** with a simple call to the function that contains specific values and variables that are matched to the parameters of the function. You can copy this function to another sketch and use it without any editing to debounce any pin with any debounced interval just by changing parameters. Note that the currentReading variable is used as a parameter and changed to the debounce function's result. When debounce is called, currentReading contains the previous button value. That allows debounce to determine if anything has changed that needs to be debounced. The returned value is the new current button value and will be used the next time debounce is called. That's the general idea. Let's go to the IDE and look at how this works in practice. Okay, so here we are with the sketch the way we left off last time. First thing we're going to do is Save this with a new name. Let's put it up to retro six. Now we're going to create a debounce function. The first thing we should do is come down here and create the header and body of the function. So remember, it's an int, and it's called debounce, and then it had several parameters, the pin number, and the pinState, and finally, the interval.
>
> **[4:48](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=288)** And then the code was going to go between these curly brackets here. Okay. So now, to move the debounce code in there we're just going to Cut it from the main sketch and put it in the function. That looks good. We're going to replace these parameters where they should go in the code here. The pin represents number seven here, so pin seven in the original sketch. We'll do that. Four is the interval and pinState is what we're calling currentReading in the code here. I'll change those to pinState. We're going to use Copy and Paste. And then we have this newReading which is left over from the code, but it refers to a global variable, so we're going to create a new local one called newValue so all of the newReadings get replaced with newValue.
>
> **[6:07](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=367)** There we go! The function uses these parameters to input to the code here, and it uses newValue as a local variable. So now, to go up and put debouncing back in our sketch, we end up with currentReading after this bit of code, so we have to say currentReading equals debounce on pin number seven using the previous currentReading as the reference, and then using four as the debounce interval. So that's it for the changes to this sketch. Let's Save it and then upload it, and see if it works. It looks like everything works like it did before except nothing is happening. I know exactly what the problem is. One of the things you have to make sure to do in a function is if it has a value you have to return that value. In our case, we have to return pinState, and that should help. See if this works any better. It does not.
>
> **[7:43](https://www.linkedin.com/learning/arduino-prototyping/implement-button-functions?u=76281980&t=463)** So the next problem is that one of the newReadings did not get replaced with newValue. Let's see if that works. That was it. So there you go! Now you have a reusable debounce function.

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
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/challenge-game-intro?u=76281980&t=6)** - [Instructor] How players start a game can be as important as how the game ends. In this challenge, the goal is to display a message, for example, "Zap invaders" on the first line and "Press button" on the second line. Once the message is displayed, the sketch should wait for a button press before continuing with the game. Now see if you can solve this challenge on your own. In the next video, I'll show you how I did it.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Solution: Game intro](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=0)** - [Instructor] Here's my solution to the challenge. Remember, the goal for this challenge is to display a welcome message and wait for a button press before continuing. The pseudocode for this is straightforward. To wait, you can use a while loop to check to see if the button is pressed. To make the while condition, we can use the currentReading variable, which is either high or low depending on whether the button is pressed or not. The while loop updates currentReading using the debounce function. Now let's go to the Desktop to see how this works in practice. Here we are in the IDE. And I've loaded Retro 6, which is our starting point. And the first thing I'm going to do is save a new copy. Call it RETRO_6_Challenge.
>
> **[1:03](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=63)** Now we want to add our startup screen in the setup function. So we can do that here. So we can say display introduction. And I'll start out by clearing the screen. Then I'll print the first line. Zap Invaders. And then I'll set the [[Cursor]] to the second line. And print the second line of the message.
>
> **[1:55](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=115)** And then I need to wait for the button press.
>
> **[2:04](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=124)** And to do that, I have the while loop while the currentReading is not equal LOW. And then in the loop, the while loop, I want to update the currentReading. So say currentReading equals debounce.
>
> **[2:30](https://www.linkedin.com/learning/arduino-prototyping/solution-game-intro?u=76281980&t=150)** And our button pin is seven. Use currentReading as our reference. The debounce of four. Okay, so this in general should work. But there's one problem that this creates. You'll notice up here, we print the Invaders, which stay at the top of the screen. But below that is where we're actually printing the introduction screen. And so that introductory screen will erase the Invaders. So what we need to do is move this from here down here. Just copy and paste that or cut and paste that and then here, instead of setting the cursor, we want to use clear to clear the display after the introductory message. Okay, so that's it. I'm going to run this and let's see what happens. Okay, you can see that the startup message is here on the screen. When I press the button, the game begins. So that's it for my solution. This type of startup screen helps give control to the game player and it's good for setting context and explaining game rules. We've used a single screen, but you could easily add multiple screens if you wanted.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=0)** - [Presenter] With a prototype, you often want to explore multiple designs for things like screen layout, animation frame rate, colors, and so on. One way to do this is to create different versions of the firmware for each design. It's important to save versions as you progress, but one drawback to this approach is that it can be easy to have lots of versions around without remembering which version is which. Another approach is to create settings for everything you want to explore, and make the settings easy to change. Then, to use a specific version, you just adjust the settings and upload the sketch to your prototype. To create a setting, first identify something that you or a designer might want to change. Let's say that in our prototype, you want to be able to change the character used for the laser in the display. Next, turn the value into a variable by giving it a name, for example, "laser symbol" might be a good choice for us. So we replace the current character in our sketch with the setting name "laser symbol". Next, we declare laser symbol at the top of our sketch and give it a value. Normally we would declare laser symbol and set it to the caret character. Finally, we replace all of the caret characters with the setting name, "laser symbol". Unlike normal variables, you don't expect to change settings in your sketch. They are set once at the beginning and that's it. One way to tell [[Arduino]] that a variable isn't going to change is to use the "const" keyword, which stands for constant.
>
> **[1:34](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=94)** If you add that at the beginning of your definition, Arduino knows the value is set and won't be changed. This makes laser symbol a constant. Constants are just like variables, but they aren't variable. You set a constant to a value when it's declared and you can't change it. Using a constant has a couple of advantages. First, if you're using the constant in several places and you want to change the value, you don't have to go through your sketch changing it at each location, you just change the value in one place. The other advantage to constants is that they don't take any memory from your sketch. Each variable uses some dynamic memory, which is limited. Using constants when you can leaves more room for variables. Okay, let's go to the IDE and see how constants work in our sketch. So here we are, back in our sketch where we left off, and as usual we will save this with a new version. Retro seven. And now all we're going to do is add a constant for the laser character. We have to scroll down here and figure out where the laser character is. The sketch is getting kind of long now. There it is, it's right here. So all we're going to do is replace this with the symbol that we came up with, "laser symbol". And then we go back up to the top of our sketch and declare that, let's do it right at the top. So we just declare it as a const,
>
> **[3:10](https://www.linkedin.com/learning/arduino-prototyping/use-symbolic-parameters?u=76281980&t=190)** and it's a character, use "laser symbol". I often use all upper case for identifying these constants just to make them stand out. You don't have to, but just a habit. And then we set a value to the caret. End it just like we would normally. And I'll put a comment in here, "sketch settings", 'cause we might have other settings. Save it. And upload it to our prototype, see if it works. And there you can see, it works just like it did before. But now, let's say that we want to change our symbol to an exclamation point. It's as easy as updating it right there at the beginning of your sketch, you can upload the sketch again, and instantly you can see what the effect is. In addition to the laser symbol, there are numerous other settings that might be useful for our prototype, including button pin, debounce time, certainly include the laser character, the laser row, whether it's on the top or bottom, the invader character, and the invader row. Exploring design variations is an important role of a prototype. Using settings is a powerful tool to make that exploration easy and nimble.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=0)** - [Instructor] When you're [[Prototyping]], design, problem solving, and coding can move quickly and this is good. It means you're engaged with the design process and iterating, but when you're in this flow it's tempting to skip documentation. When you're in the middle of a project, it can be hard to imagine you'd ever forget anything about your prototype and even a few seconds to add a comment can feel like it breaks the flow. But it turns out that even after only a day or two it can be difficult to remember different versions and even what the current version does. Fortunately, there's strategies you can use to help you remember. One place to start is to write clear code when you're [[Sketching]]. For example, use the name LASER_SYMBOL for your setting rather than a single letter, L. Another important documentation practice is to use comments throughout your sketch. The most common comments are single line or end line comments that begin with double slashes. Another type of comment is the block comment that begins with a slash asterisk and ends with the opposite, asterisk slash. Comments at the beginning of your sketch can help identify the purpose of a sketch, the date it was first updated, the author, copyright, or anything else that's relevant. As you iterate through numerous designs and sketches, it's very useful to keep track of different sketch versions so you can track the path of your current design. Also, it can help keep the team from going in circles by documenting ideas you've already explored. Revision history often goes at the top of the sketch
>
> **[1:33](https://www.linkedin.com/learning/arduino-prototyping/document-prototypes?u=76281980&t=93)** as part of the sketch header. Each revision record can contain the date and the version number of the revision, along with a brief description of what was in or changed about that version. These are often ordered with the newest revision first, followed by previous revision history, and on to the beginning of the sketch. It's a good idea to save versions of your sketch as it evolves. Versions can help you keep track of progress and can be useful if you reach a dead end on your prototype and you want to go back to a previous version and begin there in a new direction. There are numerous ways to name versions, but I usually just use sequential numbers following the main sketch name. Combined with settings, versions are a powerful way to track and explore options. In addition to documenting your code, make sure to keep the Pin map up to date if you add, delete, or rearrange [[Hardware]] connections. And of course, update your schematic. And finally, it can be very useful to create a bill of materials, or BOM, which lists the components you're using in a prototype along with links to sources and data sheets, cost and so on. In being nimble, you won't necessarily follow all of these all of the time. You may skip comments as you're developing a section of code, but then make sure you add comments before you complete your version. Keeping prototype documentation up to date for each version will save you and others time and effort as the prototype evolves.

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
> **[0:06](https://www.linkedin.com/learning/arduino-prototyping/challenge-complete-the-experience?u=76281980&t=6)** - [Instructor] You've created a prototype that satisfies the original goal, to prove the gameplay concept of invaders from space being zapped by a moving laser. Communication with stakeholders has been great, and everyone is pleased with your prototype's progress. But in response to observations and input they've received, the team wants to create a complete prototype for user testing and to change gameplay slightly to make it more challenging. So here's the challenge. First, you've been asked to add the intro and completion screens into the main prototype. And they'd also like you to put in the back and forth laser. Second, the team would like you to modify gameplay as follows. Instead of removing an invader when it's zapped, deactivate it, and change its character from an asterisk to a plus sign. If you shoot a deactivated invader, it gains energy from your laser and reactivates and returns to an asterisk. The game ends when all invaders are deactivated. That's it. Have fun working on this challenge to complete your prototype. In the next video, I'll show you my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Complete the experience](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=0)** - [Instructor] Here's my solution to the challenge. To recap the goals are, first to add the intro and completion screens to the main prototype and have the laser bounce back and forth. Second, to revise gameplay to deactivate rather than erase zapped invaders. Then, reactivate zapped invaders if you shoot them again by accident. The intro and completion screens and the laser motion can be copied from previous challenges but the changes to the gameplay are new. The pseudocode for the new gameplay is, when the laser's fired if an invader is there deactivate it and reduce the invader account. Otherwise, if a deactivated invader is there reactivate the invader and increase the invader count. Now let's go to the desktop and I'll show you how I modified the prototype sketch. Here, you can see I've loaded where in the IDE and I've loaded retro seven and I've already put in the changes for the start screen and the completion screen and the back and forth laser. You can see the number of invaders variable here for tracking the number of invaders and set tend to begin with. We've got the intro screen, waiting for a button press then down here we've got our completion screen and here is the back and forth laser code
>
> **[1:44](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=104)** from the previous challenge. So the new thing we need to add though, is the gameplay. And that occurs right here, we've checked the button and decided that it's been pressed because it's gone from high to low. So I'm just going to change the comment. If an invader was hit, deactivate it.
>
> **[2:13](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=133)** And we check if the invader at the laser column is an asterisk, then we set the [[Cursor]] to the laser column. And instead of printing a space there, we want to print a plus sign and reduce the number of invaders. And then instead of setting the invader string to a blank, I want to set that to a plus sign to indicate that that's an inactive or deactivated invader. Now, when we shoot a deactivated invader, we want to reactivate it. So we have to put encode for that. And we do that by just adding another condition here and we can say else, and then I can just copy this code
>
> **[3:05](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=185)** from there and then I'll paste it in here cause it's almost identical. And so else if the invaders at the laser column are deactivated or a plus sign, then you want to turn it back into an asterisk. And instead of reducing the invader count, you increase the invader count cause they're back in action. And then here you want to make sure that you record the current state of the invader by putting the asterisks there. So, put a space in here just to make it a little more readable. So let's say, let's upload this and see how it works.
>
> **[3:56](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=236)** So now you can see we've got our header screen, press the button, the lasers bouncing back and forth. So let's see okay, we've deactivated a laser or a invader. Oop, activated one. So let's see if I can get them all. Nope, this is a little more complicated.
>
> **[4:26](https://www.linkedin.com/learning/arduino-prototyping/solution-complete-the-experience?u=76281980&t=266)** If I can be fast enough, there we go. All invaders zapped. So that's it. There are many more features you could add to this prototype of course, but for now the prototype has a complete experience for user testing and everybody on the team is excited to move forward. Congratulations.

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
> **[0:00](https://www.linkedin.com/learning/arduino-prototyping/final-thoughts?u=76281980&t=0)** - Thank you for spending time with me in this course. I hope you've enjoyed your journey through the world of nimble design and [[Prototyping]] with an [[Arduino]]. For me, creating the course relied on the very thing it teaches, being nimble, prototyping, and the tension and joy that process brings. You can learn more about design, prototyping, and the Arduino through the wealth of content here on [[LinkedIn]] Learning, and feel free to connect with me on LinkedIn. I'd love to hear your story and how you're getting along with your new-found knowledge.

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