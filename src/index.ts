import express from 'express';
import { VectorSearchRouter } from './VectorSearchRouter';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const router = new VectorSearchRouter();
    const result = router.routeVectorQuery([1, 2, 3, 4, 5]); 
    res.json({ status: "Success", selectedShard: result });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));