import { useState } from "react";

const StudentInfo = ({ item }) => {
	const [present, setPresent] = useState("true");

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "2em",
					paddingTop: "5%",
					color: "#264653",
				}}
			>
				<div></div>
				<div>
					<h4>Student Name: {item.StudentName}</h4>
					<br />
					<h4>Branch: {item.branchName}</h4>
					<br />
					<h4>RollNo: {item.rollNo}</h4>
					<br />
					<h4>Sem: {item.sem}</h4>
					<br />
					<h4>PhoneNo: {item.phoneNo}</h4>
					<br />
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<div
							onClick={() => setPresent(true)}
							style={
								present
									? {
											fontFamily: "Poppins-Light",
											color: "white",
											border: "2px solid",
											backgroundColor: "green",
											borderColor: "green",
											borderRadius: "10px",
											fontSize: "0.8em",
											padding: "5px",
									  }
									: {
											fontFamily: "Poppins-Light",
											color: "green",
											borderColor: "green",
											border: "2px solid",
											borderRadius: "10px",
											fontSize: "0.8em",
											padding: "5px",
									  }
							}
						>
							PRESENT
						</div>
						<div
							onClick={() => setPresent(false)}
							style={
								!present
									? {
											fontFamily: "Poppins-Light",
											color: "white",
											border: "2px solid",
											backgroundColor: "red",
											borderColor: "red",
											borderRadius: "10px",
											fontSize: "0.8em",
											padding: "5px",
									  }
									: {
											fontFamily: "Poppins-Light",
											color: "red",
											borderColor: "red",
											border: "2px solid",
											borderRadius: "10px",
											fontSize: "0.8em",
											padding: "5px",
									  }
							}
						>
							ABSENT
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</>
	);
};
const EmployeeInfo = ({ item }) => {
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "2em",
					paddingTop: "5%",
					color: "#264653",
				}}
			>
				<div></div>
				<div>
					<h4>Employee Name: {item.EmployeeName}</h4>
					<br />
					<h4>Phone no : {item.PhoneNo}</h4>
					<br />
					<h4>Salary: {item.Salary}</h4>
					<br />
					<h4>Role: {item.Role}</h4>
					<br />
				</div>
			</div>
			<div></div>
		</>
	);
};
const EquipmentInfo = ({ item }) => {
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "2em",
					paddingTop: "5%",
					color: "#264653",
				}}
			>
				<div></div>
				<div>
					<h4>Equipment : {item.EquipmentName}</h4>
					<br />
					<h4>Quantity: {item.Quantity}</h4>
					<br />
					<h4>Cost: {item.Cost}</h4>
					<br />
				</div>
			</div>
			<div></div>
		</>
	);
};

export { StudentInfo, EmployeeInfo, EquipmentInfo };
