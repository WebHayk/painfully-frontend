<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        Logo
      </div>

      <nav class="nav" :class="{ open: isMenuOpen }">
        <ul>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <v-btn @click="handleLoginRedirect" color="primary" class="hero__cta">Get Started</v-btn>
      </nav>

      <v-btn
          rounded
          class="menu-toggle"
          @click="toggleMenu"
      >
        <span :class="{ 'open': isMenuOpen }"></span>
      </v-btn>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const isMenuOpen = ref(false);

const handleLoginRedirect = () => {
  router.push({name: "UserLogin"});
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style lang="scss" scoped>
.header {
  background: #FDF6F0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo img {
    height: 40px;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    ul {
      display: flex;
      gap: 1.5rem;
      list-style: none;
      padding: 0;
      margin: 0;

      li a {
        text-decoration: none;
        color: #333333;
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
          color: #93755e;
        }
      }
    }
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 10;

    span {
      display: block;
      width: 25px;
      height: 2px;
      background: #333;
      position: relative;
      transition: all 0.3s;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 2px;
        background: #333;
        transition: all 0.3s;
      }

      &::before {
        top: -8px;
      }

      &::after {
        top: 8px;
      }

      &.open {
        background: transparent;

        &::before {
          transform: rotate(45deg);
          top: 0;
        }

        &::after {
          transform: rotate(-45deg);
          top: 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .nav {
      z-index: 15;
      position: absolute;
      top: 68px;
      right: 0;
      background: #FDF6F0;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      padding: 1rem;
      transform: translateY(-20px);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;

      &.open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }

      ul {
        flex-direction: column;
        width: 100%;
        gap: 1rem;

        li a {
          padding: 0.5rem 0;
        }
      }

      .get-started {
        margin-top: 1rem;
        width: 100%;
      }
    }

    .menu-toggle {
      display: block;
    }
  }
}
</style>
