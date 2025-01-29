# React useEffect Hook: Incorrect State Update

This repository demonstrates a common mistake when using the `useEffect` hook in React: incorrectly updating state by directly using the previous state value.

## Problem

The `useEffect` hook is used to perform side effects after a component renders.  In this example, we're trying to increment a counter variable. However, because we access the `counter` variable directly within the `setCounter` function call, the component will keep re-rendering and updating state, causing an infinite loop.

## Solution

To solve this, use the functional update approach. This approach takes the previous state as an argument and allows you to create the new state based on it, ensuring that the update is done safely and correctly.