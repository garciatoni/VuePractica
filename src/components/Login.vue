<template>
    <div>
        <form @submit.prevent="userLogin">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="text" class="form-control form-control-lg" v-model="email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <!-- <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link> -->
            <!-- </p> -->
        </form>
    </div>
</template>

<script>
import { auth} from "../firebasejs";
import { ref} from "vue";
import { useStore} from "vuex";

export default {
  
  setup() {
      let store = useStore();
      let email=ref("");
      let password=ref("");

     
     const userLogin = () => {
        console.log(email.value);
        console.log(password.value);
        auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {   
            console.log('entra login');
            store.commit("SetUser", email.value);     
        })
        .catch((error) => {
            console.log('error login '+error);
        });
    }


      return {
          email,
          password, 
          userLogin
      }

    }


}
</script>f

<style>
 #iniciarSesion{
     margin-top: 10px;
 }
</style>