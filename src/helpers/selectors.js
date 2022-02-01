export function getAppointmentsForDay(state, day) {
  const specificDay = state.days.filter((thisDay) => thisDay.name === day);
  let results = [];
  let appointments = [];

  if (!state.appointments || !state.days) {
    return results;
  }

  if (specificDay[0] && specificDay[0].appointments) {
    appointments = specificDay[0].appointments;
  }

  const allAppointments = Object.values(state.appointments);

  for (const appointment of allAppointments) {
    if (appointments.includes(appointment.id)) {
      results.push(appointment);
    }
  }

  return results;
}

export function getInterview(state, interview) {
  let allInterviewers = state.interviewers;

  if (!interview || !allInterviewers) {
    return null;
  }

  let results = {};

  for (let interviewerId in allInterviewers) {
    if (interview.interviewer === allInterviewers[interviewerId].id) {
      results["interviewer"] = allInterviewers[interviewerId];
      results["student"] = interview.student;
    }
  }

  return results;
}

export function getInterviewersForDay(state, day) {
  const specificDay = state.days.filter((thisDay) => thisDay.name === day);
  let allInterviewers = state.interviewers;
  let results = [];

  if (!specificDay[0] || !day) {
    return results;
  }

  let interviewers = specificDay[0].interviewers;

  for (let interviewer of interviewers) {
    let interviewerInfo = allInterviewers[`${interviewer}`];

    if (interviewer === interviewerInfo.id) {
      results.push(interviewerInfo);
    }
  }

  return results;
}
