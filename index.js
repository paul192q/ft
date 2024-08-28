document.getElementById('fetchBtn').addEventListener('click', async () => {
    const contractAddr = document.getElementById('contractAddr').value;
    const key = '';
    const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${key}/getOwnersForCollection`;
    const fetchURL = `${baseURL}?contractAddress=${contractAddr}`;
    
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    try {
        const response = await fetch(fetchURL, requestOptions);
        const result = await response.json();
        const res = result.ownerAddresses;
        
        // Save to a text file (client-side)
        const blob = new Blob([JSON.stringify(res, null, 2)], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = url;
        downloadLink.download = 'WalletAddresses.txt';
        downloadLink.textContent = 'Download Wallet Addresses';
        downloadLink.style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('toggleTheme');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Switch to Light Mode';
    } else {
        themeButton.textContent = 'Switch to Dark Mode';
    }
});
