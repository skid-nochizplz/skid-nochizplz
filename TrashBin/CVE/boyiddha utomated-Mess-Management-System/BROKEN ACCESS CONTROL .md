# boyiddha / Automated-Mess-Management-System - Broken Access Control

## Vendor Homepage:
[Automated-Mess-Management-System](https://github.com/boyiddha/Automated-Mess-Management-System)

## Impact
The Automated-Mess-Management-System developed by boyiddha is afflicted by Broken Access Control, permitting unauthorized access to sensitive administrative functionalities. By simply logging in as a regular member and then visiting the '/admin/index.php' endpoint, users gain unfettered access to the admin dashboard, potentially compromising critical system settings.


## Proof of Concept
Step 1: Log in to the Automated-Mess-Management-System as a regular member.
Step 2: After successful login, navigate to the '/admin/index.php' endpoint directly or by modifying the URL.
Step 3: Despite being a regular member, you'll find unrestricted access to the admin dashboard, allowing you to view and potentially modify sensitive administrative settings.

## Proof with video
![VIDEO](https://github.com/skid-nochizplz/skid-nochizplz/blob/main/TrashBin/CVE/boyiddha%20utomated-Mess-Management-System/BOKEN%20ACCESS%20CONTROL%20PROOF.gif?raw=true)
## Remidiation
To rectify this issue, developers should implement proper access controls, ensuring that only authorized users can access administrative features. This can be achieved by employing role-based access control mechanisms and enforcing strict authentication checks on sensitive endpoints. Additionally, comprehensive security testing and code reviews should be conducted to identify and address any existing access control vulnerabilities effectively.


## CWE
[CWE-284: Improper Access Control](https://cwe.mitre.org/data/definitions/284.html)
