import React = require("react");

interface CarProps {
    color: string
}

export class Car extends React.Component<CarProps> {

    constructor(props: CarProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>I am a {this.props.color} Car!</h2>;
            </div>
        )
    }

}