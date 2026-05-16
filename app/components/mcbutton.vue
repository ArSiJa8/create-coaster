<template>
  <button class="mc-button">
    <span class="mc-button-title">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.mc-button {
  /* CSS Resets für Standard-Browser-Buttons */
  outline: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  font-family: 'minecraftia', sans-serif;
  font-size: 16px;

  width: 100%;
  height: 40px;

  cursor: pointer;
  user-select: none;
  box-sizing: border-box;

  /* Äußerer schwarzer Minecraft-Rahmen */
  border: 4px solid #000000;
  background-color: #555555; /* Fallback */
}

.mc-button-title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  /* Minecraft Button-Grau (nativ nachgebaut) */
  background-color: #999999;
  color: #E0E0E0;

  /* Der legendäre Minecraft Textschatten */
  text-shadow: 2px 2px 0px #3F3F3F;

  /* Der innere 3D-Rahmen (oben/links hell, unten/rechts dunkel) */
  box-shadow: inset -4px -4px 0px #373737, inset 4px 4px 0px #FFF;
}

/* Hover-Zustand (Maus bewegt sich darüber) */
.mc-button:hover .mc-button-title {
  background-color: #7a82e6; /* Das typische Minecraft-Blauviolett */
  color: #FFFF55; /* Klassischer gelber Minecraft-Hovertext */
  text-shadow: 2px 2px 0px #3F3F15;

  /* Innerer Rahmen passt sich farblich dem Hover an */
  box-shadow: inset -4px -4px 0px #2a2e61, inset 4px 4px 0px #b0b6ff;
}

/* Active-Zustand (Während der Button gedrückt gehalten wird) */
.mc-button:active .mc-button-title {
  /* Beim Klicken invertiert sich der 3D-Schatten im Originalspiel */
  box-shadow: inset 4px 4px 0px #373737, inset -4px -4px 0px #FFF;
  padding-top: 4px;
}
</style>