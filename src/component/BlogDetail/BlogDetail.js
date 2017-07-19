/**
 * Created by Scc on 2017/7/18.
 */
import React, {Component} from 'react';


export default  class BlogDetail extends Component {
    //加了这个markdown才有样式
    componentDidUpdate() {
        document.querySelectorAll('.markdown-body code').forEach((val, index) => {
            hljs.highlightBlock(val);
        })
    }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={ this.props.getMarkdownText }></div>
            </div>
        )
    }
}