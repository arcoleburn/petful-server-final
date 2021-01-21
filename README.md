# Petful Server

- [Live App](https://petful-client-final.vercel.app/)
- [Client Repo](https://github.com/arcoleburn/petful-client-final)
## Built With

- Node
- Express


## Summary 

This is a small project showcasing the use of the Queue data structure. 

Users are matched with pets to adopt on a first in, first out basis. The first user in line is the first to adopt, while the first pet in the shelter is the first to get adopted. 


## API Documentation

[BASE URL](http://petful-server.herokuapp.com/api/)

GET /api/dog

- Provides array of all dog objectsgit u

Example request/response:

```
GET /dog

HTTP STATUS 200 OK

[
    {
"imageURL": "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
"imageDescription": "A smiling golden-brown golden retreiver listening to music.",
"name": "Zeus",
"sex": "Male",
"age": 3,
"breed": "Golden Retriever",
"story": "Owner Passed away"
},
...
]
```

Get /cat

- Provides array of all cat objects

Example request/response:

```
GET 

HTTP STATUS 200 OK

[
    {
"imageURL": "https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg",
"imageDescription": "Orange bengal cat with black stripes lounging on concrete.",
"name": "Fluffy",
"sex": "Female",
"age": 2,
"breed": "Bengal",
"story": "Thrown on the street"
},...
]

```

GET /people

- Provides an array of all people

Example request/response:

```
GET 
HTTP STATUS 200 OK

[
"Randy Lahey",
"Trevor Cory",
"Jim Lahey"
]

```

POST /people

- Creates a new person at the bottom of the list. Requires a request body

Example request/response:

```

POST 
REQ BODY: {
    "name": "evi",
}

Response:
[
"Randy Lahey",
"Trevor Cory",
"Jim Lahey",
"Evi"
]

```

DELETE /people

- Delete person on the top of the line

Example Request/Response

```
DELETE


Response:
[
"Trevor Cory",
"Jim Lahey",
"Evi"
]

```

DELETE /dog

- DELETE dog at the top of the line

EXAMPLE request/response:

```
DELETE

[
{
"age": 3,
"breed": "Golden Retriever",
"description": "A smiling golden-brown golden retreiver listening to music.",
"gender": "Male",
"imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"name": "Zim",
"story": "Owner Passed away"
},
]
```

DELETE /cat

- DELETE cat at the top of the line

EXAMPLE request/response:

```
DELETE 
[
{
"age": 2,
"breed": "Bengal",
"description": "Orange bengal cat with black stripes lounging on concrete.",
"gender": "Female",
"imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"name": "Steve French",
"story": "Thrown on the street"
},
]
```
