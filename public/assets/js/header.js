 tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        nexus: {
                            blue: '#2563eb',
                            purple: '#7c3aed',
                            cyan: '#0891b2',
                            accent: '#e11d48',
                            dark: '#0f172a',
                            darker: '#020617'
                        }
                    }
                }
            }
        }
// Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }

        // Dark Mode Toggle
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const icon = document.getElementById('darkModeIcon');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }

        // Admin Panel Toggle (Placeholder - implement as needed)
        function toggleAdminPanel() {
            console.log('Admin panel toggle clicked');
            // Implement your admin panel logic here
            showToast('Info', 'Admin panel feature - implement as needed');
        }

        // Lead Modal Open (Placeholder - implement as needed)
        function openLeadModal(service = '') {
            console.log('Opening lead modal for:', service);
            // Implement your lead modal logic here
            showToast('Info', 'Lead modal - implement as needed');
        }

        // Toast Notification
        function showToast(title, message, type = 'success') {
            // Remove existing toast if any
            const existingToast = document.getElementById('toast');
            if (existingToast) {
                existingToast.remove();
            }

            // Create toast element
            const toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast flex items-center gap-3';
            
            const iconClass = type === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600';
            const icon = type === 'error' ? 'fa-exclamation' : 'fa-check';
            
            toast.innerHTML = `
                <div class="w-8 h-8 rounded-full ${iconClass} flex items-center justify-center shrink-0">
                    <i class="fas ${icon}"></i>
                </div>
                <div>
                    <h4 class="font-bold text-slate-900">${title}</h4>
                    <p class="text-sm font-medium text-slate-500">${message}</p>
                </div>
            `;
            
            document.body.appendChild(toast);
            
            // Trigger animation
            setTimeout(() => {
                toast.classList.add('show');
            }, 10);
            
            // Auto hide
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3000);
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 100) {
                nav.classList.add('shadow-md', 'bg-white/95');
                nav.classList.remove('bg-white/80');
            } else {
                nav.classList.remove('shadow-md', 'bg-white/95');
                nav.classList.add('bg-white/80');
            }
        });

        // Close mobile menu on window resize (if desktop)
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                const mobileMenu = document.getElementById('mobileMenu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const mobileMenu = document.getElementById('mobileMenu');
            const toggleBtn = document.querySelector('button[onclick="toggleMobileMenu()"]');
            
            if (!mobileMenu.classList.contains('hidden') && 
                !mobileMenu.contains(e.target) && 
                !toggleBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
