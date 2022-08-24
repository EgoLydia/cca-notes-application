<template>
    <div class="sidebar" :class="{open: sideNavOpen}">
      <div class="documents">
        <h3>MY DOCUMENTS</h3>
        <button>+ New Document</button>
        <div class="document_list">
          <div>Bible Study</div>
          <div>Class Notes</div>
          <div>Random Thoughts</div>
        </div>
        <div class="modeToggle">
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        sideNavOpen:{
            type:Boolean
        }
    },
    setup(){
    }
}
</script>

<style scoped>
.sidebar{
  background:var(--color-900);
  padding:1rem 1.5rem;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  width:270px;
  transform:translateX(-270px);
  transition:var(--sidebar-transition);
  overflow: hidden !important;
  border:1px solid red;
}

.sidebar.open{
  transform: translateX(0);
}

.logo.mobile{
  padding:1rem 0;
}

.documents h3{
  color: var(--color-500, #000);
  font-weight: 500;
  font-size:14px;
  letter-spacing: 2px;
  margin-bottom:1rem;
}

.documents button {
  color:var(--color-100, #000dd2);
  background-color: var(--accent), #000333;
  border:none;
  border-radius:5px;
  width:100%;
  padding:1rem;
}

.documents button:hover{
  background: var(--accent-light, #ffdd11);
}

.document_list{
  padding:1.2rem 0;
}

.modeToggle{
  position:absolute;
  bottom:1.5rem;
}
</style>
<style>
.sidebar.open + .main{
  transform: translateX(270px);
}
</style>