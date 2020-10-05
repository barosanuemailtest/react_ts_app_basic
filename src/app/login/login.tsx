import * as React from 'react';

interface Credentials {
    userName: string,
    password: string
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<{}, Credentials> {

    state: Credentials = {
        password: "",
        userName: ""
    };

    private handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        console.log('username: ' + this.state.userName);
        console.log('password: ' + this.state.password);
    }

    private setPassword(event: CustomEvent) {
        this.setState({ password: event.target.value });
    }
    private setUserName(event: CustomEvent) {
        this.setState({ userName: event.target.value });
    }


    render() {

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input name="login" value={this.state.userName} onChange={e => this.setUserName(e)} />
                <input name="password" value={this.state.password} onChange={e => this.setPassword(e)} type="password" />
                <input type="submit" value="Login" />
            </form>
        )
    }
}