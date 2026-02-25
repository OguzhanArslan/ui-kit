import styles from './SidebarSectionLabel.module.scss';

export interface ISidebarSectionLabelProps {
  label: string;
  isOpen: boolean;
}

export const SidebarSectionLabel = (props: ISidebarSectionLabelProps) => {
  const { label, isOpen } = props;

  if (!isOpen) {
    return <div className={styles.divider} />;
  }

  return <div className={styles.label}>{label}</div>;
};
