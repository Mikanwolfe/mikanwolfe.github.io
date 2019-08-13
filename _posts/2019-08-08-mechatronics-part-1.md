---
layout: post
title: "Mechatronics Project Part 1"
date: 2019-08-08
excerpt: "The start of a series of blog posts relating to the Robotic Arm Mechatronics Project"
feature: https://nekox.net/assets/img/nekomimi_71bg.jpg
tags: [University]
comments: true
---

# Mechatronics Project: Robotic Arm

**Part 1**

---

![Nekox Mechatronics Banner](https://nekox.net/assets/img/mechatronics-part-1/mechatronics_banner.jpg)



This is the pilot post for what'll hopefully be a series in the production process of a mechatronics project. Mechatronics Systems Design (MSD) is a project-based unit aimed at  developing a deeper understanding of integrated mechanical-electronic  (mechatronic) systems. This project involves three main disciplines:  Mechanical, Electronic, and Control Systems Engineering.

Despite the lack of a better name the Robotic Arm Project aims to have  students develop and manufacture a Pick-and-Place Robotic arm within  the constraints of the use of DC Motor, Sensor, and the Microcontroller  (specifically PLC, or Programmable Logic Controller) provided. This task  aims to consolidate the understanding of Modern Control System Theory,  such as PID controllers and the feedback process to complete both the basic and advanced requirements.

## Overview

The Robotic Arm Project is to be completed in a group of 2-3 students and requires the construction, programming, and demonstration of a specific scenario. The breakdown of the project is as follows:

* Oral Presentation (10%)
* Project Demonstration (20%)
* Project final Report (20%)

The total contribution will be 50% of our final mark.

### Personal Portfolio

Each student will be required to complete a personal design folio worth 20% of the final mark. Despite the name, the folio will be similar to a report, containing design requirements, literature reviews, and a design section alongside system modelling calculations.

As such, this blog-post series will be the slightly less formal, full design process outlining the progress and possible decisions in a more laid-out manner.

### Scenario and Demonstration

The robotic arm is to be constructed to move "components" from a loading bay to an unloading bay, spaced 150mm apart with a 2-second stop in-between to simulate a need to 'scan' the component.

The evaluations will be based on the following criteria:

* The amount of components delivered in a set amount of time;
* The performance and reliability of the system, notably with the advanced requirements of a 200mm transfer distance and a manual control mode.

### Constraints

There are a limited number of components available which limit the design of the robotic arm to a single axis of movement. Furthermore, the methods of manufacture available to students are also limited, notably one (1) attempt at laser-cutting on an MDF sheet as the construction for the arm itself.

---

## The Beginning

This marks the beginning of the more casual blog post series that should show the process of creating a basic robotic arm!

First thing's first: Getting started with groupwork tools. 

* Google Drive (or OneDrive)
* Trello
* GitHub

<figure>
<a href="https://nekox.net/assets/img/mechatronics-part-1/firefox_EuPm6w9biw.png"><img src="https://nekox.net/assets/img/mechatronics-part-1/firefox_EuPm6w9biw.png"></a>
</figure>

The basic workflow is as follows:

<figure>
<a href="https://nekox.net/assets/img/mechatronics-part-1/1565307011264.png"><img src="https://nekox.net/assets/img/mechatronics-part-1/1565307011264.png"></a>
</figure>

*Any resources goes in subfolders!*

The goal of this sort of system is to keep resources and tasks organised. This is important because once we introduce more file types, things can get lost quickly. By organising *everything* we need for a specific task under a folder, we can hopefully ensure that task resources don't get lost as easily. Will report later how well this system works.

## 3D Printing!!

<figure>
<a href="https://nekox.net/assets/img/mechatronics-part-1/3dp1.jpg"><img src="https://nekox.net/assets/img/mechatronics-part-1/3dp1.jpg"></a>
</figure>

From my [Hydrology Drone Project](https://github.com/Mikanwolfe/Hydrology-Drone-Zuiho), I had a 3D printer that was gathering a shocking amount of dust and was in dire need of some maintenance. The model of 3D printer was a really basic one from *ALDI's CocoonCreate*, launched in Australia some 4-5 years ago retailing for about \$400AUD (~\$271US).

Since the software was a bit outdated, there were a few kinks to work out before I could fully utilise my 3D printer for this project. The software that originally came with the printer (and subsequently contained configuration information for the printer) was [Cura Lulzbot Edition](https://www.lulzbot.com/cura). Given that this was supplied with the printer in 2016, the software is somewhat outdated with the number of features available. Updating to [Ultimaker Cura 4.2.1](https://ultimaker.com/software/ultimaker-cura) would give me access to hopefully more modern and updated software.

> **Some Notes on 3D Printing:**
>
> Not all printers work the same; the process used in this project may differ slightly to significantly depending on your setup.
>
> In this case, the Nekomimi model was made in Sketchup (don't worry, later parts will be made in SOLIDWORKS) and then converted to .STL (Stereolithographic File Format) for processing with the *Splicing Software*.
>
> The Splicing software is used to convert 3D Models into Printer-Readable files. Here, I used Cura to convert the .STL files into .GCODE () files for the printer, which is then saved to a MicroSD card and read by the printer itself. It should be noted that certain printers have different starting and ending 'GCODE' (supplied by the manufacturer) for various reasons. 

Over the course of a weekend, I cleaned the printer slightly and applied some more grease to the bearings (can never have too much) using some basic bearing grease from the local hardware store. I also did some printing on an old model of mine, a single cat-headphone-like... ear thingy. The result was the following:

![3D Printing results](https://nekox.net/assets/img/mechatronics-part-1/68416038_424633244927828_3113275836996780032_n.jpg)

From left to right:

* The original Nekomimi file compiled in Cura Lulzbot in 2016;
* The first attempt at Ultimaker Cura 4.2.1,  issues seemed to be a lack of plastic extrusion;
* The second attempt at Ultimaker Cura 4.2.1, model broke. Issue seemed to stem from a lack of plastic extrusion and thin walls, along with badly printed infill;
* The third attempt at printing with Ultimaker Cura 4.2.1, with increased wall thickness, reduced print speed (for better infill), and correctly dimensioned filament (originally set to 2.25mm when the CocoonCreate device runs off 1.75mm)

An interesting observation is that the filament, after being exposed to outside air for well over 9 months, has become rather brittle. There are still printing artefacts on each model (such as some streaks showing a lack of plastic extrusion), however, the splicing software does seem to be working and the printer is showing some promise as a strong manufacturing method.

Another observation is the failure method of the second attempt, showing the weakness of 3D printed parts. If parts are to fail, they typically fail at the interface between layers, where adhesion is the weakest. This will have to be taken into account when designing the robotic arm.

## Final Thoughts

Whilst the project seems a bit simple at times and other times not, 3D printing and a strong team set-up will hopefully provide a strong foundation for this project itself. I wonder if I'll be taking on the mechanical component given my access to and knowledge of 3D printing, that that's to be discussed amongst the team. 

I don't exactly want to write twelve blog posts for each week during the semester, so the following posts might be a bit long or heavily simplified. Either way, there's more to come!