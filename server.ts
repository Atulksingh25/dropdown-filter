 const selectElement  = document.getElementById("categorySelect") as HTMLSelectElement;
 const items   = document.querySelectorAll("#itemList li")

 function filterItems(category:string):void{
  items.forEach(item =>{
    const itemElement  = item as HTMLElement;
    const itemClass  = itemElement.className;
    
    if(category === "all" ||itemClass === category){
      itemElement.style.display = "block"

    }
    else{
      itemElement.style.display = "none"
    }


  });
 }
 selectElement.addEventListener("change", () => {
  const selectedValue = selectElement.value;
  filterItems(selectedValue);
});
