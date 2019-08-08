---
layout: post
title: Artillery 3 and Design Patterns
date: 2019-03-29
excerpt: "The process and development of Artillery 3"
feature: http://www.tanks-encyclopedia.com/wp-content/uploads/2016/04/hummel-late-version.jpg
tags: [engineering, programming, csharp, design patterns]
comments: true
---

# Design Patterns and a University Project

When we have a problem, as engineers, we find solutions. Often, there are smarter people who have had the exact same or very similar problems and thus, have also found solutions. More often than not, their solutions are often a lot better than what we could produce in our limited time we have to deal with the problem, be it a technical or temporal constraint. 

The entire idea behind frameworks and standard libraries is to save time for us measly programmers as they provide solutions for common problems. The concept of design patterns extends this to the more abstract domain.

Design patterns are programming are used to address common problems that come up when developing an Object-Oriented (OO)-solution. The fundemental framework of OO Design patterns are the 23 by the Gang of Four (GoF). 

Divided into three categories, the patterns are:

- **Creational Patterns**
  - Abstract Factory
  - Builder
  - Factory Method
  - Protype
  - Singleton
- **Structural Patterns**
  - Adapter
  - Bridge
  - Composite
  - Decorator
  - Facade
  - Flyweight
  - Proxy
- **Behavioural Patterns**
  - Chain of Responsibility
  - Command
  - Interpreter
  - Iterator
  - Mediator
  - Memento
  - Observer
  - State
  - Strategy
  - Template Method
  - Visitor

Of course, those are "just" the 23 base patterns for OOP-based programming written in a book that's been dated to almost 20 years ago. What I'm interested in is design patterns related to creating a game. 

For my High-Distinction (HD) project I plan to undertake for one of my programming units, I will be attempting to incorporate modern design patterns into a C# game.

---



# Artillery 3

Artillery was the HD project for the preceding unit and therefore it felt reasonable to both re-write and extend on the concepts explored in Artillery. This post will be dedicated to the conceptualisation and the research I will be doing to realise Artillery 3 as a HD project.





#### Version Information

To simplify and seperate the different versions and iterations. The following format will be used to describe different versions:

`iteration . minor [e|r]`

* Iteration: Major development milestone.
* Minor: Build.
* Experimental or Release: Build stability.
  * Experimental encompasses straight up incomplete code.
  * Release means it works.

For example, 

Iteration 1 Update 1 Experimental: `1.1e`

Iteration 5 Update 6 Release: `5.6r`

#### Iteration 1

We need to start somewhere and like most dysfunctional programming thingies we start at 1. (*Looking at you, MatLab.*)

We start with Components, the very base class most of our game elements will inherit from. 

###### GameObject Base Class

I will probably have many different types of components such as Updatable ones, Drawable ones, Physics, Control, and the whole lot. Boiling it down, the two crucial components are:

* DrawableComponent
* UpdatableComponent

Most, if not all, elements within the game will need to be updated. On the other hand, not all components need to be drawn, such as physics or some sort of control component. Hence, a component object willl be the base class that requires an update method, with the drawableComponent object inheriting like so:



![img](https://www.plantuml.com/plantuml/img/VOv12i9034NtEKMMYaGOt4kblO87I6sGWSnqc4aHqTxTQQ6u4CpVFTxdfod6sQQW0EPD1I_PlAha9vwmLIu5Ey_tp07TqGavWDjAsp6aCKeqV07MEzHSqy0ckptCczLbVd2lyjVUm2AlvGN0RvLeIaJlytSRe94urEy_)

Other things to include would be the interfaces for these components. I will also include a Enabled and Visible flag to toggle them on and off:

![img](https://www.plantuml.com/plantuml/img/XPB1QiCm44Jl-eezjWG9qjvCC6cJ7lm1xNrjRze5IJRIXX3Q_dja1oSsCObysvat8ozQHy4WUsUL4XPBy1Q4hQLmX5VOM8mHjepV0HqipPBqYrBiXS8EAu9YqxYsyUG5LglBEC_XLq4wY_GLdeNHSgIdPwN-9_HdMwDWcKhdQGqVlfDhoA1i6di9xS4kS9gt3NYu6_V5aPEUmVjisZ3eSixXM4O9M0bK_IR6lpj8VS6jTRZBFQJhKrU3CVlMcBzyj9SC2jTQSacESyxhQEAyBH-8qP8U45fRsedMYPcq-1yAd0Yr9b-dTtC2)

In essence, we have two different game components that all the other objects can include or be derived from. In this case, I will try to favour composition using components over inheritance which can be included into composite classes.

So, where does the rest of the game fit into this? Well, we'll first start with the ground.

###### Terrain

The original concept of artillery floated around the terrain generation within the terrain features. As a starting point, this will provide the logic for the ground.

The terrain class:

![terrain](https://www.plantuml.com/plantuml/img/JO_D2i9038Jl-nGvLce5zLfAHKKy2AA21n49tIWBwsv98sqLtztI-fVRVCmCcRGGPBbThL9Yn19CM8orn3MCOMgnA61cyC9uXU5WID58gQobEs96u-2XeBaG8ZX9XrQOmzB9uGXnp8JQErj3pZudbZf9Mlyx57vgWWrbWkxIFB0tJljoQ-xK-xeMv8XHAFYX6MFv9-TLRhscm3Y1QksBFfojHm5gUDVrL2ebfvkfBm00)

As the terrain is drawable, it should include the DrawableComponent and implement the IDrawable interface, however, surprisingly, it does not need to update at any time other than when it gets blown up. In this version of Artillery, I'd like to be able to generate terrain in different ways instead of just one, so I'll be using the *strategy* design pattern here to implement terrain generation.

![strategyterraingen](https://www.plantuml.com/plantuml/img/fLJRQjj047tVhnZyv5nKCEsJCI99NO8VGatSf0-bb8aq5ajNkylkk8vp-VUER5sCBu4G2SJkx9apP-OikeYCWHUbKOer6uBBmDeO2Ylu35yDnWXZZKN04WQV1fHyKSfZzXSBWXa7P2fMFoW4r7QAp1GiF2kGP_tHLY9pp0Xgp3LPaYGNO3J2XoW46QTfdG9dyku2-y819VgPVgAJ3bQVKtyJU-rgtkXywYHfhsAIB7oIlAJxMePjAsk6RDtrKPujiSSmHqH__oSudTCRwc_HvgxygFOZB5lA3oFUhVjLgSxZoJZW4X_a3er6RRHrzmmIkDTHo_aGhfmpgg6_ytd7MGKg7jaAUIqGglRJZdy8az8RAiboR36zGUyqCJJd99NbeKdTHOh0hcsZmQZDr1gYJkyVteHkq5SrBV_wBRq5mjnPim8VdAV0gpJTozWkU-3kxsIsdTVG_YrbZBQGLdzgCMfP6NA-JrGqgsvsEnQzDTzc--tH6vVJslp7gOldC3SE6KZYcviWJboGpUKlyHy0)

The strategy design pattern allows me to keep terrain generation flexible as the terrain class does not know what is being generated, as long as there is a generator it knows that *some* terrain is being generated. This allows the class to treat "terrain generation" as a given without needing to know the implementation, meaning that we can easily swap out the type of terrain generated by switching the terrain generator strategy.

###### The World

In order to get a first prototype working, we'll need somewhere to connect the terrain to the entities, and the entities to the game components. Combining it all together somehow gives this:

![complexity](https://www.plantuml.com/plantuml/img/VLPDR-Cs4BthLmnoyYAHWQ103uPXhDTnWm3PDiXckuTYKT0IRRFWXq3ISTmq_xr3KX99oObF5kTnDFDcveq-6qkqFGXU59PPJc6fBUESwXFy0YjEZ84RHdQQ2BYUNjForwAe_EaFfNaDhmNWxn9A-DjIhGcJC8Edy2-Qg4JVfwz4aXtL25Ydpn7Mx4-6LMOjTqnIX3sapycB6ASzvgb_y80MTHd2cppIoXAvmxH-C5chupVsB_tKOswff9fOsiOxYPYhBeSMedIyzRsfySxabWZwn4JYxaQJu-HJyLOKWHjLeZTPBl9qCUOzCKL-Td5zWN3yBU1247cwQEyWM7Y8wMZFxxqEE6RKpE2U6JiFk4LEIXjw37bPrvFsJQ56qVH8XNgcG-iukQUq6YwpDj3aF4HfzreTGT8Z_AxidMWu5UYLrkkNYZQMAUcSjxn0MHwQilnluKab6qx_sFo3jSHNt1bOPboa9BGTj5AYKHAznoRgZt96sfgzIz0t9WxS7TazCpxzyEe7Jauv_zMUQ59PN-1Lzp-Q9ROBMepLJEwSdzQ3SZLV9NSTXV7PSz3tWijTTY54K1854K91sm9B8GwIEMON4R0zK8w0BLV4vgSh9Sr1-4faW9wBtvYc4tyEVgQk0WWQTQJQS_EWbQiILlwZm1DKZFo62EpeKMHBFxndmbc_D5pLDCmRmpxIMr9Hk1kM6-RpthfOP0LJd3E3sJwIUin8HUJA0MhtzerI_Cp5Ur_16J2PNCJwtMho7FBs5yVD5AQffISmbqbVAmUz68opci5t4qKXlpsQ1yB3z9YkCqR-aWRPzS6dZ2J1f_82dUhu9FhP7GrT7-_8C9rYdvpBhrU8OPOHzEeLOwX7GRZ380ri6K-vMhNBQxpFlfB6HIFjNp-nbpGbjPBy18rM3TL8mM9qezyPSHN6e_bySBCdkDj2vtRMU1_1RhoPkdtsaQ0D1AyR8snXU7bGffjfYkTXMRuLKbcAdMoj4lxUlTgvde8stIiu65g3LTv8cTtZK9YsMo16IaEgtMV2vc1njvrWGw5cfYAw3dOqRScpEg0qRi69XC02sEIBegODbJMgAA1G8PDRfN5AgjwzSHs3271nPzhGxf3pYd29DSPM9ZZQZg-1h7WUtHvwLq_MqfdhN2sI0kJ-khNshhi_KM7GFeClPxsDlpd81dSBxWC83Tq7t2VT0N8LV1bBNvpziTl1EXvuVGjQLmnVFfswCKz8pCRx7NJS-14wU7r09cn-12vBJhVMxwNX6zryOzSorpd5P-mT_1x-7m00)





---

### Development is Hard.

See the new docs.









---

Design patterns are the programming equivalent to mathematical theorems: they're a great for paper warriors who like to explore the realm of the theoretical to solve a very specific problem, but it's difficult to find or recognise an appropriate situation to apply design patterns to.

**State Design Pattern**

[intro]

States are useful as they allow for stronger adhesion to OOP principles. As states are their own class each state has access to only the information it needs.



**Observer Design Pattern**

* Acheivements!
* Audio
* UI Elements

The observer design pattern is used widely as event-driven programming due to the nature of the observer pattern and it's actually baked into C# using the `event` keyword. See [this](https://www.tutorialsteacher.com/csharp/csharp-event) for a fairly good tutorial.

 **Component Design Pattern**

Prefer composition over inheritance. --  Unless you really need inheritance, don't use it.

Composition composes of both interfaces (for casting, good as faux-inheritance) and object components . An important thing to remember is where we get components:

* If the object creates its own components
  * Object always has components it needs
  * Harder to reconfigure
* Object is provided components
  * More flexible
  * Decoupled from concrete component types (neutral)

*Components communicating to each other*

* Modifying the container object's state
  * Input chances velocity, physics chances position based on velocity of parent.
* Referring directly to each other
  * Get one component to know about another component directly
* Messaging
  * I won't touch this.



**Prototype Pattern**

* Lots of the same kind of entities (variations of the same object)



If we stretch our definitions of *design patterns* a little, game design often incorporates the following:

* OOP Principles
  * Polymorphism
  * Inheritance
    * And composition, though Inheritance vs. Composition is something for another day
  * Virtual and Abstract Classes
    * The implementation of Interfaces and their uses
* Game Design Patterns
  - Game Loop
  - Double Buffer
  - Update Method
* Design Patterns (Traditional, GoF 23)
  * Factory
    * *An object who's sole purpose is for creating other objects*. In reality, the factory design pattern is useful for a variety of reasons and sees extensive implementation in games development which will be discussed in more detail later (if you're reading this then the author forgot to write a more detailed description here and thought delegating to a later post might be good temporary solution.)
  * Observer
    * (TODO)
    * Used for animation and other user-driven interactive events. Will explore and write about later.
  * State
  * Composite
  * Facade
  * Chain of Responsibility
  * Command
  * Strategy
  * Template
* To Do for me:
  * Abstract Factory/Factory for UI versions
  * Composite for vehicle stats
  * Singleton for factory and/or config?
  * Game State/Stack 

---



## The implementation of OOP Principles in Game Development



- Polymorphism
- Inheritance
- Virtual and Abstract Classes




## Game-Specific Design Patterns

- Game Loop
- Double Buffer
- Update Method

## The use of <u>Design Patterns</u> in Game Development

- Factory
  - Being able to create object instances based on a string read from a file, e.g. NPCs, GUIs.
  - Might not be as useful for be since this might imply some bigger programs, though it might be useful for other projects such as an RPG
- Observer
  - Renderable representation of, for example, the player, that listens to the logical representation of the player by checking the state of the player. This isolates the rendering logic from the game code itself. 
  - I'm not sure of the direct implementation of this though I can imagine the "whole" character composed of both a RenderableObject and the GameObject.
- State
  - Store a game character's states such as walking, wandering, fleeing, with their own update methods and whatever data is required (wandering where, fleeing from what).
  - http://gameprogrammingpatterns.com/state.html
  - Possibly making a GameState stack
- Composite
  - Make a scene out of renderable objects or GUI elements.
  - "Compose" objects into tree structures.
  - Try to use this somehow
- Chain of Responsibility
- Command
- Strategy
- Template

---

### UML Diagram Planttexts

```

@startuml

title Artillery 3 Class Diagram 1.1e-1

class Component {
    + + Update()
}

class DrawableComponent {
    + + Update()
    + + Draw()
}
    
DrawableComponent --up--|> Component

@enduml
```

```
@startuml

title Artillery 3 Class Diagram 1.1e-2

interface IComponent <<interface>> {
    + + Initialise()

}

interface IUpdatable <<interface>> {
    + - Enabled : bool
    + + Update()
}

interface IDrawable <<interface>> {
    + - Visible: Bool
    + + Update()
    + + Draw()
}

abstract class Component <<abstract>> {
}

abstract class DrawableComponent <<abstract>> {
}

    
Component ..up..|>IUpdatable : Implements
Component ..up..|>IComponent : Implements
DrawableComponent ..up..|> IDrawable : Implements
DrawableComponent --left--|> Component : Inherits

@enduml
```

```
@startuml

title Artillery 3 Class Diagram 1.1e-3

class Terrain {
    + - _terrainMap Int[] <<readonly property>>
    
    + + Terrain(Rectangle WindowSize)
    + + Generate()
    + + Draw()
    + + Explode(int xPos, float explSize)
}

@enduml
```

```
@startuml

title Artillery 3 Class Diagram 1.1e-4

package StrategyTerrainPattern {
    
    interface TerrainGenerator <<abstract>> {
     + + TerrainGenerator(int mapSize)
     + + Generate()
    }
    
    MidPointTerrainGenerator --up--|> TerrainGenerator : Strategy
    class MidPointTerrainGenerator {
     + + MidPointTerrainGenerator(int mapSize)
     + + Override Generate()
    }
    
    RandomTerrainGenerator --up--|> TerrainGenerator : Strategy
    class RandomTerrainGenerator {
     + + RandomTerrainGenerator(int mapSize)
     + + Override Generate()
    }
}

interface IDrawable <<interface>> {
    + - Visible: Bool
    + + Update()
    + + Draw()
}

Terrain -up->IDrawable : Implements
Terrain "1"*-left->"1" TerrainGenerator : Uses to Generate Terrain
class Terrain {
    + - _terrainMap : Int[] <<readonly property>>
    + - _terrainGenerator : TerrainGenerator
    
    + + Terrain(Rectangle WindowSize, TerrainGenerator generator)
    + + Generate()
    + + Update()
    + + Draw()
    + + Explode(int xPos, float explSize)
}

@enduml
```

```
@startuml

title Artillery 3 Class Diagram 1.1e-6

class World {
    + - _terrain : Terrain
    + - _entityManager : EntityManager
    + - _physicsEngine : PhysicsEngine
    + - _tileEngine : TileEngine
    
    + + World(Rectangle WindowSize)
    + + GenerateTerrain(WindowSize, TerrainGenerator)
    + + Update(GameTime)
    + + Draw()
}

World o-down-> EntityManager : has
EntityManager "1" o----> "many" Entity : manages

class EntityManager {
    + - _entities: List<Entity>
    
    + + Update()
    + + Add(Entity entity)
    + + Remove(Entity entity)
}

World o-down-> TileEngine : has

class TileEngine {
    throw new NotImplementedException
}


Entity --up--|> DrawableObject : Is A
class Entity {
    + - _physicsComponent : PhysicsComponent
    
    + + Draw()
    + + Update()
    + + Simulate(this)
}

class Player {
    + - _character : Character
    + - _name : string
}

Player o--> Character : has
Character --|> Entity : Is An

class Character {
    + - _ammo : List<Ammunition>
    + - _fuel : float
    + - _fuelConsumption : float
    
    + + Fire(float angle, float power)
}

Projectile --|> Entity : Is An

class Projectile {
    + - Damage : float
    + - Angle : float
    
    + Explode()
}

interface IPhysicsComponent <<interface>> {
    + - _collisionRad : float
    + - _canCollide : bool
    + - _collisionLayer : int
    + - _hasGravity : bool

    + + Simulate(entity Entity)
}

PhysicsEngine "1" o--> "many" IPhysicsComponent : Uses

class PhysicsEngine {
    + - _physicalObjects : List<IPhysicsComponent>
    + - _gravity : float
    + + Simulate(List<Entity> entities)
}

Entity -- PhysicsComponent : Uses

PhysicsComponent ..|> IPhysicsComponent : Implements

class PhysicsComponent {
}


World o-down-> Terrain: has
World o-down-> PhysicsEngine: has

class Terrain {
    + - _terrainMap : Int[] <<readonly property>>
    + - _terrainGenerator : TerrainGenerator <<property>>
    
    + + Terrain(Rectangle WindowSize, TerrainGenerator generator)
    + + Generate()
    + + Update()
    + + Draw()
    + + Explode(int xPos, float explSize)
}

interface IObject <<interface>> {
    + + Initialise()

}

interface IUpdatable <<interface>> {
    + - Enabled : bool
    + + Update()
}

interface IDrawable <<interface>> {
    + - Visible: Bool
    + + Update()
    + + Draw()
}

abstract class UpdatableObject <<abstract>> {
    + - _x : float
    + - _y : float
}

abstract class DrawableObject <<abstract>> {
}

    
UpdatableObject ....|>IUpdatable : Implements
UpdatableObject ....|>IObject : Implements
DrawableObject ....|> IDrawable : Implements
DrawableObject --left--|> UpdatableObject : Inherits


@enduml
```



---

**Disclaimer**

These are my notes when it comes to this topic, as I'm learning with you, I can't say for certain if any or everything of what I say is even remotely correct, other than citing sources incorrectly. If I make a mistake, please don't get mad, I'm just a simple engineering student trying to make ends. Comment down below if something's off and I'll do my best to fix issues as they arise.