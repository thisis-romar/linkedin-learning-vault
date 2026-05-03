---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: governing-agentic-ai-systems-by-all-tech-is-human
url: "https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human"
level: Beginner
updated: 1/21/2026
learners: 6581
skills:
  - AI Agents
  - Artificial Intelligence (AI)
  - AI Governance
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEzXcBYLxEsUA/learning-public-crop_675_1200/B56Zu5YN5EH4AY-/0/1768341692673?e=2147483647&amp;v=beta&amp;t=5b0UOsaa-3lRYyY1TdBmCWlHaXmO9XbSG3xsJOGSYBE"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Responsible AI Foundations Professional Certificate by All Tech Is Human]]'
next_courses:
  - '[[History of Responsible AI- From Principles to Professionalization by All Tech Is Human]]'
path_nav: '[{"path":"Responsible AI Foundations Professional Certificate by All Tech Is Human","position":1,"total":4,"prev":null,"next":"History of Responsible AI- From Principles to Professionalization by All Tech Is Human"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - skill/ai-agents
  - skill/artificial-intelligence-ai
  - skill/ai-governance
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Governing%20Agentic%20Ai%20Systems%20By%20All%20Tech%20Is%20Human.md)

![Governing Agentic Ai Systems By All Tech Is Human](https://media.licdn.com/dms/image/v2/D560DAQEzXcBYLxEsUA/learning-public-crop_675_1200/B56Zu5YN5EH4AY-/0/1768341692673?e=2147483647&amp;v=beta&amp;t=5b0UOsaa-3lRYyY1TdBmCWlHaXmO9XbSG3xsJOGSYBE)

# Governing Agentic Ai Systems By All Tech Is Human

> In this course from All Tech Is Human, learn about the move from static, prompt-in, prediction-out AI models to a new generation of agents. Explore systems that can plan, call tools and APIs, coordinate multistep tasks, act with varying degrees of autonomy, and more.Led by All Tech Is Human Executive Director, Rebekah Tweed, and award-winning AI ethicist, Renée Cummings, with contributions from Al

> [LinkedIn Learning](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human) | Beginner | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Governing Agentic AI Systems**](#governing-agentic-ai-systems) (1 videos)
  - [Governing agentic AI systems](#governing-agentic-ai-systems)

### Governing Agentic AI Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Governing agentic AI systems](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=2)** Welcome to Governing Agentic AI Systems from AlltechIsHuman. I'm your instructor, Rebecca Tweed, Executive Director of AlltechIsHuman, and I will be guiding you through this course, where we will move from static prompt-in, prediction-out models to a new generation of agents, systems that can plan, call tools and APIs, coordinate multi-step tasks, and act with varying degrees of autonomy. With that shift, familiar risks from [[Generative AI]] collide with longstanding risks from automated [[Decision-Making]]. And new risks appear. Attribution gets murkier. Validation gets harder. And security and performance issues span an entire tool chain, not just a model. The practical takeaway for practitioners is to keep speed and trust. Governance must expand from, is the model safe? To, is the whole agentic system, its tools, memory, permissions, vendors, logs, and humans safe to launch and safe to run? What do we mean by agentic AI? In practice, most modern agents combine three ingredients. One, an LLM used for planning and decisions. Two, tools exposed through APIs to perceive and act. Search, code exec, email, [[Database Queries]], robotic controls, or payments.
>
> **[1:37](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=97)** And three, a scaffold that manages [[Control Flow]] with memory, retrievers, planners, critics, and guards, error handling, and logging. The step pattern looks like a control loop. Observe, decide, act, evaluate. repeated until a stop condition or human intervention. The ecosystem is modular. Different parties may own the foundation model, the third-party tools, the scaffolding framework, the agent design, and the deployer who integrates it into business workflows. That modularity is powerful, but it also fractures [[Accountability]] and spreads risk across organizations. Two quick distinctions help frame the governance problem. Specialized versus general agents. Some agents focus on narrow tasks like customer refunds. Others roam across broad task spaces like enterprise co-pilots connecting calendar, email, CRM and payments. The broader the scope, the harder the evaluation and the higher the stakes of miss action. And then deterministic versus non-deterministic behavior. Classic rule-based agents behave predictably. LLM driven agents are non-deterministic. Repeated runs can yield different plans, actions, or tool orders, complicating testing, audit, and incident forensics. Now let's discuss the agentic risk surface and why it's larger. One, attribution and accountability. When an agent invokes third-party tools,
>
> **[3:09](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=189)** queries internal systems, and executes actions, who is responsible for a harmful outcome? The model provider, the framework, the plugin owner, or the deployer? Recent analysis warns that the opacity of tool-using agents and the layered multi-party value chain make accountability non-trivial, and that agentic systems amplify familiar risks like memory poisoning, tool misuse, and hallucinations precisely because they can act. The governance response has to assign duties and evidence owners at every layer. Number two, autonomy risk and non-reversibility. Automation enables speed, But full automation can bypass human judgment and safety checks. Agents may send emails, create tickets, transfer funds, or modify systems. Some actions are hard to undo or leave persistent exposure, like posting sensitive info externally. Several organizations recommend calibrated autonomy with explicit human-in-the-loop or human-on-the-loop for high-impact functions, plus dry run modes, approvals, and rollback plans before irreversible steps. Number three, compounded failure modes. Agents chain reasoning, memory, retrieval, and tool calls. Small errors cascade. A mis-retrieved document skews a plan which triggers a wrong tool with wrong parameters, which writes to the wrong system. That's why scenario-based evaluation, replayable traces, and cross-tool assertions matter more here than for single-shot model outputs.
>
> **[4:50](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=290)** Number four, inefficiency and runaway loops. Agent workflows can loop, recall tools unnecessarily, or pursue dead ends, wasting compute, time, and money. Industry guidance specifically calls out infinite feedback loops and the need for [[Real-Time]] monitoring, termination conditions, and cost guards. Number five, opacity and auditability. Because an agent's brain is an LLM wrapped in planners, memory and tools, decision trails can be hard to reconstruct. That undermines explainability and audit readiness. Organizational trust literature frames this as part of AI's broader trust problem. Black box behavior plus safety and security concerns. Practically, it means you'll need richer logs than you've ever kept for traditional software. Number six, [[Privacy]] across the stack. Agents touch many data surfaces, prompts, retrieved documents, tool and API payloads, long-term memory, and third-party plugins. Each new hop is a chance to leak IP or personal data. Privacy programs must therefore extend consent, minimization, retention, DSRs, and vendor controls to every integration point. Number seven, expanded attack surface. Agent attack surfaces extend beyond prompts. Adversaries can poison memory or retrieved context, prompt inject via websites and APIs and agent visits,
>
> **[6:23](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=383)** exploit tools the agent can call, like Shell, Code Exec, SAS, or target compute or orchestration layers. Controls include allow lists, capability scoping, constrained sandboxes, content security policies for browsing, per-tool auth Z boundaries, and runtime monitoring. Number eight, function calling hallucinations. Agents may confidently choose the wrong tool or pass malformed or fabricated parameters, acting on a faulty chain of thought as if it were true. This specific risk, function calling hallucination, is now documented in enterprise guidance with mitigations like schema validation, dry runs, counterfactual checks, and human approval on high-impact functions. Number nine, value chain risks. Agentic risk lives across the value chain, from data and prompts to tools, vendors, deployment, and monitoring. Governance must therefore include vendor due diligence for every agent tool, least privileged scopes, audit trails, synthetic data where possible, and stage rollouts with kill switches.
>
> **[7:52](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=472)** Number 10, escalating risks with autonomy. A recent position paper argues that risk to people increases with autonomy. The more control users cede to an agent, the more safety and values risks emerge, especially at the fully autonomous end of the spectrum, leading the authors to recommend not developing fully autonomous agents. This view aligns with a broader governance posture. Calibrate autonomy to context and keep meaningful human control where impacts are high. Let's discuss the ethical and conceptual foundations for agent governance. Agentic AI blurs the boundary between tools and collaborators, [[Algorithms]] and actors. Ethical design asks us to be upfront about non-human status and to avoid building parasocial hooks that manipulate vulnerable users. Transparency and consent aren't just UI choices, they are [[Ethics]] by design. Agentic AI also tests our commitment to human autonomy. As systems anticipate needs, nudge behavior, and take initiative, they can displace the liberation. The answer isn't to shun assistance. It's to adopt a relational view of responsibility with meaningful human control. Clear override and approval paths, explicit limits, and designs that augment rather than replace judgment. Emerging scholarship on agent autonomy levels and human-in-the-loop patterns provides a language for that calibration and underscores that as autonomy rises,
>
> **[9:26](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=566)** so do safety stakes. Regulation is catching up unevenly. Risk-tiered approaches like high-risk obligations, transparency and disclosure, human oversight, and post-market monitoring point in a practical direction. But the modular supply chain complicates liability. Until laws harmonize, organizations should assume deployer accountability. If your agent acts in your environment with your data and users, you own the governance of that deployment. even when you buy the model or the tools. Here's the headline you can take back to your organization. Govern the system, not just the model. Set autonomy levels, decision rights, and honest disclosures. Map every agent, tool, permission, and data flow. Nothing should act in the dark. Measure multi-step behavior with scenario evals, [[Red Teaming]], and replayable traces tied to risk tier. Manage launches, monitoring, incidents, and change control with graduated autonomy based on evidence. Finally, a principle to steer by, capability with constraint. Agentic AI will keep getting more capable. Our job is to make it reliably constrained by policy, by design, by evidence, so it amplifies human judgment instead of replacing it and earns trust rather than borrowing it. is human,
>
> **[10:56](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=656)** I'm Rebecca Tweed, and on behalf of all tech thank you for investing your time and attention.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accountability]] (4), [[Privacy]] (2), [[Decision-Making]] (1), [[Database Queries]] (1), [[Real-Time]] (1)
> **Env Vars:** llm (3), crm (1), api (1), sas (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** you'll need (1)


## Resources

- Exercise files available

## Skills Covered

- AI Agents
- Artificial Intelligence (AI)
- AI Governance

## Path Context

### In [[Responsible AI Foundations Professional Certificate by All Tech Is Human]]
**1 of 4** | [[History of Responsible AI- From Principles to Professionalization by All Tech Is Human]] →

## Part of

- [[Responsible AI Foundations Professional Certificate by All Tech Is Human]]

## Appears In

- [[Responsible AI Foundations Professional Certificate by All Tech Is Human]]

## Related Courses

_Courses sharing skills:_

- [[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]] — AI Agents, Artificial Intelligence (AI)
- [[Operationalizing AI Governance- Strategy and Foundations by All Tech Is Human]] — Artificial Intelligence (AI), AI Governance
- [[Azure AI for Developers- Building AI Agents]] — AI Agents, Artificial Intelligence (AI)
- [[Fundamentals of Agentic AI- Business Implications and Ethical Insights]] — AI Agents, Artificial Intelligence (AI)
- [[Data Versioning, Lineage, and Quality Monitoring for AI]] — Artificial Intelligence (AI), AI Governance

---

[↑ Back to top](#)