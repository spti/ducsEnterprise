# Ridiculous Slider
**Note:** This is very raw and not finished yet.
[**Check out the demo**](https://spti.github.io/ridiculous-slider/demo/dist/demo-index.html)

## Install
`npm install --save ridiculous-slider || yarn add ridiculous-slider`

## Build the demo
`npm run demo:build || yarn demo:build`

## Run
`node server.js`
The demo is at the port `3000`, at `demo/dist/demo-index.html`

## Overview
The package consists of a few core components: `Slide`, `Slot`, `Slots` and `RootSlot`. You compose `Slides` in `Slot`s, `Slot`s in `Slots` (and `Slots` in `Slots`) and `Slots` in `RootSlot`. You write controllers that receive certain callbacks in props, use the mentioned components passing the callbacks on to those.

### Slide
The main purpose of `Slide` is to track whether it is in view or not. Whenever it gets in view, it fires a callback, passing it's id.

### Slot
The `Slot`'s main purpose is to list all the children's ids passed to it and pass that list up through callbacks.

### Slots
When there is multiple `Slot`s, we pass them to the `Slots`, which gathers all the `Slide` ids from each slot, concatenates them and passes that up the hierarchy. `Slots` is isomorphic with `Slot`, in that it passes an array of slide ids up through the same callbacks that `Slot` does. So a `Slots` can be used inside another `Slots`.

### RootSlot
`RootSlot` also gathers ids of slides within it, and it can contain `Slot`s and `Slots`s. But an important feature of it is it keeps the id of the currently active `Slide`. It doesn't make sense to keep that id on any of the lower levels, because they would be unaware, at any given point in time, if there are other slots, and we don't want to have multiple active slides.
It passes an array of slides in the form of `{id: string, active: boolean}`, where `active` designates if a slide is currently in view.

## Usage
See the demo for a usage example
