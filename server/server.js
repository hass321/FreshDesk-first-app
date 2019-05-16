const base64 = require('base-64');


exports = {
    serverMethod: function(options){

        var ticketID = options.ticketID;
        var api_key = options.iparams.api_key;
        var encode_key = base64.encode(api_key);
        var domain = options.iparams.domain_name;

        var headers = { "Authorization": `Basic <%= encode('${encode_key}') %>`};
        // var headers = { "Authorization": `Basic <%= ${encode_key} %>`};
        var url = `https://${domain}.freshdesk.com/api/v2/tickets/${ticketID}`;

        $request.get(url, headers)
        .then(function(data){
            console.log("Request success", data)
            renderData(null, { 'Ticket_Details': data });
        },
        function(err){
            console.log("Request error", err)
            renderData(null, { 'Ticket_Details': err })
        })
        
    }
}