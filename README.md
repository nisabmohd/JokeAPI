
## Jokes API

 A simple API that gives you random Jokes 

<br>

### API Reference

#### Get all items

```http
  GET /all
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `all` | `string` | `All jokes`| 

#### Get dank jokes

```http
  GET /dank
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `political`      | `string` | `dank jokes` |


###

#### Get jokes from below Parameter 

```http
  GET /{Parameter}
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