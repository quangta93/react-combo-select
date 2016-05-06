import React, {Component} from 'react';
import ComboSelect from './Components/ComboSelect.jsx';

export default class FakeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '-Select me-'
        }
    }

    fakeFunction(value) {
        //console.log(value);
    }

    fakeToggle() {
        console.log('yay');
    }

    render() {
        //var standardArray = ["DDD", "CCC", "BBB", "AAA"];
        //var standardArray = [3, 1, 11, 111, 21, 33, 14, 32, 442];
        //var standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];
        var standardArray = ["737-800", "767-300", "777-200", "777-300", "ERJ 170-100"];
        //var standardArray = [];
        // var standardArray = [
        //     {text: "air-JA007D", win: "win-JA007D", value: "JA007D"},
        //     {text: "air-JA008D", win: "win-JA008D", value: "JA008D"},
        //     {text: "air-JA009D", win: "win-JA009D", value: "JA009D"},
        //     {text: "air-JA107D", win: "win-JA107D", value: "JA010D"}
        // ];

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <form action="">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {this.state.text}
                    <br/>
                    <div style={{position: 'relative'}}>
                        {<ComboSelect text={this.state.text} type="multiselect" data={standardArray}
                                      icon="fa fa-chevron-circle-down" search="smart"
                                      disabled={false} onChange={this.fakeFunction} map={{text: 'win', value: true}} onToggle={this.fakeToggle}/>}
                        {<ComboSelect text={this.state.text} type="multiselect" data={standardArray}
                                      icon="fa fa-chevron-circle-down" search="smart"
                                      disabled={false} onChange={this.fakeFunction} map={{text: 'win', value: true}}/>}
                    </div>
                    <br/>
                    <input type="text" value={this.state.text} required readOnly/>
                    <br/>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <input type="text" required/>

                    <button onClick={(e) => {e.preventDefault();this.setState({text: 'asd', data: ['asd', 'asdf', 'rfe']})}}>click mee</button>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}