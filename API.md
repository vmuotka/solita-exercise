# The backend API routes

This is a simple API only containing the following two routes.

## The NamesEntry

The names are returned in arrays of objects. I've created a TypeScript interface/type for the object:

```tsx
{
  name: string,
  amount: number
}
```

## /api/getnames

Returns an array of all names, in alphabetical order. 

## /api/find/:query

Returns an array of all names that include a given string query. 