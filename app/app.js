$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          client.events.on('app.activated',
            function() {
                client.data.get('contact')
                    .then(function(data) {
                        console.warn("contact", data)
                        var { name, email } = data.contact;
                        $('#contact').text(`${name} (${email})`);
                    })
                    .catch(function(e) {
                        console.log('Exception - ', e);
                    });
                client.data.get("loggedInUser").then (
                    function(data) {
                      $('#user').text(data.loggedInUser.contact.name);
                    },
                    function(error) {
                      console.log("error", error)
                    }
                );
                client.data.get("ticket").then (
                    function(data) {
                      console.log("Ticket data", data)
                      var {status_label, priority_label, id} = data.ticket
                      $('#status').text(`${status_label}`)
                      if(priority_label == 'High'){
                          $('#priority').text(`${priority_label}`).css({"background-color": '#FFD012', "color": "white"})
                      }
                      if(priority_label == 'Low'){
                        $('#priority').text(`${priority_label}`).css({"background-color": '#A0D76A', "color": "white"})
                      }
                      if(priority_label == 'Medium'){
                        $('#priority').text(`${priority_label}`).css({"background-color": '#4DA1FF', "color": "white"})
                      }
                      if(priority_label == 'Urgent'){
                        $('#priority').text(`${priority_label}`).css({"background-color": '#FF5959', "color": "white"})
                      }
                    },
                    function(error) {
                      console.log("Ticket error", error)
                    }
                );
        });
    });
});
