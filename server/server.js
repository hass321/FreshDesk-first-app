const base64 = require('base-64');


exports = {
    serverMethod: function (options) {

        var ticketID = options.ticketID;
        var domain = options.iparams.domain_name;

        var headers = { "Authorization": "Basic <%= encode(iparam.api_key) %>" };
        var options = {
            headers: headers,
            isOAuth: true
        };
        var url = `https://${domain}.freshdesk.com/api/v2/tickets/${ticketID}`;

        $request.get(url, options)
            .then(function (data) {
                console.log("Request success", data)
                renderData(null, { 'Ticket_Details': data });
            },
                function (err) {
                    console.log("Request error", err)
                    renderData(null, { 'Ticket_Details': err })
                })

    }
}