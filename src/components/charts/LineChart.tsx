import React from 'react';

// import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

export type MonthlyReportRow = {
  year: number;
  month: number;
  label: string;
  month_name: string;
  total_orders: number;
  total_revenue: number;
};

type MixedSeriesType = 'line' | 'column';

type MixedSeriesItem = {
  name: string;
  type: MixedSeriesType;
  data: number[];
};

function sortAsc(a: MonthlyReportRow, b: MonthlyReportRow) {
  return a.year * 100 + a.month - (b.year * 100 + b.month);
}

function movingAverage(values: number[], window = 3) {
  return values.map((_, i) => {
    const start = Math.max(0, i - window + 1);
    const slice = values.slice(start, i + 1);
    const sum = slice.reduce((acc, v) => acc + v, 0);
    return sum / slice.length;
  });
}

function toChart(rows: MonthlyReportRow[]) {
  const sorted = [...rows].sort(sortAsc);
  const categories = sorted.map((r) => r.label);
  const revenue = sorted.map((r) => Number(r.total_revenue));
  const trend = movingAverage(revenue, 3);
  return { categories, revenue, trend };
}

export function LineChart({
  data,
  height = 360,
}: {
  data: MonthlyReportRow[];
  height?: number;
}) {
  const { categories, revenue, trend } = React.useMemo(
    () => toChart(data),
    [data],
  );

  const mixedSeries: MixedSeriesItem[] = React.useMemo(
    () => [
      { name: 'Aylık Ciro', type: 'column', data: revenue },
      { name: '3 Aylık Trend', type: 'line', data: trend },
    ],
    [revenue, trend],
  );

  const series = mixedSeries;

  const options = React.useMemo(
    () => ({
      chart: { type: 'line' as const, toolbar: { show: false } },
      stroke: { width: [0, 3], curve: 'smooth' as const },
      dataLabels: { enabled: false },
      xaxis: { categories, labels: { rotate: -45 } },
      plotOptions: { bar: { columnWidth: '55%' } },
      yaxis: {
        labels: {
          formatter: (v: number) =>
            new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(
              v,
            ),
        },
      },
      tooltip: {
        shared: true,
        y: {
          formatter: (v: number) =>
            new Intl.NumberFormat('tr-TR', {
              style: 'currency',
              currency: 'TRY',
              maximumFractionDigits: 2,
            }).format(v),
        },
      },
      legend: { show: true },
      grid: { strokeDashArray: 4 },
    }),
    [categories],
  );

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={height}
    />
  );
}
