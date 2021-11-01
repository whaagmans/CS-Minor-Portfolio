---
title: Cryptography
---

## Cartographical calculation

### ALU (Arithmetic Logic Unit)

An arithmetic logic unit (ALU) is a digital circuit used to perform arithmetic and logic operations. It represents the fundamental building block of the central processing unit (CPU) of a computer. Modern CPUs contain very powerful and complex ALUs. In addition to ALUs, modern CPUs contain a control unit (CU).

One or more ALUs load data from input registers to accomplish the majority of a CPU's operations. A register is a little piece of storage that comes with a CPU. The ALU is told what operation to do on the data by the control unit, and the result is stored in an output register by the ALU. The data is moved between these registers, the ALU, and memory by the control unit.

### Factorial prime

The mathematical issue of prime factorization (or integer factorization) is frequently employed to secure public-key encryption systems. The use of very big semi-primes (the result of multiplying two prime integers) as the number ensuring the encryption is a widespread practice. They'd have to find the prime factorization of the huge semi-prime number — that is, two or more **prime numbers** multiplied together yield the original number – in order to break it.

First, a refresher in elementary math. What is the definition of a prime number? Any number that is evenly divided only by 1 and itself is called a prime number. 2, 3, 5, 7, 11, 13, 17, and so on are prime numbers. There exists an infinite number of prime numbers (numbers that are never divisible by something). Furthermore, every number has exactly one prime factorization — that is, any number may be obtained by multiplying a set of prime numbers.

It's relatively simple to generate a huge prime number in terms of computation. You start with a large number and then work backwards to see if it's divisible by anything. As a result, we can combine our two prime numbers. Then we multiply them all together - that's all. For a short illustration, consider the following primes:  **19 x 31 = 589**

Okay, the result of multiplying these two primes together is 589. Multiplying two integers is, after all, a mathematically simple task that scales nicely when dealing with larger numbers. **Factoring** numbers, on the other hand, is a computationally tough issue. When dealing with smaller numbers, it's simple, but when dealing with enormous numbers, it can take computers days, months, years, or even centuries to solve. Factoring numbers is a trial-and-error procedure with no fast shortcuts. You'd have to attempt all of the prime numbers that are smaller than 589 until you discovered which prime numbers add up to 589 when multiplied together. This works for smaller numbers, but when dealing with really large numbers, the number of possible numbers to compare gets so large that even current computers are unable to do so in a reasonable length of time.

## Diffie Hellman

Diffie-Hellman is a method of generating a shared secret between two persons that cannot be seen by watching their communication. It's vital to note that throughout the key exchange, you're not sharing information; instead, you're working together to create a key.

This is especially handy since you can use it to build an encryption key with someone and then use that key to encrypt your communication. Even if the data is logged and studied afterward, there's no way to find out what the key was, even if the exchanges that generated it were visible. This is how absolute forward secrecy is achieved. Nobody can break in later by studying the traffic because the key was never kept, sent, or made accessible anywhere.

It works in a rather straightforward manner. In that a trapdoor function is employed, most of the math is similar to that seen in public-key cryptography. While the discrete logarithm problem (the *x<sup>y</sup> mod p* business) is generally utilized, the general procedure can be adjusted to use elliptic curve cryptography instead.

However, despite the fact that it is based on the same principles as public-key cryptography, it is not asymmetric cryptography because no data is encrypted or decrypted during the exchange. It is, nevertheless, an important building piece that served as the foundation for asymmetric cryptography.

### Diffie Hellman key exchange

The simplest and the original implementation of the protocol uses the multiplicative group of integers modulo p, where p is prime, and g is a primitive root modulo p. These two values are chosen in this way to ensure that the resulting shared secret can take on any value from 1 to p–1. Here is an example of the protocol, with non-secret values in blue, and secret values in red.<sup>[(1)](#references)</sup>

1. Alice and Bob publicly agree to use a modulus p = 23 and base g = 5 (which is a primitive root modulo 23).
2. Alice chooses a secret integer a = 4, then sends Bob A = ga mod p
    - A = 54 mod 23 = 4
3. Bob chooses a secret integer b = 3, then sends Alice B = gb mod p
    - B = 53 mod 23 = 10
4. Alice computes s = Ba mod p
    - s = 104 mod 23 = 18
5. Bob computes s = Ab mod p
    - s = 43 mod 23 = 18
6. Alice and Bob now share a secret (the number 18).

## Power usage for decrypting passwords low when has key, yet lot of effort without key

## freq distribution

## AES + block cipher

## 3DES

## Rijndaal block cipher

## AES algorithm process

## Block cipher based CBC (Cipher Block chaining)

## ESSIV

## CMM (Cipher block chaining) message authentication

## CMM Integrity to confidentiality

## Galios/counter mode: adds authentication to CBC

## GCM: more efficiency and adds integrity to confidentiality

## AES against bruteforce

## References

1. Wikipedia contributors. (2021, October 31). Diffie–Hellman key exchange. Wikipedia. Retrieved November 1, 2021, from [https://en.wikipedia.org/wiki/Diffie-Hellman_key_exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
