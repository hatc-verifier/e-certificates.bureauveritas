async function searchData() {
    const val = document.getElementById('cert-input').value.trim();
    if (!val) {
        alert("Please enter a document number");
        return;
    }

    try {
        const res = await fetch('data.json');
        const data = await res.json();
        const item = data.find(i => i.id === val);

        if (item) {
            // সার্চ পেজ লুকিয়ে রেজাল্ট পেজ দেখানো
            document.getElementById('search-view').classList.add('hidden');
            document.getElementById('result-view').classList.remove('hidden');
            
            document.getElementById('display-data').innerHTML = `
                <div class="data-row"><span class="data-label">Deliverable Id :</span> <span>${item.id}</span></div>
                <div class="data-row"><span class="data-label">Published on :</span> <span>${item.published || '06/04/2026'}</span></div>
                <div class="data-row"><span class="data-label">Status :</span> <span style="color:green; font-weight:bold;">Validated</span></div>
                <div class="data-row"><span class="data-label">NAME :</span> <span>${item.name}</span></div>
                <div class="data-row"><span class="data-label">ID :</span> <span>${item.user_id}</span></div>
                <div class="data-row"><span class="data-label">VALID UNTIL :</span> <span>${item.valid_until}</span></div>
                <div class="data-row"><span class="data-label">TYPE :</span> <span>${item.type}</span></div>
            `;
        } else {
            alert("Certificate number not found in our record!");
        }
    } catch (e) { 
        console.error(e); 
        alert("Error loading data. Check if data.json exists.");
    }
}
