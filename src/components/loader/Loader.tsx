import classNames from 'classnames';

import { SIZE, type SIZES } from '@/foundation/sizes';

import styles from './Loader.module.scss';

export interface ILoaderProps {
  size?: SIZES;
}

export const Loader = (props: ILoaderProps) => {
  const { size = SIZE.sm } = props;

  return <span className={classNames(styles.loader, styles[size])}></span>;
};
