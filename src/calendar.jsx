import React from "react";
import Draggable from "react-draggable";
import "./calendar.css";
import MaterialIcon from "react-google-material-icons";
import { useState } from "react";

function Calendar() {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	var currDate = new Date();
	var [year, setYear] = useState(currDate.getFullYear());
	var [month, setMonth] = useState(currDate.getMonth());
	var [monthCard, setMonthCard] = useState(false);
	var week = currDate.getDay();

	const MonthCard = () => {
		const monthList = monthNames.map((item, index) => {
			return (
				<button
					className="month-changer"
					style={
						currDate.getMonth() === index
							? { background: "#E76F51", color: "white", borderRadius: "20px" }
							: null
					}
					onClick={() => {
						setMonthCard(false);
						setMonth(index);
					}}
				>
					{item}
				</button>
			);
		});
		return (
			<React.Fragment>
				<div
					style={{
						width: "100%",
						display: "grid",
						gridTemplateColumns: "auto auto auto",
						gridTemplateRows: "auto auto auto auto",
					}}
				>
					{monthList}
				</div>
			</React.Fragment>
		);
	};

	const weekList = weekDay.map((item, index) => {
		return (
			<div
				style={{ borderTop: "solid #E76F51", borderBottom: "solid #E76F51" }}
			>
				<h3
					style={
						week === index ? { background: "#E76F51", color: "white" } : null
					}
				>
					{item}
				</h3>
			</div>
		);
	});

	const CalanderHead = () => {
		return (
			<React.Fragment>
				<div className="calendar-head">
					<button className="month" onClick={() => setMonthCard(true)}>
						{monthNames[month]}
					</button>
					<div className="year">
						<button className="year-button" onClick={() => setYear(--year)}>
							<MaterialIcon icon="arrow_back_ios_new" />
						</button>
						<div className="year-value">
							<h2>{year}</h2>
						</div>
						<button className="year-button" onClick={() => setYear(++year)}>
							<MaterialIcon icon="arrow_forward_ios" />
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	};

	//main return

	const CalendarBody = () => {
		const isLeapYear = (year) => {
			return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
		};

		const getFebDays = () => {
			return isLeapYear(year) ? 29 : 28;
		};

		const daysInMonth = [
			31,
			getFebDays(),
			31,
			30,
			31,
			30,
			31,
			31,
			30,
			31,
			30,
			31,
		];

		let monthDays = [];

		let firstDay = new Date(year, month, 1).getDay();

		for (let i = 0; i < firstDay; i++) {
			monthDays.push("");
		}
		for (let i = 1; i <= daysInMonth[month]; i++) {
			monthDays.push(i);
		}

		const monthList = monthDays.map((item, index) => {
			return (
				<div
					style={
						item === currDate.getDate() &&
						month === currDate.getMonth() &&
						year === currDate.getFullYear()
							? {
									background: "#E76F51",
									color: "white",
									borderRadius: "20px",
									display: "flex",
									justifyContent: "center",
							  }
							: { display: "flex", justifyContent: "center" }
					}
				>
					{" "}
					<h2> {item}</h2>{" "}
				</div>
			);
		});

		return (
			<React.Fragment>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "auto auto auto auto auto auto auto",
						textAlign: "center",
					}}
				>
					{weekList}
					{monthList}
				</div>
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<Draggable
				bounds="html"
				defaultPosition={{ x: 1905 - 550, y: 952 - 350 }}
			>
				<div className="calendar">
					{monthCard ? (
						<MonthCard />
					) : (
						<>
							<CalanderHead /> <CalendarBody />
						</>
					)}
				</div>
			</Draggable>
		</React.Fragment>
	);
}

export default Calendar;
