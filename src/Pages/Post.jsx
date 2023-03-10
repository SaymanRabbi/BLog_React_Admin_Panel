import React, { useState } from 'react';
import { db } from '../firebase.init';
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const Post = () => { 
  const [file, setFile] = useState("");
  // console.log(file?.name);
const submitPost =async (e) => {
  e.preventDefault();
  const storage = getStorage();
  const storageRef = ref(storage);
  console.log(storageRef);
  const imageRef = storageRef.child(file?.name);
  await imageRef.put(file);
    const imageUrl = await imageRef.getDownloadURL();
    const tittle = e?.target.tittle.value;
    const dec = e?.target.dec.value
    const post = {
        tittle,
        dec,
        imageUrl,
        // file
    }
    try {
    
      const docRef = await addDoc(collection(db, "posts"), post);
     
      console.log("Document written with ID: ", docRef.id);
 } catch (error) {
      console.error("Error adding document: ", error);
    }
    
}
    return (
        <div>
            
            <div class="main-content">

        <div class="page-content">
        <div class="container-fluid">
            <form onSubmit={submitPost}>
                                    <div class="form-group">
                                      <label for="exampleFormControlInput1">Post Tittle</label>
                                      <input type="text" name='tittle' class="form-control" id="exampleFormControlInput1" placeholder="Something...."/>
                                    </div>
                                    <div class="form-group mb-2">
                                      <label for="exampleFormControlTextarea1">Post Content</label>
                                      <textarea name='dec' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <input type="file" name='img' class="form-control-file" id="exampleFormControlFile1" onChange={(e)=>setFile(
                                            e.target.files[0]
                                        ) }/>
                                      </div>
                                      <button 
                                      type="submit" class="btn btn-primary mt-2"
                                      >
                                           Submit
                                      </button>
                                  </form>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Post;