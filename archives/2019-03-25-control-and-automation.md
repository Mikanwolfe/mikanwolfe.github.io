---
layout: post
title: The Mathematics of Control Systems
date: 2019-03-25
excerpt: "Mason's Gain, etc."
feature: https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg
tags: [engineering, robotics, control systems, maths]
comments: true
---

A lot of mathematics goes into Control Systems Engineering. The following post will only be a brief summary of certain concepts related to Control and Automation of such systems and no attempt will be made to justify or clarify anything written here. For further reading, check out <u>Modern Control Engineering</u> by Katsuhiko Ogata.

## Signal Flow Graphs

Signal flow graphs are the next-step past block diagrams. Formally, they represent sets of similtaneous equations and interactions between them. On the other hand, they're simply a more convenient method of writing block diagrams as it allows analysis with Mason's Gain.

Formally, the definitions are:

* **Node:** A point representing a variable or a signal
  * **Input Node / Source:** Only outgoing branches.
  * **Output Node / Sink:** Only incoming branches.
  * **Mixed Node:** guess.
* **Branch:** Direction (has direction) line joining two nodes, normally has function associated with it.
  * **Tramisttance:** The transfer function (gain, either real or complex) of a branch.
* **Path:** Any route following the direction of the branch arrows through connected nodes. Does not include loops, hence, only forward branches are followed.
* **Loop:** lit. loop. A closed path.
* **Loop Gain:** Product of branch transmittances.

## Mason's gain


$$
P  = \frac{1}{\Delta}\sum_kP_k \Delta_k
$$

Where \(P_k\) is the path gain (multiplied transmittances) of any possible path.