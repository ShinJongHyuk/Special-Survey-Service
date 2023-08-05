import moment from "moment";

function useTimerHook(endTime: any) {
  const deadLineTime = moment(endTime, "YYYY-MM-DDTHH:mm:ss");
  const now = moment();

  let diffTime = deadLineTime.diff(now);
  let remainTime = "00분, 00초";

  if (diffTime > 0) {
    const duration = moment.duration(diffTime);

    const years = Math.floor(duration.asYears());
    duration.subtract(years, "years");

    const months = Math.floor(duration.asMonths());
    duration.subtract(months, "months");

    const days = Math.floor(duration.asDays());
    duration.subtract(days, "days");

    const hours = Math.floor(duration.asHours());
    duration.subtract(hours, "hours");

    const minutes = Math.floor(duration.asMinutes());
    duration.subtract(minutes, "minutes");

    const seconds = Math.floor(duration.asSeconds());

    if (years > 0 && months >= 0) {
      remainTime = `${years.toString().padStart(2, "0")}:년, ${months.toString().padStart(2, "0")}:월`;
    } else if (months > 0 && days >= 0) {
      remainTime = `${months.toString().padStart(2, "0")}:월, ${days.toString().padStart(2, "0")}:일`;
    } else if (days > 0 && hours >= 0) {
      remainTime = `${days.toString().padStart(2, "0")}:일, ${hours.toString().padStart(2, "0")}:시간`;
    } else if (hours > 0 && minutes >= 0) {
      remainTime = `${hours.toString().padStart(2, "0")}:시간, ${minutes.toString().padStart(2, "0")}:분`;
    } else if (minutes > 0 && seconds >= 0) {
      remainTime = `${minutes.toString().padStart(2, "0")}:분, ${seconds.toString().padStart(2, "0")}:초`;
    }
  }

  return remainTime;
}

export default useTimerHook;
