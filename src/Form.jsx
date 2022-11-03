import React, { useState } from "react";
import "./header.css";
import MaterialIcon from "react-google-material-icons";
import Data from "./data.json";
import axios from "axios";
import { v1 as uuidvi } from "uuid";

const postData = (posts) => {
	const url = "http://localhost:8000/write";
	axios.post(url, posts).then((response) => {
		// console.log(response);
	});
};

const color = ["#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"];

function HostelForm({ cancel }) {
	const [data, setData] = useState(Data);
	const floorRoom = [];
	const [hostelName, setHostelName] = useState("");
	const [warden, setWarden] = useState("");
	const [caretaker, setCaretaker] = useState("");
	const [noOfFloor, setFloor] = useState(0);
	const [rooms, setRoom] = useState([]);

	let i = 0;
	do {
		floorRoom.push(i);
		i++;
	} while (i <= noOfFloor && i <= 8);

	const sort = (array) => {
		array.sort((a, b) => a.HostelName.localeCompare(b.HostelName));
	};

	const addHostel = () => {
		const newData = {
			id: uuidvi(),
			HostelName: hostelName,
			Warden: warden,
			Caretaker: caretaker,
			NoOfFloor: noOfFloor,
			FloorRoom: rooms,
			Color: color[Math.floor(Math.random() * 4)],
			Student: [],
			Employee: [],
			Equipment: [],
		};

		let tempData = [...data, newData];
		setData(tempData);
		sort(tempData);

		setHostelName("");
		setWarden("");
		setCaretaker("");
		setFloor(0);
		setRoom("");

		postData(tempData);
	};

	const hostelRoom = (i) => (e) => {
		const value = e.target.value;
		let newRoom = [...rooms];
		newRoom[i] = value;
		setRoom(newRoom);
	};

	{
		const floorItems = floorRoom.map((item, index) => {
			return (
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor={`noOfRooms${item}`}>Floor no. {item}:</label>
					<input
						key={index}
						className="hostel-form-input"
						onChange={hostelRoom(index)}
						value={rooms[index]}
						min={1}
						max={99}
						type="number"
					/>
				</div>
			);
		});

		//main form

		return (
			<React.Fragment>
				<form method="POST" className="hostel-form">
					{/* cancel button */}
					<div style={{ display: "flex", justifyContent: "end" }}>
						<button
							style={{ border: "none", color: "#264653", background: "none" }}
							onClick={cancel}
						>
							<MaterialIcon icon="close" size={30} />
						</button>
					</div>

					{/* Input of hostel Name */}
					<div style={{ margin: "10px 0px" }}>
						<label htmlFor="Hostel-Name">
							Hostel Name:
							<input
								className="hostel-form-input"
								autoComplete="off"
								value={hostelName}
								onChange={(e) => setHostelName(e.target.value)}
								type="text"
								required
							/>
						</label>
					</div>

					{/* Input for warden */}
					<div style={{ marginBottom: "10px" }}>
						<label htmlFor="Hostel-warden">Hostel Warden:</label>
						<input
							className="hostel-form-input"
							value={warden}
							autoComplete="off"
							onChange={(e) => setWarden(e.target.value)}
							type="text"
						/>
					</div>

					{/* Input for caretaker */}
					<div style={{ marginBottom: "10px" }}>
						<label htmlFor="Hostel-caretaker">Hostel Caretaker:</label>
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={caretaker}
							onChange={(e) => setCaretaker(e.target.value)}
							type="text"
						/>
					</div>

					{/* Input for no of floor */}
					<div
						style={{
							marginBottom: "10px",
							display: "flex",
							justifyContent: "left",
						}}
					>
						<label htmlFor="Hostel-floor" style={{ flexGrow: "2" }}>
							No of Floors:
						</label>
						<div
							style={{
								display: "flex",
								justifyContent: "space-evenly",
								flexGrow: "1",
							}}
						>
							<button
								style={{
									flexGrow: "1",
									outline: "none",
									border: "none",
									backgroundColor: "#E76F51",
									borderRadius: "50px",
									color: "#264653",
								}}
								onClick={(e) => {
									e.preventDefault();
									if (noOfFloor) {
										setFloor(noOfFloor - 1);
									}
								}}
							>
								<MaterialIcon icon="remove" size={36} />
							</button>
							<h3 style={{ flexGrow: "3", textAlign: "center" }}>
								{noOfFloor}
							</h3>
							<button
								style={{
									flexGrow: "1",
									outline: "none",
									border: "none",
									backgroundColor: "#E76F51",
									borderRadius: "50px",
									color: "#264653",
								}}
								onClick={(e) => {
									e.preventDefault();
									if (noOfFloor < 8) {
										setFloor(noOfFloor + 1);
									}
								}}
							>
								<MaterialIcon icon="add" size={36} />
							</button>
						</div>
					</div>

					<label>Number of Rooms present in each floor:</label>

					{floorItems}

					<div style={{ display: "flex", justifyContent: "end" }}>
						<button
							type="submit"
							onClick={() => {
								window.location.reload(false);
								addHostel();
								cancel();
							}}
							className="submit-button"
						>
							Submit
						</button>
					</div>
				</form>
				<div className="backdrop" onClick={cancel}></div>
			</React.Fragment>
		);
	}
}

const StudentForm = ({ hostel, cancel }) => {
	const [studentName, setstudentName] = useState("");
	const [branchName, setbranchName] = useState("");
	const [rollNo, setrollno] = useState("");
	const [phoneNo, setphoneno] = useState("");
	const [sem, setsem] = useState("");
	const [data, setData] = useState(Data);
	const [temp, setTemp] = useState(hostel);

	const sort = (array) => {
		array.sort((a, b) => a.StudentName.localeCompare(b.StudentName));
	};
	const sortHostel = (array) => {
		array.sort((a, b) => a.HostelName.localeCompare(b.HostelName));
	};
	const addStudent = () => {
		let student = {
			id: uuidvi(),
			StudentName: studentName,
			BranchName: branchName,
			RollNo: rollNo,
			PhoneNo: phoneNo,
			Sem: sem,
			Present: true,
		};
		temp.Student.push(student);
		sort(temp.Student);
		setTemp({ ...temp });
		let filterData = [...data].filter((OBJ) => OBJ.id !== hostel.id);
		// console.log([...filterData, temp]);
		const finalData = [...filterData, temp];
		sortHostel(finalData);
		setData(finalData);
		postData(finalData);
	};

	return (
		<>
			<form className="hostel-form">
				<div style={{ display: "flex", justifyContent: "end" }}>
					<button
						style={{ border: "none", color: "#264653", background: "none" }}
						onClick={cancel}
					>
						<MaterialIcon icon="close" size={30} />
					</button>
				</div>

				{/* Input of student Name */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="StudentName">
						Student Name:
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={studentName}
							onChange={(e) => setstudentName(e.target.value)}
							type="text"
							required
							style={{ backgroundColor: `${hostel.Color}69` }}
						/>
					</label>
				</div>
				{/* Input of branch Name */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="BranchName">
						Branch Name:
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={branchName}
							onChange={(e) => setbranchName(e.target.value)}
							type="text"
							required
							style={{ backgroundColor: `${hostel.Color}69` }}
						/>
					</label>
				</div>
				{/* Input of roll no */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="RollNo">
						Roll No:
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={rollNo}
							onChange={(e) => setrollno(e.target.value)}
							type="text"
							required
							style={{ backgroundColor: `${hostel.Color}69` }}
						/>
					</label>
				</div>
				{/* Input of phone Number */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="PhoneNo">
						Phone No:
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={phoneNo}
							onChange={(e) => setphoneno(e.target.value)}
							type="text"
							required
							style={{ backgroundColor: `${hostel.Color}69` }}
						/>
					</label>
				</div>
				{/* Input of sem */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="Sem">
						Sem:
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={sem}
							onChange={(e) => setsem(e.target.value)}
							type="number"
							required
							style={{ backgroundColor: `${hostel.Color}69` }}
						/>
					</label>
				</div>
				<div style={{ display: "flex", justifyContent: "end" }}>
					<button
						type="submit"
						onClick={() => {
							addStudent();
							cancel();
							window.location.reload(false);
						}}
						className="submit-button"
						style={{ backgroundColor: hostel.Color, borderColor: hostel.Color }}
					>
						Submit
					</button>
				</div>
			</form>
			<dir className="backdrop" onClick={cancel}></dir>
		</>
	);
};
const EmployeeForm = ({ hostel, cancel }) => {
	const [employeeName, setemployeeName] = useState("");
	const [empphoneno, setEmpphoneNo] = useState("");
	const [salary, setsalary] = useState("");
	const [role, setRole] = useState("Warden");
	const [data, setData] = useState(Data);
	const [temp, setTemp] = useState(hostel);

	const sort = (array) => {
		array.sort((a, b) => a.EmployeeName.localeCompare(b.EmployeeName));
	};
	const sortHostel = (array) => {
		array.sort((a, b) => a.HostelName.localeCompare(b.HostelName));
	};
	console.log(role);
	const addEmp = () => {
		let employee = {
			id: uuidvi(),
			EmployeeName: employeeName,
			EmployeePhoneno: empphoneno,
			Salary: salary,
			Role: role,
		};
		temp.Employee.push(employee);
		sort(temp.Employee);
		setTemp({ ...temp });
		let filterData = [...data].filter((OBJ) => OBJ.id !== hostel.id);
		const finalData = [...filterData, temp];
		sortHostel(finalData);
		setData(finalData);
		postData(finalData);
	};

	return (
		<>
			<form className="hostel-form">
				<div style={{ display: "flex", justifyContent: "end" }}>
					<button
						style={{ border: "none", color: "#264653", background: "none" }}
						onClick={cancel}
					>
						<MaterialIcon icon="close" size={30} />
					</button>
				</div>
				{/* Input of employee Name */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="EmployeeName">
						Employee Name:
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={employeeName}
							onChange={(e) => setemployeeName(e.target.value)}
							type="text"
							required
							style={{ backgroundColor: `${hostel.Color}69` }}
						/>
					</label>
				</div>
				{/* Input of Employee phone Number */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="EmpPhoneNo">
						Phone No:
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={empphoneno}
							onChange={(e) => setEmpphoneNo(e.target.value)}
							type="text"
							required
							style={{ backgroundColor: `${hostel.Color}69` }}
						/>
					</label>
				</div>
				{/* Input of salary */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="Salary">
						Salary:
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={salary}
							onChange={(e) => setsalary(e.target.value)}
							type="text"
							required
							style={{ backgroundColor: `${hostel.Color}69` }}
						/>
					</label>
				</div>
				{/* Input of Employee role */}
				<div style={{ margin: "10px 0px" }}>
					<label for="roles">Choose your role:</label>
					<select
						style={{
							float: "right",
							fontSize: "0.8em",
							fontFamily: "Poppins-Medium",
							border: "none",
							outline: "none",
							backgroundColor: `${hostel.Color}69`,
							color: "#264653",
							borderRadius: "30px",
							padding: "5px",
						}}
						value={role}
						onChange={(e) => setRole(e.target.value)}
					>
						<option value="Warden">Warden</option>
						<option value="Caretaker">Caretaker</option>
						<option value="Security">Security</option>
						<option value="Cleaner">Cleaner</option>
					</select>
				</div>
				<div style={{ display: "flex", justifyContent: "end" }}>
					<button
						type="submit"
						onClick={() => {
							addEmp();
							cancel();
							window.location.reload(false);
						}}
						className="submit-button"
						style={{ backgroundColor: hostel.Color, borderColor: hostel.Color }}
					>
						Submit
					</button>
				</div>
			</form>
			<dir className="backdrop" onClick={cancel}></dir>
		</>
	);
};
const EquipmentForm = ({ hostel, cancel }) => {
	const [equipmentName, setequipmentName] = useState("");
	const [quantity, setquantity] = useState("");
	const [cost, setcost] = useState("");
	const [data, setData] = useState(Data);
	const [temp, setTemp] = useState(hostel);

	const sort = (array) => {
		array.sort((a, b) => a.EquipmentName.localeCompare(b.EquipmentName));
	};
	const sortHostel = (array) => {
		array.sort((a, b) => a.HostelName.localeCompare(b.HostelName));
	};
	const addEquip = () => {
		let equipment = {
			id: uuidvi(),
			EquipmentName: equipmentName,
			Quantity: quantity,
			Cost: cost,
		};
		temp.Equipment.push(equipment);
		sort(temp.Equipment);
		setTemp({ ...temp });
		let filterData = [...data].filter((OBJ) => OBJ.id !== hostel.id);
		const finalData = [...filterData, temp];
		sortHostel(finalData);
		setData(finalData);
		postData(finalData);
	};
	return (
		<>
			<form className="hostel-form">
				<div style={{ display: "flex", justifyContent: "end" }}>
					<button
						style={{ border: "none", color: "#264653", background: "none" }}
						onClick={cancel}
					>
						<MaterialIcon icon="close" size={30} />
					</button>
				</div>
				{/* Input of equipment Name */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="EquipmentName">Equipment:</label>
					<input
						className="hostel-form-input"
						autoComplete="off"
						value={equipmentName}
						onChange={(e) => setequipmentName(e.target.value)}
						type="text"
						required
						style={{ backgroundColor: `${hostel.Color}69` }}
					/>
				</div>
				{/* Input of quantity */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="Quantity">
						Quantity:
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={quantity}
							onChange={(e) => setquantity(e.target.value)}
							type="number"
							required
							style={{ backgroundColor: `${hostel.Color}69` }}
						/>
					</label>
				</div>
				{/* Input of cost */}
				<div style={{ margin: "10px 0px" }}>
					<label htmlFor="Cost">Cost:</label>
					<input
						className="hostel-form-input"
						autoComplete="off"
						value={cost}
						onChange={(e) => setcost(e.target.value)}
						type="number"
						required
						style={{ backgroundColor: `${hostel.Color}69` }}
					/>
				</div>
				<div style={{ display: "flex", justifyContent: "end" }}>
					<button
						type="submit"
						onClick={() => {
							addEquip();
							cancel();
							window.location.reload(false);
						}}
						className="submit-button"
						style={{ backgroundColor: hostel.Color, borderColor: hostel.Color }}
					>
						Submit
					</button>
				</div>
			</form>
			<dir className="backdrop" onClick={cancel}></dir>
		</>
	);
};

export { HostelForm, StudentForm, EmployeeForm, EquipmentForm };
