import React, {useState} from 'react';
import styled from 'styled-components'
import {Button, Input} from "@material-ui/core";


const UploadWrapper = styled.div`
  .closed{
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 250px;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
  padding: 5px 20px;
  position: fixed;
  bottom: 0;
  left: calc(50vw - 200px);
  background-color: white;
  transform: translateY(100%);
  transition: transform .35s ease-in-out;
  
  .file{
  padding: 5px 0;
  width: 100%;
  display: flex;
  
  .file__input{
  flex: 2;

  }
  .file__button{
  flex: 1;
  margin-left: 10px;
  
  }
  }
  
  .control{
  width: 100%;
  font-size: ${({theme}) => theme.font.size.s};
  }
  
  }
  
  .open{
  transform: translateY(0);
  }
  
  .btn{
  position: fixed;
  z-index: 666;
  left: 47vw;
  //right: 50px;
  bottom: 250px;
  width: 100px;
  height: 50px;
  background-color: white;
  border: 1px solid lightgrey;
  border-bottom: none;
  
  outline: none;
  transform: translateY(500%);
  transition: transform .35s ease-in-out;
  
  &:hover{
  cursor: pointer;
  background-color: #dbd8d8;
  }
  }
  
  .btnOpen{
  transform: translateY(0);
  }
  
  
  
  
`;


const PostUpload = ({username}) => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [progress, setProgress] = useState(0);
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    };

    const handleUpload = () => {
        // const uploadTask = storage.ref(`images/${image.name}`).put(image);
        //
        // uploadTask.on(
        //     "state_changed",
        //     (snapshot) => {
        //         const progrss = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
        //         setProgress(progrss);
        //     },
        //     (error) => {
        //         console.log(error);
        //         alert(error.message);
        //     },
        //     () => {
        //         storage.ref("images").child(image.name).getDownloadURL().then(url => {
        //             db.collection("posts").add({
        //                 timestapm: firebase.firestore.FieldValue.serverTimestamp(),
        //                 caption: caption,
        //                 imageURL: url,
        //                 username: username,
        //             });
        //             setProgress(0);
        //             setCaption('');
        //             setImage(null);
        //             setOpen(true);
        //         });
        //
        //     }
        // );
    };

    return (
        <UploadWrapper>
            <button className={open ? "btn" : "btn btnOpen"} onClick={handleOpen}>Post new content</button>
            <div className={open ? "closed" : "closed open"}>
                <progress className="control" value={progress} max="100"/>
                <Input className="control" value={title||''} type="text" placeholder="Enter a title..."
                       onChange={e => setTitle(e.target.value)}/>
                <Input className="control" value={caption||''} type="text" placeholder="Enter a caption..."
                       onChange={e => setCaption(e.target.value)}/>
                <Input className="control" value={desc||''} type="text" placeholder="Enter a long caption..."
                       onChange={e => setDesc(e.target.value)}/>
                <div className="file">
                    <Input className="control file__input" type="file" onChange={handleChange}/>
                    <Button className="control file__button" onClick={handleUpload}>Upload</Button>
                </div>
            </div>

        </UploadWrapper>
    );
};

export default PostUpload;
