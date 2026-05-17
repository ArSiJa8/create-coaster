<script setup>
import { computed } from 'vue'

const colorMode = useColorMode()


const darkmode = computed(() => colorMode.value === 'dark')


const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}


const handleDiscordClick = () => {
  window.open('https://discord.gg/68x6uU3s', '_blank')
}

const handleModrinthClick = () => {
  alert('Mod not released yet, join the Discord for Updates!')
}
</script>

<template>
  <ClientOnly>
    <header class="hero-section" :class="{ 'light-mode': !darkmode }">

      <button
          class="mc-button mc-toggle-btn"
          @click="toggleTheme"
          :aria-label="darkmode ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <span class="mc-button-title toggle-title">
          <Icon
              :key="darkmode"
              :name="darkmode ? 'line-md:moon-filled-alt-to-sunny-filled-loop-transition' : 'line-md:moon-filled-alt-loop'"
              class="toggle-icon"
          />
        </span>
      </button>

      <div class="hero-content">
        <h1 class="hero-title">Create Coasters Simulated</h1>
        <h2 class="hero-subtitle">Build Theme Parks with realistic physics.</h2>

        <div class="hero-buttons">
          <button class="mc-button mc-button-discord" @click="handleDiscordClick">
            <span class="mc-button-title">
              <img src="/images/discord-logo.png" alt="Discord" class="discord-icon-png" />
              <span class="button-text">Join Discord</span>
            </span>
          </button>

          <button class="mc-button mc-button-modrinth" @click="handleModrinthClick">
            <span class="mc-button-title">
              <Icon name="simple-icons:modrinth" class="modrinth-icon" />
              <span class="button-text">Modrinth</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  </ClientOnly>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

/* --- MINECRAFT BUTTON BASIS --- */
.mc-button {
  outline: none;
  border: none;
  background: none;
  padding: 0;
  font-family: 'minecraftia', monospace;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
}

.mc-button-title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: #FFFFFF;
}

/* Gezielte Korrektur für den Text */
.button-text {
  transform: translateY(5px);
}


/* --- DISCORD BUTTON --- */
.mc-button-discord {
  max-width: 50%;
  min-width: 40%;
  height: 44px;
}

.mc-button-discord .mc-button-title {
  gap: 12px;
  background-color: #5865F2;
  text-shadow: 2px 2px 0px #242A66;
  box-shadow: inset -4px -4px 0px #3C45A6, inset 4px 4px 0px #8EA1FF;
}

.mc-button-discord:hover .mc-button-title {
  background-color: #4752C4;
  text-shadow: 2px 2px 0px #202452;
  box-shadow: inset -4px -4px 0px #2B327A, inset 4px 4px 0px #7688FA;
}

.mc-button-discord:active .mc-button-title {
  box-shadow: inset 4px 4px 0px #2B327A, inset -4px -4px 0px #7688FA;
}

.mc-button-discord:active .button-text {
  transform: translateY(9px);
}

.discord-icon-png {
  width: 26px;
  height: 26px;
  object-fit: contain;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

.mc-button-discord:active .discord-icon-png {
  transform: translateY(4px);
}


/* --- MODRINTH BUTTON (GREEN) --- */
.mc-button-modrinth {
  max-width: 50%;
  min-width: 40%;
  height: 44px;
}

.mc-button-modrinth .mc-button-title {
  gap: 12px;
  background-color: #00AF5C;
  text-shadow: 2px 2px 0px #004D28;
  box-shadow: inset -4px -4px 0px #007A40, inset 4px 4px 0px #33C482;
}

.mc-button-modrinth:hover .mc-button-title {
  background-color: #00964F;
  text-shadow: 2px 2px 0px #003B1F;
  box-shadow: inset -4px -4px 0px #006635, inset 4px 4px 0px #2EB274;
}

.mc-button-modrinth:active .mc-button-title {
  box-shadow: inset 4px 4px 0px #006635, inset -4px -4px 0px #2EB274;
}

.mc-button-modrinth:active .button-text {
  transform: translateY(9px);
}

.modrinth-icon {
  width: 22px;
  height: 22px;
  color: #ffffff;
  display: block;
}

.mc-button-modrinth:active .modrinth-icon {
  transform: translateY(4px);
}


/* --- THEME TOGGLE BUTTON --- */
.mc-toggle-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  z-index: 9999;
}

.mc-toggle-btn .toggle-title {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #999999;
  text-shadow: none;
  box-shadow: inset -4px -4px 0px #4a4a4a, inset 4px 4px 0px #dedede;
}

.toggle-icon {
  width: 22px;
  height: 22px;
  color: #ffffff;
  display: block;
}

.mc-toggle-btn:hover .toggle-title {
  background-color: #7a7a7a;
  box-shadow: inset -4px -4px 0px #333333, inset 4px 4px 0px #bcbcbc;
}

.mc-toggle-btn:active .toggle-title {
  box-shadow: inset 4px 4px 0px #333333, inset -4px -4px 0px #bcbcbc;
}

.mc-toggle-btn:active .toggle-icon {
  transform: translateY(4px);
}


/* --- LAYOUTS & HERO SECTIONS --- */
.hero-buttons {
  display: flex;
  gap: 20px;
  width: 100%;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 1;

  background: linear-gradient(
      rgb(from var(--neutral-900) r g b / 0.5),
      rgb(from var(--neutral-900) r g b / 0.5)
  ),
  url(/images/mountainnight.png) no-repeat center center/cover;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;

  background: linear-gradient(
      rgb(from var(--neutral-900) r g b / 0.5),
      rgb(from var(--neutral-900) r g b / 0.5)
  ),
  url(/images/mountainday.png) no-repeat center center/cover;
}

.hero-section.light-mode::before {
  opacity: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 50%;
  margin-left: 5vw;
}

.hero-title {
  font-size: 5vw;
  font-weight: 800;
  margin-bottom: 20px;
  color: var(--neutral-100);
}

.hero-subtitle {
  font-size: 1.25vw;
  margin-bottom: 35px;
}


/* --- RESPONSIVE MEDIA QUERIES --- */
@media (max-width: 768px) {
  .hero-section {
    padding: 0 24px;
    justify-content: center;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
    margin-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    font-size: 32px;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .hero-subtitle {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 40px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 290px;
    align-items: center;
  }

  .mc-button-discord,
  .mc-button-modrinth {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 48px;
  }
}
</style>