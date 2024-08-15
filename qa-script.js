document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const question = document.getElementById('question').value;
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-item';
    questionContainer.innerHTML = `<p><strong>Question:</strong> ${question}</p><div class="answer-box"><textarea placeholder="Type your answer here..." required></textarea><input type="text" placeholder="Reference (optional)" /><button onclick="submitAnswer(this)">Submit Answer</button></div>`;
    document.getElementById('questionsContainer').appendChild(questionContainer);

    document.getElementById('questionForm').reset();
});

function submitAnswer(button) {
    const answer = button.previousElementSibling.previousElementSibling.value;
    const reference = button.previousElementSibling.value;
    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-item';
    answerContainer.innerHTML = `<p><strong>Answer:</strong> ${answer}</p><p><em>Reference:</em> ${reference}</p>`;
    button.parentElement.parentElement.appendChild(answerContainer);
    button.parentElement.remove();
}
