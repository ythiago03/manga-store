
import './Question.css';

type Props = {
  title: string;
  children:  string;
}

const Question = ({title, children}: Props) => {
  return (
    <li>
      <h2 className="question-title">{title}</h2>
      <p className="question-answer">{children}</p>
    </li>
  );
};

export default Question;
