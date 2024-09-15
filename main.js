/*

let url = "https://jsonplaceholder.typicode.com/albums/1/photos"
let container = document.getElementById("container")
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        data.map(item => {
            let text = document.createElement("p")
            text.textContent = item.title
            text.classList.add("title")

            let img = document.createElement("img")
         
            img.src = item.url
            container.appendChild(text)
            container.appendChild(img)


        })
    })
    */

    let container = document.getElementById("container");
        let coffeeImage = document.getElementById("coffeeImage");

        function fetchCoffeeImage() {
            fetch("https://coffee.alexflipnote.dev/random.json")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    coffeeImage.setAttribute("src", data.file); 
                });
        }

        fetchCoffeeImage();

 
        setInterval(fetchCoffeeImage, 2000);
