import './App.css';

import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


function App() {
  const [user, setUser] = useState();

  async function getUserInfo() {
    const UserInfo = await Auth.currentSession()
    setUser(UserInfo.idToken.payload);
  }
  window.onload=function(){
    getUserInfo()
  }

  var callAPI = ()=>{
    const inp = document.getElementById('UpFile')
    const formData = new FormData()
    if(inp.files[0]==null){
        alert('アップロードファイルを選択してください。')
        return;
    }
    formData.append('myFile', inp.files[0])
    var fileName = inp.files[0].name;
    var myHeaders = new Headers();
    myHeaders.append("Content-type", "multipart/form-data");
    var requestOptions = {
        limits:{fileSize: '1gb'},
        method: 'POST',
        body: formData,
        headers: myHeaders,
        mode: 'no-cors'
    };
    // make API call with parameters and use promises to get response
    fetch("https://uxver7s3oa.execute-api.ap-northeast-1.amazonaws.com/dev", requestOptions);
    alert('リクエストを受け付けました。結果はメールをご確認ください。')
}



  return (
    <div className="App">
      <AmplifyAuthenticator>
       <header className="App-header">
            <div>ログインEmail : {user ? user.email : "No Data"}</div>

          <AmplifySignOut id='signOutButton'/>
          <h4>3Sから問い合わせデータCSVファイルをアップロードしてください。</h4>
          <input type="file" id="UpFile"></input>
          <br></br>
          <button id='uploadButton' type="button" onClick={() => callAPI()}>ファイル アップロード</button>
        </header>
      </AmplifyAuthenticator>


    </div>



  );
}

export default App;