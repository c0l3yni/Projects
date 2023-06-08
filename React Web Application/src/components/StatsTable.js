import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, value) {
	return { name, value };
}

const StatsTable = ({ stats, statTotal }) => {
	const rows = [
		createData("Stat Total", statTotal),
		createData(stats.hp.name, stats.hp.value),
		createData(stats.atk.name, stats.atk.value),
		createData(stats.def.name, stats.def.value),
		createData(stats.sp_atk.name, stats.sp_atk.value),
		createData(stats.sp_def.name, stats.sp_def.value),
		createData(stats.speed.name, stats.speed.value),
	];

	return (
		<TableContainer sx={{ maxWidth: 650, margin: "auto" }} component={Paper}>
			<Table sx={{ minWidth: 340 }} aria-label="simple table">
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							{/* <TableCell align="left">{row.name}</TableCell> */}
							<TableCell align="right">{row.value}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default StatsTable;
