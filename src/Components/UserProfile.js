import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar';
import AuthenticationService from "./AuthenticationService";

import { Steps, Tabs, Button, message, Form, Input, Checkbox, Select, Menu, Dropdown, Space, Tooltip } from 'antd';


const {  TabPane  } = Tabs

function callback(key) {
    console.log(key);
  }

const UserProfile = () => {   
    const [form] = Form.useForm();

const [ likedMoviesDetails, setLikedMovies ] = useState([]);
const [ likedTvshowsDetails, setLikedTVShows ] = useState([]);
const [ watchlistDetails, setWatchList ] = useState([]);
const [ historyDetails, setHistory ] = useState([]);

const RemoveItemFromWatchList = (value) => {
    setWatchList(watchlistDetails.filter(function(p) { 
      return p.id !== value.id 
    }));
    AuthenticationService.postAPI('removeWatchListItem', {id: value.Id})
}

const RemoveLikedMovie = (value) => {
    setLikedMovies(likedMoviesDetails.filter(function(p) { 
      return p.id !== value.id 
    }));
    AuthenticationService.postAPI('removeLikedMovie', {id: value.Id})
}

const RemoveLikedTVShow = (value) => {

    setLikedTVShows(likedTvshowsDetails.filter(function(p) { 
      return p.id !== value.id 
    }));
    AuthenticationService.postAPI('removeLikedTvShow', {id: value.Id})
}

const onFinish = (values) => {
    var param = {
      firstname: values.firstname,
      lastname: values.lastname,
      phonenumber: values.phonenumber,
      email: values.email,
      password: values.password
    }
    console.log(param);
    console.log('onFinish')
    AuthenticationService.postAPI('updateUserProfile', param);
    alert("User details updated");

  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


useEffect(() => {
    form.setFieldsValue({
            firstname: 'Amith Reddy',
            lastname: 'Nomula',
            email: 'amithreddynomula@gmail.com',
            phonenumber: '9405943128',
            password: 'aeiou',
            userId: 2
      });

      setLikedMovies([
          {
              id: 1,
              name: "Venom: Let There Be Carnage"
          },
          {
            id: 2,
            name: "Eternals"
        },
        {
            id: 3,
            name: "Army of Thieves"
        },
        {
            id: 4,
            name: "Free Guy"
        },
        {
            id: 5,
            name: "Gunpowder Milkshake"
        }
      ])

      setLikedTVShows([
        {
            id: 1,
            name: "Squid Game"
        },
        {
          id: 2,
          name: "Dark"
      },
      {
          id: 3,
          name: "Money Heist"
      },
      {
          id: 4,
          name: "Prison Break"
      },
      {
          id: 5,
          name: "Breaking Bad"
      }
    ])
    setWatchList([
        {
            id: 1,
            name: "Venom: Let There Be Carnage"
        },
        {
          id: 2,
          name: "Eternals"
      },
      {
          id: 3,
          name: "Army of Thieves"
      },
      {
          id: 4,
          name: "Free Guy"
      },
      {
          id: 5,
          name: "Gunpowder Milkshake"
      }
    ])

    setHistory([
      {
          id: 1,
          action_description: "User liked movie: Eternals",
          action_date: '11/11/2021'

      },
      {
        id: 2,
        action_description: "User added a movie to watch list: Army of Thieves",
        action_date: '11/11/2021'
    },
    {
        id: 3,
        action_description: "User disliked a movie: Free Guy",
        action_date: '11/11/2021'
    }
  ])


console.log('in hook')


    fetch('http://localhost:8080/getLikedMovies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setLikedMovies(data.results);
    });

    fetch('http://localhost:8080/getLikedTVShows')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setLikedMovies(data.results);
    });

    fetch('http://localhost:8080/getHistory')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setHistory(data.results);
    });


    fetch('http://localhost:8080/getWatchList')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setWatchList(data.results);
    });

    // fetch('http://localhost:8080/getUserDetails')
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     setUserDetails(data.results);
    // });
  

}, []);

return(  
    <div>
    <div>
        <Navbar />
    </div>
    <div className='user-profile-container'>
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Edit Profile" key="1">
        <Form
      name="basic"
      form={form}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Please enter your First Name!',
              },
            ]}
          >
          <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please enter your Last Name!',
              },
            ]}
          >
          <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phonenumber"
            rules={[
              {
                required: true,
                message: 'Please enter your Phone Number!',
              },
            ]}
          >
          <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          >
          <Input.Password />
          </Form.Item>
          <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
       <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Liked Movies" key="2">
        <div>
            {
                likedMoviesDetails && likedMoviesDetails.map( movie => 
                <div className="movie-header">
                    <div className="movie-name">{movie.name}</div>
                    <Button type="primary"  onClick={() => RemoveLikedMovie(movie)}>
          Remove
        </Button>
                </div>
                )
            }
        </div>
        </TabPane>
        <TabPane tab="Liked TV Shows" key="3">
        <div>
            {
                likedTvshowsDetails && likedTvshowsDetails.map( movie => 
                <div className="movie-header">
                    <div className="movie-name">{movie.name}</div>
                    <Button type="primary"  onClick={() => RemoveLikedTVShow(movie)}>
          Remove
        </Button>
                </div>
                )
            }
        </div>
        </TabPane>
        <TabPane tab="Watchlist" key="4">
        <div>
            {
                watchlistDetails && watchlistDetails.map( movie => 
                <div className="movie-header">
                    <div className="movie-name">{movie.name}</div>

                    <Button type="primary" onClick={() => RemoveItemFromWatchList(movie)}>Remove</Button>
                </div>
                )
            }
        </div>
        </TabPane>
        <TabPane tab="History" key="5">
            {historyDetails.map(history => 
            <div className='history-container'>
            <div><b>{history.action_description}</b></div>
            <div className="history-date">{history.action_date}</div>
            </div>
            )}
        </TabPane>
    </Tabs>
    </div>
  </div>
);
}

export default UserProfile;