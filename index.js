let foodShow = document.getElementsByClassName("food-show");
function openfood(food)
{
 for(let foods of foodShow)
 {
        foods.classList.remove("active-tab");
 }
 document.getElementById(food).classList.add("active-tab");
}

function myMenu()
{
  let navLinks = document.querySelector(".nav-link");
 navLinks.classList.toggle("visible-link");
}
function searchFood()
{
    console.log("sagar");
    const searchItem = document.getElementById("search-item").value.toUpperCase();
    const storeItem = document.getElementById("pro-list");
    const product = document.querySelectorAll(".food-card");
    const pName = storeItem.getElementsByTagName("h2");
    console.log(pName);
    for(let i=0; i < pName.length; i++)
    {
        let match = product[i].getElementsByTagName("h2")[0];
        if(match)
        {
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchItem) > -1)
            {
                product[i].style.display = "";
            }
            else
            {
                product[i].style.display = "none";
                
            }
        }
    }
}
