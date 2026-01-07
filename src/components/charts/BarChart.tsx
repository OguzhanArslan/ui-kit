import React from 'react';

import type { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

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
      },
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
      },
      yaxis: {
        labels: {
          formatter: (val) =>
            String(val).length > 28
              ? `${String(val).slice(0, 28)}…`
              : String(val),
        },
      },
      tooltip: {
        shared: false,
        intersect: true,
        y: {
          formatter: (_value, opts) => {
            const i = opts.dataPointIndex;
            const r = rows[i];
            if (!r) return '';

            return [
              `Ciro: ${money({ value: r.total_sales, locale, currency })}`,
              `Fiyat: ${money({ value: r.min_price, locale, currency })} – ${money(
                {
                  value: r.max_price,
                  locale,
                  currency,
                },
              )}`,
              `Sipariş: ${num({ value: r.order_count, locale })} adet`,
              `Miktar: ${num({
                value: r.total_quantity,
                locale,
                digits: 2,
              })} ${r.unit_name}`,
              `Tür: ${r.product_type}`,
            ].join('\n');
          },
        },
      },
      grid: { strokeDashArray: 4 },
    }),
    [categories, rows, valueField, locale, currency],
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
