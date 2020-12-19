import differenceInDays from "date-fns/differenceInDays"
import format from "date-fns/format"
import isSameDay from "date-fns/isSameDay"
import enGB from "date-fns/locale/en-GB"
import { useState } from "react"
import ReactDatePicker from "react-datepicker"
import { datepicker } from "./index.module.css"

function Home() {
  return (
    <div
      style={{ backgroundImage: "url(/maldives-1993704_1920.jpg)" }}
      className="min-h-screen pt-12 bg-top bg-no-repeat">
      <div className="container mx-auto">
        <header className="flex items-center justify-between mb-32 text-white">
          <div className="flex items-center">
            <a href="#" className="flex items-center mr-16">
              <span className="mr-3 leading-tight">
                <svg
                  className="w-12 h-12 transform -rotate-45"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </span>
              <span className="text-5xl">FlyUX</span>
            </a>
            <div className="flex text-lg font-medium">
              <a
                href="#"
                className="flex items-center mr-10 text-white transition-colors duration-200 hover:text-opacity-80">
                Book
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="mr-10 text-white transition-colors duration-200 hover:text-opacity-80">
                Check-in
              </a>
              <a
                href="#"
                className="mr-10 text-white transition-colors duration-200 hover:text-opacity-80">
                My bookings
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-sm font-medium">
              <a
                href="#"
                className="mr-8 text-white transition-colors duration-200 hover:text-opacity-80">
                Travel info
              </a>
              <a
                href="#"
                className="mr-10 text-white transition-colors duration-200 hover:text-opacity-80">
                Support
              </a>
            </div>
            <div className="flex">
              <div className="flex items-center justify-center w-10 h-10 mr-5 text-white transition-colors duration-200 bg-black rounded-full cursor-pointer bg-opacity-40 hover:text-opacity-80">
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <a
                href="#"
                className="flex items-center h-10 px-5 text-lg text-white transition-colors duration-200 bg-black rounded-full bg-opacity-40 hover:text-opacity-80">
                Log in
              </a>
            </div>
          </div>
        </header>

        <div className="px-12 pt-10 pb-12 text-white bg-black rounded-2xl bg-opacity-60">
          <h2 className="text-5xl font-medium">Book your next adventure</h2>
          <div className="mb-5 text-lg mt-9">
            <label htmlFor="return" className="mr-7">
              <input
                type="radio"
                name="type"
                defaultChecked={true}
                id="return"
                className="mr-2 text-blue-500"
              />
              Return
            </label>
            <label htmlFor="one-way" className="mr-7">
              <input
                type="radio"
                name="type"
                id="one-way"
                className="mr-2 text-blue-500"
              />
              One-way
            </label>
            <label htmlFor="multi-cite">
              <input
                type="radio"
                name="type"
                id="multi-cite"
                className="mr-2 text-blue-500"
              />{" "}
              Multi-city
            </label>
          </div>
          <div className="relative flex">
            <div className="flex flex-auto w-1/2 mr-3">
              <LocationSelect type="from" label="From" />
              <div className="flex flex-col items-center justify-center flex-none w-5 bg-blue-700">
                <svg
                  className="w-5 h-5 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                </svg>
              </div>
              <LocationSelect type="to" label="To" />
            </div>
            <DateSelect />

            <label
              className="flex flex-col flex-auto px-5 py-4 mr-3 bg-blue-500"
              style={{ width: "15%" }}>
              <span className="text-sm">Travellers</span>
              <div className="flex items-center mt-1 text-xl font-medium">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-auto">1</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

function LocationSelect({ type, label }) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div
      className={`flex flex-col flex-auto px-5 py-4 w-1/2 ${
        showDropdown ? "relative text-blue-500 bg-white" : "bg-blue-500"
      }`}
      onClick={() => setShowDropdown(!showDropdown)}>
      <label htmlFor="to" className="text-sm">
        {label}
      </label>
      <div className="flex items-center justify-between">
        {showDropdown ? (
          <>
            <input
              id={type}
              type="text"
              className="p-0 mt-1 text-xl font-medium placeholder-blue-500 border-none placeholder-opacity-20 focus:ring-0"
              placeholder="Type destination"
            />
            <svg
              className="w-4 h-4 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </>
        ) : (
          <>
            <div className="mt-1 text-xl font-medium">
              Stockholm
              <span className="px-2 ml-3 py-0.5 leading-none text-blue-500 bg-white rounded-2xl">
                STO
              </span>
            </div>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </>
        )}
      </div>
      {showDropdown && <LocationDropdown />}
    </div>
  )
}

function LocationDropdown() {
  return (
    <div className="absolute inset-x-0 overflow-y-scroll text-black bg-white top-full max-h-64">
      <LocationDropdownItem
        title="Berlin (all airports)"
        country="Germany"
        IATA="ABC"
      />
      <LocationDropdownItem
        title="Berlin, Tegel - Otto Lilienthal"
        country="Germany"
        IATA="DEF"
      />
      <LocationDropdownItem
        title="Berlin, Brandenburg"
        country="Germany"
        IATA="GHI"
      />
      <LocationDropdownItem
        title="Chicago, IL - O’Hare"
        country="USA"
        IATA="JKL"
      />
    </div>
  )
}

function LocationDropdownItem({ title, country, IATA }) {
  return (
    <div className="flex items-start justify-between py-3 pl-5 pr-8 transition-colors border-t border-gray-600 cursor-pointer hover:bg-blue-100">
      <span className="flex-auto mr-5 leading-7">{title}</span>
      <div className="flex flex-col flex-none text-sm text-right">
        <span className="leading-7">{country}</span>
        <span className="font-bold">{IATA}</span>
      </div>
    </div>
  )
}

function DateSelect() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState()

  // useEffect(() => {
  //   setEndDate(null)
  // }, [startDate])

  return (
    <>
      <div
        className={`flex flex-col flex-auto w-1/3 px-5 py-4 mr-3 ${
          showDropdown ? "relative text-blue-500 bg-white" : "bg-blue-500"
        }`}
        onClick={() => setShowDropdown(!showDropdown)}>
        <span className="text-sm">When</span>
        <div className="flex items-center mt-1 text-xl font-medium whitespace-nowrap">
          <svg
            className="w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>

          {startDate && format(startDate, "eee, d MMM")}
          {" - "}
          {endDate && format(endDate, "eee, d MMM")}
          {startDate &&
            endDate &&
            ` (${differenceInDays(endDate, startDate)} nights)`}
          {!startDate && "Select dates"}
        </div>
        {showDropdown && (
          <div className="absolute inset-x-0 h-3 bg-blue-500 top-full"></div>
        )}
      </div>
      {showDropdown && (
        <div
          className="absolute inset-x-0"
          style={{ top: "calc(100% + 12px)" }}>
          <div className="flex px-5 bg-gray-500">
            <button className="flex items-center h-16 mr-8 text-blue-500 border-b-2 border-current">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-medium">Calendar</span>
            </button>
            <button className="flex items-center h-16 text-black">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-medium bg-re">Low-fare</span>
            </button>
          </div>
          <div className="px-10 py-8 text-black bg-white">
            <ReactDatePicker
              inline
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={(dates) => {
                const [start, end] = dates
                setStartDate(start)
                setEndDate(end)
              }}
              monthsShown={2}
              calendarClassName={datepicker}
              showPopperArrow={false}
              minDate={new Date()}
              locale={enGB}
              selectsRange
              renderDayContents={(day, date) => {
                if (startDate && endDate && isSameDay(date, endDate)) {
                  return (
                    <>
                      {day}
                      <span className="text-xs leading-none">
                        ({differenceInDays(endDate, startDate)} nights)
                      </span>
                    </>
                  )
                }

                return day
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Home
