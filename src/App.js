import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import { useState, useEffect } from "react";
import userl from "./Database/db.json"
import Feed from "./pages/Feed";
import postl from "./Database/postList.json"
import catl from "./Database/categories.json"
import Story from "./pages/Story"

function App() {
  let navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState(null);
  // const [registeredUser, setRegisteredUser] = useState(true);

  const [userList, changeUserList] = useState(userl);

  const [catList, setCatList] = useState(catl)

  const onSaveData = (user) => {
    const temp = {
      id: Math.random(),
      username: user.username,
      name: user.name,
      email: user.email,
      age: user.age,
      gender: user.gender,
      password: user.password,
      profilePicture: user.image,
      bio: user.bio,
      posts: [],
    };
    changeUserList((prev) => [...prev, temp]);
  };

  const onSaveEditData = (userData, user) => {
    const temp = {
      id: user.id,
      username: user.username,
      name: user.name,
      email: userData.email,
      age: userData.age,
      gender: user.gender,
      password: userData.password,
      profilePicture: userData.image,
      bio: userData.bio,
      posts: user.posts,
    };
    changeUserList((prev) => prev.filter((user) => user.id !== temp.id));
    changeUserList((prev) => [...prev, temp]);
    changeLoggedUser(temp);
    navigate("/profile");
  };

  const [postList, changePostList] = useState(postl);

  const onSavePost = (post) => {
    const temp = {
      id: Math.random(),
      category: post.category,
      title: post.title,
      image: post.image,
      content: post.content,
      author: post.author,
    };
    console.log(temp);
    changePostList((prev) => [...prev, temp]);
    navigate("/");
  };

  const filteredPosts = (postList) => {
    return postList.filter((post) => post.author === loggedUser.username);
  };

  const changeLoggedUser = (u) => {
    setLoggedUser(u);
  };

  // useEffect(() => {
  //   if (!loggedUser) {
  //     navigate("/login");
  //     // navigate("/register");
  //   }
  // }, [loggedUser, navigate]);

  return (
    <div className="App">
      <Routes>

        {
          <Route
            path="/register"
            element={!loggedUser && <Register onSaveRegData={onSaveData}></Register>}
          ></Route>
        }
        {
          <Route
            path="/"
            index
            element={
              loggedUser ? (
                <Home loggedUser={loggedUser} posts={postList} catList={catList}> </Home>
              ) : (
                <Login
                  loggedUser={loggedUser}
                  changeLoggedUser={changeLoggedUser}
                  userList={userList}
                ></Login>
              )
            }
          ></Route>
        }
        <Route
          path="login"
          element={
            <Login
              loggedUser={loggedUser}
              changeLoggedUser={changeLoggedUser}
              userList={userList}
            ></Login>
          }
        ></Route>
        {loggedUser && (
          <Route
            path="about"
            element={<About loggedUser={loggedUser}></About>}
          ></Route>
        )}
        {loggedUser && (
          <Route
            path="contact"
            element={<Contact loggedUser={loggedUser}></Contact>}
          ></Route>
        )}
        {(
          <Route
            path="profile"
            element={loggedUser &&
              <Profile
                loggedUser={loggedUser}
                posts={postList}
                postfilter={filteredPosts}
              ></Profile>
            }
          ></Route>
        )}
        {(
          <Route
            path="post"
            element={loggedUser &&
              <Post loggedUser={loggedUser} onSavePostData={onSavePost} catList={catList} setCatList={setCatList}></Post>
            }
          ></Route>
        )}
        {(
          <Route
            path="edit"
            element={loggedUser &&
              <Edit
                loggedUser={loggedUser}
                onSaveEditData={onSaveEditData}
              ></Edit>
            }
          ></Route>
        )}
        {(
          <Route
            path="*"
            element={loggedUser && <NoPage loggedUser={loggedUser}></NoPage>}
          ></Route>
        )}

        {(
          <Route
            path="feed"
            element={loggedUser && <Feed posts={postList} loggedUser={loggedUser}></Feed>}
          ></Route>
        )}

        {(
          <Route
            path="story"
            element={loggedUser && <Story posts={postList} loggedUser={loggedUser}></Story>}
          ></Route>
        )}

        {/* {(
          <Route
            path="Books"
            element={loggedUser && <Books loggedUser={loggedUser} posts={postList}></Books>}
          ></Route>
        )}
        {(
          <Route
            path="Movies"
            element={loggedUser && <Movies loggedUser={loggedUser} posts={postList}></Movies>}
          ></Route>
        )}
        {(
          <Route
            path="Memes"
            element={loggedUser && <Memes loggedUser={loggedUser} posts={postList}></Memes>}
          ></Route>
        )}
        {(
          <Route
            path="Recipes"
            element={loggedUser &&
              <Recipes loggedUser={loggedUser} posts={postList}></Recipes>
            }
          ></Route>
        )}
        {(
          <Route
            path="Sports"
            element={loggedUser && <Sports loggedUser={loggedUser} posts={postList}></Sports>}
          ></Route>
        )} */}
      </Routes>
    </div>
  );
}

export default App;
