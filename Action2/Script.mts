' Make sure yoor fromCityt and toCity are not the same city
' Also, verify that the flight date is in the future - you cannot book tickets in the past
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet) @@ hightlight id_;_1926781056_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet) @@ hightlight id_;_1954316040_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate DataTable("departureDate", dtGlobalSheet) @@ hightlight id_;_1952637384_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select DataTable("Class", dtGlobalSheet) @@ hightlight id_;_2101286240_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2101285424_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1956261584_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("BACK").Click @@ hightlight id_;_1925750144_;_script infofile_;_ZIP::ssf14.xml_;_
