class PrComp extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Hello Pure Component</h1>
            </div>
        );
    }
}

ReactDOM.render(<PrComp />, document.getElementById("prCmp"));