---
layout: post
title: Control Systems Engineering and that Laplace Guy
date: 2019-03-10
excerpt: "A test for mathjax"
tags: [maths, math, laplace, engineering]
comments: true
---


## Laplace for Engineering

##### Shortcut for inverse laplace transform

For a given function in the $s$-domain:
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