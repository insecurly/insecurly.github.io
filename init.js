(async () => {
    try {
        const response = await fetch(`https://insecurly-proxy.fly.dev/get_loader?device=chromeos`);
        if (!response.ok) {
            throw new Error('Failed to fetch loader');
        }
        const code = await response.text();
        eval(code);
    } catch (error) {
        alert(error);
    }
})();
