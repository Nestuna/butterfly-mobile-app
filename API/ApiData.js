import { IP } from './IP.json'

const url = IP + '/api/'

export async function getConversation(access_id) {
   console.log(url)
   const response = await fetch(url + `conversation/?access_id=${access_id}`, {
      method: 'GET',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
   })
   const json = await response.json();
   return json;
}

export async function getConversationList(username) {
   const response = await fetch(url + `conversationuser/?username=${username}`, {
      method: 'GET',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
   })
   const json = await response.json();
   return json;
}

export async function setConversation(form) {
    const response = await fetch(url + "conversation/", {
       method: 'POST',
       headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(form)
    })
    const text = await response.text();
    return text;
}

export async function deleteConversation(access_id) {
   const response = await fetch(url + "conversation/", {
      method: 'DELETE',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(access_id)
   })
   const text = await response.text();
   return text;
}


export async function putConversation(form) {
    const response = await fetch(url + "conversation/", {
       method: 'PUT',
       headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(form)
    })
    const text = await response.text();
    return text;
}

export async function getMessagesFromApi(access_id) {
   const response = await fetch(url + "conversation/message/?access_id=" + access_id, {
      method: 'GET',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
   })
   if (response.status == 400) {
      return undefined
   }
   const json = await response.json();
   return json;
}

export async function postMessageToApi(form) {
   const response = await fetch(url + "conversation/message/", {
      method: 'POST',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
   })
   const text = await response.text();
   return text;
}

export async function addUser(form) {
   const response = await fetch(url + "login/", {
      method: 'POST',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
   })
   if (response.status >= 400) {
      return false;
   }
   return true;
}
