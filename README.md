
## Jokes API

 A simple API that gives you random Jokes 

<p>   </p>

### API Reference

#### Get all items

<<<<<<< HEAD
```http
  GET /dank
=======
```
  GET/all
>>>>>>> 7d7747d43dd9c62714500e085cc08f4f57b614fd
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `dank` | `string` | `dank jokes`| 

#### Get dank jokes

<<<<<<< HEAD
```http
  GET /political
=======
```
  GET/dank
>>>>>>> 7d7747d43dd9c62714500e085cc08f4f57b614fd
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `clean`      | `string` | `clean jokes` |


###

#### Get jokes from below parameter 

<<<<<<< HEAD
```http
  GET /{parameter}
=======
```
  GET/{Parameter}
>>>>>>> 7d7747d43dd9c62714500e085cc08f4f57b614fd
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
