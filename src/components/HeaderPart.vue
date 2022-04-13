<template>
  <div id="header">
    <div>
      <h1>Natuurkunde</h1>
    </div>
    <div id="btn-container">
      <v-btn color="#153a4d">
        <v-icon dark left>mdi-plus</v-icon>Schoolexamen
      </v-btn>
    </div>
    <div id="balloon">Hoe maak ik een evenwichtig schoolexamen?</div>
  </div>
</template>

<style lang="scss">

#header {
  display: flex;
  margin-bottom:20px;

  #btn-container {
    flex:1;
    margin-left:10px;
  }

  #balloon {
    width: 320px;
    position: relative;
    font-size:14px;
    color: $primary-color;
    background-color: $tertiary-color;
    border-radius: 50px;
    padding: 11px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 40%;
      border: 10px solid transparent;
      border-top-color: $tertiary-color;
      border-bottom: 0;
      border-left: 0;
      margin-left: -20.5px;
      margin-bottom: -10px;
    }
  }
}
</style>