
<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  data() {
    return {
      bandNames: [],
      booking: [],
      bandName: [],
      data: [],
      chartData: {
        labels: [],
        datasets: [
          {
            borderWidth: 1,
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            data: [],
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  created() {
    var vm = this;
    this.axios
      .get('http://localhost:3000/booking', {})

      .then(function (response) {
        console.log(response.data);
        vm.booking = response.data;
      });

    this.axios
      .get('http://localhost:3000/concerts', {})

      .then(function (response) {
        console.log(response.data);
        vm.bandNames = response.data;

        vm.bandNames.forEach((item) => {
          vm.chartData.labels.push(item.band);
        });

        var count = 0;

        response.data.forEach((item) => {
          count = 0;
          vm.booking.forEach((i) => {
            if (item._id == i.concertID) {
              count++;
            }
          });
          vm.chartData.datasets[0].data.push(count);
        });
      });
  },
  mounted() {
    setTimeout(() => {
      this.renderChart(this.chartData, this.options);
    }, 1000);
  },
};
</script>