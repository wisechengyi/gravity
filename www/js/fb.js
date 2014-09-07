/**
 * Created by yicheng3 on 9/7/14.
 */
function isFbTokenValid(token, callback){
    $.get("https://graph.facebook.com/me",{
            access_token: token
        }
    ).done( function (data) {
            console.log(data);
            if (data.error==undefined){
                callback(true);
            }
            else{
                callback(false);
            }

        })
    .fail(function (err) {
        console.error(err);
            callback(false);
        //handle error with err
    });
}


function swapJsonKeyValues(input) {
    var one, output = {};
    for (one in input) {
        if (input.hasOwnProperty(one)) {
            output[input[one]] = one;
        }
    }
    return output;
}