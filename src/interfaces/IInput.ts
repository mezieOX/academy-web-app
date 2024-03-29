export interface IInput {
  className?: string;
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  type?: string;
  inputButton?: boolean;
  containerClassName?: string;
  onChange?: (...value: any[]) => any;
  inputButtonRight?: boolean;
}
