let btn1 = document.getElementById("btn");
window.onscroll = function(){
    if(scrollY >= 200)        {
            btn1.style.opacity = '1';
        }
    else{
        btn1.style.opacity = '0';
    }
}

btn.onclick = function() {
    scroll({
        left:0,
        top:0,
        behavior:"smooth",
    });
}



////////////////////////////////////////////////////////////////


    function light()
{
    document.querySelector('body').style.backgroundColor = '#eee';
    document.querySelector('body').style.color = '#000000';
    document.getElementById('headre').style.backgroundColor = '#0000ffcc';
    document.getElementById(`box1`).style.boxShadow = '3px 3px 12px #000000';
    document.getElementById(`box2`).style.boxShadow = '3px 3px 12px #000000';
    document.getElementById(`box3`).style.boxShadow = '3px 3px 12px #000000';
    document.getElementById(`box4`).style.boxShadow = '3px 3px 12px #000000';
    document.getElementById(`box5`).style.boxShadow = '3px 3px 12px #000000';
    document.getElementById(`box6`).style.boxShadow = '3px 3px 12px #000000';
    document.getElementById(`box7`).style.boxShadow = '3px 3px 12px #000000';
    document.getElementById(`box8`).style.boxShadow = '3px 3px 12px #000000';
    document.getElementById(`squar`).style.boxShadow = '12px 8px 27px';
    document.getElementById(`squar`).style.backgroundColor = 'rgb(255 0 0 / 78%)';
    document.getElementById(`h4`).style.color = '#fff';   
}
    function dark(){
    document.querySelector('body').style.backgroundColor = '#000212';
    document.querySelector('body').style.color = '#fff';
    document.getElementById('headre').style.backgroundColor = '#384d54';
    document.getElementById(`box1`).style.boxShadow = '3px 3px 12px #fff';
    document.getElementById(`box2`).style.boxShadow = '3px 3px 12px #fff';
    document.getElementById(`box3`).style.boxShadow = '3px 3px 12px #fff';
    document.getElementById(`box4`).style.boxShadow = '3px 3px 12px #fff';
    document.getElementById(`box5`).style.boxShadow = '3px 3px 12px #fff';
    document.getElementById(`box6`).style.boxShadow = '3px 3px 12px #fff';
    document.getElementById(`box7`).style.boxShadow = '3px 3px 12px #fff';
    document.getElementById(`box8`).style.boxShadow = '3px 3px 12px #fff';
    document.getElementById(`squar`).style.backgroundColor = '#00d5ff4a';
    document.getElementById(`h4`).style.color = '#fff';   
    }

//  document.querySelector('body').style.backgroundColor = '#000212';
//    document.querySelector('body').style.color = '#fff';
//    document.getElementById('headre').style.backgroundColor = '#384d54';
//    document.getElementById(`box1`).style.boxShadow = '3px 3px 12px #fff';
//    document.getElementById(`box2`).style.boxShadow = '3px 3px 12px #fff';
//    document.getElementById(`box3`).style.boxShadow = '3px 3px 12px #fff';
//    document.getElementById(`box4`).style.boxShadow = '3px 3px 12px #fff';
//    document.getElementById(`box5`).style.boxShadow = '3px 3px 12px #fff';
//    document.getElementById(`box6`).style.boxShadow = '3px 3px 12px #fff';
//    document.getElementById(`box7`).style.boxShadow = '3px 3px 12px #fff';
//    document.getElementById(`box8`).style.boxShadow = '3px 3px 12px #fff';
//    document.getElementById(`squar`).style.backgroundColor = '#00d5ff4a';
//    document.getElementById(`h4`).style.color = '#000000';   