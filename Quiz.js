function checkAnswer() {
    const answers = document.getElementsByName("answer");
    let selected = "";
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            selected = answers[i].value;
            break;
        }
    }

    const correctAnswer = "スパイラル";
    const result = document.getElementById("result");

    if (selected === "") {
        result.textContent = "選択肢を選んでください。";
    } else if (selected === correctAnswer) {
        result.textContent = "正解です！";
    } else {
        result.textContent = "不正解です。";
    }
}
