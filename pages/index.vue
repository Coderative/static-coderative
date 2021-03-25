<template>
  <section class="container h-screen w-full bg-yellow">
    <div class="flex flex-col justify-between">
      <h1 class="font-karla uppercase text-4xl md:text-9xl font-bold">
        Coderative
      </h1>
      <div class="my-24 text-1xl md:text-6xl font-inconsolata">
        <span>Nous sommes un collectif de développeurs, </span>
        <br class="hidden md:visible" />
        <span>designers et d’entrepreneurs expérimentés.</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
