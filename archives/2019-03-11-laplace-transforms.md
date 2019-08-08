---
layout: post
title: Laplace, Transfer Functions, and a healthy dose of block diagrams.
date: 2019-03-11
excerpt: "Using Laplace to understand block diagrams and the theory behind basic control systems"
tags: [maths, laplace, engineering, block diagrams, control, system]
comments: true
---

## Modelling Dynamic Systems with Mathematics

Using mathematics to model dynamic systems is a fundemental part of control systems engineering. It allows us to break down complex mechanical, thermal, or even biological systems into a model we can use to accurately predict both the current and possibly future "dynamics" of a system. 

They are often comprised of differential equations and therefore, are difficult to calculate under normal circumstances. This is where the concept of Laplace Transforms comes in.

Leaving the theory of Laplacian transforms for another day, they allow us to simplify the mathematics used in these highly integrated systems and come to more sane results and conclusions.

#### Definitions

A **Linear System** is defined if the principle of superposition can be applied. The simple explanation is that a system is called linear if you can add the parts together such that \\(  F(x_1 + x_2) = F(x_1) + F(x_2)\\).

A **Linear time-invariant (and varying) systems** are linear differential equations if the coefficients are constants. 

## Transfer Functions

TODO:  What transfer functions are used for

The transfer function of a linear, time-invariant, diffential equation system, is defined as:

$$
G(S) = \frac{L[Output]}{L[Input]} , \ given\ that \ all \ initial \ conditions \ are \ zero
$$

Transfer functions relate the input to the output and doesn't necessarily relate to the nature or magnitude of the input. Transfer functions are intrinsic properties of the system itself, a good example of this is the *Gain* of an Op-Amp.

### Block Diagrams

Block diagrams are used to represent the flow of information within a system. The functions are performed by blocks with defined inputs and outputs alongside the transfer functions used to manipulate the flowing signal.

[basic block diagram parts with sum node and block node]

[basic negative feedback loop system]

[example of float as a two-position on-off control system]

### PID Control

PID Control stands for Proportional, Integral, and Derivative control. In a control system, they are defined as:

**Proportional Control:**


$$
u(t) = K_pe(t) \qquad \frac{U(s)}{E(s)}=K_p
$$


**Integral Control:**

$$
u(t) = K_i\int_0^te(t)dt \qquad \frac{U(s)}{E(s)}=\frac{K_i}{s}
$$


**Proportional plus Derivative Control:**

$$
u(t) = K_pe(t)+K_pT_d\frac{de(t)}{dt} \qquad \frac{U(s)}{E(s)}K_p(1+T_ds)
$$


### Open Loop and Feed Forward Transfer functions

Open-Loop transfer functions:

$$
G(s)H(s)
$$

Feed-Forward transfer functions:

$$
G(s)
$$

Closed-Loop transfer functions:

$$
\frac{C(s)}{R(s)}=\frac{G(s)}{1+G(s)+H(s)}
$$

[Closed Loop diagram]

#### Closed-Loop System subjected to a disturbance

[Closed loop diagram with disturbance]

Given the system, the equation governing the system would be:

$$
\frac{C_D(s)}{D(s)}=\frac{G_s(s)}{1+G_1(s)G_2(s)H(s)}
$$

The effects of the disturbance can be suppressed as long as:

$$
G_1(s)G_2(s)H(s) >> 1
$$

Therefore the response in such a situation would be given by:

$$
\frac{C_R(s)}{R(s)} = \frac{G_1(s)G_2(s)}{1+G_1(s)G_2(s)H(s)}\approx \frac1{H(s)} \qquad if \qquad G_1(s)G_2(s)H(s)>>1
$$

This implies that any variation or disturbance would not affect the the transfer function as the output will closely follow the input.



### Procedure for drawing a block diagram

1. Write the differential equation of the system
2. Use the Laplace Transform assuming zero initial conditions
3. For each Laplace Transform represent the term with a single block
4. Assemble and simplify the block diagram

### Block Diagram Reduction

Lots of images here, will update at a later date.