const evento = new Date('August 19, 1975 23:15:30');

evento.setDate(24);

console.log(evento.getDate());
// Expected output: 24

evento.setDate(32);
// Only 31 days in August!

console.log(evento.getDate());
// Expected output: 1
