var React = require('react');
var helpers = require('../utils/helpers');

var Main = React.createClass({
    handleSearch: function(){
        var name = this.refs.searchText.value;
        this.refs.searchText.value = '';
        helpers.findUser(name)
            .then(function(response){
                console.log(response);
                self.history.pushState(null , "search/" + username);
            })
    },
    render: function(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-8 col-sm-offset-1" style={{marginTop: 15}}>
                        Cryptochat
                    </div>
                    <form onSubmit={this.handleSearch}>
                        <button type="submit" className="btn btn-primary">Find All Users</button>
                    </form>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = Main;