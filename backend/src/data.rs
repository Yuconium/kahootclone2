use rocket::serde::{json::Json, Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct Quiz {
    Name: String,
    id: String,
    Questions: Vec<Question>,
}

#[derive(Serialize, Deserialize, Clone)]
struct Question {
    Name: String,
    id: String,
    Answers: Vec<Answer>,
}

#[derive(Serialize, Deserialize, Clone)]
struct Answer {
    Name: String,
    id: String,
    is_true: bool,
}

impl Quiz {
    pub fn new() -> Quiz {
        Quiz {
            Name: "Test - Quiz".to_string(),
            id: "12344".to_string(),
            Questions: vec![
                Question {
                    Name: "Test - Question".to_string(),
                    id: "12342".to_string(),
                    Answers: vec![
                        Answer {
                            Name: "Test - Answers".to_string(),
                            id: "21234".to_string(),
                            is_true: true
                        };
                        4
                    ]
                };
                5
            ],
        }
    }
}
