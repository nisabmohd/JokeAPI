
## Jokes API

 A simple API that gives you random Jokes 

<br>

### API Reference

#### Get all items

```http
  GET /dank
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `dank` | `string` | `dank jokes`| 

#### Get dank jokes

```http
  GET /political
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `clean`      | `string` | `clean jokes` |


###

#### Get jokes from below parameter 

```http
  GET /{parameter}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dank`      | `string` | `dank jokes` |
| `political`      | `string` | `political jokes` |
| `dry `      | `string` | `dry  jokes` |
| `clean`      | `string` | `clean jokes` |



##
#### Response
```
{
  "content": "What is a computer's favourite snack? Computer chips",
  "sources": "laughfactory",
  "type": "clean",
  "id": "c3",
  "url": "http://www.laughfactory.com/jokes/clean-jokes"
}
```