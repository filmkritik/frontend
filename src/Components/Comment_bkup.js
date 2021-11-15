import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React from "react";
import {setCookieComment, getCookieComment } from '../Cookies.js';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, onEdit, onDelete, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={3} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button htmlType="submit" loading={submitting} onClick={onEdit} type="primary">
        Edit Comment
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button htmlType="submit" loading={submitting} onClick={onDelete} type="primary">
        Delete Comment
      </Button>
    </Form.Item>
    
  </div>
);

class Comments extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {        
      return;
    }
    setCookieComment('ReviewComment', JSON.stringify(this.state.value), 2);
    this.setState({
      submitting: true,
    });

     setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleEdit = () => {
    if (!this.state.value) {        
        return;
      }
    const givenComment = getCookieComment('ReviewComment'); 
  }


  handleChange = e => {
    this.setState({
      value: e.target.value,
      
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
console.log(value);
setCookieComment('ReviewComment', JSON.stringify(value), 2);
    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              onEdit={this.handleEdit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

export default Comments;