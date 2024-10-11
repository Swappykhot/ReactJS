import React from "react"


 class Students extends React.Component
{
    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    Students Enrolled<br />
                </div>

                <div className="row border">
                    <div className="col-2">
                        <img src={this.props.headshot} className="w-50"></img>
                    </div>
                    <div className="col-10">
                        {this.props.name} <br />
                        Programming Experience {this.props.experience} years
                    
                    </div>
               
                </div>
            </div>
        )
    }
}

export default Students