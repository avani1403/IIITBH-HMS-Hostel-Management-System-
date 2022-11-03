import React, { useState } from "react";
import "./hostelInfo.css";
import { Link, useLocation } from "react-router-dom";
import MaterialIcon from "react-google-material-icons";
import Data from "./data.json";
import axios from "axios";

const Students = ({ hostel }) => {
	const [card, setCard] = useState(false);
	const url = useLocation().pathname;
	const [delid, setdelid] = useState("");

	const DeleteBox = () => {
		let [temp, setTemp] = useState(hostel);
		const [data, setData] = useState(Data);
		const deleteStudent = () => {
			temp.Student.splice(
				temp.Student.findIndex((obj) => obj.id === delid),
				1
			);
			setTemp({ ...temp });

			const tempData = [...data].filter((obj) => obj.id !== hostel.id);
			const filterData = [...tempData, temp];
			setData(filterData);
			filterData.sort((a, b) => a.HostelName.localeCompare(b.HostelName));
			const urldel = "http://localhost:8000/write";
			axios.post(urldel, filterData).then((response) => {
				// console.log(response);
			});
		};
		return (
			<>
				<div className="delete-box">
					<button
						style={{
							border: "none",
							color: "#264653",
							background: "none",
							float: "right",
						}}
						onClick={() => {
							setCard(false);
						}}
					>
						<MaterialIcon icon="close" size={30} />
					</button>
					<div>
						<h4>
							{`Confirm delete "${
								[...data]
									.find((item) => item.id === hostel.id)
									.Student.find((item) => item.id === delid).StudentName
							}"`}
						</h4>
					</div>

					<button
						className="ok-button"
						onClick={() => {
							deleteStudent();
							setCard(false);
							window.location.reload(false);
						}}
						style={{ backgroundColor: hostel.Color }}
					>
						Ok
					</button>
				</div>
				<div
					className="backdrop"
					onClick={() => {
						setCard(false);
					}}
				></div>
			</>
		);
	};

	return (
		<React.Fragment>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						fontFamily: "Poppins-Light",
						fontSize: "3em",
						color: hostel.Color,
						width: "60%",
					}}
				>
					<h1>Students</h1>
					<hr
						style={{
							height: "3px",
							backgroundColor: hostel.Color,
							borderWidth: "0px",
						}}
					/>
					<ul style={{ listStyle: "none" }}>
						{hostel.Student.map((item) => {
							return (
								<li>
									<div className="container">
										<div className="hover">
											<Link className="links" to={`${url}/${item.id}`}>
												<h1
													style={{
														fontSize: "0.5em",
														color: "#264653",
														paddingLeft: "5%",
														marginTop: "2%",
													}}
												>
													{item.StudentName}
												</h1>
											</Link>
										</div>
										<button
											className="delete-button"
											onClick={() => {
												setdelid(item.id);
												setCard(true);
											}}
										>
											<MaterialIcon icon="delete" size={30} />
										</button>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{card && <DeleteBox />}
		</React.Fragment>
	);
};
const Employee = ({ hostel }) => {
	const [card, setCard] = useState(false);
	const [delid, setdelid] = useState("");

	const DeleteBox = () => {
		const [data, setData] = useState(Data);
		let [temp, setTemp] = useState(hostel);
		const deleteCard = () => {
			temp.Employee.splice(
				temp.Employee.findIndex((obj) => obj.id === delid),
				1
			);
			setTemp({ ...temp });

			const tempData = [...data].filter((obj) => obj.id !== hostel.id);
			const filterData = [...tempData, temp];
			setData(filterData);
			filterData.sort((a, b) => a.HostelName.localeCompare(b.HostelName));
			const urldel = "http://localhost:8000/write";
			axios.post(urldel, filterData).then((response) => {
				// console.log(response);
			});
		};

		return (
			<>
				<div className="delete-box">
					<div style={{ display: "flex", justifyContent: "end" }}>
						<button
							style={{ border: "none", color: "#264653", background: "none" }}
							onClick={() => {
								setCard(false);
							}}
						>
							<MaterialIcon icon="close" size={30} />
						</button>
					</div>
					<h4>
						{`Confirm delete "${
							[...data]
								.find((item) => item.id === hostel.id)
								.Employee.find((item) => item.id === delid).EmployeeName
						}"`}
					</h4>
					<button
						className="ok-button"
						onClick={() => {
							deleteCard();
							setCard(false);
							window.location.reload(false);
						}}
						style={{ backgroundColor: hostel.Color }}
					>
						Ok
					</button>
				</div>
				<div
					className="backdrop"
					onClick={() => {
						setCard(false);
					}}
				></div>
			</>
		);
	};

	return (
		<React.Fragment>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					paddingBottom: "5%",
				}}
			>
				<div
					style={{
						fontFamily: "Poppins-Light",
						fontSize: "3em",
						color: hostel.Color,
						width: "60%",
					}}
				>
					<h1>Warden</h1>
					<hr
						style={{
							height: "3px",
							backgroundColor: hostel.Color,
							borderWidth: "0px",
						}}
					/>
					<ul style={{ listStyle: "none" }}>
						<li>
							<h1
								style={{
									fontSize: "0.5em",
									color: "#264653",
									paddingLeft: "5%",
									marginTop: "2%",
								}}
							>
								{hostel.Warden}
							</h1>
						</li>
					</ul>
				</div>
				<br />
				<div
					style={{
						fontFamily: "Poppins-Light",
						fontSize: "3em",
						color: hostel.Color,
						width: "60%",
					}}
				>
					<h1>Caretaker</h1>
					<hr
						style={{
							height: "3px",
							backgroundColor: hostel.Color,
							borderWidth: "0px",
						}}
					/>
					<ul style={{ listStyle: "none" }}>
						<li>
							<h1
								style={{
									fontSize: "0.5em",
									color: "#264653",
									paddingLeft: "5%",
									marginTop: "2%",
								}}
							>
								{hostel.Caretaker}
							</h1>
						</li>
					</ul>
				</div>
				<br />
				<div
					style={{
						fontFamily: "Poppins-Light",
						fontSize: "3em",
						color: hostel.Color,
						width: "60%",
					}}
				>
					<h1>Employee</h1>
					<hr
						style={{
							height: "3px",
							backgroundColor: hostel.Color,
							borderWidth: "0px",
						}}
					/>
					<ul style={{ listStyle: "none" }}>
						{hostel.Employee.map((item) => {
							return (
								<li>
									<div className="container">
										<div className="hover">
											<Link
												className="links"
												to={`/${hostel.id}/employee/${item.id}`}
											>
												<h1
													style={{
														fontSize: "0.5em",
														color: "#264653",
														paddingLeft: "5%",
														marginTop: "2%",
													}}
												>
													{item.EmployeeName}
												</h1>
											</Link>
										</div>
										<button
											className="delete-button"
											onClick={() => {
												setdelid(item.id);
												setCard(true);
											}}
										>
											<MaterialIcon icon="delete" size={30} />
										</button>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{card && <DeleteBox />}
		</React.Fragment>
	);
};
const Equipment = ({ hostel }) => {
	const [card, setCard] = useState(false);
	const [delid, setdelid] = useState("");

	const DeleteBox = () => {
		const [data, setData] = useState(Data);
		let [temp, setTemp] = useState(hostel);
		const deleteCard = () => {
			temp.Equipment.splice(
				temp.Equipment.findIndex((obj) => obj.id === delid),
				1
			);
			setTemp({ ...temp });

			const tempData = [...data].filter((obj) => obj.id !== hostel.id);
			const filterData = [...tempData, temp];
			setData(filterData);
			filterData.sort((a, b) => a.HostelName.localeCompare(b.HostelName));
			const urldel = "http://localhost:8000/write";
			axios.post(urldel, filterData).then((response) => {
				// console.log(response);
			});
		};

		return (
			<>
				<div className="delete-box">
					<div style={{ display: "flex", justifyContent: "end" }}>
						<button
							style={{ border: "none", color: "#264653", background: "none" }}
							onClick={() => {
								setCard(false);
							}}
						>
							<MaterialIcon icon="close" size={30} />
						</button>
					</div>
					<h4>
						{`Confirm delete "${
							[...data]
								.find((item) => item.id === hostel.id)
								.Equipment.find((item) => item.id === delid).EquipmentName
						}"`}
					</h4>
					<button
						className="ok-button"
						onClick={() => {
							deleteCard();
							setCard(false);
							window.location.reload(false);
						}}
						style={{ backgroundColor: hostel.Color }}
					>
						Ok
					</button>
				</div>
				<div
					className="backdrop"
					onClick={() => {
						setCard(false);
					}}
				></div>
			</>
		);
	};

	return (
		<React.Fragment>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						fontFamily: "Poppins-Light",
						fontSize: "3em",
						color: hostel.Color,
						width: "60%",
					}}
				>
					<h1>Equipment</h1>
					<hr
						style={{
							height: "3px",
							backgroundColor: hostel.Color,
							borderWidth: "0px",
						}}
					/>
					<ul style={{ listStyle: "none" }}>
						{hostel.Equipment.map((item) => {
							return (
								<li>
									<div className="container">
										<div className="hover">
											<Link
												className="links"
												to={`/${hostel.id}/equipment/${item.id}`}
											>
												<h1
													style={{
														fontSize: "0.5em",
														color: "#264653",
														paddingLeft: "5%",
														marginTop: "2%",
													}}
												>
													{item.EquipmentName}
												</h1>
											</Link>
										</div>
										<button
											className="delete-button"
											onClick={() => {
												setdelid(item.id);
												setCard(true);
											}}
										>
											<MaterialIcon icon="delete" size={30} />
										</button>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{card && <DeleteBox />}
		</React.Fragment>
	);
};

export { Students, Employee, Equipment };
