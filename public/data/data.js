function getFormatDate(date){
    let year = date.getFullYear();             
    let month = (1 + date.getMonth());          
    month = month >= 10 ? month : '0' + month;  
    let day = date.getDate();                  
    day = day >= 10 ? day : '0' + day;          
    return  year + '-' + month + '-' + day;       
}

let data = [
    {
        title : "서울",
        content : "서울 남산",
        date : getFormatDate(new Date()),
        lat : 37.55210761707289, 
        lng : 126.98324945094234
    },
    {
        title : "서울",
        content : "서울 용산",
        date : getFormatDate(new Date()),
        lat : 37.53125116591724, 
        lng : 126.9796474462612
    }    
];