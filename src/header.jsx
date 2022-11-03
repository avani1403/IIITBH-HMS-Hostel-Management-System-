import React from "react";
import logo from "./images/IIITBh-Logo.png";
import MaterialIcon from "react-google-material-icons";
import { useState } from "react";
import "./header.css";
import { HostelForm, StudentForm, EmployeeForm, EquipmentForm } from "./Form";
import { Link, useLocation } from "react-router-dom";
import Data from "./data.json";

const Header = ({ hostel }) => {
	const url = useLocation().pathname;
	const [formH, setFormH] = useState(false);
	const [formS, setFormS] = useState(false);
	const [formEmp, setFormEmp] = useState(false);
	const [formEquip, setFormEquip] = useState(false);
	// const [sideNav,setNav] = useState(false);
	const page = url.substr(url.lastIndexOf("/") + 1, url.length - 1);
	const Navbar = () => {
		return (
			<React.Fragment>
				<div id="mySidenav" className="sidenav" role="menu">
					<div>
						<Link
							to="/"
							className="links"
							style={
								url === "/"
									? {
											borderRadius: "0px 30px 30px 0px",
											marginRight: "5%",
											backgroundColor: "rgba(211, 211, 211, 0.7)",
									  }
									: { borderRadius: "0px 30px 30px 0px", marginRight: "5%" }
							}
						>
							<h2
								style={{
									fontSize: "2.5em",
									flexGrow: "1",
									fontFamily: "Poppins-Light",
									color: "#264653",
									textAlign: "center",
									display: "flex",
									justifyContent: "space-evenly",
									alignItems: "center",
								}}
							>
								<MaterialIcon icon="home" size={30} />
								Hostels
							</h2>
						</Link>
						<br />
						<hr style={{ borderWidth: "2px" }} />
						{Data.map((item, index) => {
							return (
								<>
									<br />
									<Link
										key={index}
										to={`/${item.id}/student`}
										style={{
											borderRadius: "0px 30px 30px 0px",
											marginRight: "5%",
										}}
										className="links"
									>
										<div
											style={
												url === `/${item.id}/student`
													? {
															width: "100%",
															backgroundColor: `${item.Color}48`,
															borderRadius: "0px 30px 30px 0px",
													  }
													: { width: "100%" }
											}
										>
											<div
												style={{
													display: "flex",
													justifyContent: "space-evenly",
													alignItems: "center",
													marginLeft: "5%",
													width: "100%",
												}}
											>
												<h2 style={{ color: item.Color, flexGrow: "0.2" }}>
													<MaterialIcon icon="home" size={30} />
												</h2>
												<h2
													style={{
														fontSize: "2em",
														flexGrow: "1",
														fontFamily: "Poppins-Light",
														color: "#264653",
													}}
												>
													{item.HostelName}
												</h2>
											</div>
										</div>
									</Link>
									<br />
								</>
							);
						})}
					</div>
				</div>
				<div id="drop" className="drop" onClick={() => closeNav()}></div>
			</React.Fragment>
		);
	};
	function openNav() {
		document.getElementById("mySidenav").style.width = "400px";
		document.getElementById("drop").style.width = "100%";
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("drop").style.width = "0";
	}
	function toShowAddButton() {
		if (["student", "employee", "equipment", ""].indexOf(page) === -1) {
			return false;
		} else {
			return true;
		}
	}

	return (
		<React.Fragment>
			<div
				style={{
					display: "flex",
					borderBottomStyle: "solid",
					justifyContent: "space-evenly",
					borderBottomWidth: "2px",
					borderBottomColor: url === "/" ? "lightgray" : hostel.Color,
				}}
			>
				<div
					className="container"
					style={{
						flexGrow: "4",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							flexGrow: "0.5",
						}}
					>
						<button
							className="hostel-button"
							title="Main Menu"
							onClick={() => {
								openNav();
							}}
						>
							<MaterialIcon icon="menu" size={36}></MaterialIcon>
						</button>
					</div>
					{url === "/" && (
						<img src={logo} alt="logo" width="50px" height="auto" />
					)}
					<h1
						style={{
							fontSize: "2.5em",
							flexGrow: "1",
							fontFamily: "Poppins-Light",
							color: "#264653",
						}}
					>
						{url !== "/" ? hostel.HostelName : "Hostel Management System"}
					</h1>

					{url === "/" ? (
						<div style={{ flexGrow: "6" }}></div>
					) : (
						<div
							style={{
								display: "flex",
								justifyContent: "space-evenly",
								flexGrow: "6",
								height: "100%",
							}}
						>
							<Link
								className="links"
								style={
									url === `/${hostel.id}/student`
										? {
												borderBottomStyle: "solid",
												color: hostel.Color,
												borderBottomColor: hostel.Color,
												display: "flex",
												justifyContent: "space-evenly",
												alignItems: "center",
										  }
										: {
												display: "flex",
												justifyContent: "space-evenly",
												alignItems: "center",
										  }
								}
								to={`/${hostel.id}/student`}
							>
								<h2>Student</h2>
							</Link>
							<Link
								className="links"
								style={
									url === `/${hostel.id}/employee`
										? {
												borderBottomStyle: "solid",
												borderBottomColor: hostel.Color,
												display: "flex",
												justifyContent: "space-evenly",
												alignItems: "center",
										  }
										: {
												display: "flex",
												justifyContent: "space-evenly",
												alignItems: "center",
										  }
								}
								to={`/${hostel.id}/employee`}
							>
								<h2
									style={
										url === `/${hostel.id}/employee`
											? {
													color: hostel.Color,
													width: "fit-content",
											  }
											: null
									}
								>
									Employee
								</h2>
							</Link>
							<Link
								className="links"
								style={
									url === `/${hostel.id}/equipment`
										? {
												borderBottomStyle: "solid",
												borderBottomColor: hostel.Color,
												display: "flex",
												justifyContent: "space-evenly",
												alignItems: "center",
										  }
										: {
												display: "flex",
												justifyContent: "space-evenly",
												alignItems: "center",
										  }
								}
								to={`/${hostel.id}/equipment`}
							>
								<h2
									style={
										url === `/${hostel.id}/equipment`
											? {
													color: hostel.Color,
													width: "fit-content",
											  }
											: null
									}
								>
									Equipment
								</h2>
							</Link>
						</div>
					)}
				</div>
				<div
					className="container"
					style={{ flexGrow: "1", justifyContent: "space-evenly" }}
				>
					{toShowAddButton() && (
						<button
							className="hostel-button"
							title={`Add ${url === "/" ? "Hostel" : page}`}
							onClick={() => {
								switch (page) {
									case "student":
										setFormS(true);
										break;
									case "employee":
										setFormEmp(true);
										break;
									case "equipment":
										setFormEquip(true);
										break;
									default:
										setFormH(true);
										break;
								}
							}}
						>
							<MaterialIcon icon="add" size={36} />
						</button>
					)}
				</div>
			</div>
			{formH && <HostelForm cancel={() => setFormH(false)} />}
			{formS && <StudentForm hostel={hostel} cancel={() => setFormS(false)} />}
			{formEmp && (
				<EmployeeForm hostel={hostel} cancel={() => setFormEmp(false)} />
			)}
			{formEquip && (
				<EquipmentForm hostel={hostel} cancel={() => setFormEquip(false)} />
			)}
			<Navbar></Navbar>
		</React.Fragment>
	);
};

export default Header;
