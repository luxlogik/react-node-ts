import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import { AppDataSource } from './data-source'; // Assuming TypeORM

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Connect to database (example for TypeORM)
AppDataSource.initialize().then(() => {
    console.log("Database connected!");
}).catch(error => console.log(error));

// Routes
app.get('/', (req, res) => {
    res.send('Backend API is running!');
});
app.use('/api/users', userRoutes); // Example user routes

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
