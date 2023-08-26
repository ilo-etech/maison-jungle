import '../styles/Cart.scss';

function Cart() {
    const monstera_price = 8.0;
    const lierre_price = 10.0;
    const bouquet_fleurs_price = 15.0;
    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monstera_price} €</li>
                <li>Lierre : {lierre_price} €</li>
                <li>Bouquet de fleurs : {bouquet_fleurs_price} €</li>
            </ul>
            Total : {monstera_price + lierre_price + bouquet_fleurs_price} €
        </div>
    );
}

export default Cart