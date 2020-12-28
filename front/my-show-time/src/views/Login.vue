<template>
    <div class="row login">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form action="/action_page.php">
          
            <h1>Login here !</h1>
            <hr />
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              required
            />

            <input
              type="password"
              placeholder="Password"
              name="psw"
              id="psw"
              required
            />
            <hr />

            <div class="connexion">
                <button type="submit" class="btn btn-info">Login</button>
            </div>
            
        </form>
        </div>

          <div class="signin">
            <p>Not already registered ? <a href="/registration">Register</a></p>
          </div>
        
      </div>


</template>

<script>
export default {
    
}
</script>

<style src='./app.css'>

</style>
