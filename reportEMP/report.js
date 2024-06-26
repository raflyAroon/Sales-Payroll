document.addEventListener('DOMContentLoaded', function () {
  // Load existing data from localStorage
  loadReportData();

  // Handle form submission
  document.getElementById('reportForm').addEventListener('submit', function (e) {
    e.preventDefault();
    saveReportData();
    loadReportData();

    // Close the modal
    $('#reportModal').modal('hide');
  });
});

function saveReportData() {
  // Get form values
  const reportData = {
    hari: document.getElementById('hari').value,
    dalamKantor: document.getElementById('dalamKantor').value,
    diluarKantor: document.getElementById('diluarKantor').value,
    kunjunganDalamKantor: document.getElementById('kunjunganDalamKantor').value,
    panggilanKeluar: document.getElementById('panggilanKeluar').value,
    panggilanTelepon: document.getElementById('panggilanTelepon').value,
    teleponRekeningBaru: document.getElementById('teleponRekeningBaru').value,
    ruangTamu: document.getElementById('ruangTamu').value,
    makananDanMinuman: document.getElementById('makananDanMinuman').value,
    sewaRuangRapat: document.getElementById('sewaRuangRapat').value,
    lainnya: document.getElementById('lainnya').value,
    total: document.getElementById('total').value
  };

  // Retrieve existing data from localStorage
  let reportDataArray = JSON.parse(localStorage.getItem('reportData')) || [];
  reportDataArray.push(reportData);

  // Store the updated data array back in localStorage
  localStorage.setItem('reportData', JSON.stringify(reportDataArray));

  // Reset the form
  document.getElementById('reportForm').reset();
}

function loadReportData() {
  // Clear the existing table data
  const tableBody = document.querySelector('#reportTable tbody');
  tableBody.innerHTML = '';

  // Retrieve data from localStorage
  const reportDataArray = JSON.parse(localStorage.getItem('reportData')) || [];

  // Populate the table with the data
  reportDataArray.forEach((reportData, index) => {
    const row = tableBody.insertRow();

    Object.values(reportData).forEach(value => {
      const cell = row.insertCell();
      cell.textContent = value;
    });

    // Add action buttons (Edit and Delete)
    const actionCell = row.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger';
    deleteButton.onclick = function () {
      deleteReportData(index);
    };
    actionCell.appendChild(deleteButton);
  });
}

function deleteReportData(index) {
  // Retrieve existing data from localStorage
  let reportDataArray = JSON.parse(localStorage.getItem('reportData')) || [];
  reportDataArray.splice(index, 1);

  // Store the updated data array back in localStorage
  localStorage.setItem('reportData', JSON.stringify(reportDataArray));

  // Reload the data in the table
  loadReportData();
}
