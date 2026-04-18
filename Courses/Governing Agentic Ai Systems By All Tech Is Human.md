---
type: course
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
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - skill/ai-agents
  - skill/artificial-intelligence-ai
  - skill/ai-governance
status: not-started
created: 2026-04-17
---

# Governing Agentic Ai Systems By All Tech Is Human

> In this course from All Tech Is Human, learn about the move from static, prompt-in, prediction-out AI models to a new generation of agents. Explore systems that can plan, call tools and APIs, coordinate multistep tasks, act with varying degrees of autonomy, and more.Led by All Tech Is Human Executive Director, Rebekah Tweed, and award-winning AI ethicist, Renée Cummings, with contributions from Al

> [LinkedIn Learning](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human) | Beginner | 7K learners

## Resources

- Exercise files available

## Skills Covered

- AI Agents
- Artificial Intelligence (AI)
- AI Governance

## Table of Contents

### Governing Agentic AI Systems

#### Governing agentic AI systems
> [LinkedIn Learning](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=2)** Welcome to Governing Agentic AI Systems from AlltechIsHuman.
>
> **[0:06](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=6)** I'm your instructor, Rebecca Tweed, Executive Director of AlltechIsHuman, and I will be guiding you through this course, where we will move from static prompt-in, prediction-out models to a new generation of agents, systems that can plan, call tools and APIs, coordinate multi-step tasks, and act with varying degrees of autonomy.
>
> **[0:30](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=30)** With that shift, familiar risks from generative AI collide with longstanding risks from automated decision-making.
>
> **[0:38](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=38)** And new risks appear.
>
> **[0:40](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=40)** Attribution gets murkier.
>
> **[0:43](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=43)** Validation gets harder.
>
> **[0:44](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=44)** And security and performance issues span an entire tool chain, not just a model.
>
> **[0:50](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=50)** The practical takeaway for practitioners is to keep speed and trust.
>
> **[0:55](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=55)** Governance must expand from, is the model safe?
>
> **[0:59](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=59)** To, is the whole agentic system, its tools, memory, permissions, vendors, logs, and humans safe to launch and safe to run?
>
> **[1:13](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=73)** What do we mean by agentic AI?
>
> **[1:15](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=75)** In practice, most modern agents combine three ingredients.
>
> **[1:20](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=80)** One, an LLM used for planning and decisions.
>
> **[1:24](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=84)** Two, tools exposed through APIs to perceive and act.
>
> **[1:30](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=90)** Search, code exec, email, database queries, robotic controls, or payments.
>
> **[1:37](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=97)** And three, a scaffold that manages control flow with memory, retrievers, planners, critics, and guards, error handling, and logging.
>
> **[1:47](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=107)** The step pattern looks like a control loop.
>
> **[1:49](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=109)** Observe, decide, act, evaluate.
>
> **[1:53](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=113)** repeated until a stop condition or human intervention.
>
> **[1:57](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=117)** The ecosystem is modular.
>
> **[1:59](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=119)** Different parties may own the foundation model, the third-party tools, the scaffolding framework, the agent design, and the deployer who integrates it into business workflows.
>
> **[2:09](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=129)** That modularity is powerful, but it also fractures accountability and spreads risk across organizations.
>
> **[2:18](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=138)** Two quick distinctions help frame the governance problem.
>
> **[2:21](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=141)** Specialized versus general agents.
>
> **[2:23](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=143)** Some agents focus on narrow tasks like customer refunds.
>
> **[2:27](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=147)** Others roam across broad task spaces like enterprise co-pilots connecting calendar, email, CRM and payments.
>
> **[2:35](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=155)** The broader the scope, the harder the evaluation and the higher the stakes of miss action.
>
> **[2:40](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=160)** And then deterministic versus non-deterministic behavior.
>
> **[2:44](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=164)** Classic rule-based agents behave predictably.
>
> **[2:47](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=167)** LLM driven agents are non-deterministic.
>
> **[2:51](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=171)** Repeated runs can yield different plans, actions, or tool orders, complicating testing, audit, and incident forensics.
>
> **[2:59](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=179)** Now let's discuss the agentic risk surface and why it's larger.
>
> **[3:04](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=184)** One, attribution and accountability.
>
> **[3:07](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=187)** When an agent invokes third-party tools, queries internal systems, and executes actions, who is responsible for a harmful outcome?
>
> **[3:15](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=195)** The model provider, the framework, the plugin owner, or the deployer?
>
> **[3:20](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=200)** Recent analysis warns that the opacity of tool-using agents and the layered multi-party value chain make accountability non-trivial, and that agentic systems amplify familiar risks like memory poisoning, tool misuse, and hallucinations precisely because they can act.
>
> **[3:37](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=217)** The governance response has to assign duties and evidence owners at every layer.
>
> **[3:43](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=223)** Number two, autonomy risk and non-reversibility.
>
> **[3:46](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=226)** Automation enables speed, But full automation can bypass human judgment and safety checks.
>
> **[3:52](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=232)** Agents may send emails, create tickets, transfer funds, or modify systems.
>
> **[3:58](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=238)** Some actions are hard to undo or leave persistent exposure, like posting sensitive info externally.
>
> **[4:06](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=246)** Several organizations recommend calibrated autonomy with explicit human-in-the-loop or human-on-the-loop for high-impact functions, plus dry run modes, approvals, and rollback plans before irreversible steps.
>
> **[4:20](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=260)** Number three, compounded failure modes.
>
> **[4:22](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=262)** Agents chain reasoning, memory, retrieval, and tool calls.
>
> **[4:26](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=266)** Small errors cascade.
>
> **[4:29](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=269)** A mis-retrieved document skews a plan which triggers a wrong tool with wrong parameters, which writes to the wrong system.
>
> **[4:35](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=275)** That's why scenario-based evaluation, replayable traces, and cross-tool assertions matter more here than for single-shot model outputs.
>
> **[4:50](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=290)** Number four, inefficiency and runaway loops.
>
> **[4:54](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=294)** Agent workflows can loop, recall tools unnecessarily, or pursue dead ends, wasting compute, time, and money.
>
> **[5:01](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=301)** Industry guidance specifically calls out infinite feedback loops and the need for real-time monitoring, termination conditions, and cost guards.
>
> **[5:10](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=310)** Number five, opacity and auditability.
>
> **[5:12](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=312)** Because an agent's brain is an LLM wrapped in planners, memory and tools, decision trails can be hard to reconstruct.
>
> **[5:20](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=320)** That undermines explainability and audit readiness.
>
> **[5:24](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=324)** Organizational trust literature frames this as part of AI's broader trust problem.
>
> **[5:29](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=329)** Black box behavior plus safety and security concerns.
>
> **[5:33](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=333)** Practically, it means you'll need richer logs than you've ever kept for traditional software.
>
> **[5:39](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=339)** Number six, privacy across the stack.
>
> **[5:42](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=342)** Agents touch many data surfaces, prompts, retrieved documents, tool and API payloads, long-term memory, and third-party plugins.
>
> **[5:52](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=352)** Each new hop is a chance to leak IP or personal data.
>
> **[5:56](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=356)** Privacy programs must therefore extend consent, minimization, retention, DSRs, and vendor controls to every integration point.
>
> **[6:10](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=370)** Number seven, expanded attack surface.
>
> **[6:13](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=373)** Agent attack surfaces extend beyond prompts.
>
> **[6:17](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=377)** Adversaries can poison memory or retrieved context, prompt inject via websites and APIs and agent visits, exploit tools the agent can call, like Shell, Code Exec, SAS, or target compute or orchestration layers.
>
> **[6:35](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=395)** Controls include allow lists, capability scoping, constrained sandboxes, content security policies for browsing, per-tool auth Z boundaries, and runtime monitoring.
>
> **[6:47](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=407)** Number eight, function calling hallucinations.
>
> **[6:50](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=410)** Agents may confidently choose the wrong tool or pass malformed or fabricated parameters, acting on a faulty chain of thought as if it were true.
>
> **[6:59](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=419)** This specific risk, function calling hallucination, is now documented in enterprise guidance with mitigations like schema validation, dry runs, counterfactual checks, and human approval on high-impact functions.
>
> **[7:15](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=435)** Number nine, value chain risks.
>
> **[7:17](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=437)** Agentic risk lives across the value chain, from data and prompts to tools, vendors, deployment, and monitoring.
>
> **[7:26](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=446)** Governance must therefore include vendor due diligence for every agent tool, least privileged scopes, audit trails, synthetic data where possible, and stage rollouts with kill switches.
>
> **[7:52](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=472)** Number 10, escalating risks with autonomy.
>
> **[7:56](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=476)** A recent position paper argues that risk to people increases with autonomy.
>
> **[8:01](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=481)** The more control users cede to an agent, the more safety and values risks emerge, especially at the fully autonomous end of the spectrum, leading the authors to recommend not developing fully autonomous agents.
>
> **[8:14](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=494)** This view aligns with a broader governance posture.
>
> **[8:17](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=497)** Calibrate autonomy to context and keep meaningful human control where impacts are high.
>
> **[8:25](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=505)** Let's discuss the ethical and conceptual foundations for agent governance.
>
> **[8:30](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=510)** Agentic AI blurs the boundary between tools and collaborators, algorithms and actors.
>
> **[8:36](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=516)** Ethical design asks us to be upfront about non-human status and to avoid building parasocial hooks that manipulate vulnerable users.
>
> **[8:44](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=524)** Transparency and consent aren't just UI choices, they are ethics by design.
>
> **[8:49](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=529)** Agentic AI also tests our commitment to human autonomy.
>
> **[8:52](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=532)** As systems anticipate needs, nudge behavior, and take initiative, they can displace the liberation.
>
> **[8:59](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=539)** The answer isn't to shun assistance.
>
> **[9:02](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=542)** It's to adopt a relational view of responsibility with meaningful human control.
>
> **[9:07](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=547)** Clear override and approval paths, explicit limits, and designs that augment rather than replace judgment.
>
> **[9:15](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=555)** Emerging scholarship on agent autonomy levels and human-in-the-loop patterns provides a language for that calibration and underscores that as autonomy rises, so do safety stakes.
>
> **[9:28](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=568)** Regulation is catching up unevenly.
>
> **[9:31](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=571)** Risk-tiered approaches like high-risk obligations, transparency and disclosure, human oversight, and post-market monitoring point in a practical direction.
>
> **[9:41](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=581)** But the modular supply chain complicates liability.
>
> **[9:44](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=584)** Until laws harmonize, organizations should assume deployer accountability.
>
> **[9:49](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=589)** If your agent acts in your environment with your data and users, you own the governance of that deployment.
>
> **[9:57](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=597)** even when you buy the model or the tools.
>
> **[9:59](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=599)** Here's the headline you can take back to your organization.
>
> **[10:03](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=603)** Govern the system, not just the model.
>
> **[10:05](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=605)** Set autonomy levels, decision rights, and honest disclosures.
>
> **[10:10](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=610)** Map every agent, tool, permission, and data flow.
>
> **[10:14](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=614)** Nothing should act in the dark.
>
> **[10:16](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=616)** Measure multi-step behavior with scenario evals, red teaming, and replayable traces tied to risk tier.
>
> **[10:24](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=624)** Manage launches, monitoring, incidents, and change control with graduated autonomy based on evidence.
>
> **[10:31](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=631)** Finally, a principle to steer by, capability with constraint.
>
> **[10:37](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=637)** Agentic AI will keep getting more capable.
>
> **[10:39](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=639)** Our job is to make it reliably constrained by policy, by design, by evidence, so it amplifies human judgment instead of replacing it and earns trust rather than borrowing it.
>
> **[10:56](https://www.linkedin.com/learning/governing-agentic-ai-systems-by-all-tech-is-human/governing-agentic-ai-systems?u=76281980&t=656)** is human, I'm Rebecca Tweed, and on behalf of all tech thank you for investing your time and attention.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), static (1), from, (1), yield (1)
> **Env Vars:** llm (3), crm (1), api (1), sas (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** you'll need (1)


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
