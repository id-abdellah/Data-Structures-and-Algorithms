# Algorithme Analysis

there are multiple ways to solve one problem, but how do we analys wich one of them is the most efficient algorithm?

Generally when we talk about performance, we use an absolute mesure.

if i can run 100m in 12 second, i'am faster than someone who takes 15s

# Analysis

the absolut running time of an algorithm cannot be predicted, sinc it depends on a number of factors:

+ Programming language used to impelment the algorithm
+ The computer the programme runs on
+ Other programms running at the same time
+ Quality of the operating system

# Evaluation 

we evaluate the performance of an algorithm <u>in terms of its input size</u>

**there is two types of evaluation**:

+ **Time Complixity:** Amount of time taken by an algorithm to run, as a function of input size
+ **Space Complixity:** Amount of memory taken by an algorithm to run, as a function of input size

By evaluating against the input size, the analysis is not only machine independent but the comparison is also more apropriate.

There is no one solution that works every single time, it is always good to know multiple way to solve a problem and use the best solution given you constraints.

*if your app need to be very quick an has plenty of memory to work with, then you don't have to wory about space complixity*

*if you have very little memory to work with, then you should pick a solution that is relatively slower but needs less space*


# How to represent the time and space complixity of an algorithm

using **[Asymptotic notations](https://www.codecademy.com/learn/cspath-asymptotic-notation/modules/cspath-asymptotic-notation/cheatsheet)**

- Are mathematical tools to represent time and space complixity

**There are mainly three asymptotic notations:**

+ Bit-O Notation (O-notation)   -> for Worst Case Complixity
+ Omega Notation (Ω-notation)   -> Best Case Complixity
+ Theta Notation (Θ-notation)   -> Average Case Complixity

