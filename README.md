
## Jokes API

 A simple API that gives you random Jokes 
 
 Created using HTTP Server NodeJS

<p>   </p>


### API Reference

#### Get clean jokes

```
https://jokesapi01.herokuapp.com/clean
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `clean` | `string` | `clean jokes`| 

#### Get dank jokes

```
https://jokesapi01.herokuapp.com/dank
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dank`      | `string` | `dank jokes` |


###

#### Get jokes from below Parameter 

```
https://jokesapi01.herokuapp.com/{Parameter}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dank`      | `string` | `dank jokes` |
| `clean`      | `string` | `clean jokes` |
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
