+++
categories = []
date = 2022-06-18T23:00:00Z
description = "UML or "
tags = []
title = "UML-sequences"

+++
## Plant UML

PlantUML uses well-formed and human-readable code to render the diagrams.

There are other text formats for UML modelling but PlantUML supports many diagram types and does not need an explicit layouting, though it is possible to tweak the diagrams if necessary.

### Process flows

_Examples:_

    if (a) is (yes) then 
    :Do Something;
    end
    else (No)
    :Do Something Else;
    end

### Sequence Diagrams:

_Examples:_

    activate "Marketo Programs" #yellow
    "Marketo" -> "Marketo Programs" : Lead Score
    "Marketo" -> "Marketo Programs" : Data Management
    "Marketo" -> "Marketo Programs" : Set Acquisition
    "Marketo" -> "Marketo Programs" : Lead LifeCycle
    deactivate  "Marketo Programs" 

    participant Participant as Foo
    actor       Actor       as Foo1 
    boundary    Boundary    as Foo2
    control     Control     as Foo3
    entity      Entity      as Foo4
    database    Database    as Foo5
    collections Collections as Foo6
    queue       Queue       as Foo7

### Objects

    class Class as ClassName {
        ClassName : Lead
    }

    object Object  as obj {
     user:use
    }

    json JSON {
       "UserObjectId":"120947104=0",
       "FirstName":"John",
       "LastName":"Doe",
    }

More information here:

[https://plantuml.com/sequence-diagram](https://plantuml.com/sequence-diagram "https://plantuml.com/sequence-diagram")

made with:

[https://plantuml-editor.kkeisuke.com/](https://plantuml-editor.kkeisuke.com/ "https://plantuml-editor.kkeisuke.com/")