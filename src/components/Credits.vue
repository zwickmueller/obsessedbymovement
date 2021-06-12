<template lang="html">
  <div class="credits text">
    <div class="columns">
      <div class="column is-narrow" style="padding-right: 1em">
        <p> <a href="http://philippbohnen.de/" target="_blank">Philipp Bohnen</a></p>
        <p> <a href="https://hannahbohnen.de/" target="_blank">Hannah Bohnen</a></p>
        <p> Christoph Franke</p>
        <p> <a href="https://no-talent.org/" target="_blank">No Talent Studio</a></p>
        <p> Alex Williamson</p>
        <p> <a href="http://www.arturneufeld.com" target="_blank">Artur Neufeld</a></p>
        <p> Peggy Schoenegge</p>

      </div>
      <div class="column">
        <p> Violin</p>
        <p> Artistic Concept <span class="hide-on-mobile">„Obsession“</span></p>
        <p> Sound Engineer</p>
        <p> Design</p>
        <p> 3D Model</p>
        <p> Website</p>
        <p> Text</p>

      </div>
    </div>


    <p style="padding-top: 1em"> Recorded in the Chamber Music Hall of the Berliner Philharmonie</p>
    <p> November 6, 2020</p>


    <p class="copyright">Our thanks to:<br> Alex Williamson, Cornelia Bohnen, Firma Knierim Yachtbau, Stadtgallerie Kiel, Muthesius Kunsthochschule, Ernst Barlachhaus Hamburg, Prof.in Elisabeth Wagner, Designstudio No Talent and <a
        href="https://abcdinamo.com/" target="_blank">Dinamo Fonts</a>
      for sponsoring the Monument Grotesk Webfont. <br /><br> ©
      2021,
      All rights reserved. Hannah Bohnen, Philipp Bohnen.</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.text {
    font-size: 1.3rem;
    letter-spacing: -0.1px;
    line-height: 1.4;
}
a {
    color: inherit;
    text-decoration-color: transparent;
    transition: all 0.1s ease;
    text-underline-offset: 0.2em;
    &:hover {
        color: white;
        text-decoration-color: white;
        text-decoration: underline;

    }
}
.credits {
    .column {
        padding: 0;
    }
    flex: unset;
    justify-self: self-end;
    font-family: 'Monument Grotesk';
    p {
        padding-bottom: 0;
        font-size: small;
    }
    p.copyright {
        // margin-left: 1em;
        // font-size: small;
        // line-height: 1;
        padding-top: 1rem;
    }
}
</style>
