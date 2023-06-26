#### Which symmetric key cipher offers the best combination of security and performance for devices with limited resources

## <a name="_toc93934384"></a>Introduction

This research document will analyze multiple cryptographic key ciphers to determine the best option based on security level and performance for devices with limited resources.

This research was performed due to the increasing amount of smart home devices. These devices save and transmit personal data to function while not containing the most powerful hardware. To ensure this data is protected with the least amount of impact on the device's performance. This research aims to determine which cryptographic key cipher would best fit the data encryption on these types of devices.

In order to answer the main research question, the following research questions have been formulated:

- What are the best cryptographic ciphers currently used?
- Which cryptographic cipher will offer the safest data encryption based on known vulnerabilities and computational advancement?
- Which cryptographic cipher provides the best performance with limited resources?

## <a name="_toc93934385"></a>Research methods

During this research, I used the methods provided by the DOT-Framework (Development Oriented Triangulation). This research framework consists of three levels which are the "What," "Why," and the "How" of your research. The last step is divided into five strategies: Field, Library, Workshop, Lab, and Showroom. Each of these contains multiple methods. In order to research the main question, I have used the library, workshop, lab, and showroom strategies.

For the question "What are the best cryptographic ciphers currently used?" I used the library strategy with the available product analysis method to discover the best currently used cryptographic key ciphers. This discovery allows me to narrow down my research only to consider the most viable options available.

The workshop strategy will be applied for the following question, " Which cryptographic cipher will offer the safest data encryption based on known vulnerabilities?". I can use the "multi-criteria decision making" from the workshop to compare the different ciphers to decide which cipher has the least vulnerabilities and has the best chance to stand the test of time against computational advancement.

For the final question, "Which cryptographic cipher provides the best performance with limited resources?" I will combine the workshop, lab, and showroom strategies.

Firstly, by using the workshop strategy with the method "prototyping," I will create projects to implement the earlier determined cryptographic key ciphers. This prototype will be a proof of concept on working examples of these ciphers.

Secondly, I will use the lab strategy to validate that my prototype operates as intended using the component test method. To achieve this, I build component tests within my proof of concept to validate the outcome against the predetermined input with this method.

Finally, I will use the benchmark method from the showroom strategy. Within this method, I will use the previously built POC to benchmark the different ciphers against each other and compare their performance. In addition to these benchmarks, I can compare the results from the benchmark against the results from the first method (literature study) to validate the results.

### <a name="_toc93934386"></a>Triangulation

During this research, I have used multiple strategies and methods. The combination of strategies is used to cover all essential aspects evenly. According to the DOT Framework, these aspects consist of "fit" and "expertise" as well as "overview" and "certainty" (Bonestroo, et al., 2018).

I have combined methods with opposing goals using the library, workshop, and lab strategies. Using this "method triangulation," I can be confident that this research covers all essential aspects of the DOT framework mentioned above.

## <a name="_ref93892090"></a><a name="_toc93934387"></a>What are the best cryptographic ciphers currently used?

The findings throughout this sub-question are based upon the library strategy using the available product analyses method. The information found in this sub-question originates from Wikipedia, tech blogs, and Google scholar articles. According to these articles, the best and most common ciphers are 3DES, AES, RSA, Blowfish, and Twofish (Patil, 2016; Thakkar, 2021; Rimkienė, 2021).

Blowfish will not be considered in this sub-question due to Twofish being the successor of Blowfish.

### <a name="_toc93934388"></a>3DES (Triple Data Encryption Algorithm)

Triple Data Encryption Standard (3DES) is a type of computerized cryptography in which each data block is encrypted three times using block cipher algorithms. In Triple DES, the key size is raised to ensure more protection through encryption capabilities. Each block has 64 bits of data in it. Bundle keys are three keys with 56 bits each. With Triple-DES, all three keys are identical and contain 168 bits in key length.

Triple DES is advantageous since its key length is substantially longer than typical key lengths associated with other encryption schemes. However, the National Institute of Standards and Technology (NIST) updated the DES algorithm with the Advanced Encryption Standard (AES). As a result, the Triple-DES is deemed obsolete. It is, however, frequently used in conjunction with Triple DES. It is based on a single DES, but it is used in triplicate and includes three subkeys and key padding when necessary, such as when keys must be raised to 64 bits in length. Software, known for compatibility and flexibility, can be readily changed to include Triple-DES (Lake, What is 3DES encryption and how does DES work?, 2019; Wikipedia contributors, 2021; Triple DES, 2011).

### <a name="_toc93934389"></a>AES (Advanced Encryption Standard/Rijndael algorithm)

The Advanced Encryption Standard (AES), commonly known as Rijndael, is a specification for the encryption of electronic data developed by the National Institute of Standards and Technology (NIST) in the United States in 2001. The United States government has adopted AES. It takes the place of the Data Encryption Standard (DES), which was first released in 1977. The AES algorithm is a symmetric-key algorithm, which means that the same key is used to encrypt and decrypt data.

The "substitution–permutation network" is the foundation of the Rijndael (AES) algorithm. It consists of a sequence of connected processes, some of which require substituting specified outputs for inputs (substitutions) and others involving shuffling bits around (permutations).

Surprisingly, AES uses bytes rather than bits for all of its calculations. As a result, AES considers a plaintext block's 128 bits as 16 bytes. These 16 bytes are organized into four columns and four rows for matrix processing.

In contrast to DES, AES rounds are configurable and dependent on the key length. For 128-bit keys, AES employs 10 rounds, 12 rounds for 192-bit keys, and 14 rounds for 256-bit keys. A distinct 128-bit round key is used in each of these rounds (Lake, What is AES encryption and how does it work?, 2020; Rimkienė, 2021; S, What Is AES Encryption and How Does It Work?, 2021).

### <a name="_toc93934390"></a>RSA (Rivest-Shamir-Adleman)

RSA (Rivest–Shamir–Adleman) is a widely used public-key cryptosystem for secure data transmission.  The initials "RSA" stand for Ron Rivest, Adi Shamir, and Leonard Adleman, who first published the algorithm in 1977.

The encryption key is public and separate from the decryption key, which is kept hidden in a public-key cryptosystem (private). An RSA user generates and distributes a public key using two large prime numbers and an additional value. The prime numbers are a closely guarded secret. Messages can be encrypted by anyone using the public key, but only those who know the prime numbers can decode them.

The "factoring problem," which is the practical difficulty of factoring the product of two huge prime numbers, is at the heart of RSA's security. The RSA problem refers to the difficulty of breaking RSA encryption.  If a large enough key is utilized, there are no published methods to circumvent the system.

The RSA algorithm is a slow one. As a result, it is rarely used to encrypt user data directly. Instead, RSA is frequently used to transmit symmetric-key cryptography shared keys, which are then utilized for bulk encryption/decryption (Wikipedia contributors, 2022; Lake, What is RSA encryption and how does it work?, 2021; P, RSA | What is RSA? | Encryption Consulting, 2021).

### <a name="_toc93934391"></a>Twofish

Twofish is the successor of Blowfish, and it uses symmetric encryption with a single 256-bit key, just like its predecessor. This method is one of the quickest accessible encryption algorithms, and it works in both hardware and software. It was a finalist in a competition held by the National Institute of Technology and Science (NIST) to replace the Data Encryption Standard (DES) encryption algorithm. In the end, the Rijndael encryption algorithm was chosen over the Twofish encryption technique. Like Blowfish, this symmetric encryption algorithm employs a block cipher.

*Symmetric encryption* is a technique that encrypts and decrypts data using the same key. The encryption algorithm considers both the key and the plaintext data. The data is encrypted and converted to ciphertext, which can only be decrypted using this key. When the encrypted data is transferred to the recipient, the symmetric encryption key must be sent with or after the ciphertext. The key can then be used to decrypt the data (Wikipedia contributors, 2021; Khan, 2022; P, What is the Twofish encryption algorithm? | Encryption Consulting, 2021).

## <a name="_ref93922597"></a><a name="_toc93934392"></a>Which cryptographic cipher will offer the safest data encryption based on known vulnerabilities?

In order to answer this sub-question, I have created a table for the "multi-criteria decision making" method. This table will give a clear overview of how each cipher compares against the others. The ciphers that will be compared are based on the findings in the previous sub-question “What are the best cryptographic ciphers currently used?”.

The criteria of this table will be:

- Brute Force protection (unable to brute force within a reasonable amount of time)
- Meet-in-the-middle attack protection
- Birthday attack
- Type of algorithm (which type of algorithm they use symmetric/asymmetric)
- Block size
- Key sizes
- Year of first publishment (to determine how long the cipher already exists)

In addition, each significant known vulnerability of a cipher will be explained below this table. This explanation will help to understand the gravity of each vulnerability better. This understanding will assist in making a well-informed conclusion.

### <a name="_toc93934393"></a>Multi-criteria decision table

|                                          | **3DES**  | **AES**       | **RSA**    | **Twofish**   |
| :--------------------------------------- | :-------- | :------------ | :--------- | :------------ |
| **Brute Force protection**               | ✓         | ✓             | ✓          | ✓             |
| **Meet-in-the-middle attack protection** |           | ✓             | ✓          | ✓             |
| **Birthday attack**                      |           | ✓             | ✓          | ✓             |
| **Type of algorithm**                    | Symmetric | Symmetric     | Asymmetric | Symmetric     |
| **block size (in bits)**                 | 168       | 128           | 128        | 128           |
| **key sizes (in bits)**                  | 112, 168  | 128, 192, 256 | 128        | 128, 192, 256 |
| **Year of first publishment**            | 1978      | 1998          | 1977       | 1998          |

*Figure 1 multi-criteria decision table information gathered from (McGinnes, 2020; Paul Joseph, Krishna, & Arun, 2015; Rose, 2017; Wikipedia contributors, 2021; Advanced Encryption Standard)**

### <a name="_toc93934394"></a>Known vulnerabilities

#### <a name="_toc93934395"></a>3DES

##### *Birthday attack*

The name birthday attack originates from the birthday paradox in probability theory. The name is characterized by the fact that in a room of 23 or more individuals, the chances of two persons sharing the same birthday are greater than 50%. Many individuals find this perplexing, and the birthday paradox exemplifies why many people's instincts about probability (and danger) are incorrect. You are not attempting to match a particular birthdate; instead, you are attempting to match any birthday.

The idea of a birthday attack is to create hash collisions. Finding a specific input with a hash that collides with another input is tough, just as matching your birthdate is difficult. However, finding any input that makes a collision hash with any other input is easier due to the birthday attack; finding any input that creates a colliding hash with any other input is also easier (Chapter 4 - Domain 3: Security Engineering (Engineering and Management of Security), 2015; Wikipedia contributors, 2022).

##### *Meet-in-the-middle attack*

A Meet-in-the-Middle (MitMs) Attack is a type of cryptanalytic attack in which the attacker aids the attack by using a space or time tradeoff.

MitMs, in particular, aim to lessen the amount of difficulty required to assault in its original form. MitMs can be as simple as separating the target message into two pieces and addressing each separately. For example, it could simply convert an attack that takes X amount of time into one that takes Y time and Z space. The goal is to drastically reduce the time and effort required to undertake a brute-force attack.

Man-in-the-middle (MITM) and meet-in-the-middle (MitMs) are frequently confused. The attacker's placement distinguishes the "man" variant between the two users, eavesdropping or manipulating the dialogue to carry out an assault. The "meet" form is not interactive, and the phrase "meet" means "let's meet in the middle" or "find middle ground" by, for example, half the apparent time necessary to crack encryption when the problem is first encountered (HYPR, n.d.; Wikipedia contributors, 2021).

#### <a name="_toc93934396"></a>AES

##### *Biclique attack*

A biclique attack is a cryptanalysis variation of the meet-in-the-middle (MITM) approach. It employs a biclique structure to increase the number of rounds the MITM attack can attack. Biclique cryptanalysis applies to both block ciphers and (iterated) hash-functions because it is based on MITM attacks. Both full AES and full IDEA have been broken using biclique attacks, but with just a slight advantage over brute force.

The biclique attack is still the finest publicly known single-key attack on AES (as of April 2019). Moreover, it is the only publicly known single-key AES attack that goes after all of the rounds. In previous attacks, reduced round varieties were targeted (typically variants reduced to 7 or 8 rounds).

Because the attack's computational complexity is 2<sup>126.1</sup>, it is only a theoretical attack, which means AES' security has not been compromised, and its use is still reasonably safe (Wikipedia contributors, 2020).

#### <a name="_toc93934397"></a>RSA

##### *Oracle attack*

An oracle attack makes use of a weakness in a system that may be exploited as an "oracle" to provide attackers a simple go/no go indicator of how near they are to their objectives. The attacker can combine the oracle with a systematic search of the problematic space to complete their attack. A small statistic correlation with an accurate go/no go result could often be enough for a systematic automated attack.

The use of adaptive data compression on a mixture of chosen plaintext and unknown plaintext in a compression oracle attack can result in content-sensitive variations in the compressed text's length that can be identified even when the compressed text's content is then encrypted. This can be used in protocol attacks to detect whether the injected known plaintext is slightly similar to the unknown content of the private part of a message, drastically simplifying the search for a match for the secret text.

This attack is based on side channels that leak information about the plaintext. This can be countered by using OAEP (Optimal asymmetric encryption padding). Due to the addition of padding that counters this form of attack, RSA is still used today as a form of asymmetric key encryption. (Wikipedia contributors, 2021; HAKIN9, 2012).

#### <a name="_toc93934398"></a>Twofish

##### *Impossible differential cryptanalysis*

A chosen-plaintext attack that extends differential cryptanalysis is known as an impossible differential attack. In 1998, the impossible differential attack was defined, and it proved to break 31 of the 32 rounds of Skipjack. Furthermore, the attack proved to be a generic tool for cryptanalysis. It was used to improve the best-known attacks against strong and long-standing block ciphers such as IDEA and Khufu, cracking round-reduced versions of these ciphers. The two primary innovations were the missin-the-middle strategy for constructing impossible events inside ciphers and the sieving technique for filtering incorrect key guesses (Kim, 2003; Wikipedia contributors, 2021).

## <a name="_toc93934399"></a>Which cryptographic cipher provides the best performance with limited resources?

### <a name="_toc93934400"></a>Proof of Concept

In order to test out the working of each cipher, I developed a proof of concept from the workshop strategy. Within this POC, there are three projects. One for each of the different ciphers. Sadly, I could not create a POC for this cipher due to the lack of available information on creating the Twofish cipher in C #

Below you will find screenshots of the code and the application of the POC.

#### <a name="_toc93934404"></a>AES

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.003.png)

*Figure 2 Encryption function from AES POC*

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.004.png)

*Figure 3 Decryption function from AES POC*

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.005.png)

*Figure 4 Main code to run both encryption and decryption to determine the performance and memory used, from AES POC*

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.006.png)

*Figure 5 Standard of Writing the results at the end of the program in order to note the results*

#### <a name="_toc93934405"></a>RSA

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.007.png)

*Figure 6 Encryption and decryption functions of the RSA POC*

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.008.png)

*Figure 7 Main code to run both encryption and decryption to determine the performance and memory used, from RSA POC*

#### <a name="_toc93934406"></a>3DES

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.009.png)

*Figure 8 Encryption function of the 3DES POC*

![A picture containing text, screenshot, indoor Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.010.png)

*Figure 9 UI after one of the cipher's has their benchmark*

![](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.011.png)

*Figure 10 Decryption function of the 3DES POC*

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.012.png)

*Figure 11 Main code to run both encryption and decryption to determine the performance and memory used, from AES POC*

### <a name="_toc93934407"></a>Component tests

In order to make sure that these proof of concepts would function as they were designed to; I have created a component tests based on the lab strategy.

These tests will test each cipher's POC functions. In addition, these tests will clarify whether the code and its results can be seen as reliable. For example, I noticed that the RSA implementation crashes if the string exceeds 400 characters by running these tests. In contrast, the other POC's did not experience the same issue.

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.013.png)

*Figure 12 Component tests of the RSA POC*

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.014.png)

*Figure 13 Component tests of the AES POC*

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.015.png)

*Figure 14 Component tests of the 3DES POC*

![Text Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.016.png)

*Figure 15 All component tests succeeding in the test explorer*

In figure 15 it showcases the component tests which have been written for this POC. These component tests increased the confidence that the code performed without any hidden bugs, which would not be noticed until too late.

### <a name="_toc93934408"></a>Benchmark test

In order to find the best cipher based upon its performance, I have created benchmark tests based on the showroom strategy.

All the benchmarks listed below are from the proof of concepts shown above. In order to get the best results, each cipher ran a total of ten thousand times. By running it ten thousand times, there is less chance of luck playing a role in the performance. Therefore, to increase the confidence of this benchmark, I ran each benchmark five times. Afterward, the average based on the five runs is calculated to get the best representation of each cipher's performance.

Also, in addition to the five test runs to normalize the data. The five tests will be performed on a "fast" and "slow" device. This will showcase the amount that hardware can influence the performance. The "slow" device is an older laptop without the power cord and power-saving mode. This will ensure CPU throttling, resulting in slower speeds for the laptop to perform actions. On the other hand, the "fast" device will be run on a high-end desktop.

#### <a name="_toc93934409"></a>Benchmark results

| <p>***AES-128*** </p><p>***On a slow device***</p> | <p>***Encryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Decryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Memory usage***</p><p>***(In kilobytes)***</p> |
| -------------------------------------------------: | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------- |
|                                       ***Test 1*** | 168 ms                                                       | 102 ms                                                       | 6,33 KB                                              |
|                                       ***Test 2*** | 255 ms                                                       | 120 ms                                                       | 6,02 KB                                              |
|                                       ***Test 3*** | 177 ms                                                       | 73 ms                                                        | 6,34 KB                                              |
|                                       ***Test 4*** | 160 ms                                                       | 71 ms                                                        | 6,36 KB                                              |
|                                       ***Test 5*** | 180 ms                                                       | 122 ms                                                       | 6,28 KB                                              |
|                                      ***Average*** | ***188 ms***                                                 | ***98 ms***                                                  | ***6,27 KB***                                        |

*Table 1 AES-128 benchmark on a slow device*

| <p>***AES-128*** </p><p>***On a fast device***</p> | <p>***Encryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Decryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Memory usage***</p><p>***(In kilobytes)***</p> |
| -------------------------------------------------: | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------- |
|                                       ***Test 1*** | 141 ms                                                       | 82 ms                                                        | 7,37 KB                                              |
|                                       ***Test 2*** | 141 ms                                                       | 76 ms                                                        | 7,58 KB                                              |
|                                       ***Test 3*** | 152 ms                                                       | 75 ms                                                        | 7,37 KB                                              |
|                                       ***Test 4*** | 167 ms                                                       | 62 ms                                                        | 7,45 KB                                              |
|                                       ***Test 5*** | 160 ms                                                       | 73 ms                                                        | 7,56 KB                                              |
|                                      ***Average*** | ***152 ms***                                                 | ***74 ms***                                                  | ***7,47 KB***                                        |

*Table 2 AES-128 benchmark on a fast device*

| <p>***RSA***</p><p>***On a slow device***</p> | <p>***Encryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Decryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Memory usage***</p><p>***(In kilobytes)***</p> |
| --------------------------------------------: | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------- |
|                                  ***Test 1*** | 4960 ms                                                      | 59199 ms                                                     | 5,73KB                                               |
|                                  ***Test 2*** | 5530 ms                                                      | 55082 ms                                                     | 5,55 KB                                              |
|                                  ***Test 3*** | 4640 ms                                                      | 52763 ms                                                     | 5,54 KB                                              |
|                                  ***Test 4*** | 4785 ms                                                      | 51813 ms                                                     | 5,69 KB                                              |
|                                  ***Test 5*** | 4741 ms                                                      | 51808 ms                                                     | 5,60 KB                                              |
|                                 ***Average*** | ***4931 ms***                                                | ***54133 ms***                                               | ***5,62 KB***                                        |

*Table 3 RSA benchmark on a slow device*

| <p>***RSA***</p><p>***On a fast device***</p> | <p>***Encryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Decryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Memory usage***</p><p>***(In kilobytes)***</p> |
| --------------------------------------------: | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------- |
|                                  ***Test 1*** | 5407 ms                                                      | 23296 ms                                                     | 6,69 KB                                              |
|                                  ***Test 2*** | 4800 ms                                                      | 24249 ms                                                     | 6,79 KB                                              |
|                                  ***Test 3*** | 5530 ms                                                      | 22987 ms                                                     | 6,89 KB                                              |
|                                  ***Test 4*** | 5546 ms                                                      | 24140 ms                                                     | 6,75 KB                                              |
|                                  ***Test 5*** | 5574 ms                                                      | 24097 ms                                                     | 6,75 KB                                              |
|                                 ***Average*** | ***5371 ms***                                                | ***23754 ms***                                               | ***6,77 KB***                                        |

*Table 4 RSA benchmark on a fast device*

| <p>***3DES***</p><p>***On a slow device***</p> | <p>***Encryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Decryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Memory usage***</p><p>***(In kilobytes)***</p> |
| ---------------------------------------------: | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------- |
|                                   ***Test 1*** | 156 ms                                                       | 121 ms                                                       | 6,21 KB                                              |
|                                   ***Test 2*** | 154 ms                                                       | 124 ms                                                       | 6,23 KB                                              |
|                                   ***Test 3*** | 157 ms                                                       | 140 ms                                                       | 6,22 KB                                              |
|                                   ***Test 4*** | 164 ms                                                       | 134 ms                                                       | 6,33 KB                                              |
|                                   ***Test 5*** | 172 ms                                                       | 137 ms                                                       | 6,28 KB                                              |
|                                  ***Average*** | ***161 ms***                                                 | ***131 ms***                                                 | ***6,25 KB***                                        |

*Table 5 3DES benchmark on a slow device*

| <p>***3DES***</p><p>***On a fast device***</p> | <p>***Encryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Decryption speed*** </p><p>***(In milliseconds)***</p> | <p>***Memory usage***</p><p>***(In kilobytes)***</p> |
| ---------------------------------------------: | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------- |
|                                   ***Test 1*** | 157 ms                                                       | 106 ms                                                       | 7,44 KB                                              |
|                                   ***Test 2*** | 149 ms                                                       | 109 ms                                                       | 7,48 KB                                              |
|                                   ***Test 3*** | 155 ms                                                       | 100 ms                                                       | 7,26 KB                                              |
|                                   ***Test 4*** | 140 ms                                                       | 98 ms                                                        | 7,37 KB                                              |
|                                   ***Test 5*** | 139 ms                                                       | 113 ms                                                       | 7,27 KB                                              |
|                                  ***Average*** | ***148 ms***                                                 | ***148 ms***                                                 | ***7,36 KB***                                        |

*Table 6 3DES benchmark on a fast device*

### <a name="_toc93934410"></a>Benchmark results summarized

The figure below shows the averages of each cipher's benchmark scores. Since the test provided accurate data, we can determine the speed at each encryption and decryption process by dividing the speed by ten thousand. Again, these results are shown in microseconds.

|                             ***Averages of all benchmarks*** | ***AES slow device*** | ***AES fast device*** | ***RSA slow device*** | ***RSA fast device*** | ***3DES slow device*** | ***3DES fast device*** |
| -----------------------------------------------------------: | :-------------------- | :-------------------- | :-------------------- | :-------------------- | :--------------------- | :--------------------- |
| <p>***Encryption speed*** </p><p>***(In microseconds)***</p> | 16,8 µs               | 15,2 µs               | 493,1 µs              | 537,1 µs              | 16,1 µs                | 14,8 µs                |
| <p>***Decryption speed*** </p><p>***(In microseconds)***</p> | 9,8 µs                | 7,4 µs                | 5413,3 µs             | 2375,4 µs             | 13,1 µs                | 14,8 µs                |
|         <p>***Memory usage***</p><p>***(In kilobytes)***</p> | 6,27 KB               | 7,47 KB               | 5,62 KB               | 6,77 KB               | 6,25 KB                | 7,36 KB                |

*Table 7 The average scores of each ciphers' benchmark results. Which have been divided by 1000x in order to showcase the performance of a single encryption/decryption.*

``**Twofish vs AES-128**

![Table Description automatically generated](/image/research_doc_img/Aspose.Words.2840105d-d0b7-4a2d-bff0-f64100021b92.017.png)

*Table 8 Decryption time in milliseconds for various files (Debasish, Saptarshi, & Sanju, 2014)**

Due to not being able to create a proof of concept for Twofish, I searched through multiple research papers to find a paper that compares or measures the performance of Twofish. Using table seven as a representation of how a Twofish cipher would have performed, the cipher can still be compared against the other ciphers to answer the central question of this research.

## <a name="_toc93934411"></a>Conclusion

Based on the research conducted, it shows that in terms of security level AES and Twofish are both the best options. This is because both are practically unbreakable and, therefore, great choices. In comparison, 3DES is not safe enough to be confidently used in modern applications based on the number of vulnerabilities. On the other hand, RSA appears to be safe as long as padding is used.

The data collected from the benchmark creates a good comparison of the different ciphers' performance. There are obvious strengths and weaknesses. For example, due to RSA being an asymmetric algorithm, the decryption speed is enormous compared to the others. However, even when running on more potent hardware, it lacked heavily compared to the competition.

The best scoring ciphers are AES and 3DES. These two ciphers delivered consistent fast speeds. On the other hand, RSA, as mentioned, does not compare well due to it not being a symmetric cipher. Finally, the Twofish cipher performed the worst of the symmetric cipher. On the other hand, 3DES performed on par with AES, which means Twofish would not come close to either.

Based on the results of both sub-questions, the best data encryption cipher offering the best combination between security and performance for devices with limited resources is AES. This conclusion has been drawn due to AES ending on top in both the security sub-question and performance benchmarks. AES does not only provide a practically unbreakable encryption cipher. It also performs excellent while being conservative with the amount of memory used. It is no wonder that the Rijndael algorithm won the AES competition and became the current standard data encryption.

## <a name="_toc93934412"></a>References

Bonestroo, W., Meesters, M., Niels, R., Schagen, J., Henneke, L., & Turnhout, K. v. (2018). *Methods*. Retrieved 01 23, 2022, from ictsearchmethods: <https://ictresearchmethods.nl/>

Chapter 4 - Domain 3: Security Engineering (Engineering and Management of Security). (2015). In E. Conrad, S. Misenar, & J. Feldman, *CISSP Study Guide (Third Edition)* (pp. 103-217). Retrieved from sciencedirect: <https://www.sciencedirect.com/topics/computer-science/birthday-attack>

Debasish, R., Saptarshi, P., & Sanju, D. (2014). A comparative study of AES, Blowfish, Two fish and serpent cryptography algorithms. *Elixir*, 25218-25219.

HAKIN9. (2012). *DEFEND YOURSELF! HANDS-ON CRYPTOGRAPHY.*

HYPR. (n.d.). *What is a Meet-in-the-Middle (MitM) Attack? | Encyclopedia*. Retrieved from HYPR: <https://www.hypr.com/meet-in-the-middle-mitm-attack/>

Khan, S. (2022, 01 23). *What is the Twofish encryption algorithm?* Retrieved from Educative: Interactive Courses for Software Developers: <https://www.educative.io/edpresso/what-is-the-twofish-encryption-algorithm>

Kim, J. (2003, 12 08). *Impossible Differential Cryptanalysis for Block Cipher Structures*. Retrieved from SpringerLink: <https://link.springer.com/chapter/10.1007/978-3-540-24582-7_6>

Lake, J. (2019, 02 20). *What is 3DES encryption and how does DES work?* Retrieved from Comparitech: <https://www.comparitech.com/blog/information-security/3des-encryption/>

Lake, J. (2020, 02 17). *What is AES encryption and how does it work?* Retrieved from Comparitech: <https://www.comparitech.com/blog/information-security/what-is-aes-encryption/>

Lake, J. (2021, 03 18). *What is RSA encryption and how does it work?* Retrieved from Comparitech: <https://www.comparitech.com/blog/information-security/rsa-encryption/>

McGinnes, J. (2020, 12 22). *Blog - Is Triple DES Secure?* Retrieved from cryptosense: <https://cryptosense.com/blog/is-triple-des-secure>

Nazeh Abdul Wahid, M., Ali, A., Esparham, B., & Marwan, M. (2018, 08 10). *A Comparison of Cryptographic Algorithms: DES, 3DES, AES, RSA and Blowfish for Guessing Attacks Prevention.* Retrieved from symbiosisonlinepublishing: <https://symbiosisonlinepublishing.com/computer-science-technology/computerscience-information-technology32.php>

P. (2021, 05 20). *RSA | What is RSA? | Encryption Consulting*. Retrieved from Encryption Consulting | Encryption Consulting: <https://www.encryptionconsulting.com/education-center/what-is-rsa/>

P. (2021, 05 20). *What is the Twofish encryption algorithm? | Encryption Consulting*. Retrieved from Encryption Consulting | Encryption Consulting: <https://www.encryptionconsulting.com/education-center/what-is-twofish/>

Patil, P. N. (2016, 01 01). *A Comprehensive Evaluation of Cryptographic Algorithms: DES, 3DES, AES, RSA and Blowfish*. Retrieved 01 23, 2022, from ScienceDirect: <https://www.sciencedirect.com/science/article/pii/S1877050916001101>

Paul Joseph, D., Krishna, M., & Arun, K. (2015, 05). Cognitive Analytics and Comparison of Symmetric and Asymmetric Cryptography Algorithms. *International Journal of Advanced Research in Computer Science, 6*(3), 51-56. Retrieved from <https://www.researchgate.net/profile/D-Paul-Joseph/publication/308164900_Cognitive_Analytics_and_Comparison_of_Symmetric_and_Asymmetric_Cryptography_Algorithms/links/57dbc41108ae72d72ea4df86/Cognitive-Analytics-and-Comparison-of-Symmetric-and-Asymmetric-C>

Preetha, M., & Nithya, M. (2013). a study and performance analysis of RSA algorithm. *International Journal of Computer Science and Mobile Computing*, 126-139.

Ratnadewi, R., Adhie, Y., Hutama, J., Wijaya, C., & Wijaya, D. (2017). Implementation and performance analysis of AES-128 cryptography method. *Wiete*, 178-183.

Rimkienė, R. (2021, 09 28). *What is AES encryption and how does it work?* Retrieved from CyberNews: <https://cybernews.com/resources/what-is-aes-encryption/>

Rose, E. (2017, 04 26). *how secure is Twofish really?* Retrieved from Cryptography Stack Exchange: <https://crypto.stackexchange.com/questions/46951/how-secure-is-twofish-really>

S. (2021, 09 18). *What Is AES Encryption and How Does It Work?* Retrieved from Simplilearn.com: <https://www.simplilearn.com/tutorials/cryptography-tutorial/aes-encryption>

S. (2021, 12 29). *What Is Data Encryption: Types, Algorithms, Techniques and Methods*. Retrieved 01 23, 2022, from Simplilearn.com: <https://www.simplilearn.com/data-encryption-methods-article>

Thakkar, J. (2021, 03 11). *Types of Encryption: 5 Encryption Algorithms & How to Choose the Right One*. Retrieved 01 23, 2022, from Hashed Out by The SSL Store™: <https://www.thesslstore.com/blog/types-of-encryption-encryption-algorithms-how-to-choose-the-right-one/>

*Triple DES*. (2011, 08 18). Retrieved 01 23, 2022, from Techopedia.com: <https://www.techopedia.com/definition/4144/triple-des>

Wikipedia contributors. (2020, 02 29). *Biclique attack*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/Biclique_attack>

Wikipedia contributors. (2021, 11 03). *Advanced Encryption Standard*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/Advanced_Encryption_Standard>

Wikipedia contributors. (2021, 11 03). *Advanced Encryption Standard*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/Advanced_Encryption_Standard>

Wikipedia contributors. (2021, 10 20). *Cipher security summary*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/Cipher_security_summary>

Wikipedia contributors. (2021, 01 17). *Impossible differential cryptanalysis*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/Impossible_differential_cryptanalysis>

Wikipedia contributors. (2021, 12 27). *Meet-in-the-middle attack*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/Meet-in-the-middle_attack>

Wikipedia contributors. (2021, 09 22). *Oracle attack*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/Oracle_attack>

Wikipedia contributors. (2021, 12 31). *Triple DES*. Retrieved 01 23, 2022, from Wikipedia: <https://en.wikipedia.org/wiki/Triple_DES>

Wikipedia contributors. (2021, 08 17). *Twofish*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/Twofish>

Wikipedia contributors. (2022, 01 13). *Birthday attack*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/Birthday_attack>

Wikipedia contributors. (2022, 01 16). *RSA (cryptosystem)*. Retrieved from Wikipedia: <https://en.wikipedia.org/wiki/RSA_(cryptosystem)>
