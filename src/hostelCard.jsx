import React, { useState } from "react";
import Draggable from "react-draggable";
import "./hostelcard.css";
import Data from "./data.json";
import { Link } from "react-router-dom";
import MaterialIcon from "react-google-material-icons";
import axios from "axios";
const HostelCard = () => {

	const [delIndex,setDelIndex]=useState("");
	const DeleteBox = () =>{
		const [data, setData] = useState(Data);
		const deleteCard=(key)=>{
			let filterData = [...data].filter((OBJ)=>OBJ.id!==key)
			setData(filterData)
			const url = "http://localhost:8000/write";
		axios.post(url, filterData).then((response) => {
			// console.log(response);
		});
		}

		return <>
		<div className="delete-box">
			
			<div style={{ display: "flex", justifyContent: "end" }}>
			<button
							style={{ border: "none", color: "#264653", background: "none" }}
							onClick={()=>{setCard(false)}}
							>
							<MaterialIcon icon="close" size={30} />
						</button>
							</div>
			<h4>{`Confirm delete "${[...data].find(item=>item.id===delIndex).HostelName}"`}</h4>
			<button className="ok-button" onClick={()=>{deleteCard(delIndex);setCard(false);window.location.reload(false);}}>Ok</button>
		</div>
		<div className="backdrop" onClick={()=>{setCard(false)}}></div>
		</>
	}

const [card, setCard] = useState(false);

	return (
		<React.Fragment>
			<div
				className="first"
				style={{
					display: "grid",
					gridTemplateColumns: "auto auto auto auto",
					gridTemplateRows:"auto auto auto",
					justifyContent: "space-evenly",
					alignItems: "center",
					height: "830px",
				}}
			>
				{Data.map((Item,index) => {
					return (
						<>
							<Draggable bounds="container">
								<div className="card" title={Item.HostelName}>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "flex",
												flexDirection: "column",
											}}
										>
											<div
												style={{
													backgroundColor: Item.Color,
													display: "flex",
													justifyContent: "space-evenly",
													alignItems: "center",
													flexGrow: "1",
												}}
												>
									<Link
										to={`/${Item.id}/student`}
										style={{textDecoration:"none",flexGrow:"3",display:"flex",justifyContent:"center"}}
										>			<h1 style={{ color: "white" }}>{Item.HostelName}</h1>
										</Link>

										<button onClick={()=>{setCard(true); setDelIndex(Item.id)}} className="delete-button"><MaterialIcon icon="delete" size={36}></MaterialIcon></button>
										</div>

											<div
												style={{
													display: "flex",
													flexDirection: "column",
													justifyContent: "center",
													flexGrow: "2",
												}}
											>
												<h3>
													<strong>Warden:</strong> <u>{Item.Warden}</u>
												</h3>
												<h3>
													<strong>Caretaker:</strong> <u>{Item.Caretaker}</u>
												</h3>
												<h3>
													<strong>Floors:</strong>{" "}
													<u>{Item.NoOfFloor}</u>
												</h3>
												<h3>
													<strong>Rooms:</strong>{" "}
													<u>{Item.FloorRoom.map(i=>{return `${i}, `})}</u>
												</h3>
											</div>
										</div>
								</div>
							</Draggable>
							{card && <DeleteBox />}
						</>
					);
				})}
			</div>
		</React.Fragment>
	);
};


export default HostelCard;
