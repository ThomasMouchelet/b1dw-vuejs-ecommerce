export const ProductCard = {
    props: {
        id: Number,
        price: Number,
        src: String,
    },
    template: `
        <div class="card" :key="id">
            <img :src="src" alt="">
            <span class="price">{{price}} €</span>
            <div>
                <button class="btn btn-secondary">
                    <i class="fa-regular fa-heart"></i>
                </button>
                <button class="btn btn-primary">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    `   
}