<script setup lang="ts">
import NavigationHeader from '../components/NavigationHeader.vue'
</script>

<template>
  <div class="contact flex flex-col h-screen">
    <div class="h-12">
      <NavigationHeader />
    </div>

    <div class="flex flex-1 items-center">
      <div class="content-wrapper">
        <div class="flex flex-row mb-20">
          <div class="basis">
            <p>
              Cassina de’ Pecchi (MI)<br />
              Italia
            </p>
          </div>
        </div>

        <div class="flex flex-row mb-8">
          <div class="basis">
            <p class="mb-5">
              <a href="mailto:info@nubearchitetture.com">info@nubearchitetture.com</a>
            </p>
            <p>
              <a href="https://www.instagram.com/nubearchitetture/" target="_blank">instagram</a
              ><br />
              <a href="https://www.facebook.com/nubearch/" target="_blank">facebook</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
