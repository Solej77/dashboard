var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('messages', function(data) {
  // console.log(data);
  render(data);
})

function render (data) {
  console.log(data);
  data.forEach(element => {
    let contract = parseInt(element.contract);
    let bill = parseInt(element.bill);
    
    myData[contract] = bill;
    console.log(`El contrato ${contract} tienen ${bill} facturas pagadas`);
  });

  myChart.update();
}

function addMessage(e) {
  var message = {
    contract: document.getElementById('contract').value,
    bill: document.getElementById('bill').value
  };

  socket.emit('new-bill', message);
  return false;
}