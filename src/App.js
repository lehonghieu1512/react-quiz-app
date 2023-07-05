import logo from "./logo.svg";
import "./App.css";

const questions = [
  {
    question: "which is a even number?",
    a: 1,
    b: 2,
    c: 3,
    d: 5,
    ans: 1,
  },
  {
    question: "which is a even number?",
    a: 1,
    b: 2,
    c: 3,
    d: 5,
    ans: 1,
  },
  {
    question: "which is a even number?",
    a: 1,
    b: 2,
    c: 3,
    d: 5,
    ans: 1,
  },
  {
    question: "which is a even number?",
    a: 1,
    b: 2,
    c: 3,
    d: 5,
    ans: 1,
  },
];
function App() {
  return (
    <div>
      <ol>
        {questions.map((q, index) => (
          <Question
            question={q.question}
            a={q.a}
            b={q.b}
            c={q.c}
            d={q.d}
            ans={q.ans}
            index={index}
          />
        ))}
      </ol>
    </div>
  );
}

function Question({ question, a, b, c, d, ans, index }) {
  let choices = [a, b, c, d];
  return (
    <li>
      <h4 id={`heading-question-${index}`}>{question}</h4>
      <ol type="a" id={`list-question-${index}`}>
        {choices.map((choice, choiceIdx) => (
          <li>
            <input
              type="checkbox"
              className={`list-${index}`}
              id={`${index}-${choiceIdx}`}
              onChange={(event) => {
                if (!event.target.checked) return;
                const WrongAnswer = "Wrong Answer";
                const CorrectAnswer = "Correct Answer";
                const curQuestionElement = document.getElementById(
                  `heading-question-${index}`
                );
                const result = document.createElement("span");
                if (choiceIdx !== ans) {
                  result.style = "color:red";
                  result.innerHTML = " " + WrongAnswer;
                } else {
                  result.style = "color:green";
                  result.innerHTML = " " + CorrectAnswer;
                }
                curQuestionElement.appendChild(result);
                let aboutDisabledChoices = document.getElementsByClassName(
                  `list-${index}`
                );
                Array.from(aboutDisabledChoices).forEach(
                  (item) => (item.disabled = true)
                );
                console.log(aboutDisabledChoices, "dkmdkm");
              }}
            />
            <label for={`${index}-${choiceIdx}`}>{choice}</label>
          </li>
        ))}
      </ol>
    </li>
  );
}

export default App;
