import express from "express";
import { categoriesRoutes } from "./routes/category.routes";
import { specificationsRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});
