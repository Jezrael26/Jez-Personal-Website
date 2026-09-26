// Initialize Lucide icons
        lucide.createIcons();

        // Surprise Me / Randomize functionality
        const surpriseData = [
            { title: "Random Fun Fact 🚀", desc: "Did you know? Coding a custom stock transfer system saves hours of reconciliation weekly and reduces errors to near zero!" },
            { title: "Riding Vibe 🛵", desc: "Weekend goal: A long NMAX scenic ride up the winding mountain roads with crisp morning air." },
            { title: "Basketball Mindset 🏀", desc: "Teamwork on the hardcourt translates directly to collaborating on software architecture and developer projects." },
            { title: "Tech Stack Quote 💻", desc: "Simplicity is prerequisite for reliability. Keep your tools clean, modular, and fast." }
        ];

        function triggerSurprise() {
            const randomItem = surpriseData[Math.floor(Math.random() * surpriseData.length)];
            document.getElementById('modal-title').textContent = randomItem.title;
            document.getElementById('modal-desc').textContent = randomItem.desc;
            document.getElementById('modal').classList.remove('hidden');
        }

        function showProjectModal(title, desc) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-desc').textContent = desc;
            document.getElementById('modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('modal').classList.add('hidden');
        }

        // Close modal on outside click
        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }
