async function searchCertificate() {
    const inputId = document.getElementById('doc-id').value.trim();
    const response = await fetch('data.json');
    const certificates = await response.json();

    const result = certificates.find(cert => cert.id === inputId);

    if (result) {
        document.getElementById('search-section').classList.add('hidden');
        const resultSection = document.getElementById('result-section');
        resultSection.classList.remove('hidden');

        const container = document.getElementById('data-container');
        container.innerHTML = `
            <div class="data-row"><span class="data-label">Deliverable Id :</span> <span>${result.id}</span></div>
            <div class="data-row"><span class="data-label">Published on :</span> <span>${result.published}</span></div>
            <div class="data-row"><span class="data-label">QR Code Status :</span> <span>${result.status}</span></div>
            <div class="data-row"><span class="data-label">NAME :</span> <span>${result.name}</span></div>
            <div class="data-row"><span class="data-label">ID :</span> <span>${result.user_id}</span></div>
            <div class="data-row"><span class="data-label">ISSUED ON :</span> <span>${result.issued}</span></div>
            <div class="data-row"><span class="data-label">VALID UNTIL :</span> <span>${result.valid_until}</span></div>
            <div class="data-row"><span class="data-label">TYPE :</span> <span>${result.type}</span></div>
            <div class="data-row"><span class="data-label">MODEL :</span> <span>${result.model}</span></div>
            <div class="data-row"><span class="data-label">COMPANY :</span> <span>${result.company}</span></div>
            <div class="data-row"><span class="data-label">TRAINING LOCATION :</span> <span>${result.location}</span></div>
            <div class="data-row"><span class="data-label">TRAINER :</span> <span>${result.trainer}</span></div>
        `;
    } else {
        alert("ভুল নম্বর! দয়া করে সঠিক সার্টিফিকেট নম্বর দিন।");
    }
}

