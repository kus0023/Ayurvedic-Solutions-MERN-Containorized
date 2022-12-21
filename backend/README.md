# Ayurvedic-Solutions-MERN

# API

### Note

**_# public_**  
The URL which are public needs no token

**_# private_**  
The URL which are private yuo need to pass token in header

> Authorization = Bearer \<Token>

_Note: Token is provided when you login_

## Admin Routes

## **public**

- **Login And Get Token**

> URL : **/api/admin/login**

```
method: POST
body: {email, password}
```

## **private**

- **Get All Users**

> URL : **/api/admin/users?page=[page]&limit=[limit]**

```
method: GET
params: page, limit
```

- **Get All Admins**

> URL : **/api/admin/admins?page=[page]&limit=[limit]**

```
method: GET
params: page, limit
```

- **Add new user or admin**
  > URL : **/api/admin/register**

```
method: POST
body: {firstName, lastName, email, password, isAdmin=[boolean]}
description:
Only admins can add new user or make user admin.
Hence, it is private route.
```
