<template>
  <body class ="box ">
      <div class='Login_container'>
    <div class = 'multiple_days'>
        <h2>Login Credentials</h2>
      <form @submit.prevent="serverside">
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="Login">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    <div class="form-group">
    <label for="exampleInputPassword1"  >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="Password">
    </div>

  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
            
    </div> 

    </div>
  <div class='container'>
    <div class = 'multiple_days'>
        <h2>Multi-Day</h2>
        <p style= "text-align: left;">First Day</p>        
            <select class="custom-select custom-select-lg mb-1">
                <option selected value="111">A - value</option>               
                <option value="112">B - value</option>
                <option value="113">C - value</option>
            </select> 
            <p style= "text-align: left;">Days Between</p>        
            <select class="custom-select custom-select-lg mb-1">
                <option value="111">A - value</option>
                <option value="112">B - value</option>
                <option value="113">C - value</option>
            </select> 
            <p style= "text-align: left;">Last Day</p>        
            <select class="custom-select custom-select-lg mb-1">
                <option value="111">A - value</option>
                <option value="112">B - value</option>
                <option value="113">C - value</option>
            </select> 
    </div>
    <div class = 'two_days'>
        <h2>Two Days</h2>
        <p>First Day</p>        
        <select class="custom-select custom-select-lg mb-1">
            <option value="111">A - value</option>
            <option value="112">B - value</option>
            <option value="113">C - value</option>
        </select> 
      
        <p>Last Day</p>        
        <select class="custom-select custom-select-lg mb-1">
            <option value="111">A - value</option>
            <option value="112">B - value</option>
            <option value="113">C - value</option>
        </select> 
    </div>
    <div class = 'single_day'>
        <h2>One Day</h2>
        <p>First Day</p>        
        <select class="custom-select custom-select-lg mb-1">
            <option value="111">A - value</option>
            <option value="112">B - value</option>
            <option value="113">C - value</option>
        </select> 

       
    </div>

  </div>


 


</body>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      Login: '',
      Password:'',
      FirstDay:'',
      TwoDays:'',
      MultiDays:''

    }
  },
  methods:{
 serverside:function(){
   let fart = this.Login;
   axios({
     method:"POST",
     url:'http://localhost:3000/login',
     headers:{"Content-Type": "application/json",},
     data:{
     "login":this.Login,
     "password":this.Password
   }
   }).then(function(responce){
     console.log(responce);
   })
    console.log(this.Login,this.Password+'')
  }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
width: 80%;
text-align: center; 
display: grid;
grid-template-columns: 1fr 1fr;
margin: auto;
}
.Login_container{


  width: 100%;
  height: 100%;
  border: 3px solid green;
  position: relative;

}
.container{
display: grid;
grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
  height: 100%;
  border: 3px solid green;
  position: relative;
}
.multiple_days, .two_days{
 
    padding:10px;
}

.single_day{

padding:10px;
}
</style>
