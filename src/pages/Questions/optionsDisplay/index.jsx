import Option from "../option"

export default function OptionsDisplay({questions, isSecondRound, handleSelectedOption, selectedOptionIndex, questionIndex}) {
    return(
        <div className="questionOptions">
            { questions.length > 0 ? (isSecondRound ? 
            
            questions[questionIndex].answers.map((options, index) => (
              <Option
                key={index}
                optionIndex={String.fromCharCode(
                  64 + ((parseFloat(options.optionId) - 1) % 5) + 1
                )}
                active={selectedOptionIndex === options.answerId}
                optionText={options.text}
                onClick={() => handleSelectedOption(options.answerId)}
              />
            )) : questions[questionIndex].options.map((options, index) => (
                <Option
                  key={index}
                  optionIndex={String.fromCharCode(
                    64 + ((parseFloat(options.optionId) - 1) % 5) + 1
                  )}
                  active={selectedOptionIndex === options.optionId}
                  optionText={options.text}
                  onClick={() => handleSelectedOption(options.optionId)}
                />
              ))
        
        ) 
            
            : "loading questions"}
          </div>
    )
}