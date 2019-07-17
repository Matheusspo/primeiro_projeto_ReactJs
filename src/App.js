import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import NewSeries from './NewSeries'
const About = () => <section className="intro-section"><h1>Sobre</h1></section>

class App extends Component {    
  render(){
    return (
      <Router>
      <div className="App">
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="images/logo.png" height="30" />
                </a>
              </div>
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to='/'>Home</Link>                   
                  </li>
                  <li>
                    <Link to='/about'>Sobre</Link>
                  </li>
                  <li>
                    <Link to='/new'>Nova série</Link>
                  </li>
                </ul>
              </div>
            </div>
           </nav> 
           <Route exact path='/' component={Home} />
           <Route exact path='/about' component={About} />  
           <Route exact path='/new' component={NewSeries} />                 
          <section id="services" className="services-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>Para assistir</h1>
                  <div id="series" className="row list-group">
                    <div className="item  col-xs-4 col-lg-4">
                      <div className="thumbnail">
                        <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                        <div className="caption">
                          <h4 className="group inner list-group-item-heading">
                            How I met your mother</h4>
                          <div className="row">
                            <div className="col-xs-12 col-md-6">
                              <p className="lead">
                                AÇÃO</p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                              <a className="btn btn-success" href="">Gerenciar</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item  col-xs-4 col-lg-4">
                      <div className="thumbnail">
                        <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                        <div className="caption">
                          <h4 className="group inner list-group-item-heading">
                            How I met your mother</h4>
                          <div className="row">
                            <div className="col-xs-12 col-md-6">
                              <p className="lead">
                                AÇÃO</p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                              <a className="btn btn-success" href="http://www.jquery2dotnet.com">Gerenciar</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
      </Router>
    )
  }
}
export default App
