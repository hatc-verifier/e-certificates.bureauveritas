async function verifyCertificate() {
    const userInput = document.getElementById('cert-number').value.trim();

    if (!userInput) {
        alert("Please enter a document number.");
        return;
    }

    try {
        // GitHub Pages-এর জন্য './' যোগ করা ভালো
        const response = await fetch('./data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const certificates = await response.json();
        
        const foundData = certificates.find(item => item.id === userInput);

        if (foundData) {
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
            alert("Certificate not found in our record!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to load data. Please make sure data.json exists and try again.\n\nError: " + error.message);
    }
}
