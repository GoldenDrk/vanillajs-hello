import "./style.css";

window.onload = function() {
  document.querySelector("#nuevaExcusa").addEventListener("click", function() {
    document.querySelector("#excusa").innerHTML = genedorexcusa();
  });
};

let genedorexcusa = function() {
  let subject = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "the keys ", "the car "];
  let where = [
    "before the class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];

  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    subject[subjectIndex] +
    "" +
    action[actionIndex] +
    "" +
    what[whatIndex] +
    "" +
    where[whereIndex]
  );
};
