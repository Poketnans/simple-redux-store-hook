# Simple Store Hook - Redux

Using a simple hook on the store index file,
it's possible to avoid verbose code on the components.
This aproach seems like React's Context API on the component side.

The following exemple shows the general state capturing:

```js
import { useSelector } from "react-redux";

const names = useSelector((store) => store.names);
```

The logical sequence above will not be necessary in every\
components anymore, just using:

```js
import useStore from "./store"

{...}
const {names} = useStore()
{...}
```

Also, it's possible to avoid the dispatch/thunk call
on the component like in the lines beneath.

```js
import { addNameThunk } from "./store/names/thunks";
import { useDispatch } from "react-redux";

{...}
const dispatch = useDispatch();

const handleClick = () => dispatch(addNameThunk(newName));
{...}
```

Just like:

```js
import {useStore} from "./store";

{...}
const {addName} = useStore();

const handleClick = () => addName(newName);
{...}
```

## Directory structure

- src
  - store
    - modules
      - names
        - actionTypes.js
        - actions.js
        - hook.js
        - reducer.js
        - thunks.js
    - index.js

### Logical

The main principle is use custome hooks for store and modules.

On the modules to center dispatch and thunks using on the same\
place and construct functions that mirrors `actions` names to\
finaly return them on a object:

### _hooks.js_

```js
import { useDispatch } from "react-redux";
import { addNameThunk, removeNameThunk } from "./thunks";

export const useNamesActions = () => {
  const dispatch = useDispatch();

  const addName = (newName) => dispatch(addNameThunk(newName));

  const removeName = (name) => dispatch(removeNameThunk(name));

  return {
    addName,
    removeName
  };
};
```

And on the store to sprad this module hooks's and useSelector's return\
to construct an object that contains both states and action functions to\
be catch on the components.

### _store index.js_

```js
import { useSelector } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { useNamesActions } from "./modules/names/hook";
import namesReducer from "./modules/names/reducer";

const reducers = combineReducers({
  names: namesReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));

export const useStore = () => ({
  ...useSelector((store) => store),
  ...useNamesActions()
});
```

In this case, the store object is some like this:

```js
{ names, addName, removeName }
```

Being able to be captured by destructuring.
