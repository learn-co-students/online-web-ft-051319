* Store: Is a reference to the entire Redux object, with its extension of functions. A Redux store holds its own state that is separate from any other individual component's state.
* Action: A plain JS object that has a key-value pair of type and an optional key-value pair of extra info, often seen as "PAYLOAD"
* Dispatch: A key in the Redux object that is a function that accepts an action and ultimately updates state. You can ONLY EVER UPDATE STATE by passing an action to dispatch. 
