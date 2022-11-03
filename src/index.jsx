import React from "react";
import ReactDom from "react-dom";
import Header from "./header";
import Calendar from "./calendar";
import "./index.css";
import HostelCard from "./hostelCard";
import { Students, Employee, Equipment } from "./hostelInfo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Data from "./data.json";
import { StudentInfo, EmployeeInfo, EquipmentInfo } from "./displayitem";

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<div style={{ position: "absolute", width: "100%", height: "100%" }}>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<>
									<Header />
									<HostelCard />
								</>
							)}
						/>
						{Data.map((item, index) => {
							return (
								<Route
									key={index}
									exact
									path={`/${item.id}/student`}
									render={() => (
										<>
											<Header hostel={item} />
											<Students hostel={item} />
										</>
									)}
								/>
							);
						})}
						{Data.map((item, index) => {
							return item.Student.map((obj) => {
								return (
									<Route
										key={index}
										exact
										path={`/${item.id}/student/${obj.id}`}
										render={() => (
											<>
												<Header hostel={item} />
												<StudentInfo item={obj} />
											</>
										)}
									/>
								);
							});
						})}
						{Data.map((item, index) => {
							return (
								<Route
									key={index}
									exact
									path={`/${item.id}/employee`}
									render={() => (
										<>
											<Header hostel={item} />
											<Employee hostel={item} />
										</>
									)}
								/>
							);
						})}
						{Data.map((item, index) => {
							return item.Employee.map((obj) => {
								return (
									<Route
										key={index}
										exact
										path={`/${item.id}/employee/${obj.id}`}
										render={() => (
											<>
												<Header hostel={item} />
												<EmployeeInfo item={obj} />
											</>
										)}
									/>
								);
							});
						})}
						{Data.map((item, index) => {
							return (
								<Route
									key={index}
									exact
									path={`/${item.id}/equipment`}
									render={() => (
										<>
											<Header hostel={item} />
											<Equipment hostel={item} />
										</>
									)}
								/>
							);
						})}
						{Data.map((item, index) => {
							return item.Equipment.map((obj) => {
								return (
									<Route
										key={index}
										exact
										path={`/${item.id}/equipment/${obj.id}`}
										render={() => (
											<>
												<Header hostel={item} />
												<EquipmentInfo item={obj} />
											</>
										)}
									/>
								);
							});
						})}
					</Switch>
				</div>
				<Calendar />
			</BrowserRouter>
		</React.Fragment>
	);
}

ReactDom.render(<App />, document.getElementById("root"));
