<template>
  <div id="header">
    <div>
      <h1>Natuurkunde</h1>
    </div>
    <div id="balloon">Hoe maak ik een evenwichtig schoolexamen?</div>
  </div>
</template>

<style lang="scss">

#header {
  display: flex;
  justify-content: space-between;
  margin-bottom:20px;

  #balloon {
    position: relative;
    font-size:14px;
    color: $primary-color;
    background-color: $secondary-color;
    border-radius: 50px;
    padding: 11px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 40%;
      border: 10px solid transparent;
      border-top-color: $secondary-color;
      border-bottom: 0;
      border-left: 0;
      margin-left: -20.5px;
      margin-bottom: -10px;
    }
  }
}
</style>