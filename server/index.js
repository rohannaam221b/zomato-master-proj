import express from "express";
import cors from "cors"; // cross origin request .
import helmet from "helmet"; // its for security 

const zomato = express();

// application middleware
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());


zomato.get('/', (req, res) => res.json({ message: "Setup success" }));

zomato.listen(4000, () => console.log("Server is running"));
