import  React, { Component } from 'react';

export default  class BlogDetail extends  Component {
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                this is blog detail
            </div>
        )
    }
}
