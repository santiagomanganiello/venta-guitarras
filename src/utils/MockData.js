export const getProducts = () =>  {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(products);
        }, 4000);
    });
};
export const getProductsAsync = () => {
    return fetch('https://fakestoreapi.com/products').then((res) => res.json())
};

export const getProductAsyncById = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
        res.json()
    )
}

export const getCategoriesAsync = () => {
    return fetch('https://fakestoreapi.com/products/categories').then((res) =>
        res.json()
    )
}  

