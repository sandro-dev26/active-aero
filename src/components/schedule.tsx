import { useState } from "react";
import data from "../data/data.json";
import { CalendarCheck2 } from "lucide-react";

function Schedule() {
  const [showFull, setShowFull] = useState<boolean>(false);
  function handleShow() {
    setShowFull(!showFull);
  }
  return (
    <article className="mt-12 p-2 text-md md:text-lg lg:text-xl">
      <h2
        style={
          showFull
            ? {
                color: "#00c950",
                paddingLeft: "0.5rem",
              }
            : {}
        }
        className="flex items-center gap-2 text-xl md:text-2xl hover:-translate-y-1 hover:bg-gray-700 hover:p-2 hover:rounded-sm transition-all duration-300"
        onClick={handleShow}
      >
        <CalendarCheck2 size={24} stroke="currentColor" /> Schedule
      </h2>
      <ul className="flex flex-col gap-2 mt-4">
        {data &&
          data.map((item) => (
            <li
              key={item.id}
              style={
                showFull
                  ? {
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }
                  : {}
              }
              className="flex items-center justify-between bg-gray-900 hover:bg-gray-700 p-2 rounded-xs transition-all duration-300"
            >
              <h3>{item.title}</h3>
              <div
                style={showFull ? { flexDirection: "column" } : {}}
                className="flex gap-4 md:gap-6 lg:gap-8"
              >
                <p>
                  {item.time.start} - {item.time.end}
                </p>
                {showFull ? (
                  <div>
                    <h4>Weekdays:</h4>
                    <ul>
                      {item.weekdays.map((weekday) => (
                        <li key={weekday.toLowerCase()}>{weekday}</li>
                      ))}
                    </ul>
                  </div>
                ) : item.weekdays[0] !== "All" ? (
                  <p>Custom</p>
                ) : (
                  <p>All</p>
                )}
                {showFull && (
                  <>
                    <p>{item.weekdayAll ? "All Week" : "Custom"}</p>
                    <p>
                      {item.isImportant ? "Important" : "Not too important"}
                    </p>
                  </>
                )}
              </div>
            </li>
          ))}
      </ul>
    </article>
  );
}

export default Schedule;
