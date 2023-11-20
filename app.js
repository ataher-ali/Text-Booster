

result=()=> {
    let text = document.getElementById('text').value
    let num = document.getElementById('num').value
    let copy =document.getElementById('copy')
    let arr = " "
    if(num>0){
        for (let i = 1; i <= num; i++) {
            arr =`${arr}\n ${text}`
        }
    }
    copy.value=arr
    console.log(arr)
    
}

//copy btn function 

copyFun=(copyText)=>{
    copyText.select();
    navigator.clipboard.writeText(copyText.value)

    alert(`Copy the text : ${copyText.value}`)
}

copyBtn =()=>{
    console.log('copy');
    let copyText =document.getElementById('copy')
   copyFun(copyText)
}

