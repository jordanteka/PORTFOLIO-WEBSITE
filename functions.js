let tab_links=document.getElementsByClassName("tab_links");
let tab_contents=document.getElementsByClassName("tab_contents");
function openTab(tab_name){
    for(tab_link of tab_links){
        tab_link.classList.remove("active_link")
    }
    for(tab_content of tab_contents){
        tab_content.classList.remove("active_tab")
    }
    event.currentTarget.classList.add("active_link")
    document.getElementById(tab_name).classList.add("active_tab")
}
let sidemen = document.getElementById("sidemenu");
function open_menu(){
    sidemen.style.right="0";
}
function close_menu(){
    sidemen.style.right="-150px";
    }
