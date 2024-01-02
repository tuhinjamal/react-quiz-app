import { useEffect, useReducer, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import Progressbar from "../Progressbar";
import useQustions from "../../hooks/useQuestion";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuhtContexts";
import _ from "lodash";
const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};
export default function Quiz() {
  let navigateTo = useNavigate();
  const { currentUser } = useAuth();
  const { id } = useParams();
  const { loading, error, questions } = useQustions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);
  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  // handle when user clicks the nex button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }
  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }
  // submit quiz
  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });

    navigateTo(`/result/${id}`, { state: { qna: qna } });
  }

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  return (
    <>
      {loading && <div>loading ... </div>}
      {error && <div>There was an error </div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <Progressbar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={submit}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
