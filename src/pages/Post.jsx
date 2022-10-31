import React, { useState } from "react";
import classes from "./Post.module.css";
import Navbar from "../components/Navbar";

function Post({loggedUser, onSavePostData}) {
    const [formData, setFormData] = useState({
        category: "",
        title: "",
        image: "",
        content: "",
        author: loggedUser,
    })

    const formSubmitHandler = (e) => {
        e.preventDefault();
        onSavePostData(formData);
    }

    
  return (<div><Navbar loggedUser={loggedUser}></Navbar>
  <div className={`${classes.body}`}>

<div className={`${classes.container}`}>

        <div className={`${classes.containermd} container-md ${classes.containsform}`}>
            <form onSubmit={formSubmitHandler}>
                <div className="row">
                    <div className="col-6 col-md-4">
                        <select className={`form-select ${classes.formselect}`} name="category" aria-label="Default select example" value={formData.category} onChange={(e)=> setFormData(prev => ({...prev, category: e.target.value}))} required>
                            <option defaultValue>Select a category</option>
                            <option value="Books">Books</option>
                            <option value="Movies">Movies</option>
                            <option value="Memes">Memes</option>
                            <option value="Recipes">Recipes</option>
                            <option value="Sports">Sports</option>
                            <option value="other"> New Category</option>
                        </select>
                    </div>
                    
                    <div className="col-6 col-md-4">
                        <div className={`form-floating mb-3 ${classes.hidden} hidcat`}>
                            <input type="text" name="newcategoryname" className={`form-control ${classes.formcontrol}`} id="floatingInput" placeholder="Title" autoComplete="off"/>
                            <label htmlFor="floatingInput">Category name</label> 
                        </div>
                    </div>
                    <div className="col-6 col-md-4 text-center">
                        <div className={`${classes.fileinput} ${classes.hidden}`}>
                            <input type="file" name="newcategorypic" id="category-image" className={`${classes.file}`}/>
                            <label className={`${classes.lab}`} htmlFor="category-image">Category image</label>
                        </div>
                    </div>
                  </div>

    
                <p className={`${classes.p}`}>
                    <div className="row mb-3">
                        <div className={`${classes.fileinput}`}>
                            <input type="file" name="postimage" id="post-image" className={`${classes.file}`} onChange={(e)=> setFormData(prev => ({...prev, image: URL.createObjectURL(e.target.files[0])}))}/>
                            <label className={`${classes.lab}`} htmlFor="post-image">Post image</label>
                        </div>   
                    </div>
                </p>
    
    
                <p className={`${classes.p}`}>
                    <div className="form-floating mb-3">
                        <input type="text" className={`form-control ${classes.formcontrol}`} name="posttitle" placeholder="posttitle" id="floatingInput" autoComplete="off" value={formData.title} onChange={(e)=> setFormData(prev => ({...prev, title: e.target.value}))} required />
                        <label htmlFor="floatingInput">Post Title</label>
                    </div>
                </p>
                
    
                <p className={`${classes.p}`}>
                    <div className="form-floating">
                        <textarea className={`form-control ${classes.formcontrol}`} name="postcontent" placeholder="content" id="floatingTextarea2" style={{height: "100px required"}} value={formData.content} onChange={(e)=> setFormData(prev => ({...prev, content: e.target.value}))}></textarea>
                        <label htmlFor="floatingTextarea2">Content</label> 
                    </div>
                </p>
    
                <p className={`${classes.p}`}>
                    <button type="submit" className={`btn ${classes.btn}`}>Post</button>
                </p>
                
            </form>
        </div>
    </div>
{/* 

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper --> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"></script>

    <script src="post.js"></script>

    {/* <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous"></script>
    --> */}
  </div>
  </div>);
}

export default Post;