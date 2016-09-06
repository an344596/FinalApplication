var React = require('react');
var ReactDOM = require('react-dom');
var Table = require('./Table');
var FormComponent = React.createClass({

    getInitialState: function() {
        return({message:[]});
    },


    render: function(){
        return(
            <div>
            <div className="container-fluid" id="myForm">
                <form method="post" action="http://localhost:8080/saveBut">
                        <div className="form-group">
                        Select list:
                        <select name="wave">
                            <option>---Select---</option>
                            <option>HybridWave 1</option>
                            <option>HybridWave 2</option>
                            <option>HybridWave 3</option>
                            <option>HybridWave 4</option>
                        </select>
                        </div>
                        <div className="form-group">
                                Name:  <input type="text" name="name"/>
                        </div>
                        <div className="form-group">
                                Email:  <input type="text" name="email"/>
                        </div>
                        <div className="form-group">
                                Phone:  <input type="text" name="phone"/>
                        </div>
                        <div className="form-group">
                                Git URL:  <input type="text" name="url"/>
                        </div>
                         <div className="form-group">
                            EmpCode:  <input type="text" name="empcode"/>
                        </div>
                         <div className="form-group">
                            Empdept:  <input type="text" name="empDep"/>
                        </div>
                         <div className="form-group">
                            EmpDesig:  <input type="text" name="empDesig" />
                        </div>
                         <div className="form-group">
                            Skills:  <textarea rows="4" cols="5" name="skills" id="comment"></textarea>
                        </div>
                         <div className="form-group">
                            Experience:  <input type="text" name="exp"/>
                        </div>
                         <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Submit"/>
                        </div>
                </form>
                </div>
                <div className="container">
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>WaveNo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Git Url</th>
                        <th>Emp Code</th>
                        <th>Emp Department</th>
                        <th>Emp Designation</th>
                        <th>Emp Skills</th>
                        <th>Experience</th>
                    </tr>
                </thead>
                <tbody>
                    <Table/>
                </tbody>
            </table>
                </div>
        </div>
        );
    },

    componentDidMount: function()
        {
            $.ajax({
                url: 'http://localhost:8080/showGet',
                dataType: 'json',
                contentType: 'application/json',
                type: 'GET',
                success: function(response){
                    console.log(response);
                    this.setState({messages:response});
                    console.log(this.state.message);
                }.bind(this),
                error: function(xhr, status, err){
                    console.error(err.toString());
                }.bind(this)
            });
        },
})
module.exports = FormComponent
