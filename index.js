const updateImages = (data) => {
    const img1 = document.getElementById("image-top")
    img1.src = data[0].image
}


const getProductsData = async () => {
    const apiUrl = "https://products-api-2ttf.onrender.com/api/products";
    const response = await fetch(apiUrl)
    const data = await response.json()
    updateImages(data);
    console.log(data);
}

getProductsData()