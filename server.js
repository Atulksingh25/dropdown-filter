var selectElement = document.getElementById("categorySelect");
var items = document.querySelectorAll("#itemList li");
function filterItems(category) {
    items.forEach(function (item) {
        var itemElement = item;
        var itemClass = itemElement.className;
        if (category === "all" || itemClass === category) {
            itemElement.style.display = "block";
        }
        else {
            itemElement.style.display = "none";
        }
    });
}
selectElement.addEventListener("change", function () {
    var selectedValue = selectElement.value;
    filterItems(selectedValue);
});
