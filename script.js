const randomData = [
    { icon: "fa-code", title: "Coding Mantra", text: "Always write clean code, keep your repositories organized, and test before deploying!" },
    { icon: "fa-heart", title: "Family Reminder", text: "No matter how busy work gets, always make time for weekend moments with family." },
    { icon: "fa-laptop-code", title: "Current Tech Focus", text: "Exploring automated workflows, Python scripts, and seamless database storage using Supabase." },
    { icon: "fa-mug-hot", title: "Coffee & Hustle", text: "Great web apps are fueled by perseverance, problem-solving, and a good cup of coffee." }
];

function triggerRandomFeature() {
    const randomIndex = Math.floor(Math.random() * randomData.length);
    const item = randomData[randomIndex];
    
    document.getElementById('randomIcon').className = `fa-solid ${item.icon}`;
    document.getElementById('randomTitle').innerText = item.title;
    document.getElementById('randomText').innerText = `"${item.text}"`;
    
    document.getElementById('randomModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('randomModal').classList.add('hidden');
}

window.onclick = function(event) {
    const modal = document.getElementById('randomModal');
    if (event.target == modal) {
        closeModal();
    }
}
