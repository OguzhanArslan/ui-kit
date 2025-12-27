import styles from './Label.module.scss';

export interface ILabelProps {
    text: string;
}

export const Label = (props: ILabelProps) => {
    const { text } = props;
    return <label className={styles.label}>{text}</label>
}