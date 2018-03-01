exports.addRSVP = function(req, res) {
var rsvpEmail = req.body.resvpEmail;

  console.log(rsvpEmail);

  data.rsvp.push(rsvpEmail);

  res.send(rsvpEmail);
}