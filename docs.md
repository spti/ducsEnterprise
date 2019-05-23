# The Problem
To have, at the top level, a live listing of components at arbitrary depths in the tree, *each of which might or might not be rendered* without altering the state of common ancestor each time *that that binary state (rendered/not rendered)* of one of the listed components changes. While doing that, hide as much business logic as possible in handy components, that users can use declaratively.

I call the type of component we want to have listed a `Slide`.

The `Slot` component's main purpose is to list the given children.

User defines a controller, in which she passes the components she wants to be listed to the `Slot` as children.

How to have a logically nested structure, which is visually horizontal (ie, each branch at it's bottom has components that are of importance to us, whereas all the components on the way there are unimportant).



# Slot
`Slot` must only contain `Slide`s. The core function of `Slot` is to gather ids of it's currently rendered `Slides` and pass them to `onSlotUpdate` and `onSlotMount`, together with it's own id.

# Slot isomorphic component
Takes `onSlotMount`, `onSlotUpdate` and `onSlideInView` callbacks. Contains `Slot`. Passes `onSlotMount` and `onSlotUpdate` to the contained `Slot`. Passes `onSlideInView` to each `Slide` inside the contained `Slot`.

# Slots
Is a hoc [link to React docs].

#Slots.props.component
Contains one or more `Slot`s. Takes `onSlotsMount`, `onSlotUpdate` and `onSlideInView` callbacks. Passes `onSlotsMount`

# Defining Slot-isomorphic components
A `Slot`-isomorphic component takes three callbacks as props: `onSlotMount`, `onSlotUpdate`, and `onSlideInView`.
<!-- A Slot-isomorphic component's render method must return a Slot. <-- this seems to be false -->



Individual `Slot` (or isomorphic component) is good for containing few semi-controlled or fully-controlled `Slides` (by semi-controlled I mean that whether such `Slide` in it's entirety gets rendered or not depends on the state of it's parent).
