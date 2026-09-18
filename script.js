const toast=document.getElementById("toast");
function notify(m){toast.textContent=m;toast.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>toast.classList.remove("show"),2500)}
document.getElementById("saveContact").addEventListener("click",e=>{e.preventDefault();const v=["BEGIN:VCARD","VERSION:3.0","FN:SMG SILKS","ORG:SMG SILKS","TEL;TYPE=CELL:+917418989145","ADR;TYPE=WORK:;;#6A, Vilakkadi Kovil Street;Kancheepuram;;Tamil Nadu;India","NOTE:Where Tradition Meets Elegance","END:VCARD"].join("\r\n");const u=URL.createObjectURL(new Blob([v],{type:"text/vcard;charset=utf-8"}));const a=document.createElement("a");a.href=u;a.download="SMG-SILKS.vcf";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(u);notify("SMG SILKS contact card ready to save.")});
document.getElementById("websiteLink").href=window.location.href;
for(const [id,msg] of [["buyersLink","The Buyers Group link will be added here."],["facebookLink","The Facebook page link will be added here."]])document.getElementById(id).addEventListener("click",e=>{e.preventDefault();notify(msg)});
document.getElementById("year").textContent=new Date().getFullYear();
