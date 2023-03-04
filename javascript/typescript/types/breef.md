### Defining Types
You can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred automatically (for example, patterns that use dynamic programming). To cover these cases, TypeScript supports an extension of the JavaScript language, which offers places for you to tell TypeScript what the types should be.


Fox example, to create an object with an inferred type which includes `name: string` and `id: number`, you can write:

```js
    const user = {
        name: "Hayes",
        id: 0,
    };
```

You can explicitly describe this object's shape using an `interface` declaration:

```js
    interface User {
        name: string;
        id: number;
    };
```

You can then declare that a JavaScript object conforms to the shape of your new `interface` by using syntax like `: TypeName` after a variable declaration:

```js
    const user: User = {
        name: "Hayes",
        id: 0,
    };
```

If you provide an object that doesn't match the interface you have provided, TypeScript will want you:

```js
    interface User {
        name: string;
        id: number;
    }

    class UserAccount {
        name: string;
        id: number;

        constructor(name: string, id: number) {
            this.name = name;
            this.id = id;
        }
    }

    const user: User = new UserAccount("Murphy", 1);
```


You can use interfaces to annotate parameters and return values to functions:

```js
    function getAdminUser(): User {
        // ....
    }

    function deleteUser(user: User) {
        // ....
    }
```

There is already a small set of primitive types available in JavaScript:
`boolean`, `bigint`, `null`, `number`, `string`, `symbol`, and `undefined`, which you can use in an interface. 

TypeScript extends this list with a few more, such as `any` (allow anything), 

`unknown` (ensure someone using this type declares what the type is),
`never` (it's not possible that this type could happen), and
`void` (a function which returns `undefined` or has no return value).

