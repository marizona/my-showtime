<template>
  <div class="row register">
    <div class="col-md-3"></div>
    <div class="col-md-6 formRegister">
      <form action="/action_page.php">
       
            <h1>Inscrivez-vous !</h1>
            <input
              type="text"
              placeholder="Nom"
              name="email"
              id="email"
              required
            />

            <input
              type="text"
              placeholder="Username"
              name="email"
              id="email"
              required
            />

            <input
              type="text"
              placeholder="Email"
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

            <input
              type="password"
              placeholder="Confirmation du mot de passe"
              name="psw-repeat"
              id="psw-repeat"
              required
            />
          <div class="checkbox">
            <h4 class="titre">Je suis :</h4>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">Freelancer</label>
            </div>

            
            <div class="form-check">
              <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">Entrepreneur</label>
            </div>
           </div>
          
          <div class="mentions col-lg-12 col-sm-6">
            <p>
              En vous inscrivant, vous accepter nos
              <a href="#">Termes & Conditions</a> et
              <a href="#">Politique de confidentialité</a>.
            </p>
          </div>
            

          <div class="connexion">
            <button type="submit" class="btn btn-info">S'enregistrer</button>
          </div>
        </form>


            <p>Vous avez déjà un compte? 
              <a href="#">Connectez-vous</a>.</p>


        
      </div>
  </div>



</template>

<script>


export default {
  name: 'registration',
  components: {
    
  }
}
</script>
