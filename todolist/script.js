const li="";
add.addEventListener("click",()=>
{
    let l=document.querySelector(".list");
    let val;
    val=document.getElementById("input").value;
    if(val==null || val=="")
    {
        alert("enter value");
    }
    else
    {
    let  li=document.createElement("LI");
    let check=document.createElement("input");
    check.type="checkbox";
    let  text=document.createElement("span");
    
    text.innerHTML=val;
    li.appendChild(check);
    li.appendChild(text);
    let btn=document.createElement("button");
    btn.textContent="X";
    btn.setAttribute("onclick","clicked(this)");
    li.appendChild(btn);
    l.appendChild(li);
    document.getElementById("input").value="";
    }

    
})
function clicked(e)
{
    console.log(e.parentElement);
    e.parentElement.remove();
}
