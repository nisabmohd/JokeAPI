
## Jokes API

 A simple API that gives you random Jokes 

<p>   </p>


### API Reference

#### Get all items

```
  GET /clean
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `clean` | `string` | `clean jokes`| 

#### Get dank jokes

```
  GET /dank
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dank`      | `string` | `dank jokes` |


###

#### Get jokes from below Parameter 

```
  GET /{Parameter}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dank`      | `string` | `dank jokes` |
| `political`      | `string` | `political jokes` |
| `dry `      | `string` | `dry  jokes` |
| `dumb`      | `string` | `dumb jokes` |




##
#### Response
```
{
    content: "What is a computer's favourite snack? Computer chips",
    sources: "parade.com",
    type: "clean",
    id: "28",
    url: null
}
```
