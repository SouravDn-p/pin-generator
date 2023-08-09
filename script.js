let generateString = "" ;
let submitString ="";
let tryLeft=3;

document.getElementById('generateBtn').addEventListener('click',function(){
    generateString = Math.floor(Math.random()*(9999-1000+1))+1000;
    // (9999 - 1000 + 1)) + 1000
    console.log(submitString);
    document.getElementById('generateDisplay').value=generateString;
});


let buttons = document.getElementsByClassName('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if (e.target.innerText == '<') {
            // console.log("this is working");
            submitString  = submitString .toString().slice(0,-1);
            document.getElementById('submitDisplay').value=submitString ;
        }
        else if (e.target.innerText == 'C') {
            submitString  = "";
            document.getElementById('submitDisplay').value=submitString ;
        }
        else{
            submitString  = submitString  + e.target.innerText;
            document.getElementById('submitDisplay').value=submitString ;
        }
    })
});

document.getElementById('submit-btn').addEventListener('click',function(){
    if (tryLeft>=0){
        submitString = document.getElementById('submitDisplay').value;
        generateString = document.getElementById('generateDisplay').value;
        isEqual= (submitString == generateString && submitString !="");

    if (isEqual == true){
        document.getElementById('notifyWrongPassword').style.display="none";
        document.getElementById('notifyRightPassword').style.display='block'
        document.getElementById('tryLeft').innerText=3;
        tryLeft = 3;
        document.getElementById('generateDisplay').value="";
        document.getElementById('submitDisplay').value="";

    }
    else{
        document.getElementById('notifyWrongPassword').style.display='block';
        document.getElementById('notifyRightPassword').style.display='none'
        tryLeft =tryLeft- 1;
        if(tryLeft  == -1){
            document.getElementById('submitDisplay').value="Refresh the website";
            document.getElementById('submitDisplay').style.color = "salmon";
            document.getElementById('submitBody').style.display='none';
        }
        else{
            document.getElementById('tryLeft').innerText=tryLeft;
        }
        
        }
    }
})