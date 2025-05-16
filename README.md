# To-Do App

A simple client-side task management app that leverages browser APIs for persistent state, minimal UI structure, and local storage. It’s designed with clean separation of logic and styling, without any external frameworks. Ideal as a boilerplate or starting point for local-only web apps.

## Key Techniques Used

* **[LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)** for persistent task storage across sessions.
* **[Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)** to override form submission and handle custom logic.
* Dynamic DOM manipulation using **[document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)** and event binding with `onclick` handlers.
* **[CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)** to manage theme consistency and easy updates.
* Conditional styling via JS by toggling visual state using classes and direct style changes (e.g., line-through for completed tasks).

## Libraries & External Resources

While there are no third-party JavaScript libraries, the following external resources are used:

* **[Google Fonts](https://fonts.google.com/)**:

  * [Montserrat](https://fonts.google.com/specimen/Montserrat)
  * [Roboto](https://fonts.google.com/specimen/Roboto)
  * [Inconsolata](https://fonts.google.com/specimen/Inconsolata)

## Project Structure

```
/CSS
/JS
index.html
```

* `/CSS`: Contains styling rules with a focus on custom properties, layout with flexbox, and UI transitions.
* `/JS`: Handles DOM updates, task logic, localStorage interactions, and event bindings.
* `index.html`: Links everything together and includes embedded form and layout structure.

## File References

* Main UI and structure: [`index.html`](./index.html)
* Core logic: [`/JS/script.js`](./JS/script.js)
* App styling: [`/CSS/style.css`](./CSS/style.css)
