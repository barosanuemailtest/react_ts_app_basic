interface IProps {
}

interface IState {
    playOrPause?: string;
}

class Player extends React.Component<IProps, IState> {
    playOrPause: HTMLButtonElement;
    // ------------------------------------------^
    constructor(props: IProps) {
        super(props);

        this.state = {
            playOrPause: 'Play'
        };
    }

    render() {
        return (
            <div>
                <button
                    ref={playPause => this.playOrPause = playPause}
                    title={this.state.playOrPause} // in this line I get an error
                >
                    Play
        </button>
            </div>
        );
    }
}