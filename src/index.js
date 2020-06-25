import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './nav';
import Page from './page';

class Main extends React.Component{
    state ={
        data:{},
        isFetching:true
    }
    
    componentDidMount() {
        fetch('https://cwpeng.github.io/live-records-samples/data/content.json')
            .then(response => response.json())
            .then(data => this.setState({ data:data, isFetching:false }));
    }
    // state ={
    //     "headline":"React Redux 入門教學課程",
    //     "chapters":[
    //       {
    //         "key":"start",
    //         "title":"快速開始",
    //         "sections":[
    //           "Webpack 簡介",
    //           "React 簡介"
    //         ]
    //       },
    //       {
    //         "key":"react",
    //         "title":"React 基礎",
    //         "sections":[
    //           "React Element",
    //           "React Component",
    //           "React Lifecycle"
    //         ]
    //       },
    //       {
    //         "key":"redux",
    //         "title":"Redux 基礎",
    //         "sections":[
    //           "Redux 簡介",
    //           "Redux 核心操作",
    //           "React Redux"
    //         ]
    //       }
    //     ]
    //   };

    render() {
        // console.log(this.state);
        if (this.state.isFetching){
            return null;
        }
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact render={() =>
                        (<h1>{this.state.data.headline}</h1>)
                    }/>
                    <Route path="/start" render={() =>
                        (<Page page="start" data={this.state.data.chapters[0]} />)
                    }/>
                    <Route path="/react" render={() =>
                        (<Page page="react" data={this.state.data.chapters[1]} />)
                    }/>
                    <Route path="/redux" render={() =>
                        (<Page page="redux" data={this.state.data.chapters[2]} />)
                    }/>
                </Switch>
            </Router>
        );
    }
}


ReactDOM.render(<Main />,document.getElementById('root'));