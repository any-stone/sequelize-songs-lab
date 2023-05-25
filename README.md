# Sequelize Songs API
Perform CRUD operations on the database of songs!

## Endpoints
The following section provides information on the available endpoints for this API.

### Create a Song

**Method**: ```POST```

**Endpoint**: ```/api/songs```

**Description**: This endpoint creates a new song with the provided information in the request body.

Request Body:
```
{
  "name": "string",
  "release": integer,
  "album": "string"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "release": integer,
  "album": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All Songs

**Method**: GET

**Endpoint**: ```/api/songs```

**Description**: This endpoint retrieves all the songs stored in the database.

Response:
```
[
  {
    "id": integer,
    "name": "string",
    "release": integer,
    "album": "string",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

### Update a Cat

**Method**: ```PUT```

**Endpoint**: ```/api/songs/:songId```

**Description**: This endpoint updates the song with the specified id using the information in the request body.

Request Body:
```
{
  "name": "string",
  "release": integer,
  "album": "string"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "release": integer,
  "album": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Delete a Song

**Method**: ```DELETE```

**Endpoint**: ```/api/songs/:songId```

**Description**: This endpoint deletes the song with the specified id from the database.

Response:
```
{
  "id": integer,
  "name": "string",
  "release": integer,
  "album": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```