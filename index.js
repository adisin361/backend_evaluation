const express = require('express');
const companyRouter = require('./src/routes/companyRoutes');

const PORT = 5050;

const app = express();
app.use(express.json());

app.use('/api', companyRouter.router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});