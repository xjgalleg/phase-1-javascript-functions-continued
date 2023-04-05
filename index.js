function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}
saturdayFun();
saturdayFun("bathe my dog")

function mondayWork(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`)
}
mondayWork();
mondayWork("work from home");

function wrapAdjective (style = "*"){
    return function(stringOne = "special"){
        return `You are ${style}${stringOne}${style}!`
    }
}