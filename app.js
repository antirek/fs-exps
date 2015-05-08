var esl = require('modesl'),
conn = new esl.Connection('109.234.38.141', 8021, 'ClueCon', function() {
    conn.api('status', function(res) {
        //res is an esl.Event instance
        console.log(res.getBody());
    });
});