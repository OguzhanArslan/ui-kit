import styles from './Label.module.scss';

export interface ILabelProps {
  htmlFor: string;
  text: string;
}

export const Label = (props: ILabelProps) => {
  const { text, ...rest } = props;
  return (
    <label className={styles.label} {...rest}>
      {text}
    </label>
  );
};
