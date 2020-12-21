const flights = [
  {
    from: "Stockholm",
    to: "Brandenburg, Berlin"
  }
]

function Select() {
  return (
    <>
      <div className="max-w-screen-xl px-5 pb-20 mx-auto 2xl:px-0">
        <Header />
        <div className="grid grid-cols-4 gap-12 mt-12">
          <div className="col-span-3">
            <FlightDay />
            <FlightList />
          </div>
          <div className="col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 flex items-center h-24 mx-auto bg-white border-t border-gray-600 max-w-screen-2xl">
        <div className="flex w-full max-w-screen-xl mx-auto space-between">
          <div className="flex items-center flex-1">
            Total price <span className="mx-4 text-3xl text-blue-500">£94</span>{" "}
            <span className="text-xs opacity-40">
              Total price includes all travellers
            </span>
          </div>
          <div className="px-6 py-3 text-blue-500 border-2 border-blue-500 rounded-full">
            Select return flight
          </div>
        </div>
      </div>
    </>
  )
}

function FlightDay() {
  return (
    <div className="relative flex flex-col bg-white rounded-t-xl">
      <RoundedBottomCorners />
      <div className="flex items-center px-4 text-lg font-medium text-white bg-black h-9 rounded-3xl ml-2.5 -mt-4.5 w-max">
        Departure flight
      </div>

      <div className="grid grid-cols-5 px-24 mt-6 text-center">
        <div className="flex flex-col justify-center col-span-2">
          <div className="text-3xl">Berlin, Brandenburg</div>
          <div className="flex flex-row items-center justify-center mt-3">
            <div className="flex items-center justify-center mr-3 text-xl font-light">
              Airport
            </div>
            <p className="inline-flex items-center justify-center px-3 text-xl leading-none bg-gray-500 h-7 h rounded-2xl">
              GHI
            </p>
          </div>
        </div>
        <div className="flex justify-center col-span-1 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center col-span-2">
          <div className="text-3xl">Stockholm</div>
          <div className="flex flex-row items-center justify-center mt-3">
            <div className="flex items-center justify-center mr-3 text-xl font-light">
              Airport
            </div>
            <p className="inline-flex items-center justify-center px-3 text-xl leading-none bg-gray-500 h-7 h rounded-2xl">
              STO
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-10 border-t border-b border-gray-600 divide-x divide-gray-600 h-22 justify-evenly">
        <div className="flex items-center justify-center flex-grow-0 h-full w-22">
          <div className="flex items-center justify-center w-8 h-8 text-blue-500 border-2 border-blue-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 flex-grow h-full">
          <div className="mb-0.5 text-sm font-medium">Thu 12 Nov, 2020</div>
          <div className="text-xs text-black opacity-40">From</div>
          <div className="text-xl font-medium text-blue-500">£78</div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 flex-grow h-full">
          <div className="mb-0.5 text-sm font-medium">Fri 13 Nov, 2020</div>
          <div className="text-xs text-black opacity-40">From</div>
          <div className="text-xl font-medium text-blue-500">£67</div>
        </div>
        <div className="relative flex flex-col items-center justify-center flex-1 flex-grow h-full bg-light-blue">
          <div className="absolute border border-blue-500 -inset-px" />
          <div className="mb-0.5 text-sm font-medium">Sat 14 Nov, 2020</div>
          <div className="text-xs text-black opacity-40">From</div>
          <div className="text-xl font-medium text-blue-500">£78</div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 flex-grow h-full">
          <div className="mb-0.5 text-sm font-medium">Sun 15 Nov, 2020</div>
          <div className="text-xs text-black opacity-40">From</div>
          <div className="text-xl font-medium text-blue-500">£78</div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 flex-grow h-full">
          <div className="mb-0.5 text-sm font-medium">Mon 16 Nov, 2020</div>
          <div className="text-xs text-black opacity-40">From</div>
          <div className="text-xl font-medium text-blue-500">£67</div>
        </div>
        <div className="flex items-center justify-center h-full w-22">
          <div className="flex items-center justify-center w-8 h-8 text-blue-500 border-2 border-blue-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-5 px-7">
        <span className="text-sm font-medium text-blue-500 underline">
          Show full calendar
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-blue-500">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}

function FlightList() {
  return (
    <>
      <FlightOpen />
      <Flight />
    </>
  )
}

function FlightOpen() {
  return (
    <div className="relative flex flex-col px-5 pt-5 mt-5 bg-white pb-9">
      <RoundedCorners />
      <div className="flex items-center justify-between flex-grow">
        <div className="text-lg">FlyUX</div>
        <div className="px-4 py-1.5 text-sm text-blue-500 border rounded-full border-light-blue">
          Flight info
        </div>
      </div>
      <div className="flex mt-10 text-center">
        <div className="flex flex-col justify-center flex-1">
          <div className="text-lg">Berlin, Brandenburg</div>
          <p className="flex items-center self-center justify-center px-3 mt-1 text-xl leading-none bg-gray-500 h-7 h rounded-2xl">
            GHI
          </p>
          <p className="mt-3 text-3xl">7:45 AM</p>
          <p className="text-xl font-light">Non-stop</p>
        </div>

        <div className="flex justify-center h-16 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <div className="flex flex-col justify-center flex-1">
          <div className="text-lg">Stockholm</div>
          <p className="flex items-center self-center justify-center px-3 mt-1 text-xl leading-none bg-gray-500 h-7 h rounded-2xl">
            STO
          </p>
          <p className="mt-3 text-3xl">8:25 AM</p>
          <p className="text-xl font-light">Non-stop</p>
        </div>

        <div className="flex flex-col items-center self-start py-8 text-xs border-2 rounded-lg border-light-blue bg-light-blue px-14">
          <div className="text-xs opacity-40">Selected</div>
          <div className="mt-3 text-3xl text-blue-500">£78</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mt-4 text-blue-500">
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

function Flight() {
  return (
    <div className="relative flex flex-col pt-5 mt-5 bg-white px-7 pb-9">
      <RoundedCorners />
      <div className="flex items-center justify-between flex-grow">
        <div className="text-lg">FlyUX</div>
        <div className="px-4 py-1.5 text-sm text-blue-500 border rounded-full border-light-blue">
          Flight info
        </div>
      </div>
      <div className="flex items-center mt-10 text-center">
        <div className="flex flex-col justify-center flex-1">
          <div className="text-lg">Berlin, Brandenburg</div>
          <p className="flex items-center self-center justify-center px-3 mt-1 text-xl leading-none bg-gray-500 h-7 h rounded-2xl">
            GHI
          </p>
          <p className="mt-3 text-3xl">7:45 AM</p>
          <p className="text-xl font-light">Non-stop</p>
        </div>

        <div className="flex justify-center h-16 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <div className="flex flex-col justify-center flex-1">
          <div className="text-lg">Stockholm</div>
          <p className="flex items-center self-center justify-center px-3 mt-1 text-xl leading-none bg-gray-500 h-7 h rounded-2xl">
            STO
          </p>
          <p className="mt-3 text-3xl">8:25 AM</p>
          <p className="text-xl font-light">Non-stop</p>
        </div>

        <div className="flex flex-col items-center self-start justify-center h-32 text-xs border-2 border-blue-500 rounded-lg px-14">
          <div className="text-xs opacity-40">From</div>
          <p className="text-3xl leading-10 text-blue-500">£78</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-blue-500">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-row mt-12">
        <div className="flex flex-col flex-1 px-10 py-6 bg-gray-400 rounded-lg">
          <div className="flex flex-row items-center space-between">
            <div className="flex flex-col flex-1">
              <p className="text-lg font-medium leading-6">Economy light</p>
              <p className="mt-2">Dolor amet consectetur verdo</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mt-2 text-gray-800">
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-blue-500">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="pt-4 mt-5 border-t-2 border-gray-600 border-dashed">
            <p className="text-medium">Included for each traveller</p>
            <div className="flex items-center mt-5 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-flex w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2.5 underline flex">1 checked bag</span>
            </div>

            <div className="flex items-center mt-5 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-flex w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2.5 underline flex">1 carry-on-bag</span>
            </div>

            <div className="flex items-center mt-5 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-flex w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2.5 underline flex">Seat reservation</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center self-start justify-center h-32 text-xs border-2 border-blue-500 rounded-lg ml-7 px-14">
          <div className="text-xs opacity-40">From</div>
          <p className="text-3xl leading-10 text-blue-500">£78</p>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className="flex justify-between mt-12">
      <h1 className="text-5xl font-medium">Select flight</h1>
      <div className="flex items-center py-5 text-sm bg-white rounded-lg px-7">
        <div className="flex items-center justify-center w-8 h-8 mr-5 text-blue-500 border-2 border-blue-500 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-row items-center h-8 px-3 mr-5 text-white bg-blue-500 rounded-2xl">
          <div className="mr-2">1</div>Select flights
        </div>
        <div className="flex flex-row items-center mr-5">
          <div className="flex items-center justify-center w-8 h-8 mr-2 text-blue-500 rounded-full bg-light-blue">
            2
          </div>
          <div className="text-sm font-medium">Information</div>
        </div>
        <div className="flex flex-row items-center mr-5">
          <div className="flex items-center justify-center w-8 h-8 mr-2 text-blue-500 rounded-full bg-light-blue">
            3
          </div>
          <div className="text-sm font-medium">Extras</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center w-8 h-8 mr-2 text-blue-500 rounded-full bg-light-blue">
            4
          </div>
          <div className="text-sm font-medium">Payment</div>
        </div>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <>
      <div className="p-5 bg-white rounded-lg">
        <h3 className="text-lg">Total price</h3>
        <span className="block mt-2 mb-1 text-3xl font-medium leading-none text-blue-500">
          £94
        </span>
        <div className="text-xs text-black opacity-40">
          Total price include all travelers
        </div>

        <div className="px-5 mt-5 -mx-5 border-t border-gray-600">
          <div className="flex justify-between mt-4">
            <p className="text-xs">Airfare</p>
            <p className="text-xs">£94</p>
          </div>

          <div className="flex justify-between mt-4">
            <p className="text-xs">Services</p>
            <p className="text-xs">£0</p>
          </div>
        </div>
      </div>

      <div className="relative p-5 overflow-hidden bg-white rounded-t-lg mt-7">
        <RoundedBottomCorners />
        <div className="text-xs font-medium">Departure: Sat 14 Nov, 2020</div>
        <div className="flex justify-between mt-5">
          <div className="flex-col">
            <p className="text-xs">Stockholm</p>
            <p className="inline-flex items-center justify-center px-3 mt-2 text-xl leading-none bg-gray-500 h-7 h rounded-2xl">
              STO
            </p>
          </div>

          <div className="flex-col text-right">
            <div className="text-xl">1:55 PM</div>
            <div className="text-sm font-light">Non stop</div>
          </div>
        </div>

        <div className="flex justify-between py-2 mt-5 border-t border-b border-gray-700 border-dashed">
          <span className="text-xs">Duration:</span>
          <span className="text-xs font-medium text-right">0h 50m</span>
        </div>

        <div className="flex justify-between mt-5">
          <div className="flex-col">
            <p className="text-xs">Berlin, Brandenburg</p>
            <p className="inline-flex items-center justify-center px-3 mt-2 text-xl leading-none bg-gray-500 h-7 h rounded-2xl">
              GHI
            </p>
          </div>

          <div className="flex-col text-right">
            <div className="text-xl">2:45 PM</div>
            <div className="text-sm font-light">Non stop</div>
          </div>
        </div>

        <div className="mt-4 text-sm font-medium">Economy standard</div>
        <div className="mt-1 text-sm opacity-50">FJ394</div>
      </div>

      <div className="relative p-5 overflow-hidden bg-white rounded-b-lg mt-7">
        <RoundedTopCorners />
        <div className="flex items-center justify-center my-5 text-xl font-light">
          Select return flight
        </div>
      </div>
    </>
  )
}

function RoundedTopCorners() {
  return (
    <>
      <div className="absolute w-6 h-6 bg-gray-500 rounded-full -left-3 -top-3" />
      <div className="absolute w-6 h-6 bg-gray-500 rounded-full -right-2 -top-3" />
    </>
  )
}

function RoundedBottomCorners() {
  return (
    <>
      <div className="absolute w-6 h-6 bg-gray-500 rounded-full -left-3 -bottom-3" />
      <div className="absolute w-6 h-6 bg-gray-500 rounded-full -right-2 -bottom-3" />
    </>
  )
}

function RoundedCorners() {
  return (
    <>
      <RoundedTopCorners />
      <RoundedBottomCorners />
    </>
  )
}

export default Select
