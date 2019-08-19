---
layout: post
title: "Mechatronics Project Part 2"
date: 2019-08-19
excerpt: "The start of a series of blog posts relating to the Robotic Arm Mechatronics Project"
feature: https://nekox.net/assets/img/mechatronics-part-2/67960546_2433543870251242_6139349436859416576_n.jpg
tags: [University]
comments: true
---

# Mechatronics Project: Robotic Arm

**Part 2**

---

![Nekox Mechatronics Banner](https://nekox.net/assets/img/mechatronics-part-1/mechatronics_banner.jpg)



The mechatronics project is will underway now and we've received some new insights into the design of the device as well as the components in a nice big tub. This post will largely focus on the start of the mechatronics project along with some comments on design ideas and how the system works.

![A scene of the Tub](https://nekox.net/assets/img/mechatronics-part-2/![Local disk filling up; hard drive almost empty](https://nekox.net/assets/img/mechatronics-part-2/explorer_BEGEr4YKbT.png))

---

## LabVIEW and MyRIO

The mechatronics arm will be programmed using LabVIEW software and the myRIO development package. A quick and dirty explanation is as follows:

* **LabVIEW:** Laboratory Virtual Instrument Engineering Workbench; discount Simulink.
* **myRIO:** My Reconfigurable Input/Output Embedded Device; like Mac to Android: overpriced, does the same thing, requires more know-how to do the same thing.

The installation process isn't so pretty either since it's quite complex, asks for the serial number **_after_** installation (SOLIDWORKS asks before), and installs to a default location without asking for alternate install locations.

Hello, National Instruments! We, the people, tend to use two drives: One for Windows, One for Everything else. Please wise up next time!

![Local disk filling up; hard drive almost empty](https://nekox.net/assets/img/mechatronics-part-2/explorer_BEGEr4YKbT.png)

The myRIO was also bricked:

![myRIO Unrecoverable Error](https://nekox.net/assets/img/mechatronics-part-2/IMG_20190816_155127.jpg)

It took a little while to get the myRIO replaced, and a bit longer to get the right software installed. For those wishing to develop with myRIO, search up 'myRIO Software Bundle' instead, it works a bit faster than trying to install it through the academic bundle.

After the installation hiccups, development process was fairly straightforward. Working in a similar manner to Simulink's graphical interface. I'll spare you the boring development details, though a more thorough explanation will be provided later.











* We got the original myrio, 64b vs 32b issues
* myrio got bricked, we got charlie
* i spent the weekend working on getting some programming and modelling done
* finished a proportional control and some basics on the programming side of things
* finished a model of the servomotor and the electromagnet









## Final Thoughts

