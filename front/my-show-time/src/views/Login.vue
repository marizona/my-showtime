<template>
    <div class="row login">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form action="/action_page.php">
          
            <h1>Connectez-vous !</h1>
            <hr />
            <input
              type="text"
              placeholder="Email/username"
              name="email"
              id="email"
              required
            />

            <input
              type="password"
              placeholder="Mot de passe"
              name="psw"
              id="psw"
              required
            />
            <hr />

            <div class="connexion">
                <button type="submit" class="btn btn-info">Se connecter</button>
            </div>
            
        </form>
        </div>

          <div class="signin">
            <p>Vous n'avez pas encore de compte ? <a href="#">S'inscrire</a></p>
          </div>
        
      </div>


</template>

<script>
export default {
    
}
</script>

<style src='./app.css'>

</style>
