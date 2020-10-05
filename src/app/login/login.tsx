import * as React from 'react';

interface Credentials {
    userName: string,
    password: string
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component {

    public constructor(props: any) {
        super(props);
        this.setPassword = this.setPassword.bind(this);
        this.setPassword = this.setUserName.bind(this);
    }

    state: Credentials = {
        userName: "",
        password: ""
    }

    private setPassword(event: CustomEvent) {
        this.state.password = event.target.value;
    }
    private setUserName(event: CustomEvent) {
        this.state.userName = event.target.value;
    }

    private handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        console.log('username: ' + this.state.userName);
        console.log('password: ' + this.state.password);
    }


    render() {
        return (
            <form>
                <label>
                    Name:
                <input type="text" value={this.state.userName} name="name" onChange={this.setUserName.bind(this)} />
                </label>
                <br />
                <label>
                    Password:
                <input type="password" value={this.state.password} name="name" onChange={this.setPassword.bind(this)} />
                </label>
                <br />
                <input type="submit" value="Login" onClick={this.handleSubmit} />
            </form>
        )
    }
}