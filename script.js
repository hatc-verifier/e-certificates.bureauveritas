async function verifyCertificate() {
    const userInput = document.getElementById('cert-number').value.trim();

    // বক্স খালি থাকলে ওয়ার্নিং দেবে
    if (!userInput) {
        alert("Please enter a document number.");
        return;
    }

    try {
        const response = await fetch('data.json');
        const certificates = await response.json();
        
        // ডাটাবেজে আপনার দেওয়া নাম্বার খুঁজবে
        const foundData = certificates.find(item => item.id === userInput);

        if (foundData) {
            // সঠিক নাম্বার হলে রেজাল্ট পেজ দেখাবে
            document.getElementById('search-section').classList.add('hidden');
            document.getElementById('result-section').classList.remove('hidden');

            const container = document.getElementById('result-data');
            container.innerHTML = `
                <div class="data-item"><span class="data-label">Deliverable Id :</span> <span>${foundData.id}</span></div>
                <div class="data-item"><span class="data-label">Published on :</span> <span>${foundData.published}</span></div>
                <div class="data-item"><span class="data-label">Status :</span> <span style="color:green;font-weight:bold;">Validated</span></div>
                <div class="data-item"><span class="data-label">NAME :</span> <span>${foundData.name}</span></div>
                <div class="data-item"><span class="data-label">ID :</span> <span>${foundData.user_id}</span></div>
                <div class="data-item"><span class="data-label">VALID UNTIL :</span> <span>${foundData.valid_until}</span></div>
                <div class="data-item"><span class="data-label">TYPE :</span> <span>${foundData.type}</span></div>
            `;
        } else {
            // ভুল নাম্বার হলে এই মেসেজ আসবে
            alert("Certificate not found in our record!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("System error! Please make sure data.json is present.");
    }
}
