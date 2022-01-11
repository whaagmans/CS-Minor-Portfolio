---
title: Captcha
---

## What is Captcha

### Reverse turing test
A reverse Turing test is a Turing test in which the goal or roles of computers and humans are switched. The Turing test is traditionally envisioned involving a human judge and a computer subject attempting to imitate a human. The purpose of this traditional test is for the judge to determine which of these two scenarios is genuinely taking place. A human subject is assumed to be judged human at all times, and a computer is said to "pass the Turing test" if it is judged, human. The similar predicament of a human judge and a human subject attempting to appear human is crucial to the concept. To create a "reverse Turing test," any of these roles can be swapped.

## reCaptcha (Google)

### reCaptcha v1

Although Captcha assisted the internet in preventing bot attacks, the human labor required to solve these puzzles was not being fully utilized. Recaptcha was born at this time. Recaptcha used words from old books that were digitized and could not be deciphered by computers instead of randomly generated words.

Recaptcha operated by showing users a pair of words from a book that was being digitized. Using Optical Character Recognition (OCR) software, one of the words displayed to the user might be deciphered by a computer. On the other hand, the other word could not be detected using the same method. The control word is a term that can be detected using OCR and is used to verify that the answer for the unidentified word is correct and that the individual is human.

If the user correctly recognizes the control word, the computer assumes that the other word is correct and that the user is a human. The answer to the unknown word is then saved in a database by the computer. The verification pool is a database that can produce a variety of outputs. First, the unknown word is shown to multiple users with various control words, and the results are compared to the answers in the verification pool. Then, the term with the most matches is added to the confirmed pool, and the word that OCR did not recognize is now verified using Recaptcha.

All of this was fantastic, but as Artificial Intelligence and deep learning algorithms advanced, computers began to catch up to people. They were able to solve Captchas with excellent efficiency. Captcha data was utilized for training convolutional neural networks with a 99.8% accuracy rate. However, because computers could solve captchas using text graphics, this was a problem, and something new was necessary.

### reCaptcha v2

Recaptcha's weaknesses prompted Google to create a new version of Captcha called Nocaptcha Recaptcha or Recaptcha version 2. Recaptcha did not require users to write the words they see in distorted photos in this version. Instead, a user had to do little more than check a box.

Isn't that strange? Previously, users had to recognize text with lines and terrible backdrops; now, all people have to do is check the box, and they are no longer deemed a robot. When they check the option, Google performs complex risk analysis based on their internet activities to assess whether or not they are a bot.

Recaptcha V2 also included an invisible version in which the user does not have to check a box; instead, the Recaptcha script is activated when a website button is pressed.

Recaptcha V2 was superior to Recaptcha, but it created some friction for the end-user. For example, if Google's risk analysis concluded that the user is a bot for some reason, they had to spot traffic lights in a series of photographs, which is never a pleasurable experience. Recaptcha V3 enters the picture at this point.

### reCaptcha v3

Recaptcha V3, the most recent version of Recaptcha, does not display any images or checkboxes to its users. This version of Recaptcha is entirely undetectable, and it works as a script in the background of a webpage, according to the webmaster's needs. It can be loaded simultaneously as the page or when a login button is pressed. Recaptcha version 3 is used by over 1.4 million websites because of the improved user experience.

This script provides a score for the user on the webmasters' website every time it runs, based on the user's behavior. This score goes from 0.0 to 1.0, with human activity (1.0) on the high end and bot activity (0.0) on the low end.

The webmaster can determine what needs to be done after viewing the activity on the page. For example, the webmaster can require the user for two-factor authentication or any other form of identification to allow superstitious behavior or entirely block it.

Google employs adaptive risk analysis to calculate this score. The algorithm's adaptive nature teaches how people interact with a website and assigns scores accordingly. This makes it difficult for robots to imitate humans.

Google advises webmasters to include the Recaptcha V3 script on various sites so that Google may better analyze website traffic, which begs the question of how Google analyzes traffic in the first place.

Not only that, according to Google, the script also sends "hardware and software information, including device and application data, back to Google for analysis, and that the service is exclusively used to fight spam and abuse."

Despite Google's assurances that Recaptcha data is not utilized for advertising, it continues to collect data from its users through scripts that run in the background of websites.

Google has worked hard to improve bot detection on the internet by providing a seamless experience for consumers. However, to do so, it collects data and invades user privacy. Only time will tell if giving up privacy for ease of use was worth it.

## References

1. Attention required! | cloudflare. (n.d.). Cloudflare. Retrieved December 3, 2021, from [https://www.cloudflare.com/learning/bots/how-captchas-work](https://www.cloudflare.com/learning/bots/how-captchas-work)
2. What does CAPTCHA mean? | CAPTCHA types & examples | imperva. (n.d.). Imperva. Retrieved December 3, 2021, from [https://www.imperva.com/learn/application-security/what-is-captcha/](https://www.imperva.com/learn/application-security/what-is-captcha/)
3. Wikipedia contributors. (2021b, November 24). ReCAPTCHA. Wikipedia. Retrieved December 3, 2021, from [https://en.wikipedia.org/wiki/ReCAPTCHA](https://en.wikipedia.org/wiki/ReCAPTCHA)
4. Burling, B. S. (2012, June 15). CAPTCHA: The story behind those squiggly computer letters. Phys. Retrieved December 9, 2021, from [https://phys.org/news/2012-06-captcha-story-squiggly-letters.html](https://phys.org/news/2012-06-captcha-story-squiggly-letters.html)
5. What Is the Turing Test? (2020, August 31). Investopedia. Retrieved December 9, 2021, from [https://www.investopedia.com/terms/t/turing-test.asp](https://www.investopedia.com/terms/t/turing-test.asp)
6. Khanna, N. (2022, January 10). What is Captcha? What is the difference between ReCaptcha v1, v2 and v3? Candid.Technology. Retrieved January 11, 2022, from [https://candid.technology/what-is-captcha-recaptcha-v1-vs-v2-vs-v3-review/](https://candid.technology/what-is-captcha-recaptcha-v1-vs-v2-vs-v3-review/)
7. reCAPTCHA v3 |. (n.d.). Google Developers. Retrieved January 11, 2022, from [https://developers.google.com/recaptcha/docs/v3](https://developers.google.com/recaptcha/docs/v3)
