import React from 'react';
import './TitleText.css';

class TitleText extends React.Component{

    render(){
        return(<div>
            <div className="divMain">
                <div>
                    <p className="title">
                        {this.props.title}
                    </p>
                </div>
                <div><p className="text">
                        {this.props.text}
                    </p>
                </div>
            </div>
        </div>);
    }

}

export default  TitleText; 