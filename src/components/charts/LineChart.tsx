import React from 'react';

import ReactApexChart from 'react-apexcharts';

import { useChartColors, useChartTheme } from './useChartTokens';

import styles from './ChartTooltip.module.scss';

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
  const orders = sorted.map((r) => r.total_orders);
  const trend = movingAverage(revenue, 3);
  return { categories, revenue, orders, trend };
}

const currencyFmt = (v: number) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 2,
  }).format(v);

const numberFmt = (v: number) =>
  new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(v);

export function LineChart({
  data,
  height = 360,
}: {
  data: MonthlyReportRow[];
  height?: number;
}) {
  const colors = useChartColors(2);
  const theme = useChartTheme();

  const { categories, revenue, orders, trend } = React.useMemo(
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
      chart: {
        type: 'line' as const,
        toolbar: { show: false },
        fontFamily: 'inherit',
      },
      colors,
      stroke: { width: [0, 3], curve: 'smooth' as const },
      dataLabels: { enabled: false },
      xaxis: {
        categories,
        labels: {
          rotate: -45,
          style: { colors: theme.textSecondary, fontSize: '12px' },
        },
        axisBorder: { color: theme.border },
        axisTicks: { color: theme.border },
      },
      plotOptions: { bar: { columnWidth: '55%', borderRadius: 4 } },
      yaxis: {
        labels: {
          formatter: (v: number) => numberFmt(v),
          style: { colors: theme.textSecondary, fontSize: '12px' },
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        custom: ({
          series: s,
          dataPointIndex: idx,
          w,
        }: {
          series: number[][];
          dataPointIndex: number;
          w: { globals: { labels: string[] } };
        }) => {
          const label = w.globals.labels[idx] || categories[idx] || '';
          const revenueVal = s[0]?.[idx] ?? 0;
          const trendVal = s[1]?.[idx] ?? 0;
          const orderVal = orders[idx] ?? 0;

          return `
            <div class="${styles.tooltip}">
              <div class="${styles.tooltipHeader}">${label}</div>
              <div class="${styles.tooltipBody}">
                <div class="${styles.tooltipRow}">
                  <span class="${styles.tooltipDot}" style="background:${colors[0]}"></span>
                  <span class="${styles.tooltipLabel}">Ciro</span>
                  <span class="${styles.tooltipValue}">${currencyFmt(revenueVal)}</span>
                </div>
                <div class="${styles.tooltipRow}">
                  <span class="${styles.tooltipDot}" style="background:${colors[1]}"></span>
                  <span class="${styles.tooltipLabel}">Trend</span>
                  <span class="${styles.tooltipValue}">${currencyFmt(trendVal)}</span>
                </div>
                <div class="${styles.tooltipDetail}">
                  <span class="${styles.tooltipDetailLabel}">Sipariş</span>
                  <span class="${styles.tooltipDetailValue}">${numberFmt(orderVal)} adet</span>
                </div>
              </div>
            </div>
          `;
        },
      },
      legend: {
        show: true,
        labels: { colors: theme.textSecondary },
      },
      grid: {
        strokeDashArray: 4,
        borderColor: theme.border,
      },
    }),
    [categories, orders, colors, theme],
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
