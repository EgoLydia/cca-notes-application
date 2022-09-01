<template>
  <div>
    <div class="container">
      <section>
        <h1>The simplest way to keep notes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          doloribus enim soluta quas. Consequatur dolorum aliquid vitae neque
          sapiente libero pariatur. Placeat asperiores aliquid nesciunt.
        </p>
        <button><router-link to="/SignupPage">Sign up now</router-link></button>
        <div>
          <img src="@/assets/Checklist.jpg" alt="checklist" />
        </div>
      </section>
      <section>
        <h1>Create free notes & collaborate with your team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          doloribus enim soluta quas. Consequatur dolorum aliquid vitae neque
          sapiente libero pariatur. Placeat asperiores aliquid nesciunt.
        </p>
        <img src="@/assets/team.jpg" alt="team collaboration" />
      </section>
      <section>
        <h1>Comprehensive underneath, simple on the surface</h1>
        <div class="info">
          <div>
            <h3>Use it everywhere</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              doloribus enim soluta quas. Consequatur dolorum aliquid vitae
              neque sapiente
            </p>
          </div>
          <div>
            <h3>Stay organised</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              doloribus enim soluta quas. Consequatur dolorum aliquid vitae
              neque sapiente
            </p>
          </div>
          <div>
            <h3>Work together</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              doloribus enim soluta quas. Consequatur dolorum aliquid vitae
              neque sapiente
            </p>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <p>Created by CCA Frontend Cohort</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
img {
  max-width: 400px;
  margin: 0 auto;
}
.info {
  margin-top: 16px;
}
h1 {
  font-size: 23px;
  margin: 0 auto;
}
section {
  margin-bottom: 64px;
  text-align: center;
}
.container {
  max-width: 1120px;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: #000;
}
button {
  padding: 15px;
  background-color: #e4fff3;
  border-radius: 5px;
  border: none;
}
p {
  padding: 10px;
}
footer {
  background-color: #e4fff3;
  padding: 20px;
  text-align: center;
}
@media (min-width: 768px) {
  p {
    padding: 0px;
  }
  .info {
    display: flex;
    gap: 20px;
  }
  h1 {
    font-size: 36px;
    width: 500px;
  }
  img {
    max-width: 500px;
  }
  .container {
    margin-top: 150px;
  }
}
</style>
