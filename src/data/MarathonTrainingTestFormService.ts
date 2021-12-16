import SafetyForms from '@/data/marathon_tests.json';
export class MarathonTrainingTestFormService {
    Tests: Test[];

    constructor(json: any) {
        this.Tests = json["Tests"];
    }
}

export interface Test {
    Title:   string;
    English: English;
    Spanish: Spanish;
}

export interface English {
    Questions: Question[];
}

export interface Spanish {
    Questions: Question[];
}

export interface Question {
    Text:    string;
    Answers: Answer[];
    SelectedAnswer: string;
}

export interface Answer {
    Letter:     string;
    AnswerText: string;
    IsCorrect:  boolean;
}

export const SafetyForm: MarathonTrainingTestFormService = new MarathonTrainingTestFormService(SafetyForms);

export function getTestByTitle(title: string): Test {
    return SafetyForm.Tests.find((test) => test.Title == title) as Test;
}