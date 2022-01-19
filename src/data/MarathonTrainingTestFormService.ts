import SafetyForms from '@/data/marathon_tests.json';

export class TrainingFormTestResult {
    public isValid = false;
    public isPassed = false;
    public totalPossible = 0; // get count of questions
    public totalCorrect = 0;
    public percentage = 0.0;
    public uniqueCode = "";

    constructor(test: Test, language: string) {
        let questions: Question[];
        if (language === "English")
            questions = test.English.Questions;
        else if (language === "Spanish")
            questions = test.Spanish.Questions;
        else
            return;
        
        this.totalPossible = questions.length;
        this.totalCorrect = this._evaluateCorrectAnswers(questions);
        this.percentage = this.totalCorrect == 0 || this.totalPossible <= 0
            ? 0.0 : Math.floor((this.totalCorrect / this.totalPossible) * 100);
        
        // check if passed and generate unique code
        if (this.percentage > 70.0) {
            this.isPassed = true;
            this.uniqueCode = this._makeRandomCode(6);
        }

        this.isValid = true;
    }   

    private _evaluateCorrectAnswers(questions: Question[]): number {
        let final_cnt = 0;
        questions.forEach((val) => { 
            if (val.SelectedAnswer === "") return;

            const match = val.Answers.find(x => x.Letter === val.SelectedAnswer);
            
            if (match && match.IsCorrect) {
                final_cnt += 1;
            }
        });
        return final_cnt;
    }

    private _makeRandomCode(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength: number = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    public toString(): string {
        let o = "";
        o += "Total Possible: " + this.totalPossible + "\n";
        o += "Total Correct: " + this.totalCorrect + "\n";
        o += "Percentage: " + this.percentage + "\n";
        o += "Unique Code: " + this.uniqueCode + "\n";
        o += "Is Passed: " + this.isPassed + "\n";
        return o
    }
}

export class MarathonTrainingTestFormService {
    Tests: Test[];

    constructor(json: any) {
        this.Tests = json["Tests"];
    }

    // returns default value test result if invalid test.
    evaluateTest(testTitle: string, language: string): TrainingFormTestResult {
        const test = this.getTestByTitle(testTitle);
        return new TrainingFormTestResult(test, language);
    }

    getTestByTitle(title: string): Test {
        return this.Tests.find((test) => test.Title == title) as Test;
    }

    hasTest(title: string, language: string): boolean {
        const test = this.Tests.find((test) => test.Title === title) as Test;
        if (!test) return false;
        if (language === "English") {
            return test.English.Questions.length > 0;
        }
        else {
            return test.Spanish.Questions.length > 0;
        }
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