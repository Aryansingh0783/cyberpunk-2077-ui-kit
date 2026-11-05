/**
 * Cyberpunk 2077 Engine FX Library
 * Reusable agent module for interactive audio, parallax, text scrambling, and HUD layout handlers.
 */
(function(window, document) {
  'use strict';

  var CyberAudio = {
    ctx: null,
    init: function() {
      if (!this.ctx) {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.ctx = new AudioContext();
      }
    },
    playClick: function() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        var osc = this.ctx.createOscillator();
        var gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(340, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.045);
        gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.045);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.045);
      } catch (e) {}
    }
  };

  var CyberScramble = {
    chars: '!<>-_\\/[]{}â€”=+*^?#_010101',
    scramble: function(element, duration) {
      if (!element) return;
      var original = element.getAttribute('data-original-text') || element.textContent;
      element.setAttribute('data-original-text', original);
      var iteration = 0;
      var total = duration || 400;
      var stepTime = 30;
      var maxSteps = total / stepTime;
      clearInterval(element._scrambleTimer);
      element._scrambleTimer = setInterval(function() {
        element.textContent = original.split('').map(function(char, idx) {
          if (idx < (iteration / maxSteps) * original.length) {
            return original[idx];
          }
          return CyberScramble.chars[Math.floor(Math.random() * CyberScramble.chars.length)];
        }).join('');
        iteration++;
        if (iteration >= maxSteps) {
          clearInterval(element._scrambleTimer);
          element.textContent = original;
        }
      }, stepTime);
    }
  };

  var CyberParallax = {
    init: function(selector, intensity) {
      var elements = document.querySelectorAll(selector || '.cp-parallax, [data-parallax]');
      if (!elements.length) return;
      var factor = intensity || 15;
      window.addEventListener('mousemove', function(e) {
        var x = (e.clientX / window.innerWidth - 0.5) * factor;
        var y = (e.clientY / window.innerHeight - 0.5) * factor;
        elements.forEach(function(el) {
          var layerIntensity = parseFloat(el.getAttribute('data-parallax-depth')) || 1.0;
          el.style.transform = 'translate(' + (-x * layerIntensity) + 'px, ' + (-y * layerIntensity) + 'px)';
        });
      }, { passive: true });
    }
  };

  var CyberScroll = {
    init: function() {
      var bar = document.getElementById('cpScrollProgress');
      var topBtn = document.getElementById('cpScrollTop');
      var nav = document.querySelector('.cp-nav');

      window.addEventListener('scroll', function() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (bar && height > 0) {
          bar.style.width = ((winScroll / height) * 100) + '%';
        }
        if (nav) {
          if (winScroll > 40) {
            nav.classList.add('is-scrolled');
          } else {
            nav.classList.remove('is-scrolled');
          }
        }
        if (topBtn) {
          if (winScroll > 400) {
            topBtn.classList.add('visible');
          } else {
            topBtn.classList.remove('visible');
          }
        }
      }, { passive: true });

      if (topBtn) {
        topBtn.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    }
  };

  var CyberVideo = {
    initAutoplay: function(selector) {
      var videos = document.querySelectorAll(selector || 'video[autoplay]');
      videos.forEach(function(v) {
        v.muted = true;
        var p = v.play();
        if (p !== undefined) {
          p.catch(function() {
            document.addEventListener('click', function() { v.play(); }, { once: true });
          });
        }
      });
    }
  };

  var CyberpunkKit = {
    audio: CyberAudio,
    scramble: CyberScramble,
    parallax: CyberParallax,
    scroll: CyberScroll,
    video: CyberVideo,
    init: function(options) {
      options = options || {};
      
      // 1. Attach hover clicks to interactive elements
      var clickSelectors = options.clickSelectors || '.cp-btn, .cp-card, a, button';
      document.querySelectorAll(clickSelectors).forEach(function(el) {
        el.addEventListener('mouseenter', function() {
          CyberAudio.playClick();
        }, { passive: true });
      });

      // 2. Attach text scramble on glitch elements
      var glitchSelectors = options.glitchSelectors || '.cp-glitch, .cp-scramble';
      document.querySelectorAll(glitchSelectors).forEach(function(el) {
        el.addEventListener('mouseenter', function() {
          CyberScramble.scramble(el, 350);
        });
      });

      // 3. Auto-initialize parallax on .cp-parallax layers
      CyberParallax.init('.cp-parallax, [data-parallax]');

      // 4. Initialize scroll, sticky nav & progress
      CyberScroll.init();

      // 5. Initialize video autoplays
      CyberVideo.initAutoplay();
    }
  };

  window.CyberpunkKit = CyberpunkKit;

  document.addEventListener('DOMContentLoaded', function() {
    CyberpunkKit.init();
  });
})(window, document);