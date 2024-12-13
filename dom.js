DOM Interaction
The project interacts extensively with the DOM to update content dynamically:

Updating Hints:

The game dynamically updates the hint text based on user progress.

hintElement.textContent = question.hint;
Displaying Results:

At the end of the game, the final score, time taken, and correct answers are displayed on the result screen.

finalScoreElement.textContent = `Toplam Puan: ${score}`;
timeReport.textContent = `Geçen Süre: ${totalTime} saniye`;
correctAnswersReport.textContent = `Doğru Cevap Sayısı: ${correctAnswers}`;
Feedback Messages:

Shows whether the user's guess was correct or incorrect directly below the map.

feedbackMessage.textContent = `Doğru cevap: ${question.city}`;
