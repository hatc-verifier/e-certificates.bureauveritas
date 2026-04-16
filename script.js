async function searchData() {
    const inputField = document.getElementById('cert-id');
    const val = inputField.value.trim();

    if (!val) {
        alert("Please enter a document number.");
        return;
    }

    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const found = data.find(item => item.id === val);

        if (found) {
            document.getElementById('search-view').classList.add('hidden');
            document.getElementById('result-view').classList.remove('hidden');

            const container = document.getElementById('data-container');
            container.innerHTML = `
                <div class="data-row"><span class="data-label">Deliverable Id :</span> <span>${found.id}</span></div>
                <div class="data-row"><span class="data-label">Status :</span> <span style="color:green;font-weight:bold;">Validated</span></div>
                <div class="data-row"><span class="data-label">NAME :</span> <span>${found.name}</span></div>
                <div class="data-row"><span class="data-label">ID :</span> <span>${found.user_id}</span></div>
                <div class="data-row"><span class="data-label">VALID UNTIL :</span> <span>${found.valid_until}</span></div>
                <div class="data-row"><span class="data-label">TYPE :</span> <span>${found.type}</span></div>
            `;
        } else {
            alert("Record not found!");
        }
    } catch (err) {
        alert("Error loading data.json");
    }
}
