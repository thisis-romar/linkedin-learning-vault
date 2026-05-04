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
  - '[Twilio Programmable Messaging and Voice Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/Twilio%20Programmable%20Messaging%20and%20Voice%20Professional%20Certificate.md)'
prev_courses:
  - '[Twilio Essentials Unit 1 Introducing Twilio And Programmable Messaging](Twilio%20Essentials%20Unit%201%20Introducing%20Twilio%20And%20Programmable%20Messaging.md)'
next_courses:
  - '[Twilio Essentials Unit 3- All Together Now](Twilio%20Essentials%20Unit%203-%20All%20Together%20Now.md)'
path_nav: '[{"path":"Twilio Programmable Messaging and Voice Professional Certificate","position":2,"total":3,"prev":"Twilio Essentials Unit 1 Introducing Twilio And Programmable Messaging","next":"Twilio Essentials Unit 3- All Together Now"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/interactive-voice-response-ivr
  - skill/twilio
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Twilio%20Essentials%20Unit%202-%20Programmable%20Voice.md)

![Twilio Essentials Unit 2: Programmable Voice](https://media.licdn.com/dms/image/v2/C560DAQEjIIowAW3xmw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661384713359?e=2147483647&amp;v=beta&amp;t=BZ24LrysfkXIsg7DhME71KrJfA7sh_WTOIRoLumCmp0)

# Twilio Essentials Unit 2: Programmable Voice

> The telephone has evolved so much in recent decades. This course explores the next phase in that evolution and introduces you with how to build Programmable Voice applications with Twilio. Learn how to use the API to build an IVR, Interactive Voice Response. Find out how to gather input from users on a phone call using dual-tone modular frequency (DTMF). Generate outbound calls using the CLI in Tw

> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice) | 36m | Beginner | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Programmable Voice**](#1-programmable-voice) (5 videos)
  - [Appreciating the phone](#appreciating-the-phone)
  - [Receive a call](#receive-a-call)
  - [Gather input](#gather-input)
  - [Create an outbound call](#create-an-outbound-call)
  - [Review and practice](#review-and-practice)

### 1. Programmable Voice

[↑ Back to Table of Contents](#table-of-contents)

#### [Appreciating the phone](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=0)** (soft music)
>
> **[0:06](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=6)** - Hi, there. I'm Craig and I'm a developer. Welcome to [Twilio](../../Skills/Software%20Development/Twilio.md) Essentials with Programmable Voice. A quick heads up that this is a course in a series, and I'm going to be assuming that you've obtained some Twilio knowledge from prior content. Ahoy there! You'll hear Twilions, or people who work at Twilio, they'll greet you with ahoy, all the time. Do you know why? Ahoy was actually the original way that we used to answer the phone. Like, you'd pick it up and instead of saying, "Hello," you'd be like, "Ahoy." And the other side, it'd be like, "Ahoy, hoy." The phone has evolved a ton since those days, and so much has been built on top of that original invention. Like so much so that we often don't even think about it as innovation anymore, but it's really incredible what we've been able to build on top of it. And when I say we, I don't mean we, Twilio. I mean, we, like team human. Like for instance, we figured out a way to wait in a virtual line. Somebody came up with that concept, that holding concept, right? Like we figured out a way to have the phone answer itself and record a message if the person wasn't around. We figured out a way to prompt a caller for information. Press one for sales, that sort of thing, and we route 'em to the right person. That's huge. What a time-saving, life-changing experience. And we came up with a way to connect callers altogether in a group on a conference call. That conference call was just an idea, and think about how many that you've been on lately. So, it's pretty impressive what we can do with a speaker, a microphone, and a little bit of connectivity, isn't it? So, here's the thing. Any experience that you've ever had on the phone, like anything at all, you can reproduce that with Twilio. And that's because as a developer,
>
> **[1:38](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/appreciating-the-phone?u=76281980&t=98)** you're provided with the building blocks that you need to create whatever you can dream up. You just snap 'em together. The programmable voice API is expansive. Want to put someone on hold? Use the Enqueue TwiML. You can record, play a sound file. You can make it say whatever you want. You can route and forward calls by using dial. And you can even dial into a conference. There is so much you can do with just a few lines of declarative code. And the good news is that the way that you do all this is very similar to what you've already learned. And you can build it all over the PSTN, the public switched telephone network. Literally anyone with a phone can use your application. Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Twilio](../../Skills/Software%20Development/Twilio.md) (5)
> **CLI Commands:** snap (1), make (1)
> **Env Vars:** api (1), pstn (1)
> **Analogies:** for instance (1), similar to (1)
> **Definitions:** is a  (1)
> **Warnings:** heads up (1)
> **Speakers:** - hi (1)
> **Non-Speech:** (soft music) (1)

#### [Receive a call](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=0)** - Text-to-speech has become super impressive lately. It sounds almost eerily human, doesn't it? It's come a long way from where it started. I remember playing with early versions of my computer, and it would trip up on the weirdest words. I remember once trying to make it say cheeseburger, and it came back as "chess ebeger," but the tech has gotten so much better, and it's had to. There are many of these personal assistance devices everywhere, (whispering) the Alexas or the [Google](../../Glossary/Service/Google.md) Home devices. I'm whispering 'cause I don't want to trigger yours. The advancements in this arena are incredibly impressive, and we, developers, get to stand on the shoulders of giants and make use of it in our applications. It's time to write the Hello World Application of a programmable voice. Only of course, in our case we'll do ahoy world. We're going to be using the Say TwiML to do our text to speech. So I'll navigate to those docs. So here I am on Programmable Voice. I'm going to collapse this folder, collapse this tutorial folder the reference folder, and here is our TwiML folder. And I'm going to go down here to Say. So you'll see here's the API to build the voice response. And it's got a couple of, we could change the voice that we wanted to, or we could also change the language and you'll see that this is what gets built down here. This is the TwiML that gets generated down here. So we've got an attribute of voice, and an attribute of language. You know what? These actually have default. So before we even set it, let's just build one of these and then we'll see what it sounds like. So I'm going to head back over to my console and I'm going to go to my TwiML bins and I'm going to pin those.
>
> **[1:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=96)** So if I scroll down under explore [products](../../Skills/Software%20Development/Microsoft%20Products.md) here I'm going to find my TwiML bins and I'm going to pin those to the side. I'll go into my TwiML bins here. I'm going to make a new one and I am going to call this ahoy world. So again, it starts with a Response tag and it's case sensitive and I'm going to close that Response tag. And we're going to use that Say tag and we'll just say ahoy world. We'll see that it's Valid Voice TwiML and we'll go ahead and create this. And just like we did with messaging, also our phone number has the ability to set what happens when somebody calls in. So let's do that. So, here's our phone number. Scroll down here to when a call comes in instead of a Webhook we're going to use a TwiML bin and we will use ahoy world and I will save my number. And now I'm going to dial in to 4 1 5 8 4 9, again, make sure you're doing it right, 4 8 0 4. With a call, it's definitely a little bit weirder. If somebody picks up and it's not your number. All right, so let's make that call. I'm going to put that on speaker.
>
> **[2:57](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=177)** - [Machine Voice 1] You have a trial account. You can remove this message at any time by upgrading to a full account press any key to execute your code. (ringing)
>
> **[3:07](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=187)** - [Machine Voice 2] Ahoy world.
>
> **[3:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=189)** - [Craig] Ahoy world indeed. So that's great. Let's go find a voice. So back here, over in the docs, if we go to this Say docs here, we'll see that there's this Amazon poly of voices that are here, which allows you to get some cutting edge voices from Amazon. It's kind of like a parrot, right? Like Polly, want a cracker, get it? Poly actually offers some cool neural voices which sound even more real. And they use machine learning to do the breathing. So let's see. Let's see if we scroll down here, we get some poly. See this dash neural. So we'll go ahead and we'll grab this poly Matthew neural. And I'm going to pop back. Put that in my TwiML bin. My ahoy world here. So I'm just going to set the attribute of voice equal to that one that I wanted there. And in order to hear how good it is, let's find some text. Oh, let's do the cheeseburger test. Let's see if there's a, is there a cheeseburger Wikipedia page? Cheeseburger. Oh my God there is. There's a cheeseburger Wikipedia page. Wonder how contentious this page is. So I'll just grab some copy here. We'll see how the cheeseburger test if that gets passed or not. So we'll go, and we'll go back to the TwiML bin. And I'm just going to put this after here so that we can hear how nice it sounds. It's a lot of areas to breathe there saying saying that, thank you, Wikipedia moderators
>
> **[4:44](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=284)** and my number still set up. So I'm going to go ahead. I'm going to call that, put it on speaker. And I want you to listen to...
>
> **[4:51](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=291)** - [Machine Voice 1] Remove this message at any-
>
> **[4:53](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=293)** - [Craig] Listen to how good the breathing is.
>
> **[4:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=295)** - [Machine Voice 1] Press any key to execute your code. (ringing)
>
> **[5:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=300)** - [Machine "Matthew" Voice] Ahoy world, cheeseburgers can include variations in structure, ingredients and composition. As with other hamburgers, a cheeseburger may include toppings such as lettuce, tomato onion, pickles, bacon, mayonnaise ketchup and mustard.
>
> **[5:17](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=317)** - [Craig] Sorry if that made you hungry. It's impressive right? Now, of course, this speech to text is wonderful for creating dynamic experiences, but there are some cases where you might want a really highly produced message and don't worry, we got you. You can play an audio file with the Play verb so let's use it. So let's go ahead. We can use both here. So we'll use Matthew to announce that, and now an important message. And so see how we can use two in a row. So we can use Say, when that's done, it will do this. It'll kick off this Play. And I have a really professional sounding recording here. We have [twil.io](https://twil.io), professional recording example. It's great. It will show you the different levels that you can actually create using this for your things. And let's, let's save this. And then I'm going to give that, a call, and I'm going to press 1 and it'll do the Say and then it will do the Play.
>
> **[6:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=379)** - [Machine Voice 1] You have a trial account. You can remove this message at any time by upgrading to a full account, press any key to execute your code. (ringing)
>
> **[6:29](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=389)** - [Machine "Matthew" Voice] And now an important message- (record scratch)
>
> **[6:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/receive-a-call?u=76281980&t=391)** - Hi there I'm [Twilio](../../Skills/Software%20Development/Twilio.md)'s Craig Dennis and I am sorry to interrupt, but right here what we were trying to do, was we would've played some drums and it would've sounded something like (impersonating sound of drums) And you would've been like, "That sounds a lot like that Rick Astley... wait a second, did they just Rickroll me?" And we did, or at least we tried to, but legally we couldn't. I want you to get back to what you were watching and just know and trust us that we will never ever let you down. Never going to give that joke up. (laughs) Sorry about that Rickroll. Now, if you don't know what that is it's when someone says, "Hey, check out this important thing." and they send you over a link and then you click on it. And that Rick Astley video pops up, you know, that one from the 90s where he's like, "Never going to give you up." It's like the whoopy cushion of audio applications but now you can do it programmatically too. But more importantly, you can now handle incoming voice calls and respond with text to speech or audio recordings. These are super handy for informational based applications like for store hours, addresses, and many other sorts of updates, but chances are you'll probably want your caller to interact with your application and let's deal with that right after a quick break.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Twilio](../../Skills/Software%20Development/Twilio.md) (1)
> **Speakers:** - [machine (7), - [craig] (3), - text (1), - hi (1)
> **CLI Commands:** make (5), find (3)
> **UI Navigation:** scroll down (3), go to (2), navigate to (1), click on (1)
> **Analogies:** just like (1), kind of like (1), such as (1), it's like (1)
> **URLs:** [twil.io](https://twil.io) (1)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)

#### [Gather input](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=2)** - So we have output working on our phone call. We can create the experience using either text to speech with the say twiml verb, or we can use an audio recording with the play verb. Now it's time to take input from the user on the call. Now the most common way is to allow the users to press the buttons on their phones. This will send what is known as DTMF or dual tone modular frequency. You know, the beep boop boop when you press the numbers. You can capture this input by using the gather verb. And when your caller submits their digits the information will be passed along to a URL of your choosing. This is using that web hook pattern from before. When your call receives DTMF, [Twilio](../../Skills/Software%20Development/Twilio.md) passes control to your app via a URL that you specify in that request your application will contain the digits that were pressed and your expected return follow up twiml. Let's dive in. Okay. Why don't we just extend our existing TwiML bin a little bit. Let's see. Why don't we let the caller tell us about how they feeled about being Rick-rolled? So what I'll do is I'll start a new gather tag here. So I'll come in here and I'll start a new gather tag. You can kind of think of this like a [HTML](../../Skills/Web%20Development/HTML.md) form element. So I'm going to leave the action blank right now. This is, you give it a URL here of where it wants to submit to. I'm going to put the song inside of the gather tag. So then I'm going to close the gather tag. So see how it's nested there. So it's nested just like a form element.
>
> **[1:35](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=95)** So let's see. We'll do a say. We'll use the same Matthew. So I'm going to yoink this and we'll say, press one to approve of this joke, press two to talk to a manager. So therefore, anything inside this gather as soon as they press a button it's going to submit the form. And in fact, we can tell it how many digits we want. There's only going to be one there. So we're going to say numb digits equals one. You might want to ask them, enter a pin code a four digit pin code. So you could say four digits, but we only want one cause they're going to press either one or two. And as soon as they press it, it's going to go off and it's going to hit this action right here whatever we put in this URL for this action. And then I also wanted to say if they don't press anything, it'll go through together as if it didn't get submitted. So we'll say you listened to the whole song. Wow. A way to never give up. So we want to handle what happens when someone submits a digit and we can handle it by providing any web server that can accept an HTTP post request. We could spend one up or we could just use the Twilio functions. Now I typically lean on functions because I don't really want concern myself with finding a hosting provider and worrying about all scaling and all that other jazz. If I had an existing web application I might want to plug into it, but I don't in this case.
>
> **[3:08](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=188)** So let's lean on functions. I'm going to open up my existing service. Remember we built one of these in the, previously. Exploration, exactly what we're doing here. It doesn't have to live in here. I can make a new service and do whatever but we already have this one. Let's go ahead and let's go into this service and we'll just make a new function that will run the code for us. So we'll add function and I'm going to call this handle feedback, handle the Rick roll feedback. Now, in this case, it actually ended up building a Twilio voice responses, which is what we want. So I'm going to say change that to a const cause we're not going to change it. And I'm going to get rid of everything else except for what gets returned here cause we're going to want to return twiml from this based on what they say. Okay. So when the gather submits to this URL, we're going to push this into the gather, when it submits, the event is going to have a new property on it. It's going to be posted with a URL-encoded field called digits. So let's let's log that out. We can log that out real quick. So we can say console.log, user pressed and then we can do event.digits and it will be a string and it will be whatever they entered there on the gather. So we want to say if the event.digits is equal to one, this is when they said that they liked it, and so we'll do a twiml.say, that's great. Glad we didn't
>
> **[4:46](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=286)** let you down. We're going to do that. All right. And then otherwise, if they entered two, they were not happy. They're reporting they want to talk to the manager. So this is a case where we could look up. Maybe we could look up the user's phone number if we had a database here or an API we could from the phone number, but we could get it. Let's leave a to-do here. We could say, look up user from phone number. And that phone number is available on, if I was catching here, so it would post, I could get this from event.from I'd be able to see who called. Right? So the phone number is stored there and event.from, but we don't have that. So we'll just go ahead. We'll hard code a name. So we'll say that Karen is the one who reported and let's see, twiml.say and we'll say thank you for reporting this joke. And then we can use whatever that name is that came across and we'll say connecting you with the supervisor.
>
> **[6:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=363)** Okay. So we could make this actually call the supervisor. You could do that with this twiml, with voice twiml. So we could say twiml.dial and I could put in the supervisor's number here, but supervisors change often. So maybe we want to store that in a variable and a cool way to do this is to say context.supervisor number and this context remember this is coming from the environment variable. So I'm going to go ahead. I'm going to save this just for now so we can come back to it. And I'm going to come here into the environment variables and I could add supervisor number and I could do, you know plus 1, 4, 1, 5, blah, blah, blah. Right? And then I could do add and now the supervisor number would be available in the code to use, which is cool. Right? So that way I can just go and change the supervisor number in my environment variables instead of hard coding it. But I'm expecting a lot of people are not going to be very happy about this. And so there's probably going to need to be a queue. So why don't we do that instead? Let's just go ahead. We'll put them right into a manager's queue. So anybody who's available to take the call can call in and call into this manager's queue. So what we'll do is we'll stick them in a queue and then otherwise we'll just tell 'em that we don't know why they pressed what they did. So we could say you pressed event.digits,
>
> **[7:37](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=457)** but why? Why'd you do that? Okay, cool. And I always press save accidentally. Okay. So we're going to say that. Okay. And I am going to deploy it and we'll walk it again. So what's going to happen is we're going to send a post request here to this account and we're going to return back a twiml for it to speak cause it's going to be a, it's a voice application. We're going to log out what digits got pressed. We can enable these live logs here and we are going to press if somebody presses one. So the digits is where it's been posted that there's a value that's in there. And if you know you're working in a different framework, web framework that would be stored in the fields typically, right or request.params, right. That would be stored in the fields, the URL fields. So event.digits, if it's equal to one we're going to say, thanks for not letting us down. If it's equal to two, we are going to, we could go get the phone number and use this event.from cause it's also in there what's been posted, and then we'll use their name and then we'll put them in a queue. And otherwise we'll say, why didn't you do that? And we're going to return that twiml no matter what with that call back and there's no errors. We have no errors that we can see possible here. So that's been saved. I can come here, I'm going to do this copy URL. I'm going to flip back to my twiml and I'm going to paste that there. And you'll see that it's this exploration. It's got the [twil.io](https://twil.io) handle feedback, cause it's live it's serverless and let's do it.
>
> **[9:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=549)** - [Automated Voice] You have a trial account. You can remove this message at any time by upgrading to a full account, press any key to execute your code. (phone button pressed) (phone ringing)
>
> **[9:18](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=558)** - [Instructor] So now notice.
>
> **[9:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=559)** - [Automated Voice] Important message, press one to approve of this joke. (instructor singing)
>
> **[9:26](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=566)** - [Female Automated Voice] Thank you for reporting this joke Karen, connecting you with a supervisor
>
> **[9:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=571)** - [Instructor] And you'll see that it says user pressed two, right from here, which I did. And there's our wait music by default. Now the manager could call in and it would immediately connect us to this. So we could set up a number for managers to call in and then we'd get off this on hold music. Pretty cool right? And that queue didn't even have to exist. I just typed the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) managers and it made a brand new queue and people will queue in there and we could have another phone number that called in and they would automatically get the next person in the queue and be connected with them to talk about how they're offended by the Rick roll joke. More on cues in the notes. Pretty awesome right? We just created an IVR, an [interactive voice response](../../Skills/Software%20Development/Interactive%20Voice%20Response%20(IVR).md), and our options were able to trigger any code that we wanted over a URL, super powerful concept, right? Twilio passes control to whatever web application via web hook. Our example is currently only one menu level deep, however, we could return another menu in our action handler, and then that could point to another action and that had a menu and another menu. Yo dog, I heard you like menus. So I put a menu in your menu. Fair warning though large menus can get a little squirrly over time. Also the bigger they get, the harder they are to visualize what's actually happening. Editing them can get increasingly challenging, but have no fear. There's a tool for this problem. We talked a bit about it previously and Twilio's studio is a great tool to handle this issue. Not only does it make it easier to visualize, it also makes it easier to add and to maintain existing flows.
>
> **[11:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/gather-input?u=76281980&t=663)** These widgets are very rich. They represent the twiml and all of their configurations. You can pass code off to functions or any URL whenever you need to. It's powerful, scalable, and you can import and export the entire flow in [JSON](../../Skills/Web%20Development/JSON.md) format, which means you can keep it alongside your code in [Version Control](../../Skills/Web%20Development/Version%20Control.md). I can't recommend it enough, especially for IVRs. Check the notes for more info. What we've seen with programmable voice so far has all been inbound through web hooks. Well, you can also create an outbound call using the API just like how we sent that outbound message. Let's check that out after a quick break.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Twilio](../../Skills/Software%20Development/Twilio.md) (5), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Interactive voice response](../../Skills/Software%20Development/Interactive%20Voice%20Response%20(IVR).md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** url (10), dtmf (2), api (2), html (1), http (1)
> **Speakers:** - [automated (2), - [instructor] (2), - so (1), - [female (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** just like (2)
> **URLs:** [twil.io](https://twil.io) (1)
> **Warnings:** warning (1)

#### [Create an outbound call](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=0)** - We've been handling calls as they come in but now let's take a look at kicking one off ourselves. The call API is very similar to the message API, so it should feel pretty familiar. So on [twilio.com/docs](https://twilio.com/docs), I'm going to click on voice. And in here, I'm going to look for the API reference. I'm going to collapse these folders. Here we go. And I was looking for the call resource. And over here, if you look at the library, you'll notice that it's very similar. We got calls and then we got create, and we have a to and a from and a TwiML. TwiML here is what you'd like to have happen when the two numbers are connected. So in this case here, it's going to do response say Ahoy there. Now also on call creation, instead of passing TwiML, you can also pass a URL. So if you open this up, you can see that you can pass a URL. And as long as the URL returns a valid TwiML, you will be able to use that. But we have a URL just like that. Our TwiML bin exposes the URL for situations just like this. So let's go back to our TwiML bin, I'll show you that. So here you'll see that the TwiML bin, the ahoy world TwiML bin that we've been playing with, this Rick roll one, if we go ahead and we click this copy, I'm going to copy that. Now I've got that in my clipboard. And if we go back and we look at the notes, I could definitely do this in note, or C sharp or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) but I don't really have one of those servers and we're just kind of exploring. So I'm going to go ahead, I'm going to do that in the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). And you'll see, very similar, calls, create,
>
> **[1:33](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=93)** URL, to and from. So let's do it. Let's do that exactly. So we're going to go back to my command line here. We're going to say [Twilio](../../Skills/Software%20Development/Twilio.md) API core calls create and we will do from our number, which was... You can find that in your console here. I'm going to copy my number from that number, my 415 number, to my number, which is plus +1 503-836-8731.
>
> **[2:23](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=143)** Please, don't call late. And in my clipboard I've got that URL for the Twilio number. No, I don't. I copy and pasted that. So I'm going to go back to my TwiML bin. And again, I'm going to copy that. That's the thing with these clipboards. You keep on throwing stuff in there. So I copy the URL to the clipboard, and I'm going to paste that here. And now we see that it has this unique number and I'm going to go ahead and make that call and it's ringing.
>
> **[3:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=180)** - [Phone] Press any key to execute your code.
>
> **[3:01](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=181)** - [Instructor] And you'll see that it goes.
>
> **[3:03](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=183)** - [Phone] And now an important message, press one, to approve of this joke, press two, to talk to a manager.
>
> **[3:09](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=189)** - [Instructor] And we've got the Rick Roll happening again. There is our Rick Rollin' IVR. That's pretty awesome. And you can also use that to get the call log. So if we wanted to go and we wanted to see we could say Twilio API core calls list
>
> **[3:28](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=208)** and we could see, specifically, we could use the help again and we could see what we could push in. So we could say, see only show calls made to this number. And we could do only calls made from this number, which is what we just, we just did a from. So let me get that number from the clipboard here. And we could do, we could say twilio API core calls list. This would be all of them but we could say only the ones that were made from our number, and we should see the call that just happened to me. There we go. So as a developer, I'm pretty sure you're probably wondering now, wait a second. What happens if there's an error? So let's do that. Let's create a call. So I'm using the up arrow here. Let's create a call and instead of using a URL, let's just give it some bad TwiML. So instead of passing a URL here, we'll put in some TwiML that is invalid. This is really bad TwiML. And I'll go ahead and I'll try to create that and you'll see the call got created and the status is that it's got cued. And I'm going to go ahead and answer my call.
>
> **[4:36](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=276)** - [Phone] You have a trial account. You can remove this message at any time by upgrading to a full account, press any key to execute your code. We're sorry. An application error has occurred. Goodbye.
>
> **[4:48](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=288)** - [Instructor] Oh no, so an application error occurred. So what happens? What can we do now to take a look at that? And this type of error could happen at time. Maybe there's an error in your code that generates the TwiML or like maybe you write bad TwiML and that call will have an error in it. So if we head over to the console, actually, we'll see that there's this little red dot here. It shows that we've got a new problem. So if I go under monitor and then I go under error logs, you'll see that I have this document parse failure. And you can see at what times they happened. So I'm going to come in here. And you can see what the request was and here's the body. It was really bad TwiML, indeed. And it will tell you what's going wrong there. Now, if you wanted to get ahold of these programmatically, you could come in here under those web hooks and alerts and you could put in your web hook and this will get the information posted to you. And we'll show you what the payload will look like. This is the payload that will come across. So in addition, there's also a debugger from the awesome Twilio CLI. We've got this debugger logs list function. And again, I autocompleted with tab there. And if I just press enter, I can see the most recent errors that happen. And here you see this is the error that we just got, error on line one of document content is not allowed in prologue which is the error that that generated by having bad TwiML. Check the notes for more information on this. Now, again, as a good developer, this may make you start to wonder about how best to keep track of the status of the calls that you create. Now, remember, this just said queued. It was fine.
>
> **[6:21](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=381)** It looked like a went, but there was an error. And so you might want to know that and you don't want to actually just keep on hitting the same call over and over again and checking the status of it. You actually want to use a web hook. So instead of you calling the API, let the API call you. So let's fix that TwiML first. And we will, instead of returning some bad TwiML, we'll make a good one. We'll do some response and we'll do a say hi there. Well, no, not a hi there. We should definitely say ahoy there. Ahoy there, friend. And we'll close the say off and we've got the response there. So when you create a call, and this actually works too with messages, there's a feature called a status callback. Now the status callback takes a URL, so it's a web hook, so we'll post to that, and we can make one real quick. I think we probably should. Let's do that real quick. So we're going to pop over and we'll go into our functions here that we have going and I'm going to go ahead and add a new function and we'll just call this status displayer. Now, obviously you would probably want to make something trigger in your application if something went wrong or if it was completed, you might want to track that somebody got the call and it got successfully delivered. You might want to track that on your side so you could get posts to this thing. I'm just going to delete all of this stuff that comes in here. And instead of returning TwiML, we don't need to return anything. We're just going to kind of use this to log out some stuff.
>
> **[7:55](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=475)** So we'll say console.log and we will say call and we'll do events.callSid. Status is event.callstatus. And we will close that off. There we go. So this is called status displayer. So I'll click save. And I will deploy that. So it's going to post every time the status changes and by default, the call status handler will only post when we complete the call, but we can change that. We can actually specify multiple things that we're looking for. First, we'll get ahold of this URL. So I'm going to copy this URL. And we will paste that in the status callback. And then there's this status callback event. And I want to know when it's ringing, I want to know when it's answered. So I'm just going to do a little copy and paste here 'cause we can paste this a couple times. We want to know answered and completing. So instead of ringing, when it's answered, and one more, when it's completed, we will push through here. You pass what the events are that you are looking to track. I'll come over here. I'm going to clear this. Enable our live logs. Let's go ahead, I'm going to kick this call off to my phone. Just kidding, I'm not. Event not found, that looks weird. Status callback equals answered equals completed.
>
> **[9:31](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=571)** TwiML equals response. Oh, I've got it right in the middle. Look at that. That's very strange. So we'll say ahoy there, friend. Oh, I must have put an exclamation point. It doesn't like that, the command line doesn't like exclamation points. So I ended up executing some bizarre code. Okay, cool. So that's a good thing to know. Good thing I showed you that. So we've got the status displayer there. We've got the ringing, the answered, and the completed. And now when I hit this, it's going to go and it's going to create the call. And if I come over here, my phone's ringing. I'm going to go ahead and click answer.
>
> **[10:14](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=614)** - [Phone] By upgrading to a full account. Execute your code.
>
> **[10:19](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=619)** - [Instructor] And you'll see that I got the status is ringing, the status is in progress, and the status is completed, which is really nice if I were needing to track exactly what happened with each one of the calls that I got created. I could reassociate this in the database someplace. And one more thing I wanted to just call out is that you can update a call that is in progress. So if you look at this dropdown here, you can say update a call in progress with TwiML. So a call could be happening, you just go ahead and you get a hold of the Sid and then you change the TwiML. And the experience on the phone will automatically get updated. So this is handy if there's some processing that's happening outside of your call, you're doing something on your other end but you want to update the caller with something. This is a nice way to interject information into a call. More on modifying calls and progress in the notes. Now you know how to use the API to call people. Now this is super handy for notifications. Think about a school. You could this to notify about closures or maybe a notification that your child was absent. And just a quick reminder that the TwiML that you return when the call begins, it can be anything. We've seen very innovative solutions that will try to call a series of numbers, and only when a person is detected does it connect to a waiting agent. For more information on answering machine detection or AMD, check the teacher's notes. There's a configurable limit to the amount of calls that you can make per second. That's called CPS and Twilio will queue up your calls so they go out one per second by default. Again, check the notes for more on CPS, and sorry for all the acronyms, especially if they're new to you.
>
> **[11:50](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/create-an-outbound-call?u=76281980&t=710)** Don't worry, they'll all stick soon. In fact, let's do a little review of those acronyms and all the other skills that you just picked up with programmable voice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Twilio](../../Skills/Software%20Development/Twilio.md) (7), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** url (13), api (9), cli (2), cps (2), ivr (1)
> **Speakers:** - [phone] (4), - [instructor] (4), - we (1)
> **CLI Commands:** make (6), python (1), find (1)
> **Cross-References:** go back to (3)
> **Analogies:** just like (2), similar to (1)
> **Tools:** command line (2)
> **UI Navigation:** click on (1), dropdown (1)

#### [Review and practice](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=0)** - Awesome job diving into Programmable Voice. First, we learned how to respond to incoming calls using the <Say> TwiML verb. Text to speech has improved a ton and we can even use the most cutting edge technology to make the voices of our applications sound nearly human in many languages. And for when those voices don't quite meet the mark, we can always fall back on the TwiML verb <Play> which allows us to play any sound file we want. (he beatboxes) ♪ Bum, bum, bum, bum, bum ♪
>
> **[0:26](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=26)** - We then collected information from callers by using the <Gather> TwiML verb. Which allowed users to press numbers on their keypads and would then submit to a URL that could handle their request. The response from the URL was the appropriate TwiML to keep the call moving, much like a web form submission. We didn't cover it directly, but you can also allow the caller to respond with their voice. Like a, "Press one" or, "Say support to connect with an agent." Check the notes for more information on that. And if you're looking to do more [Real-Time](../../Skills/Database%20Management/Real-Time.md) work with voice, make sure to check out Media Streams. This gives you direct access to the audio from the phone in real time and even lets you pipe audio back in. We explored the API, and used the Call resource to create new outbound calls. When creating a call, you choose whether to write TwiML directly, or pass it a URL that responds with the appropriate TwiML. And you can do all of this with anyone who has a telephone. It works all over the PSTN, or public switched telephone network. We sure did run across a lot of acronyms along the way. When the user presses a button on their phone and it makes that beep-oop noise, that's DTMF or Dual-tone multi-frequency. Typically they're pressing those buttons because they're responding to prompts like, "Press one to chat with an agent." These applications are called IVRs or [Interactive Voice Response](../../Skills/Software%20Development/Interactive%20Voice%20Response%20(IVR).md). Most likely you'll be sending out a lot of calls and there's a default throughput of one CPS that's Call Per Second. Check the notes for how to change this value. It's possible to detect when a human answers the phone instead of an answering machine. That's AMD or Answering Machine Detection. And while out of the scope of this course,
>
> **[2:01](https://www.linkedin.com/learning/twilio-essentials-unit-2-programmable-voice/review-and-practice?u=76281980&t=121)** SIP stands for Session Initiation Protocol, and it allows voice calls to happen over the internet, instead of the PSTN. You might have heard of this as VoIP or Voice over the Internet Protocol. SIP is the protocol that kicks things off. [Twilio](../../Skills/Software%20Development/Twilio.md) offers rich solutions like SIP domains and SIP trunking in this space with all the programmability available. Please check the notes for more information. Another thing out of the scope of this course, but I'd love for you to know about it, is that there are voice SDKs. As we talked about, it's pretty amazing all that you can do with just a microphone and a speaker. And guess where else you have those? That's right. Your browser. The voice SDK allows you to quickly build web applications that embed a phone directly into your user interfaces. Using the SDK allows you to have a fully functional browser based phone that can do all the programmable tricks that you just learned. The SDK is also available for iOS and [Android](../../Glossary/Sdk/Android.md). So you can build a phone wherever you need one. Check the notes for more on Voice SDK. I've put together some ideas on how to practice your new found voice skills in the notes. I'd love for you to explore more and practice building out some of the application ideas. And keep me posted on how you're doing. Thanks so much for hanging out in this Twilio Essentials course. I'd love for you to stick through into the next course where you'll get to put your new found skills to the test. I can't wait to build with you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Twilio](../../Skills/Software%20Development/Twilio.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Interactive voice response](../../Skills/Software%20Development/Interactive%20Voice%20Response%20(IVR).md) (1), [Android](../../Glossary/Sdk/Android.md) (1)
> **Env Vars:** sip (4), sdk (4), url (3), pstn (2), api (1)
> **CLI Commands:** make (2)
> **Speakers:** - awesome (1), - we (1)
> **Code Identifiers:** ios (1)
> **Cross-References:** we talked about (1)
> **Definitions:** stands for (1)
> **Best Practices:** make sure to (1)


## Instructor

- [Twilio](../../Skills/Software%20Development/Twilio.md)

## Resources

- Exercise files available

## Skills Covered

- Interactive Voice Response (IVR)
- Twilio

## Path Context

### In [Twilio Programmable Messaging and Voice Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/Twilio%20Programmable%20Messaging%20and%20Voice%20Professional%20Certificate.md)
← [Twilio Essentials Unit 1 Introducing Twilio And Programmable Messaging](Twilio%20Essentials%20Unit%201%20Introducing%20Twilio%20And%20Programmable%20Messaging.md) | **2 of 3** | [Twilio Essentials Unit 3- All Together Now](Twilio%20Essentials%20Unit%203-%20All%20Together%20Now.md) →

## Part of

- [Twilio Programmable Messaging and Voice Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/Twilio%20Programmable%20Messaging%20and%20Voice%20Professional%20Certificate.md)

## Appears In

- [Twilio Programmable Messaging and Voice Professional Certificate](../../Paths/Software%20Development/Professional%20Certificates/Twilio%20Programmable%20Messaging%20and%20Voice%20Professional%20Certificate.md)

## Related Courses

_Courses sharing skills:_

- [Twilio Essentials Unit 3- All Together Now](Twilio%20Essentials%20Unit%203-%20All%20Together%20Now.md) — Twilio
- [Twilio Essentials Unit 1 Introducing Twilio And Programmable Messaging](Twilio%20Essentials%20Unit%201%20Introducing%20Twilio%20And%20Programmable%20Messaging.md) — Twilio

---

[↑ Back to top](#)