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

    render() {
        // console.log(this.state.data.chapters);
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

                    {this.state.data.chapters.map((chapter,index) =>{
                        return (<Route key={index} path={`/${chapter.key}`} render={() =>
                            (<Page data={chapter}/>)
                        }/>)
                    })}
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<Main />,document.getElementById('root'));