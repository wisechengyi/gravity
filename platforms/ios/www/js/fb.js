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

function applyGravity(){

    var name_a = $("#matter_alpha").val();
    var name_b = $("#matter_beta").val();
    var reason = $("#reason").val();

    var id_alpha = nameToId[name_a];
    var id_beta = nameToId[name_b];

    console.log("while applying force:",name_a,name_b);


    $.post("http://localhost:3000/api/match", {
            id_alpha: id_alpha,
            id_beta: id_beta,
            reason: reason
        }
    ).done(function (data) {
            console.log("Match:",data);
        });



}