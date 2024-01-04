import { useLocation, useParams } from "react-router-dom";
import Analysis from "../Analysis";
import Summary from "../Summary";
import useAnswer from "../../hooks/useAnswer";
import _ from "lodash";
export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { qna } = state;
  const { loading, error, answers } = useAnswer(id);

  console.log("qna", location);
  function calculate() {
    let score = 0;
    answers.forEach((question, index1) => {
      let corretIndexes = [],
        checkedIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) {
          console.log("option.correct", option.correct);
          corretIndexes.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(corretIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });
    return score;
  }
  const userScore = calculate();
  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div> There was an error</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
