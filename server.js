var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
port = 3000;
const request = 'prequest';
let users = require('./users.json');


async function saveUsers()
{
require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
return true;
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
io.emit('')
  users.push({
    "id": 2
  });
  saveUsers();

  var user =  users.find(x=>x.id==2);
    console.log('user connected');
  });



http.listen(3000, () => {
  console.log('listening:3000');
});
