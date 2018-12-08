import React from 'react';
import ReactCardFlip from 'react-card-flip';
import GenericCard from '../Components/GenericCard';


class ProjectCard extends React.Component {
    constructor() {
      super();
      this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState({ isFlipped: !this.state.isFlipped });
    }
    
    render() {

        const content = (
            <div style={{margin: "10px 10px 10px 10px"}}>
                <h3>{this.props.title}</h3>
                <h4>{this.props.location}</h4>
                <h4>{this.props.description}</h4>
            </div>
        )
        const comments = Object.values(this.props.comments).map(
            comment => 
            <div key={comment.id}>
                <p style={{margin:"1px 10px 1px 1px", fontSize: "12px"}}>{comment.owner}</p>
                <p style={{margin:"1px 10px 10px 1px"}}>{comment.body}</p>
            </div>
        );

        const reverseContent = (
            <div style={{margin: "10px 10px 10px 10px"}}>
                <div>
                    <h3>Comments: ({this.props.comment_count})</h3>
                    {comments}
                </div>
            </div>
        )

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <div onClick={this.handleClick} key="front">
                    <GenericCard 
                        color="white"
                        width="318px"
                        height="270px"
                        borderRadius="4px"
                        content={content}
                    />
                </div>
                <div onClick={this.handleClick} key="back">
                    <GenericCard
                        color="white"
                        width="318px"
                        height="270px"
                        borderRadius="4px"
                        content={reverseContent}
                    />
                </div>
            </ReactCardFlip>
        )
    }
  }
export default (ProjectCard);