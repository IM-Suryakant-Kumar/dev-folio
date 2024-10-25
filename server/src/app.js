import "express-async-errors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 4000;
const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
