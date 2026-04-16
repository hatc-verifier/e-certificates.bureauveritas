async function goToResult() {
    const searchInput = document.getElementById('cert-id').value.trim();

    if (!searchInput) {
        alert("Please enter a certificate number.");
        return;
    }

    try {
        const response = await fetch('data.json');
        const certificates = await response.json();

        const match = certificates.find(c => c.id === searchInput);

        if (match) {
            // হোম পেজ লুকিয়ে রেজাল্ট পেজ দেখানো
            document.getElementById('search-page').classList.add('hidden');
            document.getElementById('result-page').classList.remove('hidden');

            const container = document.getElementById('result-content');
            container.innerHTML = `
                <div class="data-item"><span class="data-label">Deliverable Id :</span> <span>${match.id}</span></div>
                <div class="data-row"><span class="data-label">Published on :</span> <span>${match.published}</span></div>
                <div class="data-item"><span class="data-label">QR Code Status :</span> <span style="color:green">${match.status}</span></div>
                <div class="data-item"><span class="data-label">NAME :</span> <span>${match.name}</span></div>
                <div class="data-item"><span class="data-label">ID :</span> <span>${match.user_id}</span></div>
                <div class="data-item"><span class="data-label">VALID UNTIL :</span> <span>${match.valid_until}</span></div>
                <div class="data-item"><span class="data-label">TYPE :</span> <span>${match.type}</span></div>
            `;
        } else {
            alert("Certificate not found!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Data load error!");
    }
}
