document.addEventListener('DOMContentLoaded', function () {

    function deletePackage(packageId) {
        fetch(`http://localhost:3000/packages/${packageId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const row = document.getElementById(`package-${packageId}`);
            if (row) {
                row.remove();
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            alert('Məlumat silinərkən xəta baş verdi: ' + error.message);
        });
    }

  
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const packageId = button.getAttribute('data-package-id');
            deletePackage(packageId);
        });
    });
});
