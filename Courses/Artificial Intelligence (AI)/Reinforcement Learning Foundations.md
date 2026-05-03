---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: reinforcement-learning-foundations
url: "https://www.linkedin.com/learning/reinforcement-learning-foundations"
duration_minutes: 44
duration: 44m
level: Intermediate
updated: 1/8/2024
learners: 86498
skills:
  - Machine Learning
  - Reinforcement Learning
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHWXzP1EhG6xw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1611181236412?e=2147483647&amp;v=beta&amp;t=95vksPogY88U7T5Qa5Ic1FSbmji1q24X4xfQNaSLJ_8"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Fundamentals to Become a Machine Learning Engineer]]'
  - '[[Advance Your Skills in AI and Machine Learning]]'
  - '[[Getting Started with AI and Machine Learning]]'
prev_courses:
  - '[[Deep Learning- Model Optimization and Tuning (2022)]]'
  - '[[Deep Learning- Model Optimization and Tuning (2022)]]'
  - '[[Hands-On AI- Image Processing with Python]]'
next_courses:
  - '[[Training Neural Networks in Python]]'
  - '[[Introduction to Attention-Based Neural Networks]]'
  - '[[Hands-On PyTorch Machine Learning]]'
path_nav: '[{"path":"Fundamentals to Become a Machine Learning Engineer","position":6,"total":7,"prev":"Deep Learning- Model Optimization and Tuning (2022)","next":"Training Neural Networks in Python"},{"path":"Advance Your Skills in AI and Machine Learning","position":3,"total":16,"prev":"Deep Learning- Model Optimization and Tuning (2022)","next":"Introduction to Attention-Based Neural Networks"},{"path":"Getting Started with AI and Machine Learning","position":5,"total":7,"prev":"Hands-On AI- Image Processing with Python","next":"Hands-On PyTorch Machine Learning"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - skill/machine-learning
  - skill/reinforcement-learning
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Reinforcement%20Learning%20Foundations.md)

![Reinforcement Learning Foundations](https://media.licdn.com/dms/image/v2/C4E0DAQHWXzP1EhG6xw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1611181236412?e=2147483647&amp;v=beta&amp;t=95vksPogY88U7T5Qa5Ic1FSbmji1q24X4xfQNaSLJ_8)

# Reinforcement Learning Foundations

> Innovations in finance, health, robotics, and a variety of other sectors have been made possible with reinforcement learning (RL), which involves the training of machines to learn from their environment. Many top tech companies are investing heavily in this field. In this course, instructor Khaulat Abdulhakeem helps you learn the basics of this relatively new, but valuable skill. Get to know the k

> [LinkedIn Learning](https://www.linkedin.com/learning/reinforcement-learning-foundations) | 44m | Intermediate | 86K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Reinforcement learning in a nutshell](#reinforcement-learning-in-a-nutshell)
- [**1. Getting Started with Reinforcement Learning**](#1-getting-started-with-reinforcement-learning) (4 videos)
  - [Terms in reinforcement learning](#terms-in-reinforcement-learning)
  - [A basic RL problem](#a-basic-rl-problem)
  - [Markov decision process](#markov-decision-process)
  - [A basic RL solution](#a-basic-rl-solution)
- [**2. Reinforcement Learning Algorithms**](#2-reinforcement-learning-algorithms) (3 videos)
  - [Monte Carlo method](#monte-carlo-method)
  - [Temporal difference methods](#temporal-difference-methods)
  - [Other RL algorithms](#other-rl-algorithms)
- [**3. Monte Carlo Method**](#3-monte-carlo-method) (6 videos)
  - [The setting](#the-setting)
  - [Exploration and exploitation](#exploration-and-exploitation)
  - [Monte Carlo prediction](#monte-carlo-prediction)
  - [First visit and every visit MC prediction](#first-visit-and-every-visit-mc-prediction)
  - [Monte Carlo control](#monte-carlo-control)
  - [Additional modifications](#additional-modifications)
- [**4. Temporal Difference Methods**](#4-temporal-difference-methods) (4 videos)
  - [The setting](#the-setting)
  - [SARSA](#sarsa)
  - [SARSAMAX (Q-learning)](#sarsamax-q-learning)
  - [Expected SARSA](#expected-sarsa)
- [**5. Modified Forms of Reinforcement**](#5-modified-forms-of-reinforcement) (3 videos)
  - [Deep reinforcement learning](#deep-reinforcement-learning)
  - [Multi-agent reinforcement learning](#multi-agent-reinforcement-learning)
  - [Inverse reinforcement learning](#inverse-reinforcement-learning)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your reinforcement learning journey](#your-reinforcement-learning-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Reinforcement learning in a nutshell](https://www.linkedin.com/learning/reinforcement-learning-foundations/reinforcement-learning-in-a-nutshell-23067976?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/reinforcement-learning-in-a-nutshell-23067976?u=76281980&t=0)** - Picture this. An algorithm mastering the game of chess through trial and error, gradually improving its strategies with every move. That is the essence of [[Reinforcement Learning]], a dynamic process where machines learn by interacting with the world, receiving feedback and refining their actions. In this course, we'll delve into the foundations of reinforcement learning, unraveling core concepts that drive machines to explore their environment, learn from experiences and make intelligent decisions. I'm Khaulat, the founder of DiverseK where we're passionate about bridging the gap between tech talent and companies. We'll delve into the key methods like the Monte Carlo method and the temporal-difference methods including SARSA, Q-learning and Expected SARSA. Let's dive right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (2)
> **Env Vars:** sarsa (2)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Speakers:** - picture (1)


### 1. Getting Started with Reinforcement Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [Terms in reinforcement learning](https://www.linkedin.com/learning/reinforcement-learning-foundations/terms-in-reinforcement-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/terms-in-reinforcement-learning?u=76281980&t=0)** - [Instructor] Before we get into the technical details, you first need to understand some very important terms that are common in [[Reinforcement Learning]]. This will give you a better foundation for the [[Representational State Transfer (REST)|rest]] of the course. First, let's talk about the agent. This is the main property of a reinforcement learning problem. For example, it could be a robot learning to walk, or an agent learning to drive. The agent is the artificially intelligence corrector that does the learning by exploring the environments and observing, just the way we do sometimes. The next term is the state. This is the position the agent is at a given period. It changes when the agent moves. Then the environment is the environment, literally, that the agent observes to learn. Different positions in the environment represent the state. This model of the environment is sometimes known by the agent, and in other cases, unknown. Next is the action. This is whatever step or act the agent decides to take after observing the environment. If this action taken by the agents is correct, it gets a positive reward. Now, reward, in this case, is the score an agent gets for taking an action. Correct actions lead to positive rewards, while wrong actions lead to negative rewards. When an agent fails and gets a negative reward, it learns from it and changes its actions
>
> **[1:35](https://www.linkedin.com/learning/reinforcement-learning-foundations/terms-in-reinforcement-learning?u=76281980&t=95)** with the aim of choosing the right action. Therefore, the agent tries to tilt from actions that lead to negative rewards to those that lead to positive rewards. Before selecting an action, the agent uses a strategy or method to decide on what action to take in a particular state. They're usually different strategies, and these strategists in reinforcement learning are known us policies. Finally, when the agents explores an environment, it has a mission; it has something it wants to learn and that's its goal. That's enough for now. You'll learn about some other terms as we progress through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [A basic RL problem](https://www.linkedin.com/learning/reinforcement-learning-foundations/a-basic-rl-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/a-basic-rl-problem?u=76281980&t=0)** - [Presenter] Now, how do you recognize a [[Reinforcement Learning]] problem? It has to have some or all of the properties stated in the previous lesson. By some, I mean in cases where the model of the environment is unknown. In such cases, the agent is set to be performing a model free prediction. This means it's trying to predict its next action in a state without knowing what the environment looks like. The second way of learning by the agent is the model-based prediction method. Opposite of model free, where the agent learns with full knowledge of its environment. Let's assume you're the agent and you move to a new place could be for vacation or you're relocating. You don't know the location of any place or anything. You visit a few new places a day and learn more about your environment and learn new ways to navigate it. This way, if you take a new action you're learning in the model free environment. On the other hand, you just woke up from bed in a house that you've been living in for over two years, you know its size and where everything is. In this case, if you take any new action, you're learning in a model-based environment. In both cases, your every action leads to a reward which could be positive or negative. This reward helps you decide on your next action
>
> **[1:35](https://www.linkedin.com/learning/reinforcement-learning-foundations/a-basic-rl-problem?u=76281980&t=95)** and that's exactly how a reinforcement learning agent learns. Some agents have goals or missions to accomplish and once they're done accomplishing those missions they stop learning. These kinds of tasks are known as episodic task as they happen in an episode and have a final state. Some other tasks by the agents do not have an end and are known as continuing tasks. Most episodic tasks are solved via model-based methods because they are usually short which means a simpler environment to understand. While most continuing tasks are model-free because they have a larger environment space which cannot be totally understood by the agent. To not get confused later on, it's important that you know that the term episode could be used in a different context in reinforcement learning. Let's flash back to our understanding of rewards. The agent gets a reward after performing an action which could be right or wrong. In some types of reinforcement learning methods that we'll consider later and in the course, the reward doesn't come immediately after the action. But after a set of actions, this set of different actions in different states before a reward is known as an episode. So many episodes can occur before an agent reaches its goal and before getting its final reward which is the sum of all the rewards gotten
>
> **[3:11](https://www.linkedin.com/learning/reinforcement-learning-foundations/a-basic-rl-problem?u=76281980&t=191)** at the end of the episodes. I'll use an example. Assume you are an agent in a race competition where you have to run 100 meters and you have a mission to spend the least time on the truck and reach your goal early. You don't just get a reward for the race by reaching the end, instead you get it at intervals. We can say after every 10 meters where every 10 meters is an episode in the race. What this will do is help you track what actions lead to you having the best final results. Assume at the seventh interval, you spend just six seconds instead of 10 by leaning your head forward while running. You'd want to try that as other intervals too for an overall shorter time therefore a final best reward. Please note that getting a reward after episodes instead of after each episodes does not happen in all reinforcement learning methods. The reason the total reward is not acquired as one result at the end instead of at intervals is to be able to track what actions lead to which reward so as to do more of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (5)
> **Definitions:** known as (3), is an  (1)
> **Warnings:** note that (1)
> **Speakers:** - [presenter] (1)

#### [Markov decision process](https://www.linkedin.com/learning/reinforcement-learning-foundations/markov-decision-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/markov-decision-process?u=76281980&t=0)** - [Instructor] One very important topic left to discuss when describing a [[Reinforcement Learning]] problem, is the Markov decision process. You might have been wondering how everything discussed in the previous lesson is even possible mathematically, or even in code. Markov decision process, MDP in short, is how reinforcement learning problems are represented mathematically. Its variables include states, actions, rewards, one step dynamics of the environment, which is the states transition [[Probability]], and the discount factor. I know, I didn't mention discount factor before, so I'll do justice to that. Let's go back to the race example, but this time around we are running forever, definitely not possible. We are assuming this is a continuing task, as opposed to the hundred meter sprint, which is an episodic task. Now, because we're running forever, we are not very sure what the future holds, or whether our future rewards will be any better than the present. Due to this, we favor and cherish our present rewards, as opposed to the ones we might or might not get. The discount factor helps us make this possible mathematically. So now that we understand the discount factor, which is also called the reward function, let's consider the Markov decision process, MDP as a whole. Like I mentioned earlier, it has a set of states,
>
> **[1:36](https://www.linkedin.com/learning/reinforcement-learning-foundations/markov-decision-process?u=76281980&t=96)** a set of actions, a discount factor, gamma, which is set to a value less than one. The closer it is to one, the more priority is given to the present reward. While the closer it is to zero, the more the agent considers future rewards, which is not very good in the long run. So the discount factor is normally set to 0.9. Then there is a set of rewards, which the agent doesn't know initially. And finally, the state transition probability, which is the probability that the agent moves from one state to another, also referred to as the one step dynamics of the environment. Now, how exactly does this work? You might ask. I'll use another simple example. Assume you're the agent, and you're in a dark room. This room is empty except it contains parts of something you currently want. Well, for me, maybe a fruit salad. So there is an apple, a pawpaw, some call it papaya, which could be different in different parts of the world, a water melon and a banana, scattered around the room. And I need to pick all of them up to make my fruit salad. We could assume again that the floors are tiled with square tiles, to be able to keep track of our state. My current state is the first tile at the entrance of the room. If I decide to move forward to the next tile in front of me, I have taken an action, forward, in this case, into another state.
>
> **[3:11](https://www.linkedin.com/learning/reinforcement-learning-foundations/markov-decision-process?u=76281980&t=191)** There is a probability with which I have decided to move forward. That probability will be different, if I have decided to move backwards, left, or right. Moving from the first tile to the second, I would either get a reward immediately, or my reward could be after a set of actions, as mentioned earlier when explaining the episode. But now, I'm going with the former. So I get the reward after moving from tile one to tile two in front of me. If one of the fruits is at tile two, good, I get a positive reward for reaching one of my goals. That reward is let's say, positive 10. However, if in stage two, there is no fruit, I get a negative reward, say negative three. I will keep iterating this whole process, until I get all the fruits. Notice I have used different RL cases in my examples. So if you're trying to solve any problem, you have to consider if it can be broken down, and have all these different paths, the states, actions, possible rewards, and missions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (5), [[Reinforcement Learning]] (2)
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** make (2)
> **Env Vars:** mdp (2)
> **Versions:** 0.9 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [A basic RL solution](https://www.linkedin.com/learning/reinforcement-learning-foundations/a-basic-rl-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/a-basic-rl-solution?u=76281980&t=0)** - [Instructor] An equation called bellman equation is used to solve the markov decision process. Before we proceed you need to understand some new terms, the state value function and the actual value function. They both represent the same thing which is the bellman equation. The state value function is the expected value of the reward in a particular state. Did you get that? It is the total reward gained by the agent from its current state to the goal state. Let's go back to the room containing fruits for my fruit salad. I decided to move forward, left, forward and forward again and that policy takes me to my first fruit the banana that's one policy I can take. My cumulative reward from the first state to the fourth state is the state value of the four states because that's where I started. If I want to get the state value of the second state I would sum up my rewards from the second state to the fourth state and so on. Note that different policies or paths would result in different state values even if they have the same stats and end state. The actual value function
>
> **[1:32](https://www.linkedin.com/learning/reinforcement-learning-foundations/a-basic-rl-solution?u=76281980&t=92)** is used to get more optimal policies as it takes both action and the states of the agents into account when calculating rewards as opposed to the state value function which considers only the state. Note in both cases, we want to find the best path that will give us the optimal rewards. This path is known as the optimal policy. Now let's look at various [[Forms]] of the bellman equation. Are there different ways to solve a [[Reinforcement Learning]] problem?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Reinforcement Learning]] (1)
> **CLI Commands:** find (1)
> **Definitions:** known as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Reinforcement Learning Algorithms

[↑ Back to Table of Contents](#table-of-contents)

#### [Monte Carlo method](https://www.linkedin.com/learning/reinforcement-learning-foundations/monte-carlo-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/monte-carlo-method?u=76281980&t=0)** - [Instructor] The Monte Carlo method is used mostly in episodic tasks, tasks that have a definite end. This method is one way an agents can get the best policy, path or trajectory, so as to get the best cumulative reward. Recall the room full of fruits, but now we'll simplify to have just one fruit, an orange. My goal is to get that orange and I am done, meaning that's the end of that episode. I perform many episodes that I believe might have better policies and lead me to better cumulative rewards and then compare them so as to get the actions that work best in all those episodes. So here's how it works for an episode. Once I step into the room, I'm on the first tile which is my first state. At this point I have four possible actions, I could decide to move left, right, forward or backward. None of these actions have a preference because this is the first time I am stepping into the room and I don't know which states will lead miss the best reward. There is an equal chance of selecting any of the states, and my actions are also chosen at random. This means I am initially going to follow an equiprobable random policy. This is a policy that has an equal chance of being selected at random. After taking many of this episodes using the equiprobable random policy, the agents will learn a better policy
>
> **[1:33](https://www.linkedin.com/learning/reinforcement-learning-foundations/monte-carlo-method?u=76281980&t=93)** from studying the rewards of the previous policies. At my first state, if I decided to take action right and got a cumulative reward of positive 10 after reaching my goal, which is where the orange is. And in another state, I chose action left and got a cumulative reward of positive seven, action forward and got a cumulative reward of positive eight, action backwards and got a cumulative reward of negative one. All in different episodes I would deduce that selecting action right in the first state would be my go-to action for that state, in order to get the maximum reward. I will then compare the results for the second state also and see which of the actions from the states led to a maximum cumulative reward, and make that my go-to action for that state. Then I do that for the third, fourth and all of the future states until I get to the final state where the orange is. All these results of the community reward for different states needs to be stored somewhere for easy comparison, and that's what the Q-table is used for. It's just updated with every episode for each state and action taken in that state with the cumulative reward of starting from that state. This table will be discussed in more detail in a bit when we deep dive into Monte-Carlo methods.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Temporal difference methods](https://www.linkedin.com/learning/reinforcement-learning-foundations/temporal-difference-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/temporal-difference-methods?u=76281980&t=0)** - [Instructor] Temporal difference methods are the second major category of ways in which [[Reinforcement Learning]] agents learn. Unlike the Monte Carlo method, temporary difference methods update the Q-table at every time step, instead of the end of every episode. There are more realistic ways of learning and solving tasks because real world tasks are mostly continuous. We need to know if we're taking the right action or wrong one at every time step instead of waiting over a long period of time when damages might have been caused. Note that this also works for episodic tasks. Considering a real world application of [[Artificial Intelligence (AI)|artificial intelligence]] systems like self-driving cars, the agent drive in the car needs to know if it's a slow down at the junction or maintain its speed. If it has to wait after an episode before knowing the right action to take, it might have crashed into another vehicle and caused an accident. This is the major difference between the Monte Carlo method and the temporal difference methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Other RL algorithms](https://www.linkedin.com/learning/reinforcement-learning-foundations/other-rl-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/other-rl-algorithms?u=76281980&t=0)** - [Instructor] The Monte Carlo and temporal difference methods form the baseline to the many advanced [[Reinforcement Learning]] [[Algorithms]], which are all modifications of the Bellman equation. They include better ways of storing the agent's rewards, states, and actions as in deep reinforcement learning, agents learning by imitating other [[AI Agents]] as in inverse reinforcement learning, or agents learning alongside other agents as in multi-agent reinforcement learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (4), [[Algorithms]] (1), [[AI Agents]] (1)
> **Speakers:** - [instructor] (1)


### 3. Monte Carlo Method

[↑ Back to Table of Contents](#table-of-contents)

#### [The setting](https://www.linkedin.com/learning/reinforcement-learning-foundations/the-setting-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/the-setting-2?u=76281980&t=0)** - [Instructor] Taking a deep dive into the Monte Carlo Method, we mentioned the Q-Table initially, which is a table used to store the state values for every action taken by an agent. This Q-Table will contains rows and columns and columns where the rules represent the states and the columns represent the actions. This could be interchanged. So for an action taken in any state, the expected reward also known as the state values are recorded here in the Q-Table. For example, when the agent is in state two, we assume that for taking an action right it gets a state value of positive seven. The status of this reward will be the cumulative reward of starting from state two taking action, right, and following the policy until it reaches its goal. For any policy taken in an episode, the cumulative reward will be the sum of the reward of the stats state, the reward of the second state, and all the other rewards in that policy to the end of the policy the goal. For future policies, the agent already knows what actions would maximize or what in each state leading to better cumulative rewards.

> [!info]- Semantic Content
>
> **Cross-References:** we mentioned (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Exploration and exploitation](https://www.linkedin.com/learning/reinforcement-learning-foundations/exploration-and-exploitation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/exploration-and-exploitation?u=76281980&t=0)** - [Instructor] Exploration and exploitation are very important terms in [[Reinforcement Learning]]. When an agent explores an environment, it tries to understand as much of the environment as possible. It tries to reach many states and exploits information from them. By exploiting, it learns as much from the state as possible. Exploration and exploitation are two different but simultaneous activities performed by a reinforcement learning agent. They are most useful in model-free systems where the agent doesn't have any model of the environment and actively tries to understand it. They are also useful in model-based systems to help navigate the environment. As mentioned initially about learning optimal policies, the agent selects an action in the state that has resulted in the best cumulative reward over different episodes. However, this is not always correct because it's choosing actions at random and then action which led to a lesser cumulative reward now might actually be better if it's followed a different policy five seconds later. To avoid missing actions that will lead to better rewards, the agent would not only select the best action to follow as it sees in the Q-table. If the Q-table says action right would yield the highest reward, action right will be selected with a 70% [[Probability]] while other actions, left, forward and backwards
>
> **[1:37](https://www.linkedin.com/learning/reinforcement-learning-foundations/exploration-and-exploitation?u=76281980&t=97)** will be selected with 10% probability each. This way, the agents is exploring those other actions in that state more, and it might end up learning something better that will lead to a higher reward. These new actions if they lead to a better cumulative reward would replace the previous best actions. A strategy for exploration and exploitation that has proved to give optimal results is when exploration is initially favored over exploitation and then leans towards exploitation. This is how exploring and exploiting new and previous states helps us get better rewards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (2), [[Probability]] (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Monte Carlo prediction](https://www.linkedin.com/learning/reinforcement-learning-foundations/monte-carlo-prediction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/monte-carlo-prediction?u=76281980&t=0)** - [Instructor] Monte-Carlo predictions can be understood using the Q-table, which is used to start the state values of all actions performed by the agent. It answers the question, "Given a policy, how will the agents estimate "the value function or the expected cumulative reward?" The Monte-Carlo prediction is just the Monte Carlo method as explained in earlier lessons. It uses the Bellman equation to estimate the state and action value functions, otherwise known as the expected cumulative reward for following the policy. The Bellman equation for the Monte Carlo method is represented by this equation. In simple terms, the state value of a current state is the expected value of the reward of the next state plus the state value of the same next state. Where V pi S is the state value of a state following a policy pi, E here implies expectation. So the state value is an expected result not the actual. R represents the reward of moving to another state, while T plus one in place to be the next state. Gamma is the discount factor that we discussed earlier which helps us favor recent rewards, as opposed to older rewards. V pi S, T plus one, is the state value of the next state while ST is equal to S, implies that the whole equation is applicable to a current state S. This equation is used to solve a [[Reinforcement Learning]] problem
>
> **[1:32](https://www.linkedin.com/learning/reinforcement-learning-foundations/monte-carlo-prediction?u=76281980&t=92)** using the mark of decision process and thus interpreted directly in code as you'll see later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (1)
> **Cross-References:** we discussed (1), later in (1)
> **Definitions:** known as (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [First visit and every visit MC prediction](https://www.linkedin.com/learning/reinforcement-learning-foundations/first-visit-and-every-visit-mc-prediction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/first-visit-and-every-visit-mc-prediction?u=76281980&t=0)** - [Instructor] First-visit and every-visit Monte-Carlo prediction, splits the Monte-Carlo prediction into two types. For every policy when predicting the reward, we can encounter a state more than once. It is then our decision to make if the second, third or fourth time we encounter a state should be taken into consideration when estimating the reward. For example, if the agent visit state two for the first time at the second time step and then passes state two again at the eighth time step, if we take into consideration the second time it's passes, we get a different reward from if it isn't considered. So, if the agent decides to go with the first-visit Monte-Carlo prediction, the expected reward will be the cumulative reward from the second time step to the goal without minding the second visit to the state at the eighth time step. But if the agent says to follow the every-visit Monte-Carlo prediction, it's also is the expected reward, which is the cumulative reward from the second time step to the goal. However, for the second state, now we have two different rewards, for the second time step and eighth time step. So we use the average of both. If the agent visits the state more than two times and this following the every-visit Monte-Carlo prediction, the average expected reward will be gotten for the three or more time steps. Every-visit prediction has been seen to be biased
>
> **[1:35](https://www.linkedin.com/learning/reinforcement-learning-foundations/first-visit-and-every-visit-mc-prediction?u=76281980&t=95)** which makes the first-visit method better option.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Monte Carlo control](https://www.linkedin.com/learning/reinforcement-learning-foundations/monte-carlo-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/monte-carlo-control?u=76281980&t=0)** - [Instructor] Recall the Monte Carlo prediction is when we try to predict the expected reward from following any policy. The process of iterating between using the initial bad policy, which is the equal probable random policy, to construct the Q-table and then improve on the policy by selecting actions which lead to the best result is the Monte Carlo control. In more detail, the first step in Monte Carlo control is to construct the Q-table by using random policies. Then the policy is improved by selecting the best actions in each state, or better still, the Bellman equation is used. This new policy is then used to update the Q-table. The switching between these three steps is Monte Carlo control and completes the whole cycle of updating the policy.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Additional modifications](https://www.linkedin.com/learning/reinforcement-learning-foundations/additional-modifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/additional-modifications?u=76281980&t=0)** - [Instructor] I'm going to put some official terms to some of the things I mentioned in previous lessons, and also introduce you to some new ones. One is the greedy policy. A policy is greedy when it only selects the best action, for a given state, all the time. Like we saw earlier, when an agent selects the best action from all the episodes to improve its policy. An improvement over the greedy policy, is the epsilon-greedy policy. When a policy is epsilon greedy, the agent sometimes gives the opportunity to explore other actions that are not the best as explained, when I talked about exploration, and exploitation. Another new term is the incremental mean. This provides a bit of improvement over the regular Monte Carlo method, tending towards the temporal difference method. Instead of updating the policy after a set of episodes, which normally helps decide the best action, the incremental mean helps us update the policy after every episode. Initially first state, we record the reward from multiple episodes, and then deduce the action value, by selecting the largest reward. On the other hand, using incremental mean, we improve the process by getting the action value after every episode, instead of after multiple episodes. The result of the action value
>
> **[1:36](https://www.linkedin.com/learning/reinforcement-learning-foundations/additional-modifications?u=76281980&t=96)** is the average of all previous rewards. So for example, if in episode one, the agent gets a reward of two, for episode two, the agent gets a reward of four, for episode three, a reward of six. The corresponding action values for the episode, will be, for the first episode, two, because that's the only reward gotten so far. Three for the second episode, gotten from the average of two and four, which is the average reward of the first and second episode. And six for the third episode, which is the average of two, four and six, the current reward, and those of the previous episodes. The last term I want to talk about for this lesson is the constant alpha. This helps to regulate the rate at which the agent learns. Constant alpha is also called the learning rate, and is generally sets of value between zero and one. Setting it to zero means the Q-table is never updated, meaning it's not learning, while setting alpha to a high-value such as 0.9, means that learning can occur quickly.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), such as (1)
> **Versions:** 0.9 (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 4. Temporal Difference Methods

[↑ Back to Table of Contents](#table-of-contents)

#### [The setting](https://www.linkedin.com/learning/reinforcement-learning-foundations/the-setting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/the-setting?u=76281980&t=0)** - [Instructor] Temporal difference methods solve the action values of every state at every time step, so it doesn't wait until after an episode or multiple episodes. It has the same setting as the Monte Carlo method, having states, actions, rewards, and the environment. The difference is how frequently the policy is updated. Besides these obvious similarities, the Monte Carlo method has a high variance due to its randomness but isn't biased, while the temporal difference methods have low variance but are biased. This temporal difference methods exploit more of the Markov property, which holds when the conditional [[Probability]] of future states depend only on the immediate past states. By doing this, they seem to update the Q-table immediately only with information from the past state without waiting for a complete episode. In addition, notes that they are used mostly for continuing tasks, because they update the policies immediately. You'll learn more about them later on in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Speakers:** - [instructor] (1)

#### [SARSA](https://www.linkedin.com/learning/reinforcement-learning-foundations/sarsa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/sarsa?u=76281980&t=0)** - [Instructor] SARSA is the first form of temporary difference methods and is the acronym for, State Action Reward next State and next Action. Which is the process taken by the agent to update the queue table and also mix up a complete [[Reinforcement Learning]] cycle. Let's go back to the room with the orange fruits and see how the reward is updated in the queue table. This time around, you're the agents trying to reach your goal of getting the orange. With every step you take, you get a reward and because you wouldn't wait until the end of an episode before getting your reward, as this is temporary difference learning, your reward has to be updated immediately. Note that initially, you take random policies to update the queue table, which was originally empty at the very start. So for your new step or change in states, he gets a reward. This reward say negative one because you haven't reached your goal yet, together with the state action value of the new states you just stepped into, will contribute to updating the state action value of the state you just left. So let's say the state action value of the new state you just stepped into is positive six. Adding negative one to positive six would give us positive five. Assuming the state action value of the previous state you left is positive four,
>
> **[1:35](https://www.linkedin.com/learning/reinforcement-learning-foundations/sarsa?u=76281980&t=95)** to update it, you move it closer to positive five. Because positive five is the expected reward of that previous state. So the new action value of the previous state is say, 4.2. That seems like a lot. You should go over it again a multiple times and make sure you understand the update process. I'll explain SARSA again, using the Bellman Equation. First, a quick recap of the Bellman Equation, where V pi S is the state value of a state following a policy pi, E implies expectation. So the state value is an expected result, not the actual. R represents the reward of moving to another state where t plus one implies that to be the next state. Gamma is the discount factor that helps us favor essential rewards as opposed to all the rewards. V pi S t plus one is the state value of the next state while St is equal to S, implies that the whole equation is applicable to the current state S. For the Temporal Difference method, the only difference or change, is in how frequently the reward is updated. Gt here is the total reward gotten at the end of an episode. While a different reward is used for temporal difference method, which is the sum of the reward of the next state
>
> **[3:11](https://www.linkedin.com/learning/reinforcement-learning-foundations/sarsa?u=76281980&t=191)** and the action value of the next state. Don't get confused with these equations. They are similar to the general one you are already familiar with. The state value function V pi S, is the expected value of the sum of reward and state value of the next state. For the Monte Carlo method, Q St At is the action value function, similar to the state value function, except that this is recorded after an action has already been taken. Alpha regulates the rates at which the agent lands. Gt is the cumulative reward gotten at the end of an episode from which the current state's value is subtracted. Generally, we want to update the current state value by adding to the current value the difference between the total expected reward and the current states value. For the Temporary Difference method, the difference comes in the rewards section and how it is gotten. Instead of the cumulative reward Gt as in the Monte Carlo method the reward used is the current reward of next state and the current state value of the next state. Every other part of this equation is similar to that of the Monte Carlo method.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (1)
> **Env Vars:** sarsa (2)
> **Analogies:** similar to (2)
> **CLI Commands:** make (1)
> **Versions:** 4.2 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)

#### [SARSAMAX (Q-learning)](https://www.linkedin.com/learning/reinforcement-learning-foundations/sarsamax-q-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/sarsamax-q-learning?u=76281980&t=0)** - [Instructor] SARSAMAX is another form of temporal difference method, also popularly known as Q-Learning. It is just another slight change in the Bellman Equation or how the Q table is updated. Quick recap, for SARSA, we use the same policy to pick a state, select an action for the next state get the reward of selecting that action, landing in the next state and then choosing an action. After this cycle, it then updates the action value of the four state thereby updating the policy. This update cycle is different for SARSAMAX. The similarity between SARSA and SARSAMAX is that the same policy is only used to the point where the agent selects the second state. After that point, the policy in SARSAMAX is then updated by updating the action value of the first state before choosing the next action. This next action is selected using the Greedy Policy as opposed to the Epsilon-Greedy Policy used in Monte Carlo methods. Remember that greedy policies are policies that select actions that maximize the cumulative reward. While Epsilon-Greedy Policies give the chance to select other actions even if they do not maximize the cumulative reward. For the purpose of exploration, and to discover new and better actions.
>
> **[1:36](https://www.linkedin.com/learning/reinforcement-learning-foundations/sarsamax-q-learning?u=76281980&t=96)** Back to SARSAMAX, the action chosen from the state is the one that maximizes the actual value for that state. Looking at both the SARSA and the SARSAMAX algorithm represented in the Bellman Equation we can see the difference. We can see clearly how the agent uses a Greedy Policy to select the next action instead of an Epsilon-Greedy Policy.

> [!info]- Semantic Content
>
> **Env Vars:** sarsamax (6), sarsa (3)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Expected SARSA](https://www.linkedin.com/learning/reinforcement-learning-foundations/expected-sarsa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/expected-sarsa?u=76281980&t=0)** - [Instructor] The third form of the temporal difference method is the expected SARSA. This form has no major difference with SARSAMAX. Remember, with SARSAMAX, the greedy policy is used to select the action from the second state. However, in expected SARSA, it uses the expected value of the next state-action pair, where this expected value takes into account the [[Probability]] that the agent selects each possible action from the next state. That is, there is an equal probability of selecting every action in the next state. Expected SARSA also uses the same policy to select the action of a current state and that of the next state, which makes it similar to SARSA in this regard. All these temporal difference methods have different situations they favor, even though they all converged to the optimal action value function, leading to an optimal policy. SARSA and expected SARSA are both known as on-policy temporal difference [[Algorithms]] because they use the same policy to pick an action for the current and next state, while Q-learning, or SARSAMAX, is known as an off-policy temporal difference control method because it uses a different policy to select different actions. The on-policy methods are better for continuous tasks
>
> **[1:34](https://www.linkedin.com/learning/reinforcement-learning-foundations/expected-sarsa?u=76281980&t=94)** and in general, while the off-policy method, Q-learning, works best for episodic tasks. These are tasks that have a defined goal or a short term.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Algorithms]] (1)
> **Env Vars:** sarsa (6), sarsamax (3)
> **Definitions:** known as (2), is an  (1)
> **UI Navigation:** select the (2)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 5. Modified Forms of Reinforcement

[↑ Back to Table of Contents](#table-of-contents)

#### [Deep reinforcement learning](https://www.linkedin.com/learning/reinforcement-learning-foundations/deep-reinforcement-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/deep-reinforcement-learning?u=76281980&t=0)** - [Instructor] In the course so far, we have considered [[Reinforcement Learning]] in its most basic form, understanding how it all works, the way an agent learns in a state, how the action values for each action is taught in the Q-Table. We also know that for the agent to perform well and take better actions, it needs to have tried many many actions to have learned properly. Now think of this many actions that the agent needs to keep track of in the Q-Table. How big could the Q-Table possibly be? Yeah, very, very big. And that's where [[Deep Learning]] comes in, to help make reinforcement learning more effective, and makes it easier to handle the larger information space. The neural network takes as inputs the information that the agent has on the environment, and all possible actions that can be taken in the states, and predicts the reward for every possible action, before taking an action. This removes the trial and error stages, and frequent updates of the action values, as done in basic reinforcement learning with the Q-Table. This is one major improvement in reinforcement learning, that should be learnt, if you are an AI developer, or researcher who uses reinforcement learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (5), [[Deep Learning]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Multi-agent reinforcement learning](https://www.linkedin.com/learning/reinforcement-learning-foundations/multi-agent-reinforcement-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/multi-agent-reinforcement-learning?u=76281980&t=0)** - [Instructor] So far, I've talked about the learning done by a single agent. How about the learning in a situation that is more realistic, with different agents? They can be trained using [[Reinforcement Learning]] to reach a common goal. This means they are cooperative, or they could have different goals, this makes them competitive. Or they could be general, neither cooperative, nor competitive. This makes us develop safe [[Artificial Intelligence (AI)|artificial intelligence]] systems, that learn in the same setting, as they are supposed to perform with others. For example, if you're training a group of reinforcement learning agents to play football, those on the same team will have to act cooperatively, to score goals, while agents in opposite teams will be competitive. Another typical example, is with autonomous vehicles. Multiple agents could be made to drive cars in [[Simulation]], and learn from each other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Simulation]] (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Inverse reinforcement learning](https://www.linkedin.com/learning/reinforcement-learning-foundations/inverse-reinforcement-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/inverse-reinforcement-learning?u=76281980&t=0)** - [Instructor] Imitation learning is another type of [[Reinforcement Learning]] that you should know about. One of the many ways it's achieved, is through inverse reinforcement learning. As the name portray, an agent tries to imitate the actions of humans directly. A good example of this is in a self-driving scenario, that has both human drivers and reinforcement learning agent drivers. If these reinforcement learning agents use imitation learning to learn from the human drivers, they observe the behavior of the human driver, and learns his objective, values, and rewards. They also learn what the goal of the human driver is, and how they can get there. The details of this method and authors mentioned in this section are above the scope of this course. Definitely read more about them. I would recommend for imitation learning, "The Survey of Inverse Reinforcement Learning" paper, which covers the challenges, methods, and progress of inverse reinforcement learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (6)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your reinforcement learning journey](https://www.linkedin.com/learning/reinforcement-learning-foundations/your-reinforcement-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/reinforcement-learning-foundations/your-reinforcement-learning-journey?u=76281980&t=0)** - [Khaulat] Congratulations, and thank you for making it to the end of this course. Now that you understand [[Reinforcement Learning]], I believe let's do a quick test. Pause this video and take 30 seconds to answer the question, what is reinforcement learning, in the question and answer section. I believe you did that. So here's my own answer. Reinforcement learning is a form of machine learning, or basically one of the ways machines learn that involves interaction with the environment and learning from their own actions, as opposed to learning from history or previously recorded datasets. If you're a product manager, a machine learning developer, or a researcher, you already know what you want to do with your knowledge from this course. However, if you're new to the field of [[Artificial Intelligence (AI)|artificial intelligence]], I have some suggestions for you. First, learn about the other machine learning techniques for supervised and unsupervised learning, learn more about [[Neural Networks]] and deep neural networks, understand what [[Deep Learning]] is before you dive into deep reinforcement learning. There happens to be some great resources on [[LinkedIn]] Learning, so you don't have to go far. I also have some projects I've personally worked on with reinforcement learning at khaulat.[github.io](https://github.io). If you have any questions during your learning journey, you can always ask in the question and answer section.
>
> **[1:34](https://www.linkedin.com/learning/reinforcement-learning-foundations/your-reinforcement-learning-journey?u=76281980&t=94)** Myself or someone else will be able to help you out. You're also welcome to connect with me on LinkedIn. Happy learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (5), [[Neural Networks]] (2), [[LinkedIn]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Deep Learning]] (1)
> **URLs:** [github.io](https://github.io) (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [khaulat] (1)


## Instructor

- [[Khaulat Abdulhakeem]]

## Skills Covered

- Machine Learning
- Reinforcement Learning
- Artificial Intelligence (AI)

## Path Context

### In [[Fundamentals to Become a Machine Learning Engineer]]
← [[Deep Learning- Model Optimization and Tuning (2022)]] | **6 of 7** | [[Training Neural Networks in Python]] →

### In [[Advance Your Skills in AI and Machine Learning]]
← [[Deep Learning- Model Optimization and Tuning (2022)]] | **3 of 16** | [[Introduction to Attention-Based Neural Networks]] →

### In [[Getting Started with AI and Machine Learning]]
← [[Hands-On AI- Image Processing with Python]] | **5 of 7** | [[Hands-On PyTorch Machine Learning]] →

## Appears In

- [[Fundamentals to Become a Machine Learning Engineer]]
- [[Advance Your Skills in AI and Machine Learning]]
- [[Getting Started with AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)