---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-arduino-pulse-width-modulation
url: "https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation"
duration_minutes: 76
duration: 1h 16m
level: Intermediate
updated: 9/30/2015
learners: 132419
skills:
  - Arduino
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFmJV_0Jz54qg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669931109?e=2147483647&amp;v=beta&amp;t=fsGXsszYjCbEzP4dRHnvAdfr_cUshhHTRyVt-q7Hbik"
linkedin_topic: Hardware
learning_paths:
  - '[[Become an Arduino Developer]]'
prev_courses:
  - '[[Learning Arduino- Interfacing with Analog Devices]]'
next_courses:
  - '[[Complete Guide to C Programming Foundations]]'
path_nav: '[{"path":"Become an Arduino Developer","position":7,"total":11,"prev":"Learning Arduino- Interfacing with Analog Devices","next":"Complete Guide to C Programming Foundations"}]'
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/Learning%20Arduino-%20Pulse%20Width%20Modulation.md)

![Learning Arduino: Pulse Width Modulation](https://media.licdn.com/dms/image/v2/C4E0DAQFmJV_0Jz54qg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669931109?e=2147483647&amp;v=beta&amp;t=fsGXsszYjCbEzP4dRHnvAdfr_cUshhHTRyVt-q7Hbik)

# Learning Arduino: Pulse Width Modulation

> Pulse width modulation (PWM) is an essential skill for connecting Arduino microcontrollers to motors or lights, providing a way to approximate analog voltage levels with digital signals. Using PWM, you can control and program the brightness of lights and the speed of motors—bringing your projects to life. Join Rae Hoyt in this course and learn how to harness the power of PWM to drive digital circu

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation) | 1h 16m | Intermediate | 132K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [Challenges](#challenges)
- [**1. Introduction to Pulse-Width Modulation (PWM)**](#1-introduction-to-pulse-width-modulation-pwm) (5 videos)
  - [Exploring the fundamentals of PWM](#exploring-the-fundamentals-of-pwm)
  - [Using basic PWM output](#using-basic-pwm-output)
  - [Faking PWM on a non-PWM pin](#faking-pwm-on-a-non-pwm-pin)
  - [Challenge: Matching PWM and non-PWM LED brightness](#challenge-matching-pwm-and-non-pwm-led-brightness)
  - [Solution: Matching PWM and non-PWM LED brightness](#solution-matching-pwm-and-non-pwm-led-brightness)
- [**2. Using Analog Inputs to Drive PWM Output**](#2-using-analog-inputs-to-drive-pwm-output) (7 videos)
  - [Introducing various analog inputs](#introducing-various-analog-inputs)
  - [Understanding the basics of analog input](#understanding-the-basics-of-analog-input)
  - [Finding logic bugs in your code](#finding-logic-bugs-in-your-code)
  - [Testing components with a multimeter](#testing-components-with-a-multimeter)
  - [Using the map function](#using-the-map-function)
  - [Challenge: Understanding the math behind the map function](#challenge-understanding-the-math-behind-the-map-function)
  - [Solution: Understanding the math behind the map function](#solution-understanding-the-math-behind-the-map-function)
- [**3. LED and PWM**](#3-led-and-pwm) (8 videos)
  - [Fading an LED with PWM with code](#fading-an-led-with-pwm-with-code)
  - [Calibrating an analog input to fade an LED precisely](#calibrating-an-analog-input-to-fade-an-led-precisely)
  - [Challenge: Programming an LED that reacts to brightness](#challenge-programming-an-led-that-reacts-to-brightness)
  - [Solution: Programming an LED that reacts to brightness](#solution-programming-an-led-that-reacts-to-brightness)
  - [Using an RGB LED](#using-an-rgb-led)
  - [Mixing colors on an RGB LED using three analog inputs](#mixing-colors-on-an-rgb-led-using-three-analog-inputs)
  - [Challenge: Fading through the rainbow with PWM](#challenge-fading-through-the-rainbow-with-pwm)
  - [Solution: Fading through the rainbow with PWM](#solution-fading-through-the-rainbow-with-pwm)
- [**4. Motor Control**](#4-motor-control) (9 videos)
  - [Comparing DC motors, servos, and stepper motors](#comparing-dc-motors-servos-and-stepper-motors)
  - [Implementing basic servo control](#implementing-basic-servo-control)
  - [Controlling a servo with an analog input](#controlling-a-servo-with-an-analog-input)
  - [Controlling a continuous rotation servo with an analog input](#controlling-a-continuous-rotation-servo-with-an-analog-input)
  - [Controlling DC motor speed with an analog input and transistor](#controlling-dc-motor-speed-with-an-analog-input-and-transistor)
  - [Diving deeper into H bridge control](#diving-deeper-into-h-bridge-control)
  - [Controlling a DC motor with an H bridge](#controlling-a-dc-motor-with-an-h-bridge)
  - [Challenge: Controlling a DC motor with an H bridge and potentiometer](#challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer)
  - [Solution: Controlling a DC motor with an H bridge and potentiometer](#solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer)
- [**Next steps**](#next-steps) (1 videos)
  - [Conclusion](#conclusion)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=0)** - Have you ever dreamed of bringing the world around you to life? Whether it's driving a car, maintaining a garden or flashing lights to match a beat, automating a process can save you time and lead to deeper insight. Pulse width Modulation is a tool used by leading technologists in every avenue of industry. The [[Arduino]] is a small but powerful microcontroller that lets anyone apply this amazing technology to their own projects. That's what this course is all about, creating interactive programs and circuits. Hi, I'm Rae and I've been making, hacking and programming since grade school. In this course, I'm going to show you a few ways to harness the power of Pulse width Modulation with the Arduino to make LEDs, Servos and motors [[React.js|react]] to input from the environment. Along the way, I will introduce you to your new best friend, the multimeter, and help you to minimize the time you spend to bug in your code. So, if you're ready, get out your breadboards. It's time to start [[Prototyping]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2), [[React.js|React]] (1), [[Prototyping]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - have (1)

#### [What you should know](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980&t=0)** - Before you watch this course, there are a few things you need to know. You need to have a working knowledge of [[Arduino]]. If you know how to declare variables, call functions, and set up basic circuits, you should be good to go. If you are new to Arduino, check out the course Up and Running with Arduino. You'll also need to have some components to follow along with the examples. I am using components from the Arduino Starter Kit. I will be using LEDs, servos, motors, and various analog components. If you have a basic Arduino kit, you probably have most of the components you'll need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (5)
> **Prerequisites:** you need to have (1), set up (1), you'll need (1)
> **Speakers:** - before (1)

#### [Using the exercise files](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-exercise-files?u=76281980&t=0)** - The exercise files I use in this course are organized by chapter. However, most of the code I will demo is baked into the [[Arduino]] IDE, so there are only a few files for you to download. You can also find wiring schematics and other reference material in the Exercise Files folder.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Exercise Files:** exercise files (2)
> **CLI Commands:** find (1)
> **Env Vars:** ide (1)
> **Speakers:** - the (1)

#### [Challenges](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=0)** - This course includes several videos called challenges. Challenges are quick activities that give you a hands-on opportunity to practice and master what you've learned. I'll start each challenge by describing your core objective for the activity. If the challenge involves using any sample files, I'll tell you where to find them. I'll also give you a rough estimate of how much time it should take you to complete the challenge. When you've completed a challenge, make sure to watch the matching solution video. In each solution, I'll show you how I solved the challenge and give you some of my thinking along the way. Again, this is an opportunity for you to master what you've been learning. It's also a great opportunity to have some fun.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - this (1)


### 1. Introduction to Pulse-Width Modulation (PWM)

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring the fundamentals of PWM](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=0)** - Pulse-Width Modulation or PWM is a very simple but important principle of [[Electronics]]. PWM is used in many industries, but regardless of application, the theory remains the same. PWM allows for analog like controlls through a digital circuit. Digital circuits have two states on and off. Similar to a light switch, there's no other option available. Analog signals can be adjusted to any value from off to full power. Similar to a dimmer switch on a light, the power level can be adjusted to any value between high and low. This graphic outlines the various components of an electrical wave. The Wavelength is how long it takes for a wave to complete one cycle. This is also called frequency or period. The Amplitude is the height of the wave. In our case, 5 volts on the [[Arduino]]. An important part of a Pulse Wave is the Duty Cycle. Duty Cycle is the percentage of time the signal is high in the peroid of the wave. In this wave, the Duty Cycle is 50 percent. This is called a Square Wave meaning the signal is high for 50 percent of the Wavelength and low for the other 50 percent. If the wave was high for 75 percent of the peroid and low for 25 percent of the period, we would say that that wave has a Duty Cycle of 75 percent. This image shows an LED turned on with a Digital Right Command. If you output a Pulse Wave from the Arduino with a 75 percent Duty Cycle to an LED, the LED would appear to be about 75 percent as bright
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=93)** as the LED that was simply turned on with the Digital Right Command. At 50 percent, the LED is dimmer still. Duty Cycle is the magic behind PWM. On a high frequency wave, by adjusting the amount of time the signal is high, you can change the Average Voltage over time to get any value between high and low. This is shown by the grey line. The pulse gets steadily wider. When I overlay this purple line, you can see that over time the Average Voltage steadily increases and then decreases. Using this principle, you can adjust the brightness of an LED similar to an Analog controller. Pulse-Width Modulation will also allow the Arduino to set the speed of a motor, or I can set the direction a servo is pointing. Without PWM, these devices would only have two settings on or off.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (3), [[Electronics]] (1)
> **Env Vars:** led (6), pwm (5)
> **Analogies:** similar to (3)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - pulse (1)

#### [Using basic PWM output](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=0)** The first step in using PWM on the [[Arduino]] is to select a PWM pin. On my board, there's a tilde next to the PWM pins. Your board should be something similar, like an asterisk, or may even have PWM printed next to it. If you are unsure, refer to the documentation for your board. For this sketch, I have an LED plugged into pin nine with a resistor in series. In the Arduino IDE, I will select File, Examples, Basics, BareMinimum. From here, I need to declare a few variables and send PWM output to my LED. First, I instantiate a new integer variable, LED nine, and assign a value of nine. You should use a short descriptive name for your variables to increase the readability of your code. I declared LED nine as a constant, meaning it is read-only. This allows the compiler to optimize the code, saving memory. This is a good habit to get into because the Arduino has a limited amount of storage space. Variable naming conventions suggest all caps for constants. This simply stands as a visual indicator that the variable is a constant without having to refer back to the declaration. Generally with Arduino, I would next set pin nine to output with the pinMode() function. That would be redundant with the use of the next function, analogWrite(). AnalogWrite() takes care of setting the pin to output.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=97)** I'll use the analogWrite() function to set LED nine to 255. AnalogWrite() accepts 8-bit values between zero and 255, the range of a single bite of data. When I compile and upload this code, it should look no different than any other time I have turned on an LED with a basic digitalWrite() function. The pulse wave being output through the Arduino is identical to the five-volt digital high output. If I set the analogWrite() value to zero and re-upload, the LED is now off. Now if I set the analogWrite() to a value of 127 and re-upload, the LED will appear about half as bright as it did at a value of 255. The Arduino is outputting a high-frequency pulse wave with a duty cycle of 50%. The perceived voltage is 2.5 volts. You can see from trying many different values the brightness is adjusted accordingly. Duty cycle can be roughly calculated by dividing the analogWrite() value by 256, the number of values available. Using this theory, I can adjust the output that is sent to any circuit on a PWM pin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (6)
> **Env Vars:** led (8), pwm (6), ide (1)
> **Code Identifiers:** analogwrite (5), pinmode (1), digitalwrite (1)
> **Definitions:** is a  (2)
> **Versions:** 2.5 (1)
> **Documentation:** the documentation (1)

#### [Faking PWM on a non-PWM pin](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=0)** - Although you can output variable PWM signals to the specified PWM pins, you can also fake very basic PWM output on the other digital-output pins. This isn't something I would suggest doing for most projects, but it is a helpful step in understanding how PWM works. By creating a loop to very quickly toggle the power on and off on a non-PWM pin, I can see what PWM is doing. For this sketch, I have an LED plugged into pin 9 with a resistor in series. I also have an LED plugged into pin 7. In the [[Arduino]] IDE, I am going to select file, examples, basics, BareMinimum. First, I'll instantiate constant integer variables to call the pins. Next, I'll instantiate pin 7 as output. In the loop, I'll call the analogWrite function for pin 9, and set the value to 127. Now, I'm going to add a few lines of code for pin 7. With a goal of matching the brightness of pin 9, first, I'll use the digitalWrite function to set pin 7 to an output of high or five volts, then I'll pause the program with a delay command. To start, I will set that to a 1,000 or a delay of one second. Then, I will call the digitalWrite function again, this time setting the output to low or zero volts. Finally, I will add another delay.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=96)** If I upload this code, I see the LED on pin 9 with 50% brightness, and the LED on pin 7 turning on and off at a one-second interval. Now for the fun part. By increasing the speed of the loop, by decreasing the delay values, I can cycle the power so quickly that the wave form being produced on pin 7 will match the output on pin 9. I'll change the values of the delay to one. This will allow the loop to execute approximately 500 times a second. When I upload the code, the LEDs now roughly match in brightness. By looking at the code, I can see that the LED on pin 7 is on for one millisecond and then off for one millisecond. The wave is high for 50% of the period of the wave, meaning the output has a duty cycle of 50%. Now, let's say the value for pin 9 is 191. To match the pulse wave on pin 7, the signal needs to be on for three quarters of the total wave. So, to make this happen, I set the first delay to three and the second delay to one. This makes the total-loop duration four milliseconds. With the wave high for three milliseconds, I should again see roughly the same brightness.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Env Vars:** pwm (6), led (5), ide (1)
> **Code Identifiers:** digitalwrite (2), analogwrite (1)
> **CLI Commands:** make (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is a  (1)
> **Speakers:** - although (1)

#### [Challenge: Matching PWM and non-PWM LED brightness](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=3)** - Okay folks, it's time for our first challenge. In this challenge, I want you to fake PWM output on a non-PWM pin to match the brightness of two LEDs. In the exercise files, open 01_04 Challenge handout. I have listed eight PWM values. There's also a location to write in delay values for the non-PWM LED labeled A and B. For each PWM value, calculate the duty cycle. Then for each value, write down the number you think best fits A and B from the sample code block. For values 1-4, calculate and document the values. These values will make the LED too dim for you to see so don't worry about uploading the code to test. For the values calculated for 5-8 take the time to upload the code to test. You can find sample code for the project in the sketch 01_04 Challenge. You will need an LED with a resistor in series on pins 7 and 9. You goal is to match the pulse width modulated output of pin 9 on pin 7, so that the LEDs' brightness match. Keep in mind that the delay values need to be very low for the loop to cycle quickly enough. If you need to, round numbers to keep the delay values under 10. This challenge should take you no more than 15 minutes. When you're done, make sure to check out my solution video,
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=97)** where I'll show you how to solve this problem.

> [!info]- Semantic Content
>
> **Env Vars:** pwm (5), led (3)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** sample code (2), exercise files (1)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - okay (1)

#### [Solution: Matching PWM and non-PWM LED brightness](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=3)** All right, let's take a look at the solution for this challenge. LEDs need approximately 3 volts before they begin to glow, which is why I had you calculate, but not test, values one through four. Analog write values between zero and 100 will produce little to no light from most LEDs. The first value is 26. 26 divided by 256 is .1, so the duty cycle is 10%. My A value should be 10% of the total delay. If A is one, then B could be nine. This would produce a wave that is high 10% of the time. The second value is 64. 64 divided by 256 is .25, so the duty cycle is 25%. If A is one, then B could be three, producing a wave that is high 25% of the time. The third value is 80. 80 divided by 256 is .31, so the duty cycle is 31%. If I say A should be three, then B could be seven, producing a wave that is high 30% of the time. The fourth value is 105. 105 divided by 256 is .37, so the duty cycle is 37%. If A is two, then B should be three, producing a wave that is high 40% of the time.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=99)** Remember, the duty cycle values have to be low for you to see the LED flicker. I've rounded to 40 in order to keep these values under 10. With the next four values, I will also upload the code in the IDE. The fifth value is 155. 155 divided by 256 is .6, so the duty cycle is 60%. If A is three, then B should be two, producing a wave that is high 60% of the time. In the IDE, I'll set V to 155. My A value was three, and my B value was two. I'll upload the code, and there we go. We can see the LEDs are both the same brightness. The sixth value is 180. 180 divided by 256 is .7, so the duty cycle is 70%. If A is seven, then B should be three, producing a wave that is high 70% of the time. Again, in the IDE, I'll put 170 for V, A is seven, and B is three. When I upload, I can now see, again, the LEDs are the same brightness. The seventh value is 205. 205 divided by 256 is .4, so the duty cycle is 80%.
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=192)** If A is four, then B should be one, producing a wave that is high 80% of the time. I'll set my values, and once again, the LEDs are equal. All right, now for my last value. 231 divided by 256 is .9, so the duty cycle is 90%. If A is nine, then B could be one, producing a wave that is high 90% of the time. I'll set my values, and upload. And there we go. In each case, plugging the numbers into the sample code sets both LEDs to similar brightness levels. This is likely something you won't do in a project, but it is an important step in understanding how PWM works. You can see from these tests, as the duty cycle is increased, the brightness of the LEDs also increases.

> [!info]- Semantic Content
>
> **Env Vars:** ide (3), led (1), pwm (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is an  (1)


### 2. Using Analog Inputs to Drive PWM Output

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing various analog inputs](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=0)** - There are hundreds of different analog inputs but at their core, they all do the same thing. They may monitor the temperature in a room, humidity in the air, or the acidity of soil. But when you boil it down, each of these electrical components is simply a variable resistor. The [[Arduino]] will listen for a five volt signal on the Arduino analog pin. By adjusting resistance, more or less of the five volt signal passes through. The Arduino interprets this voltage and assigns a value from zero to 1023. How has that value changed? Well, it depends on the component. There are many types of sensors, so your options are nearly limitless. Let's look at four components that are used frequently with the Arduino. Your components may have a different schematic, so always be sure to check the data sheet before plugging anything in. A potentiometer is a simple knob that provides variable resistance. As you turn the knob left and right, the resistance changes, which in turn changes the input value. A dimmer switch on a light is a potentiometer. There are three pins on this component. The legs on either side are the two ends of a resistor and should be connected to power and ground. As the knob is moved left and right, the path of least resistance is changed. The center pin gets connected to the analog input. Potentiometers come in many different shapes. Some are knobs that rotate, others look like dimmer switches. You may even see some that look like buttons.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=95)** A flex sensor, also called a bend sensor, is normally long and thin. As you bend the sensor, the resistance changes. If you took apart a joystick, you might find a flex sensor. For the Arduino, I use a conductive ink-based bend sensor. In this component, a thin strip of conductive ink is placed between two strips of copper. As the component is bent, the ink is displaced, reducing the resistance to jump through the ink. A photoelectric sensor senses light. As the amount of light is changed, the resistance changes. If your laptop automatically dims the screen when you turn the lights off, your laptop is using a photosensor. This one works through a stunning scientific process. The surface of the component is made out of a photon reactive material. When photons, or light particles, hit the surface, electrons are disrupted. The more electrons disrupted, the lower the resistance. As the light gets dimmer, the electrons come back to [[Representational State Transfer (REST)|rest]] and the resistance goes up. To hook this up to your Aduino, you also need a resistor in parallel to the photosensor in the circuit. The resistor will pull the value of the circuit back down to zero, stabilizing the signal and reducing noise. A piezoelectric sensor, or piezo buzzer, detects changes in pressure, strain, or force. The prefix "piezo" is Greek for "press" or "squeeze." Piezo sensors are incredibly common,
>
> **[3:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=188)** from audio pickups to thousands of automotive applications. How does it work? The secret is crystals. A diaphragm absorbs energy and squeezes a crystal. When the crystal is stressed, a charge is generated. Piezos, like LEDs, have polarity so they only work in one direction. Just as with the photosensor, you will also need to attach a resistor in parallel to the piezo. Piezos are unique, as they can also be used as outputs. If you send a signal through a piezo buzzer, you can create sound. With analog inputs, projects can now read and [[React.js|react]] to the environment dramatically.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (5), [[Representational State Transfer (REST)|Rest]] (1), [[React.js|React]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - there (1)

#### [Understanding the basics of analog input](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=0)** - For this sketch, I'm going to use a potentiometer to adjust the value read on an analog input pin. I have one lead of the potentiometer connected to five volts, the other side to ground, and the center lead connected to analog input pin zero. In the [[Arduino]] IDE, I will select File, Examples, Basics, AnalogReadSerial. There are three lines of code in this sketch that may be new to you. First, in the setup function, we are initializing the serial monitor. This opens a serial communication port between the Arduino and your computer. The value of 9600 sets the maximum transfer rate of the serial port to 9600 bits per second. This is called the Baud rate, which defines how quickly information is transferred in a communication channel. A baud rate of 9600 allows 960 characters per second to be transferred. For most applications, this transfer rate is sufficient. The Arduino is capable of supporting baud rates up to 115,200, or 11,520 characters per second. Next, the Arduino will read the value of analog input 0, and write it to a newly declared variable, sensor value. Notice that A0 was not initialized by pin mode. By default, the analog pins are set as inputs, listening for a value that you can check at any time. Analog inputs can be declared as output pins and used as extra digital pins. However, they do not have PWM implemented on them.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=95)** Finally, the value being read from the potentiometer is printed to the serial monitor with Serial.println. This function prints whatever is contained in the parentheses to the serial monitor window, and then adds a character turn to the end of the line. You will see this formatting when I open the serial monitor. I will connect my board to the USB cable and select upload. You will see two lights on the Arduino, marked Rx and Tx, flashing. The program is now done uploading. Those flickering lights are used for serial communication. Serial devices require two pins. The receiver, Rx, and the transmitter, Tx. On the Arduino, Rx is connected over digital pin 0, while Tx is connected over digital pin 1. If you had a circuit connected to these pins while you were using the serial monitor, it would be affected by the serial communication. For this reason, it is important to use digital pins 0 and 1 last, after all of your other pins are in use. In the Arduino IDE, I will click on the magnifying glass icon to launch the serial monitor. Now, I am ready to begin interacting with the component. I have twisted the potentiometer all the way to the left. Since the left side of my potentiometer is connected to power, I should read a value of 1023. As I twist the knob on the potentiometer, the value decreases. Once I bottom out, I read a value of zero. By adding just a few lines of code,
>
> **[3:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=190)** I can use analog inputs to control my pulse width modulated components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (7)
> **Env Vars:** ide (2), pwm (1), usb (1)
> **UI Navigation:** open the (1), click on (1)
> **Definitions:** is called (1)
> **Prerequisites:** setup (1)
> **Speakers:** - for (1)

#### [Finding logic bugs in your code](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=0)** - Consider this. You are working on a project that calls for a potentiometer to control the brightness of an LED. Once you upload your code, regardless of the position of the potentiometer, your LED remains off. What's the problem? You could have a Logic Bug in your program. Logic Bugs are tricky; they are the result of bad math, or faulty logic. Because the code is technically sound, the compiler has no issues with it. You just don't see the actions you expect when it executes. Because it's so easy to make a simple mistake in your head, following along with the code, and doing the math by hand, often leads to logic errors. To squash those bugs, I use the Serial Monitor. While the Serial Monitor can simply be used to print information from the pins on the [[Arduino]], it can also be useful in finding problems in your programming logic or physical components. By printing additional information to the Serial Monitor, you can see how variables are being manipulated throughout your code. In the Arduino IDE, I will select File, Examples, Basics, Read Analog Voltage. In the loop of this program, a float variable is declared, and initialized with the mathematically equivalent voltage of the value read from A0. A Float Variable can contain any numerical value, integer, or otherwise. This includes non-whole numbers or numbers with digits to the right of the decimal place.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=92)** Float Variables are helpful in calculating accurate values from small numbers. However, they take up twice as much space in memory as integers; 32 bits for 16. Additionally, Floating Point calculations are highly resource intensive as compared to integer-based math. It is also worth noting that when doing Floating Point math, the number used in your calculations, must include decimal points. Otherwise the Arduino may treat the numbers as integers, producing incorrectly calculated values. If I upload this code, and open the Serial Monitor, I can see the calculated voltage from the analog input. You can see, as I turn the potentiometer, that value changes over time. Going back to the code, say perhaps I forgot to include those decimal points that are so important to my Floating Point math. Now when I upload the code, my values are going to be poorly rounded to the nearest whole number. I haven't moved the potentiometer since I last had the Serial Monitor open. My value was 2 and change; now it's rounded down to 0. The code still compiles, the Arduino runs, but the numbers are incorrect. Regardless of the position of the potentiometer, the values are going to read 0.0. Without the decimal place, 5 divided by 1023 is being rounded to the nearest whole number; 5 divided by 1023 is .00488.
>
> **[3:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=188)** This is rounded to 0 and anything times 0 equals 0, so the value of voltage is always 0. In a more complex program, you can use the Serial Monitor to capture the value of a variable as it moves through a process. Then, you can test the result yourself, without the worry of making a mistake. If the logic in the code gives you an undesirable result, it is easier to see what's going on, if you just listen to what the Serial Monitor has to say.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4)
> **Env Vars:** led (2), ide (1)
> **CLI Commands:** make (1)
> **Versions:** 0.0 (1)
> **UI Navigation:** open the (1)
> **Speakers:** - consider (1)

#### [Testing components with a multimeter](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=0)** - Few things hurt your ego more than spending an afternoon fighting your code, only to realize hours later that a bad component was causing all of your problems. Electronic components are mass produced. Most production facilities have some QA process components go through before they leave the factory, but bad components do slip through. After the components leave the factory and spend months in transit, additional components will fail. Between components that are dead on arrival, and those that fail under your watch, you will encounter bad components. You can test for these with a Multimeter. A Digital Multimeter measures voltage and resistance. Digital simply means the information is presented digitally rather than through an analog gauge. Next to your [[Soldering]] iron, this is the most important tool in your repertoire. Multimeters can cost thousands of dollars and are often giveaway or free with coupon tools on the low end. While the expensive variants offer lots of functionality, for Aduino any multimeter will work. There are seven function areas on my multimeter. Three of which are essential to testing your circuits. The first is the Diode Function, which can be used to test if a diode is working correctly. It's great for testing in LED to see if it's burnt out. Because diodes only work in one direction, it's important to connect it correctly to get an accurate reading. The ohm function is for reading resistance.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=94)** There are five selections available, defining the range the multimeter is reading. I want to select the lowest value that is greater than the component I'm testing. Measuring a 10K resistor would require the 20K range. If I select a value that is too low, the display will read one when I test the component, indicating that the value is outside of the current range. Depending on the component, it may or may not be necessary to hook the leads up correctly. The final essential function measures DC voltage. This function also has five ranges. If I hook up a power source like a 9 volt battery, I would select 20 as my range. The remaining functions are used less frequently but come in handy when you need them. The DC amp function is used to test for shorts and bad components. Amperage is always tested in series with the circuit you are testing. The AC volt function works the same as the DC volt function. Many AC currents are dangerously high, at 110 or 220 volts in a household circuit. A DC voltage would be more dangerous at those levels, however at the low DC voltage use with the [[Arduino]], there's little to worry about. The 10 amp function is just like the DC amp function but for higher amperage. Arduino projects rarely top a few amps. To use the 10 amp function, move the ground lead to the 10 amp jack.
>
> **[3:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=190)** The last function is the transistor function. You have to connect the transistor correctly through the transistor jack as per your data sheet. It's a fairly complex operation. The best way to understand a multimeter is to use it. You should become intimately familiar with yours so you can bend it to your will when you need it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2), [[Soldering]] (1)
> **Env Vars:** led (1)
> **UI Navigation:** select the (1)
> **Analogies:** just like (1)
> **Speakers:** - few (1)

#### [Using the map function](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=0)** - The Map Function is a powerful tool in your [[Arduino]] arsenal. Map scales one range of linear values to another range. This allows you to precisely align two value sets. You can see this idea in action on a thermometer. 0 degrees Celsius and 32 degrees Fahrenheit represent the same actual temperature, just in different systems. If you wanted to use an analog input to control the brightness of an LED, you would need to use the map function or you would lose most of the resolution of the input. Analog inputs read values from 0 to 1023. The analogWrite function takes values from 0 to 255. If you were to write this statement in a block of code, the LED would change in brightness as you adjust the analog input but as soon as your input value surpasses 255, the counter resets. If your input value is 256, it would look like the LED is off. At 510, the LED would be at full bightness again. It will loop like this as the value increases. The LED will not get any brighter and you lose the resolution of the full sweep of the potentiometer. The map function takes five values as input. The first is the value you would like to map. The next two inputs are the high and low end of the original range. The last two inputs are the high and low values of the new mapped range.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=92)** Let's say I wanted to map a value of five on a scale of 0 to 100 to a scale of 0 to 1,000. 5 divided by 100 is .05 or 5 percent. So the map function wants to find the value on the scale from 0 to 1,000 that is also 5 percent. 1,000 times .05 is 50 so the new mapped value is 50. Let's look at a more complex example. Say I wanted to map a value of 36 on a scale of 0 to 855 to a scale of 0 to 50. 36 divided by 855 is .042 or 4.2 percent. 4.2 percent of 50 is 2.1 rounded to the closest integer is 2. In the Arduino IDE, I will select File, Examples, Analog, AnalogInOutSerial. This program starts with a few variable declarations. One each for the analog input and output and two more to hold other values. In the setup, the serial monitor is initialized. Next, the value of the analog pin is red with analogRead and assigned to sensorValue. Finally, we've come to the map function. Map takes sensorValue, the high and low range of the analog input pin 0 and 1023, and the high and low value of the map range
>
> **[3:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=186)** 0 and 255 which also happen to be the high and low range of analogWrite. sensorValue is mapped to this new range and assigned to outputValue. Then the mapped value is called an analogWrite to set the brightness of an LED. In this serial monitor, sensorValue and outputValue are printed so you can see the results. I'll upload the program and open the serial monitor. You can see when the value of sensorValue is 0, outputValue is also 0. As I turn the pententiometer and bring up the sensorValue, you can see that the scaled outputValue is also raised.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Code Identifiers:** sensorvalue (6), outputvalue (4), analogwrite (3), analogread (1)
> **Env Vars:** led (6), ide (1)
> **Versions:** 4.2 (2), 2.1 (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** find (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** setup (1)

#### [Challenge: Understanding the math behind the map function](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=3)** - Get your calculators out again. It's time for another challenge. In this challenge I want you to open 02_06 Challenge handout and fill in the blanks. There are 10 values paired with the old and new ranges. Your goal is to take each value and find the new mapped values. Remember, the map function is simply finding the percentage from low to high in the original range, and mapping that to a value that is the same percentage from low to high in the new range. All of these values are using the ranges from analogInput and analogWrite so that you can better understand what the [[Arduino]] is doing. This challenge should take more than 10 minutes. Be sure to check out my solution video for the answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Code Identifiers:** analoginput (1), analogwrite (1)
> **CLI Commands:** find (1)
> **Speakers:** - get (1)

#### [Solution: Understanding the math behind the map function](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=3)** - How did it go? Were you able to map all of the values? Let's take a quick look at the math to solve these problems. The first value on the handout is 17. 17 divided by 1023, is .0166, or 1.66 percent. To keep the math simple, I'll round that up to two percent. Two percent of 255 is 5.1, so the [[Arduino]] will map that value to roughly five percent. The next value is 58. 58 divided by 1023 is .0566, or 5.66 percent, which I will round up to six percent. Six percent of 255 is 15.3, so the arduino will map that value to roughly 15. You can see the next three values in this table as well. With each value increase, the scale number increases. The final five values are calculated the same way. When you are working with various inputs and outputs, it can be helpful to make tables like these as reference. They can be incredibly helpful when testing for logic bugs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Versions:** 1.66 (1), 5.1 (1), 5.66 (1), 15.3 (1)
> **CLI Commands:** make (1)
> **Speakers:** - how (1)


### 3. LED and PWM

[↑ Back to Table of Contents](#table-of-contents)

#### [Fading an LED with PWM with code](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=0)** - [Voiceover] In this next example, I'm going to use the [[Arduino]] to slowly fade an LED in and out. In the Arduino I-D-E, I will select file, examples, basics, fade. With the use of the analog-right function, I can adjust the brightness of an LED. By keeping track of the brightness and slowly adjusting that value, I can make an LED fade in and out. In this program, three variables are declared. LED, brightness, and fade amount. In the set-up function, pin mode sets pin 9 as output, which, as I mentioned earlier, is unnecessary, as analog-right can handle that declaration. In the loop, the brightness value is sent to the LED with the analog-right command. The brightness value is then adjusted by fade amount. In this case, five. The program checks to see if the value of brightness is zero or 255. If so, the Arduino sets fade value to the additive inverse of fade value. The additive inverse of a number is the number, that when added to the number, yields zero. So if fade amount equals five, the additive inverse is negative five. The opposite is also true. This happens first when the value reaches 255. At this point, fade value is five. Arduino changes the sign of the value making fade value negative five. Now, each time the loop executes, the program adds negative five to brightness.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=94)** Once the value of brightness falls back to zero the condition rings true again. This time, fade value is negative five. So the Arduino again swaps the sign of the value, setting the fade value back to five. This happens over and over again while the LED fades in and out. When I upload and verify this code you can see that the LED gets brighter and dimmer over time. Because this is happening in the loop, it will continue to execute until the Arduino is unplugged. Back in the code, I'm going to change fade amount to 10. I also need to change the upper bound of the if statement to 250. Otherwise, the statement will never execute as true. Now, when I reupload the code, you can see the fading happening faster. I'll change the upper bound back to 255 and now I'll set the fade value to one. When I upload this code, it now takes the LED longer to fade in and out. However, when it fades all the way down it takes quite a while for it to turn back on. This is because the LED appears off around the value of 100. So I'm going to set the lower bound of the if statement to 100. Now, the Arduino will not count down lower than 100. The LED still fades slowly, but only remains off for a few moments between pulses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (7)
> **Env Vars:** led (10)
> **CLI Commands:** make (1)
> **Speakers:** - [voiceover] (1)

#### [Calibrating an analog input to fade an LED precisely](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=0)** - Let's take a look at another great function in [[Arduino]], constrain. In the Arduino IDE, I will select File, Examples, Analog, Calibration. For this sketch, I have a potentiometer attached to A0. I also have an LED with a resistor in series attached to pin 9. This sketch also calls for an LED on pin 13. My board has an onboard LED on pin 13, so I will not set up another LED on the breadboard. This program changes the brightness of an LED based on the value being red from analog 0. However, it begins by going through a calibration phase in the setup function. On start-up, the Arduino watches the analog input for five seconds. It captures the highest and lowest-values and assigns them to sensorMax and sensorMin. While it is doing this, the LED on pin 13 is turned on to signal that the program is in calibration mode. Calibration can be extremely helpful, depending on your project needs. Calibration can make your components more responsive by narrowing the range of map values. Imagine the potentiometer is a steering wheel on a car. If the steering wheel is more sensitive, the vehicle responds more aggressively. If you calibrate your potentiometer to only use 10 degrees of rotation, it can help you to tune your [[Hardware]] to your needs. Say you are using a photocell on a project to control the brightness of an LED.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=92)** If you hard-code the Min and Max values of your input, and then take that project to a poorly-lit area, you may not ever see the LED turn on. By coding calibration into the program, you can reset the high and low-values each time you start the Arduino without making any adjustments to the code. Down in the loop, we see the map function again. The value of sensorValue is being mapped to the PWM range and stored in outputValue. The high and low-end of sensorValue that we capture during calibration are used as the high and low-end of the source range. Next we see that super important function, constrain. Before the brightness of the LED is set, the outputValue is run through the constrain function. Constrain takes three values as parameters, the value being constrained and the high and low-end of the constrained range. If the calibrated input range is 0 to 500, and the Arduino then reads an input value higher than 500, the map function will output a number outside of the range. The calibration function will bring the high value into the range. This catches outliers so unexpected values don't throw off the expected results. I'll upload the code. Once the LED on pin 13 comes on, I'm in calibration mode. If I turn the potentiometer all the way up and down, the calibrated range will be the same as we saw earlier
>
> **[3:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=186)** in the analog input example. However, if I unplug the Arduino and calibrate it again, this time only turning the potentiometer a small amount, you can see that the LED brightness is more responsive. As I adjust the potentiometer, the value being red goes up. When a number outside of the range is inputted into the map function, the LED simply stays at full brightness. Hopefully, now you can see why the constrain function can be so helpful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (6), [[Hardware]] (1)
> **Env Vars:** led (12), ide (1), pwm (1)
> **Code Identifiers:** sensorvalue (2), outputvalue (2), sensormax (1), sensormin (1)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** make (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)

#### [Challenge: Programming an LED that reacts to brightness](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=3)** - Okay folks, it's time for another challenge. In this challenge, I want you to make an LED adjust in brightness with a photoelectric sensor. Use the calibration, or analogInput example in the [[Arduino]] IDE as a starting point. Or, if you're really feeling like a challenge, write it from scratch. If you're having trouble connecting the photosensor, refer to the 03_03 Challenge handout for a wiring schematic. Remember, you will need to include a resistor in series to pull down the voltage. A 10K resistor should work well. Once you have everything hooked up, cover the sensor and see what happens. You can also try shining a light on the sensor. Record your results. This should take you no more than 10 minutes. Be sure to watch my solution video to see how I solved this problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Env Vars:** led (1), ide (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** analoginput (1)
> **Speakers:** - okay (1)

#### [Solution: Programming an LED that reacts to brightness](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=3)** - All right. Let's take a look at solving this challenge. First, I will connect one side of the photo sensor to power and the other side to analog zero. I will also attach one side of a 10k resistor to analog zero and the other side to ground. This resistor acts as an alternate path to ground. When the resistance of the photocell drops, electricity will flow freely. The resistor will fill up and the additional electricity will flow to analog zero. As resistance increases, the flow of electrons will slow until all of the energy can flow through the resistor. I used the calibration example as the beginning for my sketch. So that I can better see what's going on, I also added code to print a few things to the serial monitor. Lastly, I added a delay of one second to slow down the serial monitor. When I upload the code, I will cover and expose the photo sensor during the calibration phase. When I open the serial monitor, I see the constrained value is 255. When I place my hand over the photocell, the resistance increases and the voltage drops. The LED dims until it turns off. Now, when I shine a light on the photocell, the resistance drops and the voltage increases. I can see the LED brightness increase as well. If I press the reset button and recalibrate the range,
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=97)** this time, in a dimly lit area, you can see the LED is now more responsive to small changes in light. If I shine a bright light on the sensor, the constrained function keeps the value in the range. When the photocell is covered the remaining power flows through the resistor returning the circuit to zero volts. This is called a pulldown resistor. I'll unplug the [[Arduino]] and change the 10k resistor for a 1k resistor. By changing to a smaller resistor, the circuit will respond sooner. This will give us more range on the top-end. A low resistor value is called a weak pulldown resistor, as more current is allowed to flow. A high resistor value is called a strong pulldown resistor, in which less current flows. Now, when I plug the Arduino back in, I see the circuit respond sooner. I can use this principle to control a wide range of analog outputs with a variety of analog inputs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** led (3)
> **Definitions:** is called (3)
> **UI Navigation:** open the (1)
> **Speakers:** - all (1)

#### [Using an RGB LED](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=0)** - Color mixing is a great use of PWM. By turning on various colored LEDs at different intensities, I can create any color in the rainbow. This is how your computer creates colors on a monitor. An RGB LED is a special type of LED that combines three LEDs into one. RGB stands for red, green, blue, and is a way of mixing light to create colors. This is called an additive color system. In this system, the absence of color, or light, is black. By turning on each of the three colors at different brightness, you can create any color in the color wheel. Mixing these three colors at full strength creates white light. RGB LEDs have four leads. There are two common ways that those four leads will be set up. These configurations are referred to as "Common Cathode" or "Common Anode". A common cathode RGB LED has one anode lead for each LED. The three colors share a single cathode, or ground. This is the easiest configuration to work with on the [[Arduino]]. Simply hook each anode up to a PWM pin, and connect the common cathode to ground. Alternatively, a common anode RGB LED has one anode lead for each LED. The three colors share a common cathode. Alternatively, a common anode RGB LED has one cathode lead for each LED.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=95)** The three colors share a single anode. The power flows into the component through one lead, an alt ground through each unique lead. These are more complicated to use, and should be avoided until you have a firm grasp of working with a common cathode RGB LED. To hook this up, I will first connect a resistor between the Arduino's ground and the RGB LED's ground. Next, I'll connect the red pin to pin nine, green pin to 10, and blue pin to 11. I have a new window opened in the Arduino IDE. From here, I will instantiate constant integer variables for the three LED pins. In order to randomly set the brightness of each LED, I'll use the Random Function. The Random Function takes two parameters' input, "min" and "max". "min" is included in the range and "max" is excluded. So if you were looking for a random number from zero to 255, your "min" would be zero and your "max" would be 256. Next, I will declare two more constant integer variables, called "min random" and "max random". I'll set the minimum value to 50 and the max value to 256. I also need to declared integer variables for the brightness value for each LED. In the loop, I will call the Random Function
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=192)** to assign a value to each brightness variable. Then, I will assign the brightness value to each LED. Finally, I'll delay for one second, so that I can see the colors change. I'll save the code and upload. And now, every second, I see a new color.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (3)
> **Env Vars:** led (14), rgb (8), pwm (2), ide (1)
> **Definitions:** is a  (3), stands for (1), is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - color (1)

#### [Mixing colors on an RGB LED using three analog inputs](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=0)** - Let's take our color mixing to the next level, and add some analog inputs. In the [[Arduino]] IDE, I will select File, examples, starter kit, color mixing lamp. This program calls for three photosensors to be connected to analog 0, 1 and 2. I am going to use three potentiometers instead, so I can more precisely control the change of color. In the code I need to change the value of green LED pin, red LED pin and blue LED pin so that they correspond to the correct anode for each color. If we scroll down to the loop we can see what's going on. Rather than using the map command, this program is simply dividing by four which roughly gets the job done. These values are also printed to the serial monitor. I'll upload the program and open the serial monitor. Each potentiometer is turned all the way down so each value is reading zero. Now, i will slowly turn up the red LED. And that looks like a nice place to stop. Next, I'll ring up the green LED. As the brightness increases, the added green shifts the color towards orange. Lastly, I'll turn up the potentiometer for the blue LED. With all three colors turned on, I have a nice warm white. I can get a more intense white
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=93)** by turning all three potentiometers all the way up. Spend some time mixing colors and see if you can output each color of the rainbow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Env Vars:** led (6), ide (1)
> **UI Navigation:** scroll down (1), open the (1)
> **Speakers:** - let (1)

#### [Challenge: Fading through the rainbow with PWM](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980&t=3)** Are you ready for another challenge? In this challenge, I want you to build on the activity in the last lesson, and automate the [[Arduino]] to fade through the rainbow with pulse width modulation. Start by turning on the red anode, then slowly fade from red to green, green to blue, and then back around to red. This should be accomplished through programming, with no manual input necessary. If you get stuck, go back and watch the video on fading an LED with pulse width modulation. If you're looking for an additional challenge, try writing your own function to accomplish this task. This should take you around 20 minutes, but don't worry if it takes you longer. Be sure to come back and check my solution and see how I solved this problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Env Vars:** led (1)
> **Cross-References:** in the last (1)

#### [Solution: Fading through the rainbow with PWM](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=3)** - Did you get your [[Arduino]] to output each color? Lets take a quick look at my solution. First I instantiated constant integer variables for each LED. I also declared an array called Color to keep track of the current color that's being output. In the setup function I've initialized the serial monitor so that we can see what's going on. In the loop is where the real magic happens. I start with a four loop. Because of my initial settings in the array it will start with a red LED on. The downer variable will help me select the item in the array that is currently on and slowly bring it down. Next I initialize a variable called upper and assign it a value of zero. Then I check to see if downer is less than two. If downer is zero then upper will be assigned to one. If downer is one then upper will be assigned to two. If downer is two I need to assign upper to zero to bring the color back around to red. Then in my next four loop I slowly bring the current color down and the next color up. On line 27 I call a function called rgbColor. This function was written by me. The function takes three parameters as input. It then assigned each parameter to the brightness for each LED.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=97)** I also have printed some items to the serial monitor so that I can see the color change in action. I'll upload the code and open the serial monitor. As the colors change I can see the serial monitor counting up and down for each color. Once one color reaches zero the next color begins counting down. Because this is happening in the loop it will continue over and over again until I unplug the Arduino. Now it is worth noting this is just one way to come to the solution. If your code looks different than mine but you still see the same results congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** led (3)
> **Code Identifiers:** rgbcolor (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** setup (1)
> **Speakers:** - did (1)


### 4. Motor Control

[↑ Back to Table of Contents](#table-of-contents)

#### [Comparing DC motors, servos, and stepper motors](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=0)** - When it comes to making things move, there are three solutions most makers turn to, DC motors, Servos, and Stepper motors. DC motors have two leads. One for power and the other for ground. The speed of the motor can be controlled with a pulse width modulated signal. When a DC motor is connected to an appropriate power supply, it turns the driveshaft. When the leads are connected in reverse, the motor runs in reverse. Some motors require more power to operate than the [[Arduino]] can provide. To run a more powerful DC motor, you may need to use a transistor. Transistors act as a bridge between the low power signal of the Arduino, and the higher powered signal used to turn the motor. Transistors listen for a signal from the Arduino, and when the signal is output the transistor completes the high power circuit to power the motor. An H bridge is type of integrated circuit that allows for the signal to be applied in both directions. An H bridge listens for multiple signals, and depending on the signal is receives, the motor tuns at variable speed forward or backward. The most common Servos are hobby Servos. Developed and perfected by RC enthusiasts to control scale model vehicles. A generic Servo has 180 degrees of rotation. They generally have three leads. The ground is typically black or brown, the red lead connects to power, the third lead connects to a PWN pin
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=93)** and listens for a signal called the logic-level. Depending on the PWN signal that is output the Servo will rotate and stop at a specific angle. There's no speed control, only angle of rotation. Another type of Servo is a continuous rotation Servo. These Servos also have three leads that function more like a DC motor than a generic Servo. Depending on the Logic signal, the Servo can turn in either direction at a variable speed. Functionally similar to a DC motor with an H bridge. The last component frequently used to move things is a Stepper motor. A Stepper motor turns in steps, and each step is a precise degree of rotation. If a Stepper motor has 180 steps, each step would turn the shaft two degrees. Stepper motors are perfect for precisely controlling movement and are used to control the position of a print head in a printer. If exacting rotation is your goal, Stepper motors are the best solution. Each of these components can solve unique problems and bring your projects to life.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (3)
> **Definitions:** is a  (3)
> **Env Vars:** pwn (2)
> **Analogies:** similar to (1)
> **Speakers:** - when (1)

#### [Implementing basic servo control](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=0)** - Controlling a servo with the [[Arduino]] requires just a few steps. The servo I'm using in this example is a basic hobby servo. It can rotate up to 180 degrees. There is no speed control on this type of servo. You can only control the angle. The servo comes with a few attachments so you can connect it for various uses. in the Arduino IDE I will select Files, Examples, Servo, Sweep. This short example is very similar to the fade example we saw earlier. The servo will simply move from zero degrees to 180 degrees back and forth. On line 10 the servo library is included in the program. As you work with new components you may find that they come with their own libraries. You can read more about libraries on the Arduino website. On line 12 the program creates an object of type servo called myservo. In the setup function myservo is attached to pin 9. Finally down in the loop the program simply counts up to 180 and then down from 180. When the loop concludes the program starts over again. I'll upload this program to the Arduino. Once the program is done uploading I can see the servo moving back and forth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4)
> **CLI Commands:** find (1)
> **Env Vars:** ide (1)
> **Prerequisites:** setup (1)
> **Speakers:** - controlling (1)

#### [Controlling a servo with an analog input](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=0)** - With just a few additions, I can control the angle of the servo with the potentiometer. In the [[Arduino]] IDE, I will select File, Examples, Servo, Knob. With the potentiometer attached to pin A zero, I will upload the code. This example should be familiar in form. This program uses the map function to scale the value red from the potentiometer, to a corresponding angle of rotation on the servo. As I adjust the position of the potentiometer, the servo moves in time. (servo makes buzzing sound) Notice the small buzzing sound I hear when I turn the servo all the way up. You may have also heard this buzzing noise when the servo reached the top and low end of the sweep program. This has to do with manufacturing standards. Some servos simply won't turn the full 180 degrees. This is why it's important to test your servo ahead of time and find the correct operational range for your particular device. If I were to simply add an arm to the end of the Arduino, you could see how I could control a multitude of devices quite simply.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **CLI Commands:** find (1)
> **Env Vars:** ide (1)
> **Speakers:** - with (1)
> **Non-Speech:** (servo makes buzzing sound) (1)

#### [Controlling a continuous rotation servo with an analog input](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=0)** - Controlling a continuous rotation servo is slightly different than controlling a basic hobby servo. When a value of zero is sent to the servo, the servo spins at full speed in one direction. On most servos, this will be anti-clockwise. When a value of 180 is sent to the servo, the servo spins at full speed in the other direction. Again, this is normally clockwise. However, around the value of 90, the servo stops. I stress around, because most continuous rotation servos will be a little off. I have tested my servo and know that a value of 90 makes it stop spinning. I did this by manually trying different numbers. Any number higher than 90 makes the servo spin clockwise, while any number lower than 90 makes it spin anti-clockwise. In the [[Arduino]] IDE, I will select File, Examples, Servo, Knob. Now, this is the exact same code that we used to control the basic hobby servo. Because the value range used to control a basic hobby servo and a continuous rotation servo are exactly the same, I can use the same piece of code. To see a little easier what's going on, I'm going to initialize the serial monitor and print the value that's being sent to the servo. I'll upload the code and open the serial monitor. My potentiometer is currently being mapped to a value of 90.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=99)** With the potentiometer turned all the way down, the servo spins anti-clockwise. I'll adjust my potentiometer until the map value is 90 when the servo stops rotating. If I turn up the potentiometer, the server slowly spins faster. For your Arduino projects, this is a much easier way to get a motor that spins in both directions as opposed to using an H bridge and a DC motor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (2)
> **Env Vars:** ide (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - controlling (1)

#### [Controlling DC motor speed with an analog input and transistor](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=0)** - Powering a DC motor takes a few extra components. When you're powering a DC motor and then cut that power, the motor creates a voltage spike in the opposite direction. This power burst can go back into your [[Arduino]] and cause damage. Also, most DC motors require more than the five-volt signal Arduino can provide. To provide the appropriate voltage, I need to use a transistor in the circuit. The transistor acts as a bridge between the low-level, five-volt Arduino circuit and a higher voltage circuit the motor is connected to. As power is applied to the transistor, a gate is open on the high-voltage circuit. When power is cut, the gate closes and the motor stops. The more open the gate is, the more power flows to the motor. I will use the transistor that came with my kit. Here, the transistor has three leads. I will add it to the breadboard with the front facing away from the Arduino. The front is the side with the numbers printed on it. The black wire of the motor goes to the middle pin on the transistor. I will also connect a diode here between the second pin and ground. This will protect the circuit from that reverse of power when the motor stops. Looking at the front of the transistor, the next pin I will attach is on the left. This will be connected to pin nine on the Arduino. The last pin will be connected to ground.
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=93)** I also need to connect a nine-volt battery to power and ground. I'll use the Farsight power rail. I also want to make sure both grounds of the power rails are connected, so all of my circuits are connected to one common ground. My last wire, the red wire on the motor, connects to the nine-volt power rail. In the Arduino IDE, I will select File, Examples, Analog, Calibration. This program is just about what I need. I'll be using the variable LED pin to power my motor. In the setup function, I'm just going to remove the calibration phase, so that we can get right into controlling the motor. I'll make sure the potentiometer is turned all the way down and then upload the code. Now, as I turn the potentiometer up, I see the motor begin to spin. With the potentiometer turned all the way up, the motor is at full speed. Now, as I bring the potentiometer down, the motor spins down as well. By using a variety of transistors, you can control just about any size motor with the Arduino.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (7)
> **CLI Commands:** make (2), rails (1)
> **Env Vars:** ide (1), led (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** setup (1)
> **Speakers:** - powering (1)

#### [Diving deeper into H bridge control](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=0)** - In order to drive a DC motor in both directions, I need an H bridge. An H bridge is an electronic component that allows voltage to be applied to a circuit in either direction. The most common application is to turn DC motors. The H bridge in my kit is an L293D motor driver. There are 16 pins with four transistors. Each motor uses two of the transistors to operate in both directions. Each pin plays an important role. The top of the chip is marked with a small notch. This is a common attribute of integrated circuits, and is used to tell the orientation of the pins. The pins are numbered 1 through 8, top to bottom on the left, and 9 to 16, bottom to top, on the right. Pins 1 and 9 are called ENABLE pins. These pins are connected to a digital output. When current is run to them, they enable the side of the H bridge that they reside on. Think of them as a master switch. Pins 2, 7, 10, and 15 are INPUT pins. These can be connected to a PWM pin, to enable motor speed control. Pins 3, 6, 11, and 14, are the OUTPUT pins. They each correspond to the INPUT pin they sit next to. Each of these pin pairs is a transistor. As voltage is applied to the INPUT pin, the gate is open on the OUTPUT pin. These are a little special though, in that if you connect a motor to two of the OUTPUT pins, you can control both speed and direction of the DC motor.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=97)** Pin 8, labeled VS, is the INPUT pin for the motor power supply. The red lead of my nine-volt battery is connected here. Pin 16, labeled VSS, is the INPUT pin to power the IC. The chip needs just under five volts to operate, so I'll connect it to the main [[Arduino]] power supply. Pins 4, 5, 12 and 13, at the center of the chip, should all be connected to ground. These pins also serve as a heatsink for the chip. For each pair of transistors, there are a few combinations of pin states that I can set. First, I must set the ENABLE pin to high. If the ENABLE pin is low, nothing else matters. Regardless of the state of INPUT 1 or 2, the motor will remain off. With the ENABLE pin high, I have four combinations I can set the logic pins to. If both pins are high, or both pins are low, the motor will stop. If one pin is high and the other is low, the motor spins. The direction is determined by which pin is set to high, and how you have your motor connected. You can send a PWM signal to the motor logic pins to control speed, however, it's important to send a signal to one pin at a time, otherwise the motor will not spin. With PWM and an H bridge, it's easier than ever to make things move.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Env Vars:** input (6), enable (4), pwm (3), output (3), l293d (1)
> **Definitions:** is an  (2), is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - in (1)

#### [Controlling a DC motor with an H bridge](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=0)** - Adding an H bridge to an [[Arduino]] project mainly requires a lot of extra wires. The H bridge is placed across the valley of the breadboard. I have all of the wires connected to the appropriate pins. Pin 1 on the IC is connected to pin 13 on the Arduino. This is my enable pin for the left side of the IC. Pin 2 on the IC will be connected to pin 6 on the Arduino. Pin 7 on the IC is connected to pin 3. These pins are input one and two and will be used to set the speed and direction the motor is spinning. The motor is connected to pins 3 and 6. The direction I have the motor hooked up doesn't matter, since the motor will be spinning in either direction, depending on the input. Pins 4, 5, 10, and 11 are connected to ground. Pin 8 is connected to the power terminal of the nine-volt battery to provide power to the motor. The ground terminal of the battery is connected to ground. Pin 16 is connected to the Arduino five-volt power supply. This powers the integrated circuit. If you haven't already, open 04 07, Start, which can be found in the Chapter four folder of the Exercise Files. This program is super simple. First, pin 13 is set as Output and given a value of High. This turns the enable pin on,
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=92)** which, in turn, enables the pins on the left side of the integrated circuit. Then, pin 3 and 6 are set to a value of 0, which stops the motor. When I upload this program, I should see no action from the motor. Now, if I change the value being sent to pin 3 to 255 and reupload, the motor spins in full speed in one direction. If I change the value sent to 3 back to 0, and set the value for pin 6 to 255, the motor now spins in full speed in the other direction. I can also send smaller values to the pins, which spins the motor at a slower speed. By adding a few lines of code and another motor to the other side of the H bridge, I can build a robot and control the speed and direction of travel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (4)
> **Tools:** terminal (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - adding (1)

#### [Challenge: Controlling a DC motor with an H bridge and potentiometer](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=3)** - Alright, it's time for your final challenge. In this challenge, I want you to control the speed and direction of a DC motor with a potentiometer. For analog input values 500 to 524, the motor should stop. Values greater than or equal to 525 should spin the motor in one direction. As the value increases, the motor speed should increase. For analog values less than 500, turn the motor in the other direction. As the value decreases, the motor speed should increase. Try not to spend more than 30 minutes on this. When you're ready, be sure to check out my solution video to see how I solved this problem.

> [!info]- Semantic Content
>
> **Speakers:** - alright (1)

#### [Solution: Controlling a DC motor with an H bridge and potentiometer](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=3)** - Did you get your motor spinning as planned? Let's take a quick look at my solution. First, in the setup, I set pin 13 as output then I set pin 13 to high. I have the enable pin on my H-bridge connected to pin 13. Since I don't need to toggle the enable pin while I'm running the program, I've set it to high in the setup so I don't have to worry about it again. First, I initialize an integer called pinRead and give it a value Read from analog pin zero. Then I checked for three conditions. If pinRead is less than 500, I'll execute these four lines of code. First, I'm setting pinRead to a value of 499 minus the current value of pinRead. If the value of pinRead was 499, now the value of pinRead is zero. This is effectively swapping the pinRead value around so that now, I can easily map this value and scale the motor speed along with the pinRead value. Next, I'll map the value of pinRead to my range: 0 to 255. Then, using the analogWrite function, I spin up the motor through pin three. I also set pin six to zero. I have pin three and pin six connected to input one and input two. Next, I check for a value greater than or equal to 500 and less than 525.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=98)** If I see a number between those two values, I'll set both pins to zero, stopping the motor. Anything else will be greater than 525, so I simply use an else statement and map the value to the appropriate number. This time, I'm going to set pin three to zero and pin six to the pinRead value. This will spin the motor in the other direction. Finally, just to slow the program down a little bit, I've added a short delay of 15. Now, when I turn on the [[Arduino]] and start messing with the analog input, I can see the motor spin in both directions. Of course there are many ways that you could have completed this problem, so if your code's not exactly like mine, but your motor is still spinning as expected, congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (1)
> **Code Identifiers:** pinread (10), analogwrite (1)
> **Prerequisites:** setup (2)
> **UI Navigation:** toggle (1)
> **Speakers:** - did (1)


### Next steps

[↑ Back to Table of Contents](#table-of-contents)

#### [Conclusion](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=0)** - There are limitless applications for the [[Arduino]]. With just a few adjustments to the examples you have explored, we could build anything from a robot to a musical instrument. I've introduced many of the ways you can harness the power of pulse width modulation. Exploring various analog inputs can bring new interactivity to your projects. Sensors can automatically turn on lights as the sun goes down or open a door for a pet while keeping wild animals out. Think about a metric in your environment that you want to measure and some action you could take as a result. Then automate that process with the Arduino. Above all, have fun. Arduino is about exploring technology. And at the end of the day, if you close the IDE with more knowledge and experience than when you opened it, you have had a successful day as a maker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Arduino]] (3)
> **Env Vars:** ide (1)
> **Speakers:** - there (1)


## Instructor

- [[Rae Hoyt]]

## Resources

- Exercise files available

## Skills Covered

- Arduino

## Path Context

### In [[Become an Arduino Developer]]
← [[Learning Arduino- Interfacing with Analog Devices]] | **7 of 11** | [[Complete Guide to C Programming Foundations]] →

## Appears In

- [[Become an Arduino Developer]]

## Related Courses

_Courses sharing skills:_

- [[Arduino- Prototyping]] — Arduino
- [[Learning Arduino- Interfacing with Analog Devices]] — Arduino
- [[Learning Arduino- Interfacing with Hardware]] — Arduino
- [[Learning Arduino Foundations]] — Arduino

---

[↑ Back to top](#)