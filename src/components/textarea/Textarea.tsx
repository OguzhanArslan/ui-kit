import classNames from 'classnames';

import styles from './Textarea.module.scss';

export interface ITextareaProps {
  id?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
}

export const Textarea = (props: ITextareaProps) => {
  const { name, id, isError, isLoading, ...rest } = props;
  const textareaId = id || name;

  return (
    <textarea
      id={textareaId}
      name={name}
      className={classNames(styles.textarea, {
        [styles.error]: isError,
        [styles.loading]: isLoading,
      })}
      {...rest}
    />
  );
};
