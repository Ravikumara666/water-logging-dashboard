import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ref, onValue } from 'firebase/database';
import database from './firebaseConfig';
import 'chart.js/auto';

const WaterLevelChart = () => {
  const [filter, setFilter] = useState('1 day');
  const [chartData, setChartData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const dataRef = ref(database, 'waterLevel/dates');

    // Listen for data changes from Firebase
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('Data from Firebase:', data); // Debugging log
        const formattedData = processFirebaseData(data, filter);
        setChartData(formattedData);
      } else {
        console.log('No data found'); // Debugging log
        setChartData({ labels: [], values: [] });
      }
    });
  }, [filter]);

  const processFirebaseData = (data, selectedFilter) => {
    const labels = [];
    const values = [];
    const dates = Object.keys(data).sort();

    if (selectedFilter === '1 day') {
      // For today's data points
      const today = new Date().toISOString().split('T')[0];
      if (data[today]) {
        const times = Object.keys(data[today]).sort(); // Get all times sorted
        times.forEach((time) => {
          labels.push(time);
          values.push(data[today][time].current); // Push all current values
        });
      }
    } else if (selectedFilter === '1 week' || selectedFilter === '1 month') {
      // For weekly or monthly highest values
      const daysToShow = selectedFilter === '1 week' ? 7 : 30;
      const filteredDates = dates.slice(-daysToShow); // Last 7 or 30 days

      filteredDates.forEach((date) => {
        if (data[date]) {
          const times = Object.keys(data[date]);
          const highestValues = times.map((time) => data[date][time].highest);
          const highestValueOfTheDay = Math.max(...highestValues);

          labels.push(date);
          values.push(highestValueOfTheDay); // Push the highest value of the day
        }
      });
    }

    return { labels, values };
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handlePointClick = (event, elements) => {
    if (elements.length > 0) {
      const { index } = elements[0];
      const label = chartData.labels[index];
      alert(`Time/Date: ${label}`);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilterChange('1 day')}>1 Day</button>
        <button onClick={() => handleFilterChange('1 week')}>1 Week</button>
        <button onClick={() => handleFilterChange('1 month')}>1 Month</button>
      </div>
      <Line
        data={{
          labels: chartData.labels,
          datasets: [
            {
              label: 'Water Level (cm)',
              data: chartData.values,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointHoverRadius: 5,
            },
          ],
        }}
        options={{
          responsive: true,
          onClick: handlePointClick,
          scales: {
            x: {
              title: {
                display: true,
                text: filter === '1 day' ? 'Time' : 'Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Water Level (cm)',
              },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default WaterLevelChart;