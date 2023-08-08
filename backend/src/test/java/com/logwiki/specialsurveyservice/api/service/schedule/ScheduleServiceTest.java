package com.logwiki.specialsurveyservice.api.service.schedule;


import com.logwiki.specialsurveyservice.IntegrationTestSupport;
import com.logwiki.specialsurveyservice.api.controller.schedule.request.ScheduleCreateRequest;
import com.logwiki.specialsurveyservice.api.service.schedule.response.ScheduleResponse;
import com.logwiki.specialsurveyservice.domain.schedule.ScheduleRunType;
import com.logwiki.specialsurveyservice.domain.schedule.ScheduleType;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.quartz.SchedulerException;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

@Transactional
class ScheduleServiceTest extends IntegrationTestSupport {

    @Autowired
    private ScheduleService scheduleService;

    @DisplayName("시작 스케줄러를 생성한다.")
    @Test
    void createStartJob() throws SchedulerException {
        ScheduleCreateRequest scheduleCreateRequest = ScheduleCreateRequest.builder()
                .surveyId(1L)
                .startTime(LocalDateTime.now())
                .build();
        ScheduleResponse schedule = scheduleService.addStartSurveySchedule(scheduleCreateRequest);
        assertAll(
                () -> {
                    assertEquals(schedule.getId(), 1L);
                    assertEquals(schedule.getSurveyId(), 1L);
                    assertEquals(schedule.getRun(), ScheduleRunType.BEFORE_RUN);
                    assertEquals(schedule.getType(), ScheduleType.START_SURVEY);
                }
        );
    }

    @DisplayName("종료 스케줄러를 생성한다.")
    @Test
    void createEndJob() throws SchedulerException {
        ScheduleCreateRequest scheduleCreateRequest = ScheduleCreateRequest.builder()
                .surveyId(1L)
                .startTime(LocalDateTime.now())
                .build();
        ScheduleResponse schedule = scheduleService.addEndSurveySchedule(scheduleCreateRequest);
        assertAll(
                () -> {
                    assertEquals(schedule.getSurveyId(), 1L);
                    assertEquals(schedule.getRun(), ScheduleRunType.BEFORE_RUN);
                    assertEquals(schedule.getType(), ScheduleType.END_SURVEY);
                }
        );
    }

}