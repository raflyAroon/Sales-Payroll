document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.score');
  
    // Load saved state from localStorage
    const savedState = localStorage.getItem('checkboxes');
    if (savedState) {
      const savedCheckboxes = JSON.parse(savedState);
      checkboxes.forEach((checkbox, index) => {
        checkbox.checked = savedCheckboxes[index];
      });
    }
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          // Uncheck other checkboxes in the same row
          const row = this.closest('tr');
          row.querySelectorAll('.score').forEach(cb => {
            if (cb !== this) {
              cb.checked = false;
            }
          });
        }
  
        // Save state to localStorage
        const checkboxesState = [];
        checkboxes.forEach(checkbox => {
          checkboxesState.push(checkbox.checked);
        });
        localStorage.setItem('checkboxes', JSON.stringify(checkboxesState));
      });
    });
  });