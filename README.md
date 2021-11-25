# Simple Store Hook - Redux

Using a simple hook on the store index file,
it's possible to avoid verbose code on the components
like in the lines beneath.

```js
const names = useSelector((store) => store.names);
```

Also, it's possible to avoid the dispatch/thunk call
on the component like in the line beneath.

```js
import { addNameThunk } from "./store/names/thunks";

import { useDispatch } from "react-redux";

const dispatch = useDispatch();

const handleClick = () => dispatch(addNameThunk(newName));
```
