import { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, CategoryScale } from 'chart.js';

// Register the necessary components for the doughnut chart
Chart.register(DoughnutController, ArcElement, CategoryScale);

// Define the custom plugin
const centerTextPlugin = {
  id: 'centerText',
  afterDraw: (chart: any) => {
    if (!chart.data.datasets.length || !chart.data.datasets[0].data.length) return;

    const value = chart.data.datasets[0].data[0];
    const {ctx} = chart;
    const { width, height } = chart;
    
    ctx.restore();
    ctx.font = '18px Arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000';
    ctx.fillText(`${value}%`, width / 2, height / 2);
    ctx.save();
  }
};

// Register the plugin
Chart.register(centerTextPlugin);

function DoughnutChart({ data }: { data: { datasets: any[], labels: string[] } }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (data.datasets.length > 0 && data.datasets[0].data.length === 1) {
      const value = data.datasets[0].data[0];
      const remaining = 100 - value;
      data.datasets[0].data.push(remaining);
      data.labels.push('Remaining');
    }

    let chart: Chart | null = null;

    if (canvasRef.current) {
      chart = new Chart(canvasRef.current, {
        type: 'doughnut',
        data,
        options: {
          plugins: {
            centerText: true  // Enable the custom plugin
          }
        } as any
      }) as Chart;
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [data]);

  return (
    // Set the dimensions of the canvas or its container to adjust the overall size
    <div style={{ width: '100px'}}>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default DoughnutChart;
