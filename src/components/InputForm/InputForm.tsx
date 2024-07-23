import './InputForm.css';

type Props = {
  type: string;
  name: string;
  placeholder?: string;
  label: string;
}

const InputForm = (props: Props) => {
  return (
    <label className="contact-label">
      {props.label}
      <input type={props.type} name={props.name} placeholder={props.placeholder && props.placeholder} />
    </label>
  );
};

export default InputForm;
