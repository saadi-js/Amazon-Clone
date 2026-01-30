// Loading Utilities
const LoadingUtils = {
    // Show full-page loading overlay
    showOverlay: function(message = 'Loading...') {
        const existingOverlay = document.getElementById('loading-overlay');
        if (existingOverlay) {
            existingOverlay.classList.remove('hidden');
            return;
        }

        const overlay = document.createElement('div');
        overlay.id = 'loading-overlay';
        overlay.className = 'loading-overlay';
        overlay.innerHTML = `
            <div class="loading-spinner"></div>
            <div class="loading-text">${message}</div>
        `;
        document.body.appendChild(overlay);
    },

    // Hide full-page loading overlay
    hideOverlay: function() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
            setTimeout(() => overlay.remove(), 300);
        }
    },

    // Add loading state to button
    buttonLoading: function(button, loading = true) {
        if (loading) {
            button.classList.add('loading');
            button.disabled = true;
            button.dataset.originalText = button.textContent;
        } else {
            button.classList.remove('loading');
            button.disabled = false;
            if (button.dataset.originalText) {
                button.textContent = button.dataset.originalText;
            }
        }
    },

    // Create skeleton loading for product cards
    createProductSkeleton: function(count = 8) {
        const skeletons = [];
        for (let i = 0; i < count; i++) {
            skeletons.push(`
                <div class="skeleton-card">
                    <div class="skeleton skeleton-title"></div>
                    <div class="skeleton skeleton-image"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text-short"></div>
                    <div class="skeleton skeleton-button"></div>
                </div>
            `);
        }
        return `<div class="skeleton-grid">${skeletons.join('')}</div>`;
    },

    // Show skeleton loading in a container
    showSkeleton: function(container, count = 8) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) {
            container.innerHTML = this.createProductSkeleton(count);
        }
    },

    // Create inline spinner
    createInlineSpinner: function() {
        return '<span class="loading-spinner-small"></span>';
    },

    // Add progress bar to container
    showProgressBar: function(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) {
            const progress = document.createElement('div');
            progress.className = 'loading-progress';
            progress.innerHTML = '<div class="loading-progress-bar"></div>';
            container.appendChild(progress);
            return progress;
        }
    },

    // Remove progress bar
    hideProgressBar: function(progressBar) {
        if (progressBar && progressBar.parentNode) {
            progressBar.remove();
        }
    }
};

// Make it globally available
window.LoadingUtils = LoadingUtils;
