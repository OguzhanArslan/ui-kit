import styles from './Loader.module.scss';
import { SIZE, type SIZES } from '../../foundation/sizes';
import classNames from 'classnames';

export interface ILoaderProps {
    size?: SIZES;
}

export const Loader = (props: ILoaderProps) => {
    const { size = SIZE.md } = props;

    return (
        <span className={classNames(styles.loader, styles[size])}></span>
    )
}