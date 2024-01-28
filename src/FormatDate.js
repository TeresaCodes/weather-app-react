export default function FormatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let hour = date.getHours();
  let minute = String(date.getMinutes()).padStart(2, "0");
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return [days[day], ", ", hour, ":", minute];
}
