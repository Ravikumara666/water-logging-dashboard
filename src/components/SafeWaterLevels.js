import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale } from 'chart.js';

// Register necessary scales
Chart.register(CategoryScale);

function SafeWaterLevels() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let chart;
    try {
      chart = new Chart(canvasRef.current, {
        type: 'line', // Example chart type
        data: {
          labels: ['January', 'February', 'March'],
          datasets: [
            {
              label: 'Water Levels',
              data: [12, 19, 3],
              borderColor: 'blue',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: { type: 'category' },
            y: { beginAtZero: true },
          },
        },
      });
    } catch (error) {
      console.error("Error initializing the chart:", error);
    }

    // Cleanup to prevent issues
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default SafeWaterLevels;