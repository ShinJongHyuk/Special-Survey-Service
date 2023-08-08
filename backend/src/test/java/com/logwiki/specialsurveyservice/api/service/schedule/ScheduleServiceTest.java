package com.logwiki.specialsurveyservice.api.service.schedule;


import com.logwiki.specialsurveyservice.IntegrationTestSupport;
import com.logwiki.specialsurveyservice.api.controller.schedule.request.ScheduleCreateRequest;
import com.logwiki.specialsurveyservice.api.service.schedule.response.ScheduleResponse;
import com.logwiki.specialsurveyservice.domain.schedule.ScheduleRepository;
import com.logwiki.specialsurveyservice.domain.schedule.ScheduleRunType;
import com.logwiki.specialsurveyservice.domain.schedule.ScheduleType;
import com.logwiki.specialsurveyservice.domain.survey.SurveyRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.quartz.SchedulerException;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

@Transactional
class ScheduleServiceTest extends IntegrationTestSupport {

    @Autowired
    private SurveyRepository surveyRepository;
    @Autowired
    private ScheduleService scheduleService;
    @Autowired
    private ScheduleRepository scheduleRepository;

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

    @DisplayName("설문 아이디가 1인 시작,종료 스케줄러 두개 모두 생성후 등록된 스케줄러 설문 아이디는 1이다.")
    @Test
    void createEndAndStartJob() throws SchedulerException {
        Long surveyId = 1L;
        scheduleService.addSurveySchedule(surveyId, LocalDateTime.now().plusHours(1), LocalDateTime.now().plusHours(2));
        List<ScheduleResponse> scheduleResponseList = scheduleService.getBeforeRunSchedule();
        assertAll(() ->
        {
            assertEquals(scheduleResponseList.get(0).getSurveyId(), surveyId);
            assertEquals(scheduleResponseList.size(), 2);
        });
    }

    @DisplayName("설문 아이디가 1로 시작하는 설문을 검색하면 결과는 2개와 설문 아이디들은 1이여야한다.")
    @Test
    void searchScheduleBySurveyId() throws SchedulerException {
        Long surveyId = 1L;
        scheduleService.addSurveySchedule(surveyId, LocalDateTime.now().plusHours(1), LocalDateTime.now().plusHours(2));
        List<ScheduleResponse> scheduleResponseList = scheduleService.getSchedulesBySurveyId(surveyId);
        assertAll(() ->
        {
            assertEquals(scheduleResponseList.get(0).getSurveyId(), surveyId);
            assertEquals(scheduleResponseList.get(1).getSurveyId(), surveyId);
            assertEquals(scheduleResponseList.size(), 2);
        });
    }

}