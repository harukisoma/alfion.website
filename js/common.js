async function fetchHtmlAsText(url) {
    const response = await fetch(url);
    return await response.text();
}

async function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = await fetchHtmlAsText('/_header.html');
    }
}

async function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = await fetchHtmlAsText('/_footer.html');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
}); 