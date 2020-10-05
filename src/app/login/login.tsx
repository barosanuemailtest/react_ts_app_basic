import * as React from 'react';

interface Credentials {
    userName: string,
    password: string
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<{}, Credentials> {


    state: Credentials;

    public constructor(props: any) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
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
                <input type="text" value={this.state.userName} name="name" />
                </label>
                <br />
                <label>
                    Password:
                <input type="password" value={this.state.password} name="name" />
                </label>
                <br />
                <input type="submit" value="Login" onClick={this.handleSubmit} />
            </form>
        )
    }
}