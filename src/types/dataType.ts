export interface ScheduleType {
  id: string; // id should be all lowercase, eg: morningcoding
  title: string; // title can be anything you want, eg: "Morning Coding"
  activityType:
    | "code" // coding/developer times
    | "physical" // physical activity
    | "recovery" // rest after activity
    | "mandatory" // activity type that doesn't match any other and you don't want to include but have to
    | "free time" // free time of the day
    | "buffer" // non-active things such as gaps between things
    | "routine"; // routine actions
  time: {
    start: string;
    end: string;
  }; // write strings like this: "09:30", "13:00" or not, but don't blame me afterwards
  weekdayAll: boolean; // is it all week or no
  weekdays: string[]; // week days (capitalized) or ["All"] if all, eg: ["Friday", "Saturday", "Sunday"] IT'S FRIDAY AGAIN! SUNDAY, SATURDAY, WHAT?! IT'S FRIDAY AGAIN... ZANDVOORT IS HEREEE!!!
  isImportant: boolean; // is it important or no for you
}
