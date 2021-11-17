---
title: Threat Analysis
---

## Threat Actors

A threat actor is a person or group that is characterized by malicious or hostile intent using computers, systems or networks. These threat actors are classified into one of multiple groups based on motivations and affiliations. These groups are listed below with a short explanation.

### Threat Actor groups

![Threat-Actor-image](/image/article_img/threat_actor_motivations.webp 'Multiple different threat actors visualized')

* **Nation-states**:
    are frequently the most sophisticated threat actors, with dedicated resources and personnel, and extensive planning and coordination. Some nation-states have operational relationships with private sector entities and organized criminals.

* **Cybercriminals**:
  are generally understood to have moderate sophistication in comparison to nation-states. Nonetheless, they still have planning and support functions in addition to specialized technical capabilities that affect a large number of victims.
  
  Threat actors in the top tier of sophistication and skill, capable of using advanced techniques to conduct complex and protracted campaigns in the pursuit of their strategic goals, are often called advanced persistent threats (APT). This designator is usually reserved for nation-states or very proficient organized crime groups.

* **Hacktivists, terrorist groups, and thrill-seekers**:
  are typically at the lowest level of sophistication as they often rely on widely available tools that require little technical skill to deploy. Their actions, more often than not, have no lasting effect on their targets beyond reputation.

* **Insider threats**:
  are individuals working within their organization who are particularly dangerous because of their access to internal networks that are protected by security perimeters. Access is a key component for malicious threat actors and having privileged access eliminates the need to employ other remote means. Insider threats may be associated with any of the other listed types of threat actors but often include disgruntled employees.

## Risk Analysis

### Steps in an Risk Analysis

* **Conduct a risk assessment survey**:
  
  Getting the input from management and department heads is critical to the risk assessment process. The risk assessment survey refers to begin documenting the specific risks or threats within each department.

* **Identify the risks**:
  
  This step is used to evaluate an IT system or other aspects of an organization to identify the risk related to software, hardware, data, and IT employees. It identifies the possible adverse events that could occur in an organization such as human error, flooding, fire, or earthquakes.

* **Analyse the risks**:
  
  Once the risks are evaluated and identified, the risk analysis process should analyse each risk that will occur, as well as determine the consequences linked with each risk. It also determines how they might affect the objectives of an IT project.

* **Develop a risk management plan**:
  
  After analysis of the Risk that provides an idea about which assets are valuable and which threats will probably affect the IT assets negatively, we would develop a plan for risk management to produce control recommendations that can be used to mitigate, transfer, accept or avoid the risk.

* **Implement the risk management plan**:
  
  The primary goal of this step is to implement the measures to remove or reduce the analyses risks. We can remove or reduce the risk from starting with the highest priority and resolve or at least mitigate each risk so that it is no longer a threat.

* **Monitor the risks**:
  
  This step is responsible for monitoring the security risk on a regular basis for identifying, treating and managing risks that should be an essential part of any risk analysis process.

### Types of Risk Analysis

#### Quantitative Risk Analysis

* The objectives of performing quantitative risk analysis process provide a numerical estimate of the overall effect of risk on the project objectives.

* It is used to evaluate the likelihood of success in achieving the project objectives and to estimate contingency reserve, usually applicable for time and cost.

* Quantitative analysis is not mandatory, especially for smaller projects. Quantitative risk analysis helps in calculating estimates of overall project risk which is the main focus.

#### Qualitative Risk Analysis

* The qualitative risk analysis process is a project management technique that prioritizes risk on the project by assigning the probability and impact number. Probability is something a risk event will occur whereas impact is the significance of the consequences of a risk event.

* The objective of qualitative risk analysis is to assess and evaluate the characteristics of individually identified risk and then prioritize them based on the agreed-upon characteristics.

* The assessing individual risk evaluates the probability that each risk will occur and effect on the project objectives. The categorizing risks will help in filtering them out.

* Qualitative analysis is used to determine the risk exposure of the project by multiplying the probability and impact.

## STRIDE

Stride is a model for identifying computer security threats. It provides a mnemonic for security threats in the following six categories:

* Spoofing

* Tampering

* Repudiation

* Information Disclosure (privacy breach or data leak)

* Denial of service

* Evaluation of privilege

The STRIDE was developed as part of the threat modeling process. STRIDE is a threat model that may be used to reason about and identify dangers to a system. It's used in conjunction with a target system model that can be built in concurrently. Processes, data repositories, data flows, and trust boundaries are all broken down in detail.

The important question which security experts need the think is "What may go wrong in this system we're working on?"

Each threat is a violation of a desirable property for a system:

| Threat                 | Desired property  |
| ---------------------- | ----------------- |
| Spoofing               | Authenticity      |
| Repudiation            | Non-repudiability |
| Information disclosure | Confidentiality   |
| Denial of Service      | Availability      |
| Elevation of privilege | Authorization     |

## Attack Trees

Attack trees are multi-leveled diagrams consisting of one root, leaves, and children. From the bottom up, child nodes are conditions which must be satisfied to make the direct parent node true. Each attack described in a node may require many attacks described in child nodes to be satisfied. Attack trees are related to the established fault tree formalism. Fault tree methodology employs  gate conditions when parent nodes are satisfied by leaf nodes.

## References

1. Iao, K. (2021, August 31). What is a threat actor? Paubox. Retrieved November 15, 2021, from [https://www.paubox.com/blog/what-is-threat-actor](https://www.paubox.com/blog/what-is-threat-actor)
2. CIS (Center for Internet Security). (2021, June 15). Election Security Spotlight - Cyber Threat Actors. CIS. Retrieved November 15, 2021, from [https://www.cisecurity.org/spotlight/cybersecurity-spotlight-cyber-threat-actors](https://www.cisecurity.org/spotlight/cybersecurity-spotlight-cyber-threat-actors)
3. Cyber Security Risk Analysis - javatpoint. (n.d.). Www.Javatpoint.Com. Retrieved November 15, 2021, from [https://www.javatpoint.com/cyber-security-risk-analysis](https://www.javatpoint.com/cyber-security-risk-analysis)
4. Wikipedia contributors. (n.d.). STRIDE (security). Wikipedia. Retrieved November 15, 2021, from [https://en.wikipedia.org/wiki/STRIDE_(security)](https://en.wikipedia.org/wiki/STRIDE_(security))
5. Wikipedia contributors. (2021, September 3). Attack tree. Wikipedia. Retrieved November 15, 2021, from [https://en.wikipedia.org/wiki/Attack_tree](https://en.wikipedia.org/wiki/Attack_tree)