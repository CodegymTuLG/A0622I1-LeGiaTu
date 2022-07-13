function checkyear() {
    let year = document.getElementById("inputyear")
    let yearvalue = year.value
    // if(parseInt(yearvalue)%4 == 0){
    //     if(parseInt(yearvalue)%100 == 0){
    //         if(parseInt(yearvalue)%400 == 0){
    //             document.getElementById("result").innerHTML = "Năm " + yearvalue + " là năm nhuận"
    //         }else{
    //             document.getElementById("result").innerHTML = "Năm " + yearvalue + " không phải là năm nhuận"
    //         }
    //     }else{
    //         document.getElementById("result").innerHTML = "Năm " + yearvalue + " là năm nhuận"
    //     }
    // }else{
    //     document.getElementById("result").innerHTML = "Năm " + yearvalue + " không phải là năm nhuận"
    // }
    /* take better sulution */
    let isLeapYear = false
    let devi4 = yearvalue%4 == 0
    if(devi4){
        let devi100 = yearvalue%100 == 0
        if(devi100){
            let devi400 = yearvalue%400 == 0
            if(devi400){
                isLeapYear = true
            }
        }else{
            isLeapYear = true
        }
    }
    if(isLeapYear){
        document.getElementById("result").innerHTML = "Năm " + yearvalue + " là năm nhuận"
    }else {
        document.getElementById("result").innerHTML = "Năm " + yearvalue + " không phải là năm nhuận"
    }
}
