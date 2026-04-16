async function performSearch() {
    const searchId = document.getElementById('cert-id').value.trim();
    if (!searchId) {
        alert("Please enter a document number!");
        return;
    }

    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const result = data.find(item => item.id === searchId);

        if (result) {
            document.getElementById('search-section').classList.add('hidden');
            document.getElementById('result-section').classList.remove('hidden');

            const table = document.getElementById('data-list');
            table.innerHTML = `
                <div class="data-row"><span class="row-key">Deliverable Id :</span><span>${result.id}</span></div>
                <div class="data-row"><span class="row-key">Published on :</span><span>${result.published}</span></div>
                <div class="data-row"><span class="row-key">Status :</span><span>${result.status}</span></div>
                <div class="data-row"><span class="row-key">NAME :</span><span>${result.name}</span></div>
                <div class="data-row"><span class="row-key">ID :</span><span>${result.user_id}</span></div>
                <div class="data-row"><span class="row-key">VALID UNTIL :</span><span>${result.valid_until}</span></div>
                <div class="data-row"><span class="row-key">TYPE :</span><span>${result.type}</span></div>
            `;
        } else {
            alert("No data found with this number!");
        }
    } catch (e) {
        console.error("Data error", e);
    }
}
