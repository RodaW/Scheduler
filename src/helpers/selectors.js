export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.find((sday) => sday.name === day);
  if (!filteredDays) {
    return [];
  }
  return filteredDays.appointments.map((app) => state.appointments[app]);
}
