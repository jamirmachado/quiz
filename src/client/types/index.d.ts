type Question = {
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

type QuestionResponse = {
    results: Question[];
    response_code: number;
}