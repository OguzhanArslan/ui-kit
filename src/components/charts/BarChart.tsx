import React from 'react';

import type { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

import { useChartColors, useChartTheme } from './useChartTokens';

import styles from './ChartTooltip.module.scss';

export interface IBarChartRow {
  rank: number;
  product_name: string;
  product_type: string;
  unit_name: string;
  total_sales: number;
  min_price: number;
  max_price: number;
  order_count: number;
  total_quantity: number;
}

export interface IBarChartProps {
  data: IBarChartRow[];
  height?: number;
  currency?: string;
  locale?: string;
  valueField?: 'total_sales' | 'total_quantity' | 'order_count';
}

interface IMoneyProps {
  value: number;
  locale: string;
  currency: string;
}

interface INumberProps {
  value: number;
  locale: string;
  digits?: number;
}

function money({ value, locale, currency }: IMoneyProps) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

function num({ value, locale, digits = 0 }: INumberProps) {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: digits,
  }).format(value);
}

export function BarChart({
  data,
  height = 420,
  currency = 'TRY',
  locale = 'tr-TR',
  valueField = 'total_sales',
}: IBarChartProps) {
  const colors = useChartColors(1);
  const theme = useChartTheme();

  const rows = React.useMemo(
    () => [...data].sort((a, b) => a.rank - b.rank),
    [data],
  );

  const categories = React.useMemo(
    () => rows.map((r) => r.product_name),
    [rows],
  );

  const series = React.useMemo(() => {
    const values = rows.map((r) => {
      if (valueField === 'total_quantity') return r.total_quantity;
      if (valueField === 'order_count') return r.order_count;
      return r.total_sales;
    });

    return [{ data: values }];
  }, [rows, valueField]);

  const options: ApexOptions = React.useMemo(
    () => ({
      chart: {
        type: 'bar',
        toolbar: { show: false },
        fontFamily: 'inherit',
      },
      colors,
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '70%',
          borderRadius: 6,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories,
        labels: {
          style: { colors: theme.textSecondary, fontSize: '12px' },
          formatter: (v) => {
            const n = Number(v);
            if (Number.isNaN(n)) return String(v);
            if (valueField === 'total_sales')
              return money({ value: n, locale, currency });
            return num({
              value: n,
              locale,
              digits: valueField === 'total_quantity' ? 2 : 0,
            });
          },
        },
        axisBorder: { color: theme.border },
        axisTicks: { color: theme.border },
      },
      yaxis: {
        labels: {
          style: { colors: theme.textSecondary, fontSize: '12px' },
          formatter: (val) =>
            String(val).length > 28
              ? `${String(val).slice(0, 28)}…`
              : String(val),
        },
      },
      tooltip: {
        shared: false,
        intersect: true,
        custom: ({ dataPointIndex }: { dataPointIndex: number }) => {
          const r = rows[dataPointIndex];
          if (!r) return '';

          return `
            <div class="${styles.tooltip}">
              <div class="${styles.tooltipHeader}">${r.product_name}</div>
              <div class="${styles.tooltipBody}">
                <div class="${styles.tooltipDetail}">
                  <span class="${styles.tooltipDetailLabel}">Ciro</span>
                  <span class="${styles.tooltipDetailValue}">${money({ value: r.total_sales, locale, currency })}</span>
                </div>
                <div class="${styles.tooltipDetail}">
                  <span class="${styles.tooltipDetailLabel}">Fiyat</span>
                  <span class="${styles.tooltipDetailValue}">${money({ value: r.min_price, locale, currency })} – ${money({ value: r.max_price, locale, currency })}</span>
                </div>
                <div class="${styles.tooltipDetail}">
                  <span class="${styles.tooltipDetailLabel}">Sipariş</span>
                  <span class="${styles.tooltipDetailValue}">${num({ value: r.order_count, locale })} adet</span>
                </div>
                <div class="${styles.tooltipDetail}">
                  <span class="${styles.tooltipDetailLabel}">Miktar</span>
                  <span class="${styles.tooltipDetailValue}">${num({ value: r.total_quantity, locale, digits: 2 })} ${r.unit_name}</span>
                </div>
                <div class="${styles.tooltipDetail}">
                  <span class="${styles.tooltipDetailLabel}">Tür</span>
                  <span class="${styles.tooltipDetailValue}">${r.product_type}</span>
                </div>
              </div>
            </div>
          `;
        },
      },
      grid: {
        strokeDashArray: 4,
        borderColor: theme.border,
      },
    }),
    [categories, rows, valueField, locale, currency, colors, theme],
  );

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={height}
    />
  );
}
