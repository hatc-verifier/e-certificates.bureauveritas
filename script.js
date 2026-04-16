async function showResult() {
    const inputVal = document.getElementById('cert-number').value.trim();

    if (!inputVal) {
        alert("Please enter a document number!");
        return;
    }

    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const found = data.find(item => item.id === inputVal);

        if (found) {
            document.getElementById('search-page').classList.add('hidden');
            document.getElementById('result-page').classList.remove('hidden');

            const output = document.getElementById('data-output');
            output.innerHTML = `
                <div class="info-item"><span class="info-label">Deliverable Id :</span> <span>${found.id}</span></div>
                <div class="info-item"><span class="info-label">Published on :</span> <span>${found.published}</span></div>
                <div class="info-item"><span class="info-label">QR Code Status :</span> <span>${found.status}</span></div>
                <div class="info-item"><span class="info-label">NAME :</span> <span>${found.name}</span></div>
                <div class="info-item"><span class="info-label">ID :</span> <span>${found.user_id}</span></div>
                <div class="info-item"><span class="info-label">ISSUED ON :</span> <span>${found.issued}</span></div>
                <div class="info-item"><span class="info-label">VALID UNTIL :</span> <span>${found.valid_until}</span></div>
                <div class="info-item"><span class="info-label">TYPE :</span> <span>${found.type}</span></div>
                <div class="info-item"><span class="info-label">TRAINING LOCATION :</span> <span>${found.location}</span></div>
            `;
        } else {
            alert("Certificate number not found in database.");
        }
    } catch (err) {
        console.error("Error loading data:", err);
    }
}
