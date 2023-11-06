export const adjustEvents = (events) => {
  const today = new Date();
  const todayEpochDays = today.getTime() / (60 * 60 * 24 * 1000);
  let eventsCopy = JSON.parse(JSON.stringify(events));
  let trueIndex = 0;
  let eventsMutated = false;

  events.map((event, index) => {
    console.log(event.dateString);
    const eventDate = new Date(event.dateString);
    const eventEpochDays = eventDate.getTime() / (60 * 60 * 24 * 1000);
    let adjustedEventEpoch;
    let adjustedEventDate;
    let adjustedEventDateString;
    eventsCopy[trueIndex].isMutated = false;
    console.log(index);
    console.log(
      "today days",
      Math.floor(todayEpochDays),
      "event ds",
      Math.floor(eventEpochDays)
    );

    if (Math.floor(todayEpochDays) > Math.floor(eventEpochDays)) {
      eventsCopy[trueIndex].isMutated = true;
      eventsMutated = true;

      switch (event.eventOccurrence) {
        case "one time":
          // eventsCopy.splice(index, 1);
          // trueIndex--;
          eventsCopy[index].isMutated = true;
          eventsCopy[index].deletEvent = true;
          break;

        case "daily":
          adjustedEventEpoch = todayEpochDays * (60 * 60 * 24 * 1000);
          adjustedEventDate = new Date(adjustedEventEpoch);
          adjustedEventDateString = createDateString(adjustedEventDate);

          eventsCopy[trueIndex].dateString = adjustedEventDateString;

          break;

        case "weekly":
          adjustedEventEpoch = (eventEpochDays + 7) * (60 * 60 * 24 * 1000);
          adjustedEventDate = new Date(adjustedEventEpoch);

          adjustedEventDateString = createDateString(adjustedEventDate);

          eventsCopy[trueIndex].dateString = adjustedEventDateString;
          break;

        case "monthly":
          let month = eventDate.getMonth();
          let dayIncrease;
          if (month === 1) {
            dayIncrease = 28;
          } else if (
            month === 3 ||
            month === 5 ||
            month === 8 ||
            month === 10
          ) {
            dayIncrease = 30;
          } else {
            dayIncrease = 31;
          }

          adjustedEventEpoch =
            (eventEpochDays + dayIncrease) * (60 * 60 * 24 * 1000);
          adjustedEventDate = new Date(adjustedEventEpoch);
          adjustedEventDateString = createDateString(adjustedEventDate);

          eventsCopy[trueIndex].dateString = adjustedEventDateString;
          break;

        default:
          break;
      }
    }

    trueIndex++;
  });
  return { eventsCopy, eventsMutated };
};

export const createDateString = (adjustedEventDate) => {
  let month = adjustedEventDate.getMonth().toString();
  let date = adjustedEventDate.getDate().toString();

  if (Number(month) < 9) {
    month = "0" + (Number(month) + 1).toString();
  } else {
    month = (Number(month) + 1).toString();
  }
  if (Number(date) < 10) {
    date = "0" + date;
  }

  let adjustedEventDateString =
    month + "-" + date + "-" + adjustedEventDate.getFullYear();

  return adjustedEventDateString;
};
