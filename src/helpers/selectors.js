export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.find((sday) => sday.name === day);
  if (!filteredDays) {
    return [];
  }
  return filteredDays.appointments.map((app) => state.appointments[app]);
}
export function getInterview(state, interview) {
  if(!interview){
    return null
  }
  const filteredInterviewer=state.interviewers[interview.interviewer]
  console.log(filteredInterviewer)
  return {
    ...interview,
    interviewer: filteredInterviewer,
  };
}
export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.find((sday) => sday.name === day);
  if (!filteredDays) {
    return [];
  }
  return filteredDays.interviewers.map((app) => state.interviewers[app]);
}