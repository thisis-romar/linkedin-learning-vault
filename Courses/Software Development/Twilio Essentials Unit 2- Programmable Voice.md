---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: twilio-essentials-unit-2-programmable-voice
url: "https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice"
duration_minutes: 36
duration: 36m
level: Beginner
updated: 9/9/2022
learners: 1843
skills:
  - Interactive Voice Response (IVR)
  - Twilio
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEjIIowAW3xmw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661384713359?e=2147483647&amp;v=beta&amp;t=BZ24LrysfkXIsg7DhME71KrJfA7sh_WTOIRoLumCmp0"
linkedin_topic: Software Development
learning_paths:
  - '[[Twilio Programmable Messaging and Voice Professional Certificate]]'
prev_courses:
  - '[[Twilio Essentials Unit 1 Introducing Twilio And Programmable Messaging]]'
next_courses:
  - '[[Twilio Essentials Unit 3- All Together Now]]'
path_nav: '[{"path":"Twilio Programmable Messaging and Voice Professional Certificate","position":2,"total":3,"prev":"Twilio Essentials Unit 1 Introducing Twilio And Programmable Messaging","next":"Twilio Essentials Unit 3- All Together Now"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/interactive-voice-response-ivr
  - skill/twilio
status: not-started
created: 2026-04-21
---

![Twilio Essentials Unit 2: Programmable Voice](https://media.licdn.com/dms/image/v2/C560DAQEjIIowAW3xmw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661384713359?e=2147483647&amp;v=beta&amp;t=BZ24LrysfkXIsg7DhME71KrJfA7sh_WTOIRoLumCmp0)

# Twilio Essentials Unit 2: Programmable Voice

> The telephone has evolved so much in recent decades. This course explores the next phase in that evolution and introduces you with how to build  Programmable Voice applications with Twilio. Learn how to use the API to build an IVR, Interactive Voice Response. Find out how to gather input from users on a phone call using dual-tone modular frequency (DTMF). Generate outbound calls using the CLI in T

> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice) | 36m | Beginner | 2K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Twilio]]

## Resources

- Exercise files available

## Skills Covered

- Interactive Voice Response (IVR)
- Twilio

## Table of Contents

### 1. Programmable Voice

#### Appreciating the phone
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=0)** (soft music)
>
> **[0:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=6)** - Hi, there. I'm Craig and I'm a developer.
>
> **[0:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=8)** Welcome to Twilio Essentials with Programmable Voice.
>
> **[0:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=11)** A quick heads up that this is a course in a series, and I'm going to be assuming that you've obtained some Twilio knowledge from prior content.
>
> **[0:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=18)** Ahoy there!
>
> **[0:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=19)** You'll hear Twilions, or people who work at Twilio, they'll greet you with ahoy, all the time.
>
> **[0:24](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=24)** Do you know why?
>
> **[0:26](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=26)** Ahoy was actually the original way that we used to answer the phone.
>
> **[0:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=29)** Like, you'd pick it up and instead of saying, "Hello," you'd be like, "Ahoy."
>
> **[0:32](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=32)** And the other side, it'd be like, "Ahoy, hoy."
>
> **[0:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=35)** The phone has evolved a ton since those days, and so much has been built on top of that original invention.
>
> **[0:41](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=41)** Like so much so that we often don't even think about it as innovation anymore, but it's really incredible what we've been able to build on top of it.
>
> **[0:49](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=49)** And when I say we, I don't mean we, Twilio.
>
> **[0:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=52)** I mean, we, like team human.
>
> **[0:54](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=54)** Like for instance, we figured out a way to wait in a virtual line.
>
> **[0:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=57)** Somebody came up with that concept, that holding concept, right?
>
> **[1:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=60)** Like we figured out a way to have the phone answer itself and record a message if the person wasn't around.
>
> **[1:05](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=65)** We figured out a way to prompt a caller for information.
>
> **[1:07](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=67)** Press one for sales, that sort of thing, and we route 'em to the right person.
>
> **[1:10](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=70)** That's huge.
>
> **[1:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=71)** What a time-saving, life-changing experience.
>
> **[1:14](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=74)** And we came up with a way to connect callers altogether in a group on a conference call.
>
> **[1:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=78)** That conference call was just an idea, and think about how many that you've been on lately.
>
> **[1:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=83)** So, it's pretty impressive what we can do with a speaker, a microphone, and a little bit of connectivity, isn't it?
>
> **[1:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=89)** So, here's the thing.
>
> **[1:30](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=90)** Any experience that you've ever had on the phone, like anything at all, you can reproduce that with Twilio.
>
> **[1:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=96)** And that's because as a developer, you're provided with the building blocks that you need to create whatever you can dream up.
>
> **[1:43](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=103)** You just snap 'em together.
>
> **[1:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=105)** The programmable voice API is expansive.
>
> **[1:47](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=107)** Want to put someone on hold?
>
> **[1:49](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=109)** Use the Enqueue TwiML.
>
> **[1:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=110)** You can record, play a sound file.
>
> **[1:53](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=113)** You can make it say whatever you want.
>
> **[1:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=115)** You can route and forward calls by using dial.
>
> **[1:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=117)** And you can even dial into a conference.
>
> **[2:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=120)** There is so much you can do with just a few lines of declarative code.
>
> **[2:04](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=124)** And the good news is that the way that you do all this is very similar to what you've already learned.
>
> **[2:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=129)** And you can build it all over the PSTN, the public switched telephone network.
>
> **[2:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=133)** Literally anyone with a phone can use your application.
>
> **[2:16](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=136)** Let's dive in.

> [!info]- Semantic Content
>
> **CLI Commands:** snap (1), make (1)
> **Code Keywords:** public (1), let (1)
> **Env Vars:** api (1), pstn (1)
> **Analogies:** for instance (1), similar to (1)
> **Definitions:** is a  (1)
> **Warnings:** heads up (1)
> **Speakers:** - hi (1)
> **Non-Speech:** (soft music) (1)

#### Receive a call
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=0)** - Text-to-speech has become super impressive lately.
>
> **[0:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=3)** It sounds almost eerily human, doesn't it?
>
> **[0:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=6)** It's come a long way from where it started.
>
> **[0:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=9)** I remember playing with early versions of my computer, and it would trip up on the weirdest words.
>
> **[0:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=13)** I remember once trying to make it say cheeseburger, and it came back as "chess ebeger," but the tech has gotten so much better, and it's had to.
>
> **[0:21](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=21)** There are many of these personal assistance devices everywhere, (whispering) the Alexas or the Google Home devices.
>
> **[0:26](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=26)** I'm whispering 'cause I don't want to trigger yours.
>
> **[0:28](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=28)** The advancements in this arena are incredibly impressive, and we, developers, get to stand on the shoulders of giants and make use of it in our applications.
>
> **[0:38](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=38)** It's time to write the Hello World Application of a programmable voice.
>
> **[0:41](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=41)** Only of course, in our case we'll do ahoy world.
>
> **[0:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=45)** We're going to be using the Say TwiML to do our text to speech.
>
> **[0:48](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=48)** So I'll navigate to those docs.
>
> **[0:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=50)** So here I am on Programmable Voice.
>
> **[0:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=51)** I'm going to collapse this folder, collapse this tutorial folder the reference folder, and here is our TwiML folder.
>
> **[0:58](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=58)** And I'm going to go down here to Say.
>
> **[1:07](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=67)** So you'll see here's the API to build the voice response.
>
> **[1:10](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=70)** And it's got a couple of, we could change the voice that we wanted to, or we could also change the language and you'll see that this is what gets built down here.
>
> **[1:16](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=76)** This is the TwiML that gets generated down here.
>
> **[1:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=79)** So we've got an attribute of voice, and an attribute of language.
>
> **[1:22](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=82)** You know what?
>
> **[1:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=83)** These actually have default.
>
> **[1:24](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=84)** So before we even set it, let's just build one of these and then we'll see what it sounds like.
>
> **[1:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=89)** So I'm going to head back over to my console and I'm going to go to my TwiML bins and I'm going to pin those.
>
> **[1:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=96)** So if I scroll down under explore products here I'm going to find my TwiML bins and I'm going to pin those to the side.
>
> **[1:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=105)** I'll go into my TwiML bins here.
>
> **[1:48](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=108)** I'm going to make a new one and I am going to call this ahoy world.
>
> **[1:54](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=114)** So again, it starts with a Response tag and it's case sensitive and I'm going to close that Response tag.
>
> **[2:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=122)** And we're going to use that Say tag and we'll just say ahoy world.
>
> **[2:12](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=132)** We'll see that it's Valid Voice TwiML and we'll go ahead and create this.
>
> **[2:15](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=135)** And just like we did with messaging, also our phone number has the ability to set what happens when somebody calls in.
>
> **[2:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=143)** So let's do that.
>
> **[2:24](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=144)** So, here's our phone number.
>
> **[2:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=149)** Scroll down here to when a call comes in instead of a Webhook we're going to use a TwiML bin and we will use ahoy world and I will save my number.
>
> **[2:39](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=159)** And now I'm going to dial in to 4 1 5 8 4 9, again, make sure you're doing it right, 4 8 0 4.
>
> **[2:47](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=167)** With a call, it's definitely a little bit weirder.
>
> **[2:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=170)** If somebody picks up and it's not your number.
>
> **[2:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=172)** All right, so let's make that call.
>
> **[2:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=175)** I'm going to put that on speaker.
>
> **[2:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=177)** - [Machine Voice 1] You have a trial account.
>
> **[2:59](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=179)** You can remove this message at any time by upgrading to a full account press any key to execute your code.
>
> **[3:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=186)** (ringing)
>
> **[3:07](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=187)** - [Machine Voice 2] Ahoy world.
>
> **[3:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=189)** - [Craig] Ahoy world indeed. So that's great.
>
> **[3:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=193)** Let's go find a voice.
>
> **[3:14](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=194)** So back here, over in the docs, if we go to this Say docs here, we'll see that there's this Amazon poly of voices that are here, which allows you to get some cutting edge voices from Amazon.
>
> **[3:25](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=205)** It's kind of like a parrot, right?
>
> **[3:27](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=207)** Like Polly, want a cracker, get it?
>
> **[3:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=209)** Poly actually offers some cool neural voices which sound even more real.
>
> **[3:34](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=214)** And they use machine learning to do the breathing.
>
> **[3:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=216)** So let's see.
>
> **[3:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=217)** Let's see if we scroll down here, we get some poly.
>
> **[3:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=225)** See this dash neural.
>
> **[3:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=226)** So we'll go ahead and we'll grab this poly Matthew neural.
>
> **[3:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=230)** And I'm going to pop back.
>
> **[3:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=231)** Put that in my TwiML bin.
>
> **[3:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=237)** My ahoy world here.
>
> **[4:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=240)** So I'm just going to set the attribute of voice equal to that one that I wanted there.
>
> **[4:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=246)** And in order to hear how good it is, let's find some text.
>
> **[4:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=249)** Oh, let's do the cheeseburger test.
>
> **[4:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=251)** Let's see if there's a, is there a cheeseburger Wikipedia page?
>
> **[4:14](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=254)** Cheeseburger.
>
> **[4:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=257)** Oh my God there is.
>
> **[4:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=258)** There's a cheeseburger Wikipedia page.
>
> **[4:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=260)** Wonder how contentious this page is.
>
> **[4:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=263)** So I'll just grab some copy here.
>
> **[4:26](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=266)** We'll see how the cheeseburger test if that gets passed or not.
>
> **[4:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=269)** So we'll go, and we'll go back to the TwiML bin.
>
> **[4:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=271)** And I'm just going to put this after here so that we can hear how nice it sounds.
>
> **[4:38](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=278)** It's a lot of areas to breathe there saying saying that, thank you, Wikipedia moderators and my number still set up.
>
> **[4:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=286)** So I'm going to go ahead.
>
> **[4:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=286)** I'm going to call that, put it on speaker.
>
> **[4:49](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=289)** And I want you to listen to...
>
> **[4:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=291)** - [Machine Voice 1] Remove this message at any-
>
> **[4:53](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=293)** - [Craig] Listen to how good the breathing is.
>
> **[4:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=295)** - [Machine Voice 1] Press any key to execute your code.
>
> **[4:59](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=299)** (ringing)
>
> **[5:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=300)** - [Machine "Matthew" Voice] Ahoy world, cheeseburgers can include variations in structure, ingredients and composition.
>
> **[5:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=306)** As with other hamburgers, a cheeseburger may include toppings such as lettuce, tomato onion, pickles, bacon, mayonnaise ketchup and mustard.
>
> **[5:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=317)** - [Craig] Sorry if that made you hungry.
>
> **[5:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=318)** It's impressive right?
>
> **[5:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=320)** Now, of course, this speech to text is wonderful for creating dynamic experiences, but there are some cases where you might want a really highly produced message and don't worry, we got you.
>
> **[5:32](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=332)** You can play an audio file with the Play verb so let's use it.
>
> **[5:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=335)** So let's go ahead.
>
> **[5:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=337)** We can use both here.
>
> **[5:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=337)** So we'll use Matthew to announce that, and now an important message.
>
> **[5:47](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=347)** And so see how we can use two in a row.
>
> **[5:48](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=348)** So we can use Say, when that's done, it will do this.
>
> **[5:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=350)** It'll kick off this Play.
>
> **[5:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=352)** And I have a really professional sounding recording here.
>
> **[5:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=355)** We have [twil.io](https://twil.io), professional recording example.
>
> **[6:01](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=361)** It's great.
>
> **[6:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=362)** It will show you the different levels that you can actually create using this for your things.
>
> **[6:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=369)** And let's, let's save this.
>
> **[6:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=371)** And then I'm going to give that, a call, and I'm going to press 1 and it'll do the Say and then it will do the Play.
>
> **[6:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=379)** - [Machine Voice 1] You have a trial account.
>
> **[6:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=380)** You can remove this message at any time by upgrading to a full account, press any key to execute your code.
>
> **[6:27](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=387)** (ringing)
>
> **[6:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=389)** - [Machine "Matthew" Voice] And now an important message- (record scratch)
>
> **[6:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=391)** - Hi there I'm Twilio's Craig Dennis and I am sorry to interrupt, but right here what we were trying to do, was we would've played some drums and it would've sounded something like (impersonating sound of drums) And you would've been like, "That sounds a lot like that Rick Astley... wait a second, did they just Rickroll me?"
>
> **[6:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=410)** And we did, or at least we tried to, but legally we couldn't.
>
> **[6:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=415)** I want you to get back to what you were watching and just know and trust us that we will never ever let you down.
>
> **[7:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=423)** Never going to give that joke up.
>
> **[7:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=426)** (laughs) Sorry about that Rickroll.
>
> **[7:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=428)** Now, if you don't know what that is it's when someone says, "Hey, check out this important thing."
>
> **[7:12](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=432)** and they send you over a link and then you click on it.
>
> **[7:14](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=434)** And that Rick Astley video pops up, you know, that one from the 90s where he's like, "Never going to give you up."
>
> **[7:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=439)** It's like the whoopy cushion of audio applications but now you can do it programmatically too.
>
> **[7:25](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=445)** But more importantly, you can now handle incoming voice calls and respond with text to speech or audio recordings.
>
> **[7:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=451)** These are super handy for informational based applications like for store hours, addresses, and many other sorts of updates, but chances are you'll probably want your caller to interact with your application and let's deal with that right after a quick break.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), this. (3), super (2), default. (1), break. (1)
> **Speakers:** - [machine (7), - [craig] (3), - text (1), - hi (1)
> **CLI Commands:** make (5), find (3)
> **UI Navigation:** scroll down (3), go to (2), navigate to (1), click on (1)
> **Analogies:** just like (1), kind of like (1), such as (1), it's like (1)
> **URLs:** [twil.io](https://twil.io) (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)

#### Gather input
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=2)** - So we have output working on our phone call.
>
> **[0:04](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=4)** We can create the experience using either text to speech with the say twiml verb, or we can use an audio recording with the play verb.
>
> **[0:12](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=12)** Now it's time to take input from the user on the call.
>
> **[0:15](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=15)** Now the most common way is to allow the users to press the buttons on their phones.
>
> **[0:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=19)** This will send what is known as DTMF or dual tone modular frequency.
>
> **[0:24](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=24)** You know, the beep boop boop when you press the numbers.
>
> **[0:27](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=27)** You can capture this input by using the gather verb.
>
> **[0:30](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=30)** And when your caller submits their digits the information will be passed along to a URL of your choosing.
>
> **[0:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=36)** This is using that web hook pattern from before.
>
> **[0:39](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=39)** When your call receives DTMF, Twilio passes control to your app via a URL that you specify in that request your application will contain the digits that were pressed and your expected return follow up twiml.
>
> **[0:49](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=49)** Let's dive in.
>
> **[0:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=51)** Okay. Why don't we just extend our existing TwiML bin a little bit.
>
> **[0:56](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=56)** Let's see.
>
> **[0:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=57)** Why don't we let the caller tell us about how they feeled about being Rick-rolled?
>
> **[1:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=63)** So what I'll do is I'll start a new gather tag here.
>
> **[1:07](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=67)** So I'll come in here and I'll start a new gather tag.
>
> **[1:12](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=72)** You can kind of think of this like a HTML form element.
>
> **[1:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=77)** So I'm going to leave the action blank right now.
>
> **[1:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=80)** This is, you give it a URL here of where it wants to submit to.
>
> **[1:25](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=85)** I'm going to put the song inside of the gather tag.
>
> **[1:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=89)** So then I'm going to close the gather tag.
>
> **[1:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=91)** So see how it's nested there.
>
> **[1:32](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=92)** So it's nested just like a form element.
>
> **[1:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=95)** So let's see.
>
> **[1:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=96)** We'll do a say.
>
> **[1:39](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=99)** We'll use the same Matthew.
>
> **[1:40](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=100)** So I'm going to yoink this and we'll say, press one to approve of this joke, press two to talk to a manager.
>
> **[1:54](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=114)** So therefore, anything inside this gather as soon as they press a button it's going to submit the form.
>
> **[2:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=120)** And in fact, we can tell it how many digits we want.
>
> **[2:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=122)** There's only going to be one there.
>
> **[2:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=123)** So we're going to say numb digits equals one.
>
> **[2:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=126)** You might want to ask them, enter a pin code a four digit pin code.
>
> **[2:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=129)** So you could say four digits, but we only want one cause they're going to press either one or two.
>
> **[2:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=133)** And as soon as they press it, it's going to go off and it's going to hit this action right here whatever we put in this URL for this action.
>
> **[2:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=140)** And then I also wanted to say if they don't press anything, it'll go through together as if it didn't get submitted.
>
> **[2:28](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=148)** So we'll say you listened to the whole song.
>
> **[2:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=153)** Wow. A way to never give up.
>
> **[2:41](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=161)** So we want to handle what happens when someone submits a digit and we can handle it by providing any web server that can accept an HTTP post request.
>
> **[2:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=172)** We could spend one up or we could just use the Twilio functions.
>
> **[2:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=175)** Now I typically lean on functions because I don't really want concern myself with finding a hosting provider and worrying about all scaling and all that other jazz.
>
> **[3:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=183)** If I had an existing web application I might want to plug into it, but I don't in this case.
>
> **[3:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=188)** So let's lean on functions.
>
> **[3:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=189)** I'm going to open up my existing service.
>
> **[3:12](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=192)** Remember we built one of these in the, previously.
>
> **[3:16](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=196)** Exploration, exactly what we're doing here.
>
> **[3:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=200)** It doesn't have to live in here.
>
> **[3:21](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=201)** I can make a new service and do whatever but we already have this one.
>
> **[3:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=203)** Let's go ahead and let's go into this service and we'll just make a new function that will run the code for us.
>
> **[3:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=211)** So we'll add function and I'm going to call this handle feedback, handle the Rick roll feedback.
>
> **[3:41](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=221)** Now, in this case, it actually ended up building a Twilio voice responses, which is what we want.
>
> **[3:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=226)** So I'm going to say change that to a const cause we're not going to change it.
>
> **[3:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=231)** And I'm going to get rid of everything else except for what gets returned here cause we're going to want to return twiml from this based on what they say.
>
> **[4:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=240)** Okay. So when the gather submits to this URL, we're going to push this into the gather, when it submits, the event is going to have a new property on it.
>
> **[4:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=248)** It's going to be posted with a URL-encoded field called digits.
>
> **[4:15](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=255)** So let's let's log that out.
>
> **[4:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=257)** We can log that out real quick.
>
> **[4:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=258)** So we can say console.log, user pressed and then we can do event.digits and it will be a string and it will be whatever they entered there on the gather.
>
> **[4:30](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=270)** So we want to say if the event.digits is equal to one, this is when they said that they liked it, and so we'll do a twiml.say, that's great.
>
> **[4:43](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=283)** Glad we didn't let you down.
>
> **[4:49](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=289)** We're going to do that.
>
> **[4:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=290)** All right. And then otherwise, if they entered two, they were not happy.
>
> **[5:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=300)** They're reporting they want to talk to the manager.
>
> **[5:04](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=304)** So this is a case where we could look up.
>
> **[5:05](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=305)** Maybe we could look up the user's phone number if we had a database here or an API we could from the phone number, but we could get it.
>
> **[5:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=311)** Let's leave a to-do here.
>
> **[5:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=313)** We could say, look up user from phone number.
>
> **[5:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=317)** And that phone number is available on, if I was catching here, so it would post, I could get this from event.from I'd be able to see who called. Right?
>
> **[5:28](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=328)** So the phone number is stored there and event.from, but we don't have that.
>
> **[5:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=335)** So we'll just go ahead.
>
> **[5:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=335)** We'll hard code a name.
>
> **[5:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=336)** So we'll say that Karen is the one who reported and let's see, twiml.say and we'll say thank you for reporting this joke.
>
> **[5:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=351)** And then we can use whatever that name is that came across and we'll say connecting you with the supervisor.
>
> **[6:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=363)** Okay. So we could make this actually call the supervisor.
>
> **[6:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=368)** You could do that with this twiml, with voice twiml.
>
> **[6:10](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=370)** So we could say twiml.dial and I could put in the supervisor's number here, but supervisors change often.
>
> **[6:16](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=376)** So maybe we want to store that in a variable and a cool way to do this is to say context.supervisor number and this context remember this is coming from the environment variable.
>
> **[6:32](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=392)** So I'm going to go ahead.
>
> **[6:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=393)** I'm going to save this just for now so we can come back to it.
>
> **[6:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=396)** And I'm going to come here into the environment variables and I could add supervisor number and I could do, you know plus 1, 4, 1, 5, blah, blah, blah.
>
> **[6:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=405)** Right? And then I could do add and now the supervisor number would be available in the code to use, which is cool. Right?
>
> **[6:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=412)** So that way I can just go and change the supervisor number in my environment variables instead of hard coding it.
>
> **[6:59](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=419)** But I'm expecting a lot of people are not going to be very happy about this.
>
> **[7:04](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=424)** And so there's probably going to need to be a queue.
>
> **[7:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=426)** So why don't we do that instead?
>
> **[7:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=428)** Let's just go ahead.
>
> **[7:10](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=430)** We'll put them right into a manager's queue.
>
> **[7:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=433)** So anybody who's available to take the call can call in and call into this manager's queue.
>
> **[7:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=440)** So what we'll do is we'll stick them in a queue and then otherwise we'll just tell 'em that we don't know why they pressed what they did.
>
> **[7:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=449)** So we could say you pressed event.digits,
>
> **[7:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=457)** but why? Why'd you do that?
>
> **[7:41](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=461)** Okay, cool.
>
> **[7:43](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=463)** And I always press save accidentally.
>
> **[7:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=466)** Okay. So we're going to say that.
>
> **[7:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=470)** Okay. And I am going to deploy it and we'll walk it again.
>
> **[7:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=472)** So what's going to happen is we're going to send a post request here to this account and we're going to return back a twiml for it to speak cause it's going to be a, it's a voice application.
>
> **[8:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=486)** We're going to log out what digits got pressed.
>
> **[8:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=488)** We can enable these live logs here and we are going to press if somebody presses one.
>
> **[8:15](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=495)** So the digits is where it's been posted that there's a value that's in there.
>
> **[8:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=499)** And if you know you're working in a different framework, web framework that would be stored in the fields typically, right or request.params, right.
>
> **[8:28](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=508)** That would be stored in the fields, the URL fields.
>
> **[8:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=511)** So event.digits, if it's equal to one we're going to say, thanks for not letting us down.
>
> **[8:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=515)** If it's equal to two, we are going to, we could go get the phone number and use this event.from cause it's also in there what's been posted, and then we'll use their name and then we'll put them in a queue.
>
> **[8:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=526)** And otherwise we'll say, why didn't you do that?
>
> **[8:48](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=528)** And we're going to return that twiml no matter what with that call back and there's no errors.
>
> **[8:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=531)** We have no errors that we can see possible here.
>
> **[8:54](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=534)** So that's been saved.
>
> **[8:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=537)** I can come here, I'm going to do this copy URL.
>
> **[8:59](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=539)** I'm going to flip back to my twiml and I'm going to paste that there.
>
> **[9:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=542)** And you'll see that it's this exploration.
>
> **[9:04](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=544)** It's got the [twil.io](https://twil.io) handle feedback, cause it's live it's serverless and let's do it.
>
> **[9:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=549)** - [Automated Voice] You have a trial account.
>
> **[9:10](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=550)** You can remove this message at any time by upgrading to a full account, press any key to execute your code.
>
> **[9:16](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=556)** (phone button pressed) (phone ringing)
>
> **[9:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=558)** - [Instructor] So now notice.
>
> **[9:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=559)** - [Automated Voice] Important message, press one to approve of this joke.
>
> **[9:22](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=562)** (instructor singing)
>
> **[9:26](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=566)** - [Female Automated Voice] Thank you for reporting this joke Karen, connecting you with a supervisor
>
> **[9:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=571)** - [Instructor] And you'll see that it says user pressed two, right from here, which I did.
>
> **[9:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=575)** And there's our wait music by default.
>
> **[9:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=576)** Now the manager could call in and it would immediately connect us to this.
>
> **[9:41](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=581)** So we could set up a number for managers to call in and then we'd get off this on hold music.
>
> **[9:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=585)** Pretty cool right?
>
> **[9:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=586)** And that queue didn't even have to exist.
>
> **[9:48](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=588)** I just typed the word managers and it made a brand new queue and people will queue in there and we could have another phone number that called in and they would automatically get the next person in the queue and be connected with them to talk about how they're offended by the Rick roll joke.
>
> **[10:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=602)** More on cues in the notes.
>
> **[10:04](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=604)** Pretty awesome right?
>
> **[10:05](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=605)** We just created an IVR, an interactive voice response, and our options were able to trigger any code that we wanted over a URL, super powerful concept, right?
>
> **[10:16](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=616)** Twilio passes control to whatever web application via web hook.
>
> **[10:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=619)** Our example is currently only one menu level deep, however, we could return another menu in our action handler, and then that could point to another action and that had a menu and another menu.
>
> **[10:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=631)** Yo dog, I heard you like menus.
>
> **[10:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=633)** So I put a menu in your menu.
>
> **[10:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=635)** Fair warning though large menus can get a little squirrly over time.
>
> **[10:40](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=640)** Also the bigger they get, the harder they are to visualize what's actually happening.
>
> **[10:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=645)** Editing them can get increasingly challenging, but have no fear.
>
> **[10:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=650)** There's a tool for this problem.
>
> **[10:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=652)** We talked a bit about it previously and Twilio's studio is a great tool to handle this issue.
>
> **[10:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=657)** Not only does it make it easier to visualize, it also makes it easier to add and to maintain existing flows.
>
> **[11:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=663)** These widgets are very rich.
>
> **[11:05](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=665)** They represent the twiml and all of their configurations.
>
> **[11:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=668)** You can pass code off to functions or any URL whenever you need to.
>
> **[11:12](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=672)** It's powerful, scalable, and you can import and export the entire flow in JSON format, which means you can keep it alongside your code in version control.
>
> **[11:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=680)** I can't recommend it enough, especially for IVRs.
>
> **[11:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=683)** Check the notes for more info.
>
> **[11:25](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=685)** What we've seen with programmable voice so far has all been inbound through web hooks.
>
> **[11:30](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=690)** Well, you can also create an outbound call using the API just like how we sent that outbound message.
>
> **[11:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=696)** Let's check that out after a quick break.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (2), this. (2), case. (1), case, (1)
> **Env Vars:** url (10), dtmf (2), api (2), html (1), http (1)
> **Speakers:** - [automated (2), - [instructor] (2), - so (1), - [female (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** just like (2)
> **URLs:** [twil.io](https://twil.io) (1)
> **Warnings:** warning (1)

#### Create an outbound call
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=0)** - We've been handling calls as they come in but now let's take a look at kicking one off ourselves.
>
> **[0:05](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=5)** The call API is very similar to the message API, so it should feel pretty familiar.
>
> **[0:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=11)** So on [twilio.com/docs](https://twilio.com/docs), I'm going to click on voice.
>
> **[0:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=18)** And in here, I'm going to look for the API reference.
>
> **[0:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=20)** I'm going to collapse these folders.
>
> **[0:22](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=22)** Here we go.
>
> **[0:22](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=22)** And I was looking for the call resource.
>
> **[0:27](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=27)** And over here, if you look at the library, you'll notice that it's very similar.
>
> **[0:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=31)** We got calls and then we got create, and we have a to and a from and a TwiML.
>
> **[0:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=36)** TwiML here is what you'd like to have happen when the two numbers are connected.
>
> **[0:40](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=40)** So in this case here, it's going to do response say Ahoy there.
>
> **[0:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=46)** Now also on call creation, instead of passing TwiML, you can also pass a URL.
>
> **[0:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=51)** So if you open this up, you can see that you can pass a URL.
>
> **[0:54](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=54)** And as long as the URL returns a valid TwiML, you will be able to use that.
>
> **[1:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=60)** But we have a URL just like that.
>
> **[1:01](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=61)** Our TwiML bin exposes the URL for situations just like this.
>
> **[1:05](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=65)** So let's go back to our TwiML bin, I'll show you that.
>
> **[1:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=68)** So here you'll see that the TwiML bin, the ahoy world TwiML bin that we've been playing with, this Rick roll one, if we go ahead and we click this copy, I'm going to copy that.
>
> **[1:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=78)** Now I've got that in my clipboard.
>
> **[1:21](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=81)** And if we go back and we look at the notes, I could definitely do this in note, or C sharp or Python but I don't really have one of those servers and we're just kind of exploring.
>
> **[1:28](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=88)** So I'm going to go ahead, I'm going to do that in the CLI.
>
> **[1:30](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=90)** And you'll see, very similar, calls, create, URL, to and from.
>
> **[1:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=95)** So let's do it.
>
> **[1:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=96)** Let's do that exactly.
>
> **[1:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=97)** So we're going to go back to my command line here.
>
> **[1:41](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=101)** We're going to say twilio API core calls create and we will do from our number, which was... You can find that in your console here.
>
> **[2:05](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=125)** I'm going to copy my number from that number, my 415 number, to my number, which is plus +1 503-836-8731.
>
> **[2:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=143)** Please, don't call late.
>
> **[2:26](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=146)** And in my clipboard I've got that URL for the Twilio number.
>
> **[2:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=151)** No, I don't.
>
> **[2:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=153)** I copy and pasted that.
>
> **[2:34](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=154)** So I'm going to go back to my TwiML bin.
>
> **[2:41](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=161)** And again, I'm going to copy that.
>
> **[2:44](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=164)** That's the thing with these clipboards.
>
> **[2:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=165)** You keep on throwing stuff in there.
>
> **[2:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=166)** So I copy the URL to the clipboard, and I'm going to paste that here.
>
> **[2:49](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=169)** And now we see that it has this unique number and I'm going to go ahead and make that call and it's ringing.
>
> **[3:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=180)** - [Phone] Press any key to execute your code.
>
> **[3:01](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=181)** - [Instructor] And you'll see that it goes.
>
> **[3:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=183)** - [Phone] And now an important message, press one, to approve of this joke, press two, to talk to a manager.
>
> **[3:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=189)** - [Instructor] And we've got the Rick Roll happening again.
>
> **[3:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=191)** There is our Rick Rollin' IVR.
>
> **[3:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=193)** That's pretty awesome.
>
> **[3:14](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=194)** And you can also use that to get the call log.
>
> **[3:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=197)** So if we wanted to go and we wanted to see we could say Twilio API core calls list
>
> **[3:28](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=208)** and we could see, specifically, we could use the help again and we could see what we could push in.
>
> **[3:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=213)** So we could say, see only show calls made to this number.
>
> **[3:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=216)** And we could do only calls made from this number, which is what we just, we just did a from.
>
> **[3:41](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=221)** So let me get that number from the clipboard here.
>
> **[3:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=226)** And we could do, we could say twilio API core calls list.
>
> **[3:53](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=233)** This would be all of them but we could say only the ones that were made from our number, and we should see the call that just happened to me.
>
> **[4:01](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=241)** There we go.
>
> **[4:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=242)** So as a developer, I'm pretty sure you're probably wondering now, wait a second.
>
> **[4:07](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=247)** What happens if there's an error?
>
> **[4:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=249)** So let's do that.
>
> **[4:10](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=250)** Let's create a call.
>
> **[4:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=251)** So I'm using the up arrow here.
>
> **[4:12](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=252)** Let's create a call and instead of using a URL, let's just give it some bad TwiML.
>
> **[4:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=258)** So instead of passing a URL here, we'll put in some TwiML that is invalid.
>
> **[4:24](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=264)** This is really bad TwiML.
>
> **[4:26](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=266)** And I'll go ahead and I'll try to create that and you'll see the call got created and the status is that it's got cued.
>
> **[4:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=273)** And I'm going to go ahead and answer my call.
>
> **[4:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=276)** - [Phone] You have a trial account.
>
> **[4:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=277)** You can remove this message at any time by upgrading to a full account, press any key to execute your code.
>
> **[4:44](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=284)** We're sorry.
>
> **[4:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=285)** An application error has occurred.
>
> **[4:47](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=287)** Goodbye.
>
> **[4:48](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=288)** - [Instructor] Oh no, so an application error occurred.
>
> **[4:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=290)** So what happens?
>
> **[4:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=292)** What can we do now to take a look at that?
>
> **[4:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=295)** And this type of error could happen at time.
>
> **[4:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=297)** Maybe there's an error in your code that generates the TwiML or like maybe you write bad TwiML and that call will have an error in it.
>
> **[5:04](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=304)** So if we head over to the console, actually, we'll see that there's this little red dot here.
>
> **[5:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=309)** It shows that we've got a new problem.
>
> **[5:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=311)** So if I go under monitor and then I go under error logs, you'll see that I have this document parse failure.
>
> **[5:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=317)** And you can see at what times they happened.
>
> **[5:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=320)** So I'm going to come in here.
>
> **[5:24](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=324)** And you can see what the request was and here's the body.
>
> **[5:27](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=327)** It was really bad TwiML, indeed.
>
> **[5:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=329)** And it will tell you what's going wrong there.
>
> **[5:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=333)** Now, if you wanted to get ahold of these programmatically, you could come in here under those web hooks and alerts and you could put in your web hook and this will get the information posted to you.
>
> **[5:42](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=342)** And we'll show you what the payload will look like.
>
> **[5:44](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=344)** This is the payload that will come across.
>
> **[5:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=346)** So in addition, there's also a debugger from the awesome Twilio CLI.
>
> **[5:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=351)** We've got this debugger logs list function.
>
> **[5:54](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=354)** And again, I autocompleted with tab there.
>
> **[5:56](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=356)** And if I just press enter, I can see the most recent errors that happen.
>
> **[5:59](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=359)** And here you see this is the error that we just got, error on line one of document content is not allowed in prologue which is the error that that generated by having bad TwiML.
>
> **[6:07](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=367)** Check the notes for more information on this.
>
> **[6:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=369)** Now, again, as a good developer, this may make you start to wonder about how best to keep track of the status of the calls that you create.
>
> **[6:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=378)** Now, remember, this just said queued.
>
> **[6:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=380)** It was fine.
>
> **[6:21](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=381)** It looked like a went, but there was an error.
>
> **[6:24](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=384)** And so you might want to know that and you don't want to actually just keep on hitting the same call over and over again and checking the status of it.
>
> **[6:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=391)** You actually want to use a web hook.
>
> **[6:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=393)** So instead of you calling the API, let the API call you.
>
> **[6:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=397)** So let's fix that TwiML first.
>
> **[6:40](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=400)** And we will, instead of returning some bad TwiML, we'll make a good one.
>
> **[6:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=405)** We'll do some response and we'll do a say hi there.
>
> **[6:53](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=413)** Well, no, not a hi there.
>
> **[6:54](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=414)** We should definitely say ahoy there.
>
> **[6:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=417)** Ahoy there, friend.
>
> **[7:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=420)** And we'll close the say off and we've got the response there.
>
> **[7:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=423)** So when you create a call, and this actually works too with messages, there's a feature called a status callback.
>
> **[7:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=429)** Now the status callback takes a URL, so it's a web hook, so we'll post to that, and we can make one real quick.
>
> **[7:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=437)** I think we probably should.
>
> **[7:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=439)** Let's do that real quick.
>
> **[7:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=440)** So we're going to pop over and we'll go into our functions here that we have going and I'm going to go ahead and add a new function and we'll just call this status displayer.
>
> **[7:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=451)** Now, obviously you would probably want to make something trigger in your application if something went wrong or if it was completed, you might want to track that somebody got the call and it got successfully delivered.
>
> **[7:42](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=462)** You might want to track that on your side so you could get posts to this thing.
>
> **[7:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=466)** I'm just going to delete all of this stuff that comes in here.
>
> **[7:49](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=469)** And instead of returning TwiML, we don't need to return anything.
>
> **[7:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=472)** We're just going to kind of use this to log out some stuff.
>
> **[7:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=475)** So we'll say console.log and we will say call and we'll do events.callSid.
>
> **[8:05](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=485)** Status is event.callstatus.
>
> **[8:11](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=491)** And we will close that off.
>
> **[8:15](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=495)** There we go.
>
> **[8:16](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=496)** So this is called status displayer.
>
> **[8:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=499)** So I'll click save.
>
> **[8:22](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=502)** And I will deploy that.
>
> **[8:24](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=504)** So it's going to post every time the status changes and by default, the call status handler will only post when we complete the call, but we can change that.
>
> **[8:34](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=514)** We can actually specify multiple things that we're looking for.
>
> **[8:38](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=518)** First, we'll get ahold of this URL.
>
> **[8:40](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=520)** So I'm going to copy this URL.
>
> **[8:42](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=522)** And we will paste that in the status callback.
>
> **[8:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=525)** And then there's this status callback event.
>
> **[8:48](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=528)** And I want to know when it's ringing, I want to know when it's answered.
>
> **[8:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=532)** So I'm just going to do a little copy and paste here 'cause we can paste this a couple times.
>
> **[8:58](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=538)** We want to know answered and completing.
>
> **[9:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=540)** So instead of ringing, when it's answered, and one more, when it's completed, we will push through here.
>
> **[9:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=549)** You pass what the events are that you are looking to track.
>
> **[9:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=553)** I'll come over here.
>
> **[9:14](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=554)** I'm going to clear this.
>
> **[9:15](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=555)** Enable our live logs.
>
> **[9:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=557)** Let's go ahead, I'm going to kick this call off to my phone.
>
> **[9:20](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=560)** Just kidding, I'm not.
>
> **[9:24](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=564)** Event not found, that looks weird.
>
> **[9:27](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=567)** Status callback equals answered equals completed.
>
> **[9:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=571)** TwiML equals response.
>
> **[9:32](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=572)** Oh, I've got it right in the middle.
>
> **[9:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=575)** Look at that.
>
> **[9:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=577)** That's very strange.
>
> **[9:40](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=580)** So we'll say ahoy there, friend.
>
> **[9:42](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=582)** Oh, I must have put an exclamation point.
>
> **[9:44](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=584)** It doesn't like that, the command line doesn't like exclamation points.
>
> **[9:48](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=588)** So I ended up executing some bizarre code.
>
> **[9:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=591)** Okay, cool.
>
> **[9:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=591)** So that's a good thing to know.
>
> **[9:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=592)** Good thing I showed you that.
>
> **[9:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=595)** So we've got the status displayer there.
>
> **[9:56](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=596)** We've got the ringing, the answered, and the completed.
>
> **[9:59](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=599)** And now when I hit this, it's going to go and it's going to create the call.
>
> **[10:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=602)** And if I come over here, my phone's ringing.
>
> **[10:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=608)** I'm going to go ahead and click answer.
>
> **[10:14](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=614)** - [Phone] By upgrading to a full account.
>
> **[10:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=617)** Execute your code.
>
> **[10:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=619)** - [Instructor] And you'll see that I got the status is ringing, the status is in progress, and the status is completed, which is really nice if I were needing to track exactly what happened with each one of the calls that I got created.
>
> **[10:30](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=630)** I could reassociate this in the database someplace.
>
> **[10:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=633)** And one more thing I wanted to just call out is that you can update a call that is in progress.
>
> **[10:38](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=638)** So if you look at this dropdown here, you can say update a call in progress with TwiML.
>
> **[10:42](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=642)** So a call could be happening, you just go ahead and you get a hold of the Sid and then you change the TwiML.
>
> **[10:47](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=647)** And the experience on the phone will automatically get updated.
>
> **[10:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=651)** So this is handy if there's some processing that's happening outside of your call, you're doing something on your other end but you want to update the caller with something.
>
> **[10:58](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=658)** This is a nice way to interject information into a call.
>
> **[11:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=663)** More on modifying calls and progress in the notes.
>
> **[11:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=668)** Now you know how to use the API to call people.
>
> **[11:10](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=670)** Now this is super handy for notifications.
>
> **[11:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=673)** Think about a school.
>
> **[11:14](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=674)** You could this to notify about closures or maybe a notification that your child was absent.
>
> **[11:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=678)** And just a quick reminder that the TwiML that you return when the call begins, it can be anything.
>
> **[11:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=683)** We've seen very innovative solutions that will try to call a series of numbers, and only when a person is detected does it connect to a waiting agent.
>
> **[11:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=691)** For more information on answering machine detection or AMD, check the teacher's notes.
>
> **[11:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=696)** There's a configurable limit to the amount of calls that you can make per second.
>
> **[11:39](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=699)** That's called CPS and Twilio will queue up your calls so they go out one per second by default.
>
> **[11:45](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=705)** Again, check the notes for more on CPS, and sorry for all the acronyms, especially if they're new to you.
>
> **[11:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=710)** Don't worry, they'll all stick soon.
>
> **[11:52](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=712)** In fact, let's do a little review of those acronyms and all the other skills that you just picked up with programmable voice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), pass (3), this. (3), from. (2), function (2)
> **Env Vars:** url (13), api (9), cli (2), cps (2), ivr (1)
> **Speakers:** - [phone] (4), - [instructor] (4), - we (1)
> **CLI Commands:** make (6), python (1), find (1)
> **Cross-References:** go back to (3)
> **Analogies:** just like (2), similar to (1)
> **Tools:** command line (2)
> **UI Navigation:** click on (1), dropdown (1)

#### Review and practice
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=0)** - Awesome job diving into Programmable Voice.
>
> **[0:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=2)** First, we learned how to respond to incoming calls using the <Say> TwiML verb.
>
> **[0:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=6)** Text to speech has improved a ton and we can even use the most cutting edge technology to make the voices of our applications sound nearly human in many languages.
>
> **[0:15](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=15)** And for when those voices don't quite meet the mark, we can always fall back on the TwiML verb <Play> which allows us to play any sound file we want.
>
> **[0:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=23)** (he beatboxes) ♪ Bum, bum, bum, bum, bum ♪
>
> **[0:26](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=26)** - We then collected information from callers by using the <Gather> TwiML verb.
>
> **[0:30](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=30)** Which allowed users to press numbers on their keypads and would then submit to a URL that could handle their request.
>
> **[0:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=36)** The response from the URL was the appropriate TwiML to keep the call moving, much like a web form submission.
>
> **[0:42](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=42)** We didn't cover it directly, but you can also allow the caller to respond with their voice.
>
> **[0:47](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=47)** Like a, "Press one" or, "Say support to connect with an agent."
>
> **[0:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=50)** Check the notes for more information on that.
>
> **[0:53](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=53)** And if you're looking to do more real-time work with voice, make sure to check out Media Streams.
>
> **[0:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=57)** This gives you direct access to the audio from the phone in real time and even lets you pipe audio back in.
>
> **[1:04](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=64)** We explored the API, and used the Call resource to create new outbound calls.
>
> **[1:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=68)** When creating a call, you choose whether to write TwiML directly, or pass it a URL that responds with the appropriate TwiML.
>
> **[1:15](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=75)** And you can do all of this with anyone who has a telephone.
>
> **[1:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=78)** It works all over the PSTN, or public switched telephone network.
>
> **[1:22](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=82)** We sure did run across a lot of acronyms along the way.
>
> **[1:25](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=85)** When the user presses a button on their phone and it makes that beep-oop noise, that's DTMF or Dual-tone multi-frequency.
>
> **[1:32](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=92)** Typically they're pressing those buttons because they're responding to prompts like, "Press one to chat with an agent."
>
> **[1:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=97)** These applications are called IVRs or Interactive Voice Response.
>
> **[1:42](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=102)** Most likely you'll be sending out a lot of calls and there's a default throughput of one CPS that's Call Per Second.
>
> **[1:49](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=109)** Check the notes for how to change this value.
>
> **[1:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=111)** It's possible to detect when a human answers the phone instead of an answering machine.
>
> **[1:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=115)** That's AMD or Answering Machine Detection.
>
> **[1:59](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=119)** And while out of the scope of this course, SIP stands for Session Initiation Protocol, and it allows voice calls to happen over the internet, instead of the PSTN.
>
> **[2:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=128)** You might have heard of this as VoIP or Voice over the Internet Protocol.
>
> **[2:12](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=132)** SIP is the protocol that kicks things off.
>
> **[2:15](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=135)** Twilio offers rich solutions like SIP domains and SIP trunking in this space with all the programmability available.
>
> **[2:21](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=141)** Please check the notes for more information.
>
> **[2:22](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=142)** Another thing out of the scope of this course, but I'd love for you to know about it, is that there are voice SDKs.
>
> **[2:28](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=148)** As we talked about, it's pretty amazing all that you can do with just a microphone and a speaker.
>
> **[2:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=153)** And guess where else you have those?
>
> **[2:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=155)** That's right.
>
> **[2:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=156)** Your browser.
>
> **[2:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=157)** The voice SDK allows you to quickly build web applications that embed a phone directly into your user interfaces.
>
> **[2:44](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=164)** Using the SDK allows you to have a fully functional browser based phone that can do all the programmable tricks that you just learned.
>
> **[2:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=171)** The SDK is also available for iOS and Android.
>
> **[2:54](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=174)** So you can build a phone wherever you need one.
>
> **[2:56](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=176)** Check the notes for more on Voice SDK.
>
> **[2:59](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=179)** I've put together some ideas on how to practice your new found voice skills in the notes.
>
> **[3:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=183)** I'd love for you to explore more and practice building out some of the application ideas.
>
> **[3:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=188)** And keep me posted on how you're doing.
>
> **[3:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=189)** Thanks so much for hanging out in this Twilio Essentials course.
>
> **[3:13](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=193)** I'd love for you to stick through into the next course where you'll get to put your new found skills to the test.
>
> **[3:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=198)** I can't wait to build with you.

> [!info]- Semantic Content
>
> **Env Vars:** sip (4), sdk (4), url (3), pstn (2), api (1)
> **CLI Commands:** make (2)
> **Code Keywords:** pass (1), public (1)
> **Speakers:** - awesome (1), - we (1)
> **Code Identifiers:** ios (1)
> **Cross-References:** we talked about (1)
> **Definitions:** stands for (1)
> **Best Practices:** make sure to (1)


## Path Context

### In [[Twilio Programmable Messaging and Voice Professional Certificate]]
← [[Twilio Essentials Unit 1 Introducing Twilio And Programmable Messaging]] | **2 of 3** | [[Twilio Essentials Unit 3- All Together Now]] →

## Part of

- [[Twilio Programmable Messaging and Voice Professional Certificate]]

## Appears In

- [[Twilio Programmable Messaging and Voice Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Twilio Essentials Unit 3- All Together Now]] — Twilio
- [[Twilio Essentials Unit 1 Introducing Twilio And Programmable Messaging]] — Twilio

---

[↑ Back to top](#)