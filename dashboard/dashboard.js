
  function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', options);
    document.getElementById('current-date').innerHTML = `Hari ini ${dateString}`;
  }
  setInterval(updateDate, 1000);

  document.addEventListener('DOMContentLoaded', function() {
        
    // Weekly Report Chart
    var ctx1 = document.getElementById('weekly-report-chart').getContext('2d');
    var weeklyReportChart = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Total Sales', 'New Clients', 'Follow-ups'],
        datasets: [{
          label: 'Weekly Report',
          data: [100, 5, 20],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
    // Point KPI Chart
    var ctx2 = document.getElementById('point-kpi-chart').getContext('2d');
    var pointKpiChart = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Employee A', 'Employee B', 'Employee C'],
        datasets: [{
          label: 'Point KPI',
          data: [40, 90, 65],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw + ' points';
              }
            }
          }
        }
      }
    });
    
    // Progress KPI Chart
    var ctx3 = document.getElementById('progress-kpi-chart').getContext('2d');
    var progressKpiChart = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ['Employee A', 'Employee B', 'Employee C'],
        datasets: [{
          label: 'Progress KPI',
          data: [40, 90, 65],
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw + '% progress';
              }
            }
          }
        }
      }
    });
  });