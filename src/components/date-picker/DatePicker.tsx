import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './DatePicker.module.scss';

export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  format?: (date: Date) => string;
}

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const CalendarIcon: React.FC = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.333 1.333v2M10.667 1.333v2M2.333 6.06h11.334M14 5.667v5.666c0 2-1 3.334-3.333 3.334H5.333C3 14.667 2 13.333 2 11.333V5.667c0-2 1-3.334 3.333-3.334h5.334C13 2.333 14 3.667 14 5.667z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

const defaultFormat = (date: Date) =>
  `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  ({ value, onChange, placeholder = 'Select date', format = defaultFormat, className, ...rest }, ref) => {
    const [open, setOpen] = useState(false);
    const [viewDate, setViewDate] = useState(() => value ?? new Date());
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const today = useMemo(() => {
      const d = new Date();
      return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }, []);

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfWeek(year, month);
    const prevMonthDays = getDaysInMonth(year, month - 1);

    // Close on outside click
    useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, [open]);

    const handleSelect = useCallback(
      (day: number) => {
        const selected = new Date(year, month, day);
        onChange?.(selected);
        setOpen(false);
      },
      [year, month, onChange],
    );

    const cells: { day: number; current: boolean }[] = [];
    for (let i = 0; i < firstDay; i++) cells.push({ day: prevMonthDays - firstDay + 1 + i, current: false });
    for (let i = 1; i <= daysInMonth; i++) cells.push({ day: i, current: true });
    const remaining = 42 - cells.length;
    for (let i = 1; i <= remaining; i++) cells.push({ day: i, current: false });

    return (
      <div
        ref={(node) => {
          wrapperRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={classNames(styles.wrapper, className)}
        {...rest}
      >
        <button
          type="button"
          className={classNames(styles.trigger, !value && styles.placeholder)}
          onClick={() => setOpen((o) => !o)}
        >
          <CalendarIcon />
          <span>{value ? format(value) : placeholder}</span>
        </button>

        {open && (
          <div className={styles.dropdown}>
            <div className={styles.header}>
              <button type="button" className={styles.navButton} onClick={() => setViewDate(new Date(year, month - 1, 1))}>‹</button>
              <span className={styles.monthYear}>{MONTHS[month]} {year}</span>
              <button type="button" className={styles.navButton} onClick={() => setViewDate(new Date(year, month + 1, 1))}>›</button>
            </div>
            <div className={styles.grid}>
              {DAYS.map((d) => <div key={d} className={styles.dayName}>{d}</div>)}
              {cells.map((cell, i) => {
                const isToday = cell.current && cell.day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
                const isSelected = value && cell.current && cell.day === value.getDate() && month === value.getMonth() && year === value.getFullYear();
                return (
                  <button
                    key={i}
                    type="button"
                    className={classNames(styles.day, !cell.current && styles.outside, isToday && styles.today, isSelected && styles.selected)}
                    onClick={() => cell.current && handleSelect(cell.day)}
                    tabIndex={cell.current ? 0 : -1}
                  >
                    {cell.day}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  },
);
DatePicker.displayName = 'DatePicker';
