import classes from "../styles/Question.module.css";
import Answers from "./Answers";

export default function Question({ answers = [] }) {
  // this commented section was previous code base
  // return (
  //   <>
  //     <div className={classes.question}>
  //       <div className={classes.qtitle}>
  //         <span className="material-icons-outlined"> help_outline </span>
  //         Here goes the question from Learn with Sumit?
  //       </div>
  //       <Answers />
  //     </div>
  //   </>
  // );
  // this is new code base based on loop to show result
  // return answers.map((answer, index) => {
  //   <div className={classes.question} key={index}>
  //     <div className={classes.qtitle}>
  //       <span className="material-icons-outlined"> help_outline </span>
  //       {answer.title}
  //     </div>
  //     <Answers input={false} options={answer.options} />
  //   </div>;
  // });
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}
