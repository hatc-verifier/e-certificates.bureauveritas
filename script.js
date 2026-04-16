async function handleSearch() {
    const searchVal = document.getElementById('cert-input').value.trim();
    
    if (!searchVal) {
        alert("Please enter a document number.");
        return;
    }

    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // JSON ফাইল থেকে ডাটা খোঁজা
        const result = data.find(item => item.id === searchVal);

        if (result) {
            // হোম পেজ লুকানো এবং রেজাল্ট পেজ দেখানো
            document.getElementById('home-page').classList.add('hidden');
            const resultPage = document.getElementById('result-page');
            resultPage.classList.remove('hidden');

            const display = document.getElementById('result-display');
            display.innerHTML = `
                <div class="info-row"><span class="row-label">Deliverable Id:</span> <span>${result.id}</span></div>
                <div class="info-row"><span class="row-label">Published on:</span> <span>${result.published}</span></div>
                <div class="info-row"><span class="row-label">QR Code Status:</span> <span>${result.status}</span></div>
                <div class="info-row"><span class="row-label">NAME:</span> <span>${result.name}</span></div>
                <div class="info-row"><span class="row-label">ID:</span> <span>${result.user_id}</span></div>
                <div class="info-row"><span class="row-label">VALID UNTIL:</span> <span>${result.valid_until}</span></div>
                <div class="info-row"><span class="row-label">TYPE:</span> <span>${result.type}</span></div>
                <div class="info-row"><span class="row-label">TRAINING LOCATION:</span> <span>${result.location}</span></div>
            `;
        } else {
            alert("Certificate not found!");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
