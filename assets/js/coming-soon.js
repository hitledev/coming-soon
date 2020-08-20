/* __ Background Particle __ */
var pageParticle = $('#page-particle');
if (pageParticle.length) {

    pageParticle.particleground({
        dotColor: pageParticle.data("dot-color"),
        lineColor: pageParticle.data("line-color")
    });
}
