var requests=[];

function requestDesc(value, resolve)
{
    requests.push({key:value, resolve:resolve});
    // setTimeout(function(){
    //     resolve(value);
    // }, 1000);
}
function requestClean()
{
    for(key in requests)
    {
        e = requests[key];
        e.resolve(e.key);
    }
}

function getDesc1()
{
    requestDesc(1, function(value){
        console.log(value);
    });
}

function getDesc2()
{
    requestDesc(2, function(value){
        console.log(value);
    });
}

getDesc1();
getDesc2();
requestClean();
console.log('end');