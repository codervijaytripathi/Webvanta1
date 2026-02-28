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




   // Toast Notification Function
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

        // Scroll to Top Function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Scroll Button Visibility
        window.addEventListener('scroll', () => {
            const scrollBtn = document.getElementById('scrollTopBtn');
            if (window.scrollY > 300) {
                scrollBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
            } else {
                scrollBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
            }
        });

        // Newsletter Submit Handler
        function handleNewsletterSubmit(e) {
            e.preventDefault();
            const form = e.target;
            const email = form.querySelector('input[type="email"]').value;
            
            // Simulate API call
            setTimeout(() => {
                showToast('Success', `Thanks for subscribing! We've sent a confirmation to ${email}`);
                form.reset();
            }, 500);
        }

        // Placeholder Functions (Implement as needed)
        function openLeadModal(service = '') {
            console.log('Opening lead modal for:', service);
            showToast('Info', 'Lead modal - implement as needed');
        }

        function toggleAdminPanel() {
            console.log('Admin panel toggle clicked');
            showToast('Info', 'Admin panel - implement as needed');
        }

        // Mobile Detection for Sticky CTA
        function checkMobile() {
            const mobileCta = document.querySelector('.mobile-sticky-cta');
            if (window.innerWidth < 768) {
                mobileCta.style.display = 'flex';
                // Add padding to body to prevent content being hidden
                document.body.style.paddingBottom = '80px';
            } else {
                mobileCta.style.display = 'none';
                document.body.style.paddingBottom = '0';
            }
        }

        // Check on load and resize
        window.addEventListener('load', checkMobile);
        window.addEventListener('resize', checkMobile);

        // Current Year Auto Update
        document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} GoodWeb Intelligence Agency. All rights reserved.`;
