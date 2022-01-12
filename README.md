
## Jokes API

 A simple API that gives you random Jokes 

<p>   </p>

### API Reference

#### Get all items

```
  GET/all
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `all` | `string` | `All jokes`| 

#### Get dank jokes

```
  GET/dank
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `political`      | `string` | `dank jokes` |


###

#### Get jokes from below Parameter 

```
  GET/{Parameter}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dank`      | `string` | `dank jokes` |
| `political`      | `string` | `political jokes` |
| `parody `      | `string` | `parody  jokes` |
| `funny`      | `string` | `funny jokes` |
| `clean`      | `string` | `clean jokes` |



##
#### Response
```
{
    content: "What is a computer's favourite snack? Computer chips",
    sources: "parade.com",
    type: "funny",
    id: "28",
    url: null
}
```
