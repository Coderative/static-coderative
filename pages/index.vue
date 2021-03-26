<template>
  <section class="bg-yellow mx-2 md:mx-64 px-8 md:px-24 py-4">
    <section
      id="top-content"
      class="flex flex-wrap justify-center items-center md:items-start md:content-start pt-12 pb-4"
    >
      <h1 class="md:flex-1 font-karla uppercase text-4xl md:text-9xl font-bold">
        Coderative
      </h1>
      <div class="justify-self-end">
        <a
          href="https://github.com/Coderative/"
          class="flex flex-wrap justify-center items-center text-center"
        >
          <img
            src="/logo-github-octocat.png"
            alt="link to code source of coderative logo-github-octocat"
          />
          <span class="text-xs w-full">Github Coderative</span></a
        >
      </div>
    </section>

    <section
      id="main-content"
      class="w-full md:w-4/5 my-2 md:my-12 text-1xl md:text-6xl font-inconsolata font-normal"
    >
      <p id="paragraph-1" class="pb-2 md:pb-8">
        Nous sommes un collectif de
        <span class="font-bold">développeurs</span>, de
        <span class="font-bold">designers</span> et d’<span class="font-bold"
          >entrepreneurs</span
        >
        expérimentés.
      </p>
      <p id="paragraph-2" class="pt-2 md:pt-8 pb-4">
        Nous développons une
        <span class="font-bold text-blue">méthode agile</span> de
        <span class="font-bold">conception</span> et de
        <span class="font-bold">développement</span> d'<span class="font-bold"
          >applications métiers</span
        >.
      </p>
    </section>

    <section
      id="footer"
      class="flex flex-wrap justify-center w-full my-2 md:my-12"
    >
      <a
        href="mailto:contact@coderative.fr?subject=Prise de contact Coderative"
      >
        <button
          type="button"
          class="contact hover:bg-blue focus:outline-none focus:ring-8 focus:ring-inset focus:ring-black hover:outline-none hover:ring-8 hover:ring-inset hover:ring-black"
        >
          <span>Prendre contact</span>
          <!-- Heroicon name: solid/mail -->
          <svg
            class="hidden md:block ml-1 md:ml-3 -mr-1 h-20 w-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </button>
      </a>
      <div
        id="hashtags"
        class="w-full text-center font-inconsolata text-lg md:text-6xl my-4 md:my-12"
      >
        #CLEAN_ARCHITECTURE #TDD #REMOTE
      </div>

      <div
        id="copyright"
        class="w-full text-center font-inconsolata text-md md:text-2xl mt-4"
      >
        Copyright ©{{ year }} - CODERATIVE
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style>
.contact {
  @apply inline-flex items-center px-2 py-4 md:px-16 md:py-8 my-8 md:my-24 shadow-sm text-lg md:text-6xl uppercase font-karla font-bold text-yellow bg-black;
}
</style>
