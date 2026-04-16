async function searchData() {
    const val = document.getElementById('cert-input').value.trim();
    if (!val) return alert("Please enter a number");

    try {
        const res = await fetch('data.json');
        const data = await res.json();
        const item = data.find(i => i.id === val);

        if (item) {
            document.getElementById('search-view').classList.add('hidden');
            document.getElementById('result-view').classList.remove('hidden');
            
            document.getElementById('display-data').innerHTML = `
                <div class="data-row"><span class="data-label">Deliverable Id :</span> <span>${item.id}</span></div>
                <div class="data-row"><span class="data-label">Status :</span> <span style="color:green">Validated</span></div>
                <div class="data-row"><span class="data-label">NAME :</span> <span>${item.name}</span></div>
                <div class="data-row"><span class="data-label">ID :</span> <span>${item.user_id}</span></div>
                <div class="data-row"><span class="data-label">VALID UNTIL :</span> <span>${item.valid_until}</span></div>
            `;
        } else {
            alert("Not Found!");
        }
    } catch (e) { console.log(e); }
}
