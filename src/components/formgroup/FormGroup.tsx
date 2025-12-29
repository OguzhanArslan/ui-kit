import styles from './FormGroup.module.scss';

export interface IFormGroupProps {
  children: React.ReactNode;
}

export const FormGroup = (props: IFormGroupProps) => {
  const { children } = props;
  return <div className={styles.formGroup}>{children}</div>;
};
