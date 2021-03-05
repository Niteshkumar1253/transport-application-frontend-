export default function authHeader(){
    const user = JSON.parse(localStorage.getItem("userdetails"));
    

    if(user && user.accessToken){
        return { Authorization: 'Bearer '+user.accessToken};
    }else{
        return {};
    }
}