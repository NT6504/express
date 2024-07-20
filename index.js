
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/get-users', (req, res) => {
  //  fetching users
  const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }];
  res.json(users);
});

app.post('/add-user', (req, res) => {
  //  adding a user
  res.status(201).send('User added successfully');
});

app.put('/user/:id', (req, res) => {
  //  updating a user
  const userId = req.params.id;
  res.status(201).send(`User with ID ${userId} updated successfully`);
});

app.delete('/user/:id', (req, res) => {
  //  deleting a user
  const userId = req.params.id;
  res.send(`User with ID ${userId} deleted successfully`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

