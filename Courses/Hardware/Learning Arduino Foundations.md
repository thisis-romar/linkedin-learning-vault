---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-arduino-foundations-2
url: "https://www.linkedin.com/learning/learning-arduino-foundations-2"
level: Beginner
updated: 9/25/2023
learners: 229949
skills:
  - Arduino
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFrtDsbkms6Nw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668426746?e=2147483647&amp;v=beta&amp;t=UDSaVVk82L_-1dCcOPpTxGiiyaIcS6ArvYZp26m9Cb4"
linkedin_topic: Hardware
learning_paths:
  - '[[Become an Arduino Developer]]'
next_courses:
  - '[[Electronics Foundations- Fundamentals]]'
path_nav: '[{"path":"Become an Arduino Developer","position":1,"total":11,"prev":null,"next":"Electronics Foundations- Fundamentals"}]'
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/Learning%20Arduino%20Foundations.md)

![Learning Arduino Foundations](https://media.licdn.com/dms/image/v2/C4E0DAQFrtDsbkms6Nw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668426746?e=2147483647&amp;v=beta&amp;t=UDSaVVk82L_-1dCcOPpTxGiiyaIcS6ArvYZp26m9Cb4)

# Learning Arduino Foundations

> Arduino, the family of open-source single-board microcontrollers, can power a variety of complex projects, from robots to wearable tech. That said, the technology is relatively easy to pick up, even for those without an electronics background. In this course, Zara Khalil covers the basic features and capabilities of an Arduino board, equipping beginners with the knowledge they need to start progra

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-foundations-2) | Beginner | 230K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started with Arduino](#getting-started-with-arduino)
  - [Arduino hardware for this course](#arduino-hardware-for-this-course)
- [**1. Introduction to Arduino**](#1-introduction-to-arduino) (5 videos)
  - [What is an Arduino?](#what-is-an-arduino)
  - [The Arduino layout](#the-arduino-layout)
  - [Digital interfaces](#digital-interfaces)
  - [Analog interfaces](#analog-interfaces)
  - [The power pins](#the-power-pins)
- [**2. Creating an Arduino Program**](#2-creating-an-arduino-program) (8 videos)
  - [Download the Arduino software](#download-the-arduino-software)
  - [A tour of the Arduino IDE](#a-tour-of-the-arduino-ide)
  - [The setup() and loop() functions](#the-setup-and-loop-functions)
  - [pinMode()](#pinmode)
  - [digitalWrite()](#digitalwrite)
  - [Creating your first sketch](#creating-your-first-sketch)
  - [Serial Monitor](#serial-monitor)
  - [Testing blink LED and Serial Monitor](#testing-blink-led-and-serial-monitor)
- [**3. Interface with Output (LED)**](#3-interface-with-output-led) (6 videos)
  - [Light-emitting diodes (LEDs)](#light-emitting-diodes-leds)
  - [Deep dive: Calculating a current limiting resistor](#deep-dive-calculating-a-current-limiting-resistor)
  - [Wire an LED to Arduino](#wire-an-led-to-arduino)
  - [Code to blink an LED](#code-to-blink-an-led)
  - [Example: Wiring a digital traffic signal](#example-wiring-a-digital-traffic-signal)
  - [Example: Coding a digital traffic signal](#example-coding-a-digital-traffic-signal)
- [**4. Interface with Input (Pushbutton)**](#4-interface-with-input-pushbutton) (6 videos)
  - [Pushbutton](#pushbutton)
  - [Active low, active high](#active-low-active-high)
  - [Wire a pushbutton to Arduino](#wire-a-pushbutton-to-arduino)
  - [Code for the pushbutton](#code-for-the-pushbutton)
  - [Activate an LED with a pushbutton](#activate-an-led-with-a-pushbutton)
  - [Using the built-in LED with INPUT_PULLUP](#using-the-built-in-led-with-input_pullup)
- [**Conclusion**](#conclusion) (3 videos)
  - [Next steps](#next-steps)
  - [Troubleshooting](#troubleshooting)
  - [Troubleshooting: Arduino wiring](#troubleshooting-arduino-wiring)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with Arduino](https://www.linkedin.com/learning/learning-arduino-foundations-2/getting-started-with-arduino-22858971?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-foundations-2/getting-started-with-arduino-22858971?u=76281980&t=0)** - Have you ever wanted to create an interactive art project, a simple robot or just create a custom smart device inside your home? Maybe you're interested in [[Electronics]] and programming, then [[Arduino]] programming might be just what you're looking for, even if you have zero background in electronics. In this course, I'm going to introduce you to the Arduino board to get familiar with the [[Hardware]], introduce you to the software part, and teach the codes needed to create your first Arduino program. At the end, you will be able to use Arduino for simple interactive projects, and you'll be ready to jump into more advanced topics. So join me, Zara Khalil, as we explore Arduino together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (5), [[Electronics]] (2), [[Hardware]] (1)
> **Speakers:** - have (1)

#### [Arduino hardware for this course](https://www.linkedin.com/learning/learning-arduino-foundations-2/arduino-hardware-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/arduino-hardware-for-this-course?u=76281980&t=1)** - [Narrator] All right, so the component that we need for the course are [[Arduino]] Uno, a 10k ohm resistor, a 330 ohm and we need three of them, three LEDs, push button, and jumper wires. The last thing that we need is a breadboard to make the connection of the circuit. Now, if this is your first time using a breadboard, the connection of the breadboard goes this way. The ones inside are connected this way. They're connected horizontally versus on the sides, the connection happens vertically. So for example, if I have the resistor here and I connect it this way, and I want to make sure that this resistor is connected to another component, let it be another resistor. Now the connection needs to be on the same row, this row over here. So I need to make sure that the connection is on the same row, and that the other side goes anywhere in the circuit. The sides, we usually use them for the same power source or a common ground. So for example, if I have the power source, I can connect it here and I can make the connection all the way over here. The same thing happens if I wanted to have a common ground. So I connect it here and then let's say, I want to connect the resistor to a common ground, so I just need to make the connection between the resistor, the common ground over this side,
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-foundations-2/arduino-hardware-for-this-course?u=76281980&t=95)** and also make sure that you connect the same row, and this is how you make sure that you have a common ground.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **CLI Commands:** make (7)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Introduction to Arduino

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an Arduino?](https://www.linkedin.com/learning/learning-arduino-foundations-2/what-is-an-arduino-14276604?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/what-is-an-arduino-14276604?u=76281980&t=1)** - [Instructor] An [[Arduino]] consists of both a physical programmable circuit board, which is called a microcontroller, and a software that we use to write the code that will be uploaded to the board. The Arduino software is called the IDE, or Integrated Development Environment, and it runs on your computer. An Arduino is a microcontroller. A microcontroller is a computer chip with a minimal processing power that is typically designed for automatic control of external devices. The Arduino senses the environment by receiving inputs from sensors like light and temperature sensors, and changes its output to control LED, motors, displays, and other devices. You can tell your Arduino what to do by sending a set of instructions to the board, through a code, using the Arduino programming language and the Arduino software, IDE. The Arduino board comes in the different styles. To see the different types of our Arduino board, you can check their website. Each Arduino board has different capability depending on your project. You can see that there is an entry level and some with advanced features. Here are the two types of Arduino boards that we'll be using and referring during the course: Arduino Uno and Arduino Mega. You can also check more information about Arduino using the website by clicking on What's Arduino and then navigate through.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (15)
> **Definitions:** is called (2), is a  (2), is an  (1)
> **Env Vars:** ide (2), led (1)
> **Speakers:** - [instructor] (1)

#### [The Arduino layout](https://www.linkedin.com/learning/learning-arduino-foundations-2/the-arduino-layout-14280377?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/the-arduino-layout-14280377?u=76281980&t=1)** - [Narrator] Let's take a look at the layout of our [[Arduino]] board. The Arduino Uno is one of the most commonly used units for prototypes that require a simple microcontroller. There's a standard USB port for connecting the unit to the computer. The USB port is also used for powering the Arduino Uno board, uploading the program sketches into the Arduino, and for communication. The power connector is used to provide power to the Arduino board when it's not plugged into the USB port. It accepts voltage between nine and 15 volt, depending on the board. You can also see the voltage regulator beside it. Now you can see the power pins here. These provides five volt, 3.3 volt, and ground connections to power your circuit. The reset button is used to reset the Arduino board back to its default state and for debugging purposes. The Arduino Uno has 14 digital input and output interfaces. There are six digital interfaces for pulse with modulation. They are marked on there Arduino using the tilde before the digital pin number. On the other side, you have six analog input interfaces. You notice that the analog pins have an A beside the pin number. The Arduino Uno also has a three built in LEDs. The first one, which is a green LED that's marked on.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-foundations-2/the-arduino-layout-14280377?u=76281980&t=96)** This is used to indicate when the Arduino is receiving power. It's useful for debugging. We have two yellow LEDs marked TX and RX that indicates when receiving or sending data between the Arduino and a computer. They flicker rabidly during the sketch upload as well as during CRL communication. And the last one is a yellow LED, and that's marked L, connected to the digital output pin number 13. You can use it for a simple program for debugging if needed. The 18 mega microcontroller is the brain of the Arduino. This is the chip that runs the programs you create, in the Arduino IDE software. The ATmega AVR microcontroller chip is a complete microcontroller system built into a single chip. You can check the type by clicking on the Arduino board that you're using, for example, Uno. And then you'll find the type of the microcontroller under the specs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (14)
> **Env Vars:** usb (3), led (2), crl (1), ide (1), avr (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Versions:** 3.3 (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Digital interfaces](https://www.linkedin.com/learning/learning-arduino-foundations-2/digital-interfaces-14281263?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/digital-interfaces-14281263?u=76281980&t=1)** - [Narrator] Let's take a look at the [[Arduino]] digital pins. Digital values or signals simply mean zero or one, so it's either on or off. So the voltage that comes out of the digital pin is zero volt when the pin is set low or five volt when the pin is set high. An example is an LED. The light is either on or off. The pins in the Arduino that we use for sending or receiving digital values are zero to 13 when using Arduino Uno, and using Arduino Maga, zero to 13 and 22 all the way to 53. Some of the digital pins can be used for other secondary purposes, now depending on the program inside the microcontroller. Example is pin zero and pin one are communication pins. Pin zero is a receive, and pin one is transmitter. If you don't have any experience with Zero communication, don't worry. I'll explain more about it later in the course. The other example that the digital pins are used for is pulse with modulation. Pulse with modulation is used for applications like running a motor. So in Arduino Uno, there are six pens for pulse with modulation. The pins are 3, 5, 6, 9, 10, and 11. You notice the tilde symbol beside the number.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-foundations-2/digital-interfaces-14281263?u=76281980&t=95)** Each of the Arduino models provides a number of digital interfaces. And each of the digital interfaces on the Arduino can be used as either an input or output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (7)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** led (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)

#### [Analog interfaces](https://www.linkedin.com/learning/learning-arduino-foundations-2/analog-interfaces-14280379?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/analog-interfaces-14280379?u=76281980&t=1)** - [Instructor] Often times when using [[Arduino]] board for our project, you might want to interface with an analog device, such as motors and temperature or light sensors. Analog signals are simply signals that have a continuous range of values. In other words, they are not on or off but rather a values in between. An example is, let's say a temperature sensor where you have a range of temperatures. A light sensor, the light intensity changes. Motor, different speeds for the motor and so on and so forth. In the Arduino boards, the pins that are for the analog inputs are identified with a letter A, so labels A0 to A5 for Arduino Uno. For Arduino Uno, those are the only analog pins available. In Arduino Mega, it has a 16 analog pins. When working with analog input signals, the Arduino board uses Analog to Digital Converter, ADC. This converts analog signals that coming from the external devices through one of the Arduino pins into digital values that the microcontroller can understand and work with. Then, the program, just Arduino software, reads the digital values produced by the ADC and uses it to determine the value of the original analog signal.
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-foundations-2/analog-interfaces-14280379?u=76281980&t=93)** Most of the Arduino models, Analog to Digital Converter is a 10 bits resolution. This returns integer values between 0 and 1,023 where zero is for an input of zero voltage and 1,023 is for an input of five-volt. Now for generating an analog signal for an output, an example is driving a motor, the converter is called Digital to Analog Converter, DAC. The DAC receives a value from the microcontroller and converts it to an analog voltage that can be used to provide a signal to an analog device or a circuit. While the main function of the analog pins for most of the Arduino boards is to read and write an analog signal. The analog pins may be configured and used in exactly the same manner as digital pins, 0 to 13.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (10)
> **Env Vars:** adc (2), dac (2)
> **Definitions:** in other words (1), is a  (1), is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [The power pins](https://www.linkedin.com/learning/learning-arduino-foundations-2/the-power-pins-14276601?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/the-power-pins-14276601?u=76281980&t=1)** - [Instructor] These are the power pins. They're usually located in the left side of the [[Arduino]] board. The first one is a Voltage In. Vin, and sometimes labeled 9 Volts, use this input voltage when using an external power source, as opposed to the 5 Volts from the USB connection. An example is when providing a voltage from external source, like a solar panel. Note that different boards accept different input voltages. So always check the documentation. The 5 Volts, this pin outputs a regulated 5 Volts from the regulator on the board to provide a voltage to your circuit. We'll use this pin in our examples later in the course. 3V3, provides an output of 3.3V. And finally, the ground pins. So when we build the circuit, it's important to have a common ground with Arduino, and here where we connect it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** usb (1)
> **Cross-References:** later in (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Creating an Arduino Program

[↑ Back to Table of Contents](#table-of-contents)

#### [Download the Arduino software](https://www.linkedin.com/learning/learning-arduino-foundations-2/download-the-arduino-software-14278392?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/download-the-arduino-software-14278392?u=76281980&t=1)** - [Instructor] The [[Arduino]] integrated development environment, IDE, is the software that's used to write, compile, and upload your Arduino programs. You can download the software from their main Arduino website by going to Software, and then select Downloads. You'll find the links to the different versions of the Arduino for several platforms. So you need to select the type that works for your computer. And then once you download it you can run the installation program to set up the software. Then installation window will guide you through the steps for installing the Arduino IDE software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (5)
> **Env Vars:** ide (2)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [A tour of the Arduino IDE](https://www.linkedin.com/learning/learning-arduino-foundations-2/a-tour-of-the-arduino-ide-14276602?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-foundations-2/a-tour-of-the-arduino-ide-14276602?u=76281980&t=0)** - [Instructor] All right. So now let's take a tour of the [[Arduino]] IDE software. The Arduino IDE uses what we call a graphical text editor for writing code with all the [[Microsoft Word|word]] processing features like copy, cut and paste. You notice that once you open the software, it comes in with a default starting code. The code contains two loops, and I will get into that a little bit later. The programs written using the Arduino software IDE are called sketches. The Arduino IDE interface contains five main sections. The Menu bar, the Task or Tool bar, the Text Editor window, the Message area and the Text Console window. Now the Text Editor, which is the white large area in the middle is for writing code that you want to send to the Arduino board. So I'm going to go ahead now and try to make an error in the code to see how can we use the other sections. So let me try to make an error within the code to see how we can use the other sections. So I'll go ahead and I'll move the bracket here. And if I go to the Tool bar and I click on Verify button, Verify checks in if there's any code syntax error, which we have in this case. So once I click on it, notice that there is an error message shows in the Message area. The Message area, which is a one line section that displays a quick messages about what's happening.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-foundations-2/a-tour-of-the-arduino-ide-14276602?u=76281980&t=95)** Now, the Text Console area, which is below the Message area displays a more details about what's happening. So now it shows the error message and gives suggestions, which adding the bracket. All right, so once I fixed the error, I'll go again and click on Verify. Now the Message area shows a progress bar to indicate the compile process, and it also shows when the code is successfully compiled. Now the Console area, which is below it, it shows a more information like how large the program is. So after ensuring that the code is correct, I'll go ahead and upload it to the Arduino board, which is the click on the upload button over here. All right. So now the bottom right-hand corner of the window displays the configured board and the serial port. So in our example, we're using Arduino Uno on column four. So now one of the main and important features within Arduino board is using the Example set options. So you can go to the File over here, and then you click on Examples and you notice that it comes up with a different types of examples provided by the Arduino developers. The examples are divided into different sections. So you have Basics, Digital, Analog and so on and so forth. And once you open a file, so I'll click in, for example, at blank, here, it comes in with a code that's already provided by the Arduino software. Now, the other thing that you can do is if you go to File,
>
> **[3:08](https://www.linkedin.com/learning/learning-arduino-foundations-2/a-tour-of-the-arduino-ide-14276602?u=76281980&t=188)** you can go to the Preferences, and in the Preferences, you can change the font size. So if you want to make it larger or smaller, so I'll just increase it little bit. You can also check the display line numbers if you want to see some numbers to the line within the code. So I'll go ahead and check that on that and then click OK. Now the other important thing when using Arduino software is to make sure that you select the right Arduino board and the right port. So you go to Tools over here, and then you click the Arduino board and you select board that you're currently using. I'm currently using Arduino Uno and then right below it, you can see the ports, so you can always select the right port that you're using. This will ensure that you download the software to your board.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (14), [[Microsoft Word|Word]] (1)
> **UI Navigation:** go to (5), click on (5), select the (2), open the (1)
> **CLI Commands:** make (4)
> **Env Vars:** ide (4)
> **Definitions:** is an  (1), is a  (1)
> **Exercise Files:** download the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The setup() and loop() functions](https://www.linkedin.com/learning/learning-arduino-foundations-2/the-setup-and-loop-functions-14281265?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/the-setup-and-loop-functions-14281265?u=76281980&t=1)** - [Instructor] All right. So, as mentioned, that once you open the software, it comes in with a default starting code. The code contains two functions. They are part of every [[Arduino]] sketch: setup function and a loop function. The Arduino program calls the setup function as the first thing when the Arduino unit powers up. So any code that you place in the setup function in your sketch runs first, and it only runs one time. The setup function is a great place to initialize input and output pins so they are ready to be used. Then, the program moves to the loop function code. The program calls the code inside the loop function repeatedly until the Arduino board is powered off. Most of the time, we place the main code inside the loop function section. It is the heart of most sketches. This is where we tell the Arduino board what to do in the sketch. Each time the sketch reaches the end of the loop function, it returns to the beginning of the loop. Now, for your program to run, you need to include both functions, setup and loop, in your sketch, even if you're not planning to use them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (5)
> **Prerequisites:** setup (5)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [pinMode()](https://www.linkedin.com/learning/learning-arduino-foundations-2/pinmode?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/pinmode?u=76281980&t=1)** - [Instructor] Now let's try to understand some of the main commands used with an [[Arduino]] IDE. You can use each digital interface on the Arduino as either input or an output, but not both at the same time. Now, in order to tell Arduino which mode your sketch uses for the specific digital or analog interface, we need to use pinMode function. In pinMode function, we basically configure at the specific pin in Arduino to behave either as an input or an output. This is the way the function is written. The pinMode function requires two parameters. The pin parameter determines the pin member to configure. The mode parameter determines whether the pen operates as an input or an output. There are three values you can use for the interface mode setting. INPUT in order to set it for a normal input mode, INPUT_PULLUP is in order to set it for an input mode, but uses an internal pull-up resistor. I'll talk more about this later in the course. And finally, as an OUTPUT in order to set it as an output mode. So we add the pinMode in the set up function because the pinMode is a function and needs to be inside a loop to operate. So I'll write it down. pinMode, notice here that the color changes to orange indicating that the function is right.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-foundations-2/pinmode?u=76281980&t=96)** So small letters and capital letters matter. I'll go ahead and I'll specify. Let's say for example, I want to specify pin two to be an input. So input needs to be in capital letter. And notice here that the color changes to a blue-greenish color. And then I'll close the function, and end the line. The same thing if I want to change it to an output. So it needs to be all capital letters. If I change any letter, it wouldn't be correct.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4)
> **Code Identifiers:** pinmode (6)
> **Env Vars:** ide (1), input (1), input_pullup (1), output (1)
> **Prerequisites:** configure (2), set up (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [digitalWrite()](https://www.linkedin.com/learning/learning-arduino-foundations-2/digitalwrite?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/digitalwrite?u=76281980&t=1)** - All right, so the second function that we are going to use is digitalWrite. We use it if the digital pin has been configured as an output using a pin mode. The digitalWrite function outputs a value on that specific pin. So this is the way that we write the function digitalWrite, pin, and the value. The pin is for the configured pin that we want to specify, and the value is high or low. So if we take the same example, the same previous example with LED. Now, if we want to turn on the LED, we send high value. So digitalWrite on pin two, and then high. Now, if we want to turn it off, we send a low value. We write the digitalWrite function inside the void loop function. So the way to write it is digitalWrite And notice you that the color changes to orange indicating that the function is correct. And then the first parameter is the pin which is again, we're using pin two. And then finally sending, if I wanted to turn it on, sending HIGH, and notice that the color changes to blue greenish as well, and then closing the function and then finishing the line. In order to change the led to turn it off, we change it to LOW, and notice here that we're using capital letters for high and low value.

> [!info]- Semantic Content
>
> **Code Identifiers:** digitalwrite (6)
> **Env Vars:** led (2), high (1), low (1)
> **Speakers:** - all (1)

#### [Creating your first sketch](https://www.linkedin.com/learning/learning-arduino-foundations-2/creating-your-first-sketch-14280378?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/creating-your-first-sketch-14280378?u=76281980&t=1)** - [Instructor] All right, now you are ready to write your first adrenal sketch. In this example, we are going to use the built in LED in adrenal board that is connected to digital pin number 13 and I'll program it to make it blink. So I started a new file from scratch, if you're still using the same previous file, then you can go ahead to the file and then click new in order to start a new file. In this program, we are going to use it to turn on the led for a certain time and turn it off for a certain time. So the very first thing that I'm going to do is to initialize the pin number 13 as an output. So I'll go to the void set of function, write pin mode function, specify pin number 13, and then make it as a output. One of the recommended ways is that we can create a variable and name it and instead of using the pin number 13, we can use the variable instead. So the recommendation is, you go at the beginning of the code, which is outside the void setup, and then write down integer led equals 13. So this creates a variable name led, the value is 13 and the type is integer. So now instead of writing 13 in here, I can just go ahead and write led, which is the name that I created.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-foundations-2/creating-your-first-sketch-14280378?u=76281980&t=95)** Now inside the void loop, in order to turn on the led, I use digital write and then led because we specify that sip in 13 and then send a high value to turn it on. Now, in order to turn off the led, I'll use the same function and instead of sending high, I'll send low. In between the on and off, you want enough time for a person to see the changes. So we add a delay command in order to tell the board to do nothing for a specific amount of time. So delay causes the adrenal to wait for a specific number of milliseconds before continuing on to the next line. Basically do nothing for that amount of time. So if I write a thousand, this caused the program to wait for one second. If you want to wait for two seconds, you write 2000 and so on and so forth. All right, so I'm going to turn on the led for one second and turn it off for half a second. So I'll write the delay command after the low, so delay and for half a second is 500 and then finish the code. Now you need to make sure that you go to tools, make sure that you selected the right board and the right port for your adrenal and then I'll click on verify
>
> **[3:10](https://www.linkedin.com/learning/learning-arduino-foundations-2/creating-your-first-sketch-14280378?u=76281980&t=190)** to make sure that the program is correct. Once the verification is complete, I'll go ahead and upload the program to adrenal board. So now we can see that the led is on for one second and off for half a second. All right, congratulations, so you've written your first or adrenal sketch.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** led (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Serial Monitor](https://www.linkedin.com/learning/learning-arduino-foundations-2/serial-monitor-14278397?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-foundations-2/serial-monitor-14278397?u=76281980&t=0)** - All right, the Serial Monitor is a special feature in our Arudino IDE that can come in handy when troubleshooting the code or for communication between Arudino board and the computer or other devices. So, the Serial Monitor, when you click on it here, it produces a separate window dialog box, which displays any output texts from the Arudino and allows you to enter text as well. You must write the code in your program to send and receive data using the Arudino Serial Port. Now, in order to activate the Serial Monitor, there are three ways you can go to tools and click on Serial Monitor, or you can press on control shift and letter M key combination on the keyboard. And then the final way you can just click on this magnifying glass. And then this will give you the Serial Monitor. All Arudino boards have at least one serial port. For Arudino It communicates on Digital Pins, 0 and 1, and therefore these Pins can not be used for a digital input or output, if you using Serial Communication. You can check more about the function of the Serial Monitor by checking the Arudino website. One of the two functions that we're using, or we are going to use, is Serial.begin. In Serial.begin, it sets the data rate in bits per second. There are different rates.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-foundations-2/serial-monitor-14278397?u=76281980&t=92)** The most common one is 9,600. And the other function that we're are going to use is print. This command now takes different [[Forms]] depending on what you want to show on the display box. So, if you want to show numbers or tax, there are different formats for using the Serial print.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Speakers:** - all (1)

#### [Testing blink LED and Serial Monitor](https://www.linkedin.com/learning/learning-arduino-foundations-2/testing-blink-led-and-serial-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/testing-blink-led-and-serial-monitor?u=76281980&t=1)** - [Instructor] And now we are going to use the same previous Blink program and see some outputs using serial monitor. The first thing is to initialize the serial monitor port rate at 9,600. So I'll go ahead in the void setup function. Now in order to show some output using the serial monitor, I'm going to declare a variable named counter and the value associated with it is zero. So I'm going to go ahead outside the void setup function. Equals zero. Note here, this is not a pin zero. We're just simply initializing the counter to start from zero. Alright now in the void loop function, I'm going to go ahead and set the counter to add one every time it repeats itself. So counter equals counter plus one. So I'm going to add a comment, just say adding one every time it loops. Okay, so I'm going to use the serial print function in order to output a sentence from this next line. Serial print, and I'll use a quotation mark. I'll say Blink Number. I'll use the number sign, space, and the quotation mark and then close the brackets. In the next line,
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-foundations-2/testing-blink-led-and-serial-monitor?u=76281980&t=92)** I'll print the value of the counter. So I'll use the serial print, I'll add L N, which is for next line, and then I'll use counter. Now note the difference in line 12 and in line 13. When we use a quotation mark, the sentence appears as it is, versus when we put a variable, it displays the value of the variable itself. So go ahead and I'll verify the code and I'll upload it to the [[Arduino]] board. I'll click on the serial monitor icon. The reason for it is when you start the serial monitor, it sends a signal to the Arduino to restart it. So basically the program reloads and starts back from the beginning. You can also reset the Arduino board by using the reset button on the Arduino board itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4)
> **Prerequisites:** setup (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 3. Interface with Output (LED)

[↑ Back to Table of Contents](#table-of-contents)

#### [Light-emitting diodes (LEDs)](https://www.linkedin.com/learning/learning-arduino-foundations-2/light-emitting-diodes-leds?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/light-emitting-diodes-leds?u=76281980&t=1)** - [Instructor] A light-emitting diode, as the name says it, is a diode that emits light. Basically, LEDs are just tiny light bulb that fits easily into an electrical circuit. A diode is a device that allows current to flow in only one direction. LEDs have polarity, which means that will only light up if you orient the legs properly. This is the LED Schematic Symbol, anode for the positive side and cathode for the negative side. There's normally no label on the case to identify the leads. The leads are identified by either the difference in length, so the longer one is the anode and the shorter one is the cathode. Another way to identify the cathode terminal is by either a notch or a flat spot on the case. So the lead closest to the flat area is the cathode pin. In any practical application, an LED requires the use of a resistor. The resistor there is to ensure that the maximum current rating of the LED will not be exceeded. The way we use the LED in our circuit is by adding a resistor in series to it. The resistor is called a current limiting resistor. As the name suggest, resistors resist the flow of current. And the higher the value of the resistor, the more it's resists and less electrical current
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-foundations-2/light-emitting-diodes-leds?u=76281980&t=96)** will flow through it. We are going to use this to control how much current flows through the LED, and therefore, how brightly it shines. So here's how the LED is connected to the [[Arduino]]. One side of the resistor is connected to the anode, the longer side of the LED. The cathode end of the LED is connected to the Arduino ground pin. To determine the value of the resistor, It depends actually on the specific LED you're using. There is a standard value that we usually use, which is 330 ohm. I'll explain to you how to determine the value of the resistor as an optional video for those who are interested.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** led (9)
> **Definitions:** is a  (3), means that (1), is called (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Deep dive: Calculating a current limiting resistor](https://www.linkedin.com/learning/learning-arduino-foundations-2/deep-dive-calculating-a-current-limiting-resistor?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/deep-dive-calculating-a-current-limiting-resistor?u=76281980&t=1)** - [Instructor] If you're a curious to know where we got the previous value of the resistor, or if your project requires a special kind of LED and you want to know how to determine the value of the resistor used, we use Ohm's Law, where voltage equals current times resistance. So when we rearrange the equation, the resistance equals voltage over current. Now, the minimum acceptable value of the resistor is determined using this equation where the resistor equals the voltage difference between the source and the voltage draw of the LED over the forward current of the LED. Since the voltage source is the [[Arduino]] pin, now the equation looks like this. The voltage includes the difference between the Arduino voltage from the pin and the specific LED voltage draw. So now I have the LED, I bought the LED and I need to know what resistor to use. So this is the data sheet of the specific LED that I'm using. Now, in order to know what to look for in the data sheet, the first thing is the forward current. You see there the forward current for a red LED is 20 milliamps. Although this is what it says in the data sheet, it says 20 milliamps, but this is the maximum current that LED can take. So we usually, when we do the calculation, we go a little bit lower, which is around 10 milliamps. The other thing that you need to know as you go, scroll down a little bit, and you look for the forward voltage.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-foundations-2/deep-dive-calculating-a-current-limiting-resistor?u=76281980&t=95)** So the forward voltage here for the red LED, the minimum is 1.8 volts and the maximum is 2.2 volts. And I'll take the minimum, which is 1.8. So now let's take a look at an example where we have a red LED. So the Arduino pin produce a maximum of five volt. When we use digital write and set the mode to HIGH. If you want to learn more, you can go to the website and scroll down under the documentation, and then try to find the input and output. And the website says that each of the 14 pins operate at five volts. Alright, back to our examples of the Arduino pin produces five volts. The LED voltage draw that we got from the data sheet is 1.8 volt. The current is 10 milliamps from the data sheet, as well. Now the desired resistor equals to five volts minus the 1.8 volt over 10 milliamps. So the value is 320 ohms. The closest standard would be 330 Ohms, which is the one that we used in the previous example. So you can apply the same thing for any other LED that you're using with different colors and different data sheets and apply the same knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4)
> **Env Vars:** led (13), high (1)
> **Versions:** 1.8 (4), 2.2 (1)
> **UI Navigation:** scroll down (2), go to (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Wire an LED to Arduino](https://www.linkedin.com/learning/learning-arduino-foundations-2/wire-an-led-to-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/wire-an-led-to-arduino?u=76281980&t=1)** - All right. So I'm going to use the breadboard now to help me with the connection. The very first thing that is pin eight is actually to providing the source. So I start with pin eight and I'll put it in the breadboard to start with. So I'm going to connect pin eight to one side of the resistor. The resistance I'm using is 330 ohms. So in order to keep the connection, I'm going to use the same line where the blue wire is connected to. So here's what I'm going to connect this out when outside of the resistor here. And then the other side, I'll move it to the other section of the breadboard somewhere here for example. You really need to make sure that you are in the same row in order to make the connection. Okay. So now I'm going to connect the other side of the resistor to LED. I'm going to connect it to the anode side which is the longer side of the LED. And then the connection needs to be in the same line over here. So I'm going to bend the legs, so for you to see it a little bit better over here. So the longer side goes to the same line of the resistor. And then the other side is somewhere else. And then finally the cathodic side of the LED is going to ground. So again, I need to make sure that I connect the same line and then goes back to the ground. So here,
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-foundations-2/wire-an-led-to-arduino?u=76281980&t=97)** notice that goes from pin eight to one side of the resistor. The other side of the resistor connected to the anode. And then the cathode goes back to ground.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** led (3)
> **Analogies:** for example (1)
> **Speakers:** - all (1)

#### [Code to blink an LED](https://www.linkedin.com/learning/learning-arduino-foundations-2/code-to-blink-an-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/code-to-blink-an-led?u=76281980&t=1)** - All right, so now in order to program LED to turn it on and off for a certain time, we are going to use the same file that we did for LED 13. So go ahead and open the same file that we used for the serial monitor example. The file name is first sketch serial monitor. So now the very first thing, which is in line one, we need to change the LED instead of LED equal 13 to the pin that we're currently using, which is pin eight. So I'll go ahead and I'll change it to pin eight. So now I'll leave everything as it is. And this is one of the advantages of you declaring the variable at the beginning is that you only change one thing in the code. So I'll go ahead. I'll verify it and upload it to the [[Arduino]]. So now you can see the led is on for a second and all for half a second. Same as we did last time. The only difference is that we're using an external LED this time. Okay, so now let's try to do something a little bit fun this time with a code. So we're going to change the code a little bit, so the LED blinks faster and faster. So the change that I'm going to do is I'll scroll down to line 11, I'll add a number 100 to the counter. And in order to make that blinking or the blinking faster, I want to change the delay. So I'll go ahead and the delay in life 15 and just subtracted the value of the counter. Here, the same thing when it's off. So I'll change it to 1000 just to,
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-foundations-2/code-to-blink-an-led?u=76281980&t=94)** so we're able to see it better and then I'll use a counter. So now every time the counter increases, it gets subtracted from the delay, and you can see the blinking is actually faster. So I'll verify the program and uploaded to the Arduino board to see it. So now you can see the blinking actually gets faster and faster to the point that you cannot even see it anymore. Okay. Great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** led (6)
> **UI Navigation:** open the (1), scroll down (1)
> **CLI Commands:** make (1)
> **Speakers:** - all (1)

#### [Example: Wiring a digital traffic signal](https://www.linkedin.com/learning/learning-arduino-foundations-2/example-wiring-a-digital-traffic-signal?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/example-wiring-a-digital-traffic-signal?u=76281980&t=1)** - All right, so now let's use everything we've learned so far in order to wrap up this chapter and use this example where we use [[Arduino]] board to control three separate digital interfaces using three LEDs. So I'm going to use the three LEDs to create a simple digital traffic signal and monitoring using serial monitor. So I'm going to connect the red LED to pin 12. The yellow LED to pin 11 and the green LED to pin 10. I'm going to use the same connection as we did in the red one. So resistor and the LED, a resistor, and then LED. So I'm going to go ahead and connect the pin from the Arduino pins. So 12 goes to the red LED, the yellow goes to the 11, and the green one goes to 10. Alright. So one thing now, instead of connecting each individual one to the ground here, what I can do is I can use a common ground is using the two sides of the breadboard. The top sides, if you notice here, they are connected this way horizontally. So everything here is connected and everything here is connected. So what I'm going to do is I'm going to connect the ground to one side of the breadboard. So now we are going to connect each individual cathode of each LED to that line at the top.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-foundations-2/example-wiring-a-digital-traffic-signal?u=76281980&t=97)** So I'm going to go ahead and make sure that I get the cathode side and connect it to the pin at the top. This way. I'll do the same thing for the second one and the same thing for the last pin. Okay.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** led (7)
> **CLI Commands:** make (1)
> **Speakers:** - all (1)

#### [Example: Coding a digital traffic signal](https://www.linkedin.com/learning/learning-arduino-foundations-2/example-coding-a-digital-traffic-signal?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/example-coding-a-digital-traffic-signal?u=76281980&t=1)** - [Instructor] So now, for the coding, the very first thing that we need to do is to initialize the variables. So I'll go ahead and add it outside the void setup function. So I'll initialize integer GreenLED that's connected to pin 10. And I'll do the same for the other LEDs. So the second thing is that I need to set each LED to be as an output. So we do so by going to the void setup function. And then I use pin mode. And then I write down the same name that I initialized for the variable, which is GreenLED. Make sure that you give the same name, and then as output. So I'll do the same thing for the other two LEDs. So I'll copy the same function. And in order to make sure that I give the right name, I'll just copy the name from the top. So this is for the yellow and then, finally, for the red. So one of the things that we usually do in such examples is that we want to make sure that the LEDs are off to start with. So to do so, we initialize the digitalWrite inside the void setup. So digitalWrite for the green LED to be off,
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-foundations-2/example-coding-a-digital-traffic-signal?u=76281980&t=88)** which is sent a low. And then the same for the other two LEDs. So the last thing that I need to do in the void setup function is initialize the serial communication at 9,600 rate. Serial.begin. So we are going to start coding for the yield mode. So what I'm going to do is I'm going to copy these lines and then I'll place them inside the code. And now, since I want only the yellow to be on, I'll just change the yellow to high, okay? The other thing that I need to add is I want to print a message using the serial monitor. Go ahead and write the code, serial.print. And then I'll add the message that I want to output. In this case, it's the light mode, that's yield.
>
> **[2:34](https://www.linkedin.com/learning/learning-arduino-foundations-2/example-coding-a-digital-traffic-signal?u=76281980&t=154)** Now, the last part is adding a delay command. So for the delay is how long I want the yellow LED to be on. So in this example, I want the LED to be on for one second. Great. So I'll do the same thing for the go mode. Where in the go mode we need the green LED to be on and everything else to be off. So I'll copy everything here. And I'll just add a comment saying that we are going to program the go mode. And I'll paste everything here. So I'll go ahead and I'll change it. So I'll change this to low because I want only the green one to be on this time, okay? So I'm going to change the message to represent the current mode that we're currently in. And then we'll turn on the green LED for two seconds, great. And then they'll do the same thing for the stop mode. And I'll leave the delay the same as two seconds, great. So I'll verify the program and upload it to the Reno board. So now, you see that the yellow LED is on for one second and the green LED and the red LEDs are on for two seconds. So go ahead now, click on the serial monitor if you want to see the message. Awesome! So the serial monitor works as expected.
>
> **[4:10](https://www.linkedin.com/learning/learning-arduino-foundations-2/example-coding-a-digital-traffic-signal?u=76281980&t=250)** Great job.

> [!info]- Semantic Content
>
> **Env Vars:** led (8)
> **Prerequisites:** setup (4)
> **CLI Commands:** make (3)
> **Code Identifiers:** digitalwrite (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 4. Interface with Input (Pushbutton)

[↑ Back to Table of Contents](#table-of-contents)

#### [Pushbutton](https://www.linkedin.com/learning/learning-arduino-foundations-2/pushbutton-14277375?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/pushbutton-14277375?u=76281980&t=1)** - [Zahraa] Pushbuttons and switches come in different sizes and shapes. Used in many applications with [[Arduino]] to provide an input signal. A pushbutton is a component that connects to point in a circuit when you press it. Simply an electrical component that connects two pieces of metal together allowing a current to pass. This is a simple electrical circuit. A path for current is made when the pushbutton is pressed, and the current path is broken when the pushbutton is open. A pushbutton is either a momentary or a maintained switch. Momentary switches only remain in their own state when they are being pressed. There are two main types of pushbutton arrangements, normally open and normally closed. Normally open pushbutton means a pushbutton switch that must be activated or pressed to make the connection between its terminals. When the pushbutton is not being pressed, the connection between its terminals is broken. Normally closed pushbutton on the other hand, is a pushbutton switch that must be activated, pressed to break the connection between its terminals. When the pushbutton is not being pressed, the switch makes a connection between its terminals. So here's an example of connecting a switch to Arduino to pin 10. So when the pushbutton in our example is being pressed, the 5 volt is being registered to pin 10
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-foundations-2/pushbutton-14277375?u=76281980&t=96)** in the Arduino board. This is one of the types of pushbutton used. So when the pushbutton is pressed, a connection is created between T1 and T2, or T3 and T4.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (3)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [zahraa] (1)

#### [Active low, active high](https://www.linkedin.com/learning/learning-arduino-foundations-2/active-low-active-high-14280376?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/active-low-active-high-14280376?u=76281980&t=1)** - [Instructor] Now in order to add a switch or a push button to [[Arduino]], we use two methods. A pullup circuit or a pulldown circuit. If we are using switch or push button, we usually refer to them as an active high switch or push button or an active low switch or push button. This is the arrangement of active high and active low. In active high arrangement we are using a pulldown resistor. In active low arrangement we are using a pullup resistor. So now let's try to understand the differences between them. The first type is a pullup circuit or an active low circuit. This is the arrangement for an active low push button. We have a voltage source, VCC and a resistor. The resistor is called a pullup resistor, then a push button or switch connected to ground. And to read the value of the active low push button, we connect the controller Arduino pin between the pullup resistor and the push button. Active low simply means when the switch or push button is closed or pressed, it sends a low signal to the microcontroller. When it's active, it sends a low signal. When the switch is not pressed, it sends a high value. So the pullup resistor pulls up the value of the microcontroller pin to high when the switch is not pressed.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-foundations-2/active-low-active-high-14280376?u=76281980&t=94)** The other type is a pulldown circuit or an active high. This is the arrangement of an active high push button. We have a voltage source, VCC, connected to a push button. Then a resistor that's called a pulldown resistor. That's connected to ground. And to read the value of the active high push button, we connect the controller pin between the pulldown resistor and the push button. Active high means when the switch or push button is closed or pressed, it sends a high signal to the microcontroller. When it's active, it sends a high signal. And when the switch is not pressed, it's open, it sends a low signal. An active high push button uses a pulldown resistor, which pulls the value to low when not pressed. So here's a summary of the differences between active low and active high. The term active, low or high, is when the push button is in the active state. The resistor is what happens when it's not active. The resistor either pulls the signal up or down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** vcc (2)
> **Speakers:** - [instructor] (1)

#### [Wire a pushbutton to Arduino](https://www.linkedin.com/learning/learning-arduino-foundations-2/wire-a-pushbutton-to-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/wire-a-pushbutton-to-arduino?u=76281980&t=1)** - All right, so the first thing that we know is that the first side of the push button, that goes to the VCC. So we are going to use the five volts from the [[Arduino]], and I'm going to use the common power here, and I'll connect it to the push button. All right. So this is the very first side. Now, the second thing is that the other side of the push button is connected to 10K resistor.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-foundations-2/wire-a-pushbutton-to-arduino?u=76281980&t=40)** All right. And there resister is going to ground, so I'm going to connect it here, and then I'll connect the ground to the Arduino board right here. All right. So the final thing is connecting between the push button and the resistor and connect that to pin 12 on our Arduino board. Okay. So now we're ready. We've done the wiring. So let's go ahead and start coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (3)
> **Env Vars:** vcc (1)
> **Speakers:** - all (1)

#### [Code for the pushbutton](https://www.linkedin.com/learning/learning-arduino-foundations-2/code-for-the-pushbutton?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/code-for-the-pushbutton?u=76281980&t=1)** - [Instructor] All right, so for coding the push button, I'm going to go ahead and open one of the examples provided by the adrenal library. So go ahead and go to file, examples and then select basics and finally digital read serial. So this is the code for a push button. So I'm going to go ahead and save it as another file because I'm going to make some changes. So file save as, and then it'll just add 10, 12 to it and then save it. So the code, it covers most of things that we've ready, went through before. So in line number 12, you can see that there's integer push button that's connected to pin two. So we need to modify that to pin 12, which is according to our wire and connection, then in the void set up, which is line 15, all the way to line 20, we have a serial begin initializing their communication between the adrenal board and the computer and the pin mode for the push button that's connected to pin 12 is input. Now in the void loop function, in line 25 this is the only command or function that we've never covered before. So now in order to read an input from adrenal we use a digital read. Digital reads are only used when you have a digital input. So whatever you get from digital read, you specify the pin, which is the push button pin,
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-foundations-2/code-for-the-pushbutton?u=76281980&t=94)** that if you refer back to a line 12, it's connected to pin 12. So everything we read here, we need to save it in a variable. So since the things that we read from the push buttons, either zero or one, so the variable type is integer, so we give it a name, so it's an integer value and button states. You can also declare the button state at the beginning. So you can do that for example here, outside the two loops. All right, so whatever we read from the push button is being saved and the button states, and then in line 27, I take the value and print it to the serial monitor, this what I'll get. I'll verify the program and then I'll upload it to the adrenal board. Okay, so once you click on the serial monitor here, you notice that it says zero because it actually outputs everything of the button state. So whenever the push button is not being pressed, it shows a zero. Okay, so I'm going to go ahead and press on the push button and you notice on the serial monitor that the value changes to one. I'm going to modify the code, so it's only outputs the value when it's being pressed. So in order to do so, I need to add an F statement. So I'm going to add that in line 27. So if the button state make sure that you get the right capital and small letters
>
> **[3:10](https://www.linkedin.com/learning/learning-arduino-foundations-2/code-for-the-pushbutton?u=76281980&t=190)** equals high, so it's only one being pressed, I'm going to output the value here. So only when the push button is being pressed, the zero print will output the value. I'm going to add a statement before to print and then I'll have it saying push button is pressed and the value is whatever we read from the state. Okay, so I'm going to verify the program here and then upload it and see what changes we see on the serial monitor. So I click on serial monitor, notice here nothing is showing because it's only going to show when I press on the push button. I'll go ahead and press on it and this is what the output message is.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Activate an LED with a pushbutton](https://www.linkedin.com/learning/learning-arduino-foundations-2/activate-an-led-with-a-pushbutton-14281268?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/activate-an-led-with-a-pushbutton-14281268?u=76281980&t=1)** - [Narrator] Alright, so I'm still working on the same file, but this time I want to add an L-E-D. So every time we press on the push button, an L-E-D turns on. So I'll go ahead and add the L-E-D to the circuit. So I'm keeping the same arrangement for the push button. I'm going to go ahead and add the L-E-D to the circuit. So I'm doing the same arrangement that I did last time, connect one side to ground. So I'm using the same common ground over here. The other side of the push button goes to a resistor I'm using 330 ohm. And then finally, I'm going to connect that to [[Arduino]] and I will choose pin number three. Alright, so now the first thing that we need to do is we need to identify the L-E-D pin. So integer, and I'll give it a name. And the pin that we selected is pin number three. Now in the void setup function, I need to set the L-E-D as an output. So I use pinMode function, and then the LED, and this time it's an OUTPUT. Alright now in the void loop function, since I want the L-E-D to turn on only when the push button is being pressed, so I need to add the digital write function
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-foundations-2/activate-an-led-with-a-pushbutton-14281268?u=76281980&t=94)** inside the if statement. So I'm going to go ahead and add that in here, inside the if statement. Write, LED, and I'm going to send a HIGH signal. And now since I want the L-E-D to only turn on when I press on the push button and I want it to be off otherwise. So I'm going to add an else statement here. So else, and then I need to open a bracket. And now I send a LOW signal to the L-E-D when the button state is low. Alright, so I'll verify the program, and I'll upload it to the Arduino board. So let's now test the code. So you notice here that the L-E-D is off when the push button is not being pressed. As soon as I press on the push button, the L-E-D turns on. As soon as I let go, the L-E-D turns off.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** led (2), output (1), high (1), low (1)
> **Code Identifiers:** pinmode (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### [Using the built-in LED with INPUT_PULLUP](https://www.linkedin.com/learning/learning-arduino-foundations-2/using-the-built-in-led-with-input-pullup-14278400?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/using-the-built-in-led-with-input-pullup-14278400?u=76281980&t=1)** - [Instructor] In this example, we are going to use pin 13 for the led and use an input and turn out pull up resistor for the push button. Digital pin 13 on [[Arduino]] board is kind of special as it has a resistor and led connected to it all the time. As given previously, there are three values you can use for the interface mode settings. The input pull up mode. Each arduino model provides an option to activate an internal pull-up resistor on each individual digital pin. The input pull up mode value determines whether the internal pull-up resistor is activated or not. So now having a pull-up resistor means the arrangement is active low. So the push put button logic goes too high when it's not pressed and low when it's being pressed. As the pull-up resistor pulls the value too high when not pressed. All right, soo this is how I would connect the wiring. The push button is an active low, so I'll just connect the push button from pin two all the way to the ground and for the led on pin 13, we're not doing any wiring because it's a build in led. All right, so one side goes from pin two one side of the push button and the other side goes to ground. So now for the coding, I'm going to go ahead and open one of the examples within arduino so go to file, examples, digital and then click on
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-foundations-2/using-the-built-in-led-with-input-pullup-14278400?u=76281980&t=96)** the digital input pull up. All right, so now for the void set of function, you can see in line 27 that the pin mode for a number two, which is where we conducted the push button is being activated as an input pull up in order to activate the pull-up resistor. For line 28, the pin mode for number 13 is an output. So remember that we can also identify them outside the loop, but I'll just leave it example as it is for now. In the void low function in line 34, you can see that when we read a value from the push button, we save it in a variable called sensor value and the type is integer because the value is either on or off. And all the value that we read from the push button is being shown on the serial monitor, using the line on 36. Now here in lies 41, all the way to 45, remember it's a pull up resistor so when it's active, it's low. So whenever the value is high, this means the push button is not being pressed and we have an if statement that whenever the value is high, the light should be off, otherwise the lights should turn on. I'll go ahead, I'll verify the code and send it to the arduino board. So I'll click on the serial monitor, you notice here that the value is one
>
> **[3:11](https://www.linkedin.com/learning/learning-arduino-foundations-2/using-the-built-in-led-with-input-pullup-14278400?u=76281980&t=191)** because it's an active low and as soon as I pressed on the push button, the light turns on and the value changes to zero because it's active low.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-arduino-foundations-2/next-steps-22858970?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-foundations-2/next-steps-22858970?u=76281980&t=0)** - Thanks for taking the time to join me in this course. Now that you've learned the basics, you can check out the library for my other two [[Arduino]] courses, "[[Learning Arduino- Interfacing with Hardware]]", where I use Arduino board with more complex devices like seven-segment LED, keypad, and LCD, and "[[Learning Arduino- Interfacing with Analog Devices]]", where I go through different projects using analog inputs and outputs components like LDR, temperature sensors, and separate motors. The [[LinkedIn]] Learning library has other Arduino courses like "Pulse Width Modulation" course and "[[Arduino- Prototyping]]" course. If you like to learn more about the concept or check out other projects, as always, I recommend that you check Arduino website for resources and tutorials. I hope this gives you a starting point to dive into the Arduino world. See you in another course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (8), [[Hardware]] (1), [[LinkedIn]] (1), [[Prototyping]] (1)
> **Env Vars:** led (1), lcd (1), ldr (1)
> **Speakers:** - thanks (1)

#### [Troubleshooting](https://www.linkedin.com/learning/learning-arduino-foundations-2/troubleshooting-14277372?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-foundations-2/troubleshooting-14277372?u=76281980&t=1)** - [Instructor] All right, so let's take a moment to know how to troubleshoot when we run into an issue when using Adreno. So one of the examples, so I have this, an empty code. I'll try to upload it to the Adreno board. So, you might get this error message that says problem uploading to board. So one of the things that you need to make sure is that the Adreno is actually plugged to the USB. So as I say that, we need to make sure the Adreno is plugged. We'll just plug it. All right, so you see that once I make sure that it's plugged, I sent it back, the message disappears. Now, you need also to make sure to go to tools and that you are selected the right ward and the right COM port here. So sometimes you want to know what is the exact port that you're using the Adreno to. So you can go to device manager and in the device manager you go to ports where you can see the Adreno port that's on COM four. Now, back to the Adreno software. If you want to know more about troubleshooting, you can go to help and then click on troubleshooting here and that will take you to the common issues that you might run into when using Adreno and then you can check it out over here.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), click on (1)
> **CLI Commands:** make (4)
> **Env Vars:** com (2), usb (1)
> **Best Practices:** make sure to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Troubleshooting: Arduino wiring](https://www.linkedin.com/learning/learning-arduino-foundations-2/troubleshooting-arduino-wiring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-foundations-2/troubleshooting-arduino-wiring?u=76281980&t=0)** - [Instructor] Another issue when working with [[Arduino]] is something called a floating pin. A floating pin simply means a digital input pin acts as if it is an unconnected pin, so it's not connected to either voltage or a ground. And this will cause the pin to randomly return either zero or one, low or high. Kind of fluctuates between the two values. Now, sometimes this issue may also happen even if you have the circuit connected and this is what I'm going to cover in this video. So using this same circuit setup, if you see that the LED is always on or the LED may blink erratically, regardless if the push button is being pressed or not. And if you check the serial monitor in Arduino software, you can see it showing a value of one all the time or sometimes you might even see it fluctuating between zero or one in a very random pattern. This may happen if you have the wiring in the wrong place as you can see on the screen. For example, we have the input from the push button here connected to pin 12 in Arduino. But you can see here that it's not connected to the side of the resistor. It is actually connected to the side that's coming from the power VCC, and this is not correct.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-foundations-2/troubleshooting-arduino-wiring?u=76281980&t=99)** To fix that, you need to add the wiring to the resistor side so this time it is connected to the side going to ground. So you see now when I have it in the wrong side, the values are showing number one constantly. As soon as I place the wire in the correct place, you see that now the LED is on when I press on the push button and that the values in the serial monitor reflect the status of the push button. As soon as I press on the push button, the value is one. So if you have this issue, you need to check two things: that the wire is properly connected, and it is connected to the right side. If it's not connected at all, then you're having a floating pin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (3)
> **Env Vars:** led (3), vcc (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available

## Skills Covered

- Arduino

## Path Context

### In [[Become an Arduino Developer]]
**1 of 11** | [[Electronics Foundations- Fundamentals]] →

## Appears In

- [[Become an Arduino Developer]]

## Related Courses

_Courses sharing skills:_

- [[Arduino- Prototyping]] — Arduino
- [[Learning Arduino- Pulse Width Modulation]] — Arduino
- [[Learning Arduino- Interfacing with Analog Devices]] — Arduino
- [[Learning Arduino- Interfacing with Hardware]] — Arduino

---

[↑ Back to top](#)