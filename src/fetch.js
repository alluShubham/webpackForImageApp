let searchImage = async (api,value) => {
    try{
        let res = await fetch(
            `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${api}`
        )
        let data = await res.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

let append = (data,container) => {  //
    data.map (({alt_description, urls:{small}}) =>{
        let div =document.createElement("div");

        let image =document.createElement("img");
        image.src =small;

        let h3 =document.createElement("h3")
        h3.textContent =alt_description;

        div.append(image,h3)

        container.append(div);
        // document.querySelector("#container").append(div)
    })
}

export {searchImage,append}