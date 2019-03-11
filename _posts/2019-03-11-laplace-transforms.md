---
layout: post
title: Using Laplace in Control Systems Engineering
date: 2019-03-10
excerpt: "The theory behind Laplace and Inverse Laplace transforms and the application to control systems"
tags: [maths, math, laplace, engineering]
comments: true
---

## Modelling Dynamic Systems with Mathematics

Using mathematics to model dynamic systems is a fundemental part of control systems engineering. It allows us to break down complex mechanical, thermal, or even biological systems into a model we can use to accurately predict both the current and possibly future "dynamics" of a system. 

They are often comprised of differential equations and therefore, are difficult to calculate under normal circumstances. This is where the concept of Laplace Transforms comes in.

Leaving the theory of Laplacian transforms for another day, they allow us to simplify the mathematics used in these highly integrated systems and come to more sane results and conclusions.

### Definitions

A **Linear System** is defined if the principle of superposition can be applied. The simple explanation is that a system is called linear if you can add the parts together such that \\(  F(x_1 + x_2) = F(x_1) + F(x_2))\\).



## Laplace for Engineering

##### Shortcut for inverse laplace transform

For a given function in the $s​$-domain:
$$
y(s) = \frac{s+4}{s^2+4s+3}
$$

Finding the limit to infinity will provide an accurate representation of the final steady-state of the system such that:

$$
\lim_{t \to \infty} y(t) = y(\infty) = \lim_{s \to 0}sY(s) \\
= \lim_{s \to0}s\frac{s+4}{s^2 +4s +3} \\
= 0 \cdot \frac{4}{3}\\ = 0\\
\therefore \lim_{y \to \infty}y(t) = 0
$$

This will probably get more attention later on.