---
title: Secure Development Life Cycle
---

### What is a SDLC (Secure Development Life Cycle)

A SDLC, in general, entails incorporating security testing and other activities into an already established development process. Security requirements should be written alongside functional requirements, and an architecture risk analysis should be performed throughout the design phase of the SDLC.

There are several SDLC models in use. Still, one of the most notable is the Microsoft Security Development Lifecycle (MS SDL), which outlines 12 practices that companies can use to improve their software security. NIST also released a Secure Software Development Framework, which focuses on security-related processes that companies may integrate into their existing SDLC.

### MS SDL practices (Microsoft Security Development Lifecycle)

#### 1. Provide Training

All project participants should be familiar with the fundamental security qualities and concepts to know how to incorporate security into software products and services. This is an essential foundation to ensure the product is built with the security aspects in mind from all contributors to the project.

#### 2. Define Security Requirements

Security requirements must be regularly updated to reflect changes in required functionality and changes in the threat landscape, regardless of the development technique utilized. The best time to identify security requirements is during the design and planning stages. This allows development teams to integrate security in methods that cause the slightest disturbance. Legal and industry regulations, corporate standards and coding practices, reviews of previous occurrences, and identified threats are all factors that influence security requirements. These needs should be monitored using a work-tracking system. A great example of such a system would be Jira from Athelessian or Azure Boards from Microsoft.

#### 3. Define Metrics and Compliance Reporting

It is critical to establish minimum acceptable security quality standards and hold engineering teams accountable for attaining them. Defining these standards early on allows a team to understand better the risks associated with security concerns, discover and rectify security defects during development, and implement the measures throughout the project. Setting a relevant bug bar entails precisely specifying the severity thresholds of security vulnerabilities and never compromising them once they are determined.

#### 4. Perform Threat Modeling

When there is a significant security concern, threat modeling should be applied. Threat modeling can be used at the component, application, or system level. It is a method for development teams to think about, document, and (most importantly) discuss the security implications of designs in an organized way in the context of their projected operating environment.

#### 5. Establish Design Requirements

The SDL is an assurance activity that helps developers implement features, which have been made with security in mind. Developers will often use security features like cryptography, authentication, logging, and others to accomplish this. However, in many circumstances, selecting or implementing security features has proven tricky, so poor design or implementation decisions are likely to lead to vulnerabilities. As a result, these must be used consistently and clearly understand the protection they offer.

#### 6. Define and Use Cryptography Standards

With the quantity of data sent online these days, it is critical to ensure that it is safe from leaking or tampering. Encryption is commonly used to do this. It is best to develop clear encryption standards that provide specifics on every element of the encryption implementation. Making the wrong choice in using any aspect of cryptography can be disastrous, so it is best to develop clear encryption standards that provide specifics on every element of the encryption implementation. This is something that should be left to the professionals. Only utilize industry-vetted encryption libraries, and make sure they are implemented so that they can be quickly updated if necessary.

#### 7. Manage the Security Risk of Using Third-Party Components

Third-party components are used in the great majority of software projects nowadays. When deciding which third-party components to utilize, consider the potential impact of a security flaw on the security of the more extensive system into which they are incorporated. Additional validation should be considered depending on the organization's tolerated risk level, the type of component used, and the potential impact of a security vulnerability. Having an accurate inventory of third-party components and a plan to respond when new vulnerabilities are discovered will go a long way toward mitigating this risk.

#### 8. Use Approved Tools

When building a software product, the team should be aware of the risks of using insecure tools and packages. For this reason, they should create and distribute a list of acceptable tools and the security checks that go with them, such as compiler/linker options and warnings. In addition, developers should use the most recent versions of permitted tools, such as compiler versions, and take advantage of new security analysis features and safeguards.

#### 9. Perform Static Analysis Security Testing (SAST)

Analyzing source code prior to compilation allows for a highly scalable technique of security code review and ensures that secure coding principles are followed. SAST is usually integrated into the commit pipeline to uncover vulnerabilities whenever software is created or packaged. While the developer is actively working, some products integrate into the developer environment to detect faults such as dangerous or other forbidden functions and replace them with safer equivalents. There is no one-size-fits-all approach, so development teams should determine the best frequency for doing SAST and, if necessary, use several techniques to strike a balance between productivity and security.

#### 10. Perform Dynamic Analysis Security Testing (DAST)

DAST is used through run-time verification of completely compiled or packaged software and looks for functionality that is only visible when all components are connected and functioning. This is usually accomplished by employing a tool or set of tools that precisely monitor program behavior for memory corruption, user privilege concerns, and other critical security issues.

#### 11. Perform Penetration Testing

Penetration testing is a type of security analysis that involves qualified security specialists replicating the actions of a hacker on a software system. A penetration test aims to detect potential vulnerabilities caused by coding problems, system configuration flaws, or other operational deployment flaws. As a result, the test often finds the most vulnerabilities. As a result, penetration testing is frequently used in conjunction with automated and manual code inspections to provide a deeper level of examination than is possible otherwise.

#### 12. Establish a Standard Incident Response Process

An Incident Response Plan is essential for addressing new dangers that may emerge over time. It should be developed in collaboration with its Product Security Incident Response Team (PSIRT). The plan should include whom to contact in the event of a security emergency and the security servicing methodology, including provisions for code inherited from other groups inside the enterprise and third-party code.

### NIST SDLC

![NIST_SDLC_visualization](/image/article_img/nist_sdlc.png "the five phases of NIST's SDLC visualized in a looping circle")

The National Institute of Standards and Technologies is a non-regulatory government institution that creates technology, metrics, and standards to help U.S.-based science and technology companies innovate and compete more effectively. NIST contributes to this effort by developing standards and guidance to assist federal agencies in meeting the Federal Information Security Management Act's (FISMA) standards.

NIST offers organizations guidelines on what to do during each phase of the SDLC to enhance security in the project.

#### Initiation Phase

The organization defines the necessity for a system and documents its purpose during the initiation phase. Security planning should start during the initiation phase, identifying critical security jobs performed during the system's development. The security needs for the information to be processed, transferred, or stored are examined, and all stakeholders should have consistent knowledge of the security considerations. The ISSO (Information System Security Officer) should also be specified; this role devises and implements rules to safeguard a company's network and data against various threats. In addition, the organization's project goals, high-level information security needs, and the enterprise security system architecture should be defined at this phase.
Early risk management planning and awareness will result in cost and staff time savings.

#### Development Phase

In this phase, a risk assessment should be conducted. Then, the results are applied to complement the baseline security measures, which is a vital security activity at this phase. Furthermore, the organization should study security needs, conduct functional and security testing, and produce preliminary documentation.
The risk assessment helps the company assess the risk to operations, assets, and people posed by information systems and the processing, storage, and transfer of data.

Another essential component is the creation of security plans, which define the information system's security requirements, describe the chosen security procedures, and system usage restrictions in high-risk situations. Security plans have been approved by authorized personnel and document the decisions taken in selecting these procedures. Before beginning the implementation and integration phase, testing the system's technical and security features and functions ensures that they work as planned.

#### Implementation Phase

The organization configures and enables system security features, verifies their functionality, installs or implements the system, and obtains formal authorization to run the system during the implementation phase. Before putting the system into operation, it should be subjected to design reviews and system tests to meet all security requirements. Furthermore, if new controls are added to the application or support system, new acceptance tests for those controls must be performed. This method guarantees that new controls meet security requirements and do not interfere with or invalidate existing controls. The design reviews and system testing findings should be recorded and updated as new reviews or tests are completed and kept on file in the organization's official records.

#### Maintenance Phase

Systems and products are installed and operational during this phase. However, the company should keep a close eye on the system's performance to verify that it meets pre-determined user and security criteria and that any necessary system changes are implemented.

Any proposed or substantial modifications in the system's security plan should be documented through configuration management (CM) and control activities. Upgrades to hardware, software, and firmware, as well as possible changes in the surrounding environment, keep information systems evolving. Therefore, documenting information system modifications and analyzing the potential impact of these changes on a system's security are critical actions for ensuring ongoing monitoring and preventing security accreditation failures.

#### Disposal Phase

Plans are prepared to discard system information, hardware, and software and transition to a new system during this phase. The data, hardware, and software can be archived, discarded, or destroyed. However, if done incorrectly, the disposal process might result in the unauthorized disclosure of sensitive data. Therefore, companies should consider the requirement for future retrieval and the techniques for archiving data.

In most cases, a system has no defined end. Because of changing requirements or technological advancements, systems typically adapt or move to the next generation. Security plans for systems should grow in tandem with the technology. When the company builds the security plan for the follow-on system, most of the original system's environmental, management, and operational information should still be relevant and valuable.

The disposal actions ensure that the system is terminated and that critical information is preserved. This preservation is necessary so that some or all of it can be resurrected in the future if necessary. The data handled by the system is given special attention to ensure that it is effectively moved to another system or archived in line with applicable records management legislation and policies for future access. In addition, information should be removed from storage mediums, such as hard disks or tape, in compliance with the company's security standards.

## References

1. Snyk. (2021, November 18). Secure SDLC | Secure Software Development Life Cycle. Retrieved January 13, 2022, from <https://snyk.io/learn/secure-sdlc/>
2. Wikipedia contributors. (2021c, December 12). Systems development life cycle. Wikipedia. Retrieved January 13, 2022, from [https://en.wikipedia.org/wiki/Systems-development-life-cycle](https://en.wikipedia.org/wiki/Systems_development_life_cycle)
3. Common Problems during SDLC. (2015, June 24). The Official E-SPIN Blog. Retrieved January 14, 2022, from [https://espincorp.wordpress.com/common-problems-during-sdlc](https://espincorp.wordpress.com/2014/03/20/common-problems-during-sdlc/)
4. Microsoft. (n.d.). Microsoft Security Development Lifecycle Practices. Retrieved January 14, 2022, from <https://www.microsoft.com/en-us/securityengineering/sdl/practices>
5. The Security Development Lifecycle in the Context of Accreditation Policies and Standards - Scientific Figure on ResearchGate. Available from: [https://www.researchgate.net/Comparison-of-the-NIST-and-Microsoft-security-lifecycle-models](https://www.researchgate.net/figure/Comparison-of-the-NIST-and-Microsoft-security-lifecycle-models-according-to-the-four_tbl1_313739508) [accessed January 14, 2022]
6. What is NIST Compliance? (2020, December 1). Digital Guardian. Retrieved January 14, 2022, from <https://digitalguardian.com/blog/what-nist-compliance>
7. Radack, S. M. (2017, February 20). The System Development Life Cycle (SDLC). NIST. Retrieved January 14, 2022, from <https://www.nist.gov/publications/system-development-life-cycle-sdlc>
