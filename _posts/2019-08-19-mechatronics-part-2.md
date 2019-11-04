---
layout: post
title: "Mechatronics Project Part 2"
date: 2019-08-19
excerpt: "The second iteration of the Robotic Arm Project!"
feature: https://nekox.net/assets/img/mechatronics-part-2/67960546_2433543870251242_6139349436859416576_n.jpg
tags: [University,MSD Robotic Arm]
comments: false
---

# Mechatronics Project: Robotic Arm

**Part 2**

---

![Nekox Mechatronics Banner](https://nekox.net/assets/img/mechatronics-part-1/mechatronics_banner.jpg)



The mechatronics project is will underway now and we've received some new insights into the design of the device as well as the components in a nice big tub. This post will largely focus on the start of the mechatronics project along with some comments on design ideas and how the system works.

![A scene of the Tub](https://nekox.net/assets/img/mechatronics-part-2/IMG_20190819_112609.jpg)

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

## SOLIDWORKS Modelling

Along with the electrical and control component, we'll also need to build the robotic arm and the base. To facilitate this, I modelled the servo and electromotor we had on hand since we did not know which specific models they were. It allows us to better visualise the final product and saves us the hassle from doing it later. 

The modelling process itself was fairly straightforward -- grab a pair of callipers and start measuring. Measure from multiple places, and make sure the measuring is good. The rest is simply the process of modelling in SOLIDWORKS since the system has it's own quirks. The following two images are the SOLIDWORKS models of the Servomotor and the Electromagnet. Of particular note, the electromagnet is asymmetric, protruding out about 1mm on one side to make space for the wiring.

![Servo.gif](https://nekox.net/assets/img/mechatronics-part-2/JBWvYO4Kmb.gif)

![Electromagnet Model](https://nekox.net/assets/img/mechatronics-part-2/69162129_513482299398962_6224456107910234112_n.png)

## To Come:

* Designs!
* myRIO programming!

This blog post will be updated in due time as more interesting information and developments surface along with more opportunities for discussion!

