package com.logwiki.specialsurveyservice.api.service.question.response;

import com.logwiki.specialsurveyservice.domain.question.Question;
import com.logwiki.specialsurveyservice.domain.questioncategory.QuestionCategoryType;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class QuestionResponse {

    private Long id;

    private Long questionNumber;

    private String content;

    private String imgAddress;

    private QuestionCategoryType type;

    private List<MultipleChoiceResponse> multipleChoices;

    @Builder
    public QuestionResponse(Long id, Long questionNumber, String content,
            String imgAddress, QuestionCategoryType type, List<MultipleChoiceResponse> multipleChoices) {
        this.id = id;
        this.questionNumber = questionNumber;
        this.content = content;
        this.imgAddress = imgAddress;
        this.type = type;
        this.multipleChoices = multipleChoices;
    }

    public static QuestionResponse From(Question question) {
        if (question == null) {
            return null;
        }

    }
}
