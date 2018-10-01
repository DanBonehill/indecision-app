class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            toggle: false
        };
    }
    toggleDetails() {
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.toggleDetails}>{this.state.toggle ? "Hide" : "Show"} details</button>
                {this.state.toggle && (
                    <p>Hey. These are the details you can see</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

// const app = document.getElementById('app');
// let toggle = false;
//
// const toggleDetails = () => {
//     toggle = !toggle;
//     renderApp();
// };
//
// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Toggle Visibility</h1>
//             <button onClick={toggleDetails}>{toggle ? "Hide" : "Show"} details</button>
//             {toggle && (
//                 <p>Hey. These are the details you can see</p>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, app);
// };
//
// renderApp()