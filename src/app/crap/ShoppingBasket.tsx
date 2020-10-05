import * as React from "react";

interface Props {
    products: string[];
}

interface State {
    quantities: { [key: string]: number };
}

export class ShoppingBasket extends React.Component<Props, State> {
    static defaultProps: Props = {
        products: []
    };

    state: State = {
        quantities: this.props.products.reduce((acc, product) => {
            acc[product] = 1;
            return acc;
        }, {})
    };

    render() {
        const { products } = this.props;
        const { quantities } = this.state;

        return (
            <div>
                <ul>
                    {products.map(product => (
                        <li>
                            <ProductDisplay title={product} />
                            <p>
                                Quantity:
                <input
                                    type="number"
                                    value={quantities[product]}
                                    onChange={this.onQuantityChanged(product)}
                                />
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    onQuantityChanged = (product: string) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const quantity = parseInt(e.target.value, 10);

        this.setState({
            quantities: {
                ...this.state.quantities,
                [product]: quantity
            }
        });
    };
}

const ProductDisplay = (props: { title: string }) => <h2>{props.title}</h2>;
