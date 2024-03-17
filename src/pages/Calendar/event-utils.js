let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today //2024, 2, 20, 10, 30, 0

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event1",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "All-day event1",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "All-day event1",
    start: todayStr,
  },

  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
  // {
  //   id: createEventId(),
  //   title: "Timed event",
  //   start: todayStr + "T11:00:00",
  // },
  // {
  //   id: createEventId(),
  //   title: "Timed event",
  //   start: todayStr + "T9:00:00",
  // },
  // {
  //   id: createEventId(),
  //   title: "Timed event",
  //   start: todayStr + "T5:00:00",
  // },
  // {
  //   id: createEventId(),
  //   title: "Timed event",
  //   start: todayStr + "T7:00:00",
  // },
];

export function createEventId() {
  return String(eventGuid++);
}
